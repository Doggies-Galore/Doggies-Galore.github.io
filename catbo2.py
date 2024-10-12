import os
import sys
import csv
import threading
import time
from datetime import datetime
from scapy.all import *
import subprocess

# Interfaces and channels configuration
interfaces = ["wlan1", "wlan2", "wlan3", "wlan4"]
channels = [1, 6, 11]
hop_interval = 0.1  # Interval to switch channels

# CSV file names
network_csv = "wifi_networks.csv"
device_csv = "detected_devices.csv"

# Data buffers
devices_buffer = {}  # {MAC: (RSSI, Channel, Timestamp, Interface)}
networks_buffer = {}  # {SSID: {signal_strength, noise, channel, timestamp, interface}}

# Ensure script runs with sudo privileges
def ensure_sudo():
    if os.geteuid() != 0:
        print("[*] Restarting with sudo...")
        os.execvp('sudo', ['sudo', 'python3'] + sys.argv)

# Set an interface to monitor mode
def enable_monitor_mode(interface):
    subprocess.run(["sudo", "ip", "link", "set", interface, "down"])
    subprocess.run(["sudo", "iwconfig", interface, "mode", "monitor"])
    subprocess.run(["sudo", "ip", "link", "set", interface, "up"])

# Set the channel for a Wi-Fi interface
def set_channel(interface, channel):
    subprocess.run(["sudo", "iwconfig", interface, "channel", str(channel)])

# Clear the console screen
def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

# Save buffered data to CSV
def save_to_csv():
    with open(network_csv, 'a', newline='') as net_file, open(device_csv, 'a', newline='') as dev_file:
        network_writer = csv.writer(net_file)
        device_writer = csv.writer(dev_file)

        # Write networks data
        for ssid, info in networks_buffer.items():
            network_writer.writerow([
                ssid, info['signal_strength'], info.get('noise', 'N/A'),
                info['channel'], info['timestamp'], info['interface']
            ])

        # Write devices data
        for mac, data in devices_buffer.items():
            device_writer.writerow([mac, data[0], data[1], data[2], data[3]])

    # Clear the buffers after writing
    networks_buffer.clear()
    devices_buffer.clear()

# Display detected devices and networks
def display_data():
    clear_screen()
    print("Detected Devices:")
    for mac, data in devices_buffer.items():
        print(f"MAC: {mac} | RSSI: {data[0]} dBm | Channel: {data[1]} | Interface: {data[3]}")

    print("\nNearby Networks:")
    for ssid, info in networks_buffer.items():
        print(f"SSID: {ssid} | RSSI: {info['signal_strength']} dBm | Noise: {info.get('noise', 'N/A')} | Channel: {info['channel']}")

# Packet handler
def packet_handler(packet, interface, channel):
    if packet.haslayer(Dot11):
        mac = packet.addr2
        if mac:
            # RSSI extraction
            rssi = packet[RadioTap].dBm_AntSignal if packet.haslayer(RadioTap) else None
            timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

            # Store device info in buffer
            devices_buffer[mac] = (rssi, channel, timestamp, interface)

        # Handle network SSID info from beacons or probe responses
        if packet.type == 0 and packet.subtype in (8, 5):  # Beacon/Probe Response
            ssid = packet.info.decode() if packet.info else "<Hidden>"
            noise = packet.getfieldval('dBm_noise') if hasattr(packet, 'dBm_noise') else 'N/A'

            # Store network info in buffer
            networks_buffer[ssid] = {
                'signal_strength': rssi, 'noise': noise,
                'channel': channel, 'timestamp': timestamp, 'interface': interface
            }

        display_data()  # Update console output

# Start sniffing on a given interface
def sniff_interface(interface):
    sniff(iface=interface, prn=lambda pkt: packet_handler(pkt, interface, current_channel[interface]), store=0)

# Channel hopping function
def hop_channels():
    while True:
        for interface in interfaces:
            for channel in channels:
                set_channel(interface, channel)
                current_channel[interface] = channel
                time.sleep(hop_interval)

# Periodically save buffered data to CSV
def periodic_save():
    while True:
        time.sleep(5)  # Save every 5 seconds
        save_to_csv()

# Main function
def main():
    ensure_sudo()

    # Enable monitor mode for each interface
    for interface in interfaces:
        enable_monitor_mode(interface)

    # Track current channels per interface
    global current_channel
    current_channel = {interface: channels[0] for interface in interfaces}

    # Start channel hopping thread
    channel_thread = threading.Thread(target=hop_channels)
    channel_thread.daemon = True
    channel_thread.start()

    # Start periodic save thread
    save_thread = threading.Thread(target=periodic_save)
    save_thread.daemon = True
    save_thread.start()

    # Start sniffing on all interfaces
    sniff_threads = []
    for interface in interfaces:
        thread = threading.Thread(target=sniff_interface, args=(interface,))
        sniff_threads.append(thread)
        thread.start()

    # Wait for all threads to complete (run indefinitely)
    for thread in sniff_threads:
        thread.join()

if __name__ == "__main__":
    # Prepare CSV files with headers
    with open(network_csv, 'w', newline='') as net_file:
        network_writer = csv.writer(net_file)
        network_writer.writerow(["SSID", "Signal Strength (dBm)", "Noise (dBm)", "Channel", "Timestamp", "Interface"])

    with open(device_csv, 'w', newline='') as dev_file:
        device_writer = csv.writer(dev_file)
        device_writer.writerow(["MAC", "Signal Strength (dBm)", "Channel", "Timestamp", "Interface"])

    print("[*] Waiting 15 seconds before starting...")
    time.sleep(15)  # Initial delay

    # Run the main function
    while True:
        main()

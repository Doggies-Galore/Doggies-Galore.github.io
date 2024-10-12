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

# Data storage
devices = {}  # {MAC: (RSSI, Channel, Timestamp, Interface)}
networks = {}  # {SSID: {signal_strength, noise, channel, timestamp, interface}}

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

# Save networks to CSV
def save_networks_to_csv():
    with open(network_csv, 'a', newline='') as file:
        writer = csv.writer(file)
        for ssid, info in networks.items():
            writer.writerow([
                ssid, info['signal_strength'], info.get('noise', 'N/A'),
                info['channel'], info['timestamp'], info['interface']
            ])
        file.flush()

# Save devices to CSV
def save_devices_to_csv():
    with open(device_csv, 'a', newline='') as file:
        writer = csv.writer(file)
        for mac, data in devices.items():
            writer.writerow([mac, data[0], data[1], data[2], data[3]])
        file.flush()

# Display detected devices and networks
def display_data():
    clear_screen()
    print("Detected Devices:")
    for mac, data in devices.items():
        print(f"MAC: {mac} | RSSI: {data[0]} dBm | Channel: {data[1]} | Interface: {data[3]}")

    print("\nNearby Networks:")
    for ssid, info in networks.items():
        print(f"SSID: {ssid} | RSSI: {info['signal_strength']} dBm | Noise: {info.get('noise', 'N/A')} | Channel: {info['channel']}")

# Packet handler
def packet_handler(packet, interface, channel):
    if packet.haslayer(Dot11):
        mac = packet.addr2
        if mac:
            # RSSI extraction
            rssi = packet[RadioTap].dBm_AntSignal if packet.haslayer(RadioTap) else None
            timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

            # Update device info and save to CSV
            devices[mac] = (rssi, channel, timestamp, interface)
            display_data()
            save_devices_to_csv()

        # Handle network SSID info from beacons or probe responses
        if packet.type == 0 and packet.subtype in (8, 5):  # Beacon/Probe Response
            ssid = packet.info.decode() if packet.info else "<Hidden>"
            noise = packet.getfieldval('dBm_noise') if hasattr(packet, 'dBm_noise') else 'N/A'

            # Update network info and save to CSV
            networks[ssid] = {
                'signal_strength': rssi, 'noise': noise,
                'channel': channel, 'timestamp': timestamp, 'interface': interface
            }
            display_data()
            save_networks_to_csv()

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
    with open(network_csv, 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["SSID", "Signal Strength (dBm)", "Noise (dBm)", "Channel", "Timestamp", "Interface"])

    with open(device_csv, 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["MAC", "Signal Strength (dBm)", "Channel", "Timestamp", "Interface"])

    # Run the main function
    main()

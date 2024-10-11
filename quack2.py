import os
import sys
from scapy.all import *
import subprocess
import csv
from datetime import datetime
import threading
import time

# List of Wi-Fi interfaces to monitor
interfaces = ["wlan1", "wlan2", "wlan3", "wlan4"]  # replace with your Wi-Fi interface names
channels = [1, 6, 11]  # Channels to hop between
csv_filename = "wifi_networks.csv"
hop_interval = 0.1  # Time interval to switch channels (in seconds)

# Dictionary to store MAC addresses and their signal strengths
devices = {}
networks = {}  # Dictionary to store SSIDs and their signal strengths

# Ensure the script runs with sudo
def ensure_sudo():
    if os.geteuid() != 0:
        print("[*] This script must be run as root (sudo). Restarting with sudo...")
        os.execvp('sudo', ['sudo', 'python3'] + sys.argv)

# Function to set the interface to monitor mode
def enable_monitor_mode(interface):
    print(f"[*] Setting {interface} to monitor mode...")
    subprocess.run(["sudo", "ip", "link", "set", interface, "down"])
    subprocess.run(["sudo", "iwconfig", interface, "mode", "monitor"])
    subprocess.run(["sudo", "ip", "link", "set", interface, "up"])
    print(f"[*] {interface} is now in monitor mode.")

# Function to set the Wi-Fi channel
def set_channel(interface, channel):
    print(f"[*] Setting {interface} to channel {channel}...")
    subprocess.run(["sudo", "iwconfig", interface, "channel", str(channel)])
    print(f"[*] {interface} is now on channel {channel}.")

# Function to clear the screen
def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

# Function to display the list of devices and their signal strengths
def display_devices():
    clear_screen()
    print("Detected devices:\n")
    for mac, rssi in devices.items():
        print(f"Device: {mac} | Signal strength (dBm): {rssi}")

# Function to display nearby networks
def display_networks():
    print("\nNearby Networks:\n")
    for ssid, info in networks.items():
        print(f"SSID: {ssid} | Signal strength (dBm): {info['signal_strength']} | Noise: {info.get('noise', 'N/A')} | Channel: {info['channel']}")

# Function to log network data to a CSV
def save_to_csv():
    with open(csv_filename, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["SSID", "Signal Strength (dBm)", "Noise (dBm)", "Channel", "Timestamp", "Interface"])
        
        for ssid, info in networks.items():
            writer.writerow([ssid, info['signal_strength'], info.get('noise', 'N/A'), info['channel'], 
                             datetime.now().strftime('%Y-%m-%d %H:%M:%S'), info['interface']])

# Packet handler
def packet_handler(packet, interface, channel):
    # We're interested in 802.11 packets (Wi-Fi frames)
    if packet.haslayer(Dot11):
        # Get the signal strength (RSSI) from Radiotap header
        if packet.haslayer(RadioTap) and hasattr(packet[RadioTap], 'dBm_AntSignal'):
            rssi = packet[RadioTap].dBm_AntSignal
            mac_address = packet.addr2
            
            # Update device information
            if mac_address:
                devices[mac_address] = rssi
                display_devices()

            # Check for beacon or probe response (network SSID info)
            if packet.type == 0 and (packet.subtype == 8 or packet.subtype == 5):  # Beacon or Probe Response
                ssid = packet.info.decode() if packet.info else "<Hidden SSID>"
                if packet.haslayer(Dot11Elt):
                    # Extract noise value from RadioTap if available
                    noise = packet.dBm_noise if hasattr(packet, 'dBm_noise') else 'N/A'
                    
                    # Update the networks dictionary with the SSID, signal strength, channel, and interface
                    networks[ssid] = {
                        'signal_strength': rssi,
                        'noise': noise,
                        'channel': channel,
                        'interface': interface
                    }
                    display_networks()
                    
                    # Save to CSV every time a network is detected
                    save_to_csv()

# Sniff function for each interface
def sniff_interface(interface):
    # Start sniffing on the given interface
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
    
    # Create a dictionary to track the current channel for each interface
    global current_channel
    current_channel = {interface: channels[0] for interface in interfaces}

    # Start channel hopping in a separate thread
    channel_thread = threading.Thread(target=hop_channels)
    channel_thread.daemon = True
    channel_thread.start()

    # Start sniffing on all interfaces using threads
    threads = []
    for interface in interfaces:
        thread = threading.Thread(target=sniff_interface, args=(interface,))
        threads.append(thread)
        thread.start()

    # Wait for all threads to complete (they will run indefinitely)
    for thread in threads:
        thread.join()

if __name__ == "__main__":
    main()

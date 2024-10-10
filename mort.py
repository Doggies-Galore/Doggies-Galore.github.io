import os
import csv
import numpy as np
from scapy.all import *
from scapy.layers.dot11 import Dot11, Dot11Beacon, Dot11ProbeResp, Dot11Elt, RadioTap
import subprocess
from datetime import datetime

# Set your wireless interface here
interface = "wlan0"  # Replace with your Wi-Fi interface name
wifi_channel = 6  # Set the Wi-Fi channel to listen on

# Dictionaries to store device and network information
devices = {}
networks = {}

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

# Function to display device and network information
def display_info():
    clear_screen()
    print(f"Detected devices on channel {wifi_channel}:\n")
    for mac, info in devices.items():
        print(f"Device: {mac} | Signal strength (dBm): {info['rssi']} | Router MAC: {info['router_mac']}")

    print("\nDetected networks:\n")
    for ssid, data in networks.items():
        print(f"SSID: {ssid} | Signal strength (dBm): {data['rssi']} | Noise (dBm): {data['noise']}")

# Function to save device data to CSV
def save_devices_to_csv():
    with open('wifi_devices.csv', 'a', newline='') as csvfile:
        fieldnames = ['Datetime', 'MAC Address', 'Signal Strength (dBm)', 'Router MAC', 'Time of Flight', 'FFT']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        # Write device data
        for mac, info in devices.items():
            writer.writerow({
                'Datetime': datetime.now(),
                'MAC Address': mac,
                'Signal Strength (dBm)': info['rssi'],
                'Router MAC': info['router_mac'],
                'Time of Flight': info['tof'],
                'FFT': info['fft']
            })

# Function to save network data to CSV
def save_networks_to_csv():
    with open('wifi_networks.csv', 'a', newline='') as csvfile:
        fieldnames = ['Datetime', 'SSID', 'Signal Strength (dBm)', 'Noise (dBm)', 'FFT']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        # Write network data
        for ssid, data in networks.items():
            writer.writerow({
                'Datetime': datetime.now(),
                'SSID': ssid,
                'Signal Strength (dBm)': data['rssi'],
                'Noise (dBm)': data['noise'],
                'FFT': data['fft']
            })

# Function to perform FFT analysis
def perform_fft(signal_strengths):
    # Perform FFT
    if len(signal_strengths) > 0:
        fft_result = np.fft.fft(signal_strengths)
        frequencies = np.fft.fftfreq(len(fft_result))
        return fft_result, frequencies
    return None, None

# Packet handler
def packet_handler(packet):
    if packet.haslayer(Dot11):
        # Get device info
        if packet.haslayer(RadioTap) and hasattr(packet[RadioTap], 'dBm_AntSignal'):
            rssi = packet[RadioTap].dBm_AntSignal
            mac_address = packet.addr2
            
            # Get router MAC address from the AP
            router_mac = packet.addr1 if hasattr(packet, 'addr1') else None

            # Time of Flight data (if available)
            tof = None
            if hasattr(packet[RadioTap], 'TimeOfFlight'):
                tof = packet[RadioTap].TimeOfFlight
            
            # Update the devices dictionary
            if mac_address:
                devices[mac_address] = {'rssi': rssi, 'router_mac': router_mac, 'tof': tof, 'fft': None}

        # Get network info (SSID)
        if packet.haslayer(Dot11Beacon) or packet.haslayer(Dot11ProbeResp):
            ssid = packet[Dot11Elt].info.decode(errors='ignore')
            noise = packet[RadioTap].noise if hasattr(packet[RadioTap], 'noise') else None
            
            # Update the networks dictionary
            if ssid and ssid not in networks:
                networks[ssid] = {'rssi': rssi, 'noise': noise, 'fft': None}
            elif ssid in networks:
                networks[ssid]['rssi'] = rssi  # Update signal strength if the SSID is already present

        # Update the display and save to CSV
        display_info()

        # Perform FFT on the signal strengths for analysis
        signal_strengths = [info['rssi'] for info in devices.values()]
        fft_result, frequencies = perform_fft(signal_strengths)
        
        # Save FFT results back to devices and networks dictionaries
        if fft_result is not None:
            for i, mac in enumerate(devices.keys()):
                devices[mac]['fft'] = fft_result[i]  # Assign FFT result to each device

            for i, ssid in enumerate(networks.keys()):
                networks[ssid]['fft'] = fft_result[i]  # Assign FFT result to each network

        # Save data to CSV files
        save_devices_to_csv()
        save_networks_to_csv()

# Main function
def main():
    # Enable monitor mode and set the desired Wi-Fi channel
    enable_monitor_mode(interface)
    set_channel(interface, wifi_channel)
    
    print(f"[*] Listening for packets on channel {wifi_channel}...")

    # Capture packets indefinitely and handle each one with packet_handler
    sniff(iface=interface, prn=packet_handler, store=0)

if __name__ == "__main__":
    main()

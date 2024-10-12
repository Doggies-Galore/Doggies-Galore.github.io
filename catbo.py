# Function to save networks to CSV
def save_networks_to_csv():
    file_exists = os.path.isfile(network_csv)  # Check if the file already exists
    with open(network_csv, 'a', newline='') as file:  # Use append mode 'a'
        writer = csv.writer(file)
        if not file_exists:
            # Write header if the file doesn't exist
            writer.writerow(["SSID", "Signal Strength (dBm)", "Noise (dBm)", "Channel", "Timestamp", "Interface"])
        
        for ssid, info in networks.items():
            writer.writerow([
                ssid, info['signal_strength'], info.get('noise', 'N/A'),
                info['channel'], info['timestamp'], info['interface']
            ])
        file.flush()  # Ensure data is written to disk immediately

# Function to save devices to CSV
def save_devices_to_csv():
    file_exists = os.path.isfile(device_csv)
    with open(device_csv, 'a', newline='') as file:
        writer = csv.writer(file)
        if not file_exists:
            writer.writerow(["MAC", "Signal Strength (dBm)", "Channel", "Timestamp", "Interface"])
        
        for mac, data in devices.items():
            writer.writerow([mac, data[0], data[1], data[2], data[3]])
        file.flush()

# Function to save FFT analysis to CSV
def save_fft_to_csv(mac, freqs, amplitudes):
    file_exists = os.path.isfile(fft_csv)
    with open(fft_csv, 'a', newline='') as file:
        writer = csv.writer(file)
        if not file_exists:
            writer.writerow(["MAC", "Frequency", "Amplitude", "Timestamp"])

        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        for freq, amp in zip(freqs, amplitudes):
            writer.writerow([mac, freq, amp, timestamp])
        file.flush()

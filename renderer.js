const { ipcRenderer } = require('electron');

document.getElementById('startBtn').addEventListener('click', () => {
  const options = {
    deviceId: document.getElementById('deviceSelect').value,
    wirelessIp: document.getElementById('wirelessIp').value.trim(),
    maxSize: document.getElementById('maxSize').value,
    bitrate: document.getElementById('bitrate').value,
    maxFps: document.getElementById('maxFps').value,
    desktopMode: document.getElementById('desktopMode').checked,
    forwardAudio: document.getElementById('forwardAudio').checked,
    stayAwake: document.getElementById('stayAwake').checked,
    turnScreenOff: document.getElementById('turnScreenOff').checked,
    showTouches: document.getElementById('showTouches').checked,
    alwaysOnTop: document.getElementById('alwaysOnTop').checked,
    fullscreen: document.getElementById('fullscreen').checked,
    record: document.getElementById('record').checked
  };

  // Give a little visual feedback on click
  const btn = document.getElementById('startBtn');
  const originalText = btn.innerHTML;
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg> Launching...`;
  
  // Custom CSS for spinning
  if(!document.getElementById('spin-style')) {
    const style = document.createElement('style');
    style.id = 'spin-style';
    style.innerHTML = `
      .spin { animation: spin 1s linear infinite; }
      @keyframes spin { 100% { transform: rotate(360deg); } }
    `;
    document.head.appendChild(style);
  }

  setTimeout(() => {
    btn.innerHTML = originalText;
  }, 1500);

  ipcRenderer.send('start-scrcpy', options);
});

document.getElementById('autoWirelessBtn').addEventListener('click', () => {
  const btn = document.getElementById('autoWirelessBtn');
  const status = document.getElementById('wirelessStatus');
  btn.innerText = 'Setting up...';
  btn.disabled = true;
  status.style.display = 'block';
  status.style.color = '#fb923c';
  status.innerText = 'Configuring ADB TCP/IP. Please ensure phone is connected via USB...';
  
  ipcRenderer.send('setup-wireless');
});

ipcRenderer.on('wireless-status', (event, response) => {
  const btn = document.getElementById('autoWirelessBtn');
  const status = document.getElementById('wirelessStatus');
  btn.innerText = 'Auto Setup';
  btn.disabled = false;
  
  if (response.success) {
    document.getElementById('wirelessIp').value = response.ip;
    status.style.color = '#4ade80';
    status.innerText = `Success! IP: ${response.ip}. Silakan cabut kabel USB sekarang dan klik Start Mirroring!`;
  } else {
    status.style.color = '#ef4444';
    status.innerText = `Error: ${response.message}`;
  }
});

ipcRenderer.on('scrcpy-error', (event, msg) => {
  const status = document.getElementById('wirelessStatus');
  status.style.display = 'block';
  status.style.color = '#ef4444';
  status.innerText = 'Scrcpy Error: ' + msg;
});

// Device refresh logic
document.getElementById('refreshDevicesBtn').addEventListener('click', () => {
  document.getElementById('refreshDevicesBtn').innerText = '...';
  ipcRenderer.send('get-devices');
});

ipcRenderer.on('devices-list', (event, devices) => {
  document.getElementById('refreshDevicesBtn').innerText = '🔄';
  const select = document.getElementById('deviceSelect');
  const currentVal = select.value;
  select.innerHTML = '<option value="">Auto-detect / Any</option>';
  
  devices.forEach(dev => {
    const opt = document.createElement('option');
    opt.value = dev.id;
    opt.innerText = `${dev.id} (${dev.state})`;
    select.appendChild(opt);
  });
  
  if (devices.find(d => d.id === currentVal)) {
    select.value = currentVal;
  }
});

// Initial load
ipcRenderer.send('get-devices');

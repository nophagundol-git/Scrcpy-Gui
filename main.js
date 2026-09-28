const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { spawn, exec } = require('child_process');

function getToolPath(toolName) {
  const p1 = path.join(__dirname, '..', toolName);
  const p2 = path.join(__dirname, '..', '..', '..', toolName);
  const p3 = path.join(__dirname, '..', '..', '..', '..', toolName);
  if (fs.existsSync(p1)) return p1;
  if (fs.existsSync(p2)) return p2;
  if (fs.existsSync(p3)) return p3;
  return p1;
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#0f172a',
      symbolColor: '#ffffff',
    }
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('start-scrcpy', (event, options) => {
  const scrcpyPath = getToolPath('scrcpy.exe');
  const basePath = path.dirname(scrcpyPath);
  
  const args = [];
  
  if (options.deviceId) {
    args.push('-s', options.deviceId);
  } else if (options.wirelessIp) {
    args.push('--tcpip=' + options.wirelessIp);
  }
  
  if (options.maxSize) {
    args.push('-m', options.maxSize);
  }
  if (options.bitrate) {
    args.push('-b', options.bitrate + 'M');
  }
  if (options.maxFps) {
    args.push('--max-fps', options.maxFps);
  }
  if (options.stayAwake) {
    args.push('-w');
  }
  if (options.turnScreenOff) {
    args.push('-S');
  }
  if (options.showTouches) {
    args.push('-t');
  }
  if (options.desktopMode) {
    args.push('--new-display=1920x1080/240'); // Creates virtual desktop monitor
  }
  if (!options.forwardAudio) {
    args.push('--no-audio');
  }
  if (options.alwaysOnTop) {
    args.push('--always-on-top');
  }
  if (options.fullscreen) {
    args.push('-f');
  }
  if (options.record) {
    args.push('--record', 'record_' + Date.now() + '.mp4');
  }

  console.log('Running scrcpy:', scrcpyPath, 'with args:', args);
  
  const child = spawn(scrcpyPath, args, { cwd: basePath });
  
  child.stdout.on('data', (data) => {
    console.log(`scrcpy stdout: ${data}`);
  });

  child.stderr.on('data', (data) => {
    const msg = data.toString();
    console.error(`scrcpy stderr: ${msg}`);
    // Only report real errors, not normal scrcpy info/progress messages
    const isRealError = /ERROR|WARN|No devices|error|failed|refused|Could not/i.test(msg)
      && !/file pushed|skipped|MB\/s|bytes/i.test(msg);
    if (isRealError) {
      event.reply('scrcpy-error', msg);
    }
  });

  child.on('error', (err) => {
    event.reply('scrcpy-error', 'Failed to start scrcpy.exe: ' + err.message);
  });

  child.on('close', (code) => {
    console.log(`scrcpy exited with code ${code}`);
    if (code !== 0) {
      event.reply('scrcpy-error', `Scrcpy closed unexpectedly (code ${code}).`);
    }
  });
});

ipcMain.on('get-devices', (event) => {
  const adbPath = getToolPath('adb.exe');
  
  exec(`"${adbPath}" devices`, (err, out) => {
    if (err) {
      event.reply('devices-list', []);
      return;
    }
    const devices = [];
    const lines = out.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('List')) {
        const parts = trimmed.split(/\s+/);
        if (parts.length >= 2) {
          devices.push({ id: parts[0], state: parts[1] });
        }
      }
    }
    event.reply('devices-list', devices);
  });
});

ipcMain.on('setup-wireless', (event) => {
  const adbPath = getToolPath('adb.exe');

  // Step 1: Find USB-connected device serial (not wireless ones)
  exec(`"${adbPath}" devices`, (err, out) => {
    if (err) {
      event.reply('wireless-status', { success: false, message: 'Gagal menjalankan ADB.' });
      return;
    }
    
    // Parse devices list, skip wireless (ip:port) entries
    const lines = out.split('\n');
    let usbSerial = null;
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.endsWith('\tdevice') || trimmed.endsWith(' device')) {
        const serial = trimmed.split(/\s+/)[0];
        if (!serial.includes(':')) { // Exclude wireless devices like 192.168.x.x:5555
          usbSerial = serial;
          break;
        }
      }
    }
    
    if (!usbSerial) {
      event.reply('wireless-status', { success: false, message: 'HP tidak ditemukan via USB. Pastikan kabel USB terpasang dan USB Debugging aktif.' });
      return;
    }

    // Step 2: Get the Wi-Fi IP using the specific USB serial
    exec(`"${adbPath}" -s ${usbSerial} shell ip -f inet addr show wlan0`, (err2, out2) => {
      let ip = null;
      if (!err2 && out2) {
        const m = out2.match(/inet\s+(\d+\.\d+\.\d+\.\d+)\//);
        if (m && m[1]) ip = m[1];
      }
      
      if (!ip) {
        // Fallback: check all interfaces
        exec(`"${adbPath}" -s ${usbSerial} shell ip -f inet addr`, (err3, out3) => {
          if (out3) {
            const lines3 = out3.split('\n');
            for (const l of lines3) {
              const m2 = l.match(/inet\s+(\d+\.\d+\.\d+\.\d+)\//);
              if (m2 && m2[1] && m2[1] !== '127.0.0.1') { ip = m2[1]; break; }
            }
          }
          if (!ip) {
            event.reply('wireless-status', { success: false, message: 'IP Wi-Fi tidak ditemukan di HP. Pastikan HP terhubung ke Wi-Fi.' });
            return;
          }
          doTcpip(adbPath, usbSerial, ip, event);
        });
      } else {
        doTcpip(adbPath, usbSerial, ip, event);
      }
    });
  });
});

function doTcpip(adbPath, serial, ip, event) {
  exec(`"${adbPath}" -s ${serial} tcpip 5555`, (error) => {
    if (error) {
      event.reply('wireless-status', { success: false, message: 'Gagal mengatur TCP/IP pada HP.' });
      return;
    }
    setTimeout(() => {
      exec(`"${adbPath}" connect ${ip}:5555`, (cerr, cout) => {
        if (cout && cout.includes('connected')) {
          event.reply('wireless-status', { success: true, ip: ip });
        } else {
          event.reply('wireless-status', { success: false, message: `Gagal konek ke ${ip}:5555. Output: ${cout}` });
        }
      });
    }, 4000);
  });
}

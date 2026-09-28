# ScrcpyCenter

![ScrcpyCenter](https://img.shields.io/badge/Status-Active-brightgreen) ![Platform](https://img.shields.io/badge/Platform-Windows-blue) ![License](https://img.shields.io/badge/License-MIT-green)

**ScrcpyCenter** adalah antarmuka grafis (GUI) modern, ringan, dan canggih untuk [scrcpy](https://github.com/Genymobile/scrcpy). Aplikasi ini dirancang agar pengguna dapat memproyeksikan (mirror) dan mengendalikan perangkat Android dari PC dengan sangat mudah, tanpa perlu mengetikkan perintah di Command Prompt.

Aplikasi ini dikembangkan oleh **nophagundol**.

## ✨ Fitur Utama
* **Desain Modern & Responsif:** Antarmuka yang bersih dan ramah pengguna.
* **Dukungan Multi-Device:** Kendalikan beberapa perangkat Android sekaligus.
* **Auto Wireless Setup (Sekali Klik):** Ubah koneksi dari kabel USB menjadi koneksi nirkabel (Wi-Fi) secara otomatis hanya dengan satu tombol.
* **Kualitas Visual Tingkat Tinggi:** Atur resolusi hingga **2K (2560x1440)**, atur *bitrate*, dan *framerate* sesuka hati.
* **Fitur Lengkap Scrcpy:** 
  * *Forward Audio* (Mainkan suara HP di PC - Android 11+).
  * *Desktop Mode* (Jadikan layar HP seperti layar komputer sekunder).
  * *Turn Screen Off* (Matikan layar fisik HP saat sedang di-mirror agar hemat baterai).
  * *Stay Awake*, *Show Touches*, dan *Always On Top*.

---

## 🚀 Cara Penggunaan

### Persiapan
1. Pastikan **USB Debugging** (Debugging USB) sudah aktif di menu **Developer Options** pada HP Android Anda.
2. Unduh versi terbaru dari aplikasi ini di menu **Releases**.
3. Ekstrak file yang diunduh (termasuk folder yang berisi `scrcpy` dan `adb`).

### Koneksi via Kabel USB
1. Colokkan HP Android Anda ke komputer menggunakan kabel data.
2. Buka aplikasi **ScrcpyCenter.exe**.
3. Klik tombol **Refresh (🔄)** dan pilih HP Anda dari menu *Select Device*.
4. Klik **Start Mirroring**.

### Koneksi via Wireless (Wi-Fi)
1. Colokkan HP Android Anda ke komputer menggunakan kabel data **(hanya untuk konfigurasi awal)**.
2. Pastikan HP dan komputer Anda terhubung ke jaringan Wi-Fi yang sama.
3. Buka aplikasi **ScrcpyCenter.exe**.
4. Klik tombol **Auto Setup**. Aplikasi akan otomatis mencari IP HP Anda dan mengonfigurasinya.
5. Setelah ada notifikasi sukses, Anda boleh **mencabut kabel USB**.
6. Klik **Start Mirroring**.

---

## 🛠️ Build dari Source Code (Untuk Developer)

Jika Anda ingin memodifikasi atau membangun ulang aplikasi ini sendiri, Anda memerlukan [Node.js](https://nodejs.org/) yang terpasang di komputer Anda.

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/nophagundol/ScrcpyCenter.git
   cd ScrcpyCenter
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Jalankan dalam mode pengembangan (Development):**
   ```bash
   npm start
   ```
4. **Build aplikasi menjadi `.exe`:**
   ```bash
   npx electron-packager . "ScrcpyCenter" --platform=win32 --arch=x64 --out=../ScrcpyCenter-Build --overwrite
   ```

## 📜 Lisensi
Proyek ini dilisensikan di bawah **MIT License**. Silakan gunakan, modifikasi, dan distribusikan dengan bebas.

Dibuat dengan ❤️ oleh **nophagundol**.


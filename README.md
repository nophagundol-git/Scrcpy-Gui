# ScrcpyCenter

![ScrcpyCenter](https://img.shields.io/badge/Status-Active-brightgreen) ![Platform](https://img.shields.io/badge/Platform-Windows-blue) ![License](https://img.shields.io/badge/License-MIT-green) ![Powered by scrcpy](https://img.shields.io/badge/Powered%20by-scrcpy-orange)

**ScrcpyCenter** adalah antarmuka grafis (GUI) modern, ringan, dan canggih yang dibangun di atas [**scrcpy**](https://github.com/Genymobile/scrcpy) — sebuah proyek *open source* luar biasa karya [Genymobile](https://github.com/Genymobile). ScrcpyCenter hadir sebagai lapisan UI yang memudahkan siapa saja untuk memproyeksikan (*mirror*) dan mengendalikan perangkat Android dari PC tanpa perlu mengetikkan perintah di Command Prompt.

Dikembangkan dan dikelola oleh **nophagundol**.

---

<img width="924" height="765" alt="{90DBB4E8-6F26-4AA0-A665-FC7891BD3B52}" src="https://github.com/user-attachments/assets/8f80d9a6-b397-43ad-b9fa-7d423839a4e9" />


## ✨ Fitur Utama
* **Desain Modern & Responsif:** Antarmuka yang bersih, gelap, dan ramah pengguna.
* **Dukungan Multi-Device:** Kendalikan beberapa perangkat Android sekaligus.
* **Auto Wireless Setup (Sekali Klik):** Ubah koneksi dari kabel USB menjadi koneksi nirkabel (Wi-Fi) secara otomatis.
* **Kualitas Visual Tingkat Tinggi:** Atur resolusi hingga **2K (2560x1440)**, atur *bitrate* dan *framerate* sesuka hati.
* **Fitur Lengkap:**
  * *Forward Audio* — Mainkan suara HP di PC (Android 11+).
  * *Desktop Mode* — Jadikan layar HP sebagai layar virtual sekunder.
  * *Turn Screen Off* — Matikan layar fisik HP saat di-*mirror* agar hemat baterai.
  * *Stay Awake*, *Show Touches*, *Always On Top*, dan *Fullscreen*.

---

## 🚀 Cara Penggunaan Singkat

### Via Kabel USB
1. Aktifkan **USB Debugging** di Developer Options HP Anda.
2. Colokkan HP ke komputer, izinkan permintaan *debugging* di layar HP.
3. Buka **ScrcpyCenter.exe**, klik **Refresh (🔄)**, pilih HP Anda, lalu klik **Start Mirroring**.

### Via Wireless (Wi-Fi)
1. Colokkan HP dulu via kabel, lalu klik tombol **Auto Setup**.
2. Setelah muncul notifikasi hijau sukses, cabut kabel USB.
3. Klik **Start Mirroring**.

📄 Lihat panduan lengkap di [**CARA_PAKAI.md**](CARA_PAKAI.md).

---

## 🛠️ Build dari Source Code

Memerlukan [Node.js](https://nodejs.org/) yang sudah terpasang.

```bash
# Clone repository
git clone https://github.com/nophagundol/ScrcpyCenter.git
cd ScrcpyCenter

# Install dependencies
npm install

# Jalankan mode Development
npm start

# Build menjadi .exe
npx electron-packager . "ScrcpyCenter" --platform=win32 --arch=x64 --out=../build --overwrite
```

---

## 🙏 Kredit & Pengakuan (Credits)

Proyek ini **tidak mungkin ada** tanpa adanya proyek-proyek luar biasa berikut:

| Proyek | Pengembang | Lisensi | Deskripsi |
|---|---|---|---|
| [**scrcpy**](https://github.com/Genymobile/scrcpy) | [Genymobile](https://github.com/Genymobile) | Apache-2.0 | Engine utama untuk *mirroring* dan kontrol perangkat Android |
| [**ADB (Android Debug Bridge)**](https://developer.android.com/tools/adb) | Google / Android Open Source Project | Apache-2.0 | Alat komunikasi dengan perangkat Android |
| [**Electron**](https://www.electronjs.org/) | OpenJS Foundation | MIT | Framework untuk membangun aplikasi desktop dari web |

> ⚠️ **ScrcpyCenter adalah wrapper GUI (antarmuka grafis)**. Seluruh fungsi *mirroring* dan kontrol perangkat Android ditenagai sepenuhnya oleh **scrcpy** ([github.com/Genymobile/scrcpy](https://github.com/Genymobile/scrcpy)). Saya sangat merekomendasikan Anda untuk mengunjungi repositori tersebut dan memberikan bintang ⭐ kepada sang pembuat aslinya.

---

## 📜 Lisensi

Proyek ini dilisensikan di bawah **MIT License**. Lihat file [LICENSE](LICENSE) untuk detail selengkapnya.

Dibuat dengan ❤️ oleh **nophagundol**.

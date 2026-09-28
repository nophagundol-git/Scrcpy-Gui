# Changelog

Semua perubahan dan pembaruan pada aplikasi **ScrcpyCenter** akan didokumentasikan di file ini.

## [1.0.0] - 2026-09-28

### Ditambahkan (Added)
- Rilis perdana **ScrcpyCenter** (GUI modern untuk scrcpy).
- Tema gelap (*dark mode*) yang elegan dengan desain kaca transparan (*glassmorphism*).
- **Dukungan Multi-Device**: Memungkinkan pemilihan perangkat secara spesifik menggunakan menu *dropdown* dan tombol *Refresh* (🔄).
- **Auto Wireless Setup**: Tombol sakti sekali klik untuk mengubah koneksi kabel USB menjadi nirkabel (Wi-Fi TCP/IP) secara otomatis.
- **Dukungan Resolusi Tinggi**: Menambahkan batas resolusi (Max Size) hingga **2K (2560x1440)** untuk hasil *mirroring* yang tajam.
- Pilihan pengaturan lengkap Scrcpy:
  - *Bitrate & FPS Slider*
  - *Desktop Mode* (Layar virtual sekunder)
  - *Forward Audio* (Penyalur suara)
  - *Stay Awake* & *Turn Screen Off*
  - *Always On Top* & *Show Touches*
- Penanganan konflik *argument error* yang aman pada sistem *background* ADB.

### Diperbaiki (Fixed)
- Memperbaiki *crash* `Error code 1` akibat konflik saat *dropdown* perangkat dan kolom IP nirkabel sama-sama terisi.
- Meningkatkan sistem deteksi perangkat di ADB untuk mengabaikan perangkat berstatus *offline* atau non-standar.

---
Dikelola oleh **nophagundol**.

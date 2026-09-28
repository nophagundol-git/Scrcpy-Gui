# Panduan Penggunaan ScrcpyCenter

Aplikasi ini didesain sesederhana mungkin agar Anda bisa langsung memproyeksikan dan mengendalikan layar ponsel Android dari komputer.

## 📱 A. Persiapan Wajib (Di HP Android)
1. Buka **Pengaturan (Settings)** di HP Anda.
2. Cari menu **Tentang Ponsel (About Phone)**.
3. Ketuk tulisan **Build Number** (atau *Versi MIUI/OS*) sebanyak 7 kali secara cepat sampai muncul notifikasi *"Anda sekarang adalah seorang pengembang"*.
4. Kembali ke menu utama Pengaturan, lalu cari **Developer Options (Opsi Pengembang)**.
5. Nyalakan tombol utamanya.
6. Gulir ke bawah lalu aktifkan **USB Debugging** (Debugging USB).

---

## 🔌 B. Mirroring dengan Kabel USB (Paling Lancar)
Ini adalah mode yang sangat direkomendasikan untuk *gaming* atau aktivitas yang butuh respons sangat cepat (tanpa jeda/delay).

1. Colokkan HP ke komputer menggunakan kabel data.
2. **PENTING:** Lihat layar HP Anda! Akan muncul kotak peringatan *"Izinkan Debugging USB?"*. Centang opsi *"Selalu Izinkan"* dan tekan **OK**.
3. Buka folder aplikasi, lalu jalankan **ScrcpyCenter.exe**.
4. Klik tombol **Refresh (🔄)** di aplikasi agar nama HP Anda terbaca di menu *Select Device*.
5. (Opsional) Sesuaikan kualitas grafis layar seperti Resolusi 2K, Bitrate, atau opsi Matikan Layar HP.
6. Terakhir, klik **Start Mirroring**. Selesai!

---

## 🛜 C. Mirroring Tanpa Kabel (Mode Wireless / Wi-Fi)
Gunakan mode ini jika Anda ingin bebas menggunakan HP tanpa terhalang kabel (pastikan jaringan Wi-Fi/Hotspot Anda cukup stabil).

1. **Syarat mutlak:** Komputer dan HP Android **wajib** terhubung ke jaringan Wi-Fi/Router yang sama persis.
2. Sebagai permulaan, HP Anda **tetap harus dicolok dengan kabel USB** terlebih dahulu.
3. Buka **ScrcpyCenter.exe**.
4. Di bagian atas, klik tombol **Auto Setup** berwarna biru. 
5. Tunggu prosesnya sekitar 3-5 detik. Jika di bagian bawah tombol sudah muncul teks warna hijau (Sukses), artinya koneksi TCP/IP nirkabel telah berhasil dibangun.
6. Sekarang Anda boleh **Mencabut kabel USB** sepenuhnya.
7. Klik **Start Mirroring**. Layar HP akan langsung terbuka di PC secara *wireless*.

---

## ⚙️ D. Penjelasan Fitur Canggih

* **Max Size (Resolution):** Untuk ketajaman proyeksi layar. Semakin tajam (seperti 1080p atau 2K), gambar semakin jernih tetapi membutuhkan transmisi kabel/Wi-Fi yang memadai.
* **Bitrate:** Semakin tinggi angka *Mbps*, kualitas video akan semakin padat dan tidak "kotak-kotak/pecah" saat gambar bergerak cepat.
* **Turn Screen Off (Hemat Baterai):** Sangat berguna. Jika dicentang, layar fisik HP Anda akan berubah menjadi "Gelap", sehingga menghemat baterai dan HP tidak cepat panas. Namun di layar komputer, Anda tetap bisa melihat dan menyentuhnya memakai mouse.
* **Desktop Mode (Virtual Display):** Memaksa Android untuk memunculkan layar kosong sekunder khusus presentasi, layaknya menyambungkan HP ke Monitor via HDMI. (Catatan: Tergantung dukungan *firmware* HP).
* **Forward Audio (Hanya Android 11+):** Jika dicentang, suara game/musik dari HP akan otomatis berpindah sepenuhnya ke speaker Komputer Anda.

*(Panduan ini disusun untuk ScrcpyCenter by nophagundol)*

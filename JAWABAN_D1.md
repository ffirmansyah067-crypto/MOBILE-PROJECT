# Jawaban Soal Mobile App Development

## 1. Definisi, Fokus, dan Output Teknis
**Mobile App Development** adalah proses pengembangan menyeluruh (end-to-end) untuk merancang, membangun, menguji, merilis, dan memelihara aplikasi yang berjalan di perangkat mobile.

* **Fokus Utama:** Pengalaman pengguna yang selaras dengan platform, performa stabil, dan kepatuhan kebijakan toko aplikasi.
* **Output Teknis:** Paket rilis (APK/AAB/IPA), sertifikat penandatanganan (signing), konfigurasi izin (permissions), dan metadata rilis.

---

## 2. Perbandingan Web vs Mobile Development
| Aspek | Web Development | Mobile App Development |
| :--- | :--- | :--- |
| **Target Eksekusi** | Browser (DOM) | Runtime Native |
| **Distribusi** | URL, Server Deploy | App Store / Play Store |
| **Akses Hardware** | Terbatas | Luas (Kamera, GPS, Sensor) |

**Implikasi Praktis:** Mobile menuntut pengelolaan izin perangkat, penanganan jaringan fluktuatif (offline mode), dan proses rilis yang tunduk pada kebijakan toko aplikasi.

---

## 3. Tahap Discovery & Requirement
Tahap ini mengidentifikasi masalah bisnis dan menentukan target platform.
* **Target Platform:** Memutuskan fokus ke Android atau iOS berdasarkan audiens.
* **Kebutuhan Offline/Online:** Menentukan fungsionalitas seperti dukungan penggunaan tanpa internet sejak awal.

---

## 4. Perancangan Arsitektur & Teknologi
Tahap ini menentukan pendekatan pengembangan dan struktur modul aplikasi.
* **State Management:** Krusial untuk memastikan sinkronisasi data di seluruh aplikasi.
* **Navigasi:** Menentukan pola perpindahan layar (stack/tab) demi keandalan aplikasi.

---

## 5. Native vs Hybrid Development
* **Native Development:** Menggunakan bahasa spesifik platform (Kotlin/Swift).
    * **Keuntungan:** Performa maksimal & akses API penuh.
    * **Kekurangan:** Perlu dua codebase & biaya tinggi.
    * **Contoh Lain:** Java (Android), Objective-C (iOS).
* **Hybrid Development:** Menggunakan teknologi web dalam WebView.
    * **Keuntungan:** Satu codebase & biaya rendah.
    * **Kekurangan:** Performa lebih rendah & lag pada interaksi kompleks.
    * **Contoh Lain:** Apache Cordova, Ionic.

---

## 6. Cross-Platform Native Development
Pendekatan satu basis kode yang dirender menjadi komponen UI native asli tanpa bergantung pada WebView.
* **Dibandingkan Native:** Menawarkan efisiensi biaya dan waktu rilis cepat, namun memiliki trade-off pada kompleksitas debugging bridge.

---

## 7. Posisi React Native (RN)
RN memungkinkan pembangunan aplikasi cross-platform dengan filosofi ReactJS.
* **Target:** Mobile OS (Android/iOS) vs Website.
* **Sintaks:** Menggunakan `<View>` dan `<Text>` menggantikan `<div>` dan `<p>`.
* **Styling:** Menggunakan JavaScript Objects mirip Flexbox.

---

## 8. Tantangan Utama & Solusi RN
Tantangan utama meliputi keragaman perangkat dan pengelolaan dua OS berbeda. React Native mengatasi ini dengan basis kode tunggal yang menghasilkan UI native asli, sehingga skalabilitas tim lebih terjaga.

---

## 9. Pengujian, Build, dan Release
* **Pengujian:** Meliputi unit testing, snapshot UI, dan pengujian E2E di perangkat nyata.
* **Build, Signing, & Release:** Menyiapkan paket rilis aman melalui signing, enkripsi, dan validasi standar keamanan platform sebelum distribusi.

---

## 10. Mengapa React Native Menjadi Pilihan?
1. **Efisiensi:** Satu basis kode untuk multi-platform mempercepat waktu rilis.
2. **Performa:** Mendekati native karena merender komponen asli, bukan web.
3. **Ekosistem:** Komunitas besar dan library siap pakai memudahkan pengembangan.
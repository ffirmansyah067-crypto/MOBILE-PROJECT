# Jawaban Soal React Native v0.80 & Setup Environment

## 1. Konsep Dasar dan New Architecture
**React Native** adalah framework yang memungkinkan pengembangan aplikasi mobile native menggunakan JavaScript dan React.

* **Perbedaan dengan React Web**: React Native merender UI menggunakan komponen native asli (seperti `UIView` atau `View`), bukan elemen HTML/CSS.
* **New Architecture (v0.80)**: Menggantikan *legacy bridge* dengan **JSI (JavaScript Interface)** untuk komunikasi *synchronous*.
* **Dampak Performa**: Mengurangi latensi hingga 50% pada operasi kompleks seperti animasi, membuat aplikasi jauh lebih responsif.

---

## 2. Perbandingan React Native CLI vs Expo
| Aspek | React Native CLI | Expo |
| :--- | :--- | :--- |
| **Arsitektur** | Akses penuh kode native (`/ios` & `/android`). | Managed Workflow; kode native disembunyikan. |
| **Proses Build** | Build lokal via Xcode/Android SDK. | Cloud Build (EAS) atau instan via Expo Go. |

* **Kelebihan & Kekurangan**:
    * **CLI**: (+) Fleksibilitas tinggi untuk modul custom. (-) Setup kompleks dan rawan error konfigurasi.
    * **Expo**: (+) Setup sangat cepat (5 menit) dan ramah pemula. (-) Ketergantungan pada SDK dan akses native terbatas.
* **Skenario Pemilihan**: Saya akan memilih **React Native CLI** untuk proyek yang membutuhkan integrasi hardware khusus seperti Bluetooth LE. Alasannya, CLI memberikan akses penuh untuk memodifikasi kode native yang mungkin tidak didukung oleh pustaka standar Expo.

---

## 3. Pentingnya Komponen Android SDK
Dalam setup *command-line tools*, tiga komponen berikut sangat esensial:
* **SDK Platforms (android-35)**: Menyediakan API untuk build aplikasi yang menargetkan Android 15.
* **Build Tools (35.0.0)**: Digunakan untuk kompilasi resource, optimasi, dan *signing* paket APK/AAB agar valid.
* **Platform Tools**: Berisi `adb` (Android Debug Bridge) untuk menginstal dan meninjau log error aplikasi.

**Masalah Jika Absen**: Jika **Platform Tools** tidak ada, perintah `adb` tidak akan dikenali di VS Code. Akibatnya, kamu tidak bisa memantau *runtime error* via *logcat* atau mendorong aplikasi masuk ke emulator/perangkat meskipun proses *build* sudah selesai.

---

## 4. Prasyarat Umum Setup CLI v0.80
Berikut alasan mengapa komponen ini diperlukan sebagai jembatan ke native runtime:
* **Node.js (v20.18+)**: Runtime utama untuk menjalankan **Metro Bundler** (pengemas kode) dan mengelola dependensi.
* **Watchman**: Tool dari Meta untuk mendeteksi perubahan file secara efisien, sangat penting agar fitur *hot reloading* berjalan lancar.
* **Yarn (v4.5+)**: Package manager yang direkomendasikan karena lebih cepat dan stabil dibandingkan npm standar.

---

## 5. Struktur Folder dan Dukungan Cross-Platform
Proyek CLI memiliki struktur folder terorganisir untuk memisahkan logika dan native:
* **`android/` & `ios/`**: Folder esensial untuk proses build native; tempat modifikasi *permissions* atau modul custom.
* **`App.js` & `index.js`**: Titik masuk utama aplikasi tempat seluruh logika tampilan ditulis menggunakan React.
* **`metro.config.js`**: Mengatur bagaimana JavaScript di-bundle untuk dikirim ke perangkat mobile.

**Dukungan Pengembangan**: Struktur ini mendukung pengembangan *cross-platform* karena developer cukup menulis kode di file JS sekali saja, lalu sistem akan mengompilasinya ke platform masing-masing. Folder yang terpisah rapi memudahkan navigasi di VS Code sehingga developer fokus pada logika tanpa terganggu file sistem native.
# kuisoner-unpam-autofiller

UNPAM Questionnaire Auto-Filler
Project ini adalah ekstensi Google Chrome yang dirancang untuk mengotomatisasi pengisian kuesioner pada Learning Management System (LMS) Universitas Pamulang. Ekstensi secara otomatis memilih opsi jawaban positif (Ya) pada elemen radio button berbasis Material UI.

Fitur Utama
Automasi Input: Mengidentifikasi dan memilih radio button dengan nilai spesifik secara otomatis.

Dynamic DOM Handling: Menggunakan MutationObserver untuk mendeteksi perubahan elemen saat halaman dimuat secara asinkron oleh React.

Targeting Spesifik: Hanya berjalan pada domain yang ditentukan dalam manifest untuk menjaga privasi dan kinerja browser.

Arsitektur Ekstensi
Ekstensi ini bekerja pada layer Content Script yang memungkinkan interaksi langsung dengan Document Object Model (DOM) halaman web tanpa memerlukan server eksternal.

Instalasi
Unduh atau clone repositori ini ke penyimpanan lokal.

Buka browser Google Chrome dan akses halaman chrome://extensions/.

Aktifkan Mode Pengembang (Developer Mode) pada panel kanan atas.

Pilih tombol Muat yang tidak dikemas (Load unpacked).

Arahkan ke direktori project yang telah diunduh.

Cara Kerja Kode
Script ini menargetkan atribut value="1" pada elemen input radio yang secara standar diatur sebagai jawaban "Ya" dalam sistem kuesioner terkait.

JavaScript
// Menargetkan input radio dengan value 1
const fillKuesioner = () => {
  const inputs = document.querySelectorAll('input[type="radio"][value="1"]');
  inputs.forEach(input => {
    if (!input.checked) {
      input.click();
    }
  });
};
Spesifikasi Teknis
Manifest Version: 3

Permissions: activeTab

Compatibility: Google Chrome, Brave Browser, Microsoft Edge.

Disclaimer
Alat ini dibuat untuk tujuan efisiensi administratif dan edukasi mengenai manipulasi DOM. Pengguna bertanggung jawab penuh atas penggunaan alat ini dalam pengisian data kuesioner.

Kontributor: WILY PRADANA

Lisensi: MIT

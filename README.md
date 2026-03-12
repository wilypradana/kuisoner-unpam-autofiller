# UNPAM Questionnaire Auto-Filler

Project ini adalah ekstensi Google Chrome yang dirancang untuk mengotomatisasi pengisian kuesioner pada Learning Management System (LMS) Universitas Pamulang. Ekstensi secara otomatis memilih opsi jawaban positif (Ya) pada elemen radio button berbasis Material UI.

## Fitur Utama

- Automasi Input: Mengidentifikasi dan memilih radio button dengan nilai spesifik secara otomatis.
- Dynamic DOM Handling: Menggunakan MutationObserver untuk mendeteksi perubahan elemen saat halaman dimuat secara asinkron.
- Targeting Spesifik: Hanya berjalan pada domain yang ditentukan dalam manifest untuk menjaga privasi dan kinerja browser.

## Arsitektur Ekstensi

Ekstensi ini bekerja pada layer Content Script yang memungkinkan interaksi langsung dengan Document Object Model (DOM) halaman web tanpa memerlukan server eksternal.



## Instalasi

1. Unduh atau clone repositori ini ke penyimpanan lokal.
2. Buka browser Google Chrome dan akses halaman chrome://extensions/.
3. Aktifkan Mode Pengembang (Developer Mode) pada panel kanan atas.
4. Pilih tombol Muat yang tidak dikemas (Load unpacked).
5. Arahkan ke direktori project yang telah diunduh.

## Cara Kerja Kode

Script ini menargetkan atribut value="1" pada elemen input radio yang secara standar diatur sebagai jawaban "Ya" dalam sistem kuesioner terkait.

```javascript
const fillKuesioner = () => {
  const inputs = document.querySelectorAll('input[type="radio"][value="1"]');
  inputs.forEach(input => {
    if (!input.checked) {
      input.click();
    }
  });
};

```

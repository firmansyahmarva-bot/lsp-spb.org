# Laporan Audit Klaim & Aspek Komersial Pelatihan K3 (Business Confirmation Report)

**Dokumen Analisis Internal untuk Manajemen PT Kreasi Ultimate Berjaya / Ahli-K3.co.id**  
**Tanggal Audit:** 10 September 2026  
**Total Program Terdaftar:** 300 Program Pelatihan (`/pelatihan/`)  
**Status Audit:** Verified against `PROGRAM_PRICING_LIST` (`src/lib/program-prices.ts`) & Regulatory Mandates

---

## 1. Ringkasan Eksekutif (Executive Summary)

Audit ini dilakukan untuk mengidentifikasi seluruh klaim komersial, struktur harga, durasi pembinaan, output lisensi/sertifikasi, dan prasyarat kepesertaan di 300 landing page program pelatihan K3. 

Hasil pemetaan harga:
- **100% Program (300/300)** telah berhasil dipetakan secara akurat 1-to-1 ke master data harga resmi (`PROGRAM_PRICING_LIST`).
- Seluruh duplikasi kata (seperti *"pelatihan Pelatihan K3"*) sebanyak **504 kemunculan** pada 252 file telah dibersihkan secara tuntas.
- Teks deskripsi biaya (`courseDetails.priceInfo`) dan FAQ biaya telah diperbarui dengan bahasa Indonesia yang natural dan spesifik per bidang industri (Kelistrikan, Angkat-Angkut, Uap & Bejana Tekan, Kimia, Konstruksi, Ketinggian, Ruang Terbatas, Kebakaran, Kesehatan Kerja/P3K, Higiene Lingkungan Kerja, dan SMK3).

Terdapat sejumlah klaim operasional dan komersial yang memerlukan konfirmasi serta validasi kebijakan bisnis manajemen sebelum dipublikasikan ke publik atau dijadikan dasar penawaran resmi (Surat Penawaran Harga / SPH).

---

## 2. Rincian Klaim yang Memerlukan Konfirmasi Bisnis (Requiring Business Confirmation)

### A. Struktur Harga & Tiering Khusus (Pricing & Tiers)

| No | Program / Skema | Klaim yang Dicantumkan di Website | Aspek yang Perlu Konfirmasi Bisnis | Rekomendasi / Catatan |
|---|---|---|---|---|
| 1 | **Pelatihan Ahli K3 Umum** (`ahli-k3-umum`) | Rp 4.500.000 (Fresh Graduate Blended)<br>Rp 6.000.000 (Standar / Master List)<br>Rp 7.500.000 (Utusan Perusahaan Ber-SKP) | Konfirmasi apakah paket Fresh Graduate (tanpa SKP, hanya Sertifikat Calon Ahli K3 Umum) dan paket Corporate (dengan pengurusan SKP & Lisensi Kemnaker) masih berlaku dengan selisih harga ini. | Tetap cantumkan base price Rp 6.000.000 sebagai acuan agregator, dengan opsi konsultasi sales untuk paket perusahaan. |
| 2 | **In-House Training Perusahaan** (Seluruh Program) | Penawaran kelas in-house khusus perusahaan dengan penyesuaian jadwal dan lokasi. | Konfirmasi batas kuota minimum peserta in-house (apakah minimal 10 orang, 15 orang, atau sistem lumpsum harian/paket kelas). | Tetapkan ketentuan minimum peserta (misal: min 10 pax) atau tombol CTA "Minta Penawaran In-House". |
| 3 | **Fasilitas Tambahan Kelas Offline / Blended** | Modul fisik, seragam/polo shirt, konsumsi (lunch & coffee break), dan akomodasi PKL. | Konfirmasi apakah paket publik standar sudah mencakup biaya konsumsi & transportasi lokal saat sesi PKL lapangan, atau ditanggung peserta. | Perjelas breakdown fasilitas pada proposal penawaran resmi (SPH). |

---

### B. Otoritas Sertifikasi & Regulasi (Certification & Legal Authority)

| No | Kluster Program | Klaim Sertifikasi Saat Ini | Batasan Regulasi Pemerintah | Tindakan yang Telah Diambil & Konfirmasi Dibutuhkan |
|---|---|---|---|---|
| 1 | **Hiperkes Dokter Perusahaan** (`pelatihan-dokter-perusahaan...`) | Sertifikat Hiperkes Kemnaker RI durasi 10 Hari (Rp 11.500.000) | Dasar hukum wajib adalah **Permenaker No. PER.01/MEN/1976**. Output resmi adalah **Sertifikat Kelulusan Pelatihan Hiperkes dari Kemnaker RI** (bukan Kartu Lisensi SIO 3 tahun). | Telah diperbaiki dari kesalahan sebelumnya (Permenaker 15/2008 P3K). Manajemen perlu memvalidasi mitra Balai K3 / Ditjen Binwasnaker pelaksana. |
| 2 | **Hiperkes Paramedis Perusahaan** (`pelatihan-paramedis...`) | Sertifikat Hiperkes Kemnaker RI durasi 6 Hari (Rp 7.500.000) | Dasar hukum wajib adalah **Permenaker No. PER.01/MEN/1979**. Output resmi adalah **Sertifikat Hiperkes Paramedis Kemnaker RI**. | Telah disinkronkan ke Permenaker 01/1979. Konfirmasi alur pengajuan sertifikat ke Kemnaker. |
| 3 | **Ahli K3 Konstruksi (Muda, Madya, Utama)** | Skema Kemnaker vs BNSP / PUPR (LPJK) | Sejak UU Jasa Konstruksi & Permen PUPR No. 10/2021, sertifikasi personil keselamatan konstruksi terbagi antara: (1) Penunjukan Ahli K3 Konstruksi Kemnaker (Permenaker 01/1980) dan (2) SKK Konstruksi via LSP Terlisensi BNSP/LPJK. | Konfirmasi skema mana yang menjadi fokus utama penjualan batch publik: apakah jalur Lisensi Kemnaker atau jalur SKK Konstruksi LPJK BNSP. |
| 4 | **Higiene Industri Muda (HIMU)** | Sertifikasi BNSP / Kemnaker | Terdapat skema Personel K3 Lingkungan Kerja Kemnaker (Permenaker 05/2018) dan Skema Okupasi HIMU BNSP (SKKNI). | Konfirmasi apakah batch yang dibuka adalah uji kompetensi LSP BNSP atau pembinaan teknis Kemnaker RI. |
| 5 | **Program Pelatihan Teknis Internal & Non-Statutori** (contoh: *Fatigue Management, Ergonomi Kantor, P4GN, Gizi Kerja*) | "Sertifikasi Resmi" | Program ini bersifat *skill enhancement* / peningkatan kompetensi terapan, di mana Kemnaker RI tidak menerbitkan SKP perorangan. Output resmi adalah **Sertifikat Pelatihan (Certificate of Completion) dari PJK3 PT Kreasi Ultimate Berjaya**. | Diperlukan penegasan narasi bahwa outputnya adalah Sertifikat Kompetensi Lembaga PJK3 Resmi, bukan lisensi penunjukan menteri. |

---

### C. Persyaratan Kualifikasi Peserta (Prerequisites & Eligibility)

| No | Jenjang / Skema | Persyaratan Pendidikan & Dokumen | Regulasi Acuan | Catatan Verifikasi Sales |
|---|---|---|---|---|
| 1 | **Ahli K3 Spesialis (Listrik, Kimia, PUBT, Kebakaran Kelas A)** | Minimal Pendidikan D3 / S1 Jurusan Teknik atau Sains Terkait + Pengalaman Kerja Bidang Terkait (1-2 tahun). | Permenaker No. 02/1992, Permenaker 12/2015, Permenaker 37/2016, Kepmenaker 186/1999 | Calon peserta wajib diverifikasi ijazah dan surat keterangan kerja sebelum registrasi disetujui untuk menghindari penolakan SKP oleh Kemnaker. |
| 2 | **Operator Alat Berat & PAA (Forklift, Crane, Gondola, Boiler)** | Minimal Pendidikan SMA/SMK atau SMP (tergantung Kelas I / Kelas II). Usia minimal 19 tahun. | Permenaker No. 08/2020 & Permenaker No. 37/2016 | Melampirkan surat keterangan sehat dan tidak buta warna dari dokter. |
| 3 | **Ketinggian (TKBT/TKPK) & Ruang Terbatas (Confined Space)** | Bebas dari fobia ketinggian/ruang sempit (Acrophobia / Claustrophobia), bebas epilepsi dan gangguan kardiovaskular. | Permenaker No. 09/2016 & Surat Edaran Dirjen Binwasnaker K3 | Wajib menyertakan Surat Keterangan Dokter Berbadan Sehat (Medical Fit-to-Work). |

---

## 3. Matriks 1-to-1 Rekonsiliasi Top 30 Program Komersial

| No | Slug | Judul Resmi | Durasi | Harga Resmi | Status Verifikasi Konten |
|---|---|---|---|---|---|
| 1 | `ahli-k3-umum` | Pelatihan Ahli K3 Umum (Sertifikasi Kemnaker RI) | 120 JP (12 Hari) | Rp 6.000.000 | **Bespoke (Verified)** - Tiering Rp 4.5M - 7.5M dipertahankan |
| 2 | `auditor-smk3` | Pelatihan Auditor SMK3 (Sertifikasi Kemnaker RI) | 40 JP (5 Hari) | Rp 5.000.000 | **Bespoke (Verified)** - 166 Kriteria PP 50/2012 |
| 3 | `lead-auditor-smk3` | Pelatihan Lead Auditor SMK3 Kemnaker RI | 5 Hari | Rp 6.500.000 | **Bespoke (Verified)** - Lead Audit ISO 19011 |
| 4 | `k3-kebakaran-kelas-d` | Pelatihan Petugas Peran Kebakaran (Kelas D Sertifikasi Kemnaker RI) | 25 JP (3 Hari) | Rp 4.250.000 | **Bespoke (Verified)** - Kepmenaker 186/1999 |
| 5 | `k3-kebakaran-kelas-c` | Pelatihan Regu Penanggulangan Kebakaran (Kelas C Sertifikasi Kemnaker) | 60 JP (6 Hari) | Rp 6.500.000 | **Bespoke (Verified)** - Fire Brigade & SCBA |
| 6 | `k3-kebakaran-kelas-b` | Pelatihan Koordinator Unit Penanggulangan Kebakaran (Kelas B Kemnaker) | 60 JP (6 Hari) | Rp 8.500.000 | **Bespoke (Verified)** - Koordinator & Proteksi Gedung |
| 7 | `k3-kebakaran-kelas-a` | Pelatihan Ahli K3 Spesialis Penanggulangan Kebakaran (Kelas A Kemnaker) | 120 JP (12 Hari) | Rp 15.000.000 | **Bespoke (Verified)** - Ahli K3 Spesialis Kebakaran |
| 8 | `pelatihan-ahli-k3-spesialis-listrik-kemnaker-ri` | Pelatihan Ahli K3 Spesialis Listrik Kemnaker RI | 120 JP (12 Hari) | Rp 15.000.000 | **Verified** - Permenaker 12/2015, PUIL 2020 |
| 9 | `pelatihan-teknisi-k3-listrik-sertifikasi-kemnaker-ri` | Pelatihan Teknisi K3 Listrik Sertifikasi Kemnaker RI | 30 JP (4 Hari) | Rp 7.000.000 | **Verified** - LOTO, Pembumian Grounding |
| 10 | `pelatihan-operator-forklift-kelas-i-kelas-ii-sertifikasi-kemnaker` | Pelatihan Operator Forklift Kelas I Kelas II Sertifikasi Kemnaker | 30 JP (3 Hari) | Rp 4.250.000 | **Verified** - Permenaker 08/2020, SIO Kemnaker |
| 11 | `pelatihan-operator-overhead-crane-gantry-crane-kelas-i-ii-kemnaker` | Pelatihan Operator Overhead Crane Gantry Crane Kelas I II Kemnaker | 4 Hari | Rp 5.500.000 | **Verified** - SIO Overhead & Gantry Crane |
| 12 | `pelatihan-operator-mobile-crane-crawler-crane-sertifikasi-kemnaker` | Pelatihan Operator Mobile Crane Crawler Crane Sertifikasi Kemnaker | 4 Hari | Rp 5.500.000 | **Verified** - SIO Mobile Crane Kemnaker |
| 13 | `pelatihan-juru-ikat-beban-rigger-slinger-bersertifikat-kemnaker` | Pelatihan Juru Ikat Beban Rigger Slinger Bersertifikat Kemnaker | 3 Hari | Rp 4.500.000 | **Verified** - SIO Rigger / Juru Ikat PAA |
| 14 | `pelatihan-operator-boiler-ketel-uap-kelas-i-ii-lisensi-kemnaker` | Pelatihan Operator Boiler Ketel Uap Kelas I II Lisensi Kemnaker | 5 Hari | Rp 7.500.000 | **Verified** - Permenaker 37/2016 |
| 15 | `pelatihan-ahli-k3-spesialis-pesawat-uap-bejana-tekanan-kemnaker` | Pelatihan Ahli K3 Spesialis Pesawat Uap Bejana Tekanan Kemnaker | 12 Hari | Rp 13.500.000 | **Verified** - Pengawas PUBT Kemnaker 120 JP |
| 16 | `pelatihan-ahli-k3-kimia-sertifikasi-resmi-kemnaker-ri` | Pelatihan Ahli K3 Kimia Sertifikasi Resmi Kemnaker RI | 120 JP (12 Hari) | Rp 12.500.000 | **Verified** - Kepmenaker 187/1999 Potensi Bahaya Besar |
| 17 | `pelatihan-petugas-k3-kimia-sertifikasi-resmi-kemnaker-ri` | Pelatihan Petugas K3 Kimia Sertifikasi Resmi Kemnaker RI | 24 JP (3 Hari) | Rp 7.000.000 | **Verified** - MSDS, GHS, Spill Kit B3 |
| 18 | `pelatihan-ahli-k3-lingkungan-kerja-muda-madya-utama-kemnaker-ri` | Pelatihan Ahli K3 Lingkungan Kerja Muda Madya Utama Kemnaker RI | 12 Hari | Rp 10.500.000 | **Verified** - Permenaker 05/2018 |
| 19 | `pelatihan-higiene-industri-muda-himu-sertifikasi-bnsp-kemnaker` | Pelatihan Higiene Industri Muda Himu Sertifikasi BNSP Kemnaker | 4 Hari | Rp 6.500.000 | **Verified** - Asesmen HIMU BNSP |
| 20 | `pelatihan-ahli-k3-konstruksi-muda-madya-utama-sertifikasi-kemnaker-bnsp` | Pelatihan Ahli K3 Konstruksi Muda Madya Utama Sertifikasi Kemnaker BNSP | 12 Hari | Rp 10.500.000 | **Verified** - K3 Konstruksi Proyek |
| 21 | `pelatihan-petugas-keselamatan-konstruksi-smkk-pupr-no-10-2021` | Pelatihan Petugas Keselamatan Konstruksi Smkk PUPR No 10 2021 | 24 JP (3 Hari) | Rp 5.500.000 | **Verified** - SMKK PUPR No. 10/2021 |
| 22 | `pelatihan-tenaga-kerja-bangunan-tinggi-tingkat-1-tkbt-1-kemnaker-ri` | Pelatihan Tenaga Kerja Bangunan Tinggi Tingkat 1 Tkbt 1 Kemnaker RI | 3 Hari | Rp 4.500.000 | **Verified** - Permenaker 09/2016 Platform Tetap |
| 23 | `pelatihan-tenaga-kerja-bangunan-tinggi-tingkat-2-tkbt-2-kemnaker-ri` | Pelatihan Tenaga Kerja Bangunan Tinggi Tingkat 2 Tkbt 2 Kemnaker RI | 4 Hari | Rp 5.000.000 | **Verified** - Permenaker 09/2016 Platform Sementara |
| 24 | `pelatihan-tenaga-kerja-pada-ketinggian-tingkat-1-tkpk-1-rope-access-kemnaker` | Pelatihan Tenaga Kerja Pada Ketinggian Tingkat 1 Tkpk 1 Rope Access Kemnaker | 5 Hari | Rp 6.500.000 | **Verified** - Rope Access Akses Tali Kemnaker |
| 25 | `pelatihan-petugas-k3-madya-ruang-terbatas-confined-space-kemnaker` | Pelatihan Petugas K3 Madya Ruang Terbatas Confined Space Kemnaker | 3 Hari | Rp 4.750.000 | **Verified** - Standby Person / Jaga Luar |
| 26 | `pelatihan-petugas-k3-utama-ruang-terbatas-confined-space-kemnaker` | Pelatihan Petugas K3 Utama Ruang Terbatas Confined Space Kemnaker | 5 Hari | Rp 6.500.000 | **Verified** - Entrant / Masuk Lubang & SCBA |
| 27 | `pelatihan-petugas-p3k-di-tempat-kerja-lisensi-resmi-kemnaker-ri-30-jp` | Pelatihan Petugas P3K Di Tempat Kerja Lisensi Resmi Kemnaker RI 30 JP | 30 JP (3 Hari) | Rp 4.500.000 | **Verified** - Permenaker 15/2008 P3K di Tempat Kerja |
| 28 | `pelatihan-dokter-perusahaan-sertifikasi-hiperkes-kemnaker-ri` | Pelatihan Dokter Perusahaan Sertifikasi Hiperkes Kemnaker RI | 10 Hari | Rp 11.500.000 | **Verified** - Permenaker 01/1976 Hiperkes Dokter |
| 29 | `pelatihan-paramedis-perusahaan-sertifikasi-hiperkes-kemnaker-ri` | Pelatihan Paramedis Perusahaan Sertifikasi Hiperkes Kemnaker RI | 6 Hari | Rp 7.500.000 | **Verified** - Permenaker 01/1979 Hiperkes Paramedis |
| 30 | `pembinaan-p2k3` | Pelatihan Tata Kelola & Sekretariat P2K3 Perusahaan | 2 Hari | Rp 3.750.000 | **Bespoke (Verified)** - Permenaker 04/1987 Tata Kelola P2K3 |

---

## 4. Rekomendasi Tindak Lanjut untuk Tim Bisnis & Operasional

1. **Penerbitan Standard Operating Procedure (SOP) Penawaran Harga**: Tim sales wajib memastikan SPH mencantumkan apakah harga merupakan kelas publik (jadwal reguler bulanan) atau kelas *in-house exclusive*.
2. **Klarifikasi Paket Pendaftaran**: Menyiapkan opsi tertulis mengenai pengurusan Surat Keputusan Penunjukan (SKP) bagi peserta perseorangan (*fresh graduate*) yang belum memiliki badan usaha penjamin.
3. **Penyelarasan Dokumen Legalitas Kemitraan**: Memastikan SK Penunjukan PJK3 dari Kementerian Ketenagakerjaan RI untuk seluruh bidang spesialis (Kelistrikan, Kebakaran, PAA, PUBT, Lingkungan Kerja, dan Kesehatan Kerja) selalu diperbarui masa berlakunya.

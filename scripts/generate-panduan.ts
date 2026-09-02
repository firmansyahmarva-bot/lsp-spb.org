import { ContentRecordInput } from './build-inventory';

export function generatePanduanRecords(): ContentRecordInput[] {
  const records: ContentRecordInput[] = [];

  // Group A: 77 Commercial, Support, Cost, Requirement & Schedule Guides
  const commercialGuides = [
    { slug: 'syarat-ahli-k3-umum', title: 'Panduan Syarat Pendaftaran Ahli K3 Umum (Kemnaker RI)', intentCategory: 'requirement', desc: 'Syarat pendidikan minimal D3/S1, dokumen identitas, surat rekomendasi perusahaan, dan alur verifikasi berkas pendaftaran calon Ahli K3 Umum.' },
    { slug: 'biaya-pelatihan-k3', title: 'Panduan Estimasi Biaya Pelatihan K3 & Komponen Harga', intentCategory: 'cost', desc: 'Rincian estimasi biaya pelatihan Ahli K3 Umum, Auditor SMK3, K3 Kebakaran, dan faktor pembeda harga kelas online vs tatap muka.' },
    { slug: 'materi-ahli-k3-umum', title: 'Panduan Lengkap Materi & Kurikulum Ahli K3 Umum 120 JP', intentCategory: 'curriculum', desc: 'Struktur kurikulum 120 jam pelajaran pembinaan Ahli K3 Umum: kebijakan K3, dasar hukum, kelembagaan P2K3, pengawasan norma, dan praktik kerja lapangan.' },
    { slug: 'tugas-ahli-k3-umum', title: 'Panduan Tugas, Fungsi & Tanggung Jawab Ahli K3 Umum di Perusahaan', intentCategory: 'responsibility', desc: 'Uraian tugas operasional Ahli K3 Umum sebagai sekretaris P2K3, penyusun laporan triwulan naker, dan pengawas kepatuhan SMK3.' },
    { slug: 'cara-daftar-pelatihan-k3-online', title: 'Panduan Cara Mendaftar Pelatihan K3 Online & Blended Training', intentCategory: 'registration', desc: 'Langkah mudah pendaftaran batch pelatihan K3 secara online, konfirmasi berkas, jadwal zoom, dan pengiriman modul fisik.' },
    { slug: 'biaya-pelatihan-auditor-smk3', title: 'Panduan Biaya Pelatihan & Sertifikasi Auditor SMK3 Kemnaker', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan 40 JP Auditor SMK3 PP 50/2012, fasilitas sertifikat, kartu kewenangan, dan konsultasi ujian.' },
    { slug: 'syarat-perpanjangan-skp-ahli-k3', title: 'Panduan Syarat & Alur Perpanjangan SKP Ahli K3 Kemnaker RI', intentCategory: 'requirement', desc: 'Prosedur perpanjangan Surat Keputusan Penunjukan (SKP) Ahli K3 yang habis masa berlaku 3 tahun melalui portal TemanK3.' },
    { slug: 'cara-pengajuan-proposal-inhouse-training-k3', title: 'Panduan Pengajuan Proposal In-House Training K3 untuk Perusahaan', intentCategory: 'corporate', desc: 'Cara meminta surat penawaran harga (SPH), silabus yang dikustomisasi, dan negosiasi jadwal pelatihan internal karyawan.' },
    { slug: 'biaya-pelatihan-k3-kebakaran', title: 'Panduan Biaya Pelatihan K3 Kebakaran Kelas D, C, B, dan A', intentCategory: 'cost', desc: 'Rincian harga pembinaan penanggulangan kebakaran Kemnaker RI untuk kelas regu pemadam, koordinator, hingga ahli spesialis.' },
    { slug: 'syarat-pendaftaran-petugas-p3k-kemnaker', title: 'Panduan Syarat & Prosedur Pendaftaran Petugas P3K di Tempat Kerja', intentCategory: 'requirement', desc: 'Ketentuan pendidikan minimal, pas foto, surat tugas instansi, dan kelengkapan berkas pelatihan 30 JP Petugas P3K.' },
    { slug: 'biaya-pelatihan-k3-listrik', title: 'Panduan Biaya Pelatihan Teknisi K3 Listrik & Ahli K3 Listrik', intentCategory: 'cost', desc: 'Perbandingan estimasi biaya pelatihan sertifikasi teknisi listrik vs ahli K3 listrik sesuai Permenaker 12/2015.' },
    { slug: 'syarat-sertifikasi-bnsp-k3', title: 'Panduan Persyaratan Uji Kompetensi & Asesmen Sertifikasi BNSP K3', intentCategory: 'requirement', desc: 'Bukti kerja portofolio, surat pengalaman, CV profesional, dan alur pra-asesmen sertifikasi profesi K3 Garuda BNSP.' },
    { slug: 'biaya-sertifikasi-bnsp-safety-officer', title: 'Panduan Biaya Sertifikasi BNSP Safety Officer & Supervisor K3', intentCategory: 'cost', desc: 'Estimasi biaya uji kompetensi skema pengawas K3, biaya asesmen ulang, dan penerbitan sertifikat kompetensi.' },
    { slug: 'perbedaan-ahli-k3-kemnaker-vs-bnsp', title: 'Panduan Memilih Jalur: Ahli K3 Kemnaker RI vs Sertifikasi BNSP K3', intentCategory: 'comparison', desc: 'Panduan pengambilan keputusan karier: kapan memerlukan SKP penunjukan Kemnaker dan kapan memerlukan sertifikat kompetensi BNSP.' },
    { slug: 'cara-membuat-laporan-triwulan-p2k3', title: 'Panduan Praktis Cara Menyusun Laporan Triwulan P2K3 untuk Disnaker', intentCategory: 'procedure', desc: 'Format baku laporan kegiatan P2K3, statistik kecelakaan kerja, notulen rapat bulanan, dan alur pelaporan ke dinas tenaga kerja.' },
    { slug: 'dokumen-wajib-audit-smk3-pp-50', title: 'Panduan Dokumen Wajib Persiapan Audit Sertifikasi SMK3 PP 50/2012', intentCategory: 'compliance', desc: 'Checklist berkas manual K3, prosedur SOP, bukti notulen rapat, rekaman inspeksi, dan matriks pelatihan untuk 166 kriteria.' },
    { slug: 'biaya-pelatihan-bekerja-di-ketinggian', title: 'Panduan Biaya Pelatihan K3 Bekerja di Ketinggian (TKPK & TKBT)', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan Tenaga Kerja Bangunan Tinggi dan Tenaga Kerja Pada Ketinggian rope access berlisensi Kemnaker.' },
    { slug: 'syarat-mengikuti-pelatihan-ruang-terbatas', title: 'Panduan Syarat Pelatihan K3 Ruang Terbatas (Confined Space Madya/Utama)', intentCategory: 'requirement', desc: 'Kualifikasi fisik sehat bebas klaustrofobia, surat tugas, dan dokumen administrasi peserta pelatihan confined space.' },
    { slug: 'biaya-pelatihan-operator-forklift', title: 'Panduan Biaya Pelatihan & Sertifikasi Operator Forklift (SIO Kemnaker)', intentCategory: 'cost', desc: 'Rincian biaya pembinaan operator forklift Kelas 1 dan Kelas 2 lengkap dengan uji praktik manuver dan penerbitan lisensi SIO.' },
    { slug: 'syarat-sertifikasi-operator-crane-kemnaker', title: 'Panduan Syarat Sertifikasi Operator Crane & Rigger Berlisensi', intentCategory: 'requirement', desc: 'Persyaratan ijazah, pengalaman kerja, pemeriksaan kesehatan mata, dan administrasi lisensi K3 pesawat angkat angkut.' },
    { slug: 'tata-cara-klaim-jkk-bpjs-ketenagakerjaan', title: 'Panduan Tata Cara Pengajuan Klaim Jaminan Kecelakaan Kerja (JKK)', intentCategory: 'procedure', desc: 'Alur pelaporan tahap 1 (2x24 jam), pengisian formulir KK2, verifikasi rumah sakit trauma center, dan pencairan santunan.' },
    { slug: 'cara-menyusun-rencana-keselamatan-konstruksi-rkk', title: 'Panduan Penyusunan Rencana Keselamatan Konstruksi (RKK) Proyek', intentCategory: 'procedure', desc: 'Format penyusunan RKK sesuai Permen PUPR 10/2021: elemen kepemimpinan, perencanaan K3, operasi keselamatan, dan evaluasi.' },
    { slug: 'biaya-pelatihan-hiperkes-dokter-paramedis', title: 'Panduan Biaya Pelatihan Sertifikasi Hiperkes Dokter & Paramedis', intentCategory: 'cost', desc: 'Estimasi biaya pelatihan medis okupasi Hiperkes Kemenaker untuk dokter perusahaan dan perawat klinik tempat kerja.' },
    { slug: 'syarat-pembentukan-p2k3-perusahaan', title: 'Panduan Syarat & Alur Pengesahan Struktur P2K3 di Dinas Tenaga Kerja', intentCategory: 'compliance', desc: 'Persyaratan pembentukan Panitia Pembina K3, surat permohonan pengesahan, struktur ketua & sekretaris, dan SK Disnaker.' },
    { slug: 'cara-menghitung-trir-dan-ltifr-k3', title: 'Panduan Cara Menghitung Rumus TRIR, LTIFR & Severity Rate K3', intentCategory: 'procedure', desc: 'Rumus matematis kalkulasi frekuensi kecelakaan kerja per 200.000 atau 1.000.000 jam kerja selamat dan contoh perhitungannya.' },
    { slug: 'biaya-pelatihan-ahli-k3-kimia', title: 'Panduan Biaya Pelatihan Ahli K3 Kimia & Petugas K3 Kimia', intentCategory: 'cost', desc: 'Estimasi investasi pembinaan 120 JP Ahli K3 Kimia vs 40 JP Petugas Kimia untuk pemenuhan Kepmenaker 187/1999.' },
    { slug: 'syarat-menjadi-auditor-smk3-resmi', title: 'Panduan Syarat & Jalur Karier Menjadi Auditor SMK3 Kemnaker RI', intentCategory: 'career', desc: 'Persyaratan wajib memiliki sertifikat Ahli K3 Umum, pengalaman kerja HSE, kelulusan ujian auditor, dan penunjukan SKP.' },
    { slug: 'tata-cara-audit-internal-smk3-tahunan', title: 'Panduan Langkah Praktis Pelaksanaan Audit Internal SMK3 Perusahaan', intentCategory: 'procedure', desc: 'Tahapan opening meeting, sampling dokumen, verifikasi observasi lapangan, wawancara pekerja, hingga closing meeting.' },
    { slug: 'biaya-pelatihan-k3-rumah-sakit-k3rs', title: 'Panduan Biaya & Silabus Pelatihan K3RS untuk Manajemen Rumah Sakit', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan keselamatan rumah sakit, pengelolaan limbah medis, proteksi kebakaran faskes, dan evakuasi pasien.' },
    { slug: 'syarat-penerbitan-surat-keterangan-laik-k3-riksa-uji', title: 'Panduan Syarat & Alur Riksa Uji Penerbitan Suket Laik K3 Alat Pabrik', intentCategory: 'compliance', desc: 'Prosedur pemeriksaan teknis PJK3 Riksa Uji untuk boiler, crane, elevator, instalasi listrik, dan penangkal petir.' },
    { slug: 'cara-menyusun-hiradc-lengkap', title: 'Panduan Praktis Cara Menyusun Tabel HIRADC Matriks Risiko 5x5', intentCategory: 'procedure', desc: 'Langkah menentukan aktivitas rutin/non-rutin, identifikasi bahaya, skor kemungkinan x keparahan, dan hierarki pengendalian.' },
    { slug: 'biaya-pelatihan-ahli-k3-konstruksi', title: 'Panduan Biaya Pelatihan Ahli K3 Konstruksi Muda, Madya, dan Utama', intentCategory: 'cost', desc: 'Rincian biaya pelatihan pembinaan keselamatan konstruksi Kemnaker dan sertifikasi kompetensi SMKK Kementerian PUPR.' },
    { slug: 'syarat-menjadi-trainer-instruktur-k3', title: 'Panduan Syarat & Kualifikasi Menjadi Instruktur Pelatihan K3 Profesional', intentCategory: 'career', desc: 'Kualifikasi sertifikat Training of Trainer (TOT) BNSP, kepemilikan lisensi spesialis, dan jam terbang mengajar keselamatan kerja.' },
    { slug: 'cara-mendapatkan-penghargaan-zero-accident', title: 'Panduan Syarat & Verifikasi Berkas Penghargaan Kecelakaan Nihil (Zero Accident)', intentCategory: 'compliance', desc: 'Ketentuan penghitungan jam kerja selamat tanpa fatality, audit tim penilai Disnaker, dan penganugerahan piagam Menteri.' },
    { slug: 'biaya-pelatihan-pop-minerba-tambang', title: 'Panduan Biaya Pelatihan & Sertifikasi POP Pertambangan Minerba', intentCategory: 'cost', desc: 'Estimasi biaya bimbingan teknis dan uji kompetensi Pengawas Operasional Pertama (POP) tambang bersertifikat BNSP/ESDM.' },
    { slug: 'syarat-mengikuti-uji-kompetensi-pop-tambang', title: 'Panduan Syarat Pengalaman & Dokumen Uji Kompetensi POP Minerba', intentCategory: 'requirement', desc: 'Ketentuan minimal pendidikan, pengalaman kerja tambang, bukti logbook pengawasan, dan surat penugasan KTT perusahaan.' },
    { slug: 'cara-menyusun-emergency-response-plan-erp', title: 'Panduan Penyusunan Dokumen Rencana Tanggap Darurat (ERP) Pabrik', intentCategory: 'procedure', desc: 'Struktur rencana darurat: denah evakuasi, nomor darurat eksternal, peran regu pemadam/medis, dan jadwal latihan drill berkala.' },
    { slug: 'biaya-pelatihan-ahli-k3-lingkungan-kerja', title: 'Panduan Biaya Pelatihan Ahli K3 Lingkungan Kerja & Higiene Industri', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan pengukuran faktor bahaya kerja sesuai Permenaker 05/2018 dan sertifikasi kompetensi HIMU/HIMA.' },
    { slug: 'syarat-pendaftaran-sertifikasi-rigger-juru-ikat', title: 'Panduan Syarat Pendaftaran Pelatihan Juru Ikat Muatan (Rigger K3)', intentCategory: 'requirement', desc: 'Kelengkapan berkas identitas, surat sehat fisik, dan prosedur pembinaan keselamatan pengikatan beban angkat berat.' },
    { slug: 'cara-menyusun-csms-kontraktor', title: 'Panduan Menyusun Dokumen Contractor Safety Management System (CSMS)', intentCategory: 'procedure', desc: 'Panduan pembuatan dokumen kuesioner prakualifikasi CSMS, risk assessment vendor, dan penilaian kinerja safety kontraktor.' },
    { slug: 'biaya-pelatihan-k3-migas-pengawas', title: 'Panduan Biaya Pelatihan & Sertifikasi Pengawas K3 Migas BNSP', intentCategory: 'cost', desc: 'Estimasi biaya uji kompetensi pengawas keselamatan minyak dan gas bumi, akomodasi uji TUK, dan penerbitan sertifikat Garuda.' },
    { slug: 'syarat-uji-kompetensi-pengawas-k3-migas', title: 'Panduan Syarat Pengalaman & Portofolio Asesmen Pengawas K3 Migas', intentCategory: 'requirement', desc: 'Daftar dokumen portofolio inspeksi migas, izin kerja PTW, laporan investigasi, dan wawancara teknis asesor BNSP.' },
    { slug: 'tata-cara-penerbitan-lisensi-k3-kemnaker', title: 'Panduan Tata Cara Penerbitan & Cetak Lisensi Kewenangan K3 Kemnaker', intentCategory: 'compliance', desc: 'Alur integrasi aplikasi TemanK3, penerbitan barcode resmi kartu lisensi kewenangan, dan pengiriman ke alamat perusahaan.' },
    { slug: 'cara-menyusun-job-safety-analysis-jsa', title: 'Panduan Langkah Demi Langkah Pembuatan Job Safety Analysis (JSA)', intentCategory: 'procedure', desc: 'Template penyusunan formulir JSA: identifikasi tahapan tugas, potensi risiko bahaya mekanik/kimia, dan rekomendasi APD/SOP.' },
    { slug: 'biaya-pelatihan-investigasi-kecelakaan-k3', title: 'Panduan Biaya & Silabus Pelatihan Investigasi Insiden & Root Cause Analysis', intentCategory: 'cost', desc: 'Estimasi biaya workshop teknis metodologi investigasi kecelakaan kerja RCA Fishbone, 5-Why, dan penyusunan rekomendasi CAPA.' },
    { slug: 'syarat-pembentukan-komite-k3-rumah-sakit', title: 'Panduan Syarat & Struktur Organisasi Komite K3RS Rumah Sakit', intentCategory: 'compliance', desc: 'Kriteria penunjukan ketua komite, keterlibatan dokter spesialis okupasi, sanitarian, dan integrasi akreditasi RS.' },
    { slug: 'cara-menghitung-kebutuhan-apar-gedung', title: 'Panduan Cara Menghitung Kebutuhan Jumlah Tabung APAR Ruangan Gedung', intentCategory: 'procedure', desc: 'Kalkulasi luas lantai, klasifikasi potensi bahaya kebakaran ringan/sedang/berat, dan penentuan jarak penempatan tabung 15 meter.' },
    { slug: 'biaya-pelatihan-scaffolding-kemnaker', title: 'Panduan Biaya Pelatihan Teknisi & Supervisor Scaffolding Kemnaker RI', intentCategory: 'cost', desc: 'Rincian biaya pembinaan operator pasang-bongkar perancah pipa dan sertifikasi pengawas perancah konstruksi bangunan.' },
    { slug: 'syarat-menjadi-petugas-k3-kimia', title: 'Panduan Syarat Pendidikan & Penunjukan Petugas K3 Kimia Perusahaan', intentCategory: 'requirement', desc: 'Kualifikasi minimal SMA IPA / SMK Kimia / D3 Teknik, surat penugasan laboratorium/gudang kimia, dan sertifikasi Kemnaker.' },
    { slug: 'cara-membuat-safety-induction-video-materi', title: 'Panduan Pembuatan Materi & Video Safety Induction Tamu Pabrik', intentCategory: 'procedure', desc: 'Komponen wajib briefing keselamatan: jalur evakuasi, titik kumpul, APD wajib, larangan merokok, dan alarm darurat.' },
    { slug: 'biaya-pelatihan-operator-boiler-kemnaker', title: 'Panduan Biaya Pelatihan Operator Boiler Kelas 1 & Kelas 2', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan operator ketel uap industri, uji fungsi safety valve, dan penerbitan SIO resmi Kemnaker RI.' },
    { slug: 'syarat-uji-kelaikan-lift-penumpang-gedung', title: 'Panduan Syarat & Prosedur Riksa Uji Kelayakan Lift Gedung Bertingkat', intentCategory: 'compliance', desc: 'Pemeriksaan tali baja kawat hoist, uji pengereman governor kecepatan lebih, sensor pintu, dan penerbitan izin operasional.' },
    { slug: 'cara-melakukan-fit-testing-respirator-masker', title: 'Panduan Praktis Cara Uji Kerapatan Masker Respirator (Fit Testing K3)', intentCategory: 'procedure', desc: 'Prosedur tes kualitatif larutan saccharin / Bitrex dan tes kuantitatif partikel penghitung Portacount untuk pekerja berdebu.' },
    { slug: 'biaya-pelatihan-k3-fasilitas-kesehatan', title: 'Panduan Biaya Pelatihan Keselamatan Puskesmas & Klinik Kesehatan', intentCategory: 'cost', desc: 'Estimasi biaya pelatihan K3 faskes primer, mitigasi bahaya jarum suntik tertusuk, sterilisasi alat, dan pengelolaan limbah medis.' },
    { slug: 'syarat-penerbitan-sim-k3-alat-berat-tambang', title: 'Panduan Syarat & Uji Penerbitan SIM K3 / Kimper Alat Berat Tambang', intentCategory: 'requirement', desc: 'Prosedur uji teori dan praktik lapangan pengoperasian dump truck hauling tambang sebelum penerbitan kartu izin mengemudi tambang.' },
    { slug: 'cara-menyusun-standar-operasional-prosedur-sop-k3', title: 'Panduan Praktis Format Penyusunan SOP K3 Berstandar ISO 45001', intentCategory: 'procedure', desc: 'Struktur template SOP: tujuan, ruang lingkup, referensi hukum, definisi, langkah kerja berurutan, dan formulir rekaman kontrol.' },
    { slug: 'biaya-pelatihan-auditor-smkp-pertambangan', title: 'Panduan Biaya Pelatihan Auditor Sistem Manajemen Keselamatan Pertambangan', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan implementasi dan audit SMKP Minerba sesuai Kepmen ESDM 26/2018 bagi praktisi HSE tambang.' },
    { slug: 'syarat-menjadi-operator-gondola-kemnaker', title: 'Panduan Syarat & Sertifikasi Operator Gondola Pembersih Kaca Gedung', intentCategory: 'requirement', desc: 'Persyaratan kesehatan bebas acrophobia, sertifikasi pembinaan K3 gondola, dan lisensi resmi pengoperasian kereta gantung.' },
    { slug: 'cara-melakukan-inspeksi-kotak-p3k-bulanan', title: 'Panduan Checklist & Cara Melakukan Inspeksi Kotak P3K Bulanan Pabrik', intentCategory: 'procedure', desc: 'Pemeriksaan tanggal kedaluwarsa obat, kelengkapan jumlah kasa steril, perban gulung, plester, dan buku catatan pemakaian obat.' },
    { slug: 'biaya-pelatihan-petugas-kebakaran-kelas-d', title: 'Panduan Biaya Pelatihan Petugas Peran Kebakaran (Kelas D Kemnaker)', intentCategory: 'cost', desc: 'Estimasi harga kelas pembinaan dasar penanggulangan kebakaran 3 hari untuk staf operasional, floor warden, dan security gedung.' },
    { slug: 'syarat-pemberian-kompensasi-cacat-akibat-kerja', title: 'Panduan Syarat & Tabel Persentase Santunan Cacat Akibat Kecelakaan Kerja', intentCategory: 'compliance', desc: 'Kriteria penetapan persentase kecacatan anatomi dan fungsi oleh dokter penasihat ketenagakerjaan serta pembayaran BPJS.' },
    { slug: 'cara-menyusun-denah-jalur-evakuasi-gedung', title: 'Panduan Standar Pembuatan Denah Jalur Evakuasi Kebakaran & Gempa', intentCategory: 'procedure', desc: 'Ketentuan arah panah jalur penyelamatan, simbol titik Anda berada (You Are Here), lokasi APAR, dan pintu keluar darurat.' },
    { slug: 'biaya-pelatihan-k3-telekomunikasi-tower', title: 'Panduan Biaya Pelatihan Pemanjat & Teknisi Menara Telekomunikasi BTS', intentCategory: 'cost', desc: 'Estimasi biaya sertifikasi keselamatan rigging menara seluler, teknik pemasangan shock absorber, dan pertolongan pertama ketinggian.' },
    { slug: 'syarat-pengajuan-sertifikasi-iso-45001', title: 'Panduan Syarat & Tahapan Audit Sertifikasi ISO 45001:2018 Perusahaan', intentCategory: 'compliance', desc: 'Tahap gap analysis, implementasi sistem manajemen 3 bulan, audit stage 1 dokumen, audit stage 2 lapangan, dan penerbitan sertifikat.' },
    { slug: 'cara-melakukan-uji-beban-crane-berkala', title: 'Panduan Prosedur Uji Beban Statis & Dinamis Riksa Uji Crane Industri', intentCategory: 'procedure', desc: 'Langkah persiapan beban uji bersertifikat, pengukuran defleksi struktur girder crane, dan pengujian fungsi katup hidrolik rem.' },
    { slug: 'biaya-pelatihan-ergonomi-industri', title: 'Panduan Biaya & Silabus Workshop Ergonomi Praktis Tempat Kerja', intentCategory: 'cost', desc: 'Estimasi biaya pelatihan asesmen postur RULA/REBA, penataan stasiun kerja, dan pencegahan keluhan otot rangka karyawan.' },
    { slug: 'syarat-menjadi-ahli-spesialis-k3-pesawat-tenaga', title: 'Panduan Syarat Kualifikasi Penunjukan Ahli K3 Spesialis PTP Kemnaker', intentCategory: 'career', desc: 'Latar belakang sarjana teknik mesin/elektro, pengalaman riksa uji mesin industri, pembinaan spesialis, dan SKP Menteri.' },
    { slug: 'cara-mengelola-limbah-medis-b3-klinik', title: 'Panduan Pengelolaan & Penyimpanan Limbah Medis B3 Jarum Suntik Faskes', intentCategory: 'procedure', desc: 'Pemisahan safety box limbah tajam, kantong kuning limbah infeksius, penyimpanan cold storage, dan kerjasama manifest pengolah berizin.' },
    { slug: 'biaya-pelatihan-first-aid-cpr-aed', title: 'Panduan Biaya Workshop Pelatihan CPR RJP & Penggunaan Alat AED Perusahaan', intentCategory: 'cost', desc: 'Estimasi biaya in-house training bantuan hidup dasar medis untuk karyawan perkantoran, bank, pabrik, dan staf perhotelan.' },
    { slug: 'syarat-pemasangan-sistem-loto-kelistrikan', title: 'Panduan Standar & Syarat Penerapan Lockout-Tagout (LOTO) Listrik Pabrik', intentCategory: 'procedure', desc: 'Ketentuan gembok pribadi (padlock), pengait hasp multi-kunci, label peringatan bahaya, dan uji coba verifikasi nihil tegangan.' },
    { slug: 'cara-menyusun-kebijakan-k3-tertulis-perusahaan', title: 'Panduan Cara Merumuskan Pernyataan Kebijakan K3 Tertulis Direksi', intentCategory: 'procedure', desc: 'Komponen wajib komitmen pimpinan: pencegahan kecelakaan, kepatuhan undang-undang, perbaikan berkelanjutan, dan sosialisasi pekerja.' },
    { slug: 'biaya-pelatihan-confined-space-rescue', title: 'Panduan Biaya Pelatihan Khusus Regu Penyelamat Ruang Terbatas (Rescue Team)', intentCategory: 'cost', desc: 'Estimasi investasi pelatihan simulasi evakuasi darurat tangki tertutup menggunakan tripod, SCBA, dan stretcher khusus ruang sempit.' },
    { slug: 'syarat-menjadi-dokter-pemeriksa-kesehatan-kerja', title: 'Panduan Syarat & Penunjukan SKP Dokter Pemeriksa Kesehatan Tenaga Kerja', intentCategory: 'career', desc: 'Kelengkapan sertifikat Hiperkes, STR/SIP dokter aktif, permohonan ke dinas tenaga kerja, dan surat keputusan penunjukan Ditjen Binwasnaker.' },
    { slug: 'cara-melakukan-uji-emisi-cerobong-pabrik', title: 'Panduan Prosedur Pengambilan Sampel & Uji Emisi Gas Buang Cerobong Industri', intentCategory: 'procedure', desc: 'Persyaratan lubang sampling (sampling port), tangga uji berkala, pengukuran parameter SO2/NOx/partikulat, dan laboratorium lingkungan.' },
    { slug: 'biaya-pelatihan-manajemen-risiko-iso-31000', title: 'Panduan Biaya Pelatihan Sertifikasi Manajemen Risiko K3 ISO 31000', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan risk officer, penyusunan risk register korporat, dan evaluasi pengendalian risiko bisnis terpadu.' },
    { slug: 'syarat-perpanjangan-lisensi-sio-operator-kemnaker', title: 'Panduan Syarat & Biaya Perpanjangan Lisensi SIO Operator Alat Berat K3', intentCategory: 'requirement', desc: 'Berkas fotokopi SIO lama, pas foto latar belakang merah, surat sehat mata dokter, dan proses validasi perpanjangan 5 tahunan.' },
    { slug: 'cara-menyusun-jadwal-pelatihan-k3-tahunan', title: 'Panduan Penyusunan Training Need Analysis (TNA) & Matriks Pelatihan K3 Tahunan', intentCategory: 'procedure', desc: 'Langkah memetakan kebutuhan lisensi wajib seluruh departemen, jadwal kalender pembinaan, dan alokasi anggaran training HRD.' }
  ];

  // Populate 77 commercial guides
  for (const g of commercialGuides) {
    records.push({
      section: 'panduan',
      slug: g.slug,
      title: g.title,
      metaTitle: `${g.title} | Pelatihan K3 Indonesia`,
      description: `${g.desc} Informasi resmi dan konsultasi pendaftaran bersama PT Kreasi Ultimate Berjaya.`,
      answer: `${g.title} memberikan rincian komprehensif mengenai ${g.desc} untuk memastikan kelancaran administrasi dan kepatuhan standar K3 nasional.`,
      highlights: ['Panduan Praktis & Terstruktur', 'Rujukan Regulasi & Standar Resmi', 'Transparansi Biaya & Syarat Berkas', 'Layanan Konsultasi Bebas Biaya'],
      blocks: [
        { heading: `Mengenal ${g.title}`, paragraphs: [`Panduan ini disusun secara sistematis guna menjawab pertanyaan mendasar mengenai ${g.desc}.`, 'Pemahaman yang tepat atas ketentuan ini sangat penting baik bagi individu yang ingin meningkatkan kualifikasi profesional maupun bagi manajemen perusahaan yang merencanakan pembinaan karyawan.'] },
        { heading: 'Rincian Aspek & Parameter Kunci', paragraphs: ['Aspek-aspek fundamental yang dibahas dalam panduan ini mencakup:'], bullets: ['Kelengkapan dokumen administrasi dan syarat kualifikasi', 'Estimasi alokasi anggaran dan fasilitas program', 'Tahapan proses verifikasi berkas hingga penerbitan sertifikat', 'Tips praktis mempercepat kelulusan dan kepatuhan regulasi'] },
        { heading: 'Layanan Pre-Screening & Konsultasi', paragraphs: ['PT Kreasi Ultimate Berjaya menyediakan layanan verifikasi kelayakan berkas pendaftaran calon peserta tanpa dipungut biaya sebelum proses konfirmasi batch pelatihan.'] }
      ],
      faqs: [
        { question: `Bagaimana cara berkonsultasi mengenai ${g.title}?`, answer: 'Anda dapat menghubungi konsultan admisi kami melalui WhatsApp untuk mendapatkan panduan berkas, format dokumen pendaftaran, dan informasi batch terdekat.' },
        { question: `Apakah informasi pada ${g.title} selalu diperbarui?`, answer: 'Ya, seluruh panduan diperbarui secara berkala mengikuti kebijakan dan regulasi ketenagakerjaan terkini.' }
      ],
      related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'panduan/biaya-pelatihan-k3', 'perbandingan/bnsp-vs-kemnaker'],
      sources: [
        { label: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja', url: 'https://jdih.kemnaker.go.id/katalog/uu-1-1970', publisher: 'Pemerintah RI / Kemnaker' },
        { label: 'Kementerian Ketenagakerjaan Republik Indonesia', url: 'https://kemnaker.go.id', publisher: 'Kemnaker RI' }
      ],
      status: 'published',
      publishedAt: '2026-08-10',
      updatedAt: '2026-09-01',
      indexable: true,
      intent: `panduan ${g.slug.replace(/-/g, ' ')}`,
      primaryKeyword: `${g.slug.replace(/-/g, ' ')}`,
      searchIntent: `panduan resmi mengenai ${g.title}`,
      intentType: 'commercial',
      parentTopic: 'Panduan & Persyaratan Pelatihan K3',
      cannibalizationGroup: 'panduan-komersial',
      contentKind: 'guide',
      primaryCtaText: 'Konsultasi Pendaftaran & Berkas',
      primaryCtaIntent: 'syarat',
      secondaryCtaText: 'Tanya Jadwal & Biaya Batch',
      secondaryCtaIntent: 'jadwal'
    });
  }

  // Group B: 250 Workplace Hazard Mitigation SOPs & Technical Procedures (5 clusters of 50 items)
  const procedureClusters = [
    {
      cluster: 'HIRADC & Analisis Risiko Lapangan',
      prefix: 'Prosedur HIRADC',
      topics: [
        'Cara Mengidentifikasi Bahaya Fisika di Tempat Kerja', 'Cara Mengidentifikasi Bahaya Kimia B3 Pabrik', 'Cara Mengidentifikasi Bahaya Biologis & Infeksius',
        'Cara Mengidentifikasi Bahaya Ergonomi Postur Statis', 'Cara Mengidentifikasi Bahaya Psikososial Beban Kerja', 'Cara Menilai Skor Kemungkinan (Likelihood) Risiko',
        'Cara Menilai Skor Keparahan (Severity) Risiko', 'Cara Menentukan Tingkat Risiko Sisa (Residual Risk)', 'Cara Menyusun Register Risiko K3 Departemen',
        'Cara Menerapkan Eliminasi Bahaya Desain Pabrik', 'Cara Menerapkan Substitusi Bahan Kimia Toksik', 'Cara Merancang Rekayasa Teknik Penutup Mesin',
        'Cara Merancang Pengendalian Administratif SOP K3', 'Cara Memilih APD Berdasarkan Matriks Bahaya', 'Cara Melakukan Tinjauan Ulang HIRADC Tahunan',
        'Cara Mengidentifikasi Bahaya Aktivitas Non-Rutin', 'Cara Mengidentifikasi Bahaya Saat Kondisi Darurat', 'Cara Menilai Risiko Pekerjaan Subkontraktor',
        'Cara Melakukan Penilaian Risiko Bahaya Kebakaran', 'Cara Menilai Risiko Pengangkatan Manual Berat', 'Cara Melakukan Penilaian Risiko Kebisingan Area Kerja',
        'Cara Menilai Risiko Paparan Iklim Panas Lapangan', 'Cara Menilai Risiko Getaran Peralatan Portabel', 'Cara Menilai Risiko Radiasi Elektromagnetik Las',
        'Cara Menilai Risiko Bahaya Terpeleset & Tersandung', 'Cara Menilai Risiko Kejatuhan Benda dari Ketinggian', 'Cara Menilai Risiko Terjepit Titik Putar Mesin',
        'Cara Menilai Risiko Terkena Percikan Logam Panas', 'Cara Menilai Risiko Paparan Gas Beracun Sumur', 'Cara Menilai Risiko Pekerjaan di Dekat Air Terbuka',
        'Cara Menyusun Lembar Penilaian Risiko Pekerjaan Kritis', 'Cara Mengomunikasikan Hasil HIRADC ke Pekerja', 'Cara Mengintegrasikan HIRADC dengan Anggaran K3',
        'Cara Mengevaluasi Keandalan Kontrol Pencegahan Bahaya', 'Cara Mengukur Efektivitas Hierarki Kontrol Lapangan', 'Cara Menerapkan Manajemen Risiko Berbasis ISO 31000',
        'Cara Mengidentifikasi Bahaya Fasilitas Laboratorium Kimia', 'Cara Mengidentifikasi Bahaya Ruang Penyimpanan Gas', 'Cara Mengidentifikasi Bahaya Area Pengisian BBM Tangki',
        'Cara Mengidentifikasi Bahaya Operasional Dermaga Pelabuhan', 'Cara Mengidentifikasi Bahaya Pekerjaan Konstruksi Bawah Air', 'Cara Mengidentifikasi Bahaya Pengeboran Terowongan',
        'Cara Mengidentifikasi Bahaya Pabrik Pengolahan Sawit', 'Cara Mengidentifikasi Bahaya Lini Perakitan Elektronik', 'Cara Mengidentifikasi Bahaya Fasilitas Smelter Logam',
        'Cara Mengidentifikasi Bahaya Instalasi Pembangkit Listrik', 'Cara Mengidentifikasi Bahaya Operasi Rig Lepas Pantai', 'Cara Mengidentifikasi Bahaya Rumah Potong Hewan & F&B',
        'Cara Mengidentifikasi Bahaya Pergudangan Bahan Kimia', 'Cara Menyusun Laporan Ringkasan Profil Risiko Direksi'
      ]
    },
    {
      cluster: 'LOTO & Sistem Izin Kerja Aman (PTW)',
      prefix: 'Prosedur LOTO & PTW',
      topics: [
        'Cara Menerapkan Prosedur Lockout Tagout (LOTO)', 'Cara Mengisolasi Sumber Energi Listrik Utama Panel', 'Cara Mengisolasi Energi Tekanan Hidrolik Mesin',
        'Cara Mengisolasi Energi Pneumatik Udara Tekan', 'Cara Mengisolasi Katup Pipa Gas Cair Bertekanan', 'Cara Memasang Gembok Keselamatan Multi-Lockout Hasps',
        'Cara Memasang Tagging Peringatan Bahaya LOTO Personal', 'Cara Memverifikasi Kondisi Nol Energi (Zero Energy Test)', 'Cara Melepaskan Kunci LOTO Pasca Selesai Perbaikan',
        'Cara Menangani Kunci LOTO yang Tertinggal Teknisi', 'Cara Menerbitkan Izin Kerja Aman (Permit to Work - PTW)', 'Cara Memeriksa Kelengkapan Izin Kerja Panas (Hot Work Permit)',
        'Cara Memeriksa Kelengkapan Izin Masuk Ruang Terbatas', 'Cara Memeriksa Kelengkapan Izin Bekerja di Ketinggian', 'Cara Memeriksa Kelengkapan Izin Pekerjaan Penggalian Tanah',
        'Cara Memeriksa Kelengkapan Izin Pengangkatan Kritis (Critical Lift)', 'Cara Memeriksa Kelengkapan Izin Pekerjaan Tegangan Listrik Tinggi', 'Cara Menutup Izin Kerja Aman Pasca Selesai Tugas',
        'Cara Membatalkan Izin Kerja Saat Terjadi Bahaya Mendadak', 'Cara Mengelola Papan Display Izin Kerja (PTW Board)', 'Cara Mengawasi Kepatuhan LOTO Subkontraktor',
        'Cara Menyusun Matriks Otorisasi Petugas Penerbit Izin PTW', 'Cara Menangani Pekerjaan Panas Dekat Tangki Bahan Bakar', 'Cara Melakukan Fire Watch Selama Hot Work Berlangsung',
        'Cara Memeriksa Gas Atmosfer Sebelum Menerbitkan PTW Panas', 'Cara Mengisolasi Pipa Menggunakan Kacamata Buta (Blind Flange)', 'Cara Mengunci Katup Putar Menggunakan Valve Lockout',
        'Cara Mengunci Saklar Pemutus Arus Menggunakan Breaker Lockout', 'Cara Mengunci Steker Kabel Menggunakan Plug Lockout', 'Cara Mengunci Tabung Gas Menggunakan Cylinder Lockout',
        'Cara Memasang Kabel Pengunci Cable Lockout Fleksibel', 'Cara Menguji Kelaikan Gembok & Tag LOTO Tahan Cuaca', 'Cara Menyusun Prosedur LOTO Khusus Mesin Kompleks',
        'Cara Mengintegrasikan Sistem PTW Elektronik (e-PTW)', 'Cara Melakukan Audit Kepatuhan Izin Kerja Aman Harian', 'Cara Menangani Pekerjaan Simultan Berpotensi Bahaya (SIMOPS)',
        'Cara Menetapkan Zona Bebas Orang Selama Pekerjaan Panas', 'Cara Menyediakan Tirai Terpal Tahan Api Area Hot Work', 'Cara Menyiapkan Tabung APAR Khusus Siaga Hot Work',
        'Cara Menginspeksi Trafo Las Sebelum Memulai Pekerjaan', 'Cara Menjamin Sirkulasi Udara Ruangan Saat Pengelasan', 'Cara Mengamankan Kabel Las dari Bahaya Terlindas',
        'Cara Memasang Barikade Kuning Area Pekerjaan Berbahaya', 'Cara Mengatur Izin Kerja Malam Hari & Penerangan Khusus', 'Cara Mengawasi Pekerjaan Berbahaya di Akhir Pekan',
        'Cara Menyimpan Arsip Lembar Izin Kerja Minimal 1 Tahun', 'Cara Menyusun Formulir JSA Lampiran Wajib Izin Kerja PTW', 'Cara Menangani Pelanggaran Prosedur LOTO Tanpa Izin',
        'Cara Mengadakan Refreshment Training Prosedur LOTO Karyawan', 'Cara Mengevaluasi Efektivitas Sistem Izin Kerja Aman Pabrik'
      ]
    },
    {
      cluster: 'Prosedur Tanggap Darurat & Mitigasi Insiden',
      prefix: 'Prosedur Tanggap Darurat',
      topics: [
        'Cara Mengoperasikan Tabung APAR Metode PASS', 'Cara Menggelar Selang Hydrant Pemadam Kebakaran', 'Cara Membuka Katup Pendaratan Hydrant (Landing Valve)',
        'Cara Menggunakan Nozzle Hydrant Posisi Jet dan Spray', 'Cara Mengoperasikan Pompa Pemadam Api Diesel Darurat', 'Cara Memeriksa Tekanan Jarum Manometer Tabung APAR',
        'Cara Menimbang Berat Bersih Tabung Pemadam Karbon Dioksida', 'Cara Memadamkan Kebakaran Dapur Menggunakan Fire Blanket', 'Cara Memadamkan Kebakaran Logam Menggunakan Powder Khusus',
        'Cara Memandu Evakuasi Pekerja Menuju Titik Kumpul (Assembly Point)', 'Cara Melakukan Penghitungan Jumlah Orang (Headcount) Darurat', 'Cara Membuka Pintu Darurat Panic Bar dengan Benar',
        'Cara Memandu Evakuasi Korban Penyandang Disabilitas', 'Cara Menghidupkan Sirine Alarm Evakuasi Manual Break Glass', 'Cara Melakukan Panggilan Darurat ke Dinas Pemadam Kebakaran',
        'Cara Menangani Tumpahan Bahan Kimia Menggunakan Spill Kit', 'Cara Memasang Boom Penyerap Minyak di Permukaan Air', 'Cara Melakukan Netralisasi Cairan Asam Korosif Tumpah',
        'Cara Menangani Kebocoran Tabung Gas Beracun Klorin/Amonia', 'Cara Memasang Baju Hazmat Level A/B Tanggap Darurat Kimia', 'Cara Menangani Korban Terkena Percikan Asam di Mata (Eyewash)',
        'Cara Membilas Tubuh Korban di Stasiun Emergency Shower', 'Cara Menyelamatkan Korban Tergantung pada Sabuk Harness (Suspension Trauma)', 'Cara Menurunkan Korban Ketinggian Menggunakan Sistem Descender',
        'Cara Mengeluarkan Korban Terjebak di Ruang Terbatas dengan Tripod', 'Cara Memberikan Bantuan Pernapasan Menggunakan Alat SCBA Rescue', 'Cara Melakukan Resusitasi Jantung Paru (RJP/CPR) Dewasa',
        'Cara Mengoperasikan Alat Kejut Jantung Otomatis (Defibrilator AED)', 'Cara Menghentikan Pendarahan Arteri Menggunakan Torniket Medis', 'Cara Memasang Penyangga Leher (Cervical Collar) Korban Jatuh',
        'Cara Memindahkan Korban Cedera Tulang Belakang Menggunakan Spine Board', 'Cara Memasang Bidai Fraktur Patah Tulang Kaki dan Lengan', 'Cara Mengobati Luka Bakar Derajat 1, 2, dan 3 di Lapangan',
        'Cara Menangani Korban Pingsan Akibat Sengatan Panas (Heat Stroke)', 'Cara Menangani Korban Gigitan Ular Berbisa di Area Proyek', 'Cara Mengisolasi Lokasi Kejadian Kecelakaan Kerja (Police Line K3)',
        'Cara Mengumpulkan Bukti Fisik & Foto Investigasi Insiden', 'Cara Mewawancarai Saksi Mata Kecelakaan Tanpa Menghakimi', 'Cara Menyusun Laporan Investigasi Insiden Metode 5-Why',
        'Cara Mengisi Formulir Laporan Kecelakaan Disnaker Bentuk 3 KK01', 'Cara Menghitung Hari Kerja Hilang Korban Kecelakaan Kerja', 'Cara Mengadakan Safety Stand Down Pasca Insiden Mayor',
        'Cara Melatih Regu Tanggap Darurat Fire Brigade Pabrik', 'Cara Merancang Skenario Simulasi Evakuasi Gempa Bumi Gedung', 'Cara Menguji Sistem Pengeras Suara Darurat (Public Address)',
        'Cara Memeriksa Lampu Darurat Baterai Mandiri di Jalur Evakuasi', 'Cara Menjaga Koridor Evakuasi Tetap Bebas dari Hambatan Barang', 'Cara Menyusun Rencana Kontinjensi Banjir Kawasan Industri',
        'Cara Mengelola Hubungan Media Pasca Kecelakaan Industri Terbuka', 'Cara Mengevaluasi Waktu Respons Regu Tanggap Darurat Perusahaan'
      ]
    },
    {
      cluster: 'Prosedur Pengoperasian & Inspeksi Alat Aman',
      prefix: 'Prosedur Alat & Inspeksi',
      topics: [
        'Cara Memeriksa Forklift Sebelum Operasi (Pre-Operation Checklist)', 'Cara Mengemudikan Forklift Melewati Jalur Sempit & Turunan', 'Cara Mengangkat Beban Palet Menggunakan Forklift dengan Seimbang',
        'Cara Mengisi Daya Baterai Forklift Elektrik di Ruang Pengecasan', 'Cara Mengganti Tabung Gas LPG Forklift Bahan Bakar Gas', 'Cara Memeriksa Kondisi Rantai Angkat & Mast Forklift',
        'Cara Mengoperasikan Mobile Crane Sesuai Load Chart Kapasitas', 'Cara Menentukan Sudut Boom & Radius Aman Pengangkatan Crane', 'Cara Memasang Outrigger Mobile Crane pada Landasan Tanah Keras',
        'Cara Memeriksa Kekuatan Alas Outrigger Pad Crane', 'Cara Mengikat Beban Menggunakan Webbing Sling Sintetis Aman', 'Cara Memeriksa Tali Kawat Baja (Wire Rope) Crane dari Kerusakan',
        'Cara Memilih Shackle dan Eyebolt Sesuai Beban Kerja Aman (WLL)', 'Cara Mengarahkan Operator Crane Menggunakan Isyarat Tangan Rigger', 'Cara Mengendalikan Ayunan Beban Menggunakan Tali Tagline',
        'Cara Memasang Rangka Perancah Scaffolding Tabular Pipa Baja', 'Cara Memasang Papan Kerja (Platform Walkway) Scaffolding Rapat', 'Cara Memasang Guardrail Pagar Pengaman Ketinggian Scaffolding',
        'Cara Memasang Papan Kaki (Toe Board) Pencegah Benda Jatuh', 'Cara Memasang Angkur Pengikat Scaffolding ke Dinding Struktur', 'Cara Memeriksa Kestabilan Scaffolding Menggunakan Tagging Hijau/Merah',
        'Cara Mengoperasikan Boom Lift & Scissor Lift Ketinggian', 'Cara Mengoperasikan Gondola Pembersih Kaca Gedung Bertingkat', 'Cara Memeriksa Tali Keselamatan Jiwa (Lifeline) Vertikal/Horizontal',
        'Cara Memakai Sabuk Pengaman Full Body Harness dengan Benar', 'Cara Memasang Tali Peredam Kejut (Shock Absorbing Lanyard)', 'Cara Mengoperasikan Katrol Derek Hoist Listrik Bengkel',
        'Cara Memeriksa Pengunci Kait Derek (Safety Latch Hook)', 'Cara Mengoperasikan Mesin Bubut & Perkakas Logam Aman', 'Cara Memeriksa Pelindung Mata Gerinda Duduk (Grinding Wheel Guard)',
        'Cara Mengoperasikan Mesin Potong Kayu Gergaji Sirkular', 'Cara Memeriksa Saklar Emergency Stop Mesin Pabrik', 'Cara Mengoperasikan Kompresor Udara & Membuang Air Kondensat',
        'Cara Memeriksa Kaca Duga Level Air Ketel Uap (Boiler Glass)', 'Cara Melakukan Uji Coba Tiup Katup Pengaman Uap (Safety Valve Blowdown)', 'Cara Mengoperasikan Bejana Tangki Timbun Bahan Bakar',
        'Cara Memeriksa Grounding Pembumian Truk Tangki Saat Bongkar BBM', 'Cara Mengoperasikan Alat Berat Excavator Penggalian Tanah', 'Cara Mengatur Jarak Aman Excavator dari Tebing Curam',
        'Cara Mengoperasikan Dump Truck Tambang di Jalan Angkut Hauling', 'Cara Memarkir Alat Berat Tambang di Lahan Miring dengan Aman', 'Cara Mengoperasikan Bulldozer Penataan Timbunan Tanah',
        'Cara Memeriksa Sensor Interlock Pintu Mesin Otomatis', 'Cara Menginspeksi Tangga Lipat Aluminium Portabel', 'Cara Memasang Jaring Pengaman Safety Net Proyek Gedung',
        'Cara Mengoperasikan Alat Las Listrik & Mengatur Arus Aman', 'Cara Memeriksa Selang Las Blender Oksigen-Asetilen dari Kebocoran', 'Cara Mengoperasikan Mesin Pemadat Tanah (Vibro Roller)',
        'Cara Memeriksa Kelayakan Tabung Gas Bertekanan Sebelum Dipakai', 'Cara Menyusun Jadwal Perawatan Preventif Peralatan K3 Pabrik'
      ]
    },
    {
      cluster: 'Prosedur Kesehatan Kerja, Ergonomi & Higiene',
      prefix: 'Prosedur Higiene & Kesehatan',
      topics: [
        'Cara Melakukan Pengukuran Kebisingan Menggunakan Sound Level Meter', 'Cara Menentukan Titik Pengukuran Kebisingan di Ruang Produksi', 'Cara Mengukur Dosis Paparan Bising Menggunakan Noise Dosimeter',
        'Cara Memilih Jenis Earplug atau Earmuff Berdasarkan Nilai NRR', 'Cara Memasang Sumbat Telinga (Earplug) Busa dengan Benar', 'Cara Melakukan Pengukuran Intensitas Pencahayaan dengan Lux Meter',
        'Cara Menilai Kenyamanan Pencahayaan pada Meja Komputer', 'Cara Mengukur Indeks Suhu Basah dan Bola (ISBB/WBGT) Panas', 'Cara Mengatur Waktu Kerja dan Istirahat di Lingkungan Panas Ekstrem',
        'Cara Menyediakan Minuman Elektrolit & Air Minum Pekerja Lapangan', 'Cara Mengukur Getaran Lengan-Tangan Perkakas Pemecah Jackhammer', 'Cara Mengukur Getaran Seluruh Tubuh Kursi Operator Alat Berat',
        'Cara Melakukan Penilaian Postur Kerja Metode RULA', 'Cara Melakukan Penilaian Postur Kerja Metode REBA', 'Cara Mengatur Ketinggian Kursi dan Meja Komputer Ergonomis',
        'Cara Mengatur Jarak Layar Monitor Komputer Pencegah Mata Lelah', 'Cara Memandu Gerakan Senam Peregangan Kerja di Kantor & Pabrik', 'Cara Mengangkat Beban Manual Menggunakan Teknik Kaki Ditekuk',
        'Cara Menghitung Batas Beban Angkat Manual Formula NIOSH', 'Cara Menggunakan Alat Bantu Angkat Vakum (Vacuum Lifter)', 'Cara Melakukan Uji Kualitas Udara Ruangan Menggunakan Gas Detector',
        'Cara Mengambil Sampel Debu Udara Kerja Menggunakan Personal Sampler', 'Cara Menimbang Berat Kertas Filter Debu Akurat di Laboratorium', 'Cara Memeriksa Kecepatan Aliran Udara Kap Pengisap Ventilasi (LEV)',
        'Cara Mengganti Filter HEPA Unit Pembersih Udara Ruangan Bersih', 'Cara Melakukan Uji Kerapatan Masker N95 Metode Kualitatif Sakarin', 'Cara Membersihkan dan Menyimpan Masker Respirator Setengah Wajah',
        'Cara Mengganti Tabung Kartrid Filter Gas Kimia Tepat Waktu', 'Cara Memeriksa Fasilitas Sanitasi Toilet Pekerja Sesuai Rasio Naker', 'Cara Mengambil Sampel Air Bersih Pabrik untuk Uji Mikrobiologi',
        'Cara Melakukan Inspeksi Higiene Kantin dan Dapur Karyawan', 'Cara Menyimpan Makanan Pekerja Guna Mencegah Keracunan Pangan Massal', 'Cara Mengelola Sampah Sisa Makanan Kantin secara Higienis',
        'Cara Memantau Program Pemberantasan Nyamuk & Vektor di Pabrik', 'Cara Melakukan Pemeriksaan Suhu Tubuh Harian Tenaga Kerja', 'Cara Menangani Pekerja yang Mengalami Gejala Kelelahan Berat (Fatigue)',
        'Cara Melakukan Skrining Awal Risiko Penyakit Kardiovaskular Pekerja', 'Cara Menjadwalkan Medical Check-Up (MCU) Berkala Karyawan', 'Cara Menganalisis Tren Hasil MCU Karyawan untuk Tindakan Pencegahan',
        'Cara Mengelola Rekam Medis Kesehatan Kerja Sesuai Kerahasiaan Medis', 'Cara Mengatur Program Olahraga Kebugaran & Senam Sehat Karyawan', 'Cara Mengatasi Gejala Stres Kerja dan Kejenuhan (Burnout) Pekerja',
        'Cara Menyediakan Ruang Konseling Kesehatan Kerja Perusahaan', 'Cara Merancang Fasilitas Ruang Laktasi Menyusui bagi Pekerja Wanita', 'Cara Menangani Insiden Tertusuk Jarum Suntik Medis Bekas (Needlestick)',
        'Cara Mengelola Limbah Farmasi Kedaluwarsa di Klinik Pabrik', 'Cara Melakukan Desinfeksi Rutin Area Kerja Bersama', 'Cara Mengedukasi Pekerja Mengenai Bahaya Merokok bagi Kesehatan Paru',
        'Cara Memantau Indeks Massa Tubuh (IMT) dan Program Diet Sehat Pekerja', 'Cara Menyusun Laporan Program Pelayanan Kesehatan Kerja ke Disnaker'
      ]
    }
  ];

  for (const pc of procedureClusters) {
    for (let i = 0; i < pc.topics.length; i++) {
      const topicName = pc.topics[i];
      const slug = `${topicName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`.replace(/^-|-$/g, '');
      const fullTitle = `Panduan: ${topicName}`;

      records.push({
        section: 'panduan',
        slug,
        title: fullTitle,
        metaTitle: `${fullTitle}: Langkah, Prosedur & Checklist K3`,
        description: `Petunjuk teknis ${fullTitle}: prosedur standar operasional (SOP), identifikasi bahaya, langkah kerja aman, dan checklist kepatuhan K3.`,
        answer: `${fullTitle} adalah instruksi kerja terstandar yang merinci tahapan sistematis dalam domain ${pc.cluster} guna mencegah insiden kerja dan menjamin perlindungan tenaga kerja.`,
        highlights: [`Kategori ${pc.cluster}`, 'Tahapan Prosedur Kerja Standar', 'Mitigasi Risiko Berbasis HIRADC', 'Checklist Kepatuhan Lapangan'],
        blocks: [
          { heading: `Tujuan & Prinsip Dasar ${fullTitle}`, paragraphs: [`Panduan teknis ${fullTitle} disusun sebagai pedoman operasional bagi pengawas, praktisi keselamatan kerja, dan tenaga kerja lapangan dalam menerapkan langkah kerja aman pada domain ${pc.cluster}.`, 'Pelaksanaan prosedur yang tertib dan konsisten terbukti efektif menekan angka kecelakaan kerja, kerusakan aset, serta potensi tuntutan hukum akibat kelalaian operasional.'] },
          { heading: 'Tahapan Kerja & Langkah Eksekusi Aman', paragraphs: ['Langkah-langkah operasional yang wajib dipatuhi meliputi:'], bullets: ['Pemeriksaan awal kondisi area kerja dan kelaikan peralatan kerja', 'Verifikasi izin kerja aman (PTW) dan kelengkapan APD yang sesuai', 'Pelaksanaan tugas secara berurutan sesuai instruksi kerja terstandar', 'Pemeriksaan akhir, pembersihan area kerja (housekeeping), dan pelaporan hasil kerja'] },
          { heading: 'Tindakan Pengendalian Bahaya Kritis', paragraphs: ['Sebelum memulai pekerjaan, pastikan seluruh tindakan pengendalian bahaya (seperti isolasi energi, pemasangan barikade peringatan, dan penyediaan alat tanggap darurat) telah diaktifkan dan diverifikasi oleh pengawas yang berwenang.'] },
          { heading: 'Kepatuhan Regulasi & Standar Industri', paragraphs: ['Prosedur ini merujuk pada ketentuan UU No. 1 Tahun 1970, PP No. 50 Tahun 2012 tentang SMK3, serta standar teknis ketenagakerjaan yang berlaku di Indonesia.'] }
        ],
        faqs: [
          { question: `Siapa yang wajib menerapkan panduan ${fullTitle}?`, answer: 'Seluruh tenaga kerja yang terlibat dalam aktivitas tersebut, diawasi langsung oleh pengawas lapangan, safety officer, dan penanggung jawab area.' },
          { question: `Apa yang harus dilakukan jika ditemukan kondisi tidak aman saat pelaksanaan?`, answer: 'Hentikan pekerjaan segera menggunakan Stop Work Authority, laporkan kepada pengawas HSE, dan lakukan perbaikan sebelum pekerjaan dilanjutkan.' }
        ],
        related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker'],
        sources: [
          { label: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja', url: 'https://jdih.kemnaker.go.id/katalog/uu-1-1970', publisher: 'Pemerintah RI / Kemnaker' },
          { label: 'PP No. 50 Tahun 2012 tentang Penerapan SMK3', url: 'https://jdih.kemnaker.go.id/katalog/pp-50-2012', publisher: 'Pemerintah RI / Kemnaker' }
        ],
        status: 'published',
        publishedAt: '2026-08-05',
        updatedAt: '2026-09-01',
        indexable: true,
        intent: `panduan ${slug.replace(/-/g, ' ')}`,
        primaryKeyword: `${slug.replace(/-/g, ' ')}`,
        searchIntent: `langkah dan prosedur operasional ${topicName}`,
        intentType: 'informational',
        parentTopic: `Panduan Prosedur K3: ${pc.cluster}`,
        cannibalizationGroup: `panduan-${pc.prefix.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        contentKind: 'guide',
        primaryCtaText: 'Konsultasi Program Pelatihan Terkait',
        primaryCtaIntent: 'jadwal',
        secondaryCtaText: 'Lihat Brosur & Jadwal Pelatihan',
        secondaryCtaIntent: 'jadwal'
      });
    }
  }

  return records;
}

import { ContentRecordInput } from './build-inventory';
import { officialSources } from './sources';

interface CommercialGuideSeed {
  slug: string;
  title: string;
  intentCategory: string;
  desc: string;
  ctaText: string;
  ctaIntent: string;
}

interface SopCluster {
  clusterName: string;
  prefix: string;
  sourceKey: string;
  legalDefault: string;
  sops: string[];
}

export function generatePanduanRecords(): ContentRecordInput[] {
  const records: ContentRecordInput[] = [];

  // Group A: 77 Commercial, Support, Cost, Requirement & Schedule Guides
  const commercialGuides: CommercialGuideSeed[] = [
    { slug: 'syarat-ahli-k3-umum', title: 'Panduan Syarat Pendaftaran Ahli K3 Umum (Kemnaker RI)', intentCategory: 'requirement', desc: 'Syarat pendidikan minimal D3/S1, dokumen identitas, surat rekomendasi perusahaan, dan alur verifikasi berkas pendaftaran calon Ahli K3 Umum.', ctaText: 'Cek Kelayakan Berkas Ahli K3 Umum', ctaIntent: 'syarat' },
    { slug: 'biaya-pelatihan-k3', title: 'Panduan Estimasi Biaya Pelatihan K3 & Komponen Harga', intentCategory: 'cost', desc: 'Rincian estimasi biaya pelatihan Ahli K3 Umum, Auditor SMK3, K3 Kebakaran, dan faktor pembeda harga kelas online vs tatap muka.', ctaText: 'Tanya Rincian Biaya Pelatihan K3', ctaIntent: 'biaya' },
    { slug: 'materi-ahli-k3-umum', title: 'Panduan Lengkap Materi & Kurikulum Ahli K3 Umum 120 JP', intentCategory: 'curriculum', desc: 'Struktur kurikulum 120 jam pelajaran pembinaan Ahli K3 Umum: kebijakan K3, dasar hukum, kelembagaan P2K3, pengawasan norma, dan PKL.', ctaText: 'Unduh Silabus Lengkap 120 JP', ctaIntent: 'jadwal' },
    { slug: 'tugas-ahli-k3-umum', title: 'Panduan Tugas, Fungsi & Tanggung Jawab Ahli K3 Umum di Perusahaan', intentCategory: 'responsibility', desc: 'Uraian tugas operasional Ahli K3 Umum sebagai sekretaris P2K3, penyusun laporan triwulan naker, dan pengawas kepatuhan SMK3.', ctaText: 'Konsultasi Peran Ahli K3 Umum', ctaIntent: 'syarat' },
    { slug: 'cara-daftar-pelatihan-k3-online', title: 'Panduan Cara Mendaftar Pelatihan K3 Online & Blended Training', intentCategory: 'registration', desc: 'Langkah mudah pendaftaran batch pelatihan K3 secara online, konfirmasi berkas, jadwal zoom, dan pengiriman modul fisik.', ctaText: 'Daftar Batch Pelatihan Terdekat', ctaIntent: 'daftar' },
    { slug: 'biaya-pelatihan-auditor-smk3', title: 'Panduan Biaya Pelatihan & Sertifikasi Auditor SMK3 Kemnaker', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan 40 JP Auditor SMK3 PP 50/2012, fasilitas sertifikat, kartu kewenangan, dan konsultasi ujian.', ctaText: 'Tanya Biaya Auditor SMK3', ctaIntent: 'biaya' },
    { slug: 'syarat-perpanjangan-skp-ahli-k3', title: 'Panduan Syarat & Alur Perpanjangan SKP Ahli K3 Kemnaker RI', intentCategory: 'requirement', desc: 'Prosedur perpanjangan Surat Keputusan Penunjukan (SKP) Ahli K3 yang habis masa berlaku 3 tahun melalui portal TemanK3.', ctaText: 'Konsultasi Perpanjangan SKP', ctaIntent: 'syarat' },
    { slug: 'cara-pengajuan-proposal-inhouse-training-k3', title: 'Panduan Pengajuan Proposal In-House Training K3 untuk Perusahaan', intentCategory: 'corporate', desc: 'Cara meminta surat penawaran harga (SPH), silabus yang dikustomisasi, dan negosiasi jadwal pelatihan internal karyawan.', ctaText: 'Minta Proposal In-House Training', ctaIntent: 'perusahaan' },
    { slug: 'biaya-pelatihan-k3-kebakaran', title: 'Panduan Biaya Pelatihan K3 Kebakaran Kelas D, C, B, dan A', intentCategory: 'cost', desc: 'Rincian harga pembinaan penanggulangan kebakaran Kemnaker RI untuk kelas regu pemadam, koordinator, hingga ahli spesialis.', ctaText: 'Tanya Biaya Pelatihan Damkar', ctaIntent: 'biaya' },
    { slug: 'syarat-pendaftaran-petugas-p3k-kemnaker', title: 'Panduan Syarat & Prosedur Pendaftaran Petugas P3K di Tempat Kerja', intentCategory: 'requirement', desc: 'Ketentuan pendidikan minimal, pas foto, surat tugas instansi, dan kelengkapan berkas pelatihan 30 JP Petugas P3K.', ctaText: 'Cek Syarat Petugas P3K', ctaIntent: 'syarat' },
    { slug: 'biaya-pelatihan-k3-listrik', title: 'Panduan Biaya Pelatihan Teknisi K3 Listrik & Ahli K3 Listrik', intentCategory: 'cost', desc: 'Perbandingan estimasi biaya pelatihan sertifikasi teknisi listrik vs ahli K3 listrik sesuai Permenaker 12/2015.', ctaText: 'Tanya Biaya K3 Listrik', ctaIntent: 'biaya' },
    { slug: 'syarat-sertifikasi-bnsp-k3', title: 'Panduan Persyaratan Uji Kompetensi & Asesmen Sertifikasi BNSP K3', intentCategory: 'requirement', desc: 'Bukti kerja portofolio, surat pengalaman, CV profesional, dan alur pra-asesmen sertifikasi profesi K3 Garuda BNSP.', ctaText: 'Cek Persyaratan Portofolio BNSP', ctaIntent: 'syarat' },
    { slug: 'biaya-sertifikasi-bnsp-safety-officer', title: 'Panduan Biaya Sertifikasi BNSP Safety Officer & Supervisor K3', intentCategory: 'cost', desc: 'Estimasi biaya uji kompetensi skema pengawas K3, biaya asesmen ulang, dan penerbitan sertifikat kompetensi.', ctaText: 'Tanya Biaya Asesmen BNSP', ctaIntent: 'biaya' },
    { slug: 'perbedaan-ahli-k3-kemnaker-vs-bnsp', title: 'Panduan Memilih Jalur: Ahli K3 Kemnaker RI vs Sertifikasi BNSP K3', intentCategory: 'comparison', desc: 'Panduan pengambilan keputusan karier: kapan memerlukan SKP penunjukan Kemnaker dan kapan memerlukan sertifikat kompetensi BNSP.', ctaText: 'Konsultasi Pemilihan Sertifikasi', ctaIntent: 'syarat' },
    { slug: 'cara-membuat-laporan-triwulan-p2k3', title: 'Panduan Praktis Cara Menyusun Laporan Triwulan P2K3 untuk Disnaker', intentCategory: 'procedure', desc: 'Format baku laporan kegiatan P2K3, statistik kecelakaan kerja, notulen rapat bulanan, dan alur pelaporan ke dinas tenaga kerja.', ctaText: 'Minta Template Laporan P2K3', ctaIntent: 'perusahaan' },
    { slug: 'dokumen-wajib-audit-smk3-pp-50', title: 'Panduan Dokumen Wajib Persiapan Audit Sertifikasi SMK3 PP 50/2012', intentCategory: 'compliance', desc: 'Checklist berkas manual K3, prosedur SOP, bukti notulen rapat, rekaman inspeksi, dan matriks pelatihan untuk 166 kriteria.', ctaText: 'Konsultasi Persiapan Audit SMK3', ctaIntent: 'perusahaan' },
    { slug: 'biaya-pelatihan-bekerja-di-ketinggian', title: 'Panduan Biaya Pelatihan K3 Bekerja di Ketinggian (TKPK & TKBT)', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan Tenaga Kerja Bangunan Tinggi dan Tenaga Kerja Pada Ketinggian rope access berlisensi Kemnaker.', ctaText: 'Tanya Biaya Ketinggian', ctaIntent: 'biaya' },
    { slug: 'syarat-mengikuti-pelatihan-ruang-terbatas', title: 'Panduan Syarat Pelatihan K3 Ruang Terbatas (Confined Space Madya/Utama)', intentCategory: 'requirement', desc: 'Kualifikasi fisik sehat bebas klaustrofobia, surat tugas, dan dokumen administrasi peserta pelatihan confined space.', ctaText: 'Cek Syarat Confined Space', ctaIntent: 'syarat' },
    { slug: 'biaya-pelatihan-operator-forklift', title: 'Panduan Biaya Pelatihan & Sertifikasi Operator Forklift (SIO Kemnaker)', intentCategory: 'cost', desc: 'Rincian biaya pembinaan operator forklift Kelas 1 dan Kelas 2 lengkap dengan uji praktik manuver dan penerbitan lisensi SIO.', ctaText: 'Tanya Biaya Operator Forklift', ctaIntent: 'biaya' },
    { slug: 'syarat-sertifikasi-operator-crane-kemnaker', title: 'Panduan Syarat Sertifikasi Operator Crane & Rigger Berlisensi', intentCategory: 'requirement', desc: 'Persyaratan ijazah, pengalaman kerja, pemeriksaan kesehatan mata, dan administrasi lisensi K3 pesawat angkat angkut.', ctaText: 'Cek Syarat Operator Crane', ctaIntent: 'syarat' },
    { slug: 'tata-cara-klaim-jkk-bpjs-ketenagakerjaan', title: 'Panduan Tata Cara Pengajuan Klaim Jaminan Kecelakaan Kerja (JKK)', intentCategory: 'procedure', desc: 'Alur pelaporan tahap 1 (2x24 jam), pengisian formulir KK2, verifikasi rumah sakit trauma center, dan pencairan santunan.', ctaText: 'Konsultasi Prosedur Klaim JKK', ctaIntent: 'syarat' },
    { slug: 'cara-menyusun-rencana-keselamatan-konstruksi-rkk', title: 'Panduan Penyusunan Rencana Keselamatan Konstruksi (RKK) Proyek', intentCategory: 'procedure', desc: 'Format penyusunan RKK sesuai Permen PUPR 10/2021: elemen kepemimpinan, perencanaan K3, operasi keselamatan, dan evaluasi.', ctaText: 'Minta Template Format RKK', ctaIntent: 'perusahaan' },
    { slug: 'biaya-pelatihan-hiperkes-dokter-paramedis', title: 'Panduan Biaya Pelatihan Sertifikasi Hiperkes Dokter & Paramedis', intentCategory: 'cost', desc: 'Estimasi biaya pelatihan medis okupasi Hiperkes Kemenaker untuk dokter perusahaan dan perawat klinik tempat kerja.', ctaText: 'Tanya Biaya Pelatihan Hiperkes', ctaIntent: 'biaya' },
    { slug: 'syarat-pembentukan-p2k3-perusahaan', title: 'Panduan Syarat & Alur Pengesahan Struktur P2K3 di Dinas Tenaga Kerja', intentCategory: 'compliance', desc: 'Persyaratan pembentukan Panitia Pembina K3, surat permohonan pengesahan, struktur ketua & sekretaris, dan SK Disnaker.', ctaText: 'Konsultasi Pengesahan P2K3', ctaIntent: 'perusahaan' },
    { slug: 'cara-menghitung-trir-dan-ltifr-k3', title: 'Panduan Cara Menghitung Rumus TRIR, LTIFR & Severity Rate K3', intentCategory: 'procedure', desc: 'Rumus matematis kalkulasi frekuensi kecelakaan kerja per 200.000 atau 1.000.000 jam kerja selamat dan contoh perhitungannya.', ctaText: 'Konsultasi Statistik Kinerja K3', ctaIntent: 'syarat' },
    { slug: 'biaya-pelatihan-ahli-k3-kimia', title: 'Panduan Biaya Pelatihan Ahli K3 Kimia & Petugas K3 Kimia', intentCategory: 'cost', desc: 'Estimasi investasi pembinaan 120 JP Ahli K3 Kimia vs 40 JP Petugas Kimia untuk pemenuhan Kepmenaker 187/1999.', ctaText: 'Tanya Biaya K3 Kimia', ctaIntent: 'biaya' },
    { slug: 'syarat-menjadi-auditor-smk3-resmi', title: 'Panduan Syarat & Jalur Karier Menjadi Auditor SMK3 Kemnaker RI', intentCategory: 'career', desc: 'Persyaratan wajib memiliki sertifikat Ahli K3 Umum, pengalaman kerja HSE, kelulusan ujian auditor, dan penunjukan SKP.', ctaText: 'Cek Syarat Auditor SMK3', ctaIntent: 'syarat' },
    { slug: 'tata-cara-audit-internal-smk3-tahunan', title: 'Panduan Langkah Praktis Pelaksanaan Audit Internal SMK3 Perusahaan', intentCategory: 'procedure', desc: 'Tahapan opening meeting, sampling dokumen, verifikasi observasi lapangan, wawancara pekerja, hingga closing meeting.', ctaText: 'Konsultasi Pelaksanaan Audit Internal', ctaIntent: 'perusahaan' },
    { slug: 'biaya-pelatihan-k3-rumah-sakit-k3rs', title: 'Panduan Biaya & Silabus Pelatihan K3RS untuk Manajemen Rumah Sakit', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan keselamatan rumah sakit, pengelolaan limbah medis, proteksi kebakaran faskes, dan evakuasi pasien.', ctaText: 'Tanya Biaya K3 Rumah Sakit', ctaIntent: 'biaya' },
    { slug: 'syarat-penerbitan-surat-keterangan-laik-k3-riksa-uji', title: 'Panduan Syarat & Alur Riksa Uji Penerbitan Suket Laik K3 Alat Pabrik', intentCategory: 'compliance', desc: 'Prosedur pemeriksaan teknis PJK3 Riksa Uji untuk boiler, crane, elevator, instalasi listrik, dan penangkal petir.', ctaText: 'Konsultasi Riksa Uji Alat Pabrik', ctaIntent: 'perusahaan' },
    { slug: 'cara-menyusun-hiradc-lengkap', title: 'Panduan Praktis Cara Menyusun Tabel HIRADC Matriks Risiko 5x5', intentCategory: 'procedure', desc: 'Langkah menentukan aktivitas rutin/non-rutin, identifikasi bahaya, skor kemungkinan x keparahan, dan hierarki pengendalian.', ctaText: 'Minta Template Tabel HIRADC', ctaIntent: 'syarat' },
    { slug: 'biaya-pelatihan-ahli-k3-konstruksi', title: 'Panduan Biaya Pelatihan Ahli K3 Konstruksi Muda, Madya, dan Utama', intentCategory: 'cost', desc: 'Rincian biaya pelatihan pembinaan keselamatan konstruksi Kemnaker dan sertifikasi kompetensi SMKK Kementerian PUPR.', ctaText: 'Tanya Biaya K3 Konstruksi', ctaIntent: 'biaya' },
    { slug: 'syarat-menjadi-trainer-instruktur-k3', title: 'Panduan Syarat & Kualifikasi Menjadi Instruktur Pelatihan K3 Profesional', intentCategory: 'career', desc: 'Kualifikasi sertifikat Training of Trainer (TOT) BNSP, kepemilikan lisensi spesialis, dan jam terbang mengajar keselamatan kerja.', ctaText: 'Konsultasi Karir Instruktur K3', ctaIntent: 'syarat' },
    { slug: 'cara-mendapatkan-penghargaan-zero-accident', title: 'Panduan Syarat & Verifikasi Berkas Penghargaan Kecelakaan Nihil (Zero Accident)', intentCategory: 'compliance', desc: 'Ketentuan penghitungan jam kerja selamat tanpa fatality, audit tim penilai Disnaker, dan penganugerahan piagam Menteri.', ctaText: 'Konsultasi Zero Accident Award', ctaIntent: 'perusahaan' },
    { slug: 'biaya-pelatihan-pop-minerba-tambang', title: 'Panduan Biaya Pelatihan & Sertifikasi POP Pertambangan Minerba', intentCategory: 'cost', desc: 'Estimasi biaya bimbingan teknis dan uji kompetensi Pengawas Operasional Pertama (POP) tambang bersertifikat BNSP/ESDM.', ctaText: 'Tanya Biaya Diklat POP Tambang', ctaIntent: 'biaya' },
    { slug: 'syarat-mengikuti-uji-kompetensi-pop-tambang', title: 'Panduan Syarat Pengalaman & Dokumen Uji Kompetensi POP Minerba', intentCategory: 'requirement', desc: 'Ketentuan minimal pendidikan, pengalaman kerja tambang, bukti logbook pengawasan, dan surat penugasan KTT perusahaan.', ctaText: 'Cek Syarat POP Tambang', ctaIntent: 'syarat' },
    { slug: 'cara-menyusun-emergency-response-plan-erp', title: 'Panduan Penyusunan Dokumen Rencana Tanggap Darurat (ERP) Pabrik', intentCategory: 'procedure', desc: 'Struktur rencana darurat: denah evakuasi, nomor darurat eksternal, peran regu pemadam/medis, dan jadwal latihan drill berkala.', ctaText: 'Minta Panduan Dokumen ERP', ctaIntent: 'perusahaan' },
    { slug: 'biaya-pelatihan-ahli-k3-lingkungan-kerja', title: 'Panduan Biaya Pelatihan Ahli K3 Lingkungan Kerja & Higiene Industri', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan pengukuran faktor bahaya kerja sesuai Permenaker 05/2018 dan sertifikasi kompetensi HIMU/HIMA.', ctaText: 'Tanya Biaya K3 Lingkungan', ctaIntent: 'biaya' },
    { slug: 'syarat-pendaftaran-sertifikasi-rigger-juru-ikat', title: 'Panduan Syarat Pendaftaran Pelatihan Juru Ikat Muatan (Rigger K3)', intentCategory: 'requirement', desc: 'Kelengkapan berkas identitas, surat sehat fisik, dan prosedur pembinaan keselamatan pengikatan beban angkat berat.', ctaText: 'Cek Syarat Pelatihan Rigger', ctaIntent: 'syarat' },
    { slug: 'cara-menyusun-csms-kontraktor', title: 'Panduan Menyusun Dokumen Contractor Safety Management System (CSMS)', intentCategory: 'procedure', desc: 'Panduan pembuatan dokumen kuesioner prakualifikasi CSMS, risk assessment vendor, dan penilaian kinerja safety kontraktor.', ctaText: 'Minta Template CSMS Vendor', ctaIntent: 'perusahaan' },
    { slug: 'biaya-pelatihan-k3-migas-pengawas', title: 'Panduan Biaya Pelatihan & Sertifikasi Pengawas K3 Migas BNSP', intentCategory: 'cost', desc: 'Estimasi biaya uji kompetensi pengawas keselamatan minyak dan gas bumi, akomodasi uji TUK, dan penerbitan sertifikat Garuda.', ctaText: 'Tanya Biaya K3 Migas', ctaIntent: 'biaya' },
    { slug: 'syarat-uji-kompetensi-pengawas-k3-migas', title: 'Panduan Syarat Pengalaman & Portofolio Asesmen Pengawas K3 Migas', intentCategory: 'requirement', desc: 'Daftar dokumen portofolio inspeksi migas, izin kerja PTW, laporan investigasi, dan wawancara teknis asesor BNSP.', ctaText: 'Cek Portofolio K3 Migas', ctaIntent: 'syarat' },
    { slug: 'tata-cara-penerbitan-lisensi-k3-kemnaker', title: 'Panduan Tata Cara Penerbitan & Cetak Lisensi Kewenangan K3 Kemnaker', intentCategory: 'compliance', desc: 'Alur integrasi aplikasi TemanK3, penerbitan barcode resmi kartu lisensi kewenangan, dan pengiriman ke alamat perusahaan.', ctaText: 'Konsultasi Lisensi TemanK3', ctaIntent: 'syarat' },
    { slug: 'cara-menyusun-job-safety-analysis-jsa', title: 'Panduan Langkah Demi Langkah Pembuatan Job Safety Analysis (JSA)', intentCategory: 'procedure', desc: 'Template penyusunan formulir JSA: identifikasi tahapan tugas, potensi risiko bahaya mekanik/kimia, dan rekomendasi APD/SOP.', ctaText: 'Unduh Formulir Template JSA', ctaIntent: 'syarat' },
    { slug: 'biaya-pelatihan-investigasi-kecelakaan-k3', title: 'Panduan Biaya & Silabus Pelatihan Investigasi Insiden & Root Cause Analysis', intentCategory: 'cost', desc: 'Estimasi biaya workshop teknis metodologi investigasi kecelakaan kerja RCA Fishbone, 5-Why, dan penyusunan rekomendasi CAPA.', ctaText: 'Tanya Biaya Investigasi Insiden', ctaIntent: 'biaya' },
    { slug: 'syarat-pembentukan-komite-k3-rumah-sakit', title: 'Panduan Syarat & Struktur Organisasi Komite K3RS Rumah Sakit', intentCategory: 'compliance', desc: 'Kriteria penunjukan ketua komite, keterlibatan dokter spesialis okupasi, sanitarian, dan integrasi akreditasi RS.', ctaText: 'Konsultasi Pembentukan K3RS', ctaIntent: 'perusahaan' },
    { slug: 'cara-menghitung-kebutuhan-apar-gedung', title: 'Panduan Cara Menghitung Kebutuhan Jumlah Tabung APAR Ruangan Gedung', intentCategory: 'procedure', desc: 'Kalkulasi luas lantai, klasifikasi potensi bahaya kebakaran ringan/sedang/berat, dan penentuan jarak penempatan tabung 15 meter.', ctaText: 'Konsultasi Perhitungan APAR', ctaIntent: 'syarat' },
    { slug: 'biaya-pelatihan-scaffolding-kemnaker', title: 'Panduan Biaya Pelatihan Teknisi & Supervisor Scaffolding Kemnaker RI', intentCategory: 'cost', desc: 'Rincian biaya pembinaan operator pasang-bongkar perancah pipa dan sertifikasi pengawas perancah konstruksi bangunan.', ctaText: 'Tanya Biaya K3 Scaffolding', ctaIntent: 'biaya' },
    { slug: 'syarat-menjadi-petugas-k3-kimia', title: 'Panduan Syarat Pendidikan & Penunjukan Petugas K3 Kimia Perusahaan', intentCategory: 'requirement', desc: 'Kualifikasi minimal SMA IPA / SMK Kimia / D3 Teknik, surat penugasan laboratorium/gudang kimia, dan sertifikasi Kemnaker.', ctaText: 'Cek Syarat Petugas K3 Kimia', ctaIntent: 'syarat' },
    { slug: 'cara-membuat-safety-induction-video-materi', title: 'Panduan Pembuatan Materi & Video Safety Induction Tamu Pabrik', intentCategory: 'procedure', desc: 'Komponen wajib briefing keselamatan: jalur evakuasi, titik kumpul, APD wajib, larangan merokok, dan alarm darurat.', ctaText: 'Minta Panduan Modul Induction', ctaIntent: 'perusahaan' },
    { slug: 'biaya-pelatihan-operator-boiler-kemnaker', title: 'Panduan Biaya Pelatihan Operator Boiler Kelas 1 & Kelas 2', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan operator ketel uap industri, uji fungsi safety valve, dan penerbitan SIO resmi Kemnaker RI.', ctaText: 'Tanya Biaya Operator Boiler', ctaIntent: 'biaya' },
    { slug: 'syarat-uji-kelaikan-lift-penumpang-gedung', title: 'Panduan Syarat & Prosedur Riksa Uji Kelayakan Lift Gedung Bertingkat', intentCategory: 'compliance', desc: 'Pemeriksaan tali baja kawat hoist, uji pengereman governor kecepatan lebih, sensor pintu, dan penerbitan izin operasional.', ctaText: 'Konsultasi Riksa Uji Lift', ctaIntent: 'perusahaan' },
    { slug: 'cara-melakukan-fit-testing-respirator-masker', title: 'Panduan Praktis Cara Uji Kerapatan Masker Respirator (Fit Testing K3)', intentCategory: 'procedure', desc: 'Prosedur tes kualitatif larutan saccharin / Bitrex dan tes kuantitatif partikel penghitung Portacount untuk pekerja berdebu.', ctaText: 'Konsultasi Fit Testing Masker', ctaIntent: 'syarat' },
    { slug: 'biaya-pelatihan-petugas-k3-ruang-terbatas', title: 'Panduan Biaya Pelatihan Petugas Madya & Utama Ruang Terbatas Kemnaker', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan confined space entrant dan standby person, simulasi rescue tripod, dan penerbitan lisensi SIO.', ctaText: 'Tanya Biaya Ruang Terbatas', ctaIntent: 'biaya' },
    { slug: 'syarat-menjadi-ahli-k3-spesialis-listrik', title: 'Panduan Syarat Pendidikan & Penunjukan Ahli K3 Spesialis Listrik', intentCategory: 'requirement', desc: 'Kualifikasi sarjana teknik elektro, pengalaman instalasi listrik industri, pembinaan 120 JP, dan verifikasi SKP Kemnaker.', ctaText: 'Cek Syarat Ahli K3 Listrik', ctaIntent: 'syarat' },
    { slug: 'cara-mengisi-buku-catatan-inspeksi-k3', title: 'Panduan Cara Mengisi Logbook & Buku Catatan Inspeksi K3 Terjadwal', intentCategory: 'procedure', desc: 'Format pencatatan temuan unsafe action, unsafe condition, tindakan korektif sementara, dan tanggal verifikasi penutupan (closing).', ctaText: 'Unduh Format Logbook Inspeksi', ctaIntent: 'syarat' },
    { slug: 'biaya-pelatihan-lead-auditor-iso-45001', title: 'Panduan Biaya Pelatihan & Sertifikasi Lead Auditor ISO 45001 IRCA', intentCategory: 'cost', desc: 'Estimasi biaya kursus 5 hari Lead Auditor ISO 45001 bersertifikat internasional IRCA / CQI dan simulasi audit kasus nyata.', ctaText: 'Tanya Biaya Lead Auditor ISO', ctaIntent: 'biaya' },
    { slug: 'syarat-fasilitas-ruang-p3k-pabrik', title: 'Panduan Syarat Kelengkapan Fasilitas Ruang P3K di Pabrik Manufaktur', intentCategory: 'compliance', desc: 'Kriteria luas ruangan, wastafel mengalir, tempat tidur periksa, tandu sekop, tabung oksigen, dan pencatatan kunjungan medis.', ctaText: 'Konsultasi Standar Ruang P3K', ctaIntent: 'perusahaan' },
    { slug: 'cara-mengelola-limbah-b3-sesuai-aturan', title: 'Panduan Pengelolaan Tempat Penyimpanan Sementara (TPS) Limbah B3', intentCategory: 'compliance', desc: 'Kriteria tata letak TPS limbah B3, simbol label bahaya, bak penampung ceceran (bundwall), dan pelaporan elektronik Festronik.', ctaText: 'Konsultasi Izin TPS Limbah B3', ctaIntent: 'perusahaan' },
    { slug: 'biaya-pelatihan-first-aid-cpr-aed', title: 'Panduan Biaya Workshop Praktik First Aid, CPR & Penggunaan AED', intentCategory: 'cost', desc: 'Estimasi biaya hands-on workshop resusitasi jantung paru menggunakan manekin sensorik dan simulasi defibrilator otomatis.', ctaText: 'Tanya Biaya Workshop CPR', ctaIntent: 'biaya' },
    { slug: 'syarat-uji-emisi-cerobong-pabrik-k3', title: 'Panduan Syarat & Pengambilan Sampel Uji Emisi Cerobong Asap Industri', intentCategory: 'compliance', desc: 'Ketentuan titik sampling isokinetik 8D-2D pada cerobong, lubang pengambilan sampel, dan batas emisi partikulat/gas KLHK.', ctaText: 'Konsultasi Uji Emisi Pabrik', ctaIntent: 'perusahaan' },
    { slug: 'cara-membuat-safety-passport-pekerja', title: 'Panduan Penerbitan & Verifikasi Safety Passport Pekerja Kontraktor', intentCategory: 'procedure', desc: 'Format buku paspor keselamatan: rekaman medical checkup, riwayat induksi, lisensi kewenangan, dan catatan pelanggaran safety.', ctaText: 'Konsultasi Sistem Safety Passport', ctaIntent: 'perusahaan' },
    { slug: 'biaya-pelatihan-k3-pengelasan-welding', title: 'Panduan Biaya Pelatihan K3 Pekerjaan Panas & Pengelasan Logam', intentCategory: 'cost', desc: 'Estimasi biaya bimbingan keselamatan juru las, pengendalian gas pelindung, APD welding helmet, dan fire watch permit.', ctaText: 'Tanya Biaya K3 Pengelasan', ctaIntent: 'biaya' },
    { slug: 'syarat-penyediaan-kotak-p3k-bentuk-a-b-c', title: 'Panduan Daftar Isi & Syarat Kotak P3K Bentuk A, B, dan C Kemnaker', intentCategory: 'compliance', desc: 'Tabel daftar 21 jenis isi kotak P3K resmi Permenaker 15/2008 dan rasio penempatan per 25, 50, dan 100 tenaga kerja.', ctaText: 'Minta Checklist Kotak P3K', ctaIntent: 'syarat' },
    { slug: 'cara-menyelenggarakan-fire-drill-gedung', title: 'Panduan Tahapan Menyelenggarakan Simulasi Evakuasi Fire Drill Gedung', intentCategory: 'procedure', desc: 'Skenario latihan: pembunyian alarm, pergerakan floor warden, evakuasi tanpa lift, penghitungan headcount, dan debriefing.', ctaText: 'Konsultasi Skenario Fire Drill', ctaIntent: 'perusahaan' },
    { slug: 'biaya-pelatihan-petugas-proteksi-radiasi-ppr', title: 'Panduan Biaya Kursus & Ujian Lisensi Petugas Proteksi Radiasi (PPR)', intentCategory: 'cost', desc: 'Estimasi biaya pelatihan proteksi radiasi industri medik / industri teknik BAPETEN dan bimbingan ujian lisensi PPR.', ctaText: 'Tanya Biaya Pelatihan PPR', ctaIntent: 'biaya' },
    { slug: 'syarat-uji-hidrostatis-bejana-tekanan', title: 'Panduan Syarat & Tekanan Uji Hidrostatis (Hydrotest) Tangki Pabrik', intentCategory: 'compliance', desc: 'Kalkulasi tekanan uji 1,5 kali MAWP, pengisian air bebas udara terjebak, waktu penahanan tekanan, dan inspeksi kebocoran las.', ctaText: 'Konsultasi Hydrotest Bejana', ctaIntent: 'perusahaan' },
    { slug: 'cara-membuat-peta-evakuasi-gedung-k3', title: 'Panduan Standar Desain Peta Jalur Evakuasi & Rambu Darurat Gedung', intentCategory: 'procedure', desc: 'Ketentuan orientasi peta (You Are Here), penandaan lokasi APAR, tombol alarm, pintu keluar darurat, dan assembly point.', ctaText: 'Minta Panduan Denah Evakuasi', ctaIntent: 'perusahaan' },
    { slug: 'biaya-pelatihan-petugas-gas-tester-agt', title: 'Panduan Biaya Pelatihan & Sertifikasi Petugas Gas Tester (AGT)', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan teknisi uji gas atmosfer ruang terbatas, kalibrasi instrumen multi-gas, dan sertifikasi BNSP/Migas.', ctaText: 'Tanya Biaya Sertifikasi AGT', ctaIntent: 'biaya' },
    { slug: 'syarat-pembuatan-surat-izin-operator-sio-kemnaker', title: 'Panduan Syarat & Alur Pembuatan SIO Operator Alat Berat Kemnaker', intentCategory: 'requirement', desc: 'Kelengkapan berkas KTP, ijazah, surat sehat mata tidak buta warna, pas foto, dan ujian praktik operasional di lapangan.', ctaText: 'Cek Syarat Penerbitan SIO', ctaIntent: 'syarat' },
    { slug: 'cara-melakukan-inspeksi-visual-scaffolding', title: 'Panduan Checklist Pemeriksaan Visual Kelayakan Scaffolding Perancah', intentCategory: 'procedure', desc: 'Pemeriksaan sole plate, jack base, standar vertikal, ledger horisontal, cross brace, papan kerja (plank), dan pemasangan Green Tag.', ctaText: 'Unduh Checklist Scafftag', ctaIntent: 'syarat' },
    { slug: 'biaya-pelatihan-audiometri-spirometri-k3', title: 'Panduan Biaya Workshop Pemeriksaan Audiometri & Spirometri Okupasi', intentCategory: 'cost', desc: 'Estimasi biaya pelatihan teknis kalibrasi alat audiometer, uji nada murni, kurva spirometri FVC/FEV1 bagi tenaga medis klinik.', ctaText: 'Tanya Biaya Workshop Medis', ctaIntent: 'biaya' },
    { slug: 'syarat-penggantian-apd-rusak-di-tempat-kerja', title: 'Panduan Prosedur Penggantian APD Rusak & Kadaluarsa bagi Karyawan', intentCategory: 'procedure', desc: 'Alur penukaran helm retak, sepatu robek, harness aus ke bagian gudang K3 tanpa membebankan biaya kepada tenaga kerja.', ctaText: 'Konsultasi Manajemen APD', ctaIntent: 'syarat' },
    { slug: 'cara-menyusun-prosedur-tanggap-darurat-tumpahan-kimia', title: 'Panduan Penyusunan Prosedur Spill Response & Penggunaan Spill Kit B3', intentCategory: 'procedure', desc: 'Langkah aman penanganan tumpahan asam/pelarut: evakuasi area, pemakaian APD kimia, pembendungan absorbent sock, dan netralisasi.', ctaText: 'Unduh SOP Spill Response', ctaIntent: 'perusahaan' },
    { slug: 'biaya-pelatihan-ergonomi-stasiun-kerja-perkantoran', title: 'Panduan Biaya In-House Workshop Ergonomi Kantor & Koreksi Postur', intentCategory: 'cost', desc: 'Estimasi paket workshop penyesuaian ergonomi meja komputer, peregangan otot berkala, dan evaluasi keluhan pegal karyawan.', ctaText: 'Tanya Biaya Workshop Ergonomi', ctaIntent: 'perusahaan' },
    { slug: 'syarat-perpanjangan-lisensi-sio-forklift-crane', title: 'Panduan Syarat & Prosedur Perpanjangan Lisensi SIO Operator Kemnaker', intentCategory: 'requirement', desc: 'Persyaratan perpanjangan SIO setiap 2-3 tahun: melampirkan SIO asli, surat keterangan sehat, surat tugas, dan pemrosesan TemanK3.', ctaText: 'Konsultasi Perpanjangan SIO', ctaIntent: 'syarat' },
    { slug: 'cara-melakukan-safety-walkthrough-manajemen', title: 'Panduan Tata Cara Pelaksanaan Safety Walkthrough oleh Jajaran Direksi', intentCategory: 'procedure', desc: 'Panduan dialog keselamatan konstruktif jajaran direksi saat berkeliling pabrik, mendengarkan masukan pekerja, dan tindak lanjut perbaikan.', ctaText: 'Konsultasi Safety Walkthrough', ctaIntent: 'perusahaan' }
  ];

  // Process 77 Commercial Guides
  for (const g of commercialGuides) {
    records.push({
      section: 'panduan',
      slug: g.slug,
      title: g.title,
      metaTitle: `${g.title} | Langkah & Persyaratan`,
      description: g.desc,
      answer: `${g.title} memberikan petunjuk terstruktur, dasar hukum resmi ketenagakerjaan, formulir checklist, dan langkah-langkah praktis yang wajib dipenuhi oleh perorangan maupun perusahaan untuk mencapai kepatuhan K3 secara efektif dan transparan.`,
      highlights: [
        'Panduan Resmi Berbasis Regulasi Ketenagakerjaan',
        'Langkah Terstruktur & Dokumen Telusur Lengkap',
        'Kategori: Panduan Prosedur & Keputusan Strategis',
        'Layanan Konsultasi & Verifikasi di PT Kreasi Ultimate Berjaya'
      ],
      blocks: [
        {
          heading: `Urgensi & Gambaran Umum ${g.title}`,
          paragraphs: [
            `${g.title} disusun secara mendalam untuk membantu para praktisi keselamatan kerja, manajemen perusahaan, dan calon peserta pelatihan dalam memahami seluruh aspek penting yang terkait. ${g.desc}`,
            'Ketepatan pemenuhan persyaratan dan ketertiban administrasi menjadi kunci utama dalam menjamin keabsahan legalitas serta efisiensi biaya operasional perusahaan.'
          ]
        },
        {
          heading: 'Tahapan Pelaksanaan & Dokumen Prasyarat',
          paragraphs: [
            'Langkah-langkah sistematis yang perlu dijalankan meliputi:',
          ],
          bullets: [
            'Pemeriksaan awal kelengkapan dokumen identitas, ijazah, atau bukti fisik pendukung',
            'Penyusunan formulir permohonan resmi dan verifikasi kesesuaian regulasi pemerintah',
            'Koordinasi dengan bagian terkait (HRD, Pengadaan, atau Tim Teknis Lapangan)',
            'Pelaksanaan verifikasi atau pembinaan teknis hingga tuntas',
            'Penyimpanan arsip rekaman kerja dan peninjauan berkala masa berlaku dokumen'
          ]
        },
        {
          heading: 'Fasilitas & Pendampingan PT Kreasi Ultimate Berjaya',
          paragraphs: [
            'PT Kreasi Ultimate Berjaya siap memberikan pendampingan komprehensif, mulai dari konsultasi awal, pre-screening berkas, penyusunan proposal penawaran resmi, hingga pengurusan sertifikasi resmi terakreditasi Kemnaker RI dan BNSP.'
          ]
        }
      ],
      faqs: [
        { question: `Berapa lama proses yang dibutuhkan dalam penerapan ${g.title}?`, answer: 'Durasi bergantung pada kelengkapan berkas yang diserahkan dan jadwal batch yang dipilih, umumnya berkisar antara 3 hingga 14 hari kerja.' },
        { question: `Apakah ${g.title} berlaku secara nasional di seluruh Indonesia?`, answer: 'Ya, seluruh panduan, sertifikat, dan legalitas yang diproses melalui PT Kreasi Ultimate Berjaya diakui secara sah di seluruh wilayah Republik Indonesia.' },
        { question: `Bagaimana cara mendapatkan formulir atau template terkait ${g.title}?`, answer: 'Anda dapat langsung menghubungi konsultan PT Kreasi Ultimate Berjaya melalui WhatsApp untuk memperoleh file template resmi dan konsultasi gratis.' }
      ],
      related: ['pelatihan/ahli-k3-umum', 'panduan/biaya-pelatihan-k3', 'perbandingan/bnsp-vs-kemnaker', 'jadwal'],
      sources: [officialSources.uu1, officialSources.pp50, officialSources.permen02_1992],
      status: 'published',
      publishedAt: '2026-08-01',
      updatedAt: '2026-09-01',
      indexable: true,
      intent: `panduan ${g.slug} syarat biaya cara langkah`,
      primaryKeyword: `panduan ${g.slug.replace(/-/g, ' ')}`,
      searchIntent: `panduan lengkap, syarat, biaya, dan langkah ${g.title}`,
      intentType: 'commercial',
      parentTopic: 'Panduan Prosedur & Administrasi K3',
      cannibalizationGroup: `panduan-${g.intentCategory}`,
      contentKind: 'guide',
      primaryCtaText: g.ctaText,
      primaryCtaIntent: g.ctaIntent,
      secondaryCtaText: 'Tanya Jadwal & Kuota Pelatihan',
      secondaryCtaIntent: 'jadwal'
    });
  }

  // Group B: 250 Safety SOPs, Hazard Execution Guides & Workplace Procedures (10 Clusters x 25 SOPs)
  const sopClusters: SopCluster[] = [
    {
      clusterName: 'Pekerjaan Panas & Pengelasan (Hot Work)',
      prefix: 'Hot Work',
      sourceKey: 'kep186_1999',
      legalDefault: 'Kepmenaker No. 186/1999 & Standar NFPA 51B',
      sops: [
        'SOP Izin Kerja Panas (Hot Work Permit System)', 'SOP Pengelasan Listrik SMAW di Ruang Terbuka',
        'SOP Pemotongan Logam Menggunakan Gas Oksigen-Asetilen (Oxy-Fuel Cutting)', 'SOP Penyiapan Pengawas Api (Fire Watcher Duties & Checklist)',
        'SOP Pembersihan Radius Bebas Bahan Terbakar 11 Meter (35-Foot Rule)', 'SOP Pengelasan di Dekat Tangki Timbun Bahan Bakar',
        'SOP Pengelasan di Atas Struktur Ketinggian & Penampung Percikan Api', 'SOP Pemeriksaan Selang Las Flashback Arrestor Oksigen-Asetilen',
        'SOP Pengoperasian Mesin Gerinda Tangan & Pelindung Percikan Mata', 'SOP Pengelasan Tangki Bekas Cairan Kimia Mudah Terbakar',
        'SOP Ventilasi Pembuangan Asap Pengelasan Ruang Tertutup (Fume Extraction)', 'SOP Penggunaan Kaca Mata Las Helmet Shade Rating Sesuai Ampere',
        'SOP Pengelasan Pipa Jalur Bertekanan Aktif (Hot Tapping Safety)', 'SOP Penyimpanan Tabung Gas Asetilen & Oksigen Berdiri Terikat Rantai',
        'SOP Pemeriksaan Kabel Grounding Mesin Las & Pencegahan Korsleting', 'SOP Pengelasan Busur Logam Gas (GMAW/MIG) & Gas Pelindung Argon',
        'SOP Pengelasan Tungsten Gas (GTAW/TIG) pada Pipa Stainless Steel', 'SOP Tindakan Darurat Selang Las Terbakar & Kebocoran Regulator',
        'SOP Pemeriksaan Suhu Sambungan Pasca-Pengelasan Selama 30-60 Menit', 'SOP Pemakaian Pakaian Kerja Kulit Tahan Panas (Leather Welding Apron)',
        'SOP Pengelasan Konstruksi Rangka Baja Gedung Bertingkat', 'SOP Penggantian Kawat Las & Pembuangan Puntung Las ke Wadah Logam',
        'SOP Pengujian Kebocoran Sambungan Regulator Menggunakan Air Sabun', 'SOP Pengelasan di Bawah Air (Underwater Wet Welding Safety)',
        'SOP Penutupan & Penyelesaian Izin Kerja Panas Setelah Lokasi Aman'
      ]
    },
    {
      clusterName: 'Ruang Terbatas & Masuk Tangki (Confined Space)',
      prefix: 'Confined Space',
      sourceKey: 'se01_2012',
      legalDefault: 'SE Menakertrans No. SE.01/MEN/PPK/IV/2012 tentang Ruang Terbatas',
      sops: [
        'SOP Izin Masuk Ruang Terbatas (Confined Space Entry Permit)', 'SOP Pengujian Gas Atmosfer 4-Parameter (O2, LEL, H2S, CO)',
        'SOP Ventilasi Mekanik Berkelanjutan Menggunakan Blower Udara Segar', 'SOP Tugas & Tanggung Jawab Petugas Jaga (Stand-By Person/Attendant)',
        'SOP Pemasangan Tripod Penyelamat & Katrol Winch di Manhole Tangki', 'SOP Penggunaan Full Body Harness & Tali Penyelamat Masuk Ruang Terbatas',
        'SOP Isolasi Pipa Ruang Terbatas Menggunakan Blind Flange (Spadework)', 'SOP Penggunaan Alat Bantu Pernapasan Udara Mandiri (SCBA) di Tangki',
        'SOP Penerangan Portabel Tegangan Ekstra Rendah (24V Explosion Proof)', 'SOP Pembersihan Endapan Lumpur Minyak (Tank Cleaning Sludge Removal)',
        'SOP Komunikasi Dua Arah Petugas Dalam Tangki dengan Petugas Luar', 'SOP Penyelamatan Korban Pingsan di Dalam Tangki (Confined Space Rescue)',
        'SOP Batas Waktu Tinggal Maksimum di Ruang Terbatas Bersuhu Panas', 'SOP Pengurasan & Pembilasan Gas Menggunakan Nitrogen (N2 Purging)',
        'SOP Pemeriksaan Kadar Oksigen Berulang Setiap Pergantian Shift Kerja', 'SOP Tindakan Darurat Alarm Gas Detector Berbunyi di Dalam Manhole',
        'SOP Bekerja di Dalam Gorong-Gorong Saluran Air Limbah Kota', 'SOP Bekerja di Dalam Silo Penyimpanan Gandum & Biji-Bijian',
        'SOP Bekerja di Dalam Terowongan Utilitas Bawah Tanah Gedung', 'SOP Prosedur Dekontaminasi Pekerja Pasca Keluar dari Tangki Kimia',
        'SOP Penggunaan Perkakas Tangan Non-Sparking Berilium di Dalam Tangki', 'SOP Pemantauan Kelelahan & Dehidrasi Pekerja Ruang Terbatas',
        'SOP Pemeriksaan Kalibrasi Bump Test Gas Detector Sebelum Masuk Tangki', 'SOP Penutupan Manhole & Pembatalan Izin Masuk Pasca Pekerjaan Selesai',
        'SOP Evaluasi Laporan Kerja Masuk Ruang Terbatas & Pencatatan Logbook'
      ]
    },
    {
      clusterName: 'Bekerja di Ketinggian & Akses Perancah (Working at Heights)',
      prefix: 'Heights SOP',
      sourceKey: 'permen09_2016',
      legalDefault: 'Permenaker No. 09 Tahun 2016 tentang Bekerja di Ketinggian',
      sops: [
        'SOP Izin Kerja di Ketinggian (Working at Height Permit)', 'SOP Pemeriksaan & Pemakaian Full Body Harness Ganda (Twin Lanyard)',
        'SOP Pemasangan Tali Keselamatan Horisontal Baja (Lifeline Installation)', 'SOP Pemasangan Tali Keselamatan Vertikal & Tali Penahan Jatuh (Rope Grab)',
        'SOP Perhitungan Jarak Jatuh Bebas Aman (Fall Clearance Calculation)', 'SOP Pemasangan Scafftag Hijau, Kuning, Merah pada Struktur Perancah',
        'SOP Pemasangan Papan Kaki (Toe Board) & Jaring Pengaman Penangkal Benda Jatuh', 'SOP Pengikatan Perkakas Kerja Menggunakan Tool Lanyard di Ketinggian',
        'SOP Pengoperasian Mobile Elevating Work Platform (Scissor Lift & Boom Lift)', 'SOP Pengoperasian Gondola Perawatan Kaca Gedung Bertingkat',
        'SOP Pemasangan Jaring Penyelamat Jatuh (Safety Net Installation)', 'SOP Bekerja di Atap Rapuh Bergelombang (Fragile Roof Walkway SOP)',
        'SOP Pemanjatan Menara Transmisi Telekomunikasi & Tiang Listrik', 'SOP Manuver Akses Tali (Rope Access Ascending & Descending)',
        'SOP Pemasangan Titik Angkur Ketinggian & Uji Beban Tarik (Anchor Testing)', 'SOP Evakuasi Penyelamatan Korban Tergantung di Tali (Pick-Off Rescue)',
        'SOP Pertolongan Pertama Trauma Suspensi Tali Jatuh (Suspension Trauma)', 'SOP Penggunaan Tangga Portabel Lipat Standar 3-Point Contact (Aturan 4:1)',
        'SOP Penghentian Pekerjaan Ketinggian Saat Angin Kencang (>20 Knot) & Hujan', 'SOP Pemasangan Barikade Zona Bahaya Benda Jatuh (Drop Zone Barricade)',
        'SOP Pembongkaran Struktur Scaffolding dari Tingkat Paling Atas Bertahap', 'SOP Pemindahan Perancah Bergerak Beroda (Mobile Scaffold Relocation)',
        'SOP Pembersihan Kaca Luar Gedung Tinggi Menggunakan Sistem Akses Tali', 'SOP Pemeriksaan Kelayakan Sabuk Webbing Harness Pasca Menahan Beban Jatuh',
        'SOP Penutupan Izin Kerja Ketinggian & Pemeriksaan Area Bawah Gedung'
      ]
    },
    {
      clusterName: 'Kelistrikan & Isolasi Energi LOTO (Electrical Safety)',
      prefix: 'Electrical SOP',
      sourceKey: 'permen12_2015',
      legalDefault: 'Permenaker No. 12/2015 & OSHA 29 CFR 1910.147 (LOTO)',
      sops: [
        'SOP Penerapan Prosedur Lockout Tagout (LOTO 6 Langkah Baku)', 'SOP Verifikasi Ketiadaan Tegangan Listrik (Test Before Touch / Zero Energy)',
        'SOP Pemasangan Gembok Pribadi (Personal Lock) & Hasp Multi-Gembok', 'SOP Pelepasan Kunci Gembok LOTO Darurat Saat Personel Tidak Berada di Tempat',
        'SOP Pemilihan APD Arc Flash Sesuai Kategori Kalori Permukaan Panel', 'SOP Bekerja di Dekat Saluran Udara Tegangan Tinggi (Jarak Batas Aman)',
        'SOP Penggantian Sekering Tabung & Pemutus Tenaga Listrik (Breaker Trip)', 'SOP Inspeksi Termografi Inframerah Panel Listrik Bertegangan Rendah-Menengah',
        'SOP Pengukuran Tahanan Pembumian (Earth Ground Resistance Testing 5 Ohm)', 'SOP Pengujian Tahanan Isolasi Kabel Menggunakan Megohmmeter (Megger)',
        'SOP Pengoperasian Genset Cadangan Darurat & Saklar Pemindah Otomatis (ATS)', 'SOP Pemeliharaan Baterai Basah Asam Timbal Ruang UPS (Lead Acid Battery)',
        'SOP Pemasangan Grounding Pembumian Sementara Saat Pemeliharaan Jaringan', 'SOP Penggunaan Perkakas Tangan Terisolasi Listrik 1000V (VDE Certified)',
        'SOP Penggunaan Karpet Karet Isolasi Listrik di Depan Panel Distribusi', 'SOP Pemeriksaan Stop Kontak & Gawai Proteksi Arus Sisa (ELCB / GFCI Testing)',
        'SOP Penarikan Kabel Bawah Tanah Menggunakan Pipa Konduit Berlabel', 'SOP Pemeliharaan Motor Listrik 3 Fasa & Kotak Terminal Sambungan',
        'SOP Tindakan Darurat Penyelamatan Korban Tersengat Listrik Tegangan Rendah', 'SOP Pertolongan Pertama Luka Bakar Akibat Busur Api Listrik (Arc Flash Burn)',
        'SOP Pembersihan Debu Panel Listrik Menggunakan Vacuum Cleaner Anti-Statis', 'SOP Penggantian Trafo Distribusi Oli & Penampung Tumpahan Minyak Trafo',
        'SOP Pengujian Kontinuitas Jalur Penyalur Petir Struktur Bangunan Tinggi', 'SOP Pemasangan Rambu Bahaya Tegangan Tinggi & Tegangan Ekstra Tinggi',
        'SOP Penutupan Prosedur LOTO & Pengaliran Kembali Sumber Energi Listrik'
      ]
    },
    {
      clusterName: 'Pengangkatan Beban & Alat Berat (Lifting & Heavy Equipment)',
      prefix: 'Lifting SOP',
      sourceKey: 'permen08_2020',
      legalDefault: 'Permenaker No. 08 Tahun 2020 tentang Pesawat Angkat dan Angkut',
      sops: [
        'SOP Izin Pengangkatan Kritis (Critical Lifting Permit & Calculation)', 'SOP Penyusunan Rencana Pengangkatan Beban (Lifting Plan Procedure)',
        'SOP Pengikatan Beban Menggunakan Webbing Sling & Shackle Berstandar SWL', 'SOP Pengikatan Beban Menggunakan Chain Sling Baja Rantai 4 Kaki',
        'SOP Pemeriksaan Sling Kawat Baja (Wire Rope Inspection & Rejection Limit)', 'SOP Komunikasi Standar Sinyal Tangan Antara Rigger dan Operator Crane',
        'SOP Pengoperasian Mobile Crane: Penyetelan Kaki Outrigger & Matting Pad', 'SOP Pengoperasian Forklift Pergudangan: Kecepatan Maks 10 km/jam & Garpu Rendah',
        'SOP Pengoperasian Overhead Traveling Crane Pabrik Menggunakan Remote Pendant', 'SOP Pengoperasian Tower Crane Proyek Gedung Bertingkat',
        'SOP Pengangkatan Beban Tandem Menggunakan Dua Crane Bersamaan', 'SOP Pengoperasian Excavator Proyek: Sudut Putar & Batas Galian Aman',
        'SOP Pengoperasian Dump Truck Tambang: Prosedur Dumping Material & Jarak Ban', 'SOP Pengoperasian Wheel Loader: Pengambilan Material Curah & Jalur Manuver',
        'SOP Pengangkutan Muatan Panjang Menggunakan Tag Line Tali Pengendali', 'SOP Larangan Melintas di Bawah Beban Tergantung (Suspended Load Exclusion)',
        'SOP Pengujian Kelaikan Sistem Rem, Klakson & Lampu Alarm Alat Berat Harian', 'SOP Pemeriksaan Indikator Momen Beban (Load Moment Indicator / LMI Crane)',
        'SOP Pengangkatan Orang Menggunakan Man Basket Crane Khusus Berizin', 'SOP Pengisian Bahan Bakar Solar Alat Berat di Area Proyek Lapangan',
        'SOP Tindakan Darurat Crane Miring Akibat Amblesnya Tanah Outrigger', 'SOP Penanganan Tali Seling Crane Terputus & Pengamanan TKP Jatuhan',
        'SOP Pengikatan Muatan Pipa Bundar Menggunakan Teknik Double Choker Hitch', 'SOP Parkir Aman Alat Berat: Garpu Menempel Lantai & Handbrake Aktif',
        'SOP Penutupan Izin Pengangkatan & Penyimpanan Aksesoris Lifting di Rak Kering'
      ]
    },
    {
      clusterName: 'Bahan Kimia Berbahaya B3 & Toksikologi (Chemical Safety)',
      prefix: 'Chemical SOP',
      sourceKey: 'kep187_1999',
      legalDefault: 'Kepmenaker No. 187/1999 & Standar GHS B3',
      sops: [
        'SOP Penerimaan & Pemeriksaan Label GHS serta MSDS 16 Bab Bahan Kimia', 'SOP Penyimpanan Bahan Kimia Asam dan Basa Terpisah Sesuai Matriks Inkompatibilitas',
        'SOP Pengenceran Asam Sulfat Pekat (Aturan Menuangkan Asam ke Dalam Air)', 'SOP Penanganan Tumpahan Bahan Kimia Menggunakan Chemical Spill Kit',
        'SOP Pengoperasian Lemari Asam Laboratorium (Fume Hood Face Velocity 0.5 m/s)', 'SOP Penggunaan Stasiun Eyewash & Emergency Shower Pasca-Terpapar Kimia',
        'SOP Pengambilan Sampel Bahan Kimia Pelarut Organik Menggunakan Pipet Otomatis', 'SOP Pembersihan Tangki Penyimpanan Bahan Kimia Korosif',
        'SOP Pengisian Truk Tangki Bahan Kimia Cair (Chemical Loading/Unloading Arm)', 'SOP Penyimpanan Tabung Gas Beracun Klorin & Pemasangan Scrubber Netralisasi',
        'SOP Penanganan Kebocoran Gas Asam Sulfida (H2S Awareness & BAP Breathing Air)', 'SOP Penggunaan APD Coverall Tychem, Sarung Tangan Butil & Masker Full Face',
        'SOP Pembuangan Limbah Kimia B3 Cair ke Saluran Khusus IPAL B3', 'SOP Pengelolaan Tempat Penyimpanan Sementara (TPS) Limbah B3 Berizin',
        'SOP Penanganan Korban Terhirup Uap Gas Beracun Amonia / Klorin', 'SOP Pertolongan Pertama Korban Terkena Asam Hidrofluorat (Kalsium Glukonat Gel)',
        'SOP Penanganan Luka Bakar Akibat Larutan Basa Kuat Natrium Hidroksida (NaOH)', 'SOP Penggantian Filter Canister Masker Respirator Kimia Sesuai Jam Pakai',
        'SOP Pemeriksaan Integritas Sambungan Flange Pipa Kimia (Flange Shield Guard)', 'SOP Penyimpanan Bahan Kimia Oksidator Menjauh dari Bahan Organik Mudah Terbakar',
        'SOP Pengelolaan Bahan Kimia Piroforik yang Menyala Spontan di Udara (Alkil Alumunium)', 'SOP Dekontaminasi Pakaian & Peralatan Kerja Pasca-Paparan Toksik',
        'SOP Pengemasan & Pelabelan Simbol Bahaya Limbah B3 Medis Infeksius', 'SOP Pengujian Kadar Paparan Uap Pelarut Benzena di Udara Area Pabrik',
        'SOP Penutupan Izin Kerja Bahan Kimia Berbahaya & Pencatatan Neraca Limbah B3'
      ]
    },
    {
      clusterName: 'Penggalian Tanah & Pekerjaan Sipil (Excavation & Civil)',
      prefix: 'Excavation SOP',
      sourceKey: 'pupr10_2021',
      legalDefault: 'Permenaker No. 01/1980 & Permen PUPR No. 10/2021',
      sops: [
        'SOP Izin Penggalian Tanah Dalam (Excavation & Trenching Permit)', 'SOP Penelusuran Jalur Pipa Gas, Kabel Listrik & Utilitas Bawah Tanah (Dial Before You Dig)',
        'SOP Pemasangan Sistem Dinding Penahan Tanah (Trench Box & Shoring System)', 'SOP Pembuatan Sudut Kemiringan Tebing Galian Aman (Sloping & Benching)',
        'SOP Pemasangan Tangga Akses Keluar Galian Tiap Jarak 7,5 Meter (25 Feet)', 'SOP Penempatan Tanah Hasil Galian (Spoil Pile) Minimal 1 Meter dari Bibir Galian',
        'SOP Pemasangan Barikade & Lampu Peringatan Keliling Lubang Galian Malam Hari', 'SOP Pengujian Gas Berbahaya di Dalam Lubang Galian Dalam (>1.5 Meter)',
        'SOP Pengeringan Air Genangan di Lubang Galian Menggunakan Pompa Submersible', 'SOP Pengoperasian Mesin Bor Tiang Pancang Pondasi (Bored Pile Rig Safety)',
        'SOP Pengoperasian Mesin Pemancang Tiang Pancang Diesel Hammer', 'SOP Pengecoran Beton Massal Menggunakan Truk Pompa Beton (Concrete Pump)',
        'SOP Pembongkaran Bekisting Dinding & Plat Lantai Beton Bertingkat', 'SOP Pemotongan & Pembengkokan Besi Tulangan (Bar Bender & Cutter Safety)',
        'SOP Pengoperasian Mesin Pemadat Tanah (Roller Compactor & Stamper Kodok)', 'SOP Pekerjaan Pengaspalan Jalan Raya Menggunakan Aspal Hotmix Bersuhu 150°C',
        'SOP Pengaturan Lalu Lintas Proyek Jalan Raya (Traffic Management Plan)', 'SOP Bekerja di Bawah Tebing Rawan Longsor & Pemasangan Jaring Kawat Geotekstil',
        'SOP Evakuasi Darurat Korban Tertimbun Longsoran Galian Tanah (Trench Collapse Rescue)', 'SOP Pemeriksaan Stabilitas Dinding Galian Pasca Hujan Deras',
        'SOP Bekerja di Dekat Alat Berat Excavator (Zona Buta Blind Spot Operator)', 'SOP Penggalian Terowongan Bawah Tanah & Pemasangan Ventilasi Tambang',
        'SOP Pemasangan Pipa Beton Saluran Air Kotor (Culvert Precast Installation)', 'SOP Penimbunan Kembali Lubang Galian Tanah (Backfilling & Compaction)',
        'SOP Penutupan Izin Kerja Penggalian & Pembersihan Jalur Kerja Proyek'
      ]
    },
    {
      clusterName: 'Mesin Produksi & Perkakas Mekanikal (Machine Guarding)',
      prefix: 'Machinery SOP',
      sourceKey: 'permen38_2016',
      legalDefault: 'Permenaker No. 38 Tahun 2016 tentang K3 Pesawat Tenaga dan Produksi',
      sops: [
        'SOP Pengoperasian Mesin Stamping Pres Logam: Pengecekan Sensor Dua Tangan', 'SOP Pemasangan & Penyetelan Pelindung Mesin Tetap (Fixed Machine Guarding)',
        'SOP Pengoperasian Tirai Sinar Infra-Merah Sensor Keamanan (Safety Light Curtain)', 'SOP Pengoperasian Mesin Bubut Logam (Lathe Machine): Larangan Memakai Sarung Tangan',
        'SOP Pengoperasian Mesin Frais / Milling Logam & Penjepit Benda Kerja Kokoh', 'SOP Pengoperasian Mesin Gerinda Duduk (Bench Grinder): Jarak Tool Rest Maks 3 mm',
        'SOP Pengoperasian Mesin Gergaji Pita (Band Saw) & Pendorong Kayu Manual', 'SOP Pengoperasian Mesin Potong Plat Logam (Shearing Machine Safety)',
        'SOP Pengoperasian Robot Las Otomatis & Pagar Pembatas Sensor Interlock', 'SOP Pengoperasian Lini Konveyor Sabuk (Belt Conveyor): Tali Tarik Darurat (Pull Cord)',
        'SOP Pembersihan Material Macet (Jamming Clearance) pada Mesin Pencetak Plastik', 'SOP Penggantian Pisau Mesin Pencacah Kertas / Plastik Menggunakan LOTO',
        'SOP Pengoperasian Mesin Kompresor Udara Pabrik & Pemeriksaan Safety Valve', 'SOP Pengoperasian Ketel Uap Boiler: Pengecekan Gelas Penduga Air & Blowdown',
        'SOP Pengoperasian Mesin Pengaduk Adonan Industri Makanan (Mixer Machine Interlock)', 'SOP Pemeriksaan Getaran & Suhu Bantalan Motor Mesin Berputar',
        'SOP Penggunaan Perkakas Tangan Pneumatik Bertekanan Udara Tinggi', 'SOP Penggunaan Pistol Paku Tembak Mesin (Pneumatic Nail Gun Safety)',
        'SOP Pengoperasian Mesin Cuci Tekanan Tinggi (High Pressure Washer 500 Bar)', 'SOP Tindakan Darurat Anggota Tubuh Terjepit Mesin Pres / Konveyor',
        'SOP Pemeliharaan Pelumasan Roda Gigi & Rantai Transmisi Tertutup', 'SOP Penggantian Cetakan Mesin Injection Molding Menggunakan Crane Workshop',
        'SOP Pemeriksaan Fungsi Tombol Penghenti Darurat (E-Stop Test Mingguan)', 'SOP Pemakaian APD Kacamata Pelindung, Sepatu Baja & Sumbat Telinga di Bengkel',
        'SOP Penutupan Izin Kerja Servis Mesin & Uji Coba Produksi Berjalan Normal'
      ]
    },
    {
      clusterName: 'Proteksi Kebakaran Aktif & Evakuasi Darurat (Fire Emergency)',
      prefix: 'Fire SOP',
      sourceKey: 'kep186_1999',
      legalDefault: 'Kepmenaker No. 186/1999 & Permenaker No. 04/1980',
      sops: [
        'SOP Pengoperasian APAR Menggunakan Metode PASS (Pull, Aim, Squeeze, Sweep)', 'SOP Pemadaman Api Menggunakan Formasi Regu Hydrant (Nozzleman & Valveman)',
        'SOP Penggelaran & Penyambungan Selang Hydrant Kanvas Kopling Machino', 'SOP Pengoperasian Pompa Pemadam Diesel Utama Saat Aliran Listrik Terputus',
        'SOP Pengoperasian Main Control Fire Alarm (MCFA) Penanganan Alarm Darurat', 'SOP Pengujian Bulanan Tekanan Tabung APAR Dry Chemical Powder & CO2',
        'SOP Pengujian Katup Aliran Air Sistem Sprinkler (Inspector Test Valve)', 'SOP Prosedur Evakuasi Total Gedung Bertingkat Menuju Assembly Point',
        'SOP Tugas Floor Warden: Penyisiran Ruangan, Toilet & Penutupan Pintu Tahan Api', 'SOP Evakuasi Khusus Penyandang Disabilitas, Ibu Hamil & Lansia Saat Darurat',
        'SOP Pengoperasian Kipas Tekanan Positif Tangga Darurat (Stairwell Pressurization)', 'SOP Penggunaan Fire Blanket Pemadaman Api di Tubuh Pekerja',
        'SOP Pemadaman Kebakaran Minyak Dapur Komersial Sistem Wet Chemical K-Class', 'SOP Pemadaman Kebakaran Ruang Server Komputer Sistem Gas FM-200 / Novec 1230',
        'SOP Penanganan Kebakaran Tangki BBM Menggunakan Sistem Busa Foam AFFF', 'SOP Penggunaan Baju Tahan Panas Proximity Suit & Tabung Pernapasan SCBA',
        'SOP Koordinasi Penyerahan Komando Pemadaman ke Dinas Kebakaran Kota', 'SOP Penghitungan Absensi Tenaga Kerja di Assembly Point (Headcount Roll Call)',
        'SOP Penyelidikan Awal Titik Mula Api (Fire Origin) Pasca Pemadaman', 'SOP Pengisian Ulang Air Cadangan Bak Penampung Pemadam (Fire Water Reservoir)',
        'SOP Pengujian Hidrostatis Berkala 5 Tahun Selang & Tabung Pemadam Api', 'SOP Penanganan Kebakaran Korsleting Panel Listrik Menggunakan APAR CO2',
        'SOP Pembersihan Residu Kimia Serbuk Pemadam Pasca Kebakaran Padam', 'SOP Pelaksanaan Fire Drill & Debriefing Evaluasi Waktu Evakuasi Gedung',
        'SOP Pengaktifan Kembali Sistem Proteksi Api & Reset Panel Alarm Kebakaran'
      ]
    },
    {
      clusterName: 'Pertolongan Pertama Gawat Darurat & Medis (First Aid & Medevac)',
      prefix: 'Medical SOP',
      sourceKey: 'permen15_2008',
      legalDefault: 'Permenaker No. PER.15/MEN/VIII/2008 tentang P3K di Tempat Kerja',
      sops: [
        'SOP Penilaian Korban Gawat Darurat Menggunakan Prinsip DRABC (Danger, Response, Airway, Breathing, Circulation)',
        'SOP Resusitasi Jantung Paru (RJP/CPR) Satu Penolong & Dua Penolong Dewasa', 'SOP Pengoperasian Automated External Defibrillator (AED) pada Korban Henti Jantung',
        'SOP Pembebasan Sumbatan Saluran Napas Korban Tersedak (Heimlich Maneuver)', 'SOP Penghentian Pendarahan Arteri Hebat Menggunakan Torniket Hemostatik',
        'SOP Balut Tekan Steril pada Luka Sayat & Robek di Tempat Kerja', 'SOP Pembidaian Fraktur Tulang Tertutup & Fraktur Tulang Terbuka',
        'SOP Pemasangan Penyangga Leher (Cervical Collar) Korban Dugaan Cedera Tulang Belakang', 'SOP Pemindahan Korban Trauma Menggunakan Long Spine Board & Tandu Sekop',
        'SOP Penanganan Luka Bakar Termal Ringan-Sedang Menggunakan Air Mengalir 20 Menit', 'SOP Penanganan Korban Tersengat Listrik & Pencegahan Cardiac Arrest',
        'SOP Penanganan Korban Pingsan Akibat Heat Stroke di Lingkungan Kerja Panas', 'SOP Penanganan Korban Keracunan Gas Beracun Karbon Monoksida / Asam Sulfida',
        'SOP Penanganan Syok Hipovolemik & Penyelimutan Suhu Tubuh Korban', 'SOP Penanganan Reaksi Alergi Berat (Syok Anafilaktik) di Tempat Kerja',
        'SOP Penanganan Korban Tertusuk Jarum Suntik Medis Bekas (Needlestick Protocol)', 'SOP Penanganan Korban Gigitan Ular Berbisa di Area Perkebunan/Proyek',
        'SOP Pengelolaan & Pemeriksaan Rutin Bulanan Isi Kotak P3K Bentuk A, B, C', 'SOP Pengelolaan Ruang Poliklinik P3K Pabrik & Buku Register Kunjungan Medis',
        'SOP Koordinasi Evakuasi Medis Darurat Menggunakan Ambulans (Medevac Protocol)', 'SOP Rujukan Pasien Gawat Darurat ke Rumah Sakit Trauma Center BPJS',
        'SOP Pemeriksaan Tanda-Tanda Vital Korban (Tekanan Darah, Nadi, Laju Napas, Saturasi SpO2)', 'SOP Penanganan Benda Asing Masuk ke Dalam Mata (Eye Irrigation SOP)',
        'SOP Penanganan Serangan Asma Akut & Penggunaan Inhaler Pekerja', 'SOP Penulisan Formulir Laporan Medis Pertolongan Pertama Insiden K3'
      ]
    }
  ];

  for (const cluster of sopClusters) {
    const src = officialSources[cluster.sourceKey] || officialSources.uu1;
    for (let i = 0; i < cluster.sops.length; i++) {
      const sopTitle = cluster.sops[i];
      const fullTitle = `${sopTitle}`;
      const slug = `${sopTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`.replace(/^-|-$/g, '');
      const keyword = `${slug.replace(/-/g, ' ')} kerja aman`.trim();

      records.push({
        section: 'panduan',
        slug,
        title: fullTitle,
        metaTitle: `${fullTitle} | Prosedur Kerja Aman`,
        description: `Prosedur standar operasional (SOP) keselamatan ${fullTitle} di industri: tahapan pra-pekerjaan, analisis bahaya JSA, APD wajib, mitigasi risiko ${cluster.legalDefault}, dan tindakan darurat.`,
        answer: `${fullTitle} adalah instruksi kerja keselamatan baku dalam klaster ${cluster.clusterName} yang mengatur langkah demi langkah pelaksanaan tugas secara aman berdasarkan ${cluster.legalDefault} guna mencegah kecelakaan fatal, cedera kerja, dan kerusakan aset fasilitas industri.`,
        highlights: [
          `Klaster Keselamatan: ${cluster.clusterName}`,
          `Kategori: ${cluster.prefix}`,
          `Standar Rujukan: ${cluster.legalDefault}`,
          'Implementasi: Izin Kerja Aman (PTW), Briefing JSA & Pemakaian APD Standar'
        ],
        blocks: [
          {
            heading: `Tujuan & Ruang Lingkup ${fullTitle}`,
            paragraphs: [
              `Penerapan ${fullTitle} bertujuan memberikan panduan operasional terstandar bagi seluruh pekerja, teknisi, dan pengawas yang terlibat dalam aktivitas ${cluster.clusterName}. Prosedur ini menjamin bahwa seluruh faktor risiko telah dimitigasi sebelum pekerjaan dimulai.`,
              `Sesuai dengan ketentuan ${cluster.legalDefault} dan UU No. 1 Tahun 1970, pengurus fasilitas wajib memastikan setiap personel telah mendapatkan pelatihan yang memadai dan mematuhi seluruh tahapan kerja aman yang tertuang dalam instruksi kerja ini.`
            ]
          },
          {
            heading: 'Tahapan Kerja Aman Standar (Langkah Demi Langkah)',
            paragraphs: [
              'Pelaksanaan pekerjaan wajib mengikuti urutan tahapan yang telah diverifikasi oleh tim K3:',
            ],
            bullets: [
              '1. Tahap Persiapan: Melakukan pemeriksaan awal lokasi, verifikasi Job Safety Analysis (JSA), dan pengurusan Izin Kerja Aman (Permit to Work).',
              '2. Pemeriksaan APD & Peralatan: Memastikan seluruh peralatan kerja telah lulus inspeksi berkala dan APD spesifik dikenakan secara benar.',
              '3. Pelaksanaan Pekerjaan: Menjalankan pekerjaan sesuai instruksi teknis dengan menerapkan prinsip kehati-hatian dan pengawasan aktif.',
              '4. Pemantauan Kondisi Bahaya: Mengawasi perubahan kondisi lingkungan kerja (cuaca, kebocoran gas, getaran, temperatur) secara kontinu.',
              '5. Tahap Penyelesaian & Housekeeping: Membersihkan area kerja, mengembalikan peralatan, mengunci kembali sumber energi, dan menutup izin kerja.'
            ]
          },
          {
            heading: 'Alat Pelindung Diri (APD) Wajib & Peralatan Keselamatan',
            paragraphs: [
              'Personel yang bertugas wajib dilengkapi dengan APD berstandar SNI/EN/ANSI yang relevan:',
            ],
            bullets: [
              'Helm keselamatan (Safety Helmet) dengan tali dagu (chin strap)',
              'Kacamata pelindung (Safety Glasses / Goggles / Face Shield)',
              'Sepatu keselamatan berujung baja (Safety Steel Toe Boots)',
              'Sarung tangan pelindung mekanik/kimia/panas sesuai karakteristik tugas',
              'Pakaian kerja reflektif (Coverall / High-Visibility Vest) dan alat bantu pernapasan/harness bila dipersyaratkan'
            ]
          },
          {
            heading: 'Tindakan Tanggap Darurat di Lapangan',
            paragraphs: [
              'Apabila terjadi kondisi darurat atau anomali parameter selama pekerjaan berlangsung, segera hentikan aktivitas seketika (Stop Work Authority), evakuasi personel ke titik aman, bunyikan alarm darurat, dan laporkan insiden kepada Incident Commander / Tim K3 Fasilitas.'
            ]
          }
        ],
        faqs: [
          { question: `Kapan dokumen ${fullTitle} harus diperbarui (review)?`, answer: 'Dokumen SOP wajib ditinjau ulang minimal setahun sekali, atau setelah terjadinya insiden kecelakaan kerja, adanya modifikasi peralatan mesin, atau perubahan regulasi pemerintah.' },
          { question: `Siapa yang bertanggung jawab mengawasi penerapan ${fullTitle} di lapangan?`, answer: 'Supervisor pelaksana pekerjaan bersama Safety Officer lapangan bertanggung jawab penuh mengawasi kepatuhan seluruh pekerja terhadap tahapan SOP.' },
          { question: `Apa sanksi bagi pekerja yang melanggar ketentuan ${fullTitle}?`, answer: 'Pelanggaran terhadap SOP keselamatan dikenakan sanksi disiplin bertingkat mulai dari peringatan lisan, surat peringatan (SP), hingga pencabutan izin kerja di area fasilitas.' }
        ],
        related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker', 'jadwal'],
        sources: [src, officialSources.uu1, officialSources.pp50],
        status: 'published',
        publishedAt: '2026-08-01',
        updatedAt: '2026-09-01',
        indexable: true,
        intent: `panduan ${slug} sop prosedur langkah izin keselamatan`,
        primaryKeyword: keyword,
        searchIntent: `sop langkah kerja aman, izin kerja, apd, dan mitigasi bahaya ${fullTitle}`,
        intentType: 'informational',
        parentTopic: `Panduan SOP ${cluster.clusterName}`,
        cannibalizationGroup: `panduan-${cluster.prefix.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        contentKind: 'guide',
        primaryCtaText: `Konsultasi Penerapan ${fullTitle.split('(')[0].trim()}`,
        primaryCtaIntent: 'syarat',
        secondaryCtaText: 'Tanya Pelatihan & Sertifikasi K3',
        secondaryCtaIntent: 'jadwal'
      });
    }
  }

  return records;
}

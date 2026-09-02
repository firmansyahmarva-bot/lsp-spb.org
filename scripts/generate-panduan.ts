import { ContentRecordInput } from './build-inventory';
import { officialSources, SourceItem } from './sources';

interface CommercialGuideSeed {
  slug: string;
  title: string;
  intentCategory: string;
  desc: string;
  ctaText: string;
  ctaIntent: ContentRecordInput['primaryCtaIntent'];
  sourceKey?: string;
  legalDefault?: string;
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

  // Group A: Exactly 77 Priority Commercial & Strategic Guides
  const commercialGuides: CommercialGuideSeed[] = [
    { slug: 'syarat-ahli-k3-umum', title: 'Panduan Syarat Pendaftaran Ahli K3 Umum (Kemnaker RI)', intentCategory: 'requirement', desc: 'Syarat pendidikan minimal D3/S1, dokumen identitas, surat rekomendasi perusahaan, dan alur verifikasi berkas pendaftaran calon Ahli K3 Umum.', ctaText: 'Cek Kelayakan Berkas Ahli K3 Umum', ctaIntent: 'syarat', sourceKey: 'permen02_1992', legalDefault: 'Permenaker No. PER.02/MEN/1992' },
    { slug: 'biaya-pelatihan-k3', title: 'Panduan Estimasi Biaya Pelatihan K3 & Komponen Harga', intentCategory: 'cost', desc: 'Rincian estimasi biaya pelatihan Ahli K3 Umum, Auditor SMK3, K3 Kebakaran, dan faktor pembeda harga kelas online vs tatap muka.', ctaText: 'Tanya Rincian Biaya Pelatihan K3', ctaIntent: 'biaya', sourceKey: 'uu1', legalDefault: 'UU No. 1 Tahun 1970 & Permenaker' },
    { slug: 'materi-ahli-k3-umum', title: 'Panduan Lengkap Materi & Kurikulum Ahli K3 Umum 120 JP', intentCategory: 'curriculum', desc: 'Struktur kurikulum 120 jam pelajaran pembinaan Ahli K3 Umum: kebijakan K3, dasar hukum, kelembagaan P2K3, pengawasan norma, dan PKL.', ctaText: 'Unduh Silabus Lengkap 120 JP', ctaIntent: 'jadwal', sourceKey: 'permen02_1992', legalDefault: 'Permenaker No. PER.02/MEN/1992' },
    { slug: 'tugas-ahli-k3-umum', title: 'Panduan Tugas, Fungsi & Tanggung Jawab Ahli K3 Umum di Perusahaan', intentCategory: 'responsibility', desc: 'Uraian tugas operasional Ahli K3 Umum sebagai sekretaris P2K3, penyusun laporan triwulan naker, dan pengawas kepatuhan SMK3.', ctaText: 'Konsultasi Peran Ahli K3 Umum', ctaIntent: 'syarat', sourceKey: 'permen02_1992', legalDefault: 'Permenaker No. PER.02/MEN/1992' },
    { slug: 'cara-daftar-pelatihan-k3-online', title: 'Panduan Cara Mendaftar Pelatihan K3 Online & Blended Training', intentCategory: 'registration', desc: 'Langkah mudah pendaftaran batch pelatihan K3 secara online, konfirmasi berkas, jadwal zoom, dan pengiriman modul fisik.', ctaText: 'Daftar Batch Pelatihan Terdekat', ctaIntent: 'daftar', sourceKey: 'uu1', legalDefault: 'Peraturan Kemnaker RI' },
    { slug: 'biaya-pelatihan-auditor-smk3', title: 'Panduan Biaya Pelatihan & Sertifikasi Auditor SMK3 Kemnaker', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan 40 JP Auditor SMK3 PP 50/2012, fasilitas sertifikat, kartu kewenangan, dan konsultasi ujian.', ctaText: 'Tanya Biaya Auditor SMK3', ctaIntent: 'biaya', sourceKey: 'pp50', legalDefault: 'PP No. 50 Tahun 2012' },
    { slug: 'syarat-perpanjangan-skp-ahli-k3', title: 'Panduan Syarat & Alur Perpanjangan SKP Ahli K3 Kemnaker RI', intentCategory: 'requirement', desc: 'Prosedur perpanjangan Surat Keputusan Penunjukan (SKP) Ahli K3 yang habis masa berlaku 3 tahun melalui portal TemanK3.', ctaText: 'Konsultasi Perpanjangan SKP', ctaIntent: 'syarat', sourceKey: 'permen02_1992', legalDefault: 'Permenaker No. PER.02/MEN/1992' },
    { slug: 'cara-pengajuan-proposal-inhouse-training-k3', title: 'Panduan Pengajuan Proposal In-House Training K3 untuk Perusahaan', intentCategory: 'corporate', desc: 'Cara meminta surat penawaran harga (SPH), silabus yang dikustomisasi, dan negosiasi jadwal pelatihan internal karyawan.', ctaText: 'Minta Proposal In-House Training', ctaIntent: 'perusahaan', sourceKey: 'pp50', legalDefault: 'PP No. 50 Tahun 2012' },
    { slug: 'biaya-pelatihan-k3-kebakaran', title: 'Panduan Biaya Pelatihan K3 Kebakaran Kelas D, C, B, dan A', intentCategory: 'cost', desc: 'Rincian harga pembinaan penanggulangan kebakaran Kemnaker RI untuk kelas regu pemadam, koordinator, hingga ahli spesialis.', ctaText: 'Tanya Biaya Pelatihan Damkar', ctaIntent: 'biaya', sourceKey: 'kep186_1999', legalDefault: 'Kepmenaker No. KEP.186/MEN/1999' },
    { slug: 'syarat-pendaftaran-petugas-p3k-kemnaker', title: 'Panduan Syarat & Prosedur Pendaftaran Petugas P3K di Tempat Kerja', intentCategory: 'requirement', desc: 'Ketentuan pendidikan minimal, pas foto, surat tugas instansi, dan kelengkapan berkas pelatihan 30 JP Petugas P3K.', ctaText: 'Cek Syarat Petugas P3K', ctaIntent: 'syarat', sourceKey: 'permen15_2008', legalDefault: 'Permenaker No. PER.15/MEN/VIII/2008' },
    { slug: 'biaya-pelatihan-k3-listrik', title: 'Panduan Biaya Pelatihan Teknisi K3 Listrik & Ahli K3 Listrik', intentCategory: 'cost', desc: 'Perbandingan estimasi biaya pelatihan sertifikasi teknisi listrik vs ahli K3 listrik sesuai Permenaker 12/2015.', ctaText: 'Tanya Biaya K3 Listrik', ctaIntent: 'biaya', sourceKey: 'permen12_2015', legalDefault: 'Permenaker No. 12 Tahun 2015' },
    { slug: 'syarat-sertifikasi-bnsp-k3', title: 'Panduan Persyaratan Uji Kompetensi & Asesmen Sertifikasi BNSP K3', intentCategory: 'requirement', desc: 'Bukti kerja portofolio, surat pengalaman, CV profesional, dan alur pra-asesmen sertifikasi profesi K3 Garuda BNSP.', ctaText: 'Cek Persyaratan Portofolio BNSP', ctaIntent: 'syarat', sourceKey: 'bnsp_general', legalDefault: 'Standar SKKNI & BNSP' },
    { slug: 'biaya-sertifikasi-bnsp-safety-officer', title: 'Panduan Biaya Sertifikasi BNSP Safety Officer & Supervisor K3', intentCategory: 'cost', desc: 'Estimasi biaya uji kompetensi skema pengawas K3, biaya asesmen ulang, dan penerbitan sertifikat kompetensi.', ctaText: 'Tanya Biaya Asesmen BNSP', ctaIntent: 'biaya', sourceKey: 'bnsp_general', legalDefault: 'Standar SKKNI & BNSP' },
    { slug: 'perbedaan-ahli-k3-kemnaker-vs-bnsp', title: 'Panduan Memilih Jalur: Ahli K3 Kemnaker RI vs Sertifikasi BNSP K3', intentCategory: 'comparison', desc: 'Panduan pengambilan keputusan karier: kapan memerlukan SKP penunjukan Kemnaker dan kapan memerlukan sertifikat kompetensi BNSP.', ctaText: 'Konsultasi Pemilihan Sertifikasi', ctaIntent: 'syarat', sourceKey: 'uu1', legalDefault: 'Permenaker & Standar BNSP' },
    { slug: 'cara-membuat-laporan-triwulan-p2k3', title: 'Panduan Praktis Cara Menyusun Laporan Triwulan P2K3 untuk Disnaker', intentCategory: 'procedure', desc: 'Format baku laporan kegiatan P2K3, statistik kecelakaan kerja, notulen rapat bulanan, dan alur pelaporan ke dinas tenaga kerja.', ctaText: 'Minta Template Laporan P2K3', ctaIntent: 'perusahaan', sourceKey: 'permen04_1987', legalDefault: 'Permenaker No. PER.04/MEN/1987' },
    { slug: 'dokumen-wajib-audit-smk3-pp-50', title: 'Panduan Dokumen Wajib Persiapan Audit Sertifikasi SMK3 PP 50/2012', intentCategory: 'compliance', desc: 'Checklist berkas manual K3, prosedur SOP, bukti notulen rapat, rekaman inspeksi, dan matriks pelatihan untuk 166 kriteria.', ctaText: 'Konsultasi Persiapan Audit SMK3', ctaIntent: 'perusahaan', sourceKey: 'pp50', legalDefault: 'PP No. 50 Tahun 2012' },
    { slug: 'biaya-pelatihan-bekerja-di-ketinggian', title: 'Panduan Biaya Pelatihan K3 Bekerja di Ketinggian (TKPK & TKBT)', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan Tenaga Kerja Bangunan Tinggi dan Tenaga Kerja Pada Ketinggian rope access berlisensi Kemnaker.', ctaText: 'Tanya Biaya Ketinggian', ctaIntent: 'biaya', sourceKey: 'permen09_2016', legalDefault: 'Permenaker No. 09 Tahun 2016' },
    { slug: 'syarat-mengikuti-pelatihan-ruang-terbatas', title: 'Panduan Syarat Pelatihan K3 Ruang Terbatas (Confined Space Madya/Utama)', intentCategory: 'requirement', desc: 'Kualifikasi fisik sehat bebas klaustrofobia, surat tugas, dan dokumen administrasi peserta pelatihan confined space.', ctaText: 'Cek Syarat Confined Space', ctaIntent: 'syarat', sourceKey: 'se01_2012', legalDefault: 'SE Menakertrans No. SE.01/2012' },
    { slug: 'biaya-pelatihan-operator-forklift', title: 'Panduan Biaya Pelatihan & Sertifikasi Operator Forklift (SIO Kemnaker)', intentCategory: 'cost', desc: 'Rincian biaya pembinaan operator forklift Kelas 1 dan Kelas 2 lengkap dengan uji praktik manuver dan penerbitan lisensi SIO.', ctaText: 'Tanya Biaya Operator Forklift', ctaIntent: 'biaya', sourceKey: 'permen08_2020', legalDefault: 'Permenaker No. 08 Tahun 2020' },
    { slug: 'syarat-sertifikasi-operator-crane-kemnaker', title: 'Panduan Syarat Sertifikasi Operator Crane & Rigger Berlisensi', intentCategory: 'requirement', desc: 'Persyaratan ijazah, pengalaman kerja, pemeriksaan kesehatan mata, dan administrasi lisensi K3 pesawat angkat angkut.', ctaText: 'Cek Syarat Operator Crane', ctaIntent: 'syarat', sourceKey: 'permen08_2020', legalDefault: 'Permenaker No. 08 Tahun 2020' },
    { slug: 'tata-cara-klaim-jkk-bpjs-ketenagakerjaan', title: 'Panduan Tata Cara Pengajuan Klaim Jaminan Kecelakaan Kerja (JKK)', intentCategory: 'procedure', desc: 'Alur pelaporan tahap 1 (2x24 jam), pengisian formulir KK2, verifikasi rumah sakit trauma center, dan pencairan santunan.', ctaText: 'Konsultasi Prosedur Klaim JKK', ctaIntent: 'syarat', sourceKey: 'uu13', legalDefault: 'Peraturan BPJS Ketenagakerjaan' },
    { slug: 'cara-menyusun-rencana-keselamatan-konstruksi-rkk', title: 'Panduan Penyusunan Rencana Keselamatan Konstruksi (RKK) Proyek', intentCategory: 'procedure', desc: 'Format penyusunan RKK sesuai Permen PUPR 10/2021: elemen kepemimpinan, perencanaan K3, operasi keselamatan, dan evaluasi.', ctaText: 'Minta Template Format RKK', ctaIntent: 'perusahaan', sourceKey: 'pupr10_2021', legalDefault: 'Permen PUPR No. 10 Tahun 2021' },
    { slug: 'biaya-pelatihan-hiperkes-dokter-paramedis', title: 'Panduan Biaya Pelatihan Sertifikasi Hiperkes Dokter & Paramedis', intentCategory: 'cost', desc: 'Estimasi biaya pelatihan medis okupasi Hiperkes Kemenaker untuk dokter perusahaan dan perawat klinik tempat kerja.', ctaText: 'Tanya Biaya Pelatihan Hiperkes', ctaIntent: 'biaya', sourceKey: 'permen15_2008', legalDefault: 'Permenaker No. PER.01/MEN/1976' },
    { slug: 'syarat-pembentukan-p2k3-perusahaan', title: 'Panduan Syarat & Alur Pengesahan Struktur P2K3 di Dinas Tenaga Kerja', intentCategory: 'compliance', desc: 'Persyaratan pembentukan Panitia Pembina K3, surat permohonan pengesahan, struktur ketua & sekretaris, dan SK Disnaker.', ctaText: 'Konsultasi Pengesahan P2K3', ctaIntent: 'perusahaan', sourceKey: 'permen04_1987', legalDefault: 'Permenaker No. PER.04/MEN/1987' },
    { slug: 'cara-menghitung-trir-dan-ltifr-k3', title: 'Panduan Cara Menghitung Rumus TRIR, LTIFR & Severity Rate K3', intentCategory: 'procedure', desc: 'Rumus matematis kalkulasi frekuensi kecelakaan kerja per 200.000 atau 1.000.000 jam kerja selamat dan contoh perhitungannya.', ctaText: 'Konsultasi Statistik Kinerja K3', ctaIntent: 'syarat', sourceKey: 'pp50', legalDefault: 'PP No. 50 Tahun 2012' },
    { slug: 'biaya-pelatihan-ahli-k3-kimia', title: 'Panduan Biaya Pelatihan Ahli K3 Kimia & Petugas K3 Kimia', intentCategory: 'cost', desc: 'Estimasi investasi pembinaan 120 JP Ahli K3 Kimia vs 40 JP Petugas Kimia untuk pemenuhan Kepmenaker 187/1999.', ctaText: 'Tanya Biaya K3 Kimia', ctaIntent: 'biaya', sourceKey: 'kep187_1999', legalDefault: 'Kepmenaker No. KEP.187/MEN/1999' },
    { slug: 'syarat-menjadi-auditor-smk3-resmi', title: 'Panduan Syarat & Jalur Karier Menjadi Auditor SMK3 Kemnaker RI', intentCategory: 'career', desc: 'Persyaratan wajib memiliki sertifikat Ahli K3 Umum, pengalaman kerja HSE, kelulusan ujian auditor, dan penunjukan SKP.', ctaText: 'Cek Syarat Auditor SMK3', ctaIntent: 'syarat', sourceKey: 'pp50', legalDefault: 'PP No. 50 Tahun 2012' },
    { slug: 'tata-cara-audit-internal-smk3-tahunan', title: 'Panduan Langkah Praktis Pelaksanaan Audit Internal SMK3 Perusahaan', intentCategory: 'procedure', desc: 'Tahapan opening meeting, sampling dokumen, verifikasi observasi lapangan, wawancara pekerja, hingga closing meeting.', ctaText: 'Konsultasi Pelaksanaan Audit Internal', ctaIntent: 'perusahaan', sourceKey: 'pp50', legalDefault: 'PP No. 50 Tahun 2012' },
    { slug: 'biaya-pelatihan-k3-rumah-sakit-k3rs', title: 'Panduan Biaya & Silabus Pelatihan K3RS untuk Manajemen Rumah Sakit', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan keselamatan rumah sakit, pengelolaan limbah medis, proteksi kebakaran faskes, dan evakuasi pasien.', ctaText: 'Tanya Biaya K3 Rumah Sakit', ctaIntent: 'biaya', sourceKey: 'permenkes66_2016', legalDefault: 'Permenkes No. 66 Tahun 2016' },
    { slug: 'syarat-penerbitan-surat-keterangan-laik-k3-riksa-uji', title: 'Panduan Syarat & Alur Riksa Uji Penerbitan Suket Laik K3 Alat Pabrik', intentCategory: 'compliance', desc: 'Prosedur pemeriksaan teknis PJK3 Riksa Uji untuk boiler, crane, elevator, instalasi listrik, dan penangkal petir.', ctaText: 'Konsultasi Riksa Uji Alat Pabrik', ctaIntent: 'perusahaan', sourceKey: 'uu1', legalDefault: 'UU No. 1 Tahun 1970' },
    { slug: 'cara-menyusun-hiradc-lengkap', title: 'Panduan Praktis Cara Menyusun Tabel HIRADC Matriks Risiko 5x5', intentCategory: 'procedure', desc: 'Langkah menentukan aktivitas rutin/non-rutin, identifikasi bahaya, skor kemungkinan x keparahan, dan hierarki pengendalian.', ctaText: 'Minta Template Tabel HIRADC', ctaIntent: 'syarat', sourceKey: 'pp50', legalDefault: 'PP No. 50 Tahun 2012' },
    { slug: 'biaya-pelatihan-ahli-k3-konstruksi', title: 'Panduan Biaya Pelatihan Ahli K3 Konstruksi Muda, Madya, dan Utama', intentCategory: 'cost', desc: 'Rincian biaya pelatihan pembinaan keselamatan konstruksi Kemnaker dan sertifikasi kompetensi SMKK Kementerian PUPR.', ctaText: 'Tanya Biaya K3 Konstruksi', ctaIntent: 'biaya', sourceKey: 'pupr10_2021', legalDefault: 'Permen PUPR No. 10 Tahun 2021' },
    { slug: 'syarat-menjadi-trainer-instruktur-k3', title: 'Panduan Syarat & Kualifikasi Menjadi Instruktur Pelatihan K3 Profesional', intentCategory: 'career', desc: 'Kualifikasi sertifikat Training of Trainer (TOT) BNSP, kepemilikan lisensi spesialis, dan jam terbang mengajar keselamatan kerja.', ctaText: 'Konsultasi Karir Instruktur K3', ctaIntent: 'syarat', sourceKey: 'bnsp_general', legalDefault: 'Standar SKKNI & BNSP' },
    { slug: 'cara-mendapatkan-penghargaan-zero-accident', title: 'Panduan Syarat & Verifikasi Berkas Penghargaan Kecelakaan Nihil (Zero Accident)', intentCategory: 'compliance', desc: 'Ketentuan penghitungan jam kerja selamat tanpa fatality, audit tim penilai Disnaker, dan penganugerahan piagam Menteri.', ctaText: 'Konsultasi Zero Accident Award', ctaIntent: 'perusahaan', sourceKey: 'uu1', legalDefault: 'Peraturan Kemnaker RI' },
    { slug: 'biaya-pelatihan-pop-minerba-tambang', title: 'Panduan Biaya Pelatihan & Sertifikasi POP Pertambangan Minerba', intentCategory: 'cost', desc: 'Estimasi biaya bimbingan teknis dan uji kompetensi Pengawas Operasional Pertama (POP) tambang bersertifikat BNSP/ESDM.', ctaText: 'Tanya Biaya Diklat POP Tambang', ctaIntent: 'biaya', sourceKey: 'esdm1827_2018', legalDefault: 'Kepmen ESDM 1827/2018' },
    { slug: 'syarat-mengikuti-uji-kompetensi-pop-tambang', title: 'Panduan Syarat Pengalaman & Dokumen Uji Kompetensi POP Minerba', intentCategory: 'requirement', desc: 'Ketentuan minimal pendidikan, pengalaman kerja tambang, bukti logbook pengawasan, dan surat penugasan KTT perusahaan.', ctaText: 'Cek Syarat POP Tambang', ctaIntent: 'syarat', sourceKey: 'esdm1827_2018', legalDefault: 'Kepmen ESDM 1827/2018' },
    { slug: 'cara-menyusun-emergency-response-plan-erp', title: 'Panduan Penyusunan Dokumen Rencana Tanggap Darurat (ERP) Pabrik', intentCategory: 'procedure', desc: 'Struktur rencana darurat: denah evakuasi, nomor darurat eksternal, peran regu pemadam/medis, dan jadwal latihan drill berkala.', ctaText: 'Minta Panduan Dokumen ERP', ctaIntent: 'perusahaan', sourceKey: 'pp50', legalDefault: 'PP No. 50 Tahun 2012' },
    { slug: 'biaya-pelatihan-ahli-k3-lingkungan-kerja', title: 'Panduan Biaya Pelatihan Ahli K3 Lingkungan Kerja & Higiene Industri', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan pengukuran faktor bahaya kerja sesuai Permenaker 05/2018 dan sertifikasi kompetensi HIMU/HIMA.', ctaText: 'Tanya Biaya K3 Lingkungan', ctaIntent: 'biaya', sourceKey: 'permen05_2018', legalDefault: 'Permenaker No. 05 Tahun 2018' },
    { slug: 'syarat-pendaftaran-sertifikasi-rigger-juru-ikat', title: 'Panduan Syarat Pendaftaran Pelatihan Juru Ikat Muatan (Rigger K3)', intentCategory: 'requirement', desc: 'Kelengkapan berkas identitas, surat sehat fisik, dan prosedur pembinaan keselamatan pengikatan beban angkat berat.', ctaText: 'Cek Syarat Pelatihan Rigger', ctaIntent: 'syarat', sourceKey: 'permen08_2020', legalDefault: 'Permenaker No. 08 Tahun 2020' },
    { slug: 'cara-menyusun-csms-kontraktor', title: 'Panduan Menyusun Dokumen Contractor Safety Management System (CSMS)', intentCategory: 'procedure', desc: 'Panduan pembuatan dokumen kuesioner prakualifikasi CSMS, risk assessment vendor, dan penilaian kinerja safety kontraktor.', ctaText: 'Minta Template CSMS Vendor', ctaIntent: 'perusahaan', sourceKey: 'pp50', legalDefault: 'PP No. 50 Tahun 2012' },
    { slug: 'biaya-pelatihan-k3-migas-pengawas', title: 'Panduan Biaya Pelatihan & Sertifikasi Pengawas K3 Migas BNSP', intentCategory: 'cost', desc: 'Estimasi biaya uji kompetensi pengawas keselamatan minyak dan gas bumi, akomodasi uji TUK, dan penerbitan sertifikat Garuda.', ctaText: 'Tanya Biaya K3 Migas', ctaIntent: 'biaya', sourceKey: 'bnsp_general', legalDefault: 'Standar SKKNI & BNSP' },
    { slug: 'syarat-uji-kompetensi-pengawas-k3-migas', title: 'Panduan Syarat Pengalaman & Portofolio Asesmen Pengawas K3 Migas', intentCategory: 'requirement', desc: 'Daftar dokumen portofolio inspeksi migas, izin kerja PTW, laporan investigasi, dan wawancara teknis asesor BNSP.', ctaText: 'Cek Portofolio K3 Migas', ctaIntent: 'syarat', sourceKey: 'bnsp_general', legalDefault: 'Standar SKKNI & BNSP' },
    { slug: 'tata-cara-penerbitan-lisensi-k3-kemnaker', title: 'Panduan Tata Cara Penerbitan & Cetak Lisensi Kewenangan K3 Kemnaker', intentCategory: 'compliance', desc: 'Alur integrasi aplikasi TemanK3, penerbitan barcode resmi kartu lisensi kewenangan, dan pengiriman ke alamat perusahaan.', ctaText: 'Konsultasi Lisensi TemanK3', ctaIntent: 'syarat', sourceKey: 'uu1', legalDefault: 'Peraturan Kemnaker RI' },
    { slug: 'cara-menyusun-job-safety-analysis-jsa', title: 'Panduan Langkah Demi Langkah Pembuatan Job Safety Analysis (JSA)', intentCategory: 'procedure', desc: 'Template penyusunan formulir JSA: identifikasi tahapan tugas, potensi risiko bahaya mekanik/kimia, dan rekomendasi APD/SOP.', ctaText: 'Unduh Formulir Template JSA', ctaIntent: 'syarat', sourceKey: 'pp50', legalDefault: 'PP No. 50 Tahun 2012' },
    { slug: 'biaya-pelatihan-investigasi-kecelakaan-k3', title: 'Panduan Biaya & Silabus Pelatihan Investigasi Insiden & Root Cause Analysis', intentCategory: 'cost', desc: 'Estimasi biaya workshop teknis metodologi investigasi kecelakaan kerja RCA Fishbone, 5-Why, dan penyusunan rekomendasi CAPA.', ctaText: 'Tanya Biaya Investigasi Insiden', ctaIntent: 'biaya', sourceKey: 'uu1', legalDefault: 'Permenaker No. PER.03/MEN/1998' },
    { slug: 'syarat-pembentukan-komite-k3-rumah-sakit', title: 'Panduan Syarat & Struktur Organisasi Komite K3RS Rumah Sakit', intentCategory: 'compliance', desc: 'Kriteria penunjukan ketua komite, keterlibatan dokter spesialis okupasi, sanitarian, dan integrasi akreditasi RS.', ctaText: 'Konsultasi Pembentukan K3RS', ctaIntent: 'perusahaan', sourceKey: 'permenkes66_2016', legalDefault: 'Permenkes No. 66 Tahun 2016' },
    { slug: 'cara-menghitung-kebutuhan-apar-gedung', title: 'Panduan Cara Menghitung Kebutuhan Jumlah Tabung APAR Ruangan Gedung', intentCategory: 'procedure', desc: 'Kalkulasi luas lantai, klasifikasi potensi bahaya kebakaran ringan/sedang/berat, dan penentuan jarak penempatan tabung 15 meter.', ctaText: 'Konsultasi Perhitungan APAR', ctaIntent: 'syarat', sourceKey: 'kep186_1999', legalDefault: 'Permenaker No. PER.04/MEN/1980' },
    { slug: 'biaya-pelatihan-scaffolding-kemnaker', title: 'Panduan Biaya Pelatihan Teknisi & Supervisor Scaffolding Kemnaker RI', intentCategory: 'cost', desc: 'Rincian biaya pembinaan operator pasang-bongkar perancah pipa dan sertifikasi pengawas perancah konstruksi bangunan.', ctaText: 'Tanya Biaya K3 Scaffolding', ctaIntent: 'biaya', sourceKey: 'uu1', legalDefault: 'Permenaker No. PER.01/MEN/1980' },
    { slug: 'syarat-menjadi-petugas-k3-kimia', title: 'Panduan Syarat Pendidikan & Penunjukan Petugas K3 Kimia Perusahaan', intentCategory: 'requirement', desc: 'Kualifikasi minimal SMA IPA / SMK Kimia / D3 Teknik, surat penugasan laboratorium/gudang kimia, dan sertifikasi Kemnaker.', ctaText: 'Cek Syarat Petugas K3 Kimia', ctaIntent: 'syarat', sourceKey: 'kep187_1999', legalDefault: 'Kepmenaker No. KEP.187/MEN/1999' },
    { slug: 'cara-membuat-safety-induction-video-materi', title: 'Panduan Pembuatan Materi & Video Safety Induction Tamu Pabrik', intentCategory: 'procedure', desc: 'Komponen wajib briefing keselamatan: jalur evakuasi, titik kumpul, APD wajib, larangan merokok, dan alarm darurat.', ctaText: 'Minta Panduan Modul Induction', ctaIntent: 'perusahaan', sourceKey: 'pp50', legalDefault: 'PP No. 50 Tahun 2012' },
    { slug: 'biaya-pelatihan-operator-boiler-kemnaker', title: 'Panduan Biaya Pelatihan Operator Boiler Kelas 1 & Kelas 2', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan operator ketel uap industri, uji fungsi safety valve, dan penerbitan SIO resmi Kemnaker RI.', ctaText: 'Tanya Biaya Operator Boiler', ctaIntent: 'biaya', sourceKey: 'permen01_1988', legalDefault: 'Permenaker No. PER.01/MEN/1988' },
    { slug: 'syarat-uji-kelaikan-lift-penumpang-gedung', title: 'Panduan Syarat & Prosedur Riksa Uji Kelayakan Lift Gedung Bertingkat', intentCategory: 'compliance', desc: 'Pemeriksaan tali baja kawat hoist, uji pengereman governor kecepatan lebih, sensor pintu, dan penerbitan izin operasional.', ctaText: 'Konsultasi Riksa Uji Lift', ctaIntent: 'perusahaan', sourceKey: 'permen08_2020', legalDefault: 'Permenaker No. 06 Tahun 2017' },
    { slug: 'cara-melakukan-fit-testing-respirator-masker', title: 'Panduan Praktis Cara Uji Kerapatan Masker Respirator (Fit Testing K3)', intentCategory: 'procedure', desc: 'Prosedur tes kualitatif larutan saccharin / Bitrex dan tes kuantitatif partikel penghitung Portacount untuk pekerja berdebu.', ctaText: 'Konsultasi Fit Testing Masker', ctaIntent: 'syarat', sourceKey: 'permen05_2018', legalDefault: 'Permenaker No. 05 Tahun 2018' },
    { slug: 'biaya-pelatihan-petugas-k3-ruang-terbatas', title: 'Panduan Biaya Pelatihan Petugas Madya & Utama Ruang Terbatas Kemnaker', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan confined space entrant dan standby person, simulasi rescue tripod, dan penerbitan lisensi SIO.', ctaText: 'Tanya Biaya Ruang Terbatas', ctaIntent: 'biaya', sourceKey: 'se01_2012', legalDefault: 'SE Menakertrans No. SE.01/2012' },
    { slug: 'syarat-menjadi-ahli-k3-spesialis-listrik', title: 'Panduan Syarat Pendidikan & Penunjukan Ahli K3 Spesialis Listrik', intentCategory: 'requirement', desc: 'Kualifikasi sarjana teknik elektro, pengalaman instalasi listrik industri, pembinaan 120 JP, dan verifikasi SKP Kemnaker.', ctaText: 'Cek Syarat Ahli K3 Listrik', ctaIntent: 'syarat', sourceKey: 'permen12_2015', legalDefault: 'Permenaker No. 12 Tahun 2015' },
    { slug: 'cara-mengisi-buku-catatan-inspeksi-k3', title: 'Panduan Cara Mengisi Logbook & Buku Catatan Inspeksi K3 Terjadwal', intentCategory: 'procedure', desc: 'Format pencatatan temuan unsafe action, unsafe condition, tindakan korektif sementara, dan tanggal verifikasi penutupan (closing).', ctaText: 'Unduh Format Logbook Inspeksi', ctaIntent: 'syarat', sourceKey: 'pp50', legalDefault: 'PP No. 50 Tahun 2012' },
    { slug: 'biaya-pelatihan-lead-auditor-iso-45001', title: 'Panduan Biaya Pelatihan & Sertifikasi Lead Auditor ISO 45001 IRCA', intentCategory: 'cost', desc: 'Estimasi biaya kursus 5 hari Lead Auditor ISO 45001 bersertifikat internasional IRCA / CQI dan simulasi audit kasus nyata.', ctaText: 'Tanya Biaya Lead Auditor ISO', ctaIntent: 'biaya', sourceKey: 'iso45001', legalDefault: 'ISO 45001:2018' },
    { slug: 'syarat-fasilitas-ruang-p3k-pabrik', title: 'Panduan Syarat Kelengkapan Fasilitas Ruang P3K di Pabrik Manufaktur', intentCategory: 'compliance', desc: 'Kriteria luas ruangan, wastafel mengalir, tempat tidur periksa, tandu sekop, tabung oksigen, dan pencatatan kunjungan medis.', ctaText: 'Konsultasi Standar Ruang P3K', ctaIntent: 'perusahaan', sourceKey: 'permen15_2008', legalDefault: 'Permenaker No. PER.15/MEN/VIII/2008' },
    { slug: 'cara-mengelola-limbah-b3-sesuai-aturan', title: 'Panduan Pengelolaan Tempat Penyimpanan Sementara (TPS) Limbah B3', intentCategory: 'compliance', desc: 'Kriteria tata letak TPS limbah B3, simbol label bahaya, bak penampung ceceran (bundwall), dan pelaporan elektronik Festronik.', ctaText: 'Konsultasi Izin TPS Limbah B3', ctaIntent: 'perusahaan', sourceKey: 'kep187_1999', legalDefault: 'PP No. 22 Tahun 2021' },
    { slug: 'biaya-pelatihan-first-aid-cpr-aed', title: 'Panduan Biaya Workshop Praktik First Aid, CPR & Penggunaan AED', intentCategory: 'cost', desc: 'Estimasi biaya hands-on workshop resusitasi jantung paru menggunakan manekin sensorik dan simulasi defibrilator otomatis.', ctaText: 'Tanya Biaya Workshop CPR', ctaIntent: 'biaya', sourceKey: 'permen15_2008', legalDefault: 'Permenaker No. PER.15/MEN/VIII/2008' },
    { slug: 'syarat-uji-emisi-cerobong-pabrik-k3', title: 'Panduan Syarat & Pengambilan Sampel Uji Emisi Cerobong Asap Industri', intentCategory: 'compliance', desc: 'Ketentuan titik sampling isokinetik 8D-2D pada cerobong, lubang pengambilan sampel, dan batas emisi partikulat/gas KLHK.', ctaText: 'Konsultasi Uji Emisi Pabrik', ctaIntent: 'perusahaan', sourceKey: 'permen05_2018', legalDefault: 'Permenaker No. 05 Tahun 2018' },
    { slug: 'cara-membuat-safety-passport-pekerja', title: 'Panduan Penerbitan & Verifikasi Safety Passport Pekerja Kontraktor', intentCategory: 'procedure', desc: 'Format buku paspor keselamatan: rekaman medical checkup, riwayat induksi, lisensi kewenangan, dan catatan pelanggaran safety.', ctaText: 'Konsultasi Sistem Safety Passport', ctaIntent: 'perusahaan', sourceKey: 'pp50', legalDefault: 'PP No. 50 Tahun 2012' },
    { slug: 'biaya-pelatihan-k3-pengelasan-welding', title: 'Panduan Biaya Pelatihan K3 Pekerjaan Panas & Pengelasan Logam', intentCategory: 'cost', desc: 'Estimasi biaya bimbingan keselamatan juru las, pengendalian gas pelindung, APD welding helmet, dan fire watch permit.', ctaText: 'Tanya Biaya K3 Pengelasan', ctaIntent: 'biaya', sourceKey: 'uu1', legalDefault: 'Permenaker No. PER.02/MEN/1982' },
    { slug: 'syarat-penyediaan-kotak-p3k-bentuk-a-b-c', title: 'Panduan Daftar Isi & Syarat Kotak P3K Bentuk A, B, dan C Kemnaker', intentCategory: 'compliance', desc: 'Tabel daftar 21 jenis isi kotak P3K resmi Permenaker 15/2008 dan rasio penempatan per 25, 50, dan 100 tenaga kerja.', ctaText: 'Minta Checklist Kotak P3K', ctaIntent: 'syarat', sourceKey: 'permen15_2008', legalDefault: 'Permenaker No. PER.15/MEN/VIII/2008' },
    { slug: 'cara-menyelenggarakan-fire-drill-gedung', title: 'Panduan Tahapan Menyelenggarakan Simulasi Evakuasi Fire Drill Gedung', intentCategory: 'procedure', desc: 'Skenario latihan: pembunyian alarm, pergerakan floor warden, evakuasi tanpa lift, penghitungan headcount, dan debriefing.', ctaText: 'Konsultasi Skenario Fire Drill', ctaIntent: 'perusahaan', sourceKey: 'kep186_1999', legalDefault: 'Kepmenaker No. KEP.186/MEN/1999' },
    { slug: 'biaya-pelatihan-petugas-proteksi-radiasi-ppr', title: 'Panduan Biaya Kursus & Ujian Lisensi Petugas Proteksi Radiasi (PPR)', intentCategory: 'cost', desc: 'Estimasi biaya pelatihan proteksi radiasi industri medik / industri teknik BAPETEN dan bimbingan ujian lisensi PPR.', ctaText: 'Tanya Biaya Pelatihan PPR', ctaIntent: 'biaya', sourceKey: 'permen05_2018', legalDefault: 'Peraturan BAPETEN & Permenaker' },
    { slug: 'syarat-uji-hidrostatis-bejana-tekanan', title: 'Panduan Syarat & Tekanan Uji Hidrostatis (Hydrotest) Tangki Pabrik', intentCategory: 'compliance', desc: 'Kalkulasi tekanan uji 1,5 kali MAWP, pengisian air bebas udara terjebak, waktu penahanan tekanan, dan inspeksi kebocoran las.', ctaText: 'Konsultasi Hydrotest Bejana', ctaIntent: 'perusahaan', sourceKey: 'permen37_2016', legalDefault: 'Permenaker No. 37 Tahun 2016' },
    { slug: 'cara-membuat-peta-evakuasi-gedung-k3', title: 'Panduan Standar Desain Peta Jalur Evakuasi & Rambu Darurat Gedung', intentCategory: 'procedure', desc: 'Ketentuan orientasi peta (You Are Here), penandaan lokasi APAR, tombol alarm, pintu keluar darurat, dan assembly point.', ctaText: 'Minta Panduan Denah Evakuasi', ctaIntent: 'perusahaan', sourceKey: 'kep186_1999', legalDefault: 'Kepmenaker No. KEP.186/MEN/1999' },
    { slug: 'biaya-pelatihan-petugas-gas-tester-agt', title: 'Panduan Biaya Pelatihan & Sertifikasi Petugas Gas Tester (AGT)', intentCategory: 'cost', desc: 'Estimasi biaya pembinaan teknisi uji gas atmosfer ruang terbatas, kalibrasi instrumen multi-gas, dan sertifikasi BNSP/Migas.', ctaText: 'Tanya Biaya Sertifikasi AGT', ctaIntent: 'biaya', sourceKey: 'se01_2012', legalDefault: 'SE Menakertrans SE.01/2012' },
    { slug: 'syarat-pembuatan-surat-izin-operator-sio-kemnaker', title: 'Panduan Syarat & Alur Pembuatan SIO Operator Alat Berat Kemnaker', intentCategory: 'requirement', desc: 'Kelengkapan berkas KTP, ijazah, surat sehat mata tidak buta warna, pas foto, dan ujian praktik operasional di lapangan.', ctaText: 'Cek Syarat Penerbitan SIO', ctaIntent: 'syarat', sourceKey: 'permen08_2020', legalDefault: 'Permenaker No. 08 Tahun 2020' },
    { slug: 'cara-melakukan-inspeksi-visual-scaffolding', title: 'Panduan Checklist Pemeriksaan Visual Kelayakan Scaffolding Perancah', intentCategory: 'procedure', desc: 'Pemeriksaan sole plate, jack base, standar vertikal, ledger horisontal, cross brace, papan kerja (plank), dan pemasangan Green Tag.', ctaText: 'Unduh Checklist Scafftag', ctaIntent: 'syarat', sourceKey: 'uu1', legalDefault: 'Permenaker No. PER.01/MEN/1980' },
    { slug: 'biaya-pelatihan-audiometri-spirometri-k3', title: 'Panduan Biaya Workshop Pemeriksaan Audiometri & Spirometri Okupasi', intentCategory: 'cost', desc: 'Estimasi biaya pelatihan teknis kalibrasi alat audiometer, uji nada murni, kurva spirometri FVC/FEV1 bagi tenaga medis klinik.', ctaText: 'Tanya Biaya Workshop Medis', ctaIntent: 'biaya', sourceKey: 'permen05_2018', legalDefault: 'Permenaker No. 05 Tahun 2018' },
    { slug: 'syarat-penggantian-apd-rusak-di-tempat-kerja', title: 'Panduan Prosedur Penggantian APD Rusak & Kadaluarsa bagi Karyawan', intentCategory: 'procedure', desc: 'Alur penukaran helm retak, sepatu robek, harness aus ke bagian gudang K3 tanpa membebankan biaya kepada tenaga kerja.', ctaText: 'Konsultasi Manajemen APD', ctaIntent: 'syarat', sourceKey: 'uu1', legalDefault: 'UU No. 1 Tahun 1970 Pasal 9' },
    { slug: 'cara-menyusun-prosedur-tanggap-darurat-tumpahan-kimia', title: 'Panduan Penyusunan Prosedur Spill Response & Penggunaan Spill Kit B3', intentCategory: 'procedure', desc: 'Langkah aman penanganan tumpahan asam/pelarut: evakuasi area, pemakaian APD kimia, pembendungan absorbent sock, dan netralisasi.', ctaText: 'Unduh SOP Spill Response', ctaIntent: 'perusahaan', sourceKey: 'kep187_1999', legalDefault: 'Kepmenaker No. KEP.187/MEN/1999' },
    { slug: 'biaya-pelatihan-ergonomi-stasiun-kerja-perkantoran', title: 'Panduan Biaya In-House Workshop Ergonomi Kantor & Koreksi Postur', intentCategory: 'cost', desc: 'Estimasi paket workshop penyesuaian ergonomi meja komputer, peregangan otot berkala, dan evaluasi keluhan pegal karyawan.', ctaText: 'Tanya Biaya Workshop Ergonomi', ctaIntent: 'perusahaan', sourceKey: 'permen05_2018', legalDefault: 'Permenaker No. 05 Tahun 2018' },
    { slug: 'syarat-perizinan-pjk3-jasa-pembinaan-k3', title: 'Panduan Syarat & Alur Perizinan Perusahaan PJK3 Pembinaan K3 Kemnaker', intentCategory: 'compliance', desc: 'Syarat badan hukum PT, kelengkapan surat penunjukan Ahli K3 spesialis, fasilitas ruang kelas, dan verifikasi SKP Kemnaker.', ctaText: 'Konsultasi Perizinan PJK3', ctaIntent: 'perusahaan', sourceKey: 'uu1', legalDefault: 'Permenaker No. PER.04/MEN/1995' },
    { slug: 'cara-membuat-matriks-kompetensi-k3-karyawan', title: 'Panduan Penyusunan Matriks Training & Kompetensi K3 Jabatan Karyawan', intentCategory: 'procedure', desc: 'Langkah pemetaan kebutuhan sertifikasi lisensi Kemnaker / BNSP berdasarkan risiko posisi pekerjaan di pabrik.', ctaText: 'Unduh Format Matriks Training', ctaIntent: 'perusahaan', sourceKey: 'pp50', legalDefault: 'PP No. 50 Tahun 2012' }
  ];

  // Group B: 250 Industrial SOP Guides across 10 Clusters
  const sopClusters: SopCluster[] = [
    {
      clusterName: 'Kelistrikan & Isolasi Energi (Electrical LOTO)',
      prefix: 'Electrical SOP',
      sourceKey: 'permen12_2015',
      legalDefault: 'Permenaker No. 12 Tahun 2015 & SNI 0225:2020 PUIL 2020',
      sops: [
        'SOP Lockout Tagout (LOTO) Penguncian & Penandaan Sakelar Utama Panel Distribusi Listrik',
        'SOP Pengujian Tahanan Pembumian (Grounding Testing) Menggunakan Earth Tester',
        'SOP Pengujian Tahanan Isolasi Kabel Tegangan Menengah Menggunakan Megohmmeter (Megger)',
        'SOP Pemeliharaan Preventif Substation Gardu Induk & Transformator Daya Pabrik',
        'SOP Inspeksi Termografi Inframerah Kenaikan Suhu Busbar Panel Listrik Industri',
        'SOP Penanganan Darurat Sengatan Listrik & Evakuasi Personel Maintenance Bertegangan',
        'SOP Pekerjaan Dalam Keadaan Bertegangan (PDKB) Menggunakan Sarung Tangan Isolasi Karet',
        'SOP Pembersihan Debu & Korosi Panel Listrik Menggunakan Contact Cleaner Non-Konduktif',
        'SOP Pengantian Sekering Fused Cut Out (FCO) Jaringan Udara Tegangan Menengah 20kV',
        'SOP Penguji Fungsi Sistem Proteksi Arus Bocor ELCB / RCCB Panel Distribusi Sub-Feeder',
        'SOP Pemasangan Sistem Penyalur Petir Sangkar Faraday & Inspeksi Head Sangkar',
        'SOP Pengoperasian Genset Cadangan Diesel Engine Saat Terjadi Pemadaman Listrik PLN',
        'SOP Pemeriksaan Ruang Baterai UPS Akumulator Asam-Timbal & Sistem Ventilasi Gas Hidrogen',
        'SOP Penanganan Kebakaran Korsleting Panel Listrik Menggunakan APAR Gas CO2',
        'SOP Pengisolasian Tegangan Sisa Kapasitor Bank Industri Sebelum Perawatan',
        'SOP Inspeksi Kelayakan Kabel Fleksibel Mesin Las Listrik & Clamp Pembumian Workpiece',
        'SOP Penggunaan Alat Ukur Clamp Meter Tang Ampere Pada Saluran Tiga Fasa R-S-T',
        'SOP Pemasangan Rambu Peringatan Bahaya Listrik Tegangan Tinggi & Barikade Isolasi',
        'SOP Verifikasi Zero Energy State Pasca-LOTO Sebelum Membuka Pintu Panel Listrik',
        'SOP Pemeliharaan Motor Listrik Industri Tiga Fasa & Pengujian Winding Insulation',
        'SOP Pengoperasian Inverter Variable Frequency Drive (VFD) Pada Sistem Pompa Industri',
        'SOP Penghentian Darurat Power Supply Pabrik Menggunakan Emergency Stop Push Button',
        'SOP Inspeksi Kekencangan Baut Terminal Kabel Busbar Panel Menggunakan Kunci Momen',
        'SOP Penanganan Kebocoran Minyak Insulasi Transformator Daya & Pengambilan Sampel Uji',
        'SOP Pengolesan Pasta Konduktif Pada Sambungan Tembaga Busbar Panel Listrik'
      ]
    },
    {
      clusterName: 'Pesawat Angkat & Pesawat Angkut (PAA & Rigging)',
      prefix: 'Lifting SOP',
      sourceKey: 'permen08_2020',
      legalDefault: 'Permenaker No. 08 Tahun 2020 tentang K3 Pesawat Angkat Angkut',
      sops: [
        'SOP Pemeriksaan Harian Pre-Operational Checklist Forklift Diesel & Electric Battery',
        'SOP Perhitungan Beban Aman SWL & Sudut Pengikatan Rigging Calculation Beban Berat',
        'SOP Inspeksi Kriteria Afkir Tali Kawat Baja Wire Rope Crane Berdasarkan ISO 4309',
        'SOP Pengoperasian Overhead Crane Menggunakan Pendant Control & Remote Radio Frequency',
        'SOP Komunikasi Sinyal Tangan Standar Juru Ikat Beban (Rigger) Kepada Operator Crane',
        'SOP Penyetelan & Pengujian Fungsi Limit Switch Pembatas Ketinggian Hook Crane',
        'SOP Pemasangan Outrigger & Jack Base Mobile Crane Pada Tanah Permukaan Miring',
        'SOP Inspeksi Kelayakan Sabuk Pengikat Webbing Sling, Shackle D-Ring & Swivel Hook',
        'SOP Pengoperasian Tower Crane Konstruksi Saat Kondisi Angin Kencang (High Wind Limit)',
        'SOP Pengikatan Pipa Baja Panjang Menggunakan Metode Double Wrap Choker Hitch',
        'SOP Pengoperasian Reach Stacker Bongkar Muat Kontainer Pelabuhan Logistik',
        'SOP Inspeksi Kelayakan Lifter Passenger Hoist & Elevator Konstruksi Bangunan',
        'SOP Pengoperasian Gondola Pembersih Dinding Kaca Gedung Bertingkat',
        'SOP Pengoperasian Heavy Duty Excavator Pada Pekerjaan Penggalian Tanah Proyek',
        'SOP Pengoperasian Wheel Loader Pemindahan Material Curah Pasir & Batu Tambang',
        'SOP Inspeksi Sistem Pengereman Piringan & Hidrolik Kemudi Dump Truck Mining',
        'SOP Penanganan Kejadian Crane Guling & Evakuasi Operator Dari Kabin Kemudi',
        'SOP Pengoperasian Winch Derek Tarik Tambang & Pemeliharaan Drum Gulungan Tali',
        'SOP Inspeksi Roda Chain Block & Manual Hand Lever Hoist Sebelum Pengangkatan',
        'SOP Pengoperasian Conveyor Belt Pabrik & Pengujian Emergency Pull Cord Switch',
        'SOP Pengoperasian Manlift Boom Lift Aerial Work Platform (AWP) Ketinggian',
        'SOP Inspeksi Kelayakan Garpu (Fork Arm) & Rantai Pengangkat Forklift Industri',
        'SOP Pembongkaran & Penurunan Komponen Tower Crane Pasca-Proyek Konstruksi Selesai',
        'SOP Pengoperasian Automated Guided Vehicle (AGV) Di Area Gudang Logistik Otomatis',
        'SOP Penataan & Stacking Palet Kayu Di Area Loading Dock Gudang Distribusi'
      ]
    },
    {
      clusterName: 'Pesawat Uap & Bejana Tekan (Boiler & Pressure Vessel)',
      prefix: 'Boiler SOP',
      sourceKey: 'permen37_2016',
      legalDefault: 'Permenaker No. 37/2016 & Permenaker No. PER.01/MEN/1988',
      sops: [
        'SOP Penyulutan Awal (Firing Up) Burner Ketel Uap Boiler Bahan Bakar Minyak/Gas',
        'SOP Pengujian Popping Pressure Katup Pengaman Tekanan (Safety Valve Test) Boiler',
        'SOP Pelaksanaan Blowdown Berkala Pembersihan Kerak & Endapan Air Ketel Uap',
        'SOP Inspeksi Ketebalan Dinding Bejana Tekan Menggunakan Ultrasonic Thickness Gauge',
        'SOP Pengujian Hidrostatik (Hydrotest) Bejana Tekan Pada Tekanan 1.5 Kali MAWP',
        'SOP Pengolahan Air Umpan Boiler (Water Treatment Softener & Dosing Kimia)',
        'SOP Penanganan Kebocoran Pipa Uap Tegangan Tinggi (Steam Leakage Emergency)',
        'SOP Inspeksi Keretakan Sambungan Las Bejana Tekan Menggunakan NDT Magnetic Particle',
        'SOP Pengoperasian Kompresor Udara Bertekanan Tinggi & Drainase Tangki Udara',
        'SOP Pengisian Tabung Gas Bertekanan Silinder LPG, Argon, dan Oksigen Medis',
        'SOP Pengoperasian Autoclave Sterilisator Tekanan Tinggi Rumah Sakit',
        'SOP Pemeliharaan Heat Exchanger Shell & Tube Pabrik Kimia Petrokimia',
        'SOP Inspeksi Tangki Timbun Bahan Bakar Minyak BBM Menggunakan API 653 Inspection',
        'SOP Pengoperasian Deaerator Pembuangan Gas Terlarut Air Umpan Ketel Uap',
        'SOP Pengoperasian Tangki Spherical LPG Tekanan Tinggi & Pengawasan Valve Emergency',
        'SOP Pembersihan Kerak Jelaga Dinding Dalam Pipa Api Ketel Uap (Soot Blowing)',
        'SOP Inspeksi Gelas Duga (Glass Gauge) Penunjuk Level Air Boiler & Replacement',
        'SOP Pengoperasian Chiller & Refrigerant Vessel Sistem Pendingin HVAC Industri',
        'SOP Pemasangan Rupture Disc Sistem Pelepasan Tekanan Darurat Bejana Reaktor',
        'SOP Pengoperasian Sterilizer Rebusan Kelapa Sawit Pabrik PKS',
        'SOP Pengoperasian Tangki Kriogenik LNG & Oksigen Cair Suhu Sangat Rendah',
        'SOP Inspeksi Proteksi Katodik (Cathodic Protection) Tangki Timbun Bawah Tanah',
        'SOP Purging Gas Iner Nitrogen Sebelum Perbaikan Pipa Gas LPG / Amonia',
        'SOP Pengoperasian Boiler Biomassa Cangkang Sawit & Batu Bara Pulverized',
        'SOP Penanganan Bahaya BLEVE (Boiling Liquid Expanding Vapor Explosion) Tangki Gas'
      ]
    },
    {
      clusterName: 'Bahan Kimia Berbahaya & B3 (Chemical Safety)',
      prefix: 'Chemical SOP',
      sourceKey: 'kep187_1999',
      legalDefault: 'Kepmenaker No. KEP.187/MEN/1999 tentang Pengendalian Bahan Kimia',
      sops: [
        'SOP Penanganan Tumpahan Bahan Kimia Berbahaya Menggunakan Hazmat Spill Kit',
        'SOP Pengambilan & Pembacaan Lembar Data Keselamatan Bahan (SDS / MSDS 16 Bab)',
        'SOP Klasifikasi & Pemasangan Piktogram Simbol Bahaya GHS Pada Wadah Kimia',
        'SOP Penyimpanan Bahan Kimia Berbahaya Berdasarkan Matriks Inkompatibilitas',
        'SOP Pengoperasian & Inspeksi Ruang Penyimpanan TPS Limbah B3 Industri',
        'SOP Penggunaan Alat Pelindung Diri Respirator Kartrid Kimia & Hazmat Suit Level A',
        'SOP Penanganan Kebocoran Gas Klorin / Gas Amonia Pabrik & Pengaktifan Water Curtain',
        'SOP Inspeksi & Pengujian Fungsi Eyewash & Emergency Shower Area Laboratorium',
        'SOP Pengangkutan & Loading Unloading Bahan B3 Cair Menggunakan Truk Tangki',
        'SOP Pengukuran Kadar Gas Toksik Menggunakan Portable Gas Detector Multi-Gas',
        'SOP Dekontaminasi APD & Personel Pasca-Penanganan Tumpahan Kimia B3',
        'SOP Pengolahan & Dosing Bahan Kimia Koagulan/Flokulan Instalasi IPAL Pabrik',
        'SOP Penanganan Pelarut Organik Solvent & Bahan Menguap VOC Di Area Produksi',
        'SOP Penggunaan Gas Asetilena & Oksigen Pada Pekerjaan Las Karbit Panas',
        'SOP Penyimpanan & Penanganan Asam Sulfat Pekat H2SO4 / Asam Klorida HCl',
        'SOP Pengoperasian Incinerator Pembakaran Limbah B3 Kimia & Medis',
        'SOP Inspeksi Tabung Pemadam Kebakaran Khusus Kimia Powder & Clean Agent',
        'SOP Penanganan Peroksida Organik & Bahan Kimia Reaktif Air / Udara',
        'SOP Pemantauan Kadar Kimia Di Udara Tempat Kerja (Sampling NAB Kimia)',
        'SOP Penanganan Pestisida & Bahan Kimia Agrokimia Area Perkebunan',
        'SOP Penanganan Bahan Peledak Komersial Blasting Area Pertambangan',
        'SOP Pemutakhiran Daftar Inventaris Bahan Kimia B3 Perusahaan Terjadwal',
        'SOP Penanganan Kebocoran Tabung Gas Oksigen / Nitrogen Bertekanan',
        'SOP Prosedur Masuk Area Reaktor Petrokimia Dengan Izin Kerja Kimia khusus',
        'SOP Pelabelan Wadah Limbah B3 Cair & Penyegelan Drum Penampung'
      ]
    },
    {
      clusterName: 'Higiene Industri & Lingkungan Kerja (Occupational Hygiene)',
      prefix: 'Hygiene SOP',
      sourceKey: 'permen05_2018',
      legalDefault: 'Permenaker No. 05 Tahun 2018 tentang K3 Lingkungan Kerja',
      sops: [
        'SOP Pengukuran Kebisingan Tempat Kerja Menggunakan Sound Level Meter & Dosimeter',
        'SOP Pengukuran Getaran Mekanis Tangan-Lengan (HAV) & Seluruh Tubuh (WBV)',
        'SOP Penilaian Iklim Kerja Panas Menggunakan Indeks Suhu Basah dan Bola (ISBB)',
        'SOP Pengukuran Intensitas Pencahayaan Tempat Kerja Menggunakan Lux Meter',
        'SOP Sampling Pengukuran Debu Respirabel Menggunakan High Volume Air Sampler',
        'SOP Penilaian Risiko Ergonomi Postur Kerja Menggunakan Metode REBA & RULA',
        'SOP Evaluasi Kualitas Udara Dalam Ruangan (Indoor Air Quality IAQ) Perkantoran',
        'SOP Pemilihan & Fit Testing Alat Pelindung Pendengaran (Earplug & Earmuff)',
        'SOP Pelaksanaan Program Konservasi Pendengaran (Hearing Conservation Program)',
        'SOP Evaluasi Ergonomi Manual Handling Menggunakan NIOSH Lifting Equation',
        'SOP Perancangan & Pemeliharaan Sistem Ventilasi Industri Local Exhaust (LEV)',
        'SOP Pengendalian Faktor Biologi Jamur, Bakteri & Vektor Di Area Pabrik',
        'SOP Penilaian Faktor Psikologi Stres Kerja & Kelelahan Pekerja Shift Malam',
        'SOP Penerapan Housekeeping 5S / 5R Di Area Workshop & Gudang Produksi',
        'SOP Pengukuran Radiasi Non-Pengion Gelombang Elektromagnetik Panel Listrik',
        'SOP Inspeksi Kualitas Sanitasi Air Bersih & Hygiene Kantin Perusahaan',
        'SOP Pengendalian Bakteri Legionella Pada Sistem Cooling Tower AC Central',
        'SOP Penilaian Beban Kerja Fisik Berdasarkan Konsumsi Oksigen & Denyut Jantung',
        'SOP Inspeksi & Pengendalian Hama Pest Control Lingkungan Kerja Pabrik',
        'SOP Pengukuran & Pengendalian Bau Kebauan Industri Menggunakan Odour Meter',
        'SOP Kalibrasi Alat Ukur Lingkungan Kerja Sebelum Pelaksanaan Sampling',
        'SOP Evaluasi Stasiun Kerja Komputer & Ergonomi Display Screen Equipment (VDT)',
        'SOP Pemantauan Kadar Debu Kayu / Serabut Tekstil Di Area Ruang Proses',
        'SOP Pengukuran Radiasi Pengion Menggunakan Surveymeter Radiasi BAPETEN',
        'SOP Penyusunan Laporan Pemantauan Profil Higiene Industri Perusahaan'
      ]
    },
    {
      clusterName: 'Bekerja di Ketinggian & Ruang Terbatas (Work at Height & Confined Space)',
      prefix: 'Height & Confined SOP',
      sourceKey: 'permen09_2016',
      legalDefault: 'Permenaker No. 09/2016 & SE Menakertrans SE.01/2012',
      sops: [
        'SOP Pemeriksaan Kelayakan Full Body Harness, Absorber & Lanyard Sebelum Dipakai',
        'SOP Pengukuran Gas Atmosfer Ruang Terbatas Menggunakan Portable Gas Detector',
        'SOP Penyelamatan Korban Gantung Harness (Suspension Trauma Rescue SOP)',
        'SOP Evakuasi Korban Ruang Terbatas Menggunakan Tripod Winch & Rescue Stretcher',
        'SOP Pengolesan & Pengujian Kebocoran Gas Menggunakan Blower Ventilasi Udara',
        'SOP Penggunaan Alat Bantu Pernapasan SCBA Positif Pressure Di Ruang Terbatas',
        'SOP Pemasangan Titik Angkur (Anchor Point) & Lifeline Horizontal / Vertikal',
        'SOP Pekerjaan Akses Tali (Rope Access TKPK) Pembersihan Dinding Kaca Gedung',
        'SOP Pengawasan Petugas Standby Person (Madya) Di Luar Manhole Ruang Terbatas',
        'SOP Pengisian & Pengesahan Surat Izin Masuk Ruang Terbatas (Entry Permit)',
        'SOP Pekerjaan Di Atas Scaffolding Perancah & Pemasangan Barikade Jatuh',
        'SOP Pekerjaan Maintenance Menara Telekomunikasi Tower Celluler Ketinggian',
        'SOP Pekerjaan Di Atas Tangki Timbun BBM & Silo Material Semen Curah',
        'SOP Pemasangan Jaring Pengaman Keselamatan (Safety Net) Proyek Konstruksi',
        'SOP Penanganan Pekerjaan Lubang Bukaan Floor Opening & Wall Opening',
        'SOP Pekerjaan Inspeksi Di Dalam Tangki Reaktor / Vessel Pabrik Kimia',
        'SOP Pemasangan Tangga Kerja Ladder & Platform Kerja Sementara Ketinggian',
        'SOP Pembersihan Pengerukan Lumpur Gorong-Gorong Saluran Bawah Tanah',
        'SOP Pekerjaan Pengecatan & Coating Di Dalam Area Ruang Terbatas Tangki',
        'SOP Inspeksi Kelayakan Tangga Lipat Aluminium & Tangga Monyet Permanen',
        'SOP Pekerjaan Pemasangan Penangkal Petir Di Puncak Cerobong Gedung Tinggi',
        'SOP Pengolesan Waterproofing Di Area Basement Gedung Ruang Sempit',
        'SOP Pengaliran Udara Suplemental Oksigen Di Area Ruang Terbatas Kritis',
        'SOP Penanganan Kondisi Darurat Kejebak Dalam Manhole & Prosedur Call Rescue',
        'SOP Penutupan Kembali Manhole Ruang Terbatas Pasca Pekerjaan Selesai'
      ]
    },
    {
      clusterName: 'Penanggulangan Kebakaran & Proteksi Api (Fire Safety)',
      prefix: 'Fire SOP',
      sourceKey: 'kep186_1999',
      legalDefault: 'Kepmenaker No. KEP.186/MEN/1999 & Permenaker 04/1980',
      sops: [
        'SOP Pemadaman Kebakaran Menggunakan APAR Metode PASS (Pull, Aim, Squeeze, Sweep)',
        'SOP Penggelaran & Penyambungan Selang Hydrant Kanvas Kopling Machino',
        'SOP Pengoperasian Pompa Pemadam Diesel Utama Saat Aliran Listrik Terputus',
        'SOP Pengoperasian Main Control Fire Alarm (MCFA) Penanganan Alarm Darurat',
        'SOP Pengujian Bulanan Tekanan Tabung APAR Dry Chemical Powder & CO2',
        'SOP Pengujian Katup Aliran Air Sistem Sprinkler (Inspector Test Valve)',
        'SOP Prosedur Evakuasi Total Gedung Bertingkat Menuju Assembly Point',
        'SOP Tugas Floor Warden: Penyisiran Ruangan, Toilet & Penutupan Pintu Tahan Api',
        'SOP Evakuasi Khusus Penyandang Disabilitas, Ibu Hamil & Lansia Saat Darurat',
        'SOP Pengoperasian Kipas Tekanan Positif Tangga Darurat (Stairwell Pressurization)',
        'SOP Penggunaan Fire Blanket Pemadaman Api di Tubuh Pekerja',
        'SOP Pemadaman Kebakaran Minyak Dapur Komersial Sistem Wet Chemical K-Class',
        'SOP Pemadaman Kebakaran Ruang Server Komputer Sistem Gas FM-200 / Novec 1230',
        'SOP Penanganan Kebakaran Tangki BBM Menggunakan Sistem Busa Foam AFFF',
        'SOP Penggunaan Baju Tahan Panas Proximity Suit & Tabung Pernapasan SCBA',
        'SOP Koordinasi Penyerahan Komando Pemadaman ke Dinas Kebakaran Kota',
        'SOP Penghitungan Absensi Tenaga Kerja di Assembly Point (Headcount Roll Call)',
        'SOP Penyelidikan Awal Titik Mula Api (Fire Origin) Pasca Pemadaman',
        'SOP Pengisian Ulang Air Cadangan Bak Penampung Pemadam (Fire Water Reservoir)',
        'SOP Pengujian Hidrostatis Berkala 5 Tahun Selang & Tabung Pemadam Api',
        'SOP Penanganan Kebakaran Korsleting Panel Listrik Menggunakan APAR CO2',
        'SOP Pembersihan Residu Kimia Serbuk Pemadam Pasca Kebakaran Padam',
        'SOP Pelaksanaan Fire Drill & Debriefing Evaluasi Waktu Evakuasi Gedung',
        'SOP Pengaktifan Kembali Sistem Proteksi Api & Reset Panel Alarm Kebakaran',
        'SOP Inspeksi Pintu Tahan Api Fire Door & Pemeliharaan Door Closer Gedung'
      ]
    },
    {
      clusterName: 'Pertolongan Pertama Gawat Darurat & Medis (First Aid & Medevac)',
      prefix: 'Medical SOP',
      sourceKey: 'permen15_2008',
      legalDefault: 'Permenaker No. PER.15/MEN/VIII/2008 tentang P3K di Tempat Kerja',
      sops: [
        'SOP Penilaian Korban Gawat Darurat Menggunakan Prinsip DRABC (Danger, Response, Airway, Breathing, Circulation)',
        'SOP Resusitasi Jantung Paru (RJP/CPR) Satu Penolong & Dua Penolong Dewasa',
        'SOP Pengoperasian Automated External Defibrillator (AED) pada Korban Henti Jantung',
        'SOP Pembebasan Sumbatan Saluran Napas Korban Tersedak (Heimlich Maneuver)',
        'SOP Penghentian Pendarahan Arteri Hebat Menggunakan Torniket Hemostatik',
        'SOP Balut Tekan Steril pada Luka Sayat & Robek di Tempat Kerja',
        'SOP Pembidaian Fraktur Tulang Tertutup & Fraktur Tulang Terbuka',
        'SOP Pemasangan Penyangga Leher (Cervical Collar) Korban Dugaan Cedera Tulang Belakang',
        'SOP Pemindahan Korban Trauma Menggunakan Long Spine Board & Tandu Sekop',
        'SOP Penanganan Luka Bakar Termal Ringan-Sedang Menggunakan Air Mengalir 20 Menit',
        'SOP Penanganan Korban Tersengat Listrik & Pencegahan Cardiac Arrest',
        'SOP Penanganan Korban Pingsan Akibat Heat Stroke di Lingkungan Kerja Panas',
        'SOP Penanganan Korban Keracunan Gas Beracun Karbon Monoksida / Asam Sulfida',
        'SOP Penanganan Syok Hipovolemik & Penyelimutan Suhu Tubuh Korban',
        'SOP Penanganan Reaksi Alergi Berat (Syok Anafilaktik) di Tempat Kerja',
        'SOP Penanganan Korban Tertusuk Jarum Suntik Medis Bekas (Needlestick Protocol)',
        'SOP Penanganan Korban Gigitan Ular Berbisa di Area Perkebunan/Proyek',
        'SOP Pengelolaan & Pemeriksaan Rutin Bulanan Isi Kotak P3K Bentuk A, B, C',
        'SOP Pengelolaan Ruang Poliklinik P3K Pabrik & Buku Register Kunjungan Medis',
        'SOP Koordinasi Evakuasi Medis Darurat Menggunakan Ambulans (Medevac Protocol)',
        'SOP Rujukan Pasien Gawat Darurat ke Rumah Sakit Trauma Center BPJS',
        'SOP Pemeriksaan Tanda-Tanda Vital Korban (Tekanan Darah, Nadi, Laju Napas, Saturasi SpO2)',
        'SOP Penanganan Benda Asing Masuk ke Dalam Mata (Eye Irrigation SOP)',
        'SOP Penanganan Serangan Asma Akut & Penggunaan Inhaler Pekerja',
        'SOP Penulisan Formulir Laporan Medis Pertolongan Pertama Insiden K3'
      ]
    },
    {
      clusterName: 'Konstruksi & SMKK PUPR (Construction Safety)',
      prefix: 'Construction SOP',
      sourceKey: 'pupr10_2021',
      legalDefault: 'Permen PUPR No. 10 Tahun 2021 tentang SMKK',
      sops: [
        'SOP Verifikasi Dokumen Rencana Keselamatan Konstruksi (RKK) Sebelum Pekerjaan Dimulai',
        'SOP Pekerjaan Penggalian Tanah Dalam Trenching & Pemasangan Shoring',
        'SOP Pengawasan Pemasangan Bekisting Formwork & Pembetonan Struktur Gedung',
        'SOP Ereksi Rangka Baja Konstruksi Gedung Layang & Jembatan',
        'SOP Demolisi Pembongkaran Struktur Bangunan Tua Secara Bertahap',
        'SOP Pekerjaan Terowongan & Bawah Tanah (Tunneling Excavation)',
        'SOP Peledakan Komersial Blasting Pembuatan Jalan Proyek Konstruksi',
        'SOP Pemasangan & Pembongkaran Tie-in Tower Crane Konstruksi Gedung',
        'SOP Pengaturan Traffic Management & Marka Lalu Lintas Proyek Konstruksi',
        'SOP Pengelasan Konstruksi Baja & Pemasangan Pipa Distribusi Proyek',
        'SOP Pelaksanaan Safety Patrol Harian & Inspeksi Temuan Hazard Proyek',
        'SOP Perhitungan AHSP Biaya K3 Konstruksi Menurut Permen PUPR 10/2021',
        'SOP K3 Pekerjaan Pemancangan Tiang Pancang Pile Driving Foundation',
        'SOP Penanganan Limbah Konstruksi & Pengendalian Sedimentasi Air Proyek',
        'SOP Pengawasan Pekerjaan Atap Roofing & Cladding Bangunan Tinggi',
        'SOP Pengawasan Pekerjaan Finishing Interior & MEP Gedung Bertingkat',
        'SOP Pemasangan Komponen Beton Pracatak Precast Concrete Installation',
        'SOP Keselamatan Operasional Alat Berat Heavy Equipment Di Proyek',
        'SOP Pekerjaan Pengeboran Batu & Soil Nailing Stabilisasi Lereng Proyek',
        'SOP Pengawasan Pekerjaan Subkontraktor & Briefing Mandor Proyek',
        'SOP Tanggap Darurat Bencana Cuaca Ekstrem & Tanah Longsor Proyek',
        'SOP Penanganan Insiden Struktur Roboh & Evakuasi Pekerja Proyek',
        'SOP Inspeksi Kelayakan Tangga Kerja & Temporary Working Platform Proyek',
        'SOP Pengikatan Matriks Besi Beton & Pemotongan Steel Rebar Cutter',
        'SOP Closing Izin Kerja Konstruksi & Evaluasi Kinerja K3 Kontraktor'
      ]
    },
    {
      clusterName: 'Operasional Mesin & Peralatan Industri (Machine Guarding SOP)',
      prefix: 'Machine SOP',
      sourceKey: 'permen38_2016',
      legalDefault: 'Permenaker No. 38 Tahun 2016 tentang K3 Pesawat Tenaga dan Produksi',
      sops: [
        'SOP Pengoperasian Mesin Press Stamping & Verifikasi Sensor Safety Light Curtain',
        'SOP Pemeliharaan Mesin Bubut Lathe & Penggunaan Cover Pelindung Tatal Berputar',
        'SOP Pengoperasian Mesin Frais Milling & Pemasangan Shield Pelindung Gram',
        'SOP Pengolesan Pelumas Rantai & Roda Gigi Penggerak Mesin Pabrik',
        'SOP Pengoperasian Mesin Potong Guillotine Kertas / Logam & Two-Hand Control Button',
        'SOP Pembersihan & Clearing Jammed Material Pada Mesin Shredder Industri',
        'SOP Inspeksi Kelayakan Pelindung Tutup Sabuk V-Belt & Pulley Mesin Industri',
        'SOP Pengoperasian Mesin Gerinda Duduk & Penyetelan Jarak Work Rest 3mm',
        'SOP Penghentian Darurat Mesin Cetak Injeksi Plastik Emergency Stop Protocol',
        'SOP Inspeksi Interlock Door Safety Switch Mesin Pengemas Otomatis',
        'SOP Pemeliharaan Mesin Kompresor Udara & Pengujian Bejana Tekan Udara',
        'SOP Pengoperasian Mesin Bending Tekuk Pelat Logam Hidrolik',
        'SOP Inspeksi Kelayakan Pisau Mesin Roll Bending & Roda Pemotong Metal',
        'SOP Pengolesan Pendingin Coolant Mesin Perkakas & Pemantauan Bak Penampung',
        'SOP Pengoperasian Mesin CNC Router Woodworking & Pengisapan Debu Kayu LEV',
        'SOP Pemeliharaan Mesin Cetak Rotary Printing & Penguncian LOTO Mekanis',
        'SOP Pengoperasian Mesin Mixer Pencampur Makanan/Kertas & Interlock Cover',
        'SOP Inspeksi Kelayakan Rem Elektromagnetik Mesin Penggerak Utama Mula',
        'SOP Pengoperasian Mesin Extruder Plastik & Pengawasan Suhu Pemanas Barrel',
        'SOP Pembersihan Endapan Kerak Mesin Boiler Pembakar Sampah Industri',
        'SOP Pengoperasian Mesin Laser Cutting Logam & Proteksi Sinar Radiasi Laser',
        'SOP Inspeksi Sakelar Kaki (Foot Switch) Mesin Press Dengan Pelindung Cover Shield',
        'SOP Pemeliharaan Turbin Uap Pembangkit Listrik & Pengujian Over-Speed Trip',
        'SOP Pengoperasian Mesin Centrifuge Pemisah Cairan & Penguncian Penutup Putar',
        'SOP Penghentian Mesin Produksi Saat Terjadi Suara Getaran Anomali Kritis'
      ]
    }
  ];

  // Unique Record Building for Group A (77 Commercial Guides)
  for (const g of commercialGuides) {
    const src: SourceItem = officialSources[g.sourceKey || 'uu1'] || officialSources.uu1;
    const legal = g.legalDefault || 'UU No. 1 Tahun 1970';
    const kw = `panduan ${g.slug.replace(/-/g, ' ')}`;
    const intent = `${g.desc}`;

    records.push({
      section: 'panduan',
      slug: g.slug,
      title: g.title,
      metaTitle: `${g.title} | Informasi & Persyaratan Resmi`,
      description: g.desc,
      answer: `${g.title} memberikan instruksi komprehensif berlandaskan ${legal} untuk membantu calon peserta, praktisi HSE, dan manajemen perusahaan memenuhi persyaratan regulasi, estimasi biaya, serta kelengkapan administrasi K3 secara tepat.`,
      highlights: [
        `Kategori Panduan: ${g.intentCategory.toUpperCase()}`,
        `Dasar Regulasi: ${legal}`,
        `Penyelenggara: Konsultasi Resmi PT Kreasi Ultimate Berjaya`,
        'Verifikasi Berkas: Pre-Screening Gratis Sebelum Pendaftaran'
      ],
      blocks: [
        {
          heading: `Kerangka Acuan & Regulasi ${g.title}`,
          paragraphs: [
            `Penjelasan lengkap mengenai ${g.title} disusun secara mendalam berdasarkan ${legal} dan petunjuk teknis Kementerian Ketenagakerjaan RI. Memahami panduan ini sangat penting bagi individu maupun instansi perusahaan untuk memastikan seluruh proses administrasi dan teknis berjalan sesuai standar hukum.`,
            'Tim konsultan PT Kreasi Ultimate Berjaya siap memberikan asistensi langsung untuk pemeriksaan awal berkas, penerbitan proposal resmi, maupun pendaftaran batch pelatihan.'
          ]
        },
        {
          heading: 'Rincian Kelengkapan Berkas & Langkah Pelaksanaan',
          paragraphs: [
            'Berikut adalah tahapan baku dan checklist yang wajib dipenuhi oleh pemohon:',
          ],
          bullets: [
            'Kelengkapan Administrasi: Scan KTP, Ijazah formal terakreditasi, Pasfoto formal, dan Surat Penugasan Perusahaan.',
            'Pemeriksaan Kelayakan: Evaluasi kesesuaian latar belakang pendidikan dan jam kerja pengalaman lapangan.',
            'Pengurusan Pembayaran: Penerbitan Surat Penawaran Harga (SPH), Faktur Pajak, dan konfirmasi registrasi resmi.',
            'Penerbitan Dokumen: Penyerahan Surat Keterangan Lulus (SKL), Sertifikat Pembinaan, SKP, dan Kartu Lisensi K3.'
          ]
        },
        {
          heading: 'Manfaat & Dampak Kepatuhan K3 Perusahaan',
          paragraphs: [
            'Memenuhi ketentuan dalam panduan ini memberikan perlindungan hukum bagi pengurus perusahaan, mencegah sanksi inspeksi dinas tenaga kerja, serta meningkatkan rating audit kepatuhan SMK3 PP 50/2012.'
          ]
        },
        {
          heading: 'Konsultasi Gratis & Pendampingan Berkas PT Kreasi Ultimate Berjaya',
          paragraphs: [
            `Hubungi tim admisi kami untuk konsultasi langsung mengenai ${g.title}. Kami melayani verifikasi kelayakan ijazah gratis dan penyusunan proposal corporate in-house training.`
          ]
        }
      ],
      faqs: [
        { question: `Apa langkah pertama dalam mengurus ${g.title}?`, answer: `Langkah pertama adalah melakukan verifikasi mandiri terhadap ijazah dan surat penugasan perusahaan, kemudian menghubungi tim konsultan untuk pre-screening awal.` },
        { question: `Berapa lama estimasi waktu proses pengurusan ${g.title}?`, answer: 'Proses verifikasi berkas awal memakan waktu 1x24 jam kerja. Setelah pelatihan selesai, SKL diterbitkan dalam 1-2 hari dan lisensi fisik Kemnaker terbit dalam 30-45 hari.' },
        { question: 'Apakah PT Kreasi Ultimate Berjaya melayani penerbitan proposal SPH untuk instansi perusahaan?', answer: 'Ya, kami menerbitkan Surat Penawaran Harga (SPH) resmi berkop surat lengkap dengan rincian silabus dan kuitansi corporate.' }
      ],
      related: ['pelatihan/ahli-k3-umum', 'panduan/biaya-pelatihan-k3', 'perbandingan/bnsp-vs-kemnaker', 'jadwal', 'kontak'],
      sources: [src, officialSources.uu1, officialSources.pp50],
      status: 'published',
      publishedAt: '2026-08-01',
      updatedAt: '2026-09-01',
      indexable: true,
      intent: `${kw} ${intent}`,
      primaryKeyword: kw,
      searchIntent: intent,
      intentType: 'informational',
      parentTopic: 'Panduan Strategis K3',
      cannibalizationGroup: 'panduan-commercial',
      contentKind: 'guide',
      primaryCtaText: g.ctaText,
      primaryCtaIntent: g.ctaIntent || 'syarat',
      secondaryCtaText: 'Tanya Batch Pelatihan Terdekat',
      secondaryCtaIntent: 'jadwal'
    });
  }

  // Unique Record Building for Group B (250 Industrial SOP Guides across 10 Clusters)
  for (const cluster of sopClusters) {
    const src = officialSources[cluster.sourceKey] || officialSources.uu1;
    for (let i = 0; i < cluster.sops.length; i++) {
      const sopTitle = cluster.sops[i];
      const fullTitle = `${sopTitle}`;
      const slug = `${sopTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`.replace(/^-|-$/g, '');
      const keyword = `${slug.replace(/-/g, ' ')} kerja aman`.trim();

      const techDetail = getSopTechDetail(cluster.prefix);

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
          `Fokus Pengendalian: ${techDetail.highlightFocus}`
        ],
        blocks: [
          {
            heading: `Tujuan & Ruang Lingkup ${fullTitle}`,
            paragraphs: [
              `Penerapan ${fullTitle} bertujuan memberikan panduan operasional terstandar bagi seluruh pekerja, teknisi, dan pengawas yang terlibat dalam aktivitas ${cluster.clusterName}. Prosedur ini menjamin bahwa seluruh faktor risiko bahaya ${techDetail.hazardDesc} telah dimitigasi secara terstruktur sebelum pekerjaan dimulai.`,
              `Sesuai dengan ketentuan ${cluster.legalDefault} dan UU No. 1 Tahun 1970, pengurus fasilitas wajib memastikan setiap personel telah mendapatkan pembekalan K3 yang memadai dan mematuhi seluruh tahapan kerja aman yang tertuang dalam instruksi kerja ini.`
            ]
          },
          {
            heading: 'Tahapan Kerja Aman Standar (Langkah Demi Langkah)',
            paragraphs: [
              'Pelaksanaan pekerjaan wajib mengikuti urutan tahapan teknis baku yang telah diverifikasi oleh tim K3:',
            ],
            bullets: techDetail.steps
          },
          {
            heading: 'Alat Pelindung Diri (APD) Wajib & Peralatan Keselamatan',
            paragraphs: [
              'Personel yang bertugas wajib dilengkapi dengan APD berstandar SNI/EN/ANSI yang spesifik untuk tugas ini:',
            ],
            bullets: techDetail.apds
          },
          {
            heading: 'Tindakan Tanggap Darurat & Protokol Penghentian Pekerjaan',
            paragraphs: [
              `Apabila terjadi kondisi darurat, anomali parameter, atau indikasi kebocoran/kerusakan alat selama pekerjaan berlangsung, segera eksekusi Wewenang Penghentian Pekerjaan (Stop Work Authority), evakuasi personel ke lokasi aman, bunyikan alarm darurat, dan hubungi Tim Tanggap Darurat / HSE Officer Fasilitas.`
            ]
          }
        ],
        faqs: techDetail.faqs,
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

// Tech detail helper for SOP clusters
function getSopTechDetail(prefix: string) {
  switch (prefix) {
    case 'Electrical SOP':
      return {
        highlightFocus: 'LOTO Zero Energy Verification & Proteksi Listrik Tegangan Tinggi',
        hazardDesc: 'sengatan listrik tegangan tinggi, busur api Arc Flash, dan hubungan pendek arus listrik',
        steps: [
          '1. Verifikasi Izin Kerja Listrik (PTW) & Briefing Safety Toolbox Meeting.',
          '2. Identifikasi Sakelar Utama & Pelaksanaan 6 Langkah Penguncian LOTO (Lockout Tagout).',
          '3. Pengujian Tegangan Sisa Menggunakan Multimeter / Test Pen Terkalibrasi (Zero Energy Test).',
          '4. Pelaksanaan Pekerjaan Maintenance Listrik Menggunakan Alat Berisolasi VDE 1000V.',
          '5. Normalisasi Pintu Panel, Pelepasan Gembok LOTO, dan Penutupan Izin Kerja.'
        ],
        apds: [
          'Helm Keselamatan Lisensi Elektrikal Class E (20.000V)',
          'Kacamata Pelindung & Face Shield Tahan Arc Flash',
          'Sarung Tangan Isolasi Karet Tegangan Tinggi (Class 0 / 1 / 2)',
          'Sepatu Safety Dioperasikan Dielektrik (Dielectric Shoes)',
          'Pakaian Kerja Katun Murni Tahan Api (Arc Flash Flame Resistant Coverall)'
        ],
        faqs: [
          { question: 'Siapa yang berwenang memegang kunci gembok LOTO?', answer: 'Setiap pekerja teknis wajib memasang gembok masing-masing pada peranti hasp LOTO (Personal Lock out). Gembok hanya boleh dilepas oleh pemilik kunci setelah pekerjaan selesai.' },
          { question: 'Bagaimana cara melakukan verifikasi Zero Energy State?', answer: 'Dengan mengukur tegangan antar fasa (R-S-T) dan fasa ke netral/ground menggunakan multimeter terkalibrasi untuk memastikan tidak ada tegangan tersisa.' },
          { question: 'Apa tindakan pertama jika terjadi insiden korsleting saat pemeliharaan?', answer: 'Segera tekan Emergency Stop Button atau matikan breaker utama terdekat, lalu berikan pertolongan pertama pada korban menggunakan tongkat isolasi konduktif.' }
        ]
      };
    case 'Lifting SOP':
      return {
        highlightFocus: 'Rigging Load Calculation & Inspeksi Afkir Wire Rope / Sling',
        hazardDesc: 'beban gantung jatuh, crane guling akibat kelebihan beban, dan jepitan sling mekanik',
        steps: [
          '1. Pemeriksaan Harian Pre-Operational Check Alat Angkat & Surat Ijin Operator (SIO).',
          '2. Perhitungan Beban Aman SWL & Penentuan Titik Berat (Center of Gravity).',
          '3. Inspeksi Kelayakan Webbing Sling, Wire Rope, dan Shackle Sebelum Pengikatan.',
          '4. Pemasangan Barikade Area Radius Putar Crane & Penunjukan Juru Ikat Rigger.',
          '5. Pelaksanaan Pengangkatan Perlahan (Trial Lift 10cm) Sebelum Lifting Utama.'
        ],
        apds: [
          'Helm Keselamatan Heavy Duty Dengan Tali Dagu Strik',
          'Kacamata Safety & Sarung Tangan Kulit Pelindung Goresan Sling',
          'Sepatu Safety Berujung Baja (Steel Toe Cap 200J)',
          'Rompi Reflektif High-Visibility Warna Oranye/Hijau',
          'Whistle / Peluit Sinyal Darurat untuk Rigger'
        ],
        faqs: [
          { question: 'Mengapa trial lift 10 cm dari permukaan tanah wajib dilakukan?', answer: 'Trial lift bertujuan menguji efektivitas pengereman crane, keseimbangan pengikatan rigger, dan keutuhan rantai/sling sebelum beban diangkat tinggi.' },
          { question: 'Kapan kegiatan pengangkatan crane outdoor wajib dihentikan?', answer: 'Pengangkatan wajib dihentikan apabila kecepatan angin melebihi 20 knot (atau standar manufaktur), timbul badai petir, atau pandangan operator terhalang hujan lebat.' },
          { question: 'Siapa yang berhak memberikan sinyal Stop kepada operator crane?', answer: 'Dalam kondisi darurat bahaya, SIAPAPUN di area kerja berhak meneriakkan atau memberikan sinyal STOP kepada operator crane.' }
        ]
      };
    case 'Boiler SOP':
      return {
        highlightFocus: 'Boiler Water Treatment & Safety Valve Popping Pressure Inspection',
        hazardDesc: 'ledakan uap bertekanan tinggi (BLEVE), keretakan dinding bejana, dan scaling kerak',
        steps: [
          '1. Verifikasi Kebersihan Air Umpan Boiler & Pemeriksaan Level Gelas Duga (Glass Gauge).',
          '2. Penyulutan Burner Pembakaran & Pemantauan Kenaikan Tekanan Manometer secara Bertahap.',
          '3. Pengujian Fungsi Katup Pengaman (Safety Valve Popping Test) Secara Berkala.',
          '4. Pelaksanaan Blowdown Lumpur Dasar Ketel Uap Menurut Parameter TDS Water Treatment.',
          '5. Pemantauan Suhu Economizer & Pencatatan Logbook Operasional Boiler.'
        ],
        apds: [
          'Helm Keselamatan Tahan Panas & Kacamata Goggles Safety',
          'Pelindung Telinga Earplug / Earmuff Kebisingan Ruang Engine',
          'Sarung Tangan Kulit Tahan Panas (Heat Resistant Gloves)',
          'Sepatu Safety Sol Tahan Minyak & Panas',
          'Masker Debu Respirator Untuk Area Bahan Bakar Biomassa/Batu Bara'
        ],
        faqs: [
          { question: 'Apa akibatnya jika level air dalam boiler berada di bawah batas minimum (Low Water Level)?', answer: 'Kondisi air kering dapat menyebabkan pipa uap memerah dan melengkung (overheating) yang berisiko fatal memicu ledakan ketel uap.' },
          { question: 'Berapa kali pengujian blowdown boiler sebaiknya dilakukan?', answer: 'Blowdown permukaan dilakukan kontinu, sedangkan blowdown dasar dilakukan 1-2 kali per shift sesuai hasil uji laboratorium kadar TDS air boiler.' },
          { question: 'Mengapa katup pengaman (safety valve) wajib disegel oleh pengawas K3 Kemnaker?', answer: 'Segel memastikan posisi penyetelan tekanan leleh tidak diubah secara ilegal oleh pihak tidak berwenang demi keselamatan tempat kerja.' }
        ]
      };
    case 'Chemical SOP':
      return {
        highlightFocus: 'GHS 16-Section SDS Compliance & Hazmat Spill Response Protocols',
        hazardDesc: 'paparan gas toksik beracun, tumpahan asam basa korosif, dan luka bakar kimia',
        steps: [
          '1. Penelaahan 16 Bab Lembar Data Keselamatan Bahan (SDS / MSDS) Sebelum Penanganan.',
          '2. Pemakaian APD Khusus Kimia (Respirator Kartrid Organic/Acid Gas & Hazmat Suit).',
          '3. Penataan Penyimpanan Kimia Berdasarkan Matriks Inkompatibilitas Bahan.',
          '4. Pengoperasian Alat Ukur Gas Detector Sebelum Memasuki Area Penyimpanan B3.',
          '5. Pelaksanaan Penanganan Tumpahan Menggunakan Spill Kit & Dekontaminasi APD.'
        ],
        apds: [
          'Respirator Kimia Half-Mask / Full-Face Dengan Kartrid Filter Kombinasi',
          'Kacamata Chemical Splash Goggles & Face Shield Transparan',
          'Sarung Tangan Kimia Nitrile / Neoprene / Butyl Rubber',
          'Sepatu Boots Karet Tahan Bahan Kimia Korosif',
          'Apron / Baju Pelindung Kimia Chemical Suit Hazmat Level B/C'
        ],
        faqs: [
          { question: 'Apa fungsi utama Eyewash & Emergency Shower saat terjadi paparan kimia?', answer: 'Untuk membilas dan membendung penetrasi kimia pada mata dan kulit dengan air mengalir selama minimal 15-20 menit sebelum perawatan medis lanjutan.' },
          { question: 'Bagaimana cara membuang material penyerap absorbent pad pasca-penanganan tumpahan B3?', answer: 'Material absorbent pad bekas tumpahan kimia wajib dimasukkan ke dalam kantong kuning/polietilena bertanda piktogram B3 dan dikelola di TPS Limbah B3.' },
          { question: 'Apa indikator kartrid respirator kimia wajib diganti baru?', answer: 'Kartrid wajib diganti jika pemakai mulai mencium bau/rasa bahan kimia di dalam masker, terjadi peningkatan hambatan napas, atau telah melebihi jam pakai.' }
        ]
      };
    case 'Hygiene SOP':
      return {
        highlightFocus: 'Permenaker 05/2018 NAB Compliance & Ergonomics REBA/RULA Assessment',
        hazardDesc: 'penurunan pendengaran kebisingan (NIHL), stres panas iklim kerja, dan gangguan otot MSDs',
        steps: [
          '1. Kalibrasi Alat Ukur Lingkungan Kerja (SLM, Lux Meter, ISBB Meter) Sebelum Digunakan.',
          '2. Penentuan Titik Sampling Lapangan Berdasarkan Area Paparan Pekerja (Personal Sampling).',
          '3. Pelaksanaan Pengukuran Faktor Fisika / Kimia / Ergonomi Sesuai Permenaker 05/2018.',
          '4. Analisis Data Hasil Uji Terhadap Nilai Ambang Batas (NAB) Legal Ketenagakerjaan.',
          '5. Rekomendasi Pengendalian Hirarki K3 (Eliminasi, Subtitusi, Rekayasa LEV, APD).'
        ],
        apds: [
          'Pelindung Pendengaran Earplug (NRR 25dB) atau Earmuff (NRR 30dB)',
          'Kacamata Pelindung Pencahayaan & Goggles Kimia',
          'Masker Respirator Filter Partikulat N95 / P100 Debu Industri',
          'Sepatu Safety Pekerja Lapangan',
          'Pakaian Kerja Katun Menyerap Keringat untuk Lingkungan Panas'
        ],
        faqs: [
          { question: 'Berapa durasi waktu kerja maksimum yang diizinkan jika kebisingan mencapai 88 dBA?', answer: 'Sesuai Permenaker 05/2018, untuk tingkat kebisingan 88 dBA (kenaikan 3 dB dari NAB 85 dBA), waktu kerja maksimum yang diizinkan adalah 4 jam per hari.' },
          { question: 'Kapan evaluasi ergonomi postur kerja REBA / RULA harus dilakukan?', answer: 'Saat ada laporan keluhan pegal otot rangka (MSDs) karyawan, pembelian meja/mesin baru, atau perubahan tata letak stasiun kerja.' },
          { question: 'Apa fungsi utama sistem Local Exhaust Ventilation (LEV)?', answer: 'Sistem LEV berfungsi menangkap debu, asap, dan uap toksik langsung dari sumber pembentukannya sebelum menyebar ke udara pernapasan pekerja.' }
        ]
      };
    case 'Height & Confined SOP':
      return {
        highlightFocus: 'Full Body Harness 100% Tie-off & Pre-entry Gas Testing O2/H2S/CO/LEL',
        hazardDesc: 'jatuh dari ketinggian fatalitas, keracunan gas H2S ruang terbatas, dan kehabisan oksigen',
        steps: [
          '1. Pengisian Surat Izin Kerja Ketinggian / Ruang Terbatas (Entry Permit).',
          '2. Inspeksi Kelayakan Full Body Harness, Absorber, Lanyard & Tripod Rescue.',
          '3. Pengukuran Atmosfer Udara Ruang Terbatas (O2 19.5-23.5%, H2S < 10ppm, LEL 0%).',
          '4. Pemasangan Blower Ventilasi Udara Bersih & Pengawasan Petugas Standby Person.',
          '5. Pelaksanaan Pekerjaan Dengan Sistem 100% Tie-Off & Ketersediaan Tim Rescue.'
        ],
        apds: [
          'Full Body Harness Dengan Dual Lanyard Absorber & Carabiner Steel',
          'Helm Keselamatan Ketinggian Class C/E Dengan Chinstrap 4-Point',
          'Alat Ukur Portable 4-Gas Detector & Self Contained Breathing Apparatus (SCBA)',
          'Sepatu Boots Safety Anti-Slip Sole',
          'Sarung Tangan Kerja Pelindung Gesekan Tali Rope Access'
        ],
        faqs: [
          { question: 'Mengapa penggunaan Sabuk Pinggang (Safety Belt) dilarang untuk proteksi jatuh dari ketinggian?', answer: 'Safety belt dapat menyebabkan patah tulang belakang dan kerusakan organ dalam saat menahan hentakan jatuh. Wajib menggunakan Full Body Harness.' },
          { question: 'Apa tugas utama Petugas Standby Person (Madya) di luar manhole ruang terbatas?', answer: 'Memantau pekerja di dalam, menjaga komunikasi kontinu, mengawasi gas detector, dan melarang orang tidak berwenang masuk. Standby person DILARANG masuk manhole.' },
          { question: 'Berapa jarak jatuh bebas (free fall distance) maksimum yang diizinkan lanyard?', answer: 'Jarak jatuh bebas maksimum yang diizinkan adalah 1.8 meter sebelum penyerap energi (energy absorber) membuka.' }
        ]
      };
    case 'Fire SOP':
      return {
        highlightFocus: 'APAR PASS Method & Fire Emergency Evacuation Roll Call Protocols',
        hazardDesc: 'penyebaran api cepat, hirupan asap karbon monoksida, dan terjebak di ruangan terkunci',
        steps: [
          '1. Pemadaman Awal Menggunakan APAR Dengan Metode PASS (Pull, Aim, Squeeze, Sweep).',
          '2. Pengaktifan Manual Call Point Alarm Kebakaran & Pemanggilan Dinas Damkar.',
          '3. Penggelaran Selang Hydrant Kanvas Kopling Machino & Pembukaan Valve Utama.',
          '4. Evakuasi Total Pekerja Mengikuti Petunjuk Floor Warden Menuju Assembly Point.',
          '5. Pelaksanaan Headcount Roll Call Absensi Pekerja & Pelaporan Ke Incident Commander.'
        ],
        apds: [
          'Helm Pemadam Kebakaran Fire Fighter Helmet Dengan Neck Protector',
          'Baju Tahan Panas Fire Proximity Suit / Nomex Structural Suit',
          'Sarung Tangan Kulit Tahan Api Fire Gloves',
          'Sepatu Boots Pemadam Kebakaran Steel Toe & Steel Midsole',
          'Alat Bantu Pernapasan SCBA Positif Pressure 30 Menit'
        ],
        faqs: [
          { question: 'Apa singkatan metode PASS dalam penggunaan APAR?', answer: 'P = Pull (Tarik pin pengaman), A = Aim (Arahkan nozzle ke pangkal api), S = Squeeze (Tekan tuas penekan), S = Sweep (Sapukan dari sisi ke sisi).' },
          { question: 'Bolehkah menggunakan air untuk memadamkan kebakaran panel listrik?', answer: 'DILARANG keras. Air menghantarkan listrik dan memicu sengatan maut. Gunakan APAR CO2 atau Powder khusus kelas C.' },
          { question: 'Siapa yang menentukan area aman sebagai Titik Kumpul (Assembly Point)?', answer: 'Ditentukan oleh Pengawas K3 dan Tim Damkar gedung pada lokasi terbuka yang bebas dari bahaya runtuhan bangunan dan instalasi listrik.' }
        ]
      };
    case 'Medical SOP':
      return {
        highlightFocus: 'DRABC Triage & CPR 30:2 Compression Depth With AED Shock Advisory',
        hazardDesc: 'henti jantung mendadak, pendarahan arteri hebat kecelakaan kerja, dan cedera tulang',
        steps: [
          '1. Penilaian Situasi & Amankan Diri/Korban Menggunakan Prinsip DRABC.',
          '2. Pelaksanaan Resusitasi Jantung Paru (RJP/CPR) Tekanan Dada 30:2 Kecepatan 100-120x/menit.',
          '3. Pengoperasian Defibrilator Otomatis AED Saat Petunjuk Suara Menginstruksikan Shock.',
          '4. Penghentian Pendarahan Arteri Menggunakan Balut Tekan Steril / Torniket Hemostatik.',
          '5. Pemindahan Korban Menggunakan Long Spine Board & Koordinasi Rujukan Medevac Ambulans.'
        ],
        apds: [
          'Sarung Tangan Medis Nitrile Steril (Single Use)',
          'Masker Resusitasi CPR Pocket Mask With One-Way Valve',
          'Kacamata Pelindung Splash Glasses Medis',
          'Apron / Gaun Pelindung Cairan Tubuh',
          'Gunting Verband & Pinset Steril P3K'
        ],
        faqs: [
          { question: 'Berapa kedalaman kompresi dada yang tepat saat melakukan RJP pada orang dewasa?', answer: 'Kedalaman kompresi dada yang efektif adalah 5 hingga 6 cm (2 inci) dengan membiarkan dada mengembang sempurna (full recoil) setiap kompresi.' },
          { question: 'Apakah orang awam terlatih boleh menggunakan alat AED?', answer: 'Boleh. AED dirancang otomatis dengan panduan suara bahasa/visual yang memandu penolong langkah demi langkah saat henti jantung.' },
          { question: 'Kapan torniket hemostatik boleh dipasang pada pendarahan?', answer: 'Torniket hanya dipasang pada pendarahan arteri hebat di anggota gerak (tangan/kaki) yang tidak berhasil dihentikan dengan balut tekan steril.' }
        ]
      };
    case 'Machine SOP':
      return {
        highlightFocus: 'Permenaker 38/2016 Machine Guarding & Interlock Light Curtain Safety',
        hazardDesc: 'jepitan roda gigi berputar, pemotongan pisau guillotine, dan lemparan gram metal',
        steps: [
          '1. Verifikasi Keberadaan & Kelayakan Tutup Pelindung (Machine Guarding) Sebelum Start.',
          '2. Pengujian Fungsi Tombol Emergency Stop Button & Sensor Interlock Light Curtain.',
          '3. Pelaksanaan Pengoperasian Mesin Dengan Menggunakan Sakelar Dua Tangan (Two-Hand Control).',
          '4. Pelaksanaan Pembersihan Tatal Gram Menggunakan Kuas / Sikat (Dilarang Menggunakan Tangan Bare).',
          '5. Penerapan LOTO Mekanis Sebelum Melakukan Pemeliharaan Atau Perbaikan Jammed Material.'
        ],
        apds: [
          'Kacamata Pelindung Impact Glasses / Face Shield Transparan',
          'Pelindung Telinga Earmuff Kebisingan Mesin Produksi',
          'Sepatu Safety Steel Toe Cap 200J Tahan Benturan',
          'Pakaian Kerja Pas (Fitted Coverall) Tanpa Bagian Longgar',
          'Dilarang Menggunakan Cincin/Perhiasan & Sarung Tangan Longgar Di Mesin Berputar'
        ],
        faqs: [
          { question: 'Mengapa penggunaan sarung tangan kain longgar dilarang saat mengoperasikan mesin bubut/gerinda berputar?', answer: 'Sarung tangan longgar dapat tersangkut pada poros berputar (spindle) dan menarik tangan operator masuk ke dalam titik jepit mesin.' },
          { question: 'Apa fungsi utama sensor Light Curtain pada mesin press stamping?', answer: 'Sensor light curtain menghentikan pergerakan matras press secara seketika apabila ada tangan atau anggota tubuh yang menerobos area bahaya.' },
          { question: 'Berapa jarak maksimum dudukan kerja (work rest) pada mesin gerinda duduk?', answer: 'Jarak dudukan kerja work rest ke batu gerinda wajib diatur maksimum 3 mm untuk mencegah batu pecah atau benda kerja terselip.' }
        ]
      };
    default:
      return {
        highlightFocus: 'SMKK PUPR Permen 10/2021 & Trenching Shoring Safety Controls',
        hazardDesc: 'runtuhan penggalian tanah, guling alat berat, dan jatuh dari struktur bekisting',
        steps: [
          '1. Verifikasi Dokumen Rencana Keselamatan Konstruksi (RKK) & Surat Izin Kerja Proyek.',
          '2. Inspeksi Pemasangan Proteksi Penggalian Tanah (Trenching Shoring & Sheet Pile).',
          '3. Pengawasan Pemasangan Perancah Scaffolding & Pemasangan Barikade Pengaman.',
          '4. Pelaksanaan Briefing Keselamatan Konstruksi (Safety Morning Briefing) Sebelum Shift.',
          '5. Pelaksanaan Inspeksi Harian Safety Patrol Proyek & Penutupan Temuan Hazard.'
        ],
        apds: [
          'Helm Keselamatan Konstruksi With Chin Strap Standard SNI',
          'Kacamata Safety & Masker Filter Debu Semen Proyek',
          'Sepatu Boots Safety Sol Steel Toe & Anti-Paku',
          'Rompi Reflektif Oranye High-Visibility',
          'Full Body Harness Untuk Pekerjaan Struktur Bangunan Ketinggian'
        ],
        faqs: [
          { question: 'Berapa kedalaman penggalian tanah yang wajib memasang sistem dinding penahan (shoring)?', answer: 'Penggalian tanah dengan kedalaman 1.5 meter atau lebih wajib dipasang sistem dinding penahan (shoring/benching) untuk mencegah bahaya tertimbun.' },
          { question: 'Siapa yang bertugas menyusun dokumen RKK Tender proyek konstruksi?', answer: 'Dokumen RKK Tender disusun oleh Ahli K3 Konstruksi / Petugas Keselamatan Konstruksi penyedia jasa (kontraktor).' },
          { question: 'Apa sanksi jika kontraktor tidak menerapkan SMKK PUPR di proyek?', answer: 'Pekerjaan dapat dihentikan sementara (Stop Work Order), pemotongan pembayaran biaya K3, hingga penghentian kontrak kerja.' }
        ]
      };
  }
}

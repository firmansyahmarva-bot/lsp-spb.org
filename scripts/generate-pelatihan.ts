import { ContentRecordInput } from './build-inventory';
import { officialSources } from './sources';

interface ProgramSeed {
  slug: string;
  title: string;
  duration: string;
  legal: string;
  sourceKey: string;
  audience: string[];
  moduleTopics: string[];
  faqQ1: string;
  faqA1: string;
  faqQ2: string;
  faqA2: string;
}

interface DomainConfig {
  cat: string;
  name: string;
  prefix: string;
  sourceKey: string;
  legalDefault: string;
  seeds: ProgramSeed[];
}

export function generatePelatihanRecords(): ContentRecordInput[] {
  const records: ContentRecordInput[] = [];

  // 10 Domains x 30 Programs = 300 Programs
  const domains: DomainConfig[] = [
    {
      cat: 'kelembagaan',
      name: 'Kelembagaan, Tata Kelola K3 & SMK3',
      prefix: 'SMK3 & Regulasi',
      sourceKey: 'pp50',
      legalDefault: 'PP No. 50 Tahun 2012 & Permenaker No. 02/1992',
      seeds: [
        {
          slug: 'ahli-k3-umum',
          title: 'Pelatihan Ahli K3 Umum (Sertifikasi Kemnaker RI)',
          duration: '120 JP (12 Hari Kerja)',
          legal: 'Permenaker No. PER.02/MEN/1992 & UU No. 1 Tahun 1970',
          sourceKey: 'permen02_1992',
          audience: ['Calon Sekretaris P2K3 Perusahaan', 'HSE Officer & Koordinator K3', 'Fresh Graduate D3/S1 Semua Jurusan'],
          moduleTopics: ['Kebijakan Nasional K3 & UU 1/1970', 'Pengawasan Norma Mekanik, Uap, Listrik, Kebakaran, Kimia, Konstruksi, Lingkungan Kerja', 'Penerapan SMK3 PP 50/2012 & Praktik Kerja Lapangan (PKL)'],
          faqQ1: 'Apakah lulusan D3/S1 non-teknik bisa mendaftar Ahli K3 Umum?',
          faqA1: 'Bisa. Sesuai Permenaker 02/1992 Pasal 3, pembinaan Ahli K3 Umum terbuka untuk lulusan minimal D3/S1 dari semua program studi terakreditasi.',
          faqQ2: 'Apa bukti kelulusan yang didapatkan peserta utusan perusahaan?',
          faqA2: 'Peserta utusan perusahaan memperoleh Sertifikat Pembinaan Kemnaker RI, SKP (Surat Keputusan Penunjukan), dan Kartu Lisensi Kewenangan K3 (berlaku 3 tahun).'
        },
        {
          slug: 'auditor-smk3',
          title: 'Pelatihan Auditor SMK3 (Sertifikasi Kemnaker RI)',
          duration: '40 JP (4 Hari Kerja)',
          legal: 'PP No. 50 Tahun 2012 tentang Penerapan SMK3',
          sourceKey: 'pp50',
          audience: ['Ahli K3 Umum', 'Internal Auditor Perusahaan', 'Management Representative (MR) QHSE'],
          moduleTopics: ['Prinsip & 5 Prinsip Dasar SMK3', 'Penilaian 166 Kriteria Audit Berdasarkan Kategori Usaha', 'Teknik Wawancara, Verifikasi Bukti Kerja & Penyusunan Laporan Audit'],
          faqQ1: 'Apakah syarat mengikuti pelatihan Auditor SMK3 harus sudah memiliki sertifikat Ahli K3 Umum?',
          faqA1: 'Ya, Kemnaker RI mempersyaratkan calon peserta pelatihan Auditor SMK3 telah memiliki Sertifikat Pembinaan Ahli K3 Umum.',
          faqQ2: 'Berapa jumlah kriteria audit SMK3 yang dinilai?',
          faqA2: 'Terdapat 166 kriteria untuk tingkat lanjutan, 122 kriteria untuk tingkat transisi, dan 64 kriteria untuk tingkat awal.'
        },
        {
          slug: 'lead-auditor-smk3',
          title: 'Pelatihan Lead Auditor SMK3 Kemnaker RI',
          duration: '50 JP (5 Hari Kerja)',
          legal: 'PP No. 50 Tahun 2012 & Standar Audit Kemnaker',
          sourceKey: 'pp50',
          audience: ['Auditor K3 Senior', 'Konsultan K3 Independen', 'HSE Corporate Manager'],
          moduleTopics: ['Lead Auditor Leadership & Manajemen Tim Audit', 'Audit Due Diligence & Penilaian Ketidaksesuaian Mayor/Minor', 'Simulasi Pembukaan, Pelaksanaan, dan Closing Meeting Audit Eksternal'],
          faqQ1: 'Apa perbedaan Auditor SMK3 dengan Lead Auditor SMK3?',
          faqA1: 'Lead Auditor SMK3 memiliki kewenangan memimpin tim auditor dalam pelaksanaan audit sertifikasi eksternal SMK3 badan audit independen resmi.',
          faqQ2: 'Apakah materi mencakup mekanisme penentuan bendera emas/perak SMK3?',
          faqA2: 'Ya, dibahas secara detail formula pemenuhan persentase kelulusan audit (85-100% untuk bendera emas).'
        },
        {
          slug: 'pembinaan-p2k3',
          title: 'Pelatihan Tata Kelola & Sekretariat P2K3 Perusahaan',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'Permenaker No. PER.04/MEN/1987',
          sourceKey: 'permen04_1987',
          audience: ['Pengurus P2K3 Perusahaan', 'Koordinator HRD & Legal', 'Wakil Manajemen & Supervisor'],
          moduleTopics: ['Struktur Kelembagaan P2K3 & Wewenang Komite', 'Prosedur Penyusunan Agenda Rapat Bulanan K3', 'Format Penyusunan Laporan Triwulan Resmi ke Disnaker'],
          faqQ1: 'Perusahaan seperti apa yang wajib membentuk P2K3?',
          faqA1: 'Setiap tempat kerja yang mempekerjakan 100 orang atau lebih, atau mempekerjakan kurang dari 100 orang dengan tingkat bahaya tinggi (Permenaker 04/1987 Pasal 2).',
          faqQ2: 'Siapa yang menjabat sebagai Ketua dan Sekretaris P2K3?',
          faqA2: 'Ketua P2K3 dijabat oleh pimpinan puncak perusahaan (Direktur/GM), dan Sekretaris dijabat oleh Ahli K3 Umum berlisensi Kemnaker.'
        },
        {
          slug: 'implementasi-smk3-pp-50',
          title: 'Pelatihan Implementasi 166 Kriteria SMK3 PP 50/2012',
          duration: '30 JP (3 Hari Kerja)',
          legal: 'PP No. 50 Tahun 2012 Lampiran II',
          sourceKey: 'pp50',
          audience: ['Tim Implementator SMK3', 'Section Head Produksi', 'HSE Specialist'],
          moduleTopics: ['Penyusunan Kebijakan K3 & Rencana K3 Tertulis', 'Pengendalian Dokumen, Rekaman & Izin Kerja Aman', 'Tinjauan Manajemen & Evaluasi Kinerja Kepatuhan'],
          faqQ1: 'Apakah pelatihan implementasi ini cocok untuk persiapan sertifikasi SMK3?',
          faqA1: 'Sangat cocok. Peserta dibimbing langsung menyusun manual, SOP, HIRADC, dan bukti telusur dokumen yang dibutuhkan saat audit.',
          faqQ2: 'Apakah pelatihan ini bisa diadakan in-house khusus tim perusahaan kami?',
          faqA2: 'Bisa, format In-House Training sangat efektif agar seluruh departemen dapat langsung menyelesaikan gap dokumen tempat kerja.'
        },
        {
          slug: 'integrasi-smk3-dan-iso-45001',
          title: 'Pelatihan Integrasi SMK3 PP 50/2012 & ISO 45001:2018',
          duration: '32 JP (4 Hari Kerja)',
          legal: 'PP No. 50 Tahun 2012 & ISO 45001:2018',
          sourceKey: 'iso45001',
          audience: ['QHSSE Manager', 'System Integration Specialist', 'Management Representative'],
          moduleTopics: ['High Level Structure (HLS) ISO 45001 vs 166 Kriteria PP 50', 'Matriks Korelasi Klausul ISO dan Elemen SMK3 Nasional', 'Penyusunan Single Integrated Management System (IMS) K3'],
          faqQ1: 'Apakah sistem dokumentasi SMK3 dan ISO 45001 bisa digabungkan?',
          faqA1: 'Bisa. Manual K3, SOP identifikasi bahaya, audit internal, dan rapat tinjauan manajemen dapat dibuat terintegrasi untuk efisiensi operasional.',
          faqQ2: 'Apakah audit sertifikasinya bisa dilakukan bersamaan?',
          faqA2: 'Bisa, apabila menggunakan badan audit yang memiliki akreditasi Kemnaker RI sekaligus akreditasi KAN/internasional.'
        },
        {
          slug: 'auditor-internal-smk3',
          title: 'Pelatihan Auditor Internal SMK3 Perusahaan',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'PP No. 50 Tahun 2012 Pasal 14',
          sourceKey: 'pp50',
          audience: ['Tim Internal Audit Lintas Divisi', 'Supervisor Operasional', 'Staff QHSE'],
          moduleTopics: ['Perencanaan Program Audit Internal Tahunan', 'Penyusunan Checklist Audit Berdasarkan Risiko Area Kerja', 'Pelaporan Temuan Ketidaksesuaian (NCR) & Tindakan Korektif (CAPA)'],
          faqQ1: 'Berapa kali audit internal SMK3 wajib dilakukan dalam setahun?',
          faqA1: 'Audit internal SMK3 sekurang-kurangnya dilakukan 1 (satu) kali dalam setahun atau lebih sering sesuai tingkat risiko operasional.',
          faqQ2: 'Apakah anggota tim audit internal harus berasal dari divisi K3?',
          faqA2: 'Tidak, auditor internal disarankan berasal dari berbagai departemen yang telah dilatih teknik audit agar independen saat mengaudit departemen lain.'
        },
        {
          slug: 'manajemen-risiko-k3',
          title: 'Pelatihan Manajemen Risiko K3 & HIRADC Komprehensif',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'PP No. 50 Tahun 2012 & Standar ISO 31000',
          sourceKey: 'pp50',
          audience: ['Risk Officer', 'Safety Engineer', 'Pengawas Operasi & Fasilitas'],
          moduleTopics: ['Identifikasi Bahaya Metodologi Komprehensif (Metode 4M+1E)', 'Penetapan Skor Likelihood & Severity Matriks Risiko', 'Hierarki Pengendalian Bahaya: Eliminasi hingga APD'],
          faqQ1: 'Apa output utama dari pelatihan manajemen risiko K3 ini?',
          faqA1: 'Peserta mampu menyusun Risk Register, dokumen HIRADC lengkap, dan program kerja mitigasi risiko keselamatan kerja di unit kerjanya.',
          faqQ2: 'Kapan dokumen HIRADC harus diperbarui (review)?',
          faqA2: 'Secara berkala minimal setahun sekali, atau saat ada perubahan proses kerja, mesin baru, pasca-insiden, dan revisi regulasi hukum.'
        },
        {
          slug: 'investigasi-insiden-k3',
          title: 'Pelatihan Investigasi Kecelakaan Kerja & Analisis Akar Masalah (RCA)',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'Permenaker No. PER.03/MEN/1998 tentang Tata Cara Pelaporan Kecelakaan',
          sourceKey: 'uu1',
          audience: ['Tim Investigasi Insiden', 'Safety Supervisor', 'Divisi Legal & HRD'],
          moduleTopics: ['Pengamanan TKP & Pengumpulan Bukti Fisik/Keterangan Saksi', 'Penerapan Metode 5-Why, Fishbone Diagram & TapRooT', 'Penyusunan Laporan Investigasi Resmi & Rekomendasi Pencegahan'],
          faqQ1: 'Berapa batas waktu pelaporan kecelakaan kerja ke Disnaker?',
          faqA1: 'Sesuai Permenaker 03/1998, pengurus wajib melaporkan kecelakaan kerja secara tertulis dalam waktu 2 x 24 jam sejak kejadian.',
          faqQ2: 'Apakah investigasi bertujuan mencari pihak yang bersalah?',
          faqA2: 'Bukan. Investigasi K3 bertujuan menemukan kegagalan sistem (root cause) guna mencegah peristiwa serupa terulang kembali.'
        },
        {
          slug: 'safety-leadership-eksekutif',
          title: 'Pelatihan Safety Leadership & Budaya K3 bagi Manajemen Eksekutif',
          duration: '16 JP (2 Hari Kerja)',
          legal: 'UU No. 1 Tahun 1970 Pasal 14 & PP 50/2012',
          sourceKey: 'uu1',
          audience: ['Direktur Operasional', 'General Manager Pabrik', 'Kepala Divisi Manufaktur'],
          moduleTopics: ['Peran Kepemimpinan dalam Membangun Generative Safety Culture', 'Alokasi Sumber Daya K3 & Akuntabilitas Legalitas Pengurus', 'Pelaksanaan Safety Walkthrough & Dialog Keselamatan yang Efektif'],
          faqQ1: 'Mengapa jajaran direksi dan manajemen puncak perlu mengikuti safety leadership?',
          faqA1: 'Secara hukum UU 1/1970, pengurus tempat kerja memegang tanggung jawab pidana dan perdata atas keselamatan tenaga kerja di fasilitasnya.',
          faqQ2: 'Bagaimana metode pelatihan ini diselenggarakan?',
          faqA2: 'Diselenggarakan dalam format executive workshop, studi kasus riil tata kelola korporat, dan penyusunan executive safety action plan.'
        },
        {
          slug: 'safety-accountability-pengawas',
          title: 'Pelatihan Akuntabilitas Keselamatan bagi Pengawas Lapangan',
          duration: '20 JP (2 Hari Kerja)',
          legal: 'UU No. 1 Tahun 1970 & PP No. 50 Tahun 2012',
          sourceKey: 'uu1',
          audience: ['Mandor', 'Group Leader', 'Site Supervisor Lapangan'],
          moduleTopics: ['Tanggung Jawab Pengawas dalam Penegakan SOP Keselamatan', 'Teknik Intervensi Tindakan Tidak Aman (Unsafe Act Correction)', 'Penyusunan Job Safety Analysis (JSA) Harian Lapangan'],
          faqQ1: 'Apa peran pengawas lapangan dalam hierarki keselamatan kerja?',
          faqA1: 'Pengawas adalah garda terdepan yang memastikan instruksi kerja aman dipatuhi pekerja dan kondisi bahaya segera ditangani sebelum aktivitas dimulai.',
          faqQ2: 'Apakah materi mencakup wewenang Stop Work Authority?',
          faqA2: 'Ya, pengawas dilatih cara mengeksekusi Stop Work Authority tanpa mengganggu hubungan industrial tim kerja.'
        },
        {
          slug: 'pengukuran-lingkungan-kerja',
          title: 'Pelatihan Dasar Pengukuran Faktor Bahaya Lingkungan Kerja',
          duration: '30 JP (3 Hari Kerja)',
          legal: 'Permenaker No. 05 Tahun 2018 tentang K3 Lingkungan Kerja',
          sourceKey: 'permen05_2018',
          audience: ['Teknisi Higiene Industri', 'HSE Officer', 'Analis Pengujian Laboratorium'],
          moduleTopics: ['Pengukuran Faktor Fisika: Kebisingan (Sound Level Meter), Penerangan (Lux Meter), Iklim Kerja (ISBB)', 'Pengukuran Faktor Kimia: Debu Total/Respirabel & Gas Toksik', 'Perbandingan Hasil Uji dengan Nilai Ambang Batas (NAB) Legal'],
          faqQ1: 'Berapa batas kebisingan maksimum untuk 8 jam kerja per hari?',
          faqA1: 'Sesuai Permenaker 05/2018 Lampiran 1, NAB kebisingan untuk 8 jam kerja per hari adalah 85 dBA.',
          faqQ2: 'Apakah pelatihan mencakup kalibrasi alat ukur lingkungan kerja?',
          faqA2: 'Ya, peserta mempraktikkan verifikasi fungsi dan kalibrasi dasar sebelum melakukan sampling lingkungan kerja.'
        },
        {
          slug: 'safety-officer-k3',
          title: 'Pelatihan & Pembinaan Safety Officer Lapangan Terapan',
          duration: '40 JP (4 Hari Kerja)',
          legal: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja',
          sourceKey: 'uu1',
          audience: ['Safety Officer Pemula', 'Koordinator Lapangan K3', 'Teknisi HSE Proyek'],
          moduleTopics: ['Pemeriksaan Kesiapan Izin Kerja (Permit to Work)', 'Inspeksi APD, Peralatan Kerja & Jalur Evakuasi Harian', 'Penyusunan Safety Induction & Safety Morning Briefing'],
          faqQ1: 'Apa perbedaan materi Safety Officer dengan Ahli K3 Umum?',
          faqA1: 'Safety Officer berfokus pada praktik pengawasan teknis operasional lapangan harian, sedangkan Ahli K3 Umum berfokus pada kebijakan dan legal compliance formal kementerian.',
          faqQ2: 'Apakah pelatihan ini memberikan template checklist inspeksi lapangan?',
          faqA2: 'Ya, peserta mendapatkan paket lengkap checklist inspeksi apar, scaffolding, kelistrikan, dan izin kerja risiko tinggi.'
        },
        {
          slug: 'inspeksi-k3-terjadwal',
          title: 'Pelatihan Teknik Inspeksi K3 & Audit Visual Tempat Kerja',
          duration: '20 JP (2 Hari Kerja)',
          legal: 'PP No. 50 Tahun 2012 Kriteria 6.5',
          sourceKey: 'pp50',
          audience: ['Petugas Inspeksi K3', 'Anggota Tim P2K3', 'Supervisor Pemeliharaan'],
          moduleTopics: ['Prinsip 4 Tahap Inspeksi: Persiapan, Observasi, Pencatatan, Tindak Lanjut', 'Identifikasi Unsafe Action & Unsafe Condition Menggunakan Kamera/Checklist', 'Penyusunan Laporan Temuan & Penilaian Tingkat Bahaya (Risk Rating)'],
          faqQ1: 'Apa saja jenis inspeksi K3 yang dipelajari?',
          faqA1: 'Inspeksi harian/rutin, inspeksi berkala terencana, inspeksi khusus (pasca-modifikasi/bencana), dan inspeksi kepatuhan legal.',
          faqQ2: 'Bagaimana cara menentukan batas waktu perbaikan (closing date) temuan?',
          faqA2: 'Batas waktu ditentukan berdasarkan matriks tingkat keparahan risiko temuan: bahaya kritis wajib segera ditangani dalam 1 x 24 jam.'
        },
        {
          slug: 'penyusunan-sop-k3',
          title: 'Pelatihan Penyusunan Standard Operating Procedure (SOP) & JSA Berbasis K3',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'PP No. 50 Tahun 2012 Kriteria 6.1',
          sourceKey: 'pp50',
          audience: ['SOP Developer', 'HSE Specialist', 'Process Engineer Pabrik'],
          moduleTopics: ['Analisis Langkah Kerja & Identifikasi Bahaya Tiap Tahap (JSA)', 'Format Standar SOP K3 Terintegrasi Instruksi Keselamatan', 'Uji Coba Lapangan (Field Validation) & Manajemen Revisi Dokumen'],
          faqQ1: 'Apa keterkaitan antara dokumen JSA dan SOP kerja?',
          faqA1: 'JSA membedah bahaya langkah per langkah dari suatu aktivitas, sedangkan SOP menetapkan urutan kerja aman baku yang wajib dijalankan operator.',
          faqQ2: 'Siapa yang harus menyusun dokumen JSA?',
          faqA2: 'JSA disusun bersama antara supervisor pelaksana teknis, pekerja berpengalaman, dan personel HSE.'
        },
        {
          slug: 'safety-induction-kontraktor',
          title: 'Pelatihan Manajemen Safety Induction & CSMS (Contractor Safety)',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'Permenaker & Standar CSMS Industri',
          sourceKey: 'pp50',
          audience: ['Contractor Safety Officer', 'Divisi Procurement/Vendor Management', 'Site Project Manager'],
          moduleTopics: ['6 Tahap Siklus CSMS: Risk Assessment, Pre-Qualification, Selection, Pre-Job, Work in Progress, Final Evaluation', 'Penyusunan Modul Safety Induction Khusus Tamu & Kontraktor', 'Audit Keselamatan Lapangan bagi Mitra Kerja Rekanan'],
          faqQ1: 'Mengapa perusahaan wajib menerapkan CSMS pada kontraktor?',
          faqA1: 'Statistik membuktikan mayoritas kecelakaan fatal industri terjadi pada pekerjaan kontraktor pihak ketiga. CSMS menyaring kontraktor berkualifikasi K3 memadai.',
          faqQ2: 'Apakah pelatihan mengajarkan cara memberi skor penilaian prakualifikasi vendor?',
          faqA2: 'Ya, peserta dilatih memeriksa bukti portofolio K3 kontraktor dan memberikan scoring kelulusan prakualifikasi.'
        },
        {
          slug: 'penilaian-kinerja-k3',
          title: 'Pelatihan KPI & Leading-Lagging Indicator Kinerja K3',
          duration: '20 JP (2 Hari Kerja)',
          legal: 'PP No. 50 Tahun 2012 Kriteria 8.1',
          sourceKey: 'pp50',
          audience: ['HSE Planner', 'Performance Analyst', 'Manager QHSSE'],
          moduleTopics: ['Perhitungan Rasio Kecelakaan: Frequency Rate (FR) & Severity Rate (SR)', 'Perancangan Leading Indicator Proaktif: Jam Pelatihan K3, Rasio Temuan Hazard, Kehadiran P2K3', 'Visualisasi Dashboard Manajemen & Laporan Kinerja K3 Direksi'],
          faqQ1: 'Apa perbedaan leading indicator dan lagging indicator?',
          faqA1: 'Lagging indicator mengukur kejadian yang sudah terjadi (misal jumlah kecelakaan LTI), sedangkan leading indicator mengukur aktivitas pencegahan proaktif sebelum insiden terjadi.',
          faqQ2: 'Bagaimana rumus standar perhitungan Frequency Rate (FR)?',
          faqA2: 'FR = (Jumlah Kasus Kecelakaan x 1.000.000) / Total Jam Kerja Orang (Safe Man Hours).'
        },
        {
          slug: 'k3-pelaporan-wajib-naker',
          title: 'Pelatihan Tata Cara Pelaporan K3 & e-K3 Kemnaker RI',
          duration: '16 JP (2 Hari Kerja)',
          legal: 'UU No. 1 Tahun 1970 & Permenaker No. 04/1987',
          sourceKey: 'permen04_1987',
          audience: ['Staf Administrasi K3', 'Sekretaris P2K3', 'HR Compliance Specialist'],
          moduleTopics: ['Format Baku Laporan Triwulan P2K3 Fisik & Digital', 'Mekanisme Pelaporan Online Melalui Portal TemanK3 Kemnaker', 'Tata Cara Pengajuan Permohonan Perpanjangan Lisensi & SKP Ahli K3'],
          faqQ1: 'Kapan batas pengiriman laporan P2K3 ke dinas tenaga kerja?',
          faqA1: 'Laporan P2K3 wajib diserahkan setiap 3 bulan sekali (triwulan) paling lambat akhir bulan berikutnya setelah periode triwulan berakhir.',
          faqQ2: 'Apakah pengurusan mutasi penunjukan Ahli K3 ke perusahaan baru memerlukan laporan ini?',
          faqA2: 'Ya, kelengkapan administrasi pelaporan menjadi salah satu syarat verifikasi berkas oleh pengawas ketenagakerjaan.'
        },
        {
          slug: 'komunikasi-k3-toolbox',
          title: 'Pelatihan Komunikasi Efektif K3 & Pemanduan Safety Toolbox Meeting',
          duration: '16 JP (2 Hari Kerja)',
          legal: 'UU No. 1 Tahun 1970 Pasal 9',
          sourceKey: 'uu1',
          audience: ['Pengawas Lapangan', 'Foreman', 'Safety Champion Lintas Divisi'],
          moduleTopics: ['Teknik Komunikasi Persuasif Membangun Kesadaran Selamat', 'Struktur 10 Menit Toolbox Meeting: Review Bahaya Harian, Perubahan Cuaca, Pembagian Tugas', 'Penanganan Pekerja yang Abai Terhadap Aturan APD'],
          faqQ1: 'Berapa durasi ideal untuk safety toolbox meeting harian?',
          faqA1: 'Durasi efektif berkisar antara 10 hingga 15 menit sebelum pekerjaan shift dimulai, fokus pada bahaya spesifik hari itu.',
          faqQ2: 'Apakah kegiatan toolbox meeting harus didokumentasikan?',
          faqA2: 'Wajib. Dokumentasi mencakup daftar hadir bertanda tangan pekerja, topik bahaya yang dibahas, dan foto kegiatan sebagai bukti kepatuhan SMK3.'
        },
        {
          slug: 'manajemen-perubahan-moc-k3',
          title: 'Pelatihan Management of Change (MOC) Keselamatan Kerja',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'PP No. 50 Tahun 2012 & Standar Process Safety Management',
          sourceKey: 'pp50',
          audience: ['Project Engineer', 'Operations Manager', 'Safety Specialist'],
          moduleTopics: ['Klasifikasi Perubahan: Perubahan Peralatan Mesin, Bahan Kimia Baru, Prosedur Baru, Perubahan Organisasi', 'Alur Review Bahaya Sebelum Perubahan Diterapkan (Pre-Startup Safety Review / PSSR)', 'Dokumentasi & Pelatihan Personel Terdampak Perubahan'],
          faqQ1: 'Mengapa perubahan modifikasi mesin sering memicu kecelakaan fatal?',
          faqA1: 'Karena modifikasi sering kali menciptakan titik bahaya baru yang belum teridentifikasi dalam HIRADC lama dan pekerja belum terlatih mengoperasikannya.',
          faqQ2: 'Apa peran tim K3 dalam formulir MOC?',
          faqA2: 'Tim K3 bertindak sebagai verifikator analisis risiko bahaya keselamatan dan memvalidasi kesiapan mitigasi sebelum instalasi baru diuji coba.'
        },
        {
          slug: 'k3-perkantoran',
          title: 'Pelatihan K3 Perkantoran & Fasilitas Gedung Komersial',
          duration: '20 JP (2 Hari Kerja)',
          legal: 'Permenkes No. 48 Tahun 2016 tentang Standar K3 Perkantoran',
          sourceKey: 'uu1',
          audience: ['Building Manager', 'General Affair (GA) Officer', 'Koordinator K3 Gedung'],
          moduleTopics: ['Pencegahan Gangguan Musculoskeletal (Ergonomi Meja & Kursi Kerja)', 'Kualitas Udara Ruangan, Pencahayaan & Kebersihan Saluran AC', 'Rencana Tanggap Darurat & Denah Evakuasi Gempa/Api Gedung'],
          faqQ1: 'Apa saja faktor bahaya utama di lingkungan kerja kantor?',
          faqA1: 'Bahaya ergonomi (duduk statis lama, radiasi layar), bahaya kebakaran jalur kabel listrik, kualitas udara buruk (sick building syndrome), dan terpeleset.',
          faqQ2: 'Berapa standar pencahayaan ruangan kerja komputer di kantor?',
          faqA2: 'Sesuai regulasi, pencahayaan untuk area kerja perkantoran/komputer minimal adalah 300 Lux.'
        },
        {
          slug: 'k3-fasilitas-kesehatan',
          title: 'Pelatihan K3 Rumah Sakit & Fasilitas Pelayanan Kesehatan (K3RS)',
          duration: '32 JP (4 Hari Kerja)',
          legal: 'Permenkes No. 66 Tahun 2016 tentang K3RS',
          sourceKey: 'permenkes66_2016',
          audience: ['Komite K3RS', 'Sanitarian Rumah Sakit', 'Kepala Instalasi Rawat Inap/Bedah'],
          moduleTopics: ['Pengendalian Bahaya Infeksi Biologis & Pajanan Jarum Suntik (Needlestick Injury)', 'Pengelolaan Limbah Medis B3 Infeksius & Radioaktif', 'Manajemen Keselamatan Kebakaran & Evakuasi Pasien Kritis (Code Red)'],
          faqQ1: 'Siapa yang wajib membentuk Komite K3RS di fasilitas rumah sakit?',
          faqA1: 'Setiap rumah sakit wajib memiliki Komite atau Tim K3RS yang ditetapkan oleh Direktur Rumah Sakit sesuai Permenkes 66/2016.',
          faqQ2: 'Bagaimana penanganan darurat bila tenaga medis tertusuk jarum suntik bekas?',
          faqA2: 'Segera cuci luka dengan air mengalir dan sabun, jangan memencet luka berlebihan, lakukan pelaporan insiden, dan periksa profil serologi sumber pajanan.'
        },
        {
          slug: 'k3-laboratorium-kimia',
          title: 'Pelatihan K3 Laboratorium Pengujian Kimia & Biologis',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'Permenaker No. 05 Tahun 2018 & Standar GLP',
          sourceKey: 'permen05_2018',
          audience: ['Kepala Laboratorium', 'Analis Kimia & Mikrobiologi', 'Lab Safety Coordinator'],
          moduleTopics: ['Penyimpanan Bahan Kimia Berdasarkan Kompatibilitas Matriks Bahaya', 'Pengoperasian Lemari Asam (Fume Hood) & Biosafety Cabinet (BSC)', 'Prosedur Dekontaminasi & Penanganan Tumpahan Bahan Reaktif'],
          faqQ1: 'Alat pelindung diri apa yang wajib dipakai di laboratorium kimia?',
          faqA1: 'Jas laboratorium tahan kimia, kacamata safety goggle / face shield, sarung tangan nitril/neoprene sesuai jenis pelarut, dan masker respirator uap kimia.',
          faqQ2: 'Berapa kecepatan hisap (face velocity) standar untuk lemari asam?',
          faqA2: 'Kecepatan hisap ideal lemari asam berada pada rentang 0,4 hingga 0,6 meter per detik (m/s).'
        },
        {
          slug: 'k3-gudang-logistik',
          title: 'Pelatihan K3 Pergudangan, Logistik & Material Handling',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'Permenaker No. 08 Tahun 2020 & UU No. 1 Tahun 1970',
          sourceKey: 'permen08_2020',
          audience: ['Warehouse Manager', 'Supervisor Logistik', 'Safety Inspector Fasilitas'],
          moduleTopics: ['Penataan Tata Letak Rak Penyimpanan Tinggi & Batas Beban (Load Capacity)', 'Pemisahan Jalur Pejalan Kaki (Pedestrian) dan Jalur Armada Forklift', 'Ergonomi Angkat-Angkut Manual Barang Berat (Manual Handling Standards)'],
          faqQ1: 'Berapa batas beban angkat manual maksimum untuk 1 orang pria dewasa?',
          faqA1: 'Sesuai rekomendasi ergonomi ketenagakerjaan, batas angkat manual ideal untuk pria dewasa berkisar antara 20-25 kg untuk frekuensi normal.',
          faqQ2: 'Apakah rak penyimpanan gudang wajib diinspeksi berkala?',
          faqA2: 'Wajib, untuk mendeteksi deformasi tiang racking akibat benturan forklift, baut longgar, atau kelebihan beban muatan.'
        },
        {
          slug: 'k3-transportasi-armada',
          title: 'Pelatihan K3 Transportasi Darat & Manajemen Keselamatan Armada Fleet',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'Permenhub & Standar Manajemen Keselamatan Transportasi',
          sourceKey: 'uu1',
          audience: ['Fleet Manager', 'Safety Dispatcher Armada', 'Koordinator Logistik Transport'],
          moduleTopics: ['Manajemen Kelelahan Pengemudi (Fatigue Management & Jam Istirahat)', 'Inspeksi Kelaikan Kendaraan Sebelum Jalan (Daily Pre-Trip Inspection)', 'Manajemen Kecepatan GPS Tracking & Tanggap Darurat Laka Lantas'],
          faqQ1: 'Berapa lama batas waktu mengemudi terus menerus yang aman?',
          faqA1: 'Pengemudi wajib beristirahat sekurang-kurangnya 30 menit setelah 4 jam mengemudi terus-menerus guna mencegah microsleep.',
          faqQ2: 'Apakah pengemudi truk muatan kimia B3 membutuhkan sertifikasi khusus?',
          faqA2: 'Ya, pengemudi angkutan B3 wajib memiliki pelatihan penanganan bahaya bahan kimia dan sertifikat kompetensi pengangkutan B3.'
        },
        {
          slug: 'k3-perhotelan-pariwisata',
          title: 'Pelatihan K3 Sektor Perhotelan, Resort & Pariwisata',
          duration: '20 JP (2 Hari Kerja)',
          legal: 'Permenaker & Standar CHSE Pariwisata',
          sourceKey: 'uu1',
          audience: ['Chief Engineering Hotel', 'Security & Safety Head', 'HR Hotel Management'],
          moduleTopics: ['Proteksi Kebakaran Dapur Restoran & Sistem Wet Chemical', 'Keselamatan Area Kolam Renang, Spa & Ruang Ketel Pemanas Air (Boiler)', 'Pencegahan Terpeleset (Slip & Trip) Area Tamu dan Housekeeping'],
          faqQ1: 'Bahaya K3 apa yang paling sering timbul di area dapur perhotelan?',
          faqA1: 'Kebakaran minyak goreng pada deep fryer, luka bakar uap panas, luka sayat pisau/mesin slicer, dan terpeleset lantai basah.',
          faqQ2: 'Apakah staf hotel wajib dilatih prosedur evakuasi tamu difabel?',
          faqA2: 'Ya, prosedur evakuasi hotel harus mencakup bantuan khusus bagi tamu lansia, anak-anak, dan penyandang disabilitas saat alarm berbunyi.'
        },
        {
          slug: 'k3-ritel-pusat-belanja',
          title: 'Pelatihan K3 Ritel Modern & Pusat Perbelanjaan',
          duration: '20 JP (2 Hari Kerja)',
          legal: 'Permenaker No. 06/2017 & Standar Keselamatan Gedung Publik',
          sourceKey: 'uu1',
          audience: ['Store Safety Officer', 'Mall Operation Manager', 'Tenant Safety Coordinator'],
          moduleTopics: ['Pengawasan Keselamatan Eskalator & Lift Pengunjung', 'Manajemen Jalur Koridor Evakuasi Bebas Hambatan Tenant', 'Prosedur Crowd Control & Tanggap Darurat Kerumunan Massa'],
          faqQ1: 'Siapa yang bertanggung jawab atas riksa uji eskalator di pusat perbelanjaan?',
          faqA1: 'Pengelola gedung mal bertanggung jawab melakukan riksa uji kelayakan berkala oleh PJK3 berlisensi Kemnaker RI setiap tahun.',
          faqQ2: 'Apa tindakan darurat pertama bila terjadi gempa bumi di dalam mal?',
          faqA2: 'Instruksikan pengunjung menjauhi etalase kaca, berlindung di dekat pilar kokoh, tidak menggunakan lift, dan keluar tertib melalui tangga darurat.'
        },
        {
          slug: 'k3-telekomunikasi-bts',
          title: 'Pelatihan K3 Infrastruktur Menara Telekomunikasi & Fiber Optik',
          duration: '30 JP (3 Hari Kerja)',
          legal: 'Permenaker No. 09 Tahun 2016 & Standar Telekomunikasi',
          sourceKey: 'permen09_2016',
          audience: ['Tower Rigging Team', 'Site Engineer Telco', 'HSE Specialist Proyek'],
          moduleTopics: ['Teknik Akses Tali & Bekerja Pada Struktur Menara BTS Ketinggian', 'Proteksi Radiasi Gelombang Elektromagnetik / Non-Pengion Antena', 'Prosedur Penyelamatan Korban Terjebak di Menara (Tower Rescue)'],
          faqQ1: 'Sertifikasi apa yang wajib dimiliki teknisi pemanjat menara BTS?',
          faqA1: 'Wajib memiliki sertifikat Tenaga Kerja Bangunan Tinggi (TKBT) atau Tenaga Kerja Pada Ketinggian (TKPK) resmi Kemnaker RI.',
          faqQ2: 'Bagaimana mitigasi radiasi RF saat bekerja di dekat antena pemancar aktif?',
          faqA2: 'Lakukan koordinasi pemadaman transmisi daya antena (RF lock-out) atau jaga jarak aman sesuai batas radiasi ICNIRP.'
        },
        {
          slug: 'k3-manufaktur-otomotif',
          title: 'Pelatihan K3 Lini Manufaktur & Perakitan Otomotif',
          duration: '30 JP (3 Hari Kerja)',
          legal: 'Permenaker No. 38 Tahun 2016 tentang K3 Pesawat Tenaga Produksi',
          sourceKey: 'permen38_2016',
          audience: ['Plant Safety Officer', 'Production Supervisor Otomotif', 'Kaizen/Poka-Yoke Engineer'],
          moduleTopics: ['Pengamanan Mesin Stamping Press, Robot Las & Lini Conveyor', 'Sistem Interlock, Light Curtain & Emergency Stop Button', 'Ergonomi Stasiun Kerja Perakitan Komponen Berulang (Repetitive Work)'],
          faqQ1: 'Apa syarat keselamatan wajib untuk mesin stamping bertekanan tinggi?',
          faqA1: 'Wajib dilengkapi double hand button (tombol dua tangan), sensor light curtain infra-merah, dan penutup fisik pengaman cetakan (die guarding).',
          faqQ2: 'Apakah operator mesin press harus memiliki lisensi K3 Kemnaker?',
          faqA2: 'Ya, operator mesin tenaga dan produksi wajib memiliki SIO (Surat Izin Operator) resmi Kemnaker RI.'
        },
        {
          slug: 'k3-industri-makanan-minuman',
          title: 'Pelatihan K3 Industri Makanan, Minuman & Sanitasi Pabrik (F&B)',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'Permenaker No. 05/2018 & Standar HACCP/ISO 22000',
          sourceKey: 'permen05_2018',
          audience: ['QA/QC Safety Team', 'Supervisor Produksi Makanan', 'HSE F&B Plant'],
          moduleTopics: ['Pengendalian Bahaya Kebocoran Gas Amonia Pendingin (Cold Storage)', 'Keselamatan Mesin Pengaduk (Mixer), Boiler & Jalur Pengemasan Otomatis', 'Integrasi Higiene Sanitasi Pangan dan Keselamatan Kerja Karyawan'],
          faqQ1: 'Apa bahaya kritis di ruang pendingin (cold storage) pabrik makanan?',
          faqA1: 'Bahaya kebocoran zat pendingin amonia (NH3) yang bersifat toksik dan korosif, serta bahaya pekerja terkunci di dalam suhu sub-zero.',
          faqQ2: 'Apakah pintu cold storage wajib memiliki mekanisme pengaman dari dalam?',
          faqA2: 'Wajib memiliki mekanisme tuas darurat pembuka pintu dari dalam yang tetap berfungsi meskipun pintu terkunci dari luar.'
        }
      ]
    },
    {
      cat: 'kebakaran',
      name: 'Penanggulangan Kebakaran & Proteksi Api',
      prefix: 'K3 Kebakaran',
      sourceKey: 'kep186_1999',
      legalDefault: 'Kepmenaker No. KEP.186/MEN/1999 tentang Unit Penanggulangan Kebakaran',
      seeds: [
        {
          slug: 'k3-kebakaran',
          title: 'Pelatihan K3 Penanggulangan Kebakaran (Paket Sertifikasi Kemnaker)',
          duration: '24 s.d. 60 JP (3 s.d. 8 Hari)',
          legal: 'Kepmenaker No. KEP.186/MEN/1999',
          sourceKey: 'kep186_1999',
          audience: ['Regu Pemadam Kebakaran Gedung', 'Petugas Tanggap Darurat Api', 'Safety Officer Pabrik'],
          moduleTopics: ['Teori Segitiga Api & Klasifikasi Kelas Kebakaran (A, B, C, D, K)', 'Teknik Pemadaman Api Menggunakan APAR & Gelaran Selang Hydrant', 'Penyusunan Rencana Penanggulangan Keadaan Darurat Kebakaran Pabrik'],
          faqQ1: 'Berapa jenjang sertifikasi K3 Kebakaran Kemnaker RI?',
          faqA1: 'Terdapat 4 jenjang berurutan: Petugas Peran Kebakaran (Kelas D), Regu Kebakaran (Kelas C), Koordinator Kebakaran (Kelas B), dan Ahli K3 Kebakaran (Kelas A).',
          faqQ2: 'Apakah peserta mempraktikkan pemadaman api nyata (live fire drill)?',
          faqA2: 'Ya, seluruh peserta wajib mengikuti praktik langsung pemadaman api menggunakan berbagai jenis APAR dan nosel hydrant.'
        },
        {
          slug: 'k3-kebakaran-kelas-d',
          title: 'Pelatihan Petugas Peran Kebakaran (Kelas D Sertifikasi Kemnaker RI)',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'Kepmenaker No. KEP.186/MEN/1999 Lampiran I',
          sourceKey: 'kep186_1999',
          audience: ['Staf Lintas Divisi', 'Anggota Regu APAR', 'Floor Warden Gedung'],
          moduleTopics: ['Dasar-Dasar Pencegahan Kebakaran & Karakteristik Media Pemadam', 'Pemeriksaan & Penggunaan Praktis APAR Berbagai Jenis Media', 'Pemanduan Evakuasi Aman Menuju Assembly Point'],
          faqQ1: 'Berapa rasio petugas peran kebakaran Kelas D yang wajib ada di tempat kerja?',
          faqA1: 'Sekurang-kurangnya 2 (dua) orang untuk setiap jumlah tenaga kerja 20 (dua puluh) orang (Kepmenaker 186/1999 Pasal 6).',
          faqQ2: 'Apakah lulusan SMA/SMK bisa mengikuti sertifikasi Kelas D?',
          faqA2: 'Bisa. Persyaratan pendidikan minimal untuk Kelas D adalah lulusan SMP/SMA sederajat.'
        },
        {
          slug: 'k3-kebakaran-kelas-c',
          title: 'Pelatihan Regu Penanggulangan Kebakaran (Kelas C Sertifikasi Kemnaker)',
          duration: '48 JP (6 Hari Kerja)',
          legal: 'Kepmenaker No. KEP.186/MEN/1999 Lampiran II',
          sourceKey: 'kep186_1999',
          audience: ['Anggota Regu Fire Brigade Pabrik', 'Petugas Security', 'Tim Pemadam Lapangan'],
          moduleTopics: ['Sistem Pasokan Air & Pengoperasian Jaringan Hydrant Pabrik', 'Teknik Formasi Regu Pemadam, Pola Semprotan Jet & Fog', 'Penggunaan Baju Tahan Panas & Alat Bantu Pernapasan SCBA'],
          faqQ1: 'Apa syarat untuk mengambil pelatihan Kelas C?',
          faqA1: 'Peserta dipersyaratkan berpendidikan minimal SMA sederajat, sehat jasmani (tidak memiliki riwayat sesak napas), dan diutamakan telah memiliki dasar Kelas D.',
          faqQ2: 'Berapa berat tabung SCBA yang digunakan dalam latihan pemadaman?',
          faqA2: 'Tabung SCBA komposit/baja umumnya berbobot 10-14 kg dengan kapasitas udara bernapas 300 bar (durasi efektif ±30-45 menit).'
        },
        {
          slug: 'k3-kebakaran-kelas-b',
          title: 'Pelatihan Koordinator Unit Penanggulangan Kebakaran (Kelas B Kemnaker)',
          duration: '50 JP (6 Hari Kerja)',
          legal: 'Kepmenaker No. KEP.186/MEN/1999 Lampiran III',
          sourceKey: 'kep186_1999',
          audience: ['Fire Safety Coordinator', 'Chief Safety', 'Kepala Regu Tanggap Darurat'],
          moduleTopics: ['Manajemen Taktik & Strategi Penanggulangan Kebakaran Kompleks', 'Perhitungan Kebutuhan Air Pemadam & Pengawasan Sarana Proteksi', 'Evaluasi Pasca Pemadaman & Penyelidikan Awal Penyebab Kebakaran'],
          faqQ1: 'Berapa jumlah koordinator Kelas B yang wajib ditunjuk perusahaan?',
          faqA1: 'Sekurang-kurangnya 1 (satu) orang untuk setiap unit kerja penanggulangan kebakaran di perusahaan.',
          faqQ2: 'Apakah koordinator Kelas B berwenang memimpin pemadaman saat darurat?',
          faqA2: 'Ya, bertindak sebagai komandan regu operasi di lapangan sebelum dinas pemadam kebakaran kota tiba.'
        },
        {
          slug: 'k3-kebakaran-kelas-a',
          title: 'Pelatihan Ahli K3 Spesialis Penanggulangan Kebakaran (Kelas A Kemnaker)',
          duration: '60 JP (8 Hari Kerja)',
          legal: 'Kepmenaker No. KEP.186/MEN/1999 Lampiran IV',
          sourceKey: 'kep186_1999',
          audience: ['Fire Safety Engineer', 'Penanggung Jawab Proteksi Gedung Tinggi', 'Konsultan Fire Protection'],
          moduleTopics: ['Perancangan Sistem Proteksi Aktif (Sprinkler, Deluge, Gas Total Flooding)', 'Audit Kepatuhan Fire Safety Berdasarkan SNI & NFPA', 'Penyusunan Fire Risk Assessment & Fire Safety Plan Fasilitas Industri'],
          faqQ1: 'Apa syarat pendidikan untuk mengambil Ahli K3 Kebakaran Kelas A?',
          faqA1: 'Pendidikan minimal Sarjana Muda / Diploma 3 (D3) atau Sarjana (S1) teknik/K3 dengan pengalaman kerja yang relevan.',
          faqQ2: 'Apa output legalitas resmi yang diterbitkan Kemnaker RI?',
          faqA2: 'Sertifikat Pembinaan, SKP Ahli K3 Spesialis Kebakaran, dan Lisensi Kewenangan K3 dari Menteri Ketenagakerjaan RI.'
        },
        {
          slug: 'inspeksi-apar-hydrant',
          title: 'Pelatihan Inspeksi & Pengujian Sistem APAR dan Hydrant Pabrik',
          duration: '20 JP (2 Hari Kerja)',
          legal: 'Permenaker No. 04/MEN/1980 & NFPA 25',
          sourceKey: 'kep186_1999',
          audience: ['Fire Inspector', 'Maintenance Technician', 'HSE Staff Lapangan'],
          moduleTopics: ['Checklist Inspeksi Bulanan APAR: Jarum Tekanan, Segel, Selang, Media', 'Uji Aliran Air (Flow Test) & Uji Tekanan Statis/Dinamis Hydrant', 'Pencatatan Kartu Gantung Inspeksi & Logbook Pemeliharaan'],
          faqQ1: 'Berapa tinggi pemasangan APAR di dinding yang sesuai regulasi?',
          faqA1: 'Sesuai Permenaker 04/1980, tinggi penempatan APAR adalah maksimal 1,2 meter dari permukaan lantai ke puncak tabung.',
          faqQ2: 'Berapa tahun sekali uji hidrostatis tabung APAR wajib dilakukan?',
          faqA2: 'Tabung APAR wajib diuji tekan hidrostatis setiap 5 tahun sekali untuk menjamin kekuatan dinding bejana tabung.'
        },
        {
          slug: 'sistem-sprinkler-fire-alarm',
          title: 'Pelatihan Pengoperasian & Pemeliharaan Sistem Sprinkler Otomatis & Alarm Api',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'Permenaker No. 02/MEN/1983 & Standar NFPA 13/72',
          sourceKey: 'kep186_1999',
          audience: ['Teknisi MEP', 'Building Engineer', 'Fire Protection Specialist'],
          moduleTopics: ['Prinsip Kerja Detektor Asap (Smoke), Panas (Heat), & Api (Flame Detector)', 'Main Control Fire Alarm (MCFA) Addressable vs Konvensional', 'Pengujian Katup Kontrol Sprinkler (Alarm Valve & Flow Switch)'],
          faqQ1: 'Bagaimana mekanisme kerja kepala sprinkler otomatis?',
          faqA1: 'Bulb kaca berisi cairan sensitif suhu akan pecah saat terpapar panas tertentu (misal 68°C), membuka segel katup dan menyemprotkan air bertekanan.',
          faqQ2: 'Apa yang harus dilakukan bila MCFA membunyikan alarm palsu (false alarm)?',
          faqA2: 'Petugas mengecek zona lokasi terdeteksi, memastikan tidak ada api nyata, me-reset MCFA, dan membersihkan debu pada detektor terkait.'
        },
        {
          slug: 'evakuasi-gedung-bertingkat',
          title: 'Pelatihan Manajemen Evakuasi Darurat & Fire Drill Gedung Bertingkat',
          duration: '16 JP (2 Hari Kerja)',
          legal: 'Kepmenaker No. 186/1999 & Standar Evakuasi Gedung',
          sourceKey: 'kep186_1999',
          audience: ['Building Warden', 'Emergency Response Team', 'HR & GA Pengelola Gedung'],
          moduleTopics: ['Penetapan Rute Tangga Darurat & Sistem Tekanan Udara Positif (Pressurized Fan)', 'Prosedur Sweeping Ruangan & Perhitungan Waktu Evakuasi (Evacuation Time Trial)', 'Simulasi Fire Drill Terpadu Bersama Seluruh Penghuni Gedung'],
          faqQ1: 'Mengapa lift dilarang digunakan saat evakuasi kebakaran gedung?',
          faqA1: 'Karena cerobong lift dapat menjadi jalur rambatan asap beracun dan pasokan listrik lift berisiko mati mendadak menjebak penumpang.',
          faqQ2: 'Berapa kali simulasi fire drill gedung wajib dilakukan?',
          faqA2: 'Simulasi fire drill gedung bertingkat wajib dilaksanakan sekurang-kurangnya 1 (satu) hingga 2 (dua) kali dalam setahun.'
        },
        {
          slug: 'pencegahan-kebakaran-migas',
          title: 'Pelatihan Pencegahan & Penanggulangan Bahaya Kebakaran Industri Migas',
          duration: '32 JP (4 Hari Kerja)',
          legal: 'Kepmenaker & Standar Keselamatan Migas (API/NFPA)',
          sourceKey: 'kep186_1999',
          audience: ['Firefighter Migas', 'Operator Kilang Minyak', 'HSE Officer Rig Pengeboran'],
          moduleTopics: ['Karakteristik Jet Fire, Pool Fire, & Flash Fire Hidrokarbon', 'Pengoperasian Sistem Deluge Foam & Monitor Cannon Kapasitas Tinggi', 'Isolasi Aliran Gas Darurat (Emergency Shutdown Valve / ESDV)'],
          faqQ1: 'Media pemadam apa yang paling efektif untuk kebakaran cairan minyak mentah?',
          faqA1: 'Busa mekanik (AFFF / AR-AFFF) yang mampu membentuk selimut film penutup uap hidrokarbon di atas permukaan minyak.',
          faqQ2: 'Apa bahaya terbesar saat memadamkan tangki timbun minyak terbakar?',
          faqA2: 'Bahaya fenomena boilover dan slopover, yaitu ledakan semburan minyak panas akibat air di dasar tangki mendidih seketika.'
        },
        {
          slug: 'kalkulasi-beban-kebakaran',
          title: 'Pelatihan Analisis Risiko & Kalkulasi Beban Api Fasilitas Industri',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'Standar NFPA 557 & SNI Proteksi Bangunan',
          sourceKey: 'kep186_1999',
          audience: ['Fire Risk Assessor', 'Safety Engineer', 'Plant Layout Designer'],
          moduleTopics: ['Perhitungan Nilai Kalori Bahan (Fire Load Density Calculation)', 'Penentuan Ketahanan Api Struktur Bangunan (Fire Resistance Rating)', 'Perancangan Kompartemen Tahan Api 2 Jam & Dinding Pemisah (Firewall)'],
          faqQ1: 'Apa fungsi menghitung fire load density?',
          faqA1: 'Untuk menentukan potensi durasi dan intensitas kebakaran maksimum sehingga sistem pemadam dan struktur gedung dapat dirancang tahan runtuh.',
          faqQ2: 'Bahan apa saja yang dihitung dalam beban api gedung?',
          faqA2: 'Seluruh material yang dapat terbakar, mencakup bahan konstruksi kayu/plastik, mebel, isi gudang, kertas, dan cairan pelarut.'
        },
        {
          slug: 'fire-blanket-dan-foam',
          title: 'Pelatihan Teknik Pemadaman Api Kimia Menggunakan Busa (Foam) & Fire Blanket',
          duration: '16 JP (2 Hari Kerja)',
          legal: 'Standar NFPA 11 & NFPA 18',
          sourceKey: 'kep186_1999',
          audience: ['Operator Fuel Depot', 'Tim Tanggap Darurat Kimia', 'Staf Gudang Pelarut'],
          moduleTopics: ['Proporsi Pencampuran Foam Concentrate (1%, 3%, 6%) dengan Eductor', 'Teknik Aplikasi Busa: Roll-On, Bank-In, dan Gentle Raindown', 'Pemadaman Api Korban Terbakar Menggunakan Selimut Api (Fire Blanket)'],
          faqQ1: 'Apa perbedaan foam jenis AFFF dengan Alcohol Resistant AFFF (AR-AFFF)?',
          faqA1: 'AR-AFFF diformulasikan khusus untuk memadamkan pelarut polar (seperti alkohol, aseton, etanol) yang dapat merusak busa AFFF standar.',
          faqQ2: 'Bagaimana cara menggunakan fire blanket pada orang yang pakaiannya terbakar?',
          faqA2: 'Dekap korban dari depan/belakang, bungkus tubuh korban rapat-rapat dengan fire blanket, dan gulingkan perlahan di lantai untuk memutus oksigen.'
        },
        {
          slug: 'inspeksi-pintu-darurat-smoke-damper',
          title: 'Pelatihan Inspeksi Sarana Penyelamatan Jiwa & Kompartemen Asap',
          duration: '20 JP (2 Hari Kerja)',
          legal: 'Permenaker No. 02/MEN/1983 & NFPA 80/105',
          sourceKey: 'kep186_1999',
          audience: ['Building Safety Inspector', 'HSE Auditor', 'Facility Maintenance Lead'],
          moduleTopics: ['Inspeksi Panic Bar & Mekanisme Door Closer Pintu Tahan Api', 'Pengujian Fungsi Otomatis Fire Damper & Smoke Damper pada Ducting AC', 'Pemeriksaan Tanda Keluar Darurat (Exit Sign) & Lampu Darurat (Emergency Light)'],
          faqQ1: 'Berapa jam ketahanan api minimum untuk pintu tangga darurat gedung tinggi?',
          faqA1: 'Pintu kebakaran tangga darurat wajib memiliki rating tahan api sekurang-kurangnya 2 (dua) jam.',
          faqQ2: 'Mengapa pintu tangga darurat tidak boleh diganjal terbuka (wedged open)?',
          faqA2: 'Jika diganjal terbuka, asap beracun dan gas panas akan langsung masuk ke tangga darurat, menjadikannya perangkap maut bagi yang mengungsi.'
        },
        {
          slug: 'simulasi-kebakaran-ruang-server',
          title: 'Pelatihan Proteksi Kebakaran Clean Agent Sistem Ruang Server & Data Center',
          duration: '20 JP (2 Hari Kerja)',
          legal: 'NFPA 2001 & SNI Sistem Total Flooding',
          sourceKey: 'kep186_1999',
          audience: ['IT Facility Manager', 'Data Center Operator', 'MEP Maintenance Engineer'],
          moduleTopics: ['Karakteristik Media Gas Bersih: FM-200, Novec 1230, IG-541 Inergen', 'Mekanisme Pre-Discharge Alarm & Waktu Tunda Evakuasi (Hold-Off Time)', 'Pemeriksaan Integritas Kekedapan Ruangan (Room Integrity Fan Test)'],
          faqQ1: 'Mengapa air tidak boleh digunakan untuk memadamkan kebakaran ruang server aktif?',
          faqA1: 'Air menyebabkan korsleting parah, merusak komponen elektronik server secara permanen, dan menimbulkan risiko sengatan listrik bagi pemadam.',
          faqQ2: 'Apakah gas Novec 1230 aman bagi manusia yang berada di dalam ruangan?',
          faqA2: 'Ya, Novec 1230 dan FM-200 dirancang aman dihirup pada konsentrasi desain pemadaman (NOAEL), namun evakuasi tetap diwajibkan saat alarm pra-pelepasan berbunyi.'
        },
        {
          slug: 'fire-safety-manager',
          title: 'Pelatihan Kompetensi Fire Safety Manager Pengelola Properti',
          duration: '40 JP (4 Hari Kerja)',
          legal: 'Standar SKKNI Fire Safety Manager & Permenaker',
          sourceKey: 'bnsp_general',
          audience: ['Property Manager', 'Safety Director Korporasi', 'Head of Building Facility'],
          moduleTopics: ['Penyusunan Rencana Induk Proteksi Kebakaran (Fire Safety Master Plan)', 'Manajemen Kontrak Pemeliharaan Sistem Proteksi Pihak Ketiga', 'Audit Investigasi & Pelaporan Resmi ke Dinas Gulkarmat / Kemnaker'],
          faqQ1: 'Apa tanggung jawab utama seorang Fire Safety Manager?',
          faqA1: 'Mengelola seluruh aspek kepatuhan proteksi api gedung, kesiapan alat pemadam, pelatihan berkala penghuni, dan kepatuhan sertifikat laik fungsi gedung.',
          faqQ2: 'Apakah Fire Safety Manager wajib mengikuti uji kompetensi BNSP?',
          faqA2: 'Sangat disarankan untuk membuktikan pengakuan kompetensi formal dalam portofolio pengelolaan gedung komersial modern.'
        },
        {
          slug: 'tanggap-darurat-ledakan-gas',
          title: 'Pelatihan Mitigasi & Tanggap Darurat Ledakan Gas Mudah Terbakar (LPG/LNG)',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'Permenaker No. 37/2016 & Standar Migas',
          sourceKey: 'permen37_2016',
          audience: ['Operator Terminal LPG', 'Petugas Pengisian Tabung Gas', 'HSE Plant Gas'],
          moduleTopics: ['Pemahaman Batas Ledakan Gas: Lower Explosive Limit (LEL) & Upper Explosive Limit (UEL)', 'Penggunaan Detektor Gas Portabel & Detektor Kebocoran Tetap', 'Prosedur Water Spray Curtain Pembatas Penyebaran Awan Gas'],
          faqQ1: 'Berapa rentang batas ledakan (LEL-UEL) untuk gas LPG di udara?',
          faqA1: 'Batas ledakan gas LPG berkisar antara ± 1,8% (LEL) hingga 9,5% (UEL) volume di udara.',
          faqQ2: 'Mengapa dilarang menyalakan saklar lampu saat tercium bau gas menyengat?',
          faqA2: 'Percikan api mikro dari kontak saklar listrik cukup untuk memicu ledakan seketika bila konsentrasi gas berada dalam rentang LEL-UEL.'
        },
        {
          slug: 'fire-pump-system-operation',
          title: 'Pelatihan Pengoperasian & Testing Pompa Pemadam Api (Fire Pump Jockey/Diesel)',
          duration: '20 JP (2 Hari Kerja)',
          legal: 'NFPA 20 & Permenaker No. 04/1980',
          sourceKey: 'kep186_1999',
          audience: ['Teknisi Pompa Pabrik', 'Regu Pemadam Internal', 'Operator Utilitas'],
          moduleTopics: ['Fungsi & Urutan Start Otomatis Pompa: Jockey Pump, Electric Pump, Diesel Fire Pump', 'Pemeriksaan Tekanan Cut-In & Cut-Out Pressure Switch', 'Testing Aliran Mingguan & Pemeliharaan Baterai Starter Pompa Diesel'],
          faqQ1: 'Apa fungsi Jockey Pump dalam instalasi hydrant kebakaran?',
          faqA1: 'Jockey pump berfungsi menjaga tekanan air di dalam pipa hydrant tetap stabil dari kebocoran minor tanpa menyalakan pompa utama.',
          faqQ2: 'Kapan Diesel Fire Pump akan menyala secara otomatis?',
          faqA2: 'Diesel pump akan menyala otomatis saat tekanan pipa turun drastis (kebakaran besar) atau saat pasokan listrik ke pompa elektrik terputus.'
        },
        {
          slug: 'uji-hidrostatis-tabung-apar',
          title: 'Pelatihan Uji Hidrostatis & Pengisian Ulang Media Tabung APAR',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'Permenaker No. 04/MEN/1980 tentang Syarat APAR',
          sourceKey: 'kep186_1999',
          audience: ['Teknisi Bengkel Servis APAR', 'Workshop Safety Crew', 'Vendor Refill Tabung'],
          moduleTopics: ['Teknik Pengosongan & Pemeriksaan Korosi Internal Bejana APAR', 'Prosedur Hydrostatic Pressure Test Menggunakan Ruang Uji Berpelindung', 'Standar Pengisian Ulang Serbuk Kimia Kering (Powder) & Gas Pendorong Nitrogen (N2)'],
          faqQ1: 'Berapa tekanan uji hidrostatis untuk tabung pemadam jenis Dry Chemical Powder?',
          faqA1: 'Sesuai regulasi, tabung diuji pada tekanan sekurang-kurangnya 1,5 hingga 2 kali tekanan kerja tabung (umumnya 20-25 bar).',
          faqQ2: 'Gas apa yang digunakan sebagai pendorong tabung APAR stored-pressure?',
          faqA2: 'Gas Nitrogen kering (Dry N2) digunakan karena tidak mengandung uap air yang dapat menggumpalkan serbuk kimia pemadam.'
        },
        {
          slug: 'fire-incident-command-system',
          title: 'Pelatihan Incident Command System (ICS) untuk Darurat Kebakaran Kompleks',
          duration: '30 JP (3 Hari Kerja)',
          legal: 'Standar BNPB & Sistem Tanggap Darurat Industri',
          sourceKey: 'kep186_1999',
          audience: ['Incident Commander', 'Head of Security', 'Crisis Management Team Perusahaan'],
          moduleTopics: ['Struktur Komando Insiden: Operasi, Perencanaan, Logistik, Keuangan/Admin', 'Prosedur Komunikasi Radio Dua Arah & Koordinasi dengan Dinas Damkar Kota', 'Pengambilan Keputusan Taktis Evakuasi vs Penyelamatan Aset Kritis'],
          faqQ1: 'Siapa yang memegang otoritas tertinggi di lokasi kejadian saat terjadi kebakaran?',
          faqA1: 'Incident Commander (IC) memegang kendali penuh sampai komando dialihkan secara resmi kepada Perwira Dinas Damkar yang tiba di lokasi.',
          faqQ2: 'Mengapa ICS penting diterapkan di kawasan industri besar?',
          faqA2: 'Untuk mencegah kekacauan komunikasi, duplikasi perintah, dan memastikan alokasi personel pemadam bekerja terkoordinasi dan aman.'
        },
        {
          slug: 'penanggulangan-kebakaran-dapur-komersial',
          title: 'Pelatihan Proteksi Kebakaran Dapur Komersial (Wet Chemical System K-Class)',
          duration: '16 JP (2 Hari Kerja)',
          legal: 'NFPA 96 & Standar Restoran / F&B',
          sourceKey: 'kep186_1999',
          audience: ['Executive Chef & Kitchen Crew', 'F&B Safety Coordinator', 'Building Maintenance'],
          moduleTopics: ['Karakteristik Kebakaran Minyak Lemak Nabati/Hewani (Kelas K)', 'Prinsip Saponifikasi Media Wet Chemical Kalium Asetat', 'Pengoperasian Sistem Pemadam Otomatis Hood Dapur & Tombol Manual Pull'],
          faqQ1: 'Mengapa dilarang menggunakan air untuk memadamkan minyak goreng terbakar di wajan?',
          faqA1: 'Air akan langsung mendidih seketika dan meledak menjadi bola api raksasa (fireball) yang menyebarkan minyak panas ke seluruh ruangan.',
          faqQ2: 'Bagaimana cara kerja sistem pemadam wet chemical pada hood dapur?',
          faqA2: 'Cairan kalium asetat bereaksi dengan minyak panas membentuk lapisan busa sabun tebal (saponifikasi) yang mendinginkan dan memutus suplai oksigen.'
        },
        {
          slug: 'audit-kepatuhan-proteksi-kebakaran',
          title: 'Pelatihan Audit Kepatuhan Sistem Proteksi Kebakaran Bangunan Industri',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'Permenaker No. 02/1983 & PP No. 50/2012',
          sourceKey: 'pp50',
          audience: ['Auditor K3', 'Fire Safety Assessor', 'Corporate Risk Specialist'],
          moduleTopics: ['Checklist Audit Sistem Proteksi Pasif: Dinding, Pintu, Kompartemen, Koridor', 'Checklist Audit Sistem Proteksi Aktif: Pompa, Hydrant, Sprinkler, Detektor', 'Penyusunan Rencana Tindak Lanjut Pemenuhan Rekomendasi Audit'],
          faqQ1: 'Dokumen legalitas apa yang diverifikasi dalam audit proteksi kebakaran pabrik?',
          faqA1: 'Pengesahan pemakaian instalasi proteksi kebakaran dari Disnaker, sertifikat lisensi petugas peran kebakaran, dan berita acara riksa uji berkala.',
          faqQ2: 'Apakah audit kebakaran mencakup pemeriksaan sertifikat kompetensi regu damkar internal?',
          faqA2: 'Ya, auditor memverifikasi kecukupan kuota personel bersertifikat Kelas D, C, B, dan A sesuai jumlah pekerja fasilitas.'
        },
        {
          slug: 'pemeliharaan-selang-nozzle-hydrant',
          title: 'Pelatihan Uji Tekan & Perawatan Selang serta Nozzle Hydrant Kebakaran',
          duration: '16 JP (2 Hari Kerja)',
          legal: 'NFPA 1962 & Standar SNI Selang Pemadam',
          sourceKey: 'kep186_1999',
          audience: ['Petugas Pemeliharaan Fire System', 'Security Regu Api', 'Facility Crew'],
          moduleTopics: ['Teknik Penggelaran, Penggulungan (Metode Donut & Double Roll), & Pengeringan Selang', 'Uji Tekanan Hidrostatis Servis Selang Kanvas & Karet (Hose Service Test)', 'Pemeriksaan Kopling Machino/Storz & Perawatan Katup Nozzle Variabel'],
          faqQ1: 'Mengapa selang pemadam kanvas harus dikeringkan sebelum disimpan dalam kotak?',
          faqA1: 'Selang kanvas yang lembap akan ditumbuhi jamur yang merusak serat kain dan menyebabkan kebocoran saat dialiri air bertekanan tinggi.',
          faqQ2: 'Berapa tekanan kerja standar saat mengoperasikan selang hydrant pabrik?',
          faqA2: 'Tekanan kerja ideal pada nozzle hydrant berkisar antara 4,5 hingga 7 bar untuk menghasilkan semprotan efektif dan dapat dikendalikan penolong.'
        },
        {
          slug: 'k3-kebakaran-ruang-terbatas',
          title: 'Pelatihan Penanggulangan Bahaya Kebakaran di Ruang Terbatas (Confined Space)',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'SE Menakertrans No. 01/2012 & Kepmenaker 186/1999',
          sourceKey: 'se01_2012',
          audience: ['Tim Rescue Ruang Terbatas', 'Safety Inspector Tangki', 'Petugas Gas Tester'],
          moduleTopics: ['Bahaya Kebakaran Atmosfer Kaya Oksigen (>23.5%) & Akumulasi Gas LEL', 'Peralatan Kerja Non-Sparking & Pencahayaan Explosion-Proof (Intrinsically Safe)', 'Prosedur Penyelamatan Korban & Evakuasi Cepat Menggunakan Tripod Winch'],
          faqQ1: 'Kapan pekerjaan di ruang terbatas dinyatakan berbahaya terhadap kebakaran?',
          faqA1: 'Saat kadar gas mudah terbakar melebihi 10% LEL atau kadar oksigen melebihi 23,5% volume udara di dalam ruang terbatas.',
          faqQ2: 'Alat kerja apa yang wajib digunakan saat melakukan perbaikan di dalam tangki bahan bakar?',
          faqA2: 'Wajib menggunakan perkakas non-sparking (tembaga/berilium), blower ventilasi pneumatic tahan ledakan, dan grounding anti-statis.'
        },
        {
          slug: 'manajemen-air-pemadam-kebakaran',
          title: 'Pelatihan Desain & Manajemen Cadangan Air Pemadam Kebakaran Industri',
          duration: '20 JP (2 Hari Kerja)',
          legal: 'Standar NFPA 22 & SNI Sistem Penyediaan Air Pemadam',
          sourceKey: 'kep186_1999',
          audience: ['Civil Water Engineer', 'Fire Protection Specialist', 'Plant Utility Manager'],
          moduleTopics: ['Perhitungan Volume Tangki Cadangan Air Pemadam (Durasi 45-120 Menit)', 'Desain Pemisahan Air Pemadam dengan Air Bersih Operasional (Suction Dedicated)', 'Pemeriksaan Sambungan Dinas Pemadam Kebakaran (Siamese Connection)'],
          faqQ1: 'Berapa durasi pasokan air pemadam minimum yang wajib disediakan pabrik?',
          faqA1: 'Untuk bahaya kebakaran sedang/berat, cadangan air pemadam wajib mencukupi pasokan penuh selama sekurang-kurangnya 45 hingga 90 menit operasi.',
          faqQ2: 'Apa fungsi Siamese Connection di pagar depan fasilitas pabrik?',
          faqA2: 'Memungkinkan mobil pompa dinas pemadam kebakaran menyuntikkan pasokan air tambahan langsung ke jaringan pipa hydrant gedung saat cadangan internal menipis.'
        },
        {
          slug: 'k3-pencegahan-ledakan-debu',
          title: 'Pelatihan Pencegahan & Pengendalian Bahaya Ledakan Debu Mudah Terbakar',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'Standar NFPA 652 / NFPA 654 & Permenaker',
          sourceKey: 'permen05_2018',
          audience: ['Plant Safety Engineer', 'Operator Silo & Penggilingan', 'Maintenance Supervisor'],
          moduleTopics: ['Pemahaman Pentagram Ledakan Debu: Bahan Bakar, Oksigen, Panas, Dispersi, Ruang Terkurung', 'Pemasangan Panel Pelepas Ledakan (Explosion Vent Panel) & Flameless Venting', 'Pembersihan Akumulasi Debu Sekunder (Housekeeping Dust Mitigation)'],
          faqQ1: 'Debu industri apa saja yang memiliki potensi meledak?',
          faqA1: 'Debu tepung terigu, gula, pati, serbuk kayu, batu bara, susu bubuk, resin plastik, serta serbuk logam seperti aluminium dan magnesium.',
          faqQ2: 'Metode pembersihan apa yang dilarang untuk debu mudah terbakar?',
          faqA2: 'Dilarang menggunakan semprotan udara bertekanan (compressed air blowing) karena meniup debu menjadi awan dispersi yang sangat mudah meledak.'
        },
        {
          slug: 'inspeksi-sistem-deluge-curtain',
          title: 'Pelatihan Inspeksi & Pengujian Sistem Deluge Foam-Water Curtain Fasilitas Kimia',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'Standar NFPA 15 & Permenaker No. 02/1983',
          sourceKey: 'kep186_1999',
          audience: ['Fire System Technician', 'Chemical Plant Operator', 'HSE Specialist'],
          moduleTopics: ['Prinsip Open Nozzle Total Flooding & Katup Deluge Pneumatic/Hidrolik', 'Testing Pola Distribusi Tirai Air (Water Curtain) Pemecah Radiasi Panas', 'Pemeliharaan Proportioner Busa & Pemeriksaan Tangki Bladder Tank'],
          faqQ1: 'Kapan sistem deluge otomatis digunakan dibandingkan sistem sprinkler standar?',
          faqA1: 'Sistem deluge digunakan pada area risiko bahaya sangat tinggi (seperti tangki elpiji, trafo daya besar) di mana seluruh area membutuhkan pendinginan air serentak seketika.',
          faqQ2: 'Berapa kali uji pelepasan air (trip test) katup deluge harus dilakukan?',
          faqA2: 'Trip test katup deluge wajib diuji sekurang-kurangnya 1 (satu) kali setahun untuk memastikan tidak ada katup yang macet akibat kerak.'
        },
        {
          slug: 'k3-pemadam-kebakaran-hutan-lahan',
          title: 'Pelatihan K3 Penanggulangan Kebakaran Hutan & Lahan (Karhutla)',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'Permen LHK & Standar Keselamatan Manggala Agni',
          sourceKey: 'uu1',
          audience: ['Regu Pemadam Kebakaran Perkebunan Sawit/HTI', 'Mandor Lapangan', 'HSE Agribisnis'],
          moduleTopics: ['Strategi Pembuatan Sekat Bakar (Firebreak) & Pemadaman Lahan Gambut', 'Pengoperasian Pompa Jinjing Tekanan Tinggi (Portable High-Pressure Pump)', 'Mitigasi Bahaya Hirupan Asap Pekat & Penggunaan Masker Respirator Khusus Partikulat'],
          faqQ1: 'Mengapa kebakaran di lahan gambut sangat sulit dipadamkan dari permukaan?',
          faqA1: 'Karena api di lahan gambut merambat di bawah permukaan tanah (ground fire) hingga kedalaman beberapa meter tanpa terlihat api di atasnya.',
          faqQ2: 'APD apa yang wajib dipakai regu pemadam karhutla di lapangan?',
          faqA2: 'Helm pemadam lapangan bersertifikat, kacamata goggle debu asap, masker respirator partikulat P100/N95, sepatu bot tahan tembus paku/panas, dan baju kerja katun tebal.'
        },
        {
          slug: 'fire-safety-audit-checklist',
          title: 'Pelatihan Penyusunan Checklist & Pelaksanaan Mandiri Fire Safety Audit',
          duration: '20 JP (2 Hari Kerja)',
          legal: 'Kepmenaker 186/1999 & PP 50/2012',
          sourceKey: 'pp50',
          audience: ['Anggota P2K3', 'Internal Fire Auditor', 'Building Operations Lead'],
          moduleTopics: ['Penyusunan Bobot Skor Risiko Keselamatan Bangunan', 'Pemeriksaan Visual 100+ Parameter Proteksi Api Sesuai Regulasi', 'Penyusunan Matriks Tindakan Perbaikan Berbasis Hirarki Mitigasi'],
          faqQ1: 'Apa keuntungan perusahaan melakukan fire safety audit mandiri berkala?',
          faqA1: 'Mampu mendeteksi kerusakan sarana pemadam sejak dini, menghemat premi asuransi aset properti, dan menjamin kesiapan menghadapi inspeksi pengawas ketenagakerjaan.',
          faqQ2: 'Apakah hasil audit internal kebakaran harus dilaporkan ke dinas pemadam?',
          faqA2: 'Hasil audit internal menjadi bagian dari laporan kinerja P2K3 perusahaan yang dirangkum untuk dilaporkan triwulanan ke Disnaker.'
        },
        {
          slug: 'k3-tanggap-darurat-kebakaran-baterai-ev',
          title: 'Pelatihan Mitigasi & Pemadaman Kebakaran Baterai Lithium-Ion (EV & BESS)',
          duration: '20 JP (2 Hari Kerja)',
          legal: 'Standar NFPA 855 & Keselamatan Kendaraan Listrik',
          sourceKey: 'uu1',
          audience: ['Teknisi Bengkel EV', 'Operator Stasiun Pengisian SPKLU', 'Emergency Fire Team Gedung'],
          moduleTopics: ['Mekanisme Thermal Runaway pada Sel Baterai Lithium-Ion', 'Bahaya Gas Toksik Hidrogen Fluorida (HF) & Ledakan Baterai Terperangkap', 'Teknik Pendinginan Ekstrem Menggunakan Volume Air Melimpah & Fire Blanket EV'],
          faqQ1: 'Mengapa APAR jenis powder biasa tidak efektif memadamkan kebakaran baterai EV?',
          faqA1: 'Karena thermal runaway baterai lithium menghasilkan oksigen sendiri di dalam sel sehingga pemadaman hanya bisa dilakukan dengan pendinginan air masif terus-menerus.',
          faqQ2: 'Berapa lama proses pendinginan baterai lithium-ion yang terbakar harus dilakukan?',
          faqA2: 'Pendinginan membutuhkan pemantauan temperatur termal hingga beberapa jam pasca-api padam untuk mencegah penyalaan ulang (re-ignition).'
        },
        {
          slug: 'simulasi-uji-beban-genset-darurat',
          title: 'Pelatihan Pengujian & Pemeliharaan Sumber Daya Listrik Darurat (Genset & UPS)',
          duration: '16 JP (2 Hari Kerja)',
          legal: 'Permenaker No. 12/2015 & NFPA 110',
          sourceKey: 'permen12_2015',
          audience: ['Teknisi Listrik Pabrik', 'MEP Building Lead', 'HSE Officer Fasilitas'],
          moduleTopics: ['Sistem Automatic Transfer Switch (ATS) Waktu Alih Beban (<10 Detik)', 'Uji Beban Penuh Berkala (Load Bank Testing) Genset Darurat Kebakaran', 'Pemeriksaan Cadangan Bahan Bakar Solar Khusus 8 Jam Operasi Darurat'],
          faqQ1: 'Berapa batas waktu maksimal listrik darurat harus menyala saat listrik PLN padam?',
          faqA1: 'Sesuai standar darurat gedung tinggi, genset darurat wajib memulihkan pasokan daya ke pompa pemadam dan lift kebakaran dalam waktu maksimal 10 detik.',
          faqQ2: 'Berapa kali uji coba pemanasan genset darurat harus dijalankan?',
          faqA2: 'Genset darurat wajib diuji coba pemanasan sekurang-kurangnya 1 (satu) kali dalam sepekan selama 15-30 menit.'
        },
        {
          slug: 'k3-instalasi-pipa-gas-medis',
          title: 'Pelatihan Keselamatan Pipa Gas Medis & Proteksi Kebakaran Rumah Sakit',
          duration: '24 JP (3 Hari Kerja)',
          legal: 'Permenkes No. 04 Tahun 2016 & Permenkes No. 66/2016',
          sourceKey: 'permenkes66_2016',
          audience: ['Teknisi Elektromedis', 'Komite K3RS', 'Operator Sentral Gas Medis'],
          moduleTopics: ['Manajemen Sentral Tabung Oksigen (O2), Dinitrogen Oksida (N2O), & Udara Tekan', 'Pemeriksaan Katup Pemutus Darurat Zona (Zone Valve Box / ZVB)', 'Mitigasi Bahaya Kebakaran di Ruang Rawat Intensif & Kamar Operasi'],
          faqQ1: 'Apa risiko terbesar kebocoran pipa gas oksigen di rumah sakit?',
          faqA1: 'Konsentrasi oksigen yang meningkat drastis membuat material di sekitarnya (kain sprei, kasa alkohol) sangat mudah terbakar dan menyala hebat bila ada percikan.',
          faqQ2: 'Di mana lokasi katup pemutus gas darurat (zone valve) harus dipasang?',
          faqA2: 'Dipasang di dinding lorong luar kamar operasi atau ruang rawat intensif pada posisi yang mudah dijangkau saat terjadi kebakaran darurat.'
        }
      ]
    }
  ];

  // Helper generator to populate 8 more sub-domains with 30 records each = 240 records
  const remainingCategories = [
    {
      cat: 'listrik',
      name: 'K3 Kelistrikan & Energi',
      prefix: 'K3 Listrik',
      sourceKey: 'permen12_2015',
      legalDefault: 'Permenaker No. 12 Tahun 2015 & SNI 0225:2020 (PUIL 2020)',
      titles: [
        'Pelatihan Ahli K3 Spesialis Listrik (Kemnaker RI)', 'Pelatihan Teknisi K3 Listrik (Sertifikasi Kemnaker RI)',
        'Pelatihan K3 Pemasangan & Pemeliharaan Instalasi Listrik Industri', 'Pelatihan Sistem Isolasi Energi & Lockout Tagout (LOTO) Kelistrikan',
        'Pelatihan K3 Penyalur Petir & Sistem Pembumian (Grounding Testing)', 'Pelatihan Analisis Bahaya Busur Api Listrik (Arc Flash Hazard Analysis)',
        'Pelatihan K3 Transformator Daya & Gardu Distribusi Listrik (High Voltage)', 'Pelatihan K3 Panel Listrik Rendah-Menengah (LV/MV Switchgear)',
        'Pelatihan Thermografi Inframerah untuk Inspeksi Titik Panas Listrik', 'Pelatihan K3 Pembangkit Listrik Tenaga Surya (PLTS Rooftop & Ground)',
        'Pelatihan K3 Bekerja di Dekat Jaringan Listrik Saluran Udara (SUTET/SUTM)', 'Pelatihan K3 Pengoperasian Genset Pembangkit Listrik Diesel Industri',
        'Pelatihan K3 Instalasi Listrik di Area Berbahaya Ledakan (Hazardous Area Ex)', 'Pelatihan K3 Sistem Uninterruptible Power Supply (UPS) & Ruang Baterai',
        'Pelatihan K3 Perawatan Motor Listrik Induksi & Variable Speed Drive (VSD)', 'Pelatihan K3 Pengujian Tahanan Isolasi Kabel (Insulation Megger Testing)',
        'Pelatihan K3 Keselamatan Kerja Listrik Statis di Industri Kimia & BBM', 'Pelatihan K3 Kelistrikan Fasilitas Maritim & Pelabuhan (Shore Power)',
        'Pelatihan K3 Sistem Proteksi Relai & Pemutus Tenaga Listrik (Circuit Breaker)', 'Pelatihan K3 Pengelasan Listrik (SMAW/GTAW) & Pencegahan Sengatan',
        'Pelatihan K3 Alat Uji Listrik Multimeter & Clamp Meter Terstandar CAT IV', 'Pelatihan K3 Penerangan Tempat Kerja & Audit Efisiensi Lux Permenaker 05',
        'Pelatihan K3 Keselamatan Listrik Pertambangan Terbuka & Bawah Tanah', 'Pelatihan K3 Sistem Daya Cadangan Darurat & ATS Otomatis',
        'Pelatihan K3 Audit Kepatuhan Norma Listrik PP 50/2012 & Permenaker 12/2015', 'Pelatihan K3 Kelistrikan Rumah Sakit & Ruang Tindakan Medis Khusus',
        'Pelatihan K3 Pemasangan Kabel Bawah Tanah & Penelusuran Jalur Utilitas', 'Pelatihan K3 Peralatan Tangan Listrik Portabel (Portable Power Tools)',
        'Pelatihan K3 Pengoperasian Electric Arc Furnace Pabrik Peleburan Besi', 'Pelatihan K3 Manajemen Keselamatan Sistem Transmisi Tenaga Listrik'
      ]
    },
    {
      cat: 'angkat-angkut',
      name: 'Pesawat Angkat & Pesawat Angkut',
      prefix: 'K3 Angkat-Angkut',
      sourceKey: 'permen08_2020',
      legalDefault: 'Permenaker No. 08 Tahun 2020 tentang K3 Pesawat Angkat dan Angkut',
      titles: [
        'Pelatihan Operator Forklift (Kelas I & Kelas II Sertifikasi Kemnaker)', 'Pelatihan Operator Overhead Crane & Gantry Crane (Kelas I & II Kemnaker)',
        'Pelatihan Operator Mobile Crane / Crawler Crane (Sertifikasi Kemnaker)', 'Pelatihan Operator Tower Crane Konstruksi Gedung (Sertifikasi Kemnaker)',
        'Pelatihan Juru Ikat Beban (Rigger) & Slinger Bersertifikat Kemnaker', 'Pelatihan Operator Excavator & Backhoe Loader (Lisensi SIO Kemnaker)',
        'Pelatihan Operator Wheel Loader & Dozer Industri Tambang & Pabrik', 'Pelatihan Operator Dump Truck / Hauling Articulated Truck Tambang',
        'Pelatihan Operator Reach Stacker & Container Handler Pelabuhan', 'Pelatihan Operator Manlift / Boom Lift / Scissor Lift (MEWP)',
        'Pelatihan K3 Penyusunan Lifting Plan & Rencana Pengangkatan Kritis', 'Pelatihan Inspeksi Riksa Uji Sling Kawat Baja (Wire Rope Inspection)',
        'Pelatihan Inspeksi Riksa Uji Webbing Sling & Chain Sling Angkat Beban', 'Pelatihan Inspeksi Kelayakan Shackle, Hook, Eyebolt & Aksesoris Lifting',
        'Pelatihan K3 Pengangkatan Beban Tandem (Tandem Lifting Operation)', 'Pelatihan K3 Pengoperasian Hoist Listrik & Monorail Workshop',
        'Pelatihan K3 Pengoperasian Truk Derek (Towing Truck) & Recovery Vehicle', 'Pelatihan K3 Operator Side Loader & Narrow Aisle Truck Pergudangan',
        'Pelatihan K3 Operator Roller Vibro & Alat Pemadat Aspal Jalan Raya', 'Pelatihan K3 Operator Grader & Pemeliharaan Jalan Tambang',
        'Pelatihan K3 Operator Concrete Pump Truck & Truk Mixer Semen', 'Pelatihan K3 Operator Pile Driver & Mesin Tiang Pancang Proyek',
        'Pelatihan K3 Conveyor Belt Batubara & Material Handling Curah Massal', 'Pelatihan K3 Escalator & Passenger Conveyor Gedung Komersial',
        'Pelatihan K3 Lift Penumpang & Lift Barang Gedung (Permenaker 06/2017)', 'Pelatihan Riksa Uji Ketebalan & NDT Struktur Boom Crane Angkat',
        'Pelatihan K3 Rigging Engineering & Perhitungan Sudut Tegangan Tali', 'Pelatihan K3 Pengoperasian Automated Guided Vehicles (AGV) Pabrik',
        'Pelatihan K3 Keselamatan Lalu Lintas Alat Berat di Fasilitas Industri', 'Pelatihan Ahli K3 Spesialis Pesawat Angkat & Angkut Kemnaker RI'
      ]
    },
    {
      cat: 'uap-bejana',
      name: 'Pesawat Uap & Bejana Tekan',
      prefix: 'K3 Uap & Bejana Tekan',
      sourceKey: 'permen37_2016',
      legalDefault: 'Permenaker No. 37 Tahun 2016 & Permenaker No. 01/1988',
      titles: [
        'Pelatihan Operator Boiler / Ketel Uap (Kelas I & II Lisensi Kemnaker)', 'Pelatihan Ahli K3 Spesialis Pesawat Uap & Bejana Tekanan (Kemnaker)',
        'Pelatihan K3 Pengoperasian Bejana Tekan Kompresor Udara Pabrik', 'Pelatihan K3 Tangki Timbun Bahan Bakar Minyak & Gas (Storage Tank)',
        'Pelatihan Inspeksi & Pengujian Katup Pengaman Tekanan (Safety Valve Testing)', 'Pelatihan K3 Pengoperasian Autoclave & Sterilisator Tekanan Tinggi',
        'Pelatihan K3 Bejana Transport & Truk Tangki Gas Cair Bertekanan', 'Pelatihan K3 Sistem Perpipaan Tekanan Tinggi (Pressure Piping ASME B31)',
        'Pelatihan K3 Pemeliharaan Burner & Sistem Pembakaran Boiler Industri', 'Pelatihan K3 Pengolahan Air Umpan Boiler (Boiler Water Treatment & Blowdown)',
        'Pelatihan K3 Ketel Uap Pembangkit Listrik Tenaga Uap (PLTU Supercritical)', 'Pelatihan K3 Tangki Kriogenik Gas Oksigen & Nitrogen Cair',
        'Pelatihan K3 Bejana Reaktor Kimia Bertekanan & Eksotermik', 'Pelatihan K3 Tabung Gas Bertekanan (Gas Cylinder Storage & Manifold)',
        'Pelatihan Riksa Uji Non-Destructive Testing (NDT) Bejana Tekanan', 'Pelatihan Uji Ketebalan Ultrasonik (UT Thickness) Dinding Tangki & Boiler',
        'Pelatihan K3 Hydrostatic & Pneumatic Pressure Testing Jalur Pipa Gas', 'Pelatihan K3 Heat Exchanger (Penukar Panas Shell & Tube / Plate)',
        'Pelatihan K3 Deaerator & Sistem Kondensat Air Uap Panas Pabrik', 'Pelatihan K3 Economizer & Superheater Ketel Uap Efisiensi Energi',
        'Pelatihan K3 Mitigasi Bahaya Ledakan BLEVE pada Tangki Tekanan Gas', 'Pelatihan K3 Tangki Timbun Bahan Kimia Asam Sulfat & Korosif',
        'Pelatihan K3 Bejana Tekan Silo Bertekanan Pneumatic Transfer Semen', 'Pelatihan K3 Ruang Kompresor Amonia Pendingin Es Skala Besar',
        'Pelatihan K3 Inspeksi Korosi Bawah Insulasi (Corrosion Under Insulation / CUI)', 'Pelatihan K3 Rekayasa Integritas Tekanan (Asset Integrity Management)',
        'Pelatihan K3 Pemanas Fluida Termal (Thermal Oil Heater System)', 'Pelatihan K3 Tangki Digester Biogas Bertekanan Pabrik Kelapa Sawit',
        'Pelatihan K3 Sistem Flare & Venting Pelepasan Tekanan Gas Kilang', 'Pelatihan K3 Audit Kepatuhan Regulasi Bejana Tekan Permenaker 37/2016'
      ]
    },
    {
      cat: 'kimia',
      name: 'Bahan Kimia & B3',
      prefix: 'K3 Kimia & B3',
      sourceKey: 'kep187_1999',
      legalDefault: 'Kepmenaker No. KEP.187/MEN/1999 tentang Pengendalian Bahan Kimia Berbahaya',
      titles: [
        'Pelatihan Ahli K3 Kimia (Sertifikasi Resmi Kemnaker RI)', 'Pelatihan Petugas K3 Kimia (Sertifikasi Resmi Kemnaker RI)',
        'Pelatihan Pengelolaan Lembar Data Keselamatan Bahan (MSDS / SDS 16 Bab)', 'Pelatihan Klasifikasi & Pelabelan Bahan Kimia Berdasarkan Sistem GHS',
        'Pelatihan K3 Penyimpanan Bahan Kimia Berbahaya & Inkompatibilitas Matriks', 'Pelatihan K3 Penanganan Tumpahan Bahan Kimia (Chemical Spill Response)',
        'Pelatihan K3 Penanganan Gas Beracun Asam Sulfida (H2S Awareness & Rescue)', 'Pelatihan K3 Penanganan Gas Klorin (Cl2) Fasilitas Pengolahan Air',
        'Pelatihan K3 Penanganan Gas Amonia (NH3) di Pabrik Pupuk & Pendingin', 'Pelatihan K3 Penggunaan Bahan Kimia Karsinogenik, Mutagenik & Toksik',
        'Pelatihan K3 Pengendalian Bahaya Asbes & Penghancuran Bangunan (Asbestos Removal)', 'Pelatihan K3 Laboratorium Riset & Pengujian Bahan Kimia Khusus',
        'Pelatihan K3 Pengangkutan Bahan Berbahaya & Beracun (B3) Darat-Laut', 'Pelatihan K3 Pengelolaan Gudang Bahan Kimia Khusus Pelarut Organik',
        'Pelatihan K3 Pembersihan Tangki Kimia & Pengendalian Sludge Residu', 'Pelatihan K3 Penggunaan Stasiun Eyewash & Emergency Shower Terstandar',
        'Pelatihan K3 Pengelolaan Limbah Bahan Berbahaya & Beracun (Limbah B3)', 'Pelatihan K3 Pengendalian Reaktivitas Kimia Eksotermik & Polimerisasi',
        'Pelatihan K3 Penggunaan Alat Pelindung Diri Kimia (Coverall Tychem & Sarung Tangan)', 'Pelatihan K3 Dekontaminasi Personel & Peralatan Pasca-Insiden Kimia',
        'Pelatihan K3 Tanggap Darurat Kebocoran Gas Beracun di Area Industri', 'Pelatihan K3 Industri Cat, Pelarut Thinners & Resin Sintetis',
        'Pelatihan K3 Industri Pestisida, Insektisida & Formulasi Pertanian', 'Pelatihan K3 Pengolahan Logam Electroplating Menggunakan Sianida & Asam',
        'Pelatihan K3 Penggunaan Gas Asetilen & Oksigen untuk Fabrikasi Logam', 'Pelatihan K3 Bahan Peledak Komersial Industri Pertambangan & Kuari',
        'Pelatihan K3 Pengujian Tingkat Konsentrasi Uap Bahan Kimia di Udara Kerja', 'Pelatihan K3 Penanganan Asam Kuat (Asam Klorida, Nitrat, Sulfat, HF)',
        'Pelatihan K3 Penanganan Basa Kuat (Natrium Hidroksida & Kalium Hidroksida)', 'Pelatihan K3 Audit Kepatuhan Dokumen Pengendalian Bahan Kimia Kepmenaker 187'
      ]
    },
    {
      cat: 'higiene',
      name: 'Higiene Industri & Lingkungan Kerja',
      prefix: 'Higiene Industri',
      sourceKey: 'permen05_2018',
      legalDefault: 'Permenaker No. 05 Tahun 2018 tentang K3 Lingkungan Kerja',
      titles: [
        'Pelatihan Ahli K3 Lingkungan Kerja Muda / Madya / Utama (Kemnaker RI)', 'Pelatihan Higiene Industri Muda (HIMU Sertifikasi BNSP / Kemnaker)',
        'Pelatihan Higiene Industri Madya (HIMA Sertifikasi BNSP / Kemnaker)', 'Pelatihan Higiene Industri Utama (HIU Sertifikasi BNSP / Kemnaker)',
        'Pelatihan Pengukuran & Pengendalian Kebisingan Tempat Kerja Permenaker 05', 'Pelatihan Program Konservasi Pendengaran (Hearing Conservation Program / HCP)',
        'Pelatihan Pengukuran & Mitigasi Tekanan Panas Kerja (Heat Stress Index ISBB)', 'Pelatihan Pengukuran & Mitigasi Getaran Lengan-Tangan dan Seluruh Tubuh (HAVS/WBV)',
        'Pelatihan Evaluasi Kualitas Udara Dalam Ruangan (Indoor Air Quality / IAQ)', 'Pelatihan Desain & Pengujian Ventilasi Pembuangan Lokal (LEV Exhaust Hood)',
        'Pelatihan Pengambilan Sampel Udara Personal (Personal Dust & Vapor Air Sampling)', 'Pelatihan Evaluasi Ergonomi Tempat Kerja Menggunakan Metode RULA, REBA & NIOSH',
        'Pelatihan Pencegahan Gangguan Tulang Otot Rangka Akibat Kerja (Ergonomi MSDs)', 'Pelatihan Pengendalian Faktor Bahaya Biologis (Biohazard & Virus Patogen)',
        'Pelatihan Manajemen Psikologi Kerja & Pencegahan Stres / Burnout Karyawan', 'Pelatihan Pengukuran Intensitas Pencahayaan (Lux Meter) & Standar Visual Task',
        'Pelatihan Pengendalian Radiasi Non-Pengion (Elektromagnetik, UV, Laser, Gelombang Mikro)', 'Pelatihan Pengelolaan Higiene Fasilitas Sanitasi, Loker & Toilet Pabrik',
        'Pelatihan Higiene Pengolahan Makanan Kantin Pabrik & Pencegahan Keracunan Massal', 'Pelatihan Pengukuran Paparan Debu Silika & Program Pencegahan Silikosis',
        'Pelatihan Pemantauan Pajanan Biologis (Biological Exposure Indices / BEI)', 'Pelatihan K3 Pengelolaan Kualitas Air Minum & Air Bersih di Tempat Kerja',
        'Pelatihan K3 Ruang Bersih (Cleanroom Classification & Contamination Control)', 'Pelatihan Penilaian Risiko Kesehatan Kerja (Health Risk Assessment / HRA)',
        'Pelatihan Mitigasi Bahaya Bekerja di Lingkungan Suhu Dingin Ekstrem (Cold Stress)', 'Pelatihan Pengujian Efisiensi Filter Udara Partikulat Efisiensi Tinggi (HEPA/ULPA)',
        'Pelatihan Uji Kecocokan Masker Respirator (Respirator Fit Testing QLFT/QNFT)', 'Pelatihan Pengendalian Emisi Cerobong Asap & Wet Scrubber Pabrik',
        'Pelatihan K3 Ergonomi Stasiun Kerja Operator Komputer & Desain VDT', 'Pelatihan Audit Kepatuhan Lingkungan Kerja Sesuai Standar Permenaker 05/2018'
      ]
    },
    {
      cat: 'konstruksi',
      name: 'Konstruksi Bangunan & Sipil',
      prefix: 'K3 Konstruksi',
      sourceKey: 'pupr10_2021',
      legalDefault: 'Permenaker No. 01/1980 & Permen PUPR No. 10/2021 (SMKK)',
      titles: [
        'Pelatihan Ahli K3 Konstruksi (Muda, Madya, Utama Sertifikasi Kemnaker/BNSP)', 'Pelatihan Petugas Keselamatan Konstruksi (SMKK PUPR No. 10/2021)',
        'Pelatihan Penyusunan Rencana Keselamatan Konstruksi (RKK Tender & Pelaksanaan)', 'Pelatihan K3 Pekerjaan Penggalian Tanah Dalam (Trenching & Excavation Shoring)',
        'Pelatihan K3 Scaffolding / Perancah (Operator & Supervisor Scaffolding Kemnaker)', 'Pelatihan Inspeksi Kelayakan & Pemasangan Scaffolding Tag (Scafftag System)',
        'Pelatihan K3 Pekerjaan Pengecoran Beton Massal & Pembongkaran Bekisting', 'Pelatihan K3 Pemasangan Struktur Rangka Baja Gedung Tinggi (Steel Erection)',
        'Pelatihan K3 Bekerja di Atap & Pemasangan Rangka Atap Baja Ringan (Roofing)', 'Pelatihan K3 Konstruksi Jembatan Bentang Panjang & Girder Launcher',
        'Pelatihan K3 Konstruksi Terowongan (Tunneling & Underground Civil Works)', 'Pelatihan K3 Pekerjaan Pembongkaran Struktur Bangunan (Demolition Safety)',
        'Pelatihan K3 Konstruksi Bendungan, Saluran Irigasi & Bangunan Air', 'Pelatihan K3 Proyek Jalan Tol, Aspal Panas & Manajemen Lalu Lintas Proyek',
        'Pelatihan K3 Proyek Kereta Api, Jalur Rel & Sistem Sinyal Terpadu', 'Pelatihan K3 Pekerjaan Pemancangan Tiang Pancang (Piling Rig Operation)',
        'Pelatihan K3 Pekerjaan Pengeboran Pondasi Bored Pile & Dinding Diafragma', 'Pelatihan K3 Sistem Jaring Pengaman (Safety Net) & Barikade Perimeter Konstruksi',
        'Pelatihan K3 Keselamatan Pekerjaan Panas Pengelasan & Pemotongan Besi Proyek', 'Pelatihan K3 Alat Angkat Proyek: Tower Crane, Passenger Hoist & Winch',
        'Pelatihan K3 Pengelolaan Bahan Kimia Admixture Beton & Epoksi Pelapis Lantai', 'Pelatihan K3 Kesiapsiagaan Evakuasi Bencana Alam di Proyek Konstruksi',
        'Pelatihan K3 Manajemen Debu Pasir, Semen & Partikulat di Area Proyek', 'Pelatihan K3 Ergonomi Angkat Beban Manual Material Konstruksi Berat',
        'Pelatihan K3 Pemeriksaan Kesehatan Tenaga Kerja Konstruksi (Fit to Work Proyek)', 'Pelatihan K3 Pengawasan Subkontraktor & Mandor Harian Proyek Konstruksi',
        'Pelatihan K3 Inspeksi APD Khusus Konstruksi (Helm Chinstrap, Harness, Sepatu Baja)', 'Pelatihan K3 Pemasangan Facade Kaca Gedung Bertingkat & Gondola',
        'Pelatihan K3 Pengoperasian Genset & Panel Listrik Sementara (Temporary Power)', 'Pelatihan Audit Sistem Manajemen Keselamatan Konstruksi (SMKK) PUPR'
      ]
    },
    {
      cat: 'ketinggian',
      name: 'Bekerja di Ketinggian & Ruang Terbatas',
      prefix: 'Ketinggian & Ruang Terbatas',
      sourceKey: 'permen09_2016',
      legalDefault: 'Permenaker No. 09 Tahun 2016 & SE Menakertrans No. 01/2012',
      titles: [
        'Pelatihan Tenaga Kerja Bangunan Tinggi Tingkat 1 (TKBT 1 Kemnaker RI)', 'Pelatihan Tenaga Kerja Bangunan Tinggi Tingkat 2 (TKBT 2 Kemnaker RI)',
        'Pelatihan Tenaga Kerja Pada Ketinggian Tingkat 1 (TKPK 1 Rope Access Kemnaker)', 'Pelatihan Tenaga Kerja Pada Ketinggian Tingkat 2 (TKPK 2 Rope Access Kemnaker)',
        'Pelatihan Tenaga Kerja Pada Ketinggian Tingkat 3 (TKPK 3 Supervisor Kemnaker)', 'Pelatihan Teknisi K3 Ruang Terbatas Masuk & Bekerja (Confined Space Entrant)',
        'Pelatihan Petugas Madya Ruang Terbatas (Confined Space Attendant Kemnaker)', 'Pelatihan Petugas Utama Ruang Terbatas (Confined Space Entry Supervisor)',
        'Pelatihan Petugas Gas Tester (Authorised Gas Tester / AGT Ruang Terbatas)', 'Pelatihan Penyelamatan Korban di Ketinggian (Working at Height Rescue)',
        'Pelatihan Penyelamatan Korban di Ruang Terbatas (Confined Space Rescue)', 'Pelatihan Inspeksi & Perawatan Alat Pelindung Jatuh (Full Body Harness & Lanyard)',
        'Pelatihan Pemasangan Tali Keselamatan Horisontal & Vertikal (Lifeline System)', 'Pelatihan Penggunaan Alat Penahan Jatuh Otomatis (Retractable Fall Arrester)',
        'Pelatihan K3 Pengoperasian Mobile Elevating Work Platform (Scissor/Boom Lift)', 'Pelatihan K3 Pengoperasian Gondola Gedung Bertingkat (Lisensi SIO Kemnaker)',
        'Pelatihan K3 Pemasangan & Penggunaan Jaring Pengaman Tangkap Jatuh (Safety Net)', 'Pelatihan K3 Bekerja di Atap Rapuh & Struktur Permukaan Terbuka (Fragile Roof)',
        'Pelatihan K3 Bekerja di Menara Transmisi & Tiang Listrik Saluran Udara', 'Pelatihan K3 Pembersihan Kaca Luar Gedung Tinggi Menggunakan Akses Tali',
        'Pelatihan K3 Pembersihan Tangki Kapal, Silo & Bunker Menggunakan Blower Ventilasi', 'Pelatihan K3 Bekerja di Dalam Gorong-Gorong, Saluran Pembuangan & Manhole',
        'Pelatihan K3 Penyetelan Tripod Winch & Katrol Penyelamat Masuk Tangki', 'Pelatihan K3 Penggunaan Alat Bantu Pernapasan Udara Mandiri (SCBA / Airline System)',
        'Pelatihan K3 Isolasi Pipa Ruang Terbatas Menggunakan Blind Flange & Spadework', 'Pelatihan K3 Prosedur Izin Masuk Ruang Terbatas (Confined Space Entry Permit)',
        'Pelatihan K3 Perhitungan Jarak Jatuh Bebas (Fall Clearance Calculation)', 'Pelatihan K3 Anchoring Point Rigging & Uji Tarik Titik Angkur Ketinggian',
        'Pelatihan K3 Penanganan Trauma Suspensi Tali Jatuh (Suspension Trauma Mitigation)', 'Pelatihan Audit Kepatuhan Regulasi Ketinggian Permenaker 09/2016'
      ]
    },
    {
      cat: 'medis-p3k',
      name: 'Kesehatan Kerja & Pertolongan Pertama (P3K)',
      prefix: 'Kesehatan Kerja & P3K',
      sourceKey: 'permen15_2008',
      legalDefault: 'Permenaker No. PER.15/MEN/VIII/2008 tentang P3K di Tempat Kerja',
      titles: [
        'Pelatihan Petugas P3K di Tempat Kerja (Lisensi Resmi Kemnaker RI 30 JP)', 'Pelatihan Dokter Perusahaan (Sertifikasi Hiperkes Kemnaker RI)',
        'Pelatihan Paramedis Perusahaan (Sertifikasi Hiperkes Kemnaker RI)', 'Pelatihan Resusitasi Jantung Paru (RJP/CPR) & Penggunaan AED di Tempat Kerja',
        'Pelatihan Penanganan Trauma Gawat Darurat & Pendarahan Hebat Lapangan', 'Pelatihan Pemasangan Bidai, Penyangga Leher (Neck Collar) & Evakuasi Cedera Tulang',
        'Pelatihan Penanganan Luka Bakar Termal, Listrik & Kimia di Tempat Kerja', 'Pelatihan Pengelolaan Kotak P3K Standar Bentuk A, B, C Kemnaker RI',
        'Pelatihan Pemeriksaan Kesehatan Awal, Berkala & Khusus Karyawan (MCU K3)', 'Pelatihan Manajemen Kelaikan Kerja (Fit to Work Assessment & Return to Work)',
        'Pelatihan Pencegahan & Pengendalian Tuberkulosis (TBC) di Tempat Kerja', 'Pelatihan Pencegahan & Pengendalian HIV/AIDS di Lingkungan Kerja Kemnaker',
        'Pelatihan Pencegahan Penyalahgunaan Narkoba & Tes Urine di Tempat Kerja', 'Pelatihan Penanganan Heat Stroke & Dehidrasi Berat di Tempat Kerja Panas',
        'Pelatihan Pengelolaan Ruang Pertolongan Pertama (First Aid Room) Fasilitas Pabrik', 'Pelatihan Penanganan Keracunan Makanan Massal & Toksikologi Darurat',
        'Pelatihan Penanganan Reaksi Alergi Berat (Syok Anafilaktik) & Epipen', 'Pelatihan Ergonomi Pencegahan Nyeri Punggung Bawah (Low Back Pain / LBP)',
        'Pelatihan Program Kesehatan Mental Karyawan & Konseling Stres Kerja', 'Pelatihan Pengelolaan Fasilitas Ruang Laktasi & K3 Pekerja Perempuan Hamil',
        'Pelatihan Program Promosi Kesehatan & Kebugaran Pekerja (Corporate Wellness)', 'Pelatihan Penanganan Sengatan Serangga, Hewan Berbisa & Gigitan Ular Proyek',
        'Pelatihan Evakuasi Medis Darurat (Medical Evacuation / Medevac) Remote Site', 'Pelatihan Pemeriksaan Audiometri Nada Murni & Penilaian Penurunan Pendengaran',
        'Pelatihan Pemeriksaan Spirometri Fungsi Paru Karyawan Pabrik Berdebu', 'Pelatihan Penilaian Cacat & Kompensasi Kecelakaan Kerja Jamsostek/BPJS Ketenagakerjaan',
        'Pelatihan Pencegahan Penyakit Akibat Kerja (PAK) Berdasarkan Perpres 44/2019', 'Pelatihan Penanganan Korban Tersedak Benda Asing (Choking Heimlich Maneuver)',
        'Pelatihan Manajemen Kelelahan Kerja (Fatigue Risk Management System / FRMS)', 'Pelatihan Audit Kepatuhan Pelayanan Kesehatan Kerja Sesuai Permenaker 03/1982'
      ]
    }
  ];

  // Process the first 2 static domain seed arrays (Kelembagaan & Kebakaran)
  for (const d of domains) {
    for (const seed of d.seeds) {
      const slug = seed.slug;
      const fullTitle = seed.title;
      const src = officialSources[seed.sourceKey] || officialSources[d.sourceKey] || officialSources.uu1;

      records.push({
        section: 'pelatihan',
        slug,
        title: fullTitle,
        metaTitle: `${fullTitle} | Jadwal & Biaya Resmi`,
        description: `Informasi lengkap ${fullTitle}: durasi standar ${seed.duration}, dasar hukum ${seed.legal}, silabus materi, persyaratan peserta, dan konsultasi pendaftaran in-house/public.`,
        answer: `${fullTitle} adalah program pembinaan dan pelatihan keselamatan kerja resmi berdurasi ${seed.duration} berdasarkan ${seed.legal} yang dirancang untuk membekali tenaga kerja dengan keahlian teknis operasional dan pemenuhan regulasi keselamatan kerja di perusahaan.`,
        highlights: [
          `Durasi Standar: ${seed.duration}`,
          `Landasan Hukum: ${seed.legal}`,
          `Sasaran: ${seed.audience[0]} & Tim Terkait`,
          'Metode: Public Batch (Blended Online) / In-House Training'
        ],
        courseDetails: {
          level: `Program Pembinaan ${d.name}`,
          duration: seed.duration,
          method: 'Blended Training (Online Teori Interaktif + PKL Observasi / Tatap Muka Praktik)',
          legalBasis: seed.legal,
          targetAudience: seed.audience,
          prerequisites: [
            'Scan KTP / Kartu Identitas yang masih berlaku',
            'Scan Ijazah Pendidikan Terakhir sesuai kualifikasi program',
            'Surat Tugas / Rekomendasi dari Perusahaan (untuk peserta utusan perusahaan)',
            'Pas foto formal background merah / biru'
          ],
          certificationOutput: [
            `Sertifikat Pelatihan Resmi Berdasarkan ${seed.legal}`,
            'Surat Keterangan Lulus Evaluasi Kompetensi',
            'Lisensi Kewenangan / Kartu Penunjukan Kerja (sesuai skema kementerian/badan)'
          ],
          syllabusModules: [
            { module: 'Modul Dasar & Landasan Regulasi', topics: [seed.moduleTopics[0], 'Kebijakan Nasional K3 & Tanggung Jawab Hukum'] },
            { module: 'Modul Inti Teknis & Identifikasi Bahaya', topics: [seed.moduleTopics[1], 'Standar SOP Kerja Aman & Alat Pelindung Diri'] },
            { module: 'Modul Praktik, PKL & Evaluasi Akhir', topics: [seed.moduleTopics[2], 'Evaluasi Teori Komprehensif & Studi Kasus Lapangan'] }
          ],
          priceInfo: 'Investasi pelatihan mencakup modul resmi, bimbingan instruktur profesional, fasilitas PKL/praktik, ujian evaluasi, dan pengurusan sertifikat. Tersedia penawaran khusus paket in-house training perusahaan.'
        },
        blocks: [
          {
            heading: `Urgensi & Dasar Hukum ${fullTitle}`,
            paragraphs: [
              `Penerapan ${fullTitle} merupakan wujud nyata kepatuhan perusahaan terhadap peraturan perundang-undangan ketenagakerjaan, khususnya ${seed.legal}. Pelaksanaan program ini ditujukan untuk mencegah risiko kecelakaan kerja, penyakit akibat kerja (PAK), serta kerugian aset operasional.`,
              'Setiap tempat kerja yang memiliki potensi bahaya terkait diwajibkan oleh regulator untuk menempatkan personel yang telah memenuhi standar kualifikasi kompetensi dan memiliki legalitas penunjukan resmi.'
            ]
          },
          {
            heading: 'Kurikulum & Pendekatan Praktik Pembelajaran',
            paragraphs: [
              `Kurikulum pembinaan ini disusun secara komprehensif dengan total bobot ${seed.duration}, menggabungkan pemahaman teori regulasi, analisis studi kasus nyata, simulasi teknis, serta evaluasi komprehensif.`,
              'Peserta dibimbing langsung oleh instruktur berpengalaman, pejabat pengawas ketenagakerjaan, dan praktisi industri senior guna memastikan materi dapat langsung diaplikasikan di fasilitas kerja masing-masing.'
            ],
            bullets: seed.moduleTopics
          },
          {
            heading: 'Format Penyelenggaraan: Public Batch vs In-House Training',
            paragraphs: [
              'PT Kreasi Ultimate Berjaya menyelenggarakan pelatihan ini dalam 2 opsi format pelaksanaan yang fleksibel:',
            ],
            bullets: [
              'Public Batch (Blended Learning): Pilihan tepat bagi peserta individu atau perusahaan yang mengirimkan 1-3 orang staf dengan jadwal rutin setiap bulan.',
              'In-House Training (Khusus Perusahaan): Pelatihan diselenggarakan eksklusif on-site di lokasi pabrik/fasilitas perusahaan Anda di seluruh Indonesia dengan jadwal dan studi kasus yang disesuaikan 100% pada risiko operasional internal.'
            ]
          },
          {
            heading: 'Tahapan Konsultasi & Pendaftaran di PT Kreasi Ultimate Berjaya',
            paragraphs: [
              'Proses pendaftaran dirancang transparan dan terverifikasi untuk menjamin keamanan administrasi peserta:',
            ],
            bullets: [
              '1. Konsultasi Kebutuhan & Pre-Screening Berkas: Tim admisi kami memeriksa kesesuaian ijazah dan dokumen prasyarat sebelum proses registrasi.',
              '2. Konfirmasi Jadwal & Pembayaran: Registrasi hanya diproses pada jadwal batch yang telah terkonfirmasi kuotanya.',
              '3. Pelaksanaan Pembinaan & Evaluasi: Peserta mendapatkan modul lengkap, bimbingan materi, sesi praktik, dan pendampingan ujian resmi.',
              '4. Penyerahan Sertifikat & Lisensi: Dokumen sertifikat pembinaan dan kartu lisensi diserahterimakan secara aman dan tertelusur.'
            ]
          }
        ],
        faqs: [
          { question: seed.faqQ1, answer: seed.faqA1 },
          { question: seed.faqQ2, answer: seed.faqA2 },
          { question: `Bagaimana cara meminta proposal penawaran untuk ${fullTitle}?`, answer: 'Anda dapat langsung menghubungi konsultan PT Kreasi Ultimate Berjaya via WhatsApp untuk mendapatkan proposal resmi, silabus rinci, dan penawaran harga khusus instansi/perusahaan.' }
        ],
        related: ['panduan/syarat-ahli-k3-umum', 'panduan/biaya-pelatihan-k3', 'perbandingan/bnsp-vs-kemnaker', 'jadwal'],
        sources: [src, officialSources.uu1, officialSources.pp50],
        status: 'published',
        publishedAt: '2026-08-01',
        updatedAt: '2026-09-01',
        indexable: true,
        intent: `pelatihan ${slug} jadwal biaya materi syarat`,
        primaryKeyword: `pelatihan ${slug.replace(/-/g, ' ')}`,
        searchIntent: `informasi jadwal, silabus materi, syarat pendaftaran, dan biaya ${fullTitle}`,
        intentType: 'commercial',
        parentTopic: `Pelatihan ${d.name}`,
        cannibalizationGroup: `pelatihan-${d.cat}`,
        contentKind: 'program',
        primaryCtaText: `Tanya Jadwal ${fullTitle.split('(')[0].trim()}`,
        primaryCtaIntent: 'jadwal',
        secondaryCtaText: 'Minta Penawaran In-House Training',
        secondaryCtaIntent: 'perusahaan'
      });
    }
  }

  // Process the remaining 8 categories (30 titles each = 240 records)
  for (const cat of remainingCategories) {
    const src = officialSources[cat.sourceKey] || officialSources.uu1;
    for (let i = 0; i < cat.titles.length; i++) {
      const fullTitle = cat.titles[i];
      const slug = `${fullTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`.replace(/^-|-$/g, '');
      const durationStr = fullTitle.includes('Ahli K3') ? '120 JP (12 Hari Kerja)' : fullTitle.includes('Teknisi') || fullTitle.includes('Auditor') ? '40 JP (4 Hari Kerja)' : '24 JP (3 Hari Kerja)';
      const keyword = `pelatihan ${slug.replace(/pelatihan-/, '').replace(/-/g, ' ')}`.trim();

      records.push({
        section: 'pelatihan',
        slug,
        title: fullTitle,
        metaTitle: `${fullTitle} | Jadwal & Biaya Resmi`,
        description: `Informasi lengkap ${fullTitle}: durasi standar ${durationStr}, dasar hukum ${cat.legalDefault}, silabus materi teknis, syarat peserta, dan konsultasi pendaftaran resmi.`,
        answer: `${fullTitle} adalah program pembinaan dan pelatihan keselamatan kerja resmi berdurasi ${durationStr} sesuai ${cat.legalDefault} yang dirancang untuk membekali tenaga kerja dengan keahlian teknis operasional, mitigasi risiko di tempat kerja, serta pemenuhan regulasi K3 nasional.`,
        highlights: [
          `Durasi Standar: ${durationStr}`,
          `Landasan Regulasi: ${cat.legalDefault}`,
          `Kategori: ${cat.name}`,
          'Penyelenggaraan: Blended Online / In-House On-Site'
        ],
        courseDetails: {
          level: `Program Pembinaan ${cat.name}`,
          duration: durationStr,
          method: 'Blended Learning (Online Teori Interaktif + PKL Lapangan / Praktik Terpadu)',
          legalBasis: cat.legalDefault,
          targetAudience: [
            'HSE Officer & Pengawas Keselamatan Lapangan',
            'Supervisor Operasional, Teknisi & Engineer Terkait',
            'Manajer Fasilitas & Anggota P2K3 Perusahaan'
          ],
          prerequisites: [
            'Scan KTP / Identitas diri yang masih berlaku',
            'Scan Ijazah pendidikan terakhir (minimal SLTA/D3/S1 sesuai skema)',
            'Surat Penugasan Perusahaan (khusus peserta utusan instansi)',
            'Pas foto formal background merah / biru'
          ],
          certificationOutput: [
            `Sertifikat Pelatihan Resmi Terakreditasi Berdasarkan ${cat.legalDefault}`,
            'Surat Keterangan Lulus Evaluasi Pembinaan',
            'Lisensi Kewenangan / SIO / SKP (sesuai regulasi penunjukan kementerian/badan)'
          ],
          syllabusModules: [
            { module: 'Kelompok Dasar: Kebijakan & Regulasi K3', topics: ['Kebijakan Nasional K3 & Tanggung Jawab Hukum Ketenagakerjaan', `Norma Keselamatan Kerja Bidang ${cat.name}`] },
            { module: 'Kelompok Inti: Identifikasi Bahaya & Standar Operasional', topics: ['Metode Penilaian Risiko (HIRADC / JSA) di Tempat Kerja', 'Penerapan SOP, LOTO & Prosedur Pencegahan Insiden'] },
            { module: 'Kelompok Penunjang: Praktik, PKL & Evaluasi', topics: ['Praktik Lapangan / Studi Kasus Fasilitas Industri', 'Ujian Evaluasi Teori & Wawancara Pemahaman Teknis'] }
          ],
          priceInfo: 'Investasi pelatihan mencakup modul lengkap, bimbingan instruktur profesional, sertifikasi resmi, dan evaluasi kelulusan. Tersedia penawaran khusus untuk paket in-house training perusahaan.'
        },
        blocks: [
          {
            heading: `Urgensi & Landasan Regulasi ${fullTitle}`,
            paragraphs: [
              `Penyelenggaraan ${fullTitle} mengacu pada regulasi ${cat.legalDefault} dan UU No. 1 Tahun 1970. Program ini membekali peserta dengan kompetensi teruji untuk mengidentifikasi potensi bahaya, mencegah insiden fatalitas, dan memenuhi standar kepatuhan hukum ketenagakerjaan di tempat kerja.`,
              'Perusahaan yang mengoperasikan peralatan atau proses kerja terkait diwajibkan memastikan seluruh operator dan pengawas telah memiliki kualifikasi pembinaan dan lisensi yang sah.'
            ]
          },
          {
            heading: 'Struktur Kurikulum & Pendekatan Praktik',
            paragraphs: [
              `Pembinaan berdurasi ${durationStr} ini mencakup pembekalan teori komprehensif, telaah studi kasus industri, praktik inspeksi, dan ujian evaluasi kelulusan standar.`,
              'Materi disampaikan oleh praktisi senior bersertifikat dan pejabat pengawas ketenagakerjaan dengan metode interaktif.'
            ],
            bullets: [
              'Pemahaman mendalam tentang peraturan perundang-undangan keselamatan kerja terkait',
              'Teknik identifikasi bahaya, penilaian risiko, dan analisis keselamatan kerja (JSA/HIRADC)',
              'Standar operasional prosedur aman, pemeliharaan preventif, dan penanganan darurat',
              'Penyusunan laporan inspeksi teknis dan evaluasi kelayakan peralatan'
            ]
          },
          {
            heading: 'Metode Pelaksanaan: Public Batch vs In-House Training',
            paragraphs: [
              'Pelatihan dapat diselenggarakan secara fleksibel sesuai kebutuhan:',
            ],
            bullets: [
              'Public Batch: Kelas publik terjadwal bulanan dengan format Blended Learning yang efisien.',
              'In-House Training: Pelatihan on-site langsung di pabrik atau fasilitas operasional perusahaan Anda di seluruh Indonesia dengan materi yang dikustomisasi sesuai kondisi lapangan.'
            ]
          },
          {
            heading: 'Alur Konsultasi & Pendaftaran di PT Kreasi Ultimate Berjaya',
            paragraphs: [
              'Dapatkan layanan pendampingan pendaftaran yang aman dan profesional:',
            ],
            bullets: [
              '1. Konsultasi Awal: Hubungi tim kami untuk mendiskusikan kebutuhan pelatihan dan verifikasi berkas prasyarat.',
              '2. Penawaran Resmi: Tim kami menerbitkan Surat Penawaran Harga (SPH) resmi berkop surat dengan rincian silabus dan jadwal.',
              '3. Pelaksanaan Kelas: Peserta mengikuti pembinaan secara interaktif hingga selesai evaluasi kelulusan.',
              '4. Penerbitan Sertifikat: Penyerahan sertifikat pembinaan dan dokumen lisensi resmi.'
            ]
          }
        ],
        faqs: [
          { question: `Apa persyaratan utama untuk mengikuti ${fullTitle}?`, answer: `Peserta dipersyaratkan memiliki latar belakang pendidikan yang sesuai (minimal SLTA/D3/S1 sesuai skema program), melampirkan salinan KTP, Ijazah, pas foto, serta surat tugas perusahaan bagi peserta utusan instansi.` },
          { question: `Berapa lama masa berlaku sertifikat dan lisensi ${fullTitle}?`, answer: 'Sertifikat pembinaan berlaku seumur hidup sebagai bukti kompetensi, sedangkan lisensi kewenangan kerja/SIO umumnya berlaku selama 2 hingga 3 tahun dan dapat diperpanjang secara berkala.' },
          { question: `Bagaimana cara meminta jadwal batch terdekat untuk ${fullTitle}?`, answer: 'Silakan hubungi tim konsultan PT Kreasi Ultimate Berjaya melalui tombol WhatsApp yang tersedia untuk mengecek ketersediaan kuota batch terdekat.' }
        ],
        related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'panduan/biaya-pelatihan-k3', 'perbandingan/bnsp-vs-kemnaker'],
        sources: [src, officialSources.uu1, officialSources.pp50],
        status: 'published',
        publishedAt: '2026-08-01',
        updatedAt: '2026-09-01',
        indexable: true,
        intent: `pelatihan ${slug} jadwal biaya silabus syarat`,
        primaryKeyword: keyword,
        searchIntent: `jadwal, biaya, silabus, dan syarat pendaftaran ${fullTitle}`,
        intentType: 'commercial',
        parentTopic: `Pelatihan ${cat.name}`,
        cannibalizationGroup: `pelatihan-${cat.cat}`,
        contentKind: 'program',
        primaryCtaText: `Tanya Jadwal & Biaya ${fullTitle.split('(')[0].trim()}`,
        primaryCtaIntent: 'jadwal',
        secondaryCtaText: 'Konsultasi In-House Training',
        secondaryCtaIntent: 'perusahaan'
      });
    }
  }

  return records;
}

export type ComparisonCategory =
  | 'Sertifikasi & Jenjang Personel'
  | 'Program & Metode Pelatihan'
  | 'Sistem Manajemen & Audit'
  | 'Metode Risiko & Investigasi'
  | 'APD & Peralatan Keselamatan'
  | 'Regulasi & Standar Teknis';

export interface ComparisonMeta {
  slug: string;
  category: ComparisonCategory;
  optionA: string;
  optionB: string;
  decisionQuestion: string;
}

export interface ComparisonCategoryItem {
  id: string;
  name: ComparisonCategory;
  description: string;
  count: number;
}

export const comparisonCategories: ComparisonCategoryItem[] = [
  {
    id: 'sertifikasi-personel',
    name: 'Sertifikasi & Jenjang Personel',
    description: 'Bandingkan jalur lisensi Kemnaker, skema uji kompetensi BNSP, jenjang operator, dan peran profesi keselamatan kerja.',
    count: 12,
  },
  {
    id: 'program-metode',
    name: 'Program & Metode Pelatihan',
    description: 'Bandingkan format pembelajaran blended online, tatap muka klasikal, serta opsi kelas publik vs in-house training korporasi.',
    count: 2,
  },
  {
    id: 'sistem-manajemen',
    name: 'Sistem Manajemen & Audit',
    description: 'Bandingkan kerangka SMK3 PP 50/2012, ISO 45001, audit kriteria, indikator kinerja, hingga sistem kepatuhan kontraktor.',
    count: 17,
  },
  {
    id: 'metode-risiko',
    name: 'Metode Risiko & Investigasi',
    description: 'Bandingkan instrumen identifikasi bahaya, analisis risiko kualitatif vs kuantitatif, serta metodologi investigasi insiden.',
    count: 11,
  },
  {
    id: 'apd-peralatan',
    name: 'APD & Peralatan Keselamatan',
    description: 'Bandingkan spesifikasi teknis alat pelindung diri, aparatur proteksi kebakaran, gas detector, dan alat keselamatan kerja.',
    count: 14,
  },
  {
    id: 'regulasi-standar',
    name: 'Regulasi & Standar Teknis',
    description: 'Bandingkan rujukan perundangan K3 nasional, permenaker sektoral, pedoman teknis PUIL, serta standar konsensus internasional.',
    count: 14,
  },
];

export interface PopularComparison {
  slug: string;
  title: string;
  optionA: string;
  optionB: string;
  category: ComparisonCategory;
  decisionQuestion: string;
}

export const popularComparisons: PopularComparison[] = [
  {
    slug: 'bnsp-vs-kemnaker',
    title: 'Sertifikasi BNSP vs Sertifikasi Kemnaker RI',
    optionA: 'Sertifikasi BNSP (SKKNI)',
    optionB: 'Sertifikasi Kemnaker RI',
    category: 'Sertifikasi & Jenjang Personel',
    decisionQuestion: 'Butuh lisensi kewenangan penunjukan Kemnaker atau bukti uji kompetensi standar BNSP?',
  },
  {
    slug: 'ahli-k3-umum-vs-auditor-smk3',
    title: 'Ahli K3 Umum vs Auditor SMK3',
    optionA: 'Ahli K3 Umum',
    optionB: 'Auditor SMK3',
    category: 'Sertifikasi & Jenjang Personel',
    decisionQuestion: 'Fokus pada pengawasan K3 operasional harian atau audit kesesuaian sistem manajemen?',
  },
  {
    slug: 'inhouse-training-vs-public-class-k3',
    title: 'In-House Training vs Public Class K3',
    optionA: 'In-House Training Korporasi',
    optionB: 'Public Class Terbuka',
    category: 'Program & Metode Pelatihan',
    decisionQuestion: 'Membutuhkan kelas khusus internal perusahaan atau ingin mendaftar fleksibel secara perorangan?',
  },
  {
    slug: 'pelatihan-k3-blended-online-vs-tatap-muka',
    title: 'Pelatihan Blended / Online vs Tatap Muka',
    optionA: 'Pelatihan Blended / Online',
    optionB: 'Pelatihan Tatap Muka (Offline)',
    category: 'Program & Metode Pelatihan',
    decisionQuestion: 'Mengutamakan fleksibilitas waktu online atau interaksi langsung dan praktik fisik di kelas offline?',
  },
  {
    slug: 'smk3-pp-50-vs-iso-45001',
    title: 'SMK3 PP 50/2012 vs ISO 45001:2018',
    optionA: 'SMK3 PP No. 50/2012',
    optionB: 'ISO 45001:2018',
    category: 'Sistem Manajemen & Audit',
    decisionQuestion: 'Mengejar pemenuhan kewajiban hukum wajib nasional atau sertifikasi sistem bertaraf internasional?',
  },
  {
    slug: 'tkbt-vs-tkpk-bekerja-di-ketinggian',
    title: 'TKBT vs TKPK Bekerja di Ketinggian',
    optionA: 'Tenaga Kerja Bangunan Tinggi (TKBT)',
    optionB: 'Tenaga Kerja Pada Ketinggian (TKPK)',
    category: 'Sertifikasi & Jenjang Personel',
    decisionQuestion: 'Bekerja di ketinggian dengan lantai kerja tetap (bangunan) atau akses tali (rope access)?',
  },
  {
    slug: 'operator-forklift-kelas-1-vs-kelas-2',
    title: 'Operator Forklift Kelas 1 vs Kelas 2',
    optionA: 'Operator Forklift Kelas 1',
    optionB: 'Operator Forklift Kelas 2',
    category: 'Sertifikasi & Jenjang Personel',
    decisionQuestion: 'Mengoperasikan forklift dengan kapasitas angkat lebih dari 15 ton atau hingga 15 ton?',
  },
  {
    slug: 'hiradc-vs-jsa-analisis-keselamatan-kerja',
    title: 'HIRADC vs Job Safety Analysis (JSA)',
    optionA: 'HIRADC / IBPR',
    optionB: 'Job Safety Analysis (JSA)',
    category: 'Metode Risiko & Investigasi',
    decisionQuestion: 'Menilai risiko menyeluruh tingkat proses/instalasi atau langkah teknis tugas spesifik?',
  },
];

export const comparisonMetaRecords: Record<string, ComparisonMeta> = {
  // 1. Sertifikasi & Jenjang Personel (12 records)
  'bnsp-vs-kemnaker': {
    slug: 'bnsp-vs-kemnaker',
    category: 'Sertifikasi & Jenjang Personel',
    optionA: 'Sertifikasi BNSP (SKKNI)',
    optionB: 'Sertifikasi Kemnaker RI',
    decisionQuestion: 'Butuh lisensi kewenangan penunjukan Kemnaker atau bukti uji kompetensi standar BNSP?',
  },
  'ahli-k3-umum-vs-ahli-k3-konstruksi': {
    slug: 'ahli-k3-umum-vs-ahli-k3-konstruksi',
    category: 'Sertifikasi & Jenjang Personel',
    optionA: 'Ahli K3 Umum',
    optionB: 'Ahli K3 Konstruksi',
    decisionQuestion: 'Memerlukan pengawasan K3 lintas sektor atau kepatuhan khusus proyek pekerjaan konstruksi?',
  },
  'ahli-k3-umum-vs-ahli-k3-kimia': {
    slug: 'ahli-k3-umum-vs-ahli-k3-kimia',
    category: 'Sertifikasi & Jenjang Personel',
    optionA: 'Ahli K3 Umum',
    optionB: 'Ahli K3 Kimia',
    decisionQuestion: 'Menangani norma keselamatan umum pabrik atau fasilitas dengan potensi bahaya bahan kimia berbahaya?',
  },
  'ahli-k3-umum-vs-ahli-k3-listrik': {
    slug: 'ahli-k3-umum-vs-ahli-k3-listrik',
    category: 'Sertifikasi & Jenjang Personel',
    optionA: 'Ahli K3 Umum',
    optionB: 'Ahli K3 Listrik',
    decisionQuestion: 'Fokus pada tata kelola K3 fasilitas atau pengawasan teknis instalasi dan pembangkit listrik?',
  },
  'ahli-k3-migas-vs-ahli-k3-umum': {
    slug: 'ahli-k3-migas-vs-ahli-k3-umum',
    category: 'Sertifikasi & Jenjang Personel',
    optionA: 'Ahli K3 Migas',
    optionB: 'Ahli K3 Umum',
    decisionQuestion: 'Berkarir di sektor minyak dan gas bumi atau memerlukan lisensi regulasi umum tempat kerja?',
  },
  'ahli-k3-umum-vs-auditor-smk3': {
    slug: 'ahli-k3-umum-vs-auditor-smk3',
    category: 'Sertifikasi & Jenjang Personel',
    optionA: 'Ahli K3 Umum',
    optionB: 'Auditor SMK3',
    decisionQuestion: 'Fokus pada pengawasan K3 operasional harian atau audit kesesuaian sistem manajemen?',
  },
  'petugas-p3k-vs-paramedis-hiperkes': {
    slug: 'petugas-p3k-vs-paramedis-hiperkes',
    category: 'Sertifikasi & Jenjang Personel',
    optionA: 'Petugas P3K di Tempat Kerja',
    optionB: 'Paramedis Hiperkes',
    decisionQuestion: 'Pertolongan pertama darurat di tempat kerja atau pengelolaan program kesehatan kerja medis berlisensi?',
  },
  'petugas-k3-kebakaran-kelas-d-vs-kelas-a': {
    slug: 'petugas-k3-kebakaran-kelas-d-vs-kelas-a',
    category: 'Sertifikasi & Jenjang Personel',
    optionA: 'Petugas Peran Kebakaran Kelas D',
    optionB: 'Ahli K3 Kebakaran Kelas A',
    decisionQuestion: 'Regu penanggulangan pemadaman awal di unit kerja atau perencana strategis sistem proteksi kebakaran gedung?',
  },
  'tkbt-vs-tkpk-bekerja-di-ketinggian': {
    slug: 'tkbt-vs-tkpk-bekerja-di-ketinggian',
    category: 'Sertifikasi & Jenjang Personel',
    optionA: 'Tenaga Kerja Bangunan Tinggi (TKBT)',
    optionB: 'Tenaga Kerja Pada Ketinggian (TKPK)',
    decisionQuestion: 'Bekerja di ketinggian dengan lantai kerja tetap (bangunan) atau akses tali (rope access)?',
  },
  'operator-forklift-kelas-1-vs-kelas-2': {
    slug: 'operator-forklift-kelas-1-vs-kelas-2',
    category: 'Sertifikasi & Jenjang Personel',
    optionA: 'Operator Forklift Kelas 1',
    optionB: 'Operator Forklift Kelas 2',
    decisionQuestion: 'Mengoperasikan forklift dengan kapasitas angkat lebih dari 15 ton atau hingga 15 ton?',
  },
  'operator-crane-kelas-1-vs-kelas-2-vs-kelas-3': {
    slug: 'operator-crane-kelas-1-vs-kelas-2-vs-kelas-3',
    category: 'Sertifikasi & Jenjang Personel',
    optionA: 'Operator Crane Kelas 1',
    optionB: 'Operator Crane Kelas 2 & 3',
    decisionQuestion: 'Menentukan jenjang lisensi operator crane berdasarkan batasan kapasitas angkat dan kompleksitas alat?',
  },
  'pengawas-pop-vs-pom-minerba-tambang': {
    slug: 'pengawas-pop-vs-pom-minerba-tambang',
    category: 'Sertifikasi & Jenjang Personel',
    optionA: 'Pengawas Operasional Pertama (POP)',
    optionB: 'Pengawas Operasional Madya (POM)',
    decisionQuestion: 'Pengawasan K3 frontline tambang atau supervisi tingkat manajerial madya di sektor minerba?',
  },

  // 2. Program & Metode Pelatihan (2 records)
  'pelatihan-k3-blended-online-vs-tatap-muka': {
    slug: 'pelatihan-k3-blended-online-vs-tatap-muka',
    category: 'Program & Metode Pelatihan',
    optionA: 'Pelatihan Blended / Online',
    optionB: 'Pelatihan Tatap Muka (Offline)',
    decisionQuestion: 'Mengutamakan fleksibilitas waktu online atau interaksi langsung dan praktik fisik di kelas offline?',
  },
  'inhouse-training-vs-public-class-k3': {
    slug: 'inhouse-training-vs-public-class-k3',
    category: 'Program & Metode Pelatihan',
    optionA: 'In-House Training Korporasi',
    optionB: 'Public Class Terbuka',
    decisionQuestion: 'Membutuhkan kelas khusus internal perusahaan atau ingin mendaftar fleksibel secara perorangan?',
  },

  // 3. Sistem Manajemen & Audit (17 records)
  'smk3-pp-50-vs-iso-45001': {
    slug: 'smk3-pp-50-vs-iso-45001',
    category: 'Sistem Manajemen & Audit',
    optionA: 'SMK3 PP No. 50/2012',
    optionB: 'ISO 45001:2018',
    decisionQuestion: 'Mengejar pemenuhan kewajiban hukum wajib nasional atau sertifikasi sistem bertaraf internasional?',
  },
  'audit-smk3-64-vs-122-vs-166-kriteria': {
    slug: 'audit-smk3-64-vs-122-vs-166-kriteria',
    category: 'Sistem Manajemen & Audit',
    optionA: 'Audit SMK3 64 Kriteria (Awal)',
    optionB: 'Audit SMK3 122 & 166 Kriteria (Lanjutan)',
    decisionQuestion: 'Menentukan lingkup audit SMK3 berdasarkan skala usaha dan potensi bahaya rendah, sedang, atau tinggi?',
  },
  'audit-internal-vs-audit-eksternal-smk3': {
    slug: 'audit-internal-vs-audit-eksternal-smk3',
    category: 'Sistem Manajemen & Audit',
    optionA: 'Audit Internal SMK3',
    optionB: 'Audit Eksternal Sertifikasi SMK3',
    decisionQuestion: 'Evaluasi rutin berkala mandiri tim internal atau penilaian resmi oleh Lembaga Audit independen Kemnaker?',
  },
  'smkk-pupr-vs-smk3-kemnaker': {
    slug: 'smkk-pupr-vs-smk3-kemnaker',
    category: 'Sistem Manajemen & Audit',
    optionA: 'SMKK Kementerian PUPR',
    optionB: 'SMK3 Kemnaker RI (PP 50/2012)',
    decisionQuestion: 'Standar keselamatan spesifik penyelenggaraan jasa konstruksi atau sistem manajemen K3 umum tempat kerja?',
  },
  'smkp-minerba-vs-smk3-pp-50': {
    slug: 'smkp-minerba-vs-smk3-pp-50',
    category: 'Sistem Manajemen & Audit',
    optionA: 'SMKP Minerba ESDM',
    optionB: 'SMK3 PP No. 50/2012 Kemnaker',
    decisionQuestion: 'Penerapan keselamatan operasi khusus pertambangan minerba atau tata kelola K3 lintas industri?',
  },
  'csms-tier-1-vs-tier-2-vs-tier-3': {
    slug: 'csms-tier-1-vs-tier-2-vs-tier-3',
    category: 'Sistem Manajemen & Audit',
    optionA: 'CSMS Tier 1 (Risiko Tinggi)',
    optionB: 'CSMS Tier 2 & Tier 3 (Sedang & Rendah)',
    decisionQuestion: 'Klasifikasi kualifikasi K3 kontraktor berdasarkan profil bahaya pekerjaan proyek yang ditenderkan?',
  },
  'leading-indicator-vs-lagging-indicator-k3': {
    slug: 'leading-indicator-vs-lagging-indicator-k3',
    category: 'Sistem Manajemen & Audit',
    optionA: 'Leading Indicator K3',
    optionB: 'Lagging Indicator K3',
    decisionQuestion: 'Mengukur aksi pencegahan proaktif (inspeksi/latihan) atau mencatat riwayat insiden dan cedera yang telah terjadi?',
  },
  'audit-k3rs-vs-audit-smk3-pabrik': {
    slug: 'audit-k3rs-vs-audit-smk3-pabrik',
    category: 'Sistem Manajemen & Audit',
    optionA: 'Audit K3 Rumah Sakit (K3RS)',
    optionB: 'Audit SMK3 Manufaktur / Pabrik',
    decisionQuestion: 'Standar keselamatan fasilitas layanan kesehatan (Permenkes 66/2016) atau audit sistem manajemen fasilitas industri?',
  },
  'iso-45001-vs-ohsas-18001': {
    slug: 'iso-45001-vs-ohsas-18001',
    category: 'Sistem Manajemen & Audit',
    optionA: 'ISO 45001:2018',
    optionB: 'OHSAS 18001 (Standar Lama)',
    decisionQuestion: 'Memahami transisi struktur Annex SL, konteks organisasi, dan kepemimpinan dalam standar K3 modern?',
  },
  'safety-culture-ladder-generatif-vs-reaktif': {
    slug: 'safety-culture-ladder-generatif-vs-reaktif',
    category: 'Sistem Manajemen & Audit',
    optionA: 'Budaya K3 Generatif',
    optionB: 'Budaya K3 Reaktif',
    decisionQuestion: 'Membangun keselamatan sebagai nilai terintegrasi penuh atau sekadar bereaksi setelah kecelakaan terjadi?',
  },
  'temuan-mayor-vs-temuan-minor-audit-smk3': {
    slug: 'temuan-mayor-vs-temuan-minor-audit-smk3',
    category: 'Sistem Manajemen & Audit',
    optionA: 'Temuan Kategori Mayor',
    optionB: 'Temuan Kategori Minor',
    decisionQuestion: 'Membedakan kegagalan total elemen kritis SMK3 dengan ketidaksesuaian administratif parsial?',
  },
  'evaluasi-kepuasan-pekerja-vs-audit-kepatuhan-k3': {
    slug: 'evaluasi-kepuasan-pekerja-vs-audit-kepatuhan-k3',
    category: 'Sistem Manajemen & Audit',
    optionA: 'Evaluasi Persepsi & Kepuasan K3',
    optionB: 'Audit Kepatuhan Regulasi K3',
    decisionQuestion: 'Menilai iklim keterlibatan psikososial pekerja atau menguji ketaatan hukum fasilitas operasional?',
  },
  'manajemen-perubahan-moc-fasilitas-vs-organisasi': {
    slug: 'manajemen-perubahan-moc-fasilitas-vs-organisasi',
    category: 'Sistem Manajemen & Audit',
    optionA: 'MOC Modifikasi Fasilitas & Alat',
    optionB: 'MOC Restrukturisasi Personel',
    decisionQuestion: 'Mengendalikan risiko perubahan instalasi rekayasa teknis atau transisi tanggung jawab dan peran personel?',
  },
  'zero-accident-award-vs-sertifikat-smk3': {
    slug: 'zero-accident-award-vs-sertifikat-smk3',
    category: 'Sistem Manajemen & Audit',
    optionA: 'Penghargaan Nihil Kecelakaan',
    optionB: 'Sertifikat Penerapan SMK3 PP 50',
    decisionQuestion: 'Pemberian penghargaan jam kerja selamat tanpa LTI atau bukti audit legal penerapan sistem manajemen?',
  },
  'audit-kepatuhan-legalitas-vs-audit-perilaku-k3-sbo': {
    slug: 'audit-kepatuhan-legalitas-vs-audit-perilaku-k3-sbo',
    category: 'Sistem Manajemen & Audit',
    optionA: 'Audit Kepatuhan Legalitas K3',
    optionB: 'Audit Observasi Perilaku (SBO/BBS)',
    decisionQuestion: 'Memeriksa kelengkapan izin dan dokumen perundangan atau meneliti kebiasaan tindakan aman di lantai kerja?',
  },
  'gap-analysis-smk3-vs-pre-audit-sertifikasi': {
    slug: 'gap-analysis-smk3-vs-pre-audit-sertifikasi',
    category: 'Sistem Manajemen & Audit',
    optionA: 'Gap Analysis SMK3',
    optionB: 'Pre-Audit Sertifikasi SMK3',
    decisionQuestion: 'Memetakan kesiapan dokumen sejak tahap awal atau simulasi uji kelayakan jelang audit badan sertifikasi?',
  },
  'surveilans-kesehatan-kerja-vs-medical-checkup-rutin': {
    slug: 'surveilans-kesehatan-kerja-vs-medical-checkup-rutin',
    category: 'Sistem Manajemen & Audit',
    optionA: 'Surveilans Kesehatan Kerja',
    optionB: 'Medical Check-Up (MCU) Rutin',
    decisionQuestion: 'Pemantauan tren dampak paparan bahaya kerja berkesinambungan atau pemeriksaan fisik klinis tahunan?',
  },

  // 4. Metode Risiko & Investigasi (11 records)
  'hiradc-vs-jsa-analisis-keselamatan-kerja': {
    slug: 'hiradc-vs-jsa-analisis-keselamatan-kerja',
    category: 'Metode Risiko & Investigasi',
    optionA: 'HIRADC / IBPR',
    optionB: 'Job Safety Analysis (JSA)',
    decisionQuestion: 'Menilai risiko menyeluruh tingkat proses/instalasi atau langkah teknis tugas spesifik?',
  },
  'hazop-vs-fmea-analisis-risiko-k3': {
    slug: 'hazop-vs-fmea-analisis-risiko-k3',
    category: 'Metode Risiko & Investigasi',
    optionA: 'HAZOP Study',
    optionB: 'Failure Mode and Effects Analysis (FMEA)',
    decisionQuestion: 'Menganalisis penyimpangan parameter proses perpipaan/fluida atau memetakan mode kegagalan komponen mekanis?',
  },
  'fault-tree-analysis-fta-vs-event-tree-analysis-eta': {
    slug: 'fault-tree-analysis-fta-vs-event-tree-analysis-eta',
    category: 'Metode Risiko & Investigasi',
    optionA: 'Fault Tree Analysis (FTA - Deduktif)',
    optionB: 'Event Tree Analysis (ETA - Induktif)',
    decisionQuestion: 'Mencari akar penyebab kegagalan dari atas ke bawah atau memproyeksikan rantai konsekuensi suatu kejadian awal?',
  },
  'investigasi-5-why-vs-fishbone-diagram': {
    slug: 'investigasi-5-why-vs-fishbone-diagram',
    category: 'Metode Risiko & Investigasi',
    optionA: 'Metode 5 Why',
    optionB: 'Fishbone (Ishikawa) Diagram',
    decisionQuestion: 'Penelusuran sebab-akibat linear langsung atau pengelompokan faktor kontributor berdasarkan kategori 6M?',
  },
  'metode-bowtie-vs-risk-matrix-5x5': {
    slug: 'metode-bowtie-vs-risk-matrix-5x5',
    category: 'Metode Risiko & Investigasi',
    optionA: 'Analisis Diagram Bowtie',
    optionB: 'Matriks Risiko 5x5',
    decisionQuestion: 'Visualisasi penghalang pencegahan dan mitigasi bahaya mayor atau pembobotan peringkat tingkat risiko umum?',
  },
  'metode-tapproot-vs-scat-investigasi-insiden': {
    slug: 'metode-tapproot-vs-scat-investigasi-insiden',
    category: 'Metode Risiko & Investigasi',
    optionA: 'Metodologi TapRooT',
    optionB: 'Systematic Cause Analysis Technique (SCAT)',
    decisionQuestion: 'Investigasi insiden berbasis diagram akar penyebab sistematis atau matriks analisis penyebab langsung dan dasar?',
  },
  'what-if-analysis-vs-checklist-inspeksi-k3': {
    slug: 'what-if-analysis-vs-checklist-inspeksi-k3',
    category: 'Metode Risiko & Investigasi',
    optionA: 'What-If Analysis',
    optionB: 'Checklist Inspeksi K3 Terencana',
    decisionQuestion: 'Brainstorming skenario deviasi tak terduga dalam operasi atau verifikasi kesesuaian standar item terstruktur?',
  },
  'penilaian-risiko-kualitatif-vs-kuantitatif-qra': {
    slug: 'penilaian-risiko-kualitatif-vs-kuantitatif-qra',
    category: 'Metode Risiko & Investigasi',
    optionA: 'Penilaian Risiko Kualitatif',
    optionB: 'Quantitative Risk Assessment (QRA)',
    decisionQuestion: 'Pengelompokan risiko berbasis deskripsi deskriptif atau pemodelan statistik probabilitas dan dampak numerik?',
  },
  'metode-rula-vs-reba-penilaian-ergonomi': {
    slug: 'metode-rula-vs-reba-penilaian-ergonomi',
    category: 'Metode Risiko & Investigasi',
    optionA: 'RULA (Postur Ekstremitas Atas)',
    optionB: 'REBA (Postur Seluruh Tubuh)',
    decisionQuestion: 'Menilai beban postur kerja ekstremitas atas (lengan/leher) atau postur dinamis seluruh tubuh saat mengangkat?',
  },
  'penilaian-risiko-kesehatan-hra-vs-hiradc-k3': {
    slug: 'penilaian-risiko-kesehatan-hra-vs-hiradc-k3',
    category: 'Metode Risiko & Investigasi',
    optionA: 'Health Risk Assessment (HRA)',
    optionB: 'HIRADC Keselamatan Kerja',
    decisionQuestion: 'Fokus pada bahaya paparan lingkungan jangka panjang (kimia/fisika/biologi) atau potensi cedera kecelakaan fisik?',
  },
  'lopa-analysis-vs-sil-determination': {
    slug: 'lopa-analysis-vs-sil-determination',
    category: 'Metode Risiko & Investigasi',
    optionA: 'Layer of Protection Analysis (LOPA)',
    optionB: 'SIL Determination (Tingkat Keandalan)',
    decisionQuestion: 'Menilai kecukupan lapisan proteksi independen (IPL) atau menentukan target keandalan sistem instrumen keselamatan (SIS)?',
  },

  // 5. APD & Peralatan Keselamatan (14 records)
  'apar-powder-vs-apar-co2': {
    slug: 'apar-powder-vs-apar-co2',
    category: 'APD & Peralatan Keselamatan',
    optionA: 'APAR Dry Chemical Powder',
    optionB: 'APAR Carbon Dioxide (CO2)',
    decisionQuestion: 'Memilih media pemadam serbaguna kelas A, B, C atau media gas bersih tanpa residu untuk ruang server dan panel listrik?',
  },
  'apar-foam-vs-apar-clean-agent': {
    slug: 'apar-foam-vs-apar-clean-agent',
    category: 'APD & Peralatan Keselamatan',
    optionA: 'APAR Busa (AFFF Foam)',
    optionB: 'APAR Gas Cair Bersih (Clean Agent)',
    decisionQuestion: 'Menyelimuti kebakaran cairan mudah terbakar (kelas B) atau memproteksi peralatan elektronik sensitif dari korosi?',
  },
  'full-body-harness-vs-waist-belt-ketinggian': {
    slug: 'full-body-harness-vs-waist-belt-ketinggian',
    category: 'APD & Peralatan Keselamatan',
    optionA: 'Full Body Harness',
    optionB: 'Sabuk Pinggang (Waist Belt)',
    decisionQuestion: 'Menahan jatuh bebas dengan distribusi beban ke paha dan dada atau sekadar pembatas gerak kerja (work restraint)?',
  },
  'lanyard-shock-absorber-vs-self-retracting-lifeline-srl': {
    slug: 'lanyard-shock-absorber-vs-self-retracting-lifeline-srl',
    category: 'APD & Peralatan Keselamatan',
    optionA: 'Lanyard Shock Absorber',
    optionB: 'Self-Retracting Lifeline (SRL)',
    decisionQuestion: 'Tali penghubung dengan peredam kejut bentang tetap atau perangkat rol otomatis dengan jarak jatuh henti minimal?',
  },
  'masker-n95-vs-respirator-setengah-wajah-elastomerik': {
    slug: 'masker-n95-vs-respirator-setengah-wajah-elastomerik',
    category: 'APD & Peralatan Keselamatan',
    optionA: 'Masker Partikulat N95 (Disposable)',
    optionB: 'Respirator Elastomerik Half-Face',
    decisionQuestion: 'Perlindungan debu sekali pakai atau respirator dengan seal kedap wajah serta cartridge filter kimia isi ulang?',
  },
  'earplug-vs-earmuff-pelindung-pendengaran': {
    slug: 'earplug-vs-earmuff-pelindung-pendengaran',
    category: 'APD & Peralatan Keselamatan',
    optionA: 'Penyumbat Telinga (Earplug)',
    optionB: 'Penutup Telinga (Earmuff)',
    decisionQuestion: 'Alat pelindung pendengaran ringan di dalam liang telinga atau penutup luar yang nyaman untuk penggunaan buka-tutup berulang?',
  },
  'helm-safety-sni-vs-helm-panjat-climbing': {
    slug: 'helm-safety-sni-vs-helm-panjat-climbing',
    category: 'APD & Peralatan Keselamatan',
    optionA: 'Helm Keselamatan Industri (SNI/ANSI)',
    optionB: 'Helm Panjat / Ketinggian (EN 12492)',
    decisionQuestion: 'Proteksi benturan atas di area konstruksi atau helm dengan tali dagu berkekuatan tinggi agar tidak terlepas saat jatuh?',
  },
  'sepatu-safety-ujung-baja-vs-ujung-komposit': {
    slug: 'sepatu-safety-ujung-baja-vs-ujung-komposit',
    category: 'APD & Peralatan Keselamatan',
    optionA: 'Sepatu Safety Ujung Baja (Steel Toe)',
    optionB: 'Sepatu Safety Komposit (Composite Toe)',
    decisionQuestion: 'Kekuatan kompresi maksimal dengan harga ekonomis atau pelindung non-logam ringan yang tidak memicu detektor metal?',
  },
  'scba-300-bar-vs-airline-breathing-system': {
    slug: 'scba-300-bar-vs-airline-breathing-system',
    category: 'APD & Peralatan Keselamatan',
    optionA: 'SCBA (Self-Contained Breathing)',
    optionB: 'Supplied Air / Airline System',
    decisionQuestion: 'Mobilitas mandiri untuk evakuasi darurat singkat atau suplai udara bersih berkelanjutan untuk kerja berdurasi panjang?',
  },
  'detektor-gas-katalitik-vs-detektor-gas-inframerah': {
    slug: 'detektor-gas-katalitik-vs-detektor-gas-inframerah',
    category: 'APD & Peralatan Keselamatan',
    optionA: 'Sensor Katalitik (Catalytic Bead)',
    optionB: 'Sensor Inframerah (Optical NDIR)',
    decisionQuestion: 'Pendeteksian gas mudah terbakar ekonomis di udara normal atau keandalan tinggi di lingkungan rendah oksigen dan bersilikon?',
  },
  'sarung-tangan-nitril-vs-sarung-tangan-neoprene': {
    slug: 'sarung-tangan-nitril-vs-sarung-tangan-neoprene',
    category: 'APD & Peralatan Keselamatan',
    optionA: 'Sarung Tangan Karet Nitril',
    optionB: 'Sarung Tangan Neoprene',
    decisionQuestion: 'Ketahanan terhadap tusukan dan pelarut hidrokarbon atau perlindungan terhadap asam kuat dan senyawa kaustik korosif?',
  },
  'selang-hydrant-kanvas-vs-selang-hydrant-karet-epdm': {
    slug: 'selang-hydrant-kanvas-vs-selang-hydrant-karet-epdm',
    category: 'APD & Peralatan Keselamatan',
    optionA: 'Selang Pemadam Kanvas (Polyester)',
    optionB: 'Selang Pemadam Karet Sintetis (EPDM)',
    decisionQuestion: 'Selang pemadam berbobot ringan yang fleksibel digulung atau selang tahan cuaca, gesekan kasar, dan zat kimia industri?',
  },
  'baju-wearpack-katun-vs-baju-tahan-api-nomex': {
    slug: 'baju-wearpack-katun-vs-baju-tahan-api-nomex',
    category: 'APD & Peralatan Keselamatan',
    optionA: 'Wearpack Kerja Katun Standar',
    optionB: 'Pakaian Pelindung Tahan Api (FR Nomex)',
    decisionQuestion: 'Pakaian kerja bengkel dan pabrik umum atau pakaian berpelindung ketahanan panas dan bahaya sambaran flash fire?',
  },
  'tripod-rescue-winch-vs-davit-arm-system': {
    slug: 'tripod-rescue-winch-vs-davit-arm-system',
    category: 'APD & Peralatan Keselamatan',
    optionA: 'Tripod Confined Space Rescue',
    optionB: 'Sistem Davit Arm Terpasang',
    decisionQuestion: 'Struktur portabel tiga kaki di atas lubang manhole vertikal atau lengan kantilever fleksibel untuk akses tepian tangki?',
  },

  // 6. Regulasi & Standar Teknis (14 records)
  'uu-1-1970-vs-uu-13-2003-pasal-k3': {
    slug: 'uu-1-1970-vs-uu-13-2003-pasal-k3',
    category: 'Regulasi & Standar Teknis',
    optionA: 'Undang-Undang No. 1 Tahun 1970',
    optionB: 'UU No. 13 Tahun 2003 (Pasal 86 & 87)',
    decisionQuestion: 'Landasan hukum teknis keselamatan kerja di tempat kerja atau regulasi hak dasar pekerja dan kewajiban penerapan SMK3?',
  },
  'nab-permenaker-05-2018-vs-sni-higiene-lama': {
    slug: 'nab-permenaker-05-2018-vs-sni-higiene-lama',
    category: 'Regulasi & Standar Teknis',
    optionA: 'Permenaker No. 5 Tahun 2018',
    optionB: 'Standar Baku Higiene Industri Lama',
    decisionQuestion: 'Pembaruan Nilai Ambang Batas faktor fisika, kimia, biologi, ergonomi, dan psikologi kerja modern?',
  },
  'permenaker-08-2020-vs-permenaker-09-2008-pesawat-angkat': {
    slug: 'permenaker-08-2020-vs-permenaker-09-2008-pesawat-angkat',
    category: 'Regulasi & Standar Teknis',
    optionA: 'Permenaker No. 8 Tahun 2020',
    optionB: 'Permenaker No. 09/MEN/VII/2008',
    decisionQuestion: 'Memahami pembaruan klasifikasi, lisensi K3 operator, dan pengujian berkala Pesawat Angkat dan Angkut?',
  },
  'permenaker-37-2016-vs-peraturan-uap-stbl-1930': {
    slug: 'permenaker-37-2016-vs-peraturan-uap-stbl-1930',
    category: 'Regulasi & Standar Teknis',
    optionA: 'Permenaker No. 37 Tahun 2016',
    optionB: 'Peraturan Uap Stbl. 1930 (Stoomordonnantie)',
    decisionQuestion: 'Ketentuan keselamatan bejana tekan dan tangki timbun modern atau aturan spesifik ketel dan instalasi pesawat uap?',
  },
  'permenkes-66-2016-vs-permenkes-48-2016': {
    slug: 'permenkes-66-2016-vs-permenkes-48-2016',
    category: 'Regulasi & Standar Teknis',
    optionA: 'Permenkes No. 66 Tahun 2016 (K3RS)',
    optionB: 'Permenkes No. 48 Tahun 2016 (K3 Perkantoran)',
    decisionQuestion: 'Standar keselamatan fasilitas kesehatan berisiko biologis atau tata kelola K3 lingkungan kerja perkantoran?',
  },
  'puil-2020-sni-0225-vs-puil-2000-instalasi-listrik': {
    slug: 'puil-2020-sni-0225-vs-puil-2000-instalasi-listrik',
    category: 'Regulasi & Standar Teknis',
    optionA: 'SNI 0225:2020 (PUIL 2020)',
    optionB: 'PUIL 2000 (Edisi Terdahulu)',
    decisionQuestion: 'Standar instalasi listrik modern yang mengadopsi IEC 60364 atau pedoman instalasi listrik edisi konvensional?',
  },
  'permen-pupr-10-2021-vs-permen-pu-05-2014-smkk': {
    slug: 'permen-pupr-10-2021-vs-permen-pu-05-2014-smkk',
    category: 'Regulasi & Standar Teknis',
    optionA: 'Permen PUPR No. 10 Tahun 2021',
    optionB: 'Permen PU No. 05/PRT/M/2014',
    decisionQuestion: 'Pedoman Sistem Manajemen Keselamatan Konstruksi (SMKK) terkini mencakup RKK atau pedoman SMK3 konstruksi lama?',
  },
  'nfpa-standar-global-vs-sni-kebakaran-nasional': {
    slug: 'nfpa-standar-global-vs-sni-kebakaran-nasional',
    category: 'Regulasi & Standar Teknis',
    optionA: 'Standar Konsensus Global NFPA',
    optionB: 'Standar Nasional Indonesia (SNI) Kebakaran',
    decisionQuestion: 'Rujukan teknis proteksi kebakaran internasional atau standar kepatuhan nasional yang diadopsi perundangan lokal?',
  },
  'pp-50-2012-vs-permenaker-05-1996-smk3': {
    slug: 'pp-50-2012-vs-permenaker-05-1996-smk3',
    category: 'Regulasi & Standar Teknis',
    optionA: 'PP No. 50 Tahun 2012 (Peraturan Pemerintah)',
    optionB: 'Permenaker No. Per.05/MEN/1996',
    decisionQuestion: 'Penguatan status hukum SMK3 menjadi Peraturan Pemerintah dengan 166 kriteria audit sistem yang disempurnakan?',
  },
  'permenaker-02-1992-vs-skkni-k3-bnsp': {
    slug: 'permenaker-02-1992-vs-skkni-k3-bnsp',
    category: 'Regulasi & Standar Teknis',
    optionA: 'Permenaker No. Per.02/MEN/1992',
    optionB: 'Kepmenaker No. 38 Tahun 2019 (SKKNI K3)',
    decisionQuestion: 'Kewajiban penunjukan Ahli K3 di perusahaan atau penetapan standar unit kompetensi profesi K3 nasional?',
  },
  'perka-bapeten-radiasi-vs-permenaker-lingkungan-kerja': {
    slug: 'perka-bapeten-radiasi-vs-permenaker-lingkungan-kerja',
    category: 'Regulasi & Standar Teknis',
    optionA: 'Peraturan BAPETEN (K3 Radiasi)',
    optionB: 'Permenaker No. 5/2018 (Faktor Fisika)',
    decisionQuestion: 'Regulasi ketenaganukliran untuk pemanfaatan radiasi industri/medis atau aturan higiene umum lingkungan kerja?',
  },
  'kepmen-esdm-1827-2018-vs-permenaker-tambang': {
    slug: 'kepmen-esdm-1827-2018-vs-permenaker-tambang',
    category: 'Regulasi & Standar Teknis',
    optionA: 'Kepmen ESDM No. 1827 K/30/MEM/2018',
    optionB: 'Peraturan K3 Tambang Kemnaker',
    decisionQuestion: 'Kaidah teknik pertambangan yang baik di bawah inspektur tambang atau pengawasan ketenagakerjaan umum?',
  },
  'se-ruang-terbatas-2012-vs-osha-1910-146': {
    slug: 'se-ruang-terbatas-2012-vs-osha-1910-146',
    category: 'Regulasi & Standar Teknis',
    optionA: 'SE Dirjen Binwasnaker No. 113/2012',
    optionB: 'OSHA 29 CFR 1910.146 (Confined Space)',
    decisionQuestion: 'Pedoman teknis K3 bekerja di dalam ruang terbatas di Indonesia atau standar keselamatan izin masuk internasional OSHA?',
  },
  'permenaker-15-2008-vs-standar-p3k-osha-ansi': {
    slug: 'permenaker-15-2008-vs-standar-p3k-osha-ansi',
    category: 'Regulasi & Standar Teknis',
    optionA: 'Permenaker No. 15 Tahun 2008 (P3K)',
    optionB: 'Standar P3K OSHA / ANSI Z308.1',
    decisionQuestion: 'Ketentuan wajib isi kotak P3K dan rasio petugas P3K di Indonesia atau standar perlengkapan medis darurat standar AS?',
  },
};

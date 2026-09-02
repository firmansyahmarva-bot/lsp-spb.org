import { ContentRecordInput } from './build-inventory';

interface ProfessionItem {
  slug: string;
  title: string;
  duties: string;
  salary: string;
}

interface ProfessionGroup {
  category: string;
  items?: ProfessionItem[];
  prefix?: string;
  titles?: string[];
}

export function generateProfesiRecords(): ContentRecordInput[] {
  const records: ContentRecordInput[] = [];

  const professionGroups: ProfessionGroup[] = [
    {
      category: 'Ahli K3 & Spesialis Regulasi',
      items: [
        { slug: 'ahli-k3-umum', title: 'Profesi Ahli K3 Umum', duties: 'Pengawasan norma K3, sekretaris P2K3, evaluasi kepatuhan hukum perusahaan', salary: 'Rp 6.000.000 - Rp 15.000.000' },
        { slug: 'ahli-k3-konstruksi', title: 'Profesi Ahli K3 Konstruksi', duties: 'Pengawasan keselamatan proyek konstruksi, penyusunan RKK, inspeksi struktur', salary: 'Rp 8.000.000 - Rp 20.000.000' },
        { slug: 'ahli-k3-kimia', title: 'Profesi Ahli K3 Kimia', duties: 'Pengendalian bahan B3, manajemen reaktivitas kimia, evaluasi MSDS & LDK', salary: 'Rp 7.500.000 - Rp 18.000.000' },
        { slug: 'ahli-k3-listrik', title: 'Profesi Ahli K3 Listrik', duties: 'Inspeksi instalasi kelistrikan, pengawasan sistem LOTO, audit proteksi petir', salary: 'Rp 8.000.000 - Rp 19.000.000' },
        { slug: 'ahli-k3-lingkungan-kerja', title: 'Profesi Ahli K3 Lingkungan Kerja', duties: 'Pengukuran faktor fisika, kimia, biologi, ergonomi, dan psikologi kerja', salary: 'Rp 7.000.000 - Rp 16.000.000' },
        { slug: 'ahli-k3-pesawat-angkat-angkut', title: 'Profesi Ahli K3 Pesawat Angkat & Angkut', duties: 'Riksa uji kelayakan crane, forklift, alat berat, dan evaluasi lifting plan', salary: 'Rp 8.500.000 - Rp 20.000.000' },
        { slug: 'ahli-k3-pesawat-tenaga-produksi', title: 'Profesi Ahli K3 Pesawat Tenaga & Produksi', duties: 'Pemeriksaan mesin produksi, safeguarding, interlock, dan transmisi mekanik', salary: 'Rp 7.500.000 - Rp 17.000.000' },
        { slug: 'ahli-k3-pesawat-uap-bejana-tekan', title: 'Profesi Ahli K3 Pesawat Uap & Bejana Tekan', duties: 'Inspeksi keselamatan boiler, ketel uap, tangki timbun, dan safety valve', salary: 'Rp 8.500.000 - Rp 22.000.000' },
        { slug: 'ahli-k3-kebakaran', title: 'Profesi Ahli K3 Kebakaran (Kelas A)', duties: 'Perancangan sistem proteksi api total, fire risk assessment, audit instalasi pemadam', salary: 'Rp 8.000.000 - Rp 18.000.000' },
        { slug: 'ahli-k3-rumah-sakit', title: 'Profesi Ahli K3 Rumah Sakit (K3RS)', duties: 'Penerapan keselamatan fasilitas medis, pengelolaan limbah medis B3, evakuasi pasien', salary: 'Rp 6.500.000 - Rp 15.000.000' },
        { slug: 'ahli-k3-migas', title: 'Profesi Ahli K3 Migas & Panas Bumi', duties: 'Pengawasan keselamatan operasi pengeboran, rig offshore, dan kilang gas', salary: 'Rp 12.000.000 - Rp 35.000.000' },
        { slug: 'ahli-k3-pertambangan', title: 'Profesi Ahli K3 Pertambangan Mineral & Batubara', duties: 'Implementasi SMKP, pengawasan kestabilan lereng, penanganan peledakan tambang', salary: 'Rp 10.000.000 - Rp 28.000.000' },
        { slug: 'ahli-k3-maritim', title: 'Profesi Ahli K3 Maritim & Kepelabuhanan', duties: 'Pengawasan keselamatan bongkar muat kapal, keselamatan galangan, ISM Code', salary: 'Rp 8.000.000 - Rp 22.000.000' },
        { slug: 'ahli-k3-penerbangan', title: 'Profesi Ahli K3 Penerbangan & Ground Handling', duties: 'Keselamatan apron bandara, operasional GSE, kepatuhan standar ICAO', salary: 'Rp 8.000.000 - Rp 20.000.000' },
        { slug: 'ahli-k3-telekomunikasi', title: 'Profesi Ahli K3 Telekomunikasi & Tower Rigging', duties: 'Keselamatan pemasangan menara BTS, proteksi radiasi gelombang mikro, rope access', salary: 'Rp 7.000.000 - Rp 16.000.000' },
        { slug: 'ahli-k3-manufaktur-pangan', title: 'Profesi Ahli K3 Industri Pangan & F&B', duties: 'Integrasi HACCP & K3, sanitasi pabrik makanan, ergonomi stasiun pengemasan', salary: 'Rp 6.000.000 - Rp 14.000.000' },
        { slug: 'ahli-k3-otomotif', title: 'Profesi Ahli K3 Industri Otomotif & Logam', duties: 'Keselamatan lini perakitan robotik, stamping press, pengecatan solvent', salary: 'Rp 7.500.000 - Rp 17.000.000' },
        { slug: 'ahli-k3-perkebunan-sawit', title: 'Profesi Ahli K3 Perkebunan Kelapa Sawit', duties: 'Keselamatan pabrik kelapa sawit (PKS), penanganan pestisida, keselamatan pemanen', salary: 'Rp 6.500.000 - Rp 15.000.000' },
        { slug: 'ahli-k3-kehutanan-pulp-paper', title: 'Profesi Ahli K3 Industri Pulp, Kertas & Kayu', duties: 'Pengendalian bahaya pemotongan kayu, debu mudah terbakar, bahan kimia pemutih', salary: 'Rp 7.000.000 - Rp 16.000.000' },
        { slug: 'ahli-k3-farmasi', title: 'Profesi Ahli K3 Industri Farmasi & Bahan Biologis', duties: 'Containment ruang steril, penanganan zat aktif poten (API), validasi biological safety', salary: 'Rp 8.000.000 - Rp 18.000.000' }
      ]
    },
    {
      category: 'Safety Officer Lapangan',
      prefix: 'Safety Officer',
      titles: [
        'Konstruksi Gedung Tinggi', 'Konstruksi Jalan & Jembatan', 'Kilang Minyak & Petrokimia', 'Pengeboran Migas Lepas Pantai',
        'Pertambangan Batubara Terbuka', 'Pertambangan Bawah Tanah', 'Pabrik Peleburan Smelter Nikel', 'Pabrik Semen & Material',
        'Pembangkit Listrik Tenaga Uap', 'Pembangkit Listrik Tenaga Surya', 'Pabrik Manufaktur Elektronik', 'Galangan Kapal & Dok',
        'Kawasan Pergudangan Logistik', 'Pusat Distribusi Cold Storage', 'Proyek Rel Kereta Api MRT', 'Pabrik Tekstil & Garmen',
        'Instalasi Pipa Gas Transmisi', 'Pabrik Cat & Kimia Pelarut', 'Pekerjaan Scaffolding Khusus', 'Fasilitas Pengolahan Limbah Medis B3'
      ]
    },
    {
      category: 'HSE Supervisor Lapangan',
      prefix: 'HSE Supervisor',
      titles: [
        'Operasional Pabrik Manufaktur', 'Proyek EPC Skala Besar', 'Fasilitas Rig Pengeboran', 'Operasi Hauling Tambang',
        'Terminal Depo Bahan Bakar', 'Operasi Pabrik Kelapa Sawit', 'Kawasan Industri Terpadu', 'Fasilitas Pembangkit Listrik PLTG',
        'Fabrikasi Struktur Baja Berat', 'Terminal Curah Pelabuhan', 'Operasi Smelter Tembaga', 'Pabrik Kimia Pupuk Amonia',
        'Pekerjaan Jembatan Terowongan', 'Operasional Rumah Sakit', 'Fasilitas Pengolahan Pangan Massal', 'Proyek Transmisi SUTET',
        'Galangan Modul Lepas Pantai', 'Pusat Logistik Berikat', 'Armada Transportasi Kimia B3', 'Laboratorium Riset Industri'
      ]
    },
    {
      category: 'HSE Manager Korporat',
      prefix: 'HSE Manager',
      titles: [
        'Korporasi Multinasional Global', 'Kontraktor EPC Nasional', 'Holding Agribisnis Perkebunan', 'Korporasi Pertambangan Terintegrasi',
        'Perusahaan Minyak & Gas Nasional', 'Pengelola Kawasan Industri', 'Manufaktur Otomotif Global', 'Perusahaan Logistik Rantai Pasok',
        'Grup Layanan Kesehatan Medis', 'Pembangkit Listrik Swasta IPP', 'Perusahaan Farmasi Terkemuka', 'Perusahaan Konstruksi BUMN',
        'Perusahaan Petrokimia Khusus', 'Perusahaan Galangan Maritim', 'Perusahaan Infrastruktur Digital', 'Perusahaan Konsumen & Pangan',
        'Perusahaan Maskapai Penerbangan', 'Perusahaan Distribusi Energi BBM', 'Perusahaan Semen Konstruksi', 'Perusahaan Pengolahan Limbah Lingkungan'
      ]
    },
    {
      category: 'Auditor K3 & Kepatuhan',
      prefix: 'Auditor K3',
      titles: [
        'Auditor Eksternal SMK3 Kemnaker RI', 'Lead Auditor ISO 45001 Terakreditasi', 'Auditor Internal SMK3 Korporasi',
        'Auditor Keselamatan Tambang SMKP', 'Auditor CSMS Kualifikasi Kontraktor', 'Auditor K3 Konstruksi SMKK PUPR',
        'Auditor Kepatuhan Hukum Ketenagakerjaan', 'Auditor Sistem Proteksi Kebakaran Gedung', 'Auditor K3 Fasilitas Rumah Sakit K3RS',
        'Auditor Higiene Industri Lingkungan Kerja', 'Auditor K3 Sektor Minyak dan Gas', 'Auditor Sistem Manajemen QHSE Terpadu',
        'Auditor Keselamatan Proses Kimia', 'Auditor K3 Rantai Pasok Vendor', 'Auditor K3 Fasilitas Maritim Pelabuhan',
        'Auditor K3 Pergudangan Distribusi', 'Auditor K3 Industri Sanitasi Pangan', 'Auditor Ergonomi Stasiun Kerja',
        'Auditor Kesiapsiagaan Tanggap Darurat', 'Lead Assessor Tempat Uji Kompetensi K3'
      ]
    },
    {
      category: 'Tenaga Medis Kesehatan Kerja',
      prefix: 'Tenaga Medis K3',
      titles: [
        'Dokter Perusahaan Bersertifikat Hiperkes', 'Dokter Spesialis Okupasi SpOk Korporasi', 'Paramedis Perusahaan Hiperkes',
        'Koordinator Program Fit to Work MCU', 'Fasilitator Kesehatan Kerja Ergonomi', 'Petugas P3K Terlatih Tempat Kerja',
        'Paramedis Lapangan Remote Site', 'Spesialis Pengendalian PAK', 'Konselor Kesehatan Mental Kerja',
        'Koordinator Pencegahan TBC di Pabrik', 'Auditor Higiene Sanitasi Kantin Pekerja', 'Spesialis Audiometri Konservasi Pendengaran',
        'Spesialis Spirometri Fungsi Paru', 'Spesialis Toksikologi Industri Biological', 'Koordinator Evakuasi Medis Medevac',
        'Dokter Penguji Kesehatan Tenaga Kerja', 'Petugas Manajemen Fatigue Kelelahan', 'Konsultan Ergonomi Stasiun Kerja Medis',
        'Spesialis Rehabilitasi Pasca Kecelakaan', 'Koordinator Program Wellness Kebugaran'
      ]
    },
    {
      category: 'Teknisi K3 Spesialis',
      prefix: 'Teknisi K3',
      titles: [
        'Teknisi K3 Listrik Industri', 'Teknisi K3 Ketinggian Rope Access', 'Teknisi K3 Scaffolding Perancah',
        'Teknisi K3 Ruang Terbatas Gas Tester', 'Teknisi K3 Lift dan Eskalator', 'Teknisi K3 Boiler Ketel Uap',
        'Teknisi K3 Bejana Tekan Tangki Timbun', 'Teknisi K3 Sistem APAR Kebakaran', 'Teknisi K3 Sistem Sprinkler Alarm',
        'Teknisi K3 Pengujian NDT Ultrasonik', 'Teknisi K3 Deteksi Gas Kalibrasi', 'Teknisi K3 Mesin Interlock Guarding',
        'Teknisi K3 Penyalur Petir Grounding', 'Teknisi K3 Pompa Pemadam Diesel', 'Teknisi K3 SCBA Breathing Air',
        'Teknisi K3 Uji Emisi Cerobong Pabrik', 'Teknisi K3 Pengukuran Kebisingan Getaran', 'Teknisi K3 Ventilasi Tambang Bawah Tanah',
        'Teknisi K3 Rigging Wire Rope Sling', 'Teknisi K3 Pendingin Amonia Refrigerasi'
      ]
    },
    {
      category: 'Spesialis Higiene Industri',
      prefix: 'Higiene Industri',
      titles: [
        'Industrial Hygienist Muda HIMU', 'Industrial Hygienist Madya HIMA', 'Industrial Hygienist Utama HIU',
        'Spesialis Pengukuran Debu Aerosol', 'Spesialis Paparan Bahan Kimia Toksik', 'Spesialis Heat Stress Iklim Panas',
        'Spesialis Pengukuran Kebisingan Getaran', 'Spesialis Kualitas Udara Ruangan IAQ', 'Spesialis Pencahayaan Radiasi Non-Pengion',
        'Spesialis Faktor Biologis Biohazard', 'Spesialis Desain Ventilasi Industri LEV', 'Spesialis Pengendalian Bahaya Asbes',
        'Spesialis Pengelolaan Limbah B3 Pabrik', 'Spesialis Pengendalian Emisi Udara Gas', 'Spesialis Pengendalian Pencemaran Air IPAL',
        'Spesialis Pemodelan Dispersi Gas Toksik', 'Spesialis Penilaian Risiko Kesehatan HRA', 'Spesialis Toksikologi Penetapan NAB',
        'Spesialis Penanganan Tumpahan B3 Spill', 'Konsultan Independen Higiene Lingkungan'
      ]
    },
    {
      category: 'Safety Engineer Sektoral',
      prefix: 'Safety Engineer',
      titles: [
        'Safety Engineer Proyek Konstruksi Sipil', 'Process Safety Engineer Pabrik Petrokimia', 'Safety Engineer Kilang Minyak Gas',
        'Safety Engineer Anjungan Lepas Pantai', 'Safety Engineer Pembangkit Listrik Termal', 'Safety Engineer Energi Terbarukan PLTS',
        'Safety Engineer Manufaktur Otomotif', 'Safety Engineer Smelter Metalurgi', 'Safety Engineer Sistem Perpipaan Gas Tekanan',
        'Safety Engineer Industri Dirgantara', 'Safety Engineer Galangan Kapal Maritim', 'Safety Engineer Industri Semen Pabrik',
        'Safety Engineer Sistem Proteksi Api Terpadu', 'Safety Engineer Pemanfaatan Radiasi Nuklir', 'Safety Engineer Otomasi Robotika Industri',
        'Safety Engineer Laboratorium Bio Safety L3', 'Safety Engineer Transportasi Rel Kereta', 'Safety Engineer Struktur Tahan Gempa',
        'Safety Engineer Proyek Terowongan Tambang', 'Senior Safety Risk Consulting Engineer'
      ]
    },
    {
      category: 'Konsultan & Asesor K3',
      prefix: 'Konsultan K3',
      titles: [
        'Konsultan Pendampingan Sertifikasi SMK3 PP 50', 'Konsultan Sistem Manajemen ISO 45001 Terpadu', 'Konsultan CSMS Kontraktor Prakualifikasi',
        'Konsultan Kajian Hazop & Process Safety', 'Konsultan Desain Proteksi Kebakaran Gedung', 'Konsultan Penyusunan HIRADC & Risk Register',
        'Konsultan Studi Ergonomi Industri Kerja', 'Konsultan Pengukuran Higiene Lingkungan Kerja', 'Konsultan Safety Leadership & Budaya K3',
        'Konsultan Safety Case Fasilitas Migas', 'Asesor Kompetensi Profesi K3 BNSP', 'Master Trainer & Instruktur Pembinaan K3',
        'Fasilitator Workshop Investigasi Insiden', 'Konsultan Pengelolaan B3 & Limbah Medis', 'Konsultan Rencana Tanggap Darurat Bencana',
        'Konsultan Mitigasi Bahaya Ledakan Debu ATEX', 'Konsultan Audit Kepatuhan Regulasi Ketenagakerjaan', 'Konsultan Penataan Sistem LOTO Kelistrikan',
        'Konsultan Audit K3 Sektor Rumah Sakit K3RS', 'Senior Advisory HSE Strategic Consultant'
      ]
    }
  ];

  // Generate 20 items from group 0
  for (const item of professionGroups[0].items || []) {
    records.push({
      section: 'profesi',
      slug: item.slug,
      title: item.title,
      metaTitle: `${item.title}: Tugas, Wewenang & Gaji | Pelatihan K3`,
      description: `Panduan karir ${item.title}: ruang lingkup tugas, wewenang hukum, kisaran gaji industri, dan syarat sertifikasi penunjukan resmi.`,
      answer: `${item.title} adalah tenaga profesional keselamatan kerja yang berwenang mengawasi dan memastikan kepatuhan norma K3 di tempat kerja dengan kisaran gaji ${item.salary}.`,
      highlights: ['Wewenang Hukum Sesuai Regulasi', `Estimasi Gaji ${item.salary}`, 'Tanggung Jawab Pengawasan Norma K3', 'Jalur Karir Profesional Berjenjang'],
      blocks: [
        { heading: `Mengenal ${item.title}`, paragraphs: [`${item.title} memegang peranan krusial dalam menjamin keselamatan, kesehatan, dan kelangsungan operasional di tempat kerja. Posisi ini bertanggung jawab untuk ${item.duties}.`, 'Di Indonesia, penunjukan profesi ini memiliki landasan hukum yang kuat melalui regulasi Kementerian Ketenagakerjaan RI guna menjamin akuntabilitas pengawasan norma keselamatan kerja.'] },
        { heading: 'Tugas Pokok & Wewenang Kerja', paragraphs: ['Tanggung jawab utama yang diemban meliputi:'], bullets: ['Melakukan inspeksi berkala dan audit kepatuhan keselamatan', 'Menyusun laporan identifikasi bahaya dan penilaian risiko (HIRADC)', 'Memberikan rekomendasi perbaikan teknis kepada pihak manajemen', 'Menjadi penghubung resmi dengan instansi pengawas ketenagakerjaan'] },
        { heading: 'Kisaran Gaji & Prospek Karir', paragraphs: [`Di pasar industri nasional, estimasi penghasilan untuk ${item.title} berada pada rentang ${item.salary} bergantung pada sektor industri, lokasi penempatan, serta jenjang sertifikasi yang dimiliki.`] },
        { heading: 'Persyaratan Kualifikasi & Sertifikasi', paragraphs: ['Untuk memangku jabatan ini, kandidat umumnya dipersyaratkan memiliki latar belakang pendidikan minimal D3/S1, sertifikat pembinaan resmi dari kementerian terkait, serta pengalaman lapangan yang relevan.'] }
      ],
      faqs: [
        { question: `Apa syarat utama menjadi ${item.title}?`, answer: 'Syarat utama meliputi kualifikasi pendidikan minimal D3/S1, kelulusan pembinaan sertifikasi kementerian terkait, serta pemenuhan administrasi berkas penunjukan (SKP dan Lisensi).' },
        { question: `Berapa kisaran gaji untuk ${item.title}?`, answer: `Kisaran gaji berada pada rentang ${item.salary} tergantung kompleksitas risiko sektor industri dan pengalaman profesional.` }
      ],
      related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'panduan/tugas-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker'],
      sources: [
        { label: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja', url: 'https://jdih.kemnaker.go.id/katalog/uu-1-1970', publisher: 'Pemerintah RI / Kemnaker' },
        { label: 'Permenaker No. 02/MEN/1992 tentang Penunjukan Ahli K3', url: 'https://jdih.kemnaker.go.id/katalog/permenaker-02-1992', publisher: 'Kemnaker RI' }
      ],
      status: 'published',
      publishedAt: '2026-08-10',
      updatedAt: '2026-09-01',
      indexable: true,
      intent: `profesi ${item.slug} tugas gaji wewenang`,
      primaryKeyword: `profesi ${item.slug.replace(/-/g, ' ')}`,
      searchIntent: `tugas, wewenang, gaji, dan syarat profesi ${item.title}`,
      intentType: 'informational',
      parentTopic: 'Profesi & Karir K3 Indonesia',
      cannibalizationGroup: 'profesi-ahli-k3',
      contentKind: 'profession',
      primaryCtaText: 'Konsultasi Karir & Sertifikasi K3',
      primaryCtaIntent: 'daftar',
      secondaryCtaText: 'Lihat Program Pembinaan',
      secondaryCtaIntent: 'jadwal'
    });
  }

  // Generate remaining 9 groups of 20 items each = 180 + 20 = 200 total
  for (let g = 1; g < professionGroups.length; g++) {
    const grp = professionGroups[g];
    const prefix = grp.prefix || 'Safety Officer';
    const titles = grp.titles || [];
    for (let i = 0; i < titles.length; i++) {
      const titleName = titles[i];
      const fullTitle = `Profesi ${prefix} ${titleName}`;
      const slug = `${prefix.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${titleName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`.replace(/^-|-$/g, '');
      const salaryRange = prefix.includes('Manager') ? 'Rp 15.000.000 - Rp 45.000.000' : prefix.includes('Supervisor') ? 'Rp 8.000.000 - Rp 18.000.000' : 'Rp 6.000.000 - Rp 14.000.000';

      records.push({
        section: 'profesi',
        slug,
        title: fullTitle,
        metaTitle: `${fullTitle}: Tugas, Wewenang & Kualifikasi`,
        description: `Ulasan lengkap ${fullTitle}: lingkup tanggung jawab pekerjaan, standar kompetensi, kisaran gaji industri, dan jalur sertifikasi resmi.`,
        answer: `${fullTitle} adalah peran profesional HSE yang bertugas mengelola pengawasan dan penerapan standar keselamatan di sektor ${titleName} dengan kisaran gaji ${salaryRange}.`,
        highlights: ['Peran Kunci Keselamatan Operasional', `Estimasi Gaji ${salaryRange}`, 'Tanggung Jawab Sektoral Spesifik', 'Peluang Karir Industri Luas'],
        blocks: [
          { heading: `Peran & Tanggung Jawab ${fullTitle}`, paragraphs: [`Posisi ${fullTitle} memegang tanggung jawab fundamental dalam memimpin dan mengoordinasikan praktik keselamatan kerja di sektor ${titleName}.`, 'Tugas utama meliputi pengawasan implementasi SOP keselamatan, penegakan disiplin pemakaian APD, pemantauan izin kerja aman, dan pelaporan berkala kepada manajemen.'] },
          { heading: 'Wewenang & Lingkup Kerja', paragraphs: ['Tenaga profesional pada posisi ini berwenang untuk:'], bullets: ['Menghentikan pekerjaan yang terindikasi membahayakan jiwa (Stop Work Authority)', 'Melakukan investigasi insiden dan nearmiss di area tanggung jawabnya', 'Menyusun analisis risiko (JSA/HIRADC) bersama tim teknis lapangan', 'Memverifikasi kesiapan alat pelindung diri dan sarana tanggap darurat'] },
          { heading: 'Kisaran Gaji & Jenjang Karir', paragraphs: [`Estimasi penghasilan untuk ${fullTitle} di Indonesia berkisar antara ${salaryRange}, dengan potensi kenaikan seiring bertambahnya pengalaman proyek, kepemilikan sertifikasi kompetensi BNSP/Kemnaker, dan lisensi sektoral.`] },
          { heading: 'Kualifikasi & Sertifikasi yang Diperlukan', paragraphs: ['Persyaratan umum meliputi pemahaman regulasi K3 nasional, sertifikat kompetensi terkait, serta kemampuan komunikasi kepemimpinan keselamatan yang efektif.'] }
        ],
        faqs: [
          { question: `Apa sertifikasi yang paling dibutuhkan untuk posisi ${fullTitle}?`, answer: 'Sertifikasi yang direkomendasikan mencakup Ahli K3 Umum, sertifikat kompetensi pengawas BNSP, serta sertifikasi teknis spesifik sektor terkait.' },
          { question: `Apakah posisi ${fullTitle} memiliki wewenang menghentikan pekerjaan bahaya?`, answer: 'Ya, seluruh personel HSE memiliki Stop Work Authority apabila menemukan kondisi tidak aman (unsafe condition) atau tindakan tidak aman (unsafe act) kritis.' }
        ],
        related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker'],
        sources: [
          { label: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja', url: 'https://jdih.kemnaker.go.id/katalog/uu-1-1970', publisher: 'Pemerintah RI / Kemnaker' },
          { label: 'PP No. 50 Tahun 2012 tentang Penerapan SMK3', url: 'https://jdih.kemnaker.go.id/katalog/pp-50-2012', publisher: 'Pemerintah RI / Kemnaker' }
        ],
        status: 'published',
        publishedAt: '2026-08-10',
        updatedAt: '2026-09-01',
        indexable: true,
        intent: `profesi ${slug} tugas gaji kualifikasi`,
        primaryKeyword: `profesi ${slug.replace(/-/g, ' ')}`,
        searchIntent: `tanggung jawab dan kisaran gaji ${fullTitle}`,
        intentType: 'informational',
        parentTopic: `Profesi HSE ${grp.category}`,
        cannibalizationGroup: `profesi-${prefix.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        contentKind: 'profession',
        primaryCtaText: 'Konsultasi Sertifikasi Profesi K3',
        primaryCtaIntent: 'daftar',
        secondaryCtaText: 'Tanya Jadwal Pelatihan',
        secondaryCtaIntent: 'jadwal'
      });
    }
  }

  return records;
}

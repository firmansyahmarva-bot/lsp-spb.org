import { ContentRecordInput } from './build-inventory';

export function generateKompetensiRecords(): ContentRecordInput[] {
  const records: ContentRecordInput[] = [];

  const groups = [
    {
      levelName: 'Tingkat Operator',
      count: 25,
      rolePrefix: 'Operator K3',
      titles: [
        'Pengoperasian Alat Angkat & Angkut Berstandar SKKNI', 'Pengoperasian Forklift Pergudangan Sesuai Standar Kompetensi',
        'Pengikatan Beban & Rigging Muatan Berat', 'Pemasangan & Pembongkaran Scaffolding Pipa Dasar',
        'Penggunaan Peralatan Proteksi Jatuh & Akses Tali', 'Pengoperasian Gas Detector & Pengujian Atmosfer',
        'Pengoperasian Alat Pemadam Api Ringan (APAR)', 'Penggelaran & Pengoperasian Hydrant Kebakaran',
        'Pengoperasian Bejana Tekan & Kompresor Udara', 'Pengoperasian Ketel Uap (Boiler) Berlisensi',
        'Pengoperasian Mesin Perkakas & Pemotongan Logam', 'Pengoperasian Excavator Proyek Konstruksi',
        'Pengoperasian Mobile Crane Industri', 'Pengoperasian Tower Crane Gedung Tinggi',
        'Pengoperasian Overhead Crane Pabrik Baja', 'Penerapan Isolasi Energi & Prosedur LOTO',
        'Pengoperasian Manlift & Boom Lift Ketinggian', 'Penanganan Bahan Kimia Berbahaya B3 di Lapangan',
        'Pengoperasian Instalasi Pengolahan Air Limbah (IPAL)', 'Pengoperasian Alat Uji Kelistrikan Multimeter & Megger',
        'Penyelamatan Darurat Dasar & Evakuasi Lapangan', 'Penerapan Kebersihan & 5S di Area Kerja',
        'Pengendalian Tumpahan Bahan Kimia Ringan', 'Pengoperasian Sistem Ventilasi Ruang Terbatas',
        'Pemeriksaan Kelayakan Alat Pelindung Diri (APD)'
      ],
    },
    {
      levelName: 'Tingkat Teknisi',
      count: 25,
      rolePrefix: 'Teknisi K3',
      titles: [
        'Pemeriksaan & Pengujian Instalasi Listrik Industri', 'Pemeliharaan Sistem Proteksi Kebakaran Otomatis',
        'Pemeriksaan Kelaikan Struktur Perancah Scaffolding', 'Pengujian Integritas Bejana Tekan & Tangki Timbun',
        'Pengukuran Faktor Fisika Lingkungan Kerja (Kebisingan & Getaran)', 'Pengambilan Sampel Debu & Kimia Udara Kerja',
        'Kalibrasi & Pemeliharaan Alat Deteksi Gas Multi-Sensor', 'Pemeriksaan & Uji Beban Pesawat Angkat',
        'Pemeliharaan & Uji Hidrostatis Tabung APAR', 'Pemeriksaan Instalasi Penyalur Petir & Grounding',
        'Pemeliharaan Sistem Ventilasi & Fan Ruang Terbatas', 'Pemeriksaan Sensor Interlock & Guarding Mesin',
        'Pengujian Kualitas Air Bersih & Limbah Industri', 'Pemeriksaan & Kalibrasi Sound Level Meter',
        'Pemeliharaan Alat Bantu Pernapasan SCBA', 'Pemeriksaan Kekedapan Sambungan Pipa Gas Bertekanan',
        'Pengujian Ketebalan Pelat Menggunakan Ultrasonic Thickness Gauge', 'Pemeriksaan & Sertifikasi Sabuk Pengaman Full Body Harness',
        'Pemeriksaan Saluran Udara & Kompresor Pernapasan', 'Pengujian Termografi Inframerah Panel Listrik',
        'Pemeriksaan Instalasi Pompa Pemadam Api Diesel & Elektrik', 'Pengukuran Pencahayaan Tempat Kerja (Lux Metering)',
        'Pemeriksaan Sistem Pembumian Statis Area Tangki Bahan Bakar', 'Pengujian Integritas Tali Kawat Baja (Wire Rope NDT)',
        'Pemeriksaan Sistem Keselamatan Lift Penumpang'
      ],
    },
    {
      levelName: 'Tingkat Officer & Pengawas',
      count: 30,
      rolePrefix: 'Safety Officer',
      titles: [
        'Identifikasi Bahaya & Penilaian Risiko (HIRADC)', 'Penyusunan Analisis Keselamatan Pekerjaan (JSA)',
        'Pelaksanaan Inspeksi K3 Terjadwal & Audit Visual', 'Pengawasan Pekerjaan Panas (Hot Work Permit Monitoring)',
        'Pengawasan Izin Masuk Ruang Terbatas (Confined Space Permit)', 'Pengawasan Pekerjaan di Ketinggian & Akses Perancah',
        'Pengawasan Keselamatan Pekerjaan Penggalian Tanah', 'Pengawasan Operasional Pengangkatan Beban Kritis (Lifting Supervisor)',
        'Penyelenggaraan Safety Induction bagi Karyawan Baru & Kontraktor', 'Pemanduan Safety Toolbox Meeting & Tool Box Talk Harian',
        'Pemeriksaan Kepatuhan Penggunaan Alat Pelindung Diri (APD)', 'Pelaporan Awal Insiden & Kondisi Berbahaya (Nearmiss)',
        'Pengawasan Keselamatan Bahan Berbahaya & Beracun (B3)', 'Pengawasan Sistem Pengelolaan Sampah & Limbah B3',
        'Pemantauan Program Kebugaran Kerja & Fit to Work', 'Pengawasan Keselamatan Lalu Lintas Area Pabrik & Tambang',
        'Pengawasan Kepatuhan Penerapan Prosedur LOTO', 'Pemeriksaan Kesiapan Fasilitas P3K di Tempat Kerja',
        'Pengawasan Kebersihan & Sanitasi Lingkungan Pabrik', 'Pemeriksaan Jalur Evakuasi & Sarana Tanggap Darurat',
        'Penyusunan Rencana Tindak Lanjut Hasil Inspeksi K3', 'Pengawasan Pekerjaan Pembongkaran Struktur Bangunan',
        'Pengawasan Keselamatan Operasi Alat Berat Proyek', 'Pengawasan Pekerjaan Pengelasan & Fabrikasi Baja',
        'Pengawasan Keselamatan Fasilitas Kilang & Depo BBM', 'Pengawasan Kepatuhan Regulasi K3 Kontraktor (CSMS)',
        'Pengawasan Keselamatan Area Dermaga & Pelabuhan', 'Pengawasan Program Ergonomi & Penataan Stasiun Kerja',
        'Pengawasan Kepatuhan K3 Rumah Sakit & Fasilitas Medis', 'Pemantauan Indikator Kinerja Keselamatan Kerja Proyek'
      ],
    },
    {
      levelName: 'Tingkat Supervisor HSE',
      count: 30,
      rolePrefix: 'Supervisor K3',
      titles: [
        'Koordinasi & Pelaksanaan Program K3 Lintas Divisi', 'Investigasi Kecelakaan Kerja & Analisis Akar Masalah (RCA)',
        'Penyusunan Rencana Tanggap Darurat & Skenario Simulasi Evakuasi', 'Audit Internal Penerapan Sistem Manajemen K3 (SMK3)',
        'Evaluasi Efektivitas Tindakan Pengendalian Risiko Tempat Kerja', 'Penyusunan Rencana Keselamatan Proyek Konstruksi (RKK)',
        'Pengelolaan Sistem Izin Kerja Aman (Safe Work Permit System)', 'Koordinasi Penanganan Insiden Tumpahan Kimia B3 Skala Menengah',
        'Penyusunan Matriks Pelatihan & Kompetensi K3 Karyawan', 'Evaluasi Kinerja Kontraktor Melalui CSMS Scorecard',
        'Pengelolaan Program Kesehatan Kerja & Pemeriksaan Medis Berkala', 'Supervisi Program Pengurangan Emisi & Pencemaran Lingkungan',
        'Penyusunan Prosedur Operasional Standar (SOP) Keselamatan', 'Evaluasi Data Nearmiss & Trend Analisis Kecelakaan Kerja',
        'Pengelolaan Komite Tanggap Darurat & Tim Fire Brigade Pabrik', 'Supervisi Kepatuhan Hukum Ketenagakerjaan Bidang K3',
        'Koordinasi Pelaksanaan Pengukuran Higiene Industri Bersertifikat', 'Supervisi Keselamatan Operasional Pembangkit Listrik',
        'Penyusunan Program Safety Campaign & Promosi Budaya K3', 'Supervisi K3 Pertambangan Batubara & Mineral (POP)',
        'Pengelolaan Sistem Komunikasi Darurat & Pelaporan Naker', 'Supervisi Keselamatan Logistik & Transportasi Kimia B3',
        'Evaluasi Hasil Kalibrasi & Sertifikasi Peralatan K3', 'Supervisi K3 Fasilitas Lepas Pantai & Rig Pengeboran',
        'Penyusunan Laporan Triwulan P2K3 untuk Dinas Tenaga Kerja', 'Supervisi Penerapan Kaizen & 5S Berbasis Keselamatan',
        'Pengelolaan Rantai Pasok APD & Sarana Keselamatan Terstandar', 'Supervisi Manajemen Kelelahan Kerja (Fatigue Management)',
        'Evaluasi Kesiapan Audit Sertifikasi SMK3 PP 50/2012', 'Supervisi Program Konservasi Pendengaran di Area Bising'
      ],
    },
    {
      levelName: 'Tingkat Manager HSE',
      count: 30,
      rolePrefix: 'HSE Manager',
      titles: [
        'Perumusan Kebijakan & Strategi K3 Korporat', 'Penyusunan Anggaran & Alokasi Sumber Daya K3 Perusahaan',
        'Pengembangan & Penerapan Terpadu SMK3 PP 50/2012 & ISO 45001', 'Manajemen Risiko Strategis & Ketahanan Bisnis (BCM)',
        'Kepemimpinan Keselamatan (Safety Leadership) bagi Top Management', 'Evaluasi Kinerja QHSSE Korporasi Berbasis Leading Indicator',
        'Manajemen Krisis & Komunikasi Publik Pasca Insiden Mayor', 'Pengawasan Kepatuhan Regulasi Nasional & Standar Internasional',
        'Penyusunan Sistem Manajemen Keselamatan Kontraktor (CSMS)', 'Perancangan Transformasi Budaya Keselamatan (Zero Harm Culture)',
        'Audit Kesiapan Sertifikasi Sistem Manajemen Terintegrasi', 'Manajemen Hubungan Pemangku Kepentingan (Stakeholder & Regulator)',
        'Perencanaan Mitigasi Risiko Bencana & Kontinjensi Korporasi', 'Evaluasi Manajemen Perubahan (Management of Change - MOC)',
        'Pengembangan Program Sustainability & ESG Berbasis K3', 'Pengawasan Program Kesehatan Kerja Terintegrasi & Wellbeing',
        'Penyusunan Safety Case Fasilitas Berbahaya Tinggi (Major Hazard Facility)', 'Pengelolaan Asuransi & Manajemen Liabilitas Kecelakaan Kerja',
        'Evaluasi Kelayakan Investasi Peralatan Keselamatan Modern', 'Penyusunan Dokumen Evaluasi Kinerja K3 Tahunan Direksi',
        'Pengembangan Sistem Digitalisasi Pelaporan & Monitoring K3 (EHS Software)', 'Pengawasan Sistem Keselamatan Pabrik Petrokimia Kompleks',
        'Kepemimpinan Komite Pembina Keselamatan & Kesehatan Kerja (P2K3)', 'Evaluasi Sistem Proteksi Kebakaran Total Kawasan Industri',
        'Pengawasan Keselamatan Operasi Tambang Terpadu (SMKP)', 'Manajemen Program Keselamatan Proses (Process Safety Management)',
        'Evaluasi Rekomendasi Audit Eksternal SMK3 & ISO 45001', 'Perumusan Key Performance Indicators (KPI) K3 Divisi',
        'Pengawasan Keselamatan Rantai Pasok Global Perusahaan', 'Pengembangan Program Inovasi & Riset Terapan Keselamatan Kerja'
      ],
    },
    {
      levelName: 'Tingkat Asesor & Instruktur',
      count: 20,
      rolePrefix: 'Asesor Kompetensi K3',
      titles: [
        'Perencanaan & Pengorganisasian Asesmen Kompetensi K3', 'Pengembangan Perangkat Asesmen Berbasis SKKNI K3',
        'Pelaksanaan Asesmen Kompetensi Berbasis Bukti Kerja Portofolio', 'Pengambilan Keputusan Asesmen & Uji Kompetensi Asesi',
        'Evaluasi & Validasi Perangkat Asesmen Bidang Keselamatan', 'Pengembangan Materi Pelatihan Berbasis Standar Kompetensi',
        'Penyelenggaraan Bimbingan Teknis Pra-Asesmen Sertifikasi K3', 'Metodologi Pengajaran & Fasilitasi Pelatihan K3 Interaktif',
        'Evaluasi Efektivitas Pembelajaran Pelatihan Keselamatan Kerja', 'Pengembangan Kurikulum Berbasis Kebutuhan Industri K3',
        'Pengujian Praktik Keterampilan K3 Ruang Terbatas & Ketinggian', 'Pengujian Praktik Pengoperasian Pesawat Angkat & Angkut',
        'Penyusunan Rubrik Penilaian Observasi Keterampilan K3', 'Pengujian Wawancara Kompetensi Teknis Keselamatan Kerja',
        'Verifikasi Keaslian & Relevansi Dokumen Portofolio Asesi', 'Pemberian Umpan Balik Asesmen Konstruktif bagi Asesi',
        'Pengelolaan Uji Kompetensi pada Tempat Uji Kompetensi (TUK)', 'Audit Kepatuhan Pelaksanaan Asesmen terhadap Pedoman BNSP',
        'Pengembangan Bank Soal & Kasus Uji Asesmen K3 Nasional', 'Penyusunan Laporan Hasil Asesmen Uji Kompetensi Sertifikasi'
      ],
    },
    {
      levelName: 'Tingkat Auditor K3',
      count: 20,
      rolePrefix: 'Auditor SMK3',
      titles: [
        'Perencanaan & Penyusunan Program Audit SMK3 Perusahaan', 'Pengumpulan Bukti Audit & Pengujian Dokumen Kepatuhan K3',
        'Pelaksanaan Wawancara Audit dengan Manajemen & Pekerja', 'Verifikasi Implementasi 166 Kriteria Audit SMK3 PP 50/2012',
        'Perumusan Temuan Audit Mayor, Minor & Ketidaksesuaian K3', 'Penyusunan Laporan Hasil Audit Sistem Manajemen Keselamatan',
        'Verifikasi Tindakan Perbaikan (Corrective Action) Hasil Audit', 'Pelaksanaan Audit Lapangan Fasilitas Industri Berisiko Tinggi',
        'Audit Kepatuhan Regulasi K3 Perundang-undangan (Legal Compliance)', 'Audit Kesiapan Tanggap Darurat & Evakuasi Fasilitas',
        'Audit Sistem Izin Kerja Aman & Pengendalian Pekerjaan Kritis', 'Audit Pengelolaan Bahan Berbahaya & Beracun (B3) Industri',
        'Audit Pemeliharaan & Sertifikasi Kelayakan Peralatan Pabrik', 'Audit Kompetensi & Pelatihan K3 Tenaga Kerja Perusahaan',
        'Audit Pengelolaan Kontraktor & CSMS di Fasilitas Operasional', 'Audit Higiene Industri & Program Pengendalian Faktor Bahaya',
        'Audit Pelaporan & Investigasi Kecelakaan Kerja Perusahaan', 'Audit Keterlibatan Pekerja & Fungsi Kelembagaan P2K3',
        'Audit Integrasi Sistem Manajemen K3, Lingkungan & Mutu (QEHS)', 'Closing Meeting & Presentasi Hasil Audit SMK3 ke Direksi'
      ],
    },
    {
      levelName: 'Spesialis Sektoral',
      count: 20,
      rolePrefix: 'Spesialis K3 Sektor',
      titles: [
        'Penerapan K3 Sektor Pertambangan Mineral & Batubara', 'Penerapan K3 Sektor Pengeboran & Produksi Minyak-Gas',
        'Penerapan K3 Sektor Konstruksi Bangunan Sipil & Gedung', 'Penerapan K3 Sektor Rumah Sakit & Layanan Kesehatan Medis',
        'Penerapan K3 Sektor Industri Kimia & Petrokimia Berat', 'Penerapan K3 Sektor Maritim, Pelabuhan & Angkutan Laut',
        'Penerapan K3 Sektor Pembangkit Listrik & Energi Terbarukan', 'Penerapan K3 Sektor Penerbangan & Fasilitas Bandara Udara',
        'Penerapan K3 Sektor Perkebunan & Industri Pengolahan Kelapa Sawit', 'Penerapan K3 Sektor Pabrik Manufaktur Otomotif & Mesin',
        'Penerapan K3 Sektor Industri Makanan, Minuman & Pengolahan Pangan', 'Penerapan K3 Sektor Industri Tekstil, Garmen & Alas Kaki',
        'Penerapan K3 Sektor Pergudangan, Distribusi & Cold Storage', 'Penerapan K3 Sektor Industri Semen & Bahan Galian Non-Logam',
        'Penerapan K3 Sektor Industri Peleburan & Pemurnian Logam (Smelter)', 'Penerapan K3 Sektor Telekomunikasi & Jaringan Fiber Optik',
        'Penerapan K3 Sektor Pengelolaan Sampah & Daur Ulang Limbah', 'Penerapan K3 Sektor Perhotelan, Resort & Kawasan Pariwisata',
        'Penerapan K3 Sektor Industri Farmasi & Produk Biologis Medis', 'Penerapan K3 Sektor Galangan Kapal & Perbaikan Dok Maritim'
      ],
    }
  ];

  for (const g of groups) {
    for (let i = 0; i < g.titles.length; i++) {
      const title = g.titles[i];
      const slug = `skema-${g.rolePrefix.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40)}`.replace(/^-|-$/g, '');
      const fullTitle = `Skema Sertifikasi BNSP: ${title}`;

      records.push({
        section: 'kompetensi',
        slug,
        title: fullTitle,
        metaTitle: `${fullTitle} | Standar Kompetensi BNSP`,
        description: `Rincian unit kompetensi SKKNI, persyaratan asesmen, bukti portofolio, dan sertifikasi BNSP untuk ${title}.`,
        answer: `${fullTitle} adalah skema uji kompetensi profesi berstandar SKKNI yang diselenggarakan melalui LSP berlisensi BNSP untuk menguji keahlian ${g.levelName}.`,
        highlights: ['Standar Kompetensi Kerja Nasional (SKKNI)', 'Sertifikat Kompetensi Garuda BNSP', 'Uji Portofolio & Wawancara Asesor', 'Diakui Industri Nasional & Regional'],
        blocks: [
          { heading: `Deskripsi Skema ${title}`, paragraphs: [`Skema sertifikasi ini disusun berdasarkan Standar Kompetensi Kerja Nasional Indonesia (SKKNI) guna memastikan tenaga kerja di ${g.levelName} memiliki pengetahuan, keterampilan, dan sikap kerja yang teruji.`, `Uji kompetensi ini diselenggarakan oleh Lembaga Sertifikasi Profesi (LSP) pihak kedua atau ketiga yang telah mendapatkan lisensi resmi dari Badan Nasional Sertifikasi Profesi (BNSP).`] },
          { heading: 'Unit Kompetensi yang Diujikan', paragraphs: ['Asesi diwajibkan mendemonstrasikan penguasaan unit kompetensi inti dan pilihan yang tercantum dalam skema:'], bullets: ['Menerapkan Prosedur Keselamatan Kerja Terstandar', 'Mengidentifikasi Potensi Bahaya & Pengendalian Risiko', 'Mengelola Dokumentasi & Laporan Kerja Sesuai Standar', 'Merespons Situasi Darurat di Tempat Kerja'] },
          { heading: 'Persyaratan Asesmen & Portofolio', paragraphs: ['Peserta uji kompetensi wajib melengkapi berkas administrasi meliputi ijazah, surat keterangan pengalaman kerja di bidang terkait, pas foto, serta bukti portofolio kerja aktual (seperti laporan inspeksi, JSA, atau SOP yang pernah disusun).'] },
          { heading: 'Proses Uji Asesmen & Sertifikasi', paragraphs: ['Proses asesmen meliputi verifikasi portofolio dokumen, tes tertulis/lisan, serta wawancara langsung oleh Asesor Kompetensi berlisensi BNSP untuk menyatakan asesi Kompeten (K).'] }
        ],
        faqs: [
          { question: `Berapa lama masa berlaku sertifikat BNSP untuk skema ini?`, answer: 'Sertifikat Kompetensi BNSP umumnya berlaku selama 3 (tiga) tahun dan dapat diperpanjang melalui proses resertifikasi / surveilans portofolio.' },
          { question: `Apakah sertifikasi BNSP ini dapat diikuti oleh individu umum?`, answer: 'Ya, terbuka bagi peserta individu maupun utusan perusahaan yang memenuhi persyaratan bukti kerja dan pendidikan yang dipersyaratkan oleh skema.' }
        ],
        related: ['pelatihan/ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker', 'panduan/syarat-ahli-k3-umum', 'panduan/biaya-pelatihan-k3'],
        sources: [
          { label: 'Badan Nasional Sertifikasi Profesi (BNSP)', url: 'https://bnsp.go.id', publisher: 'BNSP RI' },
          { label: 'Standar Kompetensi Kerja Nasional Indonesia (SKKNI)', url: 'https://kemnaker.go.id', publisher: 'Kemnaker RI' }
        ],
        status: 'published',
        publishedAt: '2026-08-10',
        updatedAt: '2026-09-01',
        indexable: true,
        intent: `skema kompetensi bnsp ${title}`,
        primaryKeyword: `sertifikasi bnsp ${slug.replace(/^skema-/, '').replace(/-/g, ' ')}`,
        searchIntent: `persyaratan uji kompetensi dan skema bnsp ${title}`,
        intentType: 'informational',
        parentTopic: `Skema Kompetensi BNSP ${g.levelName}`,
        cannibalizationGroup: `kompetensi-${g.levelName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        contentKind: 'competency',
        primaryCtaText: `Konsultasi Uji Kompetensi BNSP`,
        primaryCtaIntent: 'kemnaker_bnsp',
        secondaryCtaText: 'Tanya Jadwal Asesmen',
        secondaryCtaIntent: 'jadwal'
      });
    }
  }

  return records;
}

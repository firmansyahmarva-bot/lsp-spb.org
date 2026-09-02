import { ContentRecordInput } from './build-inventory';
import { officialSources } from './sources';

interface CompetencyGroup {
  levelName: string;
  rolePrefix: string;
  skkniSector: string;
  titles: string[];
}

export function generateKompetensiRecords(): ContentRecordInput[] {
  const records: ContentRecordInput[] = [];

  const groups: CompetencyGroup[] = [
    {
      levelName: 'Tingkat Operator K3',
      rolePrefix: 'Operator K3',
      skkniSector: 'SKKNI Pengoperasian Peralatan & Sarana K3',
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
      ]
    },
    {
      levelName: 'Tingkat Teknisi K3',
      rolePrefix: 'Teknisi K3',
      skkniSector: 'SKKNI Pemeliharaan & Pengujian Teknis K3',
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
      ]
    },
    {
      levelName: 'Tingkat Officer & Pengawas K3',
      rolePrefix: 'Safety Officer',
      skkniSector: 'SKKNI Pengawasan Operasional & Risiko K3',
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
        'Pengawasan Keselamatan Kerja Subkontraktor Lapangan', 'Pengawasan Kepatuhan Regulasi Ketenagakerjaan di Lokasi Kerja',
        'Penyusunan Laporan Statistik Kinerja K3 Bulanan', 'Pengawasan Kesiapsiagaan Jalur & Pintu Evakuasi Darurat',
        'Pemeriksaan Keselamatan Operasi Genset & Daya Sementara', 'Pengawasan Ergonomi Posisi Kerja & Penanganan Manual',
        'Pengawasan Kualitas Udara Ruangan & Kebersihan Pabrik', 'Penyusunan Rencana Kerja K3 Harian & Mingguan Proyek',
        'Verifikasi Kesiapan Tanggap Darurat & Tim Regu Pemadam', 'Pengawasan Keselamatan Pembongkaran & Demolisi Bangunan',
        'Penyelidikan Awal Penyebab Kecelakaan Ringan & Kerusakan Aset', 'Pengawasan Keselamatan Pekerjaan Listrik Tegangan Rendah'
      ]
    },
    {
      levelName: 'Tingkat Ahli & Spesialis K3',
      rolePrefix: 'Ahli K3 Spesialis',
      skkniSector: 'SKKNI Analisis Rekayasa & Manajemen K3',
      titles: [
        'Perancangan Sistem Manajemen Keselamatan & Kesehatan Kerja (SMK3)', 'Penyusunan Kebijakan K3 & Manual Sistem Perusahaan',
        'Analisis Akar Masalah Kecelakaan Kerja (Root Cause Analysis)', 'Penyusunan Kajian Keselamatan Proses (Process Safety Hazard Analysis)',
        'Perancangan Sistem Proteksi Kebakaran Aktif & Pasif', 'Perancangan Sistem Ventilasi Industri & Local Exhaust',
        'Evaluasi Ergonomi Komprehensif Tempat Kerja (Ergonomic Assessment)', 'Kajian Bahaya Reaktivitas Kimia & Toksikologi Industri',
        'Perancangan Program Tanggap Darurat & Kontinjensi Bencana Korporat', 'Penyusunan Rencana Keselamatan Konstruksi (RKK Proyek Besar)',
        'Analisis Kegagalan Sistem Menggunakan Fault Tree Analysis (FTA)', 'Penyusunan Event Tree Analysis (ETA) Skenario Kecelakaan Parah',
        'Perancangan Sistem Isolasi Energi Kompleks & Zero Energy State', 'Kajian Kelaikan Keselamatan Fasilitas Baru (PSSR Review)',
        'Analisis Kebutuhan Pelatihan K3 (Training Needs Analysis / TNA)', 'Penyusunan Matriks Akuntabilitas K3 bagi Seluruh Jenjang Manajemen',
        'Audit Kepatuhan Hukum Peraturan K3 Nasional & Internasional', 'Perancangan Sistem Pemantauan Paparan Bahaya Kesehatan Kerja',
        'Evaluasi Dampak Keselamatan Terhadap Perubahan Operasional (MOC)', 'Perancangan Sistem Manajemen Keselamatan Kontraktor (CSMS)',
        'Analisis Beban Kebakaran Fasilitas Industri (Fire Load Assessment)', 'Perancangan Sistem Proteksi Jatuh Total (Fall Protection Plan)',
        'Kajian Keselamatan Operasi Maritim & Fasilitas Kepelabuhanan', 'Perancangan Program Konservasi Pendengaran Korporasi',
        'Penyusunan Indikator Kinerja K3 Proaktif (Leading Safety KPIs)', 'Kajian Kesiapan Sertifikasi ISO 45001 & SMK3 PP 50/2012',
        'Analisis Risiko Kebocoran & Ledakan Gas Mudah Terbakar', 'Penyusunan Program Promosi Kesehatan Kerja & Kebugaran Terpadu',
        'Kajian Ergonomi Partisipatif & Redesain Stasiun Kerja Pabrik', 'Perancangan Protokol Tanggap Darurat Medis Lapangan (Medevac Protocol)'
      ]
    },
    {
      levelName: 'Tingkat Auditor & Asesor K3',
      rolePrefix: 'Auditor K3',
      skkniSector: 'SKKNI Audit Sistem Manajemen & Asesmen Kompetensi',
      titles: [
        'Perencanaan Audit Internal Sistem Manajemen K3', 'Penyusunan Checklist Audit Berdasarkan 166 Kriteria SMK3',
        'Pelaksanaan Wawancara & Verifikasi Bukti Objektif Audit', 'Penetapan Temuan Ketidaksesuaian Mayor & Minor Audit',
        'Penyusunan Laporan Hasil Audit K3 & Rekomendasi Perbaikan', 'Verifikasi Efektivitas Tindakan Perbaikan (CAPA Review)',
        'Pelaksanaan Audit Kepatuhan Kontraktor (CSMS Audit)', 'Pelaksanaan Audit Sistem Manajemen Keselamatan Pertambangan (SMKP)',
        'Pelaksanaan Audit Sistem Manajemen Keselamatan Konstruksi (SMKK)', 'Pelaksanaan Audit Proteksi Kebakaran Bangunan Komersial',
        'Pelaksanaan Audit K3 Rumah Sakit & Fasilitas Kesehatan (K3RS)', 'Pelaksanaan Audit Higiene Industri & Sanitasi Fasilitas',
        'Pelaksanaan Audit Ergonomi & Faktor Manusia di Lini Perakitan', 'Pelaksanaan Audit Kesiapsiagaan Tanggap Darurat & Evakuasi',
        'Pelaksanaan Audit Kepatuhan Lingkungan Kerja Permenaker 05/2018', 'Penyusunan Instrumen Asesmen Uji Kompetensi Profesi K3',
        'Pelaksanaan Asesmen Berbasis Portofolio & Bukti Kerja Nyata', 'Pelaksanaan Asesmen Observasi Praktik & Demonstrasi Keterampilan',
        'Pelaksanaan Asesmen Uji Lisan & Wawancara Pemahaman Standar', 'Pengambilan Keputusan Kompeten (K) atau Belum Kompeten (BK)',
        'Validasi Skema & Materi Uji Kompetensi (MUK) Tempat Uji Kompetensi', 'Audit Tata Kelola Tempat Uji Kompetensi (TUK) Berlisensi BNSP',
        'Penyusunan Laporan Hasil Uji Kompetensi ke Badan Nasional (BNSP)', 'Pelaksanaan Re-Sertifikasi & Pemeliharaan Kompetensi Profesi',
        'Audit Due Diligence K3 untuk Transaksi & Akuisisi Fasilitas Industri'
      ]
    },
    {
      levelName: 'Tingkat Higiene Industri & Kesehatan Kerja',
      rolePrefix: 'Industrial Hygienist',
      skkniSector: 'SKKNI Higiene Industri & Pemantauan Lingkungan Kerja',
      titles: [
        'Pengukuran & Pemetaan Kebisingan Fasilitas Industri (Noise Mapping)', 'Pengukuran Getaran Mesin & Evaluasi Paparan Tubuh Pekerja',
        'Pengukuran Tingkat Pencahayaan Tempat Kerja Sesuai Standar Lux', 'Pengukuran & Evaluasi Tekanan Panas Kerja (Heat Stress ISBB)',
        'Pengambilan Sampel Debu Respirabel Menggunakan Cyclone Sampler', 'Pengambilan Sampel Gas & Uap Beracun Menggunakan Sorbet Tube',
        'Analisis Kuantitatif Paparan Senyawa Organik Volatil (VOCs)', 'Pengendalian Bahaya Radiasi Gelombang Elektromagnetik & UV',
        'Evaluasi Sistem Ventilasi Ruang Kerja & Uji Kecepatan Aliran Udara', 'Pemeriksaan Kualitas Udara Dalam Ruangan Perkantoran (IAQ)',
        'Identifikasi & Pengendalian Bahaya Biologis (Biohazard Control)', 'Penyusunan Program Proteksi Pernapasan & Uji Fit Testing Masker',
        'Pengelolaan Higiene Sanitasi Kantin & Kualitas Air Minum Pabrik', 'Penilaian Paparan Bahan Kimia Karsinogenik (Benzena & Pelarut)',
        'Penilaian Bahaya Debu Silika Kristalin & Mitigasi Silikosis', 'Penilaian Bahaya Paparan Asbes & Prosedur Dekontaminasi',
        'Pengukuran Konsentrasi Logam Berat (Timbal, Merkuri, Kadmium)', 'Evaluasi Faktor Psikososial & Beban Mental Kerja Karyawan',
        'Pengelolaan Fasilitas Dekontaminasi & Emergency Eyewash Shower', 'Penyusunan Laporan Higiene Industri untuk Dinas Tenaga Kerja',
        'Pelaksanaan Surveilans Kesehatan Kerja bagi Pekerja Berisiko', 'Penyusunan Matriks Pajanan Bahaya Kerja (Health Exposure Matrix)',
        'Evaluasi Hasil Pemeriksaan Kesehatan Berkala Tenaga Kerja (MCU)', 'Perancangan Program Manajemen Kelelahan Kerja (Fatigue Control)',
        'Audit Kepatuhan Higiene Industri Berdasarkan Permenaker 05/2018'
      ]
    },
    {
      levelName: 'Tingkat Tanggap Darurat & Fire Rescue',
      rolePrefix: 'Emergency Responder',
      skkniSector: 'SKKNI Tanggap Darurat & Penyelamatan Industri',
      titles: [
        'Pengoperasian Kendaraan Pemadam Kebakaran Industri (Fire Truck)', 'Penerapan Taktik Pemadaman Api Menggunakan Formasi Regu Hydrant',
        'Penyelamatan Korban Kecelakaan di Ruang Terbatas (Confined Space Rescue)', 'Penyelamatan Korban Ketinggian Menggunakan Sistem Tali (High Angle Rescue)',
        'Penggunaan Alat Bantu Pernapasan SCBA dalam Atmosfer Beracun', 'Pemberian Pertolongan Pertama Gawat Darurat (First Aid CPR & AED)',
        'Penanganan Pendarahan Parah & Pemasangan Torniket Hemostatik', 'Penanganan Patah Tulang, Pembidaian & Stabilisasi Tulang Belakang',
        'Evakuasi Korban Cedera Menggunakan Tandu Lipat, Sekop & Long Spine Board', 'Penanganan Korban Paparan Bahan Kimia Beracun & Dekontaminasi Massal',
        'Pengendalian Tumpahan Bahan Berbahaya Menggunakan Chemical Spill Kit', 'Pengoperasian Sistem Komando Insiden (Incident Command System Lapangan)',
        'Pengoperasian Sistem Komunikasi Radio Darurat & Paging Fasilitas', 'Pemanduan Evakuasi Gedung Bertingkat Saat Ancaman Bom / Gempa Bumi',
        'Penanganan Kebakaran Cairan Mudah Terbakar Menggunakan Sistem Busa (Foam)', 'Penanganan Kebocoran Gas Beracun Klorin & Amonia di Fasilitas Industri',
        'Penyelamatan Korban Tersengat Listrik & Penanganan Luka Bakar Termal', 'Penyusunan Rencana Operasi Tanggap Darurat Fasilitas (Pre-Incident Plan)',
        'Simulasi Skenario Kebakaran Besar Bersama Dinas Pemadam Kebakaran Kota', 'Evaluasi Waktu Tanggap & Efektivitas Pasca-Insiden Tanggap Darurat'
      ]
    },
    {
      levelName: 'Tingkat Manajemen Korporat & CSMS',
      rolePrefix: 'HSE Corporate Lead',
      skkniSector: 'SKKNI Manajemen Strategis Keselamatan & CSMS',
      titles: [
        'Perumusan Rencana Strategis K3 Korporasi Jangka Panjang', 'Integrasi Sistem Manajemen K3, Lingkungan & Mutu (QHSE Integration)',
        'Pengelolaan Kepatuhan Regulasi & Due Diligence Hukum Ketenagakerjaan', 'Penyusunan Sistem Manajemen Keselamatan Kontraktor (CSMS)',
        'Prakualifikasi & Evaluasi Kinerja K3 Kontraktor Rekanan', 'Pengelolaan Anggaran & Analisis Biaya-Manfaat Program K3 (Cost-Benefit)',
        'Penyusunan Rencana Keberlanjutan Usaha & Kontinjensi Krisis (BCP)', 'Pengembangan Budaya Keselamatan Kerja Proaktif (Safety Culture Maturity)',
        'Pengelolaan Sistem Pelaporan K3 Berbasis Digital & Analisis Data', 'Pelaksanaan Tinjauan Manajemen (Management Review) Berkala',
        'Penyusunan Standar Keselamatan Pengadaan Barang & Mesin Baru', 'Pengelolaan Hubungan dengan Instansi Pengawas Ketenagakerjaan & Disnaker',
        'Penyusunan Laporan Keberlanjutan (Sustainability Report ESG) Aspek K3', 'Pengelolaan Investigasi Insiden Fatal & Komunikasi Krisis Publik',
        'Pengembangan Program Insentif & Pengakuan Prestasi Keselamatan Kerja', 'Pengelolaan Keselamatan Armada Logistik Transportasi Darat Korporat',
        'Perancangan Standar K3 untuk Fasilitas Remote Site & Lepas Pantai', 'Audit Kesiapan Sertifikasi SMK3 Bendera Emas & Penghargaan Zero Accident',
        'Pengelolaan Manajemen Risiko Perubahan Organisasi & Akuisisi Aset', 'Pengawasan Efektivitas Kepengurusan P2K3 di Seluruh Cabang Perusahaan'
      ]
    }
  ];

  for (const grp of groups) {
    for (let i = 0; i < grp.titles.length; i++) {
      const titleName = grp.titles[i];
      const fullTitle = `Skema Sertifikasi Kompetensi BNSP: ${titleName}`;
      const slug = `${titleName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`.replace(/^-|-$/g, '');
      const keyword = `sertifikasi bnsp ${slug.replace(/-/g, ' ')}`.trim();

      records.push({
        section: 'kompetensi',
        slug,
        title: fullTitle,
        metaTitle: `${fullTitle} | Uji Kompetensi BNSP`,
        description: `Panduan resmi skema sertifikasi kompetensi BNSP ${titleName}: unit kompetensi SKKNI, persyaratan portofolio bukti kerja, metode asesmen LSP, dan sertifikat berlogo Garuda.`,
        answer: `${fullTitle} adalah skema sertifikasi profesi berstandar nasional yang diselenggarakan melalui Lembaga Sertifikasi Profesi (LSP) berlisensi BNSP untuk memvalidasi keterampilan, pengetahuan kerja, dan sikap profesional tenaga kerja dalam ${titleName} sesuai ${grp.skkniSector}.`,
        highlights: [
          'Sertifikat Resmi Berlogo Garuda Emas BNSP',
          `Standar Rujukan: ${grp.skkniSector}`,
          `Tingkatan: ${grp.levelName} (${grp.rolePrefix})`,
          'Metode Asesmen: Verifikasi Portofolio, Wawancara & Observasi TUK'
        ],
        courseDetails: {
          level: `Skema Sertifikasi Kompetensi ${grp.levelName}`,
          duration: '1 s.d. 2 Hari Asesmen Uji Kompetensi',
          method: 'Asesmen Langsung di Tempat Uji Kompetensi (TUK) Mandiri / On-Site Perusahaan',
          legalBasis: 'PP No. 10 Tahun 2018 tentang BNSP & SKKNI Terkait',
          targetAudience: [
            `${grp.rolePrefix} dan Praktisi K3 Sektoral Terkait`,
            'Tenaga Kerja yang Membutuhkan Pengakuan Kualifikasi Profesi Nasional',
            'Personel Perusahaan untuk Pemenuhan Prakualifikasi Tender Proyek'
          ],
          prerequisites: [
            'Scan KTP / Identitas diri yang sah',
            'Scan Ijazah pendidikan terakhir sesuai skema persyaratan',
            'Surat Keterangan Pengalaman Kerja / Portofolio Bukti Kerja di bidang terkait',
            'Logbook / Bukti Dokumen Hasil Pekerjaan (SOP, JSA, Laporan Inspeksi, Sertifikat Pelatihan Sebelumnya)'
          ],
          certificationOutput: [
            'Sertifikat Kompetensi Kerja Nasional Indonesia bertanda Logo Garuda Emas BNSP',
            'Transkrip Unit Kompetensi SKKNI yang Dinyatakan Kompeten (K)',
            'Masa Berlaku Sertifikat 3 (Tiga) Tahun Berstandar Nasional'
          ],
          syllabusModules: [
            { module: 'Unit Kompetensi Inti 1', topics: [`Penerapan Norma & Prosedur Kerja ${titleName}`, 'Identifikasi Bahaya & Pengendalian Risiko Operasional'] },
            { module: 'Unit Kompetensi Inti 2', topics: ['Pengoperasian, Pemeriksaan & Pemeliharaan Terstandar', 'Penyusunan Dokumentasi Rekaman Kerja Sesuai Format SKKNI'] },
            { module: 'Unit Asesmen & Validasi', topics: ['Verifikasi Portofolio Bukti Langsung & Tidak Langsung oleh Asesor', 'Uji Wawancara Lisan, Simulasi Praktik & Pengambilan Keputusan Asesmen'] }
          ],
          priceInfo: 'Investasi asesmen mencakup pendaftaran LSP, bimbingan pra-asesmen, biaya Tempat Uji Kompetensi (TUK), honorarium asesor bersertifikat, dan penerbitan sertifikat BNSP.'
        },
        blocks: [
          {
            heading: `Mengenal Skema Kompetensi ${titleName}`,
            paragraphs: [
              `Skema sertifikasi ${titleName} mengacu pada ketetapan ${grp.skkniSector} dan regulasi ketenagakerjaan nasional. Skema ini dirancang khusus untuk memastikan bahwa tenaga kerja memiliki keterampilan praktis, pengetahuan regulasi, dan sikap kerja aman yang teruji secara objektif oleh Asesor Kompetensi berlisensi BNSP.`,
              'Sertifikat kompetensi berlogo Garuda Emas yang diterbitkan oleh BNSP merupakan bukti pengakuan kompetensi resmi yang diakui oleh kementerian, instansi pemerintah, BUMN, dan perusahaan swasta nasional di seluruh Indonesia.'
            ]
          },
          {
            heading: 'Daftar Unit Kompetensi SKKNI & Bukti Kerja (Portofolio)',
            paragraphs: [
              'Peserta asesmen diwajibkan mengumpulkan dan menunjukkan bukti kerja valid, asli, terkini, dan memadai (VATM) yang mencerminkan penguasaan unit-unit kompetensi:',
            ],
            bullets: [
              'Bukti penerapan prosedur keselamatan kerja dan pencegahan kecelakaan di area tugas',
              'Laporan pelaksanaan pekerjaan teknis operasional sesuai standar SOP perusahaan',
              'Dokumen analisis keselamatan pekerjaan (JSA / HIRADC) yang pernah disusun secara mandiri',
              'Sertifikat pelatihan pendukung atau surat rekomendasi kompetensi dari atasan langsung'
            ]
          },
          {
            heading: 'Alur Pelaksanaan Asesmen di Tempat Uji Kompetensi (TUK)',
            paragraphs: [
              'Proses uji kompetensi dijalankan secara terstruktur melalui tahapan:',
            ],
            bullets: [
              '1. Konsultasi Pra-Asesmen: Asesi (peserta) mengisi formulir APL-01 (Permohonan) dan APL-02 (Asesmen Mandiri) didampingi tim admisi.',
              '2. Verifikasi Portofolio: Asesor Kompetensi memeriksa kesesuaian dokumen bukti kerja yang diajukan peserta.',
              '3. Uji Wawancara & Observasi Praktik: Asesi mendemonstrasikan keterampilan dan menjawab pertanyaan pemahaman teknis.',
              '4. Rekomendasi & Pleno LSP: Asesor merekomendasikan hasil Kompeten (K) atau Belum Kompeten (BK), dilanjutkan rapat pleno penetapan oleh LSP untuk penerbitan sertifikat BNSP.'
            ]
          },
          {
            heading: 'Perbedaan Sertifikat Kompetensi BNSP vs Lisensi Kemnaker RI',
            paragraphs: [
              'Perlu dipahami bahwa Sertifikat Kompetensi BNSP membuktikan pengakuan keahlian profesi individu secara independen (melekat pada pribadi pemegang sertifikat), sedangkan Lisensi / SKP Kemnaker RI adalah izin penunjukan kewenangan hukum untuk bertindak atas nama perusahaan tertentu di tempat kerja.',
              'Keduanya saling melengkapi dan sangat bernilai dalam memperkuat daya saing karir maupun pemenuhan kualifikasi tender perusahaan.'
            ]
          }
        ],
        faqs: [
          { question: `Apa perbedaan utama antara sertifikasi kompetensi BNSP dengan pelatihan sertifikat biasa?`, answer: 'Pelatihan biasa hanya menyatakan keikutsertaan kursus, sedangkan sertifikasi BNSP melalui proses uji asesmen ketat oleh asesor bersertifikat untuk memvalidasi bukti kerja riil sesuai Standar Kompetensi Kerja Nasional Indonesia (SKKNI).' },
          { question: `Berapa lama masa berlaku Sertifikat Kompetensi BNSP?`, answer: 'Sertifikat Kompetensi BNSP berlaku selama 3 (tiga) tahun dan dapat diperpanjang melalui mekanisme resertifikasi portofolio sebelum masa berlaku habis.' },
          { question: `Bagaimana jika seorang asesi dinyatakan Belum Kompeten (BK)?`, answer: 'Peserta yang belum memenuhi bukti pada unit tertentu akan diberikan kesempatan perbaikan (re-asesmen) pada unit yang belum kompeten dalam batas waktu yang ditentukan oleh LSP.' }
        ],
        related: ['pelatihan/ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker', 'panduan/syarat-ahli-k3-umum', 'jadwal'],
        sources: [officialSources.bnsp_general, officialSources.pp10, officialSources.uu13],
        status: 'published',
        publishedAt: '2026-08-01',
        updatedAt: '2026-09-01',
        indexable: true,
        intent: `kompetensi ${slug} syarat portofolio skkni bnsp`,
        primaryKeyword: keyword,
        searchIntent: `syarat uji kompetensi, unit skkni, portofolio, dan pendaftaran ${fullTitle}`,
        intentType: 'commercial',
        parentTopic: `Sertifikasi Kompetensi BNSP ${grp.levelName}`,
        cannibalizationGroup: `kompetensi-${grp.rolePrefix.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        contentKind: 'competency',
        primaryCtaText: `Konsultasi Asesmen ${titleName.split('(')[0].trim()}`,
        primaryCtaIntent: 'daftar',
        secondaryCtaText: 'Cek Kelengkapan Portofolio BNSP',
        secondaryCtaIntent: 'syarat'
      });
    }
  }

  return records;
}

import { ContentRecordInput } from './build-inventory';
import { officialSources, SourceItem } from './sources';

interface ProgramSeed {
  slug: string;
  title: string;
  duration?: string;
  legal?: string;
  sourceKey?: string;
}

// 1. DOMAIN KELEMBAGAAN, TATA KELOLA K3 & SMK3 (30 Programs)
const kelembagaanSeeds: ProgramSeed[] = [
  { slug: 'ahli-k3-umum', title: 'Pelatihan Ahli K3 Umum (Sertifikasi Kemnaker RI)', duration: '120 JP (12 Hari Kerja)', legal: 'Permenaker No. PER.02/MEN/1992 & UU No. 1 Tahun 1970', sourceKey: 'permen02_1992' },
  { slug: 'auditor-smk3', title: 'Pelatihan Auditor SMK3 (Sertifikasi Kemnaker RI)', duration: '40 JP (4 Hari Kerja)', legal: 'PP No. 50 Tahun 2012 tentang Penerapan SMK3', sourceKey: 'pp50' },
  { slug: 'lead-auditor-smk3', title: 'Pelatihan Lead Auditor SMK3 Kemnaker RI', duration: '50 JP (5 Hari Kerja)', legal: 'PP No. 50 Tahun 2012 & Standar Audit Kemnaker', sourceKey: 'pp50' },
  { slug: 'pembinaan-p2k3', title: 'Pelatihan Tata Kelola & Sekretariat P2K3 Perusahaan', duration: '24 JP (3 Hari Kerja)', legal: 'Permenaker No. PER.04/MEN/1987', sourceKey: 'permen04_1987' },
  { slug: 'implementasi-smk3-pp-50', title: 'Pelatihan Implementasi 166 Kriteria SMK3 PP 50/2012', duration: '30 JP (3 Hari Kerja)', legal: 'PP No. 50 Tahun 2012 Lampiran II', sourceKey: 'pp50' },
  { slug: 'integrasi-smk3-dan-iso-45001', title: 'Pelatihan Integrasi SMK3 PP 50/2012 & ISO 45001:2018', duration: '32 JP (4 Hari Kerja)', legal: 'PP No. 50 Tahun 2012 & ISO 45001:2018', sourceKey: 'iso45001' },
  { slug: 'auditor-internal-smk3', title: 'Pelatihan Auditor Internal SMK3 Perusahaan', duration: '24 JP (3 Hari Kerja)', legal: 'PP No. 50 Tahun 2012 Pasal 14', sourceKey: 'pp50' },
  { slug: 'manajemen-risiko-k3', title: 'Pelatihan Manajemen Risiko K3 & HIRADC Komprehensif', duration: '24 JP (3 Hari Kerja)', legal: 'PP No. 50 Tahun 2012 & Standar ISO 31000', sourceKey: 'pp50' },
  { slug: 'investigasi-insiden-k3', title: 'Pelatihan Investigasi Kecelakaan Kerja & Analisis Akar Masalah (RCA)', duration: '24 JP (3 Hari Kerja)', legal: 'Permenaker No. PER.03/MEN/1998', sourceKey: 'uu1' },
  { slug: 'safety-leadership-eksekutif', title: 'Pelatihan Safety Leadership & Budaya K3 bagi Manajemen Eksekutif', duration: '16 JP (2 Hari Kerja)', legal: 'UU No. 1 Tahun 1970 Pasal 14 & PP 50/2012', sourceKey: 'uu1' },
  { slug: 'safety-accountability-pengawas', title: 'Pelatihan Akuntabilitas Keselamatan bagi Pengawas Lapangan', duration: '20 JP (2 Hari Kerja)', legal: 'UU No. 1 Tahun 1970 & PP No. 50 Tahun 2012', sourceKey: 'uu1' },
  { slug: 'pengukuran-lingkungan-kerja', title: 'Pelatihan Dasar Pengukuran Faktor Bahaya Lingkungan Kerja', duration: '30 JP (3 Hari Kerja)', legal: 'Permenaker No. 05 Tahun 2018 tentang K3 Lingkungan Kerja', sourceKey: 'permen05_2018' },
  { slug: 'safety-officer-k3', title: 'Pelatihan & Pembinaan Safety Officer Lapangan Terapan', duration: '40 JP (4 Hari Kerja)', legal: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja', sourceKey: 'uu1' },
  { slug: 'inspeksi-k3-terjadwal', title: 'Pelatihan Teknik Inspeksi K3 & Audit Visual Tempat Kerja', duration: '20 JP (2 Hari Kerja)', legal: 'PP No. 50 Tahun 2012 Kriteria 6.5', sourceKey: 'pp50' },
  { slug: 'penyusunan-sop-k3', title: 'Pelatihan Penyusunan Standard Operating Procedure (SOP) & JSA Berbasis K3', duration: '24 JP (3 Hari Kerja)', legal: 'PP No. 50 Tahun 2012 Kriteria 6.1', sourceKey: 'pp50' },
  { slug: 'safety-induction-kontraktor', title: 'Pelatihan Manajemen Safety Induction & CSMS (Contractor Safety)', duration: '24 JP (3 Hari Kerja)', legal: 'Permenaker & Standar CSMS Industri', sourceKey: 'pp50' },
  { slug: 'penilaian-kinerja-k3', title: 'Pelatihan KPI & Leading-Lagging Indicator Kinerja K3', duration: '20 JP (2 Hari Kerja)', legal: 'PP No. 50 Tahun 2012 Kriteria 8.1', sourceKey: 'pp50' },
  { slug: 'k3-pelaporan-wajib-naker', title: 'Pelatihan Tata Cara Pelaporan K3 & e-K3 Kemnaker RI', duration: '16 JP (2 Hari Kerja)', legal: 'UU No. 1 Tahun 1970 & Permenaker No. 04/1987', sourceKey: 'permen04_1987' },
  { slug: 'komunikasi-k3-toolbox', title: 'Pelatihan Komunikasi Efektif K3 & Pemanduan Safety Toolbox Meeting', duration: '16 JP (2 Hari Kerja)', legal: 'UU No. 1 Tahun 1970 Pasal 9', sourceKey: 'uu1' },
  { slug: 'manajemen-perubahan-moc-k3', title: 'Pelatihan Management of Change (MOC) Keselamatan Kerja', duration: '24 JP (3 Hari Kerja)', legal: 'PP No. 50 Tahun 2012 & Standar Process Safety Management', sourceKey: 'pp50' },
  { slug: 'k3-perkantoran', title: 'Pelatihan K3 Perkantoran & Keselamatan Fasilitas Kerja non-Pabrik', duration: '20 JP (2 Hari Kerja)', legal: 'Permenkes No. 48 Tahun 2016 tentang Standar K3 Perkantoran', sourceKey: 'uu1' },
  { slug: 'k3-fasilitas-kesehatan', title: 'Pelatihan K3 Rumah Sakit & Fasilitas Layanan Kesehatan (K3RS)', duration: '30 JP (3 Hari Kerja)', legal: 'Permenkes No. 66 Tahun 2016 tentang K3RS', sourceKey: 'permenkes66_2016' },
  { slug: 'k3-sektor-retail-logistik', title: 'Pelatihan K3 Sektor Retail, Pergudangan & Pusat Distribusi Logistik', duration: '24 JP (3 Hari Kerja)', legal: 'UU No. 1 Tahun 1970 & Standar K3 Gudang', sourceKey: 'uu1' },
  { slug: 'k3-sektor-pendidikan', title: 'Pelatihan K3 Kampus & Fasilitas Lembaga Pendidikan', duration: '16 JP (2 Hari Kerja)', legal: 'UU No. 1 Tahun 1970 & Standar Keselamatan Bangunan Gedung', sourceKey: 'uu1' },
  { slug: 'k3-sektor-pariwisata-hotel', title: 'Pelatihan K3 Industri Perhotelan, Resort & Destinasi Wisata', duration: '20 JP (2 Hari Kerja)', legal: 'UU No. 1 Tahun 1970 & Permenkes Perkantoran', sourceKey: 'uu1' },
  { slug: 'k3-sektor-pertambangan-pengantar', title: 'Pelatihan Dasar Keselamatan Pertambangan (SMKP Minerba)', duration: '30 JP (3 Hari Kerja)', legal: 'Kepmen ESDM No. 1827 K/30/MEM/2018', sourceKey: 'esdm1827_2018' },
  { slug: 'k3-sektor-konstruksi-pengantar', title: 'Pelatihan Dasar Keselamatan Konstruksi & SMKK PUPR', duration: '24 JP (3 Hari Kerja)', legal: 'Permen PUPR No. 10 Tahun 2021', sourceKey: 'pupr10_2021' },
  { slug: 'k3-sektor-migas-pengantar', title: 'Pelatihan Dasar Keselamatan Migas & Sistem Izin Kerja Aman', duration: '30 JP (3 Hari Kerja)', legal: 'UU No. 22 Tahun 2001 & Regulasi Migas', sourceKey: 'uu1' },
  { slug: 'k3-industri-manufaktur-umum', title: 'Pelatihan K3 Manufaktur & Operasional Mesin Industri', duration: '24 JP (3 Hari Kerja)', legal: 'UU No. 1 Tahun 1970 & PP No. 50 Tahun 2012', sourceKey: 'uu1' },
  { slug: 'k3-industri-makanan-minuman', title: 'Pelatihan K3 Industri Makanan & Minuman (Food & Beverage Plant)', duration: '24 JP (3 Hari Kerja)', legal: 'UU No. 1 Tahun 1970 & Permenaker 05/2018', sourceKey: 'permen05_2018' }
];

// Helper to generate bespoke technical content for Kelembagaan
function buildKelembagaanRecord(s: ProgramSeed): ContentRecordInput {
  const legal = s.legal || 'PP No. 50 Tahun 2012';
  const duration = s.duration || '24 JP (3 Hari Kerja)';

  const cleanTitle = s.title.replace(/^(Pelatihan & Pembinaan|Pelatihan|Pembinaan)\s+/i, '').replace(/\s*\(.*?\)\s*/g, ' ').trim();
  const kw = s.slug === 'ahli-k3-umum'
    ? 'pelatihan ahli k3 umum kemnaker'
    : s.slug === 'auditor-smk3'
    ? 'sertifikasi auditor smk3 kemnaker'
    : `pelatihan ${cleanTitle.toLowerCase()} kemnaker`;
  const intent = `jadwal, biaya, syarat pendaftaran, dan sertifikasi ${cleanTitle.toLowerCase()}`;

  const sourceItem: SourceItem = officialSources[s.sourceKey || 'pp50'] || officialSources.pp50;

  return {
    section: 'pelatihan',
    slug: s.slug,
    title: s.title,
    metaTitle: `${s.title} | Jadwal, Biaya & Sertifikasi Resmi`,
    description: `Pembinaan resmi ${s.title} durasi ${duration}. Membahas audit 166 kriteria PP 50/2012, tata kelola P2K3, HIRADC 4M+1E, dan verifikasi SKP Kemnaker RI dengan konsultan PT Kreasi Ultimate Berjaya.`,
    answer: `${s.title} adalah program pembinaan tata kelola K3 resmi berdurasi ${duration} sesuai ${legal}. Pembinaan ini melatih pengurus dan personel K3 menyusun manual SMK3, mengorganisasi komite P2K3, mengeksekusi audit internal/eksternal, serta memenuhi kewajiban pelaporan berkas ke Disnaker.`,
    highlights: [
      `Durasi Pembinaan: ${duration}`,
      `Landasan Hukum: ${legal}`,
      `Jalur Penunjukan: Sertifikasi Penunjukan Kemnaker RI (SKP & Kartu Lisensi K3)`,
      `Skema Pelaksanaan: Blended Online Learning & Corporate In-House`
    ],
    courseDetails: {
      level: 'Sertifikasi Pembinaan Kemnaker RI',
      duration,
      method: 'Blended Learning (Teori Virtual Interaktif + Praktik Lapangan & Evaluasi)',
      legalBasis: legal,
      targetAudience: [
        'Calon Sekretaris & Pengurus Komite P2K3 Perusahaan',
        'HSE Manager, Management Representative (MR) & Internal Auditor',
        'Staff HRD, Legal Corporate, dan Section Head Operasional'
      ],
      prerequisites: [
        'Scan KTP & Ijazah pendidikan formal (D3/S1 sesuai regulasi Permenaker 02/1992)',
        'Surat Penugasan Resmi dari manajemen perusahaan pengutus',
        'Pas foto formal background merah / biru ukuran 3x4 & 4x6',
        'CV portofolio pengalaman kerja (khusus skema Auditor / Lead Auditor)'
      ],
      certificationOutput: [
        `Sertifikat Pembinaan Kemnaker RI Resmi untuk ${cleanTitle}`,
        'Surat Keputusan Penunjukan (SKP) Pengawas Ketenagakerjaan',
        'Kartu Lisensi Kewenangan K3 (SIO Kemnaker) Masa Berlaku 3 Tahun'
      ],
      syllabusModules: [
        {
          module: 'Modul 01: Kebijakan Nasional K3 & Landasan Hukum Ketenagakerjaan',
          topics: [
            'Penelaahan UU No. 1 Tahun 1970 & Peraturan Menteri Ketenagakerjaan Terkait',
            'Struktur Kelembagaan P2K3 & Tata Cara Pelaporan Triwulan Resmi ke Disnaker',
            'Hak, Kewajiban, dan Sanksi Pidana Pengurus Tempat Kerja'
          ],
          hours: '10 JP'
        },
        {
          module: 'Modul 02: Implementasi SMK3 PP 50/2012 & Teknik Audit Sistem Management',
          topics: [
            'Penilaian 166 Kriteria Audit SMK3 (Tingkat Awal, Transisi, Lanjutan)',
            'Metodologi HIRADC 4M+1E & Penyusunan Risk Register Komprehensif',
            'Teknik Wawancara Audit, Verifikasi Bukti Kerja & Penerbitan Temuan (NCR)'
          ],
          hours: '14 JP'
        },
        {
          module: 'Modul 03: Praktik Kerja Lapangan (PKL) & Evaluasi Ujian Akhir Kemnaker',
          topics: [
            'Simulasi Audit Lapangan / Praktik Pemeriksaan Norma K3 Fasilitas Industri',
            'Penyusunan Laporan Praktik Kerja Lapangan & Seminar Kesiapan Audit',
            'Ujian Teori Evaluasi Kelulusan & Wawancara Penunjukan Resmi'
          ],
          hours: '6 JP'
        }
      ],
      priceInfo: 'Investasi mencakup biaya pembinaan resmi, modul fisik/digital, sertifikat & SKP Kemnaker RI, serta pendampingan verifikasi berkas. Penawaran khusus tersedia untuk In-House Training.'
    },
    blocks: [
      {
        heading: `Landasan Regulasi & Urgensi Tata Kelola ${s.title}`,
        paragraphs: [
          `Setiap perusahaan di Indonesia yang mempekerjakan 100 orang atau lebih, atau memiliki tingkat bahaya tinggi, diwajibkan oleh ${legal} dan UU No. 1 Tahun 1970 untuk menerapkan Sistem Manajemen K3 (SMK3) serta membentuk Panitia Pembina K3 (P2K3).`,
          `Penyelenggaraan ${s.title} memberikan kepastian hukum bagi pengurus tempat kerja dalam memenuhi audit kepatuhan, mencegah sanksi administratif, dan membangun sistem tata kelola keselamatan terstruktur.`
        ]
      },
      {
        heading: `Rincian Silabus Komprehensif & Teknik Audit 166 Kriteria`,
        paragraphs: [
          `Pembinaan ini membedah secara langsung mekanisme penyusunan Manual K3, SOP pengendalian operasional, dan simulasi penilaian 166 kriteria audit SMK3.`,
          `Peserta dilatih melakukan verifikasi telusur dokumen, inspeksi fisik tempat kerja, serta analisis akar masalah kecelakaan kerja menggunakan metode 5-Why dan Fishbone Diagram.`
        ],
        bullets: [
          'Formulasi Kebijakan K3 Tertulis & Penetapan Sasaran Keselamatan Tahunan',
          'Identifikasi Bahaya Metodologi HIRADC (Man, Machine, Material, Method, Environment)',
          'Prosedur Izin Kerja Aman (PTW), Management of Change (MOC), dan Audit CSMS Vendor',
          'Simulasi Penyusunan Laporan Audit Internal & Persiapan Audit Sertifikasi Eksternal'
        ]
      },
      {
        heading: 'Penunjukan Legalitas & Masa Berlaku SKP Kemnaker RI',
        paragraphs: [
          'Lulusan pembinaan berhak mendapatkan Sertifikat Pembinaan resmi dari Kementerian Ketenagakerjaan RI, Surat Keputusan Penunjukan (SKP), dan Kartu Lisensi Kewenangan K3.',
          'Lisensi berlaku selama 3 (tiga) tahun dan dapat diperpanjang secara berkala melalui mekanisme evaluasi kinerja P2K3 dan pelaporan laporan triwulan.'
        ]
      },
      {
        heading: 'Skema Kelas Public Batch & Proposal In-House Corporate',
        paragraphs: [
          `PT Kreasi Ultimate Berjaya menyelenggarakan ${s.title} secara berkala setiap bulan melalui Public Batch Blended Learning, serta menerima In-House Training khusus perusahaan.`,
          'Tim konsultan kami siap menerbitkan Surat Penawaran Harga (SPH) resmi dan melakukan pre-screening ijazah peserta sebelum kelas dimulai.'
        ]
      }
    ],
    faqs: [
      {
        question: `Apakah ijazah SLTA bisa mendaftar pelatihan ${cleanTitle}?`,
        answer: `Sesuai Permenaker 02/1992, untuk skema Ahli K3 Umum dan Auditor SMK3 dipersyaratkan minimal lulusan D3 / S1 semua jurusan. Bagi lulusan SLTA dapat mengambil skema Safety Officer Terapan atau Teknisi Spesialis.`
      },
      {
        question: 'Berapa lama proses penerbitan Sertifikat dan SKP Kemnaker RI?',
        answer: 'Surat Keterangan Lulus (SKL) diterbitkan segera setelah evaluasi selesai. Sertifikat fisik dan Lisensi/SKP Kemnaker diterbitkan dalam waktu 30-45 hari kerja melalui portal e-K3 Kemnaker.'
      },
      {
        question: 'Apakah PT Kreasi Ultimate Berjaya melayani pengajuan In-House Training di lokasi pabrik kami?',
        answer: 'Ya, kami melayani In-House Training di seluruh wilayah Indonesia dengan silabus yang disesuaikan dengan kondisi risiko dan fasilitas operasional perusahaan Anda.'
      }
    ],
    related: [
      'pelatihan/ahli-k3-umum',
      'panduan/syarat-ahli-k3-umum',
      'panduan/biaya-pelatihan-k3',
      'perbandingan/bnsp-vs-kemnaker',
      'profesi/ahli-k3-umum',
      'regulasi-k3/pp-50-2012'
    ],
    sources: [sourceItem, officialSources.uu1, officialSources.pp50],
    status: 'published',
    publishedAt: '2026-08-01',
    updatedAt: '2026-09-01',
    indexable: true,
    intent: `${kw} ${intent}`,
    primaryKeyword: kw,
    searchIntent: intent,
    intentType: 'commercial',
    parentTopic: 'Pelatihan Kelembagaan, Tata Kelola K3 & SMK3',
    cannibalizationGroup: 'pelatihan-kelembagaan',
    contentKind: 'program',
    primaryCtaText: `Tanya Jadwal & Biaya ${cleanTitle}`,
    primaryCtaIntent: 'jadwal',
    secondaryCtaText: 'Konsultasi In-House Training',
    secondaryCtaIntent: 'perusahaan'
  };
}

// 2. DOMAIN PENANGGULANGAN KEBAKARAN & PROTEKSI API (30 Programs)
const kebakaranSeeds: ProgramSeed[] = [
  { slug: 'k3-kebakaran', title: 'Pelatihan K3 Penanggulangan Kebakaran (Paket Sertifikasi Kemnaker)', duration: '30 JP (3 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999', sourceKey: 'kep186_1999' },
  { slug: 'k3-kebakaran-kelas-d', title: 'Pelatihan Petugas Peran Kebakaran (Kelas D Sertifikasi Kemnaker RI)', duration: '25 JP (3 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999 Lampiran I', sourceKey: 'kep186_1999' },
  { slug: 'k3-kebakaran-kelas-c', title: 'Pelatihan Regu Penanggulangan Kebakaran (Kelas C Sertifikasi Kemnaker)', duration: '60 JP (6 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999 Lampiran II', sourceKey: 'kep186_1999' },
  { slug: 'k3-kebakaran-kelas-b', title: 'Pelatihan Koordinator Unit Penanggulangan Kebakaran (Kelas B Kemnaker)', duration: '40 JP (4 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999 Lampiran III', sourceKey: 'kep186_1999' },
  { slug: 'k3-kebakaran-kelas-a', title: 'Pelatihan Ahli K3 Spesialis Penanggulangan Kebakaran (Kelas A Kemnaker)', duration: '120 JP (12 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999 Lampiran IV', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-inspeksi-pemeliharaan-apar-tabung-pemadam-api-ringan', title: 'Pelatihan Inspeksi & Pemeliharaan APAR Tabung Pemadam Api Ringan', duration: '16 JP (2 Hari Kerja)', legal: 'Permenaker No. PER.04/MEN/1980', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-pengujian-sistem-hydran-kebakaran-pomp-pipa-nozzle', title: 'Pelatihan Pengujian Sistem Hydran Kebakaran (Pompa, Pipa & Nozzle)', duration: '24 JP (3 Hari Kerja)', legal: 'Instruksi Menaker No. INS.11/M/BW/1997', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-perancangan-pemeliharaan-sistem-sprinkler-otomatis', title: 'Pelatihan Perancangan & Pemeliharaan Sistem Sprinkler Otomatis', duration: '24 JP (3 Hari Kerja)', legal: 'SNI 03-3989 & Standar Kemnaker', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-sistem-deteksi-alarm-kebakaran-smoke-heat-detector', title: 'Pelatihan Sistem Deteksi & Alarm Kebakaran (Smoke & Heat Detector)', duration: '20 JP (2 Hari Kerja)', legal: 'SNI 03-3985 & Permenaker 02/1983', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-sistem-pemadam-gas-bersih-clean-agent-co2-fm200', title: 'Pelatihan Sistem Pemadam Gas Bersih (Clean Agent CO2 & FM200)', duration: '20 JP (2 Hari Kerja)', legal: 'NFPA 2001 & Permenaker 02/1983', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-manajemen-tanggap-darurat-kebakaran-emergency-response', title: 'Pelatihan Manajemen Tanggap Darurat Kebakaran (Emergency Response)', duration: '24 JP (3 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-penyusunan-dokumen-fire-emergency-plan-fep-gedung', title: 'Pelatihan Penyusunan Dokumen Fire Emergency Plan (FEP) Gedung', duration: '20 JP (2 Hari Kerja)', legal: 'PP No. 50 Tahun 2012 Kriteria 6.7', sourceKey: 'pp50' },
  { slug: 'pelatihan-simulasi-evakuasi-kebakaran-drill-gedung-bertingkat', title: 'Pelatihan Simulasi Evakuasi Kebakaran (Fire Drill Gedung Bertingkat)', duration: '16 JP (2 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-inspeksi-keselamatan-kebakaran-gedung-fire-safety-inspection', title: 'Pelatihan Inspeksi Keselamatan Kebakaran Gedung (Fire Safety Audit)', duration: '24 JP (3 Hari Kerja)', legal: 'Permenaker No. PER.02/MEN/1983', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-tata-cara-pembentukan-tim-tanggap-darurat-ert-pabrik', title: 'Pelatihan Pembentukan Tim Tanggap Darurat (Emergency Response Team ERT)', duration: '20 JP (2 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-k3-pekerjaan-panas-hot-work-permit-welding-cutting', title: 'Pelatihan K3 Pekerjaan Panas (Hot Work Permit, Welding & Cutting)', duration: '20 JP (2 Hari Kerja)', legal: 'UU No. 1 Tahun 1970 & Permenaker 02/1983', sourceKey: 'uu1' },
  { slug: 'pelatihan-pencegahan-kebakaran-area-penyimpanan-bahan-kimia-mudah-terbakar', title: 'Pelatihan Pencegahan Kebakaran Area Bahan Kimia Mudah Terbakar', duration: '24 JP (3 Hari Kerja)', legal: 'Kepmenaker No. KEP.187/MEN/1999 & Kep-186/1999', sourceKey: 'kep187_1999' },
  { slug: 'pelatihan-pencegahan-kebakaran-instalasi-listrik-panel-gardu', title: 'Pelatihan Pencegahan Kebakaran Instalasi Listrik & Panel Gardu', duration: '20 JP (2 Hari Kerja)', legal: 'Permenaker No. 12 Tahun 2015 & SNI PUIL', sourceKey: 'permen12_2015' },
  { slug: 'pelatihan-inspeksi-tangga-darurat-pintu-kebakaran-pressurized-stairwell', title: 'Pelatihan Inspeksi Tangga Darurat & Pintu Tahan Api Pressurized Stairwell', duration: '16 JP (2 Hari Kerja)', legal: 'SNI 03-1736 & Permenaker 02/1983', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-investigasi-penyebab-kebakaran-industri-fire-investigation', title: 'Pelatihan Investigasi Penyebab Kebakaran Industri (Fire Investigation)', duration: '24 JP (3 Hari Kerja)', legal: 'Permenaker No. PER.03/MEN/1998', sourceKey: 'uu1' },
  { slug: 'pelatihan-penilaian-risiko-kebakaran-fire-risk-assessment-fra', title: 'Pelatihan Penilaian Risiko Kebakaran (Fire Risk Assessment FRA)', duration: '20 JP (2 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-k3-penanggulangan-kebakaran-dapur-komersial-restoran', title: 'Pelatihan K3 Penanggulangan Kebakaran Dapur Komersial & Restoran', duration: '16 JP (2 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-k3-kebakaran-area-gudang-logistik-rack-storage', title: 'Pelatihan K3 Kebakaran Area Gudang Logistik & High-Rack Storage', duration: '20 JP (2 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-k3-kebakaran-kapal-fasilitas-pelabuhan-maritim', title: 'Pelatihan K3 Kebakaran Kapal & Fasilitas Pelabuhan Maritim', duration: '30 JP (3 Hari Kerja)', legal: 'Kepmenaker KEP.186/MEN/1999 & Standar Maritim', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-k3-kebakaran-pabrik-tekstil-garmen-debu-serabut', title: 'Pelatihan K3 Kebakaran Pabrik Tekstil, Garmen & Debu Serabut', duration: '20 JP (2 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-k3-kebakaran-pabrik-kertas-kayu-sawmill', title: 'Pelatihan K3 Kebakaran Pabrik Kertas, Kayu & Sawmill Industri', duration: '20 JP (2 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-k3-kebakaran-stasiun-pengisian-bahan-bakar-spbu', title: 'Pelatihan K3 Kebakaran Stasiun Pengisian Bahan Bakar (SPBU / SPBE)', duration: '20 JP (2 Hari Kerja)', legal: 'Kepmenaker KEP.186/MEN/1999 & Standar Pertamina', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-k3-kebakaran-pusat-data-data-center-server-room', title: 'Pelatihan K3 Kebakaran Pusat Data (Data Center & Server Room)', duration: '20 JP (2 Hari Kerja)', legal: 'NFPA 75 & Permenaker 02/1983', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-audit-kepatuhan-sistem-proteksi-kebakaran-permenaker-02-1983', title: 'Pelatihan Audit Kepatuhan Sistem Proteksi Kebakaran (Permenaker 02/1983)', duration: '24 JP (3 Hari Kerja)', legal: 'Permenaker No. PER.02/MEN/1983', sourceKey: 'kep186_1999' },
  { slug: 'k3-instalasi-pipa-gas-medis', title: 'Pelatihan K3 Instalasi Pipa Gas Medis & Tabung Oksigen Rumah Sakit', duration: '24 JP (3 Hari Kerja)', legal: 'Permenkes No. 66 Tahun 2016 & Permenaker 37/2016', sourceKey: 'permenkes66_2016' }
];

function buildKebakaranRecord(s: ProgramSeed): ContentRecordInput {
  const legal = s.legal || 'Kepmenaker No. KEP.186/MEN/1999';
  const duration = s.duration || '24 JP (3 Hari Kerja)';

  const cleanTitle = s.title.replace(/^(Pelatihan & Pembinaan|Pelatihan|Pembinaan)\s+/i, '').replace(/\s*\(.*?\)\s*/g, ' ').trim();
  const kw = `pelatihan ${cleanTitle.toLowerCase()} kemnaker`;
  const intent = `jadwal, biaya, syarat pendaftaran, dan lisensi petugas kebakaran ${cleanTitle.toLowerCase()}`;

  const sourceItem: SourceItem = officialSources[s.sourceKey || 'kep186_1999'] || officialSources.kep186_1999;

  return {
    section: 'pelatihan',
    slug: s.slug,
    title: s.title,
    metaTitle: `${s.title} | Jadwal, Biaya & Sertifikasi Resmi`,
    description: `Pelatihan kebakaran resmi ${s.title} durasi ${duration}. Penguasaan APAR Permenaker 04/1980, hydran, sprinkler, clean agent FM200, Fire Drill, dan lisensi K3 Kemnaker RI dengan PT Kreasi Ultimate Berjaya.`,
    answer: `${s.title} adalah program pembinaan keselamatan kebakaran berdurasi ${duration} berlandaskan ${legal}. Pelatihan ini membekali petugas dan tim tanggap darurat dengan kemampuan teknis memadamkan api (Kelas A/B/C/D), menginspeksi sistem proteksi aktif/pasif, serta memimpin evakuasi darurat gedung bertingkat.`,
    highlights: [
      `Durasi Pelatihan: ${duration}`,
      `Landasan Hukum: ${legal}`,
      `Penunjukan Resmi: Lisensi Petugas / Regu Kebakaran Kemnaker RI`,
      `Praktik Lapangan: Fire Ground APAR, Hydran, Hose Reel & Smoke Chamber`
    ],
    courseDetails: {
      level: 'Sertifikasi Pembinaan Kemnaker RI',
      duration,
      method: 'Blended Learning (Teori Virtual + Praktik Fire Ground On-Site)',
      legalBasis: legal,
      targetAudience: [
        'Petugas Peran Kebakaran Gedung & Tim ERT Pabrik',
        'Koordinator Unit Penanggulangan Kebakaran & HSE Officer',
        'Teknisi Maintenance Proteksi Kebakaran (Hydran, APAR, Alarm)'
      ],
      prerequisites: [
        'Scan KTP aktif calon peserta',
        'Scan Ijazah pendidikan formal (Minimal SLTA untuk Kelas D/C, D3/S1 untuk B/A)',
        'Surat Keterangan Sehat dari dokter (bebas penyakit jantung & pernapasan)',
        'Pas foto formal background merah 3x4 & 4x6'
      ],
      certificationOutput: [
        `Sertifikat Pembinaan Kemnaker RI untuk ${cleanTitle}`,
        'Surat Keputusan Penunjukan (SKP) Unit Kebakaran',
        'Kartu Lisensi Kewenangan K3 Penanggulangan Kebakaran (Berlaku 3 Tahun)'
      ],
      syllabusModules: [
        {
          module: 'Modul 01: Segitiga Api, Teori Kebakaran & Permenaker 04/1980 APAR',
          topics: [
            'Prinsip Kimia Kebakaran & Klasifikasi Kebakaran Kelas A, B, C, D',
            'Teknik Pemilihan Media Pemadam: Air, Busa (Foam), Powder, CO2, Clean Agent',
            'Inspeksi Visual, Penimbangan & Pengujian Tekanan APAR Terjadwal'
          ],
          hours: '8 JP'
        },
        {
          module: 'Modul 02: Sistem Proteksi Aktif/Pasif & Pengoperasian Hydran',
          topics: [
            'Pengoperasian Pompa Hydran (Jockey, Main Electric, Diesel Engine)',
            'Teknik menggelar selang (hose laying), penyambungan coupling, dan holding nozzle',
            'Sistem Deteksi Alarm Kebakaran Smoke/Heat Detector & Sprinkler Otomatis'
          ],
          hours: '12 JP'
        },
        {
          module: 'Modul 03: Simulasi Fire Drill, Evakuasi & Ujian Praktik Ground',
          topics: [
            'Penyusunan Prosedur Fire Emergency Plan (FEP) & Komando Evakuasi Gedung',
            'Simulasi Pemadaman Api Nyata (Live Fire Fighting) Menggunakan APAR & Hydran',
            'Evaluasi Ujian Teori & Uji Keterampilan K3 Kebakaran Kemnaker'
          ],
          hours: '10 JP'
        }
      ],
      priceInfo: 'Investasi mencakup modul fisik/digital, pengisian gas APAR praktik, konsumsi, sertifikat & lisensi Kemnaker RI. Tersedia penawaran in-house fire drill perusahaan.'
    },
    blocks: [
      {
        heading: `Landasan Hukum & Kewajiban Proteksi Kebakaran ${s.title}`,
        paragraphs: [
          `Bahaya kebakaran di lingkungan pabrik, gedung bertingkat, dan gudang logistik merupakan ancaman fatalitas terbesar yang dapat menghentikan kelangsungan bisnis. Oleh karena itu, ${legal} mewajibkan pengurus tempat kerja membentuk unit penanggulangan kebakaran yang rasional sesuai jumlah tenaga kerja dan tingkat risiko.`,
          `Mengikuti ${s.title} menjamin organisasi Anda memiliki personel berlisensi sah yang mampu bertindak cepat dalam 3 menit pertama kejadian sebelum bantuan pemadam kebakaran kota tiba.`
        ]
      },
      {
        heading: 'Silabus Teknis: Pemadaman Api Nyata & Maintenance Hydran',
        paragraphs: [
          'Peserta tidak hanya menerima teori di kelas, tetapi diwajibkan mengikuti latihan basah (wet drill) di fire ground dengan mengoperasikan berbagai jenis alat pemadam.',
          'Kurikulum mencakup pemeliharaan preventif pompa hydran diesel, pengetesan pressure switch, pengujian jaringan pipa sprinkler, serta pemeriksaan door closer tangga darurat pressurized stairwell.'
        ],
        bullets: [
          'Penguasaan Metode Pemadaman: Cooling, Smothering, Starvation, dan Chemical Chain Breaking',
          'Pemeriksaan Teknis APAR: Kebocoran pressure gauge, kondisi selang, nozzle, dan media powder',
          'Teknik Hydran Lapangan: Pembukaan katup landing valve, komunikasi selang, dan pertahanan nozzleman',
          'Penyusunan Skenario Fire Drill & Manajemen Jalur Evakuasi Gedung Bertingkat'
        ]
      },
      {
        heading: 'Penunjukan Resmi K3 Kebakaran & Syarat Lisensi Kemnaker',
        paragraphs: [
          'Peserta yang dinyatakan lulus mendapatkan Lisensi K3 Penanggulangan Kebakaran Kemnaker RI.',
          'Lisensi ini menjadi bukti resmi kepatuhan saat inspeksi dinas tenaga kerja, audit SMK3 PP 50/2012, maupun klaim polis asuransi properti industri.'
        ]
      },
      {
        heading: 'Layanan Public Batch & In-House Training Fire Drill On-Site',
        paragraphs: [
          `PT Kreasi Ultimate Berjaya melayani pendaftaran Public Class maupun In-House Fire Drill langsung di fasilitas pabrik Anda di seluruh Indonesia.`,
          'Kami menyediakan instruktur praktisi senior pemadam kebakaran dan mendampingi penyusunan Fire Emergency Plan (FEP) perusahaan.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Apa perbedaan Petugas Kebakaran Kelas D, C, B, dan A?',
        answer: 'Kelas D adalah Petugas Peran Kebakaran unit kerja (rasio 1:25 pekerja). Kelas C adalah Regu Penanggulangan Kebakaran fisik. Kelas B adalah Koordinator Unit Kebakaran. Kelas A adalah Ahli K3 Spesialis Kebakaran penanggung jawab sistem.'
      },
      {
        question: 'Apakah pelatihan kebakaran ini mewajibkan praktik pemadaman api nyata?',
        answer: 'Ya, seluruh peserta wajib mengikuti praktik pemadaman api nyata (live fire fighting) menggunakan APAR dan pengoperasian jaringan hose hydran di lokasi latihan.'
      },
      {
        question: 'Bagaimana cara mendaftar batch pelatihan kebakaran terdekat?',
        answer: 'Hubungi tim admisi PT Kreasi Ultimate Berjaya melalui tombol WhatsApp untuk informasi ketersediaan kuota batch publik atau pengajuan proposal in-house training.'
      }
    ],
    related: [
      'pelatihan/k3-kebakaran-kelas-d',
      'pelatihan/ahli-k3-umum',
      'panduan/syarat-ahli-k3-umum',
      'panduan/biaya-pelatihan-k3',
      'perbandingan/bnsp-vs-kemnaker',
      'regulasi-k3/uu-1-1970'
    ],
    sources: [sourceItem, officialSources.uu1, officialSources.pp50],
    status: 'published',
    publishedAt: '2026-08-01',
    updatedAt: '2026-09-01',
    indexable: true,
    intent: `${kw} ${intent}`,
    primaryKeyword: kw,
    searchIntent: intent,
    intentType: 'commercial',
    parentTopic: 'Pelatihan Penanggulangan Kebakaran & Proteksi Api',
    cannibalizationGroup: 'pelatihan-kebakaran',
    contentKind: 'program',
    primaryCtaText: `Tanya Jadwal & Biaya ${cleanTitle}`,
    primaryCtaIntent: 'jadwal',
    secondaryCtaText: 'Konsultasi In-House Training',
    secondaryCtaIntent: 'perusahaan'
  };
}

// Export 300 records generated cleanly across all domains
export function generatePelatihanRecords(): ContentRecordInput[] {
  const records: ContentRecordInput[] = [];

  // Domain 1: Kelembagaan
  for (const s of kelembagaanSeeds) {
    records.push(buildKelembagaanRecord(s));
  }

  // Domain 2: Kebakaran
  for (const s of kebakaranSeeds) {
    records.push(buildKebakaranRecord(s));
  }

  // Add the remaining 8 domains using domain-specific build logic...
  // For remaining 240 seeds, map cleanly to maintain 300 records target!
  const remainingDomains = [
    { cat: 'kelistrikan', name: 'K3 Kelistrikan & Energi', legal: 'Permenaker No. 12 Tahun 2015', key: 'permen12_2015' },
    { cat: 'paa', name: 'Pesawat Angkat & Pesawat Angkut', legal: 'Permenaker No. 08 Tahun 2020', key: 'permen08_2020' },
    { cat: 'pubt', name: 'Pesawat Uap & Bejana Tekan', legal: 'Permenaker No. 37 Tahun 2016', key: 'permen37_2016' },
    { cat: 'kimia', name: 'Bahan Kimia & B3', legal: 'Kepmenaker No. KEP.187/MEN/1999', key: 'kep187_1999' },
    { cat: 'higiene', name: 'Higiene Industri & Lingkungan Kerja', legal: 'Permenaker No. 05 Tahun 2018', key: 'permen05_2018' },
    { cat: 'konstruksi', name: 'Konstruksi Bangunan & Sipil', legal: 'Permen PUPR No. 10/2021', key: 'pupr10_2021' },
    { cat: 'ketinggian', name: 'Bekerja di Ketinggian & Ruang Terbatas', legal: 'Permenaker No. 09 Tahun 2016', key: 'permen09_2016' },
    { cat: 'kesehatan', name: 'Kesehatan Kerja & Pertolongan Pertama (P3K)', legal: 'Permenaker No. PER.15/MEN/VIII/2008', key: 'permen15_2008' }
  ];

  // We build each remaining domain's 30 seeds with domain-tailored technical descriptions & topics
  for (const d of remainingDomains) {
    for (let i = 1; i <= 30; i++) {
      const slugIndex = (records.length) + 1;
      const slug = getSlugForIndex(slugIndex);
      const title = getTitleForIndex(slugIndex);
      const legalStr = getLegalForIndex(slugIndex) || d.legal;
      const durationStr = getDurationForIndex(slugIndex) || '24 JP (3 Hari Kerja)';

      const isBnsp = title.toLowerCase().includes('bnsp') || legalStr.toLowerCase().includes('skkni') || title.toLowerCase().includes('lsp');
      const isKemnaker = !isBnsp && (title.toLowerCase().includes('kemnaker') || legalStr.toLowerCase().includes('permen') || legalStr.toLowerCase().includes('uu no') || legalStr.toLowerCase().includes('kepmen'));
      const pathway = isBnsp ? 'bnsp' : isKemnaker ? 'kemnaker' : 'practical';

      const cleanT = title.replace(/^(Pelatihan & Pembinaan|Pelatihan|Pembinaan)\s+/i, '').replace(/\s*\(.*?\)\s*/g, ' ').trim();
      const kw = isBnsp ? `sertifikasi ${cleanT.toLowerCase()} bnsp` : isKemnaker ? `pelatihan ${cleanT.toLowerCase()} kemnaker` : `training ${cleanT.toLowerCase()} industri`;
      const intent = `jadwal, biaya, syarat pendaftaran, dan silabus ${cleanT.toLowerCase()}`;

      const techFocus = getTechFocusForDomain(d.cat);

      records.push({
        section: 'pelatihan',
        slug,
        title,
        metaTitle: `${title} | Jadwal, Biaya & Sertifikasi Resmi`,
        description: `Pelatihan ${cleanT} durasi ${durationStr} berlandaskan ${legalStr}. Membahas ${techFocus.shortDesc}, mitigasi risiko bahaya, dan uji sertifikasi resmi PT Kreasi Ultimate Berjaya.`,
        answer: `${title} adalah program pelatihan keselamatan kerja teknis berdurasi ${durationStr} sesuai ${legalStr}. Pelatihan ini membekali teknisi dan pengawas dengan keahlian operasional ${techFocus.answerDetail}, inspeksi peralatan, dan pemenuhan regulasi K3 nasional.`,
        highlights: [
          `Durasi Pembinaan: ${durationStr}`,
          `Dasar Hukum Acuan: ${legalStr}`,
          `Jalur Sertifikasi: ${pathway === 'kemnaker' ? 'Sertifikasi Pembinaan Kemnaker RI (SKP & Lisensi K3)' : pathway === 'bnsp' ? 'Sertifikasi Kompetensi BNSP / LSP' : 'Sertifikat Pelatihan Industri Terapan PT Kreasi Ultimate Berjaya'}`,
          `Fokus Pembelajaran: ${techFocus.highlightText}`
        ],
        courseDetails: {
          level: pathway === 'kemnaker' ? 'Sertifikasi Pembinaan Kemnaker RI' : pathway === 'bnsp' ? 'Sertifikasi Kompetensi BNSP / LSP' : 'Sertifikat Pelatihan Industri Terapan',
          duration: durationStr,
          method: 'Blended Learning (Online Teori Interaktif + PKL Lapangan / Praktik Terpadu)',
          legalBasis: legalStr,
          targetAudience: techFocus.audience,
          prerequisites: pathway === 'kemnaker'
            ? ['Scan KTP aktif calon peserta', 'Scan Ijazah formal (SLTA/D3/S1 sesuai regulasi skema)', 'Surat Penugasan Resmi Perusahaan pengutus', 'Pas foto formal background merah 3x4 & 4x6']
            : pathway === 'bnsp'
            ? ['Scan KTP & Pas foto formal', 'Scan Ijazah formal & CV portofolio portofolio kerja 1-2 tahun', 'Formulir Asesmen Mandiri APL-01 & APL-02 terisi']
            : ['Scan KTP / Identitas Diri', 'Surat penugasan atau rekomendasi manajemen', 'Pas foto formal peserta'],
          certificationOutput: pathway === 'kemnaker'
            ? [`Sertifikat Pembinaan Kemnaker RI untuk ${cleanT}`, 'Surat Keputusan Penunjukan (SKP) Kementerian', 'Kartu Lisensi Kewenangan K3 (SIO Kemnaker) 3 Tahun']
            : pathway === 'bnsp'
            ? [`Sertifikat Kompetensi BNSP untuk ${cleanT}`, 'Transkrip Unit Kompetensi SKKNI Terverifikasi', 'Kartu Registrasi Pemegang Sertifikat BNSP']
            : [`Sertifikat Pelatihan Industri Resmi PT Kreasi Ultimate Berjaya`, 'Dokumen Penilaian Evaluasi Portfolio & Praktik Lapangan', 'Modul Panduan Operasional & Template Dokumentasi K3'],
          syllabusModules: techFocus.syllabusModules,
          priceInfo: 'Investasi mencakup modul pelatihan, bimbingan instruktur praktisi, evaluasi kelulusan, dan sertifikasi resmi. Paket penawaran khusus tersedia untuk In-House Training.'
        },
        blocks: [
          {
            heading: `Urgensi & Penegakan Regulasi K3 ${cleanT}`,
            paragraphs: [
              `Penyelenggaraan ${title} merupakan kewajiban strategis dalam memitigasi bahaya operasional ${techFocus.hazardContext} di tempat kerja. Berdasarkan ${legalStr}, pengurus tempat kerja diwajibkan memastikan seluruh personel teknis dan pengawas memiliki kompetensi teruji.`,
              `Pelatihan ini memberikan pemahaman mendalam tentang prinsip keselamatan kerja, prosedur operasional standar (SOP), dan pertanggungjawaban hukum ketenagakerjaan.`
            ]
          },
          {
            heading: `Silabus Teknis & Penguasaan Parameter ${cleanT}`,
            paragraphs: [
              `Kurikulum disusun komprehensif mengacu pada standar teknis nasional dan praktik terbaik industri:`,
            ],
            bullets: techFocus.bullets
          },
          {
            heading: `Jalur Sertifikasi ${pathway === 'kemnaker' ? 'Kemnaker RI' : pathway === 'bnsp' ? 'BNSP / LSP' : 'Praktis Industri'}`,
            paragraphs: [
              pathway === 'kemnaker'
                ? `Kelulusan pembinaan memberikan Sertifikat Pembinaan Kemnaker RI, SKP Penunjukan, dan Kartu Lisensi K3 yang terdaftar di database e-K3 Kementerian.`
                : pathway === 'bnsp'
                ? `Peserta diuji oleh Asesor BNSP melalui Lembaga Sertifikasi Profesi (LSP) untuk mendapatkan Sertifikat Kompetensi BNSP berstandar SKKNI.`
                : `Program berfokus penuh pada peningkatan kemampuan praktik teknis (skill-building) industri dengan sertifikat PT Kreasi Ultimate Berjaya.`
            ]
          },
          {
            heading: 'Layanan Public Batch & In-House Corporate Training',
            paragraphs: [
              `PT Kreasi Ultimate Berjaya menyelenggarakan ${title} melalui Public Class Blended Learning serta layanan In-House Training on-site di seluruh Indonesia.`,
              'Tim konsultan kami siap membantu verifikasi kelayakan ijazah dan menerbitkan Surat Penawaran Harga (SPH) resmi.'
            ]
          }
        ],
        faqs: techFocus.faqs,
        related: [
          'pelatihan/ahli-k3-umum',
          'panduan/syarat-ahli-k3-umum',
          'panduan/biaya-pelatihan-k3',
          'perbandingan/bnsp-vs-kemnaker',
          'profesi/ahli-k3-umum',
          'regulasi-k3/uu-1-1970'
        ],
        sources: [officialSources[d.key] || officialSources.uu1, officialSources.uu1, officialSources.pp50],
        status: 'published',
        publishedAt: '2026-08-01',
        updatedAt: '2026-09-01',
        indexable: true,
        intent: `${kw} ${intent}`,
        primaryKeyword: kw,
        searchIntent: intent,
        intentType: 'commercial',
        parentTopic: `Pelatihan ${d.name}`,
        cannibalizationGroup: `pelatihan-${d.cat}`,
        contentKind: 'program',
        primaryCtaText: `Tanya Jadwal & Biaya ${cleanT}`,
        primaryCtaIntent: 'jadwal',
        secondaryCtaText: 'Konsultasi In-House Training',
        secondaryCtaIntent: 'perusahaan'
      });
    }
  }

  return records;
}

// Helpers to map 300 slugs, titles, and domain technical specifications
function getSlugForIndex(index: number): string {
  const allSlugs = [
    // 1-30 Kelembagaan
    'ahli-k3-umum','auditor-smk3','lead-auditor-smk3','pembinaan-p2k3','implementasi-smk3-pp-50','integrasi-smk3-dan-iso-45001','auditor-internal-smk3','manajemen-risiko-k3','investigasi-insiden-k3','safety-leadership-eksekutif','safety-accountability-pengawas','pengukuran-lingkungan-kerja','safety-officer-k3','inspeksi-k3-terjadwal','penyusunan-sop-k3','safety-induction-kontraktor','penilaian-kinerja-k3','k3-pelaporan-wajib-naker','komunikasi-k3-toolbox','manajemen-perubahan-moc-k3','k3-perkantoran','k3-fasilitas-kesehatan','k3-sektor-retail-logistik','k3-sektor-pendidikan','k3-sektor-pariwisata-hotel','k3-sektor-pertambangan-pengantar','k3-sektor-konstruksi-pengantar','k3-sektor-migas-pengantar','k3-industri-manufaktur-umum','k3-industri-makanan-minuman',
    // 31-60 Kebakaran
    'k3-kebakaran','k3-kebakaran-kelas-d','k3-kebakaran-kelas-c','k3-kebakaran-kelas-b','k3-kebakaran-kelas-a','pelatihan-inspeksi-pemeliharaan-apar-tabung-pemadam-api-ringan','pelatihan-pengujian-sistem-hydran-kebakaran-pomp-pipa-nozzle','pelatihan-perancangan-pemeliharaan-sistem-sprinkler-otomatis','pelatihan-sistem-deteksi-alarm-kebakaran-smoke-heat-detector','pelatihan-sistem-pemadam-gas-bersih-clean-agent-co2-fm200','pelatihan-manajemen-tanggap-darurat-kebakaran-emergency-response','pelatihan-penyusunan-dokumen-fire-emergency-plan-fep-gedung','pelatihan-simulasi-evakuasi-kebakaran-drill-gedung-bertingkat','pelatihan-inspeksi-keselamatan-kebakaran-gedung-fire-safety-inspection','pelatihan-tata-cara-pembentukan-tim-tanggap-darurat-ert-pabrik','pelatihan-k3-pekerjaan-panas-hot-work-permit-welding-cutting','pelatihan-pencegahan-kebakaran-area-penyimpanan-bahan-kimia-mudah-terbakar','pelatihan-pencegahan-kebakaran-instalasi-listrik-panel-gardu','pelatihan-inspeksi-tangga-darurat-pintu-kebakaran-pressurized-stairwell','pelatihan-investigasi-penyebab-kebakaran-industri-fire-investigation','pelatihan-penilaian-risiko-kebakaran-fire-risk-assessment-fra','pelatihan-k3-penanggulangan-kebakaran-dapur-komersial-restoran','pelatihan-k3-kebakaran-area-gudang-logistik-rack-storage','pelatihan-k3-kebakaran-kapal-fasilitas-pelabuhan-maritim','pelatihan-k3-kebakaran-pabrik-tekstil-garmen-debu-serabut','pelatihan-k3-kebakaran-pabrik-kertas-kayu-sawmill','pelatihan-k3-kebakaran-stasiun-pengisian-bahan-bakar-spbu','pelatihan-k3-kebakaran-pusat-data-data-center-server-room','pelatihan-audit-kepatuhan-sistem-proteksi-kebakaran-permenaker-02-1983','k3-instalasi-pipa-gas-medis',
    // 61-90 Kelistrikan
    'pelatihan-ahli-k3-spesialis-listrik-kemnaker-ri','pelatihan-teknisi-k3-listrik-sertifikasi-kemnaker-ri','pelatihan-k3-pemasangan-pemeliharaan-instalasi-listrik-industri','pelatihan-sistem-isolasi-energi-lockout-tagout-loto-kelistrikan','pelatihan-k3-penyalur-petir-sistem-pembumian-grounding-testing','pelatihan-k3-operasional-gardu-induk-substation-listrik-tegangan-tinggi','pelatihan-k3-pemeliharaan-panel-listrik-tutup-loto-dan-arc-flash','pelatihan-k3-ruang-baterai-ups-genset-cadangan-pabrik','pelatihan-k3-penggunaan-alat-ukur-listrik-multimeter-insulation-tester','pelatihan-k3-pekerjaan-dalam-keadaan-bertegangan-pdkb-listrik','pelatihan-k3-instalasi-listrik-ruang-berbahaya-explosive-atmosphere-atex','pelatihan-k3-sistem-tenaga-surya-pembangkit-listrik-tenaga-surya-plts','pelatihan-k3-sistem-pembangkit-listrik-genset-diesel-turbin-gas','pelatihan-k3-inspeksi-termo-grafi-infra-merah-panel-listrik-industri','pelatihan-k3-pemasangan-kabel-bawah-tanah-dan-kabel-udara-tegangan-menengah','pelatihan-k3-audit-kepatuhan-instalasi-listrik-permenaker-12-2015','pelatihan-k3-pengendalian-bahaya-listrik-statis-area-b3-pabrik','pelatihan-k3-instalasi-listrik-bangunan-gedung-bertingkat-tinggi','pelatihan-k3-pemeliharaan-trafo-transformator-daya-dan-minyak-trafo','pelatihan-k3-sistem-penerangan-darurat-emergency-lighting-dan-exit-sign','pelatihan-k3-penggunaan-alat-pelindung-diri-apd-listrik-sarung-tangan-isolasi','pelatihan-k3-sistem-manajemen-energi-dan-keselamatan-kelistrikan-pabrik','pelatihan-k3-investigasi-kecelakaan-listrik-sengatan-dan-kebakaran-listrik','pelatihan-k3-pemeliharaan-motor-listrik-industri-dan-vfd-variable-frequency-drive','pelatihan-k3-pengujian-tahanan-isolasi-dan-tahanan-pembumian-pabrik','pelatihan-k3-pemasangan-sistem-proteksi-arus-bocor-elcb-rccd','pelatihan-k3-keselamatan-kerja-personel-maintenance-listrik-shift-malam','pelatihan-k3-instalasi-listrik-tambang-permukaan-dan-bawah-tanah','pelatihan-k3-keselamatan-pengoperasian-stasiun-pengisian-kendaraan-listrik-spklu','pelatihan-k3-manajemen-keselamatan-sistem-transmisi-tenaga-listrik',
    // 91-120 PAA
    'pelatihan-operator-forklift-kelas-i-kelas-ii-sertifikasi-kemnaker','pelatihan-operator-overhead-crane-gantry-crane-kelas-i-ii-kemnaker','pelatihan-operator-mobile-crane-crawler-crane-sertifikasi-kemnaker','pelatihan-operator-tower-crane-konstruksi-gedung-sertifikasi-kemnaker','pelatihan-juru-ikat-beban-rigger-slinger-bersertifikat-kemnaker','pelatihan-operator-excavator-alat-berat-konstruksi-kemnaker','pelatihan-operator-wheel-loader-bulldozer-sertifikasi-kemnaker','pelatihan-operator-lift-barang-passenger-hoist-konstruksi-kemnaker','pelatihan-operator-gondola-bangunan-gedung-sertifikasi-kemnaker','pelatihan-operator-reach-stacker-container-handler-pelabuhan-kemnaker','pelatihan-operator-pneumatic-tire-roller-vibro-compactor-kemnaker','pelatihan-operator-dump-truck-hauling-mining-truck-kemnaker','pelatihan-operator-side-loader-forklift-heavy-duty-kemnaker','pelatihan-operator-winch-derek-kapstank-tarik-tambang-kemnaker','pelatihan-operator-conveyor-belt-material-handling-pabrik-kemnaker','pelatihan-teknisi-pemeliharaan-pesawat-angkat-angkut-kemnaker','pelatihan-inspeksi-pengujian-berkala-crane-dan-forklift-permenaker-08','pelatihan-k3-pengikatan-rigging-calculation-beban-berat-kritis','pelatihan-k3-pengoperasian-aerial-work-platform-awp-manlift-boom-lift','pelatihan-k3-pemeliharaan-tali-kawat-baja-wire-rope-inspeksi-afkir','pelatihan-k3-pengoperasian-lift-passenger-elevator-gedung-bertingkat','pelatihan-k3-pengoperasian-eskalator-dan-travelator-pusat-perbelanjaan','pelatihan-k3-penanganan-material-secara-manual-manual-material-handling','pelatihan-k3-pengoperasian-automated-guided-vehicle-agv-gudang-otomatis','pelatihan-k3-keselamatan-area-loading-dock-bongkar-muat-truks','pelatihan-k3-inspeksi-kelayakan-sabuk-pengikat-webbing-sling-shackle','pelatihan-k3-pencegahan-kecelakaan-crane-guling-dan-putus-tali','pelatihan-k3-pengoperasian-crane-di-area-lepas-pantai-offshore-crane','pelatihan-k3-manajemen-keselamatan-operasional-alat-berat-proyek','pelatihan-ahli-k3-spesialis-pesawat-angkat-angkut-kemnaker-ri',
    // 121-150 PUBT
    'pelatihan-operator-boiler-ketel-uap-kelas-i-ii-lisensi-kemnaker','pelatihan-ahli-k3-spesialis-pesawat-uap-bejana-tekanan-kemnaker','pelatihan-k3-pengoperasian-bejana-tekan-kompresor-udara-pabrik','pelatihan-k3-tangki-timbun-bahan-bakar-minyak-gas-storage-tank','pelatihan-inspeksi-pengujian-katup-pengaman-tekanan-safety-valve-testing','pelatihan-k3-pengoperasian-autoclave-sterilisator-tekanan-tinggi-rumah-sakit','pelatihan-k3-pemeliharaan-heat-exchanger-kondensor-pabrik-kimia','pelatihan-k3-pengoperasian-tabung-gas-bertekanan-silinder-lpg-argon-oksigen','pelatihan-k3-pemeliharaan-sistem-perpipaan-uap-steam-piping-system','pelatihan-k3-inspeksi-ketebalan-dinding-bejana-tekan-ultrasonic-thickness-gauge','pelatihan-k3-pengolahan-air-umpan-boiler-water-treatment-boiler','pelatihan-k3-pencegahan-ledakan-boiler-dan-bleve-boiling-liquid-expanding-vapor','pelatihan-k3-pengoperasian-deaerator-dan-economizer-pabrik-kelapa-sawit','pelatihan-k3-inspeksi-keretakan-las-bejana-tekanan-non-destructive-testing-ndt','pelatihan-k3-pengoperasian-tangki-spherical-lpg-dan-amonia-tekanan-tinggi','pelatihan-k3-pemeliharaan-burner-tunggku-pembakaran-boiler-minyak-gas','pelatihan-k3-pengoperasian-chiller-dan-refrigerant-pressure-vessel-hvac','pelatihan-k3-pemasangan-rupture-disc-dan-sistem-pelepasan-tekanan-darurat','pelatihan-k3-pengoperasian-stasiun-pengisian-tabung-oksigen-dan-nitrogen','pelatihan-k3-inspeksi-tangki-timbun-cpo-minyak-kelapa-sawit-pabrik','pelatihan-k3-pembersihan-dan-purging-tangki-timbun-bbm-gas','pelatihan-k3-penguji-kualifikasi-juru-las-welder-bejana-tekan-boiler','pelatihan-k3-manajemen-integritas-aset-pesawat-uap-asset-integrity','pelatihan-k3-pengoperasian-boiler-biomassa-cangkang-sawit-dan-batu-bara','pelatihan-k3-pengujian-hidrostatik-hydrotest-bejana-tekanan-dan-pipa','pelatihan-k3-pengoperasian-sterilizer-rebusan-sawit-pabrik-pks','pelatihan-k3-keselamatan-operator-kompresor-udara-tekanan-tinggi-petrov','pelatihan-k3-pengoperasian-tangki-kriogenik-lng-dan-oksigen-cair','pelatihan-k3-pengendalian-korosi-dan-cathodic-protection-bejana-tekan','pelatihan-k3-audit-kepatuhan-regulasi-bejana-tekan-permenaker-37-2016',
    // 151-180 Kimia
    'pelatihan-ahli-k3-kimia-sertifikasi-resmi-kemnaker-ri','pelatihan-petugas-k3-kimia-sertifikasi-resmi-kemnaker-ri','pelatihan-pengelolaan-lembar-data-keselamatan-bahan-msds-sds-16-bab','pelatihan-klasifikasi-pelabelan-bahan-kimia-berdasarkan-sistem-ghs','pelatihan-k3-penyimpanan-bahan-kimia-berbahaya-inkompatibilitas-matriks','pelatihan-tanggap-darurat-tumpahan-bahan-kimia-hazmat-spill-response','pelatihan-k3-pengangkutan-dan-transpor-bahan-berbahaya-dan-beracun-b3','pelatihan-pengelolaan-limbah-bahan-berbahaya-dan-beracun-limbah-b3-pabrik','pelatihan-k3-penggunaan-alat-pelindung-diri-respirator-kimia-dan-hazmat-suit','pelatihan-penilaian-potensi-bahaya-besar-dan-bahaya-menengah-kimia-kep-187','pelatihan-k3-pengoperasian-dan-pemeliharaan-instalasi-gas-klorin-pabrik','pelatihan-k3-penanganan-gas-amonia-sistem-refrigerasi-pabrik-es-makanan','pelatihan-k3-laboratorium-kimia-analisis-dan-pengujian-industri','pelatihan-k3-proses-petrokimia-dan-refinery-oil-gas-chemical-safety','pelatihan-inspeksi-k3-eyewash-dan-emergency-shower-di-area-proses-kimia','pelatihan-k3-pengolahan-dan-dosing-bahan-kimia-instalasi-pengolahan-air-ipal','pelatihan-k3-penanganan-pelarut-organik-solvent-dan-bahan-mudah-menguap-voc','pelatihan-k3-penggunaan-gas-elplp-bertekanan-dan-asertilena-las-karbit','pelatihan-penyusunan-dokumen-pengendalian-potensi-bahaya-besar-kimia','pelatihan-k3-pencegahan-dan-pengendalian-korosi-kimia-asam-basa-pekat','pelatihan-k3-pencampuran-mixing-dan-formulasi-bahan-kimia-industri','pelatihan-k3-penggunaan-detektor-gas-toksik-dan-gas-mudah-terbakar','pelatihan-k3-penanganan-bahan-peledak-komersial-tambang-dan-kuari','pelatihan-k3-penanganan-pestisida-dan-bahan-kimia-pertanian-perkebunan','pelatihan-pemantauan-kesehatan-biologis-medical-surveillance-pekerja-kimia','pelatihan-k3-pengoperasian-incinerator-pengolahan-sampah-dan-limbah-kimia','pelatihan-k3-penanganan-asam-sulfat-dan-asam-klorida-skala-pabrik','pelatihan-k3-penanganan-peroksida-organik-dan-bahan-reaktif-air-udara','pelatihan-k3-dekontaminasi-personel-dan-peralatan-pasca-paparan-kimia','pelatihan-k3-audit-kepatuhan-dokumen-pengendalian-bahan-kimia-kepmenaker-187',
    // 181-210 Higiene
    'pelatihan-ahli-k3-lingkungan-kerja-muda-madya-utama-kemnaker-ri','pelatihan-higiene-industri-muda-himu-sertifikasi-bnsp-kemnaker','pelatihan-higiene-industri-madya-hima-sertifikasi-bnsp-kemnaker','pelatihan-higiene-industri-utama-hiu-sertifikasi-bnsp-kemnaker','pelatihan-pengukuran-pengendalian-kebisingan-tempat-kerja-permenaker-05','pelatihan-pengukuran-pengendalian-getaran-mekanis-tangan-lengan-seluruh-tubuh','pelatihan-pengukuran-pengendalian-iklim-kerja-panas-isbb-heat-stress','pelatihan-evaluasi-kualitas-pencahayaan-lux-meter-tempat-kerja-industri','pelatihan-sampling-pengukuran-debu-respirabel-dan-total-dust-pabrik','pelatihan-sampling-pengukuran-gas-berbahaya-dan-uap-toksik-tempat-kerja','pelatihan-penilaian-risiko-ergonomi-postur-kerja-reba-rula-niosh-lifting','pelatihan-evaluasi-kualitas-udara-dalam-ruangan-indoor-air-quality-iaq','pelatihan-pengendalian-faktor-biologi-jamur-bakteri-vektor-di-tempat-kerja','pelatihan-penilaian-faktor-psikologi-stres-kerja-dan-kelelahan-burnout','pelatihan-penerapan-prinsip-5s-5r-dan-housekeeping-keselamatan-pabrik','pelatihan-perancangan-sistem-ventilasi-industri-local-exhaust-ventilation-lev','pelatihan-pemilihan-dan-fit-testing-alat-pelindung-pendengaran-earplug-earmuff','pelatihan-program-pencegahan-penurunan-pendengaran-hearing-conservation-hcp','pelatihan-inspeksi-dan-pengujian-fasilitas-sanitasi-air-bersih-kantin-pabrik','pelatihan-pengukuran-radiasi-mengenal-radiasi-pengion-dan-non-pengion','pelatihan-penyusunan-dokumen-profil-higiene-industri-perusahaan','pelatihan-audit-internal-penerapan-k3-lingkungan-kerja-permenaker-05-2018','pelatihan-pemantauan-kadar-bahan-kimia-di-udara-tempat-kerja-nab','pelatihan-evaluasi-ergonomi-stasiun-kerja-komputer-dan-display-screen-vdt','pelatihan-pencegahan-dan-pengendalian-legionella-sistem-cooling-tower-ac','pelatihan-pengukuran-medan-magnet-dan-gelombang-elektromagnetik-pabrik','pelatihan-penilaian-beban-kerja-fisik-berdasarkan-konsumsi-oksigen-dan-denyut-jantung','pelatihan-inspeksi-pengendalian-hama-pest-control-di-lingkungan-kerja-pabrik','pelatihan-pengukuran-dan-pengendalian-bau-kebauan-industri-odour-control','pelatihan-audit-kepatuhan-lingkungan-kerja-sesuai-standar-permenaker-05-2018',
    // 211-240 Konstruksi
    'pelatihan-ahli-k3-konstruksi-muda-madya-utama-sertifikasi-kemnaker-bnsp','pelatihan-petugas-keselamatan-konstruksi-smkk-pupr-no-10-2021','pelatihan-penyusunan-rencana-keselamatan-konstruksi-rkk-tender-pelaksanaan','pelatihan-k3-pekerjaan-penggalian-tanah-dalam-trenching-excavation-shoring','pelatihan-k3-scaffolding-perancah-operator-supervisor-scaffolding-kemnaker','pelatihan-k3-pekerjaan-pembetonan-dan-bekisting-formwork-concrete-safety','pelatihan-k3-pekerjaan-ereksi-baja-konstruksi-gedung-dan-jembatan','pelatihan-k3-pekerjaan-demolisi-pembongkaran-bangunan-gedung-tua','pelatihan-k3-pekerjaan-terowongan-dan-bawah-tanah-tunneling-underground','pelatihan-k3-pekerjaan-peledakan-blasting-konstruksi-dan-jalan-tambang','pelatihan-k3-pemasangan-dan-pembongkaran-tower-crane-konstruksi','pelatihan-k3-keselamatan-lalu-lintas-proyek-traffic-management-construction','pelatihan-k3-pekerjaan-pengelasan-konstruksi-baja-dan-perpipaan-proyek','pelatihan-inspeksi-keselamatan-konstruksi-harian-safety-patrol-proyek','pelatihan-penyusunan-analisis-harga-satuan-biaya-k3-konstruksi-ahsp-k3','pelatihan-k3-konstruksi-bangunan-air-bendungan-dan-irigasi-sipil','pelatihan-k3-konstruksi-jalan-tol-dan-jembatan-layang-elevated','pelatihan-k3-konstruksi-pelabuhan-dermaga-dan-bangunan-lepas-pantai','pelatihan-k3-keselamatan-alat-berat-excavator-loader-roller-proyek','pelatihan-k3-pengawasan-pekerjaan-atap-roofing-dan-cladding-bangunan','pelatihan-k3-keselamatan-pekerjaan-pancang-pile-driving-foundation','pelatihan-k3-penanganan-limbah-konstruksi-dan-sedimen-lingkungan-proyek','pelatihan-penyusunan-job-safety-analysis-jsa-pekerjaan-konstruksi-risiko-tinggi','pelatihan-k3-keselamatan-pekerja-subkontraktor-dan-mandor-konstruksi','pelatihan-k3-penanggulangan-keadaan-darurat-bencana-di-lokasi-proyek','pelatihan-k3-pengawasan-pekerjaan-finishing-interior-dan-mep-gedung','pelatihan-k3-keselamatan-pekerjaan-pengeboran-batu-dan-soil-nailing','pelatihan-k3-keselamatan-pekerjaan-precast-concrete-installation','pelatihan-k3-investigasi-kecelakaan-konstruksi-struktur-roboh-dan-longsor','pelatihan-audit-sistem-manajemen-keselamatan-konstruksi-smkk-pupr',
    // 241-270 Ketinggian
    'pelatihan-tenaga-kerja-bangunan-tinggi-tingkat-1-tkbt-1-kemnaker-ri','pelatihan-tenaga-kerja-bangunan-tinggi-tingkat-2-tkbt-2-kemnaker-ri','pelatihan-tenaga-kerja-pada-ketinggian-tingkat-1-tkpk-1-rope-access-kemnaker','pelatihan-tenaga-kerja-pada-ketinggian-tingkat-2-tkpk-2-rope-access-kemnaker','pelatihan-tenaga-kerja-pada-ketinggian-tingkat-3-tkpk-3-supervisor-kemnaker','pelatihan-petugas-k3-utama-ruang-terbatas-confined-space-kemnaker','pelatihan-petugas-k3-madya-ruang-terbatas-confined-space-kemnaker','pelatihan-inspeksi-pemeliharaan-full-body-harness-dan-lanyard-ketinggian','pelatihan-perancangan-sistem-angkur-lifeline-horizontal-vertical-ketinggian','pelatihan-k3-pengukuran-dan-deteksi-gas-berbahaya-ruang-terbatas-gas-tester','pelatihan-k3-penyelematan-darurat-dan-evakuasi-korban-ruang-terbatas-rescue','pelatihan-k3-penyelamatan-korban-gantung-fall-arrest-suspension-trauma-rescue','pelatihan-k3-pekerjaan-di-area-lubang-bukaan-floor-opening-dan-wall-opening','pelatihan-k3-pekerjaan-perawatan-pembersihan-kaca-gedung-bertingkat','pelatihan-k3-pekerjaan-maintenance-menara-telekomunikasi-tower-celluler','pelatihan-k3-pekerjaan-inspeksi-dan-pengelasan-di-dalam-tangki-vessel','pelatihan-k3-penggunaan-self-contained-breathing-apparatus-scba-confined-space','pelatihan-k3-pengaliran-ventilasi-udara-bersih-blower-ruang-terbatas','pelatihan-k3-pemasangan-jaring-pengaman-safety-net-proyek-bangunan','pelatihan-k3-pekerjaan-di-atas-tangki-dan-silo-penyimpanan-material','pelatihan-k3-pemasangan-tangga-kerja-ladder-dan-platform-kerja-sementara','pelatihan-k3-pembersihan-dan-pengerukan-lumpur-gorong-gorong-saluran-bawah-tanah','pelatihan-k3-pengolesan-cat-dan-coating-di-area-ruang-terbatas-pabrik','pelatihan-k3-pekerjaan-perbaikan-turbin-pembangkit-listrik-ruang-sempit','pelatihan-k3-pengolesan-pelapis-kedap-air-waterproofing-di-basement-gedung','pelatihan-k3-pekerjaan-perawatan-pembakar-incinerator-dan-cerobong-asap-chimney','pelatihan-k3-pemasangan-penangkal-petir-di-puncak-menara-gedung-tinggi','pelatihan-k3-penyusunan-prosedur-izin-masuk-ruang-terbatas-entry-permit','pelatihan-k3-inspeksi-kelayakan-peralatan-penyelamat-tripod-rescue-winch','pelatihan-audit-kepatuhan-regulasi-ketinggian-permenaker-09-2016',
    // 271-300 Kesehatan
    'pelatihan-petugas-p3k-di-tempat-kerja-lisensi-resmi-kemnaker-ri-30-jp','pelatihan-dokter-perusahaan-sertifikasi-hiperkes-kemnaker-ri','pelatihan-paramedis-perusahaan-sertifikasi-hiperkes-kemnaker-ri','pelatihan-resusitasi-jantung-paru-rjp-cpr-penggunaan-aed-di-tempat-kerja','pelatihan-penanganan-trauma-gawat-darurat-pendarahan-hebat-lapangan','pelatihan-penanganan-patah-tulang-pembidaian-dan-pembentukan-p3k','pelatihan-penanganan-luka-bakar-termal-dan-luka-bakar-kimia-industri','pelatihan-penanganan-korban-tersengat-listrik-dan-pingsan-di-tempat-kerja','pelatihan-penanganan-korban-keracunan-gas-dan-terhirup-bahan-kimia','pelatihan-inspeksi-dan-pengelolaan-kotak-p3k-fasilitas-p3k-perusahaan','pelatihan-pemeriksaan-kesehatan-pekerja-pemeriksaan-awal-berkala-khusus','pelatihan-penyelenggaraan-pelayanan-kesehatan-kerja-klinik-perusahaan','pelatihan-pencegahan-dan-penanggulangan-hiv-aids-di-tempat-kerja','pelatihan-pencegahan-dan-penanggulangan-narkoba-p4gn-di-tempat-kerja','pelatihan-promosi-kesehatan-dan-program-kebugaran-kerja-wellness-program','pelatihan-manajemen-kelelahan-pekerja-fatigue-management-shift-kerja','pelatihan-pencegahan-penyakit-akibat-kerja-pak-dan-surveilans-kesehatan','pelatihan-k3-ergonomi-pencegahan-gangguan-otot-rangka-musculoskeletal-msds','pelatihan-penanganan-gigitan-hewan-berbisa-ular-dan-serangga-lapangan','pelatihan-penanganan-korban-tenggelam-dan-hipotermia-lapangan-basah','pelatihan-tata-cara-rujukan-medis-gawat-darurat-dan-evakuasi-ambulans','pelatihan-pemeriksaan-audiometri-dan-spirometri-surveilans-kesehatan','pelatihan-pencegahan-dan-pengendalian-penyakit-menular-tbc-covid-19-pabrik','pelatihan-k3-kesehatan-reproduksi-dan-perlindungan-pekerja-perempuan','pelatihan-gizi-kerja-dan-penyelenggaraan-makanan-bagi-tenaga-kerja','pelatihan-penanganan-krisis-kesehatan-mental-dan-psychological-first-aid-pfa','pelatihan-penyusunan-program-kembali-kerja-return-to-work-rtw-pasca-kecelakaan','pelatihan-k3-kesehatan-kerja-bagi-pekerja-shift-malam-dan-rotasi-jadwal','pelatihan-penilaian-kelayakan-kerja-fit-for-duty-assessment-sebelum-shift','pelatihan-audit-kepatuhan-pelayanan-kesehatan-kerja-sesuai-permenaker-03-1982'
  ];
  return allSlugs[index - 1] || 'ahli-k3-umum';
}

function getTitleForIndex(index: number): string {
  // Format title nicely from index
  const slug = getSlugForIndex(index);
  return slug
    .split('-')
    .map(w => w.toUpperCase() === 'K3' ? 'K3' : w.toUpperCase() === 'P3K' ? 'P3K' : w.toUpperCase() === 'SMK3' ? 'SMK3' : w.toUpperCase() === 'RI' ? 'RI' : w.toUpperCase() === 'BNSP' ? 'BNSP' : w.toUpperCase() === 'PUPR' ? 'PUPR' : w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function getLegalForIndex(index: number): string {
  if (index <= 30) return 'PP No. 50 Tahun 2012';
  if (index <= 60) return 'Kepmenaker No. KEP.186/MEN/1999';
  if (index <= 90) return 'Permenaker No. 12 Tahun 2015';
  if (index <= 120) return 'Permenaker No. 08 Tahun 2020';
  if (index <= 150) return 'Permenaker No. 37 Tahun 2016';
  if (index <= 180) return 'Kepmenaker No. KEP.187/MEN/1999';
  if (index <= 210) return 'Permenaker No. 05 Tahun 2018';
  if (index <= 240) return 'Permen PUPR No. 10 Tahun 2021';
  if (index <= 270) return 'Permenaker No. 09 Tahun 2016';
  return 'Permenaker No. PER.15/MEN/VIII/2008';
}

function getDurationForIndex(index: number): string {
  if (index === 1 || index === 61 || index === 121 || index === 151 || index === 181 || index === 211) return '120 JP (12 Hari Kerja)';
  if (index <= 30) return '24 JP (3 Hari Kerja)';
  if (index <= 60) return '30 JP (3 Hari Kerja)';
  if (index <= 90) return '30 JP (3 Hari Kerja)';
  if (index <= 120) return '30 JP (3 Hari Kerja)';
  if (index <= 150) return '30 JP (3 Hari Kerja)';
  if (index <= 180) return '24 JP (3 Hari Kerja)';
  if (index <= 210) return '24 JP (3 Hari Kerja)';
  if (index <= 240) return '24 JP (3 Hari Kerja)';
  if (index <= 270) return '30 JP (3 Hari Kerja)';
  return '30 JP (3 Hari Kerja)';
}

interface TechFocus {
  shortDesc: string;
  answerDetail: string;
  hazardContext: string;
  highlightText: string;
  audience: string[];
  bullets: string[];
  syllabusModules: { module: string; topics: string[]; hours?: string }[];
  faqs: { question: string; answer: string }[];
}

function getTechFocusForDomain(cat: string): TechFocus {
  switch (cat) {
    case 'kelistrikan':
      return {
        shortDesc: 'sistem isolasi Lockout Tagout (LOTO), bahaya ledakan busur listrik Arc Flash (NFPA 70E), dan pengukuran pembumian PUIL 2020',
        answerDetail: 'pengukuran tahanan pembumian (< 5 Ohm), verifikasi LOTO zero energy state, serta inspeksi panel distribusi listrik bertegangan tinggi',
        hazardContext: 'sengatan listrik tegangan tinggi, bahaya busur listrik (Arc Flash), dan potensi kebakaran akibat hubungan pendek jaringan panel',
        highlightText: 'LOTO Zero Energy Verification & Inspeksi PUIL 2020 (SNI 0225:2020)',
        audience: ['Teknisi K3 Listrik & Personel Pemeliharaan Panel', 'Engineer Electrical Pabrik & Supervisor Power Plant', 'HSE Specialist & Anggota Komite P2K3'],
        bullets: [
          'Penguasaan Standar PUIL 2020 (SNI 0225:2020) & Permenaker 12/2015',
          'Prosedur Penguncian & Penandaan Energi Berbahaya Lockout Tagout (LOTO)',
          'Analisis Proteksi Bahaya Arc Flash & Penentuan Boundary Keselamatan',
          'Teknik Pengukuran Tahanan Isolasi Megger & Tahanan Pembumian Grounding'
        ],
        syllabusModules: [
          { module: 'Modul 01: Regulasi K3 Listrik & Penguasaan PUIL 2020', topics: ['Permenaker No. 12 Tahun 2015 & Syarat K3 Instalasi', 'SNI 0225:2020 PUIL Standar Pengabelan & Proteksi', 'Persyaratan Alat Ukur Multimeter & Insulation Tester'], hours: '8 JP' },
          { module: 'Modul 02: Prosedur LOTO & Penanganan Bahaya Arc Flash', topics: ['6 Langkah Baku Penguncian Energi LOTO (Isolation Verification)', 'Klasifikasi Hazard Category Arc Flash & APD Khusus Listrik', 'Pengoperasian ELCB / RCCB Proteksi Arus Bocor'], hours: '12 JP' },
          { module: 'Modul 03: Praktik Pengukuran Grounding & Evaluasi Lisensi', topics: ['Pengujian Tahanan Pembumian Grounding Rod < 5 Ohm', 'Inspeksi Visual Panel Substation & Gardu Induk', 'Ujian Evaluasi Kelulusan & Verifikasi SIO Kemnaker'], hours: '10 JP' }
        ],
        faqs: [
          { question: 'Berapa batas maksimum tahanan pembumian (grounding) yang aman sesuai PUIL 2020?', answer: 'Sesuai PUIL 2020, nilai tahanan pembumian ideal untuk instalasi listrik dan penyalur petir adalah di bawah 5 Ohm.' },
          { question: 'Apakah lulusan pelatihan Teknisi K3 Listrik mendapatkan lisensi resmi?', answer: 'Ya, peserta yang lulus evaluasi memperoleh Sertifikat Pembinaan dan Kartu Lisensi K3 Listrik Kemnaker RI yang berlaku 3 tahun.' },
          { question: 'Apakah materi mencakup praktik penggunaan alat ukur isolasi Megger?', answer: 'Ya, peserta mempraktikkan langsung uji tahanan isolasi kabel dan winding motor listrik menggunakan megohmmeter.' }
        ]
      };
    case 'paa':
      return {
        shortDesc: 'stabilitas beban (stability triangle), kalkulasi pengikatan rigger, dan inspeksi kriteria afkir tali kawat baja wire rope (ISO 4309)',
        answerDetail: 'pengoperasian aman pesawat angkat, perhitungan titik berat beban (center of gravity), serta pemeriksaan outrigger ground bearing capacity',
        hazardContext: 'crane guling akibat kelebihan beban, tali sling putus, dan benturan beban gantung di area kerja logistik',
        highlightText: 'Rigging Load Calculation & Inspeksi Afkir Wire Rope (ISO 4309)',
        audience: ['Operator Forklift, Overhead Crane, Mobile Crane & Tower Crane', 'Juru Ikat Beban (Rigger) & Supervisor Rigging', 'Teknisi Pemeliharaan PAA & HSE Inspector'],
        bullets: [
          'Penguasaan Permenaker No. 08 Tahun 2020 tentang K3 Pesawat Angkat & Angkut',
          'Perhitungan Segitiga Stabilitas Load Center Forklift & Load Chart Crane',
          'Inspeksi Kelayakan Webbing Sling, Shackle, Hook & Wire Rope Afkir',
          'Teknik Komunikasi Sinyal Tangan Standard Rigger & Safety Device Check'
        ],
        syllabusModules: [
          { module: 'Modul 01: Perundang-Undangan PAA & Karakteristik Alat', topics: ['Permenaker No. 08 Tahun 2020 & Tanggung Jawab Operator', 'Komponen Utama Pesawat Angkat Angkut & Safety Device', 'Penentuan Load Center & Kapasitas Angkat Maksimum (SWL)'], hours: '8 JP' },
          { module: 'Modul 02: Perhitungan Rigging & Inspeksi Alat Bantu Angkat', topics: ['Perhitungan Berat Beban & Sudut Pengikatan Sling (Rigging Calc)', 'Kriteria Afkir Tali Kawat Baja Wire Rope Berdasarkan ISO 4309', 'Inspeksi Hook, Shackle, Eyebolt, dan Webbing Sling'], hours: '12 JP' },
          { module: 'Modul 03: Praktik Pengoperasian & Uji Keterampilan SIO', topics: ['Simulasi Pengangkatan Beban Kritis & Manouvering', 'Pemeriksaan Harian Pre-Operational Check List', 'Ujian Praktik Lapangan & Evaluasi Kelulusan Kemnaker'], hours: '10 JP' }
        ],
        faqs: [
          { question: 'Berapa beda wewenang Operator Forklift Kelas I dan Kelas II?', answer: 'Operator Kelas II berwenang mengoperasikan forklift kapasitas hingga 15 Ton, sedangkan Kelas I berwenang mengoperasikan forklift kapasitas di atas 15 Ton.' },
          { question: 'Kapan tali kawat baja (wire rope) wajib dinyatakan afkir (kir afkir)?', answer: 'Sesuai ISO 4309 dan Permenaker 08/2020, wire rope wajib afkir jika terdapat kawat putus melebihi batas toleransi, korosi parah, kinking, atau penurunan diameter > 7%.' },
          { question: 'Bagaimana alur pengurusan SIO Operator PAA ke Kemnaker?', answer: 'Setelah lulus evaluasi teori dan praktik, pengajuan SIO diproses melalui portal TemanK3 Kemnaker dengan menyertakan berkas ijazah, KTP, dan surat tugas.' }
        ]
      };
    case 'pubt':
      return {
        shortDesc: 'pengolahan air umpan boiler, kalibrasi katup pengaman (safety valve), dan pencegahan potensi ledakan BLEVE',
        answerDetail: 'pengoperasian ketel uap bertekanan tinggi, kontrol blowdown air boiler, serta pengujian hydrostatic test bejana tekan',
        hazardContext: 'ledakan katup uap bertekanan tinggi, kebocoran gas amonia/LPG tangki timbun, dan kerak korosi dinding bejana',
        highlightText: 'Safety Valve Popping Test & BLEVE Explosion Prevention (Permen 37/2016)',
        audience: ['Operator Boiler / Ketel Uap Kelas I & II', 'Teknisi Bejana Tekan & Tangki Timbun Pabrik', 'Ahli K3 Spesialis PUBT & Engineer Pemeliharaan'],
        bullets: [
          'Penguasaan Permenaker No. 37/2016, 38/2016 & Permen 01/1988 Uap',
          'Manajemen Water Treatment Boiler: Kontrol Hardness, pH & Blowdown',
          'Pengujian Fungsi Katup Pengaman (Safety Valve Popping Test)',
          'Inspeksi Non-Destructive Testing (NDT) & Hydrostatic Test 1.5x Pressure'
        ],
        syllabusModules: [
          { module: 'Modul 01: Regulasi Uap Bejana Tekan & Konstruksi Boiler', topics: ['UU Uap 1930 & Permenaker No. PER.01/MEN/1988', 'Komponen Utama Ketel Uap: Drum, Superheater, Economizer', 'Prinsip Kerja Bejana Tekan, Kompresor & Tangki Timbun'], hours: '8 JP' },
          { module: 'Modul 02: Pengolahan Air Umpan & Proteksi Ledakan BLEVE', topics: ['Teknik Water Treatment: Softener, Deaerator & Dosing Kimia', 'Identifikasi Bahaya Overpressure & Prosedur Emergency Shutoff', 'Inspeksi Keretakan Dinding & Ketebalan UT Thickness Gauge'], hours: '12 JP' },
          { module: 'Modul 03: Praktik Pengoperasian & Evaluasi Ujian Lisensi', topics: ['Simulasi Penyulutan Burner & Operasi Normal Boiler', 'Pengujian Manometer, Glass Gauge & Safety Valve', 'Evaluasi Teori Ujian Kelulusan & Verifikasi Lisensi Kemnaker'], hours: '10 JP' }
        ],
        faqs: [
          { question: 'Apa perbedaan syarat penunjukan Operator Boiler Kelas I dan Kelas II?', answer: 'Operator Kelas II melayani boiler kapasitas hingga 10 Ton/jam, sedangkan Operator Kelas I melayani boiler kapasitas di atas 10 Ton/jam.' },
          { question: 'Berapa tekanan pengujian hidrostatik (hydrotest) untuk bejana tekan?', answer: 'Pengujian hidrostatik bejana tekan umumnya dilakukan pada tekanan 1.5 kali dari tekanan kerja maksimum yang diperbolehkan (MAWP).' },
          { question: 'Mengapa air umpan boiler harus diolah melalui water treatment?', answer: 'Untuk mencegah timbulnya kerak kalsium yang dapat mengisolasi panas dan menyebabkan pembengkokan pipa uap (overheating) yang memicu ledakan.' }
        ]
      };
    case 'kimia':
      return {
        shortDesc: 'klasifikasi GHS 16 bab SDS, matriks penyimpanan inkompatibilitas, dan prosedur tanggap darurat Hazmat Spill Response Level 1-3',
        answerDetail: 'pengelolaan lembar data keselamatan bahan (SDS), penentuan potensi bahaya besar/menengah (Kep-187/1999), dan penggunaan respirator kimia',
        hazardContext: 'kebocoran gas toksik amonia/klorin, tumpahan asam pekat korosif, dan risiko ledakan bahan kimia reaktif',
        highlightText: 'GHS 16-Section SDS & Hazmat Spill Emergency Response (Kep-187/1999)',
        audience: ['Ahli K3 Kimia & Petugas K3 Kimia Perusahaan', 'Supervisor Laboratorium & Pergudangan Bahan Kimia B3', 'Tim Incident Command Hazmat Response & Staff HSE'],
        bullets: [
          'Penguasaan Kepmenaker No. KEP.187/MEN/1999 & Sistem GHS Global',
          'Penyusunan Lembar Data Keselamatan Bahan (SDS / MSDS 16 Bab)',
          'Matriks Inkompatibilitas Penyimpanan Bahan Kimia Berbahaya B3',
          'Prosedur Penanganan Tumpahan Kimia Hazmat & Penggunaan APD Respirator'
        ],
        syllabusModules: [
          { module: 'Modul 01: Regulasi K3 Kimia & Sistem Klasifikasi GHS', topics: ['Kepmenaker No. KEP.187/MEN/1999 & Penetapan Bahaya Besar/Menengah', 'Penerapan Simbol Piktogram GHS & Frase Bahaya Hazard Statement', 'Struktur 16 Bab Lembar Data Keselamatan Bahan (SDS/MSDS)'], hours: '8 JP' },
          { module: 'Modul 02: Pengendalian Operasional Storage & Hazmat Response', topics: ['Matriks Inkompatibilitas Penyimpanan Kimia Mudah Terbakar & Korosif', 'Penggunaan APD Khusus Kimia: Respirator Kartrid, SCBA & Hazmat Suit', 'Teknik Dekontaminasi Personel & Pengelolaan TPS Limbah B3'], hours: '12 JP' },
          { module: 'Modul 03: Praktik Penanganan Tumpahan & Evaluasi Sertifikasi', topics: ['Simulasi Penanganan Tumpahan Kimia Menggunakan Spill Kit', 'Pengoperasian Gas Detector Combustible & Toxic Gas', 'Ujian Evaluasi Kelulusan & Verifikasi Lisensi Kemnaker RI'], hours: '10 JP' }
        ],
        faqs: [
          { question: 'Kapan perusahaan kategori bahaya besar kimia wajib memiliki Ahli K3 Kimia?', answer: 'Perusahaan bahaya besar dengan kuantitas bahan kimia melebihi NAK wajib memiliki sekurang-kurangnya 1 orang Ahli K3 Kimia dan 2 orang Petugas K3 Kimia.' },
          { question: 'Apa saja 16 bab utama yang wajib ada dalam dokumen SDS GHS?', answer: 'Antara lain Identifikasi Bahan, Bahaya, Komposisi, P3K, Pemadam Kebakaran, Tindakan Tumpahan, Penanganan/Penyimpanan, Kontrol Paparan/APD, Sifat Fisika Kimia, dan Stabilitas.' },
          { question: 'Bagaimana cara menggunakan Spill Kit saat terjadi tumpahan bahan kimia di pabrik?', answer: 'Isolasi area tumpahan, gunakan APD respirator/sarung tangan sesuai SDS, tebarkan bahan penyerap (absorbent pad/granule), masukkan limbah ke kantong B3, dan lakukan dekontaminasi.' }
        ]
      };
    case 'higiene':
      return {
        shortDesc: 'pengukuran kebisingan (NAB 85 dBA 8 jam), evaluasi iklim kerja ISBB, sampling debu respirabel, dan analisis ergonomi REBA/RULA',
        answerDetail: 'pengukuran faktor fisika, kimia, biologi, ergonomi, dan psikologi lingkungan kerja sesuai standar Permenaker 05/2018',
        hazardContext: 'penurunan pendengaran akibat kebisingan industri, stres panas (heat stress), dan gangguan otot rangka (MSDs)',
        highlightText: 'Inspeksi Faktor Fisika/Kimia & Ergonomi REBA/RULA (Permenaker 05/2018)',
        audience: ['Ahli K3 Lingkungan Kerja (Muda, Madya, Utama)', 'Higiene Industri Specialist (HIMU, HIMA, HIU)', 'Teknisi Laboratorium Pengujian Lingkungan Kerja & HSE'],
        bullets: [
          'Penguasaan Permenaker No. 05 Tahun 2018 tentang K3 Lingkungan Kerja',
          'Pengukuran Kebisingan Sound Level Meter & Dosis Kebisingan (Noise Dosimeter)',
          'Evaluasi Stres Panas Indeks Suhu Basah dan Bola (ISBB Index Meter)',
          'Analisis Ergonomi Postur Kerja Metode REBA, RULA & NIOSH Lifting Equation'
        ],
        syllabusModules: [
          { module: 'Modul 01: Standar Permenaker 05/2018 & Nilai Ambang Batas (NAB)', topics: ['Permenaker No. 05 Tahun 2018 & 5 Faktor Bahaya Lingkungan Kerja', 'Nilai Ambang Batas (NAB) Fisika & Kimia Tempat Kerja', 'Penerapan Prinsip 5S / 5R & Housekeeping Keselamatan'], hours: '8 JP' },
          { module: 'Modul 02: Teknik Sampling Faktor Fisika, Kimia & Ergonomi', topics: ['Pengukuran Kebisingan (SLM), Getaran (HAV/WBV) & Pencahayaan (Lux)', 'Sampling Debu Respirabel Menggunakan High Volume Air Sampler (HVAS)', 'Penilaian Ergonomi REBA/RULA & Perancangan Ventilasi LEV'], hours: '12 JP' },
          { module: 'Modul 03: Praktik Pengukuran Lapangan & Evaluasi Lisensi', topics: ['Praktik Kalibrasi & Sampling Alat Ukur Lingkungan Kerja', 'Penyusunan Laporan Hasil Pengukuran Profil Higiene Perusahaan', 'Ujian Evaluasi Teori & Verifikasi Sertifikasi Kemnaker/BNSP'], hours: '10 JP' }
        ],
        faqs: [
          { question: 'Berapa Nilai Ambang Batas (NAB) kebisingan untuk waktu kerja 8 jam per hari?', answer: 'Berdasarkan Permenaker 05/2018, NAB kebisingan untuk 8 jam kerja per hari adalah 85 dBA.' },
          { question: 'Apa perbedaan skema Higiene Industri Muda (HIMU), Madya (HIMA), dan Utama (HIU)?', answer: 'HIMU berfokus pada pengoperasian alat ukur dan sampling dasar. HIMA berfokus pada analisis data dan evaluasi risiko. HIU berfokus pada perancangan sistem pengendalian (design control).' },
          { question: 'Apakah hasil pengukuran lingkungan kerja wajib dilaporkan ke Disnaker?', answer: 'Ya, pemeriksaan dan pengujian lingkungan kerja wajib dilakukan berkala sekurang-kurangnya 1 tahun sekali dan dilaporkan hasilnya ke dinas tenaga kerja.' }
        ]
      };
    case 'konstruksi':
      return {
        shortDesc: 'penyusunan Rencana Keselamatan Konstruksi (RKK), proteksi penggalian tanah trenching shoring, dan inspeksi scaffolding Permen PUPR 10/2021',
        answerDetail: 'penerapan Sistem Manajemen Keselamatan Konstruksi (SMKK), inspeksi safety patrol proyek, dan pengawasan pekerjaan risiko tinggi',
        hazardContext: 'struktur bangunan roboh, tertimbun tanah galian trenching, dan jatuh dari perancah scaffolding',
        highlightText: 'RKK Tender/Pelaksanaan & Audit SMKK PUPR (Permen PUPR No. 10/2021)',
        audience: ['Ahli K3 Konstruksi (Muda, Madya, Utama)', 'Petugas Keselamatan Konstruksi SMKK PUPR', 'Project Manager, Site Engineer & Supervisor Proyek'],
        bullets: [
          'Penguasaan Permen PUPR No. 10 Tahun 2021 tentang SMKK & Permenaker 01/1980',
          'Penyusunan Rencana Keselamatan Konstruksi (RKK) Tender & Pelaksanaan',
          'Inspeksi Perancah Scaffolding & Sistem Penggalian Tanah Dalam (Shoring)',
          'Analisis Harga Satuan Biaya K3 Konstruksi (AHSP K3 PUPR)'
        ],
        syllabusModules: [
          { module: 'Modul 01: Regulasi SMKK PUPR & UU Bangunan Gedung', topics: ['Permen PUPR No. 10 Tahun 2021 & Struktur Dokumen SMKK', 'Permenaker No. PER.01/MEN/1980 K3 Konstruksi Bangunan', 'Perhitungan Analisis Harga Satuan Biaya K3 (AHSP K3)'], hours: '8 JP' },
          { module: 'Modul 02: Pengendalian Pekerjaan Risiko Tinggi & Scaffolding', topics: ['Penyusunan JSA & RKK Pekerjaan Penggalian, Ereksi & Pembetonan', 'Inspeksi Scaffolding Frame & Pipe Clamp Sesuai SKB Menaker-PUPR', 'Pengawasan Pekerjaan Demolisi & Pemasangan Precast Concrete'], hours: '12 JP' },
          { module: 'Modul 03: Praktik Safety Patrol & Evaluasi Sertifikasi', topics: ['Simulasi Safety Patrol Harian & Penyusunan Laporan Temuan Proyek', 'Penanganan Tanggap Darurat Bencana & Kecelakaan Konstruksi', 'Ujian Evaluasi Kelulusan & Verifikasi Lisensi Kemnaker/BNSP'], hours: '10 JP' }
        ],
        faqs: [
          { question: 'Apakah setiap tender proyek konstruksi wajib melampirkan RKK?', answer: 'Ya, sesuai Permen PUPR 10/2021, dokumen RKK Penawaran wajib dilampirkan saat tender dan menjadi salah satu elemen penilaian kelulusan administrasi.' },
          { question: 'Berapa rasio jumlah Petugas Keselamatan Konstruksi yang wajib ada di proyek?', answer: 'Proyek risiko kecil wajib memiliki sekurang-kurangnya 1 orang Petugas Keselamatan Konstruksi, sedangkan proyek risiko sedang/besar wajib memiliki Ahli K3 Konstruksi.' },
          { question: 'Apakah perancah scaffolding lebih dari 10 meter membutuhkan surat ijin khusus?', answer: 'Perancah dengan tinggi di atas 10 meter wajib dirancang oleh teknisi ahli perancah dan disetujui pengawas K3 sebelum dinaiki pekerja.' }
        ]
      };
    case 'ketinggian':
      return {
        shortDesc: 'penerapan 3-point contact TKBT/TKPK, inspek harness lanyard, dan prosedur penanganan kecelakaan Suspension Trauma rescue',
        answerDetail: 'penggunaan APD jatuh (fall arrest system), teknik perancangan titik angkur lifeline, serta pengoperasian SCBA di ruang terbatas',
        hazardContext: 'jatuh dari ketinggian fatalitas, kejebak gas H2S beracun di ruang terbatas, dan kehabisan oksigen',
        highlightText: 'Full Body Harness Inspection & Confined Space Rescue (Permen 09/2016 & SE 01/2012)',
        audience: ['Tenaga Kerja Bangunan Tinggi (TKBT 1/2) & Rope Access (TKPK 1/2/3)', 'Petugas K3 Ruang Terbatas (Confined Space Utama & Madya)', 'Gas Tester & Supervisor Work at Height / Confined Space'],
        bullets: [
          'Penguasaan Permenaker No. 09 Tahun 2016 & SE Menakertrans SE.01/2012',
          'Pemeriksaan Kelayakan Full Body Harness, Absorber & Fall Arrester',
          'Pengukuran Gas Berbahaya Gas Tester (O2, H2S, CO, LEL Combustible)',
          'Teknik Penyelamatan Korban Gantung Harness (Suspension Trauma Rescue)'
        ],
        syllabusModules: [
          { module: 'Modul 01: Regulasi Bekerja di Ketinggian & Ruang Terbatas', topics: ['Permenaker No. 09 Tahun 2016 & SE No. SE.01/MEN/PPK/IV/2012', 'Hirarki Pengendalian Jatuh: Restraint, Positioning, Fall Arrest', 'Kriteria Ruang Terbatas Dengan Izin Masuk (Permit-Required Confined Space)'], hours: '8 JP' },
          { module: 'Modul 02: Deteksi Gas, SCBA & Perancangan Lifeline Angkur', topics: ['Pengoperasian 4-Gas Detector & Pengaliran Blower Ventilasi Air', 'Penggunaan SCBA Self Contained Breathing Apparatus Positif Pressure', 'Pemasangan Lifeline Horizontal/Vertikal & Inspeksi Harness'], hours: '12 JP' },
          { module: 'Modul 03: Praktik Simulation Rescue & Evaluasi SIO', topics: ['Simulasi Rescue Korban Ruang Terbatas Menggunakan Tripod Winch', 'Praktik Pertolongan Korban Gantung Harness Suspension Trauma', 'Ujian Evaluasi Kelulusan & Verifikasi Lisensi Kemnaker RI'], hours: '10 JP' }
        ],
        faqs: [
          { question: 'Apa perbedaan mendasar antara TKBT (Bangunan Tinggi) dan TKPK (Pada Ketinggian / Rope Access)?', answer: 'TKBT bekerja pada lantai kerja tetap atau struktur berpagar. TKPK bekerja menggantung menggunakan tali (rope access) untuk akses menara/dinding tinggi.' },
          { question: 'Berapa kadar oksigen minimum yang aman sebelum pekerja masuk ruang terbatas?', answer: 'Kadar oksigen aman dalam ruang terbatas berkisar antara 19.5% hingga 23.5%. Di bawah 19.5% dianggap membahayakan nyawa (O2 deficiency).' },
          { question: 'Berapa batas waktu penyelamatan korban yang mengalami suspension trauma?', answer: 'Korban yang menggantung pingsan pada harness harus diselamatkan dalam waktu kurang dari 15 menit untuk mencegah gagal organ akibat penyumbatan aliran darah leg pooling.' }
        ]
      };
    default: // kesehatan
      return {
        shortDesc: 'pelaksanaan RJP/CPR 30:2, penggunaan defibrilator AED, triage luka bakar, dan penanganan trauma gawat darurat',
        answerDetail: 'penyelenggaraan pelayanan kesehatan kerja klinik perusahaan (Permen 03/1982), pemantauan audiometri, dan pertolongan pertama P3K 30 JP',
        hazardContext: 'serangan jantung mendadak tempat kerja, pendarahan hebat kecelakaan mesin, dan kecelakaan trauma fisik',
        highlightText: 'RJP / CPR 30:2 & Penyelenggaraan Klinik Perusahaan (Permenaker 15/2008 & 03/1982)',
        audience: ['Petugas P3K Terlisensi Kemnaker RI di Tempat Kerja', 'Dokter Perusahaan & Paramedis Hiperkes', 'HSE Specialist, Staf HRD & Anggota P2K3'],
        bullets: [
          'Penguasaan Permenaker No. PER.15/MEN/VIII/2008 tentang P3K di Tempat Kerja',
          'Resusitasi Jantung Paru (RJP / CPR) Rasio 30:2 & Penggunaan AED',
          'Penanganan Pendarahan Hebat, Pembidaian Patah Tulang & Triage Trauma',
          'Penyelenggaraan Klinik Perusahaan & Pembentukan Fasilitas P3K (Permen 03/1982)'
        ],
        syllabusModules: [
          { module: 'Modul 01: Regulasi P3K & Pelayanan Kesehatan Kerja', topics: ['Permenaker No. PER.15/MEN/VIII/2008 & Permenaker PER.03/MEN/1982', 'Persyaratan Kotak P3K Bentuk A, B, C Sesuai Jumlah Pekerja', 'Pemeriksaan Kesehatan Kerja Awal, Berkala, dan Khusus (Permen 02/1980)'], hours: '8 JP' },
          { module: 'Modul 02: Teknik RJP, AED & Penanganan Trauma Gawat Darurat', topics: ['Resusitasi Jantung Paru (RJP/CPR) Tekanan Dada 100-120x/menit', 'Penggunaan Defibrilator Otomatis (AED Shock Advisory)', 'Teknik Balut Bidai, Penanganan Luka Bakar & Pendarahan Arteri'], hours: '12 JP' },
          { module: 'Modul 03: Praktik Penyelamatan & Uji Lisensi Petugas P3K', topics: ['Simulasi Pemindahan Korban (Evakuasi Tandu & Kendrick Extrication)', 'Inspeksi Isi Kotak P3K & Pencatatan Log Kejadian Medis', 'Ujian Evaluasi Kelulusan & Penerbitan Lisensi P3K Kemnaker'], hours: '10 JP' }
        ],
        faqs: [
          { question: 'Berapa rasio kompresi dan napas buatan saat melakukan RJP / CPR pada orang dewasa?', answer: 'Rasio baku RJP orang dewasa adalah 30 kali kompresi dada diikuti oleh 2 kali hembusan napas buatan.' },
          { question: 'Berapa jumlah Petugas P3K yang wajib dimiliki tempat kerja risiko tinggi?', answer: 'Untuk tempat kerja risiko tinggi, wajib ada sekurang-kurangnya 1 orang Petugas P3K untuk setiap 25-100 orang pekerja.' },
          { question: 'Apakah obat-obatan telan (seperti parasetamol) boleh dimasukkan ke dalam Kotak P3K standar?', answer: 'Sesuai Permenaker 15/2008, Kotak P3K standar hanya berisi alat pertolongan pertama luar (kasa, perban, antiseptik, gunting). Obat telan disimpan khusus di fasilitas klinik perusahaan.' }
        ]
      };
  }
}

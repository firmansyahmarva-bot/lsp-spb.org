import type { ComparisonSeed, CompetencySeed, ContentBlock, ContentRecord, FaqItem, GuideSeed, IndustrySeed, LocationSeed, ProfessionSeed, ProgramSeed, RegulationSeed, SourceRef, TermSeed } from './content-types';
import { officialSources } from './content-seeds-programs';

const joinNatural = (items: string[]) => items.length < 2 ? items[0] ?? '' : `${items.slice(0, -1).join(', ')}, dan ${items.at(-1)}`;
const bullets = (items: string[]) => items.map((item) => `${item}.`);
const commonSources: SourceRef[] = [officialSources.uu1, officialSources.pp50];

const pathwayText: Record<ProgramSeed['pathway'], string> = {
  kemnaker: 'Program ini mengacu pada kerangka pembinaan teknis dan norma K3 yang diawasi oleh Kementerian Ketenagakerjaan RI. Calon peserta perlu melengkapi persyaratan kualifikasi, mengikuti kurikulum jam pelajaran (JP) terstandar, serta melewati evaluasi untuk memperoleh sertifikasi dan lisensi kewenangan yang sah.',
  bnsp: 'Program ini mengacu pada skema sertifikasi kompetensi kerja berbasis SKKNI melalui Lembaga Sertifikasi Profesi (LSP) berlisensi BNSP. Peserta diuji berdasarkan pemenuhan unit kompetensi dan bukti portofolio kerja.',
  mixed: 'Program ini memiliki opsi jalur pembinaan Kemnaker RI maupun asesmen kompetensi BNSP. Pemilihan jalur disesuaikan dengan kebutuhan kepatuhan hukum perusahaan atau portofolio karir profesional individu.',
  practical: 'Program ini difokuskan pada peningkatan keahlian praktis operasional di tempat kerja untuk membantu penerapan kontrol risiko secara langsung di lapangan.',
};

export const buildProgram = (seed: ProgramSeed): ContentRecord => {
  const sources = [...new Map(seed.sourceKeys.map((key) => officialSources[key]).filter(Boolean).concat(commonSources).map((source) => [source.url, source])).values()];
  const primarySource = sources[0];

  const blocks: ContentBlock[] = [
    {
      heading: `Mengenal ${seed.title}`,
      paragraphs: [
        `${seed.title} difokuskan untuk memberikan pemahaman dan keterampilan mendalam dalam ${seed.scope}. Program ini penting guna memastikan operasional kerja berjalan aman, mematuhi regulasi perundangan, serta meminimalkan risiko kecelakaan kerja.`,
        `Pelatihan ini ditujukan bagi ${joinNatural(seed.audience)}, baik dari kalangan praktisi K3, pengawas lapangan, maupun tim teknis yang bertanggung jawab atas keselamatan operasional.`,
      ],
    },
    {
      heading: 'Tujuan & Hasil Belajar',
      paragraphs: ['Setelah menyelesaikan program pelatihan ini, peserta diharapkan mampu menunjukkan kompetensi berikut:'],
      bullets: bullets(seed.outcomes),
    },
    {
      heading: 'Sasaran Peserta & Persyaratan',
      paragraphs: [
        `Sasaran utama pelatihan ini adalah ${joinNatural(seed.audience)}. Peserta diharapkan memiliki pemahaman dasar mengenai operasional tempat kerja atau latar belakang pendidikan/tugas yang relevan.`,
        'Bagi peserta yang mengikuti sertifikasi resmi, kelengkapan berkas identitas (KTP), ijazah pendidikan terakhir, serta surat penugasan perusahaan (jika utusan instansi) perlu diverifikasi sebelum pelaksanaan.',
      ],
    },
    {
      heading: 'Pokok Bahasan & Silabus Materi',
      paragraphs: [`Kurikulum ${seed.title} mencakup modul teori komprehensif, studi kasus lapangan, dan praktik yang mencakup:`],
      bullets: bullets(seed.syllabus),
    },
    {
      heading: 'Metode Pembelajaran & Evaluasi',
      paragraphs: [
        'Pelatihan diselenggarakan dengan metode interaktif yang memadukan pemaparan materi regulasi, diskusi studi kasus kecelakaan kerja, simulasi/praktik langsung, serta evaluasi pemahaman di akhir sesi.',
        'Untuk kelas in-house perusahaan, studi kasus dapat disesuaikan langsung dengan jenis bahaya dan peralatan spesifik di lokasi operasional perusahaan Anda.',
      ],
    },
    {
      heading: 'Jalur Sertifikasi & Konsultasi Penyelenggaraan',
      paragraphs: [
        pathwayText[seed.pathway],
        'PT Kreasi Ultimate Berjaya siap mendampingi kebutuhan konsultasi silabus, konfirmasi jadwal batch publik, maupun pengajuan proposal In-House Training khusus untuk perusahaan Anda.',
      ],
    },
  ];

  const faqs: FaqItem[] = [
    {
      question: `Apakah ${seed.title} tersedia untuk format In-House Training perusahaan?`,
      answer: 'Ya, program ini dapat diselenggarakan secara in-house di lokasi perusahaan Anda atau venue pilihan dengan jadwal dan studi kasus yang disesuaikan kebutuhan internal.',
    },
    {
      question: `Siapa saja yang direkomendasikan mengikuti ${seed.title}?`,
      answer: `Program ini sangat direkomendasikan untuk ${joinNatural(seed.audience)} serta personel yang berkaitan langsung dengan pengawasan ${seed.scope}.`,
    },
    {
      question: 'Bagaimana cara menanyakan jadwal terdekat dan penawaran harga?',
      answer: 'Anda dapat langsung menghubungi konsultan PT Kreasi Ultimate Berjaya melalui WhatsApp untuk mendapatkan jadwal batch terkonfirmasi dan rincian estimasi biaya resmi.',
    },
  ];

  return {
    section: 'pelatihan',
    slug: seed.slug,
    title: seed.title,
    description: `Informasi lengkap ${seed.title}: silabus, sasaran peserta, persyaratan, metode evaluasi, dan konsultasi jadwal pelatihan K3 bersama PT Kreasi Ultimate Berjaya.`,
    answer: `${seed.title} adalah program pelatihan K3 yang berfokus pada ${seed.scope} untuk ${joinNatural(seed.audience)}.`,
    highlights: ['Kurikulum Komprehensif & Terstruktur', 'Bimbingan Instruktur Berpengalaman', 'Tersedia Kelas Publik & In-House Perusahaan', 'Dukungan Administrasi & Konsultasi Berkas'],
    blocks,
    faqs,
    related: [`profesi/${seed.slug}`, 'pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker'],
    sources,
    sourceUrl: primarySource?.url,
    sourceLabel: primarySource?.label,
    verifiedAt: '2026-09-01',
    indexable: true,
    intent: `pelatihan ${seed.title} jadwal biaya materi`,
    contentKind: 'program',
    primaryCtaText: `Tanya Jadwal ${seed.title}`,
    primaryCtaIntent: 'jadwal',
    secondaryCtaText: 'Konsultasi Pelatihan Perusahaan',
    secondaryCtaIntent: 'perusahaan',
  };
};

export const buildProfession = (seed: ProfessionSeed): ContentRecord => {
  const nature = seed.nature === 'regulated'
    ? 'Peran ini memiliki dasar penunjukan atau lisensi resmi berdasarkan peraturan perundang-undangan K3 yang berlaku di Indonesia.'
    : seed.nature === 'scheme'
      ? 'Peran ini dapat diuji dan disertifikasi melalui skema kompetensi kerja berstandar SKKNI / BNSP.'
      : 'Peran ini merupakan posisi struktural/fungsional di organisasi perusahaan untuk memastikan operasional K3 berjalan teratur.';

  const blocks: ContentBlock[] = [
    {
      heading: `Peran & Tanggung Jawab ${seed.title}`,
      paragraphs: [
        `${seed.title} bertugas untuk ${seed.role}. Posisi ini sangat dibutuhkan pada lingkungan kerja seperti ${joinNatural(seed.contexts)}.`,
        nature,
      ],
    },
    {
      heading: 'Tugas Utama di Lapangan',
      paragraphs: ['Tugas harian mencakup pengawasan, implementasi program keselamatan, dan pelaporan berkala:'],
      bullets: seed.skills.map((skill) => `Melakukan pengawasan dan penerapan ${skill} secara konsisten di area kerja.`),
    },
    {
      heading: 'Kualifikasi & Keahlian yang Diperlukan',
      paragraphs: [
        `Keahlian utama seorang ${seed.title} mencakup ${joinNatural(seed.skills)}, didukung pemahaman regulasi K3 nasional, kemampuan komunikasi persuasif, serta analisis bahaya yang tajam.`,
        'Memiliki sertifikasi pelatihan K3 yang terverifikasi menjadi nilai tambah utama dalam rekrutmen dan penugasan resmi perusahaan.',
      ],
    },
    {
      heading: 'Prospek Karir & Pengembangan Profesional',
      paragraphs: [
        `Peluang karir bagi ${seed.title} terus bertumbuh seiring dengan meningkatnya kesadaran perusahaan terhadap keselamatan kerja dan kepatuhan audit SMK3/ISO 45001.`,
        'Pengembangan karir dapat dipercepat melalui keikutsertaan dalam pelatihan pembinaan K3 lanjutan dan perluasan pengalaman operasional.',
      ],
    },
  ];

  return {
    section: 'profesi',
    slug: seed.slug,
    title: seed.title,
    description: `Profil profesi ${seed.title}: tugas operasional, kualifikasi yang dibutuhkan, lingkungan kerja, dan jalur pelatihan K3 yang relevan di Indonesia.`,
    answer: `${seed.title} bertugas ${seed.role} pada ${joinNatural(seed.contexts)}.`,
    highlights: ['Peran Kunci Keselamatan Kerja', 'Kompetensi Teknis Terapan', 'Kualifikasi Bersertifikat', 'Prospek Karir Industri'],
    blocks,
    faqs: [
      { question: `Apa peran utama seorang ${seed.title}?`, answer: `${seed.title} bertanggung jawab untuk ${seed.role} dengan menerapkan ${joinNatural(seed.skills)}.` },
      { question: `Pelatihan apa yang sesuai untuk profesi ${seed.title}?`, answer: `Pelatihan yang relevan meliputi pembinaan K3 terkait ruang lingkup kerja serta program Ahli K3 Umum sebagai fondasi regulasi nasional.` },
    ],
    related: [`pelatihan/${seed.slug}`, 'pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker'],
    sources: seed.nature === 'scheme' ? [officialSources.bnsp] : commonSources,
    sourceUrl: commonSources[0]?.url,
    sourceLabel: commonSources[0]?.label,
    verifiedAt: '2026-09-01',
    indexable: true,
    intent: `profesi ${seed.title} tugas karir gaji`,
    contentKind: 'profession',
    primaryCtaText: `Konsultasi Pelatihan ${seed.title}`,
    primaryCtaIntent: 'daftar',
  };
};

export const buildCompetency = (seed: CompetencySeed): ContentRecord => {
  const blocks: ContentBlock[] = [
    {
      heading: `Pentingnya ${seed.title}`,
      paragraphs: [
        `${seed.title} adalah kemampuan kunci untuk ${seed.purpose}. Penguasaan kompetensi ini secara sistematis membantu mencegah terjadinya insiden berbahaya dan memastikan tindakan perbaikan berjalan efektif.`,
      ],
    },
    {
      heading: 'Masukan & Data yang Dibutuhkan',
      paragraphs: ['Untuk menjalankan proses ini dengan tepat, praktisi memerlukan masukan data berikut:'],
      bullets: bullets(seed.inputs),
    },
    {
      heading: 'Keluaran & Bukti Kerja',
      paragraphs: ['Hasil nyata yang dihasilkan dari pelaksanaan kompetensi ini antara lain:'],
      bullets: bullets(seed.outputs),
    },
    {
      heading: 'Kesalahan Umum yang Harus Dihindari',
      paragraphs: ['Dalam penerapannya di lapangan, hindari kekeliruan berikut:'],
      bullets: bullets(seed.errors),
    },
  ];

  return {
    section: 'kompetensi',
    slug: seed.slug,
    title: seed.title,
    description: `Panduan kompetensi ${seed.title}: tujuan penerapan, data masukan, bukti kerja, dan pelatihan K3 terkait untuk meningkatkan keahlian kerja.`,
    answer: `${seed.title} adalah keterampilan kerja untuk ${seed.purpose} berbasis bukti dan data lapangan.`,
    highlights: ['Penerapan Praktis di Lapangan', 'Pengendalian Risiko Sistematis', 'Keluaran Tertelusur', 'Relevan untuk Audit K3'],
    blocks,
    faqs: [
      { question: `Apa hasil utama dari ${seed.title}?`, answer: `Keluaran utamanya meliputi ${joinNatural(seed.outputs)}.` },
      { question: 'Bagaimana cara meningkatkan kompetensi ini?', answer: 'Dapat ditingkatkan melalui pelatihan intensif K3, bimbingan praktisi berpengalaman, serta praktik langsung dalam penyusunan dokumen keselamatan kerja.' },
    ],
    related: ['pelatihan/ahli-k3-umum', 'panduan/materi-ahli-k3-umum', 'profesi/ahli-k3-umum'],
    sources: commonSources,
    sourceUrl: commonSources[0]?.url,
    sourceLabel: commonSources[0]?.label,
    verifiedAt: '2026-09-01',
    indexable: true,
    intent: `kompetensi ${seed.title}`,
    contentKind: 'competency',
  };
};

export const buildIndustry = (seed: IndustrySeed): ContentRecord => {
  const blocks: ContentBlock[] = [
    {
      heading: `Karakteristik & Risiko K3 pada ${seed.title}`,
      paragraphs: [
        `Sektor ${seed.title} memiliki profil aktivitas khas seperti ${joinNatural(seed.activities)}. Mengingat tingginya potensi risiko, penerapan sistem manajemen K3 yang terintegrasi menjadi keharusan mutlak.`,
      ],
    },
    {
      heading: 'Bahaya Dominan di Tempat Kerja',
      paragraphs: ['Identifikasi bahaya awal pada sektor ini berfokus pada:'],
      bullets: bullets(seed.hazards),
    },
    {
      heading: 'Pengendalian Kritis yang Direkomendasikan',
      paragraphs: ['Langkah mitigasi yang wajib diterapkan mencakup:'],
      bullets: bullets(seed.controls),
    },
    {
      heading: 'Peran & Kebutuhan Pelatihan K3',
      paragraphs: [
        `Pengawasan K3 di sektor ${seed.title} melibatkan ${joinNatural(seed.roles)}. Untuk memenuhi standar kepatuhan regulasi, personil terkait disarankan mengikuti pembinaan Ahli K3 Umum serta pelatihan teknis sesuai bahaya dominan.`,
      ],
    },
  ];

  return {
    section: 'industri',
    slug: seed.slug,
    title: seed.title,
    description: `Panduan penerapan K3 pada sektor ${seed.title}: identifikasi bahaya utama, pengendalian kritis, kepatuhan regulasi, dan pelatihan K3 yang dibutuhkan.`,
    answer: `Penerapan K3 pada ${seed.title} berfokus pada mitigasi ${joinNatural(seed.hazards)} melalui ${joinNatural(seed.controls)}.`,
    highlights: ['Analisis Risiko Sektor Industri', 'Pengendalian Kritis', 'Kepatuhan Regulasi', 'Rekomendasi Program K3'],
    blocks,
    faqs: [
      { question: `Apa bahaya utama pada sektor ${seed.title}?`, answer: `Bahaya dominan meliputi ${joinNatural(seed.hazards)}.` },
      { question: `Pelatihan K3 apa yang wajib bagi sektor ${seed.title}?`, answer: `Disarankan memiliki personel bersertifikat Ahli K3 Umum Kemnaker RI serta sertifikasi teknis sesuai peralatan dan aktivitas kerja.` },
    ],
    related: ['pelatihan/ahli-k3-umum', 'panduan/tugas-ahli-k3-umum', 'panduan/biaya-pelatihan-k3'],
    sources: commonSources,
    sourceUrl: commonSources[0]?.url,
    sourceLabel: commonSources[0]?.label,
    verifiedAt: '2026-09-01',
    indexable: true,
    intent: `k3 industri ${seed.title}`,
    contentKind: 'industry',
    primaryCtaText: 'Konsultasi K3 Industri',
    primaryCtaIntent: 'perusahaan',
  };
};

export const buildGuide = (seed: GuideSeed): ContentRecord => {
  const blocks: ContentBlock[] = [
    {
      heading: `Tujuan & Manfaat ${seed.title}`,
      paragraphs: [
        `Panduan ${seed.title} ini dirancang untuk membantu ${seed.purpose}. Penerapan langkah-langkah yang terstruktur menjamin hasil kerja akurat dan dapat dipertanggungjawabkan saat audit.`,
      ],
    },
    {
      heading: 'Persiapan & Masukan yang Dibutuhkan',
      paragraphs: ['Sebelum memulai, siapkan data dan dokumen pendukung berikut:'],
      bullets: bullets(seed.inputs),
    },
    {
      heading: 'Langkah-Langkah Pelaksanaan',
      paragraphs: ['Jalankan tahapan kerja secara runtut dan teliti:'],
      bullets: seed.steps.map((step, index) => `${index + 1}. ${step}.`),
    },
    {
      heading: 'Keluaran & Dokumentasi',
      paragraphs: [
        `Hasil akhir dari proses ini adalah ${seed.output}. Dokumentasi ini menjadi bukti objektif dalam penerapan SMK3 PP 50/2012 dan ISO 45001.`,
      ],
    },
  ];

  return {
    section: 'panduan',
    slug: seed.slug,
    title: seed.title,
    description: `Panduan praktis ${seed.title}: persiapan, tahapan langkah kerja, format keluaran dokumen, dan kaitannya dengan pelatihan K3.`,
    answer: `${seed.title} bertujuan untuk ${seed.purpose} dengan panduan langkah praktis dan terstruktur.`,
    highlights: ['Panduan Langkah Demi Langkah', 'Persiapan Data & Dokumen', 'Format Keluaran Terstandar', 'Relevan untuk Praktisi K3'],
    blocks,
    faqs: [
      { question: `Apa tujuan utama dari ${seed.title}?`, answer: `Tujuannya adalah untuk ${seed.purpose}.` },
      { question: 'Apakah format ini dapat disesuaikan dengan kondisi perusahaan?', answer: 'Ya, seluruh panduan dapat diadaptasi dengan skala organisasi dan jenis risiko di tempat kerja Anda.' },
    ],
    related: ['pelatihan/ahli-k3-umum', 'panduan/materi-ahli-k3-umum', 'panduan/syarat-ahli-k3-umum'],
    sources: commonSources,
    sourceUrl: commonSources[0]?.url,
    sourceLabel: commonSources[0]?.label,
    verifiedAt: '2026-09-01',
    indexable: true,
    intent: `panduan ${seed.title}`,
    contentKind: 'guide',
  };
};

export const buildComparison = (seed: ComparisonSeed): ContentRecord => ({
  section: 'perbandingan',
  slug: seed.slug,
  title: seed.title,
  description: `Perbandingan ${seed.title}: perbedaan tujuan, dasar hukum, kelembagaan, proses evaluasi, dan rekomendasi pemilihan yang tepat.`,
  answer: `Perbedaan mendasar antara ${seed.left} dan ${seed.right} adalah ${seed.distinction}. Pemilihan ditentukan oleh tujuan kepatuhan hukum dan kebutuhan profesional Anda.`,
  highlights: ['Perbedaan Otoritas & Tujuan', 'Analisis Aspek Kunci', 'Rekomendasi Pemilihan', 'Konsultasi Jalur Pelatihan'],
  blocks: [
    {
      heading: `Perbedaan Pokok ${seed.left} dan ${seed.right}`,
      paragraphs: [
        `Dalam implementasi K3, ${seed.distinction}. Memahami perbedaan ini mencegah kesalahan investasi pelatihan dan memastikan sertifikat yang diperoleh tepat guna.`,
      ],
    },
    {
      heading: `Kapan Memilih ${seed.left}?`,
      paragraphs: [
        `Pilih ${seed.left} ketika fokus utama Anda adalah memenuhi persyaratan spesifik, kepatuhan regulasi yang mensyaratkan jalur ini, atau kebutuhan operasional terkait.`,
      ],
    },
    {
      heading: `Kapan Memilih ${seed.right}?`,
      paragraphs: [
        `Pilih ${seed.right} jika konteks pekerjaan atau standar proyek Anda lebih menekankan kualifikasi dan ruang lingkup yang dicakup oleh opsi ini.`,
      ],
    },
  ],
  faqs: [
    { question: `Apakah ${seed.left} dapat menggantikan ${seed.right}?`, answer: `Tidak otomatis saling menggantikan karena ${seed.distinction}.` },
    { question: 'Bagaimana cara menentukan pilihan terbaik?', answer: 'Konsultasikan kebutuhan regulasi perusahaan dan sasaran karir Anda bersama tim ahli PT Kreasi Ultimate Berjaya.' },
  ],
  related: ['pelatihan/ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker', 'panduan/syarat-ahli-k3-umum'],
  sources: commonSources,
  sourceUrl: commonSources[0]?.url,
  sourceLabel: commonSources[0]?.label,
  verifiedAt: '2026-09-01',
  indexable: true,
  intent: `perbandingan ${seed.title}`,
  contentKind: 'comparison',
  primaryCtaText: 'Konsultasi Perbandingan Jalur K3',
  primaryCtaIntent: 'kemnaker_bnsp',
});

export const buildRegulation = (seed: RegulationSeed): ContentRecord => ({
  section: 'regulasi-k3',
  slug: seed.slug,
  title: seed.title,
  description: `Ringkasan resmi ${seed.title}: status keberlakuan, ruang lingkup kewajiban pengusaha, pemenuhan personel K3, dan rujukan naskah peraturan.`,
  answer: `${seed.title} mengatur ${seed.scope}. Status regulasi: ${seed.status}.`,
  highlights: ['Status Keberlakuan Resmi', 'Ruang Lingkup Kewajiban K3', 'Kualifikasi Personel & Lisensi', 'Rujukan Sumber Resmi'],
  blocks: [
    {
      heading: 'Status & Keberlakuan Regulasi',
      paragraphs: [
        `Status regulasi: ${seed.status}. Peraturan ini menjadi rujukan hukum penting dalam pengawasan norma keselamatan kerja dan pemenuhan kualifikasi tenaga kerja di Indonesia.`,
      ],
    },
    {
      heading: 'Ruang Lingkup & Kewajiban Tempat Kerja',
      paragraphs: [
        `Peraturan ini mencakup ${seed.scope}. Setiap pengurus tempat kerja wajib memastikan fasilitas, peralatan, dan prosedur keselamatan telah sesuai dengan standar teknis yang diamanatkan.`,
      ],
    },
    {
      heading: 'Kebutuhan Personel & Pelatihan Terkait',
      paragraphs: [
        'Pemenuhan kepatuhan terhadap regulasi ini umumnya mensyaratkan adanya personel bersertifikat (seperti Ahli K3 Umum, Teknisi K3, atau Petugas K3 berlisensi) untuk mengawasi operasional.',
      ],
    },
  ],
  faqs: [
    { question: 'Apakah peraturan ini masih berlaku?', answer: `Status peraturan ini adalah ${seed.status}. Pastikan selalu memeriksa pembaruan aturan pelaksanaan terkait.` },
    { question: 'Bagaimana cara memenuhi standar kepatuhan regulasi ini?', answer: 'Langkah awal adalah melakukan audit kepatuhan (legal compliance audit) dan mengikutsertakan personel terkait dalam pembinaan K3 resmi Kemnaker RI.' },
  ],
  related: ['pelatihan/ahli-k3-umum', 'panduan/tugas-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker'],
  sources: [seed.source],
  sourceUrl: seed.source.url,
  sourceLabel: seed.source.label,
  status: seed.status,
  verifiedAt: '2026-09-01',
  indexable: !/dicabut|tidak berlaku/i.test(seed.status),
  intent: `regulasi ${seed.title}`,
  contentKind: 'regulation',
  primaryCtaText: 'Konsultasi Kepatuhan Regulasi K3',
  primaryCtaIntent: 'perusahaan',
});

export const buildLocation = (seed: LocationSeed): ContentRecord => {
  const isOwner = seed.ownerLocation === true;
  const locationText = isOwner
    ? `PT Kreasi Ultimate Berjaya memiliki kantor layanan dan operasional konsultasi di wilayah ${seed.name}, siap melayani pendaftaran kelas publik maupun penyelenggaraan In-House Training K3.`
    : `PT Kreasi Ultimate Berjaya melayani penyelenggaraan In-House Training K3 untuk perusahaan di seluruh wilayah ${seed.name} dan sekitarnya.`;

  return {
    section: 'lokasi',
    slug: seed.slug,
    title: `Pelatihan Ahli K3 Umum & K3 di ${seed.name}`,
    description: `Layanan konsultasi dan pendaftaran pelatihan Ahli K3 Umum, sertifikasi Kemnaker, dan In-House Training K3 di ${seed.name}, ${seed.province}.`,
    answer: `${locationText} Kebutuhan pelatihan K3 disesuaikan dengan sektor unggulan di ${seed.name} seperti ${joinNatural(seed.sectors)}.`,
    highlights: [`Layanan Konsultasi K3 ${seed.name}`, 'Jadwal Kelas Publik & In-House Perusahaan', 'Sertifikasi Resmi Kemnaker RI & BNSP', 'Didukung Instruktur Berpengalaman'],
    blocks: [
      {
        heading: `Kebutuhan Pelatihan K3 di ${seed.name}`,
        paragraphs: [
          `Pertumbuhan sektor industri seperti ${joinNatural(seed.sectors)} di ${seed.name} menuntut tersedianya tenaga kerja kompeten dan Ahli K3 bersertifikat resmi.`,
          locationText,
        ],
      },
      {
        heading: 'Pilihan Program Pelatihan',
        paragraphs: [
          'Program unggulan yang tersedia meliputi Pembinaan Ahli K3 Umum Kemnaker RI, Petugas P3K, K3 Kebakaran, K3 Listrik, K3 Bekerja di Ketinggian, serta In-House Training SMK3 PP 50/2012.',
        ],
      },
      {
        heading: 'Konsultasi & Pendaftaran',
        paragraphs: [
          `Bagi individu dan instansi di ${seed.name} yang membutuhkan jadwal batch terdekat atau penawaran in-house, silakan hubungi tim marketing kami.`,
        ],
      },
    ],
    faqs: [
      { question: `Apakah ada pelatihan Ahli K3 Umum di ${seed.name}?`, answer: `Ya, tersedia kelas blended learning (online teori + PKL terpandu) serta opsi In-House Training langsung di perusahaan Anda di ${seed.name}.` },
      { question: 'Bagaimana cara mendaftar?', answer: 'Hubungi konsultan kami via WhatsApp untuk verifikasi berkas dan pemilihan jadwal batch yang tersedia.' },
    ],
    related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'panduan/biaya-pelatihan-k3', 'jadwal', 'kontak'],
    sources: commonSources,
    sourceUrl: commonSources[0]?.url,
    sourceLabel: commonSources[0]?.label,
    verifiedAt: '2026-09-01',
    indexable: isOwner,
    intent: `pelatihan ahli k3 umum di ${seed.name}`,
    contentKind: 'location',
    primaryCtaText: `Tanya Jadwal di ${seed.name}`,
    primaryCtaIntent: 'jadwal',
  };
};

export const buildTerm = (seed: TermSeed): ContentRecord => ({
  section: 'kamus-k3',
  slug: seed.slug,
  title: seed.term,
  description: `Pengertian istilah K3 ${seed.term}: definisi, konteks penggunaan dalam keselamatan kerja, dan contoh penerapannya di industri.`,
  answer: seed.definition,
  highlights: ['Definisi Terstandar', 'Konteks Keselamatan Kerja', 'Contoh Penerapan', 'Rujukan Regulasi Terkait'],
  blocks: [
    {
      heading: `Pengertian ${seed.term}`,
      paragraphs: [
        seed.definition,
        `Istilah ini digunakan dalam ruang lingkup ${seed.category} guna memudahkan komunikasi standar keselamatan di tempat kerja.`,
      ],
    },
    {
      heading: 'Contoh Penerapan di Lapangan',
      paragraphs: [seed.example],
    },
  ],
  faqs: [
    { question: `Apa arti istilah ${seed.term}?`, answer: seed.definition },
  ],
  related: ['pelatihan/ahli-k3-umum', 'panduan/materi-ahli-k3-umum', 'panduan/syarat-ahli-k3-umum'],
  sources: commonSources,
  sourceUrl: commonSources[0]?.url,
  sourceLabel: commonSources[0]?.label,
  verifiedAt: '2026-09-01',
  indexable: true,
  intent: `arti istilah ${seed.term} k3`,
  contentKind: 'term',
});

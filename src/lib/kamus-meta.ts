import { type ContentRecord } from './content-types';

export type TopicCategoryId =
  | 'dasar-kecelakaan'
  | 'penilaian-risiko'
  | 'smk3-manajemen'
  | 'higiene-kesehatan'
  | 'kimia-proses'
  | 'listrik-mesin'
  | 'pesawat-uap-bejana'
  | 'ergonomi-faktor-manusia'
  | 'kebakaran-tanggap-darurat'
  | 'ketinggian-ruang-terbatas'
  | 'apd-alat-keselamatan';

export interface TopicCategory {
  id: TopicCategoryId;
  name: string;
  shortLabel: string;
  description: string;
}

export const topicCategories: TopicCategory[] = [
  {
    id: 'dasar-kecelakaan',
    name: 'Dasar K3 & Istilah Kecelakaan',
    shortLabel: 'Dasar K3',
    description: 'Konsep dasar, teori kecelakaan (Heinrich, Swiss Cheese, Bird), metrik keparahan insiden (LTI, TRIR, LTIFR), dan budaya keselamatan kerja.',
  },
  {
    id: 'penilaian-risiko',
    name: 'Penilaian Risiko & Investigasi Insiden',
    shortLabel: 'Penilaian Risiko',
    description: 'Metodologi identifikasi bahaya, analisis risiko (HIRADC, JSA, HAZOP, Bowtie, LOPA), dan teknik investigasi akar masalah (5-Why, TapRooT, RCA).',
  },
  {
    id: 'smk3-manajemen',
    name: 'SMK3, Audit & Manajemen Keselamatan',
    shortLabel: 'SMK3 & Audit',
    description: 'Penerapan Sistem Manajemen K3 (PP 50/2012, ISO 45001), audit kepatuhan, sistem CSMS kontraktor, kepemimpinan keselamatan, dan tata kelola regulasi.',
  },
  {
    id: 'higiene-kesehatan',
    name: 'Higiene Industri & Kesehatan Kerja',
    shortLabel: 'Higiene & Kesehatan',
    description: 'Pengukuran faktor fisika, kimia, biologi di tempat kerja, Nilai Ambang Batas (NAB), pemantauan kualitas udara (IAQ), dan pencegahan PAK.',
  },
  {
    id: 'kimia-proses',
    name: 'Keselamatan Bahan Kimia & Proses (PSM)',
    shortLabel: 'Bahan Kimia & Proses',
    description: 'Manajemen keselamatan proses (PSM), klasifikasi bahaya GHS, Lembar Data Keselamatan (MSDS), batas ledakan (LEL/UEL), titik nyala, dan fenomena BLEVE.',
  },
  {
    id: 'listrik-mesin',
    name: 'Keselamatan Listrik & Pengaman Mesin',
    shortLabel: 'Listrik & Mesin',
    description: 'Prosedur Lockout/Tagout (LOTO), bahaya busur api (arc flash), sistem pembumian proteksi, interlock pintu mesin, dan pengaman titik operasi.',
  },
  {
    id: 'pesawat-uap-bejana',
    name: 'Pesawat Angkat, Uap & Bejana Tekan',
    shortLabel: 'Pesawat Angkat & Uap',
    description: 'Batas beban aman (SWL), pengoperasian crane, ketel uap, bejana tekan, katup pengaman (PSV/PRV), dan pengujian kelaikan peralatan pabrik.',
  },
  {
    id: 'ergonomi-faktor-manusia',
    name: 'Ergonomi & Faktor Manusia',
    shortLabel: 'Ergonomi',
    description: 'Analisis postur kerja (REBA, RULA, OWAS), batas pengangkatan manual NIOSH, penataan stasiun kerja, kelelahan shift kerja, dan pencegahan MSDs.',
  },
  {
    id: 'kebakaran-tanggap-darurat',
    name: 'Proteksi Kebakaran & Tanggap Darurat',
    shortLabel: 'Kebakaran & Darurat',
    description: 'Peralatan proteksi aktif dan pasif (APAR, hydrant, sprinkler, detektor alarm), rencana tanggap darurat (ERP), rute evakuasi, dan penanggulangan kebakaran.',
  },
  {
    id: 'ketinggian-ruang-terbatas',
    name: 'Bekerja di Ketinggian & Ruang Terbatas',
    shortLabel: 'Ketinggian & Ruang Terbatas',
    description: 'Standar keselamatan bekerja di ketinggian (fall arrest system, scaffolding, rope access), izin kerja ruang terbatas (confined space), dan penyelamatan darurat.',
  },
  {
    id: 'apd-alat-keselamatan',
    name: 'APD & Peralatan Keselamatan',
    shortLabel: 'APD & Perlengkapan',
    description: 'Standar kelayakan dan pemakaian Alat Pelindung Diri (respirator, full body harness, helm, kacamata, pelindung telinga, stasiun eyewash, emergency shower).',
  },
];

export interface PopularTerm {
  slug: string;
  term: string;
  fullForm: string;
  description: string;
  topicLabel: string;
}

export const popularTerms: PopularTerm[] = [
  {
    slug: 'penilaian-kematangan-budaya-k3',
    term: 'K3',
    fullForm: 'Keselamatan dan Kesehatan Kerja',
    description: 'Upaya sistematis dan ilmiah untuk mencegah kecelakaan kerja, penyakit akibat kerja, serta menciptakan lingkungan kerja yang aman dan produktif.',
    topicLabel: 'Dasar K3',
  },
  {
    slug: 'hazard-identification-risk-assessment-and-determining-controls-hiradc',
    term: 'HIRADC',
    fullForm: 'Hazard Identification, Risk Assessment, and Determining Controls',
    description: 'Metodologi terstruktur untuk mengidentifikasi seluruh potensi bahaya kerja, mengukur tingkat keparahan dan kemungkinan risiko, serta menetapkan hierarki kendali.',
    topicLabel: 'Penilaian Risiko',
  },
  {
    slug: 'job-safety-analysis-jsa-langkah-kerja-bertahap',
    term: 'JSA',
    fullForm: 'Job Safety Analysis (Analisis Keselamatan Kerja)',
    description: 'Teknik analisis keselamatan yang membedah setiap langkah kerja spesifik guna memetakan bahaya pada setiap tahapan dan menyusun prosedur pencegahannya.',
    topicLabel: 'Penilaian Risiko',
  },
  {
    slug: 'audit-kepatuhan-166-kriteria-smk3-berdasarkan-pp-50-2012',
    term: 'SMK3',
    fullForm: 'Sistem Manajemen Keselamatan dan Kesehatan Kerja',
    description: 'Bagian dari sistem manajemen perusahaan secara keseluruhan untuk pengendalian risiko yang berkaitan dengan kegiatan kerja guna terciptanya tempat kerja yang aman.',
    topicLabel: 'SMK3 & Audit',
  },
  {
    slug: 'standar-kualifikasi-kompetensi-personel-k3',
    term: 'Ahli K3',
    fullForm: 'Ahli Keselamatan dan Kesehatan Kerja (Personel Berlisensi)',
    description: 'Tenaga teknis berkeahlian khusus dari luar atau dalam perusahaan yang ditunjuk oleh Menteri Ketenagakerjaan untuk mengawasi ditaatinya peraturan perundangan K3.',
    topicLabel: 'SMK3 & Audit',
  },
  {
    slug: 'hampir-celaka-nearmiss-incident',
    term: 'Near Miss',
    fullForm: 'Kejadian Hampir Celaka (Incident)',
    description: 'Kejadian tidak terduga yang tidak mengakibatkan cedera pada manusia atau kerusakan properti, namun berpotensi fatal bila kondisi sedikit berbeda.',
    topicLabel: 'Dasar K3',
  },
  {
    slug: 'pertemuan-keselamatan-harian-toolbox-meeting',
    term: 'Toolbox Meeting',
    fullForm: 'Toolbox Talk / Pertemuan Keselamatan Harian',
    description: 'Briefing keselamatan kerja singkat 5 hingga 10 menit di awal shift untuk mengingatkan pekerja mengenai risiko spesifik pekerjaan hari itu.',
    topicLabel: 'SMK3 & Audit',
  },
  {
    slug: 'izin-kerja-aman-terintegrasi-ptw-system',
    term: 'Permit to Work (PTW)',
    fullForm: 'Surat Izin Kerja Aman Terpadu',
    description: 'Dokumen otorisasi tertulis resmi yang memuat syarat verifikasi keselamatan sebelum mengizinkan pekerjaan non-rutin atau berisiko tinggi dimulai.',
    topicLabel: 'SMK3 & Audit',
  },
  {
    slug: 'prosedur-lockout-tagout-loto-6-langkah',
    term: 'LOTO',
    fullForm: 'Lockout / Tagout (Penguncian & Pelabelan Sumber Energi)',
    description: 'Prosedur keselamatan untuk mengisolasi, mengunci, dan memasang tanda peringatan pada sumber energi berbahaya sebelum pekerjaan perbaikan mesin dimulai.',
    topicLabel: 'Listrik & Mesin',
  },
  {
    slug: 'kategori-apd-arc-flash-cal-cm2-rating',
    term: 'APD',
    fullForm: 'Alat Pelindung Diri (Personal Protective Equipment)',
    description: 'Kelengkapan wajib terakhir yang digunakan oleh tenaga kerja untuk mengisolasi sebagian atau seluruh tubuh dari potensi paparan bahaya di tempat kerja.',
    topicLabel: 'APD & Perlengkapan',
  },
  {
    slug: 'hazard-and-operability-study-hazop',
    term: 'HAZOP',
    fullForm: 'Hazard and Operability Study',
    description: 'Metode analisis bahaya kualitatif terstruktur menggunakan kata pandu (guidewords) untuk mengevaluasi penyimpangan proses operasional dan rekayasa industri.',
    topicLabel: 'Penilaian Risiko',
  },
  {
    slug: 'analisis-akar-masalah-root-cause-analysis',
    term: 'Root Cause Analysis',
    fullForm: 'Root Cause Analysis (RCA / Analisis Akar Masalah)',
    description: 'Pendekatan investigasi sistematis untuk mengungkap faktor penyebab paling mendasar di balik suatu kecelakaan kerja guna mencegah pengulangan di masa depan.',
    topicLabel: 'Penilaian Risiko',
  },
];

export interface TermMeta {
  topic: TopicCategory;
  firstLetter: string;
  abbr: string;
  englishEquivalent: string;
  indonesianTerm: string;
  shortDefinition: string;
  isAbbr: boolean;
  isIndonesian: boolean;
  isEnglish: boolean;
}

export function getTermMeta(record: ContentRecord): TermMeta {
  const corpus = `${record.slug} ${record.title} ${(record.highlights || []).join(' ')} ${record.parentTopic || ''} ${record.primaryKeyword || ''}`.toLowerCase();

  // 11 Topic Categories Classification
  let topicId: TopicCategoryId = 'dasar-kecelakaan';

  if (
    corpus.includes('masker') ||
    corpus.includes('respirator') ||
    corpus.includes('fit-testing') ||
    corpus.includes('apd') ||
    corpus.includes('pelindung diri') ||
    corpus.includes('eyewash') ||
    corpus.includes('emergency shower')
  ) {
    topicId = 'apd-alat-keselamatan';
  } else if (
    corpus.includes('ketinggian') ||
    corpus.includes('harness') ||
    corpus.includes('scaffolding') ||
    corpus.includes('fall arrest') ||
    corpus.includes('fall-arrest') ||
    corpus.includes('ruang terbatas') ||
    corpus.includes('confined space') ||
    corpus.includes('ruang-tertutup')
  ) {
    topicId = 'ketinggian-ruang-terbatas';
  } else if (
    corpus.includes('kebakaran') ||
    corpus.includes('apar') ||
    corpus.includes('hydrant') ||
    corpus.includes('sprinkler') ||
    corpus.includes('damkar') ||
    corpus.includes('alarm') ||
    corpus.includes('flame') ||
    corpus.includes('smoke') ||
    corpus.includes('tanggap darurat') ||
    corpus.includes('evakuasi') ||
    corpus.includes('assembly point') ||
    corpus.includes('tetrahedron') ||
    corpus.includes('fire')
  ) {
    topicId = 'kebakaran-tanggap-darurat';
  } else if (
    corpus.includes('ergonomi') ||
    corpus.includes('reba') ||
    corpus.includes('rula') ||
    corpus.includes('owas') ||
    corpus.includes('niosh') ||
    corpus.includes('antropometri') ||
    corpus.includes('postur') ||
    (corpus.includes('msds') && !corpus.includes('lembar data')) ||
    corpus.includes('musculoskeletal') ||
    corpus.includes('beban kerja') ||
    corpus.includes('kelelahan') ||
    corpus.includes('stres') ||
    corpus.includes('carpal tunnel') ||
    corpus.includes('kursi') ||
    corpus.includes('meja') ||
    corpus.includes('human error') ||
    corpus.includes('heart') ||
    corpus.includes('angkat-manual')
  ) {
    topicId = 'ergonomi-faktor-manusia';
  } else if (
    corpus.includes('angkat') ||
    corpus.includes('angkut') ||
    corpus.includes('crane') ||
    corpus.includes('sling') ||
    corpus.includes('swl') ||
    corpus.includes('hook') ||
    corpus.includes('outrigger') ||
    corpus.includes('boiler') ||
    corpus.includes('uap') ||
    corpus.includes('bejana') ||
    corpus.includes('kompresor') ||
    corpus.includes('conveyor') ||
    corpus.includes('konveyor') ||
    corpus.includes('hoist') ||
    corpus.includes('lift')
  ) {
    topicId = 'pesawat-uap-bejana';
  } else if (
    corpus.includes('listrik') ||
    corpus.includes('petir') ||
    corpus.includes('grounding') ||
    corpus.includes('pembumian') ||
    corpus.includes('loto') ||
    corpus.includes('lockout') ||
    corpus.includes('arc flash') ||
    corpus.includes('rcd') ||
    corpus.includes('acb') ||
    corpus.includes('mccb') ||
    corpus.includes('mesin') ||
    corpus.includes('interlock') ||
    corpus.includes('gerinda') ||
    corpus.includes('bubut') ||
    corpus.includes('guarding') ||
    corpus.includes('laser guard') ||
    corpus.includes('ip rating') ||
    corpus.includes('emergency stop')
  ) {
    topicId = 'listrik-mesin';
  } else if (
    corpus.includes('kimia') ||
    corpus.includes('b3') ||
    (corpus.includes('msds') && corpus.includes('lembar data')) ||
    corpus.includes('lembar data keselamatan') ||
    corpus.includes('ghs') ||
    corpus.includes('psm') ||
    corpus.includes('reaktivitas') ||
    corpus.includes('reaktor') ||
    corpus.includes('lel') ||
    corpus.includes('uel') ||
    corpus.includes('bleve') ||
    corpus.includes('vce') ||
    corpus.includes('flash point') ||
    corpus.includes('titik nyala') ||
    corpus.includes('titik bakar') ||
    corpus.includes('atex') ||
    corpus.includes('explosion') ||
    corpus.includes('ledakan') ||
    corpus.includes('flare') ||
    corpus.includes('tangki timbun') ||
    corpus.includes('bund wall') ||
    corpus.includes('pipa') ||
    corpus.includes('katup')
  ) {
    topicId = 'kimia-proses';
  } else if (
    corpus.includes('higiene') ||
    corpus.includes('nab') ||
    corpus.includes('stel') ||
    corpus.includes('twa') ||
    corpus.includes('ceiling') ||
    corpus.includes('toksikologi') ||
    corpus.includes('karsinogenik') ||
    corpus.includes('mutagenik') ||
    corpus.includes('asbes') ||
    corpus.includes('silika') ||
    corpus.includes('timbal') ||
    corpus.includes('merkuri') ||
    corpus.includes('gas') ||
    corpus.includes('udara') ||
    corpus.includes('ventilasi') ||
    corpus.includes('lev') ||
    corpus.includes('iaq') ||
    corpus.includes('bioaerosol') ||
    corpus.includes('sanitasi') ||
    corpus.includes('kantin') ||
    corpus.includes('air minum') ||
    corpus.includes('bakteri') ||
    corpus.includes('kebisingan') ||
    corpus.includes('getaran') ||
    corpus.includes('pencahayaan') ||
    corpus.includes('iklim kerja')
  ) {
    topicId = 'higiene-kesehatan';
  } else if (
    corpus.includes('smk3') ||
    corpus.includes('audit') ||
    corpus.includes('iso 45001') ||
    corpus.includes('csms') ||
    corpus.includes('budaya') ||
    corpus.includes('leadership') ||
    corpus.includes('tna') ||
    corpus.includes('kpi') ||
    corpus.includes('management of change') ||
    corpus.includes('moc') ||
    corpus.includes('pssr') ||
    corpus.includes('komisaris') ||
    corpus.includes('due diligence') ||
    corpus.includes('ptw') ||
    corpus.includes('izin kerja') ||
    corpus.includes('toolbox') ||
    corpus.includes('dokumentasi') ||
    corpus.includes('norma') ||
    corpus.includes('personel') ||
    corpus.includes('pengurus')
  ) {
    topicId = 'smk3-manajemen';
  } else if (
    corpus.includes('hiradc') ||
    corpus.includes('jsa') ||
    corpus.includes('hazop') ||
    corpus.includes('fmea') ||
    corpus.includes('lopa') ||
    corpus.includes('fta') ||
    corpus.includes('eta') ||
    corpus.includes('bowtie') ||
    corpus.includes('5-why') ||
    corpus.includes('taproot') ||
    corpus.includes('investigasi') ||
    corpus.includes('akar masalah') ||
    corpus.includes('root cause') ||
    corpus.includes('matriks risiko') ||
    corpus.includes('pha') ||
    corpus.includes('what-if') ||
    corpus.includes('qra') ||
    corpus.includes('capa')
  ) {
    topicId = 'penilaian-risiko';
  } else {
    topicId = 'dasar-kecelakaan';
  }

  const topic = topicCategories.find((t) => t.id === topicId) || topicCategories[0];

  // Alphabet Letter
  const cleanTitle = record.title.trim();
  let firstLetter = cleanTitle.charAt(0).toUpperCase();
  if (!/[A-Z]/.test(firstLetter)) {
    firstLetter = '#';
  }

  // Extract Abbreviation & English Equivalent
  let abbr = '';
  let englishEquivalent = '';
  let indonesianTerm = cleanTitle;

  // Check parentheses e.g. "Analisis Akar Masalah (Root Cause Analysis)" or "Tindakan Tidak Aman (Unsafe Act)" or "Job Safety Analysis (JSA)"
  const parenMatch = cleanTitle.match(/\(([^)]+)\)/);
  if (parenMatch) {
    const inside = parenMatch[1].trim();
    // If inside is short and uppercase, it's an acronym like (HIRADC), (JSA), (LOTO), (PTW)
    if (/^[A-Z0-9\s/-]{2,10}$/.test(inside)) {
      abbr = inside;
      indonesianTerm = cleanTitle.replace(/\s*\([^)]+\)/, '').trim();
    } else {
      // It's likely an English term or full description like (Root Cause Analysis)
      englishEquivalent = inside;
      indonesianTerm = cleanTitle.replace(/\s*\([^)]+\)/, '').trim();
    }
  }

  // Also check if title itself starts with an acronym, e.g. "HIRADC", "JSA", "HAZOP"
  const wordTokens = cleanTitle.split(/[\s,()/-]+/);
  for (const token of wordTokens) {
    if (/^[A-Z0-9]{2,8}$/.test(token) && !abbr && token !== 'K3' && token !== 'II' && token !== 'III' && token !== 'IV') {
      abbr = token;
      break;
    }
  }

  // Detect language indicators
  const isAbbr = Boolean(abbr) || /[A-Z]{2,}/.test(cleanTitle);
  const isEnglish = Boolean(englishEquivalent) || /[A-Za-z]/.test(cleanTitle) && (
    corpus.includes('safety') ||
    corpus.includes('hazard') ||
    corpus.includes('incident') ||
    corpus.includes('analysis') ||
    corpus.includes('management') ||
    corpus.includes('control') ||
    corpus.includes('assessment') ||
    corpus.includes('inspection')
  );
  const isIndonesian = true; // All terms have Indonesian definitions and context

  // Short definition preview
  let shortDefinition = '';
  if (record.answer) {
    const firstSentence = record.answer.split(/(?<=[.!?])\s+/)[0] || record.answer;
    shortDefinition = firstSentence.length > 170 ? `${firstSentence.substring(0, 167)}...` : firstSentence;
  } else if (record.description) {
    const firstSentence = record.description.split(/(?<=[.!?])\s+/)[0] || record.description;
    shortDefinition = firstSentence.length > 170 ? `${firstSentence.substring(0, 167)}...` : firstSentence;
  } else {
    shortDefinition = `Penjelasan istilah teknis dan panduan operasional ${cleanTitle} dalam praktik keselamatan dan kesehatan kerja.`;
  }

  return {
    topic,
    firstLetter,
    abbr,
    englishEquivalent,
    indonesianTerm,
    shortDefinition,
    isAbbr,
    isIndonesian,
    isEnglish,
  };
}

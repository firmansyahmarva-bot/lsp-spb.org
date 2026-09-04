import { type ContentRecord } from './content-types';

export type LegalLevelId =
  | 'uu'
  | 'pp'
  | 'perpres'
  | 'permenaker'
  | 'kepmenaker'
  | 'sektoral'
  | 'standar'
  | 'historis';

export interface LegalLevelCategory {
  id: LegalLevelId;
  name: string;
  shortLabel: string;
  description: string;
}

export const legalLevelCategories: LegalLevelCategory[] = [
  {
    id: 'uu',
    name: 'Undang-Undang (UU)',
    shortLabel: 'Undang-Undang',
    description: 'Landasan hukum tertinggi peraturan perundangan K3 nasional yang menetapkan hak, kewajiban pokok, dan sanksi hukum.',
  },
  {
    id: 'pp',
    name: 'Peraturan Pemerintah (PP)',
    shortLabel: 'Peraturan Pemerintah',
    description: 'Aturan pelaksanaan umum tingkat pemerintah yang mengatur implementasi SMK3, perizinan berusaha, dan keselamatan operasional.',
  },
  {
    id: 'perpres',
    name: 'Peraturan Presiden (Perpres)',
    shortLabel: 'Peraturan Presiden',
    description: 'Ketentuan presiden mengenai tata kelola program jaminan kecelakaan kerja, kelembagaan pengawasan, dan kebijakan nasional.',
  },
  {
    id: 'permenaker',
    name: 'Peraturan Menteri Ketenagakerjaan (Permenaker)',
    shortLabel: 'Permenaker',
    description: 'Regulasi teknis operasional wajib dari Kemnaker RI yang mengatur syarat spesifik instalasi, pesawat, alat, dan penunjukan personel.',
  },
  {
    id: 'kepmenaker',
    name: 'Kepmenaker & Surat Edaran (SE)',
    shortLabel: 'Kepmenaker & SE',
    description: 'Keputusan menteri dan surat edaran dirjen yang menetapkan petunjuk teknis pelaksanaan, pedoman riksa uji, dan SKKNI profesi K3.',
  },
  {
    id: 'sektoral',
    name: 'Regulasi Sektoral (ESDM, PUPR, Kemenkes, dll.)',
    shortLabel: 'Regulasi Sektoral',
    description: 'Peraturan keselamatan spesifik dari kementerian teknis untuk sektor pertambangan (SMKP), konstruksi (SMKK), kesehatan (K3RS), dan transportasi.',
  },
  {
    id: 'standar',
    name: 'Standar Teknis & Internasional (SNI, ISO, NFPA, dll.)',
    shortLabel: 'Standar Teknis & Global',
    description: 'Standar konsensus teknis nasional (SNI) dan internasional (ISO, NFPA, OSHA, ASME) yang menjadi rujukan spesifikasi teknik dan audit.',
  },
  {
    id: 'historis',
    name: 'Referensi Historis / Transisi',
    shortLabel: 'Historis / Transisi',
    description: 'Peraturan terdahulu yang telah digantikan atau diperbarui, berguna sebagai dokumen rujukan sejarah hukum dan transisi pemenuhan klausul.',
  },
];

export type K3SubjectId =
  | 'smk3'
  | 'p2k3'
  | 'lingkungan'
  | 'listrik'
  | 'ketinggian'
  | 'pesawat-angkat'
  | 'uap-bejana'
  | 'kebakaran'
  | 'p3k-kesehatan'
  | 'konstruksi'
  | 'tambang-migas'
  | 'kimia-b3'
  | 'apd'
  | 'ruang-terbatas';

export interface K3SubjectCategory {
  id: K3SubjectId;
  name: string;
  description: string;
}

export const k3SubjectCategories: K3SubjectCategory[] = [
  {
    id: 'smk3',
    name: 'SMK3 & Audit Sistem',
    description: 'PP 50/2012, kriteria audit 64/122/166, ISO 45001, dan sertifikasi sistem manajemen K3.',
  },
  {
    id: 'p2k3',
    name: 'P2K3 & Ahli K3',
    description: 'Kelembagaan panitia pembina K3, penunjukan Ahli K3 Umum/Spesialis, dan kewenangan pengawas norma.',
  },
  {
    id: 'lingkungan',
    name: 'Lingkungan Kerja & Higiene Industri',
    description: 'Permenaker 5/2018, pengukuran faktor fisika, kimia, biologi, ergonomi, psikologi, dan sanitasi.',
  },
  {
    id: 'listrik',
    name: 'K3 Listrik & Penyalur Petir',
    description: 'Permenaker 12/2015, Permenaker 33/2015, PUIL 2020 (SNI 0225), teknisi listrik, dan proteksi petir.',
  },
  {
    id: 'ketinggian',
    name: 'Bekerja di Ketinggian',
    description: 'Permenaker 9/2016, keselamatan bekerja pada ketinggian, bangunan tinggi (TKBT), dan akses tali (TKPK).',
  },
  {
    id: 'pesawat-angkat',
    name: 'Pesawat Angkat & Angkut',
    description: 'Permenaker 8/2020, pengoperasian forklift, crane, hoist, excavator, lift, eskalator, dan riksa uji.',
  },
  {
    id: 'uap-bejana',
    name: 'Pesawat Uap & Bejana Tekan',
    description: 'Permenaker 37/2016, boiler batubara, tangki timbun, bejana tekan, perpipaan industri, dan operator uap.',
  },
  {
    id: 'kebakaran',
    name: 'K3 Penanggulangan Kebakaran',
    description: 'Kepmenaker 186/1999, Permenaker 04/1980 APAR, instalasi hydrant, sprinkler, dan regu damkar kelas D-A.',
  },
  {
    id: 'p3k-kesehatan',
    name: 'P3K & Kesehatan Kerja',
    description: 'Permenaker 15/2008 P3K, dokter/paramedis hiperkes, pemeriksaan berkala (MCU), surveilans PAK, dan K3RS.',
  },
  {
    id: 'konstruksi',
    name: 'Keselamatan Konstruksi (SMKK)',
    description: 'Permen PUPR 10/2021, UU Jasa Konstruksi, Rencana Keselamatan Konstruksi (RKK), dan Ahli K3 Konstruksi.',
  },
  {
    id: 'tambang-migas',
    name: 'Pertambangan, Minyak & Gas (SMKP)',
    description: 'Kepmen ESDM 1827/2018, kaidah teknik pertambangan yang baik, pengawas POP/POM, dan kilang migas.',
  },
  {
    id: 'kimia-b3',
    name: 'Bahan Kimia Berbahaya (B3)',
    description: 'Kepmenaker 187/1999, pengelolaan limbah B3, lembar data keselamatan (LDK/MSDS), dan petugas K3 kimia.',
  },
  {
    id: 'apd',
    name: 'Alat Pelindung Diri (APD)',
    description: 'Permenaker 08/2010, standar SNI/ANSI untuk helm, sepatu, kacamata, pelindung telinga, dan harness.',
  },
  {
    id: 'ruang-terbatas',
    name: 'Ruang Terbatas (Confined Space)',
    description: 'SE Dirjen Binwasnaker No. 113/2012, OSHA 1910.146, izin masuk tangki/manhole, dan petugas ruang terbatas.',
  },
];

export interface ImportantRegulation {
  slug: string;
  regNumber: string;
  year: string;
  shortSubject: string;
  whenNeeded: string;
}

export const topImportantRegulations: ImportantRegulation[] = [
  {
    slug: 'uu-1-1970-keselamatan-kerja',
    regNumber: 'UU No. 1 Tahun 1970',
    year: '1970',
    shortSubject: 'Keselamatan Kerja',
    whenNeeded: 'Wajib dipahami oleh pemilik usaha, manajemen, dan praktisi K3 sebagai payung hukum utama seluruh norma keselamatan kerja nasional.',
  },
  {
    slug: 'pp-50-2012-penerapan-smk3',
    regNumber: 'PP No. 50 Tahun 2012',
    year: '2012',
    shortSubject: 'Penerapan Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3)',
    whenNeeded: 'Wajib diterapkan perusahaan dengan minimal 100 tenaga kerja atau potensi bahaya tinggi untuk membangun sistem keselamatan dan audit sertifikasi.',
  },
  {
    slug: 'permenaker-04-1987-p2k3-ahli-k3',
    regNumber: 'Permenaker No. 04/MEN/1987',
    year: '1987',
    shortSubject: 'Panitia Pembina Keselamatan dan Kesehatan Kerja (P2K3)',
    whenNeeded: 'Rujukan wajib saat perusahaan membentuk susunan organisasi P2K3 serta menunjuk sekretaris P2K3 (Ahli K3 Umum).',
  },
  {
    slug: 'permenaker-02-1992-penunjukan-ahli-k3',
    regNumber: 'Permenaker No. Per.02/MEN/1992',
    year: '1992',
    shortSubject: 'Tata Cara Penunjukan, Kewajiban dan Wewenang Ahli K3',
    whenNeeded: 'Dasar hukum sertifikasi pembinaan, pengajuan SKP (Surat Keputusan Penunjukan), dan kartu lisensi kewenangan Ahli K3 di perusahaan.',
  },
  {
    slug: 'permenaker-05-2018-k3-lingkungan-kerja',
    regNumber: 'Permenaker No. 5 Tahun 2018',
    year: '2018',
    shortSubject: 'Keselamatan dan Kesehatan Lingkungan Kerja',
    whenNeeded: 'Diperlukan saat melakukan pengukuran dan evaluasi Nilai Ambang Batas (NAB) faktor fisika, kimia, biologi, ergonomi, dan psikologi kerja.',
  },
  {
    slug: 'permenaker-08-2020-pesawat-angkat-angkut',
    regNumber: 'Permenaker No. 8 Tahun 2020',
    year: '2020',
    shortSubject: 'K3 Pesawat Angkat dan Pesawat Angkut',
    whenNeeded: 'Rujukan teknis pengoperasian, pemeriksaan berkala, dan lisensi K3 operator forklift, crane, hoist, excavator, dan alat angkut industri.',
  },
  {
    slug: 'permenaker-09-2016-k3-ketinggian',
    regNumber: 'Permenaker No. 9 Tahun 2016',
    year: '2016',
    shortSubject: 'K3 dalam Pekerjaan pada Ketinggian',
    whenNeeded: 'Wajib dipatuhi pada pekerjaan dengan perbedaan ketinggian minimal 1,8 meter, penggunaan full body harness, dan sertifikasi TKBT/TKPK.',
  },
  {
    slug: 'permenaker-12-2015-k3-listrik',
    regNumber: 'Permenaker No. 12 Tahun 2015',
    year: '2015',
    shortSubject: 'Keselamatan dan Kesehatan Kerja Listrik di Tempat Kerja',
    whenNeeded: 'Landasan wajib perencanaan instalasi, inspeksi berkala, dan penunjukan Teknisi atau Ahli K3 Listrik fasilitas perusahaan.',
  },
  {
    slug: 'permenaker-15-2008-p3k-tempat-kerja',
    regNumber: 'Permenaker No. 15 Tahun 2008',
    year: '2008',
    shortSubject: 'Pertolongan Pertama pada Kecelakaan (P3K) di Tempat Kerja',
    whenNeeded: 'Menentukan rasio jumlah petugas P3K berlisensi, standar kelengkapan isi kotak P3K (Bentuk A, B, C), dan fasilitas ruang P3K.',
  },
  {
    slug: 'kepmenaker-186-1999-unit-penanggulangan-kebakaran',
    regNumber: 'Kepmenaker No. Kep.186/MEN/1999',
    year: '1999',
    shortSubject: 'Unit Penanggulangan Kebakaran di Tempat Kerja',
    whenNeeded: 'Wajib digunakan untuk menentukan klasifikasi bahaya kebakaran gedung serta pembentukan tim pemadam Kelas D, C, B, dan Ahli K3 Kebakaran Kelas A.',
  },
];

export interface RegulationMeta {
  legalLevel: LegalLevelCategory;
  subject: K3SubjectCategory;
  regNumber: string;
  year: string;
  publisher: string;
  scope: string;
  statusText: string;
  statusBadge: 'mandatory' | 'standard' | 'sectoral' | 'historical';
  shortRelevance: string;
}

// Helper to extract clean metadata from ContentRecord
export function getRegulationMeta(record: ContentRecord): RegulationMeta {
  const highlights = record.highlights || [];
  let publisher = 'Pemerintah RI / Kemnaker RI';
  let year = '2020';
  let scope = '';
  let statusLaw = '';

  for (const h of highlights) {
    if (h.startsWith('Instansi Penerbit:')) {
      publisher = h.replace('Instansi Penerbit:', '').trim();
    } else if (h.startsWith('Tahun Pengundangan / Rilis:')) {
      year = h.replace('Tahun Pengundangan / Rilis:', '').trim();
    } else if (h.startsWith('Ruang Lingkup:')) {
      scope = h.replace('Ruang Lingkup:', '').trim();
    } else if (h.startsWith('Status Hukum:')) {
      statusLaw = h.replace('Status Hukum:', '').trim();
    }
  }

  // Detect Historical / Replaced / Transisi
  const isHistorical =
    record.slug.includes('historis') ||
    record.slug.includes('sejarah') ||
    statusLaw.includes('Historis') ||
    statusLaw.includes('Historical') ||
    record.slug === 'uu-1-1870-veiligheidsreglement-sejarah-k3' ||
    record.slug === 'permenaker-05-1996-audit-smk3-historis' ||
    record.slug === 'kepmenaker-51-1999-nab-faktor-fisika-historis' ||
    record.slug === 'bsi-ohsas-18001-sejarah-sistem-manajemen-k3-global' ||
    record.slug === 'permenaker-09-2008-operator-pesawat-angkat-angkut' ||
    record.slug === 'kepmenaker-75-2002-pemberlakuan-puil-2000-k3';

  // Determine Legal Level
  let levelId: LegalLevelId = 'uu';
  if (isHistorical) {
    levelId = 'historis';
  } else if (record.slug.startsWith('uu-')) {
    levelId = 'uu';
  } else if (record.slug.startsWith('pp-')) {
    levelId = 'pp';
  } else if (record.slug.startsWith('perpres-')) {
    levelId = 'perpres';
  } else if (record.slug.startsWith('permenaker-')) {
    levelId = 'permenaker';
  } else if (record.slug.startsWith('kepmenaker-') || record.slug.startsWith('se-')) {
    levelId = 'kepmenaker';
  } else if (
    record.slug.startsWith('permen-esdm-') ||
    record.slug.startsWith('kepmen-esdm-') ||
    record.slug.startsWith('permen-pupr-') ||
    record.slug.startsWith('permenkes-') ||
    record.slug.startsWith('permenhub-') ||
    record.slug.startsWith('permen-lhk-') ||
    record.slug.startsWith('perka-bapeten-')
  ) {
    levelId = 'sektoral';
  } else {
    levelId = 'standar';
  }

  const legalLevel = legalLevelCategories.find((c) => c.id === levelId) || legalLevelCategories[0];

  // Determine K3 Subject
  const searchCorpus = `${record.slug} ${record.title} ${scope} ${record.primaryKeyword || ''}`.toLowerCase();

  let subjectId: K3SubjectId = 'smk3';
  if (searchCorpus.includes('ruang-terbatas') || searchCorpus.includes('confined space') || searchCorpus.includes('ruang terbatas')) {
    subjectId = 'ruang-terbatas';
  } else if (searchCorpus.includes('ketinggian') || searchCorpus.includes('harness') || searchCorpus.includes('scaffolding') || searchCorpus.includes('en-361')) {
    subjectId = 'ketinggian';
  } else if (searchCorpus.includes('listrik') || searchCorpus.includes('petir') || searchCorpus.includes('puil') || searchCorpus.includes('arc-flash') || searchCorpus.includes('nfpa-70e')) {
    subjectId = 'listrik';
  } else if (searchCorpus.includes('pesawat angkat') || searchCorpus.includes('pesawat-angkat') || searchCorpus.includes('forklift') || searchCorpus.includes('crane') || searchCorpus.includes('lift') || searchCorpus.includes('eskalator') || searchCorpus.includes('pesawat-tenaga-produksi')) {
    subjectId = 'pesawat-angkat';
  } else if (searchCorpus.includes('uap') || searchCorpus.includes('boiler') || searchCorpus.includes('bejana tekan') || searchCorpus.includes('tangki timbun') || searchCorpus.includes('asme')) {
    subjectId = 'uap-bejana';
  } else if (searchCorpus.includes('kebakaran') || searchCorpus.includes('damkar') || searchCorpus.includes('apar') || searchCorpus.includes('sprinkler') || searchCorpus.includes('hydrant') || searchCorpus.includes('nfpa-10') || searchCorpus.includes('nfpa-13')) {
    subjectId = 'kebakaran';
  } else if (searchCorpus.includes('p3k') || searchCorpus.includes('kesehatan') || searchCorpus.includes('hiperkes') || searchCorpus.includes('mcu') || searchCorpus.includes('dokter') || searchCorpus.includes('paramedis') || searchCorpus.includes('penyakit akibat kerja') || searchCorpus.includes('pak') || searchCorpus.includes('k3rs') || searchCorpus.includes('narkoba')) {
    subjectId = 'p3k-kesehatan';
  } else if (searchCorpus.includes('konstruksi') || searchCorpus.includes('smkk') || searchCorpus.includes('jasa konstruksi') || searchCorpus.includes('pupr') || searchCorpus.includes('bangunan gedung') || searchCorpus.includes('pembongkaran')) {
    subjectId = 'konstruksi';
  } else if (searchCorpus.includes('tambang') || searchCorpus.includes('minerba') || searchCorpus.includes('smkp') || searchCorpus.includes('migas') || searchCorpus.includes('minyak') || searchCorpus.includes('gas bumi') || searchCorpus.includes('kilang') || searchCorpus.includes('api-rp')) {
    subjectId = 'tambang-migas';
  } else if (searchCorpus.includes('kimia') || searchCorpus.includes('b3') || searchCorpus.includes('limbah') || searchCorpus.includes('asbes') || searchCorpus.includes('pestisida') || searchCorpus.includes('ghs') || searchCorpus.includes('amonia') || searchCorpus.includes('radiasi') || searchCorpus.includes('bapeten')) {
    subjectId = 'kimia-b3';
  } else if (searchCorpus.includes('alat pelindung diri') || searchCorpus.includes('apd') || searchCorpus.includes('helm') || searchCorpus.includes('sepatu') || searchCorpus.includes('rompi') || searchCorpus.includes('kacamata') || searchCorpus.includes('pelindung muka') || searchCorpus.includes('eyewash') || searchCorpus.includes('ansi-isea') || searchCorpus.includes('en-397')) {
    subjectId = 'apd';
  } else if (searchCorpus.includes('p2k3') || searchCorpus.includes('ahli k3') || searchCorpus.includes('ahli-k3') || searchCorpus.includes('penunjukan ahli') || searchCorpus.includes('safety officer') || searchCorpus.includes('pjk3') || searchCorpus.includes('hari k3')) {
    subjectId = 'p2k3';
  } else if (searchCorpus.includes('lingkungan') || searchCorpus.includes('higiene') || searchCorpus.includes('ergonomi') || searchCorpus.includes('kebisingan') || searchCorpus.includes('penerangan') || searchCorpus.includes('nab') || searchCorpus.includes('iklim kerja') || searchCorpus.includes('acgih')) {
    subjectId = 'lingkungan';
  } else {
    subjectId = 'smk3';
  }

  const subject = k3SubjectCategories.find((s) => s.id === subjectId) || k3SubjectCategories[0];

  // Status Badge and Text
  let statusBadge: 'mandatory' | 'standard' | 'sectoral' | 'historical' = 'mandatory';
  let statusText = 'Wajib Berlaku (Statutory)';

  if (levelId === 'historis') {
    statusBadge = 'historical';
    statusText = 'Referensi Historis / Digantikan';
  } else if (levelId === 'standar') {
    statusBadge = 'standard';
    statusText = 'Standar Teknis / Konsensus';
  } else if (levelId === 'sektoral') {
    statusBadge = 'sectoral';
    statusText = 'Regulasi Sektoral Wajib';
  }

  // Extract Short Regulation Number (e.g. "UU No. 1 Tahun 1970")
  let regNumber = record.title.split(' tentang ')[0] || record.title.split(' - ')[0] || record.title;
  if (regNumber.length > 50) {
    regNumber = regNumber.substring(0, 50);
  }

  // Check top 10 custom whenNeeded statement
  const topMatch = topImportantRegulations.find((t) => t.slug === record.slug);
  let shortRelevance = '';
  if (topMatch) {
    shortRelevance = topMatch.whenNeeded;
  } else if (scope) {
    shortRelevance = `Rujukan kepatuhan untuk ${scope.toLowerCase()}.`;
  } else {
    shortRelevance = `Pedoman teknis dan landasan regulasi K3 dalam lingkup ${subject.name.toLowerCase()}.`;
  }

  return {
    legalLevel,
    subject,
    regNumber,
    year,
    publisher,
    scope,
    statusText,
    statusBadge,
    shortRelevance,
  };
}

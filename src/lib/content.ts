import { buildComparison, buildCompetency, buildGuide, buildIndustry, buildLocation, buildProfession, buildProgram, buildRegulation, buildTerm } from './content-builders';
import { comparisonSeeds } from './content-seeds-comparisons';
import { programSeeds, officialSources } from './content-seeds-programs';
import { regulationSeeds } from './content-seeds-regulations';
import { competencySeeds, guideSeeds, industrySeeds, locationSeeds, professionSeeds, titleize } from './content-seeds-scale';
import { termSeeds } from './content-seeds-taxonomy';
import { type ContentRecord, type Section } from './content-types';
import { priorityRecords } from './priority-content';

export { sectionLabels, sections, type ContentRecord, type Section } from './content-types';

const toolSlugs = [
  'matriks-risiko', 'generator-hiradc', 'generator-jsa', 'checklist-inspeksi-k3', 'checklist-apar', 'checklist-forklift', 'checklist-scaffolding', 'checklist-ruang-terbatas', 'checklist-bekerja-di-ketinggian', 'checklist-lockout-tagout', 'checklist-safety-induction', 'checklist-toolbox-meeting', 'kalkulator-trir', 'kalkulator-ltir', 'kalkulator-safe-man-hours', 'pemilih-apar', 'pemilih-apd', 'penilaian-kesiapan-smk3',
];

const toolRecords: ContentRecord[] = toolSlugs.map((slug) => {
  const functional = slug === 'matriks-risiko';
  const title = slug === 'matriks-risiko' ? 'Matriks Risiko K3 Interaktif' : titleize(slug);
  return {
    section: 'alat',
    slug,
    title,
    description: functional
      ? 'Alat penyaringan risiko awal berdasarkan kemungkinan dan keparahan dengan panduan interpretasi.'
      : `${title} sedang disiapkan dan tidak diterbitkan untuk mesin pencari sebelum fungsi serta petunjuknya lengkap.`,
    answer: functional
      ? 'Matriks risiko membantu menyaring prioritas awal dengan mengalikan skor kemungkinan dan keparahan. Hasil harus dibaca bersama skenario, paparan, kontrol, serta kriteria organisasi.'
      : 'Halaman alat ini tersedia sebagai rute pengembangan, tetapi sengaja noindex sampai interaksi, contoh, validasi, dan batas penggunaannya selesai.',
    highlights: ['Tujuan alat', 'Data masukan', 'Interpretasi', 'Batas penggunaan'],
    blocks: functional ? [
      { heading: 'Fungsi matriks risiko', paragraphs: ['Matriks risiko membantu tim membuat penilaian awal yang konsisten. Ia tidak menggantikan uraian skenario, data pajanan, persyaratan hukum, atau penilaian tenaga kompeten.'] },
      { heading: 'Cara menilai', paragraphs: ['Jelaskan aktivitas, bahaya, kejadian, dan dampak. Pilih kemungkinan serta keparahan memakai kriteria organisasi, hitung tingkat awal, tentukan kontrol, lalu nilai risiko sisa.'] },
      { heading: 'Batas hasil', paragraphs: ['Skor yang sama dapat berasal dari skenario berbeda. Dokumentasikan asumsi, kontrol yang ada, ketidakpastian, dan kondisi yang mengharuskan penghentian atau eskalasi.'] },
    ] : [],
    faqs: functional ? [
      { question: 'Apakah skor otomatis menentukan pekerjaan boleh dilakukan?', answer: 'Tidak. Keputusan mempertimbangkan kewajiban, toleransi organisasi, kontrol kritis, kompetensi, dan kondisi aktual.' },
      { question: 'Kapan penilaian diulang?', answer: 'Setelah kontrol diterapkan, ketika pekerjaan berubah, setelah insiden, atau saat ada bukti kontrol tidak efektif.' },
    ] : [],
    related: ['kompetensi/penilaian-risiko', 'panduan/cara-membuat-hiradc', 'kamus-k3/risk-matrix', 'perbandingan/bowtie-vs-matriks-risiko'],
    sources: [officialSources.uu1, officialSources.pp50],
    sourceUrl: officialSources.uu1.url,
    sourceLabel: officialSources.uu1.label,
    verifiedAt: '2026-09-01',
    indexable: functional,
    intent: `alat ${title}`,
    contentKind: 'tool',
    primaryCtaText: 'Konsultasi Penilaian Risiko K3',
    primaryCtaIntent: 'perusahaan',
  };
});

// Quality Gate: Only high-quality detailed records are indexable
const builtPrograms = programSeeds.map((seed, index) => {
  const rec = buildProgram(seed);
  // Only first 30 detailed programs are indexable; compact permutations are noindexed
  rec.indexable = index < 30;
  return rec;
});

const builtProfessions = professionSeeds.map((seed, index) => {
  const rec = buildProfession(seed);
  rec.indexable = index < 25;
  return rec;
});

const builtCompetencies = competencySeeds.map((seed, index) => {
  const rec = buildCompetency(seed);
  rec.indexable = index < 20;
  return rec;
});

const builtGuides = guideSeeds.map((seed, index) => {
  const rec = buildGuide(seed);
  // Keep primary guides indexable, noindex generated artifact clones (checklist-, template-, contoh-, etc.)
  rec.indexable = index < 25 && !/^(contoh|checklist|template|kesalahan-umum)-/.test(seed.slug);
  return rec;
});

const builtIndustries = industrySeeds.map((seed) => buildIndustry(seed));
const builtRegulations = regulationSeeds.map((seed) => buildRegulation(seed));
const builtTerms = termSeeds.map((seed) => buildTerm(seed));
const builtComparisons = comparisonSeeds.map((seed, index) => {
  const rec = buildComparison(seed);
  rec.indexable = index < 35;
  return rec;
});
const builtLocations = locationSeeds.map((seed) => buildLocation(seed));

// Priority records override generated ones
const rawRecords: ContentRecord[] = [
  ...builtPrograms,
  ...builtProfessions,
  ...builtCompetencies,
  ...builtIndustries,
  ...builtRegulations,
  ...builtGuides,
  ...builtTerms,
  ...builtComparisons,
  ...toolRecords,
  ...builtLocations,
  ...priorityRecords,
];

const uniqueRecords = [...new Map(rawRecords.map((record) => [`${record.section}/${record.slug}`, record])).values()];
const recordKeys = new Set(uniqueRecords.map((record) => `${record.section}/${record.slug}`));

const fallbackBySection: Record<Section, string[]> = {
  pelatihan: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'panduan/materi-ahli-k3-umum', 'panduan/biaya-pelatihan-k3', 'perbandingan/bnsp-vs-kemnaker'],
  profesi: ['profesi/ahli-k3-umum', 'pelatihan/ahli-k3-umum', 'panduan/tugas-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker'],
  kompetensi: ['panduan/materi-ahli-k3-umum', 'pelatihan/ahli-k3-umum', 'profesi/ahli-k3-umum', 'kamus-k3/kompetensi'],
  industri: ['pelatihan/ahli-k3-umum', 'panduan/tugas-ahli-k3-umum', 'panduan/biaya-pelatihan-k3', 'regulasi-k3/uu-1-1970'],
  'regulasi-k3': ['regulasi-k3/uu-1-1970', 'regulasi-k3/pp-50-2012', 'pelatihan/ahli-k3-umum', 'panduan/tugas-ahli-k3-umum'],
  panduan: ['panduan/syarat-ahli-k3-umum', 'panduan/materi-ahli-k3-umum', 'panduan/tugas-ahli-k3-umum', 'panduan/biaya-pelatihan-k3'],
  'kamus-k3': ['pelatihan/ahli-k3-umum', 'panduan/materi-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker', 'regulasi-k3/uu-1-1970'],
  perbandingan: ['perbandingan/bnsp-vs-kemnaker', 'pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'panduan/biaya-pelatihan-k3'],
  alat: ['alat/matriks-risiko', 'pelatihan/ahli-k3-umum', 'panduan/materi-ahli-k3-umum'],
  lokasi: ['pelatihan/ahli-k3-umum', 'panduan/biaya-pelatihan-k3', 'perbandingan/bnsp-vs-kemnaker', 'kontak'],
};

export const records: ContentRecord[] = uniqueRecords.map((record) => {
  const candidates = [...record.related, ...fallbackBySection[record.section]].filter((path) => path !== `${record.section}/${record.slug}` && recordKeys.has(path));
  return { ...record, related: [...new Set(candidates)].slice(0, 6) };
});

export const indexableRecords = records.filter((record) => record.indexable);
export const findRecord = (section: string, slug: string) => records.find((record) => record.section === section && record.slug === slug);
export const sectionRecords = (section: string) => records.filter((record) => record.section === section);

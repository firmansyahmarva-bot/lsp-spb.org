import * as fs from 'fs';
import * as path from 'path';
import { type CourseDetails, type ComparisonTable, type IntentRegistryEntry, type Section } from '../src/lib/content-types';
import { generatePelatihanRecords } from './generate-pelatihan';
import { generateKompetensiRecords } from './generate-kompetensi';
import { generateProfesiRecords } from './generate-profesi';
import { generateKamusK3Records } from './generate-kamusk3';
import { generateRegulasiRecords } from './generate-regulasi';
import { generatePanduanRecords } from './generate-panduan';
import { generateAlatRecords } from './generate-alat';
import { generateIndustriRecords } from './generate-industri';
import { generatePerbandinganRecords } from './generate-perbandingan';
import { generateLokasiRecords } from './generate-lokasi';
import { assignImagesToRecords } from './assign-images';

const rootDir = process.cwd();
const contentDir = path.join(rootDir, 'src', 'content');

function ensureDir(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

ensureDir(contentDir);
const sectionsList = ['pelatihan', 'kompetensi', 'profesi', 'kamus-k3', 'regulasi-k3', 'panduan', 'alat', 'industri', 'perbandingan', 'lokasi'];
sectionsList.forEach(sec => ensureDir(path.join(contentDir, sec)));

export interface ContentRecordInput {
  section: Section;
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  answer: string;
  highlights: string[];
  blocks: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: { question: string; answer: string }[];
  related: string[];
  sources: { label: string; url: string; publisher: string }[];
  status: 'published';
  publishedAt: string;
  updatedAt: string;
  indexable: true;
  intent: string;
  primaryKeyword: string;
  searchIntent: string;
  intentType: 'informational' | 'commercial' | 'transactional' | 'navigational';
  parentTopic: string;
  cannibalizationGroup: string;
  contentKind: string;
  courseDetails?: CourseDetails;
  comparisonTable?: ComparisonTable;
  documentChecklist?: { category: string; items: string[] }[];
  primaryCtaText?: string;
  primaryCtaIntent?: string;
  secondaryCtaText?: string;
  secondaryCtaIntent?: string;
  legalStatus?: 'mandatory_indonesia' | 'adopted_standard' | 'industry_standard' | 'guidance' | 'historical';
  image?: { src: string; alt: string };
  gallery?: { src: string; alt: string }[];
}

export function writeSectionFile(sectionName: string, records: ContentRecordInput[]) {
  const varName = sectionName === 'regulasi-k3' ? 'regulasiK3Records' : sectionName === 'kamus-k3' ? 'kamusK3Records' : `${sectionName}Records`;
  const filePath = path.join(contentDir, sectionName, 'index.ts');
  const code = `import { type ContentRecord } from '../../lib/content-types';

export const ${varName}: ContentRecord[] = ${JSON.stringify(records, null, 2)};
`;
  fs.writeFileSync(filePath, code, 'utf-8');
  console.log(`Saved ${records.length} records to src/content/${sectionName}/index.ts`);
}

export function writeRegistryFile(registry: IntentRegistryEntry[]) {
  const filePath = path.join(contentDir, 'registry.ts');
  const code = `import { type IntentRegistryEntry } from '../lib/content-types';

export const intentRegistry: IntentRegistryEntry[] = ${JSON.stringify(registry, null, 2)} as unknown as IntentRegistryEntry[];
`;
  fs.writeFileSync(filePath, code, 'utf-8');
  console.log(`Saved ${registry.length} intent entries to src/content/registry.ts`);
}

async function run() {
  console.log('Generating modular content datasets...');
  const rawPelatihan = generatePelatihanRecords();
  const rawKompetensi = generateKompetensiRecords();
  const rawProfesi = generateProfesiRecords();
  const rawKamusK3 = generateKamusK3Records();
  const rawRegulasiK3 = generateRegulasiRecords();
  const rawPanduan = generatePanduanRecords();
  const rawAlat = generateAlatRecords();
  const rawIndustri = generateIndustriRecords();
  const rawPerbandingan = generatePerbandinganRecords();
  const rawLokasi = generateLokasiRecords();

  console.log('--- Raw Inventory Family Counts ---');
  console.log(`pelatihan: ${rawPelatihan.length} (target: 300)`);
  console.log(`kompetensi: ${rawKompetensi.length} (target: 200)`);
  console.log(`profesi: ${rawProfesi.length} (target: 200)`);
  console.log(`kamus-k3: ${rawKamusK3.length} (target: 350)`);
  console.log(`regulasi-k3: ${rawRegulasiK3.length} (target: 250)`);
  console.log(`panduan: ${rawPanduan.length} (target: 327)`);
  console.log(`alat: ${rawAlat.length} (target: 180)`);
  console.log(`industri: ${rawIndustri.length} (target: 120)`);
  console.log(`perbandingan: ${rawPerbandingan.length} (target: 70)`);
  console.log(`lokasi: ${rawLokasi.length} (target: 3)`);

  const allRawRecords = [
    ...rawPelatihan,
    ...rawKompetensi,
    ...rawProfesi,
    ...rawKamusK3,
    ...rawRegulasiK3,
    ...rawPanduan,
    ...rawAlat,
    ...rawIndustri,
    ...rawPerbandingan,
    ...rawLokasi,
  ];

  console.log(`TOTAL RAW RECORDS: ${allRawRecords.length} (target: 2000)`);

  if (allRawRecords.length !== 2000) {
    throw new Error(`Inventory count mismatch! Expected 2000, got ${allRawRecords.length}`);
  }

  // Assign images across all records
  console.log('Assigning curated & fallback images across all 2,000 records...');
  const { records: allRecords, stats } = assignImagesToRecords(allRawRecords);

  console.log('=== Image Assignment Breakdown by Section ===');
  console.table(stats);

  const totalNoImage = stats.reduce((acc, s) => acc + s.noImage, 0);
  const totalDirect = stats.reduce((acc, s) => acc + s.directMatched, 0);
  const totalFallback = stats.reduce((acc, s) => acc + s.fallbackGeneric, 0);
  const totalGallery = stats.reduce((acc, s) => acc + s.withGallery, 0);

  console.log(`Summary: Direct Matched: ${totalDirect}, Fallback Generic: ${totalFallback}, With Gallery: ${totalGallery}, NO Image: ${totalNoImage}`);

  if (totalNoImage > 0) {
    throw new Error(`Error: Found ${totalNoImage} records with no image assigned!`);
  }

  // Split records by section
  const pelatihan = allRecords.filter(r => r.section === 'pelatihan');
  const kompetensi = allRecords.filter(r => r.section === 'kompetensi');
  const profesi = allRecords.filter(r => r.section === 'profesi');
  const kamusK3 = allRecords.filter(r => r.section === 'kamus-k3');
  const regulasiK3 = allRecords.filter(r => r.section === 'regulasi-k3');
  const panduan = allRecords.filter(r => r.section === 'panduan');
  const alat = allRecords.filter(r => r.section === 'alat');
  const industri = allRecords.filter(r => r.section === 'industri');
  const perbandingan = allRecords.filter(r => r.section === 'perbandingan');
  const lokasi = allRecords.filter(r => r.section === 'lokasi');

  // Write section files
  writeSectionFile('pelatihan', pelatihan);
  writeSectionFile('kompetensi', kompetensi);
  writeSectionFile('profesi', profesi);
  writeSectionFile('kamus-k3', kamusK3);
  writeSectionFile('regulasi-k3', regulasiK3);
  writeSectionFile('panduan', panduan);
  writeSectionFile('alat', alat);
  writeSectionFile('industri', industri);
  writeSectionFile('perbandingan', perbandingan);
  writeSectionFile('lokasi', lokasi);

  // Build Intent Registry
  const registry: IntentRegistryEntry[] = allRecords.map(r => ({
    section: r.section,
    slug: r.slug,
    primaryKeyword: r.primaryKeyword,
    searchIntent: r.searchIntent,
    intentType: r.intentType,
    title: r.title,
    metaTitle: r.metaTitle,
    metaDescription: r.description,
    parentTopic: r.parentTopic,
    relatedEntities: r.related,
    cannibalizationGroup: r.cannibalizationGroup,
    status: r.status,
    indexable: r.indexable,
    publishedAt: r.publishedAt,
    updatedAt: r.updatedAt,
  }));

  writeRegistryFile(registry);
  console.log('Build and image assignment completed successfully!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

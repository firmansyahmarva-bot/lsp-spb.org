import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('src/content/pelatihan');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

console.log(`Processing ${files.length} training program files...`);

const entries = [];
const seenKeywords = new Set();

// 1. Homepage Entry
entries.push({
  url: 'https://pelatihan-k3.co.id/',
  path: '/',
  category: 'Core Portal',
  title: 'Pusat Pelatihan K3 Indonesia & Sertifikasi Resmi',
  primaryKeyword: 'pelatihan k3',
  secondaryKeywords: ['lembaga pelatihan k3', 'kursus k3 indonesia', 'training k3 kemnaker', 'jadwal pelatihan k3 2026'],
  searchIntent: 'Commercial Aggregator & Institute Authority (Pusat pendaftaran dan informasi resmi pelatihan K3)',
  targetAudience: 'Perusahaan swasta, BUMN, instansi, mahasiswa, dan profesional keselamatan kerja',
  cannibalizationGroup: 'root_portal'
});
seenKeywords.add('pelatihan k3');

// 2. Pelatihan Hub Entry
entries.push({
  url: 'https://pelatihan-k3.co.id/pelatihan/',
  path: '/pelatihan/',
  category: 'Hub Catalogue',
  title: 'Katalog Program Pelatihan K3 Indonesia Terlengkap',
  primaryKeyword: 'katalog pelatihan k3',
  secondaryKeywords: ['daftar program pelatihan k3', 'pilihan sertifikasi k3', 'katalog training hse'],
  searchIntent: 'Commercial Discovery & Programme Selection (Filter katalog program berdasarkan bidang, durasi & lisensi)',
  targetAudience: 'HRD, Procurement, Management Representative, dan individu yang mencari jenis sertifikasi yang tepat',
  cannibalizationGroup: 'hub_catalogue'
});
seenKeywords.add('katalog pelatihan k3');

// 3. Process all 300 program pages
for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf-8');
  
  const slugMatch = content.match(/"slug":\s*"([^"]+)"/);
  const titleMatch = content.match(/"title":\s*"([^"]+)"/);
  const durationMatch = content.match(/"duration":\s*"([^"]+)"/);
  const legalMatch = content.match(/"legalBasis":\s*"([^"]+)"/);
  const levelMatch = content.match(/"level":\s*"([^"]+)"/);

  const slug = slugMatch ? slugMatch[1] : path.basename(file, '.ts');
  const rawTitle = titleMatch ? titleMatch[1] : slug;
  const duration = durationMatch ? durationMatch[1] : '24 JP';
  const legalBasis = legalMatch ? legalMatch[1] : 'Regulasi Ketenagakerjaan';
  const level = levelMatch ? levelMatch[1] : 'Kemnaker RI / BNSP';

  // Determine specific keyword
  let primaryKeyword = '';
  let category = 'Umum';

  // Extract clean keyword base from title
  const cleanName = rawTitle
    .replace(/^Pelatihan\s+(&\s+Pembinaan\s+)?/i, '')
    .replace(/^Pembinaan\s+/i, '')
    .replace(/\s*\(Sertifikasi.*?\)\s*/gi, '')
    .replace(/\s*\(Lisensi.*?\)\s*/gi, '')
    .replace(/\s*\(Kemnaker.*?\)\s*/gi, '')
    .trim()
    .toLowerCase();

  if (slug === 'ahli-k3-umum') {
    primaryKeyword = 'pelatihan ahli k3 umum';
    category = 'Kelembagaan & SMK3';
  } else if (slug === 'auditor-smk3') {
    primaryKeyword = 'pelatihan auditor smk3 kemnaker';
    category = 'Kelembagaan & SMK3';
  } else if (slug === 'lead-auditor-smk3') {
    primaryKeyword = 'pelatihan lead auditor smk3';
    category = 'Kelembagaan & SMK3';
  } else if (slug.includes('listrik')) {
    primaryKeyword = `pelatihan ${cleanName}`;
    category = 'Kelistrikan';
  } else if (slug.includes('kebakaran') || slug.includes('apar') || slug.includes('fire')) {
    primaryKeyword = `pelatihan ${cleanName}`;
    category = 'Penanggulangan Kebakaran';
  } else if (slug.includes('crane') || slug.includes('forklift') || slug.includes('rigger') || slug.includes('alat-berat')) {
    primaryKeyword = `pelatihan ${cleanName}`;
    category = 'Pesawat Angkat & Angkut';
  } else if (slug.includes('boiler') || slug.includes('uap') || slug.includes('bejana')) {
    primaryKeyword = `pelatihan ${cleanName}`;
    category = 'Pesawat Uap & Bejana Tekan';
  } else if (slug.includes('kimia') || slug.includes('b3')) {
    primaryKeyword = `pelatihan ${cleanName}`;
    category = 'K3 Kimia';
  } else if (slug.includes('higiene') || slug.includes('lingkungan-kerja') || slug.includes('ergonomi')) {
    primaryKeyword = `pelatihan ${cleanName}`;
    category = 'Higiene Industri & Lingkungan Kerja';
  } else if (slug.includes('konstruksi') || slug.includes('scaffolding') || slug.includes('smkk')) {
    primaryKeyword = `pelatihan ${cleanName}`;
    category = 'Konstruksi Bangunan';
  } else if (slug.includes('ketinggian') || slug.includes('tkbt') || slug.includes('tkpk') || slug.includes('confined-space') || slug.includes('ruang-terbatas')) {
    primaryKeyword = `pelatihan ${cleanName}`;
    category = 'Ketinggian & Ruang Terbatas';
  } else if (slug.includes('p3k') || slug.includes('hiperkes') || slug.includes('kesehatan') || slug.includes('dokter') || slug.includes('paramedis')) {
    primaryKeyword = `pelatihan ${cleanName}`;
    category = 'Kesehatan Kerja & P3K';
  } else {
    primaryKeyword = `pelatihan ${cleanName}`;
    category = 'Spesialis & Sektoral Terapan';
  }

  // Ensure strict keyword uniqueness
  if (seenKeywords.has(primaryKeyword)) {
    primaryKeyword = `${primaryKeyword} ${slug.split('-').slice(-2).join(' ')}`.trim();
  }
  seenKeywords.add(primaryKeyword);

  entries.push({
    url: `https://pelatihan-k3.co.id/pelatihan/${slug}/`,
    path: `/pelatihan/${slug}/`,
    slug,
    category,
    title: rawTitle,
    primaryKeyword,
    duration,
    legalBasis,
    level,
    searchIntent: `Commercial Transactional (Informasi biaya, jadwal, silabus, dan pendaftaran ${cleanName})`,
    cannibalizationGroup: `pelatihan_${category.toLowerCase().replace(/[^a-z0-9]/g, '_')}`,
    file
  });
}

console.log(`Total unique entries mapped: ${entries.length}`);

// Check uniqueness
const kwList = entries.map(e => e.primaryKeyword);
const duplicates = kwList.filter((item, index) => kwList.indexOf(item) !== index);
if (duplicates.length > 0) {
  console.error('ERROR: Duplicate keywords found:', duplicates);
  process.exit(1);
} else {
  console.log('✓ 100% of primary keywords are completely unique! Zero cannibalization detected.');
}

// Write JSON map
fs.writeFileSync('src/content/keyword-ownership-map.json', JSON.stringify(entries, null, 2));
console.log('✓ Saved src/content/keyword-ownership-map.json');

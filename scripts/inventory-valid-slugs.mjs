import fs from 'fs';
import path from 'path';

const sections = ['pelatihan', 'profesi', 'kompetensi', 'industri', 'regulasi-k3', 'panduan', 'kamus-k3', 'perbandingan', 'alat', 'lokasi'];

const validSlugMap = new Map();
for (const sec of sections) {
  const dir = path.join('src', 'content', sec);
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
    validSlugMap.set(sec, new Set(files.map(f => f.replace('.ts', ''))));
    console.log(`Section ${sec}: ${files.length} slugs`);
  }
}

// Let's write validSlugs summary to a JSON file
const obj = {};
for (const [sec, set] of validSlugMap.entries()) {
  obj[sec] = Array.from(set);
}
fs.writeFileSync('scripts/valid-slugs.json', JSON.stringify(obj, null, 2));
console.log('Saved scripts/valid-slugs.json');

import fs from 'fs';

const files = fs.readdirSync('src/content/pelatihan').filter(f => f.endsWith('.ts') && f !== 'index.ts');
const dupes = [];

for (const f of files) {
  const c = fs.readFileSync(`src/content/pelatihan/${f}`, 'utf8');
  // Look for duplicated phrases like "pelatihan Pelatihan", "Pelatihan Pelatihan", "pelatihan pelatihan"
  const matches = c.match(/pelatihan\s+pelatihan/gi);
  if (matches) {
    dupes.push({ file: f, count: matches.length });
  }
}

console.log(`Files with "pelatihan Pelatihan" duplicates: ${dupes.length}`);
if (dupes.length > 0) {
  console.log('Sample 10 files with duplicates:', dupes.slice(0, 10));
}

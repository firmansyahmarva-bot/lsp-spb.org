import fs from 'fs';

const files = fs.readdirSync('src/content/pelatihan').filter(f => f.endsWith('.ts') && f !== 'index.ts');
let titleWithYear = 0;
let metaTitleWithYear = 0;

for (const f of files) {
  const c = fs.readFileSync(`src/content/pelatihan/${f}`, 'utf8');
  const tMatch = c.match(/"title"\s*:\s*"([^"]+)"/);
  const mMatch = c.match(/"metaTitle"\s*:\s*"([^"]+)"/);
  if (tMatch && tMatch[1].includes('2026')) titleWithYear++;
  if (mMatch && mMatch[1].includes('2026')) metaTitleWithYear++;
}

console.log(`Titles containing 2026: ${titleWithYear}/${files.length}`);
console.log(`MetaTitles containing 2026: ${metaTitleWithYear}/${files.length}`);

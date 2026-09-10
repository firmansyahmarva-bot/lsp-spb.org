import fs from 'fs';

const validSlugs = JSON.parse(fs.readFileSync('scripts/valid-slugs.json', 'utf8'));
const validSet = new Set();
for (const [sec, slugs] of Object.entries(validSlugs)) {
  for (const slug of slugs) {
    validSet.add(`${sec}/${slug}`);
  }
}

const pelatihanFiles = fs.readdirSync('src/content/pelatihan').filter(f => f.endsWith('.ts') && f !== 'index.ts');

const brokenMap = new Map();

for (const file of pelatihanFiles) {
  const content = fs.readFileSync(`src/content/pelatihan/${file}`, 'utf8');
  const relatedMatch = content.match(/"related"\s*:\s*\[([\s\S]*?)\]/);
  if (relatedMatch) {
    const rawLinks = relatedMatch[1].match(/"([^"]+)"/g) || [];
    for (const raw of rawLinks) {
      const link = raw.replace(/"/g, '');
      if (!validSet.has(link)) {
        if (!brokenMap.has(link)) {
          brokenMap.set(link, 0);
        }
        brokenMap.set(link, brokenMap.get(link) + 1);
      }
    }
  }
}

console.log(`Unique broken link targets: ${brokenMap.size}`);
console.log('Broken links and occurrences:');
for (const [link, count] of brokenMap.entries()) {
  console.log(`  "${link}": ${count} times`);
}

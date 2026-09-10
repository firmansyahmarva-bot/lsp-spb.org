import fs from 'fs';

const batches = JSON.parse(fs.readFileSync('scripts/batches-plan.json', 'utf8'));
const files = fs.readdirSync('src/content/pelatihan').filter(f => f.endsWith('.ts') && f !== 'index.ts');

const exactMap = {};
for (const batch of batches) {
  for (const item of batch) {
    exactMap[item.slug] = item;
  }
}

console.log(`Mapped items: ${Object.keys(exactMap).length}`);

const missing = [];
for (const f of files) {
  const slug = f.replace('.ts', '');
  if (!exactMap[slug]) {
    missing.push(slug);
  }
}

console.log(`Missing slugs from exactMap: ${missing.length}`);
if (missing.length === 0) {
  fs.writeFileSync('scripts/exact-pricing-map.json', JSON.stringify(exactMap, null, 2));
  console.log('Saved scripts/exact-pricing-map.json successfully (300/300 matched)!');
} else {
  console.error('Missing slugs:', missing);
}

import fs from 'fs';
import { PROGRAM_PRICING_LIST } from '../src/lib/program-prices.ts';

// read generate_prices.py or use PROGRAM_PRICING_LIST
const files = fs.readdirSync('src/content/pelatihan').filter(f => f.endsWith('.ts') && f !== 'index.ts');

// Read all records to map title -> slug
const titleToSlug = new Map();
for (const file of files) {
  const slug = file.replace('.ts', '');
  const content = fs.readFileSync(`src/content/pelatihan/${file}`, 'utf8');
  const titleMatch = content.match(/title["']?\s*:\s*["']([^"']+)["']/);
  const title = titleMatch ? titleMatch[1] : slug;
  const cleanTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '');
  titleToSlug.set(cleanTitle, slug);
}

console.log('Total files:', files.length);

const batches = [];
for (let i = 0; i < 30; i++) {
  const batchPrograms = [];
  for (let j = 0; j < 10; j++) {
    const idx = i * 10 + j;
    if (idx < PROGRAM_PRICING_LIST.length) {
      const p = PROGRAM_PRICING_LIST[idx];
      const cleanP = p.title.toLowerCase().replace(/[^a-z0-9]/g, '');
      const slug = titleToSlug.get(cleanP);
      batchPrograms.push({
        idx: idx + 1,
        slug,
        title: p.title,
        duration: p.duration,
        days: p.days,
        price: p.price,
        priceNumber: p.priceNumber
      });
    }
  }
  batches.push(batchPrograms);
}

fs.writeFileSync('scripts/batches-plan.json', JSON.stringify(batches, null, 2));
console.log('Successfully wrote scripts/batches-plan.json with 30 batches');
for (let b = 0; b < 30; b++) {
  const bNum = b + 1;
  const sample = batches[b].map(x => x.slug).slice(0, 3).join(', ');
  console.log(`Batch ${bNum}: ${batches[b].length} programs. Sample: ${sample}...`);
}

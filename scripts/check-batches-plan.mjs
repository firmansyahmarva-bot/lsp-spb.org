import fs from 'fs';

const batches = JSON.parse(fs.readFileSync('scripts/batches-plan.json', 'utf8'));
let total = 0;
let nullSlugs = 0;
const allSlugs = [];

for (const batch of batches) {
  for (const item of batch) {
    total++;
    if (!item.slug) {
      nullSlugs++;
    } else {
      allSlugs.push(item.slug);
    }
  }
}

console.log(`Total items in batches-plan.json: ${total}`);
console.log(`Null slugs: ${nullSlugs}`);
console.log(`Unique slugs: ${new Set(allSlugs).size}`);

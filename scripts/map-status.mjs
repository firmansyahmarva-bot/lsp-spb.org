import fs from 'fs';
import { PROGRAM_PRICING_LIST } from '../src/lib/program-prices.ts';

const files = fs.readdirSync('src/content/pelatihan').filter(f => f.endsWith('.ts') && f !== 'index.ts');

// Let's inspect how slugs match PROGRAM_PRICING_LIST
const records = [];
for (const file of files) {
  const slug = file.replace('.ts', '');
  const content = fs.readFileSync(`src/content/pelatihan/${file}`, 'utf8');
  // extract title
  const titleMatch = content.match(/title["']?\s*:\s*["']([^"']+)["']/);
  const title = titleMatch ? titleMatch[1] : slug;
  
  // check if pricing is explicitly updated (e.g. contains Rp X.XXX.000 in priceInfo or blocks)
  const isEnhanced = content.includes('PROGRAM_PRICING') || 
    (content.includes('Rp ') && content.includes('relatedSlugs') && !content.includes('praktik-rigging-dan-pengangkatan-beban-18'));
  
  records.push({
    slug,
    file,
    title,
    isEnhanced,
    size: content.length
  });
}

console.log(`Total program records: ${records.length}`);
const enhancedCount = records.filter(r => r.isEnhanced).length;
console.log(`Enhanced programs: ${enhancedCount}`);
console.log(`Remaining to enhance: ${records.length - enhancedCount}`);

// Let's find matches between PROGRAM_PRICING_LIST and records
const matched = [];
const unmatchedPricing = [];

for (const p of PROGRAM_PRICING_LIST) {
  // try to find record with identical or similar title
  const found = records.find(r => {
    const cleanTitle = r.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanP = p.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanTitle === cleanP || cleanTitle.includes(cleanP) || cleanP.includes(cleanTitle);
  });
  if (found) {
    matched.push({ p, r: found });
  } else {
    unmatchedPricing.push(p);
  }
}

console.log(`Matched by title: ${matched.length}/${PROGRAM_PRICING_LIST.length}`);
if (unmatchedPricing.length > 0) {
  console.log(`Unmatched pricing sample (up to 5):`, unmatchedPricing.slice(0, 5));
}

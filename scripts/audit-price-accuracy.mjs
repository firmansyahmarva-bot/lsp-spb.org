import fs from 'fs';
import { PROGRAM_PRICING_LIST } from '../src/lib/program-prices.ts';

const files = fs.readdirSync('src/content/pelatihan').filter(f => f.endsWith('.ts') && f !== 'index.ts');

console.log(`Total files: ${files.length}, Total pricing entries: ${PROGRAM_PRICING_LIST.length}`);

// Find accurate match for each file
const mismatches = [];

for (const file of files) {
  const content = fs.readFileSync(`src/content/pelatihan/${file}`, 'utf8');
  const titleMatch = content.match(/"title"\s*:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : '';
  
  // Clean titles
  const cleanTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Find exact in PROGRAM_PRICING_LIST
  const exact = PROGRAM_PRICING_LIST.find(p => {
    const cp = p.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cp === cleanTitle;
  });

  // Extract price from file
  const priceInfoMatch = content.match(/"priceInfo"\s*:\s*"([^"]+)"/);
  const filePriceInfo = priceInfoMatch ? priceInfoMatch[1] : '';
  
  if (exact) {
    if (!filePriceInfo.includes(exact.price)) {
      mismatches.push({
        file,
        title,
        expectedPrice: exact.price,
        expectedDuration: exact.duration,
        currentPriceInfo: filePriceInfo.slice(0, 80)
      });
    }
  } else {
    // Check why not exact
    mismatches.push({
      file,
      title,
      expectedPrice: 'NO_EXACT_MATCH',
      currentPriceInfo: filePriceInfo.slice(0, 80)
    });
  }
}

console.log(`Total price mismatches or non-exact matches: ${mismatches.length}`);
if (mismatches.length > 0) {
  console.log('Sample mismatches (up to 10):');
  mismatches.slice(0, 10).forEach(m => {
    console.log(`  ${m.file}: Expected ${m.expectedPrice} | Got: ${m.currentPriceInfo}`);
  });
}

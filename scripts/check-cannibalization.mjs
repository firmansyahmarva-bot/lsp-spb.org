import fs from 'fs';

const files = fs.readdirSync('src/content/pelatihan').filter(f => f.endsWith('.ts') && f !== 'index.ts');

const keywordMap = new Map();
const duplicates = [];

for (const f of files) {
  const content = fs.readFileSync(`src/content/pelatihan/${f}`, 'utf8');
  const kwMatch = content.match(/"primaryKeyword"\s*:\s*"([^"]+)"/);
  if (kwMatch) {
    const kw = kwMatch[1].toLowerCase().trim();
    if (keywordMap.has(kw)) {
      duplicates.push({ keyword: kw, files: [keywordMap.get(kw), f] });
    } else {
      keywordMap.set(kw, f);
    }
  }
}

console.log(`Total files examined: ${files.length}`);
console.log(`Unique primary keywords: ${keywordMap.size}`);
console.log(`Duplicate keywords (cannibalization): ${duplicates.length}`);
if (duplicates.length > 0) {
  console.log('Duplicates:', duplicates);
}

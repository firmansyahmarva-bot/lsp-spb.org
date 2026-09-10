import fs from 'fs';

const files = fs.readdirSync('src/content/pelatihan').filter(f => f.endsWith('.ts') && f !== 'index.ts');
let withRealPrice = 0;
let withoutRealPrice = 0;

for (const f of files) {
  const content = fs.readFileSync(`src/content/pelatihan/${f}`, 'utf8');
  if (content.includes('Rp ') || content.includes('Rp.')) {
    withRealPrice++;
  } else {
    withoutRealPrice++;
  }
}

console.log(`With real price: ${withRealPrice}`);
console.log(`Without real price: ${withoutRealPrice}`);

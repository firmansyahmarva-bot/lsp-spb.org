import fs from 'fs';

const files = fs.readdirSync('src/content/pelatihan').filter(f => f.endsWith('.ts') && f !== 'index.ts');
const unoptimized = [];

for (const file of files) {
  const content = fs.readFileSync(`src/content/pelatihan/${file}`, 'utf8');
  const hasGenericBoilerplate = content.includes('praktik-rigging-dan-pengangkatan-beban-18.webp') ||
    content.includes('Investasi mencakup biaya pembinaan resmi, modul fisik/digital, sertifikat & SKP Kemnaker RI');
  
  if (hasGenericBoilerplate) {
    unoptimized.push(file);
  }
}

console.log(`Unoptimized files count: ${unoptimized.length}`);
console.log('Unoptimized files list:');
unoptimized.forEach((f, i) => console.log(`${i + 1}. ${f}`));

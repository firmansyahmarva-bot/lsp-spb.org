import fs from 'fs';

// Let's sample 5 random files from the "already optimized" list:
const sampleFiles = [
  'pelatihan-ahli-k3-kimia-sertifikasi-resmi-kemnaker-ri.ts',
  'pelatihan-ahli-k3-spesialis-listrik-kemnaker-ri.ts',
  'pelatihan-operator-forklift-kelas-i-kelas-ii-sertifikasi-kemnaker.ts',
  'pelatihan-petugas-p3k-di-tempat-kerja-lisensi-resmi-kemnaker-ri-30-jp.ts',
  'pelatihan-tenaga-kerja-bangunan-tinggi-tingkat-1-tkbt-1-kemnaker-ri.ts'
];

for (const f of sampleFiles) {
  const content = fs.readFileSync(`src/content/pelatihan/${f}`, 'utf8');
  console.log(`\n=== File: ${f} (${content.length} bytes) ===`);
  const lines = content.split('\n');
  const priceLine = lines.find(l => l.includes('priceInfo') || l.includes('Rp '));
  const relatedLine = lines.find(l => l.includes('"related"') || l.includes('relatedSlugs'));
  const headingLines = lines.filter(l => l.includes('"heading":')).slice(0, 3);
  console.log('Price line:', priceLine ? priceLine.trim().slice(0, 100) : 'NONE');
  console.log('Related line:', relatedLine ? relatedLine.trim() : 'NONE');
  console.log('Headings:', headingLines.map(h => h.trim()));
}

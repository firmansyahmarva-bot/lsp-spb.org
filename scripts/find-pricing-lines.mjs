import { PROGRAM_PRICING_LIST } from '../src/lib/program-prices.ts';

const queries = [
  'Kebakaran Industri',
  'Rigger',
  'Webbing',
  'Pelabuhan',
  'Instalasi Listrik',
  'Rupture',
  'Rigging',
  'Waterproofing',
  'Berbisa',
  'Bau'
];

for (const q of queries) {
  const matches = PROGRAM_PRICING_LIST.filter(p => p.title.toLowerCase().includes(q.toLowerCase()));
  console.log(`Query: "${q}":`);
  matches.forEach(m => console.log(`  - ${m.title} | ${m.duration} (${m.days} Hari) | ${m.price}`));
}

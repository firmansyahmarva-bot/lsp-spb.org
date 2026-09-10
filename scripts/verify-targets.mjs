import fs from 'fs';

const valid = JSON.parse(fs.readFileSync('scripts/valid-slugs.json', 'utf8'));

console.log('Regulasi 37-2016:', valid['regulasi-k3'].filter(s => s.includes('37-2016')));
console.log('Regulasi 08-2020:', valid['regulasi-k3'].filter(s => s.includes('08-2020')));
console.log('Regulasi 12-2015:', valid['regulasi-k3'].filter(s => s.includes('12-2015')));
console.log('Pelatihan lingkungan:', valid['pelatihan'].filter(s => s.includes('lingkungan-kerja-muda')));
console.log('Pelatihan himu:', valid['pelatihan'].filter(s => s.includes('himu')));
console.log('Pelatihan lux:', valid['pelatihan'].filter(s => s.includes('lux-meter')));

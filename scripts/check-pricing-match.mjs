import fs from 'fs';

const files = fs.readdirSync('src/content/pelatihan');
const nonTs = files.filter(f => !f.endsWith('.ts'));
const special = files.filter(f => f.startsWith('index') || f.startsWith('_'));
console.log('Non-ts files:', nonTs);
console.log('Special files:', special);
console.log('Total .ts files:', files.filter(f => f.endsWith('.ts')).length);

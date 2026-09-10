import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('src/content/pelatihan').filter(f => f.endsWith('.ts') && f !== 'index.ts');
let fixedCount = 0;

for (const file of files) {
  const filePath = path.join('src', 'content', 'pelatihan', file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('"section": "pelatihan"')) {
    content = content.replace(/export const record: ContentRecord = \{\s*\n/, 'export const record: ContentRecord = {\n  "section": "pelatihan",\n');
    fs.writeFileSync(filePath, content, 'utf8');
    fixedCount++;
    console.log(`Added "section": "pelatihan" to ${file}`);
  }
}

console.log(`Fixed ${fixedCount} files.`);

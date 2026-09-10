import fs from 'fs';
import path from 'path';

const pelatihanFiles = fs.readdirSync('src/content/pelatihan').filter(f => f.endsWith('.ts') && f !== 'index.ts');

const brokenLinks = [];
let totalLinksChecked = 0;

for (const file of pelatihanFiles) {
  const content = fs.readFileSync(`src/content/pelatihan/${file}`, 'utf8');
  // Match related array
  const relatedMatch = content.match(/"related"\s*:\s*\[([\s\S]*?)\]/);
  if (relatedMatch) {
    const rawLinks = relatedMatch[1].match(/"([^"]+)"/g) || [];
    for (const raw of rawLinks) {
      const link = raw.replace(/"/g, '');
      totalLinksChecked++;
      const [section, ...slugParts] = link.split('/');
      const slug = slugParts.join('/');
      
      const targetFile = path.join('src', 'content', section, `${slug}.ts`);
      if (!fs.existsSync(targetFile)) {
        brokenLinks.push({
          sourceFile: file,
          brokenLink: link,
          expectedFile: targetFile
        });
      }
    }
  }
}

console.log(`Total links checked: ${totalLinksChecked}`);
console.log(`Broken links found: ${brokenLinks.length}`);
if (brokenLinks.length > 0) {
  console.log('Sample broken links (up to 20):');
  brokenLinks.slice(0, 20).forEach(b => {
    console.log(`  In ${b.sourceFile}: "${b.brokenLink}" -> missing ${b.expectedFile}`);
  });
}

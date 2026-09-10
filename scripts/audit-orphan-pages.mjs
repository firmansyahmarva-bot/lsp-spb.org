import fs from 'fs';
import path from 'path';

const pelatihanFiles = fs.readdirSync('src/content/pelatihan').filter(f => f.endsWith('.ts') && f !== 'index.ts');
const allSlugs = pelatihanFiles.map(f => f.replace('.ts', ''));

// Map of slug -> count of inbound links
const inboundCounts = new Map();
for (const slug of allSlugs) {
  inboundCounts.set(slug, 0);
}

// Check all files in src/content and app/
const allContentDirs = ['src/content', 'app', 'src/components', 'src/lib'];

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['node_modules', '.next', '.git', 'dist'].includes(entry.name)) {
        scanDir(fullPath);
      }
    } else if (entry.isFile() && (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx') || entry.name.endsWith('.json') || entry.name.endsWith('.mjs'))) {
      const content = fs.readFileSync(fullPath, 'utf8');
      for (const slug of allSlugs) {
        // Look for occurrences of "pelatihan/${slug}" or "/pelatihan/${slug}"
        if (content.includes(`pelatihan/${slug}`) || content.includes(`pelatihan/${slug}/`)) {
          // If the file itself is src/content/pelatihan/${slug}.ts, don't count self-reference
          if (fullPath.endsWith(`src\\content\\pelatihan\\${slug}.ts`) || fullPath.endsWith(`src/content/pelatihan/${slug}.ts`)) {
            continue;
          }
          inboundCounts.set(slug, inboundCounts.get(slug) + 1);
        }
      }
    }
  }
}

for (const d of allContentDirs) {
  if (fs.existsSync(d)) {
    scanDir(d);
  }
}

const orphans = [];
let totalLinks = 0;
for (const [slug, count] of inboundCounts.entries()) {
  totalLinks += count;
  if (count === 0) {
    orphans.push(slug);
  }
}

console.log(`Total programs checked: ${allSlugs.length}`);
console.log(`Total inbound link references found: ${totalLinks}`);
console.log(`Orphan programs (0 inbound links): ${orphans.length}`);
if (orphans.length > 0) {
  console.log('Sample orphans (up to 10):', orphans.slice(0, 10));
}

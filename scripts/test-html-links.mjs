import fs from 'fs';
import path from 'path';

const outDir = path.resolve('out');
if (!fs.existsSync(outDir)) {
  console.error('out/ does not exist');
  process.exit(1);
}

// 1. Get all HTML files in out/
function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== '_next') {
        getAllHtmlFiles(fullPath, fileList);
      }
    } else if (file.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles(outDir);
console.log(`Found ${htmlFiles.length} HTML files in out/`);

// 2. All 300 pelatihan slugs
const pelatihanFiles = fs.readdirSync('src/content/pelatihan').filter(f => f.endsWith('.ts') && f !== 'index.ts');
const pelatihanSlugs = new Set(pelatihanFiles.map(f => f.replace('.ts', '')));
console.log(`Total pelatihan programs to check: ${pelatihanSlugs.size}`);

// Inbound tracking for each program: slug -> count
const inboundCounts = new Map();
const anchorTexts = new Map();
for (const slug of pelatihanSlugs) {
  inboundCounts.set(slug, 0);
  anchorTexts.set(slug, []);
}

// 3. Parse all HTML files for <a> tags
let totalLinksChecked = 0;
let brokenLinks = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relSource = path.relative(outDir, file).replace(/\\/g, '/');

  // Match all href attributes
  const hrefMatches = content.matchAll(/<a[^>]+href=["']([^"'#]+)["'][^>]*>([\s\S]*?)<\/a>/gi);
  for (const match of hrefMatches) {
    let href = match[1].trim();
    const rawAnchor = match[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    
    // Check internal links
    if (href.startsWith('/') && !href.startsWith('//')) {
      totalLinksChecked++;
      
      // Clean path
      const cleanPath = href.replace(/^\//, '').replace(/\/$/, '');
      let targetFile;
      if (!cleanPath) {
        targetFile = path.join(outDir, 'index.html');
      } else {
        targetFile = path.join(outDir, cleanPath, 'index.html');
      }

      if (!fs.existsSync(targetFile)) {
        console.error(`Broken link in ${relSource}: "${href}" -> ${targetFile}`);
        brokenLinks++;
      }

      // Check if it links to a pelatihan program
      if (cleanPath.startsWith('pelatihan/')) {
        const programSlug = cleanPath.replace('pelatihan/', '');
        if (pelatihanSlugs.has(programSlug)) {
          // don't count self link from program's own page
          const currentProgram = relSource.replace('pelatihan/', '').replace('/index.html', '');
          if (currentProgram !== programSlug) {
            inboundCounts.set(programSlug, inboundCounts.get(programSlug) + 1);
            if (rawAnchor && rawAnchor.length > 0) {
              anchorTexts.get(programSlug).push({ from: relSource, text: rawAnchor });
            }
          }
        }
      }
    }
  }
}

console.log(`\n--- RENDERED HTML AUDIT SUMMARY ---`);
console.log(`Total internal links checked in HTML: ${totalLinksChecked}`);
console.log(`Broken internal links in rendered HTML: ${brokenLinks}`);

let orphanCount = 0;
for (const [slug, count] of inboundCounts.entries()) {
  if (count === 0) {
    orphanCount++;
    console.error(`ORPHAN PROGRAM IN RENDERED HTML: /pelatihan/${slug}/ (0 inbound links)`);
  }
}

console.log(`Total orphan programs in rendered HTML: ${orphanCount}`);

// Inspect sample inbound link counts
const countsArray = Array.from(inboundCounts.entries()).sort((a, b) => a[1] - b[1]);
console.log(`Lowest inbound link count: ${countsArray[0][0]} has ${countsArray[0][1]} links`);
console.log(`Highest inbound link count: ${countsArray[countsArray.length - 1][0]} has ${countsArray[countsArray.length - 1][1]} links`);

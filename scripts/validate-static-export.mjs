import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('out');

if (!fs.existsSync(outDir)) {
  console.error('ERROR: out/ directory does not exist. Run npm run build first.');
  process.exit(1);
}

console.log('--- VALIDATING STATIC EXPORT ---');

// 1. Traverse all HTML files in out/
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
console.log(`Found ${htmlFiles.length} exported HTML files in out/`);

if (htmlFiles.length === 0) {
  console.error('ERROR: No HTML files exported in out/');
  process.exit(1);
}

// 2. Validate robots.txt and sitemaps
const robotsFile = path.join(outDir, 'robots.txt');
if (!fs.existsSync(robotsFile)) {
  console.error('ERROR: out/robots.txt does not exist.');
  process.exit(1);
}
const robotsContent = fs.readFileSync(robotsFile, 'utf-8');
if (!robotsContent.includes('sitemap.xml')) {
  console.error('ERROR: out/robots.txt does not reference sitemap.xml.');
  process.exit(1);
}
console.log('✓ robots.txt exists and references sitemap.xml');

// Sitemap index
const sitemapIndex = path.join(outDir, 'sitemap.xml');
if (!fs.existsSync(sitemapIndex)) {
  console.error('ERROR: out/sitemap.xml does not exist.');
  process.exit(1);
}
console.log('✓ sitemap.xml index exists');

const sitemapsDir = path.join(outDir, 'sitemaps');
if (!fs.existsSync(sitemapsDir)) {
  console.error('ERROR: out/sitemaps directory does not exist.');
  process.exit(1);
}

const sitemapFiles = fs.readdirSync(sitemapsDir).filter(f => f.endsWith('.xml'));
console.log(`Found ${sitemapFiles.length} section sitemaps in out/sitemaps/`);

const sitemapUrls = [];
for (const sf of sitemapFiles) {
  const content = fs.readFileSync(path.join(sitemapsDir, sf), 'utf-8');
  const matches = content.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/g);
  for (const m of matches) {
    sitemapUrls.push(m[1]);
  }
}
console.log(`Total URLs found across sitemaps: ${sitemapUrls.length}`);

// 3. Verify every sitemap URL corresponds to a file in out/
let missingFromDisk = 0;
const domainPattern = /^https?:\/\/[^/]+/;

for (const url of sitemapUrls) {
  const pathname = url.replace(domainPattern, '');
  const cleanPath = pathname.replace(/^\//, '').replace(/\/$/, '');
  
  let targetFile;
  if (!cleanPath) {
    targetFile = path.join(outDir, 'index.html');
  } else {
    targetFile = path.join(outDir, cleanPath, 'index.html');
  }

  if (!fs.existsSync(targetFile)) {
    console.error(`Sitemap URL missing in out/: ${url} -> ${targetFile}`);
    missingFromDisk++;
  }
}

if (missingFromDisk > 0) {
  console.error(`ERROR: ${missingFromDisk} sitemap URLs do not exist on disk!`);
  process.exit(1);
} else {
  console.log('✓ All sitemap URLs exist on disk in out/');
}

// 4. Validate HTML files: Canonicals, Noindex, Links, Images, No .html exposed
let duplicateCanonicals = 0;
let canonicalMismatches = 0;
let accidentalNoindex = 0;
let exposedHtmlLinks = 0;
let brokenLocalImages = 0;

for (const htmlPath of htmlFiles) {
  const relPath = path.relative(outDir, htmlPath).replace(/\\/g, '/');
  const content = fs.readFileSync(htmlPath, 'utf-8');

  // Skip 404 and not-found pages from canonical and noindex checks
  const is404 = relPath === '404.html' || relPath === '404/index.html' || relPath.startsWith('_not-found');

  // Check canonical
  const canonicalMatches = content.match(/<link[^>]*rel=["']canonical["'][^>]*>/gi) || [];
  if (canonicalMatches.length > 1) {
    console.error(`Duplicate canonical in ${relPath}`);
    duplicateCanonicals++;
  }

  if (!is404) {
    // Extract canonical href
    let canonicalHref = null;
    const hrefMatch = content.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) 
      || content.match(/<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
    if (hrefMatch) {
      canonicalHref = hrefMatch[1];
    }

    if (!canonicalHref) {
      console.warn(`Warning: No canonical found on ${relPath}`);
    } else {
      // Calculate expected canonical URL
      const routePath = relPath === 'index.html' ? '' : relPath.replace(/\/index\.html$/, '');
      const expectedUrl = `https://pelatihan-k3.co.id/${routePath ? routePath + '/' : ''}`;
      if (canonicalHref !== expectedUrl) {
        console.error(`Canonical mismatch in ${relPath}: expected ${expectedUrl}, found ${canonicalHref}`);
        canonicalMismatches++;
      }
    }

    // Check accidental noindex
    const robotsMatch = content.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i);
    if (robotsMatch && robotsMatch[1].includes('noindex')) {
      console.warn(`Warning: noindex found on ${relPath}`);
      accidentalNoindex++;
    }
  }

  // Check exposed .html in href
  const hrefMatches = content.matchAll(/href=["']([^"']+\.html)["']/gi);
  for (const hm of hrefMatches) {
    const href = hm[1];
    if (!href.startsWith('http') && !href.startsWith('#') && !href.includes('404.html')) {
      console.error(`Exposed .html link in ${relPath}: ${href}`);
      exposedHtmlLinks++;
    }
  }

  // Check local images in img src
  const imgMatches = content.matchAll(/<img[^>]*src=["'](\/images\/[^"']+)["']/gi);
  for (const im of imgMatches) {
    const imgSrc = im[1].split('?')[0];
    const localImgPath = path.join(outDir, imgSrc.replace(/^\//, ''));
    if (!fs.existsSync(localImgPath)) {
      console.error(`Missing image referenced in ${relPath}: ${imgSrc}`);
      brokenLocalImages++;
    }
  }
}

console.log('--- VALIDATION SUMMARY ---');
console.log(`- Total exported HTML files: ${htmlFiles.length}`);
console.log(`- Total sitemap URLs: ${sitemapUrls.length}`);
console.log(`- Duplicate canonicals: ${duplicateCanonicals}`);
console.log(`- Canonical mismatches: ${canonicalMismatches}`);
console.log(`- Accidental noindex pages: ${accidentalNoindex}`);
console.log(`- Exposed .html links: ${exposedHtmlLinks}`);
console.log(`- Broken local images: ${brokenLocalImages}`);

if (duplicateCanonicals > 0 || canonicalMismatches > 0 || exposedHtmlLinks > 0 || brokenLocalImages > 0) {
  console.error('ERROR: Static export validation failed!');
  process.exit(1);
}

console.log('✓ STATIC EXPORT VALIDATION PASSED SUCCESSFULLY!');

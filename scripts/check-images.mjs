import fs from 'fs';

const images = fs.readdirSync('public/images/content');
const prefixes = new Set();
images.forEach(img => {
  const clean = img.replace(/-\d+\.webp$/, '');
  prefixes.add(clean);
});

console.log('Unique image prefixes:', Array.from(prefixes));

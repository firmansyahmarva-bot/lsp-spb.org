import fs from 'fs';

const data = JSON.parse(fs.readFileSync('src/content/keyword-ownership-map.json', 'utf8'));
console.log('Entries 2 to 25:');
data.slice(2, 26).forEach((item, idx) => {
  console.log(`${idx + 2}: [${item.slug}] - ${item.category} | ${item.primaryKeyword}`);
});

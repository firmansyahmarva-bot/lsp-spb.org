import fs from 'fs';
import path from 'path';
import { PROGRAM_PRICING_LIST } from '../src/lib/program-prices.ts';

const validSlugs = JSON.parse(fs.readFileSync('scripts/valid-slugs.json', 'utf8'));
const validSet = new Set();
for (const [sec, slugs] of Object.entries(validSlugs)) {
  for (const slug of slugs) {
    validSet.add(`${sec}/${slug}`);
  }
}

const linkReplacements = {
  'regulasi-k3/uu-1-1970': 'regulasi-k3/uu-1-1970-keselamatan-kerja',
  'regulasi-k3/permenaker-02-1992-tata-cara-penunjukan-ahli-k3': 'regulasi-k3/permenaker-02-1992-penunjukan-ahli-k3',
  'regulasi-k3/permenaker-04-1987-panitia-pembina-k3-p2k3': 'regulasi-k3/permenaker-04-1987-p2k3-ahli-k3',
  'regulasi-k3/permenaker-03-1998-tata-cara-pelaporan-pemeriksaan-kecelakaan-kerja': 'regulasi-k3/permenaker-03-1998-tata-cara-pelaporan-pemeriksaan-kecelakaan',
  'regulasi-k3/permenaker-08-2020-k3-pesawat-angkat-dan-angkut': 'regulasi-k3/permenaker-08-2020-pesawat-angkat-angkut',
  'regulasi-k3/permenaker-12-2015-k3-listrik-tempat-kerja': 'regulasi-k3/permenaker-12-2015-k3-listrik',
  'regulasi-k3/permenaker-37-2016-k3-bejana-tekanan-dan-tangki-timbun': 'regulasi-k3/permenaker-37-2016-bejana-tekan-tangki-timbun',
  'profesi/safety-officer': 'profesi/profesi-safety-officer-pabrik-manufaktur',
  'profesi/supervisor-k3': 'profesi/ahli-k3-umum',
  'profesi/ahli-k3-migas': 'profesi/ahli-k3-migas-lepas-pantai',
  'profesi/operator-forklift': 'profesi/ahli-k3-pesawat-angkat-angkut',
  'profesi/rigger': 'profesi/ahli-k3-pesawat-angkat-angkut',
  'profesi/teknisi-k3-listrik': 'profesi/ahli-k3-listrik',
  'profesi/petugas-p3k': 'profesi/profesi-petugas-p3k-terlatih-tempat-kerja',
  'pelatihan/ahli-k3-lingkungan-kerja-muda-madya-utama-kemnaker-ri': 'pelatihan/pelatihan-ahli-k3-lingkungan-kerja-muda-madya-utama-kemnaker-ri',
  'pelatihan/higiene-industri-muda-himu-sertifikasi-bnsp-kemnaker': 'pelatihan/pelatihan-higiene-industri-muda-himu-sertifikasi-bnsp-kemnaker',
  'pelatihan/evaluasi-kualitas-pencahayaan-lux-meter-tempat-kerja-industri': 'pelatihan/pelatihan-evaluasi-kualitas-pencahayaan-lux-meter-tempat-kerja-industri'
};

const pelatihanFiles = fs.readdirSync('src/content/pelatihan').filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalUpdated = 0;
let totalLinksFixed = 0;
let totalPricesEnriched = 0;

for (const file of pelatihanFiles) {
  const filePath = path.join('src', 'content', 'pelatihan', file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find matching pricing
  const cleanFileName = file.replace('.ts', '').replace(/[^a-z0-9]/g, '');
  const titleMatch = content.match(/title["']?\s*:\s*["']([^"']+)["']/);
  const title = titleMatch ? titleMatch[1] : '';
  const cleanTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '');

  let matchedPricing = PROGRAM_PRICING_LIST.find(p => {
    const cp = p.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cp === cleanTitle || cleanFileName.includes(cp.slice(0, 15)) || cp.includes(cleanFileName.slice(0, 15));
  });

  if (!matchedPricing) {
    // fallback by search query
    matchedPricing = PROGRAM_PRICING_LIST.find(p => {
      const words = cleanFileName.split('-');
      return words.filter(w => w.length > 4 && p.title.toLowerCase().includes(w)).length >= 2;
    });
  }

  let modified = false;

  // 1. Fix broken links in content
  for (const [broken, replacement] of Object.entries(linkReplacements)) {
    if (content.includes(`"${broken}"`)) {
      content = content.replaceAll(`"${broken}"`, `"${replacement}"`);
      totalLinksFixed++;
      modified = true;
    }
  }

  // 2. Enrich priceInfo if it's generic
  if (matchedPricing) {
    const genericPriceInfoMatch = content.match(/"priceInfo"\s*:\s*"Investasi mencakup modul pelatihan[^"]*"/);
    if (genericPriceInfoMatch) {
      const newPriceInfo = `"priceInfo": "Investasi resmi mulai ${matchedPricing.price} (${matchedPricing.duration} / ${matchedPricing.days} Hari Kerja). Sudah mencakup modul pelatihan komprehensif, bimbingan instruktur praktisi, evaluasi kelulusan, dan sertifikasi resmi. Paket penawaran khusus tersedia untuk In-House Training perusahaan."`;
      content = content.replace(genericPriceInfoMatch[0], newPriceInfo);
      totalPricesEnriched++;
      modified = true;
    }

    // 3. Ensure FAQ contains pricing
    const hasBiayaFaq = content.includes('"question": "Berapa biaya') || content.includes('"question": "Berapa investasi');
    if (!hasBiayaFaq && content.includes('"faqs": [')) {
      const faqInsertion = `  "faqs": [
    {
      "question": "Berapa biaya resmi pelatihan ${title}?",
      "answer": "Biaya resmi pelatihan ${title} adalah mulai ${matchedPricing.price} untuk durasi ${matchedPricing.duration} (${matchedPricing.days} Hari Kerja). Biaya sudah termasuk modul pelatihan, evaluasi kelulusan resmi, dan sertifikat pembinaan. Tersedia diskon khusus untuk pendaftaran kolektif atau In-House Training perusahaan."
    },`;
      content = content.replace('"faqs": [', faqInsertion);
      modified = true;
    }
  }

  // 4. Update date
  if (modified) {
    content = content.replace(/"updatedAt"\s*:\s*"[^"]*"/, '"updatedAt": "2026-09-10"');
    fs.writeFileSync(filePath, content, 'utf8');
    totalUpdated++;
  }
}

console.log(`Enrichment complete:`);
console.log(`- Total files updated: ${totalUpdated}`);
console.log(`- Total broken links fixed: ${totalLinksFixed}`);
console.log(`- Total generic priceInfo enriched with real IDR: ${totalPricesEnriched}`);

import fs from 'fs';
import path from 'path';

const exactMap = JSON.parse(fs.readFileSync('scripts/exact-pricing-map.json', 'utf8'));
const pelatihanDir = path.resolve('src/content/pelatihan');
const files = fs.readdirSync(pelatihanDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

function getCategory(slug, title) {
  const text = `${slug} ${title}`.toLowerCase();
  if (text.includes('listrik') || text.includes('elektrik') || text.includes('puil')) return 'listrik';
  if (text.includes('forklift') || text.includes('crane') || text.includes('rigger') || text.includes('slinger') || text.includes('gondola') || text.includes('angkat') || text.includes('loader') || text.includes('excavator') || text.includes('alat berat')) return 'alat_angkat';
  if (text.includes('boiler') || text.includes('uap') || text.includes('bejana') || text.includes('tangki timbun')) return 'uap_bejana';
  if (text.includes('kimia') || text.includes('b3') || text.includes('toksik') || text.includes('limbah b3')) return 'kimia';
  if (text.includes('konstruksi') || text.includes('smkk') || text.includes('rkk') || text.includes('perancah') || text.includes('scaffolding') || text.includes('gedung') || text.includes('bekisting') || text.includes('ereksi baja')) return 'konstruksi';
  if (text.includes('ketinggian') || text.includes('tkbt') || text.includes('tkpk') || text.includes('rope access') || text.includes('tali')) return 'ketinggian';
  if (text.includes('ruang terbatas') || text.includes('confined space') || text.includes('gas tester')) return 'ruang_terbatas';
  if (text.includes('kebakaran') || text.includes('damkar') || text.includes('fire') || text.includes('apar') || text.includes('hydrant')) return 'kebakaran';
  if (text.includes('hiperkes') || text.includes('dokter') || text.includes('paramedis') || text.includes('p3k') || text.includes('first aid') || text.includes('ergonomi') || text.includes('gizi') || text.includes('kesehatan') || text.includes('wellness') || text.includes('fatigue')) return 'kesehatan_p3k';
  if (text.includes('lingkungan') || text.includes('higiene') || text.includes('himu') || text.includes('kebisingan') || text.includes('getaran') || text.includes('pencahayaan')) return 'lingkungan';
  if (text.includes('smk3') || text.includes('auditor') || text.includes('p2k3') || text.includes('iso 45001') || text.includes('audit')) return 'manajemen_smk3';
  return 'umum';
}

function cleanTitleText(title) {
  return title
    .replace(/^pelatihan\s+/i, '')
    .replace(/^pembinaan\s+/i, '')
    .replace(/\s*\(sertifikasi[^\)]*\)/i, '')
    .trim();
}

function getPriceInfo(category, cleanTitle, price, duration) {
  switch (category) {
    case 'listrik':
      return `Investasi pembinaan K3 teknis kelistrikan resmi mulai ${price} (${duration}). Sudah termasuk modul PUIL 2020 & prosedur LOTO, bimbingan instruktur ahli Kemnaker RI, evaluasi kompetensi, dan sertifikasi resmi.`;
    case 'alat_angkat':
      return `Biaya resmi pelatihan operator dan juru ikat mulai ${price} (${duration}). Fasilitas mencakup materi Permenaker 08/2020, modul keselamatan pesawat angkat-angkut, simulasi/praktik alat, ujian evaluasi, dan pengurusan SIO Kemnaker RI.`;
    case 'uap_bejana':
      return `Investasi pembinaan K3 pesawat uap dan bejana tekan resmi mulai ${price} (${duration}). Sudah mencakup regulasi Permenaker 37/2016, modul inspeksi operasional, pendampingan ujian evaluasi, dan legalitas sertifikasi Kemnaker RI.`;
    case 'kimia':
      return `Investasi pembinaan K3 kimia resmi mulai ${price} (${duration}). Termasuk penguasaan lembar data keselamatan (MSDS), regulasi Kepmenaker 187/1999, modul manajemen bahaya kimia, evaluasi kelulusan, dan sertifikasi resmi.`;
    case 'konstruksi':
      return `Biaya pelatihan K3 konstruksi dan SMKK resmi mulai ${price} (${duration}). Fasilitas meliputi kurikulum Permen PUPR 10/2021, panduan penyusunan RKK & JSA konstruksi, evaluasi kompetensi, serta sertifikat resmi.`;
    case 'ketinggian':
      return `Investasi resmi pelatihan keselamatan bekerja di ketinggian mulai ${price} (${duration}). Sudah termasuk modul standar Permenaker 09/2016, pengenalan APD full body harness, bimbingan praktik instruktur berpengalaman, dan lisensi kerja resmi.`;
    case 'ruang_terbatas':
      return `Biaya pembinaan K3 ruang terbatas (confined space) resmi mulai ${price} (${duration}). Fasilitas mencakup modul izin kerja, pemantauan gas atmosferik berbahaya, simulasi prosedur tanggap darurat, dan sertifikasi resmi Kemnaker RI.`;
    case 'kebakaran':
      return `Investasi pelatihan penanggulangan kebakaran resmi mulai ${price} (${duration}). Fasilitas mencakup materi Kepmenaker 186/1999, teknik proteksi kebakaran gedung, simulasi APAR & hydrant, serta penerbitan lisensi penunjukan resmi.`;
    case 'kesehatan_p3k':
      return `Biaya resmi pelatihan kesehatan kerja dan P3K mulai ${price} (${duration}). Sudah mencakup pedoman standar medis kerja Permenaker 15/2008 atau Hiperkes Kemnaker, modul materi, kit praktikum medis darurat, dan sertifikat resmi.`;
    case 'lingkungan':
      return `Investasi pelatihan K3 lingkungan kerja resmi mulai ${price} (${duration}). Termasuk modul pengukuran faktor fisika-kimia Permenaker 05/2018, bimbingan penggunaan alat ukur lingkungan industri, evaluasi kompetensi, dan sertifikasi resmi.`;
    case 'manajemen_smk3':
      return `Investasi pembinaan tata kelola K3 dan audit sistem manajemen resmi mulai ${price} (${duration}). Termasuk modul 166 kriteria PP 50/2012, panduan penyusunan laporan audit, studi kasus kepatuhan industri, dan sertifikasi resmi Kemnaker RI.`;
    default:
      return `Investasi resmi pembinaan ${cleanTitle} mulai ${price} (${duration}). Fasilitas lengkap mencakup modul kurikulum berstandar industri, bimbingan instruktur praktisi senior, evaluasi kompetensi, dan sertifikasi resmi.`;
  }
}

function getFaqAnswer(category, cleanTitle, price, duration) {
  switch (category) {
    case 'listrik':
      return `Biaya resmi pembinaan ${cleanTitle} adalah ${price} untuk durasi ${duration}. Investasi ini mencakup modul teknis PUIL 2020, bimbingan instruktur bersertifikasi, ujian evaluasi, serta penerbitan sertifikat dan lisensi resmi Kemnaker RI.`;
    case 'alat_angkat':
      return `Investasi resmi pelatihan operator ${cleanTitle} adalah ${price} (${duration}). Biaya sudah mencakup modul materi keselamatan angkat-angkut, simulasi/praktik alat, evaluasi penguji Kemnaker RI, dan penerbitan SIO resmi.`;
    case 'uap_bejana':
      return `Biaya pembinaan resmi ${cleanTitle} adalah ${price} untuk durasi ${duration}. Investasi mencakup modul teknis Permenaker 37/2016, bimbingan operasional pesawat uap/bejana tekan, evaluasi kelulusan, dan sertifikasi lisensi resmi.`;
    case 'kimia':
      return `Investasi resmi pelatihan ${cleanTitle} adalah ${price} (${duration}). Biaya mencakup modul penanganan B3 Kepmenaker 187/1999, pembekalan instruktur praktisi, ujian evaluasi, dan penerbitan sertifikat resmi.`;
    case 'konstruksi':
      return `Biaya pelatihan resmi ${cleanTitle} adalah ${price} (${duration}). Mencakup kurikulum SMKK Permen PUPR 10/2021, panduan implementasi RKK proyek, bimbingan instruktur ahli, dan sertifikasi kompetensi resmi.`;
    case 'ketinggian':
      return `Investasi resmi pembinaan ${cleanTitle} adalah ${price} (${duration}). Fasilitas sudah termasuk modul teknis Permenaker 09/2016, instruktur bersertifikat, praktik penggunaan APD keselamatan kerja, dan penerbitan lisensi resmi.`;
    case 'ruang_terbatas':
      return `Biaya resmi pelatihan ${cleanTitle} adalah ${price} untuk durasi ${duration}. Fasilitas mencakup modul izin kerja confined space, deteksi gas berbahaya, simulasi evakuasi medis, dan sertifikasi resmi Kemnaker RI.`;
    case 'kebakaran':
      return `Investasi resmi pembinaan penanggulangan kebakaran ${cleanTitle} adalah ${price} (${duration}). Biaya mencakup modul Kepmenaker 186/1999, praktik pemadaman api lapangan, evaluasi, dan sertifikat lisensi penunjukan resmi.`;
    case 'kesehatan_p3k':
      return `Biaya resmi pelatihan ${cleanTitle} adalah ${price} (${duration}). Investasi mencakup modul kurikulum medis kerja, alat peraga praktikum darurat, pembekalan dokter praktisi, dan penerbitan sertifikasi resmi.`;
    case 'lingkungan':
      return `Investasi resmi pelatihan ${cleanTitle} adalah ${price} (${duration}). Sudah termasuk modul pengukuran faktor fisika-kimia Permenaker 05/2018, bimbingan teknis laboratorium/lapangan, evaluasi kelulusan, dan sertifikat resmi.`;
    case 'manajemen_smk3':
      return `Investasi resmi pembinaan ${cleanTitle} adalah ${price} (${duration}). Biaya mencakup modul 166 kriteria PP 50/2012, bimbingan penyusunan bukti audit sistem manajemen, evaluasi kelulusan, dan sertifikasi resmi.`;
    default:
      return `Investasi pembinaan resmi ${cleanTitle} adalah ${price} untuk durasi ${duration}. Biaya sudah mencakup modul pelatihan komprehensif, bimbingan instruktur berpengalaman, evaluasi kelulusan, dan penerbitan sertifikat resmi.`;
  }
}

let modifiedCount = 0;
let duplicatesFixed = 0;
let pricesCorrected = 0;

for (const file of files) {
  const slug = file.replace('.ts', '');
  const filePath = path.join(pelatihanDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Check duplicated wording count before
  const dupMatches = content.match(/pelatihan\s+pelatihan/gi);
  if (dupMatches) {
    duplicatesFixed += dupMatches.length;
  }

  // 1. Fix duplicated wording globally
  content = content.replace(/\bpelatihan\s+pelatihan\b/gi, (match) => {
    return match[0] === 'P' ? 'Pelatihan' : 'pelatihan';
  });

  // Also fix in title if "Pelatihan Pelatihan"
  content = content.replace(/"title":\s*"Pelatihan\s+Pelatihan\s+/gi, '"title": "Pelatihan ');

  // 2. Skip ahli-k3-umum pricing/faq changes (preserve its rich custom tiers)
  if (slug === 'ahli-k3-umum') {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
    continue;
  }

  // 3. Exact pricing mapping
  const info = exactMap[slug];
  if (!info) {
    console.warn(`No exact pricing found for ${slug}`);
    fs.writeFileSync(filePath, content, 'utf8');
    continue;
  }

  const { price, duration } = info;
  const category = getCategory(slug, info.title);
  const cleanTitle = cleanTitleText(info.title);

  // Update courseDetails.duration if different
  content = content.replace(/"duration":\s*"[^"]*"/, `"duration": "${duration}"`);

  // Update courseDetails.priceInfo with category-specific natural copy
  const newPriceInfo = getPriceInfo(category, cleanTitle, price, duration);
  content = content.replace(/"priceInfo":\s*"[^"]*"/, `"priceInfo": "${newPriceInfo}"`);

  // Update pricing FAQ if present
  // Find FAQ with biaya or harga in question
  const newFaqQuestion = `Berapa biaya resmi pelatihan ${cleanTitle}?`;
  const newFaqAnswer = getFaqAnswer(category, cleanTitle, price, duration);

  // Replace FAQ item that asks about biaya/harga
  // Regex to match the pricing FAQ block
  const faqPricingRegex = /{\s*"question":\s*"[^"]*(?:biaya|harga|investasi)[^"]*",\s*"answer":\s*"[^"]*"\s*}/i;
  if (faqPricingRegex.test(content)) {
    content = content.replace(faqPricingRegex, `{\n      "question": "${newFaqQuestion}",\n      "answer": "${newFaqAnswer}"\n    }`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  modifiedCount++;
  pricesCorrected++;
}

console.log(`=== CORRECTION COMPLETED ===`);
console.log(`Total files modified: ${modifiedCount}`);
console.log(`Total duplicate instances removed: ${duplicatesFixed}`);
console.log(`Total program prices mapped to PROGRAM_PRICING_LIST: ${pricesCorrected}`);

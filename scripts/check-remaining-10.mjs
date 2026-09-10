import { PROGRAM_PRICING_LIST } from '../src/lib/program-prices.ts';

const remainingSlugs = [
  'pelatihan-investigasi-penyebab-kebakaran-industri-fire-investigation',
  'pelatihan-juru-ikat-beban-rigger-slinger-bersertifikat-kemnaker',
  'pelatihan-k3-inspeksi-kelayakan-sabuk-pengikat-webbing-sling-shackle',
  'pelatihan-k3-kebakaran-kapal-fasilitas-pelabuhan-maritim',
  'pelatihan-k3-pemasangan-pemeliharaan-instalasi-listrik-industri',
  'pelatihan-k3-pemasangan-rupture-disc-dan-sistem-pelepasan-tekanan-darurat',
  'pelatihan-k3-pengikatan-rigging-calculation-beban-berat-kritis',
  'pelatihan-k3-pengolesan-pelapis-kedap-air-waterproofing-di-basement-gedung',
  'pelatihan-penanganan-gigitan-hewan-berbisa-ular-dan-serangga-lapangan',
  'pelatihan-pengukuran-dan-pengendalian-bau-kebauan-industri-odour-control'
];

for (const s of remainingSlugs) {
  const match = PROGRAM_PRICING_LIST.find(p => {
    const cleanP = p.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanP.includes(cleanS.slice(0, 15)) || cleanS.includes(cleanP.slice(0, 15));
  });
  console.log(`${s}:`);
  if (match) {
    console.log(`  Title: ${match.title} | Days: ${match.days} | Duration: ${match.duration} | Price: ${match.price}`);
  } else {
    console.log(`  NOT DIRECTLY MATCHED, checking full list...`);
  }
}

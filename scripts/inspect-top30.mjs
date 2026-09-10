import fs from 'fs';

const top30 = [
  "ahli-k3-umum", "auditor-smk3", "lead-auditor-smk3", "k3-kebakaran-kelas-d",
  "k3-kebakaran-kelas-c", "k3-kebakaran-kelas-b", "k3-kebakaran-kelas-a",
  "pelatihan-ahli-k3-spesialis-listrik-kemnaker-ri", "pelatihan-teknisi-k3-listrik-sertifikasi-kemnaker-ri",
  "pelatihan-operator-forklift-kelas-i-kelas-ii-sertifikasi-kemnaker",
  "pelatihan-operator-overhead-crane-gantry-crane-kelas-i-ii-kemnaker",
  "pelatihan-operator-mobile-crane-crawler-crane-sertifikasi-kemnaker",
  "pelatihan-juru-ikat-beban-rigger-slinger-bersertifikat-kemnaker",
  "pelatihan-operator-boiler-ketel-uap-kelas-i-ii-lisensi-kemnaker",
  "pelatihan-ahli-k3-spesialis-pesawat-uap-bejana-tekanan-kemnaker",
  "pelatihan-ahli-k3-kimia-sertifikasi-resmi-kemnaker-ri", "pelatihan-petugas-k3-kimia-sertifikasi-resmi-kemnaker-ri",
  "pelatihan-ahli-k3-lingkungan-kerja-muda-madya-utama-kemnaker-ri",
  "pelatihan-higiene-industri-muda-himu-sertifikasi-bnsp-kemnaker",
  "pelatihan-ahli-k3-konstruksi-muda-madya-utama-sertifikasi-kemnaker-bnsp",
  "pelatihan-petugas-keselamatan-konstruksi-smkk-pupr-no-10-2021",
  "pelatihan-tenaga-kerja-bangunan-tinggi-tingkat-1-tkbt-1-kemnaker-ri",
  "pelatihan-tenaga-kerja-bangunan-tinggi-tingkat-2-tkbt-2-kemnaker-ri",
  "pelatihan-tenaga-kerja-pada-ketinggian-tingkat-1-tkpk-1-rope-access-kemnaker",
  "pelatihan-petugas-k3-madya-ruang-terbatas-confined-space-kemnaker",
  "pelatihan-petugas-k3-utama-ruang-terbatas-confined-space-kemnaker",
  "pelatihan-petugas-p3k-di-tempat-kerja-lisensi-resmi-kemnaker-ri-30-jp",
  "pelatihan-dokter-perusahaan-sertifikasi-hiperkes-kemnaker-ri",
  "pelatihan-paramedis-perusahaan-sertifikasi-hiperkes-kemnaker-ri",
  "pembinaan-p2k3"
];

const map = JSON.parse(fs.readFileSync("scripts/exact-pricing-map.json", "utf8"));
console.log("=== TOP 30 AUDIT ===");
for (const slug of top30) {
  const filePath = `src/content/pelatihan/${slug}.ts`;
  if (!fs.existsSync(filePath)) {
    console.log(`NOT FOUND: ${slug}`);
    continue;
  }
  const content = fs.readFileSync(filePath, "utf8");
  const hasDup = /pelatihan\s+pelatihan/i.test(content);
  const expectedPrice = map[slug]?.price;
  const hasPrice = content.includes(expectedPrice);
  console.log(`${slug.padEnd(55)}: dup=${hasDup}, priceMatch=${hasPrice} (exp: ${expectedPrice})`);
}

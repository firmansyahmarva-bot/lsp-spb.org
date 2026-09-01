import type { ComparisonSeed } from './content-types';

const rows = `
ahli-k3-umum-kemnaker-vs-ahli-k3-bnsp|Ahli K3 Umum Kemnaker|Ahli K3 BNSP|authority
sertifikasi-kemnaker-vs-bnsp|Jalur Kemnaker|Sertifikasi BNSP|authority
sertifikat-pelatihan-vs-sertifikat-kompetensi|Sertifikat Pelatihan|Sertifikat Kompetensi|authority
sertifikat-kompetensi-vs-lisensi-k3|Sertifikat Kompetensi|Lisensi K3|authority
lisensi-k3-vs-skp-k3|Lisensi K3|SKP K3|authority
pjk3-vs-lsp|PJK3|LSP|authority
lsp-p1-vs-lsp-p2|LSP Pihak Kesatu|LSP Pihak Kedua|authority
lsp-p2-vs-lsp-p3|LSP Pihak Kedua|LSP Pihak Ketiga|authority
tuk-sewaktu-vs-tuk-tempat-kerja|TUK Sewaktu|TUK Tempat Kerja|authority
pelatihan-vs-asesmen-kompetensi|Pelatihan|Asesmen Kompetensi|authority
ahli-k3-vs-petugas-k3|Ahli K3|Petugas K3|role
ahli-k3-umum-vs-ahli-k3-spesialis|Ahli K3 Umum|Ahli K3 Spesialis|role
safety-officer-vs-hse-officer|Safety Officer|HSE Officer|role
hse-officer-vs-hse-supervisor|HSE Officer|HSE Supervisor|role
hse-supervisor-vs-hse-manager|HSE Supervisor|HSE Manager|role
tkpk-vs-tkbt|TKPK|TKBT|role
teknisi-k3-listrik-vs-ahli-k3-listrik|Teknisi K3 Listrik|Ahli K3 Listrik|role
petugas-p3k-kemnaker-vs-p3k-bnsp|Petugas P3K Kemnaker|Petugas P3K BNSP|authority
auditor-internal-vs-auditor-eksternal-smk3|Auditor Internal SMK3|Auditor Eksternal SMK3|role
ahli-k3-konstruksi-vs-ahli-keselamatan-konstruksi|Ahli K3 Konstruksi|Ahli Keselamatan Konstruksi|role
petugas-vs-pengawas-k3-migas|Petugas K3 Migas|Pengawas K3 Migas|role
higiene-industri-muda-vs-madya|Higiene Industri Muda|Higiene Industri Madya|role
higiene-industri-madya-vs-utama|Higiene Industri Madya|Higiene Industri Utama|role
operator-forklift-kelas-1-vs-kelas-2|Operator Forklift Kelas I|Operator Forklift Kelas II|role
operator-crane-kelas-1-vs-kelas-2|Operator Crane Kelas I|Operator Crane Kelas II|role
hiradc-vs-hira|HIRADC|HIRA|method
hiradc-vs-jsa|HIRADC|JSA|method
jsa-vs-jha|JSA|JHA|method
jsa-vs-sop|JSA|SOP|method
jsa-vs-swms|JSA|SWMS|method
hazop-vs-hazid|HAZOP|HAZID|method
hazop-vs-fmea|HAZOP|FMEA|method
hazop-vs-lopa|HAZOP|LOPA|method
fmea-vs-fta|FMEA|Fault Tree Analysis|method
fta-vs-eta|Fault Tree Analysis|Event Tree Analysis|method
bowtie-vs-matriks-risiko|Bowtie|Matriks Risiko|method
bowtie-vs-lopa|Bowtie|LOPA|method
what-if-vs-hazop|What-if Analysis|HAZOP|method
hiradc-vs-bowtie|HIRADC|Bowtie|method
audit-k3-vs-inspeksi-k3|Audit K3|Inspeksi K3|method
observasi-k3-vs-inspeksi-k3|Observasi K3|Inspeksi K3|method
root-cause-analysis-vs-5-why|Root Cause Analysis|5 Why|method
5-why-vs-fishbone|5 Why|Fishbone Analysis|method
corrective-action-vs-preventive-action|Tindakan Korektif|Tindakan Pencegahan|method
leading-indicator-vs-lagging-indicator|Leading Indicator|Lagging Indicator|method
smk3-vs-iso-45001|SMK3|ISO 45001|system
pp-50-2012-vs-iso-45001|PP 50 Tahun 2012|ISO 45001|system
csms-vs-smk3|CSMS|SMK3|system
sop-vs-instruksi-kerja|SOP|Instruksi Kerja|system
permit-to-work-vs-work-order|Permit to Work|Work Order|system
loto-vs-shutdown|LOTO|Shutdown|system
emergency-plan-vs-business-continuity-plan|Rencana Tanggap Darurat|Business Continuity Plan|system
bahaya-vs-risiko|Bahaya|Risiko|incident
insiden-vs-kecelakaan-kerja|Insiden|Kecelakaan Kerja|incident
near-miss-vs-kecelakaan|Near Miss|Kecelakaan|incident
unsafe-action-vs-unsafe-condition|Unsafe Action|Unsafe Condition|incident
penyebab-langsung-vs-akar-penyebab|Penyebab Langsung|Akar Penyebab|incident
penyakit-akibat-kerja-vs-penyakit-terkait-kerja|Penyakit Akibat Kerja|Penyakit Terkait Kerja|incident
first-aid-case-vs-medical-treatment-case|First Aid Case|Medical Treatment Case|incident
lost-time-injury-vs-restricted-work-case|Lost Time Injury|Restricted Work Case|incident
frequency-rate-vs-severity-rate|Frequency Rate|Severity Rate|incident
ltifr-vs-trir|LTIFR|TRIR|incident
scba-vs-respirator|SCBA|Respirator|equipment
full-body-harness-vs-safety-belt|Full Body Harness|Safety Belt|equipment
lanyard-vs-self-retracting-lifeline|Lanyard|Self Retracting Lifeline|equipment
scaffolding-vs-manlift|Scaffolding|Manlift|equipment
forklift-vs-reach-truck|Forklift|Reach Truck|equipment
overhead-crane-vs-gantry-crane|Overhead Crane|Gantry Crane|equipment
mobile-crane-vs-tower-crane|Mobile Crane|Tower Crane|equipment
swl-vs-wll|SWL|WLL|equipment
apar-powder-vs-co2|APAR Powder|APAR CO2|equipment
apar-foam-vs-powder|APAR Foam|APAR Powder|equipment
sprinkler-vs-hydrant|Sprinkler|Hidran|equipment
smoke-detector-vs-heat-detector|Detektor Asap|Detektor Panas|equipment
guardrail-vs-lifeline|Guardrail|Lifeline|equipment
earplug-vs-earmuff|Earplug|Earmuff|equipment
apr-vs-papr|APR|PAPR|equipment
twa-vs-stel|TWA|STEL|exposure
stel-vs-ceiling|STEL|Ceiling Limit|exposure
nab-vs-tlv|NAB|TLV|exposure
sound-level-meter-vs-noise-dosimeter|Sound Level Meter|Noise Dosimeter|exposure
isbb-vs-heat-index|ISBB|Heat Index|exposure
lel-vs-uel|LEL|UEL|exposure
oxygen-deficiency-vs-oxygen-enrichment|Kekurangan Oksigen|Pengayaan Oksigen|exposure
area-sampling-vs-personal-sampling|Area Sampling|Personal Sampling|exposure
fit-test-kualitatif-vs-kuantitatif|Fit Test Kualitatif|Fit Test Kuantitatif|exposure
dba-vs-db|dBA|dB|exposure`;

const distinctions: Record<string,string> = {
  authority:'keduanya berada pada jalur kelembagaan, bukti, penerbit, dan kewenangan yang berbeda; satu dokumen tidak otomatis menggantikan yang lain',
  role:'keduanya mempunyai ruang lingkup tugas, tingkat keputusan, prasyarat, dan batas kewenangan yang berbeda',
  method:'keduanya memakai fokus analisis, masukan, urutan, dan keluaran yang berbeda sehingga pemilihannya mengikuti pertanyaan yang hendak dijawab',
  system:'keduanya mempunyai tujuan tata kelola, cakupan, pemicu, dan bukti penerapan yang berbeda meskipun dapat diintegrasikan',
  incident:'keduanya membedakan jenis kondisi, kejadian, dampak, atau ukuran sehingga klasifikasi dan tindak lanjutnya tidak sama',
  equipment:'keduanya mempunyai fungsi, kapasitas, keterbatasan, pemeriksaan, dan kondisi penggunaan yang berbeda',
  exposure:'keduanya memakai definisi, periode, satuan, metode ukur, atau kriteria interpretasi yang berbeda',
};

export const comparisonSeeds: ComparisonSeed[] = rows.trim().split('\n').map((line) => {
  const [slug,left,right,category] = line.split('|');
  return { slug, title:`${left} vs ${right}`, left, right, distinction:distinctions[category] };
});

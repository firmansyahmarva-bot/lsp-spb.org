export const sections = ['pelatihan', 'profesi', 'kompetensi', 'industri', 'regulasi-k3', 'panduan', 'kamus-k3', 'perbandingan', 'alat', 'lokasi'] as const;
export type Section = typeof sections[number];

export type ContentRecord = {
  section: Section; slug: string; title: string; description: string; answer: string;
  highlights: string[]; related: string[]; sourceUrl?: string; sourceLabel?: string;
  verifiedAt?: string; status?: string; indexable: boolean;
};

const parse = (section: Section, rows: string, defaults: (title: string) => Omit<ContentRecord, 'section'|'slug'|'title'>): ContentRecord[] =>
  rows.trim().split('\n').filter(Boolean).map(line => { const [slug, title] = line.split('|').map(v => v.trim()); return { section, slug, title, ...defaults(title) }; });

const programRows = `
ahli-k3-umum|Pelatihan Ahli K3 Umum
auditor-smk3|Pelatihan Auditor SMK3
petugas-p3k-tempat-kerja|Pelatihan Petugas P3K di Tempat Kerja
k3-kebakaran|Pelatihan K3 Kebakaran
petugas-k3-kimia|Pelatihan Petugas K3 Kimia
ahli-k3-kimia|Pelatihan Ahli K3 Kimia
k3-listrik|Pelatihan K3 Listrik
teknisi-k3-listrik|Pelatihan Teknisi K3 Listrik
k3-konstruksi|Pelatihan K3 Konstruksi
k3-ruang-terbatas|Pelatihan K3 Ruang Terbatas
bekerja-di-ketinggian|Pelatihan Bekerja di Ketinggian
scaffolding|Pelatihan Scaffolding
operator-forklift|Pelatihan Operator Forklift
operator-crane|Pelatihan Operator Crane
juru-ikat-rigger|Pelatihan Juru Ikat dan Rigger
pesawat-angkat-angkut|Pelatihan K3 Pesawat Angkat dan Angkut
boiler-pesawat-uap|Pelatihan K3 Boiler dan Pesawat Uap
bejana-tekan|Pelatihan K3 Bejana Tekan
juru-las-welder|Pelatihan Juru Las
higiene-industri|Pelatihan Higiene Industri
k3-laboratorium|Pelatihan K3 Laboratorium
k3-rumah-sakit|Pelatihan K3 Rumah Sakit
k3-pertambangan|Pelatihan K3 Pertambangan
k3-migas|Pelatihan K3 Migas
hiradc|Pelatihan HIRADC
job-safety-analysis|Pelatihan Job Safety Analysis
investigasi-kecelakaan-kerja|Pelatihan Investigasi Kecelakaan Kerja
lockout-tagout|Pelatihan Lockout Tagout
permit-to-work|Pelatihan Permit to Work
inspeksi-k3|Pelatihan Inspeksi K3
iso-45001|Pelatihan ISO 45001
internal-audit-iso-45001|Pelatihan Internal Audit ISO 45001
ergonomi-tempat-kerja|Pelatihan Ergonomi Tempat Kerja
penanganan-bahan-kimia|Pelatihan Penanganan Bahan Kimia
keselamatan-radiasi|Pelatihan Keselamatan Radiasi
defensive-driving|Pelatihan Defensive Driving
tanggap-darurat|Pelatihan Tanggap Darurat
pemadaman-kebakaran|Pelatihan Pemadaman Kebakaran
manajemen-kontraktor-k3|Pelatihan Manajemen Kontraktor K3
behavior-based-safety|Pelatihan Behavior Based Safety`;

const professionRows = `
ahli-k3-umum|Ahli K3 Umum
auditor-smk3|Auditor SMK3
petugas-p3k|Petugas P3K
petugas-k3-kimia|Petugas K3 Kimia
ahli-k3-kimia|Ahli K3 Kimia
teknisi-k3-listrik|Teknisi K3 Listrik
operator-forklift|Operator Forklift
operator-crane|Operator Crane
rigger|Rigger
scaffolder|Scaffolder
safety-officer|Safety Officer
hse-officer|HSE Officer
hse-supervisor|HSE Supervisor
hse-manager|HSE Manager
fire-warden|Fire Warden
paramedis-perusahaan|Paramedis Perusahaan
dokter-perusahaan|Dokter Perusahaan
higienis-industri|Higienis Industri
petugas-ruang-terbatas|Petugas Ruang Terbatas
pengawas-pekerjaan-ketinggian|Pengawas Pekerjaan Ketinggian
petugas-tanggap-darurat|Petugas Tanggap Darurat
investigator-kecelakaan-kerja|Investigator Kecelakaan Kerja
inspektor-k3|Inspektor K3
juru-las|Juru Las`;

const competencyRows = `
identifikasi-bahaya|Identifikasi Bahaya
penilaian-risiko|Penilaian Risiko K3
pengendalian-risiko|Pengendalian Risiko
menyusun-hiradc|Menyusun HIRADC
menyusun-jsa|Menyusun JSA
investigasi-insiden|Investigasi Insiden
analisis-akar-masalah|Analisis Akar Masalah
inspeksi-tempat-kerja|Inspeksi Tempat Kerja
audit-k3|Audit K3
penggunaan-apar|Penggunaan APAR
evakuasi-darurat|Evakuasi Darurat
pertolongan-pertama|Pertolongan Pertama di Tempat Kerja
isolasi-energi|Isolasi Energi
pengujian-gas|Pengujian Gas Ruang Terbatas
inspeksi-scaffolding|Inspeksi Scaffolding
inspeksi-forklift|Inspeksi Forklift
lifting-plan|Penyusunan Lifting Plan
pemilihan-apd|Pemilihan APD
komunikasi-bahaya|Komunikasi Bahaya
pengelolaan-sds|Pengelolaan Safety Data Sheet
pengukuran-kebisingan|Pengukuran Kebisingan Kerja
penilaian-ergonomi|Penilaian Ergonomi
toolbox-meeting|Pelaksanaan Toolbox Meeting
safety-induction|Pelaksanaan Safety Induction`;

const industryRows = `
konstruksi|K3 Konstruksi
manufaktur|K3 Manufaktur
pertambangan|K3 Pertambangan
minyak-dan-gas|K3 Minyak dan Gas
rumah-sakit|K3 Rumah Sakit
laboratorium|K3 Laboratorium
logistik-dan-pergudangan|K3 Logistik dan Pergudangan
transportasi-darat|K3 Transportasi Darat
pelabuhan|K3 Pelabuhan
penerbangan|K3 Penerbangan
perkebunan|K3 Perkebunan
kehutanan|K3 Kehutanan
perikanan|K3 Perikanan
pangan-dan-minuman|K3 Industri Pangan dan Minuman
farmasi|K3 Industri Farmasi
tekstil-dan-garmen|K3 Tekstil dan Garmen
kimia|K3 Industri Kimia
energi-dan-kelistrikan|K3 Energi dan Kelistrikan
telekomunikasi|K3 Telekomunikasi
perhotelan|K3 Perhotelan
perkantoran|K3 Perkantoran
pengelolaan-limbah|K3 Pengelolaan Limbah`;

const guideRows = `
cara-membuat-hiradc|Cara Membuat HIRADC
cara-membuat-jsa|Cara Membuat JSA
cara-memilih-apar|Cara Memilih APAR
cara-memeriksa-apar|Cara Memeriksa APAR
cara-menyusun-rencana-tanggap-darurat|Cara Menyusun Rencana Tanggap Darurat
cara-melakukan-simulasi-evakuasi|Cara Melaksanakan Simulasi Evakuasi
cara-membentuk-p2k3|Cara Membentuk P2K3
cara-menyusun-program-k3|Cara Menyusun Program K3 Tahunan
cara-melakukan-inspeksi-k3|Cara Melakukan Inspeksi K3
cara-melaporkan-kecelakaan-kerja|Cara Melaporkan Kecelakaan Kerja
cara-melakukan-investigasi-insiden|Cara Melakukan Investigasi Insiden
cara-menyusun-toolbox-meeting|Cara Menyiapkan Toolbox Meeting
cara-membaca-sds|Cara Membaca Safety Data Sheet
cara-menyimpan-bahan-kimia|Cara Menyimpan Bahan Kimia dengan Aman
cara-memilih-apd|Cara Memilih APD Berdasarkan Risiko
cara-menyusun-lifting-plan|Cara Menyusun Lifting Plan
cara-memeriksa-forklift|Cara Memeriksa Forklift Sebelum Operasi
cara-memeriksa-scaffolding|Cara Memeriksa Scaffolding
cara-menerapkan-lockout-tagout|Cara Menerapkan Lockout Tagout
cara-membuat-izin-kerja|Cara Membuat Izin Kerja
syarat-ahli-k3-umum|Syarat Mengikuti Pelatihan Ahli K3 Umum
materi-ahli-k3-umum|Materi Pelatihan Ahli K3 Umum
tugas-ahli-k3-umum|Tugas dan Tanggung Jawab Ahli K3 Umum
biaya-pelatihan-k3|Komponen Biaya Pelatihan K3
memilih-pelatihan-k3|Cara Memilih Pelatihan K3
memeriksa-legalitas-penyelenggara-k3|Cara Memeriksa Legalitas Penyelenggara Pelatihan K3
memeriksa-lsp-bnsp|Cara Memeriksa Status LSP di BNSP
perbedaan-pelatihan-dan-sertifikasi-k3|Perbedaan Pelatihan dan Sertifikasi K3`;

const glossaryRows = `
apar|APAR
apd|Alat Pelindung Diri
bahaya|Bahaya
risiko|Risiko
insiden|Insiden
kecelakaan-kerja|Kecelakaan Kerja
near-miss|Near Miss
unsafe-action|Unsafe Action
unsafe-condition|Unsafe Condition
hiradc|HIRADC
ibpr|IBPR
jsa|Job Safety Analysis
sds|Safety Data Sheet
nilai-ambang-batas|Nilai Ambang Batas
lockout-tagout|Lockout Tagout
permit-to-work|Permit to Work
confined-space|Confined Space
working-at-height|Working at Height
lifting-operation|Lifting Operation
toolbox-meeting|Toolbox Meeting
safety-induction|Safety Induction
p2k3|P2K3
smk3|SMK3
hierarki-pengendalian|Hierarki Pengendalian Risiko
lost-time-injury|Lost Time Injury
total-recordable-incident-rate|Total Recordable Incident Rate`;

const comparisonRows = `
hiradc-vs-jsa|HIRADC vs JSA
hiradc-vs-hira|HIRADC vs HIRA
bahaya-vs-risiko|Bahaya vs Risiko
insiden-vs-kecelakaan-kerja|Insiden vs Kecelakaan Kerja
unsafe-action-vs-unsafe-condition|Unsafe Action vs Unsafe Condition
pelatihan-vs-sertifikasi-k3|Pelatihan vs Sertifikasi K3
bnsp-vs-kemnaker|BNSP vs Kemnaker dalam K3
smk3-vs-iso-45001|SMK3 vs ISO 45001
apar-powder-vs-co2|APAR Powder vs CO2
eliminasi-vs-substitusi|Eliminasi vs Substitusi
audit-vs-inspeksi-k3|Audit vs Inspeksi K3
leading-vs-lagging-indicator|Leading vs Lagging Indicator K3
p2k3-vs-tim-hse|P2K3 vs Tim HSE
first-aid-vs-emergency-response|Pertolongan Pertama vs Tanggap Darurat
safety-induction-vs-toolbox-meeting|Safety Induction vs Toolbox Meeting`;

const toolRows = `
matriks-risiko|Matriks Risiko K3 Interaktif
generator-hiradc|Generator Struktur HIRADC
generator-jsa|Generator Struktur JSA
checklist-inspeksi-k3|Checklist Inspeksi K3
checklist-apar|Checklist Pemeriksaan APAR
checklist-forklift|Checklist Pemeriksaan Forklift
checklist-scaffolding|Checklist Pemeriksaan Scaffolding
checklist-ruang-terbatas|Checklist Kesiapan Kerja Ruang Terbatas
checklist-bekerja-di-ketinggian|Checklist Bekerja di Ketinggian
checklist-lockout-tagout|Checklist Lockout Tagout
checklist-safety-induction|Checklist Materi Safety Induction
checklist-toolbox-meeting|Checklist Toolbox Meeting
kalkulator-trir|Kalkulator Total Recordable Incident Rate
kalkulator-ltir|Kalkulator Lost Time Injury Rate
kalkulator-safe-man-hours|Kalkulator Jam Kerja Aman
pemilih-apar|Panduan Interaktif Pemilihan APAR
pemilih-apd|Panduan Interaktif Pemilihan APD
penilaian-kesiapan-smk3|Penilaian Mandiri Kesiapan SMK3`;

const regulations = [
 ['uu-1-1970','Undang-Undang Nomor 1 Tahun 1970 tentang Keselamatan Kerja','Berlaku','https://peraturan.bpk.go.id/Details/47614/uu-no-1-tahun-1970'],
 ['pp-50-2012','PP Nomor 50 Tahun 2012 tentang Penerapan SMK3','Berlaku','https://peraturan.bpk.go.id/Details/5263/pp-no-50-tahun-2012'],
 ['permenaker-13-2025','Permenaker Nomor 13 Tahun 2025 tentang P2K3','Berlaku','https://jdih.kemnaker.go.id/peraturan/detail/2788'],
 ['permenaker-11-2023','Permenaker Nomor 11 Tahun 2023 tentang K3 di Ruang Terbatas','Berlaku','https://jdih.kemnaker.go.id/peraturan?tag%5B%5D=keselamatan-dan-kesehatan-kerja'],
 ['permenaker-8-2020','Permenaker Nomor 8 Tahun 2020 tentang K3 Pesawat Angkat dan Angkut','Berlaku','https://jdih.kemnaker.go.id/peraturan?tag%5B%5D=keselamatan-dan-kesehatan-kerja'],
 ['permenaker-5-2018','Permenaker Nomor 5 Tahun 2018 tentang K3 Lingkungan Kerja','Berlaku','https://jdih.kemnaker.go.id/peraturan/detail/1546/peraturan-menteri-ketenagakerjaan-nomor-5-tahun-2018'],
 ['permenaker-6-2017','Permenaker Nomor 6 Tahun 2017 tentang K3 Elevator dan Eskalator','Berlaku','https://jdih.kemnaker.go.id/peraturan?tag%5B%5D=keselamatan-dan-kesehatan-kerja'],
 ['permenaker-38-2016','Permenaker Nomor 38 Tahun 2016 tentang K3 Pesawat Tenaga dan Produksi','Berlaku','https://jdih.kemnaker.go.id/peraturan?hal=2&tag%5B0%5D=keselamatan-dan-kesehatan-kerja'],
 ['permenaker-37-2016','Permenaker Nomor 37 Tahun 2016 tentang K3 Bejana Tekanan dan Tangki Timbun','Berlaku','https://jdih.kemnaker.go.id/peraturan?hal=2&tag%5B0%5D=keselamatan-dan-kesehatan-kerja'],
 ['permenaker-9-2016','Permenaker Nomor 9 Tahun 2016 tentang K3 Pekerjaan pada Ketinggian','Berlaku','https://jdih.kemnaker.go.id/peraturan?hal=2&tag%5B0%5D=keselamatan-dan-kesehatan-kerja'],
 ['permenaker-12-2015','Permenaker Nomor 12 Tahun 2015 tentang K3 Listrik di Tempat Kerja','Berlaku dengan perubahan','https://jdih.kemnaker.go.id/peraturan?hal=2&tag%5B0%5D=keselamatan-dan-kesehatan-kerja'],
 ['permenaker-33-2015','Permenaker Nomor 33 Tahun 2015: Perubahan K3 Listrik','Berlaku','https://jdih.kemnaker.go.id/peraturan?hal=2&tag%5B0%5D=keselamatan-dan-kesehatan-kerja'],
 ['permenaker-26-2014','Permenaker Nomor 26 Tahun 2014 tentang Penilaian Penerapan SMK3','Berlaku','https://jdih.kemnaker.go.id/peraturan?hal=2&tag%5B0%5D=keselamatan-dan-kesehatan-kerja'],
 ['permenaker-per-08-men-vii-2010','Permenaker PER.08/MEN/VII/2010 tentang Alat Pelindung Diri','Berlaku','https://jdih.kemnaker.go.id/peraturan?hal=2&tag%5B0%5D=keselamatan-dan-kesehatan-kerja'],
 ['permenaker-per-15-men-viii-2008','Permenaker PER.15/MEN/VIII/2008 tentang P3K di Tempat Kerja','Berlaku','https://jdih.kemnaker.go.id/peraturan?hal=2&tag%5B0%5D=keselamatan-dan-kesehatan-kerja'],
 ['permenaker-per-04-men-1995','Permenaker PER.04/MEN/1995 tentang PJK3','Berlaku','https://jdih.kemnaker.go.id/peraturan/detail/236/peraturan-menteri-nomor-per-04-men-1995'],
 ['kepmenaker-kep-187-men-1999','Kepmenaker KEP.187/MEN/1999 tentang Pengendalian Bahan Kimia Berbahaya','Berlaku','https://jdih.kemnaker.go.id/peraturan?hal=3&tag%5B0%5D=keselamatan-dan-kesehatan-kerja'],
 ['permen-pupr-10-2021','Permen PUPR Nomor 10 Tahun 2021 tentang Pedoman SMKK','Berlaku','https://peraturan.bpk.go.id/Details/216875/permen-pupr-no-10-tahun-2021'],
 ['permen-esdm-26-2018','Permen ESDM Nomor 26 Tahun 2018 tentang Kaidah Pertambangan yang Baik','Berlaku','https://peraturan.bpk.go.id/Details/142457/permen-esdm-no-26-tahun-2018'],
 ['permenkes-66-2016','Permenkes Nomor 66 Tahun 2016 tentang K3 Rumah Sakit','Perlu verifikasi status terbaru','https://peraturan.bpk.go.id/Details/114482/permenkes-no-66-tahun-2016'],
] as const;

const programs = parse('pelatihan', programRows, title => ({ description: `${title}: tujuan, materi, sasaran peserta, serta hal yang perlu diverifikasi sebelum memilih penyelenggara.`, answer: `${title} membantu peserta membangun pengetahuan dan keterampilan pada lingkup kerja yang spesifik. Jalur sertifikasi, persyaratan, durasi, dan keluaran tidak boleh diasumsikan sama; semuanya harus diperiksa pada program dan penyelenggara yang benar-benar tersedia.`, highlights: ['Tujuan dan hasil belajar', 'Materi serta kompetensi inti', 'Persyaratan dan jalur yang perlu diverifikasi', 'Pilihan konsultasi untuk individu dan perusahaan'], related: ['panduan/memilih-pelatihan-k3','panduan/memeriksa-legalitas-penyelenggara-k3'], indexable: true }));
const professions = parse('profesi', professionRows, title => ({ description: `${title}: tugas, kompetensi, lingkungan kerja, dan jalur pengembangan yang perlu dipahami.`, answer: `${title} adalah peran yang berkontribusi pada pengendalian risiko dan penerapan keselamatan kerja sesuai lingkup kewenangannya. Nama jabatan tidak otomatis membuktikan kepemilikan sertifikat atau penunjukan; persyaratan harus diperiksa terhadap regulasi dan skema yang berlaku.`, highlights: ['Ruang lingkup tugas', 'Kompetensi yang dibutuhkan', 'Batas kewenangan', 'Program dan regulasi terkait'], related: ['pelatihan/ahli-k3-umum','kompetensi/identifikasi-bahaya'], indexable: true }));
const competencies = parse('kompetensi', competencyRows, title => ({ description: `${title}: prinsip, langkah kerja, bukti pelaksanaan, dan hubungan dengan sistem K3.`, answer: `${title} perlu dilakukan dengan metode yang konsisten, informasi lapangan yang memadai, dan tindak lanjut yang dapat diverifikasi. Hasilnya harus digunakan untuk mengambil keputusan pengendalian, bukan sekadar melengkapi formulir.`, highlights: ['Tujuan dan masukan', 'Urutan pelaksanaan', 'Keluaran yang harus diperiksa', 'Kesalahan yang perlu dihindari'], related: ['panduan/cara-melakukan-inspeksi-k3','kamus-k3/hierarki-pengendalian'], indexable: true }));
const industries = parse('industri', industryRows, title => ({ description: `${title}: profil bahaya, pengendalian, kompetensi, dan sumber kepatuhan yang relevan.`, answer: `${title} perlu disusun berdasarkan aktivitas nyata, sumber energi, pajanan, peralatan, dan struktur tanggung jawab di sektor tersebut. Pendekatan generik tidak cukup karena profil risiko dan instrumen hukumnya dapat berbeda antaroperasi.`, highlights: ['Aktivitas dan bahaya dominan', 'Pengendalian berlapis', 'Peran dan kompetensi', 'Regulasi yang harus diverifikasi'], related: ['kompetensi/identifikasi-bahaya','kompetensi/pengendalian-risiko'], indexable: true }));
const guides = parse('panduan', guideRows, title => ({ description: `${title} dengan langkah praktis, pemeriksaan hasil, dan batas penggunaan yang jelas.`, answer: `${title} dimulai dengan menetapkan tujuan, mengumpulkan informasi lapangan, menjalankan langkah secara berurutan, dan memeriksa hasil bersama pihak yang berwenang. Dokumentasi harus menggambarkan kondisi nyata dan ditinjau ketika pekerjaan atau risikonya berubah.`, highlights: ['Persiapan dan data yang diperlukan', 'Langkah pelaksanaan', 'Pemeriksaan mutu hasil', 'Tindak lanjut dan pembaruan'], related: ['kompetensi/identifikasi-bahaya','kamus-k3/risiko'], indexable: true }));
const glossary = parse('kamus-k3', glossaryRows, title => ({ description: `${title}: pengertian, batas istilah, contoh, dan kaitannya dengan pengelolaan K3.`, answer: `${title} merupakan istilah yang digunakan dalam komunikasi dan praktik keselamatan kerja. Memahami batas pengertiannya membantu mencegah kekeliruan saat mengidentifikasi bahaya, memilih pengendalian, atau menyusun dokumentasi.`, highlights: ['Definisi ringkas', 'Konteks penggunaan', 'Contoh penerapan', 'Istilah terkait'], related: ['kompetensi/identifikasi-bahaya','panduan/cara-menyusun-program-k3'], indexable: true }));
const comparisons = parse('perbandingan', comparisonRows, title => ({ description: `${title}: perbedaan tujuan, ruang lingkup, keluaran, dan kapan masing-masing digunakan.`, answer: `${title} tidak sebaiknya dipilih hanya berdasarkan nama yang paling populer. Bandingkan tujuan, dasar penerapan, pihak yang berwenang, proses, dan keluaran agar keputusan sesuai dengan kebutuhan nyata.`, highlights: ['Perbedaan mendasar', 'Kapan digunakan', 'Keluaran dan bukti', 'Pertanyaan sebelum memilih'], related: ['panduan/memilih-pelatihan-k3','panduan/perbedaan-pelatihan-dan-sertifikasi-k3'], indexable: true }));
const tools = parse('alat', toolRows, title => ({ description: `${title} untuk membantu menyusun pemeriksaan awal secara terstruktur.`, answer: `${title} membantu pengguna menata informasi awal, tetapi tidak menggantikan penilaian profesional, regulasi, atau prosedur perusahaan. Hasil harus diverifikasi terhadap kondisi lapangan sebelum dipakai untuk mengambil keputusan.`, highlights: ['Petunjuk penggunaan', 'Data yang perlu disiapkan', 'Interpretasi hasil', 'Batas penggunaan'], related: ['panduan/cara-menyusun-program-k3','kompetensi/penilaian-risiko'], indexable: title === 'Matriks Risiko K3 Interaktif' }));
const regulationRecords: ContentRecord[] = regulations.map(([slug,title,status,sourceUrl]) => ({ section:'regulasi-k3', slug, title, status, sourceUrl, sourceLabel:'Sumber resmi', verifiedAt:'2026-08-26', description:`${title}: identitas, status yang ditampilkan sumber resmi, ruang lingkup, dan hubungan dengan topik K3.`, answer:`${title} dicatat sebagai entitas regulasi yang harus dibaca bersama naskah resmi dan perubahannya. Ringkasan ini membantu orientasi awal dan bukan pengganti konsultasi hukum atau pemeriksaan pasal demi pasal.`, highlights:['Identitas dan penerbit','Status serta hubungan perubahan','Topik dan pihak terdampak','Tautan naskah resmi'], related:['panduan/memeriksa-legalitas-penyelenggara-k3','pelatihan/ahli-k3-umum'], indexable: status !== 'Perlu verifikasi status terbaru' }));

const locationRecords: ContentRecord[] = [
 {section:'lokasi',slug:'yogyakarta',title:'Pelatihan K3 Yogyakarta',description:'Informasi dan konsultasi kebutuhan pelatihan K3 di Yogyakarta.',answer:'Kreasi Ultimate Berjaya melayani konsultasi kebutuhan pelatihan K3 dari kantor utama di kawasan Berbah, Sleman. Program, jadwal, penyelenggara, dan keluaran akan dikonfirmasi sebelum pendaftaran.',highlights:['Konsultasi kebutuhan individu dan perusahaan','Akses dari wilayah Yogyakarta','Tidak menampilkan jadwal yang belum dikonfirmasi','Kontak langsung melalui WhatsApp dan telepon'],related:['lokasi/sleman','pelatihan/ahli-k3-umum'],indexable:true},
 {section:'lokasi',slug:'sleman',title:'Pelatihan K3 Sleman',description:'Informasi dan konsultasi kebutuhan pelatihan K3 di Sleman.',answer:'Kantor utama Kreasi Ultimate Berjaya berada di Sendangtirto, Berbah, Sleman. Halaman ini berfungsi sebagai pusat informasi lokal; ketersediaan program, jadwal, dan jalur sertifikasi selalu dikonfirmasi terlebih dahulu.',highlights:['Alamat bisnis yang diberikan pemilik','Konsultasi kebutuhan pelatihan','Pilihan in-house untuk perusahaan','Konfirmasi program sebelum transaksi'],related:['lokasi/yogyakarta','pelatihan/ahli-k3-umum'],indexable:true},
 {section:'lokasi',slug:'semarang',title:'Pelatihan K3 Semarang',description:'Informasi dan konsultasi kebutuhan pelatihan K3 di Semarang.',answer:'Kreasi Ultimate Berjaya memiliki lokasi tambahan di Pedurungan Tengah, Semarang. Informasi program disampaikan setelah kebutuhan, jadwal, otoritas, dan penyelenggara yang relevan diperiksa.',highlights:['Lokasi tambahan yang diberikan pemilik','Konsultasi individu dan perusahaan','Tidak membuat klaim jadwal kosong','Kontak cepat melalui WhatsApp'],related:['lokasi/yogyakarta','pelatihan/ahli-k3-umum'],indexable:true},
];

export const records: ContentRecord[] = [...programs,...professions,...competencies,...industries,...regulationRecords,...guides,...glossary,...comparisons,...tools,...locationRecords];
export const indexableRecords = records.filter(r => r.indexable);
export const findRecord = (section: string, slug: string) => records.find(r => r.section === section && r.slug === slug);
export const sectionRecords = (section: string) => records.filter(r => r.section === section);
export const sectionLabels: Record<string,string> = {pelatihan:'Program Pelatihan',profesi:'Profesi K3',kompetensi:'Kompetensi K3',industri:'K3 Menurut Industri','regulasi-k3':'Regulasi K3',panduan:'Panduan Praktis','kamus-k3':'Kamus K3',perbandingan:'Perbandingan',alat:'Alat & Checklist',lokasi:'Lokasi'};

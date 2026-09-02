import { ContentRecordInput } from './build-inventory';
import { officialSources } from './sources';

interface ProfessionItem {
  slug: string;
  title: string;
  duties: string;
  authority: string;
  salary: string;
  faqQ1: string;
  faqA1: string;
  faqQ2: string;
  faqA2: string;
}

interface ProfessionGroup {
  category: string;
  prefix: string;
  sectorName: string;
  items?: ProfessionItem[];
  titles?: string[];
}

export function generateProfesiRecords(): ContentRecordInput[] {
  const records: ContentRecordInput[] = [];

  const professionGroups: ProfessionGroup[] = [
    {
      category: 'Ahli K3 & Spesialis Regulasi Kemnaker RI',
      prefix: 'Ahli K3',
      sectorName: 'Regulasi & Pengawasan Norma Ketenagakerjaan',
      items: [
        {
          slug: 'ahli-k3-umum',
          title: 'Profesi Ahli K3 Umum',
          duties: 'Pengawasan norma K3 lintas industri, menjabat sebagai Sekretaris P2K3, memimpin penyusunan HIRADC, serta menyusun dan menyerahkan laporan triwulan resmi ke Disnaker.',
          authority: 'Wewenang memasuki tempat kerja, meminta data pelaksanaan K3, memberikan rekomendasi perbaikan tertulis kepada direksi, dan menindaklanjuti audit kepatuhan SMK3.',
          salary: 'Rp 6.000.000 - Rp 15.000.000',
          faqQ1: 'Apa syarat utama diangkat menjadi Ahli K3 Umum resmi Kemnaker RI?',
          faqA1: 'Pendidikan minimal D3/S1 semua jurusan, lulus pembinaan 120 JP di PJK3 resmi, dan diajukan oleh perusahaan penugasan untuk penerbitan SKP & Lisensi Kemnaker.',
          faqQ2: 'Apakah Ahli K3 Umum memiliki wewenang menghentikan pekerjaan berbahaya?',
          faqA2: 'Ya, memiliki wewenang memberikan rekomendasi penghentian pekerjaan darurat jika ditemukan kondisi tidak aman kritis yang mengancam nyawa.'
        },
        {
          slug: 'ahli-k3-konstruksi',
          title: 'Profesi Ahli K3 Konstruksi',
          duties: 'Pengawasan keselamatan struktur proyek konstruksi gedung/sipil, penyusunan Rencana Keselamatan Konstruksi (RKK), inspeksi perancah, galian tanah, dan alat berat.',
          authority: 'Wewenang menyetujui izin kerja risiko tinggi (PTW proyek), memvalidasi kelayakan scaffolding, dan menghentikan manuver alat berat yang membahayakan.',
          salary: 'Rp 8.000.000 - Rp 20.000.000',
          faqQ1: 'Sertifikasi apa yang dibutuhkan untuk menjadi Ahli K3 Konstruksi?',
          faqA1: 'Sertifikat pembinaan Ahli K3 Konstruksi (Muda/Madya/Utama) dari Kemnaker RI atau sertifikat kompetensi konstruksi SMKK PUPR.',
          faqQ2: 'Berapa jumlah Ahli K3 Konstruksi yang wajib ada di proyek besar?',
          faqA2: 'Untuk proyek berisiko keselamatan tinggi atau bernilai kontrak besar, wajib memiliki minimal 1 orang Ahli K3 Konstruksi Utama atau Madya.'
        },
        {
          slug: 'ahli-k3-kimia',
          title: 'Profesi Ahli K3 Kimia',
          duties: 'Pengendalian bahaya bahan kimia berbahaya beracun (B3), penetapan zona bahaya, evaluasi lembar data keselamatan (MSDS/SDS), dan penanganan limbah B3 pabrik.',
          authority: 'Wewenang memverifikasi dokumen pengendalian potensi bahaya besar/menengah bahan kimia dan menetapkan protokol tanggap darurat tumpahan kimia.',
          salary: 'Rp 7.500.000 - Rp 18.000.000',
          faqQ1: 'Kapan perusahaan wajib menunjuk Ahli K3 Kimia?',
          faqA1: 'Sesuai Kepmenaker 187/1999, perusahaan yang menggunakan, menyimpan, atau memproduksi bahan kimia berbahaya melebihi Nilai Ambang Kuantitas (NAK) wajib menunjuk Ahli K3 Kimia.',
          faqQ2: 'Apakah Ahli K3 Kimia bertanggung jawab atas pelaporan B3 ke kementerian?',
          faqA2: 'Ya, bertanggung jawab menyusun Dokumen Pengendalian Bahan Kimia Berbahaya untuk diverifikasi oleh Pengawas Ketenagakerjaan.'
        },
        {
          slug: 'ahli-k3-listrik',
          title: 'Profesi Ahli K3 Listrik',
          duties: 'Pengawasan norma keselamatan instalasi ketenagalistrikan, inspeksi sistem penyalur petir, pengawasan prosedur isolasi LOTO, dan evaluasi bahaya busur api (arc flash).',
          authority: 'Wewenang memeriksa kelaikan teknis panel, trafo, generator, dan mengesahkan rencana kerja pemeliharaan instalasi listrik tegangan tinggi.',
          salary: 'Rp 8.000.000 - Rp 19.000.000',
          faqQ1: 'Apa latar belakang pendidikan minimal calon Ahli K3 Listrik?',
          faqA1: 'Pendidikan minimal Sarjana Muda / D3 atau Sarjana (S1) bidang teknik elektro / kelistrikan dengan pengalaman kerja yang relevan.',
          faqQ2: 'Apakah Ahli K3 Listrik berbeda dengan Teknisi K3 Listrik?',
          faqA2: 'Ahli K3 Listrik bertanggung jawab atas perancangan, analisis sistem, dan legal compliance, sedangkan Teknisi K3 Listrik berfokus pada pekerjaan fisik pemasangan dan perbaikan.'
        },
        {
          slug: 'ahli-k3-lingkungan-kerja',
          title: 'Profesi Ahli K3 Lingkungan Kerja',
          duties: 'Pengukuran dan pengendalian faktor fisika, kimia, biologi, ergonomi, dan psikologi kerja di tempat kerja sesuai Permenaker No. 05 Tahun 2018.',
          authority: 'Wewenang melakukan sampling udara, kebisingan, penerangan, dan memberikan rekomendasi teknis rekayasa ventilasi atau pengendalian administratif.',
          salary: 'Rp 7.000.000 - Rp 16.000.000',
          faqQ1: 'Berapa jenjang sertifikasi Ahli K3 Lingkungan Kerja Kemnaker RI?',
          faqA1: 'Terdapat 3 jenjang: Ahli K3 Lingkungan Kerja Muda, Madya, dan Utama berdasarkan kompleksitas pengukuran dan analisis faktor bahaya.',
          faqQ2: 'Apa dokumen wajib yang disusun oleh Ahli K3 Lingkungan Kerja?',
          faqA2: 'Laporan hasil pengukuran faktor bahaya lingkungan kerja berkala yang dibandingkan dengan Nilai Ambang Batas (NAB) resmi pemerintah.'
        },
        {
          slug: 'ahli-k3-pesawat-angkat-angkut',
          title: 'Profesi Ahli K3 Pesawat Angkat & Angkut',
          duties: 'Pemeriksaan kelaikan teknis crane, forklift, alat berat, lift barang, evaluasi lifting plan kritis, dan pengawasan uji beban dinamis/statis.',
          authority: 'Wewenang memvalidasi sertifikat kelaikan alat angkat dan melarang pengoperasian unit yang mengalami keretakan struktur atau cacat tali kawat baja.',
          salary: 'Rp 8.500.000 - Rp 20.000.000',
          faqQ1: 'Apa dasar hukum penunjukan Ahli K3 Pesawat Angkat dan Angkut?',
          faqA1: 'Permenaker No. 08 Tahun 2020 tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Pesawat Angkut.',
          faqQ2: 'Apakah profesi ini terlibat dalam investigasi insiden crane roboh?',
          faqA2: 'Ya, bertindak sebagai tim ahli teknis dalam investigasi struktural kegagalan mekanik atau kesalahan kalkulasi beban angkat.'
        },
        {
          slug: 'ahli-k3-pesawat-tenaga-produksi',
          title: 'Profesi Ahli K3 Pesawat Tenaga & Produksi',
          duties: 'Pengawasan keselamatan mesin produksi pabrik, mesin pres stamping, mesin perkakas bubut/frais, transmisi tenaga mekanik, dan sistem pelindung interlock.',
          authority: 'Wewenang merekomendasikan modifikasi safeguarding mesin dan menghentikan pengoperasian mesin tanpa sensor pelindung keselamatan.',
          salary: 'Rp 7.500.000 - Rp 17.000.000',
          faqQ1: 'Regulasi apa yang menjadi rujukan Ahli K3 Pesawat Tenaga Produksi?',
          faqA1: 'Permenaker No. 38 Tahun 2016 tentang K3 Pesawat Tenaga dan Produksi.',
          faqQ2: 'Apa fokus pengawasan utama pada mesin penggerak mula (mesin diesel/turbin)?',
          faqA2: 'Pemeriksaan pelindung bagian berputar (guarding), sistem peredam getaran, sistem pembuangan gas buang, dan tombol emergency stop.'
        },
        {
          slug: 'ahli-k3-pesawat-uap-bejana-tekan',
          title: 'Profesi Ahli K3 Pesawat Uap & Bejana Tekan',
          duties: 'Inspeksi keselamatan ketel uap (boiler), bejana tekan kompresor, tangki timbun bahan bakar, reaktor kimia, dan pengujian safety relief valve.',
          authority: 'Wewenang mengawasi uji tekan hidrostatis, memeriksa hasil uji NDT ultrasonik, dan memvalidasi batas tekanan kerja aman (MAWP).',
          salary: 'Rp 8.500.000 - Rp 22.000.000',
          faqQ1: 'Mengapa pengawasan pesawat uap memiliki payung hukum khusus yang sangat ketat?',
          faqA1: 'Karena kegagalan boiler atau bejana tekan berpotensi memicu ledakan katastrofik dengan radius kehancuran masif di kawasan industri.',
          faqQ2: 'Apa kualifikasi untuk menjadi Ahli K3 Pesawat Uap & Bejana Tekan?',
          faqA2: 'Sarjana teknik (diutamakan Teknik Mesin/Kimia) yang telah menyelesaikan pembinaan spesialis Kemnaker RI.'
        },
        {
          slug: 'ahli-k3-kebakaran',
          title: 'Profesi Ahli K3 Kebakaran (Kelas A)',
          duties: 'Perancangan sistem proteksi kebakaran terpadu fasilitas, audit kepatuhan instalasi sprinkler/hydrant/alarm, dan penyusunan fire emergency plan gedung.',
          authority: 'Wewenang menetapkan zonasi kompartemen tahan api gedung dan mengevaluasi kelayakan seluruh sarana proteksi pemadam sebelum operasional pabrik.',
          salary: 'Rp 8.000.000 - Rp 18.000.000',
          faqQ1: 'Apa perbedaan Ahli K3 Kebakaran Kelas A dengan Koordinator Kebakaran Kelas B?',
          faqA1: 'Kelas A berfokus pada rekayasa desain sistem proteksi kebakaran dan audit strategis, sedangkan Kelas B berfokus pada komando taktis operasional pemadaman.',
          faqQ2: 'Apakah Ahli K3 Kebakaran Kelas A wajib memahami standar internasional NFPA?',
          faqA2: 'Ya, pemahaman standar NFPA dan SNI menjadi kompetensi dasar dalam menganalisis kalkulasi beban api fasilitas industri modern.'
        },
        {
          slug: 'ahli-k3-rumah-sakit',
          title: 'Profesi Ahli K3 Rumah Sakit (K3RS)',
          duties: 'Penerapan standar keselamatan fasilitas medis, pengelolaan limbah medis B3, mitigasi bahaya radiasi/infeksius, dan sistem tanggap darurat evakuasi pasien.',
          authority: 'Wewenang mengoordinasikan program Komite K3RS, menginspeksi keselamatan ruang operasi/rawat, dan menyusun laporan kepatuhan akreditasi rumah sakit.',
          salary: 'Rp 6.500.000 - Rp 15.000.000',
          faqQ1: 'Regulasi apa yang mengatur standar kepatuhan K3RS?',
          faqA1: 'Permenkes No. 66 Tahun 2016 tentang Keselamatan dan Kesehatan Kerja Rumah Sakit.',
          faqQ2: 'Apa tantangan terbesar profesi K3RS saat terjadi kebakaran?',
          faqA2: 'Melakukan evakuasi pasien kritis (ICU, ruang bedah, inkubator bayi) tanpa menghentikan pasokan alat pendukung kehidupan.'
        },
        {
          slug: 'ahli-k3-migas',
          title: 'Profesi Ahli K3 Migas & Panas Bumi',
          duties: 'Pengawasan keselamatan operasi pengeboran rig lepas pantai/darat, process safety management kilang, sistem izin kerja khusus, dan mitigasi bahaya H2S.',
          authority: 'Wewenang Stop Work Authority penuh pada anjungan lepas pantai dan memvalidasi isolasi energi kompleks sebelum aktivitas perbaikan pipa gas.',
          salary: 'Rp 12.000.000 - Rp 35.000.000',
          faqQ1: 'Sertifikasi apa yang diakui secara luas di industri migas Indonesia?',
          faqA1: 'Sertifikasi Pengawas K3 Migas BNSP / SKK Migas dan lisensi Ahli K3 Kemnaker RI.',
          faqQ2: 'Mengapa standar keselamatan di industri migas dinilai paling ketat?',
          faqA2: 'Karena potensi bahaya ledakan hidrokarbon hidrostatik tinggi, gas beracun H2S, dan lokasi operasi terpencil di laut lepas (offshore).'
        },
        {
          slug: 'ahli-k3-pertambangan',
          title: 'Profesi Ahli K3 Pertambangan Mineral & Batubara',
          duties: 'Implementasi Sistem Manajemen Keselamatan Pertambangan (SMKP), pengawasan kestabilan lereng tambang terbuka, keselamatan peledakan (blasting), dan armada hauling.',
          authority: 'Wewenang mengawasi kepatuhan Pengawas Operasional Pertama/Madya (POP/POM) dan menginspeksi kelaikan jalur jalan tambang.',
          salary: 'Rp 10.000.000 - Rp 28.000.000',
          faqQ1: 'Apa regulasi utama K3 pertambangan di Indonesia?',
          faqA1: 'Kepmen ESDM No. 1827 K/30/MEM/2018 tentang Pedoman Pelaksanaan Kaidah Teknik Pertambangan yang Baik.',
          faqQ2: 'Apa peran Kepala Teknik Tambang (KTT) terhadap personel K3 Tambang?',
          faqA2: 'KTT memegang tanggung jawab tertinggi operasional keselamatan tambang, didampingi oleh tim pengawas K3 dan Bagian K3 Tambang.'
        },
        {
          slug: 'ahli-k3-maritim',
          title: 'Profesi Ahli K3 Maritim & Kepelabuhanan',
          duties: 'Pengawasan keselamatan operasi bongkar muat kargo pelabuhan, keselamatan galangan perkapalan (shipyard), penanganan peti kemas B3 (IMDG Code), dan ISM Code.',
          authority: 'Wewenang memverifikasi keamanan dermaga, mengesahkan izin kerja panas di atas kapal, dan menghentikan pengangkatan kargo saat cuaca ekstrem.',
          salary: 'Rp 8.000.000 - Rp 22.000.000',
          faqQ1: 'Standar internasional apa yang diterapkan pada K3 sektor maritim?',
          faqA1: 'SOLAS (Safety of Life at Sea), ISM Code, IMDG Code, dan konvensi ILO maritime labour convention.',
          faqQ2: 'Apa bahaya terbesar dalam pekerjaan perbaikan kapal di galangan?',
          faqA2: 'Bahaya ledakan di dalam ruang tangki ganda kapal (double bottom) saat pemotongan baja akibat sisa uap bahan bakar.'
        },
        {
          slug: 'ahli-k3-penerbangan',
          title: 'Profesi Ahli K3 Penerbangan & Ground Handling',
          duties: 'Pengawasan keselamatan area apron bandara, operasional peralatan darat Ground Support Equipment (GSE), keselamatan pengisian bahan bakar avtur, dan FOD prevention.',
          authority: 'Wewenang menindak pelanggaran batas kecepatan di apron dan melarang pengoperasian peralatan GSE yang tidak memenuhi standar ICAO.',
          salary: 'Rp 8.000.000 - Rp 20.000.000',
          faqQ1: 'Apa yang dimaksud dengan FOD (Foreign Object Debris) di bandara?',
          faqA1: 'Benda asing (baut, sampah, kerikil) di landasan pacu atau apron yang berisiko tersedot mesin jet pesawat dan menyebabkan kerusakan fatal.',
          faqQ2: 'Regulasi apa yang mengatur keselamatan ground handling bandara?',
          faqA2: 'Peraturan Keselamatan Penerbangan Sipil (PKPS/CASR) Ditjen Perhubungan Udara dan standar internasional IATA/ICAO.'
        },
        {
          slug: 'ahli-k3-telekomunikasi',
          title: 'Profesi Ahli K3 Telekomunikasi & Tower Rigging',
          duties: 'Pengawasan keselamatan pemasangan infrastruktur menara BTS, pekerjaan penarikan fiber optik, keselamatan bekerja di ketinggian, dan mitigasi radiasi gelombang mikro.',
          authority: 'Wewenang memeriksa kelaikan sabuk pengaman full body harness, tali keselamatan lifeline menara, dan menghentikan pekerjaan panjat saat petir.',
          salary: 'Rp 7.000.000 - Rp 16.000.000',
          faqQ1: 'Sertifikasi apa yang wajib dipegang supervisor K3 menara telekomunikasi?',
          faqA1: 'Sertifikat Ahli K3 Umum Kemnaker RI dan sertifikat Tenaga Kerja Pada Ketinggian (TKPK Tingkat 2/3) resmi Kemnaker.',
          faqQ2: 'Bagaimana prosedur aman bekerja di menara saat cuaca mendung berangin?',
          faqA2: 'Pekerjaan wajib dihentikan seketika bila kecepatan angin melebihi 20 knot atau ada peringatan potensi petir dalam radius 10 km.'
        },
        {
          slug: 'ahli-k3-manufaktur-pangan',
          title: 'Profesi Ahli K3 Industri Pangan & F&B',
          duties: 'Integrasi standar keselamatan kerja dengan kebersihan sanitasi pangan (HACCP/ISO 22000), pengawasan ruang pendingin amonia, dan ergonomi pengemasan massal.',
          authority: 'Wewenang menginspeksi kepatuhan APD steril, memvalidasi kelaikan mesin pengaduk berkecepatan tinggi, dan mengelola tanggap darurat amonia.',
          salary: 'Rp 6.000.000 - Rp 14.000.000',
          faqQ1: 'Bagaimana menyeimbangkan kepatuhan higienes pangan dan K3 pekerja?',
          faqA1: 'Memilih APD yang memenuhi standar food-grade sekaligus melindungi pekerja dari bahaya fisik (seperti sarung tangan tahan sayat stainless steel mesh).',
          faqQ2: 'Apa bahaya mekanik terbesar di pabrik pengolahan makanan?',
          faqA2: 'Mesin penggiling, pengaduk adonan industri, mesin pengiris otomatis, dan jalur konveyor berkecepatan tinggi tanpa sensor interlock.'
        },
        {
          slug: 'ahli-k3-otomotif',
          title: 'Profesi Ahli K3 Industri Otomotif & Logam',
          duties: 'Pengawasan keselamatan lini perakitan robotik, mesin stamping press bertekanan tinggi, pengecatan solvent bertemperatur tinggi, dan uji jalan kendaraan (testing track).',
          authority: 'Wewenang mengaudit interlock sensor pengaman robotik dan mengesahkan izin pemeliharaan ruang oven pengecatan cat mobil.',
          salary: 'Rp 7.500.000 - Rp 17.000.000',
          faqQ1: 'Standar keselamatan apa yang diterapkan pada robot industri otomotif?',
          faqA1: 'Standar ISO 10218 (Robots and Robotic Devices Safety) yang mewajibkan pagar pelindung fisik, sensor light curtain, dan safety PLC terintegrasi.',
          faqQ2: 'Bagaimana pengendalian bahaya uap thinner pada ruang pengecatan (spray booth)?',
          faqA2: 'Penerapan ventilasi downdraft bertekanan positif terarah, peralatan lampu explosion-proof, dan masker respirator suplai udara mandiri.'
        },
        {
          slug: 'ahli-k3-perkebunan-sawit',
          title: 'Profesi Ahli K3 Perkebunan Kelapa Sawit',
          duties: 'Pengawasan keselamatan operasional Pabrik Kelapa Sawit (PKS), keselamatan ketel uap cangkang, penanganan pestisida herbisida, dan ergonomi pemanen sawit.',
          authority: 'Wewenang menginspeksi stasiun rebusan sawit (sterilizer door interlock), memantau pemakaian APD pestisida, dan memimpin tim P2K3 kebun.',
          salary: 'Rp 6.500.000 - Rp 15.000.000',
          faqQ1: 'Apa titik bahaya paling kritis di Pabrik Kelapa Sawit (PKS)?',
          faqA1: 'Bejana rebusan buah sawit (sterilizer) bertekanan uap tinggi, turbin uap pembangkit listrik, dan kolam limbah cair sawit (POME) yang menghasilkan gas metana.',
          faqQ2: 'Pemeriksaan kesehatan apa yang wajib bagi pekerja penyemprot pestisida perkebunan?',
          faqA2: 'Pemeriksaan kadar enzim kolinesterase darah secara berkala untuk mendeteksi dini keracunan pestisida organofosfat.'
        },
        {
          slug: 'ahli-k3-kehutanan-pulp-paper',
          title: 'Profesi Ahli K3 Industri Pulp, Kertas & Kayu',
          duties: 'Pengendalian bahaya penebangan kayu, mesin chipper penggiling serat, bahan kimia pemutih klorin dioksida, debu kayu mudah terbakar, dan recovery boiler.',
          authority: 'Wewenang memvalidasi SOP pembersihan tangki digester dan memastikan seluruh operator mesin pemotong kertas mematuhi prosedur LOTO.',
          salary: 'Rp 7.000.000 - Rp 16.000.000',
          faqQ1: 'Apa risiko keselamatan terbesar pada industri pengolahan bubur kertas (pulp)?',
          faqA1: 'Kebocoran gas beracun klorin dioksida (ClO2) pada unit pemutihan dan bahaya ledakan reaksi kimia pada recovery boiler cairan hitam (black liquor).',
          faqQ2: 'Bagaimana mitigasi bahaya debu kayu pada pabrik pengolahan kayu lapis?',
          faqA2: 'Pemasangan sistem hisap debu (dust collector LEV), grounding anti-statis pada ducting, dan panel pelepas ledakan (explosion vent) pada silo debu.'
        },
        {
          slug: 'ahli-k3-farmasi',
          title: 'Profesi Ahli K3 Industri Farmasi & Bahan Biologis',
          duties: 'Pengawasan keselamatan fasilitas ruang bersih (cleanroom), pengendalian zat aktif farmasi poten (Highly Potent Active Pharmaceutical Ingredients / HPAPI), dan limbah B3 obat.',
          authority: 'Wewenang menetapkan batasan paparan kerja Occupational Exposure Limit (OEL band) dan memvalidasi sistem penahan kontaminasi biosafety containment.',
          salary: 'Rp 8.000.000 - Rp 18.000.000',
          faqQ1: 'Apa perbedaan K3 industri farmasi dengan industri kimia umum?',
          faqA1: 'Industri farmasi berfokus pada pengendalian paparan mikro-gram zat aktif berkhasiat obat (teratogenik/sitotoksik) yang dapat mempengaruhi hormon pekerja.',
          faqQ2: 'Standar apa yang diintegrasikan bersama K3 di pabrik obat?',
          faqA2: 'Standar Cara Pembuatan Obat yang Baik (CPOB / GMP) BPOM diintegrasikan dengan Sistem Manajemen K3 PP 50/2012.'
        }
      ]
    },
    {
      category: 'Safety Officer Lapangan',
      prefix: 'Safety Officer',
      sectorName: 'Pengawasan Operasional Lapangan & Konstruksi',
      titles: [
        'Konstruksi Gedung Bertingkat', 'Konstruksi Jalan & Jembatan', 'Kilang Minyak & Petrokimia', 'Pengeboran Migas Lepas Pantai',
        'Pertambangan Batubara Terbuka', 'Pertambangan Bawah Tanah', 'Pabrik Peleburan Smelter Nikel', 'Pabrik Semen & Material Konstruksi',
        'Pembangkit Listrik Tenaga Uap (PLTU)', 'Pembangkit Listrik Tenaga Surya (PLTS)', 'Pabrik Manufaktur Elektronik', 'Galangan Kapal & Dok Perkapalan',
        'Kawasan Pergudangan & Logistik Modern', 'Pusat Distribusi Rantai Dingin (Cold Storage)', 'Proyek Rel Kereta Api Cepat & MRT', 'Pabrik Tekstil, Pewarnaan & Garmen',
        'Instalasi Pipa Gas Transmisi Jarak Jauh', 'Pabrik Cat, Resin & Pelarut Kimia', 'Pekerjaan Perancah Khusus & Scaffolding', 'Fasilitas Pengolahan Limbah Medis B3'
      ]
    },
    {
      category: 'HSE Supervisor Lapangan',
      prefix: 'HSE Supervisor',
      sectorName: 'Koordinasi Pengawasan & Manajemen Izin Kerja',
      titles: [
        'Operasional Pabrik Manufaktur', 'Proyek EPC Skala Besar', 'Fasilitas Rig Pengeboran', 'Operasi Hauling Tambang',
        'Terminal Depo Bahan Bakar', 'Operasi Pabrik Kelapa Sawit', 'Kawasan Industri Terpadu', 'Fasilitas Pembangkit Listrik PLTG',
        'Fabrikasi Struktur Baja Berat', 'Terminal Curah Pelabuhan', 'Operasi Smelter Tembaga', 'Pabrik Kimia Pupuk Amonia',
        'Pekerjaan Jembatan Terowongan', 'Operasional Rumah Sakit', 'Fasilitas Pengolahan Pangan Massal', 'Proyek Transmisi SUTET',
        'Galangan Modul Lepas Pantai', 'Pusat Logistik Berikat', 'Armada Transportasi Kimia B3', 'Laboratorium Riset Industri'
      ]
    },
    {
      category: 'HSE Manager Korporat',
      prefix: 'HSE Manager',
      sectorName: 'Manajemen Strategis K3 & Kepatuhan Korporasi',
      titles: [
        'Korporasi Multinasional Global', 'Kontraktor EPC Nasional', 'Holding Agribisnis Perkebunan', 'Korporasi Pertambangan Terintegrasi',
        'Perusahaan Minyak & Gas Nasional', 'Pengelola Kawasan Industri', 'Manufaktur Otomotif Global', 'Perusahaan Logistik Rantai Pasok',
        'Grup Layanan Kesehatan Medis', 'Pembangkit Listrik Swasta IPP', 'Perusahaan Farmasi Terkemuka', 'Perusahaan Konstruksi BUMN',
        'Perusahaan Petrokimia Khusus', 'Perusahaan Galangan Maritim', 'Perusahaan Infrastruktur Digital', 'Perusahaan Konsumen & Pangan',
        'Perusahaan Maskapai Penerbangan', 'Perusahaan Distribusi Energi BBM', 'Perusahaan Semen Konstruksi', 'Perusahaan Pengolahan Limbah Lingkungan'
      ]
    },
    {
      category: 'Auditor K3 & Kepatuhan',
      prefix: 'Auditor K3',
      sectorName: 'Audit Sistem Manajemen & Kepatuhan Hukum',
      titles: [
        'Auditor Eksternal SMK3 Kemnaker RI', 'Lead Auditor ISO 45001 Terakreditasi', 'Auditor Internal SMK3 Korporasi',
        'Auditor Keselamatan Tambang SMKP', 'Auditor CSMS Kualifikasi Kontraktor', 'Auditor K3 Konstruksi SMKK PUPR',
        'Auditor Kepatuhan Hukum Ketenagakerjaan', 'Auditor Sistem Proteksi Kebakaran Gedung', 'Auditor K3 Fasilitas Rumah Sakit K3RS',
        'Auditor Higiene Industri Lingkungan Kerja', 'Auditor K3 Sektor Minyak dan Gas', 'Auditor Sistem Manajemen QHSE Terpadu',
        'Auditor Keselamatan Proses Kimia', 'Auditor K3 Rantai Pasok Vendor', 'Auditor K3 Fasilitas Maritim Pelabuhan',
        'Auditor K3 Pergudangan Distribusi', 'Auditor K3 Industri Sanitasi Pangan', 'Auditor Ergonomi Stasiun Kerja',
        'Auditor Kesiapsiagaan Tanggap Darurat', 'Lead Assessor Tempat Uji Kompetensi K3'
      ]
    },
    {
      category: 'Tenaga Medis Kesehatan Kerja',
      prefix: 'Tenaga Medis K3',
      sectorName: 'Pelayanan Kesehatan Kerja & Ergonomi Medis',
      titles: [
        'Dokter Perusahaan Bersertifikat Hiperkes', 'Dokter Spesialis Okupasi SpOk Korporasi', 'Paramedis Perusahaan Hiperkes',
        'Koordinator Program Fit to Work MCU', 'Fasilitator Kesehatan Kerja Ergonomi', 'Petugas P3K Terlatih Tempat Kerja',
        'Paramedis Lapangan Remote Site', 'Spesialis Pengendalian PAK', 'Konselor Kesehatan Mental Kerja',
        'Koordinator Pencegahan TBC di Pabrik', 'Auditor Higiene Sanitasi Kantin Pekerja', 'Spesialis Audiometri Konservasi Pendengaran',
        'Spesialis Spirometri Fungsi Paru', 'Spesialis Toksikologi Industri Biological', 'Koordinator Evakuasi Medis Medevac',
        'Dokter Penguji Kesehatan Tenaga Kerja', 'Petugas Manajemen Fatigue Kelelahan', 'Konsultan Ergonomi Stasiun Kerja Medis',
        'Spesialis Rehabilitasi Pasca Kecelakaan', 'Koordinator Program Wellness Kebugaran'
      ]
    },
    {
      category: 'Teknisi K3 Spesialis',
      prefix: 'Teknisi K3',
      sectorName: 'Pemeliharaan & Riksa Uji Teknis K3',
      titles: [
        'Teknisi K3 Listrik Industri', 'Teknisi K3 Ketinggian Rope Access', 'Teknisi K3 Scaffolding Perancah',
        'Teknisi K3 Ruang Terbatas Gas Tester', 'Teknisi K3 Lift dan Eskalator', 'Teknisi K3 Boiler Ketel Uap',
        'Teknisi K3 Bejana Tekan Tangki Timbun', 'Teknisi K3 Sistem APAR Kebakaran', 'Teknisi K3 Sistem Sprinkler Alarm',
        'Teknisi K3 Pengujian NDT Ultrasonik', 'Teknisi K3 Deteksi Gas Kalibrasi', 'Teknisi K3 Mesin Interlock Guarding',
        'Teknisi K3 Penyalur Petir Grounding', 'Teknisi K3 Pompa Pemadam Diesel', 'Teknisi K3 SCBA Breathing Air',
        'Teknisi K3 Uji Emisi Cerobong Pabrik', 'Teknisi K3 Pengukuran Kebisingan Getaran', 'Teknisi K3 Ventilasi Tambang Bawah Tanah',
        'Teknisi K3 Rigging Wire Rope Sling', 'Teknisi K3 Pendingin Amonia Refrigerasi'
      ]
    },
    {
      category: 'Spesialis Higiene Industri',
      prefix: 'Higiene Industri',
      sectorName: 'Pemantauan Faktor Bahaya Fisika Kimia Biologi',
      titles: [
        'Industrial Hygienist Muda HIMU', 'Industrial Hygienist Madya HIMA', 'Industrial Hygienist Utama HIU',
        'Spesialis Pengukuran Debu Aerosol', 'Spesialis Paparan Bahan Kimia Toksik', 'Spesialis Heat Stress Iklim Panas',
        'Spesialis Pengukuran Kebisingan Getaran', 'Spesialis Kualitas Udara Ruangan IAQ', 'Spesialis Pencahayaan Radiasi Non-Pengion',
        'Spesialis Faktor Biologis Biohazard', 'Spesialis Desain Ventilasi Industri LEV', 'Spesialis Pengendalian Bahaya Asbes',
        'Spesialis Pengelolaan Limbah B3 Pabrik', 'Spesialis Pengendalian Emisi Udara Gas', 'Spesialis Pengendalian Pencemaran Air IPAL',
        'Spesialis Pemodelan Dispersi Gas Toksik', 'Spesialis Penilaian Risiko Kesehatan HRA', 'Spesialis Toksikologi Penetapan NAB',
        'Spesialis Penanganan Tumpahan B3 Spill', 'Konsultan Independen Higiene Lingkungan'
      ]
    },
    {
      category: 'Safety Engineer Sektoral',
      prefix: 'Safety Engineer',
      sectorName: 'Rekayasa Desain Keselamatan & Process Safety',
      titles: [
        'Safety Engineer Proyek Konstruksi Sipil', 'Process Safety Engineer Pabrik Petrokimia', 'Safety Engineer Kilang Minyak Gas',
        'Safety Engineer Anjungan Lepas Pantai', 'Safety Engineer Pembangkit Listrik Termal', 'Safety Engineer Energi Terbarukan PLTS',
        'Safety Engineer Manufaktur Otomotif', 'Safety Engineer Smelter Metalurgi', 'Safety Engineer Sistem Perpipaan Gas Tekanan',
        'Safety Engineer Industri Dirgantara', 'Safety Engineer Galangan Kapal Maritim', 'Safety Engineer Industri Semen Pabrik',
        'Safety Engineer Sistem Proteksi Api Terpadu', 'Safety Engineer Pemanfaatan Radiasi Nuklir', 'Safety Engineer Otomasi Robotika Industri',
        'Safety Engineer Laboratorium Bio Safety L3', 'Safety Engineer Transportasi Rel Kereta', 'Safety Engineer Struktur Tahan Gempa',
        'Safety Engineer Proyek Terowongan Tambang', 'Senior Safety Risk Consulting Engineer'
      ]
    },
    {
      category: 'Konsultan & Asesor K3',
      prefix: 'Konsultan K3',
      sectorName: 'Konsultansi Strategis & Asesmen Sertifikasi',
      titles: [
        'Konsultan Pendampingan Sertifikasi SMK3 PP 50', 'Konsultan Sistem Manajemen ISO 45001 Terpadu', 'Konsultan CSMS Kontraktor Prakualifikasi',
        'Konsultan Kajian Hazop & Process Safety', 'Konsultan Desain Proteksi Kebakaran Gedung', 'Konsultan Penyusunan HIRADC & Risk Register',
        'Konsultan Studi Ergonomi Industri Kerja', 'Konsultan Pengukuran Higiene Lingkungan Kerja', 'Konsultan Safety Leadership & Budaya K3',
        'Konsultan Safety Case Fasilitas Migas', 'Asesor Kompetensi Profesi K3 BNSP', 'Master Trainer & Instruktur Pembinaan K3',
        'Fasilitator Workshop Investigasi Insiden', 'Konsultan Pengelolaan B3 & Limbah Medis', 'Konsultan Rencana Tanggap Darurat Bencana',
        'Konsultan Mitigasi Bahaya Ledakan Debu ATEX', 'Konsultan Audit Kepatuhan Regulasi Ketenagakerjaan', 'Konsultan Penataan Sistem LOTO Kelistrikan',
        'Konsultan Audit K3 Sektor Rumah Sakit K3RS', 'Senior Advisory HSE Strategic Consultant'
      ]
    }
  ];

  // Process Group 0 (20 items with rich tailored objects)
  for (const item of professionGroups[0].items || []) {
    records.push({
      section: 'profesi',
      slug: item.slug,
      title: item.title,
      metaTitle: `${item.title}: Tugas, Wewenang & Gaji Resmi`,
      description: `Ulasan lengkap ${item.title} di Indonesia: lingkup tugas operasional, wewenang hukum, kisaran gaji industri ${item.salary}, dan syarat penunjukan resmi Kemnaker RI.`,
      answer: `${item.title} adalah tenaga profesional keselamatan dan kesehatan kerja yang ditunjuk oleh Menteri Ketenagakerjaan RI untuk mengawasi ditaatinya norma K3 di tempat kerja, menjabat sebagai pilar P2K3, dan memegang wewenang pengawasan hukum dengan estimasi gaji berkisar antara ${item.salary}.`,
      highlights: [
        `Legalitas: Penunjukan Resmi Kemnaker RI`,
        `Kisaran Gaji: ${item.salary}`,
        'Wewenang: Stop Work Authority & Rekomendasi Manajemen',
        'Jalur Karir: HSE Officer -> Supervisor -> Corporate Manager'
      ],
      blocks: [
        {
          heading: `Peran & Kedudukan Hukum ${item.title}`,
          paragraphs: [
            `${item.title} memegang peran strategis dalam struktur tata kelola keselamatan perusahaan. Posisi ini memiliki tanggung jawab utama untuk ${item.duties}.`,
            'Di Indonesia, keberadaan posisi ini diwajibkan oleh undang-undang bagi perusahaan yang mempekerjakan 100 orang atau lebih, atau memiliki tingkat potensi bahaya tinggi guna memastikan perlindungan tenaga kerja dan aset operasional.'
          ]
        },
        {
          heading: 'Wewenang Resmi & Tanggung Jawab Operasional',
          paragraphs: [
            'Dalam menjalankan fungsinya, pemangku jabatan ini dibekali wewenang normatif berdasarkan regulasi ketenagakerjaan:',
          ],
          bullets: [
            item.authority,
            'Melakukan inspeksi berkala, memverifikasi izin kerja aman (PTW), dan mengawasi kepatuhan APD',
            'Menyusun analisis identifikasi bahaya dan penilaian risiko (HIRADC) bersama tim teknis departemen',
            'Memimpin investigasi kecelakaan kerja (RCA) dan menetapkan tindakan perbaikan korektif (CAPA)',
            'Menyusun dan menyerahkan laporan berkala triwulanan P2K3 kepada Dinas Tenaga Kerja setempat'
          ]
        },
        {
          heading: 'Kisaran Gaji & Prospek Jenjang Karir',
          paragraphs: [
            `Di pasar ketenagakerjaan nasional, kompensasi untuk ${item.title} berada pada rentang ${item.salary} per bulan. Besaran ini bervariasi bergantung pada sektor risiko industri (migas, pertambangan, EPC, manufaktur), lokasi geografis proyek, serta tingkat kepemilikan lisensi spesialis.`,
            'Jenjang karir terbuka luas menuju posisi Manajer HSE Regional, Direktur Operasional QHSSE, maupun konsultan keselamatan kerja independen.'
          ]
        },
        {
          heading: 'Kualifikasi & Persyaratan Penunjukan Resmi',
          paragraphs: [
            'Untuk memperoleh Surat Keputusan Penunjukan (SKP) dan Lisensi Kewenangan dari Kemnaker RI, kandidat dipersyaratkan memiliki ijazah minimal D3/S1 terakreditasi, lulus pembinaan resmi di PJK3 terdaftar (seperti PT Kreasi Ultimate Berjaya), dan diajukan secara resmi oleh perusahaan tempat bertugas.'
          ]
        }
      ],
      faqs: [
        { question: item.faqQ1, answer: item.faqA1 },
        { question: item.faqQ2, answer: item.faqA2 },
        { question: `Berapa lama masa berlaku SKP dan Lisensi ${item.title}?`, answer: 'SKP dan Lisensi Kewenangan Ahli K3 berlaku selama 3 (tiga) tahun dan dapat diperpanjang melalui permohonan resmi ke Kemnaker RI sebelum masa berlaku berakhir.' }
      ],
      related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'panduan/tugas-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker'],
      sources: [officialSources.permen02_1992, officialSources.uu1, officialSources.pp50],
      status: 'published',
      publishedAt: '2026-08-01',
      updatedAt: '2026-09-01',
      indexable: true,
      intent: `profesi ${item.slug} tugas wewenang gaji syarat`,
      primaryKeyword: `profesi ${item.slug.replace(/-/g, ' ')}`,
      searchIntent: `tugas, wewenang hukum, kisaran gaji, dan syarat profesi ${item.title}`,
      intentType: 'informational',
      parentTopic: 'Profesi & Karir K3 Indonesia',
      cannibalizationGroup: 'profesi-ahli-k3',
      contentKind: 'profession',
      primaryCtaText: `Konsultasi Sertifikasi ${item.title}`,
      primaryCtaIntent: 'daftar',
      secondaryCtaText: 'Tanya Syarat & Jadwal Pelatihan',
      secondaryCtaIntent: 'syarat'
    });
  }

  // Process remaining 9 groups (20 titles each = 180 records)
  for (let g = 1; g < professionGroups.length; g++) {
    const grp = professionGroups[g];
    const prefix = grp.prefix || 'Safety Officer';
    const titles = grp.titles || [];

    for (let i = 0; i < titles.length; i++) {
      const titleName = titles[i];
      const fullTitle = `Profesi ${prefix} ${titleName}`;
      const slug = `${prefix.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${titleName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`.replace(/^-|-$/g, '');
      const salaryRange = prefix.includes('Manager')
        ? 'Rp 15.000.000 - Rp 45.000.000'
        : prefix.includes('Supervisor')
        ? 'Rp 8.000.000 - Rp 18.000.000'
        : prefix.includes('Auditor')
        ? 'Rp 10.000.000 - Rp 25.000.000'
        : prefix.includes('Engineer')
        ? 'Rp 9.000.000 - Rp 22.000.000'
        : 'Rp 6.000.000 - Rp 14.000.000';
      const keyword = `profesi ${slug.replace(/-/g, ' ')}`.trim();

      records.push({
        section: 'profesi',
        slug,
        title: fullTitle,
        metaTitle: `${fullTitle}: Tugas, Gaji & Kualifikasi`,
        description: `Profil lengkap ${fullTitle}: ruang lingkup tanggung jawab pekerjaan di sektor ${titleName}, wewenang operasional, estimasi gaji industri ${salaryRange}, dan syarat sertifikasi.`,
        answer: `${fullTitle} adalah peran profesional K3 yang bertugas mengoordinasikan pengawasan standar keselamatan, memastikan kepatuhan prosedur operasional, dan mencegah kecelakaan kerja di bidang ${titleName} dengan kisaran gaji ${salaryRange}.`,
        highlights: [
          `Fokus Bidang: ${titleName}`,
          `Kategori: ${grp.category}`,
          `Estimasi Kompensasi: ${salaryRange}`,
          'Tanggung Jawab: Penerapan SOP, Pengawasan Izin Kerja & Mitigasi Risiko'
        ],
        blocks: [
          {
            heading: `Peran & Tanggung Jawab ${fullTitle}`,
            paragraphs: [
              `Posisi ${fullTitle} memegang peranan krusial dalam menjamin operasional berjalan tanpa insiden (Zero Accident) di sektor ${titleName}. Personel pada posisi ini bertanggung jawab mengidentifikasi bahaya spesifik, memantau penerapan SOP, dan mengawal kepatuhan tim lapangan.`,
              'Koordinasi rutin dijalankan bersama supervisor produksi, divisi rekayasa teknik, dan tim manajemen puncak guna menjamin seluruh aktivitas memenuhi norma keselamatan kerja.'
            ]
          },
          {
            heading: 'Wewenang Operasional & Lingkup Kerja',
            paragraphs: [
              'Tenaga profesional pada jabatan ini berwenang untuk:',
            ],
            bullets: [
              'Menghentikan pekerjaan yang berpotensi bahaya fatalitas (Stop Work Authority) seketika',
              'Memvalidasi kelengkapan izin kerja risiko tinggi (Permit to Work) sebelum aktivitas dimulai',
              'Melakukan inspeksi harian terhadap kondisi alat berat, instalasi teknis, dan alat pelindung diri',
              'Memimpin safety briefing / toolbox meeting dan memberikan edukasi pencegahan bahaya kerja',
              'Menyusun laporan investigasi nearmiss dan kecelakaan kerja serta mengawal tindakan perbaikan (CAPA)'
            ]
          },
          {
            heading: 'Kisaran Gaji & Jenjang Karir Industri',
            paragraphs: [
              `Penghasilan untuk ${fullTitle} di Indonesia berkisar antara ${salaryRange} per bulan, tergantung pada skala proyek, sektor industri, kepemilikan sertifikasi kompetensi BNSP/Kemnaker, dan pengalaman lapangan.`,
              'Peluang karir sangat terbuka untuk meningkat ke jenjang Manajer K3 Korporat atau Konsultan Senior Keselamatan Industri.'
            ]
          },
          {
            heading: 'Persyaratan Kualifikasi & Jalur Sertifikasi',
            paragraphs: [
              'Kandidat umumnya dipersyaratkan memiliki latar belakang pendidikan formal yang sesuai (SLTA/D3/S1 teknik atau K3), sertifikat pembinaan resmi Ahli K3 Umum Kemnaker RI atau sertifikat kompetensi BNSP terkait, serta kepemimpinan komunikasi keselamatan yang persuasif.'
            ]
          }
        ],
        faqs: [
          { question: `Sertifikasi apa yang paling dibutuhkan untuk posisi ${fullTitle}?`, answer: `Sertifikasi yang sangat direkomendasikan mencakup Ahli K3 Umum Kemnaker RI, sertifikat kompetensi pengawas BNSP, serta sertifikasi teknis spesifik di bidang ${titleName}.` },
          { question: `Apakah posisi ${fullTitle} memiliki wewenang menghentikan pekerjaan darurat?`, answer: 'Ya, seluruh personel keselamatan memiliki Stop Work Authority apabila menemukan kondisi tidak aman kritis yang membahayakan jiwa pekerja.' },
          { question: `Bagaimana prospek karir ${fullTitle} di Indonesia?`, answer: 'Sangat prospektif seiring meningkatnya regulasi wajib kepatuhan SMK3 di sektor industri manufaktur, pertambangan, energi, dan konstruksi infrastruktur nasional.' }
        ],
        related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker', 'jadwal'],
        sources: [officialSources.uu1, officialSources.pp50, officialSources.uu13],
        status: 'published',
        publishedAt: '2026-08-01',
        updatedAt: '2026-09-01',
        indexable: true,
        intent: `profesi ${slug} tugas wewenang gaji kualifikasi`,
        primaryKeyword: keyword,
        searchIntent: `tugas, wewenang, standar gaji, dan kualifikasi profesi ${fullTitle}`,
        intentType: 'informational',
        parentTopic: `Profesi K3 ${grp.category}`,
        cannibalizationGroup: `profesi-${prefix.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        contentKind: 'profession',
        primaryCtaText: `Konsultasi Sertifikasi ${prefix} ${titleName.split('(')[0].trim()}`,
        primaryCtaIntent: 'daftar',
        secondaryCtaText: 'Tanya Jalur Karir & Pelatihan K3',
        secondaryCtaIntent: 'syarat'
      });
    }
  }

  return records;
}

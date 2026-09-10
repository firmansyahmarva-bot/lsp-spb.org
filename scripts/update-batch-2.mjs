import fs from 'fs';
import path from 'path';

const batch2Data = [
  {
    slug: 'k3-kebakaran-kelas-d',
    title: 'Pelatihan Petugas Peran Kebakaran (Kelas D Sertifikasi Kemnaker RI)',
    metaTitle: 'Pelatihan Petugas Peran Kebakaran Kelas D Kemnaker | Biaya & Syarat',
    description: 'Pendaftaran Pelatihan Petugas Peran Kebakaran Kelas D Kemnaker RI durasi 3 Hari (25 JP). Biaya Rp 4.250.000, kuasai APAR, hidran, live fire drill, dan lisensi resmi.',
    answer: 'Pelatihan Petugas Peran Kebakaran (Kelas D Sertifikasi Kemnaker RI) adalah program pembinaan keselamatan kebakaran tingkat dasar berdurasi 25 JP (3 hari kerja) berdasarkan Kepmenaker No. KEP.186/MEN/1999 Lampiran I. Ditujukan bagi personil yang ditunjuk mengidentifikasi potensi bahaya api awal di unit kerjanya, mengoperasikan Alat Pemadam Api Ringan (APAR), menggelar selang hidran gedung, serta memandu evakuasi darurat menuju assembly point.',
    highlights: [
      'Durasi Pembinaan: 25 JP (3 Hari Kerja Intensif)',
      'Landasan Regulasi: Kepmenaker No. KEP.186/MEN/1999 Lampiran I',
      'Output Resmi: Sertifikat Pembinaan & Lisensi Petugas Peran Kebakaran Kemnaker RI (3 Tahun)',
      'Praktik Lapangan: Pemadaman Api Nyata (Live Fire) Media Karung Basah, APAR & Hidran'
    ],
    level: 'Sertifikasi Pembinaan Lisensi Kemnaker RI',
    duration: '25 JP (3 Hari Kerja)',
    method: 'Blended Learning (Sesi Teori Interaktif Virtual + Praktik Lapangan Fire Ground)',
    legalBasis: 'Kepmenaker No. KEP.186/MEN/1999 Lampiran I & Permenaker No. 04/1980',
    targetAudience: [
      'Petugas Peran Kebakaran per Lantai / Area Kerja (Rasio Minimal 2 Orang tiap 25 Pekerja)',
      'Anggota Tim Tanggap Darurat (Emergency Response Team) Pabrik & Gedung Bertingkat',
      'Petugas Keamanan (Security / Satpam), Facility Management & General Affair',
      'Karyawan Operasional di Area dengan Potensi Bahaya Kebakaran Ringan hingga Sedang'
    ],
    prerequisites: [
      'Scan KTP yang masih berlaku',
      'Scan Ijazah pendidikan formal minimal SMP atau SMA sederajat',
      'Surat Keterangan Sehat dari dokter (bebas riwayat asma akut dan penyakit jantung)',
      'Surat Penugasan Resmi dari manajemen perusahaan pengutus',
      'Pas foto formal latar belakang merah ukuran 3x4 dan 4x6 (masing-masing 3 lembar)'
    ],
    certificationOutput: [
      'Sertifikat Pembinaan Petugas Peran Kebakaran Kelas D dari Kementerian Ketenagakerjaan RI',
      'Surat Keputusan Penunjukan (SKP) Petugas Kebakaran dari Menaker RI',
      'Kartu Lisensi Kewenangan K3 Penanggulangan Kebakaran Kelas D Masa Berlaku 3 Tahun',
      'Surat Keterangan Lulus (SKL) resmi untuk verifikasi audit segera'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Fenomena Api, Teori Kebakaran & Peraturan Perundangan K3 Kebakaran',
        topics: [
          'Dasar-dasar K3 dan Pokok Kebijakan Nasional Penanggulangan Kebakaran',
          'Kepmenaker No. KEP.186/MEN/1999 tentang Unit Penanggulangan Kebakaran',
          'Teori Segitiga Api (Fire Triangle) dan Tetrahidron Api',
          'Klasifikasi Kebakaran Nasional (Kelas A, B, C, D) dan Pemilihan Media Pemadam'
        ],
        hours: '8 JP'
      },
      {
        module: 'Modul 02: Karakteristik APAR, Sistem Proteksi Pasif & Evakuasi Darurat',
        topics: [
          'Syarat Pemasangan dan Pemeliharaan APAR sesuai Permenaker No. PER.04/MEN/1980',
          'Jenis-jenis media APAR: Dry Chemical Powder, CO2, Foam AFFF, dan Clean Agent',
          'Pemeriksaan visual berkala, pengecekan manometer, dan penempatan tabung pemadam',
          'Prosedur tanggap darurat kebakaran dan tata cara pemanduan evakuasi penghuni'
        ],
        hours: '8 JP'
      },
      {
        module: 'Modul 03: Praktik Lapangan Pemadaman Api & Evaluasi Evaluasi Kemnaker',
        topics: [
          'Teknik pemadaman api konvensional menggunakan karung goni basah (smothering)',
          'Praktik teknik PASS (Pull, Aim, Squeeze, Sweep) pemadaman api dengan berbagai jenis APAR',
          'Pengenalan komponen instalasi hidran gedung dan teknik penggelaran selang (hose laying)',
          'Ujian teori komprehensif dan evaluasi kelulusan Kemnaker RI'
        ],
        hours: '9 JP'
      }
    ],
    priceInfo: 'Investasi Rp 4.250.000 per peserta (Paket Public Blended Learning). Biaya sudah termasuk sertifikat & lisensi Kemnaker RI, modul pelatihan, seragam safety polo shirt, konsumsi praktikum fire ground, dan pendampingan pengurusan berkas.',
    blocks: [
      {
        heading: 'Kewajiban Perusahaan Menunjuk Petugas Peran Kebakaran Kelas D',
        paragraphs: [
          'Kepmenaker No. KEP.186/MEN/1999 menetapkan kewajiban setiap tempat kerja untuk membentuk Unit Penanggulangan Kebakaran. Pada tingkat pertama, pengurus wajib menunjuk Petugas Peran Kebakaran (Kelas D) dengan rasio minimal 2 (dua) orang untuk setiap 25 (dua puluh lima) orang tenaga kerja.',
          'Petugas peran kebakaran bertindak sebagai ujung tombak penyelamatan pertama di lantai atau seksi kerjanya saat tanda alarm berbunyi, memastikan seluruh personil dievakuasi tanpa panik, dan melakukan pemadaman api dini menggunakan APAR sebelum api membesar menjadi bencana fatal.'
        ]
      },
      {
        heading: 'Kurikulum Resmi 25 Jam Pelajaran & Praktik Fire Ground Nyata',
        paragraphs: [
          'Selama 3 hari pembinaan intensif, peserta dibekali pengetahuan komprehensif mengenai sifat bahan mudah menyala, bahaya ledakan gas, tata letak jalur evakuasi bebas hambatan, serta simulasi pemadaman langsung di fasilitas fire ground terakreditasi.',
          'Peserta tidak hanya menghafal teori keselamatan, melainkan memegang langsung tabung APAR bertekanan tinggi untuk memadamkan kobaran api bahan padat dan cair yang disimulasikan sesuai kondisi darurat industri riil.'
        ],
        bullets: [
          'Penguasaan anatomi APAR: handle, safety pin, nozzle, discharge hose, dan pressure gauge',
          'Keterampilan pemadaman api metode pendinginan (cooling), penyelimutan (smothering), dan pemutusan rantai kimia',
          'Pemeriksaan fisik sarana evakuasi: pintu darurat, tangga darurat, penunjuk arah EXIT, dan lampu darurat',
          'Simulasi penghitungan jumlah pekerja di titik kumpul (roll call head-count) pasca evakuasi'
        ]
      },
      {
        heading: 'Legalitas Lisensi Kemnaker RI & Masa Berlaku 3 Tahun',
        paragraphs: [
          'Lulusan pembinaan mendapatkan Kartu Lisensi Kewenangan K3 Penanggulangan Kebakaran Kelas D resmi dari Kementerian Ketenagakerjaan RI dengan masa berlaku 3 tahun.',
          'Lisensi ini menjadi dokumen kepatuhan primer saat perusahaan menjalani audit Sistem Manajemen K3 (SMK3 PP 50/2012) kriteria 6.7 (Kesiapan Menghadapi Keadaan Darurat) maupun audit pemenuhan standar Disnaker setempat.'
        ]
      },
      {
        heading: 'Pilihan Penyelenggaraan: Public Training & In-House On-Site',
        paragraphs: [
          'PT Kreasi Ultimate Berjaya menyelenggarakan kelas Public Training setiap bulan. Untuk korporasi dengan jumlah personel banyak, kami melayani In-House Training langsung di lokasi pabrik atau gedung kantor Anda dengan fasilitas simulasi mobil pemadam dan peralatan hidran aktual perusahaan.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Berapa rasio kebutuhan Petugas Peran Kebakaran Kelas D di perusahaan?',
        answer: 'Sesuai Kepmenaker 186/1999 Pasal 6, rasio petugas peran kebakaran Kelas D adalah sekurang-kurangnya 2 (dua) orang untuk setiap jumlah tenaga kerja 25 (dua puluh lima) orang pada tempat kerja dengan tingkat potensi bahaya kebakaran ringan dan sedang I.'
      },
      {
        question: 'Berapa biaya resmi pelatihan Petugas Peran Kebakaran Kelas D?',
        answer: 'Biaya resmi pelatihan adalah Rp 4.250.000 per peserta untuk program Public Training durasi 25 JP (3 Hari). Sudah mencakup sertifikat & lisensi Kemnaker RI, praktik fire ground, modul, dan seragam. Untuk kelas in-house corporate tersedia penawaran paket khusus.'
      },
      {
        question: 'Apakah lulusan SMP/SMA dapat mengikuti pelatihan Kelas D?',
        answer: 'Ya, persyaratan pendidikan formal minimal untuk calon Petugas Peran Kebakaran Kelas D adalah SMP atau SMA sederajat yang berbadan sehat dan ditugaskan oleh pimpinan perusahaan.'
      },
      {
        question: 'Apa perbedaan tugas Petugas Peran Kebakaran Kelas D dengan Regu Kelas C?',
        answer: 'Petugas Kelas D bertugas memadamkan api awal menggunakan APAR dan memandu evakuasi rekan kerja per lantai. Sedangkan Regu Kelas C adalah regu pemadam inti terlatih (fire brigade) yang menggunakan selang hidran bertekanan tinggi dan alat bantu pernapasan SCBA.'
      },
      {
        question: 'Berapa lama masa berlaku lisensi Petugas Peran Kebakaran Kemnaker RI?',
        answer: 'Lisensi Petugas Peran Kebakaran Kelas D berlaku selama 3 (tiga) tahun dan dapat diperpanjang melalui PJK3 resmi dengan melampirkan laporan keaktifan tugas penanggulangan kebakaran di tempat kerja.'
      }
    ],
    related: [
      'pelatihan/k3-kebakaran-kelas-c',
      'pelatihan/k3-kebakaran-kelas-b',
      'pelatihan/k3-kebakaran-kelas-a',
      'pelatihan/pelatihan-inspeksi-pemeliharaan-apar-tabung-pemadam-api-ringan',
      'panduan/biaya-pelatihan-k3-kebakaran',
      'panduan/sop-pemadaman-kebakaran-menggunakan-apar-metode-pass-pull-aim-squeeze-sweep',
      'profesi/ahli-k3-kebakaran',
      'regulasi-k3/kepmenaker-186-1999-unit-penanggulangan-kebakaran'
    ],
    sources: [
      {
        label: 'Kepmenaker No. KEP.186/MEN/1999 tentang Unit Penanggulangan Kebakaran di Tempat Kerja',
        url: 'https://jdih.kemnaker.go.id/katalog/kepmenaker-186-1999',
        publisher: 'Kementerian Ketenagakerjaan RI'
      },
      {
        label: 'Permenaker No. PER.04/MEN/1980 tentang Syarat-Syarat Pemasangan dan Pemeliharaan APAR',
        url: 'https://jdih.kemnaker.go.id/katalog/permenaker-04-1980',
        publisher: 'Kementerian Tenaga Kerja dan Transmigrasi RI'
      },
      {
        label: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja',
        url: 'https://jdih.kemnaker.go.id/katalog/uu-1-1970',
        publisher: 'Pemerintah RI / Lembaran Negara RI'
      }
    ],
    primaryKeyword: 'pelatihan petugas peran kebakaran (kelas d sertifikasi kemnaker ri)',
    searchIntent: 'biaya jadwal silabus dan pendaftaran pelatihan petugas peran kebakaran kelas d kemnaker ri',
    primaryCtaText: 'Daftar Kelas D Kebakaran 2026',
    image: '/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-1.webp',
    imageAlt: 'Instruktur K3 memberikan pengarahan keselamatan sebelum simulasi pemadaman api APAR di lapangan',
    gallery: [
      { src: '/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-1.webp', alt: 'Briefing pekerja beralat pelindung diri sebelum simulasi kebakaran' },
      { src: '/images/content/foto-bersama-pekerja-di-fasilitas-industri-1.webp', alt: 'Dokumentasi peserta pelatihan penanggulangan kebakaran di area industri' },
      { src: '/images/content/peserta-mengikuti-pelatihan-di-kelas-1.webp', alt: 'Sesi penyampaian teori segitiga api dan regulasi Permenaker 04/1980' },
      { src: '/images/content/asesmen-individu-peserta-di-ruang-kelas-1.webp', alt: 'Evaluasi tertulis kompetensi petugas peran kebakaran Kemnaker RI' }
    ]
  },
  {
    slug: 'k3-kebakaran-kelas-c',
    title: 'Pelatihan Regu Penanggulangan Kebakaran (Kelas C Sertifikasi Kemnaker)',
    metaTitle: 'Pelatihan Regu Kebakaran Kelas C Kemnaker RI | Silabus & Biaya',
    description: 'Pelatihan Regu Penanggulangan Kebakaran Kelas C Kemnaker durasi 60 JP (6 Hari). Biaya Rp 6.500.000, kuasai fire brigade, SCBA, smoke chamber, dan hidran bertekanan.',
    answer: 'Pelatihan Regu Penanggulangan Kebakaran (Kelas C Sertifikasi Kemnaker RI) adalah program pembinaan tingkat regu pemadam inti berdurasi 60 JP (6 hari kerja) berdasarkan Kepmenaker No. KEP.186/MEN/1999 Lampiran II. Pelatihan ini melatih tim fire brigade industri mengoperasikan peralatan pemadam ofensif, menggelar formasi hidran tekanan tinggi, menggunakan alat bantu pernapasan SCBA (Self-Contained Breathing Apparatus), serta melakukan teknik pencarian dan penyelamatan korban di ruang tertutup berasap (smoke chamber).',
    highlights: [
      'Durasi Pembinaan: 60 JP (6 Hari Kerja Intensif)',
      'Landasan Regulasi: Kepmenaker No. KEP.186/MEN/1999 Lampiran II',
      'Output Resmi: Sertifikat Pembinaan & Lisensi Regu Penanggulangan Kebakaran Kemnaker RI',
      'Praktik Khusus: Formasi Hidran Industri, Penggunaan SCBA & Simulasi Smoke Chamber Rescue'
    ],
    level: 'Sertifikasi Pembinaan Lisensi Kemnaker RI',
    duration: '60 JP (6 Hari Kerja)',
    method: 'Blended Learning (Teori Virtual Interaktif + Praktik Lapangan Intensif Fire Ground)',
    legalBasis: 'Kepmenaker No. KEP.186/MEN/1999 Lampiran II & UU No. 1 Tahun 1970',
    targetAudience: [
      'Anggota Regu Pemadam Inti (Fire Brigade) Pabrik, Kilang, Gudang & Pelabuhan',
      'Tim Tanggap Darurat (ERT - Emergency Response Team) Industri Manufaktur & Energi',
      'Petugas Damkar Internal Perusahaan, Teknisi Mekanikal & Plumbing Hydrant',
      'Personel yang Telah Lulus Kelas D dan Disiapkan Menjadi Anggota Regu Pemadam Aktif'
    ],
    prerequisites: [
      'Scan KTP aktif yang masih berlaku',
      'Scan Ijazah pendidikan formal minimal SMA / SMK sederajat',
      'Surat Keterangan Bebas Sakit Jantung, Asma & Paru dari Rumah Sakit / Klinik',
      'Surat Penugasan Resmi dari pimpinan perusahaan',
      'Pas foto formal latar belakang merah 3x4 dan 4x6 (masing-masing 3 lembar)'
    ],
    certificationOutput: [
      'Sertifikat Pembinaan Regu Penanggulangan Kebakaran Kelas C dari Kemnaker RI',
      'Surat Keputusan Penunjukan (SKP) Regu Kebakaran resmi Menaker RI',
      'Kartu Lisensi Kewenangan K3 Kebakaran Kelas C (Masa Berlaku 3 Tahun)',
      'Surat Keterangan Lulus (SKL) resmi untuk verifikasi kerja darurat'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Dinamika Kebakaran Industri, Termodinamika Api & Toksisitas Asap',
        topics: [
          'Flashover, Backdraft, Boiling Liquid Expanding Vapor Explosion (BLEVE)',
          'Bahaya gas beracun hasil kebakaran: Karbon Monoksida (CO), HCN, dan gas asam',
          'Struktur organisasi Regu Penanggulangan Kebakaran industri',
          'Sistem perizinan kerja panas (Hot Work Permit) dan penilaian bahaya api'
        ],
        hours: '15 JP'
      },
      {
        module: 'Modul 02: Sistem Hidran Tekanan Tinggi, Foam System & Pengoperasian SCBA',
        topics: [
          'Karakteristik jaringan pipa hidran halaman, landing valve, dan siamese connection',
          'Pola semprotan air: Jet Stream, Fog Spray, dan Water Curtain pelindung panas',
          'Penggunaan sistem busa (AFFF) untuk kebakaran cairan mudah terbakar (Kelas B)',
          'Anatomi, pemeriksaan tekanan, uji kebocoran, dan prosedur donning-doffing SCBA'
        ],
        hours: '20 JP'
      },
      {
        module: 'Modul 03: Taktik Penyerangan Api Ofensif, Penyelamatan & Praktik Fire Ground',
        topics: [
          'Taktik pemadaman api ofensif vs defensif pada struktur bangunan industri',
          'Teknik pencarian korban (Search and Rescue) di lorong gelap dan ruang berasap tebal',
          'Praktik formasi regu nozzleman, hoseman, valve operator, dan komandan regu',
          'Evaluasi simulasi pemadaman kebakaran nyata dan ujian sertifikasi Kemnaker RI'
        ],
        hours: '25 JP'
      }
    ],
    priceInfo: 'Investasi Rp 6.500.000 per peserta (Paket Public Blended Learning). Biaya sudah termasuk sertifikat & lisensi resmi Kemnaker RI, modul teknis, peminjaman SCBA & APD firefighting saat praktik, konsumsi makan siang fire ground, dan seragam polo.',
    blocks: [
      {
        heading: 'Peran Strategis Regu Penanggulangan Kebakaran Kelas C di Tempat Kerja',
        paragraphs: [
          'Kepmenaker No. KEP.186/MEN/1999 mewajibkan pembentukan Regu Penanggulangan Kebakaran (Kelas C) pada setiap unit kerja yang memiliki tingkat potensi bahaya kebakaran sedang II, sedang III, dan berat, atau tempat kerja yang mempekerjakan lebih dari 300 orang.',
          'Berbeda dengan petugas Kelas D yang hanya menangani api permulaan, anggota regu Kelas C adalah pasukan pemadam terdepan perusahaan yang diterjunkan untuk bertempur langsung memadamkan api yang telah membesar, mengoperasikan nozel hidran bertekanan tinggi, dan menyelamatkan korban yang terjebak di dalam bangunan berasap pekat.'
        ]
      },
      {
        heading: 'Pelatihan Fisik, Formasi Nozzleman & Keterampilan SCBA Berstandar',
        paragraphs: [
          'Peserta dilatih dalam disiplin regu yang ketat untuk menguasai manuver penggelaran selang hidran bertekanan 7 hingga 10 bar. Formasi regu mencakup pembagian peran krusial antara Komandan Regu (Incident Leader), Nozzleman pemegang tombak semprotan, Backup Nozzleman penyerap gaya recoil, dan Valveman pengatur pasokan air.',
          'Pemanfaatan alat bantu pernapasan mandiri (SCBA) dipelajari secara menyeluruh, mulai dari kalkulasi konsumsi udara bertekanan 300 bar, pengetesan alarm tekanan rendah, hingga teknik pergerakan menyusuri dinding di ruang berasap (blind search crawl).'
        ],
        bullets: [
          'Kombinasi formasi pemadaman 1 selang dan 2 selang dengan pola water shield',
          'Aplikasi busa mekanik pemadam (Foam System) untuk proteksi tangki BBM dan pelarut kimia',
          'Metode evakuasi korban darurat: fireman carry, blanket drag, dan two-man arm carry',
          'Prosedur pendinginan bejana bertekanan untuk mencegah ledakan dahsyat BLEVE'
        ]
      },
      {
        heading: 'Penerbitan Lisensi Resmi Kemnaker RI',
        paragraphs: [
          'Peserta yang lulus seluruh rangkaian ujian teori dan uji kecakapan fisik fire ground berhak menerima Lisensi Regu Penanggulangan Kebakaran Kelas C resmi Kemnaker RI dengan masa berlaku 3 tahun. Legalitas ini membuktikan kesiapsiagaan darurat industri berstandar nasional.'
        ]
      },
      {
        heading: 'Pilihan Kelas: Regular Public & In-House Fire Ground',
        paragraphs: [
          'PT Kreasi Ultimate Berjaya menyelenggarakan kelas publik setiap bulan dengan lokasi praktikum di fasilitas fire ground terlengkap. Kami juga melayani In-House Training langsung di instalasi hidran dan unit pemadam perusahaan klien.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Siapa yang wajib mengikuti pelatihan Kebakaran Kelas C?',
        answer: 'Personel yang ditugaskan sebagai anggota regu pemadam kebakaran industri (fire brigade), teknisi fasilitas pabrik, tim tanggap darurat, dan satpam di fasilitas berpotensi bahaya kebakaran sedang hingga berat sesuai Kepmenaker 186/1999.'
      },
      {
        question: 'Berapa biaya pelatihan Regu Kebakaran Kelas C Kemnaker?',
        answer: 'Biaya resmi pelatihan adalah Rp 6.500.000 per peserta untuk program Public Training durasi 60 JP (6 Hari). Biaya sudah termasuk sertifikat dan lisensi Kemnaker RI, sewa SCBA, perlengkapan fire ground, modul, dan seragam.'
      },
      {
        question: 'Apakah peserta harus memiliki sertifikat Kelas D sebelum mendaftar Kelas C?',
        answer: 'Sangat disarankan telah memahami materi Kelas D, namun calon peserta dengan pendidikan minimal SMA/SMK dan memiliki kondisi fisik sehat tanpa penyakit pernapasan dapat langsung mendaftar Kelas C dengan penugasan dari perusahaan.'
      },
      {
        question: 'Peralatan apa saja yang dipraktikkan selama pelatihan Kelas C?',
        answer: 'Peserta mempraktikkan pengoperasian hidran halaman dan gedung, berbagai jenis nozzle (smooth bore, variable fog, foam nozzle), tabung SCBA, baju tahan panas (bunker gear), fire blanket, serta simulasi pemadaman di smoke chamber.'
      },
      {
        question: 'Berapa lama lisensi Kebakaran Kelas C berlaku?',
        answer: 'Lisensi Regu Penanggulangan Kebakaran Kelas C berlaku selama 3 (tiga) tahun dan dapat diperpanjang melalui evaluasi berkala PJK3 dan Kemnaker RI.'
      }
    ],
    related: [
      'pelatihan/k3-kebakaran-kelas-d',
      'pelatihan/k3-kebakaran-kelas-b',
      'pelatihan/k3-kebakaran-kelas-a',
      'pelatihan/pelatihan-pengujian-sistem-hydran-kebakaran-pomp-pipa-nozzle',
      'panduan/biaya-pelatihan-k3-kebakaran',
      'panduan/sop-koordinasi-penyerahan-komando-pemadaman-ke-dinas-kebakaran-kota',
      'profesi/ahli-k3-kebakaran',
      'regulasi-k3/kepmenaker-186-1999-unit-penanggulangan-kebakaran'
    ],
    sources: [
      {
        label: 'Kepmenaker No. KEP.186/MEN/1999 tentang Unit Penanggulangan Kebakaran di Tempat Kerja',
        url: 'https://jdih.kemnaker.go.id/katalog/kepmenaker-186-1999',
        publisher: 'Kementerian Ketenagakerjaan RI'
      },
      {
        label: 'SNI 03-1745-2000 Tata Cara Perencanaan dan Pemasangan Sistem Pipa Tegak dan Slang Hidran',
        url: 'https://bsn.go.id',
        publisher: 'Badan Standardisasi Nasional'
      },
      {
        label: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja',
        url: 'https://jdih.kemnaker.go.id/katalog/uu-1-1970',
        publisher: 'Pemerintah RI / Lembaran Negara RI'
      }
    ],
    primaryKeyword: 'pelatihan regu penanggulangan kebakaran (kelas c sertifikasi kemnaker)',
    searchIntent: 'biaya jadwal silabus dan pendaftaran pelatihan regu penanggulangan kebakaran kelas c kemnaker ri',
    primaryCtaText: 'Daftar Kelas C Kebakaran 2026',
    image: '/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-1.webp',
    imageAlt: 'Regu pemadam kebakaran industri berseragam APD lengkap dan SCBA siap melakukan simulasi pemadaman hidran',
    gallery: [
      { src: '/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-1.webp', alt: 'Regu pemadam kebakaran bersiap di fasilitas industri' },
      { src: '/images/content/foto-bersama-pekerja-di-fasilitas-industri-1.webp', alt: 'Foto bersama peserta regu penanggulangan kebakaran kelas C' },
      { src: '/images/content/peserta-mengikuti-pelatihan-di-kelas-1.webp', alt: 'Pembekalan teori taktik pemadaman api ofensif dan manajemen SCBA' },
      { src: '/images/content/asesmen-individu-peserta-di-ruang-kelas-1.webp', alt: 'Ujian teori regulasi keselamatan kebakaran Kemnaker RI' }
    ]
  },
  {
    slug: 'k3-kebakaran-kelas-b',
    title: 'Pelatihan Koordinator Unit Penanggulangan Kebakaran (Kelas B Kemnaker)',
    metaTitle: 'Pelatihan Koordinator Kebakaran Kelas B Kemnaker | Silabus & Biaya',
    description: 'Pelatihan Koordinator Unit Kebakaran Kelas B Kemnaker durasi 60 JP (6 Hari). Biaya Rp 8.500.000, kelola sistem proteksi aktif/pasif gedung dan komando darurat.',
    answer: 'Pelatihan Koordinator Unit Penanggulangan Kebakaran (Kelas B Sertifikasi Kemnaker RI) adalah pembinaan manajemen proteksi kebakaran berdurasi 60 JP (6 hari kerja) sesuai Kepmenaker No. KEP.186/MEN/1999 Lampiran III. Program ini membekali koordinator keselamatan kemampuan memimpin unit penanggulangan kebakaran, mengaudit sistem proteksi aktif/pasif (alarm, hidran, sprinkler, fire damper), merancang skenario latihan tanggap darurat (fire drill), dan mengoordinasikan bantuan dengan dinas damkar eksternal.',
    highlights: [
      'Durasi Pembinaan: 60 JP (6 Hari Kerja Intensif)',
      'Landasan Regulasi: Kepmenaker No. KEP.186/MEN/1999 Lampiran III',
      'Output Resmi: Sertifikat Pembinaan & Lisensi Koordinator Unit Kebakaran Kemnaker RI (3 Tahun)',
      'Fokus Pembelajaran: Incident Command System (ICS), Audit Proteksi & Penyusunan Fire Emergency Plan'
    ],
    level: 'Sertifikasi Pembinaan Lisensi Kemnaker RI',
    duration: '60 JP (6 Hari Kerja)',
    method: 'Blended Learning (Sesi Teori Interaktif + Workshop Manajemen Tanggap Darurat & Audit Fasilitas)',
    legalBasis: 'Kepmenaker No. KEP.186/MEN/1999 Lampiran III & Permenaker No. 02/1983',
    targetAudience: [
      'Koordinator Unit Penanggulangan Kebakaran Perusahaan & Plant Safety Manager',
      'HSE Coordinator, Chief Security, dan Kepala Bagian Pemeliharaan (Maintenance Head)',
      'Building Manager, Property Manager, dan Penanggung Jawab K3 Gedung Bertingkat',
      'Petugas yang Telah Memiliki Lisensi Kelas C atau Berpengalaman dalam Tim Pemadam'
    ],
    prerequisites: [
      'Scan KTP yang masih berlaku',
      'Scan Ijazah pendidikan formal minimal D3 Teknik / S1 semua jurusan atau SMA berpengalaman K3 kebakaran minimal 3 tahun',
      'Surat Keterangan Sehat dari dokter',
      'Surat Penugasan Resmi dari pimpinan perusahaan pengutus',
      'Pas foto formal background merah ukuran 3x4 dan 4x6 (masing-masing 3 lembar)'
    ],
    certificationOutput: [
      'Sertifikat Pembinaan Koordinator Unit Penanggulangan Kebakaran Kelas B dari Kemnaker RI',
      'Surat Keputusan Penunjukan (SKP) Koordinator Unit Kebakaran resmi Menaker RI',
      'Kartu Lisensi Kewenangan K3 Kebakaran Kelas B (Masa Berlaku 3 Tahun)',
      'Surat Keterangan Lulus (SKL) resmi untuk pemenuhan verifikasi audit segera'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Sistem Manajemen Proteksi Kebakaran Gedung & Industri',
        topics: [
          'Kebijakan nasional dan kerangka hukum Kepmenaker 186/1999 Lampiran III',
          'Pemeriksaan kepatuhan sistem proteksi pasif: ketahanan api struktur, kompartemen, dan fire stop',
          'Sistem proteksi aktif: instalasi alarm otomatis, sprinkler, hidran, dan pemadam khusus gas',
          'Analisis bahaya kebakaran spesifik pada area produksi, gudang penyimpanan, dan ruang server'
        ],
        hours: '15 JP'
      },
      {
        module: 'Modul 02: Incident Command System (ICS) & Manajemen Tanggap Darurat',
        topics: [
          'Struktur komando darurat: Incident Commander, Operasi, Perencanaan, Logistik, Keuangan',
          'Prosedur komunikasi krisis dan penyerahan komando ke Dinas Pemadam Kebakaran Kota',
          'Penyusunan Rencana Tindakan Darurat Kebakaran (Fire Emergency Plan - FEP)',
          'Strategi perancangan skenario latihan kebakaran (fire drill table-top dan full-scale)'
        ],
        hours: '20 JP'
      },
      {
        module: 'Modul 03: Teknik Audit Sarana Proteksi Kebakaran, Investigasi & Evaluasi',
        topics: [
          'Penyusunan checklist inspeksi berkala seluruh instalasi pemadam kebakaran gedung',
          'Metodologi investigasi penyebab kebakaran industri dan perhitungan estimasi kerugian aset',
          'Penyusunan laporan tahunan unit penanggulangan kebakaran untuk pimpinan perusahaan',
          'Ujian evaluasi tertulis dan verifikasi kompetensi Kemnaker RI'
        ],
        hours: '25 JP'
      }
    ],
    priceInfo: 'Investasi Rp 8.500.000 per peserta (Paket Public Blended Learning). Biaya sudah termasuk sertifikat resmi & lisensi Kemnaker RI, modul panduan koordinator, template dokumen FEP, konsumsi, dan bimbingan sampai lulus.',
    blocks: [
      {
        heading: 'Peran Krusial Koordinator Unit Kebakaran Kelas B di Manajemen Perusahaan',
        paragraphs: [
          'Berdasarkan Kepmenaker No. KEP.186/MEN/1999 Pasal 7, perusahaan wajib menunjuk sekurang-kurangnya 1 (satu) orang Koordinator Unit Penanggulangan Kebakaran (Kelas B) untuk setiap 100 orang pekerja pada potensi bahaya ringan/sedang I, atau untuk setiap 50 orang pekerja pada potensi bahaya sedang II ke atas.',
          'Koordinator Kelas B memegang kendali strategis dan operasional dalam memimpin seluruh regu pemadam kebakaran, mengawasi ketersediaan air pasokan hidran, memastikan alarm kebakaran berfungsi 24 jam tanpa malfungsi, serta memegang tongkat komando saat insiden kebakaran besar melanda tempat kerja.'
        ]
      },
      {
        heading: 'Penguasaan Incident Command System (ICS) & Mitigasi Risiko Kebakaran',
        paragraphs: [
          'Koordinator dilatih menerapkan Incident Command System (ICS) berstandar internasional yang memungkinkan integrasi tanpa celah antara regu pemadam internal perusahaan dengan Dinas Pemadam Kebakaran pemerintah maupun tim medis luar.',
          'Melalui studi kasus manajemen kebakaran kompleks, peserta dilatih membuat keputusan taktis cepat: kapan memerintahkan penyerangan agresif, kapan harus mengisolasi area, dan kapan memerintahkan evakuasi total untuk menyelamatkan jiwa personil.'
        ],
        bullets: [
          'Penyusunan skenario latihan evakuasi gedung bertingkat tanpa mengganggu operasional vital',
          'Audit kelaikan fungsi pompa kebakaran (Fire Pump Annual Flow Test) dan sprinkler otomatis',
          'Manajemen sistem proteksi clean agent (FM-200 / Novec) untuk fasilitas data center dan kontrol elektrik',
          'Penyusunan laporan evaluasi drill dan perumusan tindakan korektif pasca latihan'
        ]
      },
      {
        heading: 'Penerbitan SKP & Lisensi Kemnaker RI',
        paragraphs: [
          'Setelah lulus ujian evaluasi dari penguji Direktorat Bina Pengawasan Ketenagakerjaan Kemnaker RI, peserta menerima SKP dan Kartu Lisensi Koordinator Unit Penanggulangan Kebakaran Kelas B masa berlaku 3 tahun yang diakui secara legal di seluruh wilayah hukum Republik Indonesia.'
        ]
      },
      {
        heading: 'Skema Kelas Public & Corporate In-House Session',
        paragraphs: [
          'Kami menyelenggarakan Public Training Kelas B setiap bulan secara blended learning. Untuk pengelola kawasan industri, rumah sakit, dan gedung perkantoran terpadu, kami menyediakan In-House Training dengan modul yang diadaptasi pada karakteristik arsitektur bangunan Anda.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Kapan perusahaan wajib menunjuk Koordinator Kebakaran Kelas B?',
        answer: 'Sesuai Kepmenaker 186/1999 Pasal 7, penunjukan Koordinator Kelas B wajib dilakukan pada perusahaan dengan potensi bahaya ringan/sedang I dengan jumlah tenaga kerja 100 orang atau lebih, atau potensi bahaya sedang II, sedang III, dan berat dengan minimal 50 orang pekerja.'
      },
      {
        question: 'Berapa biaya resmi pelatihan Koordinator Kebakaran Kelas B Kemnaker?',
        answer: 'Biaya resmi pelatihan adalah Rp 8.500.000 per peserta untuk program Public Training durasi 60 JP (6 Hari). Sudah mencakup sertifikat & lisensi resmi Kemnaker RI, modul, workbook FEP, konsumsi, dan pendampingan ujian.'
      },
      {
        question: 'Apa syarat pendidikan minimal untuk mendaftar Kelas B?',
        answer: 'Calon peserta dipersyaratkan memiliki pendidikan formal minimal D3 Teknik atau S1 semua jurusan, atau lulusan SMA sederajat yang telah memiliki pengalaman kerja di bidang K3 kebakaran minimal 3 tahun.'
      },
      {
        question: 'Apa perbedaan mendasar antara Kelas B dan Kelas A Kebakaran?',
        answer: 'Kelas B berfokus pada koordinasi operasional regu pemadam, manajemen tanggap darurat, dan audit rutin fasilitas. Sedangkan Kelas A adalah Ahli K3 Spesialis Kebakaran yang mendalami rekayasa desain proteksi kebakaran, perhitungan hidraulika pompa, dan audit kepatuhan regulasi tingkat lanjut.'
      },
      {
        question: 'Apakah Koordinator Kelas B berhak menandatangani dokumen FEP perusahaan?',
        answer: 'Ya, Koordinator Kelas B berwenang menyusun dan menandatangani dokumen Rencana Tanggap Darurat Kebakaran (Fire Emergency Plan) internal perusahaan bersama pimpinan P2K3.'
      }
    ],
    related: [
      'pelatihan/k3-kebakaran-kelas-d',
      'pelatihan/k3-kebakaran-kelas-c',
      'pelatihan/k3-kebakaran-kelas-a',
      'pelatihan/pelatihan-penyusunan-dokumen-fire-emergency-plan-fep-gedung',
      'panduan/biaya-pelatihan-k3-kebakaran',
      'panduan/sop-koordinasi-penyerahan-komando-pemadaman-ke-dinas-kebakaran-kota',
      'profesi/ahli-k3-kebakaran',
      'regulasi-k3/kepmenaker-186-1999-unit-penanggulangan-kebakaran'
    ],
    sources: [
      {
        label: 'Kepmenaker No. KEP.186/MEN/1999 tentang Unit Penanggulangan Kebakaran di Tempat Kerja',
        url: 'https://jdih.kemnaker.go.id/katalog/kepmenaker-186-1999',
        publisher: 'Kementerian Ketenagakerjaan RI'
      },
      {
        label: 'Permenaker No. PER.02/MEN/1983 tentang Instalasi Alarm Kebakaran Otomatik',
        url: 'https://jdih.kemnaker.go.id/katalog/permenaker-02-1983',
        publisher: 'Kementerian Tenaga Kerja RI'
      },
      {
        label: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja',
        url: 'https://jdih.kemnaker.go.id/katalog/uu-1-1970',
        publisher: 'Pemerintah RI / Lembaran Negara RI'
      }
    ],
    primaryKeyword: 'pelatihan koordinator unit penanggulangan kebakaran (kelas b kemnaker)',
    searchIntent: 'biaya jadwal silabus dan pendaftaran pelatihan koordinator unit kebakaran kelas b kemnaker ri',
    primaryCtaText: 'Daftar Kelas B Kebakaran 2026',
    image: '/images/content/diskusi-instruktur-dan-peserta-di-ruang-seminar-1.webp',
    imageAlt: 'Instruktur dan peserta berdiskusi merumuskan struktur Incident Command System tanggap darurat kebakaran di ruang kelas',
    gallery: [
      { src: '/images/content/diskusi-instruktur-dan-peserta-di-ruang-seminar-1.webp', alt: 'Diskusi instruktur dan peserta mengenai Incident Command System' },
      { src: '/images/content/peserta-menyimak-presentasi-di-ruang-kelas-1.webp', alt: 'Pemaparan modul audit sistem proteksi kebakaran gedung bertingkat' },
      { src: '/images/content/diskusi-kelompok-dalam-sesi-kelas-1.webp', alt: 'Workshop penyusunan dokumen Fire Emergency Plan' },
      { src: '/images/content/asesmen-individu-dengan-pengisian-dokumen-1.webp', alt: 'Evaluasi berkas rencana kontinjensi kebakaran industri' }
    ]
  },
  {
    slug: 'k3-kebakaran-kelas-a',
    title: 'Pelatihan Ahli K3 Spesialis Penanggulangan Kebakaran (Kelas A Kemnaker)',
    metaTitle: 'Pelatihan Ahli K3 Spesialis Kebakaran Kelas A Kemnaker | Biaya & Syarat',
    description: 'Pelatihan Ahli K3 Spesialis Penanggulangan Kebakaran Kelas A Kemnaker durasi 140 JP (17 Hari). Biaya Rp 15.000.000, kalkulasi hidraulika, audit proteksi, dan SKP Menteri.',
    answer: 'Pelatihan Ahli K3 Spesialis Penanggulangan Kebakaran (Kelas A Sertifikasi Kemnaker RI) adalah pembinaan tingkat tertinggi spesialisasi keselamatan kebakaran berdurasi 140 JP (17 hari kerja) sesuai Kepmenaker No. KEP.186/MEN/1999 Lampiran IV. Peserta dibekali keahlian teknis menghitung kebutuhan debit dan tekanan air pompa hidran/sprinkler, menganalisis risiko kebakaran industri kompleks (Fire Risk Assessment), mengaudit kepatuhan konstruksi tahan api (Permenaker 02/1983 & Permen PU 26/2008), serta menandatangani laporan teknis keselamatan proteksi kebakaran berlisensi SKP Menteri Ketenagakerjaan RI.',
    highlights: [
      'Durasi Pembinaan: 140 JP (17 Hari Kerja Intensif)',
      'Landasan Regulasi: Kepmenaker No. KEP.186/MEN/1999 Lampiran IV & Permenaker 02/1992',
      'Output Resmi: SKP Ahli K3 Spesialis Kebakaran Menaker RI & Lisensi Kewenangan (3 Tahun)',
      'Keahlian Utama: Kalkulasi Hidraulika Pompa, Desain Proteksi NFPA/SNI & Fire Risk Assessment'
    ],
    level: 'Sertifikasi Ahli K3 Spesialis Kemnaker RI',
    duration: '140 JP (17 Hari Kerja)',
    method: 'Blended Learning (Sesi Teori Interaktif + Workshop Kalkulasi Desain & Praktik Kerja Lapangan PKL)',
    legalBasis: 'Kepmenaker No. KEP.186/MEN/1999 Lampiran IV, Permenaker No. 02/1992 & UU No. 1 Tahun 1970',
    targetAudience: [
      'HSE Manager, Fire Protection Engineer, dan Lead Safety Specialist Industri Migas / Manufaktur',
      'Konsultan & Perancang Desain Sistem Mekanikal Elektrikal Proteksi Kebakaran (MEP Fire)',
      'Auditor Sistem Proteksi Kebakaran Perusahaan Asuransi & Lembaga Audit K3',
      'Alumni Ahli K3 Umum yang Ingin Mengambil Penunjukan Spesialisasi Teknis Tertinggi'
    ],
    prerequisites: [
      'Scan KTP yang masih berlaku',
      'Scan Ijazah pendidikan formal minimal D3 Teknik atau S1 Teknik (Semua Jurusan Teknik)',
      'Surat Penugasan Resmi dari perusahaan tempat bekerja',
      'Surat Keterangan Pengalaman Kerja di bidang K3 sekurang-kurangnya 2 tahun',
      'Pas foto formal background merah 2x3, 3x4, dan 4x6 (masing-masing 4 lembar)'
    ],
    certificationOutput: [
      'Sertifikat Pembinaan Calon Ahli K3 Spesialis Kebakaran Kelas A resmi Kemnaker RI',
      'Surat Keputusan Penunjukan (SKP) Ahli K3 Spesialis Penanggulangan Kebakaran dari Menteri Ketenagakerjaan RI',
      'Kartu Lisensi Kewenangan Ahli K3 Spesialis Kebakaran (Masa Berlaku 3 Tahun)',
      'Surat Keterangan Lulus (SKL) resmi untuk keperluan tender dan pelaporan dinas segera'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Kebijakan Nasional, Regulasi Standar Internasional & Kompartemen Gedung',
        topics: [
          'Hukum K3 Kebakaran: UU 1/1970, Permenaker 02/1992, Kepmenaker 186/1999, Permen PU 26/2008',
          'Standar Internasional NFPA (National Fire Protection Association) 13, 14, 20, 72, 101',
          'Perancangan konstruksi bangunan tahan api, batas ketahanan api (TKA), dan sistem smoke control',
          'Fire Risk Assessment (FRA) metodologi kuantitatif dan kualitatif untuk fasilitas berisiko tinggi'
        ],
        hours: '40 JP'
      },
      {
        module: 'Modul 02: Rekayasa Desain Sistem Proteksi Aktif & Kalkulasi Hidraulika',
        topics: [
          'Kalkulasi kebutuhan pasokan air pemadam, ukuran reservoir air, dan hidraulika pipa Hazen-Williams',
          'Perhitungan kurva performa pompa kebakaran (Fire Pump Rating Curve & Net Positive Suction Head)',
          'Desain kepadatan pancaran sistem sprinkler otomatis (Density-Area Method)',
          'Rekayasa instalasi alarm deteksi addressable, gas suppression (FM200, Novec 1230), dan foam system'
        ],
        hours: '50 JP'
      },
      {
        module: 'Modul 03: Praktik Kerja Lapangan (PKL), Analisis Kasus & Seminar Ujian Kemnaker',
        topics: [
          'Inspeksi dan audit teknis komprehensif sistem proteksi kebakaran di fasilitas industri nyata (PKL)',
          'Penyusunan Laporan Hasil Observasi Lapangan K3 Kebakaran (Laporan PKL)',
          'Seminar pemaparan laporan audit di hadapan Tim Evaluasi Direktorat Bina Wasnak Kemnaker RI',
          'Ujian komprehensif tertulis evaluasi penunjukan Ahli K3 Spesialis Kebakaran'
        ],
        hours: '50 JP'
      }
    ],
    priceInfo: 'Investasi Rp 15.000.000 per peserta (Paket Blended Learning Public). Biaya mencakup sertifikasi lengkap SKP & Lisensi Menteri Ketenagakerjaan RI, modul tebal komprehensif, bimbingan PKL, software kalkulasi hidraulika dasar, dan networking alumni pakar K3 kebakaran nasional.',
    blocks: [
      {
        heading: 'Puncak Otoritas Teknis Keselamatan Kebakaran di Indonesia',
        paragraphs: [
          'Ahli K3 Spesialis Penanggulangan Kebakaran (Kelas A) merupakan sertifikasi kualifikasi tertinggi dalam hierarki kompetensi proteksi kebakaran Kementerian Ketenagakerjaan RI. Berdasarkan Kepmenaker No. KEP.186/MEN/1999, Ahli K3 Kelas A memiliki wewenang hukum memeriksa, menguji, dan menandatangani rekomendasi kelaikan teknis seluruh instalasi kebakaran perusahaan.',
          'Di industri dengan risiko ledakan dan kobaran api tinggi seperti kilang petrokimia, smelter, terminal minyak, bandar udara, dan supertall building, keberadaan personil ber-SKP Ahli K3 Spesialis Kebakaran adalah mandat regulasi wajib yang dimonitor ketat oleh pemerintah dan konsorsium asuransi internasional.'
        ]
      },
      {
        heading: 'Kurikulum Mendalam 140 Jam Pelajaran (JP) & Penguasaan Standar NFPA',
        paragraphs: [
          'Selama 17 hari pembinaan komprehensif, peserta tidak hanya mempelajari prosedur keselamatan kerja konvensional, melainkan mendalami rekayasa teknik keselamatan kebakaran (Fire Safety Engineering). Materi mencakup perhitungan debit air gpm/lpm, pressure loss akibat gesekan pipa, pemilihan jenis nozzle sprinkler, hingga perancangan sistem pressurization stairwell gedung pencakar langit.',
          'Pembinaan diperkuat dengan Praktik Kerja Lapangan (PKL) di instalasi industri manufaktur atau pembangkit listrik guna menguji kemampuan audit lapangan peserta secara nyata di hadapan auditor senior Kemnaker RI.'
        ],
        bullets: [
          'Analisis kesesuaian instalasi sistem hidran dan sprinkler terhadap standar NFPA 13, 14, dan 25',
          'Kalkulasi kebutuhan kapasitas pompa pemadam kebakaran jockey, electric, dan diesel standby',
          'Penetapan kriteria desain total flooding gas system pada ruangan elektronik sensitif',
          'Penyusunan audit report proteksi kebakaran untuk kelengkapan izin Sertifikat Laik Fungsi (SLF)'
        ]
      },
      {
        heading: 'Penerbitan Surat Keputusan Penunjukan (SKP) Menteri Ketenagakerjaan',
        paragraphs: [
          'Lulusan yang memenuhi syarat administratif dan lulus evaluasi seminar PKL berhak menerima Surat Keputusan Penunjukan (SKP) Ahli K3 Spesialis Penanggulangan Kebakaran dari Menteri Ketenagakerjaan RI serta Kartu Kewenangan Lisensi masa berlaku 3 tahun.',
          'PT Kreasi Ultimate Berjaya mendampingi verifikasi berkas hingga SKP fisik dan lisensi digital terbit resmi di portal Teman K3 Kemnaker.'
        ]
      },
      {
        heading: 'Jadwal Reguler & Penyelenggaraan In-House Training Korporat',
        paragraphs: [
          'Program ini dibuka secara reguler melalui jadwal public batch. Kami juga memfasilitasi kelas khusus in-house training bagi BUMN dan perusahaan multinasional yang ingin meningkatkan kompetensi seluruh tim engineering proteksi kebakarannya.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Apa syarat latar belakang pendidikan untuk mendaftar Ahli K3 Spesialis Kebakaran Kelas A?',
        answer: 'Sesuai regulasi Kemnaker RI, peserta wajib memiliki latar belakang pendidikan formal minimal Diploma 3 (D3) Teknik atau Sarjana (S1) Teknik dari semua jurusan teknik, serta memiliki pengalaman kerja di bidang K3 sekurang-kurangnya 2 tahun.'
      },
      {
        question: 'Berapa biaya investasi pelatihan Ahli K3 Spesialis Kebakaran Kelas A?',
        answer: 'Biaya resmi pelatihan adalah Rp 15.000.000 per peserta untuk program 140 JP (17 Hari Kerja). Biaya ini sudah mencakup pengurusan lengkap SKP Menteri Ketenagakerjaan RI, Lisensi 3 tahun, modul materi lengkap, pendampingan PKL, dan sertifikat.'
      },
      {
        question: 'Apakah lulusan mendapatkan SKP langsung atas nama pribadi atau perusahaan?',
        answer: 'Sesuai Permenaker No. 02/MEN/1992, bagi peserta utusan perusahaan yang melampirkan surat penugasan resmi, SKP dan Lisensi diterbitkan atas nama pribadi yang terafiliasi dengan badan usaha pengutus. Bagi peserta mandiri, diterbitkan Sertifikat Calon Ahli K3 Spesialis Kebakaran yang siap diaktifkan menjadi SKP saat bekerja di perusahaan.'
      },
      {
        question: 'Apa saja output dokumen yang diajarkan dalam pembinaan Kelas A ini?',
        answer: 'Peserta diajarkan menyusun Dokumen Fire Risk Assessment (FRA), Laporan Hasil Riksa Uji Hidran & Sprinkler, Kalkulasi Hidraulika Pemadam, Dokumen Rencana Tanggap Darurat Lanjutan, dan Formulir Audit Kepatuhan Gedung.'
      },
      {
        question: 'Berapa lama proses penerbitan SKP Ahli K3 Kebakaran dari Kemnaker RI?',
        answer: 'Setelah lulus seminar evaluasi PKL, Surat Keterangan Lulus (SKL) resmi terbit dalam 1-3 hari kerja. Sertifikat resmi, SKP Menaker RI, dan Lisensi fisik diproses melalui portal e-K3 Kemnaker dalam kurun waktu 30 hingga 45 hari kerja.'
      }
    ],
    related: [
      'pelatihan/ahli-k3-umum',
      'pelatihan/k3-kebakaran-kelas-b',
      'pelatihan/k3-kebakaran-kelas-c',
      'pelatihan/pelatihan-pengujian-sistem-hydran-kebakaran-pomp-pipa-nozzle',
      'panduan/biaya-pelatihan-k3-kebakaran',
      'profesi/ahli-k3-kebakaran',
      'regulasi-k3/kepmenaker-186-1999-unit-penanggulangan-kebakaran',
      'regulasi-k3/permenaker-02-1983-instalasi-alarm-kebakaran-automatik'
    ],
    sources: [
      {
        label: 'Kepmenaker No. KEP.186/MEN/1999 tentang Unit Penanggulangan Kebakaran di Tempat Kerja',
        url: 'https://jdih.kemnaker.go.id/katalog/kepmenaker-186-1999',
        publisher: 'Kementerian Ketenagakerjaan RI'
      },
      {
        label: 'Permenaker No. PER.02/MEN/1992 tentang Tata Cara Penunjukan Kewajiban dan Wewenang Ahli K3',
        url: 'https://jdih.kemnaker.go.id/katalog/permenaker-02-1992',
        publisher: 'Kementerian Tenaga Kerja RI'
      },
      {
        label: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja',
        url: 'https://jdih.kemnaker.go.id/katalog/uu-1-1970',
        publisher: 'Pemerintah RI / Lembaran Negara RI'
      }
    ],
    primaryKeyword: 'pelatihan ahli k3 spesialis penanggulangan kebakaran (kelas a kemnaker)',
    searchIntent: 'biaya jadwal syarat pendaftaran dan skp ahli k3 spesialis penanggulangan kebakaran kelas a kemnaker ri',
    primaryCtaText: 'Daftar Kelas A Kebakaran 2026',
    image: '/images/content/instruktur-menyampaikan-presentasi-di-kelas-1.webp',
    imageAlt: 'Instruktur K3 memaparkan materi kalkulasi hidraulika pompa kebakaran dan rekayasa desain sprinkler otomatis di ruang kelas',
    gallery: [
      { src: '/images/content/instruktur-menyampaikan-presentasi-di-kelas-1.webp', alt: 'Pemaparan modul rekayasa keselamatan kebakaran tingkat lanjut' },
      { src: '/images/content/diskusi-instruktur-dan-peserta-di-ruang-seminar-1.webp', alt: 'Sesi konsultasi analisis risiko kebakaran industri bersama tim penguji' },
      { src: '/images/content/peserta-menyimak-presentasi-di-ruang-kelas-1.webp', alt: 'Peserta menyimak pembahasan standar NFPA dan SNI proteksi kebakaran' },
      { src: '/images/content/asesmen-individu-dengan-pengisian-dokumen-1.webp', alt: 'Penyusunan laporan observasi lapangan dan rancangan proteksi kebakaran' }
    ]
  },
  {
    slug: 'k3-kebakaran',
    title: 'Pelatihan K3 Penanggulangan Kebakaran (Paket Sertifikasi Kemnaker)',
    metaTitle: 'Pelatihan K3 Penanggulangan Kebakaran | Paket Sertifikasi Resmi',
    description: 'Pelatihan K3 Penanggulangan Kebakaran komprehensif durasi 16 JP (2 Hari). Biaya Rp 4.250.000, tata kelola proteksi api, inspeksi instalasi, dan kepatuhan regulasi.',
    answer: 'Pelatihan K3 Penanggulangan Kebakaran (Paket Sertifikasi Kemnaker) adalah program pengenalan dan tata kelola keselamatan kebakaran terpadu berdurasi 16 JP (2 hari kerja) berlandaskan UU No. 1 Tahun 1970 dan Kepmenaker No. KEP.186/MEN/1999. Pelatihan ini memadukan pemahaman regulasi proteksi kebakaran gedung, penataan instalasi proteksi aktif-pasif, pengorganisasian unit penanggulangan kebakaran perusahaan, serta mitigasi bahaya kebakaran di area perkantoran, pabrik, dan gudang komersial.',
    highlights: [
      'Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)',
      'Landasan Regulasi: UU No. 1 Tahun 1970 & Kepmenaker No. KEP.186/MEN/1999',
      'Output Pelatihan: Sertifikat Pelatihan K3 Penanggulangan Kebakaran Resmi PJK3',
      'Materi Terpadu: Penataan APAR, Hidran, Evakuasi Darurat & Kepatuhan Audit SMK3'
    ],
    level: 'Sertifikasi Kompetensi Tata Kelola Kebakaran K3',
    duration: '16 JP (2 Hari Kerja)',
    method: 'Blended Learning (Sesi Teori Interaktif + Workshop Simulasi Pengendalian Bahaya Api)',
    legalBasis: 'UU No. 1 Tahun 1970 & Kepmenaker No. KEP.186/MEN/1999',
    targetAudience: [
      'HSE Officer, Safety Supervisor, dan Anggota Komite P2K3',
      'Building Maintenance Staff, Pengelola Fasilitas Umum & Gedung Komersial',
      'Supervisor Gudang, Logistik, dan Operasional Pabrik Manufaktur',
      'Karyawan Umum yang Membutuhkan Pembekalan Tanggap Darurat Kebakaran'
    ],
    prerequisites: [
      'Scan KTP / Tanda Pengenal resmi yang masih berlaku',
      'Pendidikan minimal SMA/SMK sederajat atau D3/S1 semua jurusan',
      'Surat Penugasan Resmi dari manajemen perusahaan (opsional bagi peserta mandiri)',
      'Disarankan memahami alur proses kerja di fasilitas masing-masing'
    ],
    certificationOutput: [
      'Sertifikat Pelatihan K3 Penanggulangan Kebakaran resmi PJK3 PT Kreasi Ultimate Berjaya',
      'Surat Keterangan Jam Pelajaran Pelatihan (16 JP)',
      'Master Template Checklist Inspeksi APAR, Hidran, dan Form Rencana Evakuasi Gedung'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Kerangka Hukum K3 Kebakaran & Pencegahan Potensi Bahaya Api',
        topics: [
          'Prinsip UU No. 1 Tahun 1970 Pasal 3 tentang Syarat-Syarat Keselamatan Kerja Kebakaran',
          'Kepmenaker No. 186/1999 tentang Kewajiban Pembentukan Unit Penanggulangan Kebakaran',
          'Identifikasi sumber bahaya api pada instalasi listrik, gesekan mekanik, dan bahan kimia',
          'Sistem izin kerja panas (Hot Work Permit) dan pengawasan area rawan api'
        ],
        hours: '4 JP'
      },
      {
        module: 'Modul 02: Sistem Proteksi Kebakaran Aktif & Pasif di Tempat Kerja',
        topics: [
          'Standar penempatan dan pemeliharaan APAR sesuai Permenaker No. 04/1980',
          'Pengenalan instalasi hidran gedung, hidran halaman, dan sprinkler otomatis',
          'Prinsip deteksi dini: detektor asap (smoke), detektor panas (heat), dan manual call point',
          'Penyediaan sarana penyelamatan jiwa: pintu darurat, tangga darurat tahan api, dan signage EXIT'
        ],
        hours: '6 JP'
      },
      {
        module: 'Modul 03: Tata Kelola Organisasi Tanggap Darurat & Simulasi Drill Evakuasi',
        topics: [
          'Pembagian peran Floor Warden, Fire Brigade, dan Tim First Aid saat keadaan darurat',
          'Prosedur evakuasi mandiri, penghitungan personil di assembly point, dan komunikasi darurat',
          'Evaluasi kesiapsiagaan menghadapi kebakaran dalam audit kriteria 6.7 SMK3 PP 50/2012',
          'Simulasi studi kasus penanganan kebakaran di gedung bertingkat dan fasilitas gudang'
        ],
        hours: '6 JP'
      }
    ],
    priceInfo: 'Investasi Rp 4.250.000 per peserta (Paket Public Blended Training). Sudah mencakup modul pelatihan komprehensif, e-certificate resmi, template dokumen checklist proteksi api, dan bimbingan teknis.',
    blocks: [
      {
        heading: 'Pentingnya Tata Kelola K3 Penanggulangan Kebakaran yang Terstruktur',
        paragraphs: [
          'Kebakaran di tempat kerja adalah salah satu risiko industri paling merusak yang dapat melumpuhkan operasional bisnis dalam hitungan menit, menelan korban jiwa, dan menimbulkan kerugian aset hingga miliaran rupiah. Sebagian besar kebakaran dahsyat bermula dari percikan api kecil yang gagal dikendalikan karena tidak tersedianya apar yang laik pakai atau personil yang tidak terlatih.',
          'Pelatihan K3 Penanggulangan Kebakaran membekali organisasi dengan pemahaman terpadu mengenai strategi pencegahan kebakaran harian, kepatuhan regulasi wajib ketenagakerjaan, serta pembentukan budaya tanggap darurat yang sigap di setiap lantai kerja.'
        ]
      },
      {
        heading: 'Penyelarasan Sistem Proteksi Kebakaran dengan Audit SMK3 PP 50/2012',
        paragraphs: [
          'Penerapan keselamatan kebakaran bukan sekadar menyediakan tabung pemadam di dinding, melainkan bagian integral dari 166 kriteria SMK3. Peserta dilatih memastikan bahwa seluruh sarana proteksi kebakaran terdokumentasi, diinspeksi berkala setiap bulan, dan diuji fungsinya secara teratur.',
          'Program ini memandu peserta menyusun prosedur tanggap darurat tertulis (Emergency Response Plan) yang sinkron dengan regulasi pemerintah dan standar asuransi industri.'
        ],
        bullets: [
          'Kepatuhan inspeksi visual bulanan APAR dengan tanda gantung kartu periksa',
          'Pengujian kesiapan pasokan air hidran dan pemeriksaan fisik selang pemadam',
          'Pemeriksaan rute evakuasi dari halangan barang operasional (housekeeping K3)',
          'Simulasi koordinasi pelaporan darurat kepada petugas damkar kota setempat'
        ]
      },
      {
        heading: 'Sertifikasi Resmi & Pengakuan Kompetensi K3',
        paragraphs: [
          'Peserta yang menyelesaikan pelatihan dan evaluasi studi kasus menerima Sertifikat Pelatihan resmi dari PJK3 PT Kreasi Ultimate Berjaya yang berlaku sebagai portofolio kompetensi keselamatan kerja industri.'
        ]
      },
      {
        heading: 'Skema Kelas Fleksibel: Public Training & In-House Workshop',
        paragraphs: [
          'Kami menyelenggarakan Public Class rutin setiap bulan secara blended learning. Untuk korporasi yang ingin melatih seluruh staf fasilitas atau komite tanggap daruratnya, kami menyediakan In-House Training dengan kurikulum yang disesuaikan secara khusus pada sektor operasional Anda.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Apa perbedaan program K3 Penanggulangan Kebakaran ini dengan Kelas D Kemnaker?',
        answer: 'Program ini adalah paket pelatihan tata kelola dan pengenalan keselamatan kebakaran komprehensif resmi PJK3 yang mencakup aspek manajemen proteksi dan pemenuhan audit SMK3. Sedangkan Kelas D adalah pembinaan spesifik penunjukan lisensi operasional perorangan Kemnaker RI.'
      },
      {
        question: 'Berapa biaya pelatihan K3 Penanggulangan Kebakaran?',
        answer: 'Biaya resmi pelatihan adalah Rp 4.250.000 per peserta untuk program Public Training durasi 16 JP (2 Hari Kerja). Untuk In-House Training di perusahaan, tersedia penawaran paket investasi khusus sesuai jumlah peserta.'
      },
      {
        question: 'Apakah pelatihan ini mencakup materi tentang APAR dan hidran?',
        answer: 'Ya, pelatihan membahas tuntas prinsip penempatan, pemilihan media pemadam, pemeriksaan berkala APAR sesuai Permenaker 04/1980, serta pengenalan sistem hidran gedung dan rute evakuasi darurat.'
      },
      {
        question: 'Siapa saja yang direkomendasikan mengikuti pelatihan ini?',
        answer: 'Sangat direkomendasikan untuk HSE Officer, anggota komite P2K3, teknisi maintenance gedung, staf general affair, supervisor pabrik, dan pengelola fasilitas publik/komersial.'
      },
      {
        question: 'Apakah sertifikat pelatihan ini dapat digunakan untuk audit keselamatan kerja?',
        answer: 'Ya, sertifikat pelatihan resmi PJK3 PT Kreasi Ultimate Berjaya diakui sebagai bukti pemenuhan kompetensi personel dalam audit SMK3 PP 50/2012 kriteria kesiapan menghadapi keadaan darurat.'
      }
    ],
    related: [
      'pelatihan/k3-kebakaran-kelas-d',
      'pelatihan/pelatihan-inspeksi-pemeliharaan-apar-tabung-pemadam-api-ringan',
      'pelatihan/pelatihan-simulasi-evakuasi-kebakaran-drill-gedung-bertingkat',
      'pelatihan/pelatihan-penyusunan-dokumen-fire-emergency-plan-fep-gedung',
      'panduan/biaya-pelatihan-k3-kebakaran',
      'profesi/ahli-k3-kebakaran',
      'regulasi-k3/kepmenaker-186-1999-unit-penanggulangan-kebakaran'
    ],
    sources: [
      {
        label: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja',
        url: 'https://jdih.kemnaker.go.id/katalog/uu-1-1970',
        publisher: 'Pemerintah RI / Lembaran Negara RI'
      },
      {
        label: 'Kepmenaker No. KEP.186/MEN/1999 tentang Unit Penanggulangan Kebakaran di Tempat Kerja',
        url: 'https://jdih.kemnaker.go.id/katalog/kepmenaker-186-1999',
        publisher: 'Kementerian Ketenagakerjaan RI'
      },
      {
        label: 'PP No. 50 Tahun 2012 tentang Penerapan Sistem Manajemen K3',
        url: 'https://jdih.kemnaker.go.id/katalog/pp-50-2012',
        publisher: 'Pemerintah RI / Kemnaker RI'
      }
    ],
    primaryKeyword: 'pelatihan k3 penanggulangan kebakaran (paket sertifikasi kemnaker)',
    searchIntent: 'biaya jadwal materi dan pendaftaran pelatihan k3 penanggulangan kebakaran paket sertifikasi resmi',
    primaryCtaText: 'Konsultasi Jadwal Pelatihan Kebakaran',
    image: '/images/content/peserta-mengikuti-pelatihan-di-kelas-1.webp',
    imageAlt: 'Peserta menyimak pemaparan materi tata kelola keselamatan kebakaran dan regulasi K3 di ruang pelatihan',
    gallery: [
      { src: '/images/content/peserta-mengikuti-pelatihan-di-kelas-1.webp', alt: 'Peserta menyimak materi keselamatan kebakaran di kelas' },
      { src: '/images/content/instruktur-memandu-sesi-kelas-1.webp', alt: 'Instruktur memandu pembahasan standar penempatan APAR dan hidran' },
      { src: '/images/content/diskusi-kelompok-dalam-sesi-kelas-1.webp', alt: 'Diskusi kelompok mengenai simulasi tanggap darurat industri' },
      { src: '/images/content/asesmen-individu-peserta-di-ruang-kelas-1.webp', alt: 'Evaluasi akhir materi pelatihan penanggulangan kebakaran K3' }
    ]
  },
  {
    slug: 'pelatihan-inspeksi-pemeliharaan-apar-tabung-pemadam-api-ringan',
    title: 'Pelatihan Inspeksi & Pemeliharaan APAR Tabung Pemadam Api Ringan',
    metaTitle: 'Pelatihan Inspeksi & Pemeliharaan APAR | Permenaker 04/1980 & Biaya',
    description: 'Pelatihan Inspeksi & Pemeliharaan APAR durasi 16 JP (2 Hari). Biaya Rp 4.250.000, kuasai tata cara pasang, uji visual, hydrostatic test, refilling, dan checklist resmi.',
    answer: 'Pelatihan Inspeksi & Pemeliharaan APAR Tabung Pemadam Api Ringan adalah program pembinaan teknis 16 JP (2 hari kerja) sesuai standar Permenaker No. PER.04/MEN/1980 tentang Syarat-Syarat Pemasangan dan Pemeliharaan APAR. Pelatihan ini melatih teknisi dan petugas K3 melakukan inspeksi fisik bulanan, pengujian tekanan manometer, pemeriksaan media pemadam (powder, CO2, foam, clean agent), penimbangan tabung, pengujian berkala hidrostatik (hydrotest), hingga tata cara pengisian ulang (refilling) tabung pemadam.',
    highlights: [
      'Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)',
      'Landasan Regulasi: Permenaker No. PER.04/MEN/1980 & Standar NFPA 10',
      'Output Pelatihan: Sertifikat Kompetensi Inspeksi & Pemeliharaan APAR Resmi PJK3',
      'Praktik Teknis: Bongkar-Pasang Valve, Uji Manometer, Refilling & Hydrotest Tabung'
    ],
    level: 'Sertifikasi Kompetensi Teknis Pemeliharaan Sarana K3',
    duration: '16 JP (2 Hari Kerja)',
    method: 'Blended Learning (Sesi Teori Interaktif + Workshop Praktik Bongkar Muat Tabung APAR)',
    legalBasis: 'Permenaker No. PER.04/MEN/1980 & UU No. 1 Tahun 1970',
    targetAudience: [
      'Teknisi Pemeliharaan APAR & Tim Fire Safety Equipment Perusahaan',
      'HSE Officer, Safety Inspector, dan Anggota Komite P2K3',
      'Petugas Fasilitas Gedung, Warehouse Supervisor, dan Staf Maintenance Mekanikal',
      'Penyedia Jasa Isi Ulang dan Servis Tabung Pemadam Api Kebakaran'
    ],
    prerequisites: [
      'Scan KTP / Kartu Identitas resmi',
      'Pendidikan minimal SMA/SMK atau berpengalaman kerja di bidang teknis/K3',
      'Surat Penugasan Perusahaan (opsional bagi peserta mandiri)',
      'Kondisi fisik prima untuk praktik pembongkaran dan penimbangan tabung'
    ],
    certificationOutput: [
      'Sertifikat Pelatihan Inspeksi & Pemeliharaan APAR resmi PJK3 PT Kreasi Ultimate Berjaya',
      'Surat Keterangan Jam Pelajaran Pelatihan (16 JP)',
      'Format Master Tagging Inspeksi Bulanan APAR dan Logbook Pemeliharaan Resmi'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Regulasi Permenaker 04/1980 & Standar Pemasangan APAR Gedung',
        topics: [
          'Kajian mendalam Permenaker No. PER.04/MEN/1980 tentang pemasangan dan pemeliharaan APAR',
          'Aturan penempatan APAR: ketinggian pemasangan (1,2 meter), jarak jangkau maksimal (15 meter)',
          'Pemberian tanda panah penunjuk APAR dan perlindungan dari suhu ekstrem atau cuaca langsung',
          'Klasifikasi kebakaran dan kesesuaian media pemadam tabung (Powder, CO2, Foam, Halon alternative)'
        ],
        hours: '4 JP'
      },
      {
        module: 'Modul 02: Metodologi Inspeksi Fisik Berkala, Manometer & Penimbangan',
        topics: [
          'Prosedur inspeksi visual 12 poin: segel pengaman, pin penarik, selang, nozzle, tabung karat/penyok',
          'Pemeriksaan jarum manometer (Stored Pressure System vs Cartridge Operated System)',
          'Metode penimbangan tabung CO2 untuk mendeteksi penyusutan gas pemadam (toleransi max 10%)',
          'Pencatatan kartu gantung inspeksi (Tagging Card) dan digitalisasi logbook K3'
        ],
        hours: '6 JP'
      },
      {
        module: 'Modul 03: Prosedur Pengujian Tekanan Hidrostatik (Hydrotest) & Pengisian Ulang (Refilling)',
        topics: [
          'Jadwal uji berkala hidrostatik sesuai jenis tabung (5 tahun untuk CO2 dan powder)',
          'Teknik pelepasan tekanan aman dan pembersihan residu kimia tabung',
          'Prosedur pengisian ulang (refilling) dry chemical powder dan injeksi gas pendorong Nitrogen (N2)',
          'Evaluasi hasil uji kebocoran (leak test) dan ujian kompetensi teknis'
        ],
        hours: '6 JP'
      }
    ],
    priceInfo: 'Investasi Rp 4.250.000 per peserta (Paket Public Training). Sudah termasuk modul teknis panduan inspeksi, sertifikat resmi, form checklist standar, dan seragam praktikum.',
    blocks: [
      {
        heading: 'Pentingnya Inspeksi Berkala APAR Menurut Permenaker No. 04/1980',
        paragraphs: [
          'Berdasarkan Permenaker No. PER.04/MEN/1980, setiap tabung pemadam api ringan (APAR) di tempat kerja wajib diperiksa sekurang-kurangnya 2 (dua) kali dalam setahun, yaitu pemeriksaan dalam jangka 6 bulan dan pemeriksaan dalam jangka 12 bulan. Di samping itu, inspeksi visual rutin wajib dilakukan setiap bulan untuk memastikan tabung selalu dalam kondisi prima siap pakai.',
          'Seringkali saat kebakaran terjadi, tabung pemadam justru gagal memancarkan media karena bubuk kimia di dalamnya telah menggumpal, jarum manometer kehilangan tekanan tanpa terdeteksi, atau selang tersumbat sarang serangga. Pelatihan ini melatih teknisi mengeliminasi risiko kegagalan fungsi fatal tersebut.'
        ]
      },
      {
        heading: 'Standar Teknis Pemasangan dan Kriteria Penolakan Tabung Rusak',
        paragraphs: [
          'Peserta mempelajari aturan penempatan APAR secara presisi: dipasang pada dinding dengan penguat atau ditempatkan dalam lemari kaca yang mudah diakses, ketinggian handle 1,2 meter dari lantai, serta bebas dari rintangan tumpukan barang. Kriteria penolakan tabung (condemned cylinder) dibedah tuntas, termasuk tabung yang mengalami korosi dalam, penyok struktural, atau bekas pengelasan ilegal.',
          'Teknik penimbangan berkala diajarkan secara ketat, khususnya untuk tabung gas CO2 yang tidak memiliki manometer, di mana penurunan berat isi lebih dari 10% mewajibkan tabung segera dikirim untuk pengisian ulang.'
        ],
        bullets: [
          'Pemeriksaan kelenturan dan keutuhan karet selang pemancar (discharge hose)',
          'Pengujian tekanan hidrostatik tabung baja dan aluminium sesuai ambang batas uji pabrik',
          'Prosedur pengisian gas pendorong Nitrogen kering (N2) bertekanan kerja 12 - 15 bar',
          'Pencatatan riwayat servis dan penempelan stiker kalibrasi uji berkala'
        ]
      },
      {
        heading: 'Sertifikat Kompetensi & Bukti Kepatuhan Audit Ketenagakerjaan',
        paragraphs: [
          'Lulusan pelatihan menerima Sertifikat Kompetensi Inspeksi & Pemeliharaan APAR dari PT Kreasi Ultimate Berjaya. Dokumen ini membuktikan kualifikasi teknisi internal perusahaan dalam mengelola ratusan tabung pemadam secara mandiri tanpa harus selalu bergantung pada vendor pihak ketiga berbiaya tinggi.'
        ]
      },
      {
        heading: 'Skema Kelas Public & In-House Workshop Pemeliharaan',
        paragraphs: [
          'Kami menyelenggarakan Public Class blended learning setiap bulan, serta workshop In-House Training langsung di bengkel maintenance atau gudang fasilitas industri Anda dengan praktik langsung pada armada tabung APAR perusahaan.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Berapa tinggi standar pemasangan APAR pada dinding sesuai regulasi?',
        answer: 'Sesuai Permenaker No. PER.04/MEN/1980 Pasal 8, penempatan APAR pada dinding harus dipasang dengan tinggi pemberian tanda sekurang-kurangnya 120 cm dari permukaan lantai, dan jarak jangkauan antar APAR tidak boleh melebihi 15 meter kecuali ditetapkan lain oleh pengawas keselamatan kerja.'
      },
      {
        question: 'Berapa biaya pelatihan inspeksi dan pemeliharaan APAR?',
        answer: 'Biaya pelatihan resmi adalah Rp 4.250.000 per peserta untuk program Public Training durasi 16 JP (2 Hari Kerja). Sudah mencakup sertifikat resmi, modul teknis, template checklist inspeksi, dan konsultasi teknis.'
      },
      {
        question: 'Kapan tabung APAR harus dilakukan uji tekan hidrostatik (hydrotest)?',
        answer: 'Sesuai Permenaker 04/1980, pengujian hidrostatik tabung APAR wajib dilakukan secara berkala setiap 5 (lima) tahun sekali untuk tabung pemadam jenis gas CO2 dan busa/powder dengan tekanan uji sesuai spesifikasi manufaktur.'
      },
      {
        question: 'Bagaimana cara mengetahui tabung APAR CO2 masih penuh jika tidak ada jarum tekanannya?',
        answer: 'Tabung APAR CO2 tidak memiliki manometer karena gas di dalamnya berfase cair di bawah tekanan tinggi. Satu-satunya metode akurat adalah dengan menimbang berat kotor tabung (gross weight) dan membandingkannya dengan berat kosong (tare weight) yang tercap pada leher tabung. Jika berat isi berkurang lebih dari 10%, tabung harus diisi ulang.'
      },
      {
        question: 'Apakah teknisi internal perusahaan berhak melakukan inspeksi bulanan APAR?',
        answer: 'Ya, teknisi internal yang telah mengikuti pelatihan resmi dan memegang sertifikat inspeksi APAR berhak melakukan pemeriksaan rutin bulanan, mengisi kartu gantung inspeksi, dan menandatangani logbook pemeriksaan K3 perusahaan.'
      }
    ],
    related: [
      'pelatihan/k3-kebakaran-kelas-d',
      'pelatihan/k3-kebakaran',
      'pelatihan/pelatihan-pengujian-sistem-hydran-kebakaran-pomp-pipa-nozzle',
      'panduan/cara-menghitung-kebutuhan-apar-gedung',
      'panduan/sop-pemadaman-kebakaran-menggunakan-apar-metode-pass-pull-aim-squeeze-sweep',
      'profesi/profesi-teknisi-k3-sistem-apar-kebakaran',
      'regulasi-k3/permenaker-04-1980-syarat-pemasangan-pemeliharaan-apar'
    ],
    sources: [
      {
        label: 'Permenaker No. PER.04/MEN/1980 tentang Syarat-Syarat Pemasangan dan Pemeliharaan APAR',
        url: 'https://jdih.kemnaker.go.id/katalog/permenaker-04-1980',
        publisher: 'Kementerian Tenaga Kerja dan Transmigrasi RI'
      },
      {
        label: 'NFPA 10: Standard for Portable Fire Extinguishers',
        url: 'https://www.nfpa.org/codes-and-standards/nfpa-10-standard-development/10',
        publisher: 'National Fire Protection Association'
      },
      {
        label: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja',
        url: 'https://jdih.kemnaker.go.id/katalog/uu-1-1970',
        publisher: 'Pemerintah RI / Lembaran Negara RI'
      }
    ],
    primaryKeyword: 'pelatihan inspeksi & pemeliharaan apar tabung pemadam api ringan',
    searchIntent: 'biaya jadwal materi dan sertifikasi pelatihan inspeksi dan pemeliharaan apar permenaker 04 1980',
    primaryCtaText: 'Konsultasi Pelatihan Pemeliharaan APAR',
    image: '/images/content/asesmen-individu-dengan-pengisian-dokumen-1.webp',
    imageAlt: 'Teknisi K3 melakukan pemeriksaan fisik tabung APAR, pengecekan manometer dan pengisian checklist inspeksi',
    gallery: [
      { src: '/images/content/asesmen-individu-dengan-pengisian-dokumen-1.webp', alt: 'Pengisian dokumen checklist pemeriksaan fisik APAR' },
      { src: '/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-1.webp', alt: 'Briefing teknis pemeliharaan peralatan proteksi kebakaran' },
      { src: '/images/content/instruktur-memandu-sesi-kelas-1.webp', alt: 'Pemaparan modul regulasi Permenaker 04/1980 tentang APAR' },
      { src: '/images/content/diskusi-kelompok-dalam-sesi-kelas-1.webp', alt: 'Workshop evaluasi kelayakan tabung pemadam api ringan' }
    ]
  },
  {
    slug: 'pelatihan-pengujian-sistem-hydran-kebakaran-pomp-pipa-nozzle',
    title: 'Pelatihan Pengujian Sistem Hydran Kebakaran (Pompa, Pipa & Nozzle)',
    metaTitle: 'Pelatihan Pengujian Sistem Hydran Kebakaran | Pompa, Pipa & Nozzle',
    description: 'Pelatihan Pengujian Sistem Hydran Kebakaran durasi 24 JP (3 Hari). Biaya Rp 5.250.000, uji pompa jockey, main electric, diesel, flow meter, pipa, dan nozzle pitot.',
    answer: 'Pelatihan Pengujian Sistem Hydran Kebakaran (Pompa, Pipa & Nozzle) adalah program pembinaan kompetensi teknis 24 JP (3 hari kerja) berdasarkan Permenaker No. PER.02/MEN/1983 dan standar SNI 03-1745 / NFPA 14 & 25. Pelatihan ini melatih teknisi mekanikal dan pengawas K3 menguji performa kurva pompa pemadam kebakaran (Jockey Pump, Main Electric Pump, Diesel Fire Pump), mengukur debit dan tekanan aliran menggunakan pitot gauge dan flow meter, memeriksa katup landing valve dan siamese connection, serta melakukan flushing jaringan pipa hidran.',
    highlights: [
      'Durasi Pembinaan: 24 JP (3 Hari Kerja Intensif)',
      'Landasan Regulasi: Permenaker No. PER.02/MEN/1983 & Standar SNI 03-1745 / NFPA 25',
      'Output Pelatihan: Sertifikat Kompetensi Pengujian Sistem Hydran Resmi PJK3',
      'Praktik Teknis: Fire Pump Performance Curve Test, Pitot Tube Flow Test & Flushing Pipa'
    ],
    level: 'Sertifikasi Kompetensi Pengujian Instalasi K3',
    duration: '24 JP (3 Hari Kerja)',
    method: 'Blended Learning (Sesi Teori Hidraulika + Praktik Lapangan Pengujian Pompa & Nozzle Hydrant)',
    legalBasis: 'Permenaker No. PER.02/MEN/1983, SNI 03-1745 & UU No. 1 Tahun 1970',
    targetAudience: [
      'Teknisi Mekanikal Elektrikal Plumbing (MEP) & Operator Pompa Kebakaran',
      'HSE Officer, Safety Engineer, dan Pengawas Instalasi Proteksi Kebakaran',
      'Building Engineering Supervisor, Maintenance Manager Pabrik & Kawasan Industri',
      'Petugas Damkar Internal dan Tim Inspeksi Kelaikan Sarana Proteksi Bangunan'
    ],
    prerequisites: [
      'Scan KTP aktif yang masih berlaku',
      'Pendidikan minimal SMK Teknik (Mesin/Listrik) atau D3/S1 Teknik',
      'Surat Penugasan Resmi dari manajemen perusahaan pengutus',
      'Disarankan memiliki pengalaman kerja dasar dalam operasional pompa atau pipa air'
    ],
    certificationOutput: [
      'Sertifikat Kompetensi Pengujian Sistem Hydran Kebakaran resmi PJK3 PT Kreasi Ultimate Berjaya',
      'Surat Keterangan Jam Pelajaran Pelatihan (24 JP)',
      'Master Template Lembar Kerja Uji Performa Pompa (Pump Performance Curve Worksheet)'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Prinsip Desain Jaringan Hidran & Standar Regulasi Nasional',
        topics: [
          'Ketentuan instalasi pipa tegak dan hidran halaman sesuai SNI 03-1745 dan NFPA 14',
          'Klasifikasi sistem hidran: Kelas I, Kelas II, dan Kelas III berdasarkan debit dan pengguna',
          'Kapasitas cadangan air pemadam (Water Reservoir) dan kalkulasi pasokan minimal 30 - 60 menit',
          'Persyaratan penempatan box hidran indoor, pilar hidran outdoor, dan Siamese Connection'
        ],
        hours: '6 JP'
      },
      {
        module: 'Modul 02: Rangkaian Pompa Kebakaran (Fire Pump) & Pengujian Kinerja Kurva',
        topics: [
          'Fungsi dan urutan otomatisasi: Jockey Pump (penjaga tekanan), Main Electric Pump, Diesel Standby',
          'Sistem kontrol panel pompa, pressure switch, dan pengaman aliran berlebih (casing relief valve)',
          'Uji performa pompa kebakaran: Churn Pressure (0% flow), Rated Flow (100%), dan Peak Load (150%)',
          'Pengukuran tekanan hisap (suction) dan tekanan tekan (discharge) untuk mencegah kavitasi pompa'
        ],
        hours: '10 JP'
      },
      {
        module: 'Modul 03: Pengujian Aliran Nozzle, Pitot Gauge, Flushing & Penyusunan Laporan',
        topics: [
          'Teknik pengukuran debit air nozzle menggunakan Pitot Tube dan rumus teoritis aliran hidraulika',
          'Prosedur flushing pipa berkala untuk membuang endapan karat dan kerak jaringan',
          'Pemeriksaan kondisi landing valve, sambungan coupling Machino / Storz, dan selang kanvas',
          'Penyusunan Berita Acara Uji Fungsi dan Laporan Kelaikan Sistem Hidran untuk audit K3'
        ],
        hours: '8 JP'
      }
    ],
    priceInfo: 'Investasi Rp 5.250.000 per peserta (Paket Public Training). Sudah termasuk modul pelatihan hidraulika, sertifikat resmi, form uji kurva pompa, konsumsi praktikum, dan seragam.',
    blocks: [
      {
        heading: 'Urgensi Uji Performa Berkala Sistem Hidran Kebakaran Industri',
        paragraphs: [
          'Sistem hidran adalah pertahanan utama pemadaman api skala besar sebelum bantuan armada damkar kota tiba di lokasi. Namun dalam banyak kasus kebakaran pabrik, pompa hidran gagal menyala otomatis saat dibutuhkan atau tekanan air drop drastis di bawah standar operasional 4,5 hingga 7 bar.',
          'Pelatihan ini mengajarkan metodologi pengujian standar NFPA 25 dan regulasi nasional untuk memverifikasi apakah pompa kebakaran, jaringan pipa bawah tanah, dan pilar hidran benar-benar mampu menyalurkan debit air sesuai kapasitas rancangannya.'
        ]
      },
      {
        heading: 'Teknik Uji Kurva Pompa Kebakaran (100% dan 150% Rated Capacity)',
        paragraphs: [
          'Peserta mempraktikkan langsung pengujian kurva performa pompa kebakaran 3 titik: kondisi tertutup tanpa aliran (churn pressure maks 140% rated), kondisi beban penuh (100% rated capacity pada rated pressure), dan kondisi beban puncak (150% rated capacity dengan sisa tekanan tidak kurang dari 65% rated pressure).',
          'Pengujian ini krusial untuk memastikan bahwa mesin diesel pemadam sanggup memompa air secara kontinu saat listrik utama pabrik padam total.'
        ],
        bullets: [
          'Pengoperasian pitot gauge pada ujung nozzle hidran untuk mengukur tekanan dinamis (velocity pressure)',
          'Verifikasi kinerja automatic start pressure switch pada jockey pump dan main pump',
          'Pemeriksaan katup kontrol (OS&Y gate valve) dan katup satu arah (check valve)',
          'Uji kebocoran pipa jaringan hidran dengan tes tekanan statis hidrostatik'
        ]
      },
      {
        heading: 'Sertifikasi Kompetensi Teknisi Pengujian Hidran',
        paragraphs: [
          'Lulusan pelatihan menerima Sertifikat Kompetensi Pengujian Sistem Hydran Kebakaran dari PJK3 PT Kreasi Ultimate Berjaya. Sertifikat ini diakui sebagai bukti keahlian teknis pemeliharaan sarana proteksi kebakaran gedung dan fasilitas industri.'
        ]
      },
      {
        heading: 'Skema Pelaksanaan: Public Class & On-Site Plant Testing',
        paragraphs: [
          'Kami menyelenggarakan Public Class setiap bulan. Bagi pengelola industri yang ingin melakukan uji performa menyeluruh pada rumah pompa (pump house) pabriknya sendiri, kami menyediakan In-House Training sekaligus pendampingan uji fungsi aktual.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Berapa tekanan air minimal yang harus keluar pada nozzle hidran gedung?',
        answer: 'Sesuai standar SNI 03-1745 dan NFPA 14, tekanan air sisa (residual pressure) minimal pada katup hidran terjauh saat beroperasi adalah 4,5 bar (65 psi) untuk hidran kelas II (selang 1,5 inci) dan 6,9 bar (100 psi) untuk hidran kelas I (selang 2,5 inci).'
      },
      {
        question: 'Berapa biaya pelatihan pengujian sistem hidran kebakaran?',
        answer: 'Biaya resmi pelatihan adalah Rp 5.250.000 per peserta untuk program Public Training durasi 24 JP (3 Hari Kerja). Sudah mencakup sertifikat resmi, modul teknis hidraulika, form kurva pompa, dan praktikum lapangan.'
      },
      {
        question: 'Apa fungsi utama Jockey Pump pada rangkaian pompa hidran?',
        answer: 'Jockey Pump berfungsi menjaga tekanan air di dalam pipa hidran tetap konstan pada batas set-point normal saat tidak ada kebakaran untuk mengantisipasi kebocoran minor pada fitting pipa, sehingga pompa utama (Main Pump) tidak perlu menyala terus-menerus.'
      },
      {
        question: 'Kapan pengujian pompa kebakaran harus dilakukan secara berkala?',
        answer: 'Berdasarkan standar NFPA 25, pengujian uji jalan tanpa aliran (no-flow test / churn test) dilakukan setiap minggu untuk pompa diesel dan setiap bulan untuk pompa elektrik. Sedangkan uji beban penuh (annual flow test) dilakukan sekurang-kurangnya satu tahun sekali.'
      },
      {
        question: 'Peralatan apa saja yang digunakan untuk mengukur debit aliran hidran?',
        answer: 'Pengukuran debit aliran dilakukan menggunakan flow meter terkalibrasi pada header pipa uji, atau menggunakan alat ukur tabung pitot (Pitot Tube Gauge) yang diletakkan tepat di depan pancaran air nozzle hidran.'
      }
    ],
    related: [
      'pelatihan/k3-kebakaran-kelas-c',
      'pelatihan/k3-kebakaran-kelas-b',
      'pelatihan/k3-kebakaran-kelas-a',
      'pelatihan/pelatihan-inspeksi-pemeliharaan-apar-tabung-pemadam-api-ringan',
      'panduan/biaya-pelatihan-k3-kebakaran',
      'profesi/ahli-k3-kebakaran',
      'regulasi-k3/permenaker-02-1983-instalasi-alarm-kebakaran-automatik'
    ],
    sources: [
      {
        label: 'Permenaker No. PER.02/MEN/1983 tentang Instalasi Alarm Kebakaran Otomatik',
        url: 'https://jdih.kemnaker.go.id/katalog/permenaker-02-1983',
        publisher: 'Kementerian Tenaga Kerja RI'
      },
      {
        label: 'SNI 03-1745-2000 Tata Cara Perencanaan dan Pemasangan Sistem Pipa Tegak dan Slang Hidran',
        url: 'https://bsn.go.id',
        publisher: 'Badan Standardisasi Nasional'
      },
      {
        label: 'NFPA 25: Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems',
        url: 'https://www.nfpa.org/codes-and-standards/nfpa-25-standard-development/25',
        publisher: 'National Fire Protection Association'
      }
    ],
    primaryKeyword: 'pelatihan pengujian sistem hydran kebakaran (pompa, pipa & nozzle)',
    searchIntent: 'biaya jadwal materi dan sertifikasi pelatihan pengujian sistem hydran kebakaran pompa dan nozzle',
    primaryCtaText: 'Konsultasi Pengujian Sistem Hidran',
    image: '/images/content/foto-bersama-pekerja-di-fasilitas-industri-1.webp',
    imageAlt: 'Teknisi K3 dan instruktur mekanikal berfoto bersama di area rumah pompa kebakaran (fire pump room) industri',
    gallery: [
      { src: '/images/content/foto-bersama-pekerja-di-fasilitas-industri-1.webp', alt: 'Dokumentasi teknisi pengujian hidran di fasilitas industri' },
      { src: '/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-1.webp', alt: 'Pengarahan keselamatan sebelum pengujian aliran air hidran bertekanan' },
      { src: '/images/content/instruktur-memandu-sesi-kelas-1.webp', alt: 'Pemaparan kurva kinerja pompa hidran dan standar NFPA 25' },
      { src: '/images/content/diskusi-kelompok-dalam-sesi-kelas-1.webp', alt: 'Analisis data pembacaan pitot gauge dan perhitungan debit air' }
    ]
  },
  {
    slug: 'pelatihan-sistem-deteksi-alarm-kebakaran-smoke-heat-detector',
    title: 'Pelatihan Sistem Deteksi & Alarm Kebakaran (Smoke & Heat Detector)',
    metaTitle: 'Pelatihan Sistem Deteksi & Alarm Kebakaran | Smoke & Heat Detector',
    description: 'Pelatihan Sistem Deteksi & Alarm Kebakaran durasi 16 JP (2 Hari). Biaya Rp 4.250.000, kuasai instalasi panel MCFA, smoke/heat detector, testing, dan trouble-shooting.',
    answer: 'Pelatihan Sistem Deteksi & Alarm Kebakaran (Smoke & Heat Detector) adalah program teknis 16 JP (2 hari kerja) berlandaskan Permenaker No. PER.02/MEN/1983 tentang Instalasi Alarm Kebakaran Otomatik dan SNI 03-3985-2000. Program ini membekali teknisi K3 dan engineering pemahaman perancangan zona deteksi, prinsip kerja photoelectric smoke detector, rate-of-rise/fixed temperature heat detector, pengoperasian Master Control Fire Alarm (MCFA) konvensional dan addressable, serta simulasi pengujian fungsional dan troubleshooting alarm palsu (false alarm).',
    highlights: [
      'Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)',
      'Landasan Regulasi: Permenaker No. PER.02/MEN/1983 & Standar SNI 03-3985-2000',
      'Output Pelatihan: Sertifikat Teknisi Sistem Deteksi & Alarm Kebakaran Resmi PJK3',
      'Praktik Teknis: Konfigurasi Panel MCFA, Testing Smoke/Heat Tester & Troubleshooting Loop'
    ],
    level: 'Sertifikasi Kompetensi Instrumentasi K3 Kebakaran',
    duration: '16 JP (2 Hari Kerja)',
    method: 'Blended Learning (Sesi Teori Interaktif + Workshop Praktik Panel MCFA & Modul Detektor)',
    legalBasis: 'Permenaker No. PER.02/MEN/1983, SNI 03-3985 & UU No. 1 Tahun 1970',
    targetAudience: [
      'Teknisi Elektrikal, Instrumentasi & Building Automation System (BAS)',
      'HSE Officer, Safety Inspector, dan Anggota Komite P2K3 Gedung Bertingkat',
      'Operator Central Control Room (CCR) & Fire Alarm Monitoring',
      'Kontraktor dan Teknisi Pemeliharaan Sistem Alarm Proteksi Kebakaran'
    ],
    prerequisites: [
      'Scan KTP / Tanda Pengenal resmi',
      'Pendidikan minimal SMK Teknik Elektro/Listrik/Elektronika atau D3/S1 Teknik',
      'Surat Penugasan Resmi Perusahaan (opsional bagi peserta mandiri)',
      'Pemahaman dasar tentang sirkuit listrik arus lemah DC'
    ],
    certificationOutput: [
      'Sertifikat Pelatihan Sistem Deteksi & Alarm Kebakaran resmi PJK3 PT Kreasi Ultimate Berjaya',
      'Surat Keterangan Jam Pelajaran Pelatihan (16 JP)',
      'Panduan Master Checklist Uji Fungsional Berkala Panel MCFA dan Detektor'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Regulasi Permenaker 02/1983 & Arsitektur Sistem Alarm Otomatis',
        topics: [
          'Ketentuan teknis instalasi alarm kebakaran otomatis sesuai Permenaker No. PER.02/MEN/1983',
          'Standar rancang bangun sistem deteksi kebakaran gedung bertingkat (SNI 03-3985-2000 & NFPA 72)',
          'Arsitektur sistem konvensional (zona) vs sistem addressable cerdas (loop & address)',
          'Komponen input (detektor, manual call point), kontrol (MCFA), dan output (bell, strobe, evac horn)'
        ],
        hours: '4 JP'
      },
      {
        module: 'Modul 02: Prinsip Kerja Detektor (Smoke, Heat, Flame, Gas) & Integrasi Sistem',
        topics: [
          'Karakteristik Photoelectric Smoke Detector vs Ionization Smoke Detector',
          'Karakteristik Rate of Rise (ROR) Heat Detector vs Fixed Temperature Heat Detector',
          'Penentuan jarak jangkau dan luas area proteksi per unit detektor pada ketinggian plafon berbeda',
          'Integrasi interlock sistem alarm dengan lift grounding, fan pressurization, dan damper AC'
        ],
        hours: '6 JP'
      },
      {
        module: 'Modul 03: Pengoperasian Panel MCFA, Testing Berkala & Troubleshooting Alarm Palsu',
        topics: [
          'Simulasi pengujian detektor menggunakan smoke tester aerosol dan heat detector tester tool',
          'Navigasi panel MCFA: Reset, Silence, Disabling Zone, Battery Backup Test, dan Ground Fault Test',
          'Teknik investigasi dan penanganan alarm palsu (false alarm / nuisance alarm) akibat debu/kelembapan',
          'Penyusunan logbook pemeliharaan dan laporan riksa uji alarm kebakaran'
        ],
        hours: '6 JP'
      }
    ],
    priceInfo: 'Investasi Rp 4.250.000 per peserta (Paket Public Training). Sudah termasuk modul pelatihan sistem alarm, e-certificate resmi, template dokumen uji berkala, dan seragam praktikum.',
    blocks: [
      {
        heading: 'Deteksi Dini Sebagai Garis Pertahanan Vital Menyelamatkan Jiwa',
        paragraphs: [
          'Sistem alarm kebakaran otomatis adalah indra pendengar dan pencium gedung yang bertugas memberikan peringatan sedini mungkin saat partikel asap atau kenaikan suhu abnormal terdeteksi. Sesuai Permenaker No. PER.02/MEN/1983, sistem ini wajib dipasang pada bangunan yang memiliki tingkat bahaya kebakaran tertentu guna memberikan waktu evakuasi yang cukup bagi penghuni.',
          'Kegagalan detektor mendeteksi api awal atau sebaliknya, seringnya alarm palsu berbunyi (nuisance alarms) yang memicu kepanikan dan pengabaian alarm oleh penghuni, merupakan masalah serius yang diatasi melalui pelatihan teknis ini.'
        ]
      },
      {
        heading: 'Pemahaman Panel MCFA Addressable & Interlock Otomatisasi Gedung',
        paragraphs: [
          'Peserta mempelajari konfigurasi panel Master Control Fire Alarm (MCFA) tipe full-addressable di mana setiap detektor memiliki alamat digital unik yang langsung menampilkan lokasi lantai dan ruangan presisi saat terjadi aktivasi api.',
          'Materi diperdalam dengan mekanisme interlock otomatis: bagaimana sinyal alarm memicu pelepasan pintu darurat magnetik (magnetic door holder), menghentikan suplai udara segar sistem AHU pendingin udara untuk mencegah penyebaran asap, serta menurunkan lift otomatis ke lantai lobi darurat.'
        ],
        bullets: [
          'Simulasi pengetesan baterai cadangan (standby battery test) untuk ketahanan minimal 24 jam',
          'Pemeriksaan manual call point (break glass / pull station) dan bel peringatan alarm',
          'Pembersihan optik sensor debu smoke detector menggunakan kaleng udara bertekanan',
          'Pelaporan berkala keandalan instalasi alarm kebakaran ke instansi ketenagakerjaan'
        ]
      },
      {
        heading: 'Sertifikat Kompetensi Pemeliharaan Sistem Alarm K3',
        paragraphs: [
          'Lulusan pelatihan menerima Sertifikat Kompetensi Teknisi Sistem Deteksi & Alarm Kebakaran dari PT Kreasi Ultimate Berjaya yang membuktikan kemampuan pemeliharaan preventif instalasi proteksi kebakaran berstandar SNI.'
        ]
      },
      {
        heading: 'Pilihan Format Pelatihan: Public Class & In-House Training',
        paragraphs: [
          'Kami menyelenggarakan Public Class setiap bulan secara blended learning. Untuk pengelola gedung perhotelan, apartemen, dan pabrik, kami menyediakan workshop In-House Training langsung pada panel MCFA eksisting fasilitas Anda.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Kapan sebaiknya menggunakan Heat Detector dibandingkan Smoke Detector?',
        answer: 'Heat Detector (detektor panas) direkomendasikan untuk area yang secara normal berdebu, berasap, atau beruap seperti dapur restoran, area bengkel las, ruang boiler, dan tempat parkir kendaraan, di mana penggunaan Smoke Detector akan menimbulkan alarm palsu terus-menerus.'
      },
      {
        question: 'Berapa biaya pelatihan sistem deteksi dan alarm kebakaran?',
        answer: 'Biaya resmi pelatihan adalah Rp 4.250.000 per peserta untuk program Public Training durasi 16 JP (2 Hari Kerja). Biaya sudah termasuk sertifikat resmi, modul materi, template checklist uji fungsional, dan workshop panel.'
      },
      {
        question: 'Berapa radius cakupan proteksi satu unit Smoke Detector pada plafon normal?',
        answer: 'Sesuai SNI 03-3985-2000, satu unit Smoke Detector dapat memproteksi area dengan luas lantai hingga 74 m2 dengan radius jangkauan proteksi sekitar 7,5 meter pada ketinggian langit-langit di bawah 3,6 meter.'
      },
      {
        question: 'Bagaimana cara mengatasi alarm kebakaran yang sering berbunyi palsu (false alarm)?',
        answer: 'Langkah pertama adalah memeriksa histori kejadian pada panel MCFA untuk mengidentifikasi nomor detektor yang bermasalah. Kemudian lakukan pembersihan kamar sensor optik dari tumpukan debu, periksa kelembaban ruangan, atau pertimbangkan penggantian tipe detektor bila penempatan awalnya tidak sesuai peruntukan ruangan.'
      },
      {
        question: 'Berapa lama baterai cadangan MCFA harus sanggup menyuplai daya darurat?',
        answer: 'Berdasarkan standar Permenaker 02/1983 dan SNI 03-3985, baterai cadangan (emergency backup battery) panel MCFA harus mampu mempertahankan sistem dalam kondisi siaga (supervisory condition) sekurang-kurangnya 24 jam, dan dilanjutkan dengan kondisi alarm berbunyi penuh minimal selama 30 menit.'
      }
    ],
    related: [
      'pelatihan/k3-kebakaran-kelas-b',
      'pelatihan/k3-kebakaran-kelas-a',
      'pelatihan/pelatihan-pengujian-sistem-hydran-kebakaran-pomp-pipa-nozzle',
      'pelatihan/pelatihan-penyusunan-dokumen-fire-emergency-plan-fep-gedung',
      'panduan/sop-pengaktifan-kembali-sistem-proteksi-api-reset-panel-alarm-kebakaran',
      'profesi/ahli-k3-kebakaran',
      'regulasi-k3/permenaker-02-1983-instalasi-alarm-kebakaran-automatik',
      'regulasi-k3/sni-03-3985-2000-sistem-deteksi-alarm-kebakaran-sni'
    ],
    sources: [
      {
        label: 'Permenaker No. PER.02/MEN/1983 tentang Instalasi Alarm Kebakaran Otomatik',
        url: 'https://jdih.kemnaker.go.id/katalog/permenaker-02-1983',
        publisher: 'Kementerian Tenaga Kerja RI'
      },
      {
        label: 'SNI 03-3985-2000 Tata Cara Perencanaan, Pemasangan dan Pengujian Sistem Deteksi dan Alarm Kebakaran',
        url: 'https://bsn.go.id',
        publisher: 'Badan Standardisasi Nasional'
      },
      {
        label: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja',
        url: 'https://jdih.kemnaker.go.id/katalog/uu-1-1970',
        publisher: 'Pemerintah RI / Lembaran Negara RI'
      }
    ],
    primaryKeyword: 'pelatihan sistem deteksi & alarm kebakaran (smoke & heat detector)',
    searchIntent: 'biaya jadwal materi dan sertifikasi pelatihan sistem deteksi dan alarm kebakaran mcfa',
    primaryCtaText: 'Konsultasi Pelatihan Alarm Kebakaran',
    image: '/images/content/peserta-menyimak-presentasi-di-ruang-kelas-1.webp',
    imageAlt: 'Peserta pelatihan menyimak penjelasan konfigurasi panel Master Control Fire Alarm dan loop detektor kebakaran',
    gallery: [
      { src: '/images/content/peserta-menyimak-presentasi-di-ruang-kelas-1.webp', alt: 'Pemaparan teori sistem deteksi alarm kebakaran otomatis' },
      { src: '/images/content/instruktur-memandu-sesi-kelas-1.webp', alt: 'Instruktur mendemokan pengujian fungsional detektor asap' },
      { src: '/images/content/diskusi-kelompok-dalam-sesi-kelas-1.webp', alt: 'Simulasi pemetaan zona alarm dan interlock lift darurat' },
      { src: '/images/content/asesmen-individu-dengan-pengisian-dokumen-1.webp', alt: 'Pemeriksaan checklist pemeliharaan panel MCFA' }
    ]
  },
  {
    slug: 'pelatihan-simulasi-evakuasi-kebakaran-drill-gedung-bertingkat',
    title: 'Pelatihan Simulasi Evakuasi Kebakaran (Fire Drill Gedung Bertingkat)',
    metaTitle: 'Pelatihan Simulasi Evakuasi Kebakaran Gedung Bertingkat | Fire Drill',
    description: 'Pelatihan Simulasi Evakuasi Kebakaran Gedung Bertingkat durasi 8 JP (1 Hari). Biaya Rp 3.250.000, pandu floor warden, skenario drill, assembly point, dan audit rute evakuasi.',
    answer: 'Pelatihan Simulasi Evakuasi Kebakaran (Fire Drill Gedung Bertingkat) adalah pelatihan taktis 8 JP (1 hari intensif) berlandaskan Kepmenaker No. KEP.186/MEN/1999 dan Permen PU No. 26/PRT/M/2008. Pelatihan ini melatih manajemen gedung, tim tanggap darurat, dan Floor Warden merancang skenario evakuasi darurat, mengorganisasi alur pergerakan penghuni melalui tangga darurat tahan api (pressurized stairwell), melakukan penyisiran ruangan (sweeping), penghitungan personil di titik kumpul (assembly point head-count), serta mengevaluasi catatan waktu tanggap (evacuation response time).',
    highlights: [
      'Durasi Pembinaan: 8 JP (1 Hari Kerja Intensif)',
      'Landasan Regulasi: Kepmenaker No. KEP.186/MEN/1999 & Permen PU No. 26/PRT/M/2008',
      'Output Pelatihan: Sertifikat Kompetensi Pemanduan Evakuasi Kebakaran Resmi PJK3',
      'Skenario Praktik: Roleplay Floor Warden, Sweeping Lantai & Simulasi Assembly Point'
    ],
    level: 'Sertifikasi Kompetensi Taktis Tanggap Darurat Gedung',
    duration: '8 JP (1 Hari Kerja)',
    method: 'Interactive Workshop & Live Evacuation Drill Simulation',
    legalBasis: 'Kepmenaker No. KEP.186/MEN/1999, Permen PU No. 26/PRT/M/2008 & UU No. 1 Tahun 1970',
    targetAudience: [
      'Floor Warden, Zone Warden, dan Fire Marshall Gedung Bertingkat',
      'Building Manager, Property Manager, Security Chief, dan Safety Officer',
      'HRD Manager dan Tim Tanggap Darurat Perusahaan Penyewa (Tenant)',
      'Petugas Evakuasi Fasilitas Rumah Sakit, Hotel, Mall, dan Kampus'
    ],
    prerequisites: [
      'Scan KTP / Kartu Identitas resmi',
      'Pendidikan minimal SMA/SMK atau D3/S1 semua jurusan',
      'Surat Penugasan Resmi Perusahaan / Pengelola Gedung',
      'Kondisi fisik sehat untuk mobilitas simulasi penurunaan tangga darurat'
    ],
    certificationOutput: [
      'Sertifikat Pelatihan Simulasi Evakuasi Kebakaran resmi PJK3 PT Kreasi Ultimate Berjaya',
      'Surat Keterangan Jam Pelajaran Pelatihan (8 JP)',
      'Format Template Evaluasi Waktu Tanggap Evakuasi dan Checklist Floor Warden'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Perilaku Manusia Saat Panik & Prinsip Sarana Penyelamatan Jiwa',
        topics: [
          'Psikologi massa dalam bencana kebakaran dan penanganan perilaku histeris/panik',
          'Persyaratan teknis sarana evakuasi: pintu kebakaran otomatis menutup (self-closing), tangga darurat kedap asap (pressurized stairwell)',
          'Sistem pencahayaan darurat (emergency lighting) dan penunjuk arah jalan keluar (EXIT signs)',
          'Prosedur khusus evakuasi penyandang disabilitas, ibu hamil, dan tamu berkunjung'
        ],
        hours: '2 JP'
      },
      {
        module: 'Modul 02: Peran Komando Floor Warden & Penyusunan Skenario Fire Drill',
        topics: [
          'Tugas pokok Floor Warden sebelum, saat, dan sesudah alarm darurat kebakaran berbunyi',
          'Teknik penyisiran ruangan (sweeping), toilet, dan ruang rapat untuk memastikan nol korban tertinggal',
          'Penutupan pintu kompartemen untuk membatasi penyebaran asap (containment)',
          'Perancangan skenario latihan evakuasi: simulasi rute utama terblokir dan pengalihan ke tangga darurat alternatif'
        ],
        hours: '3 JP'
      },
      {
        module: 'Modul 03: Eksekusi Live Drill, Pengelolaan Assembly Point & Evaluasi Rencana Aksi',
        topics: [
          'Pelaksanaan latihan evakuasi serentak (live drill) menuju titik kumpul aman (assembly point)',
          'Mekanisme absensi cepat (head-count roll call) dan pelaporan status korban kepada Incident Commander',
          'Pengukuran parameter keberhasilan: Total Evacuation Time dan Response Time',
          'Sesi debriefing evaluasi hambatan dan perumusan rencana perbaikan SOP tanggap darurat'
        ],
        hours: '3 JP'
      }
    ],
    priceInfo: 'Investasi Rp 3.250.000 per peserta (Paket Public Class) atau penawaran khusus paket in-house fire drill terpadu seluruh gedung. Sudah mencakup modul skenario drill, sertifikat resmi, formulir evaluasi, dan konsultasi SOP.',
    blocks: [
      {
        heading: 'Kewajiban Penyelenggaraan Latihan Evakuasi Kebakaran Berkala',
        paragraphs: [
          'Sesuai ketentuan Kepmenaker No. KEP.186/MEN/1999 dan standar keselamatan bangunan gedung, setiap pengelola gedung perkantoran dan fasilitas industri wajib menyelenggarakan latihan simulasi evakuasi kebakaran (fire drill) sekurang-kurangnya 1 (satu) kali dalam setahun.',
          'Dalam situasi kebakaran nyata, kepanikan dan kepulan asap tebal yang membutakan seringkali menjadi pembunuh utama sebelum api menyentuh korban. Tanpa latihan evakuasi terencana, penghuni cenderung berebut menggunakan lift yang berbahaya atau terjebak di lorong buntu.'
        ]
      },
      {
        heading: 'Peran Kunci Floor Warden Sebagai Komandan Evakuasi Tiap Lantai',
        paragraphs: [
          'Pelatihan ini mematangkan kepemimpinan para Floor Warden yang bertindak sebagai pemandu evakuasi resmi di lantainya masing-masing. Floor Warden dibekali topi penanda khusus, peluit, dan daftar absensi untuk mengarahkan barisan penghuni secara tertib menuju tangga darurat terdekat.',
          'Peserta dilatih melakukan teknik sweeping ruangan secara cepat dan sistematis, memastikan tidak ada karyawan yang tertinggal di toilet atau ruang istirahat, serta memberikan tanda pita pada pintu ruangan yang telah bersih diperiksa.'
        ],
        bullets: [
          'Instruksi verbal yang tenang namun tegas untuk mencegah terjadinya desak-desakan di pintu keluar',
          'Prosedur evakuasi horisontal mendahului evakuasi vertikal pada fasilitas rumah sakit',
          'Pemeriksaan integritas pintu darurat agar selalu tertutup rapat menahan tekanan asap',
          'Penghitungan personil yang akurat di titik kumpul aman (Assembly Point)'
        ]
      },
      {
        heading: 'Sertifikat Kompetensi & Laporan Hasil Latihan Kebakaran',
        paragraphs: [
          'Lulusan pelatihan menerima Sertifikat Pemanduan Evakuasi Kebakaran dari PT Kreasi Ultimate Berjaya. Laporan hasil evaluasi waktu evakuasi yang disusun selama pelatihan menjadi bukti resmi ketaatan regulasi untuk pemenuhan kriteria SMK3 dan perpanjangan Sertifikat Laik Fungsi (SLF) gedung.'
        ]
      },
      {
        heading: 'Penyelenggaraan In-House Fire Drill Skala Penuh',
        paragraphs: [
          'Selain kelas public, kami spesialis dalam memfasilitasi Full-Scale In-House Fire Drill untuk gedung perkantoran bertingkat tinggi, kawasan industri manufaktur, rumah sakit, dan pusat perbelanjaan dengan pelibatan aparat Dinas Pemadam Kebakaran dan Kepolisian.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Berapa kali simulasi evakuasi kebakaran (fire drill) wajib dilaksanakan dalam setahun?',
        answer: 'Berdasarkan Kepmenaker No. KEP.186/MEN/1999 dan standar keselamatan gedung bertingkat, latihan evakuasi kebakaran wajib dilaksanakan sekurang-kurangnya 1 (satu) kali dalam setahun untuk seluruh penghuni gedung.'
      },
      {
        question: 'Berapa biaya pelatihan simulasi evakuasi kebakaran gedung bertingkat?',
        answer: 'Biaya resmi pelatihan adalah Rp 3.250.000 per peserta untuk program Public Training durasi 8 JP (1 Hari). Untuk pendampingan In-House Fire Drill terpadu satu gedung penuh bersama ribuan tenant, kami menyediakan proposal paket korporat khusus.'
      },
      {
        question: 'Berapa target waktu evakuasi yang ideal untuk sebuah gedung perkantoran?',
        answer: 'Target waktu evakuasi ideal umumnya berada di kisaran 3 hingga 5 menit sejak tanda alarm berbunyi hingga lantai terakhir bersih dan seluruh penghuni mencapai titik kumpul aman (Assembly Point), tergantung pada ketinggian gedung dan jumlah tangga darurat yang tersedia.'
      },
      {
        question: 'Bolehkah menggunakan lift saat evakuasi darurat kebakaran?',
        answer: 'Sama sekali TIDAK boleh. Lift penumpang dilarang keras digunakan saat kebakaran karena potensi terhentinya aliran listrik yang dapat menjebak korban di dalam sangkar lift di lantai kebakaran. Seluruh penghuni wajib diarahkan menuruni tangga darurat tahan api.'
      },
      {
        question: 'Apa saja kriteria lokasi yang layak dijadikan Titik Kumpul Aman (Assembly Point)?',
        answer: 'Titik kumpul aman harus berada di area terbuka di luar bangunan, bebas dari risiko runtuhan kaca atau struktur bangunan (jarak aman minimal sama dengan tinggi gedung bila memungkinkan), tidak menghalangi akses manuver mobil pemadam kebakaran, dan memiliki kapasitas yang memadai untuk menampung seluruh penghuni.'
      }
    ],
    related: [
      'pelatihan/k3-kebakaran-kelas-d',
      'pelatihan/k3-kebakaran-kelas-b',
      'pelatihan/pelatihan-penyusunan-dokumen-fire-emergency-plan-fep-gedung',
      'pelatihan/pelatihan-inspeksi-tangga-darurat-pintu-kebakaran-pressurized-stairwell',
      'panduan/biaya-pelatihan-k3-kebakaran',
      'profesi/ahli-k3-kebakaran',
      'regulasi-k3/kepmenaker-186-1999-unit-penanggulangan-kebakaran'
    ],
    sources: [
      {
        label: 'Kepmenaker No. KEP.186/MEN/1999 tentang Unit Penanggulangan Kebakaran di Tempat Kerja',
        url: 'https://jdih.kemnaker.go.id/katalog/kepmenaker-186-1999',
        publisher: 'Kementerian Ketenagakerjaan RI'
      },
      {
        label: 'Permen PU No. 26/PRT/M/2008 tentang Persyaratan Teknis Sistem Proteksi Kebakaran pada Bangunan Gedung dan Lingkungan',
        url: 'https://jdih.pu.go.id',
        publisher: 'Kementerian Pekerjaan Umum RI'
      },
      {
        label: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja',
        url: 'https://jdih.kemnaker.go.id/katalog/uu-1-1970',
        publisher: 'Pemerintah RI / Lembaran Negara RI'
      }
    ],
    primaryKeyword: 'pelatihan simulasi evakuasi kebakaran (fire drill gedung bertingkat)',
    searchIntent: 'biaya jadwal materi dan jasa pendampingan pelatihan simulasi evakuasi kebakaran gedung bertingkat fire drill',
    primaryCtaText: 'Konsultasi Fire Drill Gedung',
    image: '/images/content/foto-bersama-peserta-dan-instruktur-di-kelas-1.webp',
    imageAlt: 'Peserta pelatihan fire drill dan floor warden gedung bertingkat berfoto bersama seusai simulasi evakuasi',
    gallery: [
      { src: '/images/content/foto-bersama-peserta-dan-instruktur-di-kelas-1.webp', alt: 'Dokumentasi peserta pelatihan simulasi evakuasi kebakaran' },
      { src: '/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-1.webp', alt: 'Briefing floor warden sebelum latihan evakuasi tangga darurat' },
      { src: '/images/content/diskusi-instruktur-dan-peserta-di-ruang-seminar-1.webp', alt: 'Penyusunan skenario rute evakuasi darurat gedung bertingkat' },
      { src: '/images/content/peserta-menyimak-presentasi-di-ruang-kelas-1.webp', alt: 'Pembahasan psikologi massa saat kondisi darurat kebakaran' }
    ]
  },
  {
    slug: 'pelatihan-penyusunan-dokumen-fire-emergency-plan-fep-gedung',
    title: 'Pelatihan Penyusunan Dokumen Fire Emergency Plan (FEP) Gedung',
    metaTitle: 'Pelatihan Penyusunan Fire Emergency Plan (FEP) Gedung | Silabus & Biaya',
    description: 'Pelatihan Penyusunan Dokumen Fire Emergency Plan (FEP) Gedung durasi 16 JP (2 Hari). Biaya Rp 3.750.000, susun SOP darurat, denah evakuasi, struktur komando, dan audit proteksi.',
    answer: 'Pelatihan Penyusunan Dokumen Fire Emergency Plan (FEP) Gedung adalah program pembinaan penyusunan rencana kontinjensi darurat 16 JP (2 hari kerja) berdasarkan Kepmenaker No. KEP.186/MEN/1999 dan standar NFPA 1600. Pelatihan ini membimbing tim HSE dan pengelola gedung menyusun dokumen FEP komprehensif yang mencakup struktur organisasi komando darurat (Incident Command System), pemetaan zona bahaya dan denah evakuasi, prosedur standar pemadaman api awal, protokol komunikasi darurat internal dan eksternal, rencana kelangsungan bisnis (business continuity plan), serta jadwal inspeksi sarana proteksi berkala.',
    highlights: [
      'Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)',
      'Landasan Regulasi: Kepmenaker No. KEP.186/MEN/1999 & Standar NFPA 1600',
      'Output Pelatihan: Sertifikat Pelatihan Penyusunan FEP Resmi PJK3',
      'Fasilitas Praktik: Template Lengkap Dokumen FEP, SOP Tanggap Darurat & Denah Evakuasi'
    ],
    level: 'Sertifikasi Kompetensi Perancangan Dokumen K3',
    duration: '16 JP (2 Hari Kerja)',
    method: 'Blended Learning (Interactive Theory & Hands-on Document Authoring Workshop)',
    legalBasis: 'Kepmenaker No. KEP.186/MEN/1999, Permen PU No. 26/PRT/M/2008 & UU No. 1 Tahun 1970',
    targetAudience: [
      'HSE Manager, Safety Coordinator, dan Anggota Komite P2K3 Perusahaan',
      'Building Manager, Property Manager, dan Penanggung Jawab Kelaikan Gedung',
      'Chief Security, Koordinator Tanggap Darurat, dan Facility Maintenance Head',
      'Konsultan K3 dan Perancang Dokumen Keselamatan Bangunan Gedung Komersial'
    ],
    prerequisites: [
      'Scan KTP / Kartu Identitas resmi yang masih berlaku',
      'Pendidikan minimal D3 atau S1 semua jurusan, atau SMA berpengalaman kerja di bidang HSE minimal 2 tahun',
      'Surat Penugasan Resmi Perusahaan (opsional bagi peserta mandiri)',
      'Membawa data denah arsitektur dan sarana proteksi gedung masing-masing untuk workshop'
    ],
    certificationOutput: [
      'Sertifikat Pelatihan Penyusunan Dokumen Fire Emergency Plan resmi PJK3 PT Kreasi Ultimate Berjaya',
      'Surat Keterangan Jam Pelajaran Pelatihan (16 JP)',
      'Master Draft File Dokumen FEP Gedung Lengkap Format Word/PDF Siap Pakai'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Kerangka Regulasi & Komponen Wajib Dokumen Fire Emergency Plan',
        topics: [
          'Dasar hukum kewajiban rencana tanggap darurat: Kepmenaker 186/1999 dan Permen PU 26/2008',
          'Sistematika isi dokumen FEP: Profil bangunan, identifikasi bahaya api, dan penilaian risiko',
          'Struktur organisasi tanggap darurat (Emergency Response Organization) dan job description tiap peran',
          'Pemetaan zona evakuasi, penentuan pintu darurat utama, dan titik kumpul (assembly point)'
        ],
        hours: '4 JP'
      },
      {
        module: 'Modul 02: Penyusunan Standar Operasional Prosedur (SOP) & Alur Komunikasi Darurat',
        topics: [
          'Penyusunan SOP pemadaman api awal menggunakan APAR dan hidran gedung',
          'Prosedur evakuasi bertahap (phased evacuation) vs evakuasi serentak (total evacuation)',
          'Alur pelaporan darurat: internal call tree, pemberitahuan ke dinas pemadam dan rumah sakit',
          'Prosedur pengamanan dokumen rahasia, penghentian utilitas gas/listrik, dan isolasi area'
        ],
        hours: '6 JP'
      },
      {
        module: 'Modul 03: Workshop Perancangan Denah Evakuasi, Jadwal Inspeksi & Pengujian FEP',
        topics: [
          'Standarisasi simbol dan tata letak denah evakuasi gedung (Evacuation Route Map)',
          'Penyusunan jadwal inspeksi berkala sarana proteksi aktif dan pasif (APAR, hidran, alarm, pintu darurat)',
          'Program pengujian keandalan dokumen FEP melalui simulasi drill berkala tahunan',
          'Review dokumen draf FEP peserta bersama instruktur dan ujian evaluasi akhir'
        ],
        hours: '6 JP'
      }
    ],
    priceInfo: 'Investasi Rp 3.750.000 per peserta (Paket Public Class). Biaya sudah termasuk modul pelatihan penyusunan FEP, e-certificate resmi, master template dokumen FEP format digital, dan bimbingan telaah draf dokumen.',
    blocks: [
      {
        heading: 'Pentingnya Dokumen Fire Emergency Plan (FEP) yang Terstandarisasi',
        paragraphs: [
          'Fire Emergency Plan (FEP) adalah dokumen pedoman operasional wajib yang mengatur langkah-langkah sistematis yang harus dilakukan oleh seluruh penghuni dan tim tanggap darurat saat terjadi kebakaran di dalam gedung. Tanpa dokumen FEP yang disahkan oleh pimpinan, penanganan kebakaran akan berjalan secara serampangan tanpa rantai komando yang jelas.',
          'Dokumen FEP yang tersusun baik menjadi rujukan utama dalam pengajuan izin Sertifikat Laik Fungsi (SLF) bangunan gedung dari Dinas Cipta Karya/PUPR, pemenuhan kriteria 6.7 SMK3 PP 50/2012, serta bukti kepatuhan premi asuransi kebakaran.'
        ]
      },
      {
        heading: 'Workshop Aplikatif: Menyusun Manual FEP Lengkap Siap Terapkan',
        paragraphs: [
          'Pelatihan ini dirancang dengan metode workshop aplikatif. Setiap peserta dipandu bab demi bab untuk menyusun dokumen FEP spesifik fasilitasnya sendiri: mulai dari pendataan nomor kontak darurat lokal, pembagian tugas Incident Commander, rute tangga darurat, penataan denah assembly point, hingga prosedur pemulihan bisnis pasca bencana.',
          'Peserta tidak sekadar menerima teori, melainkan pulang dengan membawa draf master dokumen FEP yang siap disahkan oleh direksi perusahaan.'
        ],
        bullets: [
          'Formulasi rantai komando Incident Command System (ICS) tingkat perusahaan',
          'Desain denah evakuasi standar ISO 23601 dengan penunjuk arah dan lokasi alat pemadam',
          'Prosedur koordinasi resmi dengan Dinas Penanggulangan Kebakaran dan Penyelamatan setempat',
          'Penyusunan checklist audit berkala kelaikan jalur dan pintu keluar darurat'
        ]
      },
      {
        heading: 'Sertifikat Kompetensi Perancang Dokumen Tanggap Darurat',
        paragraphs: [
          'Peserta yang lulus evaluasi draf dokumen menerima Sertifikat Pelatihan Penyusunan Dokumen FEP resmi dari PT Kreasi Ultimate Berjaya yang diakui sebagai bukti kompetensi HSE dalam tata kelola kesiapsiagaan darurat.'
        ]
      },
      {
        heading: 'Skema Kelas Public & Pendampingan In-House Corporate',
        paragraphs: [
          'Kami membuka Public Class setiap bulan secara blended learning. Kami juga menyediakan layanan pendampingan In-House Workshop langsung di gedung perusahaan Anda untuk menyusun dokumen FEP terpadu dari awal hingga terbit rekomendasi teknis.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Apakah setiap gedung perusahaan wajib memiliki dokumen Fire Emergency Plan (FEP)?',
        answer: 'Ya, sesuai Kepmenaker No. KEP.186/MEN/1999 dan regulasi teknis keselamatan bangunan gedung Permen PU No. 26/PRT/M/2008, setiap pengelola tempat kerja dan bangunan gedung bertingkat wajib memiliki prosedur rencana tanggap darurat kebakaran (FEP) tertulis yang disosialisasikan kepada seluruh penghuni.'
      },
      {
        question: 'Berapa biaya pelatihan penyusunan dokumen Fire Emergency Plan (FEP)?',
        answer: 'Biaya pelatihan resmi adalah Rp 3.750.000 per peserta untuk program Public Training durasi 16 JP (2 Hari Kerja). Sudah mencakup sertifikat resmi, modul materi, master template dokumen FEP dalam format Word/PDF, dan konsultasi bedah draf dokumen.'
      },
      {
        question: 'Informasi apa saja yang harus ada di dalam dokumen FEP gedung?',
        answer: 'Dokumen FEP wajib memuat: profil dan denah gedung, identifikasi potensi bahaya api, struktur komando tanggap darurat dan nomor kontak darurat, prosedur pemadaman awal, prosedur evakuasi penghuni, alur pelaporan eksternal, penataan titik kumpul (assembly point), serta jadwal latihan dan pemeliharaan alat proteksi.'
      },
      {
        question: 'Kapan dokumen Fire Emergency Plan (FEP) harus diperbarui?',
        answer: 'Dokumen FEP wajib ditinjau ulang dan diperbarui sekurang-kurangnya 1 (satu) tahun sekali, atau sesegera mungkin jika terjadi: renovasi tata letak ruangan / jalur evakuasi gedung, pergantian personil tim tanggap darurat, perubahan jumlah penghuni signifikan, atau hasil evaluasi latihan kebakaran menunjukkan kelemahan prosedur.'
      },
      {
        question: 'Apakah pelatihan ini membimbing pembuatan denah evakuasi (Evacuation Route Map)?',
        answer: 'Ya, dalam pelatihan ini terdapat sesi khusus workshop perancangan denah evakuasi gedung standar, peletakan simbol posisi APAR, hidran, tombol alarm, dan arah panah evakuasi yang mudah dipahami oleh penghuni maupun tamu.'
      }
    ],
    related: [
      'pelatihan/k3-kebakaran-kelas-b',
      'pelatihan/k3-kebakaran-kelas-a',
      'pelatihan/pelatihan-simulasi-evakuasi-kebakaran-drill-gedung-bertingkat',
      'pelatihan/k3-kebakaran',
      'panduan/biaya-pelatihan-k3-kebakaran',
      'profesi/ahli-k3-kebakaran',
      'regulasi-k3/kepmenaker-186-1999-unit-penanggulangan-kebakaran'
    ],
    sources: [
      {
        label: 'Kepmenaker No. KEP.186/MEN/1999 tentang Unit Penanggulangan Kebakaran di Tempat Kerja',
        url: 'https://jdih.kemnaker.go.id/katalog/kepmenaker-186-1999',
        publisher: 'Kementerian Ketenagakerjaan RI'
      },
      {
        label: 'Permen PU No. 26/PRT/M/2008 tentang Persyaratan Teknis Sistem Proteksi Kebakaran pada Bangunan Gedung dan Lingkungan',
        url: 'https://jdih.pu.go.id',
        publisher: 'Kementerian Pekerjaan Umum RI'
      },
      {
        label: 'NFPA 1600: Standard on Continuity, Emergency, and Crisis Management',
        url: 'https://www.nfpa.org/codes-and-standards/nfpa-1600-standard-development/1600',
        publisher: 'National Fire Protection Association'
      }
    ],
    primaryKeyword: 'pelatihan penyusunan dokumen fire emergency plan (fep) gedung',
    searchIntent: 'biaya jadwal materi dan template pelatihan penyusunan dokumen fire emergency plan fep gedung bertingkat',
    primaryCtaText: 'Konsultasi Penyusunan Dokumen FEP',
    image: '/images/content/diskusi-kelompok-dalam-sesi-kelas-1.webp',
    imageAlt: 'Peserta pelatihan K3 berdiskusi merancang prosedur operasional standar tanggap darurat dan denah evakuasi dokumen FEP',
    gallery: [
      { src: '/images/content/diskusi-kelompok-dalam-sesi-kelas-1.webp', alt: 'Diskusi kelompok perancangan dokumen Fire Emergency Plan' },
      { src: '/images/content/asesmen-individu-dengan-pengisian-dokumen-1.webp', alt: 'Penyusunan draf Standar Operasional Prosedur penanggulangan kebakaran' },
      { src: '/images/content/instruktur-memandu-sesi-kelas-1.webp', alt: 'Pemaparan persyaratan dokumen FEP sesuai Permen PU 26/2008' },
      { src: '/images/content/peserta-menyimak-presentasi-di-ruang-kelas-1.webp', alt: 'Pembahasan alur komunikasi krisis dan Incident Command System' }
    ]
  }
];

// Write each record to src/content/pelatihan/[slug].ts
for (const item of batch2Data) {
  const filePath = path.resolve('src/content/pelatihan', item.slug + '.ts');
  const recordObj = {
    section: 'pelatihan',
    slug: item.slug,
    title: item.title,
    metaTitle: item.metaTitle,
    description: item.description,
    answer: item.answer,
    highlights: item.highlights,
    courseDetails: {
      level: item.level,
      duration: item.duration,
      method: item.method,
      legalBasis: item.legalBasis,
      targetAudience: item.targetAudience,
      prerequisites: item.prerequisites,
      certificationOutput: item.certificationOutput,
      syllabusModules: item.syllabusModules,
      priceInfo: item.priceInfo
    },
    blocks: item.blocks,
    faqs: item.faqs,
    related: item.related,
    sources: item.sources,
    status: 'published',
    publishedAt: '2026-08-01',
    updatedAt: '2026-09-10',
    indexable: true,
    intent: item.primaryKeyword + ' silabus biaya jadwal materi sertifikasi resmi',
    primaryKeyword: item.primaryKeyword,
    searchIntent: item.searchIntent,
    intentType: 'commercial',
    parentTopic: 'Pelatihan Penanggulangan Kebakaran & Emergency Response',
    cannibalizationGroup: 'pelatihan_penanggulangan_kebakaran',
    contentKind: 'program',
    primaryCtaText: item.primaryCtaText,
    primaryCtaIntent: 'jadwal',
    secondaryCtaText: 'Konsultasi In-House Training',
    secondaryCtaIntent: 'perusahaan',
    image: {
      src: item.image,
      alt: item.imageAlt
    },
    gallery: item.gallery
  };

  const fileContent = 'import { type ContentRecord } from \'../../lib/content-types\';\n\nexport const record: ContentRecord = ' + JSON.stringify(recordObj, null, 2) + ';\n\nexport default record;\n';
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log('✓ Successfully wrote:', item.slug);
}

console.log('Batch 2 (Fire Safety) Generation Complete: 10 files written.');

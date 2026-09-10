import fs from 'fs';
import path from 'path';

const batch4Programs = [
  {
    slug: "k3-perkantoran",
    title: "Pelatihan K3 Perkantoran & Keselamatan Fasilitas Kerja non-Pabrik",
    metaTitle: "Pelatihan K3 Perkantoran Permenkes 48/2016 | Biaya, Jadwal & Sertifikasi 16 JP",
    description: "Pelatihan K3 Perkantoran & Keselamatan Fasilitas Non-Pabrik durasi 16 JP (2 Hari). Biaya Rp 3.750.000, materi ergonomi VDT, sirkulasi udara IAQ, tanggap darurat gedung, dan standar Permenkes 48/2016 bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan K3 Perkantoran & Keselamatan Fasilitas Kerja non-Pabrik adalah program pembinaan 16 JP (2 Hari Kerja) berbasis Permenkes No. 48 Tahun 2016 dan PP No. 50 Tahun 2012. Pelatihan ini melatih pengelola gedung, staf HRD/GA, dan komite P2K3 mengidentifikasi bahaya spesifik kantor (gangguan muskuloskeletal VDT/komputer, sindrom gedung sakit/SBS, instalasi kelistrikan kantor, bahaya kebakaran gedung bertingkat, dan manajemen stres kerja).",
    highlights: [
      "Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)",
      "Landasan Regulasi: Permenkes No. 48 Tahun 2016 tentang Standar Keselamatan dan Kesehatan Kerja Perkantoran",
      "Investasi Resmi: Rp 3.750.000 / Peserta (Materi Praktis Ergonomi & Manajemen Gedung)",
      "Output: Sertifikat Kompetensi K3 Perkantoran & Template Kebijakan K3 Fasilitas Kantor"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi K3 Sektoral Perkantoran & Fasilitas Layanan",
      duration: "16 JP (2 Hari Kerja)",
      method: "Blended / Tatap Muka (Penilaian Ergonomi ROSA, Audit Pencahayaan/Udara, Simulasi Evakuasi & Ujian)",
      legalBasis: "Permenkes No. 48 Tahun 2016, Permenaker No. 05 Tahun 2018 & UU No. 1 Tahun 1970",
      targetAudience: [
        "HRD Manager, General Affairs (GA) & Building Management",
        "Staff HSE Perkantoran, Lembaga Finansial, Perbankan & Korporasi",
        "Anggota Komite P2K3 Perkantoran & Pengelola Fasilitas Kerja Bersama (Coworking Space)",
        "Dokter / Paramedis Perusahaan Perkantoran"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK atau D3/S1",
        "Scan KTP / Kartu Pegawai",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Pelatihan K3 Perkantoran dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Pengawas K3 Fasilitas Perkantoran",
        "Checklist Lengkap Audit Mandiri K3 Perkantoran (Formulir Ergonomi Komputer, IAQ, dan Fire Warden)"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Standar Regulasi K3 Perkantoran Permenkes 48/2016",
          topics: [
            "4 Pilar K3 Perkantoran: Keselamatan Kerja, Kesehatan Kerja, Lingkungan Kerja Perkantoran, dan Ergonomi",
            "Persyaratan Teknis Sarana Gedung: Tangga Darurat, Jalur Evakuasi, Lebar Koridor, dan Pintu Kebakaran",
            "Tata Kelola Dokumen Kebijakan K3 Kantor & Pelaporan Komite P2K3"
          ],
          hours: "4 JP"
        },
        {
          module: "Modul 02: Ergonomi Komputer (VDT) & Kualitas Lingkungan Ruangan",
          topics: [
            "Penilaian Risiko Ergonomi Stasiun Kerja Komputer (Metode ROSA - Rapid Office Strain Assessment)",
            "Pengaturan Kursi Ergonomis, Posisi Monitor, Keyboard, dan Program Peregangan di Meja Kerja (Stretching)",
            "Pengukuran Kualitas Udara Dalam Ruangan (Indoor Air Quality): Suhu, Kelembaban, Debu, dan Sirkulasi AC Sentral"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 03: Proteksi Kebakaran, Tanggap Darurat & Kesehatan Mental Kerja",
          topics: [
            "Pembentukan Tim Fire Warden Lantai & Prosedur Evakuasi Gedung Bertingkat",
            "Keselamatan Instalasi Listrik Kantor, Beban Berlebih Colokan Stopkontak, dan APAR",
            "Program Promosi Kesehatan Jiwa Kerja: Manajemen Stres, Pencegahan Burnout & Ergonomi Visual"
          ],
          hours: "6 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 3.750.000 per peserta. Sudah termasuk modul pelatihan digital/cetak, checklist audit K3 perkantoran editable, sertifikat kelulusan kompetensi, serta lunch/coffee break kelas tatap muka."
    },
    blocks: [
      {
        heading: "Mengapa K3 Perkantoran Sering Terabaikan Padahal Memiliki Risiko Nyata?",
        paragraphs: [
          "Banyak orang mengira bahwa bahaya kecelakaan kerja hanya ada di pabrik manufaktur, proyek konstruksi, atau tambang. Faktanya, lingkungan perkantoran menyimpan bahaya laten yang berdampak langsung pada produktivitas dan biaya kesehatan perusahaan: nyeri punggung bawah (Low Back Pain), sindrom lorong karpal (CTS), mata lelah kronis akibat paparan radiasi layar komputer seharian, hingga gangguan pernapasan akibat sirkulasi AC yang tidak higienis.",
          "Permenkes No. 48 Tahun 2016 mewajibkan setiap pimpinan kantor (kementerian, lembaga pemerintah, bank, kantor swasta, dan gedung sewa) menerapkan standar K3 perkantoran terpadu guna menjamin kesehatan dan keselamatan pekerja kantoran."
        ]
      },
      {
        heading: "Solusi Nyata Mengatasi Nyeri Otot dan Kelelahan Kerja Komputer",
        paragraphs: [
          "Peserta pelatihan dipandu mengaudit workstation mereka sendiri menggunakan standar ergonomi internasional. Mereka mempelajari sudut pandang monitor ideal, pengaturan armrest kursi kerja, serta cara merancang program 'Active Office' melalui senam peregangan berkala.",
          "Selain ergonomi fisik, pelatihan ini juga membedah sistem proteksi kebakaran gedung perkantoran, peran Floor Warden saat sirine darurat berbunyi, hingga mitigasi bahaya tersandung kabel dan penumpukan dokumen di koridor darurat."
        ],
        bullets: [
          "Audit mandiri kepatuhan Permenkes 48/2016 dengan checklist 50 parameter standar kantor",
          "Kalkulasi skor ROSA untuk justifikasi pengadaan kursi dan meja kerja ergonomis",
          "Penyusunan peta rute evakuasi darurat (Emergency Evacuation Plan) di tiap lantai gedung",
          "Tata cara penanganan P3K kantoran: pingsan, serangan jantung, asma, dan luka bakar ringan"
        ]
      },
      {
        heading: "Implementasi Mudah Tanpa Mengganggu Rutinitas Bisnis",
        paragraphs: [
          "Rekomendasi yang diajarkan dirancang agar dapat diterapkan secara cepat dan berbiaya efisien oleh tim HRD dan General Affairs perusahaan tanpa mengganggu produktivitas harian."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan K3 Perkantoran?",
        answer: "Biaya pelatihan adalah Rp 3.750.000 per peserta untuk program 2 hari (16 JP) lengkap dengan instrumen audit ergonomi dan sertifikasi kompetensi resmi."
      },
      {
        question: "Apakah gedung bertingkat kantor sewa wajib menerapkan K3 perkantoran?",
        answer: "Ya, baik pemilik gedung (building management) maupun perusahaan penyewa (tenant) memiliki kewajiban bersama sesuai Permenkes 48/2016 untuk menjamin rute evakuasi bebas hambatan, ventilasi memadai, dan pembentukan tim penanggulangan keadaan darurat."
      },
      {
        question: "Siapa yang sebaiknya didelegasikan mengikuti pelatihan ini?",
        answer: "Paling tepat adalah staf/manajer General Affairs (GA), Human Resources (HRD), Building Maintenance, pimpinan komite K3 kantor, dan dokter/paramedis klinik perusahaan."
      }
    ],
    related: [
      "pelatihan/ahli-k3-umum",
      "pelatihan/safety-officer-k3",
      "pelatihan/inspeksi-k3-terjadwal",
      "profesi/ahli-k3-umum",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/uu-1-1970-keselamatan-kerja",
      "regulasi-k3/permenaker-05-2018-k3-lingkungan-kerja"
    ],
    sources: [
      {
        label: "Permenkes No. 48 Tahun 2016 tentang Standar Keselamatan dan Kesehatan Kerja Perkantoran",
        url: "https://peraturan.bpk.go.id/Details/112678/permenkes-no-48-tahun-2016",
        publisher: "Kementerian Kesehatan RI"
      },
      {
        label: "Permenaker No. 05 Tahun 2018 tentang K3 Lingkungan Kerja",
        url: "https://jdih.kemnaker.go.id/katalog/permenaker-05-2018",
        publisher: "Kementerian Ketenagakerjaan RI"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan k3 perkantoran biaya jadwal materi permenkes 48 2016 ergonomi kantor",
    primaryKeyword: "pelatihan k3 perkantoran & keselamatan fasilitas kerja non-pabrik",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan k3 perkantoran dan fasilitas non pabrik",
    intentType: "commercial",
    parentTopic: "Pelatihan Spesialis, Leadership & Sektoral Terapan",
    cannibalizationGroup: "pelatihan-k3-perkantoran",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan K3 Perkantoran",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi In-House Kantor",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/peserta-menyimak-sesi-pembelajaran-di-kelas-1.webp",
      alt: "Pemaparan modul ergonomi workstation komputer dan standar keselamatan fasilitas perkantoran modern"
    },
    gallery: [
      {
        src: "/images/content/peserta-menyimak-sesi-pembelajaran-di-kelas-1.webp",
        alt: "Sesi evaluasi postur ergonomi duduk dan penataan display monitor kantor"
      },
      {
        src: "/images/content/diskusi-kelompok-dalam-sesi-kelas-2.webp",
        alt: "Simulasi jalur evakuasi darurat dan pembagian peran Floor Warden gedung bertingkat"
      }
    ]
  },
  {
    slug: "k3-fasilitas-kesehatan",
    title: "Pelatihan K3 Rumah Sakit & Fasilitas Layanan Kesehatan (K3RS)",
    metaTitle: "Pelatihan K3 Rumah Sakit (K3RS) Permenkes 66/2016 | Biaya, Jadwal 16 JP",
    description: "Pelatihan K3 Rumah Sakit (K3RS) & Fasilitas Kesehatan durasi 16 JP (2 Hari). Biaya Rp 3.750.000, materi bahaya biologis patogen, limbah B3 medis, gas medis, proteksi radiasi, dan audit akreditasi KARS bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan K3 Rumah Sakit & Fasilitas Layanan Kesehatan (K3RS) adalah program pembinaan spesifik 16 JP (2 Hari Kerja) mengacu pada Permenkes No. 66 Tahun 2016 dan standar Manajemen Fasilitas dan Keselamatan (MFK) Akreditasi RS (KARS/STARKES). Pelatihan ini melatih tim K3RS, perawat, sanitasi lingkungan, dan staf instalasi mengendalikan risiko infeksi nosokomial, tusukan jarum suntik (needle stick injury), pengelolaan limbah B3 medis, keselamatan tabung gas medis oksigen, serta evakuasi pasien saat kebakaran.",
    highlights: [
      "Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)",
      "Landasan Hukum: Permenkes No. 66 Tahun 2016 tentang Keselamatan dan Kesehatan Kerja Rumah Sakit",
      "Investasi Resmi: Rp 3.750.000 / Peserta (Persiapan Kepatuhan Standar Akreditasi KARS MFK)",
      "Output: Sertifikat Kompetensi K3RS & Toolkit Manajemen Risiko Fasilitas Medis"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi K3 Sektoral Rumah Sakit & Fasilitas Medis",
      duration: "16 JP (2 Hari Kerja)",
      method: "Blended / Tatap Muka (Studi Kasus Hospital Safety, Desain SOP B3 Medis, Simulasi Code Red & Ujian)",
      legalBasis: "Permenkes No. 66 Tahun 2016, UU No. 17 Tahun 2023 tentang Kesehatan & Standar MFK Akreditasi KARS",
      targetAudience: [
        "Komite K3RS, Tim Manajemen Fasilitas dan Keselamatan (MFK)",
        "Kepala Instalasi Pemeliharaan Sarana Rumah Sakit (IPSRS) & Sanitasi Lingkungan",
        "Dokter Penanggung Jawab K3RS, Perawat Pengendali Infeksi (IPCN) & Apoteker",
        "Pimpinan Klinik, Puskesmas, dan Laboratorium Diagnostik Medis"
      ],
      prerequisites: [
        "Pendidikan minimal D3 atau S1 bidang Kesehatan, Farmasi, Teknik, atau K3",
        "Scan KTP / Kartu Identitas Pegawai Medis/RS",
        "Surat Rekomendasi Manajemen RS / Klinik (jika utusan instansi)",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan K3RS dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Pengelola K3 Fasilitas Kesehatan",
        "Master Kit Dokumen MFK KARS: HVA (Hazard Vulnerability Analysis), Prosedur Tumpahan B3 Medis (Spill Kit), dan Rencana Evakuasi Pasien"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Regulasi K3RS Permenkes 66/2016 & Standar MFK Akreditasi Rumah Sakit",
          topics: [
            "Struktur Organisasi & Uraian Tugas Komite K3RS Rumah Sakit",
            "Integrasi K3RS dengan Standar MFK Akreditasi (Kepemimpinan, Keselamatan, Keamanan, B3, Kebakaran, Utilitas)",
            "Hazard Vulnerability Analysis (HVA): Penilaian Kerentanan Bencana Eksternal dan Internal RS"
          ],
          hours: "4 JP"
        },
        {
          module: "Modul 02: Pengendalian Bahaya Biologis, Limbah B3 Medis & Gas Medis",
          topics: [
            "Prosedur Pencegahan Pajanan Patogen Darah, Tertusuk Jarum Suntik & Tata Laksana Pasca-Pajanan (PEP)",
            "Pengelolaan Limbah Medis Padat, Cair, Infeksius, Sitotoksik, dan Pengoperasian Spill Kit B3 Medis",
            "Standar Keselamatan Tabung & Instalasi Pipa Gas Medis (O2, N2O, Vakum Medis) dan Ruang Bertekanan"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 03: Proteksi Kebakaran, Code Red & Evakuasi Pasien Kritis",
          topics: [
            "Sistem Darurat RS (Emergency Codes: Code Red, Code Blue, Code Black, Code Pink)",
            "Metode Evakuasi Pasien Rawat Inap: Prioritas Evakuasi (Pasien Mandiri, Kursi Roda, Tempat Tidur/ICU)",
            "Pengamanan Sarana Utilitas Kritis: Genset Darurat, Sistem UPS Ruang Operasi, dan Suplai Air Bersih Medis"
          ],
          hours: "6 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 3.750.000 per peserta. Termasuk materi modul komprehensif, format dokumen MFK KARS editable, sertifikat kelulusan kompetensi, serta snack/lunch kelas tatap muka."
    },
    blocks: [
      {
        heading: "Kompleksitas Risiko Keselamatan di Lingkungan Fasilitas Pelayanan Kesehatan",
        paragraphs: [
          "Rumah sakit dan fasilitas pelayanan kesehatan merupakan tempat kerja dengan tingkat bahaya yang sangat unik dan kompleks. Di tempat ini bercampur potensi penularan penyakit infeksius (biologis), paparan zat kimia karsinogenik seperti obat kemoterapi dan formalin, radiasi pengion dari instalasi radiologi, bahaya kebakaran gas medis, hingga bahaya ergonomi saat tenaga kesehatan mengangkat atau memindahkan pasien.",
          "Permenkes No. 66 Tahun 2016 mewajibkan setiap rumah sakit menyelenggarakan K3RS secara terorganisir untuk melindungi seluruh SDM rumah sakit, pasien, pengantar pasien, dan pengunjung dari risiko kecelakaan dan penyakit akibat kerja."
        ]
      },
      {
        heading: "Kesiapan Menghadapi Akreditasi KARS & Standar MFK",
        paragraphs: [
          "Pelatihan K3RS PT Kreasi Ultimate Berjaya didesain secara khusus untuk menjawab kebutuhan instrumen Akreditasi Rumah Sakit pada bab Manajemen Fasilitas dan Keselamatan (MFK). Peserta dilatih menyusun program kerja tahunan MFK, memetakan analisis kerentanan bahaya (HVA), serta menyiapkan bukti telusur dokumen yang biasa diuji oleh surveior akreditasi.",
          "Di samping pemenuhan dokumen, peserta mempelajari langkah taktis penanganan tumpahan darah atau zat kimia menggunakan spill kit infeksius, pengelolaan TPS Limbah B3 berizin, dan simulasi penanganan kebakaran ruang perawatan."
        ],
        bullets: [
          "Penyusunan Hazard Vulnerability Analysis (HVA) untuk kesiapsiagaan bencana rumah sakit",
          "Standar operasional pengelolaan limbah tajam dan pemantauan insiden needle stick injury",
          "Pemeriksaan keselamatan tabung gas medis dan manifold oksigen sentral",
          "SOP evakuasi vertikal pasien ICU dan bedah dengan teknik selimut matras"
        ]
      },
      {
        heading: "Perlindungan Menyeluruh bagi Garda Terdepan Medis",
        paragraphs: [
          "Dengan terselenggaranya program K3RS yang handal, angka absensi tenaga kesehatan akibat sakit dapat ditekan, reputasi rumah sakit terjaga, dan mutu keselamatan pasien (patient safety) terlindungi secara berkelanjutan."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan K3 Rumah Sakit (K3RS)?",
        answer: "Biaya pelatihan adalah Rp 3.750.000 per peserta untuk program 2 hari (16 JP) lengkap dengan instrumen dokumen MFK Akreditasi KARS dan sertifikat kompetensi."
      },
      {
        question: "Apakah materi pelatihan ini relevan untuk klinik rawat inap dan Puskesmas?",
        answer: "Sangat relevan. Standar keselamatan pasien, penanganan limbah medis B3, proteksi jarum suntik, dan evakuasi darurat berlaku sama di seluruh fasilitas kesehatan tingkat pertama maupun rumah sakit rujukan."
      },
      {
        question: "Apakah pelatihan ini menghasilkan sertifikat yang diakui untuk berkas akreditasi RS?",
        answer: "Ya, sertifikat kompetensi K3RS dari PT Kreasi Ultimate Berjaya diakui sebagai bukti pelatihan pengembangan staf dalam pemenuhan elemen penilaian bab MFK Akreditasi Rumah Sakit."
      }
    ],
    related: [
      "pelatihan/k3-instalasi-pipa-gas-medis",
      "pelatihan/ahli-k3-umum",
      "pelatihan/safety-officer-k3",
      "profesi/ahli-k3-umum",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/uu-1-1970-keselamatan-kerja",
      "regulasi-k3/permenaker-05-2018-k3-lingkungan-kerja"
    ],
    sources: [
      {
        label: "Permenkes No. 66 Tahun 2016 tentang Keselamatan dan Kesehatan Kerja Rumah Sakit",
        url: "https://peraturan.bpk.go.id/Details/112696/permenkes-no-66-tahun-2016",
        publisher: "Kementerian Kesehatan RI"
      },
      {
        label: "UU No. 17 Tahun 2023 tentang Kesehatan",
        url: "https://peraturan.bpk.go.id/Details/258547/uu-no-17-tahun-2023",
        publisher: "Pemerintah Republik Indonesia"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan k3 rumah sakit k3rs permenkes 66 2016 biaya jadwal materi mfk akreditasi",
    primaryKeyword: "pelatihan k3 rumah sakit & fasilitas layanan kesehatan (k3rs)",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan k3 rumah sakit dan fasilitas layanan kesehatan k3rs",
    intentType: "commercial",
    parentTopic: "Pelatihan Kesehatan Kerja & P3K",
    cannibalizationGroup: "pelatihan-k3rs",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan K3RS",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi MFK Rumah Sakit",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/peserta-menyimak-presentasi-di-ruang-kelas-1.webp",
      alt: "Pemaparan standar keselamatan rumah sakit K3RS dan penanganan limbah B3 medis infeksius"
    },
    gallery: [
      {
        src: "/images/content/peserta-menyimak-presentasi-di-ruang-kelas-1.webp",
        alt: "Sesi peninjauan elemen penilaian MFK Akreditasi KARS bersama tim rumah sakit"
      },
      {
        src: "/images/content/diskusi-instruktur-dan-peserta-di-ruang-seminar-2.webp",
        alt: "Simulasi prosedur evakuasi pasien darurat Code Red dan penanganan spill kit medis"
      }
    ]
  },
  {
    slug: "k3-sektor-retail-logistik",
    title: "Pelatihan K3 Sektor Retail, Pergudangan & Pusat Distribusi Logistik",
    metaTitle: "Pelatihan K3 Pergudangan & Logistik | Biaya, Jadwal & Sertifikasi 16 JP",
    description: "Pelatihan K3 Sektor Retail, Pergudangan & Logistik durasi 16 JP (2 Hari). Biaya Rp 3.750.000, materi keselamatan forklift, racking inspeksi, manual handling, dan loading dock bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan K3 Sektor Retail, Pergudangan & Pusat Distribusi Logistik adalah program pembinaan 16 JP (2 Hari Kerja) yang mengulas pengendalian bahaya di fasilitas supply chain modern. Peserta mempelajari keselamatan interaksi forklift dan pejalan kaki (pedestrian-vehicle segregation), inspeksi integritas rak penyimpanan tinggi (high-rack storage inspection SEMA/EN 15635), pencegahan cedera angkat-angkut manual (manual material handling), dan keselamatan area loading dock kontainer.",
    highlights: [
      "Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)",
      "Landasan Hukum: Permenaker No. 08/2020, PP No. 50/2012 & Standar Pergudangan Internasional",
      "Investasi Resmi: Rp 3.750.000 / Peserta (Materi Praktis Operasional Gudang Modern)",
      "Output: Sertifikat Kompetensi K3 Pergudangan & Logistik Serta Checklist Inspeksi Racking"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi K3 Sektoral Pergudangan, Retail & Logistik",
      duration: "16 JP (2 Hari Kerja)",
      method: "Blended / Tatap Muka (Audit Visual High-Rack, Simulasi Bongkar Muat Kontainer, Penilaian MMH & Ujian)",
      legalBasis: "Permenaker No. 08 Tahun 2020 (Pesawat Angkat Angkut), PP No. 50/2012 & Standar SEMA / EN 15635",
      targetAudience: [
        "Warehouse Manager, Supervisor Gudang & Distribution Center (DC) Head",
        "Logistics HSE Specialist, Safety Officer Pergudangan & Retail Coordinator",
        "Pengawas Area Loading Dock, Foreman Bongkar Muat & Koordinator Forklift",
        "Inventory Controller & Tim Perawatan Fasilitas Racking"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK atau berpengalaman di bidang pergudangan/logistik",
        "Scan KTP / Kartu Identitas Pegawai",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan K3 Pergudangan & Logistik dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Pengawas Keselamatan Gudang & Distribusi",
        "Master Kit Checklist Inspeksi Racking Gudang (Tingkat Kerusakan Hijau, Kuning, Merah) & SOP Loading Dock"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Identifikasi Bahaya Kritis di Pergudangan & Pusat Logistik",
          topics: [
            "Analisis Data Insiden Gudang: Tertabrak Forklift, Racking Runtuh, Kejatuhan Barang & Sakit Pinggang",
            "Pemisahan Jalur Pejalan Kaki & Alat Angkut (Pedestrian Walkway Marking & Crash Barrier Protection)",
            "Pencahayaan Lorong Gudang, Rambu K3, dan Pengaturan Jalur Evakuasi yang Bebas Palet"
          ],
          hours: "4 JP"
        },
        {
          module: "Modul 02: Integritas Struktur Racking (Pallet Racking Safety) & Operasional Forklift",
          topics: [
            "Standar Inspeksi Racking SEMA / EN 15635: Toleransi Deformasi Tiang Tegak (Upright) dan Palang (Beam)",
            "Klasifikasi Bahaya Racking: Green Level, Amber Risk, dan Red Hazard (Wajib Dikosongkan Seketika)",
            "Aturan Kerja Aman Operator Forklift, Reach Truck, Order Picker, dan Batas Kapasitas Beban Maksimum (SWL)"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 03: Keselamatan Area Loading Dock & Manual Handling Ergonomics",
          topics: [
            "Prosedur Aman Bongkar Muat Kontainer: Wheel Chock, Trailer Restraint, dan Pengoperasian Dock Leveler",
            "Teknik Pengangkatan Manual (Manual Material Handling): Batas Berat Angkat Maksimum & Metode Power Lift",
            "Penyusunan Tanggap Darurat Gudang: Penanganan Barang Rusak/Bocor, Tumpahan Kimia B3, dan Rencana Evakuasi"
          ],
          hours: "6 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 3.750.000 per peserta. Termasuk toolkit panduan inspeksi racking visual, checklist keselamatan loading dock, modul pelatihan komprehensif, sertifikat kelulusan kompetensi, serta makan siang dan coffee break kelas tatap muka."
    },
    blocks: [
      {
        heading: "Dinamika Kecepatan Tinggi dan Risiko Fatal di Pergudangan Modern",
        paragraphs: [
          "Tuntutan perputaran barang yang cepat di era e-commerce dan pusat distribusi logistik membuat aktivitas forklift, truk kontainer, dan pekerja pemilah barang (picker) berlangsung dengan intensitas sangat tinggi. Tanpa rekayasa zonasi keselamatan yang ketat, kecelakaan tabrakan antara forklift dan pejalan kaki, atau robohnya rak bertingkat (catastrophic rack collapse) dapat menimbulkan korban jiwa dan kerugian logistik miliaran rupiah.",
          "Pelatihan K3 Sektor Retail, Pergudangan & Pusat Distribusi Logistik membekali supervisor dan penanggung jawab gudang dengan pemahaman standar keselamatan operasional pergudangan kelas dunia."
        ]
      },
      {
        heading: "Penguasaan Audit Visual Kerusakan Rak Penyimpanan (Racking)",
        paragraphs: [
          "Banyak pengelola gudang tidak menyadari bahwa benturan kecil roda forklift pada tiang rak dapat menurunkan daya dukung struktur secara drastis. Peserta dilatih menggunakan mistar ukur kelurusan tiang sesuai standar internasional EN 15635 untuk menentukan apakah sebuah rak masih aman digunakan, perlu diperbaiki dalam 4 minggu (Amber Risk), atau harus segera dikosongkan seketika (Red Hazard).",
          "Selain itu, pelatihan membahas prosedur keselamatan di area loading dock: mengunci ban truk kontainer (wheel chocking), memastikan dock leveler terkunci sebelum forklift masuk ke bak truk, serta mencegah bahaya trailer meluncur sendiri (trailer creep)."
        ],
        bullets: [
          "Audit kepatuhan jalur sirkulasi forklift dan penempatan convex mirror di persimpangan lorong",
          "Penggunaan checklist berkala pemeriksaan beam lock pin dan pelindung kaki tiang rak (upright protector)",
          "Edukasi teknik pengangkatan manual ergonomis untuk mencegah cedera tulang punggung pekerja gudang",
          "Mitigasi bahaya kebakaran di area gudang tumpukan tinggi (high-rack storage fire protection)"
        ]
      },
      {
        heading: "Meningkatkan Efisiensi Sekaligus Menjamin Keselamatan Kerja",
        paragraphs: [
          "Gudang yang rapi, berdisiplin 5S, dan memiliki standar K3 yang terukur terbukti mampu meningkatkan kecepatan perputaran barang (turnaround time) dan menurunkan angka kerusakan barang (damage rate) secara signifikan."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan K3 Pergudangan & Logistik?",
        answer: "Biaya pelatihan adalah Rp 3.750.000 per peserta untuk program 2 hari (16 JP) lengkap dengan master template checklist inspeksi rak gudang dan sertifikasi kompetensi."
      },
      {
        question: "Apakah pelatihan ini mengulas standar sertifikasi lisensi operator forklift?",
        answer: "Ya, pelatihan ini menjelaskan kewajiban lisensi SIO Kemnaker RI bagi operator forklift sesuai Permenaker 08/2020 serta tata cara pengawasan kepatuhan operator oleh supervisor gudang."
      },
      {
        question: "Apakah materi ini cocok untuk supervisor toko retail atau supermarket besar?",
        answer: "Sangat cocok. Toko retail modern dengan format hypermarket atau gudang stok menghadapi bahaya identik dalam hal penataan display rak tinggi dan penanganan material berat."
      }
    ],
    related: [
      "pelatihan/pelatihan-operator-forklift-kelas-i-kelas-ii-sertifikasi-kemnaker",
      "pelatihan/safety-officer-k3",
      "pelatihan/inspeksi-k3-terjadwal",
      "profesi/operator-forklift",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/pp-50-2012-penerapan-smk3"
    ],
    sources: [
      {
        label: "Permenaker No. 08 Tahun 2020 tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Pesawat Angkut",
        url: "https://jdih.kemnaker.go.id/katalog/permenaker-08-2020",
        publisher: "Kementerian Ketenagakerjaan RI"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan k3 sektor retail pergudangan logistik biaya jadwal materi racking forklift",
    primaryKeyword: "pelatihan k3 sektor retail, pergudangan & pusat distribusi logistik",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan k3 sektor retail pergudangan dan pusat distribusi logistik",
    intentType: "commercial",
    parentTopic: "Pelatihan Spesialis, Leadership & Sektoral Terapan",
    cannibalizationGroup: "pelatihan-k3-pergudangan-logistik",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan K3 Logistik",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Audit Racking Gudang",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/praktik-pengoperasian-forklift-di-lapangan-1.webp",
      alt: "Pemeriksaan lorong rak pergudangan dan keselamatan pengoperasian forklift logistik"
    },
    gallery: [
      {
        src: "/images/content/praktik-pengoperasian-forklift-di-lapangan-1.webp",
        alt: "Inspeksi keselamatan operasional forklift dan penataan jalur sirkulasi gudang"
      },
      {
        src: "/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-1.webp",
        alt: "Briefing keselamatan kerja bagi staf pergudangan dan operator material handling"
      }
    ]
  },
  {
    slug: "k3-sektor-pendidikan",
    title: "Pelatihan K3 Kampus & Fasilitas Lembaga Pendidikan",
    metaTitle: "Pelatihan K3 Kampus & Fasilitas Pendidikan | Biaya, Jadwal 16 JP",
    description: "Pelatihan K3 Kampus & Lembaga Pendidikan durasi 16 JP (2 Hari). Biaya Rp 3.750.000, keselamatan laboratorium kimia/fisika, tanggap darurat kampus, dan pemenuhan standar akreditasi bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan K3 Kampus & Fasilitas Lembaga Pendidikan adalah program pembinaan 16 JP (2 Hari Kerja) untuk membangun sistem keselamatan di institusi pendidikan tinggi, politeknik, dan sekolah. Pelatihan ini melatih pejabat rektorat, kepala laboratorium, dosen, dan staf sarana prasarana mengelola keselamatan laboratorium sains/teknik (MSDS, lemari asam, limbah B3 praktikum), inspeksi proteksi kebakaran gedung kuliah, penanganan kerumunan (crowd management acara kampus), dan pertolongan pertama kecelakaan siswa/mahasiswa.",
    highlights: [
      "Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)",
      "Landasan Hukum: UU No. 1 Tahun 1970, UU No. 12 Tahun 2012 tentang Pendidikan Tinggi & Standar Kemdikbudristek",
      "Investasi Resmi: Rp 3.750.000 / Peserta (Materi Keselamatan Laboratorium & Gedung Kampus)",
      "Output: Sertifikat Kompetensi K3 Fasilitas Pendidikan & Master Plan Keselamatan Kampus"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi K3 Sektoral Institusi Pendidikan & Riset",
      duration: "16 JP (2 Hari Kerja)",
      method: "Blended / Tatap Muka (Audit Keselamatan Laboratorium, Simulasi Evakuasi Gempa/Api, Review SOP Praktikum & Ujian)",
      legalBasis: "UU No. 1 Tahun 1970 Pasal 1 Ayat 1 (Tempat Kerja Lembaga Pendidikan), Permenaker Terkait & SNI Proteksi Gedung",
      targetAudience: [
        "Kepala Laboratorium, Pranata Laboratorium Pendidikan (PLP) & Teknisi Lab Kampus",
        "Pimpinan Bagian Sarana Prasarana (Sarpras) & Unit Pengelola Fasilitas Kampus",
        "Dosen Pembimbing Praktikum, Guru SMK Teknik & Tim K3 Universitas",
        "Satuan Keamanan Kampus (Security) & Koordinator Resimen Mahasiswa / KSR"
      ],
      prerequisites: [
        "Pendidikan minimal D3 atau S1 (diutamakan yang bertugas di institusi pendidikan/riset)",
        "Scan KTP / Kartu Identitas Pegawai Institusi",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan K3 Kampus & Lembaga Pendidikan dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Pengawas Keselamatan Fasilitas Pendidikan",
        "Toolkit Standar K3 Laboratorium: Form Lembar Keselamatan Praktikum, Logbook Limbah B3 Lab, dan Manual Tanggap Darurat Kampus"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Urgensi Regulasi K3 di Lingkungan Akademik & Tanggung Jawab Hukum Pimpinan",
          topics: [
            "UU 1/1970 Pasal 1: Penegasan Kampus, Sekolah & Balai Riset sebagai Tempat Kerja yang Wajib Memenuhi Norma K3",
            "Tanggung Jawab Hukum Institusi & Dosen Pembimbing atas Kecelakaan Siswa/Mahasiswa saat Praktikum",
            "Membangun Komite / Tim Manajemen K3 Kampus Terpadu Menuju Kampus Tangguh Bencana"
          ],
          hours: "4 JP"
        },
        {
          module: "Modul 02: Manajemen Keselamatan Laboratorium Sains & Bengkel Teknik",
          topics: [
            "Klasifikasi Bahaya Bahan Kimia Reagen Praktikum, Sistem Pelabelan GHS, dan Pengelolaan SDS/MSDS",
            "Persyaratan Pengoperasian Lemari Asam (Fume Hood), Eyewash, Safety Shower & Spill Kit Lab",
            "SOP Penggunaan Mesin Bengkel Politeknik/SMK (Bubut, Las, Kelistrikan) & Pemasangan Pengaman (Machine Guarding)",
            "Tata Kelola Pengumpulan, Penyimpanan Sementara & Pembuangan Limbah B3 Praktikum Sesuai KLHK"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 03: Tanggap Darurat Kampus, Evakuasi Gedung & Pertolongan Pertama (P3K)",
          topics: [
            "Rencana Tanggap Darurat Gempa Bumi dan Kebakaran pada Gedung Kuliah Bertingkat",
            "Manajemen Kerumunan (Crowd Control) saat Wisuda, Konser Musik Mahasiswa, dan Seminar Internasional",
            "Fasilitas Kotak P3K, Penggunaan Tandu Darurat, dan Penanganan Cedera Praktikum Sebelum Dirujuk ke Klinik Kampus"
          ],
          hours: "6 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 3.750.000 per peserta. Termasuk materi panduan keselamatan laboratorium, template SOP praktikum aman, sertifikat kompetensi resmi, serta makan siang dan coffee break kelas tatap muka."
    },
    blocks: [
      {
        heading: "Mengapa Lembaga Pendidikan Wajib Menegakkan Standar K3 Profesional?",
        paragraphs: [
          "Insiden ledakan lab kimia universitas, kebakaran ruang server kampus, hingga kecelakaan fatal siswa saat praktik mesin bubut atau prakerin membuktikan bahwa lembaga pendidikan menyimpan risiko nyata yang setara dengan industri manufaktur. Kurangnya pengetahuan K3 pada mahasiswa dan instruktur laboratorium dapat berakibat fatal.",
          "Pasal 1 UU No. 1 Tahun 1970 secara tegas menetapkan bahwa tempat pendidikan, pembinaan, atau penelitian tempat dilakukannya usaha atau pekerjaan merupakan tempat kerja yang wajib menerapkan keselamatan kerja secara mutlak."
        ]
      },
      {
        heading: "Mengamankan Laboratorium Riset dan Bengkel Vokasi",
        paragraphs: [
          "Pelatihan K3 Kampus & Lembaga Pendidikan membimbing peserta menyusun SOP praktikum aman yang wajib diikutsertakan dalam buku panduan praktikum mahasiswa. Peserta diajarkan cara mengidentifikasi reagen kimia yang inkompatibel agar tidak meledak saat disimpan berdampingan, menguji kecepatan hisap lemari asam, serta memastikan kotak P3K dan eyewash berfungsi normal.",
          "Selain keselamatan riset, pelatihan mencakup kesiapsiagaan darurat menghadapi bencana gempa bumi dan kebakaran di asrama mahasiswa, perpustakaan, dan gedung kuliah bertingkat tinggi."
        ],
        bullets: [
          "Penyusunan Formulir Keselamatan Praktikum (Safety Induction Mahasiswa Baru)",
          "Standar penataan dan inventarisasi bahan kimia berbahaya beracun (B3) di gudang reagen",
          "Prosedur penanganan keracunan gas, tumpahan asam pekat, dan luka bakar di laboratorium",
          "Penyelenggaraan simulasi evakuasi mandiri (Fire & Earthquake Drill) bagi sivitas akademika"
        ]
      },
      {
        heading: "Nilai Tambah Menjelang Akreditasi Nasional & Internasional",
        paragraphs: [
          "Penerapan tata kelola K3 yang sistematis di fasilitas pendidikan menjadi poin penilaian penting dalam instrumen akreditasi BAN-PT, LAM-Teknik, maupun standar internasional seperti ISO 45001 dan akreditasi ABET."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan K3 Kampus & Fasilitas Pendidikan?",
        answer: "Biaya pelatihan adalah Rp 3.750.000 per peserta untuk program 2 hari (16 JP) lengkap dengan toolkit SOP laboratorium dan sertifikat kompetensi resmi."
      },
      {
        question: "Apakah pelatihan ini mencakup pengelolaan limbah B3 laboratorium?",
        answer: "Ya, modul membedah tata cara penampungan limbah cair reagen, botol kaca sisa pelarut, dan kerja sama penyerahan ke transporter limbah B3 berizin resmi."
      },
      {
        question: "Apakah materi bisa diadaptasi untuk sekolah kejuruan (SMK)?",
        answer: "Sangat bisa. Modul bengkel mesin, instalasi listrik, dan pengelasan sangat pas diterapkan oleh para kepala bengkel dan guru produktif SMK."
      }
    ],
    related: [
      "pelatihan/ahli-k3-umum",
      "pelatihan/pelatihan-ahli-k3-kimia-sertifikasi-resmi-kemnaker-ri",
      "pelatihan/safety-officer-k3",
      "profesi/ahli-k3-umum",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/uu-1-1970-keselamatan-kerja"
    ],
    sources: [
      {
        label: "UU No. 1 Tahun 1970 tentang Keselamatan Kerja (Pasal 1 Ruang Lingkup)",
        url: "https://jdih.kemnaker.go.id/katalog/uu-1-1970",
        publisher: "Pemerintah Republik Indonesia"
      },
      {
        label: "UU No. 12 Tahun 2012 tentang Pendidikan Tinggi",
        url: "https://peraturan.bpk.go.id/Details/39110/uu-no-12-tahun-2012",
        publisher: "Pemerintah RI"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan k3 kampus dan fasilitas lembaga pendidikan biaya jadwal materi k3 laboratorium",
    primaryKeyword: "pelatihan k3 kampus & fasilitas lembaga pendidikan",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan k3 kampus dan fasilitas lembaga pendidikan",
    intentType: "commercial",
    parentTopic: "Pelatihan Spesialis, Leadership & Sektoral Terapan",
    cannibalizationGroup: "pelatihan-k3-kampus-pendidikan",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan K3 Kampus",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi K3 Laboratorium",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/instruktur-menjelaskan-materi-di-kelas-kecil-1.webp",
      alt: "Pemaparan materi keselamatan kerja laboratorium kimia dan fasilitas pendidikan di hadapan staf kampus"
    },
    gallery: [
      {
        src: "/images/content/instruktur-menjelaskan-materi-di-kelas-kecil-1.webp",
        alt: "Sesi peninjauan prosedur penyimpanan bahan kimia reagen praktikum universitas"
      },
      {
        src: "/images/content/peserta-mengerjakan-ujian-tertulis-di-kelas-1.webp",
        alt: "Evaluasi kompetensi pengawas keselamatan laboratorium dan penanganan limbah B3 pendidikan"
      }
    ]
  },
  {
    slug: "k3-sektor-pariwisata-hotel",
    title: "Pelatihan K3 Industri Perhotelan, Resort & Destinasi Wisata",
    metaTitle: "Pelatihan K3 Hotel, Resort & Pariwisata | Jadwal, Biaya 16 JP",
    description: "Pelatihan K3 Industri Perhotelan, Resort & Destinasi Wisata durasi 16 JP (2 Hari). Biaya Rp 3.750.000, materi keselamatan dapur komersial, kolam renang, penanganan boiler hotel, dan evakuasi tamu bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan K3 Industri Perhotelan, Resort & Destinasi Wisata adalah program pembinaan 16 JP (2 Hari Kerja) untuk pengelola fasilitas hospitality. Pelatihan ini melatih manajemen hotel, chief engineer, tim housekeeping, dan banquet mengendalikan risiko kebakaran dapur komersial (sistem wet chemical), keselamatan zat klorin kolam renang, pemeliharaan utilitas hotel (boiler, chiller, genset), ergonomi staf kamar, serta prosedur evakuasi darurat tamu mancanegara.",
    highlights: [
      "Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)",
      "Landasan Hukum: UU No. 1 Tahun 1970, Permenaker K3 Terkait & Standar CHSE Pariwisata",
      "Investasi Resmi: Rp 3.750.000 / Peserta (Materi Hospitality Safety & Emergency Management)",
      "Output: Sertifikat Kompetensi K3 Perhotelan & Panduan Prosedur Tanggap Darurat Hotel"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi K3 Sektoral Perhotelan & Pariwisata",
      duration: "16 JP (2 Hari Kerja)",
      method: "Blended / Tatap Muka (Audit Dapur Komersial, Inspeksi Chemical Laundry, Simulasi Evakuasi Tamu & Ujian)",
      legalBasis: "UU No. 1 Tahun 1970, Permenaker No. 04/1980 (APAR), Permenaker 37/2016 & Standar CHSE Kemenparekraf",
      targetAudience: [
        "General Manager, Executive Assistant Manager & Hotel Operations Manager",
        "Chief Engineer, Safety & Security Manager, dan HSE Coordinator Hotel",
        "Executive Housekeeper, F&B Director & Executive Chef",
        "Pengelola Resort Wisata, Theme Park, Waterpark & Destinasi Wisata Alam"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK atau D3/S1 di bidang perhotelan atau pariwisata",
        "Scan KTP / Paspor resmi",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan K3 Perhotelan & Destinasi Wisata dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Pengawas Keselamatan Industri Perhotelan",
        "Toolkit Dokumen Hotel Safety: Prosedur Kebakaran Dapur, Logbook Perawatan Klorin Kolam, dan Kartu Evakuasi Kamar Tamu Multibahasa"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Karakteristik Bahaya Fasilitas Hospitality & Perlindungan Tamu",
          topics: [
            "Tanggung Jawab Hukum Pengelola Hotel atas Keselamatan Tamu (Guest Safety) & Karyawan",
            "Bahaya Tersembunyi: Slip, Trip & Fall di Area Publik, Kamar Mandi, dan Tangga Kolam Renang",
            "Manajemen Kualitas Pangan (Food Safety Hygiene) & Sanitasi Air Bersih"
          ],
          hours: "4 JP"
        },
        {
          module: "Modul 02: Keselamatan Dapur Utama (Main Kitchen), Laundry & Utilitas Energi",
          topics: [
            "Proteksi Bahaya Kebakaran Minyak Masak (Kelas K) Menggunakan Sistem Pemadam Otomatis Wet Chemical",
            "Penyimpanan & Penanganan Bahan Kimia Berbahaya Laundry (Deterjen Konsentrat, Pemutih Klorin, Softener)",
            "Pengawasan Pengoperasian Boiler Uap Laundry, Chiller Pendingin Ruangan & Tangki Gas LPG Sentral"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 03: Keselamatan Fasilitas Rekreasi Air & Prosedur Evakuasi Darurat Hotel",
          topics: [
            "K3 Kolam Renang: Penanganan Gas Klorin / Kaporit, Kedalaman Air, Marka Peringatan, dan Peralatan Penyelamat (Lifebuoy)",
            "Penyusunan Rencana Evakuasi Kebakaran / Gempa Bumi Hotel (Multilingual Announcements & Guest Escort)",
            "Pertolongan Pertama Darurat (P3K) bagi Tamu: Sengatan Panas, Tenggelam, Reaksi Alergi Makanan, dan Serangan Jantung"
          ],
          hours: "6 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 3.750.000 per peserta. Termasuk materi panduan audit hotel safety, template SOP evakuasi tamu dwibahasa, sertifikat kompetensi resmi, serta makan siang dan coffee break kelas tatap muka."
    },
    blocks: [
      {
        heading: "Mengapa Standar Keselamatan (Safety & Security) Menjadi Kunci Reputasi Hotel?",
        paragraphs: [
          "Dalam industri hospitality, satu insiden kebakaran dapur, keracunan makanan massal, atau kecelakaan tamu tenggelam di kolam renang dapat menghancurkan reputasi hotel yang dibangun bertahun-tahun dalam hitungan jam di media sosial dan platform booking online. Tamu hotel, terutama korporasi internasional dan wisatawan mancanegara, menuntut jaminan keamanan dan keselamatan tingkat tinggi sebelum memutuskan menginap.",
          "Pelatihan K3 Industri Perhotelan, Resort & Destinasi Wisata membimbing manajemen hotel menerapkan standar K3 terintegrasi tanpa mengurangi keindahan estetika dan kenyamanan pelayanan khas bintang lima."
        ]
      },
      {
        heading: "Fokus Teknis: Dapur Komersial, Laundry Kimia, dan Area Kolam Renang",
        paragraphs: [
          "Pelatihan ini membedah risiko teknis di 'back of the house' yang jarang terlihat oleh tamu. Peserta mempelajari pencegahan flashover minyak goreng di dapur komersial menggunakan instalasi kap hisap (kitchen hood) dan sistem pemadam otomatis Wet Chemical.",
          "Di bagian utilitas, peserta dipandu memeriksa kelayakan tabung LPG skala besar, perpipaan gas, sistem boiler pemanas air, hingga teknik penanganan klorin kolam renang yang jika salah campur dapat melepaskan gas beracun mematikan."
        ],
        bullets: [
          "Standar inspeksi alat pemadam kebakaran khusus minyak goreng (APAR Kelas K) di dapur utama",
          "Tata cara penanganan bahan kimia korosif laundry sesuai Lembar Data Keselamatan (MSDS)",
          "Prosedur pengawasan kolam renang dan ketersediaan peralatan penyelamatan air",
          "Simulasi evakuasi tamu lansia dan disabilitas saat alarm kebakaran hotel berbunyi"
        ]
      },
      {
        heading: "Pemenuhan Sertifikasi CHSE dan Kepatuhan Hukum Nasional",
        paragraphs: [
          "Program ini secara langsung mendukung perolehan sertifikasi CHSE (Cleanliness, Health, Safety, and Environment Sustainability) dari Kementerian Pariwisata dan Ekonomi Kreatif serta pemenuhan norma K3 ketenagakerjaan."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan K3 Industri Perhotelan & Resort?",
        answer: "Biaya pelatihan adalah Rp 3.750.000 per peserta untuk program 2 hari (16 JP) lengkap dengan toolkit SOP keselamatan hotel dan sertifikat kompetensi resmi."
      },
      {
        question: "Apakah pelatihan ini mencakup sertifikasi keselamatan kolam renang?",
        answer: "Pelatihan ini memberikan dasar-dasar keselamatan fasilitas rekreasi air, penanganan zat kimia klorin, dan prosedur penyelamatan dasar sebelum bantuan medis tiba."
      },
      {
        question: "Siapa saja yang sebaiknya diutus mengikuti kelas ini?",
        answer: "Chief Engineer, Safety & Security Manager, Executive Housekeeper, Food & Beverage Manager, serta staf teknis engineering perhotelan dan resort."
      }
    ],
    related: [
      "pelatihan/ahli-k3-umum",
      "pelatihan/k3-kebakaran",
      "pelatihan/safety-officer-k3",
      "profesi/ahli-k3-umum",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/uu-1-1970-keselamatan-kerja"
    ],
    sources: [
      {
        label: "UU No. 1 Tahun 1970 tentang Keselamatan Kerja",
        url: "https://jdih.kemnaker.go.id/katalog/uu-1-1970",
        publisher: "Pemerintah Republik Indonesia"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan k3 industri perhotelan resort destinasi wisata biaya jadwal materi hotel safety",
    primaryKeyword: "pelatihan k3 industri perhotelan, resort & destinasi wisata",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan k3 industri perhotelan resort dan destinasi wisata",
    intentType: "commercial",
    parentTopic: "Pelatihan Spesialis, Leadership & Sektoral Terapan",
    cannibalizationGroup: "pelatihan-k3-hotel-pariwisata",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan K3 Hotel & Resort",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Safety Audit Hotel",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/peserta-mengikuti-sesi-di-ruang-kelas-1.webp",
      alt: "Pemaparan prosedur keselamatan fasilitas hospitality perhotelan dan mitigasi risiko dapur komersial"
    },
    gallery: [
      {
        src: "/images/content/peserta-mengikuti-sesi-di-ruang-kelas-1.webp",
        alt: "Sesi peninjauan checklist inspeksi sistem proteksi kebakaran dan utilitas hotel"
      },
      {
        src: "/images/content/foto-bersama-peserta-dan-instruktur-di-kelas-1.webp",
        alt: "Sesi pelatihan interaktif pengelolaan risiko keselamatan tamu dan staf hospitality"
      }
    ]
  },
  {
    slug: "k3-sektor-pertambangan-pengantar",
    title: "Pelatihan Dasar Keselamatan Pertambangan (SMKP Minerba)",
    metaTitle: "Pelatihan Dasar Keselamatan Pertambangan SMKP | Biaya, Jadwal 16 JP",
    description: "Pelatihan Dasar Keselamatan Pertambangan (SMKP Minerba) durasi 16 JP (2 Hari). Biaya Rp 4.250.000, materi Kepmen ESDM 1827/2018, Golden Rules tambang, hauling road safety, dan K3 pit terbuka bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan Dasar Keselamatan Pertambangan (SMKP Minerba) adalah program pembinaan komprehensif 16 JP (2 Hari Kerja) mengacu pada Kepmen ESDM No. 1827 K/30/MEM/2018 tentang Pedoman Pelaksanaan Kaidah Teknik Pertambangan yang Baik. Pelatihan ini membekali staf HSE dan calon pengawas operasional pemahaman elemen Sistem Manajemen Keselamatan Pertambangan (SMKP), aturan keselamatan jalan tambang (hauling road), interaksi alat berat (dump truck, excavator), izin kerja peledakan (blasting safety), serta keselamatan lereng tambang (slope stability).",
    highlights: [
      "Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)",
      "Landasan Hukum: Kepmen ESDM No. 1827 K/30/MEM/2018 & Permen ESDM No. 26 Tahun 2018",
      "Investasi Resmi: Rp 4.250.000 / Peserta (Materi Fondasi SMKP Minerba & Operasional Tambang)",
      "Output: Sertifikat Kompetensi Dasar Keselamatan Pertambangan & Panduan SMKP Minerba"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi Sektoral Keselamatan Pertambangan Mineral & Batubara",
      duration: "16 JP (2 Hari Kerja)",
      method: "Blended / Tatap Muka (Studi Kasus Insiden Tambang, Bedah 7 Elemen SMKP, Regulasi Minerba & Evaluasi)",
      legalBasis: "Kepmen ESDM No. 1827 K/30/MEM/2018, Permen ESDM No. 26/2018 & UU No. 3 Tahun 2020 tentang Minerba",
      targetAudience: [
        "Calon Pengawas Operasional Pertama (POP) Tambang & Safety Officer Minerba",
        "Mining Engineer, Geologist, Surveyor & Supervisor Hauling/Pit",
        "Kontraktor dan Subkontraktor Jasa Pertambangan (PBT/IUJP)",
        "Staff HSE perusahaan tambang batubara, nikel, emas, tembaga, dan kuari batuan"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK (diutamakan D3/S1 Teknik Pertambangan/Geologi/Mesin/K3)",
        "Scan KTP yang masih berlaku",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan Dasar Keselamatan Pertambangan dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Pemahaman Dasar SMKP Minerba",
        "Master Kit Ringkasan 7 Elemen SMKP Minerba & Buku Saku Golden Rules Operasional Tambang"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Regulasi Pokok Kaidah Teknik Pertambangan yang Baik & SMKP Minerba",
          topics: [
            "Telaah Regulasi: Permen ESDM No. 26/2018 & Kepmen ESDM No. 1827 K/30/MEM/2018 Lampiran III, IV & V",
            "Tugas & Tanggung Jawab Kepala Teknik Tambang (KTT) serta Pengawas Operasional (POP/POM/POU)",
            "Tujuh Elemen Sistem Manajemen Keselamatan Pertambangan (SMKP): Kebijakan, Perencanaan, Organisasi, Implementasi, Evaluasi, Dokumentasi, Tinjauan Manajemen"
          ],
          hours: "4 JP"
        },
        {
          module: "Modul 02: Manajemen Risiko Bahaya Kritis Operasional Tambang Terbuka",
          topics: [
            "Keselamatan Jalan Hauling: Lebar Jalan Angkut, Ketinggian Tanggul (Safety Berm), Super-Elevasi, dan Jalur Penyelamat (Runaway Ramp)",
            "Prosedur Pengoperasian Alat Berat & Blind Spot Management: Jarak Konvoi Aman, Buggy Whip, Radio Komunikasi 2 Arah",
            "Pemantauan Kestabilan Lereng Tambang (Slope Stability Monitoring) & Bahaya Longsoran Pit"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 03: Izin Kerja Kritis Tambang, Kesiapsiagaan Tanggap Darurat & Investigasi Insiden",
          topics: [
            "Dasar Keselamatan Pekerjaan Peledakan (Blasting Safety) & Pengendalian Bahan Peledak Komersial",
            "Izin Kerja Ruang Terbatas, Pekerjaan di Dekat Air (Water Body), dan Isolasi Energi (LOTO Tambang)",
            "Struktur Emergency Response Team (ERT) Tambang, Perlengkapan Rescue & Tata Cara Pelaporan Insiden ke Inspektur Tambang"
          ],
          hours: "6 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 4.250.000 per peserta. Termasuk materi modul komprehensif pedoman Kepmen ESDM 1827/2018, buku saku golden rules tambang, sertifikat kelulusan kompetensi, serta makan siang dan coffee break kelas tatap muka."
    },
    blocks: [
      {
        heading: "Urgensi Pemahaman Kaidah Teknik Pertambangan yang Baik",
        paragraphs: [
          "Industri pertambangan batubara dan mineral memiliki profil risiko yang sangat tinggi, melibatkan alat-alat raksasa (giant dump truck, hydraulic excavator), kondisi medan jalan licin dan terjal, lereng galian ratusan meter, hingga penggunaan bahan peledak. Satu kesalahan kecil di pit atau jalan hauling dapat memicu insiden fatal ganda (multiple fatality) dan penghentian operasi oleh Direktorat Jenderal Minerba.",
          "Kepmen ESDM No. 1827 K/30/MEM/2018 mewajibkan setiap pemegang IUP/IUPK dan perusahaan jasa pertambangan menerapkan SMKP Minerba secara ketat guna mewujudkan kegiatan pertambangan yang aman, efisien, dan produktif."
        ]
      },
      {
        heading: "Bekal Wajib Menuju Sertifikasi Pengawas Operasional Pertama (POP)",
        paragraphs: [
          "Pelatihan Dasar Keselamatan Pertambangan dirancang sebagai batu loncatan penting bagi para insinyur muda, pengawas lapangan, dan staf K3 sebelum mengikuti uji kompetensi sertifikasi Pengawas Operasional Pertama (POP) BNSP/ESDM. Peserta dibekali penguasaan regulasi teknis tambang, pembuatan JSA pekerjaan tambang, teknik inspeksi peralatan bergerak, dan pemahaman akuntabilitas hukum pengawas di hadapan Inspektur Tambang.",
          "Selain itu, peserta mempelajari kaidah keselamatan penataan tanggul pengaman (safety berm minimal 3/4 diameter roda terbesar), tata cara komunikasi radio tambang, serta prosedur izin kerja khusus di area disposal dan settling pond."
        ],
        bullets: [
          "Pemahaman mendalam 7 elemen SMKP Minerba untuk persiapan audit internal dan eksternal",
          "Standar teknis geometri jalan tambang, rambu reflektif, dan fasilitas jembatan timbang",
          "Kepatuhan Golden Rules keselamatan pertambangan: larangan fatigue, batas kecepatan, dan APD wajib",
          "Tata cara penulisan Buku Tambang dan laporan investigasi insiden pertambangan"
        ]
      },
      {
        heading: "Membuka Peluang Berkarir di Perusahaan Tambang Terkemuka",
        paragraphs: [
          "Pemahaman SMKP Minerba yang kuat menjadi nilai tambah yang sangat dicari oleh kontraktor tambang kelas satu dan pemegang konsesi nikel, batubara, maupun mineral emas di seluruh nusantara."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan Dasar Keselamatan Pertambangan (SMKP)?",
        answer: "Biaya pelatihan adalah Rp 4.250.000 per peserta untuk program 2 hari (16 JP) lengkap dengan buku panduan SMKP Minerba dan sertifikat kompetensi resmi."
      },
      {
        question: "Apakah pelatihan ini sama dengan Sertifikasi POP BNSP?",
        answer: "Pelatihan ini adalah program pembinaan fondasi teknis dan pemahaman SMKP Minerba yang sangat dianjurkan sebagai persiapan sebelum mengikuti uji sertifikasi Pengawas Operasional Pertama (POP) resmi ESDM/BNSP."
      },
      {
        question: "Apakah pekerja dari perusahaan subkontraktor jasa tambang boleh ikut?",
        answer: "Sangat dianjurkan. Setiap perusahaan jasa pertambangan (IUJP) wajib memiliki tenaga pengawas yang memahami regulasi SMKP Minerba sesuai Kepmen ESDM 1827/2018."
      }
    ],
    related: [
      "pelatihan/ahli-k3-umum",
      "pelatihan/safety-accountability-pengawas",
      "pelatihan/safety-officer-k3",
      "profesi/ahli-k3-umum",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/uu-1-1970-keselamatan-kerja"
    ],
    sources: [
      {
        label: "Kepmen ESDM No. 1827 K/30/MEM/2018 tentang Pedoman Pelaksanaan Kaidah Teknik Pertambangan yang Baik",
        url: "https://jdih.esdm.go.id/index.php/web/result/1912/detail",
        publisher: "Kementerian Energi dan Sumber Daya Mineral RI"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan dasar keselamatan pertambangan smkp minerba kepmen esdm 1827 biaya jadwal",
    primaryKeyword: "pelatihan dasar keselamatan pertambangan (smkp minerba)",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan dasar keselamatan pertambangan smkp minerba",
    intentType: "commercial",
    parentTopic: "Pelatihan Spesialis, Leadership & Sektoral Terapan",
    cannibalizationGroup: "pelatihan-k3-pertambangan",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan Dasar Tambang",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Persiapan POP Tambang",
    secondaryCtaIntent: "syarat",
    image: {
      src: "/images/content/instruktur-memandu-sesi-kelas-1.webp",
      alt: "Pemaparan modul regulasi keselamatan pertambangan SMKP Minerba dan kaidah teknik pertambangan yang baik"
    },
    gallery: [
      {
        src: "/images/content/instruktur-memandu-sesi-kelas-1.webp",
        alt: "Sesi diskusi interaktif mengenai keselamatan operasional hauling road dan pit terbuka"
      },
      {
        src: "/images/content/foto-bersama-pekerja-di-fasilitas-industri-1.webp",
        alt: "Peserta pelatihan keselamatan pertambangan mineral dan batubara"
      }
    ]
  },
  {
    slug: "k3-sektor-konstruksi-pengantar",
    title: "Pelatihan Dasar Keselamatan Konstruksi & SMKK PUPR",
    metaTitle: "Pelatihan Dasar Keselamatan Konstruksi & SMKK PUPR | Biaya 24 JP",
    description: "Pelatihan Dasar Keselamatan Konstruksi & SMKK PUPR No. 10/2021 durasi 24 JP (3 Hari). Biaya Rp 5.250.000, materi RKK, IBPRP, scaffolding, pekerjaan galian, dan safety patrol bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan Dasar Keselamatan Konstruksi & SMKK PUPR adalah program pembinaan teknis intensif 24 JP (3 Hari Kerja) berbasis Permen PUPR No. 10 Tahun 2021 tentang Pedoman Sistem Manajemen Keselamatan Konstruksi (SMKK). Pelatihan ini melatih peserta menyusun Rencana Keselamatan Konstruksi (RKK), menyusun Identifikasi Bahaya Penilaian Risiko dan Peluang (IBPRP), menghitung Analisis Biaya Penerapan SMKK, mengawasi pekerjaan berisiko tinggi (scaffolding, penggalian dalam, ereksi baja, bekisting), serta memimpin Safety Patrol harian proyek.",
    highlights: [
      "Durasi Pembinaan: 24 JP (3 Hari Kerja Intensif)",
      "Landasan Hukum: Permen PUPR No. 10 Tahun 2021 tentang Pedoman Sistem Manajemen Keselamatan Konstruksi (SMKK)",
      "Investasi Resmi: Rp 5.250.000 / Peserta (Materi Dokumen Tender & Pelaksanaan RKK)",
      "Output: Sertifikat Kompetensi Keselamatan Konstruksi & Toolkit Template Dokumen SMKK PUPR"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi Teknis Keselamatan Konstruksi & SMKK PUPR",
      duration: "24 JP (3 Hari Kerja)",
      method: "Blended / Tatap Muka (Workshop Penyusunan Dokumen RKK, Analisis Biaya SMKK, Simulasi Safety Patrol & Ujian)",
      legalBasis: "Permen PUPR No. 10 Tahun 2021, UU No. 02 Tahun 2017 tentang Jasa Konstruksi & Permenaker 01/1980",
      targetAudience: [
        "Petugas Keselamatan Konstruksi, HSE Inspector & Field Safety Engineer",
        "Site Manager, Pelaksana Lapangan, Quality Control (QC) & Estimator Tender",
        "Konsultan Pengawas (Supervision Consultant) & Pejabat Pembuat Komitmen (PPK)",
        "Kontraktor dan Subkontraktor Proyek Pekerjaan Sipil, Gedung, Jalan & Jembatan"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK Teknik atau D3/S1 Teknik Sipil/Arsitektur/K3",
        "Scan KTP / Paspor yang masih berlaku",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan Dasar Keselamatan Konstruksi & SMKK PUPR dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Verifikator Rencana Keselamatan Konstruksi (RKK)",
        "Master Kit Dokumen SMKK PUPR: Template RKK Tender, Template RKK Pelaksanaan, Form IBPRP Excel, dan Format Rincian Biaya SMKK"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Regulasi SMKK Permen PUPR 10/2021 & Kebijakan Jasa Konstruksi",
          topics: [
            "Landasan Hukum UU No. 2/2017 & Permen PUPR No. 10 Tahun 2021 tentang Pedoman SMKK",
            "Standar 5 Elemen SMKK: Kepemimpinan, Perencanaan, Dukungan, Operasi, dan Evaluasi Kinerja Keselamatan",
            "Komponen & Perhitungan Rincian Biaya Penerapan SMKK dalam Dokumen Penawaran Tender"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 02: Penyusunan Dokumen Rencana Keselamatan Konstruksi (RKK) & IBPRP",
          topics: [
            "Penyusunan RKK Tender vs RKK Pelaksanaan untuk Proyek Berisiko Kecil, Sedang, dan Besar",
            "Metodologi Identifikasi Bahaya, Penilaian Risiko, Penentuan Pengendalian & Peluang (IBPRP)",
            "Penyusunan Rencana Tindakan (Sasaran & Program Khusus Keselamatan Konstruksi)"
          ],
          hours: "10 JP"
        },
        {
          module: "Modul 03: Pengawasan Operasional Pekerjaan Kritis Konstruksi & Safety Patrol",
          topics: [
            "K3 Perancah (Scaffolding): Inspeksi Komponen, Pemasangan Scaff-tag (Hijau/Kuning/Merah), dan Beban Kerja Aman",
            "K3 Penggalian Dalam (Excavation & Shoring): Proteksi Dinding Galian dan Bahaya Tertimbun Tanah",
            "K3 Pekerjaan Pembetonan, Pengecoran (Formwork/Bekisting) & Pengangkatan Precast Concrete",
            "Pelaksanaan Safety Patrol, Safety Meeting Proyek & Pelaporan Laporan Mingguan/Bulanan SMKK ke PPK"
          ],
          hours: "8 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 5.250.000 per peserta. Sudah mencakup paket lengkap master template dokumen RKK word/excel sesuai lampiran Permen PUPR 10/2021, modul teknis konstruksi, sertifikat kompetensi resmi, serta makan siang dan rehat kopi kelas tatap muka."
    },
    blocks: [
      {
        heading: "Kewajiban Mutlak Penerapan SMKK Permen PUPR 10/2021 di Seluruh Proyek Konstruksi",
        paragraphs: [
          "Sektor konstruksi merupakan penyumbang angka kecelakaan kerja tertinggi di Indonesia, mulai dari perancah roboh, tanah galian longsor, pekerja terjatuh dari ketinggian, hingga tertimpa material crane. Untuk menghentikan rentetan insiden ini, Kementerian PUPR memberlakukan Permen PUPR No. 10 Tahun 2021 yang mewajibkan seluruh penyedia jasa konstruksi menerapkan Sistem Manajemen Keselamatan Konstruksi (SMKK).",
          "Kegagalan menyertakan dokumen Rencana Keselamatan Konstruksi (RKK) dan rincian biaya SMKK yang benar dapat mengakibatkan gugurnya penawaran lelang proyek pemerintah atau denda pemotongan progres pembayaran bagi kontraktor pelaksana."
        ]
      },
      {
        heading: "Menguasai Pembuatan Dokumen RKK dan Mitigasi Bahaya Lapangan",
        paragraphs: [
          "Pelatihan ini membedah langkah demi langkah penyusunan dokumen RKK Pelaksanaan sesuai format resmi kementerian. Peserta dibimbing langsung menyusun tabel matriks IBPRP yang detail untuk setiap tahapan mata pembayaran pekerjaan (seperti galian tanah, pembesian, pengecoran, dan pemasangan baja struktur).",
          "Di sisi operasional, peserta mempelajari standar keselamatan scaffolding (tagging system), proteksi penggalian tanah dalam menggunakan turap baja (trench box), serta koordinasi lalu lintas proyek (traffic management plan) di jalan umum."
        ],
        bullets: [
          "Perhitungan 9 item mata pembayaran biaya penerapan SMKK yang tidak boleh dinolkan",
          "Pemeriksaan kelaikan alat berat konstruksi (excavator, dump truck, mobile crane) sebelum bekerja",
          "Pemberian tanda Scaff-Tag pada perancah dan verifikasi sertifikat scaffolding inspector",
          "Penyusunan format laporan bulanan keselamatan konstruksi yang siap diserahkan ke Pejabat Pembuat Komitmen (PPK)"
        ]
      },
      {
        heading: "Menghubungkan Aspek Hukum Tender dengan Praktik Selamat di Proyek",
        paragraphs: [
          "Lulusan pelatihan memiliki kapabilitas ganda: menguasai penyusunan dokumen administratif yang meloloskan tender proyek dan piawai menegakkan disiplin keselamatan di lokasi proyek lapangan."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan Dasar Keselamatan Konstruksi & SMKK PUPR?",
        answer: "Biaya pelatihan adalah Rp 5.250.000 per peserta untuk program komprehensif 3 hari (24 JP) lengkap dengan master template dokumen RKK Permen PUPR 10/2021 dan sertifikat kompetensi resmi."
      },
      {
        question: "Apakah dokumen RKK yang diajarkan sesuai dengan format lelang tender LPSE?",
        answer: "Ya, modul pelatihan disusun persis mengacu pada Lampiran Permen PUPR No. 10 Tahun 2021 tentang format RKK Penawaran Tender dan RKK Pelaksanaan Pekerjaan Konstruksi."
      },
      {
        question: "Apakah lulusan jurusan non-teknik boleh mendaftar?",
        answer: "Bisa, asalkan memiliki pengalaman bekerja di lingkungan proyek konstruksi gedung, sipil, atau bertugas di bagian tender administrasi kontraktor."
      }
    ],
    related: [
      "pelatihan/pelatihan-ahli-k3-konstruksi-muda-madya-utama-sertifikasi-kemnaker-bnsp",
      "pelatihan/pelatihan-petugas-keselamatan-konstruksi-smkk-pupr-no-10-2021",
      "pelatihan/safety-officer-k3",
      "profesi/ahli-k3-konstruksi",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/uu-1-1970-keselamatan-kerja"
    ],
    sources: [
      {
        label: "Permen PUPR No. 10 Tahun 2021 tentang Pedoman Sistem Manajemen Keselamatan Konstruksi",
        url: "https://jdih.pu.go.id/detail-dokumen/2890/1",
        publisher: "Kementerian Pekerjaan Umum dan Perumahan Rakyat RI"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan dasar keselamatan konstruksi dan smkk pupr permen pupr 10 2021 biaya jadwal rkk",
    primaryKeyword: "pelatihan dasar keselamatan konstruksi & smkk pupr",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan dasar keselamatan konstruksi dan smkk pupr",
    intentType: "commercial",
    parentTopic: "Pelatihan Konstruksi Bangunan",
    cannibalizationGroup: "pelatihan-k3-konstruksi",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan SMKK Konstruksi",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Dokumen RKK Tender",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/foto-bersama-pekerja-di-fasilitas-industri-1.webp",
      alt: "Pemeriksaan keselamatan konstruksi harian dan sosialisasi Rencana Keselamatan Konstruksi SMKK PUPR di lokasi proyek"
    },
    gallery: [
      {
        src: "/images/content/foto-bersama-pekerja-di-fasilitas-industri-1.webp",
        alt: "Sesi workshop penyusunan dokumen IBPRP dan penghitungan biaya SMKK konstruksi"
      },
      {
        src: "/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-2.webp",
        alt: "Simulasi safety patrol dan inspeksi kelaikan perancah scaffolding proyek"
      }
    ]
  },
  {
    slug: "k3-sektor-migas-pengantar",
    title: "Pelatihan Dasar Keselamatan Migas & Sistem Izin Kerja Aman",
    metaTitle: "Pelatihan Dasar Keselamatan Migas & SIKA | Biaya, Jadwal 16 JP",
    description: "Pelatihan Dasar Keselamatan Migas & SIKA (Sistem Izin Kerja Aman) durasi 16 JP (2 Hari). Biaya Rp 4.250.000, materi H2S safety, LOTO, hot work permit, gas testing, dan standar Ditjen Migas bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan Dasar Keselamatan Migas & Sistem Izin Kerja Aman adalah program pembinaan 16 JP (2 Hari Kerja) untuk memahami standar keselamatan industri hulu dan hilir minyak dan gas bumi. Pelatihan ini melatih peserta mengidentifikasi bahaya mematikan gas H2S, zonasi area berbahaya gas mudah terbakar (Hazardous Area Classification / ATEX), isolasi energi LOTO, prosedur pengujian gas atmosfer (Atmospheric Gas Testing), serta penerbitan Sistem Izin Kerja Aman (SIKA / Permit-to-Work) sesuai PP No. 17 Tahun 1974 dan standar ESDM Ditjen Migas.",
    highlights: [
      "Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)",
      "Landasan Hukum: PP No. 17 Tahun 1974 tentang Pengawasan Keselamatan Kerja di Bidang Migas",
      "Investasi Resmi: Rp 4.250.000 / Peserta (Materi Praktis Industri Hulu & Hilir Migas)",
      "Output: Sertifikat Kompetensi Dasar Keselamatan Migas & Panduan Operasional SIKA"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi Sektoral Keselamatan Minyak dan Gas Bumi",
      duration: "16 JP (2 Hari Kerja)",
      method: "Blended / Tatap Muka (Studi Kasus Ledakan Kilang, Simulasi Gas Detector H2S, Verifikasi SIKA & Evaluasi)",
      legalBasis: "PP No. 17 Tahun 1974, UU No. 22 Tahun 2001 tentang Minyak dan Gas Bumi & Standar Keselamatan Migas",
      targetAudience: [
        "Calon Safety Officer Migas, HSE Inspector & Field Permit Coordinator",
        "Operator Kilang, Teknisi Rig Pengeboran, Maintenance Technician & Welder Migas",
        "Kontraktor dan Vendor Jasa Penunjang Migas (CSMS Contractor)",
        "Lulusan D3/S1 Teknik yang ingin berkarir di sektor oil and gas hulu maupun hilir"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK sederajat (diutamakan rumpun teknik)",
        "Scan KTP / Paspor yang masih berlaku",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan Dasar Keselamatan Migas dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Pemegang Otoritas Izin Kerja Aman (SIKA Permit Holder)",
        "Master Kit Formulir SIKA Terpadu: Hot Work Permit, Cold Work Permit, Confined Space Entry, Gas Test Record, dan LOTO Isolation Certificate"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Regulasi Keselamatan Migas & Karakteristik Bahaya Hidrokarbon",
          topics: [
            "Payung Hukum PP No. 17/1974, Peran Ditjen Migas, SKK Migas, dan Badan Pengawas Ketenagakerjaan",
            "Sifat Fisik & Kimia Hidrokarbon: Titik Nyala (Flash Point), Rentang Mudah Terbakar (LEL/UEL), Auto-Ignition",
            "Bahaya Mematikan Gas Hidrogen Sulfida (H2S): Karakteristik, Efek Fisiologis, Nilai Batas Paparan & Penggunaan SCBA"
          ],
          hours: "4 JP"
        },
        {
          module: "Modul 02: Sistem Izin Kerja Aman (SIKA / Permit-to-Work) & Atmospheric Gas Testing",
          topics: [
            "Struktur SIKA Terpadu: Peran Permit Requester, Permit Approver, Area Authority, dan Authorized Gas Tester (AGT)",
            "Jenis-Jenis Izin Kerja Migas: Hot Work, Cold Work, Confined Space Entry, Radiografi & Penggalian Pipa",
            "Pengoperasian Multi-Gas Detector: Prosedur Pengujian Kadar Oksigen (O2), Flammable Gas (LEL), Karbon Monoksida (CO) & H2S"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 03: Isolasi Energi Berbahaya (LOTO) & Rencana Tanggap Darurat Kilang",
          topics: [
            "Prinsip Isolasi Energi: Pemasangan Blind Flange (Spade/Blind), Isolasi Listrik Gardu, Lockout/Tagout System",
            "Prosedur Verifikasi Nol Energi (Zero Energy State Verification) Sebelum Pekerjaan Perbaikan Pipa/Vessel",
            "Sistem Tanggap Darurat Migas: ESD (Emergency Shutdown), Deluge Fire System, Muster Point & Simulasi Abandon Platform"
          ],
          hours: "6 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 4.250.000 per peserta. Termasuk bundle master formulir SIKA multi-otoritas, materi modul cetak/digital, sertifikat kompetensi resmi, serta makan siang dan rehat kopi kelas tatap muka."
    },
    blocks: [
      {
        heading: "Tuntutan Standar Tanpa Kompromi di Industri Minyak dan Gas Bumi",
        paragraphs: [
          "Industri hulu dan hilir minyak dan gas bumi beroperasi dengan zat hidrokarbon bertekanan dan bertemperatur tinggi yang sangat mudah menyala dan meledak. Selain bahaya kebakaran, keberadaan gas mematikan Hidrogen Sulfida (H2S) yang tidak berwarna dan dapat melumpuhkan indera penciuman dalam hitungan detik menuntut standar keselamatan yang tidak mengenal kompromi.",
          "PP No. 17 Tahun 1974 secara tegas mengatur kewajiban seluruh instalasi minyak bumi dan gas bumi di Indonesia untuk menerapkan sistem izin kerja aman dan pengawasan keselamatan yang ketat."
        ]
      },
      {
        heading: "Penguasaan Menyeluruh Prosedur SIKA dan Pengujian Gas Berbahaya",
        paragraphs: [
          "Pelatihan Dasar Keselamatan Migas & Sistem Izin Kerja Aman membimbing peserta menguasai alur kerja SIKA (Permit-to-Work) yang teruji. Peserta dilatih cara memeriksa apakah area kerja telah diuji gasnya sebelum pekerjaan panas pengelasan (hot work) diizinkan, memverifikasi isolasi perpipaan menggunakan blank/blind flange, serta memasang gembok pengaman LOTO.",
          "Peserta juga mempraktikkan prosedur penggunaan alat pelindung pernapasan darurat saat terjadi kebocoran gas beracun (H2S escape hood) dan pemahaman zonasi klasifikasi area berbahaya (Zone 0, Zone 1, Zone 2)."
        ],
        bullets: [
          "Pemahaman batas aman konsentrasi gas: Oksigen 19.5% - 23.5%, LEL di bawah 5%, H2S di bawah 1 ppm",
          "Kriteria verifikasi isolasi mekanikal (spading), elektrikal, dan instrumentasi",
          "Tanggung jawab hukum penandatangan izin kerja (Permit Signatory) saat terjadi insiden",
          "Penyusunan rencana evakuasi menuju Muster Station saat sirine darurat kilang berbunyi"
        ]
      },
      {
        heading: "Gerbang Masuk Karir Profesional di Industri Migas",
        paragraphs: [
          "Memiliki sertifikat pemahaman dasar keselamatan migas dan SIKA memberikan nilai jual tinggi bagi kandidat yang ingin lolos seleksi kerja di kontraktor EPC migas, operator drilling, maupun kilang petrokimia."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan Dasar Keselamatan Migas & SIKA?",
        answer: "Biaya pelatihan adalah Rp 4.250.000 per peserta untuk program intensif 2 hari (16 JP) lengkap dengan paket formulir SIKA terpadu dan sertifikasi kompetensi resmi."
      },
      {
        question: "Apakah materi mencakup keselamatan gas beracun H2S?",
        answer: "Ya, pelatihan ini memberikan modul khusus mengenai bahaya fatal H2S, batas pajanan NAB, pengoperasian detektor H2S portabel, dan prosedur penyelamatan darurat."
      },
      {
        question: "Apakah lulusan baru bisa mendaftar program pelatihan migas ini?",
        answer: "Bisa. Pelatihan ini dirancang sebagai pengantar komprehensif bagi lulusan baru SMA/SMK, D3, atau S1 yang ingin memahami standar kerja aman sebelum terjun ke industri migas."
      }
    ],
    related: [
      "pelatihan/ahli-k3-umum",
      "pelatihan/safety-officer-k3",
      "pelatihan/pelatihan-ahli-k3-kimia-sertifikasi-resmi-kemnaker-ri",
      "profesi/ahli-k3-migas",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/uu-1-1970-keselamatan-kerja"
    ],
    sources: [
      {
        label: "PP No. 17 Tahun 1974 tentang Pengawasan Keselamatan Kerja di Bidang Pertambangan Minyak dan Gas Bumi",
        url: "https://peraturan.bpk.go.id/Details/66664/pp-no-17-tahun-1974",
        publisher: "Pemerintah Republik Indonesia"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan dasar keselamatan migas dan sistem izin kerja aman sika ptw biaya jadwal",
    primaryKeyword: "pelatihan dasar keselamatan migas & sistem izin kerja aman",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan dasar keselamatan migas dan sistem izin kerja aman sika",
    intentType: "commercial",
    parentTopic: "Pelatihan Spesialis, Leadership & Sektoral Terapan",
    cannibalizationGroup: "pelatihan-k3-migas",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan Dasar Migas",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Sistem SIKA Migas",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-1.webp",
      alt: "Pemeriksaan izin kerja aman SIKA dan verifikasi gas detector atmosfer sebelum pekerjaan panas kilang migas"
    },
    gallery: [
      {
        src: "/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-1.webp",
        alt: "Briefing keselamatan kerja di fasilitas proses minyak dan gas bumi"
      },
      {
        src: "/images/content/instruktur-memandu-sesi-kelas-2.webp",
        alt: "Simulasi alur persetujuan Sistem Izin Kerja Aman (SIKA) dan isolasi energi LOTO"
      }
    ]
  },
  {
    slug: "k3-industri-manufaktur-umum",
    title: "Pelatihan K3 Manufaktur & Operasional Mesin Industri",
    metaTitle: "Pelatihan K3 Manufaktur & Pengaman Mesin | Biaya, Jadwal 16 JP",
    description: "Pelatihan K3 Manufaktur & Operasional Mesin Industri durasi 16 JP (2 Hari). Biaya Rp 3.750.000, materi machine guarding Permenaker 38/2016, LOTO pabrik, penanganan bahaya terjepit, dan housekeeping 5R bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan K3 Manufaktur & Operasional Mesin Industri adalah program pembinaan 16 JP (2 Hari Kerja) yang berfokus pada pengendalian bahaya mekanik di lantai pabrik. Pelatihan ini melatih supervisor produksi, teknisi pemeliharaan, dan HSE officer menerapkan standar pengaman mesin (machine guarding) sesuai Permenaker No. 38 Tahun 2016 tentang K3 Pesawat Tenaga dan Produksi, prosedur isolasi energi LOTO perbaikan mesin, ergonomi lini perakitan, dan pencegahan kecelakaan kerja anggota tubuh terpotong atau terjepit conveyor.",
    highlights: [
      "Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)",
      "Landasan Regulasi: Permenaker No. 38 Tahun 2016 tentang K3 Pesawat Tenaga dan Produksi",
      "Investasi Resmi: Rp 3.750.000 / Peserta (Materi Praktis Machine Guarding & LOTO Pabrik)",
      "Output: Sertifikat Kompetensi K3 Manufaktur & Toolkit Checklist Kelaikan Mesin Industri"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi K3 Sektoral Pabrik & Manufaktur",
      duration: "16 JP (2 Hari Kerja)",
      method: "Blended / Tatap Muka (Audit Visual Pengaman Mesin, Simulasi Prosedur LOTO, Penilaian Ergonomi Jalur Perakitan & Evaluasi)",
      legalBasis: "Permenaker No. 38 Tahun 2016, UU No. 1 Tahun 1970 & PP No. 50 Tahun 2012",
      targetAudience: [
        "Production Manager, Supervisor Produksi & Maintenance Head",
        "HSE Officer Pabrik Manufaktur, Tooling Engineer & Teknisi Mesin",
        "Ketua Regu Kerja / Mandor Operasional Mesin Press, Bubut, Stamping, dan Conveyor",
        "Anggota Komite P2K3 Perusahaan Manufaktur"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK sederajat atau berpengalaman di bidang manufaktur/pabrik",
        "Scan KTP yang masih berlaku",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan K3 Manufaktur dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Pengawas Keselamatan Mesin Pabrik",
        "Master Kit Dokumen: Checklist Inspeksi Pengaman Mesin (Machine Guarding), Prosedur LOTO Mesin Produksi, dan SOP Tanggap Darurat Terjepit"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Regulasi K3 Pesawat Tenaga dan Produksi Permenaker 38/2016",
          topics: [
            "Ruang Lingkup Permenaker 38/2016: Mesin Perkakas, Mesin Produksi, Penggerak Mula & Transmisi Tenaga Mekanik",
            "Titik Bahaya Mekanis (Mechanical Hazards): Titik Putar (Rotating Parts), Titik Jepit (Nip Points), Titik Potong & Bagian Meluncur",
            "Kewajiban Pengesahan Pemakaian & Riksa Uji Berkala Mesin Pabrik oleh Pengawas/PJK3"
          ],
          hours: "4 JP"
        },
        {
          module: "Modul 02: Desain Pengaman Mesin (Machine Guarding) & Prosedur LOTO",
          topics: [
            "Tipe Pengaman Mesin: Fixed Guard, Interlocking Guard, Presence-Sensing Device (Tirai Sinar/Light Curtain), dan Tombol Emergency Stop",
            "Standar Isolasi Energi Lockout/Tagout (LOTO): 6 Langkah Prosedur Penguncian Saat Servis Mesin",
            "Pencegahan Kecelakaan pada Mesin Press / Stamping, Roll Mill, Shredder, dan Sistem Ban Berjalan (Conveyor)"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 03: Ergonomi Jalur Perakitan (Assembly Line) & Budaya 5S/5R Pabrik",
          topics: [
            "Pencegahan Gangguan Muskuloskeletal Akibat Gerakan Berulang (Repetitive Motion) dan Postur Berdiri Statis",
            "Penerapan Disiplin 5R/5S (Ringkas, Rapi, Resik, Rawat, Rajin) untuk Mencegah Kebakaran dan Tersandung",
            "Pertolongan Pertama Penanganan Luka Potong Berat, Amputasi Jari & Tata Kelola Transportasi Medis Darurat"
          ],
          hours: "6 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 3.750.000 per peserta. Termasuk toolkit master checklist kelaikan mesin industri, modul pelatihan komprehensif, sertifikat kompetensi resmi, serta makan siang dan rehat kopi kelas tatap muka."
    },
    blocks: [
      {
        heading: "Tingginya Risiko Bahaya Mekanik di Lantai Pabrik Manufaktur",
        paragraphs: [
          "Lantai produksi pabrik manufaktur dipenuhi oleh mesin-mesin bergerak berkecepatan tinggi: mesin cetak stamping berdaya tekan puluhan ton, roda gigi transmisi, pisau potong hidrolik, dan ban berjalan otomatis. Kurangnya penutup pengaman (machine guard) atau kebiasaan buruk teknisi memperbaiki mesin dalam kondisi sakelar masih terhubung arus listrik kerap berujung pada kecelakaan mengerikan seperti tangan tergilas atau anggota tubuh teramputasi.",
          "Permenaker No. 38 Tahun 2016 menetapkan persyaratan ketat bahwa setiap bagian mesin yang berputar atau bergerak wajib dilengkapi alat pengaman yang efektif guna melindungi operator dari cedera fatal."
        ]
      },
      {
        heading: "Standarisasi Machine Guarding dan Disiplin Prosedur LOTO",
        paragraphs: [
          "Pelatihan K3 Manufaktur & Operasional Mesin Industri mengajarkan cara mengaudit seluruh titik jepit mesin pabrik. Peserta diajarkan memilih tipe pelindung yang sesuai: fixed guard untuk bagian transmisi tertutup, interlocking guard yang otomatis mematikan mesin saat pintu pengaman dibuka, atau photo-electric sensor (light curtain) yang menghentikan ram mesin press seketika tangan operator melintasi batas aman.",
          "Di samping pengaman fisik, pelatihan ini menanamkan disiplin prosedur Lockout/Tagout (LOTO) agar sebelum personel maintenance membersihkan atau mengganti mata pisau mesin, seluruh sumber energi listrik, pneumatik, dan hidrolik telah dikunci dan dipasang gembok peringatan."
        ],
        bullets: [
          "Audit kepatuhan tombol darurat (Emergency Stop Button) yang harus mudah dijangkau dari segala sudut kerja",
          "Tata cara penempatan kabel dan selang udara agar tidak melintang di jalur lintasan forklift atau pekerja",
          "Penerapan ergonomi kerja pada stasiun kerja operator perakitan barang",
          "Penyusunan SOP tanggap darurat pelepasan anggota tubuh korban terjepit mesin"
        ]
      },
      {
        heading: "Mendorong Produktivitas Pabrik Tanpa Kecelakaan Kerja",
        paragraphs: [
          "Dengan mesin yang aman dan prosedur perawatan yang tertib, angka kerusakan mesin (breakdown rate) menurun drastis dan moral pekerja meningkat karena mereka merasa terlindungi saat menjalankan tugas harian."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan K3 Manufaktur & Operasional Mesin?",
        answer: "Biaya pelatihan adalah Rp 3.750.000 per peserta untuk program 2 hari (16 JP) lengkap dengan master template inspeksi pengaman mesin dan sertifikasi kompetensi resmi."
      },
      {
        question: "Apakah materi LOTO diajarkan secara detail dalam pelatihan ini?",
        answer: "Ya, pelatihan ini membedah alur 6 langkah prosedur LOTO (Persiapan, Pemadaman, Isolasi, Penguncian, Pelepasan Energi Sisa, dan Verifikasi Nol Energi) secara mendalam."
      },
      {
        question: "Apakah pelatihan ini mencakup kewajiban uji berkala mesin ke Disnaker?",
        answer: "Ya, modul menjelaskan tata cara pengujian berkala Pesawat Tenaga dan Produksi (PTP) sesuai Permenaker 38/2016 untuk mendapatkan Surat Keterangan Layak K3 dari Kemnaker RI."
      }
    ],
    related: [
      "pelatihan/ahli-k3-umum",
      "pelatihan/safety-officer-k3",
      "pelatihan/pelatihan-sistem-isolasi-energi-lockout-tagout-loto-kelistrikan",
      "profesi/ahli-k3-umum",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/uu-1-1970-keselamatan-kerja"
    ],
    sources: [
      {
        label: "Permenaker No. 38 Tahun 2016 tentang Keselamatan dan Kesehatan Kerja Pesawat Tenaga dan Produksi",
        url: "https://jdih.kemnaker.go.id/katalog/permenaker-38-2016",
        publisher: "Kementerian Ketenagakerjaan RI"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan k3 manufaktur dan operasional mesin industri permenaker 38 2016 biaya jadwal loto",
    primaryKeyword: "pelatihan k3 manufaktur & operasional mesin industri",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan k3 manufaktur dan operasional mesin industri",
    intentType: "commercial",
    parentTopic: "Pelatihan Spesialis, Leadership & Sektoral Terapan",
    cannibalizationGroup: "pelatihan-k3-manufaktur",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan K3 Manufaktur",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Safety Guarding Mesin",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/praktik-pengikatan-beban-di-area-industri-1.webp",
      alt: "Pemeriksaan titik pengaman mesin industri dan verifikasi prosedur LOTO di pabrik manufaktur"
    },
    gallery: [
      {
        src: "/images/content/praktik-pengikatan-beban-di-area-industri-1.webp",
        alt: "Inspeksi berkala pengaman transmisi mesin dan tombol emergency stop di lantai pabrik"
      },
      {
        src: "/images/content/instruktur-menyampaikan-presentasi-di-kelas-1.webp",
        alt: "Pemaparan standar machine guarding Permenaker 38/2016 dan pencegahan bahaya mekanik"
      }
    ]
  },
  {
    slug: "k3-industri-makanan-minuman",
    title: "Pelatihan K3 Industri Makanan & Minuman (Food & Beverage Plant)",
    metaTitle: "Pelatihan K3 Industri Makanan & Minuman (F&B) | Biaya 16 JP",
    description: "Pelatihan K3 Industri Makanan & Minuman (Food & Beverage Plant) durasi 16 JP (2 Hari). Biaya Rp 3.750.000, integrasi K3 dan food safety HACCP/FSSC 22000, penanganan amonia chiller, dan lantai licin basah bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan K3 Industri Makanan & Minuman (Food & Beverage Plant) adalah program pembinaan komprehensif 16 JP (2 Hari Kerja) untuk mengatasi tantangan keselamatan khas pabrik makanan dan pengolahan pangan. Pelatihan ini melatih peserta mengintegrasikan standar K3 dengan keamanan pangan (Food Safety ISO 22000 / HACCP), mengendalikan risiko kebocoran gas pendingin amonia (NH3 chiller system), bahaya debu mudah terbakar (flour and sugar dust explosion), penanganan bahan pembersih CIP (Clean-in-Place) asam pekat, serta pencegahan kecelakaan terpeleset di area proses basah.",
    highlights: [
      "Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)",
      "Landasan Regulasi: UU No. 1 Tahun 1970, Permenaker K3 Terkait & Sinergi ISO 22000 / HACCP",
      "Investasi Resmi: Rp 3.750.000 / Peserta (Materi Praktis K3 Khusus Food Plant)",
      "Output: Sertifikat Kompetensi K3 Industri F&B & Panduan Integrasi K3 dengan Food Safety"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi K3 Sektoral Pengolahan Makanan & Minuman",
      duration: "16 JP (2 Hari Kerja)",
      method: "Blended / Tatap Muka (Audit Higiene & K3 Plant, Simulasi Kebocoran Amonia, Analisis Debu Tepung & Evaluasi)",
      legalBasis: "UU No. 1 Tahun 1970, Permenaker No. 05 Tahun 2018, PP No. 50 Tahun 2012 & Regulasi BPOM/Kemenkes",
      targetAudience: [
        "Plant Manager, Production Head & Quality Assurance (QA/QC) Food Plant",
        "HSE Officer, Safety Coordinator & Tim Tanggap Darurat Pabrik Makanan",
        "Maintenance Superintendent, Teknisi Sistem Refrigerasi Amonia & Boiler Uap Pangan",
        "Ketua Tim HACCP / Food Safety Team Leader yang ingin menyelaraskan norma keselamatan kerja"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK atau D3/S1 di bidang pangan, kimia, teknik, atau K3",
        "Scan KTP yang masih berlaku",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan K3 Industri Makanan & Minuman dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Pengawas K3 Industri Pengolahan Pangan",
        "Master Kit Dokumen: Matriks Integrasi K3 & HACCP, SOP Tanggap Darurat Kebocoran Gas Amonia, dan Checklist APD Food Grade"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Sinergi K3 (Occupational Safety) & Keamanan Pangan (Food Safety)",
          topics: [
            "Menyelaraskan Tujuan K3 (Zero Accident) dan Food Safety (Zero Contamination) Tanpa Konflik Prosedur",
            "Pemilihan APD Khusus Makanan (Food-Grade Gloves, Hairnet, Deteksi Logam APD, Sepatu Safety Anti-Slip Bersih)",
            "Penanganan Bahaya Terpeleset & Tersandung (Slip, Trip & Fall) di Area Lantai Basah (Washdown Areas)"
          ],
          hours: "4 JP"
        },
        {
          module: "Modul 02: Bahaya Kritis Refrigerasi Amonia & Bahan Kimia Sanitasi CIP",
          topics: [
            "K3 Sistem Pendingin Amonia (Anhydrous Ammonia Refrigeration): Toksisitas, Detektor Kebocoran, dan Evakuasi",
            "Keselamatan Penanganan Bahan Kimia Sanitasi Bersih Otomatis (CIP - Caustic Soda & Nitric Acid)",
            "Prosedur Izin Kerja Masuk Ruang Terbatas (Confined Space) pada Tangki Fermentasi, Silo Gandum, dan Mixer Pangan"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 03: Ledakan Debu Pangan (Combustible Dust) & Keselamatan Pengemasan Otomatis",
          topics: [
            "Bahaya Ledakan Debu Mudah Menyala (Combustible Dust Explosion): Tepung Terigu, Gula Halus, Pati Jagung & Kakao",
            "Sistem Pengendalian Ventilasi Dust Collector, Grounding Penangkal Statis, dan Explosion Venting",
            "Keselamatan Mesin Pengemasan Cepat (High-Speed Packaging, Palletizer Robot, dan Shrink Tunnel Panas)"
          ],
          hours: "6 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 3.750.000 per peserta. Sudah termasuk modul pelatihan terpadu K3 & food safety, toolkit template checklist food plant safety, sertifikat kompetensi resmi, serta makan siang dan rehat kopi kelas tatap muka."
    },
    blocks: [
      {
        heading: "Tantangan Unik: Menyeimbangkan Keselamatan Pekerja dan Kebersihan Pangan",
        paragraphs: [
          "Industri makanan dan minuman memiliki tantangan ganda yang unik: di satu sisi perusahaan wajib memenuhi standar ketat kebersihan produk (HACCP / FSSC 22000) agar tidak terjadi kontaminasi produk, namun di sisi lain para pekerja menghadapi lingkungan kerja yang penuh risiko. Lantai pabrik sering kali basah dan licin akibat pencucian air panas, uap boiler bersuhu tinggi, serta mesin pemotong berkecepatan tinggi.",
          "Pelatihan K3 Industri Makanan & Minuman membimbing manajemen pabrik F&B mendesain prosedur kerja aman yang tidak mengorbankan mutu produk pangan sekaligus melindungi pekerja dari cedera kerja."
        ]
      },
      {
        heading: "Mitigasi Dua Bahaya Laten Fatal: Kebocoran Amonia dan Ledakan Debu Tepung",
        paragraphs: [
          "Banyak pabrik pengolahan makanan menggunakan amonia cair sebagai zat pendingin cold storage skala besar. Kebocoran gas amonia dalam konsentrasi tinggi dapat merusak paru-paru secara permanen dan memicu evakuasi massal. Peserta diajarkan cara memasang sistem sensor gas amonia otomatis, ventilasi darurat, dan penggunaan respirator full-face khusus.",
          "Bahaya lain yang sering luput adalah ledakan debu (dust explosion) di area silo dan penggilingan tepung terigu atau gula halus. Pelatihan ini membedah pentagon api ledakan debu dan cara pemasangan grounding antistatis guna mencegah percikan listrik statis memicu ledakan pabrik."
        ],
        bullets: [
          "Pemilihan sepatu bot pengaman khusus industri pangan dengan sol anti-slip teruji (SRC rating)",
          "Pengelolaan izin kerja aman masuk tangki pencampuran (mixer/blender) dengan isolasi LOTO mutlak",
          "Prosedur penanganan bahan kimia pembersih asam dan basa pada siklus Clean-in-Place (CIP)",
          "Penyusunan Rencana Tanggap Darurat Pabrik Pangan saat terjadi kontaminasi atau kebocoran gas"
        ]
      },
      {
        heading: "Harmonisasi Audit K3 dan Audit Standar Pangan Internasional",
        paragraphs: [
          "Peserta dilatih menyelaraskan temuan audit SMK3 PP 50/2012 dengan audit sertifikasi keamanan pangan, sehingga memudahkan departemen HSE dan QA bekerja sama secara harmonis."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan K3 Industri Makanan & Minuman?",
        answer: "Biaya pelatihan adalah Rp 3.750.000 per peserta untuk program 2 hari (16 JP) lengkap dengan instrumen integrasi K3 & HACCP serta sertifikat kompetensi resmi."
      },
      {
        question: "Apakah pelatihan ini mengulas penanganan kebocoran amonia cold storage?",
        answer: "Ya, modul pelatihan membedah secara mendalam prosedur tanggap darurat kebocoran sistem refrigerasi amonia, penggunaan detektor, dan tata cara evakuasi aman."
      },
      {
        question: "Apakah materi ini cocok untuk pabrik minuman kemasan dan susu?",
        answer: "Sangat cocok. Pabrik minuman kemasan, olahan susu, pabrik roti, penggilingan tepung, hingga pabrik makanan beku menghadapi bahaya operasional yang identik."
      }
    ],
    related: [
      "pelatihan/ahli-k3-umum",
      "pelatihan/safety-officer-k3",
      "pelatihan/pelatihan-ahli-k3-kimia-sertifikasi-resmi-kemnaker-ri",
      "profesi/ahli-k3-umum",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/uu-1-1970-keselamatan-kerja"
    ],
    sources: [
      {
        label: "UU No. 1 Tahun 1970 tentang Keselamatan Kerja",
        url: "https://jdih.kemnaker.go.id/katalog/uu-1-1970",
        publisher: "Pemerintah Republik Indonesia"
      },
      {
        label: "Permenaker No. 05 Tahun 2018 tentang Keselamatan dan Kesehatan Kerja Lingkungan Kerja",
        url: "https://jdih.kemnaker.go.id/katalog/permenaker-05-2018",
        publisher: "Kementerian Ketenagakerjaan RI"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan k3 industri makanan minuman food beverage plant biaya jadwal materi amonia",
    primaryKeyword: "pelatihan k3 industri makanan & minuman (food & beverage plant)",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan k3 industri makanan dan minuman food plant",
    intentType: "commercial",
    parentTopic: "Pelatihan Spesialis, Leadership & Sektoral Terapan",
    cannibalizationGroup: "pelatihan-k3-food-beverage",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan K3 Food Plant",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Safety Audit F&B",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/foto-bersama-pekerja-di-fasilitas-industri-2.webp",
      alt: "Inspeksi kepatuhan K3 dan standar sanitasi keamanan pangan di fasilitas pabrik makanan minuman"
    },
    gallery: [
      {
        src: "/images/content/foto-bersama-pekerja-di-fasilitas-industri-2.webp",
        alt: "Sesi peninjauan prosedur keselamatan pengolahan pangan dan pencegahan lantai licin"
      },
      {
        src: "/images/content/instruktur-memandu-sesi-kelas-3.webp",
        alt: "Pemaparan mitigasi kebocoran refrigerasi amonia dan bahaya ledakan debu tepung pangan"
      }
    ]
  }
];

// Write all 10 files
for (const p of batch4Programs) {
  const filePath = path.join('src', 'content', 'pelatihan', `${p.slug}.ts`);
  const fileContent = `import { type ContentRecord } from '../../lib/content-types';

export const record: ContentRecord = ${JSON.stringify(p, null, 2)};
export default record;
`;
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`✓ Successfully wrote: ${p.slug}`);
}

console.log('Batch 4 (Sectoral Industry Specializations) Complete: 10 files written.');

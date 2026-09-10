import fs from 'fs';
import path from 'path';

const finalBoilerplatePrograms = [
  {
    slug: "pelatihan-investigasi-penyebab-kebakaran-industri-fire-investigation",
    title: "Pelatihan Investigasi Penyebab Kebakaran Industri (Fire Investigation)",
    metaTitle: "Pelatihan Investigasi Kebakaran Industri | NFPA 921, Biaya & Jadwal 24 JP",
    description: "Pelatihan Investigasi Penyebab Kebakaran Industri (Fire Investigation) durasi 24 JP (3 Hari). Biaya Rp 5.250.000, metodologi NFPA 921, analisis titik mula api (origin & cause), penanganan barang bukti, dan pelaporan bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan Investigasi Penyebab Kebakaran Industri (Fire Investigation) adalah program pembinaan investigasi forensik kebakaran 24 JP (3 Hari Kerja) berbasis standar NFPA 921 (Guide for Fire and Explosion Investigations) dan Kepmenaker 186/1999. Pelatihan ini melatih tim K3, fire safety officer, dan asuransi mengidentifikasi pola pembakaran (burn patterns / V-patterns), menemukan area awal mula api (Area of Origin), menguji sumber penyalaan (listrik, reaksi kimia, gesekan mekanik, sabotase), mengamankan rantai barang bukti (chain of custody), serta menyusun laporan investigasi legal formal.",
    highlights: [
      "Durasi Pembinaan: 24 JP (3 Hari Kerja Intensif)",
      "Landasan Standar: NFPA 921, Kepmenaker No. 186/1999 & Permenaker No. 03/1998",
      "Investasi Resmi: Rp 5.250.000 / Peserta (Forensik Kebakaran & Analisis Pola Api)",
      "Output: Sertifikat Kompetensi Fire Investigator Industri & Panduan Metodologi Forensik"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi Teknis Lanjutan Investigasi Kebakaran Industri",
      duration: "24 JP (3 Hari Kerja)",
      method: "Blended / Tatap Muka (Rekonstruksi Pola Api, Uji Bukti Kelistrikan / Arcing, Analisis Titik Awal & Ujian)",
      legalBasis: "Kepmenaker No. 186/1999, Permenaker No. 03/1998, UU No. 1 Tahun 1970 & NFPA 921",
      targetAudience: [
        "HSE Manager, Fire Safety Specialist & Tim Investigasi Insiden",
        "Koordinator Pemadam Kebakaran Kelas A/B & Fire Chief Industri",
        "Loss Adjuster, Surveyor Klaim Asuransi Kebakaran & Penilai Risiko Aset",
        "Penyidik Internal Keamanan Korporasi & Pengawas Ketenagakerjaan"
      ],
      prerequisites: [
        "Pendidikan minimal D3 atau S1 (diutamakan rumpun teknik, sains, atau K3)",
        "Scan KTP yang masih berlaku",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan Investigasi Penyebab Kebakaran Industri dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Certified Industrial Fire Investigator",
        "Master Kit Dokumen: Template Laporan Investigasi Kebakaran NFPA 921, Formulir Chain of Custody Bukti Fisik, dan Checklist Verifikasi Arcing Listrik"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Kimia dan Fisika Kebakaran & Metodologi Ilmiah NFPA 921",
          topics: [
            "Dinamika Api: Tahapan Kebakaran (Incipient, Growth, Fully Developed, Decay), Flashover & Backdraft",
            "Penerapan Metode Ilmiah: Observasi Data, Pembentukan Hipotesis, Pengujian Hipotesis, dan Kesimpulan Akhir",
            "Keselamatan Investigator di TKP Pasca-Kebakaran (Struktur Runtuh, Asap Toksik, Asbestos & Gas Sisa)"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 02: Penentuan Area Asal (Origin) & Analisis Pola Kebakaran (Fire Patterns)",
          topics: [
            "Membaca Pola Api: Bentuk V (V-Patterns), Kedalaman Pengarangan (Depth of Char), dan Efek Spalling Beton",
            "Mendeteksi Titik Mula Api (Point of Origin) Melalui Teknik Lapisan Sedimen Abu & Analisis Pelelehan Logam",
            "Membedakan Korsleting Listrik: Penyebab Utama (Cause) vs Korban Api (Arc Mapping & Cause/Victim Beading)"
          ],
          hours: "10 JP"
        },
        {
          module: "Modul 03: Penentuan Sumber Penyalaan (Cause), Bukti Forensik & Penyusunan Laporan",
          topics: [
            "Kategori Penyebab Kebakaran: Alami, Tidak Disengaja (Accidental), Kesengajaan / Sabotase (Arson), dan Undetermined",
            "Prosedur Pengamanan Bukti Forensik, Dokumentasi Foto Grid & Rantai Penjagaan (Chain of Custody)",
            "Penyusunan Laporan Komprehensif: Rekonstruksi Kronologi Detik Demi Detik, Analisis Akar Masalah (RCA) & Rekomendasi Pencegahan Berulang"
          ],
          hours: "8 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 5.250.000 per peserta. Termasuk materi modul NFPA 921 terpadu, toolkit investigasi lapangan, sertifikat kompetensi resmi, serta makan siang dan rehat kopi kelas tatap muka."
    },
    blocks: [
      {
        heading: "Mengapa Investigasi Penyebab Kebakaran Memerlukan Keahlian Forensik Ilmiah?",
        paragraphs: [
          "Pasca-kebakaran pabrik atau gudang, simpulan umum yang sering dituduhkan adalah 'hubungan pendek arus listrik'. Namun kesimpulan tanpa pembuktian ilmiah ini kerap menutupi akar masalah yang sebenarnya, seperti pemeliharaan mesin yang buruk, penumpukan debu mudah terbakar, atau pelanggaran izin kerja panas (hot work). Tanpa investigasi mendalam, penyebab sejati kebakaran tidak pernah teratasi dan bencana serupa dapat terulang kembali.",
          "Pelatihan Investigasi Penyebab Kebakaran Industri mengajarkan metodologi forensik ilmiah berstandar NFPA 921 untuk membedakan secara akurat antara bukti korsleting listrik yang memicu api (primary arcing) dengan korsleting yang terjadi setelah kabel dilalap api (secondary arcing)."
        ]
      },
      {
        heading: "Keahlian Menentukan Titik Awal Mula Api (Point of Origin)",
        paragraphs: [
          "Peserta dilatih menelusuri jejak perambatan panas dari area kerusakan paling ringan menuju area dengan deformasi termal paling parah. Mereka mempelajari cara membersihkan puing lapis demi lapis (excavation of debris) guna menemukan sisa-sisa sumber penyalaan pertama.",
          "Di samping aspek teknis, peserta dibekali etika pengamanan barang bukti agar hasil laporan investigasi memiliki bobot hukum yang kuat saat menghadapi audit kepatuhan pemerintah maupun klaim asuransi properti."
        ],
        bullets: [
          "Teknik fotografi makro dan pemetaan sketsa grid lokasi kebakaran industri",
          "Analisis burn pattern pada dinding panel dan rangka baja struktur gedung",
          "Pemeriksaan indikasi kesengajaan pembakaran (tanda akseleran bahan bakar)",
          "Penyusunan rekomendasi perbaikan sistem proteksi aktif dan pasif kebakaran"
        ]
      },
      {
        heading: "Memberikan Kepastian bagi Manajemen dan Penilai Asuransi",
        paragraphs: [
          "Laporan investigasi yang kredibel dan berbasis bukti ilmiah memberikan kejelasan bagi direksi, mempermudah penyelesaian klaim kerugian aset, serta menjadi fondasi perombakan prosedur keselamatan di masa depan."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan Investigasi Penyebab Kebakaran Industri?",
        answer: "Biaya pelatihan adalah Rp 5.250.000 per peserta untuk program teknis 3 hari (24 JP) lengkap dengan instrumen NFPA 921 dan sertifikasi kompetensi resmi."
      },
      {
        question: "Apakah materi mengacu pada standar investigasi internasional?",
        answer: "Ya, kurikulum mengadopsi standar emas dunia NFPA 921 (Guide for Fire and Explosion Investigations) diselaraskan dengan norma pengawasan ketenagakerjaan Kemnaker RI."
      },
      {
        question: "Apakah peserta akan belajar menganalisis bukti pelelehan kabel listrik?",
        answer: "Ya, pelatihan membedah teknik arc mapping untuk membedakan manik lelehan akibat percikan pemicu api (cause beading) vs manik lelehan akibat paparan kobaran api luar."
      }
    ],
    related: [
      "pelatihan/k3-kebakaran",
      "pelatihan/k3-kebakaran-kelas-a",
      "pelatihan/investigasi-insiden-k3",
      "profesi/ahli-k3-kebakaran",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/kepmenaker-186-1999-unit-penanggulangan-kebakaran"
    ],
    sources: [
      {
        label: "NFPA 921: Guide for Fire and Explosion Investigations",
        url: "https://www.nfpa.org/codes-and-standards/921",
        publisher: "National Fire Protection Association"
      },
      {
        label: "Kepmenaker No. 186/1999 tentang Unit Penanggulangan Kebakaran di Tempat Kerja",
        url: "https://jdih.kemnaker.go.id/katalog/kepmenaker-186-1999",
        publisher: "Kementerian Ketenagakerjaan RI"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan investigasi penyebab kebakaran industri fire investigation nfpa 921 biaya jadwal",
    primaryKeyword: "pelatihan investigasi penyebab kebakaran industri (fire investigation)",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan investigasi penyebab kebakaran industri fire investigation",
    intentType: "commercial",
    parentTopic: "Penanggulangan Kebakaran",
    cannibalizationGroup: "pelatihan-fire-investigation",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan Fire Investigation",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Investigasi Kebakaran",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/instruktur-menyampaikan-presentasi-di-kelas-2.webp",
      alt: "Pemaparan metodologi ilmiah NFPA 921 dan rekonstruksi titik awal mula api kebakaran industri"
    },
    gallery: [
      {
        src: "/images/content/instruktur-menyampaikan-presentasi-di-kelas-2.webp",
        alt: "Sesi analisis pola pembakaran burn patterns dan verifikasi bukti korsleting listrik"
      },
      {
        src: "/images/content/diskusi-instruktur-dan-peserta-di-ruang-seminar-1.webp",
        alt: "Diskusi penyusunan laporan forensik kebakaran industri dan rantai barang bukti chain of custody"
      }
    ]
  },
  {
    slug: "pelatihan-juru-ikat-beban-rigger-slinger-bersertifikat-kemnaker",
    title: "Pelatihan Juru Ikat Beban (Rigger / Slinger) Bersertifikat Kemnaker RI",
    metaTitle: "Pelatihan Juru Ikat Beban (Rigger) Kemnaker RI | Jadwal, Biaya 24 JP",
    description: "Pelatihan Juru Ikat Beban Rigger Slinger Sertifikasi Kemnaker RI durasi 24 JP (3 Hari). Biaya Rp 4.500.000, materi sling wire/webbing, sinyal crane, sudut angkat, dan Permenaker 08/2020 bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan Juru Ikat Beban (Rigger / Slinger) Bersertifikat Kemnaker RI adalah program pembinaan dan lisensi resmi 24 JP (3 Hari Kerja) berdasarkan Permenaker No. 08 Tahun 2020 tentang K3 Pesawat Angkat dan Pesawat Angkut. Pelatihan ini melatih rigger menghitung perkiraan berat beban dan titik berat (Center of Gravity), memilih serta menginspeksi alat bantu angkat (wire rope sling, webbing sling, chain sling, shackle, eyebolt), menerapkan sudut pengikatan aman, memandu operator crane menggunakan sinyal tangan terstandarisasi, serta mengendalikan tali kendali (tagline).",
    highlights: [
      "Durasi Pembinaan: 24 JP (3 Hari Kerja Intensif)",
      "Landasan Regulasi: Permenaker No. 08 Tahun 2020 tentang K3 Pesawat Angkat dan Pesawat Angkut",
      "Investasi Resmi: Rp 4.500.000 / Peserta (Praktik Lapangan Pengikatan & Sinyal Crane)",
      "Output: Sertifikat Pembinaan Kemnaker RI Resmi, Lisensi SIO Rigger & Buku Kerja"
    ],
    courseDetails: {
      level: "Sertifikasi Pembinaan & Lisensi Kewenangan Kemnaker RI",
      duration: "24 JP (3 Hari Kerja)",
      method: "Blended / Tatap Muka (Teori Regulasi, Kalkulasi Beban, Praktik Pengikatan Sling di Lapangan & Evaluasi Ujian)",
      legalBasis: "Permenaker No. 08 Tahun 2020, UU No. 1 Tahun 1970 & Standar ASME B30",
      targetAudience: [
        "Calon Juru Ikat Beban (Rigger), Slinger & Signalman Crane",
        "Teknisi Pengangkatan, Helper Mekanik & Operator Alat Berat",
        "Supervisor Rigging, Lifting Supervisor & Foreman Konstruksi/Pabrik",
        "Staff HSE yang mengawasi pekerjaan pengangkatan kritis (Critical Lifting)"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK sederajat",
        "Scan KTP / Kartu Identitas yang masih berlaku",
        "Surat Keterangan Sehat dari dokter (termasuk tidak buta warna)",
        "Surat Tugas / Rekomendasi dari perusahaan pengutus",
        "Pas foto formal latar belakang merah ukuran 3x4 (4 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Pembinaan Juru Ikat Beban (Rigger) resmi dari Kementerian Ketenagakerjaan RI",
        "Surat Izin Operator (SIO / Lisensi K3) Rigger Kemnaker RI masa berlaku 5 tahun",
        "Buku Kerja (Logbook) Resmi Rigger Kemnaker RI"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Peraturan Perundangan K3 Pesawat Angkat dan Angkut Permenaker 08/2020",
          topics: [
            "Kebijakan K3 Nasional & Ketentuan Hukum Pengangkatan Beban Permenaker 08/2020",
            "Tugas, Wewenang & Tanggung Jawab Hukum Juru Ikat Beban (Rigger)",
            "Persyaratan Kelaikan Alat Bantu Angkat & Angkut (ABAA) Serta Pengujian Berkala"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 02: Pengetahuan Alat Bantu Angkat, Kalkulasi Beban & Titik Berat (COG)",
          topics: [
            "Jenis & Kriteria Afkir ABAA: Wire Rope Sling, Webbing Sling Sintetis, Rantai Angkat, Shackle, Eyebolt, dan Hook",
            "Menghitung Volume, Berat Jenis Material, Estimasi Total Massa Beban & Menentukan Center of Gravity (COG)",
            "Pengaruh Sudut Kaki Sling (Sling Angle Factor) Terhadap Beban Kerja Aman (Working Load Limit / WLL)"
          ],
          hours: "10 JP"
        },
        {
          module: "Modul 03: Praktik Pengikatan Lapangan, Kode Sinyal Komunikasi & Evaluasi Kelulusan",
          topics: [
            "Metode Pengikatan Aman: Choker Hitch, Basket Hitch, Straight Vertical Hitch, dan Penggunaan Proteksi Sudut (Corner Pad)",
            "Standar Kode Sinyal Tangan (Hand Signal) & Komunikasi Radio Dua Arah dengan Operator Crane",
            "Penggunaan Tali Kendali (Tagline) untuk Menstabilkan Ayunan Beban dari Jarak Aman",
            "Ujian Teori Kemnaker RI & Praktik Evaluasi Pengikatan Nyata di Lapangan"
          ],
          hours: "8 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 4.500.000 per peserta. Termasuk pengurusan berkas ke Kemnaker RI, penerbitan Sertifikat & Lisensi SIO Rigger resmi, modul cetak, perlengkapan praktik safety, konsumsi penuh, serta bimbingan instruktur bersertifikat."
    },
    blocks: [
      {
        heading: "Urgensi Kompetensi dan Lisensi Resmi Juru Ikat Beban (Rigger)",
        paragraphs: [
          "Operasi pengangkatan menggunakan derek jangkung (tower crane), mobile crane, atau overhead crane adalah pekerjaan dengan risiko bahaya kematian sangat tinggi. Sebagian besar kecelakaan fatal beban jatuh tidak disebabkan oleh kerusakan mesin crane, melainkan akibat kesalahan juru ikat beban (rigger): salah memperkirakan titik berat beban, menggunakan sling yang sudah terkoyak, atau mengikat beban dengan sudut sling yang terlalu landai sehingga beban kerja putus seketika.",
          "Permenaker No. 08 Tahun 2020 Pasal 140 mewajibkan setiap pekerjaan pengikatan beban pada pesawat angkat dan angkut dilakukan oleh juru ikat (rigger) yang memiliki Lisensi K3 dan Buku Kerja resmi dari Kementerian Ketenagakerjaan RI."
        ]
      },
      {
        heading: "Praktik Menghitung Beban dan Penguasaan Sinyal Tangan Terstandarisasi",
        paragraphs: [
          "Pelatihan ini membimbing calon rigger menguasai formula kalkulasi matematika praktis untuk menghitung berat benda silinder, balok beton, struktur baja profil, dan mesin ganjil. Peserta dilatih menghitung tegangan yang meningkat drastis pada sling saat sudut kaki sling mengecil di bawah 60 derajat.",
          "Di lapangan, peserta mempraktikkan sinyal tangan standar industri (hoist, lower, swing, boom up, emergency stop) sehingga komunikasi antara juru ikat dan operator crane berjalan tanpa keraguan sedikit pun, sekalipun berada di area kerja bising."
        ],
        bullets: [
          "Kriteria inspeksi afkir sling: kawat putus (broken wires), kinking, birdcaging, sobekan webbing, dan deformasi shackle pin",
          "Pemasangan corner protector untuk melindungi sling sintetis dari gesekan ujung baja tajam",
          "Penerapan jarak aman radius kerja dan zona larangan berdiri di bawah beban gantung (Drop Zone)",
          "Penggunaan tagline non-konduktif untuk mengendalikan orientasi barang saat angin kencang"
        ]
      },
      {
        heading: "Kepatuhan Regulasi untuk Tender Konstruksi dan Industri Berat",
        paragraphs: [
          "Memiliki rigger bersertifikat Kemnaker RI merupakan syarat mutlak dalam audit CSMS kontraktor di proyek infrastruktur, pertambangan, pabrik baja, dan galangan kapal."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan Rigger Sertifikasi Kemnaker RI?",
        answer: "Biaya pelatihan adalah Rp 4.500.000 per peserta untuk program 3 hari (24 JP) sudah termasuk biaya pengurusan sertifikat resmi Kemnaker RI, Lisensi K3 (SIO), dan buku kerja."
      },
      {
        question: "Apakah peserta mendapatkan Surat Izin Operator (SIO) resmi Kemnaker RI?",
        answer: "Ya, peserta yang lulus ujian teori dan praktik akan diterbitkan Sertifikat Pembinaan dan Lisensi Kewenangan K3 (SIO) Juru Ikat Beban dari Kemnaker RI yang berlaku selama 5 tahun."
      },
      {
        question: "Apakah materi mencakup pengikatan berbagai jenis material?",
        answer: "Ya, pelatihan mempraktikkan pengikatan pipa bundle, plat baja lebar, tangki silinder, dan mesin industri tidak simetris."
      }
    ],
    related: [
      "pelatihan/pelatihan-ahli-k3-spesialis-pesawat-angkat-angkut-kemnaker-ri",
      "pelatihan/pelatihan-operator-overhead-crane-gantry-crane-kelas-i-ii-kemnaker",
      "pelatihan/pelatihan-operator-mobile-crane-crawler-crane-sertifikasi-kemnaker",
      "profesi/rigger",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/permenaker-08-2020-k3-pesawat-angkat-dan-angkut"
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
    intent: "pelatihan juru ikat beban rigger slinger bersertifikat kemnaker ri biaya jadwal sio",
    primaryKeyword: "pelatihan juru ikat beban rigger slinger bersertifikat kemnaker",
    searchIntent: "biaya jadwal materi dan sertifikasi resmi juru ikat beban rigger slinger kemnaker ri",
    intentType: "commercial",
    parentTopic: "Pesawat Angkat & Pesawat Angkut",
    cannibalizationGroup: "pelatihan-rigger-slinger",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan Rigger Kemnaker",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Syarat SIO Rigger",
    secondaryCtaIntent: "syarat",
    image: {
      src: "/images/content/praktik-pengikatan-beban-di-area-industri-1.webp",
      alt: "Praktik langsung pengikatan beban rigging dan inspeksi shackle sling sesuai Permenaker 08/2020"
    },
    gallery: [
      {
        src: "/images/content/praktik-pengikatan-beban-di-area-industri-1.webp",
        alt: "Pelatihan teknis pengikatan sling wire rope dan perhitungan kapasitas beban aman"
      },
      {
        src: "/images/content/praktik-pengangkatan-beban-dengan-crane-1.webp",
        alt: "Pemanduan sinyal tangan juru ikat beban (rigger) kepada operator crane di lapangan"
      }
    ]
  },
  {
    slug: "pelatihan-k3-inspeksi-kelayakan-sabuk-pengikat-webbing-sling-shackle",
    title: "Pelatihan K3 Inspeksi Kelayakan Sabuk Pengikat Webbing Sling & Shackle",
    metaTitle: "Pelatihan Inspeksi Webbing Sling & Shackle K3 | Biaya, Jadwal 16 JP",
    description: "Pelatihan K3 Inspeksi Kelayakan Webbing Sling & Shackle durasi 16 JP (2 Hari). Biaya Rp 3.750.000, kriteria afkir sling sintetis, uji visual shackle, standar ASME B30.9, dan Permenaker 08/2020 bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan K3 Inspeksi Kelayakan Sabuk Pengikat Webbing Sling & Shackle adalah program pembinaan teknis 16 JP (2 Hari Kerja) untuk memastikan keselamatan alat bantu angkat. Pelatihan ini melatih inspektur rigging dan tim pemeliharaan memeriksa kriteria reject/afkir webbing sling sintetis (sobekan jahitan, paparan panas, asam kimia, benang inti merah terekspos), inspeksi keausan shackle pin, deformasi hook, pencatatan logbook riksa berkala, serta penandaan sistem color coding kelaikan.",
    highlights: [
      "Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)",
      "Landasan Standar: Permenaker No. 08 Tahun 2020 & Standar ASME B30.9 / B30.26",
      "Investasi Resmi: Rp 3.750.000 / Peserta (Praktik Uji Fisik & Kriteria Afkir Rigging Hardware)",
      "Output: Sertifikat Kompetensi Inspektur Alat Bantu Angkat & Toolkit Logbook Pemeriksaan"
    ],
    courseDetails: {
      level: "Sertifikasi Teknis Pemeriksaan & Pengujian Alat Bantu Angkat (ABAA)",
      duration: "16 JP (2 Hari Kerja)",
      method: "Blended / Tatap Muka Praktikum (Inspeksi Fisik Contoh Sling Rusak, Pengukuran Caliper Shackle & Ujian)",
      legalBasis: "Permenaker No. 08 Tahun 2020, ASME B30.9 (Slings), ASME B30.26 (Rigging Hardware) & EN 1492",
      targetAudience: [
        "Lifting Inspector, Rigging Superintendent & Crane Maintenance Officer",
        "Staff HSE Konstruksi, Migas, Manufaktur Berat & Galangan Kapal",
        "Pengelola Gudang Alat Lifting & Teknisi Pemeriksaan Peralatan Kerja",
        "Rigger Senior dan Foreman Pengangkatan Beban Kritis"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK atau berpengalaman di bidang pengangkatan mekanikal",
        "Scan KTP yang masih berlaku",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan K3 Inspeksi Webbing Sling & Shackle dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Qualified Lifting Gear Inspector",
        "Master Kit Dokumen: Formulir Inspeksi Harian/Bulanan ABAA, Kriteria Visual Afkir Bergambar, dan Skema Color Coding Triwulanan"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Standar Regulasi Kelaikan Alat Bantu Angkat & Angkut (ABAA)",
          topics: [
            "Regulasi Permenaker No. 08 Tahun 2020 terkait Batas Beban Kerja Aman (Working Load Limit / WLL) & Safety Factor 5:1 / 6:1",
            "Standar Internasional Manufaktur Webbing Sling (EN 1492-1 / ASME B30.9) dan Shackle (ASME B30.26 / US Fed Spec RR-C-271)",
            "Pentingnya Pelat Tanda Pengenal Pabrik (Manufacturer Tag/Label): Kapasitas Angkat, Material, dan Nomor Seri"
          ],
          hours: "4 JP"
        },
        {
          module: "Modul 02: Kriteria Afkir Cacat Fisik Webbing Sling Sintetis (Polyester/Nylon)",
          topics: [
            "Identifikasi Cacat Kritis: Sobekan Pinggir (Edge Cuts), Kerusakan Jahitan Beban (Stitch Damage) & Pengikisan Serat (Abrasion)",
            "Efek Paparan Lingkungan: Degradasi Sinar UV Matahari, Paparan Asam/Basa Kimia, dan Pelelehan Akibat Percikan Las",
            "Mekanisme Indikator Kerusakan Internal (Core Red Warning Yarn) & Kebijakan Reject Seketika"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 03: Inspeksi Shackle, Eyebolt, Hook & Penerapan Color Coding System",
          topics: [
            "Pemeriksaan Shackle: Pengukuran Keausan Badan (Body Wear) Maksimal 10%, Deformasi Pin, Bending, dan Keretakan",
            "Inspeksi Eyebolt dan Swivel Hoist Ring: Kerapatan Ulir (Thread Inspection) dan Larangan Memotong Ulir",
            "Penerapan Sistem Kode Warna Triwulan (Quarterly Color Coding Tagging) & Pengelolaan Karantina Barang Rusak (Scrap/Disposal)"
          ],
          hours: "6 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 3.750.000 per peserta. Termasuk toolkit kartu saku inspeksi sling, caliper ukur aus shackle, modul pelatihan komprehensif, sertifikat kompetensi resmi, serta makan siang dan coffee break kelas tatap muka."
    },
    blocks: [
      {
        heading: "Bahaya Terselubung Penggunaan Alat Bantu Angkat yang Rusak",
        paragraphs: [
          "Webbing sling sintetis berbahan polyester atau nilon sangat populer di industri karena bobotnya yang ringan dan tidak merusak permukaan barang yang diangkat. Namun, banyak pekerja tidak memahami betapa rentannya sling kain ini terhadap panas percikan las, gesekan sudut tajam plat baja, atau paparan zat kimia di lantai bengkel.",
          "Sobekan kecil 2 milimeter pada tepi webbing sling dapat menurunkan kekuatan angkatnya hingga lebih dari 50%. Ketika sling putus di tengah udara, jatuhnya muatan berton-ton akan menimbulkan bencana fatal seketika. Oleh karena itu, inspeksi kelaikan berkala oleh personel yang kompeten mutlak diperlukan."
        ]
      },
      {
        heading: "Penguasaan Kriteria Afkir Standar ASME B30.9 & Permenaker 08/2020",
        paragraphs: [
          "Dalam pelatihan ini, peserta menguji langsung berbagai contoh fisik webbing sling dan shackle yang telah mengalami kerusakan nyata. Mereka dilatih membaca tag identitas pabrikan (jika tag hilang, sling wajib diafkir), memeriksa apakah benang peringatan merah (warning yarn) telah terlihat, serta mengukur toleransi keausan diameter pin shackle menggunakan vernier caliper.",
          "Peserta juga dibekali tata kelola logbook pemeriksaan alat lifting dan penerapan pita tanda warna triwulanan (color coding) agar seluruh personel lapangan dapat langsung mengetahui apakah peralatan angkat tersebut telah lulus inspeksi bulan berjalan."
        ],
        bullets: [
          "Aturan mutlak pemotongan sling rusak (destruction policy) agar tidak disalahgunakan kembali oleh pekerja lain",
          "Pemeriksaan bukaan mulut kait (hook throat opening) yang tidak boleh melebar lebih dari 5%",
          "Larangan penggunaan baut biasa sebagai pengganti pin asli shackle (shackle pin replacement violation)",
          "Penyusunan berita acara pemusnahan (decommissioning report) peralatan lifting yang tidak laik"
        ]
      },
      {
        heading: "Mencegah Kegagalan Angkat di Lokasi Proyek dan Pabrik",
        paragraphs: [
          "Dengan inspektur internal yang terlatih, perusahaan dapat meniadakan risiko kegagalan rigging dan memastikan seluruh sarana lifting yang digunakan memenuhi standar keselamatan tertinggi."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan Inspeksi Webbing Sling & Shackle?",
        answer: "Biaya pelatihan adalah Rp 3.750.000 per peserta untuk program 2 hari (16 JP) lengkap dengan toolkit panduan kriteria reject bergambar dan sertifikat kompetensi resmi."
      },
      {
        question: "Apakah sling yang label kapasitasnya (tag) hilang masih boleh digunakan?",
        answer: "Sesuai Permenaker No. 08/2020 dan ASME B30.9, webbing sling yang label/tag pabrikannya hilang atau tidak terbaca wajib diafkir (reject) dan dilarang digunakan dalam operasi pengangkatan."
      },
      {
        question: "Berapa toleransi keausan maksimal pada badan shackle?",
        answer: "Toleransi keausan maksimal pada penampang badan maupun pin shackle tidak boleh melebihi 10% dari dimensi aslinya. Jika melebihi 10%, shackle wajib diganti."
      }
    ],
    related: [
      "pelatihan/pelatihan-juru-ikat-beban-rigger-slinger-bersertifikat-kemnaker",
      "pelatihan/pelatihan-ahli-k3-spesialis-pesawat-angkat-angkut-kemnaker-ri",
      "pelatihan/inspeksi-k3-terjadwal",
      "profesi/rigger",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/permenaker-08-2020-k3-pesawat-angkat-dan-angkut"
    ],
    sources: [
      {
        label: "Permenaker No. 08 Tahun 2020 tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Pesawat Angkut",
        url: "https://jdih.kemnaker.go.id/katalog/permenaker-08-2020",
        publisher: "Kementerian Ketenagakerjaan RI"
      },
      {
        label: "ASME B30.9: Slings & ASME B30.26: Rigging Hardware",
        url: "https://www.asme.org/codes-standards",
        publisher: "American Society of Mechanical Engineers"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan k3 inspeksi kelayakan sabuk pengikat webbing sling shackle biaya jadwal afkir",
    primaryKeyword: "pelatihan k3 inspeksi kelayakan sabuk pengikat webbing sling shackle",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan k3 inspeksi kelayakan sabuk pengikat webbing sling dan shackle",
    intentType: "commercial",
    parentTopic: "Pesawat Angkat & Pesawat Angkut",
    cannibalizationGroup: "pelatihan-inspeksi-sling-shackle",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan Inspeksi Sling",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Audit Lifting Gear",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/praktik-pengikatan-beban-di-area-industri-1.webp",
      alt: "Pemeriksaan visual keausan webbing sling sintetis dan pengukuran pin shackle menggunakan vernier caliper"
    },
    gallery: [
      {
        src: "/images/content/praktik-pengikatan-beban-di-area-industri-1.webp",
        alt: "Sesi identifikasi cacat fisik webbing sling dan kriteria afkir jahitan robek"
      },
      {
        src: "/images/content/asesmen-individu-dengan-pengisian-dokumen-1.webp",
        alt: "Pencatatan logbook riksa berkala alat bantu angkat dan sistem color coding triwulanan"
      }
    ]
  },
  {
    slug: "pelatihan-k3-kebakaran-kapal-fasilitas-pelabuhan-maritim",
    title: "Pelatihan K3 Kebakaran Kapal & Fasilitas Pelabuhan Maritim",
    metaTitle: "Pelatihan K3 Kebakaran Kapal & Pelabuhan | SOLAS, Biaya 16 JP",
    description: "Pelatihan K3 Kebakaran Kapal & Fasilitas Pelabuhan Maritim durasi 16 JP (2 Hari). Biaya Rp 4.250.000, materi standar SOLAS, proteksi kebakaran dermaga, ISPS Code, dan International Shore Connection bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan K3 Kebakaran Kapal & Fasilitas Pelabuhan Maritim adalah program pembinaan 16 JP (2 Hari Kerja) yang membedah pencegahan dan penanggulangan kebakaran di lingkungan maritim dan pelabuhan. Pelatihan ini melatih tim tanggap darurat pelabuhan, pandu laut, dan perwira kapal menguasai International Shore Connection (sambungan darat internasional), sistem foam kebakaran curah minyak dermaga, penanganan muatan berbahaya berkontainer (IMDG Code), prosedur pemadaman di ruang palka kapal tertutup, dan evakuasi laut sesuai standar IMO / SOLAS.",
    highlights: [
      "Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)",
      "Landasan Standar: Standar IMO / SOLAS 1974, Kepmenaker 186/1999 & ISPS Code Pelabuhan",
      "Investasi Resmi: Rp 4.250.000 / Peserta (Materi Fire Fighting Maritim & Dermaga)",
      "Output: Sertifikat Kompetensi K3 Kebakaran Kapal & Pelabuhan Serta Panduan Tanggap Darurat Dermaga"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi K3 Sektoral Maritim, Kapal & Pelabuhan",
      duration: "16 JP (2 Hari Kerja)",
      method: "Blended / Tatap Muka (Studi Kasus Kebakaran Kapal Tangki/Kargo, Simulasi Shore Connection, Review IMDG Code & Ujian)",
      legalBasis: "UU No. 17 Tahun 2008 tentang Pelayaran, Kepmenaker No. 186/1999, SOLAS Konvensi IMO & UU 1/1970",
      targetAudience: [
        "Port Safety Officer, Marine Operations Manager & Tim HSE Terminal Pelabuhan",
        "Perwira Kapal, Nakhoda, Chief Engineer & Crew Kapal Penunjang Lepas Pantai",
        "Tim Pemadam Kebakaran Pelabuhan & Operator Terminal Curah Cair / Kontainer",
        "Pengawas K3 Bongkar Muat Barang Berbahaya Pelabuhan (PBM)"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK atau D3/S1 di bidang maritim, pelayaran, logistik, atau K3",
        "Scan KTP / Buku Pelaut (Seaman Book) yang masih berlaku",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan K3 Kebakaran Kapal & Fasilitas Pelabuhan dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Pengawas Keselamatan Kebakaran Maritim",
        "Master Kit Dokumen: SOP Sambungan Darurat International Shore Connection, Prosedur Pemadaman Ruang Mesin Kapal, dan Rencana Evakuasi Dermaga"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Regulasi Keselamatan Maritim SOLAS & Karakteristik Kebakaran Kapal",
          topics: [
            "Ketentuan Konvensi SOLAS Bab II-2 (Fire Protection, Fire Detection and Fire Extinction) & ISPS Code",
            "Bahaya Unik Kebakaran Kapal: Ruang Terbatas Baja (Conduction of Heat), Kurangnya Ventilasi, Stabilitas Kapal saat Pemadaman Air, dan Toxic Fumes",
            "Sistem Pintu Kedap Air (Watertight Doors) & Sekat Tahan Api Kelas A, B, dan C pada Kapal"
          ],
          hours: "4 JP"
        },
        {
          module: "Modul 02: Proteksi Kebakaran Dermaga, Terminal Curah Cair & IMDG Code",
          topics: [
            "Sistem Pemadam Busa (Foam Monitor & Deluge System) di Dermaga Bongkar Muat BBM / Gas Alam Cair (LNG)",
            "Penanganan Muatan Berbahaya Sesuai International Maritime Dangerous Goods (IMDG) Code: Kelas 1 s.d. Kelas 9",
            "Operasional International Shore Connection: Standarisasi Flens Penyambung Suplai Air Pemadam Pelabuhan ke Kapal"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 03: Taktik Pemadaman Ruang Mesin, Palka Muatan & Rencana Evakuasi Laut",
          topics: [
            "Prosedur Pelepasan Gas Pemadam Total Flooding (CO2 / Novec) di Ruang Mesin Kapal & Verifikasi Evakuasi Personel",
            "Taktik Pemadaman Kebakaran Palka Kargo Menggunakan Smothering Steam atau Gas Inert",
            "Koordinasi Penyelamatan Bersama KSOP, Basarnas, Polairud & Simulasi Evakuasi Sekoci Penolong"
          ],
          hours: "6 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 4.250.000 per peserta. Termasuk materi panduan penanggulangan kebakaran maritim SOLAS, template SOP darurat pelabuhan dwibahasa, sertifikat kompetensi resmi, serta makan siang dan coffee break kelas tatap muka."
    },
    blocks: [
      {
        heading: "Tingginya Kompleksitas dan Bahaya Kebakaran di Lingkungan Maritim",
        paragraphs: [
          "Kebakaran di atas kapal laut atau dermaga pelabuhan menghadirkan tantangan ekstrem yang jauh berbeda dengan kebakaran gedung di darat. Konstruksi kapal yang terbuat dari baja tebal menghantarkan panas ke kompartemen bersebelahan dengan sangat cepat. Selain itu, penggunaan air pemadam dalam jumlah masif dapat mengganggu stabilitas kapal (free surface effect) yang berisiko membuat kapal miring dan tenggelam di alur pelabuhan.",
          "Pelatihan K3 Kebakaran Kapal & Fasilitas Pelabuhan Maritim membekali personel pelabuhan dan kru kapal strategi terpadu memadamkan api tanpa membahayakan daya apung kapal dan keselamatan fasilitas dermaga."
        ]
      },
      {
        heading: "Penguasaan International Shore Connection dan Muatan Berbahaya IMDG",
        paragraphs: [
          "Saat kapal merapat di pelabuhan mengalami kebakaran hebat, pompa kapal mungkin mati. Pelatihan ini melatih prosedur penyambungan International Shore Connection—flens adaptor standar internasional yang menghubungkan pipa hidran darat pelabuhan dengan sistem pipa pemadam kapal dari negara mana pun.",
          "Di sisi darat, peserta mempelajari penanganan kontainer berlabel IMDG Code di dermaga bongkar muat untuk mencegah reaksi eksotermik bahan kimia berbahaya saat terpapar sinar matahari tropis."
        ],
        bullets: [
          "Pemeriksaan kelaikan sistem pemadam busa berdaya ekspansi tinggi (Hi-Ex Foam) terminal curah",
          "Prosedur isolasi ventilasi dan penutupan cerobong sebelum pelepasan gas CO2 sistem ruang mesin",
          "Penggunaan peralatan pernapasan SCBA khusus maritim (EEBD - Emergency Escape Breathing Device)",
          "Tata cara koordinasi komando terpadu antara Nakhoda kapal dan Kepala Otoritas Pelabuhan (KSOP)"
        ]
      },
      {
        heading: "Menjaga Kelancaran Logistik Maritim Nasional",
        paragraphs: [
          "Kesiapsiagaan kebakaran maritim yang handal menjamin aset kapal bernilai ratusan miliar rupiah dan infrastruktur pelabuhan vital negara terlindungi dari kelumpuhan operasional."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan K3 Kebakaran Kapal & Pelabuhan?",
        answer: "Biaya pelatihan adalah Rp 4.250.000 per peserta untuk program 2 hari (16 JP) lengkap dengan panduan standar SOLAS/IMO dan sertifikat kompetensi resmi."
      },
      {
        question: "Apakah materi mencakup International Shore Connection?",
        answer: "Ya, modul mempraktikkan secara detail standar ukuran baut, gasket, dan prosedur penyambungan International Shore Connection darat ke kapal."
      },
      {
        question: "Siapa yang wajib mengikuti pelatihan ini?",
        answer: "Petugas keselamatan pelabuhan (Port Safety Officer), perwira kapal kargo/tangki, operator terminal peti kemas, teknisi galangan kapal, dan petugas pemadam kebakaran kota pelabuhan."
      }
    ],
    related: [
      "pelatihan/k3-kebakaran",
      "pelatihan/k3-kebakaran-kelas-a",
      "pelatihan/pelatihan-investigasi-penyebab-kebakaran-industri-fire-investigation",
      "profesi/ahli-k3-kebakaran",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/kepmenaker-186-1999-unit-penanggulangan-kebakaran"
    ],
    sources: [
      {
        label: "SOLAS 1974 Bab II-2: Fire Protection, Fire Detection and Fire Extinction",
        url: "https://www.imo.org/en/About/Conventions/Pages/International-Convention-for-the-Safety-of-Life-at-Sea-(SOLAS),-1974.aspx",
        publisher: "International Maritime Organization (IMO)"
      },
      {
        label: "Kepmenaker No. 186/1999 tentang Unit Penanggulangan Kebakaran di Tempat Kerja",
        url: "https://jdih.kemnaker.go.id/katalog/kepmenaker-186-1999",
        publisher: "Kementerian Ketenagakerjaan RI"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan k3 kebakaran kapal fasilitas pelabuhan maritim solas biaya jadwal",
    primaryKeyword: "pelatihan k3 kebakaran kapal & fasilitas pelabuhan maritim",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan k3 kebakaran kapal dan fasilitas pelabuhan maritim",
    intentType: "commercial",
    parentTopic: "Penanggulangan Kebakaran",
    cannibalizationGroup: "pelatihan-fire-maritim",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan Kebakaran Pelabuhan",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Fire Safety Terminal Maritim",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/foto-bersama-pekerja-di-fasilitas-industri-1.webp",
      alt: "Pemeriksaan sistem hidran busa pemadam kebakaran di terminal pelabuhan dan dermaga kargo"
    },
    gallery: [
      {
        src: "/images/content/foto-bersama-pekerja-di-fasilitas-industri-1.webp",
        alt: "Sesi peninjauan prosedur International Shore Connection kapal ke fasilitas darat pelabuhan"
      },
      {
        src: "/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-2.webp",
        alt: "Simulasi penanganan muatan berbahaya IMDG Code dan evakuasi darurat dermaga maritim"
      }
    ]
  },
  {
    slug: "pelatihan-k3-pemasangan-pemeliharaan-instalasi-listrik-industri",
    title: "Pelatihan K3 Pemasangan & Pemeliharaan Instalasi Listrik Industri",
    metaTitle: "Pelatihan K3 Pemasangan & Pemeliharaan Listrik | PUIL, Biaya 16 JP",
    description: "Pelatihan K3 Pemasangan & Pemeliharaan Instalasi Listrik Industri durasi 16 JP (2 Hari). Biaya Rp 4.250.000, materi standar PUIL 2020, panel MCC, pentanahan grounding, isolasi LOTO, dan Permenaker 12/2015 bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan K3 Pemasangan & Pemeliharaan Instalasi Listrik Industri adalah program pembinaan teknis 16 JP (2 Hari Kerja) mengacu pada Permenaker No. 12 Tahun 2015 dan Standar PUIL 2020 (SNI 0225:2020). Pelatihan ini melatih teknisi listrik, engineering pabrik, dan pengawas K3 merancang instalasi kelistrikan aman, memilih rating penghantar kabel dan pemutus arus (MCB/MCCB), mengukur resistansi pembumian (grounding earth tester di bawah 5 Ohm), melakukan pengujian tahanan isolasi (Megger test), serta menerapkan keselamatan panel daya Motor Control Center (MCC).",
    highlights: [
      "Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)",
      "Landasan Regulasi: Permenaker No. 12 Tahun 2015 & Persyaratan Umum Instalasi Listrik (PUIL 2020)",
      "Investasi Resmi: Rp 4.250.000 / Peserta (Praktik Alat Ukur Megger & Earth Tester)",
      "Output: Sertifikat Kompetensi K3 Pemasangan & Pemeliharaan Listrik Industri"
    ],
    courseDetails: {
      level: "Sertifikasi Teknis Pemasangan, Pemeriksaan & Pemeliharaan Listrik K3",
      duration: "16 JP (2 Hari Kerja)",
      method: "Blended / Tatap Muka Praktik (Pengujian Megger, Pengukuran Grounding, Simulasi LOTO Panel & Evaluasi)",
      legalBasis: "Permenaker No. 12 Tahun 2015 tentang K3 Listrik di Tempat Kerja, PUIL 2020 & UU No. 1 Tahun 1970",
      targetAudience: [
        "Teknisi Listrik Pabrik, Electrical Maintenance Engineer & Foreman Listrik",
        "HSE Officer Spesialis Kelistrikan, Facility Engineer & Supervisor Gedung",
        "Kontraktor Mekanikal Elektrikal (ME Contractor) & Teknisi Panel Maker",
        "Calon Teknisi K3 Listrik / Ahli K3 Listrik yang ingin memperdalam keterampilan teknis lapangan"
      ],
      prerequisites: [
        "Pendidikan minimal SMK Jurusan Listrik/Mekatronika atau D3/S1 Teknik Elektro/Mesin/K3",
        "Scan KTP yang masih berlaku",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan K3 Pemasangan & Pemeliharaan Listrik Industri dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Qualified Electrical Maintenance Safety Specialist",
        "Master Kit Dokumen: Template Checklist Inspeksi Panel Distribusi Listrik, Prosedur LOTO Kelistrikan, dan Tabel Kalkulasi Kabel PUIL 2020"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Regulasi K3 Listrik Permenaker 12/2015 & Standar PUIL 2020",
          topics: [
            "Dasar Hukum Keselamatan Listrik: Permenaker 12/2015, Permenaker 33/2015 (Pengawasan) & PUIL 2020",
            "Bahaya Utama Listrik: Sengatan Listrik (Electric Shock), Busur Api Ledakan (Arc Flash/Arc Blast) & Kebakaran Listrik",
            "Persyaratan Kelaikan Pemasangan Penghantar: Kuat Hantar Arus (KHA), Penurunan Tegangan (Voltage Drop) & Pemilihan Isolasi Kabel"
          ],
          hours: "4 JP"
        },
        {
          module: "Modul 02: Proteksi Kelistrikan, Sistem Pentanahan (Grounding) & Pengujian Isolasi",
          topics: [
            "Sistem Pengaman Pemutus Otomatis: MCB, MCCB, ACB, RCD/ELCB (Sensitivitas 30mA untuk Perlindungan Manusia)",
            "Prinsip & Pengukuran Sistem Pembumian (Grounding): Standar Maksimal 5 Ohm Menggunakan Earth Clamp/Stake Tester",
            "Pengujian Tahanan Isolasi Kabel dan Motor Listrik Menggunakan Insulation Tester (Megger 500V / 1000V)"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 03: Pemeliharaan Aman Panel Daya, Prosedur LOTO & APD Busur Listrik (Arc Flash PPE)",
          topics: [
            "Inspeksi Rutin Panel Daya Utama (LVMDP) & Motor Control Center (MCC): Pengecekan Suhu Terminasi & Debu",
            "Prosedur 6 Tahap Lockout/Tagout (LOTO) Kelistrikan & Verifikasi Ketiadaan Tegangan Menggunakan Tespen/Multimeter Kategori CAT IV",
            "Pemilihan Alat Pelindung Diri Listrik: Sarung Tangan Isolasi Karet (Class 0/00), Face Shield Arc Flash & Sepatu Safety EH (Electrical Hazard)"
          ],
          hours: "6 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 4.250.000 per peserta. Termasuk hands-on penggunaan instrumen ukur Megger dan Earth Tester, toolkit checklist audit panel listrik, sertifikat kompetensi resmi, serta makan siang dan coffee break kelas tatap muka."
    },
    blocks: [
      {
        heading: "Tingginya Ancaman Bahaya Listrik di Lingkungan Pabrik Industri",
        paragraphs: [
          "Listrik adalah sumber energi utama penggerak mesin industri, namun sekaligus merupakan bahaya yang tidak terlihat, tidak berbau, dan dapat membunuh seketika. Kebakaran pabrik akibat korsleting listrik, pelepasan energi busur api (arc flash berpanas 19.000°C), serta teknisi yang tersetrum saat memeriksa panel terbuka merupakan insiden yang sering terjadi akibat instalasi yang tidak memenuhi PUIL 2020.",
          "Permenaker No. 12 Tahun 2015 menetapkan bahwa seluruh kegiatan pemasangan, pengoperasian, pemeriksaan, pengujian, dan pemeliharaan instalasi listrik di tempat kerja wajib dilaksanakan oleh teknisi yang memiliki kompetensi K3 yang teruji."
        ]
      },
      {
        heading: "Penguasaan Praktikum Alat Ukur: Megger, Earth Tester, dan LOTO",
        paragraphs: [
          "Pelatihan ini memadukan teori kaidah PUIL 2020 dengan praktikum pengukuran nyata. Peserta diajarkan cara menguji ketahanan isolasi kabel (insulation resistance) guna mendeteksi kabel yang mulai rapuh sebelum terjadi hubung singkat, serta mengukur nilai tahanan pembumian (grounding) agar petir dan arus bocor dapat dibuang ke tanah secara instan.",
          "Peserta juga dilatih menerapkan prosedur Lockout/Tagout (LOTO) pada switchgear panel dan breaker utama, memastikan penguncian fisik breaker dan pengujian ketiadaan tegangan (zero energy verification) sebelum tangan teknisi menyentuh tembaga busbar."
        ],
        bullets: [
          "Kalkulasi Kuat Hantar Arus (KHA) kabel dan koordinasi rating pengaman sirkuit",
          "Pemeriksaan sensitivitas alat proteksi arus bocor tanah (RCD / ELCB) untuk pencegahan fatal shock",
          "Penggunaan sarung tangan listrik berisolasi tinggi yang telah diuji uji dielektrik rutin",
          "Penyusunan jadwal Preventive Maintenance berkala instalasi kelistrikan pabrik"
        ]
      },
      {
        heading: "Menjamin Kelancaran Produksi dan Kepatuhan Hukum Perusahaan",
        paragraphs: [
          "Instalasi listrik yang terpelihara secara prima tidak hanya melindungi nyawa teknisi, tetapi juga mencegah downtime mesin tak terjadwal dan memenuhi audit wajib K3 kelistrikan Kemnaker RI."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan K3 Pemasangan & Pemeliharaan Listrik Industri?",
        answer: "Biaya pelatihan adalah Rp 4.250.000 per peserta untuk program teknis 2 hari (16 JP) lengkap dengan praktikum instrumen ukur dan sertifikat kompetensi resmi."
      },
      {
        question: "Apakah peserta akan mempraktikkan alat ukur Megger dan Earth Tester?",
        answer: "Ya, pelatihan menekankan praktikum pengoperasian Insulation Tester (Megger) untuk uji kabel motor dan Earth Clamp Tester untuk resistansi pentanahan."
      },
      {
        question: "Berapa nilai maksimal tahanan pembumian (grounding) yang diizinkan regulasi?",
        answer: "Sesuai standar PUIL 2020 dan Permenaker 12/2015, nilai tahanan pembumian instalasi listrik secara umum maksimal adalah 5 Ohm (dan untuk instalasi khusus/elektronik sensitif direkomendasikan di bawah 1-2 Ohm)."
      }
    ],
    related: [
      "pelatihan/pelatihan-ahli-k3-spesialis-listrik-kemnaker-ri",
      "pelatihan/pelatihan-teknisi-k3-listrik-sertifikasi-kemnaker-ri",
      "pelatihan/pelatihan-sistem-isolasi-energi-lockout-tagout-loto-kelistrikan",
      "profesi/teknisi-k3-listrik",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/permenaker-12-2015-k3-listrik-tempat-kerja"
    ],
    sources: [
      {
        label: "Permenaker No. 12 Tahun 2015 tentang Keselamatan dan Kesehatan Kerja Listrik di Tempat Kerja",
        url: "https://jdih.kemnaker.go.id/katalog/permenaker-12-2015",
        publisher: "Kementerian Ketenagakerjaan RI"
      },
      {
        label: "SNI 0225:2020 Persyaratan Umum Instalasi Listrik (PUIL 2020)",
        url: "https://bsn.go.id",
        publisher: "Badan Standardisasi Nasional"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan k3 pemasangan dan pemeliharaan instalasi listrik industri puil 2020 biaya jadwal",
    primaryKeyword: "pelatihan k3 pemasangan pemeliharaan instalasi listrik industri",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan k3 pemasangan dan pemeliharaan instalasi listrik industri",
    intentType: "commercial",
    parentTopic: "Kelistrikan",
    cannibalizationGroup: "pelatihan-maintenance-listrik",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan Listrik Industri",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Audit Kelistrikan Pabrik",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/instruktur-memandu-sesi-kelas-2.webp",
      alt: "Pemaparan standar PUIL 2020 dan teknik pengujian tahanan isolasi panel listrik industri"
    },
    gallery: [
      {
        src: "/images/content/instruktur-memandu-sesi-kelas-2.webp",
        alt: "Sesi pengukuran resistansi grounding dan keselamatan pemeliharaan switchgear panel"
      },
      {
        src: "/images/content/foto-bersama-pekerja-di-fasilitas-industri-2.webp",
        alt: "Praktik prosedur isolasi energi LOTO pada panel distribusi daya industri"
      }
    ]
  },
  {
    slug: "pelatihan-k3-pemasangan-rupture-disc-dan-sistem-pelepasan-tekanan-darurat",
    title: "Pelatihan K3 Pemasangan Rupture Disc & Sistem Pelepasan Tekanan Darurat",
    metaTitle: "Pelatihan Rupture Disc & Safety Valve K3 | Biaya, Jadwal 16 JP",
    description: "Pelatihan K3 Pemasangan Rupture Disc & Sistem Pelepasan Tekanan Darurat durasi 16 JP (2 Hari). Biaya Rp 3.750.000, materi Pressure Relief Valve (PRV), bursting pressure, ASME Section VIII, dan Permenaker 37/2016 bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan K3 Pemasangan Rupture Disc & Sistem Pelepasan Tekanan Darurat adalah program pembinaan 16 JP (2 Hari Kerja) yang mengulas proteksi overpressure pada bejana tekan, reaktor kimia, dan sistem perpipaan. Pelatihan ini melatih engineer mekanikal, teknisi instrumen, dan staf HSE memahami prinsip kerja rupture disc (cakram pecah) dan Pressure Relief Valve (PRV/PSV), kalkulasi tekanan pecah (bursting pressure tolerance), kombinasi rupture disc-safety valve, penanganan pipa pembuangan (discharge piping), serta pengujian kelaikan sesuai Permenaker No. 37 Tahun 2016 dan ASME Section VIII.",
    highlights: [
      "Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)",
      "Landasan Standar: Permenaker No. 37 Tahun 2016, ASME Section VIII Div 1 & API 520/576",
      "Investasi Resmi: Rp 3.750.000 / Peserta (Materi Teknis Rupture Disc & Relief System)",
      "Output: Sertifikat Kompetensi K3 Sistem Pelepasan Tekanan Darurat & Checklist Riksa"
    ],
    courseDetails: {
      level: "Sertifikasi Teknis Spesialis Bejana Tekan & Sistem Proteksi Overpressure",
      duration: "16 JP (2 Hari Kerja)",
      method: "Blended / Tatap Muka (Studi Kasus Ledakan Bejana Tekan, Uji Celah Rupture Disc, Kalibrasi Pop Action PSV & Evaluasi)",
      legalBasis: "Permenaker No. 37 Tahun 2016 tentang K3 Bejana Tekanan dan Tangki Timbun, ASME Code & Standar API 520",
      targetAudience: [
        "Mechanical Engineer, Process Safety Engineer & Maintenance Technician",
        "Inspector Bejana Tekan, Operator Reaktor Kimia & Boiler Supervisor",
        "HSE Specialist Pabrik Petrokimia, Pupuk, Semen, Minyak Goreng & Makanan",
        "Staff Workshop Kalibrasi Valve dan Kontraktor Instrumentasi Pabrik"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK Teknik Mesin/Kimia/Industri atau D3/S1 Teknik",
        "Scan KTP yang masih berlaku",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan K3 Pemasangan Rupture Disc & Sistem Pelepasan Tekanan dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Certified Pressure Relief Device Specialist",
        "Master Kit Dokumen: Template Logbook Penggantian Rupture Disc, Form Uji Kalibrasi Pop Action PSV, dan Checklist Integritas Discharge Venting"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Regulasi K3 Bejana Tekanan Permenaker 37/2016 & Standar Desain ASME",
          topics: [
            "Ketentuan Hukum Pengawasan K3 Bejana Tekanan Permenaker 37/2016 & Batas Tekanan Kerja Maksimum (MAWP)",
            "Fenomena Bahaya Tekanan Lebih (Overpressure): Reaksi Eksotermik Liar (Runaway Reaction), Kegagalan Kontrol & Kebakaran Luar (Fire Case)",
            "Hierarki Alat Pelepas Tekanan: Non-Reclosing Devices (Rupture Disc) vs Reclosing Devices (Safety Relief Valve)"
          ],
          hours: "4 JP"
        },
        {
          module: "Modul 02: Teknologi Rupture Disc, Material & Desain Kombinasi Seri",
          topics: [
            "Tipe Rupture Disc: Forward Acting, Reverse Buckling, Grafite Disc & Pengaruh Suhu Terhadap Tekanan Pecah (Burst Pressure)",
            "Konfigurasi Kombinasi: Pemasangan Rupture Disc di Bawah Safety Relief Valve untuk Mencegah Korosi & Kebocoran Valve",
            "Pemasangan Manometer / Tell-Tale Indicator Antara Rupture Disc dan PSV untuk Mendeteksi Kebocoran Dini"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 03: Pemasangan Fisik yang Tepat, Discharge Piping & Uji Berkala",
          topics: [
            "Prosedur Pemasangan: Torsi Baut Flens yang Merata, Orientasi Tanda Panah Aliran (Flow Direction Tag), dan Penanganan Disc Tanpa Cacat Gores",
            "Desain Jalur Pembuangan (Discharge Vent Piping): Lubang Pembuangan Air Hujan (Weep Hole), Gaya Dorong Reaksi (Reaction Force) & Pembuangan ke Flare/Scrubber",
            "Jadwal Penggantian Berkala Rupture Disc, Prosedur Riksa Uji Mandiri & Pelaporan Legal ke Pengawas Ketenagakerjaan"
          ],
          hours: "6 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 3.750.000 per peserta. Termasuk materi panduan desain relief device API 520, contoh fisik demonstrasi rupture disc, sertifikat kompetensi resmi, serta makan siang dan coffee break kelas tatap muka."
    },
    blocks: [
      {
        heading: "Benteng Pertahanan Terakhir dari Bencana Ledakan Bejana Tekan",
        paragraphs: [
          "Dalam industri kimia, minyak, farmasi, dan manufaktur, bejana bertekanan tinggi beroperasi setiap detik di bawah tekanan gas atau fluida berbahaya. Ketika sistem kontrol instrumen gagal atau pendingin mati sehingga terjadi kenaikan tekanan liar, rupture disc dan safety valve adalah garis pertahanan terakhir untuk melepaskan fluida sebelum dinding bejana pecah menjadi pecahan logam mematikan (bleve/shrapnel explosion).",
          "Permenaker No. 37 Tahun 2016 mewajibkan setiap bejana bertekanan dilengkapi dengan alat pengaman pelepasan tekanan yang dirancang, dipasang, dan dipelihara secara benar sesuai kapasitas beban pelepasan maksimum."
        ]
      },
      {
        heading: "Ketelitian Pemasangan dan Pemilihan Tipe Rupture Disc",
        paragraphs: [
          "Rupture disc adalah piranti presisi yang sangat sensitif terhadap salah penanganan mekanis. Sentuhan tangan telanjang pada kubah disc atau torsi baut flens yang tidak simetris dapat merusak membran logam tipis tersebut dan menyebabkan disc pecah sebelum waktunya (premature burst), yang memicu berhentinya pabrik.",
          "Peserta dilatih cara memasang rupture disc tipe Reverse Buckling dan Forward Acting, memeriksa orientasi aliran agar tidak terbalik, memasang dudukan pemegang (holder) yang bersih dari kotoran kerak, serta merancang pipa pembuangan (discharge stack) agar semburan gas panas tidak mengarah ke jalur lintas manusia."
        ],
        bullets: [
          "Kalkulasi efek suhu operasi terhadap toleransi deviasi tekanan pecah membran",
          "Teknik pemantauan celah rongga antara rupture disc dan relief valve dengan pressure switch",
          "Pencegahan penumpukan cairan kondensat di pipa pembuangan menggunakan weep hole",
          "Penggantian preventif terjadwal membran rupture disc sebelum mengalami fatigue logam"
        ]
      },
      {
        heading: "Menjamin Integritas Aset Pabrik dan Keamanan Operasional",
        paragraphs: [
          "Dengan personil yang kompeten dalam menangani piranti pelepas tekanan darurat, fasilitas produksi terlindungi dari ancaman ledakan katastropik dan memenuhi audit keselamatan bejana tekan tingkat lanjut."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan K3 Pemasangan Rupture Disc & Relief System?",
        answer: "Biaya pelatihan adalah Rp 3.750.000 per peserta untuk program teknis 2 hari (16 JP) lengkap dengan modul standar API/ASME dan sertifikat kompetensi resmi."
      },
      {
        question: "Mengapa rupture disc sering dipasang di bawah Safety Relief Valve (SRV)?",
        answer: "Pemasangan kombinasi seri bertujuan melindungi komponen pegas dan dudukan SRV dari kontak langsung fluida korosif atau lengket, serta meniadakan kebocoran kecil fluida beracun ke lingkungan (zero leakage)."
      },
      {
        question: "Apakah rupture disc yang sudah pecah dapat diperbaiki?",
        answer: "Tidak bisa. Rupture disc adalah alat pengaman sekali pakai (non-reclosing device). Setelah pecah, membran lama wajib dilepas dan diganti dengan unit rupture disc baru yang identik spesifikasi pabriknya."
      }
    ],
    related: [
      "pelatihan/pelatihan-ahli-k3-spesialis-pesawat-uap-bejana-tekanan-kemnaker",
      "pelatihan/pelatihan-k3-audit-kepatuhan-regulasi-bejana-tekan-permenaker-37-2016",
      "pelatihan/manajemen-perubahan-moc-k3",
      "profesi/ahli-k3-umum",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/permenaker-37-2016-k3-bejana-tekanan-dan-tangki-timbun"
    ],
    sources: [
      {
        label: "Permenaker No. 37 Tahun 2016 tentang Keselamatan dan Kesehatan Kerja Bejana Tekanan dan Tangki Timbun",
        url: "https://jdih.kemnaker.go.id/katalog/permenaker-37-2016",
        publisher: "Kementerian Ketenagakerjaan RI"
      },
      {
        label: "API Standard 520: Sizing, Selection, and Installation of Pressure-Relieving Devices",
        url: "https://www.api.org",
        publisher: "American Petroleum Institute"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan k3 pemasangan rupture disc dan sistem pelepasan tekanan darurat biaya jadwal asme",
    primaryKeyword: "pelatihan k3 pemasangan rupture disc dan sistem pelepasan tekanan darurat",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan k3 pemasangan rupture disc dan sistem pelepasan tekanan darurat",
    intentType: "commercial",
    parentTopic: "Pesawat Uap & Bejana Tekan",
    cannibalizationGroup: "pelatihan-rupture-disc",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan Rupture Disc",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Safety Bejana Tekan",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/instruktur-memandu-sesi-kelas-3.webp",
      alt: "Pemaparan instalasi rupture disc membran dan kalibrasi pressure relief valve bejana tekan industri"
    },
    gallery: [
      {
        src: "/images/content/instruktur-memandu-sesi-kelas-3.webp",
        alt: "Sesi teknis perhitungan bursting pressure dan toleransi suhu rupture disc"
      },
      {
        src: "/images/content/asesmen-individu-peserta-di-ruang-kelas-1.webp",
        alt: "Evaluasi prosedur penggantian berkala rupture disc dan penanganan discharge piping"
      }
    ]
  },
  {
    slug: "pelatihan-k3-pengikatan-rigging-calculation-beban-berat-kritis",
    title: "Pelatihan K3 Pengikatan & Rigging Calculation Beban Berat Kritis",
    metaTitle: "Pelatihan Rigging Calculation Beban Berat Kritis | Biaya, Jadwal 16 JP",
    description: "Pelatihan K3 Pengikatan & Rigging Calculation Beban Berat Kritis durasi 16 JP (2 Hari). Biaya Rp 3.750.000, materi lifting plan, dual crane tandem lift, center of gravity offset, dan Permenaker 08/2020 bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan K3 Pengikatan & Rigging Calculation Beban Berat Kritis adalah program pembinaan teknik tingkat lanjut 16 JP (2 Hari Kerja) untuk operasi pengangkatan berisiko tinggi (Critical Lifting). Pelatihan ini melatih rigging engineer, lifting supervisor, dan rigger senior menyusun dokumen Lifting Plan komprehensif, menghitung pembagian beban pengangkatan ganda (Tandem / Dual Crane Lift), menentukan titik berat (Center of Gravity) objek asimetris kompleks, menghitung daya dukung tanah (ground bearing pressure outrigger mat), serta memitigasi faktor dinamik angin dan ayunan beban.",
    highlights: [
      "Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)",
      "Landasan Standar: Permenaker No. 08 Tahun 2020, ASME P30.1 (Planning for Load Handling) & Standar Lifting Internasional",
      "Investasi Resmi: Rp 3.750.000 / Peserta (Penyusunan Rencana Pengangkatan Kritis / Lifting Plan)",
      "Output: Sertifikat Kompetensi Rigging Calculation Specialist & Template Excel Lifting Plan"
    ],
    courseDetails: {
      level: "Sertifikasi Teknis Lanjutan Perencanaan & Perhitungan Pengangkatan Kritis",
      duration: "16 JP (2 Hari Kerja)",
      method: "Blended / Tatap Muka (Workshop Excel Rigging Calculation, Studi Kasus Tandem Lifting, Simulasi Outrigger Load & Ujian)",
      legalBasis: "Permenaker No. 08 Tahun 2020, ASME P30.1, BS 7121 Code of Practice for Safe Use of Cranes & UU 1/1970",
      targetAudience: [
        "Lifting Engineer, Rigging Superintendent & Heavy Lift Specialist",
        "Project Manager, Construction Manager & Lead Structural Engineer",
        "HSE Specialist Proyek Migas, Petrokimia, Jembatan & Pembangkit Listrik",
        "Rigger Senior dan Operator Crane Kelas I yang ingin naik tingkat ke ranah engineering kalkulasi"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK Teknik (diutamakan D3/S1 Teknik Mesin/Sipil/Industri) atau berpengalaman rigging",
        "Disarankan membawa laptop untuk praktikum spreadsheet kalkulasi lifting",
        "Scan KTP yang masih berlaku",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan Rigging Calculation Beban Kritis dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Certified Critical Lifting Plan Engineer",
        "Master Kit Spreadsheet: Formula Otomatis Kalkulasi Rigging, Tandem Lift Distribution, Spreader Bar Sizing, dan Outrigger Mat Pressure"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Kriteria Kategori Pengangkatan Kritis (Critical Lift Criteria) & Regulasi",
          topics: [
            "Klasifikasi Critical Lift: Muatan Melebihi 75%-80% Kapasitas Crane, Pengangkatan Tandem (Multi-Crane), Melintasi Area Berpenghuni / Jalur Pipa Gas, dan Muatan Khusus Asimetris",
            "Regulasi Permenaker No. 08/2020 & Standar ASME P30.1 tentang Tanggung Jawab Lift Director & Rigging Engineer",
            "Struktur Dokumen Rencana Pengangkatan Komprehensif (Lifting Plan Package): Gambar Denah, Profil Crane, Rigging Tackle, dan Analisis Risiko"
          ],
          hours: "4 JP"
        },
        {
          module: "Modul 02: Matematika Rigging Lanjutan: Center of Gravity Offset & Spreader Bar",
          topics: [
            "Menentukan Posisi Center of Gravity (COG) 3 Dimensi pada Muatan Mesin Kompleks dan Struktur Modul Asimetris",
            "Kalkulasi Beban Kaki Sling Tidak Rata (Sling Tension Calculation with Offset COG)",
            "Penggunaan Spreader Bar vs Lifting Beam: Kalkulasi Gaya Tekan Aksial (Compressive Load) dan Menghindari Tekuk (Buckling)"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 03: Pengangkatan Ganda (Tandem Lifting) & Daya Dukung Tanah (Ground Bearing)",
          topics: [
            "Metodologi Pengangkatan Bersama Dua Crane (Tandem Lift): Sinkronisasi Pergerakan, Faktor Kapasitas Cadangan (Derating 20-25%)",
            "Kalkulasi Distribusi Beban Dinamik Saat Erection Struktur dari Horizontal Menjadi Vertikal (Tailing Crane Operation)",
            "Perhitungan Beban Outrigger Crane dan Pemilihan Luas Landasan Bantalan Kayu/Baja (Crane Mat Sizing) Sesuai Daya Dukung Tanah"
          ],
          hours: "6 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 3.750.000 per peserta. Termasuk bundle spreadsheet formula rigging otomatis, master template lifting plan siap edit, modul teknik pengangkatan, sertifikat kompetensi resmi, serta makan siang dan coffee break kelas tatap muka."
    },
    blocks: [
      {
        heading: "Mengapa Pengangkatan Beban Berat Kritis Menuntut Perhitungan Matematis Eksak?",
        paragraphs: [
          "Mengangkat generator pembangkit listrik seberat 150 ton atau mendirikan menara kolom distilasi kilang minyak dengan dua derek mobile bukanlah pekerjaan yang boleh mengandalkan perkiraan kasar di lapangan. Sedikit pergeseran pada titik berat (Center of Gravity) atau keterlambatan satu derek mengangkat beban dapat mengalihkan puluhan ton muatan secara tiba-tiba, memicu derek terbalik seketika dan menimbulkan kerugian puluhan miliar rupiah.",
          "Pelatihan K3 Pengikatan & Rigging Calculation Beban Berat Kritis mengajarkan metodologi rekayasa pengangkatan (lifting engineering) yang presisi sesuai kaidah ASME P30.1 dan Permenaker No. 08 Tahun 2020."
        ]
      },
      {
        heading: "Penguasaan Perhitungan Tandem Lift dan Daya Dukung Tanah Outrigger",
        paragraphs: [
          "Peserta dibekali kemampuan menghitung pembagian beban dinamis saat manuver tailing (merubah posisi struktur dari rebah menjadi tegak menggunakan dua crane). Peserta menghitung beban yang ditanggung Main Crane dan Tailing Crane pada setiap sudut kemiringan angkat.",
          "Di samping perhitungan sling dan shackle, pelatihan ini menekankan kalkulasi daya dukung tanah (ground bearing pressure). Peserta menghitung beban maksimal yang disalurkan melalui sepatu outrigger dan merancang ukuran matras bantalan crane (crane mat) agar crane tidak amblas ke dalam tanah saat mengangkat muatan berat."
        ],
        bullets: [
          "Penyusunan gambar CAD/Sketsa Rigging Plan lengkap dengan sudut sling, radius putar, dan clearances",
          "Kalkulasi faktor dinamik akibat kecepatan angin dan percepatan hentakan derek",
          "Penerapan batas penurunan kapasitas crane (derating capacity) untuk menjamin keselamatan tandem lift",
          "Tata cara briefing TBT pra-angkat (Pre-Lift Briefing) dan gladi bersih simulasi (dry run)"
        ]
      },
      {
        heading: "Kompetensi Utama untuk Proyek Konstruksi Megastruktur dan EPC",
        paragraphs: [
          "Kemampuan menyusun dokumen Critical Lifting Plan yang lolos verifikasi konsultan pengawas internasional adalah keahlian bernilai tinggi yang mutlak dicari oleh perusahaan kontraktor EPC dan industri pertambangan modern."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan Rigging Calculation Beban Berat Kritis?",
        answer: "Biaya pelatihan adalah Rp 3.750.000 per peserta untuk program teknis 2 hari (16 JP) lengkap dengan bundle spreadsheet formula rigging kalkulasi dan sertifikat kompetensi resmi."
      },
      {
        question: "Apakah peserta akan belajar membuat Lifting Plan untuk dua crane (tandem lift)?",
        answer: "Ya, pelatihan membedah studi kasus nyata tandem lift, termasuk cara menghitung pembagian beban dinamis antara main crane dan tailing crane."
      },
      {
        question: "Apakah peserta harus memiliki latar belakang pendidikan teknik?",
        answer: "Diutamakan berlatar belakang teknik atau bagi rigger/supervisor yang telah memiliki pengalaman lapangan dan memahami operasi pengangkatan derek dasar."
      }
    ],
    related: [
      "pelatihan/pelatihan-juru-ikat-beban-rigger-slinger-bersertifikat-kemnaker",
      "pelatihan/pelatihan-operator-mobile-crane-crawler-crane-sertifikasi-kemnaker",
      "pelatihan/pelatihan-ahli-k3-spesialis-pesawat-angkat-angkut-kemnaker-ri",
      "profesi/rigger",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/permenaker-08-2020-k3-pesawat-angkat-dan-angkut"
    ],
    sources: [
      {
        label: "Permenaker No. 08 Tahun 2020 tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Pesawat Angkut",
        url: "https://jdih.kemnaker.go.id/katalog/permenaker-08-2020",
        publisher: "Kementerian Ketenagakerjaan RI"
      },
      {
        label: "ASME P30.1: Planning for Load Handling Activities",
        url: "https://www.asme.org/codes-standards",
        publisher: "American Society of Mechanical Engineers"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan k3 pengikatan dan rigging calculation beban berat kritis biaya jadwal lifting plan",
    primaryKeyword: "pelatihan k3 pengikatan rigging calculation beban berat kritis",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan k3 pengikatan dan rigging calculation beban berat kritis",
    intentType: "commercial",
    parentTopic: "Pesawat Angkat & Pesawat Angkut",
    cannibalizationGroup: "pelatihan-rigging-calculation",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan Rigging Calculation",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Review Lifting Plan",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/praktik-pengangkatan-beban-dengan-crane-2.webp",
      alt: "Penyusunan dokumen lifting plan dan kalkulasi rigging tandem lift untuk muatan berat kritis industri"
    },
    gallery: [
      {
        src: "/images/content/praktik-pengangkatan-beban-dengan-crane-2.webp",
        alt: "Simulasi perhitungan beban kaki sling dan daya dukung tanah outrigger derek mobile"
      },
      {
        src: "/images/content/asesmen-individu-dengan-pengisian-dokumen-2.webp",
        alt: "Workshop formulasi spreadsheet rigging calculation dan penentuan center of gravity muatan asimetris"
      }
    ]
  },
  {
    slug: "pelatihan-k3-pengolesan-pelapis-kedap-air-waterproofing-di-basement-gedung",
    title: "Pelatihan K3 Pengolesan Pelapis Kedap Air (Waterproofing) di Basement Gedung",
    metaTitle: "Pelatihan K3 Waterproofing Basement Gedung | Biaya, Jadwal 16 JP",
    description: "Pelatihan K3 Pengolesan Waterproofing di Basement Gedung durasi 16 JP (2 Hari). Biaya Rp 3.750.000, bahaya gas uap solven VOC, sirkulasi ventilasi ruang bawah tanah, dan Permenaker 05/2018 bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan K3 Pengolesan Pelapis Kedap Air (Waterproofing) di Basement Gedung adalah program pembinaan 16 JP (2 Hari Kerja) untuk mengatasi bahaya kesehatan dan kebakaran pada pekerjaan pelapisan kimia di area bawah tanah. Pelatihan ini melatih supervisor waterproofing, aplikator kimia konstruksi, dan tim HSE mengendalikan paparan uap senyawa organik volatil (VOC / Solven), bahaya sesak napas di ruang berventilasi buruk (confined/basement space), bahaya kebakaran pekerjaan pelapisan berbahan aspal bakar (torch-on membrane), serta standar APD pernapasan kimia.",
    highlights: [
      "Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)",
      "Landasan Regulasi: Permenaker No. 05 Tahun 2018, Permenaker No. 09/2016 & Surat Edaran K3 Ruang Terbatas",
      "Investasi Resmi: Rp 3.750.000 / Peserta (Materi Pengendalian Gas VOC & Ventilasi Basement)",
      "Output: Sertifikat Kompetensi K3 Pekerjaan Kimia Konstruksi & SOP Kerja Aman Basement"
    ],
    courseDetails: {
      level: "Sertifikasi Teknis K3 Pekerjaan Khusus Konstruksi & Ruang Bawah Tanah",
      duration: "16 JP (2 Hari Kerja)",
      method: "Blended / Tatap Muka (Pengukuran Gas VOC Portabel, Simulasi Sistem Ventilasi Paksa, Pemilihan Respirator & Ujian)",
      legalBasis: "Permenaker No. 05 Tahun 2018 tentang K3 Lingkungan Kerja, UU No. 1 Tahun 1970 & Permenaker 01/1980",
      targetAudience: [
        "Aplikator Waterproofing, Supervisor Finishing Konstruksi & Mandor Proyek",
        "HSE Officer Proyek Gedung Bertingkat, Tunneling & Deep Basement",
        "Kontraktor Spesialis Kimia Konstruksi, Grouting & Epoksi Lantai",
        "Staff Pemeliharaan Fasilitas Bawah Tanah & Pengelola Gedung Parkir"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK sederajat atau berpengalaman dalam pekerjaan konstruksi/waterproofing",
        "Scan KTP yang masih berlaku",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan K3 Waterproofing Basement Gedung dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Pengawas Keselamatan Pekerjaan Kimia Bawah Tanah",
        "Master Kit Dokumen: Checklist Inspeksi Kualitas Udara Basement, SOP Izin Kerja Panas Torch-On Membrane, dan Tabel Kompatibilitas Respirator Kimia"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Karakteristik Bahaya Kimia Pelapis Kedap Air & Lingkungan Basement",
          topics: [
            "Tipe Material Waterproofing: Membran Bakar Aspal (Torch-on Bitumen), Pelapis Semen Polimer, Polyurethane Liquid, dan Epoksi",
            "Toksisitas Senyawa Pelarut Organik (Solvent VOC): Xylene, Toluene, Isocyanate, Kerusakan Sistem Saraf & Iritasi Paru Akut",
            "Karakteristik Ruang Basement: Sirkulasi Udara Minim, Penumpukan Uap Pelarut yang Lebih Berat dari Udara & Minim Rute Pelarian"
          ],
          hours: "4 JP"
        },
        {
          module: "Modul 02: Sistem Ventilasi Paksa (Forced Ventilation) & Deteksi Gas Berbahaya",
          topics: [
            "Perhitungan Kebutuhan Pergantian Udara: Pemasangan Blower Fan dan Flexible Ducting untuk Menghisap Uap Toksik",
            "Pengoperasian Detektor Gas Portabel: Mengukur Kadar Oksigen (O2 minimal 19.5%) dan Batas Bawah Ledakan (LEL) Uap Pelarut",
            "Standar Kelistrikan Anti-Ledakan (Explosion-Proof Equipment) untuk Lampu Penerangan dan Kipas Angin di Area Uap Solven"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 03: Pencegahan Bahaya Kebakaran Torch-On, APD Pernapasan & P3K Darurat",
          topics: [
            "Izin Kerja Panas (Hot Work Permit) Pekerjaan Membran Bakar Menggunakan Api Terbuka Tabung LPG: Jarak Aman dan Kesiapsiagaan APAR",
            "Pemilihan Respirator Kimia: Masker Cartridge Uap Organik (Organic Vapor OV Filter) vs Powered Air-Purifying Respirator (PAPR)",
            "Tata Laksana P3K Penanganan Pekerja Pingsan Akibat Terpapar Uap Kimia, Evakuasi Vertikal Tangga Basement & Bantuan Oksigen Medis"
          ],
          hours: "6 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 3.750.000 per peserta. Termasuk materi panduan penanganan bahan kimia konstruksi, toolkit checklist izin kerja basement, sertifikat kompetensi resmi, serta makan siang dan coffee break kelas tatap muka."
    },
    blocks: [
      {
        heading: "Bahaya Toksik dan Ledakan Tersembunyi pada Pekerjaan Bawah Tanah",
        paragraphs: [
          "Pekerjaan pelapisan kedap air (waterproofing) di area basement gedung bertingkat, tangki penampungan air bawah tanah, atau pit lift sering kali menjadi perangkap maut bagi pekerja. Cairan waterproofing berbahan dasar polyurethane atau bitumen solvent melepaskan uap kimia volatil (VOC) yang pekat. Karena uap pelarut kimia lebih berat daripada udara, uap beracun ini mengendap di dasar lantai basement yang minim ventilasi alami.",
          "Tanpa sistem ventilasi hisap dan masker pernapasan cartridge yang sesuai, pekerja dapat mengalami pusing, halusinasi, kehilangan kesadaran seketika karena anoksia, hingga serangan jantung. Selain itu, penggunaan tabung gas elpiji dan api terbuka (torch burner) pada aplikasi membran bakar berisiko memicu ledakan flash fire di ruang tertutup."
        ]
      },
      {
        heading: "Penerapan Rekayasa Ventilasi dan Pemilihan Respirator yang Benar",
        paragraphs: [
          "Pelatihan ini mengajarkan para mandor dan supervisor proyek cara merancang sistem ventilasi mekanik dorong-tarik (push-pull fan) agar konsentrasi uap pelarut tetap berada jauh di bawah Nilai Ambang Batas (NAB). Peserta diajarkan cara menguji kualitas udara sebelum dan selama pekerjaan berlangsung.",
          "Sorotan penting lainnya adalah pemahaman tentang batas kemampuan masker pelindung: masker debu kain biasa (dust mask) sama sekali tidak mampu menahan uap kimia berbahaya. Peserta dibimbing memilih cartridge organik berfilter karbon aktif yang tepat dan mengenali tanda masa jenuh (breakthrough) filter pernapasan."
        ],
        bullets: [
          "Prosedur pengujian kadar gas LEL sebelum pekerjaan pengapian membran bakar dimulai",
          "Kewajiban penempatan petugas pengawas (safety standby watcher) di luar pintu masuk basement",
          "Pemasangan penerangan kerja berkategori aman ledakan (flameproof/explosion-proof lighting)",
          "Simulasi evakuasi korban lemas dari dasar pit basement menggunakan tandu basket"
        ]
      },
      {
        heading: "Perlindungan Nyata Bagi Aplikator Kimia Konstruksi",
        paragraphs: [
          "Dengan penerapan prosedur keselamatan kimia konstruksi yang tepat, target penyelesaian waterproofing gedung bebas kebocoran air dapat tercapai tanpa ada pekerja yang menjadi korban keracunan gas."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan K3 Waterproofing Basement Gedung?",
        answer: "Biaya pelatihan adalah Rp 3.750.000 per peserta untuk program teknis 2 hari (16 JP) lengkap dengan instrumen audit lingkungan basement dan sertifikat kompetensi resmi."
      },
      {
        question: "Apakah masker debu N95 boleh digunakan untuk pekerjaan waterproofing solvent?",
        answer: "Sama sekali tidak boleh. Masker debu partikulat seperti N95 tidak memiliki lapisan karbon aktif untuk menyerap molekul uap organik kimia. Pekerja wajib menggunakan respirator half-mask dengan cartridge Organic Vapor (OV)."
      },
      {
        question: "Apakah pekerjaan di basement gedung selalu dianggap sebagai ruang terbatas (confined space)?",
        answer: "Jika area basement memiliki bukaan ventilasi alami yang sangat minim, akses keluar-masuk terbatas, dan terdapat potensi akumulasi uap kimia atau gas berat, maka area tersebut wajib diperlakukan dengan prosedur izin kerja ruang terbatas (confined space)."
      }
    ],
    related: [
      "pelatihan/pelatihan-petugas-k3-madya-ruang-terbatas-confined-space-kemnaker",
      "pelatihan/pelatihan-ahli-k3-kimia-sertifikasi-resmi-kemnaker-ri",
      "pelatihan/safety-officer-k3",
      "profesi/safety-officer",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/permenaker-05-2018-k3-lingkungan-kerja"
    ],
    sources: [
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
    intent: "pelatihan k3 pengolesan pelapis kedap air waterproofing di basement gedung biaya jadwal",
    primaryKeyword: "pelatihan k3 pengolesan pelapis kedap air (waterproofing) di basement gedung",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan k3 pengolesan pelapis kedap air waterproofing di basement gedung",
    intentType: "commercial",
    parentTopic: "Ketinggian & Ruang Terbatas",
    cannibalizationGroup: "pelatihan-waterproofing-basement",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan K3 Waterproofing",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Safety Ruang Basement",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/foto-bersama-pekerja-di-fasilitas-industri-1.webp",
      alt: "Pemeriksaan sistem ventilasi paksa dan penggunaan respirator uap kimia pada pekerjaan pelapisan waterproofing basement"
    },
    gallery: [
      {
        src: "/images/content/foto-bersama-pekerja-di-fasilitas-industri-1.webp",
        alt: "Sesi deteksi uap gas solven VOC menggunakan alat ukur gas portabel di ruang bawah tanah"
      },
      {
        src: "/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-1.webp",
        alt: "Briefing keselamatan kerja pekerjaan panas torch-on membrane dan kesiapsiagaan pemadam kebakaran"
      }
    ]
  },
  {
    slug: "pelatihan-penanganan-gigitan-hewan-berbisa-ular-dan-serangga-lapangan",
    title: "Pelatihan Penanganan Gigitan Hewan Berbisa (Ular & Serangga) Lapangan",
    metaTitle: "Pelatihan Pertolongan Pertama Gigitan Ular Berbisa | Biaya 8 JP",
    description: "Pelatihan Penanganan Gigitan Hewan Berbisa Ular & Serangga Lapangan durasi 8 JP (1 Hari). Biaya Rp 2.750.000, protokol imobilisasi WHO, Serum Anti Bisa Ular (SABU), mitigasi sengatan lebah, dan evakuasi medis bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan Penanganan Gigitan Hewan Berbisa (Ular & Serangga) Lapangan adalah program pembinaan pertolongan pertama 8 JP (1 Hari Kerja) yang dirancang untuk pekerja proyek lapangan, perkebunan kelapa sawit, pertambangan, kehutanan, dan survei geologi. Pelatihan ini melatih peserta mengenali jenis ular berbisa Indonesia (Elapidae, Viperidae), membongkar mitos berbahaya (larangan menyayat, menghisap bisa, atau mengikat kencang tourniquet), menguasai teknik imobilisasi tekanan perban elastis (Pressure Immobilization Technique / PIT protokol WHO), penanganan anafilaksis akibat sengatan tawon vespa, serta prosedur rujukan medis cepat pemberian Serum Anti Bisa Ular (SABU).",
    highlights: [
      "Durasi Pembinaan: 8 JP (1 Hari Kerja Intensif)",
      "Landasan Medis: Protokol Penanganan Gigitan Ular Berbisa Organisasi Kesehatan Dunia (WHO Guidelines) & Standar P3K Kemnaker",
      "Investasi Resmi: Rp 2.750.000 / Peserta (Praktik Imobilisasi Bidai & Perban Elastis)",
      "Output: Sertifikat Kompetensi First Aider Gigitan Hewan Berbisa & Panduan Lapangan Identifikasi Ular"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi Pertolongan Pertama Gawat Darurat (First Aid) Lapangan",
      duration: "8 JP (1 Hari Kerja)",
      method: "Blended / Tatap Muka Praktikum Penuh (Teknik Imobilisasi Perban Elastis, Penilaian Tanda Keracunan Sistemik & Evaluasi)",
      legalBasis: "Permenaker No. 15 Tahun 2008 tentang P3K di Tempat Kerja & WHO Guidelines for the Management of Snakebites",
      targetAudience: [
        "Petugas P3K Perusahaan, Paramedis Klinik Kebun & Dokter Tambang",
        "Pekerja Perkebunan Sawit, Petugas Kehutanan & Pekerja Penebangan Kayu",
        "Geologist, Surveyor Proyek Lapangan, Tim Land Clearing & Konstruksi Terpencil",
        "Pemandu Wisata Alam, Ranger Taman Nasional & Tim Tanggap Darurat Lapangan"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK sederajat",
        "Scan KTP / Kartu Identitas yang masih berlaku",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan Penanganan Gigitan Hewan Berbisa dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Certified Wilderness First Responder (Venomous Bites)",
        "Master Kit Dokumen: Buku Saku Identifikasi Ular Berbisa Indonesia, Flowchart Protokol Imobilisasi WHO, dan Checklist Kotak P3K Lapangan Khusus Anti-Venom"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Identifikasi Ular Berbisa Indonesia & Karakteristik Racun Bisa",
          topics: [
            "Klasifikasi Ular Berbisa di Indonesia: Famili Elapidae (Kobra, King Kobra, Welang, Weling) dan Famili Viperidae (Ular Bangkai Laut, Ular Tanah, Viper Pohon)",
            "Jenis Toksin Bisa: Neurotoksin (Lumpuh Saraf & Gagal Napas), Hematotoksin (Pendarahan & Pembekuan Darah), Sitotoksin / Nekrotoksin (Pembusukan Jaringan)",
            "Membongkar Mitos Tradisional yang Mematikan: Larangan Mengiris Luka, Menghisap Darah, Membakar, atau Memasang Ikatan Kencang (Tourniquet)"
          ],
          hours: "3 JP"
        },
        {
          module: "Modul 02: Protokol Pertolongan Pertama Standar WHO: Imobilisasi Tekanan (PIT)",
          topics: [
            "Prinsip Utama: Menenangkan Korban (Mencegah Denyut Jantung Cepat Memompa Bisa) dan Menghentikan Aliran Getah Bening (Limfatik)",
            "Praktik Teknik Pressure Immobilization Technique (PIT): Pemasangan Perban Elastis Lebar dari Ujung Jari Menuju Pangkal Paha/Lengan",
            "Pemasangan Bidai (Splint) Kaku untuk Memastikan Sendi Anggota Gerak Benar-Benar Tidak Dapat Ditekuk"
          ],
          hours: "3 JP"
        },
        {
          module: "Modul 03: Penanganan Sengatan Tawon Vespa/Kalajengking & Rujukan Medis SABU",
          topics: [
            "Penanganan Sengatan Serangga Beracun (Tawon Vespa Affinis, Kalajengking, Kelabang) & Penanganan Reaksi Syok Anafilaksis",
            "Pemberian Antihistamin Darurat, Kompres Dingin & Penggunaan Epinefrin Auto-Injector",
            "Manajemen Jalur Rujukan: Koordinasi Ketersediaan Serum Anti Bisa Ular (SABU Monovalen / Polivalen) di Rumah Sakit Terdekat dan Pemantauan Tanda Vital"
          ],
          hours: "2 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 2.750.000 per peserta. Termasuk paket perban elastis khusus PIT, buku saku identifikasi ular berbisa berwarna, sertifikat kompetensi resmi, serta makan siang dan coffee break kelas tatap muka."
    },
    blocks: [
      {
        heading: "Tingginya Ancaman Gigitan Ular Berbisa di Sektor Perkebunan dan Proyek Terpencil",
        paragraphs: [
          "Bagi para pekerja di perkebunan kelapa sawit, pertambangan permukaan, survei seismik hutan, dan proyek konstruksi pembukaan lahan (land clearing), perjumpaan dengan reptil berbisa merupakan risiko harian yang mengancam nyawa. Di Indonesia terdapat lebih dari 350 spesies ular, di mana puluhan di antaranya memiliki bisa yang mematikan dalam hitungan jam bila tidak ditangani dengan benar.",
          "Tragisnya, korban gigitan ular sering kali meninggal atau harus diamputasi bukan semata-mata karena racun ular, melainkan akibat penanganan pertolongan pertama tradisional yang keliru: menyayat luka gigitan dengan silet, mengisap luka, atau mengikat kencang tali rafia/kain yang justru memicu nekrosis pembusukan jaringan otot."
        ]
      },
      {
        heading: "Penguasaan Protokol Imobilisasi Tekanan Berstandar Medis WHO",
        paragraphs: [
          "Pelatihan ini mengadopsi panduan resmi Organisasi Kesehatan Dunia (WHO Guidelines for Snakebite Envenoming). Peserta diajarkan fakta medis bahwa racun bisa ular merambat bukan melalui pembuluh darah merah utama, melainkan menyebar melalui sistem pembuluh getah bening (limfatik) yang pergerakannya dipicu oleh kontraksi otot.",
          "Oleh sebab itu, metode terbaik adalah teknik Imobilisasi Tekanan (Pressure Immobilization Technique / PIT)—melilitkan perban elastis dengan tekanan sedang dan memasang bidai kayu kaku agar anggota tubuh korban diam total, sehingga penyerapan racun ke organ vital terhenti sementara hingga pasien tiba di rumah sakit yang memiliki stok Serum Anti Bisa Ular (SABU)."
        ],
        bullets: [
          "Praktik membalut perban elastis dengan tingkat kekencangan yang tepat (seperti membebat pergelangan kaki terkilir)",
          "Identifikasi foto ular berbisa umum di kepulauan Indonesia untuk membantu diagnosis dokter rumah sakit",
          "Pencegahan gigitan di lapangan: penggunaan sepatu bot tinggi, celana kanvas tebal, dan tongkat survei",
          "Prosedur penanganan syok anafilaksis darurat akibat sengatan lebah ganda di tengah hutan"
        ]
      },
      {
        heading: "Menyelamatkan Nyawa di Detik-Detik Kritis Pertama",
        paragraphs: [
          "Dengan petugas lapangan yang dibekali keterampilan first aid berstandar internasional, korban gigitan hewan berbisa dapat diselamatkan tanpa kepanikan dan risiko kecacatan permanen dapat dihindari."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan Penanganan Gigitan Hewan Berbisa?",
        answer: "Biaya pelatihan adalah Rp 2.750.000 per peserta untuk program 1 hari (8 JP) lengkap dengan perlengkapan praktik perban elastis dan sertifikat kompetensi resmi."
      },
      {
        question: "Apakah luka gigitan ular boleh dihisap atau disedot darahnya?",
        answer: "Sama sekali tidak boleh. Menghisap darah tidak dapat mengeluarkan racun yang telah terikat di jaringan tubuh, dan justru memicu infeksi bakteri parah pada luka serta membahayakan mulut si penolong."
      },
      {
        question: "Apakah seluruh puskesmas di Indonesia memiliki stok Serum Anti Bisa Ular (SABU)?",
        answer: "Tidak semua fasilitas memiliki SABU karena keterbatasan rantai dingin penyimpanan. Pelatihan ini membimbing peserta cara memetakan rumah sakit rujukan terdekat yang menyimpan stok SABU sebelum tim diberangkatkan ke lokasi proyek remote."
      }
    ],
    related: [
      "pelatihan/pelatihan-petugas-p3k-di-tempat-kerja-lisensi-resmi-kemnaker-ri-30-jp",
      "pelatihan/safety-officer-k3",
      "pelatihan/k3-sektor-pertambangan-pengantar",
      "profesi/petugas-p3k",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/uu-1-1970-keselamatan-kerja"
    ],
    sources: [
      {
        label: "WHO Guidelines for the Management of Snakebites",
        url: "https://www.who.int/publications/i/item/9789290225300",
        publisher: "World Health Organization"
      },
      {
        label: "Permenaker No. 15 Tahun 2008 tentang Pertolongan Pertama Pada Kecelakaan di Tempat Kerja",
        url: "https://jdih.kemnaker.go.id/katalog/permenaker-15-2008",
        publisher: "Kementerian Ketenagakerjaan RI"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan penanganan gigitan hewan berbisa ular serangga lapangan first aid biaya jadwal",
    primaryKeyword: "pelatihan penanganan gigitan hewan berbisa ular dan serangga lapangan",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan penanganan gigitan hewan berbisa ular dan serangga lapangan",
    intentType: "commercial",
    parentTopic: "Kesehatan Kerja & P3K",
    cannibalizationGroup: "pelatihan-gigitan-berbisa-p3k",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan First Aid Lapangan",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi P3K Proyek Remote",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-1.webp",
      alt: "Praktikum teknik imobilisasi perban elastis protokol WHO untuk pertolongan pertama gigitan ular berbisa di lapangan"
    },
    gallery: [
      {
        src: "/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-1.webp",
        alt: "Sesi identifikasi morfologi ular berbisa dan penanganan sengatan lebah anafilaksis"
      },
      {
        src: "/images/content/foto-bersama-pekerja-di-fasilitas-industri-2.webp",
        alt: "Praktik pemasangan bidai kaku dan manajemen evakuasi medis darurat di area perkebunan dan tambang"
      }
    ]
  },
  {
    slug: "pelatihan-pengukuran-dan-pengendalian-bau-kebauan-industri-odour-control",
    title: "Pelatihan Pengukuran & Pengendalian Bau (Kebauan) Industri (Odour Control)",
    metaTitle: "Pelatihan Pengendalian Bau Industri Permenaker 05/2018 | Biaya 24 JP",
    description: "Pelatihan Pengukuran & Pengendalian Bau Kebauan Industri (Odour Control) durasi 24 JP (3 Hari). Biaya Rp 5.250.000, materi olfaktometri, scrubber kimia, biofilter, Kepmen LH 50/1996, dan Permenaker 05/2018 bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan Pengukuran & Pengendalian Bau (Kebauan) Industri (Odour Control) adalah program pembinaan higienes lingkungan industri 24 JP (3 Hari Kerja) berdasarkan Permenaker No. 05 Tahun 2018 dan Kepmen LH No. 50 Tahun 1996 tentang Baku Tingkat Kebauan. Pelatihan ini melatih tim K3, insinyur lingkungan, dan staf utilitas pabrik mengukur kadar senyawa bau menyengat (Ammonia NH3, Hidrogen Sulfida H2S, Metil Merkaptan, Metil Sulfida, Stirena), metode sensor olfaktometri dinamis, pemodelan dispersi bau, serta perancangan teknologi kendali bau (Wet Scrubber, Biofilter, Carbon Adsorption, dan Chemical Oxidizer).",
    highlights: [
      "Durasi Pembinaan: 24 JP (3 Hari Kerja Intensif)",
      "Landasan Regulasi: Permenaker No. 05 Tahun 2018 & Kepmen LH No. 50 Tahun 1996",
      "Investasi Resmi: Rp 5.250.000 / Peserta (Materi Pengukuran Senyawa Bau & Desain Scrubber)",
      "Output: Sertifikat Kompetensi Pengendalian Kebauan Industri & Panduan Teknologi Odour Control"
    ],
    courseDetails: {
      level: "Sertifikasi Teknis Higiene Industri & Pengendalian Emisi Lingkungan Pabrik",
      duration: "24 JP (3 Hari Kerja)",
      method: "Blended / Tatap Muka (Sampling Tabung Detektor Gas Bau, Desain Wet Scrubber / Biofilter, Studi Kasus Keluhan Warga & Evaluasi)",
      legalBasis: "Permenaker No. 05 Tahun 2018 tentang K3 Lingkungan Kerja, Kepmen LH No. 50 Tahun 1996 & UU No. 32 Tahun 2009",
      targetAudience: [
        "HSE Officer, Environmental Engineer & Petugas Higiene Industri",
        "Plant Manager, Unit Waste Water Treatment Plant (WWTP / IPAL) Supervisor",
        "Penanggung Jawab K3 Pabrik Pakan Ternak, Pengolahan Karet, Kimia, Pupuk, Kertas, dan Penyamakan Kulit",
        "Konsultan Lingkungan Amdal & Pengawas Lingkungan Hidup Daerah"
      ],
      prerequisites: [
        "Pendidikan minimal D3 atau S1 bidang Teknik Lingkungan, Kimia, Biologi, atau K3",
        "Scan KTP yang masih berlaku",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan Pengendalian Bau Industri dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Certified Industrial Odour Control Specialist",
        "Master Kit Dokumen: Formulir Pemantauan Baku Mutu Kebauan, Kriteria Desain Biofilter/Scrubber, dan SOP Penanganan Keluhan Warga Sekitar Pabrik"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Regulasi Baku Tingkat Kebauan & Senyawa Penyebab Bau Industri",
          topics: [
            "Telaah Hukum: Permenaker No. 05/2018 (NAB Faktor Kimia Lingkungan Kerja) & Kepmen LH No. 50/1996 (Baku Tingkat Kebauan Emisi Udara Bebas)",
            "Karakteristik 5 Senyawa Pembawa Bau Kritis: Amonia (NH3), Hidrogen Sulfida (H2S), Metil Merkaptan (CH3SH), Metil Sulfida ((CH3)2S) & Stirena",
            "Dampak Fisiologis & Psikologis Paparan Bau: Mual Kronis, Sakit Kepala, Gangguan Pernapasan, dan Potensi Konflik Sosial dengan Warga Sekitar"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 02: Metodologi Sampling, Olfaktometri Dinamis & Pemetaan Sebaran Bau",
          topics: [
            "Teknik Sampling Udara Bau: Penggunaan Tedlar Bag, Tabung Detektor Gas Sensitif (Colorimetric Tube), dan Photoionization Detector (PID)",
            "Metode Uji Bau Sensori: Prinsip Olfaktometri Dinamis Terstandarisasi (EN 13725) & Skala Intensitas Bau Organoleptik",
            "Pemetaan Dispersi Bau (Odour Dispersion Modeling) Menggunakan Data Arah Angin, Kelembaban, dan Suhu Cerobong"
          ],
          hours: "10 JP"
        },
        {
          module: "Modul 03: Teknologi Pengendalian Bau (Engineering Controls) & Evaluasi Efisiensi",
          topics: [
            "Sistem Wet Scrubber: Kimia Netralisasi Asam-Basa dan Penggunaan Oksidator (Sodium Hipoklorit / Hidrogen Peroksida)",
            "Sistem Pengolahan Biologis (Biofilter & Biotrickling Filter): Pemilihan Media Organik (Kompos/Wood Chips) dan Mikroorganisme Pengurai Bau",
            "Adsorpsi Karbon Aktif (Activated Carbon Filter): Kapasitas Jerap, Regenerasi Karbon & Perancangan Ventilasi Local Exhaust Ventilation (LEV)",
            "Penyusunan Standard Operating Procedure (SOP) Penanganan Keluhan Kebauan Lingkungan Eksternal Pabrik"
          ],
          hours: "8 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 5.250.000 per peserta. Termasuk toolkit formulir audit baku tingkat kebauan, materi panduan desain rekayasa biofilter/scrubber, sertifikat kompetensi resmi, serta makan siang dan coffee break kelas tatap muka."
    },
    blocks: [
      {
        heading: "Mengapa Masalah Bau Industri Memerlukan Pendekatan Rekayasa Teknik Ilmiah?",
        paragraphs: [
          "Masalah kebauan dari cerobong pabrik pengolahan karet, pabrik tepung ikan, instalasi pengolahan air limbah (IPAL/WWTP), pabrik kertas, atau pabrik pupuk bukan sekadar masalah kenyamanan biasa. Senyawa sulfur dan nitrogen volatil yang menimbulkan bau busuk menyengat juga merupakan gas kimia toksik yang berpotensi merusak saluran pernapasan pekerja dan menjadi pemicu utama aksi demonstrasi unjuk rasa warga yang berujung pada penutupan paksa operasional pabrik.",
          "Permenaker No. 05 Tahun 2018 dan Kepmen LH No. 50 Tahun 1996 secara tegas mengatur batas maksimal kadar zat penyebab bau di udara tempat kerja dan udara ambien sekitar pabrik."
        ]
      },
      {
        heading: "Teknik Pengukuran Objektif dan Solusi Rekayasa Pengendalian Bau",
        paragraphs: [
          "Menilai bau secara subjektif dengan hidung sering kali menimbulkan perdebatan karena adaptasi penciuman manusia. Pelatihan ini melatih peserta mengukur konsentrasi gas secara kuantitatif dalam satuan ppm menggunakan tabung detektor gas spesifik dan memahami pengujian olfaktometri dinamis.",
          "Peserta dibekali keahlian memilih teknologi pengendalian emisi yang paling hemat energi dan berdaya guna tinggi: merancang Wet Scrubber kimia untuk menetralisasi gas asam/basa, merawat media Biofilter mikrobiologis untuk mengurai senyawa organik sulfur, serta memasang tudung hisap lokal (hood) pada titik-titik proses berbau."
        ],
        bullets: [
          "Kalkulasi parameter baku mutu kebauan: NH3 maks 2.0 ppm, H2S maks 0.02 ppm, Metil Merkaptan maks 0.002 ppm",
          "Kriteria perancangan laju alir udara (airflow velocity) pada sistem penangkap bau di area IPAL",
          "Pemeliharaan rutin kelembaban dan pH media biofilter agar bakteri pengurai tidak mati",
          "Penyusunan protokol investigasi dan tindakan korektif cepat saat tercium bau lolos ke pemukiman"
        ]
      },
      {
        heading: "Menciptakan Hubungan Harmonis dengan Masyarakat dan Regulator",
        paragraphs: [
          "Pabrik yang berhasil mengendalikan emisi baunya dapat beroperasi dengan tenang tanpa sanksi pencabutan izin lingkungan dari Dinas Lingkungan Hidup, sekaligus meningkatkan citra korporasi sebagai industri hijau ramah lingkungan."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan Pengukuran & Pengendalian Bau Industri?",
        answer: "Biaya pelatihan adalah Rp 5.250.000 per peserta untuk program komprehensif 3 hari (24 JP) lengkap dengan toolkit panduan desain biofilter/scrubber dan sertifikat kompetensi resmi."
      },
      {
        question: "Apakah pelatihan ini mencakup pengendalian bau dari kolam limbah (WWTP/IPAL)?",
        answer: "Ya, modul membahas secara spesifik teknik penutupan kolam aerasi (basin covers) dan pemasangan sistem penarikan udara menuju unit biofilter."
      },
      {
        question: "Standar baku mutu apa yang dijadikan acuan evaluasi?",
        answer: "Pelatihan mengacu pada Permenaker No. 05 Tahun 2018 untuk ruang kerja pabrik dan Keputusan Menteri Lingkungan Hidup No. Kep-50/MENLH/11/1996 tentang Baku Tingkat Kebauan untuk udara ambien."
      }
    ],
    related: [
      "pelatihan/pengukuran-lingkungan-kerja",
      "pelatihan/pelatihan-ahli-k3-lingkungan-kerja-muda-madya-utama-kemnaker-ri",
      "pelatihan/pelatihan-higiene-industri-muda-himu-sertifikasi-bnsp-kemnaker",
      "profesi/ahli-k3-lingkungan-kerja",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/permenaker-05-2018-k3-lingkungan-kerja"
    ],
    sources: [
      {
        label: "Kepmen LH No. 50 Tahun 1996 tentang Baku Tingkat Kebauan",
        url: "https://jdih.menlhk.go.id",
        publisher: "Kementerian Lingkungan Hidup RI"
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
    intent: "pelatihan pengukuran dan pengendalian bau kebauan industri odour control biaya jadwal",
    primaryKeyword: "pelatihan pengukuran & pengendalian bau (kebauan) industri (odour control)",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan pengukuran dan pengendalian bau kebauan industri odour control",
    intentType: "commercial",
    parentTopic: "Higiene Industri & Lingkungan Kerja",
    cannibalizationGroup: "pelatihan-odour-control",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan Odour Control",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Pengendalian Bau Pabrik",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-2.webp",
      alt: "Pemeriksaan konsentrasi senyawa gas bau industri dan evaluasi unit wet scrubber di area proses pabrik"
    },
    gallery: [
      {
        src: "/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-2.webp",
        alt: "Sesi pengukuran senyawa H2S dan amonia menggunakan tabung detektor gas udara"
      },
      {
        src: "/images/content/instruktur-memandu-sesi-kelas-28.webp",
        alt: "Pemaparan teknologi kendali bau biofilter dan sistem adsorpsi karbon aktif industri"
      }
    ]
  }
];

// Write all 10 files
for (const p of finalBoilerplatePrograms) {
  const filePath = path.join('src', 'content', 'pelatihan', `${p.slug}.ts`);
  const fileContent = `import { type ContentRecord } from '../../lib/content-types';

export const record: ContentRecord = ${JSON.stringify(p, null, 2)};
export default record;
`;
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`✓ Successfully wrote: ${p.slug}`);
}

console.log('Final 10 Boilerplate Programs Enhanced Successfully: 10 files written.');

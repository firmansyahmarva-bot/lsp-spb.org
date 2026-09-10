import fs from 'fs';
import path from 'path';

const batch3Programs = [
  {
    slug: "safety-accountability-pengawas",
    title: "Pelatihan Akuntabilitas Keselamatan bagi Pengawas Lapangan",
    metaTitle: "Pelatihan Akuntabilitas Keselamatan Pengawas Lapangan | Jadwal, Biaya & Sertifikasi",
    description: "Pelatihan Akuntabilitas Keselamatan bagi Pengawas Lapangan (Supervisor Safety Accountability) durasi 8 JP (1 Hari). Biaya Rp 2.750.000, materi peran pengawas, observasi keselamatan, BBS, dan penegakan SOP K3 bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan Akuntabilitas Keselamatan bagi Pengawas Lapangan adalah program pembinaan intensif 8 JP (1 Hari Kerja) yang membekali frontline supervisor, mandor, dan team leader dengan kecakapan kepemimpinan keselamatan, observasi perilaku kerja aman (Behavior-Based Safety), inspeksi harian, pemanduan safety briefing, dan penegakan akuntabilitas zero incident sesuai PP 50/2012 dan UU 1/1970.",
    highlights: [
      "Durasi Pembinaan: 8 JP (1 Hari Kerja Intensif)",
      "Landasan Hukum: UU No. 1 Tahun 1970 Pasal 14 & PP No. 50 Tahun 2012 Elemen 1",
      "Investasi Resmi: Rp 2.750.000 / Peserta (Public / Corporate In-House)",
      "Output: Sertifikat Kompetensi Akuntabilitas Pengawas K3 & Kartu Tanda Selesai Pembinaan"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi Terapan & Corporate Supervisory K3",
      duration: "8 JP (1 Hari Kerja)",
      method: "Blended / Tatap Muka Interaktif (Studi Kasus Supervisi, Roleplay Intervensi Bahaya & Evaluasi)",
      legalBasis: "UU No. 1 Tahun 1970 Pasal 14, PP No. 50 Tahun 2012 & Standar Kepengawasan K3",
      targetAudience: [
        "Supervisor Operasional, Site Supervisor & Maintenance Supervisor",
        "Mandor Konstruksi, Foreman Pabrik, dan Team Leader Lapangan",
        "Superintendent Lapangan dan Asisten Manager Lapangan",
        "Staff HSE yang mendampingi program supervisory accountability"
      ],
      prerequisites: [
        "Minimal pendidikan SMA/SMK sederajat dengan pengalaman memimpin tim kerja",
        "Scan KTP / Paspor yang masih berlaku",
        "Surat Tugas / Rekomendasi dari manajemen perusahaan",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Pelatihan Akuntabilitas Keselamatan bagi Pengawas Lapangan dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Supervisory Safety Accountability",
        "Transkrip Evaluasi Kompetensi & Rencana Tindak Lanjut Supervisi (Action Plan)"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Peran Pokok & Tanggung Jawab Hukum Pengawas Lapangan",
          topics: [
            "Dasar Hukum Tanggung Jawab Pidana & Perdata Pengawas Kerja (UU 1/1970 Pasal 14)",
            "Transisi Paradigma: Dari 'Mandor Produksi' Menjadi 'Safety Role Model'",
            "Mengukur Biaya Langsung vs Tidak Langsung Kecelakaan bagi Lini Kerja"
          ],
          hours: "2 JP"
        },
        {
          module: "Modul 02: Teknik Observasi Perilaku & Intervensi Positif (BBS)",
          topics: [
            "Metode Stop-Work Authority (SWA) dan Intervensi Aman Tanpa Konfrontasi",
            "Pelaksanaan Percakapan Keselamatan Konstruktif (Safety Coaching)",
            "Identifikasi Unsafe Action & Unsafe Condition di Lini Depan Operasional"
          ],
          hours: "3 JP"
        },
        {
          module: "Modul 03: Pemanduan Daily Toolbox Meeting & Pelaporan Insiden",
          topics: [
            "Struktur Efektif 10 Menit Safety Toolbox Meeting / P5M yang Menggerakkan",
            "Verifikasi Kelayakan APD & Izin Kerja Aman (Permit-to-Work Verification)",
            "Pelaporan Awal Near-Miss (Neaer-Hit) dan Tindakan Pengamanan Cepat"
          ],
          hours: "3 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 2.750.000 per peserta. Termasuk modul komprehensif, sertifikat kelulusan, kartu kompetensi, lunch/coffee break (tatap muka), dan konsultasi supervisory coaching pasca-pelatihan. Tersedia tarif khusus In-House Training pabrik/proyek."
    },
    blocks: [
      {
        heading: "Mengapa Akuntabilitas Pengawas Menentukan Keberhasilan Program Zero Accident?",
        paragraphs: [
          "Data kecelakaan kerja nasional menunjukkan bahwa lebih dari 80% insiden operasional berakar dari tindakan tidak aman (unsafe act) yang luput dari pengawasan frontline supervisor. Pengawas lapangan adalah benteng pertahanan pertama keselamatan kerja yang berinteraksi langsung dengan pekerja setiap hari.",
          "Tanpa akuntabilitas yang terdefinisi secara terukur, instruksi keselamatan dari manajemen puncak kerap terhenti di meja rapat. Pelatihan Akuntabilitas Keselamatan bagi Pengawas Lapangan mengubah supervisor dari sekadar pemantau target produksi menjadi agen penegak budaya kerja selamat di lantai kerja."
        ]
      },
      {
        heading: "Kurikulum Praktis: Observasi, Intervensi, dan P5M Efektif",
        paragraphs: [
          "Program ini menanggalkan teori abstrak dan fokus pada keterampilan praktis di lapangan. Peserta dilatih melakukan observasi tugas harian (task observation), membedakan deviasi prosedur kerja, serta menggunakan teknik STOP (Safety Training Observation Program) untuk mengoreksi perilaku berisiko.",
          "Di samping itu, para pengawas dipandu merancang dan memimpin safety briefing harian (P5M/Toolbox Talk) yang komunikatif, partisipatif, serta langsung mengunci mitigasi bahaya kritis sebelum pekerjaan shift dimulai."
        ],
        bullets: [
          "Pemahaman kewajiban hukum pengawas dalam UU No. 1 Tahun 1970 Pasal 14",
          "Keterampilan komunikasi asertif dan coaching keselamatan terhadap pekerja bermasalah",
          "Penerapan audit visual harian pada perkakas, alat berat, dan APD kerja",
          "Tata cara penulisan laporan observasi keselamatan dan eskalasi bahaya kritis",
          "Simulasi penegakan wewenang penghentian pekerjaan tidak aman (Stop-Work Authority)"
        ]
      },
      {
        heading: "Paket Pembinaan Fleksibel untuk Industri Manufaktur & Proyek",
        paragraphs: [
          "Kami menyediakan pelatihan ini dalam format Public Class bulanan serta Corporate In-House Training yang materinya dapat dikustomisasi sesuai dengan Standard Operating Procedure (SOP) dan profil risiko spesifik perusahaan Anda.",
          "Instruktur PT Kreasi Ultimate Berjaya adalah praktisi K3 senior dengan pengalaman supervisi belasan tahun di sektor minyak bumi, pertambangan, pabrik manufaktur berat, dan konstruksi infrastruktur bertingkat."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan Akuntabilitas Keselamatan Pengawas Lapangan?",
        answer: "Biaya pelatihan resmi adalah Rp 2.750.000 per peserta untuk kelas reguler. Untuk pelaksanaan Corporate In-House Training dengan peserta kolektif di lokasi pabrik atau proyek, kami menyediakan skema paket hemat investasi."
      },
      {
        question: "Siapa saja yang wajib mengikuti pelatihan Supervisory Safety Accountability ini?",
        answer: "Program ini sangat direkomendasikan untuk seluruh pengawas lini depan: mandor, foreman, group leader, team leader, supervisor produksi, supervisor maintenance, site engineer, hingga staff keselamatan kerja yang mendampingi operasional harian."
      },
      {
        question: "Apakah materi bisa disesuaikan dengan SOP internal perusahaan kami?",
        answer: "Ya, untuk skema In-House Training, modul observasi, form inspeksi harian, dan studi kasus akan diselaraskan dengan dokumen CSMS, SOP kerja aman, dan matriks risiko perusahaan Anda."
      }
    ],
    related: [
      "pelatihan/safety-officer-k3",
      "pelatihan/safety-leadership-eksekutif",
      "pelatihan/komunikasi-k3-toolbox",
      "pelatihan/penyusunan-sop-k3",
      "profesi/supervisor-k3",
      "profesi/safety-officer",
      "regulasi-k3/uu-1-1970-keselamatan-kerja",
      "regulasi-k3/pp-50-2012-penerapan-smk3"
    ],
    sources: [
      {
        label: "UU No. 1 Tahun 1970 tentang Keselamatan Kerja (Pasal 14 Kewajiban Pengurus)",
        url: "https://jdih.kemnaker.go.id/katalog/uu-1-1970",
        publisher: "Pemerintah Republik Indonesia"
      },
      {
        label: "PP No. 50 Tahun 2012 tentang Penerapan Sistem Manajemen K3",
        url: "https://jdih.kemnaker.go.id/katalog/pp-50-2012",
        publisher: "Kementerian Ketenagakerjaan RI"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan akuntabilitas keselamatan pengawas lapangan biaya jadwal materi supervisor safety accountability",
    primaryKeyword: "pelatihan akuntabilitas keselamatan pengawas lapangan",
    searchIntent: "biaya jadwal materi dan sertifikasi akuntabilitas keselamatan pengawas lapangan frontline supervisor",
    intentType: "commercial",
    parentTopic: "Pelatihan Spesialis, Leadership & Sektoral Terapan",
    cannibalizationGroup: "pelatihan-leadership-supervisi",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan Pengawas K3",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Request In-House Training Pengawas",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-1.webp",
      alt: "Supervisor memimpin briefing keselamatan kerja di hadapan pekerja lapangan beralat pelindung diri lengkap"
    },
    gallery: [
      {
        src: "/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-1.webp",
        alt: "Briefing keselamatan harian sebelum shift operasional dimulai di pabrik industri"
      },
      {
        src: "/images/content/foto-bersama-pekerja-di-fasilitas-industri-1.webp",
        alt: "Sesi pembinaan interaktif kepemimpinan keselamatan bagi supervisor pabrik dan konstruksi"
      }
    ]
  },
  {
    slug: "pengukuran-lingkungan-kerja",
    title: "Pelatihan Dasar Pengukuran Faktor Bahaya Lingkungan Kerja",
    metaTitle: "Pelatihan Dasar Pengukuran Faktor Lingkungan Kerja | 24 JP, Biaya & Sertifikasi",
    description: "Pelatihan Pengukuran Faktor Bahaya Lingkungan Kerja durasi 24 JP (3 Hari). Biaya Rp 5.250.000, materi pengukuran kebisingan (Sound Level Meter), pencahayaan (Lux Meter), iklim kerja (ISBB), dan gas toksik Permenaker 05/2018.",
    answer: "Pelatihan Dasar Pengukuran Faktor Bahaya Lingkungan Kerja adalah program pembinaan teknis 24 JP (3 Hari Kerja) berbasis Permenaker No. 05 Tahun 2018. Pelatihan ini melatih peserta mengoperasikan alat ukur lingkungan industri (Sound Level Meter, Lux Meter, Heat Stress Meter / ISBB, Dust Sampler, Gas Detector), membandingkan hasil pengukuran dengan Nilai Ambang Batas (NAB), serta menyusun rekomendasi pengendalian teknis.",
    highlights: [
      "Durasi Pembinaan: 24 JP (3 Hari Kerja Intensif)",
      "Landasan Hukum: Permenaker No. 05 Tahun 2018 tentang K3 Lingkungan Kerja",
      "Investasi Resmi: Rp 5.250.000 / Peserta (Termasuk Praktik Penggunaan Alat Ukur)",
      "Output: Sertifikat Kompetensi Pengukuran Faktor Bahaya Lingkungan Kerja & Transkrip Praktikum"
    ],
    courseDetails: {
      level: "Sertifikasi Teknis Higiene Industri & Lingkungan Kerja",
      duration: "24 JP (3 Hari Kerja)",
      method: "Blended / Praktikum Tatap Muka (Kalibrasi Alat Ukur, Sampling Lapangan, Analisis Data & Seminar)",
      legalBasis: "Permenaker No. 05 Tahun 2018, Kepmenaker Standar Higiene Industri & SNI Terkait",
      targetAudience: [
        "HSE Officer, Petugas Higiene Industri & Safety Specialist",
        "Staff Laboratorium Lingkungan & Teknisi Kalibrasi",
        "Anggota Komite P2K3 dan Pengawas Fasilitas Pabrik",
        "Dokter / Paramedis Perusahaan yang menangani surveilans kesehatan pekerja"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK (diutamakan D3/S1 Teknik, Sains, atau Kesehatan Masyarakat)",
        "Scan KTP / Tanda Pengenal resmi",
        "Surat Rekomendasi Perusahaan / Kesediaan mengikuti seluruh sesi praktikum",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan Dasar Pengukuran Faktor Bahaya Lingkungan Kerja PT Kreasi Ultimate Berjaya",
        "Transkrip Hasil Uji Praktikum Pengoperasian Alat Ukur Higiene Industri",
        "Template Logbook & Formulir Pelaporan Data Lingkungan Kerja Resmi ke Disnaker"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Regulasi K3 Lingkungan Kerja & Penetapan Nilai Ambang Batas (NAB)",
          topics: [
            "Telaah Permenaker No. 05 Tahun 2018: Faktor Fisika, Kimia, Biologi, Ergonomi, dan Psikologi",
            "Konsep Nilai Ambang Batas (NAB), Batas Pemaparan Singkat (BPSD), dan Kadar Tertinggi (KTD)",
            "Metode Sampling Terstandarisasi SNI & NIOSH Manual of Analytical Methods (NMAM)"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 02: Praktik Pengukuran Faktor Fisika (Bising, Cahaya, Getaran, Iklim Kerja)",
          topics: [
            "Pengoperasian & Kalibrasi Sound Level Meter (SLM) & Noise Dosimeter untuk Noise Mapping",
            "Pengukuran Intensitas Pencahayaan Umum & Lokal Menggunakan Lux Meter Digital",
            "Pengukuran Indeks Suhu Basah dan Bola (ISBB) dengan Heat Stress Monitor di Area Panas",
            "Pengukuran Getaran Lengan-Tangan (Hand-Arm) dan Seluruh Tubuh (Whole-Body Vibration)"
          ],
          hours: "10 JP"
        },
        {
          module: "Modul 03: Sampling Faktor Kimia & Penyusunan Laporan Pemantauan Disnaker",
          topics: [
            "Deteksi Gas Berbahaya (CO, H2S, O2, LEL) Menggunakan Multi-Gas Detector Portabel",
            "Prinsip Dasar Personal Dust Sampler untuk Pengukuran Debu Respirabel & Total Debu",
            "Analisis Data Hasil Ukur, Penentuan Zonasi Bahaya, dan Matriks Rekomendasi Eliminasi/Substitusi",
            "Tata Cara Penyusunan Dokumen Laporan Pemantauan Lingkungan Kerja Berkala"
          ],
          hours: "8 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 5.250.000 per peserta. Termasuk hands-on workshop pengoperasian instrumen ukur (SLM, Lux Meter, ISBB, Multi-Gas Detector), modul materi cetak/digital, sertifikat kelulusan, dan coffee break/lunch (kelas tatap muka)."
    },
    blocks: [
      {
        heading: "Kewajiban Pengukuran Lingkungan Kerja Sesuai Permenaker 05/2018",
        paragraphs: [
          "Permenaker No. 05 Tahun 2018 mewajibkan setiap tempat kerja melakukan pengukuran dan pengendalian lingkungan kerja secara berkala guna menjamin keselamatan serta mencegah timbulnya Penyakit Akibat Kerja (PAK). Pemantauan ini mencakup faktor fisika, kimia, biologi, ergonomi, dan psikologi kerja.",
          "Tanpa data pengukuran yang akurat, perusahaan tidak dapat menentukan apakah tingkat kebisingan mesin, intensitas cahaya workstation, atau konsentrasi uap bahan kimia telah melampaui Nilai Ambang Batas (NAB) yang membahayakan pendengaran, penglihatan, dan sistem organ pekerja."
        ]
      },
      {
        heading: "Pelatihan Hands-on Pengoperasian Instrumen Ukur Higiene Industri",
        paragraphs: [
          "Pelatihan Dasar Pengukuran Faktor Bahaya Lingkungan Kerja memadukan 40% teori regulasi dan 60% praktikum instrumen ukur. Setiap peserta diajarkan langsung prosedur kalibrasi, titik sampling representatif, dan pembacaan alat ukur profesional.",
          "Peserta tidak hanya membaca angka pada layar display, tetapi juga mampu mengkalkulasikan ekuivalen kebisingan 8 jam (Leq / TWA), menghitung kebutuhan ventilasi atau peredam suara, serta merancang peta bahaya lingkungan kerja (hazard noise and thermal mapping)."
        ],
        bullets: [
          "Pengoperasian Sound Level Meter (SLM) kelas 1 dan kelas 2 untuk pemetaan bising area mesin",
          "Pengukuran pencahayaan meja kerja kantor dan area gudang menggunakan Lux Meter",
          "Kalkulasi Indeks Suhu Basah dan Bola (ISBB) untuk penetapan waktu kerja-istirahat di pabrik panas",
          "Verifikasi kalibrasi bump-test pada multi-gas detector sebelum inspeksi ruang terbatas",
          "Penyusunan format laporan hasil pemantauan lingkungan kerja yang siap diaudit"
        ]
      },
      {
        heading: "Lulusan Mampu Melakukan Self-Monitoring Fasilitas Mandiri",
        paragraphs: [
          "Dengan menguasai kompetensi pengukuran dasar ini, tim K3 internal perusahaan dapat melakukan surveilans rutin secara mandiri tanpa harus selalu menunggu audit eksternal tahunan, sehingga potensi bahaya lingkungan kerja dapat dideteksi dan dikendalikan sejak dini."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya pelatihan pengukuran lingkungan kerja?",
        answer: "Biaya pelatihan adalah Rp 5.250.000 per peserta untuk program intensif 3 hari (24 JP) termasuk praktikum instrumen dan sertifikat kompetensi resmi."
      },
      {
        question: "Apakah peserta akan mempraktikkan langsung alat ukur seperti Sound Level Meter dan Lux Meter?",
        answer: "Ya, pelatihan ini menekankan praktikum langsung di mana setiap kelompok peserta menggunakan instrumen Sound Level Meter, Lux Meter, Heat Stress Monitor (ISBB), dan Multi-Gas Detector yang disediakan panitia."
      },
      {
        question: "Apakah hasil ukur internal perusahaan dapat digunakan untuk laporan berkas Disnaker?",
        answer: "Data self-monitoring internal sangat berguna untuk evaluasi rutin K3 dan pemenuhan kriteria 5.1 & 6.5 SMK3 PP 50/2012. Untuk pengujian legal formal tahunan, data ini menjadi baseline penting sebelum verifikasi oleh Laboratorium Penguji K3 terakreditasi Kemnaker RI."
      }
    ],
    related: [
      "pelatihan/ahli-k3-lingkungan-kerja-muda-madya-utama-kemnaker-ri",
      "pelatihan/higiene-industri-muda-himu-sertifikasi-bnsp-kemnaker",
      "pelatihan/evaluasi-kualitas-pencahayaan-lux-meter-tempat-kerja-industri",
      "profesi/ahli-k3-lingkungan-kerja",
      "regulasi-k3/permenaker-05-2018-k3-lingkungan-kerja",
      "panduan/biaya-pelatihan-k3"
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
    intent: "pelatihan dasar pengukuran faktor bahaya lingkungan kerja permenaker 05 2018 biaya jadwal",
    primaryKeyword: "pelatihan dasar pengukuran faktor bahaya lingkungan kerja",
    searchIntent: "biaya jadwal kurikulum dan sertifikasi pelatihan dasar pengukuran faktor bahaya lingkungan kerja",
    intentType: "commercial",
    parentTopic: "Pelatihan Higiene Industri & Lingkungan Kerja",
    cannibalizationGroup: "pelatihan-lingkungan-kerja",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan Pengukuran Lingkungan Kerja",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Pengukuran Pabrik",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/instruktur-memandu-sesi-kelas-28.webp",
      alt: "Praktikum instrumen pengukuran faktor bahaya fisik dan kimia lingkungan kerja di ruang pelatihan"
    },
    gallery: [
      {
        src: "/images/content/instruktur-memandu-sesi-kelas-28.webp",
        alt: "Instruktur membimbing peserta mengoperasikan Sound Level Meter dan Lux Meter"
      },
      {
        src: "/images/content/peserta-mengikuti-pelatihan-di-kelas-1.webp",
        alt: "Sesi kalkulasi Nilai Ambang Batas (NAB) dan analisis data lingkungan kerja pabrik"
      }
    ]
  },
  {
    slug: "safety-officer-k3",
    title: "Pelatihan & Pembinaan Safety Officer Lapangan Terapan",
    metaTitle: "Pelatihan Safety Officer Lapangan Terapan | Jadwal, Biaya & Sertifikasi 16 JP",
    description: "Pelatihan Safety Officer Lapangan Terapan durasi 16 JP (2 Hari). Biaya Rp 3.750.000, materi inspeksi lapangan, penyusunan JSA, izin kerja aman (PTW), investigasi dasar, dan penegakan budaya K3 bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan & Pembinaan Safety Officer Lapangan Terapan adalah program pembinaan vokasi K3 komprehensif 16 JP (2 Hari Kerja) untuk mempersiapkan personel garda depan keselamatan kerja. Pelatihan ini melatih peserta mengidentifikasi bahaya di area operasional, menyusun Job Safety Analysis (JSA), memeriksa Permit-to-Work (PTW), memimpin toolbox talk, serta mendokumentasikan logbook harian K3.",
    highlights: [
      "Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)",
      "Landasan Hukum: PP No. 50 Tahun 2012 & UU No. 1 Tahun 1970",
      "Investasi Resmi: Rp 3.750.000 / Peserta (Materi Praktis Terapan Lapangan)",
      "Output: Sertifikat Kompetensi Safety Officer Lapangan & Portofolio Kerja HSE"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi Vokasi & Lapangan HSE",
      duration: "16 JP (2 Hari Kerja)",
      method: "Blended / Tatap Muka Interaktif (Praktik JSA, Simulasi Izin Kerja, Inspeksi Visual & Ujian Evaluasi)",
      legalBasis: "UU No. 1 Tahun 1970, PP No. 50 Tahun 2012 Elemen 6 & Standar Operasional Industri",
      targetAudience: [
        "Calon Safety Officer, HSE Officer, dan Field Safety Inspector",
        "Teknisi Lapangan, Mandor, dan Pengawas Subkontraktor",
        "Lulusan SMK/D3/S1 yang ingin berkarier profesional sebagai Safety Officer",
        "Anggota Tim Tanggap Darurat & Komite P2K3"
      ],
      prerequisites: [
        "Minimal lulusan SMA/SMK sederajat",
        "Scan KTP yang masih berlaku",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)",
        "Surat Rekomendasi Perusahaan (jika utusan perusahaan) atau CV pelamar"
      ],
      certificationOutput: [
        "Sertifikat Kelulusan Resmi Safety Officer Lapangan Terapan dari PT Kreasi Ultimate Berjaya",
        "Kartu Tanda Personel Safety Officer Lapangan",
        "Bundle Dokumen Template Siap Pakai (JSA, Permit-to-Work, Checklist APD & Daily HSE Logbook)"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Fondasi Norma K3 Lapangan & Identifikasi Bahaya (Hazard Identification)",
          topics: [
            "Regulasi Dasar K3 Tempat Kerja & Peran Kunci Safety Officer di Lini Produksi",
            "Mengenal 5 Kategori Bahaya: Fisika, Kimia, Biologi, Ergonomi, Mekanik/Listrik",
            "Teknik Hazard Hunting & Walkthrough Survey Harian di Area Proyek/Pabrik"
          ],
          hours: "5 JP"
        },
        {
          module: "Modul 02: Job Safety Analysis (JSA) & Sistem Izin Kerja Aman (PTW)",
          topics: [
            "Langkah-Langkah Pembuatan JSA 4 Kolom (Tahapan Kerja, Potensi Bahaya, Dampak, Pengendalian)",
            "Pengelolaan Surat Izin Kerja Aman: Hot Work, Confined Space, Ketinggian, Cold Work & Electrical",
            "Prosedur Lockout/Tagout (LOTO) & Verifikasi Nol Energi di Lapangan"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 03: Inspeksi APD, Pemanduan Safety Talk & Penanganan Insiden Awal",
          topics: [
            "Standar Pemeriksaan Kelayakan APD (Helm, Safety Shoes, Body Harness, Eyewear, Respirator)",
            "Pemanduan Morning Toolbox Meeting / Safety Briefing yang Menarik & Tidak Monoton",
            "Tata Cara Pertolongan Pertama (P3K) Awal & Penyelamatan Darurat Sebelum Medis Tiba",
            "Penyusunan Formulir Laporan Kejadian Awal Insiden (Flash Incident Report)"
          ],
          hours: "5 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 3.750.000 per peserta. Biaya mencakup paket modul cetak dan digital, bundle template HSE form (JSA, PTW, checklist), sertifikat kelulusan kompetensi, kartu identitas safety officer, dan konsumsi penuh selama kelas tatap muka."
    },
    blocks: [
      {
        heading: "Peran Sentral Safety Officer dalam Operasional Proyek dan Industri",
        paragraphs: [
          "Safety Officer adalah personel kunci yang mengawal implementasi prosedur keselamatan di lapangan setiap hari. Mulai dari memeriksa kelengkapan APD pekerja subkontraktor, mengawasi kepatuhan izin kerja panas di area tangki, hingga memastikan rambu-rambu keselamatan terpasang pada area lubang terbuka.",
          "Ketiadaan safety officer yang kompeten berisiko mengakibatkan pelanggaran prosedur dasar yang berujung pada cedera fatal, penundaan proyek, dan denda regulasi dari otoritas pengawas ketenagakerjaan."
        ]
      },
      {
        heading: "Fokus Pelatihan: Siap Kerja dan Menguasai Dokumen Operasional HSE",
        paragraphs: [
          "Pelatihan Safety Officer Lapangan Terapan PT Kreasi Ultimate Berjaya didesain langsung untuk dunia kerja nyata. Peserta tidak hanya membaca regulasi, melainkan langsung dilatih membuat dokumen JSA untuk pekerjaan berisiko tinggi, memeriksa kelayakan form izin kerja (Permit-to-Work), serta mempraktikkan intervensi langsung saat melihat pekerja melakukan aksi berbahaya.",
          "Di akhir program, peserta memiliki portofolio kerja yang lengkap, mencakup laporan inspeksi harian, checklist scaffolding/alat berat, dokumen JSA mandiri, dan resume safety talk yang siap ditunjukkan kepada calon pemberi kerja atau manajemen proyek."
        ],
        bullets: [
          "Penyusunan JSA dan Risk Assessment pada tahapan pekerjaan konstruksi dan manufaktur",
          "Pemeriksaan dan verifikasi keabsahan izin kerja panas, ruang terbatas, dan ketinggian",
          "Inspeksi kelayakan APD sesuai standar ANSI / SNI / EN",
          "Penyusunan Flash Incident Report dalam waktu kurang dari 1 jam pasca-kejadian",
          "Teknik komunikasi efektif memimpin briefing harian di hadapan puluhan pekerja"
        ]
      },
      {
        heading: "Peluang Karir dan Jenjang Pengembangan Profesional HSE",
        paragraphs: [
          "Sertifikat Safety Officer Lapangan menjadi batu loncatan strategis bagi profesional muda sebelum melanjutkan ke sertifikasi tingkat lanjut seperti Ahli K3 Umum Kemnaker RI, Pengawas K3 Konstruksi, atau Ahli K3 Migas BNSP."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan Safety Officer Lapangan?",
        answer: "Biaya pelatihan adalah Rp 3.750.000 per peserta untuk program intensif 2 hari (16 JP) lengkap dengan bundle dokumen HSE dan sertifikasi."
      },
      {
        question: "Apakah lulusan baru SMA atau SMK bisa mengikuti pelatihan Safety Officer ini?",
        answer: "Bisa. Pelatihan ini terbuka bagi lulusan SMA, SMK, Diploma, maupun Sarjana yang ingin berkarier sebagai Field Safety Officer atau HSE Inspector di proyek konstruksi, manufaktur, logistik, dan pertambangan."
      },
      {
        question: "Apa bedanya Safety Officer dengan Ahli K3 Umum?",
        answer: "Safety Officer berfokus pada pengawasan operasional teknis harian di lapangan (inspeksi, JSA, toolbox meeting). Sedangkan Ahli K3 Umum adalah pejabat berwenang penunjukan Kemnaker RI yang memegang mandat legal sekretaris P2K3 dan pelaporan regulasi perusahaan ke Disnaker."
      }
    ],
    related: [
      "pelatihan/ahli-k3-umum",
      "pelatihan/safety-accountability-pengawas",
      "pelatihan/penyusunan-sop-k3",
      "pelatihan/komunikasi-k3-toolbox",
      "profesi/safety-officer",
      "profesi/ahli-k3-umum",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/uu-1-1970-keselamatan-kerja"
    ],
    sources: [
      {
        label: "UU No. 1 Tahun 1970 tentang Keselamatan Kerja",
        url: "https://jdih.kemnaker.go.id/katalog/uu-1-1970",
        publisher: "Pemerintah RI"
      },
      {
        label: "PP No. 50 Tahun 2012 tentang Penerapan Sistem Manajemen Keselamatan dan Kesehatan Kerja",
        url: "https://jdih.kemnaker.go.id/katalog/pp-50-2012",
        publisher: "Kementerian Ketenagakerjaan RI"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan safety officer lapangan terapan biaya jadwal materi sertifikat hse officer",
    primaryKeyword: "pelatihan safety officer lapangan terapan",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan safety officer lapangan terapan",
    intentType: "commercial",
    parentTopic: "Pelatihan Spesialis, Leadership & Sektoral Terapan",
    cannibalizationGroup: "pelatihan-field-safety",
    contentKind: "program",
    primaryCtaText: "Daftar Safety Officer Class",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Karir HSE",
    secondaryCtaIntent: "syarat",
    image: {
      src: "/images/content/foto-bersama-pekerja-di-fasilitas-industri-1.webp",
      alt: "Safety officer memegang checklist inspeksi mendampingi pekerja di fasilitas industri manufaktur"
    },
    gallery: [
      {
        src: "/images/content/foto-bersama-pekerja-di-fasilitas-industri-1.webp",
        alt: "Praktik inspeksi lapangan dan simulasi Job Safety Analysis (JSA)"
      },
      {
        src: "/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-1.webp",
        alt: "Pemanduan safety toolbox talk harian di hadapan tim pekerja lapangan"
      }
    ]
  },
  {
    slug: "inspeksi-k3-terjadwal",
    title: "Pelatihan Teknik Inspeksi K3 & Audit Visual Tempat Kerja",
    metaTitle: "Pelatihan Teknik Inspeksi K3 & Audit Visual | Jadwal, Biaya & Sertifikasi 16 JP",
    description: "Pelatihan Teknik Inspeksi K3 & Audit Visual Tempat Kerja durasi 16 JP (2 Hari). Biaya Rp 3.750.000, materi penyusunan checklist inspeksi, audit visual 5S/K3, pelaporan temuan, dan tindakan korektif bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan Teknik Inspeksi K3 & Audit Visual Tempat Kerja adalah program pembinaan aplikatif 16 JP (2 Hari Kerja) yang mengajarkan metodologi pemeriksaan sistematis fasilitas kerja. Peserta dibekali keahlian merancang checklist inspeksi terstandarisasi, melakukan walkthrough visual audit, mengkategorikan tingkat keparahan deviasi bahaya (Critical, Major, Minor), serta memonitor penutupan Corrective and Preventive Action (CAPA) sesuai PP 50/2012 kriteria 6.5.",
    highlights: [
      "Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)",
      "Landasan Hukum: PP No. 50 Tahun 2012 Kriteria 6.5 & Standar Audit Inspeksi K3",
      "Investasi Resmi: Rp 3.750.000 / Peserta (Praktik Desain Checklist & Audit Walkthrough)",
      "Output: Sertifikat Kompetensi Teknik Inspeksi K3 & Toolkit Checklist Siap Pakai"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi Teknis Inspeksi & Audit K3",
      duration: "16 JP (2 Hari Kerja)",
      method: "Blended / Tatap Muka (Audit Visual Walkthrough, Studi Foto Bahaya, Desain Checklist & Ujian)",
      legalBasis: "PP No. 50 Tahun 2012 Kriteria 6.5, UU No. 1 Tahun 1970 & Standar OSHA 1910",
      targetAudience: [
        "Anggota Tim Inspeksi P2K3 & HSE Inspector",
        "Supervisor Fasilitas, Facility Management & Building Maintenance",
        "Warehouse Manager, Workshop Leader, dan Production Section Head",
        "Auditor Internal K3 dan Manajer Mutu/Operasional"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK atau berpengalaman di bidang operasional fasilitas",
        "Scan KTP / Kartu Identitas Pegawai",
        "Surat Tugas dari manajemen perusahaan (jika utusan perusahaan)",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Pelatihan Teknik Inspeksi K3 & Audit Visual Tempat Kerja dari PT Kreasi Ultimate Berjaya",
        "Kartu Kompetensi Inspektur K3 Fasilitas Tempat Kerja",
        "Koleksi 25+ Template Digital Checklist Inspeksi (Gudang, Kelistrikan, APAR, Mesin, Sanitasi & Gedung)"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Prinsip Dasar, Kategori & Perencanaan Inspeksi K3 Terjadwal",
          topics: [
            "Perbedaan Mendasar Inspeksi K3 vs Audit K3 vs Observasi Perilaku",
            "Jenis-Jenis Inspeksi: Harian, Mingguan, Bulanan, Khusus, dan Inspeksi Pra-Operasi",
            "Menentukan Jadwal Berkala & Pemetaan Area Kritis (Critical Area Mapping)"
          ],
          hours: "4 JP"
        },
        {
          module: "Modul 02: Desain Formulir Checklist & Teknik Audit Visual Lapangan",
          topics: [
            "Menyusun Checklist Inspeksi yang Efektif: Parameter Kondisi Fisik, Perilaku & Housekeeping (5S/5R)",
            "Metode Walkthrough Visual: Observasi Top-to-Bottom, Eye-Level, and Behind-the-Scenes",
            "Teknik Pengambilan Bukti Foto Temuan yang Jelas, Obyektif & Terukur"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 03: Penilaian Risiko Temuan, Laporan Inspeksi & Monitoring CAPA",
          topics: [
            "Kategorisasi Tingkat Bahaya Temuan: Imminent Danger, Serius, dan Minor Hazard",
            "Penyusunan Format Laporan Hasil Inspeksi K3 Resmi ke Manajemen & P2K3",
            "Mekanisme Penerbitan Corrective Action Preventive Action (CAPA) & Tracking Verifikasi Tindak Lanjut"
          ],
          hours: "6 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 3.750.000 per peserta. Termasuk materi pelatihan lengkap, toolkit 25+ checklist inspeksi editable, sertifikat kelulusan kompetensi, lunch dan snack break (kelas tatap muka), serta akses konsultasi tindak lanjut temuan inspeksi."
    },
    blocks: [
      {
        heading: "Urgensi Inspeksi K3 Terjadwal Sesuai PP 50/2012 Kriteria 6.5",
        paragraphs: [
          "PP No. 50 Tahun 2012 Kriteria 6.5 secara eksplisit mewajibkan pengurus tempat kerja menyusun dan melaksanakan prosedur pemeriksaan serta pemeliharaan sarana kerja secara berkala. Tanpa program inspeksi yang terstruktur, kerusakan mekanik, kebocoran zat kimia mikro, ausnya sling kabel, atau terhalangnya akses pintu darurat sering kali tidak terdeteksi hingga kecelakaan fatal terjadi.",
          "Pelatihan Teknik Inspeksi K3 & Audit Visual Tempat Kerja memberikan pedoman praktis bagi staf dan tim P2K3 untuk beralih dari pemeliharaan reaktif ke pencegahan proaktif yang terencana dan terdokumentasi rapi."
        ]
      },
      {
        heading: "Mengembangkan Kepekaan 'Hazard Eye' dan Standarisasi Checklist",
        paragraphs: [
          "Banyak inspeksi di tempat kerja gagal menemukan bahaya tersembunyi karena inspektur sekadar memberi tanda centang pada formulir checklist lama tanpa benar-benar memeriksa kondisi fisik lapangan. Pelatihan ini melatih kepekaan visual (hazard eye) peserta dalam mengenali deviasi housekeeping, ketidaklayakan perkakas tangan, modifikasi instalasi listrik liar, dan degradasi pengaman mesin.",
          "Peserta juga dilatih merancang checklist khusus yang spesifik untuk area gudang, jalur lalu lintas forklift, stasiun kerja perkantoran, bengkel bubut, hingga area bongkar muat bahan bakar."
        ],
        bullets: [
          "Teknik wawancara singkat saat inspeksi untuk memverifikasi pemahaman operator mesin",
          "Standar audit visual 5S / 5R untuk mencegah tumpahan, tersandung, dan bahaya kebakaran",
          "Penyusunan matriks tindak lanjut korektif dengan tenggat waktu (deadline) yang realistis",
          "Pelaporan statistik tren temuan inspeksi untuk bahan evaluasi rapat triwulan P2K3"
        ]
      },
      {
        heading: "Integrasi Pelaporan Digital dan Dashboard CAPA",
        paragraphs: [
          "Peserta diperkenalkan pada pemanfaatan checklist digital dan spreadsheet tracking CAPA agar tindak lanjut rekomendasi perbaikan dapat dipantau oleh para penanggung jawab departemen secara transparan."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan Teknik Inspeksi K3 & Audit Visual?",
        answer: "Biaya pelatihan adalah Rp 3.750.000 per peserta untuk program 2 hari (16 JP) lengkap dengan toolkit 25+ template checklist digital dan sertifikasi kompetensi."
      },
      {
        question: "Apakah materi mencakup praktik langsung simulasi inspeksi?",
        answer: "Ya. Peserta akan melakukan simulasi audit visual fasilitas atau studi kasus foto pabrik nyata, mengidentifikasi minimal 15 deviasi bahaya, dan membuat laporan CAPA lengkap."
      },
      {
        question: "Apakah sertifikat yang diterbitkan dapat dilampirkan untuk audit SMK3 PP 50/2012?",
        answer: "Sangat bisa. Bukti pelatihan inspektur K3 internal memenuhi kriteria pemenuhan 6.5.2 PP No. 50 Tahun 2012 terkait personel yang kompeten melakukan pemeriksaan sarana kerja."
      }
    ],
    related: [
      "pelatihan/safety-officer-k3",
      "pelatihan/penyusunan-sop-k3",
      "pelatihan/auditor-internal-smk3",
      "pelatihan/implementasi-smk3-pp-50",
      "panduan/biaya-pelatihan-k3",
      "profesi/safety-officer",
      "regulasi-k3/pp-50-2012-penerapan-smk3"
    ],
    sources: [
      {
        label: "PP No. 50 Tahun 2012 tentang Penerapan Sistem Manajemen K3 (Kriteria 6.5 Pemeriksaan)",
        url: "https://jdih.kemnaker.go.id/katalog/pp-50-2012",
        publisher: "Kementerian Ketenagakerjaan RI"
      },
      {
        label: "UU No. 1 Tahun 1970 tentang Keselamatan Kerja",
        url: "https://jdih.kemnaker.go.id/katalog/uu-1-1970",
        publisher: "Pemerintah RI"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan teknik inspeksi k3 dan audit visual tempat kerja biaya jadwal materi checklist k3",
    primaryKeyword: "pelatihan teknik inspeksi k3 & audit visual tempat kerja",
    searchIntent: "biaya jadwal kurikulum dan sertifikat pelatihan teknik inspeksi k3 dan audit visual tempat kerja",
    intentType: "commercial",
    parentTopic: "Pelatihan Spesialis, Leadership & Sektoral Terapan",
    cannibalizationGroup: "pelatihan-inspeksi-k3",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan Inspeksi K3",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Request In-House Training Inspeksi",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-2.webp",
      alt: "Petugas K3 melakukan inspeksi visual kelayakan sarana kerja dan kepatuhan APD pekerja"
    },
    gallery: [
      {
        src: "/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-2.webp",
        alt: "Inspeksi rutin kelayakan area kerja dan instalasi industri"
      },
      {
        src: "/images/content/asesmen-individu-dengan-pengisian-dokumen-1.webp",
        alt: "Penyusunan checklist inspeksi dan evaluasi laporan temuan bahaya"
      }
    ]
  },
  {
    slug: "penyusunan-sop-k3",
    title: "Pelatihan Penyusunan Standard Operating Procedure (SOP) & JSA Berbasis K3",
    metaTitle: "Pelatihan Penyusunan SOP & JSA Berbasis K3 | Jadwal, Biaya & Sertifikasi 16 JP",
    description: "Pelatihan Penyusunan SOP & JSA Berbasis K3 durasi 16 JP (2 Hari). Biaya Rp 3.750.000, kuasai metodologi Job Safety Analysis 4 tahap, perumusan safe work procedure, dan integrasi SMK3 PP 50/2012 bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan Penyusunan Standard Operating Procedure (SOP) & JSA Berbasis K3 adalah program pembinaan 16 JP (2 Hari Kerja) yang membimbing peserta menyusun prosedur kerja aman terstandarisasi. Peserta mempelajari teknik dekomposisi pekerjaan, perumusan mitigasi bahaya berbasis HIRADC, penulisan dokumen SOP kerja berstandar ISO 45001 & PP 50/2012, serta uji coba validasi prosedur di lantai kerja.",
    highlights: [
      "Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)",
      "Landasan Hukum: PP No. 50 Tahun 2012 Kriteria 6.1 & ISO 45001:2018 Klausul 8.1",
      "Investasi Resmi: Rp 3.750.000 / Peserta (Praktik Menulis Dokumen JSA & SOP Mandiri)",
      "Output: Sertifikat Kompetensi Penyusun SOP/JSA & Koleksi Template Dokumen Operasional"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi Dokumentasi & Pengendalian Operasional K3",
      duration: "16 JP (2 Hari Kerja)",
      method: "Blended / Workshop Interaktif (Penyusunan Dokumen Nyata, Peer-Review, Simulasi Validasi & Evaluasi)",
      legalBasis: "PP No. 50 Tahun 2012 Kriteria 6.1, ISO 45001:2018 & Permenaker Terkait Operasional",
      targetAudience: [
        "HSE Officer, Safety Specialist & Tim Penyusun Dokumen SMK3",
        "Engineer, Kepala Bengkel, Supervisor Operasi & Maintenance",
        "Staff QA/QC, Pengembang Prosedur & Bagian Standardisasi Perusahaan",
        "Sekretaris P2K3 yang merapikan dokumen kepatuhan audit regulasi"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK (diutamakan D3/S1) dengan pemahaman alur operasional kerja",
        "Scan KTP / Tanda Pengenal resmi",
        "Disarankan membawa draf proses kerja internal untuk langsung dipraktikkan",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Penyusunan SOP & JSA Berbasis K3 dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Kompetensi Pengendalian Dokumen Operasional HSE",
        "Paket Master Template SOP K3 Word/Excel yang Memenuhi Standar Audit ISO 45001 & PP 50/2012"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Hierarki Pengendalian & Prinsip Integrasi K3 ke Dalam Alur Kerja",
          topics: [
            "Mengapa Prosedur Operasional Gagal Diterapkan di Lapangan (Human Error vs Prosedur Buruk)",
            "Hierarki Pengendalian Bahaya (Eliminasi, Substitusi, Rekayasa Teknik, Administratif, APD)",
            "Korelasi HIRADC / Risk Register dengan Kebutuhan Pembuatan SOP Khusus"
          ],
          hours: "4 JP"
        },
        {
          module: "Modul 02: Metodologi Penyusunan Job Safety Analysis (JSA) Komprehensif",
          topics: [
            "Teknik Pemecahan Pekerjaan Menjadi Langkah Rinci (Job Step Breakdown)",
            "Analisis Bahaya Spesifik pada Tiap Tahapan: Terjepit, Jatuh, Kontak Listrik, Uap Beracun",
            "Menentukan Tindakan Kontrol Preventif dan Protektif yang Praktis & Terukur",
            "Praktik Workshop: Pembuatan JSA Pekerjaan Kritis (Hot Work, Lifting, Confined Space)"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 03: Penulisan Standard Operating Procedure (SOP) & Validasi Lapangan",
          topics: [
            "Struktur Baku SOP Berbasis K3: Tujuan, Ruang Lingkup, APD Wajib, Langkah Kerja, Kondisi Darurat",
            "Teknik Penulisan Bahasa Prosedur: Jelas, Singkat, Menggunakan Kalimat Perintah Aktif & Diagram Alir",
            "Uji Validasi SOP di Lantai Kerja (Table-top Review & Field Walkthrough with Operators)",
            "Mekanisme Sosialisasi, Pengesahan Manajemen, dan Pengendalian Versi Dokumen (MOC)"
          ],
          hours: "6 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 3.750.000 per peserta. Sudah mencakup akses modul eksklusif, toolkit master template SOP & JSA terverifikasi, sertifikat kompetensi, pendampingan review draf dokumen selama pelatihan, serta lunch/coffee break kelas tatap muka."
    },
    blocks: [
      {
        heading: "Mengubah JSA & SOP dari Sekadar Formalitas Menjadi Pelindung Nyata",
        paragraphs: [
          "Sering kali dokumen SOP dan JSA di perusahaan hanya tersimpan rapi di lemari arsip untuk kebutuhan audit sertifikasi, namun tidak pernah dibaca apalagi dipatuhi oleh pekerja di lini produksi. Hal ini terjadi karena prosedur ditulis dengan bahasa yang terlalu kaku, tidak praktis, atau disusun tanpa melibatkan praktisi lapangan.",
          "Pelatihan Penyusunan Standard Operating Procedure (SOP) & JSA Berbasis K3 membekali para profesional teknik dan HSE menyusun panduan kerja yang operasional, lugas, mudah dipahami operator, dan secara efektif mengunci bahaya di setiap tahapan kerja."
        ]
      },
      {
        heading: "Sinergi Antara HIRADC, JSA, dan SOP",
        paragraphs: [
          "Pelatihan ini menguraikan benang merah antara kajian risiko makro (HIRADC perusahaan) dengan kajian risiko mikro di tingkat tugas harian (Job Safety Analysis). Dari rekomendasi mitigasi JSA inilah klausul keselamatan diintegrasikan langsung ke dalam teks SOP kerja operasional.",
          "Dengan pendekatan ini, pekerja tidak perlu membuka dua dokumen terpisah, melainkan instruksi cara kerja aman sudah tertanam langsung dalam langkah demi langkah pengoperasian mesin atau pekerjaan pemeliharaan."
        ],
        bullets: [
          "Teknik memecah tugas kompleks menjadi 5 hingga 10 langkah kerja kritis yang esensial",
          "Penetapan kriteria APD wajib dan verifikasi pra-syarat keselamatan sebelum pekerjaan dimulai",
          "Perumusan tindakan tanggap darurat saat terjadi kegagalan operasional seketika",
          "Standar penomoran dokumen, riwayat revisi, dan pengendalian dokumen kedaluwarsa"
        ]
      },
      {
        heading: "Hasil Nyata: Draf JSA & SOP Milik Perusahaan Selesai Selama Kelas",
        paragraphs: [
          "Dalam sesi workshop, setiap peserta wajib membawa satu proses kerja aktual dari pabrik atau proyeknya untuk dibedah dan disusun ulang menjadi draf SOP dan JSA berstandar internasional yang siap ditinjau manajemen."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan penyusunan SOP & JSA berbasis K3?",
        answer: "Biaya pelatihan adalah Rp 3.750.000 per peserta untuk program intensif 2 hari (16 JP) termasuk master template dokumen dan sertifikat kompetensi resmi."
      },
      {
        question: "Apakah peserta boleh membawa proses kerja dari tempat kerjanya sendiri?",
        answer: "Sangat dianjurkan. Praktikum workshop didesain agar peserta langsung menyelesaikan draf JSA dan SOP pekerjaan riil tempat kerjanya, dengan bimbingan langsung dari instruktur senior."
      },
      {
        question: "Apakah dokumen SOP yang dihasilkan memenuhi kriteria audit PP 50/2012 dan ISO 45001?",
        answer: "Ya, struktur penulisan modul kami dirancang persis mengacu pada klausul pengendalian operasional ISO 45001:2018 (klausul 8.1) dan kriteria 6.1 Sistem Manajemen K3 PP No. 50 Tahun 2012."
      }
    ],
    related: [
      "pelatihan/safety-officer-k3",
      "pelatihan/manajemen-risiko-k3",
      "pelatihan/inspeksi-k3-terjadwal",
      "pelatihan/implementasi-smk3-pp-50",
      "panduan/biaya-pelatihan-k3",
      "profesi/safety-officer",
      "regulasi-k3/pp-50-2012-penerapan-smk3"
    ],
    sources: [
      {
        label: "PP No. 50 Tahun 2012 tentang Penerapan Sistem Manajemen K3",
        url: "https://jdih.kemnaker.go.id/katalog/pp-50-2012",
        publisher: "Kementerian Ketenagakerjaan RI"
      },
      {
        label: "ISO 45001:2018 Occupational Health and Safety Management Systems",
        url: "https://www.iso.org/standard/63787.html",
        publisher: "International Organization for Standardization"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan penyusunan sop k3 dan jsa biaya jadwal materi standard operating procedure",
    primaryKeyword: "pelatihan penyusunan standard operating procedure (sop) & jsa berbasis k3",
    searchIntent: "biaya jadwal kurikulum dan sertifikat pelatihan penyusunan standard operating procedure sop dan jsa berbasis k3",
    intentType: "commercial",
    parentTopic: "Pelatihan Spesialis, Leadership & Sektoral Terapan",
    cannibalizationGroup: "pelatihan-sop-jsa",
    contentKind: "program",
    primaryCtaText: "Daftar Workshop SOP & JSA",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Pendampingan SOP",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/asesmen-individu-dengan-pengisian-dokumen-2.webp",
      alt: "Peserta pelatihan menyusun dokumen Job Safety Analysis dan Standard Operating Procedure K3"
    },
    gallery: [
      {
        src: "/images/content/asesmen-individu-dengan-pengisian-dokumen-2.webp",
        alt: "Sesi evaluasi dan peer review penyusunan formulir JSA dan SOP operasional"
      },
      {
        src: "/images/content/diskusi-kelompok-dalam-sesi-kelas-1.webp",
        alt: "Diskusi kelompok membedah tahapan bahaya dan perumusan langkah kendali safe work procedure"
      }
    ]
  },
  {
    slug: "safety-induction-kontraktor",
    title: "Pelatihan Manajemen Safety Induction & CSMS (Contractor Safety)",
    metaTitle: "Pelatihan Safety Induction & CSMS Kontraktor | Biaya, Jadwal & Sertifikasi 8 JP",
    description: "Pelatihan Manajemen Safety Induction & CSMS (Contractor Safety Management System) durasi 8 JP (1 Hari). Biaya Rp 2.750.000, materi kualifikasi vendor K3, izin kerja kontraktor, dan audit evaluasi CSMS bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan Manajemen Safety Induction & CSMS (Contractor Safety Management System) adalah program pembinaan 8 JP (1 Hari Kerja) yang mengajarkan tata kelola keselamatan kontraktor dan mitra kerja pihak ketiga. Pelatihan ini melatih peserta menyusun sistem prakualifikasi CSMS (risk assessment, capability evaluation), menyelenggarakan safety induction berbobot, mengawasi kepatuhan permit di lapangan, serta melaksanakan evaluasi kinerja akhir kontraktor sesuai PP 50/2012 kriteria 5.4.",
    highlights: [
      "Durasi Pembinaan: 8 JP (1 Hari Kerja Intensif)",
      "Landasan Hukum: PP No. 50 Tahun 2012 Kriteria 5.4 & Standar Tata Kelola Kontraktor Industri",
      "Investasi Resmi: Rp 2.750.000 / Peserta (Materi CSMS Terapan & Paket Formulir Audit Vendor)",
      "Output: Sertifikat Kompetensi Pengelola CSMS & Safety Induction Perusahaan"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi Manajemen Kontraktor & Pengadaan K3",
      duration: "8 JP (1 Hari Kerja)",
      method: "Blended / Tatap Muka (Studi Kasus Penilaian Vendor, Simulasi Scoring CSMS & Ujian)",
      legalBasis: "PP No. 50 Tahun 2012 Kriteria 5.4, UU No. 1 Tahun 1970 & Pedoman CSMS ESDM/Migas",
      targetAudience: [
        "HSE Manager, CSMS Coordinator & Safety Officer",
        "Tim Procurement, Vendor Management & Panitia Pengadaan Barang/Jasa",
        "Project Manager, Site Engineer & Pengawas Pekerjaan Kontraktor",
        "Pimpinan Perusahaan Kontraktor / Subkontraktor yang ingin lolos audit CSMS klien"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK sederajat (diutamakan yang berinteraksi dengan pihak ketiga)",
        "Scan KTP / Paspor resmi",
        "Surat Tugas dari manajemen perusahaan (jika utusan perusahaan)",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan Manajemen Safety Induction & CSMS dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Verifikator CSMS & Safety Induction",
        "Master Kit CSMS: Kuesioner Prakualifikasi, Format Skoring K3 Vendor, Materi Video/Slide Induksi, dan Form Evaluasi Kinerja"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Urgensi Regulasi & Siklus 6 Tahap CSMS (Contractor Safety Management System)",
          topics: [
            "Tanggung Jawab Hukum Pemilik Pekerjaan (Owner) Terhadap Kecelakaan Pekerja Kontraktor",
            "Enam Fase Siklus CSMS: Risk Assessment, Pra-Kualifikasi, Seleksi, Pre-Job Activity, Work in Progress, Final Evaluation",
            "Menentukan Tingkat Risiko Kontrak (High, Medium, Low Risk Contract Classification)"
          ],
          hours: "3 JP"
        },
        {
          module: "Modul 02: Desain Safety Induction & Tata Kelola Pre-Job Activity",
          topics: [
            "Perancangan Materi Safety Induction yang Mengikat: Aturan Umum, Rute Evakuasi, Golden Rules, Sanksi Pelanggaran",
            "Penyelenggaraan Pre-Job Meeting, Kick-off K3, dan Verifikasi Kompetensi Personel Kontraktor",
            "Penerbitan Badge / Kartu Izin Masuk Fasilitas Berdasarkan Kelulusan Uji Induksi"
          ],
          hours: "3 JP"
        },
        {
          module: "Modul 03: Pengawasan Lapangan (Work in Progress) & Evaluasi Kinerja Kontraktor",
          topics: [
            "Inspeksi Harian & Audit Kepatuhan Lapangan Pekerjaan Kontraktor (Permit-to-Work Oversight)",
            "Penanganan Pelanggaran: Yellow/Red Card System, Peringatan Tertulis, dan Blacklisting",
            "Penilaian Kinerja Akhir (Close-out Rating) K3 Kontraktor sebagai Syarat Rekomendasi Tender Lanjutan"
          ],
          hours: "2 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 2.750.000 per peserta. Termasuk toolkit formulir audit CSMS lengkap, template presentasi induksi interaktif, modul pelatihan komprehensif, sertifikat kompetensi resmi, serta snack/lunch kelas tatap muka."
    },
    blocks: [
      {
        heading: "Mengapa Pengelolaan Kontraktor (CSMS) Sangat Krusial Bagi Perusahaan?",
        paragraphs: [
          "Di era outsourcing dan spesialisasi industri saat ini, sebagian besar pekerjaan berisiko tinggi (konstruksi, maintenance pabrik, confined space, pekerjaan listrik tegangan tinggi) diserahkan kepada pihak kontraktor atau vendor rekanan. Statistik membuktikan bahwa risiko insiden fatal di area industri lebih dari 60% melibatkan pekerja pihak ketiga yang belum memahami kultur keselamatan perusahaan setempat.",
          "PP No. 50 Tahun 2012 Kriteria 5.4 mewajibkan perusahaan mengendalikan pengadaan barang dan jasa dengan memastikan bahwa persyaratan K3 telah dipenuhi oleh pihak ketiga sebelum pekerjaan dimulai di lokasi kerja."
        ]
      },
      {
        heading: "Membangun Sistem CSMS yang Adil, Transparan, dan Efektif",
        paragraphs: [
          "Pelatihan Manajemen Safety Induction & CSMS membimbing tim HSE dan tim pengadaan (procurement) menyelaraskan kriteria seleksi vendor. Peserta dilatih menyusun kuesioner verifikasi berkas, melakukan klarifikasi dokumen HSE plan calon mitra, serta menetapkan batas kelulusan nilai (passing grade CSMS).",
          "Program ini juga mengajarkan cara merancang materi safety induction yang efektif dan tidak membosankan, dilengkapi kuis evaluasi pemahaman sebelum kartu identitas izin kerja (Safety Passport / Gate Pass) diterbitkan."
        ],
        bullets: [
          "Kategorisasi risiko kontrak kerja untuk menentukan intensitas pengawasan K3",
          "Teknik verifikasi keabsahan sertifikat personil dan kelaikan peralatan kontraktor",
          "Penerapan sistem insentif keselamatan dan sanksi denda ketidakpatuhan kontraktor",
          "Dokumentasi laporan evaluasi penutupan kontrak untuk rekam jejak vendor di masa depan"
        ]
      },
      {
        heading: "Solusi Bagi Kontraktor untuk Memenangkan Tender Proyek BUMN & Multinasional",
        paragraphs: [
          "Bagi perusahaan kontraktor dan rekanan, pelatihan ini membuka wawasan mengenai apa saja yang dinilai oleh auditor owner, sehingga mereka dapat mempersiapkan dokumen K3 secara profesional guna memenangkan kualifikasi tender proyek besar."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan Safety Induction & CSMS Kontraktor?",
        answer: "Biaya pelatihan resmi adalah Rp 2.750.000 per peserta untuk program intensif 1 hari (8 JP) lengkap dengan master template CSMS dan sertifikat kelulusan."
      },
      {
        question: "Apakah materi ini berlaku untuk kontraktor sektor umum atau hanya migas?",
        answer: "Prinsip CSMS yang diajarkan bersifat universal dan mengadopsi standar terbaik untuk diterapkan di industri manufaktur, pertambangan, energi, konstruksi gedung, logistik, maupun sektor perminyakan."
      },
      {
        question: "Apakah pelatihan ini menyediakan contoh materi presentasi safety induction siap pakai?",
        answer: "Ya, setiap peserta mendapatkan template slide safety induction yang dapat diedit langsung sesuai dengan aturan spesifik fasilitas tempat kerja masing-masing."
      }
    ],
    related: [
      "pelatihan/safety-officer-k3",
      "pelatihan/safety-accountability-pengawas",
      "pelatihan/komunikasi-k3-toolbox",
      "pelatihan/implementasi-smk3-pp-50",
      "profesi/safety-officer",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/pp-50-2012-penerapan-smk3"
    ],
    sources: [
      {
        label: "PP No. 50 Tahun 2012 tentang Penerapan Sistem Manajemen K3 (Kriteria 5.4 Pembelian dan Pengendalian Kontrak)",
        url: "https://jdih.kemnaker.go.id/katalog/pp-50-2012",
        publisher: "Kementerian Ketenagakerjaan RI"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan manajemen safety induction dan csms kontraktor biaya jadwal materi contractor safety management system",
    primaryKeyword: "pelatihan manajemen safety induction & csms (contractor safety)",
    searchIntent: "biaya jadwal kurikulum dan sertifikat pelatihan manajemen safety induction dan csms contractor safety",
    intentType: "commercial",
    parentTopic: "Pelatihan Spesialis, Leadership & Sektoral Terapan",
    cannibalizationGroup: "pelatihan-csms-kontraktor",
    contentKind: "program",
    primaryCtaText: "Daftar Pelatihan CSMS Kontraktor",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Sistem CSMS Vendor",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/foto-bersama-pekerja-di-fasilitas-industri-2.webp",
      alt: "Penyelenggaraan safety induction bagi pekerja kontraktor baru sebelum memasuki area fasilitas pabrik"
    },
    gallery: [
      {
        src: "/images/content/foto-bersama-pekerja-di-fasilitas-industri-2.webp",
        alt: "Verifikasi kelengkapan APD dan izin kerja kontraktor di pintu masuk area kerja"
      },
      {
        src: "/images/content/instruktur-memandu-sesi-kelas-29.webp",
        alt: "Simulasi evaluasi scoring prakualifikasi CSMS vendor dan audit kepatuhan mitra"
      }
    ]
  },
  {
    slug: "penilaian-kinerja-k3",
    title: "Pelatihan KPI & Leading-Lagging Indicator Kinerja K3",
    metaTitle: "Pelatihan KPI & Leading-Lagging Indicator K3 | Jadwal, Biaya & Sertifikasi 8 JP",
    description: "Pelatihan KPI & Leading-Lagging Indicator Kinerja K3 durasi 8 JP (1 Hari). Biaya Rp 2.750.000, kuasai pengukuran proaktif K3, rasio FR/SR, dashboard analitik keselamatan, dan evaluasi target zero harm bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan KPI & Leading-Lagging Indicator Kinerja K3 adalah program pembinaan manajerial 8 JP (1 Hari Kerja) yang membekali praktisi K3 dan pimpinan operasional merancang metrik pengukuran kinerja keselamatan yang seimbang. Peserta mempelajari kalkulasi lagging indicator (LTIFR, Lost Time Injury Severity Rate, TRIR) serta pengembangan leading indicator proaktif (angka kepatuhan inspeksi, rasio penutupan CAPA, jam pelatihan K3, audit hazard reporting) sesuai PP 50/2012 kriteria 7.1.",
    highlights: [
      "Durasi Pembinaan: 8 JP (1 Hari Kerja Intensif)",
      "Landasan Hukum: PP No. 50 Tahun 2012 Kriteria 7.1 & Standar Pelaporan Kinerja K3",
      "Investasi Resmi: Rp 2.750.000 / Peserta (Praktik Merancang Dashboard KPI K3 Mandiri)",
      "Output: Sertifikat Kompetensi Pengukuran Kinerja K3 & Template Dashboard Excel Analitik"
    ],
    courseDetails: {
      level: "Sertifikasi Manajerial & Pengukuran Kinerja HSE",
      duration: "8 JP (1 Hari Kerja)",
      method: "Blended / Tatap Muka (Kalkulasi Rasio Statistik, Desain Matriks KPI, Visualisasi Dashboard & Evaluasi)",
      legalBasis: "PP No. 50 Tahun 2012 Kriteria 7.1, Standar OSHA / ANSI Z16 & ISO 45001 Klausul 9.1",
      targetAudience: [
        "HSE Manager, HSE Coordinator & Safety Data Analyst",
        "General Manager, Operation Manager & Kepala Pabrik",
        "Sekretaris P2K3 yang menyusun laporan triwulan kinerja ke pimpinan & Disnaker",
        "Staff Continuous Improvement & Balanced Scorecard Corporate"
      ],
      prerequisites: [
        "Pendidikan minimal D3 atau S1 dari berbagai jurusan",
        "Memiliki pemahaman dasar tentang operasional atau administrasi K3",
        "Scan KTP / Kartu Identitas Pegawai",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan KPI & Leading-Lagging Indicator Kinerja K3 PT Kreasi Ultimate Berjaya",
        "Kartu Kompetensi HSE Performance Measurement Specialist",
        "Master File Dashboard Kinerja K3 (Formula Otomatis LTIFR, SR, TRIR, dan Grafik Leading Metric)"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Filosofi Pengukuran Kinerja K3 & Keterbatasan Lagging Indicators",
          topics: [
            "Paradoks Zero Accident: Mengapa Angka Nol Kecelakaan Tidak Menjamin Tempat Kerja Aman",
            "Definisi & Rumus Baku Lagging Indicators: Lost Time Injury Frequency Rate (LTIFR), Severity Rate (SR), Total Recordable Incident Rate (TRIR)",
            "Standar Jam Kerja Orang (Man-Hours Calculation) & Batasan Pelaporan Resmi"
          ],
          hours: "3 JP"
        },
        {
          module: "Modul 02: Desain Leading Indicators Proaktif & Budaya Keselamatan",
          topics: [
            "Menetapkan Metrik Proaktif: Partisipasi Hazard Report, Tingkat Penyelesaian Inspeksi, Kepatuhan Tool Box Meeting",
            "Menghubungkan Leading Metric dengan Peningkatan Budaya Kerja Selamat (Felt Leadership Score)",
            "Menentukan Target KPI K3 yang Realistis & Memotivasi bagi Lini Manajerial dan Operasional"
          ],
          hours: "3 JP"
        },
        {
          module: "Modul 03: Visualisasi Data, Dashboard HSE & Pelaporan Eksekutif",
          topics: [
            "Membangun Safety Performance Dashboard yang Informatif & Komunikatif Menggunakan Excel / BI Tools",
            "Teknik Pemaparan Kinerja K3 di Hadapan Dewan Direksi dan Rapat Manajemen Tinjauan (Management Review)",
            "Penyusunan Laporan Triwulan Evaluasi Kinerja K3 untuk Disnaker Sesuai Regulasi"
          ],
          hours: "2 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 2.750.000 per peserta. Termasuk bundle template spreadsheet KPI K3 otomatis, modul panduan kalkulasi statistik keselamatan kerja, sertifikat kelulusan kompetensi, serta konsumsi kelas tatap muka."
    },
    blocks: [
      {
        heading: "Mengapa Hanya Mengandalkan Lagging Indicator Sangat Berbahaya?",
        paragraphs: [
          "Banyak perusahaan mengukur keberhasilan K3 semata-mata dari nihilnya kecelakaan fatal (Lost Time Injury = 0). Padahal, lagging indicator seperti frekuensi kecelakaan adalah data reaktif yang baru muncul setelah kerugian terjadi. Nihilnya kecelakaan belum tentu mencerminkan tempat kerja yang aman, melainkan sering kali akibat keberuntungan atau ketakutan pekerja melaporkan insiden kecil (underreporting).",
          "Pelatihan KPI & Leading-Lagging Indicator Kinerja K3 mengajarkan perusahaan menyeimbangkan metrik reaktif dengan indikator proaktif (leading indicators) yang dapat mengidentifikasi penurunan standar keselamatan jauh sebelum insiden fatal terjadi."
        ]
      },
      {
        heading: "Keahlian Menghitung Rumus Statistik Ketenagakerjaan Terstandarisasi",
        paragraphs: [
          "Dalam pelatihan ini, peserta dibimbing menghitung rasio keparahan kecelakaan sesuai formula Kepmenaker dan standar internasional ANSI. Peserta diajarkan mengelola data total jam kerja selamat (safe man-hours), mengkalkulasikan hari kerja hilang, dan menginterpretasikan grafik tren insiden.",
          "Di samping itu, peserta menyusun indikator proaktif yang relevan, seperti rasio temuan bahaya yang diselesaikan tepat waktu, persentase keikutsertaan simulasi darurat, dan indeks keterlibatan manajemen dalam inspeksi lintas lantai kerja."
        ],
        bullets: [
          "Kalkulasi eksak rumus Frequency Rate (FR) dan Severity Rate (SR) standar Kemnaker RI",
          "Penyusunan Scorecard K3 per departemen untuk menumbuhkan akuntabilitas manajer divisi",
          "Pembuatan grafik analitik visual yang mudah dipahami oleh direksi non-HSE",
          "Pemanfaatan data kinerja keselamatan sebagai dasar perbaikan berkelanjutan SMK3"
        ]
      },
      {
        heading: "Dashboard Siap Pakai untuk Manajemen Review",
        paragraphs: [
          "Peserta membawa pulang file spreadsheet dashboard analitik keselamatan lengkap dengan formula otomatis yang siap diintegrasikan dengan sistem pencatatan data internal perusahaan."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan KPI & Leading-Lagging Indicator K3?",
        answer: "Biaya pelatihan adalah Rp 2.750.000 per peserta untuk program 1 hari (8 JP) termasuk master file dashboard analitik dan sertifikat resmi."
      },
      {
        question: "Apakah peserta akan belajar menghitung rumus FR dan SR secara langsung?",
        answer: "Ya, setiap peserta akan mengerjakan latihan studi kasus perhitungan jam kerja orang (man-hours), tingkat frekuensi cedera (FR), dan tingkat keparahan (SR) dengan angka riil."
      },
      {
        question: "Apakah materi ini cocok untuk manajer operasional non-HSE?",
        answer: "Sangat cocok. Pelatihan ini justru membantu pimpinan departemen operasional, logistik, dan pabrik memahami kontribusi divisi mereka terhadap performa keselamatan perusahaan."
      }
    ],
    related: [
      "pelatihan/safety-leadership-eksekutif",
      "pelatihan/safety-accountability-pengawas",
      "pelatihan/implementasi-smk3-pp-50",
      "pelatihan/auditor-smk3",
      "profesi/ahli-k3-umum",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/pp-50-2012-penerapan-smk3"
    ],
    sources: [
      {
        label: "PP No. 50 Tahun 2012 tentang Penerapan SMK3 (Kriteria 7.1 Pemantauan dan Pengukuran Kinerja)",
        url: "https://jdih.kemnaker.go.id/katalog/pp-50-2012",
        publisher: "Kementerian Ketenagakerjaan RI"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan kpi leading lagging indicator kinerja k3 biaya jadwal materi dashboard k3",
    primaryKeyword: "pelatihan kpi & leading-lagging indicator kinerja k3",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan kpi dan leading lagging indicator kinerja k3",
    intentType: "commercial",
    parentTopic: "Pelatihan Spesialis, Leadership & Sektoral Terapan",
    cannibalizationGroup: "pelatihan-kpi-k3",
    contentKind: "program",
    primaryCtaText: "Daftar Workshop KPI K3",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Dashboard HSE",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/asesmen-individu-dengan-pengisian-dokumen-3.webp",
      alt: "Pemaparan dashboard analitik leading dan lagging indicator performa K3 di hadapan manajemen"
    },
    gallery: [
      {
        src: "/images/content/asesmen-individu-dengan-pengisian-dokumen-3.webp",
        alt: "Perhitungan rasio statistik frekuensi dan keparahan kecelakaan kerja"
      },
      {
        src: "/images/content/instruktur-memandu-sesi-kelas-3.webp",
        alt: "Diskusi penetapan target KPI keselamatan kerja proaktif antardepartemen"
      }
    ]
  },
  {
    slug: "k3-pelaporan-wajib-naker",
    title: "Pelatihan Tata Cara Pelaporan K3 & e-K3 Kemnaker RI",
    metaTitle: "Pelatihan Pelaporan K3 & e-K3 Kemnaker RI | Jadwal, Biaya & Sertifikasi 8 JP",
    description: "Pelatihan Tata Cara Pelaporan K3 & e-K3 Kemnaker RI durasi 8 JP (1 Hari). Biaya Rp 2.750.000, panduan tuntas lapor P2K3 triwulan, pelaporan kecelakaan kerja Permenaker 03/1998, dan portal Teman K3 bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan Tata Cara Pelaporan K3 & e-K3 Kemnaker RI adalah program pembinaan administratif 8 JP (1 Hari Kerja) yang membimbing personil HSE dan administrasi HRD memenuhi seluruh kewajiban pelaporan normatif ketenagakerjaan secara digital maupun manual. Peserta dipandu mengoperasikan portal Teman K3 Kemnaker RI, menyusun Laporan Triwulan P2K3, memproses Berita Acara Kecelakaan Kerja (Formulir 3 KK2 & KK3 Permenaker 03/1998), serta mengurus perpanjangan lisensi personil dan sertifikat riksa uji alat K3.",
    highlights: [
      "Durasi Pembinaan: 8 JP (1 Hari Kerja Intensif)",
      "Landasan Hukum: Permenaker No. 04/1987, Permenaker No. 03/1998 & UU No. 1 Tahun 1970",
      "Investasi Resmi: Rp 2.750.000 / Peserta (Panduan Teknis Operasional Portal Teman K3)",
      "Output: Sertifikat Kompetensi Administrasi & Pelaporan K3 Kemnaker RI"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi Administrasi & Regulasi K3 Kemnaker",
      duration: "8 JP (1 Hari Kerja)",
      method: "Blended / Tatap Muka Interaktif (Praktik Input Portal e-K3, Simulasi Berkas Disnaker & Evaluasi)",
      legalBasis: "Permenaker No. 04/1987 (Pasal 12), Permenaker No. 03/1998, Permenaker No. 02/1992 & UU 1/1970",
      targetAudience: [
        "Sekretaris & Anggota Komite P2K3 Perusahaan",
        "Staff HSE Administrator, Compliance Officer & HRD Officer",
        "Ahli K3 Umum yang bertugas mengelola kepatuhan pelaporan legalitas",
        "Pimpinan Bagian General Affairs (GA) dan Hubungan Industrial"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK atau D3/S1",
        "Disarankan membawa laptop untuk praktik simulasi formulir digital",
        "Scan KTP / Kartu Identitas Pegawai",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Pelatihan Tata Cara Pelaporan K3 & e-K3 Kemnaker RI dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Kompetensi Administrator Pelaporan K3 Resmi",
        "Master Bundle Dokumen Template Format Laporan Triwulan P2K3, Format Lapor Kecelakaan 3A/3B/3C, dan Manual Registrasi Teman K3"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Regulasi Kewajiban Pelaporan K3 & Sanksi Pelanggaran Ketenagakerjaan",
          topics: [
            "Kewajiban Pelaporan Triwulan Panitia Pembina K3 (P2K3) Sesuai Permenaker 04/1987",
            "Kewajiban Pelaporan Kecelakaan Kerja 2x24 Jam Sesuai Permenaker 03/1998 & Alur Klaim BPJS Ketenagakerjaan",
            "Konsekuensi Hukum & Sanksi Pidana Kurungan / Denda atas Keterlambatan Laporan Norma K3"
          ],
          hours: "2 JP"
        },
        {
          module: "Modul 02: Penyusunan Laporan Triwulan P2K3 & Format Berkas Fisik Disnaker",
          topics: [
            "Struktur Baku Laporan Triwulan P2K3: Profil Perusahaan, Notulen Rapat Bulanan, Data Kecelakaan Kerja, Realisasi Program Kerja",
            "Teknik Analisis Statistik Cedera: Menghitung FR, SR, dan Safe Man-Hours Triwulanan",
            "Mekanisme Pengesahan, Penyerahan Tanda Terima ke Kantor Disnaker Provinsi/Kabupaten/Kota"
          ],
          hours: "3 JP"
        },
        {
          module: "Modul 03: Navigasi Portal Teman K3 Kemnaker RI & e-K3 Terpadu",
          topics: [
            "Panduan Pembuatan Akun & Manajemen Profil Perusahaan di Portal Teman K3 Kemnaker RI",
            "Prosedur Perpanjangan Surat Keputusan Penunjukan (SKP) & Lisensi Ahli K3 / Operator / Petugas",
            "Pendaftaran Pengujian Alat K3 (Riksa Uji Pesawat Angkat, Bejana Tekan, Kelistrikan) Melalui Kanal Resmi",
            "Simulasi Pelaporan Kecelakaan Kerja Online Melalui Kanal e-K3 Terpadu"
          ],
          hours: "3 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 2.750.000 per peserta. Termasuk panduan langkah demi langkah penggunaan portal Teman K3, paket template laporan P2K3 word/excel yang siap diisi, sertifikat kelulusan kompetensi, serta snack/lunch kelas tatap muka."
    },
    blocks: [
      {
        heading: "Urgensi Pemenuhan Kewajiban Pelaporan Norma K3 ke Pemerintah",
        paragraphs: [
          "Banyak perusahaan yang telah menerapkan berbagai inisiatif K3 di lapangan namun abai terhadap kewajiban pelaporan administratif ke Dinas Tenaga Kerja setempat dan Kemnaker RI. Akibatnya, saat dilakukan pengawasan ketenagakerjaan berkala atau ketika terjadi kecelakaan kerja mendadak, perusahaan dapat dikenakan sanksi administratif berat hingga pembekuan izin operasional karena dianggap tidak mematuhi norma K3.",
          "Pelatihan Tata Cara Pelaporan K3 & e-K3 Kemnaker RI memastikan bahwa setiap staf kepatuhan dan sekretariat P2K3 memahami jadwal, alur birokrasi, dan format dokumen yang diakui secara sah oleh pengawas ketenagakerjaan pemerintah."
        ]
      },
      {
        heading: "Migrasi ke Sistem Digital Portal Teman K3 Kemnaker",
        paragraphs: [
          "Kementerian Ketenagakerjaan RI kini telah memigrasikan sebagian besar layanan K3 ke ekosistem digital terpadu melalui platform Teman K3 (temank3.kemnaker.go.id). Proses verifikasi personil K3, pengajuan perpanjangan lisensi kewenangan, hingga pelaporan dokumen kini wajib diunggah secara online.",
          "Peserta dipandu secara teknis menavigasi menu-menu portal, menghindari kegagalan upload berkas, memahami persyaratan berkas legalitas, serta mempercepat proses verifikasi oleh pengawas ketenagakerjaan di tingkat pusat maupun daerah."
        ],
        bullets: [
          "Tata cara pengisian Formulir Bentuk 3 KK2 (Laporan Kecelakaan Kerja Tahap I) dalam 2x24 jam",
          "Penyusunan Formulir Bentuk 3 KK3 (Laporan Penetapan Akibat Kecelakaan Kerja Tahap II)",
          "Sinkronisasi data pelaporan Disnaker dengan klaim Jaminan Kecelakaan Kerja (JKK) BPJS Ketenagakerjaan",
          "Mekanisme pengarsipan bukti tanda terima pelaporan fisik dan digital untuk kebutuhan audit SMK3"
        ]
      },
      {
        heading: "Bimbingan Praktis Tanpa Kebingungan Birokrasi",
        paragraphs: [
          "Instruktur pelatihan membimbing peserta menyelesaikan kendala birokrasi umum, seperti perpanjangan SKP Ahli K3 yang mendekati masa kedaluwarsa 3 tahun, pergantian pengurus P2K3 antar-periode, dan registrasi suket riksa uji peralatan kerja baru."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan Tata Cara Pelaporan K3 & e-K3?",
        answer: "Biaya pelatihan adalah Rp 2.750.000 per peserta untuk program 1 hari (8 JP) lengkap dengan toolkit panduan digital dan sertifikasi resmi."
      },
      {
        question: "Kapan batas waktu pelaporan triwulan P2K3 ke Disnaker?",
        answer: "Sesuai Permenaker No. 04/1987 Pasal 12, laporan P2K3 wajib disampaikan setiap 3 (tiga) bulan sekali (Triwulan I di bulan April, Triwulan II di bulan Juli, Triwulan III di bulan Oktober, dan Triwulan IV di bulan Januari tahun berikutnya)."
      },
      {
        question: "Apakah materi mencakup cara pengurusan perpanjangan SKP Ahli K3 yang sudah mati?",
        answer: "Ya, modul membedah persyaratan administratif dan alur teknis permohonan perpanjangan SKP & Lisensi Ahli K3 Umum maupun Spesialis melalui portal resmi Kemnaker RI."
      }
    ],
    related: [
      "pelatihan/pembinaan-p2k3",
      "pelatihan/ahli-k3-umum",
      "pelatihan/investigasi-insiden-k3",
      "pelatihan/implementasi-smk3-pp-50",
      "profesi/ahli-k3-umum",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/permenaker-04-1987-panitia-pembina-k3-p2k3",
      "regulasi-k3/permenaker-03-1998-tata-cara-pelaporan-pemeriksaan-kecelakaan-kerja"
    ],
    sources: [
      {
        label: "Permenaker No. 04/1987 tentang Panitia Pembina Keselamatan dan Kesehatan Kerja (P2K3)",
        url: "https://jdih.kemnaker.go.id/katalog/permenaker-04-1987",
        publisher: "Kementerian Ketenagakerjaan RI"
      },
      {
        label: "Permenaker No. 03/1998 tentang Tata Cara Pelaporan dan Pemeriksaan Kecelakaan Kerja",
        url: "https://jdih.kemnaker.go.id/katalog/permenaker-03-1998",
        publisher: "Kementerian Ketenagakerjaan RI"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan tata cara pelaporan k3 dan ek3 kemnaker ri biaya jadwal materi p2k3 teman k3",
    primaryKeyword: "pelatihan tata cara pelaporan k3 & e-k3 kemnaker ri",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan tata cara pelaporan k3 dan ek3 kemnaker ri",
    intentType: "commercial",
    parentTopic: "Pelatihan Spesialis, Leadership & Sektoral Terapan",
    cannibalizationGroup: "pelatihan-administrasi-pelaporan-k3",
    contentKind: "program",
    primaryCtaText: "Daftar Kelas Pelaporan K3 & e-K3",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Berkas P2K3 Disnaker",
    secondaryCtaIntent: "syarat",
    image: {
      src: "/images/content/asesmen-individu-peserta-di-ruang-kelas-1.webp",
      alt: "Peserta pelatihan mempraktikkan pengisian formulir pelaporan K3 triwulan dan portal e-K3 Kemnaker"
    },
    gallery: [
      {
        src: "/images/content/asesmen-individu-peserta-di-ruang-kelas-1.webp",
        alt: "Praktik pengoperasian portal Teman K3 dan verifikasi berkas legalitas ketenagakerjaan"
      },
      {
        src: "/images/content/instruktur-menjelaskan-materi-di-kelas-kecil-1.webp",
        alt: "Pemaparan alur pelaporan kecelakaan kerja 2x24 jam sesuai Permenaker 03/1998"
      }
    ]
  },
  {
    slug: "komunikasi-k3-toolbox",
    title: "Pelatihan Komunikasi Efektif K3 & Pemanduan Safety Toolbox Meeting",
    metaTitle: "Pelatihan Komunikasi K3 & Safety Toolbox Meeting | Biaya, Jadwal 8 JP",
    description: "Pelatihan Komunikasi Efektif K3 & Pemanduan Safety Toolbox Meeting durasi 8 JP (1 Hari). Biaya Rp 2.750.000, kuasai public speaking HSE, intervensi bahaya persuasif, dan teknik memimpin P5M bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan Komunikasi Efektif K3 & Pemanduan Safety Toolbox Meeting adalah program pembinaan keterampilan interpersonal 8 JP (1 Hari Kerja) yang dirancang untuk memutus kebuntuan komunikasi keselamatan kerja. Peserta dilatih teknik public speaking terapan HSE, cara menyampaikan pesan bahaya tanpa menimbulkan defensif pada pekerja, penyusunan materi Daily Toolbox Talk / P5M yang menggugah, serta teknik memimpin diskusi interaktif agar pekerja aktif menyuarakan potensi bahaya di sekitarnya.",
    highlights: [
      "Durasi Pembinaan: 8 JP (1 Hari Kerja Intensif)",
      "Landasan Hukum: PP No. 50 Tahun 2012 Kriteria 5.3 & Standar Komunikasi Efektif K3",
      "Investasi Resmi: Rp 2.750.000 / Peserta (Praktik Roleplay Memimpin Safety Briefing)",
      "Output: Sertifikat Kompetensi Komunikasi K3 & Toolkit 50 Topik Safety Talk Siap Pakai"
    ],
    courseDetails: {
      level: "Sertifikasi Kompetensi Interpersonal & Supervisory Safety Talk",
      duration: "8 JP (1 Hari Kerja)",
      method: "Blended / Tatap Muka Praktik Penuh (Roleplay Pemanduan P5M, Simulasi Intervensi Bahaya & Evaluasi Feedback)",
      legalBasis: "PP No. 50 Tahun 2012 Kriteria 5.3, UU No. 1 Tahun 1970 & Standar K3 Terapan",
      targetAudience: [
        "Safety Officer, HSE Inspector & Field Safety Coordinator",
        "Mandor, Foreman, Section Head & Supervisor Lini Depan",
        "Anggota Komite P2K3 dan Promotor Program Budaya K3 Perusahaan",
        "Staff HRD & Instruktur Pelatihan Internal Perusahaan"
      ],
      prerequisites: [
        "Pendidikan minimal SMA/SMK atau yang sering berhadapan dengan forum pekerja",
        "Scan KTP / Tanda Pengenal resmi",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan Komunikasi Efektif K3 & Pemanduan Safety Toolbox Meeting dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Internal Safety Talk Facilitator",
        "Master Kit 50+ Lembar Panduan Topik Toolbox Meeting (Tema Kebakaran, Ketinggian, Ergonomi, Kelistrikan, dan APD)"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Psikologi Komunikasi Keselamatan & Hambatan di Lapangan",
          topics: [
            "Mengapa Pesan Keselamatan Sering Diabaikan Pekerja: Faktor Kejenuhan, Bahasa Terlalu Kaku & Sikap Defensif",
            "Prinsip Komunikasi Asertif vs Agresif vs Pasif dalam Penegakan SOP K3",
            "Membangun Kepercayaan (Trust-Building) Antara Pengawas Keselamatan dan Tim Lapangan"
          ],
          hours: "2 JP"
        },
        {
          module: "Modul 02: Anatomi 10 Menit Safety Toolbox Meeting / P5M yang Berdaya Pikat",
          topics: [
            "Struktur 3 Bagian P5M: Pembuka yang Relevan, Inti Pesan Bahaya Spesifik Hari Ini, dan Penutup Komitmen Bersama",
            "Teknik Menggunakan Cerita Singkat (Storytelling), Fakta Insiden Terkini, dan Alat Peraga Rusak",
            "Mengatasi Peserta yang Pasif, Sering Menginterupsi, atau Bermain Ponsel saat Briefing"
          ],
          hours: "3 JP"
        },
        {
          module: "Modul 03: Praktik Roleplay Public Speaking HSE & Feedback Langsung",
          topics: [
            "Latihan Pengendalian Vokal, Kontak Mata, Bahasa Tubuh (Body Language) & Penggunaan Mikrofon Lapangan",
            "Simulasi Intervensi Aman: Menegur Pekerja yang Melepas Rompi / Kacamata Pelindung Tanpa Memicu Kemarahan",
            "Sesi Praktik Tampil Mandiri Memimpin Safety Talk dan Evaluasi Kritik Membangun dari Instruktur"
          ],
          hours: "3 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 2.750.000 per peserta. Termasuk buku kumpulan 50 tema materi safety talk siap saji, modul pelatihan praktis, sertifikat kelulusan kompetensi, serta makan siang dan rehat kopi kelas tatap muka."
    },
    blocks: [
      {
        heading: "Mengapa Keterampilan Komunikasi K3 Menjadi Penentu Perubahan Perilaku?",
        paragraphs: [
          "Banyak praktisi K3 memiliki pemahaman teknis regulasi yang mendalam, namun gagal menyampaikan pesannya ke pekerja lapangan karena gaya komunikasi yang terlalu menggurui, kaku, atau membosankan. Ketika briefing keselamatan harian (Toolbox Meeting) dipandang sekadar formalitas pengisi absen, pesan peringatan bahaya tidak akan meresap ke dalam kesadaran pekerja.",
          "Pelatihan Komunikasi Efektif K3 & Pemanduan Safety Toolbox Meeting melatih para pengawas dan safety officer menjadi komunikator yang memikat, mampu menyederhanakan konsep bahaya rumit menjadi instruksi yang menggugah motivasi kerja selamat."
        ]
      },
      {
        heading: "Menguasai Teknik Intervensi Bahaya Secara Persuasif",
        paragraphs: [
          "Menegur pekerja senior yang melanggar prosedur kerja memerlukan keahlian komunikasi khusus. Jika ditegur dengan cara mempermalukan di hadapan rekan-rekannya, pekerja cenderung melawan atau mengulanginya di belakang pengawas. Pelatihan ini melatih teknik 'Feedback Positif 3 Langkah': apresiasi peran kerja, tunjukkan deviasi bahaya secara obyektif, dan ajak pekerja menyepakati cara kerja yang lebih aman.",
          "Di samping itu, para peserta mempraktikkan langsung pemanduan P5M 10 menit di hadapan kelas, menerima rekaman evaluasi bahasa tubuh, intonasi suara, serta kejelasan artikulasi pesan mitigasi bahaya."
        ],
        bullets: [
          "Penyusunan alur cerita keselamatan yang mengaitkan kerja selamat dengan kesejahteraan keluarga di rumah",
          "Teknik ice breaking singkat yang mencairkan suasana pagi hari sebelum briefing kerja",
          "Penguasaan teknik bertanya terbuka untuk memancing pekerja mengungkapkan keluhan keselamatan",
          "Tata cara penutupan safety meeting dengan yel-yel keselamatan yang menyulut semangat tim"
        ]
      },
      {
        heading: "Bekal 50 Materi Siap Pakai Sepanjang Tahun",
        paragraphs: [
          "Peserta tidak perlu bingung mencari topik setiap pagi karena mereka dibekali buku pegangan berisi 50 materi safety talk yang bervariasi, lengkap dengan poin pengantar, ilustrasi bahaya, dan pertanyaan diskusi harian."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan Komunikasi K3 & Pemanduan Safety Toolbox Meeting?",
        answer: "Biaya pelatihan adalah Rp 2.750.000 per peserta untuk program intensif 1 hari (8 JP) lengkap dengan master kit 50 tema safety talk dan sertifikasi kompetensi."
      },
      {
        question: "Apakah peserta akan langsung diminta praktik berbicara di depan kelas?",
        answer: "Ya, lebih dari 50% alokasi waktu digunakan untuk praktik roleplay pemanduan briefing dan simulasi intervensi bahaya dengan umpan balik langsung dari instruktur komunikasi."
      },
      {
        question: "Apakah materi ini cocok untuk supervisor proyek konstruksi?",
        answer: "Sangat cocok. Mandor dan supervisor proyek konstruksi adalah ujung tombak yang memimpin ratusan pekerja setiap pagi, sehingga keterampilan komunikasi ini langsung mendongkrak kepatuhan di area proyek."
      }
    ],
    related: [
      "pelatihan/safety-accountability-pengawas",
      "pelatihan/safety-officer-k3",
      "pelatihan/safety-induction-kontraktor",
      "pelatihan/safety-leadership-eksekutif",
      "profesi/safety-officer",
      "profesi/supervisor-k3",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/pp-50-2012-penerapan-smk3"
    ],
    sources: [
      {
        label: "PP No. 50 Tahun 2012 tentang Penerapan Sistem Manajemen K3 (Kriteria 5.3 Komunikasi)",
        url: "https://jdih.kemnaker.go.id/katalog/pp-50-2012",
        publisher: "Kementerian Ketenagakerjaan RI"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan komunikasi efektif k3 dan pemanduan safety toolbox meeting biaya jadwal materi p5m",
    primaryKeyword: "pelatihan komunikasi efektif k3 & pemanduan safety toolbox meeting",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan komunikasi efektif k3 dan pemanduan safety toolbox meeting",
    intentType: "commercial",
    parentTopic: "Pelatihan Spesialis, Leadership & Sektoral Terapan",
    cannibalizationGroup: "pelatihan-komunikasi-safety-talk",
    contentKind: "program",
    primaryCtaText: "Daftar Workshop Komunikasi K3",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Request In-House Training P5M",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/diskusi-instruktur-dan-peserta-di-ruang-seminar-1.webp",
      alt: "Praktik public speaking keselamatan kerja dan pemanduan safety toolbox meeting di ruang pelatihan"
    },
    gallery: [
      {
        src: "/images/content/diskusi-instruktur-dan-peserta-di-ruang-seminar-1.webp",
        alt: "Instruktur memberikan feedback teknik vokal dan bahasa tubuh dalam safety talk"
      },
      {
        src: "/images/content/briefing-pekerja-beralat-pelindung-di-fasilitas-industri-1.webp",
        alt: "Penerapan pemanduan safety toolbox meeting harian di hadapan regu kerja industri"
      }
    ]
  },
  {
    slug: "manajemen-perubahan-moc-k3",
    title: "Pelatihan Management of Change (MOC) Keselamatan Kerja",
    metaTitle: "Pelatihan Management of Change (MOC) K3 | Jadwal, Biaya & Sertifikasi 16 JP",
    description: "Pelatihan Management of Change (MOC) Keselamatan Kerja durasi 16 JP (2 Hari). Biaya Rp 3.750.000, kuasai tata kelola perubahan fasilitas, modifikasi mesin, perubahan personel, dan mitigasi risiko proses bersama PT Kreasi Ultimate Berjaya.",
    answer: "Pelatihan Management of Change (MOC) Keselamatan Kerja adalah program pembinaan manajerial proses 16 JP (2 Hari Kerja) untuk mengendalikan risiko yang timbul akibat modifikasi fasilitas industri, penggantian spesifikasi material kimia, perubahan susunan organisasi kunci, maupun perombakan alur teknologi produksi. Peserta dilatih merancang alur prosedur MOC, melakukan kajian dampak bahaya (Process Hazard Analysis / HAZOP pre-MOC), verifikasi Pre-Startup Safety Review (PSSR), serta memastikan seluruh izin dan dokumen operasional diperbarui sebelum modifikasi dioperasikan.",
    highlights: [
      "Durasi Pembinaan: 16 JP (2 Hari Kerja Intensif)",
      "Landasan Hukum: PP No. 50 Tahun 2012 Kriteria 6.1.4, OSHA 1910.119 (PSM) & ISO 45001 Klausul 8.1.3",
      "Investasi Resmi: Rp 3.750.000 / Peserta (Praktik Merancang Formulir & Alur MOC Mandiri)",
      "Output: Sertifikat Kompetensi Management of Change K3 & Panduan Prosedur MOC Siap Pakai"
    ],
    courseDetails: {
      level: "Sertifikasi Manajerial Keselamatan Proses & Tata Kelola Perubahan",
      duration: "16 JP (2 Hari Kerja)",
      method: "Blended / Tatap Muka Interaktif (Studi Kasus Kegagalan Modifikasi, Workshop Alur MOC, Simulasi PSSR & Evaluasi)",
      legalBasis: "PP No. 50 Tahun 2012 Kriteria 6.1.4, ISO 45001:2018 Klausul 8.1.3 & Pedoman Keselamatan Proses Kimia",
      targetAudience: [
        "Plant Manager, Engineering Manager & Operations Superintendent",
        "HSE Manager, Safety Engineer & Process Safety Specialist",
        "Maintenance Engineer, Project Engineer & Bagian Modifikasi Fasilitas",
        "Lead Auditor SMK3 dan Anggota Tim Review Teknis Perusahaan"
      ],
      prerequisites: [
        "Pendidikan minimal D3 atau S1 bidang Teknik, Sains, atau berpengalaman di bidang fasilitas proses",
        "Scan KTP / Kartu Identitas Pegawai",
        "Surat Rekomendasi Perusahaan (jika utusan perusahaan)",
        "Pas foto formal 3x4 latar belakang merah (2 lembar)"
      ],
      certificationOutput: [
        "Sertifikat Kompetensi Pelatihan Management of Change (MOC) Keselamatan Kerja dari PT Kreasi Ultimate Berjaya",
        "Kartu Lisensi Kompetensi MOC & Pre-Startup Safety Reviewer",
        "Master Toolkit Dokumen MOC: Formulir Pengajuan Perubahan, Matriks Otoritas Persetujuan, Checklist PSSR, dan Logbook Registrasi Perubahan"
      ],
      syllabusModules: [
        {
          module: "Modul 01: Konsep Dasar Keselamatan Proses & Mengapa Perubahan Memicu Bencana",
          topics: [
            "Bedah Kasus Bencana Industri Global yang Dipicu Perubahan Tanpa Kajian (Flixborough, Bhopal, Texas City)",
            "Kategori Perubahan: Perubahan Fasilitas Fisik, Perubahan Bahan Kimia/Bahan Baku, Perubahan Teknologi/Software, dan Perubahan Organisasi Personel",
            "Membedakan Penggantian Sejenis (Replacement in Kind / RIK) vs Perubahan Nyata (Modification)"
          ],
          hours: "4 JP"
        },
        {
          module: "Modul 02: Prosedur Alur Kerja MOC & Kajian Dampak Bahaya (Risk Assessment MOC)",
          topics: [
            "Tahapan Baku MOC: Pengajuan Permohonan, Klasifikasi Dampak, Peninjauan Multidisiplin (HSE, Eng, Ops, Maint)",
            "Pelaksanaan Hazard Identification for MOC: Metodologi What-If Analysis, Checklist Review, dan Mini-HAZOP",
            "Pembaruan Gambar Teknis (P&ID), Dokumen SOP, Pengaturan Alarm, dan Pembaruan Data HIRADC"
          ],
          hours: "6 JP"
        },
        {
          module: "Modul 03: Pre-Startup Safety Review (PSSR) & Penutupan Dokumen MOC",
          topics: [
            "Prosedur Pemeriksaan Keselamatan Pra-Start-Up (PSSR) Sebelum Fasilitas Baru Dialiri Daya / Bahan Kimia",
            "Penyusunan Checklist PSSR: Konstruksi Sesuai Desain, Sistem Proteksi Aktif, Pelatihan Operator Selesai",
            "Mekanisme Otoritas Persetujuan Akhir, Uji Coba Sementara (Temporary MOC), dan Pengarsipan Status Closed"
          ],
          hours: "6 JP"
        }
      ],
      priceInfo: "Investasi resmi Rp 3.750.000 per peserta. Termasuk toolkit master formulir MOC, checklist PSSR terverifikasi, modul pelatihan eksklusif, sertifikat kelulusan kompetensi, serta konsumsi penuh kelas tatap muka."
    },
    blocks: [
      {
        heading: "Mengapa Perubahan Tanpa Prosedur MOC Sering Berakhir Bencana?",
        paragraphs: [
          "Banyak insiden ledakan pabrik, kebocoran gas beracun, dan kecelakaan fatal tidak disebabkan oleh kondisi operasi normal, melainkan terjadi sesaat setelah adanya modifikasi teknis: mengganti tipe katup (valve) tanpa memeriksa rating tekanan, memodifikasi bypass pipa sementara, mengganti pemasok bahan baku kimia tanpa mengkaji titik nyala baru, atau mutasi personil kunci tanpa serah terima kompetensi yang memadai.",
          "PP No. 50 Tahun 2012 Kriteria 6.1.4 mewajibkan setiap perubahan operasional dan sarana kerja ditinjau ulang potensi dampaknya terhadap keselamatan. Pelatihan Management of Change (MOC) Keselamatan Kerja memastikan setiap usulan modifikasi melalui saringan peninjauan teknis yang ketat sebelum diizinkan beroperasi."
        ]
      },
      {
        heading: "Penguasaan Siklus Lengkap: Dari Permohonan Hingga PSSR",
        paragraphs: [
          "Peserta dilatih membangun tata kelola MOC yang komprehensif mulai dari formulir pengajuan inisiasi, verifikasi apakah usulan tergolong Replacement-in-Kind (RIK) atau Perubahan Modifikasi, hingga pelaksanaan kajian bahaya interdisipliner.",
          "Sorotan utama pelatihan ini adalah pelaksanaan Pre-Startup Safety Review (PSSR). Sebelum tombol start ditekan pada peralatan yang baru dirombak, tim MOC harus memastikan bahwa konstruksi telah sesuai spesifikasi rekayasa, alarm proteksi telah dikalibrasi, dokumen SOP telah diperbarui, dan seluruh operator shift telah dilatih mengenai prosedur baru tersebut."
        ],
        bullets: [
          "Pengelolaan MOC Sementara (Temporary Change) dengan batas kedaluwarsa waktu otomatis",
          "Kriteria persetujuan bertingkat (Authorization Matrix) berdasarkan tingkat risiko perubahan",
          "Pembaruan dokumen kendali proses: P&ID, Operating Manual, Fire Protection Matrix, dan SDS",
          "Teknik verifikasi fisik lapangan saat inspeksi Pre-Startup Safety Review (PSSR)"
        ]
      },
      {
        heading: "Kepatuhan Terhadap Standar Manajemen K3 Kelas Dunia",
        paragraphs: [
          "Penerapan prosedur MOC yang solid tidak hanya menghindarkan fasilitas dari potensi kerugian aset miliaran rupiah, tetapi juga merupakan prasyarat mutlak dalam audit SMK3 PP 50/2012 kriteria lanjutan dan sertifikasi ISO 45001:2018."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa biaya resmi pelatihan Management of Change (MOC) Keselamatan Kerja?",
        answer: "Biaya pelatihan adalah Rp 3.750.000 per peserta untuk program komprehensif 2 hari (16 JP) lengkap dengan master template prosedur MOC, checklist PSSR, dan sertifikat kompetensi."
      },
      {
        question: "Apakah materi ini hanya berlaku untuk pabrik petrokimia atau industri lain juga?",
        answer: "Meskipun berasal dari disiplin Process Safety Management (PSM), prinsip MOC saat ini wajib diterapkan di semua sektor industri: manufaktur otomotif, makanan minuman, pertambangan, semen, hingga fasilitas data center dan utilitas gedung bertingkat."
      },
      {
        question: "Apa perbedaan antara Replacement in Kind (RIK) dan Modification?",
        answer: "Replacement in Kind adalah penggantian komponen yang identik persis secara spesifikasi, ukuran, material, dan fungsi sehingga tidak memerlukan kajian MOC penuh. Sedangkan Modification adalah setiap perubahan spesifikasi, bahan, tata letak, atau logika kendali yang berpotensi menimbulkan bahaya baru."
      }
    ],
    related: [
      "pelatihan/manajemen-risiko-k3",
      "pelatihan/penyusunan-sop-k3",
      "pelatihan/implementasi-smk3-pp-50",
      "pelatihan/auditor-smk3",
      "profesi/ahli-k3-umum",
      "panduan/biaya-pelatihan-k3",
      "regulasi-k3/pp-50-2012-penerapan-smk3"
    ],
    sources: [
      {
        label: "PP No. 50 Tahun 2012 tentang Penerapan Sistem Manajemen K3 (Kriteria 6.1.4 Pengendalian Operasi)",
        url: "https://jdih.kemnaker.go.id/katalog/pp-50-2012",
        publisher: "Kementerian Ketenagakerjaan RI"
      },
      {
        label: "ISO 45001:2018 Occupational Health and Safety Management Systems (Klausul 8.1.3 Management of Change)",
        url: "https://www.iso.org/standard/63787.html",
        publisher: "International Organization for Standardization"
      }
    ],
    status: "published",
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-10",
    indexable: true,
    intent: "pelatihan management of change moc keselamatan kerja biaya jadwal materi pssr",
    primaryKeyword: "pelatihan management of change (moc) keselamatan kerja",
    searchIntent: "biaya jadwal materi dan sertifikat pelatihan management of change moc keselamatan kerja",
    intentType: "commercial",
    parentTopic: "Pelatihan Spesialis, Leadership & Sektoral Terapan",
    cannibalizationGroup: "pelatihan-moc-k3",
    contentKind: "program",
    primaryCtaText: "Daftar Workshop MOC Keselamatan Kerja",
    primaryCtaIntent: "jadwal",
    secondaryCtaText: "Konsultasi Sistem MOC Pabrik",
    secondaryCtaIntent: "perusahaan",
    image: {
      src: "/images/content/instruktur-menyampaikan-materi-kepada-peserta-1.webp",
      alt: "Pemaparan alur verifikasi Management of Change (MOC) dan Pre-Startup Safety Review di depan engineer industri"
    },
    gallery: [
      {
        src: "/images/content/instruktur-menyampaikan-materi-kepada-peserta-1.webp",
        alt: "Sesi kajian bahaya modifikasi teknis fasilitas industri dan pembaruan dokumen P&ID"
      },
      {
        src: "/images/content/asesmen-individu-peserta-di-ruang-kelas-2.webp",
        alt: "Simulasi evaluasi dokumen Pre-Startup Safety Review (PSSR) sebelum commissioning peralatan baru"
      }
    ]
  }
];

// Write all 10 files
for (const p of batch3Programs) {
  const filePath = path.join('src', 'content', 'pelatihan', `${p.slug}.ts`);
  const fileContent = `import { type ContentRecord } from '../../lib/content-types';

export const record: ContentRecord = ${JSON.stringify(p, null, 2)};
export default record;
`;
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`✓ Successfully wrote: ${p.slug}`);
}

console.log('Batch 3 (Supervisory, Measurement, Field Safety & Process Governance) Complete: 10 files written.');

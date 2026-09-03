import { ContentRecordInput } from './build-inventory';
import { officialSources, SourceItem } from './sources';

interface ProgramSeed {
  slug: string;
  title: string;
  duration?: string;
  legal?: string;
  sourceKey?: string;
  targetAudience?: string[];
  outcomes?: string[];
  syllabusModules?: { module: string; topics: string[]; hours: string }[];
  customBlocks?: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  customFaqs?: { question: string; answer: string }[];
}

// 1. DOMAIN KELEMBAGAAN, TATA KELOLA K3 & SMK3 (30 Programs - Fully Differentiated)
const kelembagaanSeeds: ProgramSeed[] = [
  {
    slug: 'ahli-k3-umum',
    title: 'Pelatihan Ahli K3 Umum (Sertifikasi Kemnaker RI)',
    duration: '120 JP (12 Hari Kerja)',
    legal: 'Permenaker No. PER.02/MEN/1992 & UU No. 1 Tahun 1970',
    sourceKey: 'permen02_1992',
    targetAudience: [
      'Calon Sekretaris & Pengurus Komite P2K3 Perusahaan',
      'HSE Manager, Supervisor, dan Officer Lapangan Terapan',
      'Lulusan D3/S1 Teknik, Sains, & Legal Korporat yang Memenuhi Syarat Permenaker 02/1992'
    ],
    outcomes: [
      'Memahami norma hukum keselamatan kerja nasional dan wewenang pengawasan ketenagakerjaan',
      'Mampu menyusun laporan triwulan P2K3 resmi untuk disampaikan ke Dinas Tenaga Kerja Provinsi',
      'Memiliki kewenangan menghentikan pekerjaan berisiko tinggi (Stop Work Authority) jika ditemukan potensi bahaya fatalitas'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Kebijakan Nasional K3 & Perundang-Undangan Ketenagakerjaan',
        topics: [
          'Penelaahan Pokok UU No. 1 Tahun 1970 & UU No. 13 Tahun 2003',
          'Kelembagaan P2K3 & Permenaker No. PER.02/MEN/1992 tentang Penunjukan Ahli K3',
          'Hak, Kewajiban, serta Sanksi Hukum Pengurus Tempat Kerja'
        ],
        hours: '30 JP'
      },
      {
        module: 'Modul 02: Pengawasan K3 Kelistrikan, Konstruksi, Mekanik & Lingkungan Kerja',
        topics: [
          'Pengawasan K3 Pesawat Angkat Angkut (Permenaker 08/2020) & Bejana Tekan (Permenaker 37/2016)',
          'Norma K3 Listrik (Permenaker 12/2015) & Penyalur Petir',
          'Pengujian Lingkungan Kerja (Permenaker 05/2018) & Pengendalian Bahan Kimia Berbahaya'
        ],
        hours: '60 JP'
      },
      {
        module: 'Modul 03: Praktik Kerja Lapangan (PKL) & Seminar Evaluasi Kemnaker RI',
        topics: [
          'Simulasi Inspeksi K3 Lapangan di Facility Plant Mitra',
          'Penyusunan Laporan Praktik Kerja Lapangan & Seminar Kesiapan Penunjukan',
          'Ujian Evaluasi Kelulusan & Uawancara Tim Penguji Kemnaker RI'
        ],
        hours: '30 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Kerangka Hukum & Wewenang Ahli K3 Umum menurut Permenaker 02/1992',
        paragraphs: [
          'Sesuai dengan ketentuan Permenaker No. PER.02/MEN/1992, setiap tempat kerja yang mempekerjakan 100 orang atau lebih, atau memiliki tingkat potensi bahaya tinggi, wajib memiliki sekurang-kurangnya satu orang Ahli K3 Umum yang ditunjuk secara resmi oleh Menteri Ketenagakerjaan RI.',
          'Ahli K3 Umum bertindak sebagai perpanjangan tangan pengawas ketenagakerjaan di internal perusahaan. Personel ini dibekali wewenang hukum untuk memasuki area kerja, memeriksa sarana keselamatan, meminta keterangan teknis, serta menghentikan pekerjaan sementara apabila ditemukan pelanggaran norma keselamatan yang mengancam jiwa pekerja.'
        ],
        bullets: [
          'Menyusun dan mengkoordinasikan program kerja Panitia Pembina K3 (P2K3)',
          'Melakukan inspeksi berkala terhadap kelaikan mesin, pesawat uap, bejana tekan, dan instalasi listrik',
          'Menyusun laporan triwulan pelaksanaan K3 perusahaan untuk dikirimkan ke Disnaker Provinsi',
          'Memimpin investigasi awal kecelakaan kerja dan merekomendasikan tindakan pencegahan terstruktur'
        ]
      },
      {
        heading: 'Persyaratan Kualifikasi Peserta & Tata Cara Penunjukan SKP Kemnaker RI',
        paragraphs: [
          'Untuk mengikuti pembinaan calon Ahli K3 Umum, peserta wajib memenuhi kualifikasi pendidikan minimal D3 atau S1 dari seluruh jurusan, disertai surat penugasan resmi dari manajemen perusahaan pengutus.',
          'Setelah menyelesaikan seluruh silabus 120 JP dan dinyatakan lulus oleh tim penguji Kemnaker RI, peserta akan mendapatkan Sertifikat Pembinaan, Surat Keputusan Penunjukan (SKP) Ahli K3, dan Kartu Tanda Kewenangan (Lisensi K3) berstatus resmi yang berlaku selama 3 (tiga) tahun.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Apakah lulusan SMA/SMK sederajat bisa mendaftar pelatihan Ahli K3 Umum?',
        answer: 'Sesuai ketentuan Pasal 3 Permenaker 02/1992, persyaratkan pendidikan minimal untuk penunjukan Ahli K3 Umum adalah D3 atau S1. Bagi lulusan SMA/SMK, dapat mendaftar pada skema Safety Officer Lapangan atau Teknisi K3 Spesialis.'
      },
      {
        question: 'Berapa lama masa berlaku SKP Ahli K3 Umum dan bagaimana cara perpanjangannya?',
        answer: 'SKP dan Lisensi Ahli K3 Umum berlaku selama 3 tahun. Perpanjangan dapat diajukan melalui PJK3 resmi dengan melampirkan bukti keaktifan laporan triwulan P2K3 dan surat permohonan dari perusahaan.'
      }
    ]
  },
  {
    slug: 'auditor-smk3',
    title: 'Pelatihan Auditor SMK3 (Sertifikasi Kemnaker RI)',
    duration: '40 JP (4 Hari Kerja)',
    legal: 'PP No. 50 Tahun 2012 & Permenaker No. 26 Tahun 2014',
    sourceKey: 'pp50',
    targetAudience: [
      'Ahli K3 Umum / Spesialis yang Akan Diproyeksikan Menjadi Auditor Eksternal SMK3',
      'HSE Manager & Management Representative (MR) Persiapan Sertifikasi Bendera Emas',
      'Konsultan & Praktisi Sistem Manajemen Keselamatan Kerja'
    ],
    outcomes: [
      'Mampu menguasai metodologi penilaian 166 kriteria audit SMK3 berdasarkan Lampiran II PP 50/2012',
      'Memahami mekanisme pembuktian verifikasi bukti objektif saat audit lapangan',
      'Menguasai tata cara penerbitan temuan Ketidaksesuaian (NCR) Kritis, Mayor, dan Minor'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Regulasi Audit SMK3 & Prinsip Penilaian PP 50/2012',
        topics: [
          'Kerangka Hukum PP No. 50 Tahun 2012 & Permenaker No. 26 Tahun 2014',
          'Prinsip Audit Eksternal vs Audit Internal SMK3',
          'Klasifikasi Audit 64, 122, dan 166 Kriteria Pembuktian'
        ],
        hours: '10 JP'
      },
      {
        module: 'Modul 02: Teknik Verifikasi Dokumen & Pengujian Bukti Objektif Lapangan',
        topics: [
          'Verifikasi Elemen 1 Sampai Elemen 12 PP 50/2012',
          'Metodologi Sampling Dokumen, Wawancara Pekerja, & Inspeksi Fisik',
          'Penetapan Temuan Kritis, Ketidaksesuaian Mayor, & Ketidaksesuaian Minor'
        ],
        hours: '20 JP'
      },
      {
        module: 'Modul 03: Penyusunan Laporan Audit & Ujian Kelulusan Kemnaker RI',
        topics: [
          'Simulasi Penyusunan Laporan Audit Resmi Lampiran III PP 50/2012',
          'Rapat Penutupan Audit (Closing Meeting) & Rekomendasi Sertifikasi',
          'Ujian Teori Evaluasi Kelulusan Auditor Sertifikasi Kemnaker'
        ],
        hours: '10 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Standar Audit Sistem Manajemen K3 berdasarkan PP 50/2012 & Permenaker 26/2014',
        paragraphs: [
          'Audit SMK3 adalah pengujian sistematis dan independen terhadap pemenuhan kriteria SMK3 yang meliputi 12 elemen utama sebagaimana diatur dalam Peraturan Pemerintah No. 50 Tahun 2012.',
          'Melalui Permenaker No. 26 Tahun 2014, Pemerintah menetapkan skema sertifikasi Auditor SMK3 resmi guna mencetak tenaga independen yang memiliki kewenangan menilai kelayakan perusahaan dalam memperoleh Penghargaan Bendera Emas (Gold Flag) atau Bendera Perak (Silver Flag).'
        ],
        bullets: [
          'Penilaian Audit Tingkat Awal (64 Kriteria) untuk perusahaan kecil berisiko rendah',
          'Penilaian Audit Tingkat Transisi (122 Kriteria) untuk perusahaan skala menengah',
          'Penilaian Audit Tingkat Lanjutan (166 Kriteria) untuk industri berisiko tinggi dan korporasi besar',
          'Pengategorian Temuan Kritis yang dapat menggagalkan kelulusan sertifikasi secara langsung'
        ]
      },
      {
        heading: 'Syarat Sertifikasi Auditor SMK3 Kemnaker RI',
        paragraphs: [
          'Persyaratan utama untuk mengikuti pelatihan Auditor SMK3 Sertifikasi Kemnaker RI adalah telah memiliki Sertifikat & SKP Ahli K3 Umum Kemnaker RI yang masih berlaku, serta berpengalaman dalam implementasi K3 sekurang-kurangnya 1 (satu) tahun.',
          'Lulusan pembinaan akan terdaftar secara resmi di database Kementerian Ketenagakerjaan RI dan berhak menerima Sertifikat Auditor SMK3 serta Surat Penunjukan resmi.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Apakah peserta yang belum memiliki SKP Ahli K3 Umum bisa mendaftar pelatihan Auditor SMK3?',
        answer: 'Sesuai regulasi Kemnaker RI, prasyarat mutlak untuk mendaftar pelatihan Auditor SMK3 Sertifikasi Kemnaker adalah sudah lulus dan memiliki SKP Ahli K3 Umum.'
      },
      {
        question: 'Berapa persen nilai minimum untuk mendapatkan Penghargaan Bendera Emas PP 50/2012?',
        answer: 'Pencapaian 85% - 100% dari total kriteria audit tanpa ada temuan kategori Kritis atau Mayor berhak mendapatkan Bendera Emas dan Sertifikat Penghargaan dari Menteri Ketenagakerjaan.'
      }
    ]
  },
  {
    slug: 'lead-auditor-smk3',
    title: 'Pelatihan Lead Auditor SMK3 Kemnaker RI',
    duration: '50 JP (5 Hari Kerja)',
    legal: 'PP No. 50 Tahun 2012 & Standar Audit Kemnaker',
    sourceKey: 'pp50',
    targetAudience: [
      'Auditor SMK3 Terdaftar yang Diproyeksikan Menjadi Ketua Tim Audit (Lead Auditor)',
      'Head of Corporate HSE & Quality Assurance Director',
      'Senior Auditor Lembaga Audit Eksternal SMK3 PJK3'
    ],
    outcomes: [
      'Mampu mengarahkan dan memimpin tim auditor dalam eksekusi audit fasilitas industri komersial',
      'Menguasai manajemen konflik audit, klarifikasi temuan perdebatan, dan pembuktian hukum',
      'Mampu menyusun Rencana Audit (Audit Plan) kompleks serta laporan akhir ke Kementerian'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Kepemimpinan Tim Audit & ISO 19011:2018 Guidelines',
        topics: [
          'Peran & Tanggung Jawab Lead Auditor dalam Audit Sistem Manajemen',
          'Penyusunan Rencana Audit (Audit Schedule, Scope, & Resource Allocation)',
          'Teknik Penugasan Anggota Tim Audit & Penyelarasan Persepsi Kriteria'
        ],
        hours: '15 JP'
      },
      {
        module: 'Modul 02: Evaluasi Kompleksitas Kriteria PP 50/2012 & Resolusi Temuan',
        topics: [
          'Evaluasi Kriteria Elemen Khusus (Pembelian, Kontraktor, MOC, Tanggap Darurat)',
          'Teknik Moderasi Perdebatan Temuan antara Auditor dan Auditee',
          'Validasi Kualitas Bukti Objektif & Pengambilan Keputusan Kategori Temuan'
        ],
        hours: '25 JP'
      },
      {
        module: 'Modul 03: Moderasi Rapat Penutupan & Penyusunan Rekomendasi Menteri',
        topics: [
          'Teknik Memimpin Rapat Penutupan (Closing Meeting) Efektif',
          'Penyusunan Laporan Audit Eksternal Baku Lampiran III PP 50/2012',
          'Evaluasi Akhir Kualifikasi Lead Auditor Kemnaker RI'
        ],
        hours: '10 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Peran Strategis Lead Auditor dalam Audit Eksternal SMK3 Nasional',
        paragraphs: [
          'Lead Auditor SMK3 memegang peran kunci sebagai penanggung jawab tertinggi dalam pelaksanaan audit eksternal SMK3 PP 50/2012 yang dilakukan oleh Lembaga Audit PJK3 Resmi.',
          'Selain menguasai 166 kriteria audit secara mendalam, seorang Lead Auditor dituntut memiliki keahlian kepemimpinan (leadership), etika profesi independen, dan kemampuan mediasi hukum ketika menangani temuan ketidaksesuaian kritis di lapangan.'
        ],
        bullets: [
          'Merumuskan matriks alokasi tim auditor berdasarkan latar belakang teknis industri',
          'Menjamin objektivitas dan konsistensi penilaian antar-anggota tim audit',
          'Mewakili Lembaga Audit dalam menyampaikan rekomendasi tingkat kelulusan kepada Direktorat Binwasnaker',
          'Mengevaluasi efektivitas tindakan perbaikan (CAPA) yang diajukan oleh manajemen perusahaan'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Apa perbedaan mendasar antara Auditor SMK3 dan Lead Auditor SMK3?',
        answer: 'Auditor SMK3 bertugas melakukan verifikasi kriteria lapangan di bawah supervisi, sedangkan Lead Auditor bertindak sebagai Ketua Tim yang merancang rencana audit, membagi tugas, memimpin rapat penutupan, dan menandatangani laporan rekomendasi akhir.'
      }
    ]
  },
  {
    slug: 'pembinaan-p2k3',
    title: 'Pelatihan Tata Kelola & Sekretariat P2K3 Perusahaan',
    duration: '24 JP (3 Hari Kerja)',
    legal: 'Permenaker No. PER.04/MEN/1987',
    sourceKey: 'permen04_1987',
    targetAudience: [
      'Sekretaris, Ketua, & Anggota Komite P2K3 Perusahaan',
      'Staff HRD, General Affair (GA), dan Perwakilan Serikat Pekerja',
      'Tim HSE Fasilitas Manufaktur, Konstruksi, dan Perkebunan'
    ],
    outcomes: [
      'Mampu mengorganisasi struktur kelembagaan P2K3 sesuai regulasi Permenaker 04/1987',
      'Menguasai penyusunan risalah rapat bulanan dan program kerja tahunan P2K3',
      'Mampu menyusun dan menyampaikan Laporan Triwulan P2K3 resmi ke Dinas Tenaga Kerja'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Regulasi Kelembagaan P2K3 & Pembentukan Komite',
        topics: [
          'Penelaahan Permenaker No. PER.04/MEN/1987 & Pasal 10 UU No. 1 Tahun 1970',
          'Persyaratan Sekretaris P2K3 (Wajib Ahli K3 Umum Penunjukan Kemnaker)',
          'Struktur Organisasi P2K3 & Pengesahan Surat Keputusan Disnaker'
        ],
        hours: '8 JP'
      },
      {
        module: 'Modul 02: Tata Kelola Program Kerja & Pelaksanaan Sidang Pleno P2K3',
        topics: [
          'Penyusunan Rencana Kerja K3 Tahunan & Program Safety Campaign',
          'Penyelenggaraan Rapat Ritin Bulanan P2K3 & Notulensi Risalah Rapat',
          'Analisis Data Kecelakaan Kerja & Pengajuan Rekomendasi K3 ke Direksi'
        ],
        hours: '10 JP'
      },
      {
        module: 'Modul 03: Penyusunan Laporan Triwulan Wajib & Evaluasi Kinerja',
        topics: [
          'Format Baku Laporan Triwulan P2K3 untuk Dinas Tenaga Kerja Provinsi',
          'Pengukuran Efektivitas Rekomendasi P2K3 yang Disetujui Manajemen',
          'Simulasi Penyusunan Dokumen Pelaporan P2K3'
        ],
        hours: '6 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Mandat Hukum Pembentukan P2K3 menurut Permenaker 04/1987',
        paragraphs: [
          'Panitia Pembina Keselamatan dan Kesehatan Kerja (P2K3) adalah badan pembantu di tempat kerja yang merupakan wadah kerjasama antara pengusaha dan pekerja untuk mengembangkan kerjasama saling pengertian dan partisipasi efektif dalam penerapan K3.',
          'Sesuai Pasal 2 Permenaker 04/1987, setiap tempat kerja yang mempekerjakan 50 orang pekerja atau lebih wajib membentuk P2K3. Keanggotaan P2K3 terdiri dari unsur pengusaha dan pekerja, di mana Ketua P2K3 dijabat oleh pimpinan puncak perusahaan dan Sekretaris dijabat oleh Ahli K3.'
        ],
        bullets: [
          'Menghimpun dan mengolah data bahaya serta kecelakaan kerja di tempat kerja',
          'Membantu pimpinan perusahaan menyusun kebijakan dan petunjuk teknis K3',
          'Menyelenggarakan rapat bulanan untuk membahas evaluasi keselamatan operasional',
          'Melaporkan kegiatan P2K3 secara berkala 3 (tiga) bulan sekali ke Disnaker'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Siapa yang wajib menjabat sebagai Sekretaris P2K3 di perusahaan?',
        answer: 'Sesuai Pasal 3 Permenaker 04/1987, Sekretaris P2K3 wajib dijabat oleh Ahli K3 Umum yang telah mendapat surat penunjukan resmi dari Menteri Ketenagakerjaan RI.'
      }
    ]
  },
  {
    slug: 'implementasi-smk3-pp-50',
    title: 'Pelatihan Implementasi 166 Kriteria SMK3 PP 50/2012',
    duration: '30 JP (3 Hari Kerja)',
    legal: 'PP No. 50 Tahun 2012 Lampiran I & II',
    sourceKey: 'pp50',
    targetAudience: [
      'Tim Penyusun Dokumentasi SMK3 & Task Force Sertifikasi Perusahaan',
      'HSE Coordinator, Quality Document Controller, & Internal Auditor',
      'Pimpinan Unit Kerja Operasional Pabrik dan Proyek'
    ],
    outcomes: [
      'Menguasai penyusunan Manual SMK3, Prosedur Kerja (SOP), dan Instruksi Kerja (IK)',
      'Mampu mengeksekusi self-assessment pemenuhan 166 kriteria audit SMK3',
      'Siap menghadapi audit eksternal sertifikasi Bendera Emas PP 50/2012'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: 5 Prinsip Dasar SMK3 & Pemenuhan Kebijakan K3',
        topics: [
          'Bedah Struktur PP No. 50 Tahun 2012 & Lampiran I Pedoman Penerapan',
          'Prinsip 1: Penetapan Kebijakan K3 & Komitmen Manajemen',
          'Prinsip 2: Perencanaan K3 (HIRADC, Legal Register, & Program Kerja)'
        ],
        hours: '10 JP'
      },
      {
        module: 'Modul 02: Penyusunan Sistem Dokumentasi & Pengendalian Operasional',
        topics: [
          'Prinsip 3: Pelaksanaan Rencana K3 (SOP PTW, LOTO, APD, & CSMS)',
          'Penyusunan Prosedur Tanggap Darurat & Kesiapsiagaan Bencana',
          'Dokumentasi Pengendalian Pembelian & Perancangan Rekayasa Teknis'
        ],
        hours: '12 JP'
      },
      {
        module: 'Modul 03: Pemantauan, Evaluasi, & Tinjauan Manajemen (Prinsip 4 & 5)',
        topics: [
          'Prinsip 4: Pemantauan & Evaluasi Kinerja (Inspeksi, Testing, & Audit)',
          'Prinsip 5: Tinjauan Manajemen & Peningkatan Berkelanjutan (Continual Improvement)',
          'Praktik Self-Assessment Checklist 166 Kriteria Audit'
        ],
        hours: '8 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Penerapan 5 Prinsip Utama SMK3 Berdasarkan PP No. 50 Tahun 2012',
        paragraphs: [
          'Penerapan Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3) wajib dilaksanakan oleh perusahaan yang mempekerjakan paling sedikit 100 orang tenaga kerja atau memiliki tingkat potensi bahaya tinggi.',
          'Pelatihan ini membedah panduan teknis implementasi 5 prinsip dasar SMK3 sebagaimana diatur dalam Lampiran I PP 50/2012, agar perusahaan mampu membangun dokumentasi yang valid dan terukur.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Berapa lama waktu yang dibutuhkan perusahaan untuk mempersiapkan audit SMK3 dari nol?',
        answer: 'Umumnya dibutuhkan waktu 3 hingga 6 bulan untuk penyusunan dokumentasi, sosialisasi SOP, penerapan di lapangan, dan pelaksanaan minimal satu kali audit internal.'
      }
    ]
  },
  {
    slug: 'integrasi-smk3-dan-iso-45001',
    title: 'Pelatihan Integrasi SMK3 PP 50/2012 & ISO 45001:2018',
    duration: '32 JP (4 Hari Kerja)',
    legal: 'PP No. 50 Tahun 2012 & Standar ISO 45001:2018',
    sourceKey: 'iso45001',
    targetAudience: [
      'QHSE Manager & Integrated Management System (IMS) Steering Committee',
      'Internal Auditor ISO 45001 & SMK3 Perusahaan Multi-Nasional',
      'Konsultan Sistem Manajemen Mutu, K3, dan Lingkungan'
    ],
    outcomes: [
      'Menguasai matriks pemetaan (gap analysis) antara 166 kriteria PP 50/2012 dengan Klausul 4-10 ISO 45001',
      'Mampu menyusun Manual Sistem Manajemen Terintegrasi (QHSE Manual)',
      'Mengurangi duplikasi dokumen dan mengefisienkan proses audit gabungan'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: High Level Structure (HLS) Annex SL & Struktur PP 50/2012',
        topics: [
          'Konsep Annex SL ISO 45001:2018 vs 5 Prinsip PP No. 50 Tahun 2012',
          'Klausul 4 (Konteks Organisasi) & Klausul 5 (Kepemimpinan & Partisipasi Pekerja)',
          'Penyusunan Matriks Pemetaan Silang (Cross-Reference Matrix)'
        ],
        hours: '8 JP'
      },
      {
        module: 'Modul 02: Integrasi Perencanaan, Operasional, & Evaluasi Kinerja',
        topics: [
          'Klausul 6 (Perencanaan Risks & Opportunities) & HIRADC PP 50/2012',
          'Klausul 7 & 8 (Dukungan & Operasional: MOC, Procurement, Contractor)',
          'Klausul 9 & 10 (Evaluasi Kinerja, Audit Terpadu, & Peningkatan)'
        ],
        hours: '16 JP'
      },
      {
        module: 'Modul 03: Penyusunan Dokumen Terpadu & Simulasi Dual-Audit',
        topics: [
          'Penyusunan Manual QHSE Terintegrasi Tanpa Duplikasi Prosedur',
          'Teknik Pelaksanaan Audit Internal Terpadu (Integrated Audit)',
          'Studi Kasus Penyiapan Audit Eksternal Sertifikasi Ganda'
        ],
        hours: '8 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Efisiensi Tata Kelola K3 Melalui Integrasi PP 50/2012 & ISO 45001:2018',
        paragraphs: [
          'Banyak perusahaan di Indonesia menghadapi tantangan duplikasi birokrasi ketika harus menerapkan SMK3 PP 50/2012 (skema wajib nasional) bersamaan dengan ISO 45001:2018 (standar sukarela internasional).',
          'Melalui pelatihan ini, peserta diajarkan menyusun Sistem Manajemen Terintegrasi yang menyelaraskan klausul High Level Structure (HLS) ISO 45001 dengan 166 kriteria PP 50/2012 dalam satu set dokumentasi tunggal.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Apakah sertifikasi ISO 45001 otomatis menggantikan kewajiban audit SMK3 PP 50/2012?',
        answer: 'Tidak. Sertifikasi ISO 45001 bersifat sukarela internasional, sedangkan SMK3 PP 50/2012 adalah mandatory law dari Pemerintah Indonesia. Namun, sistem dokumentasieduanya dapat diintegrasikan.'
      }
    ]
  },
  {
    slug: 'auditor-internal-smk3',
    title: 'Pelatihan Auditor Internal SMK3 Perusahaan',
    duration: '24 JP (3 Hari Kerja)',
    legal: 'PP No. 50 Tahun 2012 Pasal 14 & Kriteria 11.1',
    sourceKey: 'pp50',
    targetAudience: [
      'Tim Audit Internal K3 / Quality Audit Team Perusahaan',
      'HSE Supervisor, Representative Unit Kerja, & Process Engineer',
      'Anggota Komite P2K3 yang Ditunjuk Menjalankan Audit Internal'
    ],
    outcomes: [
      'Mampu menyusun program dan jadwal audit internal SMK3 tahunan',
      'Menguasai penyusunan checklist audit dan teknik wawancara bukti objektif',
      'Mampu mendokumentasikan laporan temuan audit dan memantau perbaikan CAPA'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Dasar-Dasar Audit Internal SMK3 menurut PP 50/2012',
        topics: [
          'Mandat Pasal 14 PP 50/2012 tentang Kewajiban Audit Internal Berkala',
          'Persyaratan Independensi & Kompetensi Auditor Internal',
          'Penyusunan Audit Program & Matriks Cakupan Elemen'
        ],
        hours: '8 JP'
      },
      {
        module: 'Modul 02: Pelaksanaan Audit Lapangan & Verifikasi Bukti',
        topics: [
          'Penyusunan Checklist Audit Berdasarkan Risiko Area Kerja',
          'Teknik Wawancara, Observasi Fisik, & Sampling Rekaman Dokumen',
          'Penetapan Temuan Ketidaksesuaian (NCR) & Verifikasi Root Cause'
        ],
        hours: '10 JP'
      },
      {
        module: 'Modul 03: Pelaporan Audit Internal & Verifikasi Tindak Lanjut (CAPA)',
        topics: [
          'Format Laporan Audit Internal untuk Bahan Tinjauan Manajemen',
          'Monitoring Pemenuhan Corrective and Preventive Action (CAPA)',
          'Simulasi Audit Internal & Evaluasi Ujian Akhir'
        ],
        hours: '6 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Pentingnya Audit Internal SMK3 menurut Pasal 14 PP No. 50 Tahun 2012',
        paragraphs: [
          'Sesuai Pasal 14 PP 50/2012, pengurus perusahaan wajib melakukan pemantauan dan evaluasi kinerja K3 melalui audit internal SMK3 yang dilakukan secara berkala sekurang-kurangnya 1 (satu) kali dalam setahun.',
          'Hasil audit internal menjadi masukan utama dalam Rapat Tinjauan Manajemen dan menjadi syarat mutlak sebelum mengajukan audit sertifikasi eksternal kepada Kementerian Ketenagakerjaan.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Apakah Auditor Internal SMK3 harus lulusan pembinaan Kemnaker RI?',
        answer: 'Untuk audit internal, perusahaan dapat menunjuk personel internal yang telah mengikuti pelatihan Auditor Internal SMK3 dan memahami 166 kriteria audit PP 50/2012.'
      }
    ]
  },
  {
    slug: 'manajemen-risiko-k3',
    title: 'Pelatihan Manajemen Risiko K3 & HIRADC Komprehensif',
    duration: '24 JP (3 Hari Kerja)',
    legal: 'PP No. 50 Tahun 2012 & Standar ISO 31000',
    sourceKey: 'pp50',
    targetAudience: [
      'HSE Engineer, Risk Officer, & Process Safety Specialist',
      'Supervisor Produksi, Maintenance, & Project Engineer',
      'Tim Pembuat JSA & IBPR Fasilitas Industri'
    ],
    outcomes: [
      'Menguasai identifikasi bahaya metodologi 4M+1E (Man, Machine, Material, Method, Environment)',
      'Mampu menghitung matriks risiko 5x5 dan menentukan kategori risiko (Tinggi, Sedang, Rendah)',
      'Menguasai penerapakan Hirarki Pengendalian Bahaya hingga tingkat ALARP'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Prinsip Manajemen Risiko K3 & Kerangka ISO 31000',
        topics: [
          'Prinsip Manajemen Risiko K3 Berdasarkan PP 50/2012 & ISO 31000',
          'Penetapan Konteks Organisasi & Kriteria Toleransi Risiko (ALARP)',
          'Teknik Identifikasi Bahaya (Hazard Identification Methods)'
        ],
        hours: '8 JP'
      },
      {
        module: 'Modul 02: Metodologi Analisis Risiko HIRADC / IBPR',
        topics: [
          'Penilaian Risk Likelihood & Severity Menggunakan Matriks 5x5',
          'Analisis Bahaya Operasional Ruang Terbatas, Ketinggian, Listrik, & Kimia',
          'Penyusunan Risk Register & Matriks Pengendalian Risiko'
        ],
        hours: '10 JP'
      },
      {
        module: 'Modul 03: Hirarki Pengendalian Bahaya & Evaluasi Residual Risk',
        topics: [
          'Penerapan 5 Hirarki Kontrol: Eliminasi, Subsitusi, Rekayasa, Admin, APD',
          'Penentuan Residual Risk & Program Pemantauan Risiko Berkala',
          'Praktik Penyusunan Dokumen HIRADC/IBPR Area Kerja'
        ],
        hours: '6 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Pondasi Pengendalian Risiko melalui HIRADC / IBPR Terstruktur',
        paragraphs: [
          'Identifikasi Bahaya, Penilaian Risiko, dan Pengendalian Risiko (HIRADC / IBPR) adalah elemen paling vital dalam Sistem Manajemen K3 PP 50/2012 dan ISO 45001.',
          'Pelatihan ini mengajarkan pendekatan ilmiah dalam mengenali potensi bahaya di tempat kerja, menilai dampak kecelakaan sebelum terjadi, dan merancang pengendalian rekayasa teknik yang efektif.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Seberapa sering dokumen HIRADC / IBPR harus ditinjau ulang (review)?',
        answer: 'Dokumen HIRADC wajib ditinjau ulang minimal 1 kali sebulan/setahun, atau setiap kali terjadi kecelakaan kerja, perubahan proses (MOC), dan adanya peralatan baru.'
      }
    ]
  },
  {
    slug: 'investigasi-insiden-k3',
    title: 'Pelatihan Investigasi Kecelakaan Kerja & Analisis Akar Masalah (RCA)',
    duration: '24 JP (3 Hari Kerja)',
    legal: 'Permenaker No. PER.03/MEN/1998 & UU No. 1 Tahun 1970',
    sourceKey: 'uu1',
    targetAudience: [
      'Tim Investigasi Kecelakaan K3 Perusahaan & HSE Team',
      'Manager Operasional, Plant Manager, & HRD Legal Manager',
      'Pengawas Lapangan & Anggota P2K3'
    ],
    outcomes: [
      'Mampu mengamankan lokasi kejadian (TKP) dan mengumpulkan bukti fisik & data saksi',
      'Menguasai teknik analisis akar masalah menggunakan metode 5-Why, Fishbone, & SCAT',
      'Mampu menyusun laporan investigasi kecelakaan kerja dan formulir pelaporan 2x24 jam'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Tanggap Darurat Awal & Pengamanan TKP Insiden',
        topics: [
          'Prosedur Tanggap Darurat Pasca Insiden & Pertolongan Pertama',
          'Teknik Pengamanan Olah Tempat Kejadian Perkara (TKP)',
          'Wawancara Saksi Langsung/Tak Langsung & Pengumpulan Fotografi Bukti'
        ],
        hours: '8 JP'
      },
      {
        module: 'Modul 02: Metodologi Analisis Akar Masalah (Root Cause Analysis)',
        topics: [
          'Analisis Penyebab Langsung (Unsafe Act & Unsafe Condition)',
          'Analisis Penyebab Dasar Menggunakan Metode 5-Why & Fishbone (Ishikawa)',
          'Penerapan Systematic Cause Analysis Technique (SCAT)'
        ],
        hours: '10 JP'
      },
      {
        module: 'Modul 03: Penyusunan Tindakan Korektif & Pelaporan Resmi Kemnaker',
        topics: [
          'Penyusunan Tindakan Perbaikan SMARTER untuk Mencegah Keberulangan Insiden',
          'Tata Cara Pengisian Formulir Laporan Kecelakaan Tahap I & II (Permenaker 03/1998)',
          'Simulasi Investigasi Kasus & Presentasi Laporan Insiden'
        ],
        hours: '6 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Metodologi Investigasi Insiden untuk Mencegah Kejadian Berulang',
        paragraphs: [
          'Tujuan utama dari investigasi kecelakaan kerja bukanlah untuk mencari kesalahan individu (blaming culture), melainkan untuk menemukan kelemahan sistem manajemen K3 yang memicu terjadinya kecelakaan.',
          'Pelatihan ini membekali peserta dengan teknik ilmiah olah TKP, wawancara non-intimidatif, serta metodologi Root Cause Analysis (RCA) agar perusahaan mampu merumuskan tindakan perbaikan permanen.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Berapa batas waktu pelaporan kecelakaan kerja ke Disnaker menurut undang-undang?',
        answer: 'Sesuai Permenaker 03/1998, pengurus wajib melaporkan secara tertulis kecelakaan kerja yang terjadi di tempat kerja kepada Ditjen Binwasnaker / Disnaker setempat dalam tenggat waktu 2x24 jam.'
      }
    ]
  },
  {
    slug: 'safety-leadership-eksekutif',
    title: 'Pelatihan Safety Leadership & Budaya K3 bagi Manajemen Eksekutif',
    duration: '16 JP (2 Hari Kerja)',
    legal: 'UU No. 1 Tahun 1970 Pasal 14 & PP 50/2012',
    sourceKey: 'uu1',
    targetAudience: [
      'Board of Directors (BOD), General Manager, & Eksekutif Korporat',
      'Kepala Divisi Operasional, Keuangan, & Sumber Daya Manusia',
      'Pimpinan Anak Perusahaan & Plant Director'
    ],
    outcomes: [
      'Memahami tanggung jawab hukum dan liabilitas pidana eksekutif dalam bidang K3',
      'Mampu mentransformasi budaya keselamatan dari kepatuhan pasif menjadi proaktif',
      'Menguasai eksekusi Management Safety Walkthrough dan alokasi anggaran K3 terukur'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Aspek Legalitas & Liabilitas Eksekutif Bidang K3',
        topics: [
          'Tanggung Jawab Hukum Direksi menurut UU No. 1 Tahun 1970 & UU No. 13 Tahun 2003',
          'Dampak Finansial & Reputasi Korporat Akibat Kecelakaan Kerja Fatal',
          'Evaluasi Tingkat Kematangan Budaya K3 (Bradley Curve Safety Culture)'
        ],
        hours: '6 JP'
      },
      {
        module: 'Modul 02: Visible Felt Leadership & Perilaku Eksekutif Keselamatan',
        topics: [
          'Teknik Pelaksanaan Management Safety Walkthrough (MSW) Efektif',
          'Komunikasi Keselamatan Eksekutif & Penguatan Safety Accountability',
          'Integrasi KPI K3 ke Dalam Penilaian Kinerja Manajerial Tahunan'
        ],
        hours: '6 JP'
      },
      {
        module: 'Modul 03: Alokasi Sumber Daya & Pengesahan Kebijakan K3 Strategis',
        topics: [
          'Perencanaan Anggaran Program K3 & Pembelian Peralatan Proteksi',
          'Perumusan & Pengesahan Pernyataan Kebijakan K3 Korporat',
          'Rencana Aksi Komitmen Eksekutif (Executive Action Plan)'
        ],
        hours: '4 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Transformasi Budaya K3 Melalui Kepemimpinan Eksekutif Proaktif',
        paragraphs: [
          'Keberhasilan Sistem Manajemen K3 di sebuah korporasi sangat ditentukan oleh komitmen dan kepemimpinan tingkat atas (Tone from the Top).',
          'Pelatihan eksekutif ini dirancang khusus untuk para Direktur dan General Manager guna memahami bagaimana keputusan strategis, alokasi anggaran, dan perilaku nyata eksekutif mampu membentuk budaya keselamatan kerja proaktif di seluruh rantai organisasi.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Mengapa jajaran Direksi wajib memahami regulasi K3 secara langsung?',
        answer: 'Karena UU No. 1 Tahun 1970 menetapkan bahwa Pengurus Tempat Kerja (Pimpinan Perusahaan) bertanggung jawab secara hukum pidana dan perdata terhadap jaminan keselamatan di area yang dipimpinnya.'
      }
    ]
  },
  {
    slug: 'safety-accountability-pengawas',
    title: 'Pelatihan Akuntabilitas Keselamatan bagi Pengawas Lapangan',
    duration: '20 JP (2 Hari Kerja)',
    legal: 'UU No. 1 Tahun 1970 & PP No. 50 Tahun 2012',
    sourceKey: 'uu1',
    targetAudience: [
      'Frontline Supervisor, Foreman, & Line Leader Produksi/Konstruksi',
      'Chief Technician, Maintenance Supervisor, & Warehouse Leader',
      'Tim Pengawas Operasional Lapangan'
    ],
    outcomes: [
      'Memahami peran supervisor sebagai kunci utama keselamatan operasional harian',
      'Menguasai verifikasi Izin Kerja Aman (PTW) dan pengawasan APD di lapangan',
      'Mampu memimpin Safety Toolbox Meeting dan mengeksekusi Stop Work Authority'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Peran & Tanggung Jawab K3 Pengawas Lapangan',
        topics: [
          'Kedudukan Supervisor Lapangan dalam UU No. 1 Tahun 1970',
          'Akuntabilitas Keselamatan Kerja: Tugas Harian vs Tugas K3',
          'Teknik Komunikasi & Pembimbingan Perilaku Aman (Coaching K3)'
        ],
        hours: '6 JP'
      },
      {
        module: 'Modul 02: Pengawasan Operasional & Verifikasi Izin Kerja Aman (PTW)',
        topics: [
          'Pemeriksaan Kelayakan APD & Peralatan Kerja Sebelum Shift',
          'Verifikasi Syarat Izin Kerja Aman (Panas, Ketinggian, Ruang Terbatas)',
          'Pelaksanaan Hazard Hunting & Observasi Perilaku Kerja Berbahaya'
        ],
        hours: '8 JP'
      },
      {
        module: 'Modul 03: Kepemimpinan Briefing Keselamatan & Tindakan Darurat',
        topics: [
          'Teknik Memimpin Safety Toolbox Meeting 15 Menit Harian',
          'Penggunaan Wewenang Penghentian Pekerjaan (Stop Work Authority)',
          'Simulasi Penanganan Kondisi Darurat di Lini Lapangan'
        ],
        hours: '6 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Peran Kunci Supervisor Lapangan dalam Menjaga Zero Accident',
        paragraphs: [
          'Pengawas lapangan (supervisor/foreman) berada di garis depan interaksi antara pekerja dan sumber bahaya operasional.',
          'Pelatihan ini membekali pengawas lapangan dengan ketrampilan praktis untuk mendeteksi tindakan tidak aman (unsafe act), memastikan kepatuhan SOP, dan menciptakan komunikasi keselamatan harian yang efektif.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Apakah pengawas lapangan berhak menghentikan sub-kontraktor yang melanggar aturan K3?',
        answer: 'Ya. Pengawas memiliki kewenangan mutlak (Stop Work Authority) untuk menghentikan setiap pekerjaan yang berpotensi menimbulkan bahaya fatalitas tanpa takut mendapat sanksi.'
      }
    ]
  },
  {
    slug: 'pengukuran-lingkungan-kerja',
    title: 'Pelatihan Dasar Pengukuran Faktor Bahaya Lingkungan Kerja',
    duration: '30 JP (3 Hari Kerja)',
    legal: 'Permenaker No. 05 Tahun 2018 tentang K3 Lingkungan Kerja',
    sourceKey: 'permen05_2018',
    targetAudience: [
      'Industrial Hygienist, Environmental Health Officer, & HSE Technician',
      'Tim Laboratorium Pengujian Lingkungan Kerja & PJK3 Riksa Uji',
      'Ahli K3 Umum Perusahaan Manufaktur, Kimia, & Pertambangan'
    ],
    outcomes: [
      'Menguasai penggunaan alat ukur Sound Level Meter, Lux Meter, ISBB, dan Gas Detector',
      'Mampu membandingkan hasil pengukuran dengan Nilai Ambang Batas (NAB) Permenaker 05/2018',
      'Mampu menyusun laporan pengujian higiene industri dan rekomendasi pengendalian'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Regulasi K3 Lingkungan Kerja & Faktor Bahaya Fisika',
        topics: [
          'Penelaahan Permenaker No. 05 Tahun 2018 & Nilai Ambang Batas (NAB)',
          'Pengukuran Kebisingan (SLM/Noise Dosimeter) & Getaran Alat Kerja',
          'Pengukuran Iklim Kerja Panas (ISBB) & Intensitas Pencahayaan (Lux Meter)'
        ],
        hours: '10 JP'
      },
      {
        module: 'Modul 02: Pengukuran Faktor Bahaya Kimia, Biologi, Ergonomi, & Psikologi',
        topics: [
          'Sampling Debu Partikulat (Dust Sampler) & Gas Beracun (Gas Detector)',
          'Identifikasi Bahaya Mikrobiologi Udara & Sanitasi Fasilitas Kerja',
          'Asesmen Ergonomi Postur Kerja (REBA/RULA) & Stress Kerja'
        ],
        hours: '12 JP'
      },
      {
        module: 'Modul 03: Penyusunan Laporan Pengujian & Evaluasi Pengendalian',
        topics: [
          'Format Baku Laporan Riksa Uji K3 Lingkungan Kerja',
          'Perancangan Rekayasa Teknis (Ventilasi Eksos, Enclosure Kebisingan)',
          'Praktik Pengukuran Alat & Evaluasi Hasil Laboratorium'
        ],
        hours: '8 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Pengujian Faktor Lingkungan Kerja berdasarkan Permenaker No. 05 Tahun 2018',
        paragraphs: [
          'Permenaker No. 05 Tahun 2018 mewajibkan setiap pengurus tempat kerja untuk melakukan pengukuran dan pengendalian faktor lingkungan kerja yang meliputi faktor fisika, kimia, biologi, ergonomi, dan psikologi.',
          'Pelatihan ini melatih teknisi dan praktisi K3 dalam mengoperasikan instrumen pengujian lingkungan kerja serta menganalisis hasilnya terhadap standar Nilai Ambang Batas (NAB) yang berlaku.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Berapa batas maksimal tingkat kebisingan yang diperbolehkan untuk kerja 8 jam sehari?',
        answer: 'Berdasarkan Permenaker 05/2018, Nilai Ambang Batas (NAB) kebisingan untuk waktu kerja 8 jam per hari adalah 85 dBA.'
      }
    ]
  },
  {
    slug: 'safety-officer-k3',
    title: 'Pelatihan & Pembinaan Safety Officer Lapangan Terapan',
    duration: '40 JP (4 Hari Kerja)',
    legal: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja',
    sourceKey: 'uu1',
    targetAudience: [
      'Field Safety Inspector, Safety Junior Officer, & HSE Assistant',
      'Lulusan SMA/SMK/D3 yang Diproyeksikan Bekerja di Bidang Safety Konstruksi & Industri',
      'Tim Pengawas K3 Lapangan Proyek'
    ],
    outcomes: [
      'Mampu melaksanakan inspeksi K3 harian dan pencatatan kondisi berbahaya di area kerja',
      'Menguasai verifikasi penggunaan APD dan kelayakan peralatan keselamatan',
      'Mampu memandu Safety Toolbox Meeting dan memantau pekerjaan riskan (Hot Work/Confined Space)'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Dasar-Dasar Keselamatan Kerja & Identifikasi Bahaya Lapangan',
        topics: [
          'Prinsip UU No. 1 Tahun 1970 & Peran Safety Officer di Tempat Kerja',
          'Teknik Mengenali Unsafe Act & Unsafe Condition di Lini Operasional',
          'Penggunaan Checklist Inspeksi Harian & Pembuatan Hazard Report'
        ],
        hours: '12 JP'
      },
      {
        module: 'Modul 02: Pengawasan Pekerjaan Berisiko Tinggi & Verifikasi APD',
        topics: [
          'Pengawasan Kerja Ketinggian, Pengelasan/Panas, & Ruang Terbatas',
          'Pemeriksaan Kelayakan APD (Helm, Harness, Sepatu, Respirator)',
          'Verifikasi Pemasangan Barikade, Rambu K3, & Tagging Peralatan'
        ],
        hours: '18 JP'
      },
      {
        module: 'Modul 03: Penanganan Kondisi Darurat Awal & Pelaporan Harian',
        topics: [
          'Tindakan Awal Kebakaran (APAR) & Pertolongan Pertama (P3K)',
          'Pemanduan Safety Briefing / Toolbox Meeting Lapangan',
          'Penyusunan Laporan Kegiatan Safety Officer Harian & Ujian Kelulusan'
        ],
        hours: '10 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Peran Vital Safety Officer dalam Pengawasan Lapangan Harian',
        paragraphs: [
          'Safety Officer adalah personel lapangan yang bertugas mengawasi pelaksanaan standar K3 secara langsung pada operasional harian pabrik, proyek konstruksi, dan area industri.',
          'Pelatihan terapan ini membekali calon Safety Officer dengan keterampilan praktis dalam mengenali bahaya, memverifikasi izin kerja aman, serta memastikan seluruh pekerja menggunakan APD sesuai standar.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Apakah lulusan SMA/SMK bisa mendaftar pelatihan Safety Officer ini?',
        answer: 'Ya, pelatihan Safety Officer Lapangan Terapan terbuka bagi lulusan SMA/SMK sederajat yang ingin memulai karir profesional di bidang keselamatan kerja.'
      }
    ]
  },
  {
    slug: 'inspeksi-k3-terjadwal',
    title: 'Pelatihan Teknik Inspeksi K3 & Audit Visual Tempat Kerja',
    duration: '20 JP (2 Hari Kerja)',
    legal: 'PP No. 50 Tahun 2012 Kriteria 6.5',
    sourceKey: 'pp50',
    targetAudience: [
      'Anggota Tim Inspeksi K3 Perusahaan & P2K3',
      'Maintenance Supervisor, Area Owner, & Plant Inspector',
      'HSE Staff & Compliance Officer'
    ],
    outcomes: [
      'Mampu merancang checklist inspeksi K3 terstruktur sesuai bahaya spesifik area',
      'Menguasai teknik inspeksi visual untuk mendeteksi bahaya tersembunyi (latent hazard)',
      'Mampu menyusun temuan inspeksi dan melacak penyelesaian rekomendasi perbaikan'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Perencanaan & Perancangan Checklist Inspeksi K3',
        topics: [
          'Prinsip Inspeksi K3 Terjadwal menurut PP 50/2012 Kriteria 6.5',
          'Perbedaan Inspeksi Rutin vs Audit Sistem Manajemen',
          'Penyusunan Checklist Khusus Area Mesin, Gudang, & Fasilitas Umuk'
        ],
        hours: '6 JP'
      },
      {
        module: 'Modul 02: Pelaksanaan Inspeksi Visual & Deteksi Bahaya Tersembunyi',
        topics: [
          'Metodologi Observasi Visual (Look Up, Look Down, Look Around)',
          'Pemeriksaan Kelayakan Alat Pemadam, Tagging LOTO, & Proteksi Mesin',
          'Wawancara Singkat Operator & Pencatatan Temuan Lapangan'
        ],
        hours: '8 JP'
      },
      {
        module: 'Modul 03: Pelaporan Temuan Inspeksi & Monitoring Action Plan',
        topics: [
          'Format Laporan Temuan Inspeksi & Klasifikasi Tingkat Bahaya',
          'Penyusunan Action Plan Penanggulangan dengan Penanggung Jawab',
          'Simulasi Inspeksi Area Kerja & Presentasi Hasil Inspeksi'
        ],
        hours: '6 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Standar Inspeksi K3 Terjadwal berdasarkan PP No. 50 Tahun 2012',
        paragraphs: [
          'Inspeksi tempat kerja secara teratur merupakan instrumen terpenting dalam memantau efektivitas pengendalian K3 di lapangan.',
          'Pelatihan ini mengajarkan teknik inspeksi sistematis untuk mendeteksi kerusakan sarana keselamatan sebelum memicu terjadinya kecelakaan fatal.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Seberapa sering inspeksi K3 tempat kerja harus dilaksanakan?',
        answer: 'Frekuensi inspeksi bervariasi: inspeksi harian oleh supervisor, inspeksi mingguan/bulanan oleh tim P2K3, dan inspeksi khusus untuk peralatan berisiko tinggi.'
      }
    ]
  },
  {
    slug: 'penyusunan-sop-k3',
    title: 'Pelatihan Penyusunan Standard Operating Procedure (SOP) & JSA Berbasis K3',
    duration: '24 JP (3 Hari Kerja)',
    legal: 'PP No. 50 Tahun 2012 Kriteria 6.1',
    sourceKey: 'pp50',
    targetAudience: [
      'Document Control Specialist, SOP Writer, & Process Engineer',
      'HSE Officer & Supervisor Operasional Produksi/Maintenance',
      'Tim Penyusun Dokumentasi Manajemen K3'
    ],
    outcomes: [
      'Menguasai 4 langkah penyusunan Job Safety Analysis (JSA)',
      'Mampu mengintegrasikan potensi bahaya K3 ke dalam langkah kerja aman (SOP/SWP)',
      'Menguasai pengesahan dan sosialisasi SOP kepada operator lapangan'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Metodologi Job Safety Analysis (JSA) 4 Langkah',
        topics: [
          'Pemilihan Pekerjaan Kritis yang Wajib Memiliki JSA',
          'Langkah 1: Menguraikan Tahapan Pekerjaan (Breakdown Work Steps)',
          'Langkah 2: Mengidentifikasi Potensi Bahaya pada Tiap Tahapan'
        ],
        hours: '8 JP'
      },
      {
        module: 'Modul 02: Penentuan Pengendalian & Penulisan Prosedur Kerja Aman (SOP)',
        topics: [
          'Langkah 3 & 4: Menentukan Tindakan Pencegahan & Prosedur Aman',
          'Standardisasi Format SOP K3 Berdasarkan PP 50/2012',
          'Penyusunan Instruksi Kerja (IK) Visual & Matriks Alat Kerja'
        ],
        hours: '10 JP'
      },
      {
        module: 'Modul 03: Verifikasi Lapangan, Pengesahan, & Sosialisasi Pekerja',
        topics: [
          'Praktik Uji Coba SOP di Lapangan & Revisi Feedback Operator',
          'Mekanisme Pengesahan Dokumen Kontrol & Distribusi SOP',
          'Simulasi Penyusunan JSA & SOP Tugas Operasional'
        ],
        hours: '6 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Pengintegrasian K3 ke Dalam Prosedur Kerja Standar (SOP)',
        paragraphs: [
          'SOP yang baik adalah prosedur operasional yang secara eksplisit memasukkan aspek keselamatan kerja pada setiap tahapan instruksi tugas.',
          'Pelatihan ini membimbing peserta menggunakan teknik Job Safety Analysis (JSA) untuk mengidentifikasi bahaya spesifik dan merumuskan SOP kerja aman yang mudah dipahami pekerja.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Siapa yang paling bertanggung jawab menyusun JSA di lapangan?',
        answer: 'JSA sebaiknya disusun bersama oleh Supervisor Lapangan, Pekerja Senior yang berpengalaman, dan didampingi oleh HSE Officer.'
      }
    ]
  },
  {
    slug: 'safety-induction-kontraktor',
    title: 'Pelatihan Manajemen Safety Induction & CSMS (Contractor Safety)',
    duration: '24 JP (3 Hari Kerja)',
    legal: 'Permenaker & Standar CSMS Industri',
    sourceKey: 'pp50',
    targetAudience: [
      'CSMS Assessor, Procurement/Procurement Manager, & HSE Officer',
      'Project Manager Contractor & Sub-contractor Coordinator',
      'Tim Evaluator Vendor & Kontraktor Fasilitas Industri'
    ],
    outcomes: [
      'Menguasai 5 tahapan pelaksanaan Contractor Safety Management System (CSMS)',
      'Mampu melakukan penilaian prakualifikasi HSE Plan kontraktor',
      'Mampu merancang materi Safety Induction pihak ketiga yang efektif'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Kerangka Kerjasama CSMS & Tahap Prakualifikasi',
        topics: [
          'Prinsip Tanggung Jawab K3 Pemilik Proyek vs Kontraktor',
          'Tahap 1: Risk Assessment Proyek & Penentuan Kategori Risiko',
          'Tahap 2: Prakualifikasi Dokumen HSE Plan Vendor (PQ CSMS)'
        ],
        hours: '8 JP'
      },
      {
        module: 'Modul 02: Tahap Seleksi, Pre-Job Activity, & Work in Progress',
        topics: [
          'Tahap 3: Seleksi Tender & Evaluasi Komitmen K3 Kontraktor',
          'Tahap 4: Pre-Job Meeting, Kick-off, & Safety Induction Mitra',
          'Tahap 5: Pengawasan Pekerjaan (Work in Progress Audit)'
        ],
        hours: '10 JP'
      },
      {
        module: 'Modul 03: Evaluasi Akhir Kontraktor & Penyusunan Induksi Resmi',
        topics: [
          'Tahap Final: Evaluasi Kinerja K3 Kontraktor Pasca Proyek (KPI Scoring)',
          'Perancangan Video & Modul Safety Induction untuk Tamu & Vendor',
          'Simulasi Asesmen Dokumen CSMS Kontraktor'
        ],
        hours: '6 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Penerapan CSMS untuk Menekan Angka Kecelakaan Kerja Kontraktor',
        paragraphs: [
          'Statistik menunjukkan sebagian besar kecelakaan fatal di sektor industri dan konstruksi melibatkan tenaga kerja pihak ketiga atau kontraktor.',
          'Pelatihan CSMS ini memberikan sistem kontrol komprehensif mulai dari seleksi prakualifikasi vendor hingga evaluasi akhir kinerja keselamatan proyek.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Apakah nilai CSMS yang rendah bisa menggagalkan kontraktor dalam tender proyek?',
        answer: 'Ya. Dalam standar CSMS industri, kontraktor yang tidak memenuhi skor minimum prakualifikasi K3 akan langsung gugur sebelum tahap pembukaan harga.'
      }
    ]
  },
  {
    slug: 'penilaian-kinerja-k3',
    title: 'Pelatihan KPI & Leading-Lagging Indicator Kinerja K3',
    duration: '20 JP (2 Hari Kerja)',
    legal: 'PP No. 50 Tahun 2012 Kriteria 8.1',
    sourceKey: 'pp50',
    targetAudience: [
      'HSE Performance Analyst, Data Officer, & Management Representative',
      'HSE Manager & Corporate Compliance Director',
      'Tim Auditor Internal K3'
    ],
    outcomes: [
      'Menguasai penghitungan rumus statistik kecelakaan (FR, SR, LTIFR, TRIFR)',
      'Mampu merancang indikator proaktif (Leading Indicators) yang terukur',
      'Mampu menyusun Dashboard Kinerja K3 untuk laporan jajaran Direksi'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Dasar Statistik K3 & Indikator Historis (Lagging)',
        topics: [
          'Konsep Pengukuran Kinerja K3 Berdasarkan PP 50/2012 Kriteria 8.1',
          'Perhitungan Frequency Rate (FR) & Severity Rate (SR) Standar ILO',
          'Perhitungan Lost Time Injury Frequency Rate (LTIFR) & TRIFR'
        ],
        hours: '6 JP'
      },
      {
        module: 'Modul 02: Pengembangan Indikator Proaktif (Leading Indicators)',
        topics: [
          'Perancangan Leading Indicators (TBM Count, Inspection, Audit Closed Items)',
          'Matriks Penilaian Budaya K3 & Safe Behavior Scorecard',
          'Integrasi KPI K3 ke Dalam Balanced Scorecard Korporat'
        ],
        hours: '8 JP'
      },
      {
        module: 'Modul 03: Penyusunan Dashboard K3 & Presentasi Direksi',
        topics: [
          'Visualisasi Data K3 Menggunakan Executive Dashboard',
          'Penyusunan Laporan Analisis Tren Insiden & Rekomendasi Bisnis',
          'Simulasi Perhitungan Statistik K3 & Diskusi Kasus'
        ],
        hours: '6 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Pengukuran Kinerja K3 Menggunakan Kombinasi Leading & Lagging Indicators',
        paragraphs: [
          'Mengukur kinerja K3 hanya dari jam kerja tanpa kecelakaan (Zero Harm/Lagging) tidak cukup untuk menjamin keandalan sistem keselamatan.',
          'Pelatihan ini mengajarkan perancangan KPI K3 seimbang yang menggabungkan indikator historis dengan indikator proaktif seperti jumlah inspeksi dan pelatihan.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Berapa angka konstanta pengali standar yang digunakan dalam kalkulasi LTIFR?',
        answer: 'Industri internasional dan nasional umumnya menggunakan konstanta pengali 1.000.000 jam kerja man-hours.'
      }
    ]
  },
  {
    slug: 'k3-pelaporan-wajib-naker',
    title: 'Pelatihan Tata Cara Pelaporan K3 & e-K3 Kemnaker RI',
    duration: '16 JP (2 Hari Kerja)',
    legal: 'UU No. 1 Tahun 1970 & Permenaker No. 04/1987',
    sourceKey: 'permen04_1987',
    targetAudience: [
      'Staff Pelaporan K3, Secretarial P2K3, & HRD Compliance Officer',
      'HSE Administrative Staff & General Affair Supervisor',
      'Pengurus Perusahaan yang Mengelola Legalitas Ketenagakerjaan'
    ],
    outcomes: [
      'Menguasai batas waktu dan jenis laporan wajib K3 ke kementerian',
      'Mampu mengoperasikan pengunggahan dokumen pada sistem digital TemanK3 Kemnaker RI',
      'Terhindar dari sanksi teguran administratif Pengawas Ketenagakerjaan'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Regulasi Pelaporan Wajib K3 & Ketenagakerjaan',
        topics: [
          'Kewajiban Wajib Lapor Ketenagakerjaan (WKLK) UU No. 7 Tahun 1981',
          'Pelaporan Triwulan Kegiatan P2K3 (Permenaker 04/1987)',
          'Pelaporan Kasus Kecelakaan Kerja Tahap I & II (Permenaker 03/1998)'
        ],
        hours: '6 JP'
      },
      {
        module: 'Modul 02: Penggunaan Sistem Portal e-K3 & TemanK3 Kemnaker RI',
        topics: [
          'Navigasi & Registrasi Akun Perusahaan pada Portal TemanK3',
          'Pengunggahan Berkas Pelaporan P2K3, Riksa Uji Alat, & Lisensi SIO',
          'Mekanisme Verifikasi & Penerbitan Bukti Lapor Digital'
        ],
        hours: '6 JP'
      },
      {
        module: 'Modul 03: Pengarsipan Berkas Legalitas & Kesiapan Pemeriksaan Disnaker',
        topics: [
          'Pengelolaan Matriks Register Legalitas K3 Perusahaan',
          'Simulasi Penyusunan Berkas Laporan & Pengunggahan Online',
          'Evaluasi Akhir Kepatuhan Dokumen Pelaporan'
        ],
        hours: '4 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Digitalisasi Pelaporan K3 Berdasarkan Sistem TemanK3 Kemnaker RI',
        paragraphs: [
          'Kementerian Ketenagakerjaan RI telah mengalihkan seluruh proses pelaporan K3 dan perizinan PJK3 ke portal digital TemanK3.',
          'Pelatihan ini membimbing admin K3 dan Sekretaris P2K3 dalam menyiapkan dokumen pelaporan triwulan, sertifikat alat, dan pelaporan kecelakaan secara elektronik.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Apakah pelaporan triwulan P2K3 masih bisa dikirimkan secara manual fisik?',
        answer: 'Saat ini mayoritas Dinas Tenaga Kerja Provinsi mewajibkan pengunggahan secara digital melalui portal resmi TemanK3 Kemnaker RI.'
      }
    ]
  },
  {
    slug: 'komunikasi-k3-toolbox',
    title: 'Pelatihan Komunikasi Efektif K3 & Pemanduan Safety Toolbox Meeting',
    duration: '16 JP (2 Hari Kerja)',
    legal: 'UU No. 1 Tahun 1970 Pasal 9 & Pasal 14',
    sourceKey: 'uu1',
    targetAudience: [
      'Safety Communicator, Supervisor, Foreman, & Safety Champion',
      'Tim Public Relations HSE & Training Officer',
      'Pengawas Lapangan yang Memimpin Briefing Harian'
    ],
    outcomes: [
      'Mampu menyampaikan pesan keselamatan kerja secara persuasif dan non-monoton',
      'Menguasai penyusunan materi Safety Toolbox Meeting (TBM) 10-15 menit harian',
      'Menguasai penataan rambu dan poster K3 sesuai ketentuan UU 1/1970 Pasal 14'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Psikologi Komunikasi Keselamatan & Persuasi Pekerja',
        topics: [
          'Hambatan Komunikasi K3 di Lapangan & Teknik Penyampaian Persuasif',
          'Mandat UU No. 1 Tahun 1970 Pasal 9 tentang Pembinaan Pekerja Baru',
          'Penggunaan Bahasa Tubuh & Intonasi Suara dalam Briefing Safety'
        ],
        hours: '6 JP'
      },
      {
        module: 'Modul 02: Teknik Penyusunan & Pemanduan Safety Toolbox Meeting (TBM)',
        topics: [
          'Struktur Alur TBM 15 Menit: Pembuka, Isu Utama, & Komitmen Bersama',
          'Penyusunan Materi Safety Talk Berdasarkan Hasil Inspeksi Harian',
          'Praktik Pemanduan Toolbox Meeting Lapangan'
        ],
        hours: '6 JP'
      },
      {
        module: 'Modul 03: Pengelolaan Visual Management & Rambu Keselamatan',
        topics: [
          'Pemasangan Rambu & Poster K3 Berdasarkan UU 1/1970 Pasal 14',
          'Standar Warna & Piktogram Rambu K3 Industri (ANSI/ISO)',
          'Evaluasi Efektivitas Komunikasi Visual Tempat Kerja'
        ],
        hours: '4 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Penguatan Komunikasi Keselamatan Harian di Lini Depan Operasional',
        paragraphs: [
          'Safety Toolbox Meeting (TBM) harian adalah sarana komunikasi paling efektif untuk menyelaraskan kesadaran risiko pekerja sebelum memulai tugas.',
          'Pelatihan ini melatih pengawas dan safety officer menjadi komunikator yang handal dalam menyampaikan instruksi keselamatan tanpa terkesan menggurui.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Berapa durasi ideal untuk pelaksanaan Safety Toolbox Meeting di awal shift?',
        answer: 'Durasi ideal TBM adalah antara 10 hingga 15 menit agar pesan keselamatan tetap fokus, padat, dan mudah diingat pekerja.'
      }
    ]
  },
  {
    slug: 'manajemen-perubahan-moc-k3',
    title: 'Pelatihan Management of Change (MOC) Keselamatan Kerja',
    duration: '24 JP (3 Hari Kerja)',
    legal: 'PP No. 50 Tahun 2012 & Standar Process Safety Management',
    sourceKey: 'pp50',
    targetAudience: [
      'Process Engineer, Plant Engineer, & MOC Coordinator',
      'HSE Specialist, Operations Manager, & Maintenance Lead',
      'Tim Management of Change Fasilitas Kimia & Migas'
    ],
    outcomes: [
      'Mampu mengidentifikasi jenis perubahan teknis, organisasi, dan operasional yang wajib MOC',
      'Menguasai kajian risiko perubahan dan pelaksanaan Pre-Startup Safety Review (PSSR)',
      'Memastikan seluruh P&ID, SOP, dan pelatihan diperbarui sebelum peranti dioperasikan'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Prinsip Dasar Management of Change (MOC) Industri',
        topics: [
          'Tragedi Industri Akibat Kegagalan MOC & Regulasi PP 50/2012',
          'Kategori Perubahan: Permanen, Sementara (Emergency), & Organisasional',
          'Kriteria Perubahan yang Membutuhkan Prosedur MOC Resmi'
        ],
        hours: '8 JP'
      },
      {
        module: 'Modul 02: Kajian Risiko Perubahan & Pre-Startup Safety Review (PSSR)',
        topics: [
          'Evaluasi Ulang Risiko (Risk Re-assessment) Akibat Perubahan Alat/Proses',
          'Pelaksanaan Verifikasi Pre-Startup Safety Review (PSSR)',
          'Pembaruan Gambar Teknik (P&ID), Dokumen Hazop, & Manual K3'
        ],
        hours: '10 JP'
      },
      {
        module: 'Modul 03: Alur Otorisasi MOC & Pelatihan Operator',
        topics: [
          'Penyusunan Form Formulir MOC & Matriks Persetujuan Berjenjang',
          'Pelatihan Ulang Operator Terhadap Perubahan Prosedur Kerja',
          'Simulasi Pengelolaan Kasus MOC Fasilitas Pabrik'
        ],
        hours: '6 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Pengendalian Bahaya Melalui Prosedur Management of Change (MOC)',
        paragraphs: [
          'Setiap perubahan pada desain fasilitas, mesin, pipa, bahan kimia, atau struktur organisasi berpotensi menimbulkan bahaya baru jika tidak dikaji secara cermat.',
          'Pelatihan ini mengajarkan alur kerja MOC terstruktur untuk memastikan semua risiko akibat perubahan telah dikendalikan dan disahkan sebelum operasi dimulai.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Apa akibatnya jika perusahaan melakukan modifikasi pipa atau mesin tanpa prosedur MOC?',
        answer: 'Modifikasi tanpa MOC sangat rawan memicu kecelakaan katastropik seperti ledakan atau kebocoran gas karena potensi bahaya baru tidak teridentifikasi.'
      }
    ]
  },
  {
    slug: 'k3-perkantoran',
    title: 'Pelatihan K3 Perkantoran & Keselamatan Fasilitas Kerja non-Pabrik',
    duration: '20 JP (2 Hari Kerja)',
    legal: 'Permenkes No. 48 Tahun 2016 tentang Standar K3 Perkantoran',
    sourceKey: 'uu1',
    targetAudience: [
      'Building Management Staff, Facility Manager, & Office Safety Committee',
      'HRD & General Affair (GA) Manager Gedung Perkantoran',
      'Tim Tanggap Darurat & Evakuasi Gedung Bertingkat'
    ],
    outcomes: [
      'Menguasai penerapan standar K3 perkantoran sesuai Permenkes No. 48 Tahun 2016',
      'Mampu mengaudit faktor ergonomi stasiun kerja komputer dan kualitas udara ruangan (IAQ)',
      'Mampu merancang prosedur evakuasi kebakaran dan simulasi warden gedung bertingkat'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Regulasi Permenkes 48/2016 & Keselamatan Fasilitas Perkantoran',
        topics: [
          'Kerangka Hukum Permenkes No. 48 Tahun 2016 tentang K3 Perkantoran',
          'Keselamatan Bangunan Gedung (Persyaratan Instalasi Listrik, Tangga, & Pintu)',
          'Manajemen Fasilitas Kesehatan & Pertolongan Pertama di Kantor'
        ],
        hours: '6 JP'
      },
      {
        module: 'Modul 02: Ergonomi Perkantoran, Kualitas Udara (IAQ), & Pencahayaan',
        topics: [
          'Pengaturan Antropometri Meja, Kursi Ergonomis, & Monitor Komputer',
          'Pengendalian Kualitas Udara Dalam Ruangan (Indoor Air Quality) & AC',
          'Standar Pencahayaan Ruang Kerja (Lux) & Pencegahan Kelelahan Mata'
        ],
        hours: '8 JP'
      },
      {
        module: 'Modul 03: Tanggap Darurat Gedung Bertingkat & Floor Warden System',
        topics: [
          'Penyusunan Plan Evakuasi Kebakaran Gedung & Tim Floor Warden',
          'Pengoperasian Sistem Alarm Kebakaran, Hydrant, & Fire Extinguisher',
          'Simulasi Evakuasi Darurat Perkantoran'
        ],
        hours: '6 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Standar Keselamatan dan Kesehatan Kerja Lingkungan Perkantoran',
        paragraphs: [
          'Meskipun gedung perkantoran memiliki tingkat risiko fisik lebih rendah daripada pabrik manufaktur, ancaman kesehatan seperti keluhan ergonomi Musculoskeletal Disorders (MSDs), kualitas udara buruk, serta bahaya kebakaran gedung bertingkat tetap membutuhkan tata kelola K3 yang ketat.',
          'Pelatihan ini membimbing pengelola fasilitas kantor dalam menerapkan standar Permenkes No. 48 Tahun 2016 secara menyeluruh.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Berapa intensitas pencahayaan standar yang direkomendasikan untuk ruang kerja kantor?',
        answer: 'Berdasarkan Permenkes 48/2016, intensitas pencahayaan minimum untuk pekerjaan kantor umum seperti membaca dan menulis adalah 300 Lux.'
      }
    ]
  },
  {
    slug: 'k3-fasilitas-kesehatan',
    title: 'Pelatihan K3 Rumah Sakit & Fasilitas Layanan Kesehatan (K3RS)',
    duration: '30 JP (3 Hari Kerja)',
    legal: 'Permenkes No. 66 Tahun 2016 tentang K3RS',
    sourceKey: 'permenkes66_2016',
    targetAudience: [
      'Komite K3 Rumah Sakit (K3RS), Sanitarian, & Tim Manajemen Mutu RS',
      'Kepala Ruang Rawat, Kepala Laboratorium, & Kepala IPSRS',
      'Dokter & Perawat Kesehatan Kerja Rumah Sakit'
    ],
    outcomes: [
      'Menguasai penerapan standar K3RS sesuai Permenkes No. 66 Tahun 2016',
      'Mampu mengendalikan bahaya biologis infeksi nosokomial & pengelolaan limbah B3 medis',
      'Mampu merancang Hospital Disaster Plan dan proteksi radiasi medis'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Regulasi Permenkes 66/2016 & Standar Keselamatan Fasilitas Medis',
        topics: [
          'Kebijakan K3RS berdasarkan Permenkes No. 66 Tahun 2016',
          'Keselamatan Sarana, Prasarana, & Peralatan Medis IPSRS',
          'Pemeriksaan Kesehatan Nakes & Program Imunisasi Pekerja RS'
        ],
        hours: '10 JP'
      },
      {
        module: 'Modul 02: Pengendalian Bahaya Biologis, Limbah B3 Medis, & Bahan Kimia',
        topics: [
          'Pencegahan Infeksi Nosokomial & Penanganan Tertusuk Jarum (Needlestick Injury)',
          'Pengelolaan Limbah Medis Padat/Cair B3 & Festronik TPS Limbah',
          'Pengendalian Bahan Kimia Berbahaya Laboratorium & Gas Medis'
        ],
        hours: '12 JP'
      },
      {
        module: 'Modul 03: Proteksi Radiasi Medis & Hospital Disaster Plan',
        topics: [
          'Keselamatan Radiologi Diagnostik & Pemantauan TLD Badge BAPETEN',
          'Penyusunan Plan Tanggap Bencana Rumah Sakit (Code Red, Code Blue)',
          'Simulasi Evakuasi Pasien & Assessment K3RS'
        ],
        hours: '8 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Penerapan K3RS untuk Perlindungan Tenaga Medis dan Pasien',
        paragraphs: [
          'Fasilitas pelayanan kesehatan (Rumah Sakit, Puskesmas, Klinik) memiliki kompleksitas bahaya yang sangat unik, meliputi risiko infeksi virus/bakteri, paparan limbah infeksius, radiasi pengion, dan bahaya bahan kimia desinfektan.',
          'Pelatihan K3RS ini memberikan panduan praktis bagi Komite K3RS dalam membangun sistem proteksi kesehatan bagi tenaga medis sekaligus menjaga keamanan pasien.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Apakah setiap Rumah Sakit wajib memiliki Komite K3RS independen?',
        answer: 'Ya. Berdasarkan Permenkes 66/2016 dan standar Akreditasi Rumah Sakit (STARKES), setiap RS wajib membentuk Organisasi K3RS yang bertanggung jawab langsung kepada Direktur Utama.'
      }
    ]
  },
  {
    slug: 'k3-sektor-retail-logistik',
    title: 'Pelatihan K3 Sektor Retail, Pergudangan & Pusat Distribusi Logistik',
    duration: '24 JP (3 Hari Kerja)',
    legal: 'UU No. 1 Tahun 1970 & Standar K3 Gudang',
    sourceKey: 'uu1',
    targetAudience: [
      'Warehouse Manager, Logistics Supervisor, & Safety Officer Gudang',
      'Inventory Control Manager & Fleet Safety Officer',
      'Tim Keselamatan Pusat Distribusi (Distribution Center)'
    ],
    outcomes: [
      'Mampu mengidentifikasi bahaya spesifik pergudangan (forklift, rak tinggi, manual handling)',
      'Menguasai penataan zonasi pejalan kaki dan jalur kendaraan operasional gudang',
      'Menguasai manajemen keselamatan penumpukan muatan palet dan proteksi APAR/sprinkler'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Identifikasi Bahaya Pergudangan & Tata Ruang Gudang Aman',
        topics: [
          'Beban Risiko Kerja Sektor Logistik & UU No. 1 Tahun 1970',
          'Perancangan Traffic Management Gudang (Pedestrian vs Forklift Zone)',
          'Standar Kekuatan Rak Palet (Pallet Racking System) & Batas Beban'
        ],
        hours: '8 JP'
      },
      {
        module: 'Modul 02: Keselamatan Operasional Forklift & Manual Handling',
        topics: [
          'Kualifikasi Operator Forklift/Reach Truck (Permenaker 08/2020)',
          'Teknik Angkat Angkut Manual (Manual Handling) Mencegah Cedera Punggung',
          'Pengamanan Area Loading Dock & Ramp Kontainer'
        ],
        hours: '10 JP'
      },
      {
        module: 'Modul 03: Proteksi Kebakaran Gudang & Tanggap Darurat',
        topics: [
          'Proteksi Sprinkler Gudang Kepadatan Tinggi (NFPA 13 Standard)',
          'Penanganan Tumpahan Bahan Kimia B3 Gudang & Kit Spill',
          'Simulasi Inspeksi Gudang & Pelaporan Safety Logistik'
        ],
        hours: '6 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Manajemen Keselamatan Operasional Pergudangan dan Logistik Modern',
        paragraphs: [
          'Aktivitas di pusat distribusi logistik melibatkan lalu lintas alat berat forklift yang padat, penumpukan rak barang berukuran tinggi, dan kegiatan angkat manual berulang.',
          'Pelatihan ini membekali tim manajemen gudang dengan pengetahuan perancangan zonasi aman, pencegahan ambruknya rak palet, dan standar keselamatan armada logistik.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Berapa batas beban maksimal angkat manual untuk satu orang pekerja laki-laki di gudang?',
        answer: 'Standar K3 Indonesia merekomendasikan batas beban angkat manual ideal untuk laki-laki dewasa adalah 15-25 kg tergantung frekuensi dan posisi angkat.'
      }
    ]
  },
  {
    slug: 'k3-sektor-pendidikan',
    title: 'Pelatihan K3 Kampus & Fasilitas Lembaga Pendidikan',
    duration: '16 JP (2 Hari Kerja)',
    legal: 'UU No. 1 Tahun 1970 & Standar Keselamatan Bangunan Gedung',
    sourceKey: 'uu1',
    targetAudience: [
      'Kepala Laboratorium Sekolah/Kampus, Kepala Bagian Umum & Rumah Tangga',
      'Tim K3 Perguruan Tinggi & Guru/Dosen Pengawas Praktikum',
      'Petugas Keamanan & Facility Manager Kampus'
    ],
    outcomes: [
      'Mampu mengidentifikasi bahaya laboratorium praktikum kimia, fisika, dan bengkel teknik',
      'Menguasai manajemen sistem evakuasi darurat massal untuk siswa dan mahasiswa',
      'Mampu menyusun standar operasional prosedur (SOP) keselamatan kampus'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Potensi Bahaya Fasilitas Pendidikan & Regulasi Keselamatan',
        topics: [
          'Tanggung Jawab Lembaga Pendidikan menurut UU No. 1 Tahun 1970',
          'Identifikasi Bahaya Gedung Kuliah, Asrama, & Area Olahraga',
          'Manajemen Proteksi Kebakaran Gedung Kampus Bertingkat'
        ],
        hours: '6 JP'
      },
      {
        module: 'Modul 02: K3 Laboratorium Kimia, Biologi, & Bengkel Praktikum',
        topics: [
          'Pengelolaan Bahan Kimia Reagen Praktikum & Safety Data Sheet (SDS)',
          'Penyediaan Lemari Asam (Fume Hood), Eyewash, & APD Praktikum',
          'Keselamatan Penggunaan Perkakas Bengkel Vokasi'
        ],
        hours: '6 JP'
      },
      {
        module: 'Modul 03: Sistem Evakuasi Bencana Sekolah/Kampus & First Aid',
        topics: [
          'Perancangan Jalur Evakuasi Massal & Titik Kumpul Aman (Assembly Point)',
          'Pelatihan Pertolongan Pertama (P3K) Kebencanaan Sekolah',
          'Simulasi Drill Evakuasi Gempa & Kebakaran Kampus'
        ],
        hours: '4 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Menciptakan Lingkungan Belajar dan Laboratorium Kampus yang Aman',
        paragraphs: [
          'Institusi pendidikan wajib menjamin keselamatan seluruh civitas akademika, staf, dan mahasiswa dari potensi bahaya kebakaran gedung, kecelakaan praktikum laboratorium kimia, serta ancaman bencana alam.',
          'Pelatihan ini membantu pengelola kampus dan sekolah membangun sistem K3 terintegrasi sesuai regulasi nasional.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Fasilitas keselamatan wajib apa saja yang harus ada di laboratorium kimia kampus?',
        answer: 'Laboratorium kimia wajib dilengkapi dengan lemari asam (fume hood), emergency eyewash & shower, APAR media CO2/Powder, SDS bahan kimia, serta kotak P3K.'
      }
    ]
  },
  {
    slug: 'k3-sektor-pariwisata-hotel',
    title: 'Pelatihan K3 Industri Perhotelan, Resort & Destinasi Wisata',
    duration: '20 JP (2 Hari Kerja)',
    legal: 'UU No. 1 Tahun 1970 & Permenkes Perkantoran',
    sourceKey: 'uu1',
    targetAudience: [
      'Chief Engineer Hotel, Executive Housekeeper, & Safety Officer Hotel',
      'Food & Beverage Manager, Executive Chef, & Security Manager',
      'Pengelola Destinasi Wisata, Waterpark, & Resort'
    ],
    outcomes: [
      'Menguasai keselamatan area kerja dapur komersial, instalasi gas LPG, dan laundry',
      'Mampu mengelola bahan kimia pembersih (housekeeping) dan klorin kolam renang',
      'Mampu merancang evakuasi darurat bagi tamu hotel dengan komunikasi bilingual'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Identifikasi Bahaya Industri Perhotelan & Dapur Komersial',
        topics: [
          'Bahaya Kerja Sektor Perhotelan menurut UU No. 1 Tahun 1970',
          'Keselamatan Dapur Komersial: Gas LPG, Deep Fryer, & Kebakaran Lemak (Class K)',
          'Pencegahan Bahaya Slip, Trip, Fall di Area Housekeeping & Public Area'
        ],
        hours: '6 JP'
      },
      {
        module: 'Modul 02: Keselamatan Ruang Mesin, Kolam Renang, & Laundry',
        topics: [
          'K3 Ruang Boiler, Chiller, & Generator Listrik Hotel (Permenaker 37/2016)',
          'Penganganan Bahan Kimia Klorin Kolam Renang & Bahan Kimia Laundry',
          'Ergonomi Kerja Petugas Housekeeping & Staf Dapur'
        ],
        hours: '8 JP'
      },
      {
        module: 'Modul 03: Tanggap Darurat Hotel & Manajemen Evakuasi Tamu',
        topics: [
          'Perancangan Sistem Peringatan Dini & Peta Evakuasi Kamar Hotel',
          'Teknik Komunikasi Evakuasi Bilingual untuk Tamu Domestik & Asing',
          'Simulasi Tanggap Darurat Kebakaran Dapur & Gedung Hotel'
        ],
        hours: '6 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Standar Keselamatan Kerja dan Keamanan Tamu di Industri Perhotelan',
        paragraphs: [
          'Industri jasa perhotelan dan pariwisata menuntut standar K3 ganda: mengamankan pekerja lini belakang (dapur, engineering, laundry) sekaligus menjamin keselamatan jiwa tamu yang menginap.',
          'Pelatihan ini mengajarkan pengelolaan bahaya dapur komersial, ruangan mesin hotel, serta skema evakuasi bencana yang ramah tamu.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Jenis APAR apa yang paling tepat disiagakan di area dapur utama hotel?',
        answer: 'Dapur komersial wajib menyediakan APAR Khusus Kelas K (Wet Chemical) yang efektif memadamkan kebakaran minyak goreng dan lemak dapur panas.'
      }
    ]
  },
  {
    slug: 'k3-sektor-pertambangan-pengantar',
    title: 'Pelatihan Dasar Keselamatan Pertambangan (SMKP Minerba)',
    duration: '30 JP (3 Hari Kerja)',
    legal: 'Kepmen ESDM No. 1827 K/30/MEM/2018',
    sourceKey: 'esdm1827_2018',
    targetAudience: [
      'Calon Pengawas Operasional Pertama (POP) & Safety Officer Tambang',
      'Mining Engineer, Geologist, & Supervisor Site Pertambangan',
      'Kontraktor Jasa Pertambangan & Sub-Kontraktor Site'
    ],
    outcomes: [
      'Memahami 7 Elemen Sistem Manajemen Keselamatan Pertambangan (SMKP Minerba)',
      'Menguasai tanggung jawab hukum Kepala Teknik Tambang (KTT) & Pengawas Operasional',
      'Mampu mengidentifikasi bahaya operasional pit tambang, jalan angkut, dan alat berat'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Regulasi Keselamatan Pertambangan & Struktur SMKP',
        topics: [
          'Kepmen ESDM No. 1827 K/30/MEM/2018 & Permen ESDM No. 26 Tahun 2018',
          'Bedah 7 Elemen SMKP Minerba (Kebijakan, Perencanaan, Organisasi, dll)',
          'Wewenang & Tanggung Jawab Hukum Kepala Teknik Tambang (KTT)'
        ],
        hours: '10 JP'
      },
      {
        module: 'Modul 02: Pengawasan Keselamatan Operasi Tambang & Alat Berat',
        topics: [
          'Keselamatan Area Pit Tambang, Kestabilan Lereng, & Stockpile',
          'Manajemen Jalan Angkut (Haul Road Safety) & Komunikasi Radio Unit',
          'Pemeriksaan Pre-Operational Check Alat Berat (Excavator, Haul Truck)'
        ],
        hours: '12 JP'
      },
      {
        module: 'Modul 03: Pengawasan Kesehatan Kerja Tambang & Evaluasi SMKP',
        topics: [
          'Pengendalian Debu Tambang, Kebisingan, & Fatigue Management Operator',
          'Pelaporan Kecelakaan Tambang (Berita Acara Kejadian Tambang)',
          'Simulasi Self-Assessment SMKP Minerba & Ujian Akhir'
        ],
        hours: '8 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Penerapan SMKP Minerba Berdasarkan Kepmen ESDM No. 1827 K/30/MEM/2018',
        paragraphs: [
          'Keselamatan Pertambangan mencakup Keselamatan dan Kesehatan Kerja Pertambangan (K3O) serta Keselamatan Operasi Pertambangan (KO Pertambangan).',
          'Pelatihan ini membekali praktisi dan pengawas tambang dengan pengetahuan teknis dalam menerapkan 7 elemen SMKP Minerba guna mewujudkan operasional tambang yang aman dan produktif.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Siapa penanggung jawab tertinggi pelaksanaan K3 di site pertambangan?',
        answer: 'Penanggung jawab tertinggi secara hukum di site pertambangan adalah Kepala Teknik Tambang (KTT) yang mendapat pengesahan dari Inspektur Tambang ESDM.'
      }
    ]
  },
  {
    slug: 'k3-sektor-konstruksi-pengantar',
    title: 'Pelatihan Dasar Keselamatan Konstruksi & SMKK PUPR',
    duration: '24 JP (3 Hari Kerja)',
    legal: 'Permen PUPR No. 10 Tahun 2021',
    sourceKey: 'pupr10_2021',
    targetAudience: [
      'Petugas Keselamatan Konstruksi, Ahli Muda K3 Konstruksi, & Site Engineer',
      'Pelaksana Proyek, Quality Control (QC), & Supervisor Proyek Gedung/Jalan',
      'Tim Unit Keselamatan Konstruksi (UKK) Penyedia Jasa'
    ],
    outcomes: [
      'Menguasai penyusunan Rencana Keselamatan Konstruksi (RKK) Dokumen Penawaran & Pelaksanaan',
      'Mampu mengkalkulasi 9 komponen Biaya Penerapan SMKK dalam RAB proyek',
      'Mampu mengawasi pekerjaan berisiko tinggi (perancah, galian tanah, pengangkatan crane)'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Pedoman SMKK Berdasarkan Permen PUPR No. 10 Tahun 2021',
        topics: [
          'Struktur Permen PUPR No. 10 Tahun 2021 & UU No. 2 Tahun 2017 Jasa Konstruksi',
          'Tugas & Fungsi Unit Keselamatan Konstruksi (UKK) Proyek',
          'Penyusunan Dokumen RKK (Rencana Keselamatan Konstruksi)'
        ],
        hours: '8 JP'
      },
      {
        module: 'Modul 02: Perhitungan Biaya SMKK & Pengawasan Pekerjaan Kritis',
        topics: [
          'Tata Cara Perhitungan 9 Pos Anggaran Biaya SMKK dalam Lelang',
          'Pengawasan K3 Perancah Scaffolding, Galian Tanah Dalam, & Bekisting',
          'Keselamatan Pengoperasian Alat Berat Konstruksi & Rigging'
        ],
        hours: '10 JP'
      },
      {
        module: 'Modul 03: Inspeksi Proyek, Penilaian IBPRP, & Evaluasi SMKK',
        topics: [
          'Penilaian Risiko Pengadaan Pekerjaan Konstruksi (IBPRP)',
          'Pelaksanaan Safety Patrol, Safety Meeting, & Safety Audit Proyek',
          'Simulasi Penyusunan Dokumen RKK Pelaksanaan Proyek'
        ],
        hours: '6 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Penerapan SMKK Berdasarkan Permen PUPR No. 10 Tahun 2021',
        paragraphs: [
          'Sistem Manajemen Keselamatan Konstruksi (SMKK) adalah bagian dari sistem manajemen pelaksanaan pekerjaan konstruksi dalam rangka menjamin keselamatan keteknikan konstruksi, keselamatan dan kesehatan kerja, keselamatan publik, dan keselamatan lingkungan.',
          'Pelatihan ini melatih pelaksana dan petugas konstruksi dalam menyusun RKK serta mengelola biaya SMKK pada setiap tahapan proyek.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Apakah biaya SMKK boleh dipotong atau dihilangkan dalam dokumen kontrak konstruksi?',
        answer: 'Tidak boleh. Berdasarkan Permen PUPR 10/2021, biaya SMKK wajib dialokasikan khusus dalam RAB proyek dan tidak dapat dihitung sebagai keuntungan penyedia jasa.'
      }
    ]
  },
  {
    slug: 'k3-sektor-migas-pengantar',
    title: 'Pelatihan Dasar Keselamatan Migas & Sistem Izin Kerja Aman',
    duration: '30 JP (3 Hari Kerja)',
    legal: 'UU No. 22 Tahun 2001 & Regulasi Migas',
    sourceKey: 'uu1',
    targetAudience: [
      'Safety Inspector Migas, Operator Offshore/Onshore Rig, & Process Operator',
      'Junior HSE Officer Kontraktor Kontrak Kerja Sama (K3S)',
      'Teknisi Maintenance Kilang Pengolahan Gas & Pertamina/Migas Vendor'
    ],
    outcomes: [
      'Memahami regulasi keselamatan operasi minyak dan gas bumi (PP 11/1979 & UU 22/2001)',
      'Menguasai sistem Izin Kerja Aman (Permit to Work System - Hot/Cold/Confined Work)',
      'Menguasai mitigasi bahaya racun gas Hydrogen Sulfide (H2S) dan tanggap darurat rig'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Regulasi Keselamatan Operasi Migas & Bahaya Spesifik Rig',
        topics: [
          'Kerangka Hukum UU No. 22 Tahun 2001 & PP No. 11 Tahun 1979 Keselamatan Migas',
          'Karakteristik Bahaya Hydrocarbon, Flammability Range, & Bahaya Explosive Zone',
          'Bahaya Racun Gas H2S (Hydrogen Sulfide) & Penggunaan Breathing Apparatus (SCBA)'
        ],
        hours: '10 JP'
      },
      {
        module: 'Modul 02: Sistem Izin Kerja Aman (PTW) & SIMOPs Migas',
        topics: [
          'Penerbitan Cold Work Permit, Hot Work Permit, & Confined Space Entry Permit',
          'Pelaksanaan Gas Testing (LFL, O2, H2S, CO) oleh Authorized Gas Tester (AGT)',
          'Prinsip Simultaneous Operations (SIMOPs) & Isolasi Energi LOTO Migas'
        ],
        hours: '12 JP'
      },
      {
        module: 'Modul 03: Tanggap Darurat Kilang/Rig & Pelaporan Insiden Migas',
        topics: [
          'Pengoperasian Deluge System, Fire Monitor, & ESD (Emergency Shut Down)',
          'Prosedur Evakuasi Offshore Helideck & Lifeboat Muster Station',
          'Simulasi Penerbitan Izin Kerja Aman Migas'
        ],
        hours: '8 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Standar Keselamatan Operasi Tingkat Tinggi di Industri Minyak dan Gas Bumi',
        paragraphs: [
          'Industri Minyak dan Gas Bumi (Migas) beroperasi pada lingkungan bertekanan tinggi dengan bahan fluida yang sangat mudah terbakar dan beracun.',
          'Pelatihan ini memberikan dasar pengetahuan yang kuat tentang keselamatan operasi migas, pengujian gas atmosferik, dan disiplin penerapan Izin Kerja Aman (PTW).'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Berapa batas ambang paparan aman gas H2S (Hydrogen Sulfide) di area kerja migas?',
        answer: 'Nilai Ambang Batas (NAB) rata-rata paparan H2S untuk 8 jam kerja adalah 1 ppm, sedangkan Threshold Limit Value Ceiling (TLV-C) tidak boleh melebihi 5 ppm.'
      }
    ]
  },
  {
    slug: 'k3-industri-manufaktur-umum',
    title: 'Pelatihan K3 Manufaktur & Operasional Mesin Industri',
    duration: '24 JP (3 Hari Kerja)',
    legal: 'UU No. 1 Tahun 1970 & Permenaker No. 38 Tahun 2016',
    sourceKey: 'uu1',
    targetAudience: [
      'Factory HSE Officer, Production Supervisor, & Maintenance Engineer',
      'Teknisi Mekanik Pabrik, Operator Mesin Pres/Conveyor, & Toolmaker',
      'Tim Keselamatan Operasional Manufaktur'
    ],
    outcomes: [
      'Menguasai pengawasan K3 Pesawat Tenaga dan Produksi sesuai Permenaker 38/2016',
      'Mampu merancang dan memantau pelindung mesin (Machine Guarding) dan Interlock System',
      'Menguasai prosedur Lockout/Tagout (LOTO) saat perawatan dan servis mesin pabrik'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Regulasi K3 Pesawat Tenaga Produksi (Permenaker 38/2016)',
        topics: [
          'Penelaahan Permenaker No. 38 Tahun 2016 tentang K3 Pesawat Tenaga dan Produksi',
          'Identifikasi Bahaya Titik Jepit (Nip Point), Rotasi Mesin, & Transmisi Mekanik',
          'Pengawasan Penggerak Mula (Mesin Diesel, Turbin) & Penggerak Listrik'
        ],
        hours: '8 JP'
      },
      {
        module: 'Modul 02: Machine Guarding & Isolation Prosedur Lockout/Tagout (LOTO)',
        topics: [
          'Tipe Pelindung Mesin: Fixed Guard, Interlocking Guard, & Safety Light Curtain',
          'Pelaksanaan 6 Langkah Prosedur LOTO Isolasi Energi Mekanik & Listrik',
          'Pengawasan Ban Berjalan (Conveyor Belt) & Tombol Pull-Wire Emergency'
        ],
        hours: '10 JP'
      },
      {
        module: 'Modul 03: Kebisingan Pabrik & Pengelolaan Tata Letak (Layout) Aman',
        topics: [
          'Pengendalian Kebisingan Mesin Produksi & Enclosure Akustik',
          'Penataan Ruang Kerja Mesin, Garis Demarkasi Lini, & Ergonomi Operator',
          'Simulasi Inspeksi K3 Mesin Manufaktur'
        ],
        hours: '6 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Pengawasan K3 Operasional Mesin Pabrik berdasarkan Permenaker 38/2016',
        paragraphs: [
          'Pabrik manufaktur dipenuhi oleh mesin perkakas, mesin press, penggerak mula, dan conveyor yang bergerak dengan kecepatan tinggi.',
          'Pelatihan ini berfokus pada pencegahan cedera anggota tubuh akibat jepitan mesin melalui perancangan Machine Guarding yang kokoh dan disiplin penerapakan Lockout/Tagout (LOTO).'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Kapan prosedur Lockout/Tagout (LOTO) wajib diterapkan oleh teknisi mesin?',
        answer: 'Prosedur LOTO wajib dipasang setiap kali teknisi melakukan pemeliharaan, perbaikan, pembersihan, atau pembebasan kemacetan material pada mesin yang berpotensi menyala mendadak.'
      }
    ]
  },
  {
    slug: 'k3-industri-makanan-minuman',
    title: 'Pelatihan K3 Industri Makanan & Minuman (Food & Beverage Plant)',
    duration: '24 JP (3 Hari Kerja)',
    legal: 'UU No. 1 Tahun 1970 & Permenaker 05/2018',
    sourceKey: 'permen05_2018',
    targetAudience: [
      'Safety Officer Pabrik F&B, Quality Assurance (QA) Manager, & Plant Engineer',
      'Supervisor Pengolahan Makanan, Kemasan (Canning/Packaging), & Sanitasi',
      'Tim Keselamatan Pabrik Minuman & Pengolahan Daging/Kelapa Sawit'
    ],
    outcomes: [
      'Menguasai mitigasi bahaya spesifik pabrik makanan (lantai basah/licin, mesin pengemas, amonia)',
      'Mampu menerapkan K3 sistem penyejuk amonia bejana tekan (Permenaker 37/2016)',
      'Mampu mengintegrasikan norma K3 dengan standar keamanan pangan HACCP & ISO 22000'
    ],
    syllabusModules: [
      {
        module: 'Modul 01: Potensi Bahaya Khusus Industri F&B & Regulasi Terkait',
        topics: [
          'Beban Bahaya Pabrik Makanan: Area Basah, Suhu Panas Steam, & Cold Storage',
          'Pencegahan Slip, Trip, Fall Menggunakan Sepatu Boot Anti-Slip & Drainase',
          'Pengawasan Steam Boiler & Ketel Uap Makanan (Permenaker 01/1988)'
        ],
        hours: '8 JP'
      },
      {
        module: 'Modul 02: Keselamatan Sistem Amonia Refrigerasi & Mesin Packaging',
        topics: [
          'Mitigasi Kebocoran Gas Amonia (NH3) pada Chiller & Cold Storage (Permenaker 37/2016)',
          'Pengamanan Mesin Canning, Botol Kaca, Machine Guarding Filling Line',
          'Pengelolaan APD Higienis Food-Grade (Sarung Tangan, Hairnet, Respirator)'
        ],
        hours: '10 JP'
      },
      {
        module: 'Modul 03: Integrasi K3 dengan HACCP / ISO 22000 & Audit Lapangan',
        topics: [
          'Harmonisasi Program K3 dengan Keamanan Pangan (Food Safety)',
          'Sanitasi Bahan Kimia Cleaning in Place (CIP) & APD Asam/Basa',
          'Simulasi Audit K3 Pabrik Makanan & Minuman'
        ],
        hours: '6 JP'
      }
    ],
    customBlocks: [
      {
        heading: 'Penerapan K3 Terpadu pada Fasilitas Manufaktur Makanan dan Minuman',
        paragraphs: [
          'Pabrik pengolahan makanan dan minuman memiliki tantangan ganda: menjaga keselamatan pekerja dari bahaya fisik/kimia sekaligus menjaga sanitasi produk agar bebas kontaminasi.',
          'Pelatihan ini mengajarkan mitigasi bahaya kebocoran amonia pendingin, bahaya tergelincir di area basah, dan keselamatan pengoperasian ketel uap steam pengolahan.'
        ]
      }
    ],
    customFaqs: [
      {
        question: 'Mengapa kebocoran gas amonia di pabrik es/makanan sangat berbahaya bagi keselamatan?',
        answer: 'Gas Amonia (NH3) bersifat sangat toksik dan korosif terhadap saluran pernapasan, serta dapat memicu ledakan jika mencapai batas konsentrasi LEL di ruang tertutup.'
      }
    ]
  }
];

// Bespoke builder for Kelembagaan records
function buildKelembagaanRecord(s: ProgramSeed): ContentRecordInput {
  const legal = s.legal;
  const duration = s.duration;

  const cleanTitle = s.title.replace(/^(Pelatihan & Pembinaan|Pelatihan|Pembinaan)\s+/i, '').replace(/\s*\(.*?\)\s*/g, ' ').trim();
  const kw = s.slug === 'ahli-k3-umum'
    ? 'pelatihan ahli k3 umum kemnaker'
    : s.slug === 'auditor-smk3'
    ? 'sertifikasi auditor smk3 kemnaker'
    : `pelatihan ${cleanTitle.toLowerCase()} kemnaker`;
  const intent = `jadwal, biaya, syarat pendaftaran, dan sertifikasi ${cleanTitle.toLowerCase()}`;

  const sourceItem: SourceItem = officialSources[s.sourceKey || 'pp50'] || officialSources.pp50;

  // Compute total syllabus hours dynamically for strict verification
  const totalSyllabusHours = s.syllabusModules.reduce((acc, m) => {
    const num = parseInt(m.hours.replace(/[^0-9]/g, ''), 10);
    return acc + (isNaN(num) ? 0 : num);
  }, 0);

  return {
    section: 'pelatihan',
    slug: s.slug,
    title: s.title,
    metaTitle: `${s.title} | Jadwal, Biaya & Sertifikasi Resmi`,
    description: `Pembinaan resmi ${s.title} durasi ${duration}. Membahas materi ${s.syllabusModules[0].topics[0]}, acuan regulasi ${legal}, dokumen persyaratan, dan skema sertifikasi Kemnaker RI bersama PT Kreasi Ultimate Berjaya.`,
    answer: `${s.title} adalah program pembinaan tata kelola keselamatan kerja resmi berdurasi ${duration} sesuai ketentuan ${legal}. Program ini membekali peserta dengan keahlian teknis ${s.outcomes[0].toLowerCase()}, ${s.outcomes[1].toLowerCase()}, serta penyusunan berkas administrasi kepatuhan K3.`,
    highlights: [
      `Durasi Pembinaan: ${duration} (Total ${totalSyllabusHours} JP)`,
      `Landasan Hukum Utama: ${legal}`,
      `Sertifikasi Output: Sertifikat Resmi Kemnaker RI / Lisensi Kewenangan`,
      `Metode Pelaksanaan: Blended Online Learning & Corporate In-House`
    ],
    courseDetails: {
      level: 'Sertifikasi Pembinaan Kemnaker RI / Kompetensi Industri',
      duration,
      method: 'Blended Learning (Teori Virtual Interaktif + Praktik Lapangan & Evaluasi)',
      legalBasis: legal,
      targetAudience: s.targetAudience,
      prerequisites: [
        'Scan KTP & Ijazah pendidikan formal sesuai kualifikasi regulasi terkait',
        'Surat Penugasan Resmi dari manajemen perusahaan pengutus',
        'Pas foto formal background merah / biru ukuran 3x4 & 4x6',
        'Surat Keterangan Sehat dari dokter pemeriksa kesehatan'
      ],
      certificationOutput: [
        `Sertifikat Pembinaan Resmi untuk ${cleanTitle}`,
        'Surat Keputusan Penunjukan (SKP) Pengawas Ketenagakerjaan (apabila berlaku)',
        'Kartu Lisensi Kewenangan K3 (SIO Kemnaker) Masa Berlaku 3 Tahun'
      ],
      syllabusModules: s.syllabusModules,
      priceInfo: 'Investasi mencakup biaya pembinaan resmi, modul fisik/digital, sertifikat & lisensi resmi, serta pendampingan verifikasi berkas. Penawaran khusus tersedia untuk In-House Training.'
    },
    blocks: [
      ...s.customBlocks,
      {
        heading: `Garis Besar Silabus Pembinaan & Hasil Pembelajaran ${cleanTitle}`,
        paragraphs: [
          `Penyelenggaraan ${s.title} dilaksanakan selama ${duration} dengan total materi ${totalSyllabusHours} Jam Pelajaran (JP). Seluruh kurikulum dirancang secara sistematis untuk menjawab kebutuhan operasional lapangan dan audit kepatuhan hukum.`,
          `Setiap modul materi disampaikan oleh instruktur senior berlisensi Kemnaker RI serta praktisi industri yang berpengalaman menangani berbagai studi kasus di fasilitas komersial dan pabrik manufaktur.`
        ],
        bullets: s.outcomes
      },
      {
        heading: 'Persyaratan Berkas Administrasi & Prosedur Pendaftaran',
        paragraphs: [
          `Calon peserta pembinaan dipersyaratkan melengkapi berkas administrasi pendaftaran secara digital sebelum tanggal penutupan batch:`,
        ],
        bullets: [
          'Scan KTP dan Ijazah pendidikan formal terakhir yang terverifikasi',
          'Surat Utusan / Rekomendasi Resmi dari manajemen perusahaan pengutus',
          'Pas foto berwarna berlatar belakang merah / biru format JPEG tinggi',
          'Curriculum Vitae (CV) ringkas yang mencantumkan pengalaman kerja relevan'
        ]
      },
      {
        heading: 'Layanan Pembinaan Public Batch & Penawaran In-House Corporate',
        paragraphs: [
          `PT Kreasi Ultimate Berjaya menyelenggarakan ${s.title} secara rutin setiap bulan melalui skema Public Training, serta melayani permintaan In-House Training yang disesuaikan dengan kondisi risiko spesifik tempat kerja Anda.`,
          'Tim konsultan kami siap menerbitkan Surat Penawaran Harga (SPH) resmi dan memverifikasi kelayakan berkas pendaftaran peserta sebelum sesi pelatihan dimulai.'
        ]
      }
    ],
    faqs: [
      ...s.customFaqs,
      {
        question: `Berapa lama proses penerbitan Sertifikat resmi untuk pelatihan ${cleanTitle}?`,
        answer: 'Surat Keterangan Lulus (SKL) diterbitkan segera setelah evaluasi selesai. Sertifikat fisik dan Lisensi/SKP resmi diterbitkan dalam waktu 30-45 hari kerja melalui portal digital e-K3 Kemnaker RI.'
      },
      {
        question: 'Apakah PT Kreasi Ultimate Berjaya melayani pengajuan In-House Training di lokasi pabrik kami?',
        answer: 'Ya, kami melayani penyelenggaraan In-House Training di seluruh wilayah Indonesia dengan silabus dan jadwal yang disesuaikan dengan kebutuhan operasional perusahaan Anda.'
      }
    ],
    related: [
      'pelatihan/ahli-k3-umum',
      'panduan/syarat-ahli-k3-umum',
      'panduan/biaya-pelatihan-k3',
      'perbandingan/bnsp-vs-kemnaker',
      'profesi/ahli-k3-umum',
      'regulasi-k3/pp-50-2012-penerapan-smk3'
    ],
    sources: [sourceItem, officialSources.uu1, officialSources.pp50],
    status: 'published',
    publishedAt: '2026-08-01',
    updatedAt: '2026-09-01',
    indexable: true,
    intent: `${kw} ${intent}`,
    primaryKeyword: kw,
    searchIntent: intent,
    intentType: 'commercial',
    parentTopic: 'Pelatihan Kelembagaan, Tata Kelola K3 & SMK3',
    cannibalizationGroup: 'pelatihan-kelembagaan',
    contentKind: 'program',
    primaryCtaText: `Tanya Jadwal & Biaya ${cleanTitle}`,
    primaryCtaIntent: 'jadwal',
    secondaryCtaText: 'Konsultasi In-House Training',
    secondaryCtaIntent: 'perusahaan'
  };
}

// 2. DOMAIN PENANGGULANGAN KEBAKARAN & PROTEKSI API (30 Programs)
const kebakaranSeeds: ProgramSeed[] = [
  { slug: 'k3-kebakaran', title: 'Pelatihan K3 Penanggulangan Kebakaran (Paket Sertifikasi Kemnaker)', duration: '30 JP (3 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999', sourceKey: 'kep186_1999' },
  { slug: 'k3-kebakaran-kelas-d', title: 'Pelatihan Petugas Peran Kebakaran (Kelas D Sertifikasi Kemnaker RI)', duration: '25 JP (3 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999 Lampiran I', sourceKey: 'kep186_1999' },
  { slug: 'k3-kebakaran-kelas-c', title: 'Pelatihan Regu Penanggulangan Kebakaran (Kelas C Sertifikasi Kemnaker)', duration: '60 JP (6 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999 Lampiran II', sourceKey: 'kep186_1999' },
  { slug: 'k3-kebakaran-kelas-b', title: 'Pelatihan Koordinator Unit Penanggulangan Kebakaran (Kelas B Kemnaker)', duration: '40 JP (4 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999 Lampiran III', sourceKey: 'kep186_1999' },
  { slug: 'k3-kebakaran-kelas-a', title: 'Pelatihan Ahli K3 Spesialis Penanggulangan Kebakaran (Kelas A Kemnaker)', duration: '120 JP (12 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999 Lampiran IV', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-inspeksi-pemeliharaan-apar-tabung-pemadam-api-ringan', title: 'Pelatihan Inspeksi & Pemeliharaan APAR Tabung Pemadam Api Ringan', duration: '16 JP (2 Hari Kerja)', legal: 'Permenaker No. PER.04/MEN/1980', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-pengujian-sistem-hydran-kebakaran-pomp-pipa-nozzle', title: 'Pelatihan Pengujian Sistem Hydran Kebakaran (Pompa, Pipa & Nozzle)', duration: '24 JP (3 Hari Kerja)', legal: 'Instruksi Menaker No. INS.11/M/BW/1997', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-perancangan-pemeliharaan-sistem-sprinkler-otomatis', title: 'Pelatihan Perancangan & Pemeliharaan Sistem Sprinkler Otomatis', duration: '24 JP (3 Hari Kerja)', legal: 'SNI 03-3989 & Standar Kemnaker', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-sistem-deteksi-alarm-kebakaran-smoke-heat-detector', title: 'Pelatihan Sistem Deteksi & Alarm Kebakaran (Smoke & Heat Detector)', duration: '20 JP (2 Hari Kerja)', legal: 'SNI 03-3985 & Permenaker 02/1983', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-sistem-pemadam-gas-bersih-clean-agent-co2-fm200', title: 'Pelatihan Sistem Pemadam Gas Bersih (Clean Agent CO2 & FM200)', duration: '20 JP (2 Hari Kerja)', legal: 'NFPA 2001 & Permenaker 02/1983', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-manajemen-tanggap-darurat-kebakaran-emergency-response', title: 'Pelatihan Manajemen Tanggap Darurat Kebakaran (Emergency Response)', duration: '24 JP (3 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-penyusunan-dokumen-fire-emergency-plan-fep-gedung', title: 'Pelatihan Penyusunan Dokumen Fire Emergency Plan (FEP) Gedung', duration: '20 JP (2 Hari Kerja)', legal: 'PP No. 50 Tahun 2012 Kriteria 6.7', sourceKey: 'pp50' },
  { slug: 'pelatihan-simulasi-evakuasi-kebakaran-drill-gedung-bertingkat', title: 'Pelatihan Simulasi Evakuasi Kebakaran (Fire Drill Gedung Bertingkat)', duration: '16 JP (2 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-inspeksi-keselamatan-kebakaran-gedung-fire-safety-inspection', title: 'Pelatihan Inspeksi Keselamatan Kebakaran Gedung (Fire Safety Audit)', duration: '24 JP (3 Hari Kerja)', legal: 'Permenaker No. PER.02/MEN/1983', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-tata-cara-pembentukan-tim-tanggap-darurat-ert-pabrik', title: 'Pelatihan Pembentukan Tim Tanggap Darurat (Emergency Response Team ERT)', duration: '20 JP (2 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-k3-pekerjaan-panas-hot-work-permit-welding-cutting', title: 'Pelatihan K3 Pekerjaan Panas (Hot Work Permit, Welding & Cutting)', duration: '20 JP (2 Hari Kerja)', legal: 'UU No. 1 Tahun 1970 & Permenaker 02/1983', sourceKey: 'uu1' },
  { slug: 'pelatihan-pencegahan-kebakaran-area-penyimpanan-bahan-kimia-mudah-terbakar', title: 'Pelatihan Pencegahan Kebakaran Area Bahan Kimia Mudah Terbakar', duration: '24 JP (3 Hari Kerja)', legal: 'Kepmenaker No. KEP.187/MEN/1999 & Kep-186/1999', sourceKey: 'kep187_1999' },
  { slug: 'pelatihan-pencegahan-kebakaran-instalasi-listrik-panel-gardu', title: 'Pelatihan Pencegahan Kebakaran Instalasi Listrik & Panel Gardu', duration: '20 JP (2 Hari Kerja)', legal: 'Permenaker No. 12 Tahun 2015 & SNI PUIL', sourceKey: 'permen12_2015' },
  { slug: 'pelatihan-inspeksi-tangga-darurat-pintu-kebakaran-pressurized-stairwell', title: 'Pelatihan Inspeksi Tangga Darurat & Pintu Tahan Api Pressurized Stairwell', duration: '16 JP (2 Hari Kerja)', legal: 'SNI 03-1736 & Permenaker 02/1983', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-investigasi-penyebab-kebakaran-industri-fire-investigation', title: 'Pelatihan Investigasi Penyebab Kebakaran Industri (Fire Investigation)', duration: '24 JP (3 Hari Kerja)', legal: 'Permenaker No. PER.03/MEN/1998', sourceKey: 'uu1' },
  { slug: 'pelatihan-penilaian-risiko-kebakaran-fire-risk-assessment-fra', title: 'Pelatihan Penilaian Risiko Kebakaran (Fire Risk Assessment FRA)', duration: '20 JP (2 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-k3-penanggulangan-kebakaran-dapur-komersial-restoran', title: 'Pelatihan K3 Penanggulangan Kebakaran Dapur Komersial & Restoran', duration: '16 JP (2 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-k3-kebakaran-area-gudang-logistik-rack-storage', title: 'Pelatihan K3 Kebakaran Area Gudang Logistik & High-Rack Storage', duration: '20 JP (2 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-k3-kebakaran-kapal-fasilitas-pelabuhan-maritim', title: 'Pelatihan K3 Kebakaran Kapal & Fasilitas Pelabuhan Maritim', duration: '30 JP (3 Hari Kerja)', legal: 'Kepmenaker KEP.186/MEN/1999 & Standar Maritim', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-k3-kebakaran-pabrik-tekstil-garmen-debu-serabut', title: 'Pelatihan K3 Kebakaran Pabrik Tekstil, Garmen & Debu Serabut', duration: '20 JP (2 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-k3-kebakaran-pabrik-kertas-kayu-sawmill', title: 'Pelatihan K3 Kebakaran Pabrik Kertas, Kayu & Sawmill Industri', duration: '20 JP (2 Hari Kerja)', legal: 'Kepmenaker No. KEP.186/MEN/1999', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-k3-kebakaran-stasiun-pengisian-bahan-bakar-spbu', title: 'Pelatihan K3 Kebakaran Stasiun Pengisian Bahan Bakar (SPBU / SPBE)', duration: '20 JP (2 Hari Kerja)', legal: 'Kepmenaker KEP.186/MEN/1999 & Standar Pertamina', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-k3-kebakaran-pusat-data-data-center-server-room', title: 'Pelatihan K3 Kebakaran Pusat Data (Data Center & Server Room)', duration: '20 JP (2 Hari Kerja)', legal: 'NFPA 75 & Permenaker 02/1983', sourceKey: 'kep186_1999' },
  { slug: 'pelatihan-audit-kepatuhan-sistem-proteksi-kebakaran-permenaker-02-1983', title: 'Pelatihan Audit Kepatuhan Sistem Proteksi Kebakaran (Permenaker 02/1983)', duration: '24 JP (3 Hari Kerja)', legal: 'Permenaker No. PER.02/MEN/1983', sourceKey: 'kep186_1999' },
  { slug: 'k3-instalasi-pipa-gas-medis', title: 'Pelatihan K3 Instalasi Pipa Gas Medis & Tabung Oksigen Rumah Sakit', duration: '24 JP (3 Hari Kerja)', legal: 'Permenkes No. 66 Tahun 2016 & Permenaker 37/2016', sourceKey: 'permenkes66_2016' }
];

function buildKebakaranRecord(s: ProgramSeed): ContentRecordInput {
  const legal = s.legal || 'Kepmenaker No. KEP.186/MEN/1999';
  const duration = s.duration || '24 JP (3 Hari Kerja)';

  const cleanTitle = s.title.replace(/^(Pelatihan & Pembinaan|Pelatihan|Pembinaan)\s+/i, '').replace(/\s*\(.*?\)\s*/g, ' ').trim();
  const kw = `pelatihan ${cleanTitle.toLowerCase()} kemnaker`;
  const intent = `jadwal, biaya, syarat pendaftaran, dan lisensi petugas kebakaran ${cleanTitle.toLowerCase()}`;

  const sourceItem: SourceItem = officialSources[s.sourceKey || 'kep186_1999'] || officialSources.kep186_1999;

  return {
    section: 'pelatihan',
    slug: s.slug,
    title: s.title,
    metaTitle: `${s.title} | Jadwal, Biaya & Sertifikasi Resmi`,
    description: `Pelatihan kebakaran resmi ${s.title} durasi ${duration}. Penguasaan APAR Permenaker 04/1980, hydran, sprinkler, clean agent FM200, Fire Drill, dan lisensi K3 Kemnaker RI dengan PT Kreasi Ultimate Berjaya.`,
    answer: `${s.title} adalah program pembinaan keselamatan kebakaran berdurasi ${duration} berlandaskan ${legal}. Pelatihan ini membekali petugas dan tim tanggap darurat dengan kemampuan teknis memadamkan api (Kelas A/B/C/D), menginspeksi sistem proteksi aktif/pasif, serta memimpin evakuasi darurat gedung bertingkat.`,
    highlights: [
      `Durasi Pelatihan: ${duration}`,
      `Landasan Hukum: ${legal}`,
      `Penunjukan Resmi: Lisensi Petugas / Regu Kebakaran Kemnaker RI`,
      `Praktik Lapangan: Fire Ground APAR, Hydran, Hose Reel & Smoke Chamber`
    ],
    courseDetails: {
      level: 'Sertifikasi Pembinaan Kemnaker RI',
      duration,
      method: 'Blended Learning (Teori Virtual + Praktik Fire Ground On-Site)',
      legalBasis: legal,
      targetAudience: [
        'Petugas Peran Kebakaran Gedung & Tim ERT Pabrik',
        'Koordinator Unit Penanggulangan Kebakaran & HSE Officer',
        'Teknisi Maintenance Proteksi Kebakaran (Hydran, APAR, Alarm)'
      ],
      prerequisites: [
        'Scan KTP aktif calon peserta',
        'Scan Ijazah pendidikan formal (Minimal SLTA untuk Kelas D/C, D3/S1 untuk B/A)',
        'Surat Keterangan Sehat dari dokter (bebas penyakit jantung & pernapasan)',
        'Pas foto formal background merah 3x4 & 4x6'
      ],
      certificationOutput: [
        `Sertifikat Pembinaan Kemnaker RI untuk ${cleanTitle}`,
        'Surat Keputusan Penunjukan (SKP) Unit Kebakaran',
        'Kartu Lisensi Kewenangan K3 Penanggulangan Kebakaran (Berlaku 3 Tahun)'
      ],
      syllabusModules: [
        {
          module: 'Modul 01: Segitiga Api, Teori Kebakaran & Permenaker 04/1980 APAR',
          topics: [
            'Prinsip Kimia Kebakaran & Klasifikasi Kebakaran Kelas A, B, C, D',
            'Teknik Pemilihan Media Pemadam: Air, Busa (Foam), Powder, CO2, Clean Agent',
            'Inspeksi Visual, Penimbangan & Pengujian Tekanan APAR Terjadwal'
          ],
          hours: '8 JP'
        },
        {
          module: 'Modul 02: Sistem Proteksi Aktif/Pasif & Pengoperasian Hydran',
          topics: [
            'Pengoperasian Pompa Hydran (Jockey, Main Electric, Diesel Engine)',
            'Teknik menggelar selang (hose laying), penyambungan coupling, dan holding nozzle',
            'Sistem Deteksi Alarm Kebakaran Smoke/Heat Detector & Sprinkler Otomatis'
          ],
          hours: '12 JP'
        },
        {
          module: 'Modul 03: Simulasi Fire Drill, Evakuasi & Ujian Praktik Ground',
          topics: [
            'Penyusunan Prosedur Fire Emergency Plan (FEP) & Komando Evakuasi Gedung',
            'Simulasi Pemadaman Api Nyata (Live Fire Fighting) Menggunakan APAR & Hydran',
            'Evaluasi Ujian Teori & Uji Keterampilan K3 Kebakaran Kemnaker'
          ],
          hours: '10 JP'
        }
      ],
      priceInfo: 'Investasi mencakup modul fisik/digital, pengisian gas APAR praktik, konsumsi, sertifikat & lisensi Kemnaker RI. Tersedia penawaran in-house fire drill perusahaan.'
    },
    blocks: [
      {
        heading: `Landasan Hukum & Kewajiban Proteksi Kebakaran ${s.title}`,
        paragraphs: [
          `Bahaya kebakaran di lingkungan pabrik, gedung bertingkat, dan gudang logistik merupakan ancaman fatalitas terbesar yang dapat menghentikan kelangsungan bisnis. Oleh karena itu, ${legal} mewajibkan pengurus tempat kerja membentuk unit penanggulangan kebakaran yang rasional sesuai jumlah tenaga kerja dan tingkat risiko.`,
          `Mengikuti ${s.title} menjamin organisasi Anda memiliki personel berlisensi sah yang mampu bertindak cepat dalam 3 menit pertama kejadian sebelum bantuan pemadam kebakaran kota tiba.`
        ]
      },
      {
        heading: 'Silabus Teknis: Pemadaman Api Nyata & Maintenance Hydran',
        paragraphs: [
          'Peserta tidak hanya menerima teori di kelas, tetapi diwajibkan mengikuti latihan basah (wet drill) di fire ground dengan mengoperasikan berbagai jenis alat pemadam.',
          'Kurikulum mencakup pemeliharaan preventif pompa hydran diesel, pengetesan pressure switch, pengujian jaringan pipa sprinkler, serta pemeriksaan door closer tangga darurat pressurized stairwell.'
        ],
        bullets: [
          'Penguasaan Metode Pemadaman: Cooling, Smothering, Starvation, dan Chemical Chain Breaking',
          'Pemeriksaan Teknis APAR: Kebocoran pressure gauge, kondisi selang, nozzle, dan media powder',
          'Teknik Hydran Lapangan: Pembukaan katup landing valve, komunikasi selang, dan pertahanan nozzleman',
          'Penyusunan Skenario Fire Drill & Manajemen Jalur Evakuasi Gedung Bertingkat'
        ]
      },
      {
        heading: 'Penunjukan Resmi K3 Kebakaran & Syarat Lisensi Kemnaker',
        paragraphs: [
          'Peserta yang dinyatakan lulus mendapatkan Lisensi K3 Penanggulangan Kebakaran Kemnaker RI.',
          'Lisensi ini menjadi bukti resmi kepatuhan saat inspeksi dinas tenaga kerja, audit SMK3 PP 50/2012, maupun klaim polis asuransi properti industri.'
        ]
      },
      {
        heading: 'Layanan Public Batch & In-House Training Fire Drill On-Site',
        paragraphs: [
          `PT Kreasi Ultimate Berjaya melayani pendaftaran Public Class maupun In-House Fire Drill langsung di fasilitas pabrik Anda di seluruh Indonesia.`,
          'Kami menyediakan instruktur praktisi senior pemadam kebakaran dan mendampingi penyusunan Fire Emergency Plan (FEP) perusahaan.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Apa perbedaan Petugas Kebakaran Kelas D, C, B, dan A?',
        answer: 'Kelas D adalah Petugas Peran Kebakaran unit kerja (rasio 1:25 pekerja). Kelas C adalah Regu Penanggulangan Kebakaran fisik. Kelas B adalah Koordinator Unit Kebakaran. Kelas A adalah Ahli K3 Spesialis Kebakaran penanggung jawab sistem.'
      },
      {
        question: 'Apakah pelatihan kebakaran ini mewajibkan praktik pemadaman api nyata?',
        answer: 'Ya, seluruh peserta wajib mengikuti praktik pemadaman api nyata (live fire fighting) menggunakan APAR dan pengoperasian jaringan hose hydran di lokasi latihan.'
      },
      {
        question: 'Bagaimana cara mendaftar batch pelatihan kebakaran terdekat?',
        answer: 'Hubungi tim admisi PT Kreasi Ultimate Berjaya melalui tombol WhatsApp untuk informasi ketersediaan kuota batch publik atau pengajuan proposal in-house training.'
      }
    ],
    related: [
      'pelatihan/k3-kebakaran-kelas-d',
      'pelatihan/ahli-k3-umum',
      'panduan/syarat-ahli-k3-umum',
      'panduan/biaya-pelatihan-k3',
      'perbandingan/bnsp-vs-kemnaker',
      'regulasi-k3/uu-1-1970'
    ],
    sources: [sourceItem, officialSources.uu1, officialSources.pp50],
    status: 'published',
    publishedAt: '2026-08-01',
    updatedAt: '2026-09-01',
    indexable: true,
    intent: `${kw} ${intent}`,
    primaryKeyword: kw,
    searchIntent: intent,
    intentType: 'commercial',
    parentTopic: 'Pelatihan Penanggulangan Kebakaran & Proteksi Api',
    cannibalizationGroup: 'pelatihan-kebakaran',
    contentKind: 'program',
    primaryCtaText: `Tanya Jadwal & Biaya ${cleanTitle}`,
    primaryCtaIntent: 'jadwal',
    secondaryCtaText: 'Konsultasi In-House Training',
    secondaryCtaIntent: 'perusahaan'
  };
}

// Export 300 records generated cleanly across all domains
export function generatePelatihanRecords(): ContentRecordInput[] {
  const records: ContentRecordInput[] = [];

  // Domain 1: Kelembagaan
  for (const s of kelembagaanSeeds) {
    records.push(buildKelembagaanRecord(s));
  }

  // Domain 2: Kebakaran
  for (const s of kebakaranSeeds) {
    records.push(buildKebakaranRecord(s));
  }

  // Add the remaining 8 domains using domain-specific build logic...
  // For remaining 240 seeds, map cleanly to maintain 300 records target!
  const remainingDomains = [
    { cat: 'kelistrikan', name: 'K3 Kelistrikan & Energi', legal: 'Permenaker No. 12 Tahun 2015', key: 'permen12_2015' },
    { cat: 'paa', name: 'Pesawat Angkat & Pesawat Angkut', legal: 'Permenaker No. 08 Tahun 2020', key: 'permen08_2020' },
    { cat: 'pubt', name: 'Pesawat Uap & Bejana Tekan', legal: 'Permenaker No. 37 Tahun 2016', key: 'permen37_2016' },
    { cat: 'kimia', name: 'Bahan Kimia & B3', legal: 'Kepmenaker No. KEP.187/MEN/1999', key: 'kep187_1999' },
    { cat: 'higiene', name: 'Higiene Industri & Lingkungan Kerja', legal: 'Permenaker No. 05 Tahun 2018', key: 'permen05_2018' },
    { cat: 'konstruksi', name: 'Konstruksi Bangunan & Sipil', legal: 'Permen PUPR No. 10/2021', key: 'pupr10_2021' },
    { cat: 'ketinggian', name: 'Bekerja di Ketinggian & Ruang Terbatas', legal: 'Permenaker No. 09 Tahun 2016', key: 'permen09_2016' },
    { cat: 'kesehatan', name: 'Kesehatan Kerja & Pertolongan Pertama (P3K)', legal: 'Permenaker No. PER.15/MEN/VIII/2008', key: 'permen15_2008' }
  ];

  // We build each remaining domain's 30 seeds with domain-tailored technical descriptions & topics
  for (const d of remainingDomains) {
    for (let i = 1; i <= 30; i++) {
      const slugIndex = (records.length) + 1;
      const slug = getSlugForIndex(slugIndex);
      const title = getTitleForIndex(slugIndex);
      const legalStr = getLegalForIndex(slugIndex) || d.legal;
      const durationStr = getDurationForIndex(slugIndex) || '24 JP (3 Hari Kerja)';

      const isBnsp = title.toLowerCase().includes('bnsp') || legalStr.toLowerCase().includes('skkni') || title.toLowerCase().includes('lsp');
      const isKemnaker = !isBnsp && (title.toLowerCase().includes('kemnaker') || legalStr.toLowerCase().includes('permen') || legalStr.toLowerCase().includes('uu no') || legalStr.toLowerCase().includes('kepmen'));
      const pathway = isBnsp ? 'bnsp' : isKemnaker ? 'kemnaker' : 'practical';

      const cleanT = title.replace(/^(Pelatihan & Pembinaan|Pelatihan|Pembinaan)\s+/i, '').replace(/\s*\(.*?\)\s*/g, ' ').trim();
      const kw = isBnsp ? `sertifikasi ${cleanT.toLowerCase()} bnsp` : isKemnaker ? `pelatihan ${cleanT.toLowerCase()} kemnaker` : `training ${cleanT.toLowerCase()} industri`;
      const intent = `jadwal, biaya, syarat pendaftaran, dan silabus ${cleanT.toLowerCase()}`;

      const techFocus = getTechFocusForDomain(d.cat);

      records.push({
        section: 'pelatihan',
        slug,
        title,
        metaTitle: `${title} | Jadwal, Biaya & Sertifikasi Resmi`,
        description: `Pelatihan ${cleanT} durasi ${durationStr} berlandaskan ${legalStr}. Membahas ${techFocus.shortDesc}, mitigasi risiko bahaya, dan uji sertifikasi resmi PT Kreasi Ultimate Berjaya.`,
        answer: `${title} adalah program pelatihan keselamatan kerja teknis berdurasi ${durationStr} sesuai ${legalStr}. Pelatihan ini membekali teknisi dan pengawas dengan keahlian operasional ${techFocus.answerDetail}, inspeksi peralatan, dan pemenuhan regulasi K3 nasional.`,
        highlights: [
          `Durasi Pembinaan: ${durationStr}`,
          `Dasar Hukum Acuan: ${legalStr}`,
          `Jalur Sertifikasi: ${pathway === 'kemnaker' ? 'Sertifikasi Pembinaan Kemnaker RI (SKP & Lisensi K3)' : pathway === 'bnsp' ? 'Sertifikasi Kompetensi BNSP / LSP' : 'Sertifikat Pelatihan Industri Terapan PT Kreasi Ultimate Berjaya'}`,
          `Fokus Pembelajaran: ${techFocus.highlightText}`
        ],
        courseDetails: {
          level: pathway === 'kemnaker' ? 'Sertifikasi Pembinaan Kemnaker RI' : pathway === 'bnsp' ? 'Sertifikasi Kompetensi BNSP / LSP' : 'Sertifikat Pelatihan Industri Terapan',
          duration: durationStr,
          method: 'Blended Learning (Online Teori Interaktif + PKL Lapangan / Praktik Terpadu)',
          legalBasis: legalStr,
          targetAudience: techFocus.audience,
          prerequisites: pathway === 'kemnaker'
            ? ['Scan KTP aktif calon peserta', 'Scan Ijazah formal (SLTA/D3/S1 sesuai regulasi skema)', 'Surat Penugasan Resmi Perusahaan pengutus', 'Pas foto formal background merah 3x4 & 4x6']
            : pathway === 'bnsp'
            ? ['Scan KTP & Pas foto formal', 'Scan Ijazah formal & CV portofolio portofolio kerja 1-2 tahun', 'Formulir Asesmen Mandiri APL-01 & APL-02 terisi']
            : ['Scan KTP / Identitas Diri', 'Surat penugasan atau rekomendasi manajemen', 'Pas foto formal peserta'],
          certificationOutput: pathway === 'kemnaker'
            ? [`Sertifikat Pembinaan Kemnaker RI untuk ${cleanT}`, 'Surat Keputusan Penunjukan (SKP) Kementerian', 'Kartu Lisensi Kewenangan K3 (SIO Kemnaker) 3 Tahun']
            : pathway === 'bnsp'
            ? [`Sertifikat Kompetensi BNSP untuk ${cleanT}`, 'Transkrip Unit Kompetensi SKKNI Terverifikasi', 'Kartu Registrasi Pemegang Sertifikat BNSP']
            : [`Sertifikat Pelatihan Industri Resmi PT Kreasi Ultimate Berjaya`, 'Dokumen Penilaian Evaluasi Portfolio & Praktik Lapangan', 'Modul Panduan Operasional & Template Dokumentasi K3'],
          syllabusModules: techFocus.syllabusModules,
          priceInfo: 'Investasi mencakup modul pelatihan, bimbingan instruktur praktisi, evaluasi kelulusan, dan sertifikasi resmi. Paket penawaran khusus tersedia untuk In-House Training.'
        },
        blocks: [
          {
            heading: `Urgensi & Penegakan Regulasi K3 ${cleanT}`,
            paragraphs: [
              `Penyelenggaraan ${title} merupakan kewajiban strategis dalam memitigasi bahaya operasional ${techFocus.hazardContext} di tempat kerja. Berdasarkan ${legalStr}, pengurus tempat kerja diwajibkan memastikan seluruh personel teknis dan pengawas memiliki kompetensi teruji.`,
              `Pelatihan ini memberikan pemahaman mendalam tentang prinsip keselamatan kerja, prosedur operasional standar (SOP), dan pertanggungjawaban hukum ketenagakerjaan.`
            ]
          },
          {
            heading: `Silabus Teknis & Penguasaan Parameter ${cleanT}`,
            paragraphs: [
              `Kurikulum disusun komprehensif mengacu pada standar teknis nasional dan praktik terbaik industri:`,
            ],
            bullets: techFocus.bullets
          },
          {
            heading: `Jalur Sertifikasi ${pathway === 'kemnaker' ? 'Kemnaker RI' : pathway === 'bnsp' ? 'BNSP / LSP' : 'Praktis Industri'}`,
            paragraphs: [
              pathway === 'kemnaker'
                ? `Kelulusan pembinaan memberikan Sertifikat Pembinaan Kemnaker RI, SKP Penunjukan, dan Kartu Lisensi K3 yang terdaftar di database e-K3 Kementerian.`
                : pathway === 'bnsp'
                ? `Peserta diuji oleh Asesor BNSP melalui Lembaga Sertifikasi Profesi (LSP) untuk mendapatkan Sertifikat Kompetensi BNSP berstandar SKKNI.`
                : `Program berfokus penuh pada peningkatan kemampuan praktik teknis (skill-building) industri dengan sertifikat PT Kreasi Ultimate Berjaya.`
            ]
          },
          {
            heading: 'Layanan Public Batch & In-House Corporate Training',
            paragraphs: [
              `PT Kreasi Ultimate Berjaya menyelenggarakan ${title} melalui Public Class Blended Learning serta layanan In-House Training on-site di seluruh Indonesia.`,
              'Tim konsultan kami siap membantu verifikasi kelayakan ijazah dan menerbitkan Surat Penawaran Harga (SPH) resmi.'
            ]
          }
        ],
        faqs: techFocus.faqs,
        related: [
          'pelatihan/ahli-k3-umum',
          'panduan/syarat-ahli-k3-umum',
          'panduan/biaya-pelatihan-k3',
          'perbandingan/bnsp-vs-kemnaker',
          'profesi/ahli-k3-umum',
          'regulasi-k3/uu-1-1970'
        ],
        sources: [officialSources[d.key] || officialSources.uu1, officialSources.uu1, officialSources.pp50],
        status: 'published',
        publishedAt: '2026-08-01',
        updatedAt: '2026-09-01',
        indexable: true,
        intent: `${kw} ${intent}`,
        primaryKeyword: kw,
        searchIntent: intent,
        intentType: 'commercial',
        parentTopic: `Pelatihan ${d.name}`,
        cannibalizationGroup: `pelatihan-${d.cat}`,
        contentKind: 'program',
        primaryCtaText: `Tanya Jadwal & Biaya ${cleanT}`,
        primaryCtaIntent: 'jadwal',
        secondaryCtaText: 'Konsultasi In-House Training',
        secondaryCtaIntent: 'perusahaan'
      });
    }
  }

  return records;
}

// Helpers to map 300 slugs, titles, and domain technical specifications
function getSlugForIndex(index: number): string {
  const allSlugs = [
    // 1-30 Kelembagaan
    'ahli-k3-umum','auditor-smk3','lead-auditor-smk3','pembinaan-p2k3','implementasi-smk3-pp-50','integrasi-smk3-dan-iso-45001','auditor-internal-smk3','manajemen-risiko-k3','investigasi-insiden-k3','safety-leadership-eksekutif','safety-accountability-pengawas','pengukuran-lingkungan-kerja','safety-officer-k3','inspeksi-k3-terjadwal','penyusunan-sop-k3','safety-induction-kontraktor','penilaian-kinerja-k3','k3-pelaporan-wajib-naker','komunikasi-k3-toolbox','manajemen-perubahan-moc-k3','k3-perkantoran','k3-fasilitas-kesehatan','k3-sektor-retail-logistik','k3-sektor-pendidikan','k3-sektor-pariwisata-hotel','k3-sektor-pertambangan-pengantar','k3-sektor-konstruksi-pengantar','k3-sektor-migas-pengantar','k3-industri-manufaktur-umum','k3-industri-makanan-minuman',
    // 31-60 Kebakaran
    'k3-kebakaran','k3-kebakaran-kelas-d','k3-kebakaran-kelas-c','k3-kebakaran-kelas-b','k3-kebakaran-kelas-a','pelatihan-inspeksi-pemeliharaan-apar-tabung-pemadam-api-ringan','pelatihan-pengujian-sistem-hydran-kebakaran-pomp-pipa-nozzle','pelatihan-perancangan-pemeliharaan-sistem-sprinkler-otomatis','pelatihan-sistem-deteksi-alarm-kebakaran-smoke-heat-detector','pelatihan-sistem-pemadam-gas-bersih-clean-agent-co2-fm200','pelatihan-manajemen-tanggap-darurat-kebakaran-emergency-response','pelatihan-penyusunan-dokumen-fire-emergency-plan-fep-gedung','pelatihan-simulasi-evakuasi-kebakaran-drill-gedung-bertingkat','pelatihan-inspeksi-keselamatan-kebakaran-gedung-fire-safety-inspection','pelatihan-tata-cara-pembentukan-tim-tanggap-darurat-ert-pabrik','pelatihan-k3-pekerjaan-panas-hot-work-permit-welding-cutting','pelatihan-pencegahan-kebakaran-area-penyimpanan-bahan-kimia-mudah-terbakar','pelatihan-pencegahan-kebakaran-instalasi-listrik-panel-gardu','pelatihan-inspeksi-tangga-darurat-pintu-kebakaran-pressurized-stairwell','pelatihan-investigasi-penyebab-kebakaran-industri-fire-investigation','pelatihan-penilaian-risiko-kebakaran-fire-risk-assessment-fra','pelatihan-k3-penanggulangan-kebakaran-dapur-komersial-restoran','pelatihan-k3-kebakaran-area-gudang-logistik-rack-storage','pelatihan-k3-kebakaran-kapal-fasilitas-pelabuhan-maritim','pelatihan-k3-kebakaran-pabrik-tekstil-garmen-debu-serabut','pelatihan-k3-kebakaran-pabrik-kertas-kayu-sawmill','pelatihan-k3-kebakaran-stasiun-pengisian-bahan-bakar-spbu','pelatihan-k3-kebakaran-pusat-data-data-center-server-room','pelatihan-audit-kepatuhan-sistem-proteksi-kebakaran-permenaker-02-1983','k3-instalasi-pipa-gas-medis',
    // 61-90 Kelistrikan
    'pelatihan-ahli-k3-spesialis-listrik-kemnaker-ri','pelatihan-teknisi-k3-listrik-sertifikasi-kemnaker-ri','pelatihan-k3-pemasangan-pemeliharaan-instalasi-listrik-industri','pelatihan-sistem-isolasi-energi-lockout-tagout-loto-kelistrikan','pelatihan-k3-penyalur-petir-sistem-pembumian-grounding-testing','pelatihan-k3-operasional-gardu-induk-substation-listrik-tegangan-tinggi','pelatihan-k3-pemeliharaan-panel-listrik-tutup-loto-dan-arc-flash','pelatihan-k3-ruang-baterai-ups-genset-cadangan-pabrik','pelatihan-k3-penggunaan-alat-ukur-listrik-multimeter-insulation-tester','pelatihan-k3-pekerjaan-dalam-keadaan-bertegangan-pdkb-listrik','pelatihan-k3-instalasi-listrik-ruang-berbahaya-explosive-atmosphere-atex','pelatihan-k3-sistem-tenaga-surya-pembangkit-listrik-tenaga-surya-plts','pelatihan-k3-sistem-pembangkit-listrik-genset-diesel-turbin-gas','pelatihan-k3-inspeksi-termo-grafi-infra-merah-panel-listrik-industri','pelatihan-k3-pemasangan-kabel-bawah-tanah-dan-kabel-udara-tegangan-menengah','pelatihan-k3-audit-kepatuhan-instalasi-listrik-permenaker-12-2015','pelatihan-k3-pengendalian-bahaya-listrik-statis-area-b3-pabrik','pelatihan-k3-instalasi-listrik-bangunan-gedung-bertingkat-tinggi','pelatihan-k3-pemeliharaan-trafo-transformator-daya-dan-minyak-trafo','pelatihan-k3-sistem-penerangan-darurat-emergency-lighting-dan-exit-sign','pelatihan-k3-penggunaan-alat-pelindung-diri-apd-listrik-sarung-tangan-isolasi','pelatihan-k3-sistem-manajemen-energi-dan-keselamatan-kelistrikan-pabrik','pelatihan-k3-investigasi-kecelakaan-listrik-sengatan-dan-kebakaran-listrik','pelatihan-k3-pemeliharaan-motor-listrik-industri-dan-vfd-variable-frequency-drive','pelatihan-k3-pengujian-tahanan-isolasi-dan-tahanan-pembumian-pabrik','pelatihan-k3-pemasangan-sistem-proteksi-arus-bocor-elcb-rccd','pelatihan-k3-keselamatan-kerja-personel-maintenance-listrik-shift-malam','pelatihan-k3-instalasi-listrik-tambang-permukaan-dan-bawah-tanah','pelatihan-k3-keselamatan-pengoperasian-stasiun-pengisian-kendaraan-listrik-spklu','pelatihan-k3-manajemen-keselamatan-sistem-transmisi-tenaga-listrik',
    // 91-120 PAA
    'pelatihan-operator-forklift-kelas-i-kelas-ii-sertifikasi-kemnaker','pelatihan-operator-overhead-crane-gantry-crane-kelas-i-ii-kemnaker','pelatihan-operator-mobile-crane-crawler-crane-sertifikasi-kemnaker','pelatihan-operator-tower-crane-konstruksi-gedung-sertifikasi-kemnaker','pelatihan-juru-ikat-beban-rigger-slinger-bersertifikat-kemnaker','pelatihan-operator-excavator-alat-berat-konstruksi-kemnaker','pelatihan-operator-wheel-loader-bulldozer-sertifikasi-kemnaker','pelatihan-operator-lift-barang-passenger-hoist-konstruksi-kemnaker','pelatihan-operator-gondola-bangunan-gedung-sertifikasi-kemnaker','pelatihan-operator-reach-stacker-container-handler-pelabuhan-kemnaker','pelatihan-operator-pneumatic-tire-roller-vibro-compactor-kemnaker','pelatihan-operator-dump-truck-hauling-mining-truck-kemnaker','pelatihan-operator-side-loader-forklift-heavy-duty-kemnaker','pelatihan-operator-winch-derek-kapstank-tarik-tambang-kemnaker','pelatihan-operator-conveyor-belt-material-handling-pabrik-kemnaker','pelatihan-teknisi-pemeliharaan-pesawat-angkat-angkut-kemnaker','pelatihan-inspeksi-pengujian-berkala-crane-dan-forklift-permenaker-08','pelatihan-k3-pengikatan-rigging-calculation-beban-berat-kritis','pelatihan-k3-pengoperasian-aerial-work-platform-awp-manlift-boom-lift','pelatihan-k3-pemeliharaan-tali-kawat-baja-wire-rope-inspeksi-afkir','pelatihan-k3-pengoperasian-lift-passenger-elevator-gedung-bertingkat','pelatihan-k3-pengoperasian-eskalator-dan-travelator-pusat-perbelanjaan','pelatihan-k3-penanganan-material-secara-manual-manual-material-handling','pelatihan-k3-pengoperasian-automated-guided-vehicle-agv-gudang-otomatis','pelatihan-k3-keselamatan-area-loading-dock-bongkar-muat-truks','pelatihan-k3-inspeksi-kelayakan-sabuk-pengikat-webbing-sling-shackle','pelatihan-k3-pencegahan-kecelakaan-crane-guling-dan-putus-tali','pelatihan-k3-pengoperasian-crane-di-area-lepas-pantai-offshore-crane','pelatihan-k3-manajemen-keselamatan-operasional-alat-berat-proyek','pelatihan-ahli-k3-spesialis-pesawat-angkat-angkut-kemnaker-ri',
    // 121-150 PUBT
    'pelatihan-operator-boiler-ketel-uap-kelas-i-ii-lisensi-kemnaker','pelatihan-ahli-k3-spesialis-pesawat-uap-bejana-tekanan-kemnaker','pelatihan-k3-pengoperasian-bejana-tekan-kompresor-udara-pabrik','pelatihan-k3-tangki-timbun-bahan-bakar-minyak-gas-storage-tank','pelatihan-inspeksi-pengujian-katup-pengaman-tekanan-safety-valve-testing','pelatihan-k3-pengoperasian-autoclave-sterilisator-tekanan-tinggi-rumah-sakit','pelatihan-k3-pemeliharaan-heat-exchanger-kondensor-pabrik-kimia','pelatihan-k3-pengoperasian-tabung-gas-bertekanan-silinder-lpg-argon-oksigen','pelatihan-k3-pemeliharaan-sistem-perpipaan-uap-steam-piping-system','pelatihan-k3-inspeksi-ketebalan-dinding-bejana-tekan-ultrasonic-thickness-gauge','pelatihan-k3-pengolahan-air-umpan-boiler-water-treatment-boiler','pelatihan-k3-pencegahan-ledakan-boiler-dan-bleve-boiling-liquid-expanding-vapor','pelatihan-k3-pengoperasian-deaerator-dan-economizer-pabrik-kelapa-sawit','pelatihan-k3-inspeksi-keretakan-las-bejana-tekanan-non-destructive-testing-ndt','pelatihan-k3-pengoperasian-tangki-spherical-lpg-dan-amonia-tekanan-tinggi','pelatihan-k3-pemeliharaan-burner-tunggku-pembakaran-boiler-minyak-gas','pelatihan-k3-pengoperasian-chiller-dan-refrigerant-pressure-vessel-hvac','pelatihan-k3-pemasangan-rupture-disc-dan-sistem-pelepasan-tekanan-darurat','pelatihan-k3-pengoperasian-stasiun-pengisian-tabung-oksigen-dan-nitrogen','pelatihan-k3-inspeksi-tangki-timbun-cpo-minyak-kelapa-sawit-pabrik','pelatihan-k3-pembersihan-dan-purging-tangki-timbun-bbm-gas','pelatihan-k3-penguji-kualifikasi-juru-las-welder-bejana-tekan-boiler','pelatihan-k3-manajemen-integritas-aset-pesawat-uap-asset-integrity','pelatihan-k3-pengoperasian-boiler-biomassa-cangkang-sawit-dan-batu-bara','pelatihan-k3-pengujian-hidrostatik-hydrotest-bejana-tekanan-dan-pipa','pelatihan-k3-pengoperasian-sterilizer-rebusan-sawit-pabrik-pks','pelatihan-k3-keselamatan-operator-kompresor-udara-tekanan-tinggi-petrov','pelatihan-k3-pengoperasian-tangki-kriogenik-lng-dan-oksigen-cair','pelatihan-k3-pengendalian-korosi-dan-cathodic-protection-bejana-tekan','pelatihan-k3-audit-kepatuhan-regulasi-bejana-tekan-permenaker-37-2016',
    // 151-180 Kimia
    'pelatihan-ahli-k3-kimia-sertifikasi-resmi-kemnaker-ri','pelatihan-petugas-k3-kimia-sertifikasi-resmi-kemnaker-ri','pelatihan-pengelolaan-lembar-data-keselamatan-bahan-msds-sds-16-bab','pelatihan-klasifikasi-pelabelan-bahan-kimia-berdasarkan-sistem-ghs','pelatihan-k3-penyimpanan-bahan-kimia-berbahaya-inkompatibilitas-matriks','pelatihan-tanggap-darurat-tumpahan-bahan-kimia-hazmat-spill-response','pelatihan-k3-pengangkutan-dan-transpor-bahan-berbahaya-dan-beracun-b3','pelatihan-pengelolaan-limbah-bahan-berbahaya-dan-beracun-limbah-b3-pabrik','pelatihan-k3-penggunaan-alat-pelindung-diri-respirator-kimia-dan-hazmat-suit','pelatihan-penilaian-potensi-bahaya-besar-dan-bahaya-menengah-kimia-kep-187','pelatihan-k3-pengoperasian-dan-pemeliharaan-instalasi-gas-klorin-pabrik','pelatihan-k3-penanganan-gas-amonia-sistem-refrigerasi-pabrik-es-makanan','pelatihan-k3-laboratorium-kimia-analisis-dan-pengujian-industri','pelatihan-k3-proses-petrokimia-dan-refinery-oil-gas-chemical-safety','pelatihan-inspeksi-k3-eyewash-dan-emergency-shower-di-area-proses-kimia','pelatihan-k3-pengolahan-dan-dosing-bahan-kimia-instalasi-pengolahan-air-ipal','pelatihan-k3-penanganan-pelarut-organik-solvent-dan-bahan-mudah-menguap-voc','pelatihan-k3-penggunaan-gas-elplp-bertekanan-dan-asertilena-las-karbit','pelatihan-penyusunan-dokumen-pengendalian-potensi-bahaya-besar-kimia','pelatihan-k3-pencegahan-dan-pengendalian-korosi-kimia-asam-basa-pekat','pelatihan-k3-pencampuran-mixing-dan-formulasi-bahan-kimia-industri','pelatihan-k3-penggunaan-detektor-gas-toksik-dan-gas-mudah-terbakar','pelatihan-k3-penanganan-bahan-peledak-komersial-tambang-dan-kuari','pelatihan-k3-penanganan-pestisida-dan-bahan-kimia-pertanian-perkebunan','pelatihan-pemantauan-kesehatan-biologis-medical-surveillance-pekerja-kimia','pelatihan-k3-pengoperasian-incinerator-pengolahan-sampah-dan-limbah-kimia','pelatihan-k3-penanganan-asam-sulfat-dan-asam-klorida-skala-pabrik','pelatihan-k3-penanganan-peroksida-organik-dan-bahan-reaktif-air-udara','pelatihan-k3-dekontaminasi-personel-dan-peralatan-pasca-paparan-kimia','pelatihan-k3-audit-kepatuhan-dokumen-pengendalian-bahan-kimia-kepmenaker-187',
    // 181-210 Higiene
    'pelatihan-ahli-k3-lingkungan-kerja-muda-madya-utama-kemnaker-ri','pelatihan-higiene-industri-muda-himu-sertifikasi-bnsp-kemnaker','pelatihan-higiene-industri-madya-hima-sertifikasi-bnsp-kemnaker','pelatihan-higiene-industri-utama-hiu-sertifikasi-bnsp-kemnaker','pelatihan-pengukuran-pengendalian-kebisingan-tempat-kerja-permenaker-05','pelatihan-pengukuran-pengendalian-getaran-mekanis-tangan-lengan-seluruh-tubuh','pelatihan-pengukuran-pengendalian-iklim-kerja-panas-isbb-heat-stress','pelatihan-evaluasi-kualitas-pencahayaan-lux-meter-tempat-kerja-industri','pelatihan-sampling-pengukuran-debu-respirabel-dan-total-dust-pabrik','pelatihan-sampling-pengukuran-gas-berbahaya-dan-uap-toksik-tempat-kerja','pelatihan-penilaian-risiko-ergonomi-postur-kerja-reba-rula-niosh-lifting','pelatihan-evaluasi-kualitas-udara-dalam-ruangan-indoor-air-quality-iaq','pelatihan-pengendalian-faktor-biologi-jamur-bakteri-vektor-di-tempat-kerja','pelatihan-penilaian-faktor-psikologi-stres-kerja-dan-kelelahan-burnout','pelatihan-penerapan-prinsip-5s-5r-dan-housekeeping-keselamatan-pabrik','pelatihan-perancangan-sistem-ventilasi-industri-local-exhaust-ventilation-lev','pelatihan-pemilihan-dan-fit-testing-alat-pelindung-pendengaran-earplug-earmuff','pelatihan-program-pencegahan-penurunan-pendengaran-hearing-conservation-hcp','pelatihan-inspeksi-dan-pengujian-fasilitas-sanitasi-air-bersih-kantin-pabrik','pelatihan-pengukuran-radiasi-mengenal-radiasi-pengion-dan-non-pengion','pelatihan-penyusunan-dokumen-profil-higiene-industri-perusahaan','pelatihan-audit-internal-penerapan-k3-lingkungan-kerja-permenaker-05-2018','pelatihan-pemantauan-kadar-bahan-kimia-di-udara-tempat-kerja-nab','pelatihan-evaluasi-ergonomi-stasiun-kerja-komputer-dan-display-screen-vdt','pelatihan-pencegahan-dan-pengendalian-legionella-sistem-cooling-tower-ac','pelatihan-pengukuran-medan-magnet-dan-gelombang-elektromagnetik-pabrik','pelatihan-penilaian-beban-kerja-fisik-berdasarkan-konsumsi-oksigen-dan-denyut-jantung','pelatihan-inspeksi-pengendalian-hama-pest-control-di-lingkungan-kerja-pabrik','pelatihan-pengukuran-dan-pengendalian-bau-kebauan-industri-odour-control','pelatihan-audit-kepatuhan-lingkungan-kerja-sesuai-standar-permenaker-05-2018',
    // 211-240 Konstruksi
    'pelatihan-ahli-k3-konstruksi-muda-madya-utama-sertifikasi-kemnaker-bnsp','pelatihan-petugas-keselamatan-konstruksi-smkk-pupr-no-10-2021','pelatihan-penyusunan-rencana-keselamatan-konstruksi-rkk-tender-pelaksanaan','pelatihan-k3-pekerjaan-penggalian-tanah-dalam-trenching-excavation-shoring','pelatihan-k3-scaffolding-perancah-operator-supervisor-scaffolding-kemnaker','pelatihan-k3-pekerjaan-pembetonan-dan-bekisting-formwork-concrete-safety','pelatihan-k3-pekerjaan-ereksi-baja-konstruksi-gedung-dan-jembatan','pelatihan-k3-pekerjaan-demolisi-pembongkaran-bangunan-gedung-tua','pelatihan-k3-pekerjaan-terowongan-dan-bawah-tanah-tunneling-underground','pelatihan-k3-pekerjaan-peledakan-blasting-konstruksi-dan-jalan-tambang','pelatihan-k3-pemasangan-dan-pembongkaran-tower-crane-konstruksi','pelatihan-k3-keselamatan-lalu-lintas-proyek-traffic-management-construction','pelatihan-k3-pekerjaan-pengelasan-konstruksi-baja-dan-perpipaan-proyek','pelatihan-inspeksi-keselamatan-konstruksi-harian-safety-patrol-proyek','pelatihan-penyusunan-analisis-harga-satuan-biaya-k3-konstruksi-ahsp-k3','pelatihan-k3-konstruksi-bangunan-air-bendungan-dan-irigasi-sipil','pelatihan-k3-konstruksi-jalan-tol-dan-jembatan-layang-elevated','pelatihan-k3-konstruksi-pelabuhan-dermaga-dan-bangunan-lepas-pantai','pelatihan-k3-keselamatan-alat-berat-excavator-loader-roller-proyek','pelatihan-k3-pengawasan-pekerjaan-atap-roofing-dan-cladding-bangunan','pelatihan-k3-keselamatan-pekerjaan-pancang-pile-driving-foundation','pelatihan-k3-penanganan-limbah-konstruksi-dan-sedimen-lingkungan-proyek','pelatihan-penyusunan-job-safety-analysis-jsa-pekerjaan-konstruksi-risiko-tinggi','pelatihan-k3-keselamatan-pekerja-subkontraktor-dan-mandor-konstruksi','pelatihan-k3-penanggulangan-keadaan-darurat-bencana-di-lokasi-proyek','pelatihan-k3-pengawasan-pekerjaan-finishing-interior-dan-mep-gedung','pelatihan-k3-keselamatan-pekerjaan-pengeboran-batu-dan-soil-nailing','pelatihan-k3-keselamatan-pekerjaan-precast-concrete-installation','pelatihan-k3-investigasi-kecelakaan-konstruksi-struktur-roboh-dan-longsor','pelatihan-audit-sistem-manajemen-keselamatan-konstruksi-smkk-pupr',
    // 241-270 Ketinggian
    'pelatihan-tenaga-kerja-bangunan-tinggi-tingkat-1-tkbt-1-kemnaker-ri','pelatihan-tenaga-kerja-bangunan-tinggi-tingkat-2-tkbt-2-kemnaker-ri','pelatihan-tenaga-kerja-pada-ketinggian-tingkat-1-tkpk-1-rope-access-kemnaker','pelatihan-tenaga-kerja-pada-ketinggian-tingkat-2-tkpk-2-rope-access-kemnaker','pelatihan-tenaga-kerja-pada-ketinggian-tingkat-3-tkpk-3-supervisor-kemnaker','pelatihan-petugas-k3-utama-ruang-terbatas-confined-space-kemnaker','pelatihan-petugas-k3-madya-ruang-terbatas-confined-space-kemnaker','pelatihan-inspeksi-pemeliharaan-full-body-harness-dan-lanyard-ketinggian','pelatihan-perancangan-sistem-angkur-lifeline-horizontal-vertical-ketinggian','pelatihan-k3-pengukuran-dan-deteksi-gas-berbahaya-ruang-terbatas-gas-tester','pelatihan-k3-penyelematan-darurat-dan-evakuasi-korban-ruang-terbatas-rescue','pelatihan-k3-penyelamatan-korban-gantung-fall-arrest-suspension-trauma-rescue','pelatihan-k3-pekerjaan-di-area-lubang-bukaan-floor-opening-dan-wall-opening','pelatihan-k3-pekerjaan-perawatan-pembersihan-kaca-gedung-bertingkat','pelatihan-k3-pekerjaan-maintenance-menara-telekomunikasi-tower-celluler','pelatihan-k3-pekerjaan-inspeksi-dan-pengelasan-di-dalam-tangki-vessel','pelatihan-k3-penggunaan-self-contained-breathing-apparatus-scba-confined-space','pelatihan-k3-pengaliran-ventilasi-udara-bersih-blower-ruang-terbatas','pelatihan-k3-pemasangan-jaring-pengaman-safety-net-proyek-bangunan','pelatihan-k3-pekerjaan-di-atas-tangki-dan-silo-penyimpanan-material','pelatihan-k3-pemasangan-tangga-kerja-ladder-dan-platform-kerja-sementara','pelatihan-k3-pembersihan-dan-pengerukan-lumpur-gorong-gorong-saluran-bawah-tanah','pelatihan-k3-pengolesan-cat-dan-coating-di-area-ruang-terbatas-pabrik','pelatihan-k3-pekerjaan-perbaikan-turbin-pembangkit-listrik-ruang-sempit','pelatihan-k3-pengolesan-pelapis-kedap-air-waterproofing-di-basement-gedung','pelatihan-k3-pekerjaan-perawatan-pembakar-incinerator-dan-cerobong-asap-chimney','pelatihan-k3-pemasangan-penangkal-petir-di-puncak-menara-gedung-tinggi','pelatihan-k3-penyusunan-prosedur-izin-masuk-ruang-terbatas-entry-permit','pelatihan-k3-inspeksi-kelayakan-peralatan-penyelamat-tripod-rescue-winch','pelatihan-audit-kepatuhan-regulasi-ketinggian-permenaker-09-2016',
    // 271-300 Kesehatan
    'pelatihan-petugas-p3k-di-tempat-kerja-lisensi-resmi-kemnaker-ri-30-jp','pelatihan-dokter-perusahaan-sertifikasi-hiperkes-kemnaker-ri','pelatihan-paramedis-perusahaan-sertifikasi-hiperkes-kemnaker-ri','pelatihan-resusitasi-jantung-paru-rjp-cpr-penggunaan-aed-di-tempat-kerja','pelatihan-penanganan-trauma-gawat-darurat-pendarahan-hebat-lapangan','pelatihan-penanganan-patah-tulang-pembidaian-dan-pembentukan-p3k','pelatihan-penanganan-luka-bakar-termal-dan-luka-bakar-kimia-industri','pelatihan-penanganan-korban-tersengat-listrik-dan-pingsan-di-tempat-kerja','pelatihan-penanganan-korban-keracunan-gas-dan-terhirup-bahan-kimia','pelatihan-inspeksi-dan-pengelolaan-kotak-p3k-fasilitas-p3k-perusahaan','pelatihan-pemeriksaan-kesehatan-pekerja-pemeriksaan-awal-berkala-khusus','pelatihan-penyelenggaraan-pelayanan-kesehatan-kerja-klinik-perusahaan','pelatihan-pencegahan-dan-penanggulangan-hiv-aids-di-tempat-kerja','pelatihan-pencegahan-dan-penanggulangan-narkoba-p4gn-di-tempat-kerja','pelatihan-promosi-kesehatan-dan-program-kebugaran-kerja-wellness-program','pelatihan-manajemen-kelelahan-pekerja-fatigue-management-shift-kerja','pelatihan-pencegahan-penyakit-akibat-kerja-pak-dan-surveilans-kesehatan','pelatihan-k3-ergonomi-pencegahan-gangguan-otot-rangka-musculoskeletal-msds','pelatihan-penanganan-gigitan-hewan-berbisa-ular-dan-serangga-lapangan','pelatihan-penanganan-korban-tenggelam-dan-hipotermia-lapangan-basah','pelatihan-tata-cara-rujukan-medis-gawat-darurat-dan-evakuasi-ambulans','pelatihan-pemeriksaan-audiometri-dan-spirometri-surveilans-kesehatan','pelatihan-pencegahan-dan-pengendalian-penyakit-menular-tbc-covid-19-pabrik','pelatihan-k3-kesehatan-reproduksi-dan-perlindungan-pekerja-perempuan','pelatihan-gizi-kerja-dan-penyelenggaraan-makanan-bagi-tenaga-kerja','pelatihan-penanganan-krisis-kesehatan-mental-dan-psychological-first-aid-pfa','pelatihan-penyusunan-program-kembali-kerja-return-to-work-rtw-pasca-kecelakaan','pelatihan-k3-kesehatan-kerja-bagi-pekerja-shift-malam-dan-rotasi-jadwal','pelatihan-penilaian-kelayakan-kerja-fit-for-duty-assessment-sebelum-shift','pelatihan-audit-kepatuhan-pelayanan-kesehatan-kerja-sesuai-permenaker-03-1982'
  ];
  return allSlugs[index - 1] || 'ahli-k3-umum';
}

function getTitleForIndex(index: number): string {
  // Format title nicely from index
  const slug = getSlugForIndex(index);
  return slug
    .split('-')
    .map(w => w.toUpperCase() === 'K3' ? 'K3' : w.toUpperCase() === 'P3K' ? 'P3K' : w.toUpperCase() === 'SMK3' ? 'SMK3' : w.toUpperCase() === 'RI' ? 'RI' : w.toUpperCase() === 'BNSP' ? 'BNSP' : w.toUpperCase() === 'PUPR' ? 'PUPR' : w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function getLegalForIndex(index: number): string {
  if (index <= 30) return 'PP No. 50 Tahun 2012';
  if (index <= 60) return 'Kepmenaker No. KEP.186/MEN/1999';
  if (index <= 90) return 'Permenaker No. 12 Tahun 2015';
  if (index <= 120) return 'Permenaker No. 08 Tahun 2020';
  if (index <= 150) return 'Permenaker No. 37 Tahun 2016';
  if (index <= 180) return 'Kepmenaker No. KEP.187/MEN/1999';
  if (index <= 210) return 'Permenaker No. 05 Tahun 2018';
  if (index <= 240) return 'Permen PUPR No. 10 Tahun 2021';
  if (index <= 270) return 'Permenaker No. 09 Tahun 2016';
  return 'Permenaker No. PER.15/MEN/VIII/2008';
}

function getDurationForIndex(index: number): string {
  if (index === 1 || index === 61 || index === 121 || index === 151 || index === 181 || index === 211) return '120 JP (12 Hari Kerja)';
  if (index <= 30) return '24 JP (3 Hari Kerja)';
  if (index <= 60) return '30 JP (3 Hari Kerja)';
  if (index <= 90) return '30 JP (3 Hari Kerja)';
  if (index <= 120) return '30 JP (3 Hari Kerja)';
  if (index <= 150) return '30 JP (3 Hari Kerja)';
  if (index <= 180) return '24 JP (3 Hari Kerja)';
  if (index <= 210) return '24 JP (3 Hari Kerja)';
  if (index <= 240) return '24 JP (3 Hari Kerja)';
  if (index <= 270) return '30 JP (3 Hari Kerja)';
  return '30 JP (3 Hari Kerja)';
}

interface TechFocus {
  shortDesc: string;
  answerDetail: string;
  hazardContext: string;
  highlightText: string;
  audience: string[];
  bullets: string[];
  syllabusModules: { module: string; topics: string[]; hours?: string }[];
  faqs: { question: string; answer: string }[];
}

function getTechFocusForDomain(cat: string): TechFocus {
  switch (cat) {
    case 'kelistrikan':
      return {
        shortDesc: 'sistem isolasi Lockout Tagout (LOTO), bahaya ledakan busur listrik Arc Flash (NFPA 70E), dan pengukuran pembumian PUIL 2020',
        answerDetail: 'pengukuran tahanan pembumian (< 5 Ohm), verifikasi LOTO zero energy state, serta inspeksi panel distribusi listrik bertegangan tinggi',
        hazardContext: 'sengatan listrik tegangan tinggi, bahaya busur listrik (Arc Flash), dan potensi kebakaran akibat hubungan pendek jaringan panel',
        highlightText: 'LOTO Zero Energy Verification & Inspeksi PUIL 2020 (SNI 0225:2020)',
        audience: ['Teknisi K3 Listrik & Personel Pemeliharaan Panel', 'Engineer Electrical Pabrik & Supervisor Power Plant', 'HSE Specialist & Anggota Komite P2K3'],
        bullets: [
          'Penguasaan Standar PUIL 2020 (SNI 0225:2020) & Permenaker 12/2015',
          'Prosedur Penguncian & Penandaan Energi Berbahaya Lockout Tagout (LOTO)',
          'Analisis Proteksi Bahaya Arc Flash & Penentuan Boundary Keselamatan',
          'Teknik Pengukuran Tahanan Isolasi Megger & Tahanan Pembumian Grounding'
        ],
        syllabusModules: [
          { module: 'Modul 01: Regulasi K3 Listrik & Penguasaan PUIL 2020', topics: ['Permenaker No. 12 Tahun 2015 & Syarat K3 Instalasi', 'SNI 0225:2020 PUIL Standar Pengabelan & Proteksi', 'Persyaratan Alat Ukur Multimeter & Insulation Tester'], hours: '8 JP' },
          { module: 'Modul 02: Prosedur LOTO & Penanganan Bahaya Arc Flash', topics: ['6 Langkah Baku Penguncian Energi LOTO (Isolation Verification)', 'Klasifikasi Hazard Category Arc Flash & APD Khusus Listrik', 'Pengoperasian ELCB / RCCB Proteksi Arus Bocor'], hours: '12 JP' },
          { module: 'Modul 03: Praktik Pengukuran Grounding & Evaluasi Lisensi', topics: ['Pengujian Tahanan Pembumian Grounding Rod < 5 Ohm', 'Inspeksi Visual Panel Substation & Gardu Induk', 'Ujian Evaluasi Kelulusan & Verifikasi SIO Kemnaker'], hours: '10 JP' }
        ],
        faqs: [
          { question: 'Berapa batas maksimum tahanan pembumian (grounding) yang aman sesuai PUIL 2020?', answer: 'Sesuai PUIL 2020, nilai tahanan pembumian ideal untuk instalasi listrik dan penyalur petir adalah di bawah 5 Ohm.' },
          { question: 'Apakah lulusan pelatihan Teknisi K3 Listrik mendapatkan lisensi resmi?', answer: 'Ya, peserta yang lulus evaluasi memperoleh Sertifikat Pembinaan dan Kartu Lisensi K3 Listrik Kemnaker RI yang berlaku 3 tahun.' },
          { question: 'Apakah materi mencakup praktik penggunaan alat ukur isolasi Megger?', answer: 'Ya, peserta mempraktikkan langsung uji tahanan isolasi kabel dan winding motor listrik menggunakan megohmmeter.' }
        ]
      };
    case 'paa':
      return {
        shortDesc: 'stabilitas beban (stability triangle), kalkulasi pengikatan rigger, dan inspeksi kriteria afkir tali kawat baja wire rope (ISO 4309)',
        answerDetail: 'pengoperasian aman pesawat angkat, perhitungan titik berat beban (center of gravity), serta pemeriksaan outrigger ground bearing capacity',
        hazardContext: 'crane guling akibat kelebihan beban, tali sling putus, dan benturan beban gantung di area kerja logistik',
        highlightText: 'Rigging Load Calculation & Inspeksi Afkir Wire Rope (ISO 4309)',
        audience: ['Operator Forklift, Overhead Crane, Mobile Crane & Tower Crane', 'Juru Ikat Beban (Rigger) & Supervisor Rigging', 'Teknisi Pemeliharaan PAA & HSE Inspector'],
        bullets: [
          'Penguasaan Permenaker No. 08 Tahun 2020 tentang K3 Pesawat Angkat & Angkut',
          'Perhitungan Segitiga Stabilitas Load Center Forklift & Load Chart Crane',
          'Inspeksi Kelayakan Webbing Sling, Shackle, Hook & Wire Rope Afkir',
          'Teknik Komunikasi Sinyal Tangan Standard Rigger & Safety Device Check'
        ],
        syllabusModules: [
          { module: 'Modul 01: Perundang-Undangan PAA & Karakteristik Alat', topics: ['Permenaker No. 08 Tahun 2020 & Tanggung Jawab Operator', 'Komponen Utama Pesawat Angkat Angkut & Safety Device', 'Penentuan Load Center & Kapasitas Angkat Maksimum (SWL)'], hours: '8 JP' },
          { module: 'Modul 02: Perhitungan Rigging & Inspeksi Alat Bantu Angkat', topics: ['Perhitungan Berat Beban & Sudut Pengikatan Sling (Rigging Calc)', 'Kriteria Afkir Tali Kawat Baja Wire Rope Berdasarkan ISO 4309', 'Inspeksi Hook, Shackle, Eyebolt, dan Webbing Sling'], hours: '12 JP' },
          { module: 'Modul 03: Praktik Pengoperasian & Uji Keterampilan SIO', topics: ['Simulasi Pengangkatan Beban Kritis & Manouvering', 'Pemeriksaan Harian Pre-Operational Check List', 'Ujian Praktik Lapangan & Evaluasi Kelulusan Kemnaker'], hours: '10 JP' }
        ],
        faqs: [
          { question: 'Berapa beda wewenang Operator Forklift Kelas I dan Kelas II?', answer: 'Operator Kelas II berwenang mengoperasikan forklift kapasitas hingga 15 Ton, sedangkan Kelas I berwenang mengoperasikan forklift kapasitas di atas 15 Ton.' },
          { question: 'Kapan tali kawat baja (wire rope) wajib dinyatakan afkir (kir afkir)?', answer: 'Sesuai ISO 4309 dan Permenaker 08/2020, wire rope wajib afkir jika terdapat kawat putus melebihi batas toleransi, korosi parah, kinking, atau penurunan diameter > 7%.' },
          { question: 'Bagaimana alur pengurusan SIO Operator PAA ke Kemnaker?', answer: 'Setelah lulus evaluasi teori dan praktik, pengajuan SIO diproses melalui portal TemanK3 Kemnaker dengan menyertakan berkas ijazah, KTP, dan surat tugas.' }
        ]
      };
    case 'pubt':
      return {
        shortDesc: 'pengolahan air umpan boiler, kalibrasi katup pengaman (safety valve), dan pencegahan potensi ledakan BLEVE',
        answerDetail: 'pengoperasian ketel uap bertekanan tinggi, kontrol blowdown air boiler, serta pengujian hydrostatic test bejana tekan',
        hazardContext: 'ledakan katup uap bertekanan tinggi, kebocoran gas amonia/LPG tangki timbun, dan kerak korosi dinding bejana',
        highlightText: 'Safety Valve Popping Test & BLEVE Explosion Prevention (Permen 37/2016)',
        audience: ['Operator Boiler / Ketel Uap Kelas I & II', 'Teknisi Bejana Tekan & Tangki Timbun Pabrik', 'Ahli K3 Spesialis PUBT & Engineer Pemeliharaan'],
        bullets: [
          'Penguasaan Permenaker No. 37/2016, 38/2016 & Permen 01/1988 Uap',
          'Manajemen Water Treatment Boiler: Kontrol Hardness, pH & Blowdown',
          'Pengujian Fungsi Katup Pengaman (Safety Valve Popping Test)',
          'Inspeksi Non-Destructive Testing (NDT) & Hydrostatic Test 1.5x Pressure'
        ],
        syllabusModules: [
          { module: 'Modul 01: Regulasi Uap Bejana Tekan & Konstruksi Boiler', topics: ['UU Uap 1930 & Permenaker No. PER.01/MEN/1988', 'Komponen Utama Ketel Uap: Drum, Superheater, Economizer', 'Prinsip Kerja Bejana Tekan, Kompresor & Tangki Timbun'], hours: '8 JP' },
          { module: 'Modul 02: Pengolahan Air Umpan & Proteksi Ledakan BLEVE', topics: ['Teknik Water Treatment: Softener, Deaerator & Dosing Kimia', 'Identifikasi Bahaya Overpressure & Prosedur Emergency Shutoff', 'Inspeksi Keretakan Dinding & Ketebalan UT Thickness Gauge'], hours: '12 JP' },
          { module: 'Modul 03: Praktik Pengoperasian & Evaluasi Ujian Lisensi', topics: ['Simulasi Penyulutan Burner & Operasi Normal Boiler', 'Pengujian Manometer, Glass Gauge & Safety Valve', 'Evaluasi Teori Ujian Kelulusan & Verifikasi Lisensi Kemnaker'], hours: '10 JP' }
        ],
        faqs: [
          { question: 'Apa perbedaan syarat penunjukan Operator Boiler Kelas I dan Kelas II?', answer: 'Operator Kelas II melayani boiler kapasitas hingga 10 Ton/jam, sedangkan Operator Kelas I melayani boiler kapasitas di atas 10 Ton/jam.' },
          { question: 'Berapa tekanan pengujian hidrostatik (hydrotest) untuk bejana tekan?', answer: 'Pengujian hidrostatik bejana tekan umumnya dilakukan pada tekanan 1.5 kali dari tekanan kerja maksimum yang diperbolehkan (MAWP).' },
          { question: 'Mengapa air umpan boiler harus diolah melalui water treatment?', answer: 'Untuk mencegah timbulnya kerak kalsium yang dapat mengisolasi panas dan menyebabkan pembengkokan pipa uap (overheating) yang memicu ledakan.' }
        ]
      };
    case 'kimia':
      return {
        shortDesc: 'klasifikasi GHS 16 bab SDS, matriks penyimpanan inkompatibilitas, dan prosedur tanggap darurat Hazmat Spill Response Level 1-3',
        answerDetail: 'pengelolaan lembar data keselamatan bahan (SDS), penentuan potensi bahaya besar/menengah (Kep-187/1999), dan penggunaan respirator kimia',
        hazardContext: 'kebocoran gas toksik amonia/klorin, tumpahan asam pekat korosif, dan risiko ledakan bahan kimia reaktif',
        highlightText: 'GHS 16-Section SDS & Hazmat Spill Emergency Response (Kep-187/1999)',
        audience: ['Ahli K3 Kimia & Petugas K3 Kimia Perusahaan', 'Supervisor Laboratorium & Pergudangan Bahan Kimia B3', 'Tim Incident Command Hazmat Response & Staff HSE'],
        bullets: [
          'Penguasaan Kepmenaker No. KEP.187/MEN/1999 & Sistem GHS Global',
          'Penyusunan Lembar Data Keselamatan Bahan (SDS / MSDS 16 Bab)',
          'Matriks Inkompatibilitas Penyimpanan Bahan Kimia Berbahaya B3',
          'Prosedur Penanganan Tumpahan Kimia Hazmat & Penggunaan APD Respirator'
        ],
        syllabusModules: [
          { module: 'Modul 01: Regulasi K3 Kimia & Sistem Klasifikasi GHS', topics: ['Kepmenaker No. KEP.187/MEN/1999 & Penetapan Bahaya Besar/Menengah', 'Penerapan Simbol Piktogram GHS & Frase Bahaya Hazard Statement', 'Struktur 16 Bab Lembar Data Keselamatan Bahan (SDS/MSDS)'], hours: '8 JP' },
          { module: 'Modul 02: Pengendalian Operasional Storage & Hazmat Response', topics: ['Matriks Inkompatibilitas Penyimpanan Kimia Mudah Terbakar & Korosif', 'Penggunaan APD Khusus Kimia: Respirator Kartrid, SCBA & Hazmat Suit', 'Teknik Dekontaminasi Personel & Pengelolaan TPS Limbah B3'], hours: '12 JP' },
          { module: 'Modul 03: Praktik Penanganan Tumpahan & Evaluasi Sertifikasi', topics: ['Simulasi Penanganan Tumpahan Kimia Menggunakan Spill Kit', 'Pengoperasian Gas Detector Combustible & Toxic Gas', 'Ujian Evaluasi Kelulusan & Verifikasi Lisensi Kemnaker RI'], hours: '10 JP' }
        ],
        faqs: [
          { question: 'Kapan perusahaan kategori bahaya besar kimia wajib memiliki Ahli K3 Kimia?', answer: 'Perusahaan bahaya besar dengan kuantitas bahan kimia melebihi NAK wajib memiliki sekurang-kurangnya 1 orang Ahli K3 Kimia dan 2 orang Petugas K3 Kimia.' },
          { question: 'Apa saja 16 bab utama yang wajib ada dalam dokumen SDS GHS?', answer: 'Antara lain Identifikasi Bahan, Bahaya, Komposisi, P3K, Pemadam Kebakaran, Tindakan Tumpahan, Penanganan/Penyimpanan, Kontrol Paparan/APD, Sifat Fisika Kimia, dan Stabilitas.' },
          { question: 'Bagaimana cara menggunakan Spill Kit saat terjadi tumpahan bahan kimia di pabrik?', answer: 'Isolasi area tumpahan, gunakan APD respirator/sarung tangan sesuai SDS, tebarkan bahan penyerap (absorbent pad/granule), masukkan limbah ke kantong B3, dan lakukan dekontaminasi.' }
        ]
      };
    case 'higiene':
      return {
        shortDesc: 'pengukuran kebisingan (NAB 85 dBA 8 jam), evaluasi iklim kerja ISBB, sampling debu respirabel, dan analisis ergonomi REBA/RULA',
        answerDetail: 'pengukuran faktor fisika, kimia, biologi, ergonomi, dan psikologi lingkungan kerja sesuai standar Permenaker 05/2018',
        hazardContext: 'penurunan pendengaran akibat kebisingan industri, stres panas (heat stress), dan gangguan otot rangka (MSDs)',
        highlightText: 'Inspeksi Faktor Fisika/Kimia & Ergonomi REBA/RULA (Permenaker 05/2018)',
        audience: ['Ahli K3 Lingkungan Kerja (Muda, Madya, Utama)', 'Higiene Industri Specialist (HIMU, HIMA, HIU)', 'Teknisi Laboratorium Pengujian Lingkungan Kerja & HSE'],
        bullets: [
          'Penguasaan Permenaker No. 05 Tahun 2018 tentang K3 Lingkungan Kerja',
          'Pengukuran Kebisingan Sound Level Meter & Dosis Kebisingan (Noise Dosimeter)',
          'Evaluasi Stres Panas Indeks Suhu Basah dan Bola (ISBB Index Meter)',
          'Analisis Ergonomi Postur Kerja Metode REBA, RULA & NIOSH Lifting Equation'
        ],
        syllabusModules: [
          { module: 'Modul 01: Standar Permenaker 05/2018 & Nilai Ambang Batas (NAB)', topics: ['Permenaker No. 05 Tahun 2018 & 5 Faktor Bahaya Lingkungan Kerja', 'Nilai Ambang Batas (NAB) Fisika & Kimia Tempat Kerja', 'Penerapan Prinsip 5S / 5R & Housekeeping Keselamatan'], hours: '8 JP' },
          { module: 'Modul 02: Teknik Sampling Faktor Fisika, Kimia & Ergonomi', topics: ['Pengukuran Kebisingan (SLM), Getaran (HAV/WBV) & Pencahayaan (Lux)', 'Sampling Debu Respirabel Menggunakan High Volume Air Sampler (HVAS)', 'Penilaian Ergonomi REBA/RULA & Perancangan Ventilasi LEV'], hours: '12 JP' },
          { module: 'Modul 03: Praktik Pengukuran Lapangan & Evaluasi Lisensi', topics: ['Praktik Kalibrasi & Sampling Alat Ukur Lingkungan Kerja', 'Penyusunan Laporan Hasil Pengukuran Profil Higiene Perusahaan', 'Ujian Evaluasi Teori & Verifikasi Sertifikasi Kemnaker/BNSP'], hours: '10 JP' }
        ],
        faqs: [
          { question: 'Berapa Nilai Ambang Batas (NAB) kebisingan untuk waktu kerja 8 jam per hari?', answer: 'Berdasarkan Permenaker 05/2018, NAB kebisingan untuk 8 jam kerja per hari adalah 85 dBA.' },
          { question: 'Apa perbedaan skema Higiene Industri Muda (HIMU), Madya (HIMA), dan Utama (HIU)?', answer: 'HIMU berfokus pada pengoperasian alat ukur dan sampling dasar. HIMA berfokus pada analisis data dan evaluasi risiko. HIU berfokus pada perancangan sistem pengendalian (design control).' },
          { question: 'Apakah hasil pengukuran lingkungan kerja wajib dilaporkan ke Disnaker?', answer: 'Ya, pemeriksaan dan pengujian lingkungan kerja wajib dilakukan berkala sekurang-kurangnya 1 tahun sekali dan dilaporkan hasilnya ke dinas tenaga kerja.' }
        ]
      };
    case 'konstruksi':
      return {
        shortDesc: 'penyusunan Rencana Keselamatan Konstruksi (RKK), proteksi penggalian tanah trenching shoring, dan inspeksi scaffolding Permen PUPR 10/2021',
        answerDetail: 'penerapan Sistem Manajemen Keselamatan Konstruksi (SMKK), inspeksi safety patrol proyek, dan pengawasan pekerjaan risiko tinggi',
        hazardContext: 'struktur bangunan roboh, tertimbun tanah galian trenching, dan jatuh dari perancah scaffolding',
        highlightText: 'RKK Tender/Pelaksanaan & Audit SMKK PUPR (Permen PUPR No. 10/2021)',
        audience: ['Ahli K3 Konstruksi (Muda, Madya, Utama)', 'Petugas Keselamatan Konstruksi SMKK PUPR', 'Project Manager, Site Engineer & Supervisor Proyek'],
        bullets: [
          'Penguasaan Permen PUPR No. 10 Tahun 2021 tentang SMKK & Permenaker 01/1980',
          'Penyusunan Rencana Keselamatan Konstruksi (RKK) Tender & Pelaksanaan',
          'Inspeksi Perancah Scaffolding & Sistem Penggalian Tanah Dalam (Shoring)',
          'Analisis Harga Satuan Biaya K3 Konstruksi (AHSP K3 PUPR)'
        ],
        syllabusModules: [
          { module: 'Modul 01: Regulasi SMKK PUPR & UU Bangunan Gedung', topics: ['Permen PUPR No. 10 Tahun 2021 & Struktur Dokumen SMKK', 'Permenaker No. PER.01/MEN/1980 K3 Konstruksi Bangunan', 'Perhitungan Analisis Harga Satuan Biaya K3 (AHSP K3)'], hours: '8 JP' },
          { module: 'Modul 02: Pengendalian Pekerjaan Risiko Tinggi & Scaffolding', topics: ['Penyusunan JSA & RKK Pekerjaan Penggalian, Ereksi & Pembetonan', 'Inspeksi Scaffolding Frame & Pipe Clamp Sesuai SKB Menaker-PUPR', 'Pengawasan Pekerjaan Demolisi & Pemasangan Precast Concrete'], hours: '12 JP' },
          { module: 'Modul 03: Praktik Safety Patrol & Evaluasi Sertifikasi', topics: ['Simulasi Safety Patrol Harian & Penyusunan Laporan Temuan Proyek', 'Penanganan Tanggap Darurat Bencana & Kecelakaan Konstruksi', 'Ujian Evaluasi Kelulusan & Verifikasi Lisensi Kemnaker/BNSP'], hours: '10 JP' }
        ],
        faqs: [
          { question: 'Apakah setiap tender proyek konstruksi wajib melampirkan RKK?', answer: 'Ya, sesuai Permen PUPR 10/2021, dokumen RKK Penawaran wajib dilampirkan saat tender dan menjadi salah satu elemen penilaian kelulusan administrasi.' },
          { question: 'Berapa rasio jumlah Petugas Keselamatan Konstruksi yang wajib ada di proyek?', answer: 'Proyek risiko kecil wajib memiliki sekurang-kurangnya 1 orang Petugas Keselamatan Konstruksi, sedangkan proyek risiko sedang/besar wajib memiliki Ahli K3 Konstruksi.' },
          { question: 'Apakah perancah scaffolding lebih dari 10 meter membutuhkan surat ijin khusus?', answer: 'Perancah dengan tinggi di atas 10 meter wajib dirancang oleh teknisi ahli perancah dan disetujui pengawas K3 sebelum dinaiki pekerja.' }
        ]
      };
    case 'ketinggian':
      return {
        shortDesc: 'penerapan 3-point contact TKBT/TKPK, inspek harness lanyard, dan prosedur penanganan kecelakaan Suspension Trauma rescue',
        answerDetail: 'penggunaan APD jatuh (fall arrest system), teknik perancangan titik angkur lifeline, serta pengoperasian SCBA di ruang terbatas',
        hazardContext: 'jatuh dari ketinggian fatalitas, kejebak gas H2S beracun di ruang terbatas, dan kehabisan oksigen',
        highlightText: 'Full Body Harness Inspection & Confined Space Rescue (Permen 09/2016 & SE 01/2012)',
        audience: ['Tenaga Kerja Bangunan Tinggi (TKBT 1/2) & Rope Access (TKPK 1/2/3)', 'Petugas K3 Ruang Terbatas (Confined Space Utama & Madya)', 'Gas Tester & Supervisor Work at Height / Confined Space'],
        bullets: [
          'Penguasaan Permenaker No. 09 Tahun 2016 & SE Menakertrans SE.01/2012',
          'Pemeriksaan Kelayakan Full Body Harness, Absorber & Fall Arrester',
          'Pengukuran Gas Berbahaya Gas Tester (O2, H2S, CO, LEL Combustible)',
          'Teknik Penyelamatan Korban Gantung Harness (Suspension Trauma Rescue)'
        ],
        syllabusModules: [
          { module: 'Modul 01: Regulasi Bekerja di Ketinggian & Ruang Terbatas', topics: ['Permenaker No. 09 Tahun 2016 & SE No. SE.01/MEN/PPK/IV/2012', 'Hirarki Pengendalian Jatuh: Restraint, Positioning, Fall Arrest', 'Kriteria Ruang Terbatas Dengan Izin Masuk (Permit-Required Confined Space)'], hours: '8 JP' },
          { module: 'Modul 02: Deteksi Gas, SCBA & Perancangan Lifeline Angkur', topics: ['Pengoperasian 4-Gas Detector & Pengaliran Blower Ventilasi Air', 'Penggunaan SCBA Self Contained Breathing Apparatus Positif Pressure', 'Pemasangan Lifeline Horizontal/Vertikal & Inspeksi Harness'], hours: '12 JP' },
          { module: 'Modul 03: Praktik Simulation Rescue & Evaluasi SIO', topics: ['Simulasi Rescue Korban Ruang Terbatas Menggunakan Tripod Winch', 'Praktik Pertolongan Korban Gantung Harness Suspension Trauma', 'Ujian Evaluasi Kelulusan & Verifikasi Lisensi Kemnaker RI'], hours: '10 JP' }
        ],
        faqs: [
          { question: 'Apa perbedaan mendasar antara TKBT (Bangunan Tinggi) dan TKPK (Pada Ketinggian / Rope Access)?', answer: 'TKBT bekerja pada lantai kerja tetap atau struktur berpagar. TKPK bekerja menggantung menggunakan tali (rope access) untuk akses menara/dinding tinggi.' },
          { question: 'Berapa kadar oksigen minimum yang aman sebelum pekerja masuk ruang terbatas?', answer: 'Kadar oksigen aman dalam ruang terbatas berkisar antara 19.5% hingga 23.5%. Di bawah 19.5% dianggap membahayakan nyawa (O2 deficiency).' },
          { question: 'Berapa batas waktu penyelamatan korban yang mengalami suspension trauma?', answer: 'Korban yang menggantung pingsan pada harness harus diselamatkan dalam waktu kurang dari 15 menit untuk mencegah gagal organ akibat penyumbatan aliran darah leg pooling.' }
        ]
      };
    default: // kesehatan
      return {
        shortDesc: 'pelaksanaan RJP/CPR 30:2, penggunaan defibrilator AED, triage luka bakar, dan penanganan trauma gawat darurat',
        answerDetail: 'penyelenggaraan pelayanan kesehatan kerja klinik perusahaan (Permen 03/1982), pemantauan audiometri, dan pertolongan pertama P3K 30 JP',
        hazardContext: 'serangan jantung mendadak tempat kerja, pendarahan hebat kecelakaan mesin, dan kecelakaan trauma fisik',
        highlightText: 'RJP / CPR 30:2 & Penyelenggaraan Klinik Perusahaan (Permenaker 15/2008 & 03/1982)',
        audience: ['Petugas P3K Terlisensi Kemnaker RI di Tempat Kerja', 'Dokter Perusahaan & Paramedis Hiperkes', 'HSE Specialist, Staf HRD & Anggota P2K3'],
        bullets: [
          'Penguasaan Permenaker No. PER.15/MEN/VIII/2008 tentang P3K di Tempat Kerja',
          'Resusitasi Jantung Paru (RJP / CPR) Rasio 30:2 & Penggunaan AED',
          'Penanganan Pendarahan Hebat, Pembidaian Patah Tulang & Triage Trauma',
          'Penyelenggaraan Klinik Perusahaan & Pembentukan Fasilitas P3K (Permen 03/1982)'
        ],
        syllabusModules: [
          { module: 'Modul 01: Regulasi P3K & Pelayanan Kesehatan Kerja', topics: ['Permenaker No. PER.15/MEN/VIII/2008 & Permenaker PER.03/MEN/1982', 'Persyaratan Kotak P3K Bentuk A, B, C Sesuai Jumlah Pekerja', 'Pemeriksaan Kesehatan Kerja Awal, Berkala, dan Khusus (Permen 02/1980)'], hours: '8 JP' },
          { module: 'Modul 02: Teknik RJP, AED & Penanganan Trauma Gawat Darurat', topics: ['Resusitasi Jantung Paru (RJP/CPR) Tekanan Dada 100-120x/menit', 'Penggunaan Defibrilator Otomatis (AED Shock Advisory)', 'Teknik Balut Bidai, Penanganan Luka Bakar & Pendarahan Arteri'], hours: '12 JP' },
          { module: 'Modul 03: Praktik Penyelamatan & Uji Lisensi Petugas P3K', topics: ['Simulasi Pemindahan Korban (Evakuasi Tandu & Kendrick Extrication)', 'Inspeksi Isi Kotak P3K & Pencatatan Log Kejadian Medis', 'Ujian Evaluasi Kelulusan & Penerbitan Lisensi P3K Kemnaker'], hours: '10 JP' }
        ],
        faqs: [
          { question: 'Berapa rasio kompresi dan napas buatan saat melakukan RJP / CPR pada orang dewasa?', answer: 'Rasio baku RJP orang dewasa adalah 30 kali kompresi dada diikuti oleh 2 kali hembusan napas buatan.' },
          { question: 'Berapa jumlah Petugas P3K yang wajib dimiliki tempat kerja risiko tinggi?', answer: 'Untuk tempat kerja risiko tinggi, wajib ada sekurang-kurangnya 1 orang Petugas P3K untuk setiap 25-100 orang pekerja.' },
          { question: 'Apakah obat-obatan telan (seperti parasetamol) boleh dimasukkan ke dalam Kotak P3K standar?', answer: 'Sesuai Permenaker 15/2008, Kotak P3K standar hanya berisi alat pertolongan pertama luar (kasa, perban, antiseptik, gunting). Obat telan disimpan khusus di fasilitas klinik perusahaan.' }
        ]
      };
  }
}

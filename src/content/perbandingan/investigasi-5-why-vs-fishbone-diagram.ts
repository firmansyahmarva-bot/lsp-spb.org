import { type ContentRecord } from '../../lib/content-types';

export const record: ContentRecord = {
  "section": "perbandingan",
  "slug": "investigasi-5-why-vs-fishbone-diagram",
  "title": "Perbandingan Investigasi Insiden Metode 5-Why vs Diagram Tulang Ikan (Fishbone)",
  "metaTitle": "Perbandingan Investigasi Insiden Metode 5-Why vs Diagram Tulang Ikan (Fishbone) | Matriks & Rekomendasi",
  "description": "Panduan perbandingan objektif Perbandingan Investigasi Insiden Metode 5-Why vs Diagram Tulang Ikan (Fishbone): analisis kelebihan dan kekurangan 5-Why (Rantai Logika Linear) vs Fishbone 4M+1E (Kategori Sistemik), matriks perbedaan, dan rekomendasi pemilihan terbaik.",
  "answer": "Perbedaan utama antara Metode 5 Why dan Diagram Tulang Ikan (Fishbone / Ishikawa) terletak pada struktur logika penelusuran masalahnya: Metode 5 Why menggunakan pendekatan investigasi linier vertikal dengan bertanya \"Mengapa?\" secara berulang (rata-rata 5 kali) untuk menembus gejala langsung hingga mencapai akar penyebab mendasar (Root Cause). Sementara Diagram Fishbone menggunakan pendekatan kategorikal horizontal (metode 6M) untuk memetakan seluruh potensi faktor kontributor kegagalan secara komprehensif sebelum difokuskan pada akar masalah.",
  "highlights": [
    "Format Analisis: Penelusuran Linier Vertikal (5 Why) vs Pemetaan Kategorikal 6M (Fishbone)",
    "Kompleksitas Masalah: Masalah Sederhana hingga Menengah (5 Why) vs Insiden Kompleks Multifaktor (Fishbone)",
    "Kombinasi Terbaik: Fishbone Mengidentifikasi Area Masalah, 5 Why Menembus Akar Tiap Cabang",
    "Penerapan Regulasi: Bagian Integral dari Prosedur Pelaporan dan Investigasi Kecelakaan K3"
  ],
  "comparisonTable": {
    "leftTitle": "Metode 5 Why (Why-Why Analysis)",
    "rightTitle": "Diagram Fishbone (Ishikawa 6M)",
    "rows": [
      {
        "aspect": "Struktur Penalaran Masalah",
        "left": "Linier vertikal: Merunut rantai sebab-akibat langsung dari satu gejala",
        "right": "Divergen horizontal: Brainstorming multi-cabang faktor penyebab"
      },
      {
        "aspect": "Kategori Pengelompokan",
        "left": "Tanpa kategori baku, murni berbasis pertanyaan \"Mengapa?\" logis",
        "right": "Kategori baku 6M: Man, Machine, Material, Method, Measurement, Milieu"
      },
      {
        "aspect": "Kecepatan Penerapan",
        "left": "Sangat cepat, dapat diterapkan langsung di lokasi insiden dalam 15 menit",
        "right": "Membutuhkan waktu sesi rapat workshop dan analisis tim lintas divisi"
      },
      {
        "aspect": "Risiko Kesalahan Analisis",
        "left": "Rentan bias konfirmasi dan berhenti terlalu cepat pada human error",
        "right": "Bisa terlalu luas sehingga menyulitkan penentuan akar penyebab utama"
      },
      {
        "aspect": "Visualisasi Hasil Output",
        "left": "Tabel daftar pertanyaan-jawaban berurutan atau diagram alir vertikal",
        "right": "Diagram sirip ikan dengan kepala ikan sebagai masalah/insiden utama"
      },
      {
        "aspect": "Skala Insiden yang Sesuai",
        "left": "Insiden near-miss, kerusakan alat ringan, atau deviasi prosedur tunggal",
        "right": "Kecelakaan berakibat cidera berat/fatality atau kerusakan aset besar"
      },
      {
        "aspect": "Output Rencana Tindakan",
        "left": "Tindakan korektif langsung pada satu titik kelemahan sistemik",
        "right": "Rencana perbaikan komprehensif mencakup manajemen, mesin, dan SOP"
      }
    ]
  },
  "blocks": [
    {
      "heading": "Pentingnya Investigasi Insiden K3 Bebas Menyalahkan Individu",
      "paragraphs": [
        "Prinsip utama investigasi kecelakaan kerja menurut kaidah K3 modern bukanlah mencari siapa yang bersalah (blaming), melainkan mencari sistem apa yang gagal sehingga insiden serupa tidak terulang kembali.",
        "Metode 5 Why dan Diagram Fishbone adalah dua alat bantu investigasi yang paling populer digunakan oleh tim P2K3, pengawas lapangan, dan investigator keselamatan di seluruh dunia."
      ]
    },
    {
      "heading": "Sinergi Penyelidikan: Fishbone Memetakan Cabang, 5 Why Menggali Akar",
      "paragraphs": [
        "Dalam investigasi kecelakaan industri yang kompleks, kedua metode ini paling efektif jika digabungkan:"
      ],
      "bullets": [
        "Langkah 1 (Fishbone): Investigator mengumpulkan tim lintas departemen untuk memetakan seluruh fakta kecelakaan ke dalam tulang ikan: Apakah ada faktor Manusia (kurang pelatihan)? Mesin (safety guard dilepas)? Material (oli bocor di lantai)? Metode (tidak ada JSA)?",
        "Langkah 2 (5 Why): Setelah faktor paling kritis ditemukan pada cabang Fishbone (misalnya: \"Safety guard mesin dilepas\"), investigator menerapkan 5 Why: Mengapa dilepas? Karena sering macet. Mengapa macet? Karena mata pisau aus tidak pernah diganti. Mengapa tidak diganti? Karena tidak ada jadwal preventive maintenance.",
        "Hasil akhir: Tindakan korektif yang diambil menyentuh sistem pemeliharaan pabrik, bukan sekadar menghukum operator yang mengoperasikan mesin."
      ]
    },
    {
      "heading": "Panduan Praktis Pemilihan Alat Investigasi",
      "paragraphs": [
        "Gunakan 5 Why saat terjadi laporan insiden nearmiss harian atau kecelakaan ringan tanpa waktu hilang di fasilitas Anda agar tim lapangan dapat merumuskan tindakan korektif dengan cepat.",
        "Gunakan Diagram Fishbone saat melakukan investigasi insiden kehilangan waktu kerja (Lost Time Injury), kerusakan aset skala besar, atau saat menindaklanjuti temuan mayor audit dalam [pelatihan auditor SMK3](/pelatihan/auditor-smk3)."
      ]
    },
    {
      "heading": "Program Pelatihan Investigasi Insiden di PT Kreasi Ultimate Berjaya",
      "paragraphs": [
        "PT Kreasi Ultimate Berjaya menyelenggarakan [pelatihan investigasi insiden K3](/pelatihan/investigasi-insiden-k3) komprehensif yang mengajarkan teknik wawancara saksi, rekonstruksi kronologi insiden, aplikasi 5 Why & Fishbone, hingga pembuatan laporan resmi Disnaker."
      ]
    }
  ],
  "faqs": [
    {
      "question": "Apakah jumlah pertanyaan pada metode 5 Why harus selalu tepat 5 kali?",
      "answer": "Tidak harus tepat 5 kali. Angka 5 adalah pedoman empiris. Pada beberapa kasus, akar penyebab sistemik dapat ditemukan pada pertanyaan ke-3, atau membutuhkan hingga pertanyaan ke-7 atau ke-8 pada sistem yang rumit."
    },
    {
      "question": "Bagaimana cara memastikan bahwa analisis 5 Why sudah mencapai akar masalah sejati?",
      "answer": "Akar masalah sejati telah tercapai apabila jawabannya menyentuh kegagalan sistem manajemen (seperti SOP, anggaran, kompetensi, pemeliharaan berkala) dan jika masalah tersebut diperbaiki, insiden mustahil terjadi kembali."
    },
    {
      "question": "Kapan diagram Fishbone pertama kali diciptakan?",
      "answer": "Diagram Fishbone diciptakan oleh Dr. Kaoru Ishikawa pada tahun 1943 di University of Tokyo dan awalnya digunakan untuk pengendalian mutu industri (TQM) sebelum diadaptasi secara luas di dunia K3."
    }
  ],
  "related": [
    "pelatihan/investigasi-insiden-k3",
    "pelatihan/ahli-k3-umum",
    "pelatihan/manajemen-risiko-k3",
    "perbandingan/metode-tapproot-vs-scat-investigasi-insiden",
    "panduan/syarat-ahli-k3-umum"
  ],
  "sources": [
    {
      "label": "UU No. 1 Tahun 1970 tentang Keselamatan Kerja",
      "url": "https://jdih.kemnaker.go.id/katalog/uu-1-1970",
      "publisher": "Kemnaker RI"
    },
    {
      "label": "Permenaker No. 03 Tahun 1998 tentang Tata Cara Pelaporan dan Pemeriksaan Kecelakaan",
      "url": "https://jdih.kemnaker.go.id/katalog/permenaker-03-1998",
      "publisher": "Kemnaker RI"
    }
  ],
  "status": "published",
  "publishedAt": "2026-08-01",
  "updatedAt": "2026-09-01",
  "indexable": true,
  "intent": "perbandingan investigasi-5-why-vs-fishbone-diagram perbedaan kelebihan kekurangan pilih mana",
  "primaryKeyword": "perbedaan investigasi 5 why vs fishbone diagram",
  "searchIntent": "perbedaan, perbandingan matriks, kelebihan, dan rekomendasi Perbandingan Investigasi Insiden Metode 5-Why vs Diagram Tulang Ikan (Fishbone)",
  "intentType": "commercial",
  "parentTopic": "Perbandingan K3 Metodologi Analisis Risiko & Investigasi Insiden",
  "cannibalizationGroup": "perbandingan-investigasi-5-why",
  "contentKind": "comparison",
  "primaryCtaText": "Konsultasi Pemilihan Perbandingan Investigasi Insiden Metode 5-Why vs Diagram Tulang Ikan (Fishbone)",
  "primaryCtaIntent": "syarat",
  "secondaryCtaText": "Tanya Jadwal & Biaya Program",
  "secondaryCtaIntent": "jadwal",
  "image": {
    "src": "/images/content/diskusi-instruktur-dan-peserta-di-ruang-seminar-5.webp",
    "alt": "Sesi diskusi interaktif antara instruktur dan peserta di ruang seminar (Dokumentasi 5) - Perbandingan Investigasi Insiden Metode 5-Why vs Diagram Tulang Ikan (Fishbone)"
  }
};
export default record;

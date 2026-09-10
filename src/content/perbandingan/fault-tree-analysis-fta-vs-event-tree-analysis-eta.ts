import { type ContentRecord } from '../../lib/content-types';

export const record: ContentRecord = {
  "section": "perbandingan",
  "slug": "fault-tree-analysis-fta-vs-event-tree-analysis-eta",
  "title": "Perbandingan Fault Tree Analysis (FTA) vs Event Tree Analysis (ETA)",
  "metaTitle": "Perbandingan Fault Tree Analysis (FTA) vs Event Tree Analysis (ETA) | Matriks & Rekomendasi",
  "description": "Panduan perbandingan objektif Perbandingan Fault Tree Analysis (FTA) vs Event Tree Analysis (ETA): analisis kelebihan dan kekurangan FTA (Deduktif Top-Down) vs ETA (Induktif Bottom-Up), matriks perbedaan, dan rekomendasi pemilihan terbaik.",
  "answer": "Perbedaan mendasar antara Fault Tree Analysis (FTA) dan Event Tree Analysis (ETA) terletak pada arah logika analisis risikonya: FTA menggunakan pendekatan deduktif mundur (top-down) yang membedah bagaimana berbagai kombinasi kegagalan komponen (menggunakan gerbang logika AND/OR) memicu satu kecelakaan puncak (Top Event). Sebaliknya, ETA menggunakan pendekatan induktif maju (bottom-up) yang menelusuri bagaimana satu peristiwa pemicu awal (Initiating Event) merambat ke depan melewati serangkaian fungsi proteksi/penghalang hingga menghasilkan berbagai variasi dampak akhir.",
  "highlights": [
    "Arah Analisis Logika: FTA Deduktif Mundur (Top-Down) vs ETA Induktif Maju (Bottom-Up)",
    "Instrumen Analisis: Gerbang Logika AND/OR (FTA) vs Diagram Percabangan Biner Sukses/Gagal (ETA)",
    "Titik Fokus: Menemukan Akar Penyebab Kecelakaan Tunggal vs Mengevaluasi Keberhasilan Lapisan Proteksi",
    "Penerapan Ideal: Sinergi FTA & ETA Menghasilkan Analisis Risiko Komprehensif (Diagram Bowtie)"
  ],
  "comparisonTable": {
    "leftTitle": "Fault Tree Analysis (FTA)",
    "rightTitle": "Event Tree Analysis (ETA)",
    "rows": [
      {
        "aspect": "Pendekatan Logika Penalaran",
        "left": "Deduktif (Mundur dari akibat mencari penyebab)",
        "right": "Induktif (Maju dari pemicu awal mencari skenario dampak)"
      },
      {
        "aspect": "Titik Awal Analisis",
        "left": "Top Event (Kecelakaan puncak yang tidak diinginkan)",
        "right": "Initiating Event (Kejadian pemicu / deviasi awal)"
      },
      {
        "aspect": "Simbol & Notasi Representasi",
        "left": "Gerbang logika Boolean (Gerbang AND, OR, Voting Gate)",
        "right": "Pohon cabang biner (Cabang Sukses/Atas vs Gagal/Bawah)"
      },
      {
        "aspect": "Hasil Output Kualitatif",
        "left": "Minimal Cut Sets (kombinasi terkecil kegagalan pemicu insiden)",
        "right": "Rantai skenario kecelakaan (dari kondisi aman hingga katastrofe)"
      },
      {
        "aspect": "Hasil Output Kuantitatif",
        "left": "Probabilitas terjadinya Top Event per tahun",
        "right": "Frekuensi probabilitas terjadinya masing-masing skenario dampak"
      },
      {
        "aspect": "Evaluasi Lapisan Keselamatan",
        "left": "Mengevaluasi mengapa sistem gagal bekerja bersamaan",
        "right": "Mengevaluasi keandalan bertingkat Safety Barriers / Interlock"
      },
      {
        "aspect": "Rekomendasi Penempatan Karir",
        "left": "Investigasi insiden teknis & analisis keandalan mesin",
        "right": "Desain sistem proteksi proses & perencanaan tanggap darurat"
      }
    ]
  },
  "blocks": [
    {
      "heading": "Metodologi Analisis Risiko Sistemik di Industri Berisiko Tinggi",
      "paragraphs": [
        "Dalam rekayasa keselamatan industri proses (seperti petrokimia, pembangkit listrik, migas, dan manufaktur berat), Fault Tree Analysis (FTA) dan Event Tree Analysis (ETA) merupakan dua metodologi klasik yang diakui secara global untuk memetakan kegagalan sistemik kompleks.",
        "Keduanya sering kali diintegrasikan ke dalam model Bowtie, di mana FTA membentuk sisi kiri (menganalisis ancaman pemicu kejadian puncak) dan ETA membentuk sisi kanan (menganalisis eskalasi dampak dan kegagalan proteksi mitigasi)."
      ]
    },
    {
      "heading": "Perbandingan Mekanisme Kerja: Gerbang Logika vs Pohon Keputusan Biner",
      "paragraphs": [
        "Perbedaan struktural kedua alat ini tampak nyata dalam langkah pengerjaannya:"
      ],
      "bullets": [
        "Fault Tree Analysis (FTA): Dimulai dari menetapkan Top Event (misalnya: \"Tangki Timbun Bahan Kimia Meledak\"). Analis kemudian menanyakan \"apa yang menyebabkan ini terjadi?\" dan merincinya ke dalam kegagalan primer, sekunder, dan perintah operasional menggunakan gerbang AND (semua input harus gagal) atau gerbang OR (satu input gagal cukup memicu Top Event).",
        "Event Tree Analysis (ETA): Dimulai dari satu kejadian deviasi awal (misalnya: \"Pipa Tekanan Tinggi Bocor\"). Analis kemudian menempatkan sistem proteksi bertingkat secara kronologis ke arah kanan: (1) Apakah Gas Detector mendeteksi? (2) Apakah Emergency Shutdown Valve menutup? (3) Apakah Water Deluge menyala? Tiap cabang membelah menjadi Sukses atau Gagal."
      ]
    },
    {
      "heading": "Kapan Praktisi K3 Menggunakan FTA atau ETA?",
      "paragraphs": [
        "Gunakan FTA saat Anda melakukan investigasi insiden mendalam setelah terjadi kerusakan mesin fatal atau ledakan, guna mengungkap kombinasi terkecil kegagalan komponen mekanik dan kelalaian manusia (Minimal Cut Sets).",
        "Gunakan ETA saat merancang Safety Instrumented Systems (SIS), menyusun dokumen tanggap darurat fasilitas, atau mengevaluasi apakah lapisan proteksi (Independent Protection Layers) yang ada sudah memadai untuk mencegah eskalasi fatal."
      ]
    },
    {
      "heading": "Pengembangan Kompetensi Risk Assessment di PT Kreasi Ultimate Berjaya",
      "paragraphs": [
        "PT Kreasi Ultimate Berjaya menyelenggarakan [pelatihan manajemen risiko K3](/pelatihan/manajemen-risiko-k3) dan [pelatihan investigasi insiden K3](/pelatihan/investigasi-insiden-k3) yang membekali praktisi HSE dengan penguasaan metode FTA, ETA, HAZOP, dan Bowtie berbasis studi kasus riil industri."
      ]
    }
  ],
  "faqs": [
    {
      "question": "Apakah FTA dan ETA dapat digabungkan dalam satu analisis?",
      "answer": "Ya. Penggabungan FTA dan ETA adalah dasar dari Metodologi Bowtie. Sisi kiri bowtie adalah fault tree yang memetakan ancaman menuju Top Event, sedangkan sisi kanan adalah event tree yang memetakan eskalasi Top Event menuju dampak akhir."
    },
    {
      "question": "Metode mana yang lebih mudah diterapkan oleh pemula K3?",
      "answer": "ETA umumnya lebih mudah dipahami secara visual oleh pemula karena alurnya berjalan kronologis mengikuti urutan aktivasi alat keselamatan. FTA membutuhkan pemahaman aljabar Boolean dan logika gerbang sistem yang lebih ketat."
    },
    {
      "question": "Software apa yang umum digunakan untuk menyusun FTA dan ETA di industri?",
      "answer": "Industri global umumnya menggunakan perangkat lunak seperti BowTieXP, Isograph FaultTree+, ReliaSoft BlockSim, atau CAFTA untuk kalkulasi probabilitas kuantitatif matematis."
    }
  ],
  "related": [
    "pelatihan/manajemen-risiko-k3",
    "pelatihan/investigasi-insiden-k3",
    "pelatihan/ahli-k3-umum",
    "perbandingan/metode-bowtie-vs-risk-matrix-5x5",
    "perbandingan/hazop-vs-fmea-analisis-risiko-k3"
  ],
  "sources": [
    {
      "label": "IEC 61025: Fault Tree Analysis (FTA) Standard",
      "url": "https://www.iec.ch",
      "publisher": "International Electrotechnical Commission"
    },
    {
      "label": "IEC 62502: Event Tree Analysis (ETA) Standard",
      "url": "https://www.iec.ch",
      "publisher": "International Electrotechnical Commission"
    }
  ],
  "status": "published",
  "publishedAt": "2026-08-01",
  "updatedAt": "2026-09-01",
  "indexable": true,
  "intent": "perbandingan fault-tree-analysis-fta-vs-event-tree-analysis-eta perbedaan kelebihan kekurangan pilih mana",
  "primaryKeyword": "perbedaan fault tree analysis fta vs event tree analysis eta",
  "searchIntent": "perbedaan, perbandingan matriks, kelebihan, dan rekomendasi Perbandingan Fault Tree Analysis (FTA) vs Event Tree Analysis (ETA)",
  "intentType": "commercial",
  "parentTopic": "Perbandingan K3 Metodologi Analisis Risiko & Investigasi Insiden",
  "cannibalizationGroup": "perbandingan-fault-tree-analysis-fta",
  "contentKind": "comparison",
  "primaryCtaText": "Konsultasi Pemilihan Perbandingan Fault Tree Analysis (FTA) vs Event Tree Analysis (ETA)",
  "primaryCtaIntent": "syarat",
  "secondaryCtaText": "Tanya Jadwal & Biaya Program",
  "secondaryCtaIntent": "jadwal",
  "image": {
    "src": "/images/content/diskusi-instruktur-dan-peserta-di-ruang-seminar-2.webp",
    "alt": "Sesi diskusi interaktif antara instruktur dan peserta di ruang seminar (Dokumentasi 2) - Perbandingan Fault Tree Analysis (FTA) vs Event Tree Analysis (ETA)"
  }
};
export default record;

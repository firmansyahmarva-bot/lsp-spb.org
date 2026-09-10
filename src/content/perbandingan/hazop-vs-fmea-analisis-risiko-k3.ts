import { type ContentRecord } from '../../lib/content-types';

export const record: ContentRecord = {
  "section": "perbandingan",
  "slug": "hazop-vs-fmea-analisis-risiko-k3",
  "title": "Perbandingan Metode HAZOP vs FMEA dalam Analisis Risiko K3",
  "metaTitle": "Perbandingan Metode HAZOP vs FMEA dalam Analisis Risiko K3 | Matriks & Rekomendasi",
  "description": "Panduan perbandingan objektif Perbandingan Metode HAZOP vs FMEA dalam Analisis Risiko K3: analisis kelebihan dan kekurangan HAZOP (Process Guide Words) vs FMEA (Failure Mode & RPN), matriks perbedaan, dan rekomendasi pemilihan terbaik.",
  "answer": "Perbedaan utama antara HAZOP dan FMEA terletak pada objek dan metodologi pendekatannya: HAZOP (Hazard and Operability Study) berfokus pada aliran proses perpipaan dan instrumentasi (P&ID) menggunakan kata pandu (Guide Words) untuk menganalisis deviasi parameter proses kimia/fluida. Sebaliknya, FMEA (Failure Mode and Effects Analysis) berfokus pada keandalan komponen fisik mesin dan peralatan mekanis/elektronik dengan menghitung skor Risk Priority Number (RPN) berdasarkan Severity, Occurrence, dan Detection.",
  "highlights": [
    "Objek Fokus Utama: Deviasi Proses Fluida & P&ID (HAZOP) vs Kegagalan Komponen Fisik Mesin (FMEA)",
    "Metodologi Inti: Kata Pandu / Guide Words (HAZOP) vs Perhitungan Skor RPN (FMEA)",
    "Industri Pengguna Khas: Petrokimia, Kilang Minyak, Farmasi (HAZOP) vs Manufaktur Otomotif, Mesin, Elektronik (FMEA)",
    "Sifat Analisis: Analisis Multidisiplin Tim Terbuka vs Analisis Terstruktur Komponen per Komponen"
  ],
  "comparisonTable": {
    "leftTitle": "HAZOP (Hazard and Operability Study)",
    "rightTitle": "FMEA (Failure Mode and Effects Analysis)",
    "rows": [
      {
        "aspect": "Fokus Analisis Sistem",
        "left": "Aliran fluida, tekanan, suhu, reaksi kimia dalam sistem pipa & tangki",
        "right": "Kerusakan mekanis, keausan komponen, retak, dan malfungsi elektrik"
      },
      {
        "aspect": "Instrumen Analisis",
        "left": "Guide Words (No, More, Less, As Well As, Part Of, Reverse, Other Than)",
        "right": "Worksheet FMEA (Failure Mode, Causes, Effects, Current Controls)"
      },
      {
        "aspect": "Metrik Kuantifikasi Risiko",
        "left": "Peringkat matriks risiko matriks kualitatif / semi-kuantitatif",
        "right": "Risk Priority Number (RPN = Severity x Occurrence x Detection)"
      },
      {
        "aspect": "Dokumen Rujukan Utama",
        "left": "Piping and Instrumentation Diagram (P&ID) & Process Flow Diagram (PFD)",
        "right": "Gambar teknik mesin, skema perakitan, dan manual suku cadang"
      },
      {
        "aspect": "Komposisi Tim Penilai",
        "left": "Wajib multidisiplin: Process Engineer, Operator, Instrument, HSE",
        "right": "Design Engineer, Quality Assurance, Maintenance, dan Keandalan Mesin"
      },
      {
        "aspect": "Output Rekomendasi",
        "left": "Modifikasi desain proses, penambahan valve interlock, alarm trip",
        "right": "Peningkatan jadwal preventive maintenance, desain ulang komponen"
      },
      {
        "aspect": "Standar Internasional",
        "left": "IEC 61882 (Hazard and operability studies)",
        "right": "IEC 60812 / AIAG & VDA FMEA Handbook"
      }
    ]
  },
  "blocks": [
    {
      "heading": "Dua Pilar Analisis Risiko Kritis: Proses Kimia vs Rekayasa Komponen",
      "paragraphs": [
        "Dalam dunia teknik keselamatan dan keandalan operasional, HAZOP dan FMEA merupakan standar baku dunia industri. Keduanya dirancang untuk menemukan potensi kegagalan sebelum fasilitas dioperasikan atau saat merancang modifikasi fasilitas.",
        "Meskipun tujuannya sama-sama mencegah kecelakaan dan downtime, kekeliruan dalam memilih salah satu metode dapat menyebabkan bahaya proses tidak teridentifikasi secara tuntas."
      ]
    },
    {
      "heading": "Perbedaan Pendekatan: Guide Words vs Failure Modes RPN",
      "paragraphs": [
        "Perbedaan cara kerja kedua metode terlihat jelas dalam simulasi workshop keselamatan:"
      ],
      "bullets": [
        "HAZOP: Mengambil satu \"Node\" pada jalur pipa P&ID, lalu mengombinasikan parameter proses dengan kata pandu. Contoh: Parameter \"Flow\" + Kata Pandu \"No\" = \"No Flow\" (Aliran Terhenti). Tim kemudian mencari penyebabnya (pompa trip, valve tertutup) dan dampak bahayanya (tekanan berlebih di hulu, reaksi eksotermik gagal dingin).",
        "FMEA: Menginventarisir setiap komponen mesin satu per satu (misalnya: \"Bantalan Bearing Pompa\"). Tim menganalisis bagaimana bearing bisa gagal (retak akibat aus), dampaknya terhadap unit (pompa macet dan getaran tinggi), serta menilai kemampuan deteksi saat ini (vibration sensor). Skor RPN dihitung untuk menentukan komponen mana yang harus segera dimodifikasi."
      ]
    },
    {
      "heading": "Panduan Praktis Pemilihan Metode di Fasilitas Anda",
      "paragraphs": [
        "Gunakan HAZOP apabila fasilitas Anda mengalirkan bahan kimia, gas bertekanan, uap panas boiler, atau cairan mudah terbakar. Pembinaan personil pendukung dapat diambil melalui [pelatihan ahli K3 kimia](/pelatihan/pelatihan-ahli-k3-kimia-sertifikasi-resmi-kemnaker-ri).",
        "Gunakan FMEA jika pabrik Anda adalah fasilitas manufaktur perakitan otomotif, mesin industri, peralatan elektronik presisi, atau saat menyusun jadwal Total Productive Maintenance (TPM)."
      ]
    },
    {
      "heading": "Pelatihan Manajemen Risiko Proses di PT Kreasi Ultimate Berjaya",
      "paragraphs": [
        "PT Kreasi Ultimate Berjaya menyelenggarakan [pelatihan manajemen risiko K3](/pelatihan/manajemen-risiko-k3) dengan simulasi studi HAZOP P&ID dan pembuatan worksheet FMEA terstandar, didampingi oleh instruktur profesional berpengalaman di industri petrokimia dan manufaktur nasional."
      ]
    }
  ],
  "faqs": [
    {
      "question": "Apakah HAZOP dapat diterapkan pada industri perakitan manufaktur umum?",
      "answer": "Kurang efektif. HAZOP dirancang spesifik untuk fluida proses dan parameter perpipaan. Untuk industri perakitan diskrit atau manufaktur mekanis, metode FMEA (atau Design FMEA dan Process FMEA) jauh lebih tepat."
    },
    {
      "question": "Siapa yang memimpin pelaksanaan workshop HAZOP?",
      "answer": "Workshop HAZOP wajib dipimpin oleh seorang HAZOP Leader / Fasilitator independen yang tersertifikasi dan didampingi oleh seorang HAZOP Scribe (notulis teknis) untuk memastikan diskusi tim multidisiplin berjalan objektif."
    },
    {
      "question": "Berapa nilai RPN pada FMEA yang mengharuskan tindakan korektif segera?",
      "answer": "Secara tradisional, skor RPN di atas 100-120 (dari skala maksimal 1000) atau item dengan tingkat keparahan (Severity) 9-10 wajib ditindaklanjuti dengan tindakan mitigasi rekayasa teknik."
    }
  ],
  "related": [
    "pelatihan/manajemen-risiko-k3",
    "pelatihan/pelatihan-ahli-k3-kimia-sertifikasi-resmi-kemnaker-ri",
    "pelatihan/ahli-k3-umum",
    "perbandingan/fault-tree-analysis-fta-vs-event-tree-analysis-eta",
    "perbandingan/hiradc-vs-jsa-analisis-keselamatan-kerja"
  ],
  "sources": [
    {
      "label": "IEC 61882: Hazard and operability studies (HAZOP studies) - Application guide",
      "url": "https://www.iec.ch",
      "publisher": "International Electrotechnical Commission"
    },
    {
      "label": "IEC 60812: Failure modes and effects analysis (FMEA and FMECA)",
      "url": "https://www.iec.ch",
      "publisher": "International Electrotechnical Commission"
    }
  ],
  "status": "published",
  "publishedAt": "2026-08-01",
  "updatedAt": "2026-09-01",
  "indexable": true,
  "intent": "perbandingan hazop-vs-fmea-analisis-risiko-k3 perbedaan kelebihan kekurangan pilih mana",
  "primaryKeyword": "perbedaan hazop vs fmea analisis risiko k3",
  "searchIntent": "perbedaan, perbandingan matriks, kelebihan, dan rekomendasi Perbandingan Metode HAZOP vs FMEA dalam Analisis Risiko K3",
  "intentType": "commercial",
  "parentTopic": "Perbandingan K3 Metodologi Analisis Risiko & Investigasi Insiden",
  "cannibalizationGroup": "perbandingan-hazop",
  "contentKind": "comparison",
  "primaryCtaText": "Konsultasi Pemilihan Perbandingan Metode HAZOP vs FMEA dalam Analisis Risiko K3",
  "primaryCtaIntent": "syarat",
  "secondaryCtaText": "Tanya Jadwal & Biaya Program",
  "secondaryCtaIntent": "jadwal",
  "image": {
    "src": "/images/content/diskusi-instruktur-dan-peserta-di-ruang-seminar-1.webp",
    "alt": "Sesi diskusi interaktif antara instruktur dan peserta di ruang seminar (Dokumentasi 1) - Perbandingan Metode HAZOP vs FMEA dalam Analisis Risiko K3"
  }
};
export default record;

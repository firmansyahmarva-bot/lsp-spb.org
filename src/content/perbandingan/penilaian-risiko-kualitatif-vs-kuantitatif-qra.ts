import { type ContentRecord } from '../../lib/content-types';

export const record: ContentRecord = {
  "section": "perbandingan",
  "slug": "penilaian-risiko-kualitatif-vs-kuantitatif-qra",
  "title": "Perbandingan Analisis Risiko Kualitatif vs Kuantitatif (QRA)",
  "metaTitle": "Perbandingan Analisis Risiko Kualitatif vs Kuantitatif (QRA) | Matriks & Rekomendasi",
  "description": "Panduan perbandingan objektif Perbandingan Analisis Risiko Kualitatif vs Kuantitatif (QRA): analisis kelebihan dan kekurangan Kualitatif (Matriks Peluang-Dampak) vs QRA Kuantitatif (Frekuensi & Radius Dampak), matriks perbedaan, dan rekomendasi pemilihan terbaik.",
  "answer": "Perbedaan mendasar antara Penilaian Risiko Kualitatif dan Quantitative Risk Assessment (QRA) terletak pada bentuk data dan presisi matematisnya: Penilaian Kualitatif menggunakan deskripsi skala kata dan konsensus tim (seperti Matriks Rendah-Sedang-Tinggi atau Risk Assessment Matrix) untuk memprioritaskan bahaya operasional secara cepat. Sebaliknya, QRA menggunakan pemodelan matematika numerik probabilitas kegagalan komponen (per jam operasi), simulasi radiasi ledakan termal (kW/m²), dispersi racun gas (ppm), serta menghitung kurva kematian individu per tahun (Individual Risk Per Annum / IRPA) dan Kurva F-N bagi masyarakat sekitar fasilitas.",
  "highlights": [
    "Bentuk Hasil Analisis: Deskriptif Kategori Skala (Kualitatif) vs Kalkulasi Numerik Probabilitas & Radius Ledakan (QRA)",
    "Kompleksitas & Biaya: Cepat, Murah & Mudah Diterapkan (Kualitatif) vs Pemodelan Software Spesialis Mahal (QRA)",
    "Konteks Kepatuhan: Kepatuhan Standar SMK3 PP 50/2012 (Kualitatif) vs AMDAL, Izin Kilang, & Kepmenaker 187/1999 (QRA)",
    "Penerapan Ideal: Kualitatif untuk 95% Risiko Harian Fasilitas; QRA untuk Fasilitas Berbahaya Skala Besar (Major Hazard)"
  ],
  "comparisonTable": {
    "leftTitle": "Quantitative Risk Assessment (QRA)",
    "rightTitle": "Penilaian Risiko Kualitatif (Risk Matrix)",
    "rows": [
      {
        "aspect": "Bentuk Data Input & Output",
        "left": "Data frekuensi numerik kegagalan alat & konsentrasi ledakan kimia",
        "right": "Skala urutan kata deskriptif (Ringan, Sedang, Berat, Bencana)"
      },
      {
        "aspect": "Instrumen Pemodelan",
        "left": "Software simulasi gas & ledakan (DNV Phast, SAFETI, ALOHA)",
        "right": "Lembar worksheet matriks 3x3, 4x4, atau 5x5 dan sesi rapat tim"
      },
      {
        "aspect": "Metrik Toleransi Risiko",
        "left": "IRPA (misal: 10^-4 untuk pekerja; 10^-6 untuk publik) & Kurva F-N",
        "right": "Kategori warna risiko (Hijau, Kuning, Merah) dalam matriks"
      },
      {
        "aspect": "Waktu Pengerjaan Studi",
        "left": "Berminggu-minggu hingga berbulan-bulan oleh konsultan spesialis",
        "right": "Beberapa jam hingga hitungan hari oleh tim internal P2K3"
      },
      {
        "aspect": "Pengambilan Keputusan Desain",
        "left": "Menentukan jarak aman zonasi pabrik (Safe Separation Distance)",
        "right": "Menentukan jenis APD, revisi SOP kerja, dan jadwal inspeksi"
      },
      {
        "aspect": "Objek Evaluasi Tipikal",
        "left": "Depot LPG, kilang minyak, pabrik klorin, pipa transmisi gas alam",
        "right": "Aktivitas bengkel, pergudangan, jalur perakitan, area konstruksi sipil"
      },
      {
        "aspect": "Rekomendasi Pelatihan Relevan",
        "left": "Pelatihan Penilaian Potensi Bahaya Besar Kep 187 & Process Safety",
        "right": "Pelatihan Ahli K3 Umum & Manajemen Risiko K3"
      }
    ]
  },
  "blocks": [
    {
      "heading": "Tingkatan Penilaian Risiko: Dari Kualitatif Menuju Kuantitatif Presisi",
      "paragraphs": [
        "Dalam standar manajemen risiko ISO 31010, penilaian risiko dapat dilakukan secara kualitatif, semi-kuantitatif, atau kuantitatif penuh. Tidak semua bahaya di tempat kerja membutuhkan studi kuantitatif yang mahal.",
        "Namun untuk fasilitas industri kimia dengan potensi bahaya besar (Major Hazard Installations), analisis kualitatif berbasis opini saja tidak memadai untuk meyakinkan regulator kementerian dan pemerintah daerah terkait zona aman permukiman warga."
      ]
    },
    {
      "heading": "Perbedaan Teknis: Matriks Risiko Deskriptif vs Kalkulasi IRPA dan Kurva FN",
      "paragraphs": [
        "Perbedaan substansi kedua instrumen dapat dipahami melalui aplikasi kasus ledakan tangki LPG:"
      ],
      "bullets": [
        "Penilaian Kualitatif: Tim menyimpulkan bahwa peluang ledakan adalah \"Jarang\" dan dampaknya adalah \"Bencana\", sehingga risiko berada di kuadran \"Tinggi\". Tindakan kendalinya adalah inspeksi rutin katup pengaman dan pelatihan tim pemadam kebakaran.",
        "Studi QRA: Software menghitung laju kebocoran lubang 50 mm menghasilkan pelepasan 20 kg/detik. Model dispersi menghitung awan gas mencapai Lower Flammable Limit (LFL) sejauh 350 meter dalam waktu 4 menit. Jika terjadi penyalaan uap (Vapour Cloud Explosion / VCE), radiasi panas 37.5 kW/m² menyebabkan kematian 100% pada radius 120 meter. Angka IRPA dihitung sebesar 3.2 x 10^-5/tahun dan divalidasi terhadap kriteria ALARP kementerian."
      ]
    },
    {
      "heading": "Kapan Perusahaan Wajib Melakukan Studi QRA?",
      "paragraphs": [
        "Terapkan Penilaian Risiko Kualitatif untuk seluruh aktivitas operasional rutin harian pabrik guna memenuhi persyaratan audit [pelatihan auditor SMK3](/pelatihan/auditor-smk3) dan penyusunan dokumen HIRADC.",
        "Wajibkan pelaksanaan QRA resmi jika perusahaan Anda membangun fasilitas tangki timbun bahan kimia baru, depo bahan bakar, fasilitas pipa gas bawah tanah bertekanan tinggi, atau fasilitas yang ditetapkan sebagai potensi bahaya besar sesuai Kepmenaker No. 187/1999 melalui [pelatihan penilaian potensi bahaya besar kimia Kep 187](/pelatihan/pelatihan-penilaian-potensi-bahaya-besar-dan-bahaya-menengah-kimia-kep-187)."
      ]
    },
    {
      "heading": "Dukungan Manajemen Risiko Industri di PT Kreasi Ultimate Berjaya",
      "paragraphs": [
        "PT Kreasi Ultimate Berjaya menyediakan program bimbingan teknis [pelatihan manajemen risiko K3](/pelatihan/manajemen-risiko-k3) dan [pelatihan ahli K3 kimia](/pelatihan/pelatihan-ahli-k3-kimia-sertifikasi-resmi-kemnaker-ri) yang mencakup prinsip dasar mitigasi potensi bahaya besar industri proses."
      ]
    }
  ],
  "faqs": [
    {
      "question": "Apakah hasil studi QRA wajib dilampirkan dalam pengajuan izin lingkungan (AMDAL)?",
      "answer": "Ya. Pada industri kimia hulu, kilang, dan pembangkit listrik berskala besar, dokumen Analisis Risiko Lingkungan dalam AMDAL secara eksplisit mensyaratkan lampiran studi QRA independen."
    },
    {
      "question": "Apa yang dimaksud dengan kurva F-N dalam analisis QRA?",
      "answer": "Kurva F-N (Frequency vs Number of Fatalities) adalah grafik logaritmik yang menggambarkan frekuensi kumulatif terjadinya insiden (F) yang dapat menyebabkan sejumlah kematian tertentu (N) pada masyarakat di sekitar fasilitas industri."
    },
    {
      "question": "Berapa lama masa berlaku dokumen laporan studi QRA?",
      "answer": "Studi QRA umumnya berlaku selama 5 tahun atau wajib diperbarui lebih awal apabila terjadi modifikasi desain proses (MOC), penambahan tangki timbun, atau perubahan kepadatan populasi di sekitar fasilitas."
    }
  ],
  "related": [
    "pelatihan/pelatihan-penilaian-potensi-bahaya-besar-dan-bahaya-menengah-kimia-kep-187",
    "pelatihan/pelatihan-ahli-k3-kimia-sertifikasi-resmi-kemnaker-ri",
    "pelatihan/manajemen-risiko-k3",
    "panduan/syarat-ahli-k3-umum",
    "pelatihan/ahli-k3-umum"
  ],
  "sources": [
    {
      "label": "Kepmenaker No. KEP.187/MEN/1999 tentang Pengendalian Bahan Kimia Berbahaya di Tempat Kerja",
      "url": "https://jdih.kemnaker.go.id/katalog/kepmenaker-187-1999",
      "publisher": "Kemnaker RI"
    },
    {
      "label": "ISO 31010: Risk management - Risk assessment techniques",
      "url": "https://www.iso.org",
      "publisher": "International Organization for Standardization"
    }
  ],
  "status": "published",
  "publishedAt": "2026-08-01",
  "updatedAt": "2026-09-01",
  "indexable": true,
  "intent": "perbandingan penilaian-risiko-kualitatif-vs-kuantitatif-qra perbedaan kelebihan kekurangan pilih mana",
  "primaryKeyword": "perbedaan penilaian risiko kualitatif vs kuantitatif qra",
  "searchIntent": "perbedaan, perbandingan matriks, kelebihan, dan rekomendasi Perbandingan Analisis Risiko Kualitatif vs Kuantitatif (QRA)",
  "intentType": "commercial",
  "parentTopic": "Perbandingan K3 Metodologi Analisis Risiko & Investigasi Insiden",
  "cannibalizationGroup": "perbandingan-penilaian-risiko-kualitatif",
  "contentKind": "comparison",
  "primaryCtaText": "Konsultasi Pemilihan Perbandingan Analisis Risiko Kualitatif vs Kuantitatif (QRA)",
  "primaryCtaIntent": "syarat",
  "secondaryCtaText": "Tanya Jadwal & Biaya Program",
  "secondaryCtaIntent": "jadwal",
  "image": {
    "src": "/images/content/diskusi-instruktur-dan-peserta-di-ruang-seminar-2.webp",
    "alt": "Sesi diskusi interaktif antara instruktur dan peserta di ruang seminar (Dokumentasi 2) - Perbandingan Analisis Risiko Kualitatif vs Kuantitatif (QRA)"
  }
};
export default record;

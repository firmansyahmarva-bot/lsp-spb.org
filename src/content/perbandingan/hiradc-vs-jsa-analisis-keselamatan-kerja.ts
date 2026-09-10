import { type ContentRecord } from '../../lib/content-types';

export const record: ContentRecord = {
  "section": "perbandingan",
  "slug": "hiradc-vs-jsa-analisis-keselamatan-kerja",
  "title": "Perbandingan HIRADC Tingkat Fasilitas vs JSA Tingkat Tugas Spesifik",
  "metaTitle": "Perbandingan HIRADC Tingkat Fasilitas vs JSA Tingkat Tugas Spesifik | Matriks & Rekomendasi",
  "description": "Panduan perbandingan objektif Perbandingan HIRADC Tingkat Fasilitas vs JSA Tingkat Tugas Spesifik: analisis kelebihan dan kekurangan HIRADC (Makro Seluruh Fasilitas) vs JSA (Mikro Langkah Kerja Tugas), matriks perbedaan, dan rekomendasi pemilihan terbaik.",
  "answer": "Perbedaan mendasar antara HIRADC dan JSA terletak pada skala cakupan dan pengguna operasionalnya: HIRADC (Hazard Identification, Risk Assessment, and Determining Controls) adalah dokumen manajemen risiko komprehensif tingkat perusahaan yang mencakup seluruh aktivitas rutin dan non-rutin fasilitas untuk kepatuhan SMK3 PP 50/2012 dan ISO 45001. Sebaliknya, JSA (Job Safety Analysis) adalah instrumen praktis berbasis tugas spesifik yang diisi oleh supervisor dan pekerja lini depan untuk mengidentifikasi bahaya langkah demi langkah sesaat sebelum pekerjaan berisiko tinggi dieksekusi di lapangan.",
  "highlights": [
    "Tingkatan Sistem: Penilaian Makro Fasilitas Pabrik (HIRADC) vs Penilaian Mikro Langkah Kerja Spesifik (JSA)",
    "Pengguna Dokumen: HSE Manager & Tim P2K3 (HIRADC) vs Supervisor Lapangan & Tim Pekerja (JSA)",
    "Frekuensi Evaluasi: Dokumen Tahunan / Saat Perubahan Besar vs Dokumen Harian / Per Izin Kerja (Permit)",
    "Kepatuhan Regulasi: Syarat Mutlak SMK3 PP 50/2012 Kriteria 2.1 vs Syarat Izin Kerja Aman (PTW)"
  ],
  "comparisonTable": {
    "leftTitle": "HIRADC / IBPR Perusahaan",
    "rightTitle": "JSA (Job Safety Analysis)",
    "rows": [
      {
        "aspect": "Cakupan Penilaian Bahaya",
        "left": "Makro: Menyeluruh mencakup seluruh proses bisnis pabrik/kantor",
        "right": "Mikro: Terbatas pada satu tugas kerja spesifik (misal: pengelasan tangki)"
      },
      {
        "aspect": "Pembagian Tahapan Kerja",
        "left": "Dikelompokkan per departemen, area kerja, dan jenis aktivitas",
        "right": "Dikelompokkan secara rinci urutan langkah demi langkah (Step-by-Step)"
      },
      {
        "aspect": "Penyusun & Penanggung Jawab",
        "left": "HSE Committee, Ahli K3 Umum, dan Kepala Departemen terkait",
        "right": "Pengawas lini depan (Foreman/Supervisor) bersama pekerja pelaksana"
      },
      {
        "aspect": "Waktu & Periode Evaluasi",
        "left": "Ditinjau minimal setahun sekali atau saat ada MOC (perubahan)",
        "right": "Dibuat setiap kali akan melaksanakan pekerjaan berisiko tinggi"
      },
      {
        "aspect": "Integrasi Dokumen Legal",
        "left": "Bagian dari Manual SMK3 PP 50/2012 dan Klausul 6.1 ISO 45001",
        "right": "Lampiran wajib dari formulir Izin Kerja Aman (Permit to Work / PTW)"
      },
      {
        "aspect": "Hierarki Pengendalian",
        "left": "Fokus pada Eliminasi, Substitusi, dan Rekayasa Teknik permanen",
        "right": "Fokus pada Prosedur Aman, Isolasi LOTO, dan kelengkapan APD spesifik"
      },
      {
        "aspect": "Kebutuhan Pelatihan Personel",
        "left": "Pelatihan Manajemen Risiko K3 & Ahli K3 Umum",
        "right": "Pelatihan Penyusunan JSA & Safety Accountability Pengawas"
      }
    ]
  },
  "blocks": [
    {
      "heading": "Sinergi Manajemen Risiko K3: Dari Kebijakan Strategis ke Eksekusi Lapangan",
      "paragraphs": [
        "HIRADC (atau dikenal sebagai IBPR - Identifikasi Bahaya dan Penilaian Risiko) dan JSA (Job Safety Analysis) adalah dua instrumen yang tidak dapat dipisahkan dalam manajemen keselamatan kerja modern.",
        "Banyak perusahaan mengalami kegagalan audit SMK3 atau kecelakaan fatal karena menganggap memiliki dokumen HIRADC di lemari arsip sudah cukup, padahal pekerja di lapangan tidak dibekali JSA yang relevan saat mengeksekusi pekerjaan kritis."
      ]
    },
    {
      "heading": "Karakteristik Analisis: Matriks Makro Fasilitas vs Langkah Kerja Lapangan",
      "paragraphs": [
        "Kedua instrumen ini memiliki anatomi yang sangat berbeda:"
      ],
      "bullets": [
        "HIRADC: Memetakan aktivitas kerja rutin (produksi harian, pergudangan) dan non-rutin (pemeliharaan tahunan, perbaikan darurat). Menilai tingkat risiko (Likelihood x Severity), menentukan pengendalian berlandaskan hierarki K3, dan menetapkan sasaran program K3 tahunan.",
        "JSA: Membedah satu pekerjaan ke dalam 3 kolom utama: (1) Langkah pekerjaan berurutan, (2) Potensi bahaya pada tiap langkah, dan (3) Tindakan pencegahan kendali aman. JSA dibacakan saat Toolbox Meeting sebelum pekerjaan dimulai agar seluruh tim memahami peran keselamatannya."
      ]
    },
    {
      "heading": "Kapan Harus Menyusun HIRADC dan Kapan Wajib Menggunakan JSA?",
      "paragraphs": [
        "Susun atau revisi dokumen HIRADC fasilitas Anda saat menyusun manual K3, mempersiapkan audit sertifikasi [pelatihan auditor SMK3](/pelatihan/auditor-smk3), atau ketika terjadi penambahan lini mesin dan proses kimia baru.",
        "Wajibkan penyusunan JSA di lapangan setiap kali tim atau kontraktor akan melakukan pekerjaan non-rutin berisiko tinggi, seperti confined space, lifting beban berat, pengelasan tangki, atau pekerjaan listrik tegangan tinggi."
      ]
    },
    {
      "heading": "Pembinaan Penyusunan HIRADC & JSA di PT Kreasi Ultimate Berjaya",
      "paragraphs": [
        "PT Kreasi Ultimate Berjaya menyediakan program bimbingan teknis [pelatihan manajemen risiko K3](/pelatihan/manajemen-risiko-k3) dan [pelatihan penyusunan JSA pekerjaan berisiko tinggi](/pelatihan/pelatihan-penyusunan-job-safety-analysis-jsa-pekerjaan-konstruksi-risiko-tinggi) untuk meningkatkan kapabilitas personil pengawas dan tim HSE korporasi."
      ]
    }
  ],
  "faqs": [
    {
      "question": "Apakah JSA bisa menggantikan posisi dokumen HIRADC dalam audit SMK3?",
      "answer": "Tidak bisa. Auditor SMK3 PP 50/2012 maupun ISO 45001 mewajibkan perusahaan memiliki dokumen register risiko menyeluruh (HIRADC/IBPR) sebagai bukti komitmen kepatuhan kriteria sistem manajemen risiko."
    },
    {
      "question": "Siapa yang wajib menandatangani lembar JSA sebelum pekerjaan dimulai?",
      "answer": "JSA wajib ditandatangani oleh Pengawas Pekerjaan (Supervisor/Mandor), Petugas HSE Lapangan, dan disetujui oleh Penanggung Jawab Area (Area Owner / Facility Manager)."
    },
    {
      "question": "Berapa langkah kerja maksimal yang ideal dalam menyusun satu dokumen JSA?",
      "answer": "Secara praktis, satu dokumen JSA sebaiknya terdiri dari 5 hingga 10 langkah kerja utama agar tetap fokus dan mudah dipahami oleh pekerja saat briefing lapangan."
    }
  ],
  "related": [
    "pelatihan/manajemen-risiko-k3",
    "pelatihan/pelatihan-penyusunan-job-safety-analysis-jsa-pekerjaan-konstruksi-risiko-tinggi",
    "pelatihan/ahli-k3-umum",
    "pelatihan/auditor-smk3",
    "regulasi-k3/uu-1-1970-keselamatan-kerja"
  ],
  "sources": [
    {
      "label": "Peraturan Pemerintah No. 50 Tahun 2012 tentang Penerapan SMK3",
      "url": "https://jdih.kemnaker.go.id/katalog/pp-50-2012",
      "publisher": "Pemerintah RI / Kemnaker RI"
    },
    {
      "label": "ISO 45001:2018 Occupational health and safety management systems",
      "url": "https://www.iso.org",
      "publisher": "International Organization for Standardization"
    }
  ],
  "status": "published",
  "publishedAt": "2026-08-01",
  "updatedAt": "2026-09-01",
  "indexable": true,
  "intent": "perbandingan hiradc-vs-jsa-analisis-keselamatan-kerja perbedaan kelebihan kekurangan pilih mana",
  "primaryKeyword": "perbedaan hiradc vs jsa analisis keselamatan kerja",
  "searchIntent": "perbedaan, perbandingan matriks, kelebihan, dan rekomendasi Perbandingan HIRADC Tingkat Fasilitas vs JSA Tingkat Tugas Spesifik",
  "intentType": "commercial",
  "parentTopic": "Perbandingan K3 Metodologi Analisis Risiko & Investigasi Insiden",
  "cannibalizationGroup": "perbandingan-hiradc",
  "contentKind": "comparison",
  "primaryCtaText": "Konsultasi Pemilihan Perbandingan HIRADC Tingkat Fasilitas vs JSA Tingkat Tugas Spesifik",
  "primaryCtaIntent": "syarat",
  "secondaryCtaText": "Tanya Jadwal & Biaya Program",
  "secondaryCtaIntent": "jadwal",
  "image": {
    "src": "/images/content/diskusi-instruktur-dan-peserta-di-ruang-seminar-4.webp",
    "alt": "Sesi diskusi interaktif antara instruktur dan peserta di ruang seminar (Dokumentasi 4) - Perbandingan HIRADC Tingkat Fasilitas vs JSA Tingkat Tugas Spesifik"
  }
};
export default record;

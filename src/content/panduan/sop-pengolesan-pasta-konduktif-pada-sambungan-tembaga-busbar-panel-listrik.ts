import { type ContentRecord } from '../../lib/content-types';

export const record: ContentRecord = {
  "section": "panduan",
  "slug": "sop-pengolesan-pasta-konduktif-pada-sambungan-tembaga-busbar-panel-listrik",
  "title": "SOP Pengolesan Pasta Konduktif Pada Sambungan Tembaga Busbar Panel Listrik",
  "metaTitle": "SOP Pengolesan Pasta Konduktif Pada Sambungan Tembaga Busbar Panel Listrik | Prosedur Kerja Aman",
  "description": "Prosedur standar operasional (SOP) keselamatan SOP Pengolesan Pasta Konduktif Pada Sambungan Tembaga Busbar Panel Listrik di industri: tahapan pra-pekerjaan, analisis bahaya JSA, APD wajib, mitigasi risiko Permenaker No. 12 Tahun 2015 & SNI 0225:2020 PUIL 2020, dan tindakan darurat.",
  "answer": "SOP Pengolesan Pasta Konduktif Pada Sambungan Tembaga Busbar Panel Listrik adalah instruksi kerja keselamatan baku dalam klaster Kelistrikan & Isolasi Energi (Electrical LOTO) yang mengatur langkah demi langkah pelaksanaan tugas secara aman berdasarkan Permenaker No. 12 Tahun 2015 & SNI 0225:2020 PUIL 2020 guna mencegah kecelakaan fatal, cedera kerja, dan kerusakan aset fasilitas industri.",
  "highlights": [
    "Klaster Keselamatan: Kelistrikan & Isolasi Energi (Electrical LOTO)",
    "Kategori: Electrical SOP",
    "Standar Rujukan: Permenaker No. 12 Tahun 2015 & SNI 0225:2020 PUIL 2020",
    "Fokus Pengendalian: LOTO Zero Energy Verification & Proteksi Listrik Tegangan Tinggi"
  ],
  "blocks": [
    {
      "heading": "Tujuan & Ruang Lingkup SOP Pengolesan Pasta Konduktif Pada Sambungan Tembaga Busbar Panel Listrik",
      "paragraphs": [
        "Penerapan SOP Pengolesan Pasta Konduktif Pada Sambungan Tembaga Busbar Panel Listrik bertujuan memberikan panduan operasional terstandar bagi seluruh pekerja, teknisi, dan pengawas yang terlibat dalam aktivitas Kelistrikan & Isolasi Energi (Electrical LOTO). Prosedur ini menjamin bahwa seluruh faktor risiko bahaya sengatan listrik tegangan tinggi, busur api Arc Flash, dan hubungan pendek arus listrik telah dimitigasi secara terstruktur sebelum pekerjaan dimulai.",
        "Sesuai dengan ketentuan Permenaker No. 12 Tahun 2015 & SNI 0225:2020 PUIL 2020 dan UU No. 1 Tahun 1970, pengurus fasilitas wajib memastikan setiap personel telah mendapatkan pembekalan K3 yang memadai dan mematuhi seluruh tahapan kerja aman yang tertuang dalam instruksi kerja ini."
      ]
    },
    {
      "heading": "Tahapan Kerja Aman Standar (Langkah Demi Langkah)",
      "paragraphs": [
        "Pelaksanaan pekerjaan wajib mengikuti urutan tahapan teknis baku yang telah diverifikasi oleh tim K3:"
      ],
      "bullets": [
        "1. Verifikasi Izin Kerja Listrik (PTW) & Briefing Safety Toolbox Meeting.",
        "2. Identifikasi Sakelar Utama & Pelaksanaan 6 Langkah Penguncian LOTO (Lockout Tagout).",
        "3. Pengujian Tegangan Sisa Menggunakan Multimeter / Test Pen Terkalibrasi (Zero Energy Test).",
        "4. Pelaksanaan Pekerjaan Maintenance Listrik Menggunakan Alat Berisolasi VDE 1000V.",
        "5. Normalisasi Pintu Panel, Pelepasan Gembok LOTO, dan Penutupan Izin Kerja."
      ]
    },
    {
      "heading": "Alat Pelindung Diri (APD) Wajib & Peralatan Keselamatan",
      "paragraphs": [
        "Personel yang bertugas wajib dilengkapi dengan APD berstandar SNI/EN/ANSI yang spesifik untuk tugas ini:"
      ],
      "bullets": [
        "Helm Keselamatan Lisensi Elektrikal Class E (20.000V)",
        "Kacamata Pelindung & Face Shield Tahan Arc Flash",
        "Sarung Tangan Isolasi Karet Tegangan Tinggi (Class 0 / 1 / 2)",
        "Sepatu Safety Dioperasikan Dielektrik (Dielectric Shoes)",
        "Pakaian Kerja Katun Murni Tahan Api (Arc Flash Flame Resistant Coverall)"
      ]
    },
    {
      "heading": "Tindakan Tanggap Darurat & Protokol Penghentian Pekerjaan",
      "paragraphs": [
        "Apabila terjadi kondisi darurat, anomali parameter, atau indikasi kebocoran/kerusakan alat selama pekerjaan berlangsung, segera eksekusi Wewenang Penghentian Pekerjaan (Stop Work Authority), evakuasi personel ke lokasi aman, bunyikan alarm darurat, dan hubungi Tim Tanggap Darurat / HSE Officer Fasilitas."
      ]
    }
  ],
  "faqs": [
    {
      "question": "Siapa yang berwenang memegang kunci gembok LOTO?",
      "answer": "Setiap pekerja teknis wajib memasang gembok masing-masing pada peranti hasp LOTO (Personal Lock out). Gembok hanya boleh dilepas oleh pemilik kunci setelah pekerjaan selesai."
    },
    {
      "question": "Bagaimana cara melakukan verifikasi Zero Energy State?",
      "answer": "Dengan mengukur tegangan antar fasa (R-S-T) dan fasa ke netral/ground menggunakan multimeter terkalibrasi untuk memastikan tidak ada tegangan tersisa."
    },
    {
      "question": "Apa tindakan pertama jika terjadi insiden korsleting saat pemeliharaan?",
      "answer": "Segera tekan Emergency Stop Button atau matikan breaker utama terdekat, lalu berikan pertolongan pertama pada korban menggunakan tongkat isolasi konduktif."
    }
  ],
  "related": [
    "pelatihan/ahli-k3-umum",
    "panduan/syarat-ahli-k3-umum",
    "perbandingan/bnsp-vs-kemnaker",
    "jadwal"
  ],
  "sources": [
    {
      "label": "Permenaker No. 12 Tahun 2015 tentang K3 Listrik di Tempat Kerja",
      "url": "https://jdih.kemnaker.go.id/katalog/permenaker-12-2015",
      "publisher": "Kemnaker RI"
    },
    {
      "label": "UU No. 1 Tahun 1970 tentang Keselamatan Kerja",
      "url": "https://jdih.kemnaker.go.id/katalog/uu-1-1970",
      "publisher": "Pemerintah RI / Kemnaker RI"
    },
    {
      "label": "PP No. 50 Tahun 2012 tentang Penerapan Sistem Manajemen K3 (SMK3)",
      "url": "https://jdih.kemnaker.go.id/katalog/pp-50-2012",
      "publisher": "Pemerintah RI / Kemnaker RI"
    }
  ],
  "status": "published",
  "publishedAt": "2026-08-01",
  "updatedAt": "2026-09-01",
  "indexable": true,
  "intent": "panduan sop-pengolesan-pasta-konduktif-pada-sambungan-tembaga-busbar-panel-listrik sop prosedur langkah izin keselamatan",
  "primaryKeyword": "sop pengolesan pasta konduktif pada sambungan tembaga busbar panel listrik kerja aman",
  "searchIntent": "sop langkah kerja aman, izin kerja, apd, dan mitigasi bahaya SOP Pengolesan Pasta Konduktif Pada Sambungan Tembaga Busbar Panel Listrik",
  "intentType": "informational",
  "parentTopic": "Panduan SOP Kelistrikan & Isolasi Energi (Electrical LOTO)",
  "cannibalizationGroup": "panduan-electrical-sop",
  "contentKind": "guide",
  "primaryCtaText": "Konsultasi Penerapan SOP Pengolesan Pasta Konduktif Pada Sambungan Tembaga Busbar Panel Listrik",
  "primaryCtaIntent": "syarat",
  "secondaryCtaText": "Tanya Pelatihan & Sertifikasi K3",
  "secondaryCtaIntent": "jadwal",
  "image": {
    "src": "/images/content/asesmen-individu-peserta-di-ruang-kelas-40.webp",
    "alt": "Pelaksanaan asesmen kompetensi dan uji mandiri peserta di ruang kelas (Dokumentasi 40) - SOP Pengolesan Pasta Konduktif Pada Sambungan Tembaga Busbar Panel Listrik"
  }
};
export default record;

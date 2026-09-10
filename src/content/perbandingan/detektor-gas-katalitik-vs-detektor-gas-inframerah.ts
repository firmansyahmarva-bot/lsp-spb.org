import { type ContentRecord } from '../../lib/content-types';

export const record: ContentRecord = {
  "section": "perbandingan",
  "slug": "detektor-gas-katalitik-vs-detektor-gas-inframerah",
  "title": "Perbandingan Detektor Gas LEL Tipe Katalitik vs Tipe Inframerah (NDIR)",
  "metaTitle": "Perbandingan Detektor Gas LEL Tipe Katalitik vs Tipe Inframerah (NDIR) | Matriks & Rekomendasi",
  "description": "Panduan perbandingan objektif Perbandingan Detektor Gas LEL Tipe Katalitik vs Tipe Inframerah (NDIR): analisis kelebihan dan kekurangan Catalytic Bead (Sensitif Multi-Gas) vs Infrared NDIR (Tahan Racun Silikon/H2S), matriks perbedaan, dan rekomendasi pemilihan terbaik.",
  "answer": "Perbedaan mendasar antara Detektor Gas Katalitik (Pellistor Bead) dan Detektor Gas Inframerah (NDIR) terletak pada prinsip sensor fisika dan ketergantungannya pada kadar oksigen: Sensor Katalitik mendeteksi gas mudah terbakar (% LEL) melalui proses pembakaran katalitik nyata pada kawat pemanas mikro, sehingga mutlak membutuhkan kadar oksigen minimal 10-15% dan rentan rusak jika terpapar racun sensor (seperti silikon, timbal, atau sulfur). Sebaliknya, Sensor Inframerah (Non-Dispersive Infrared / NDIR) mendeteksi gas hidrokarbon melalui penyerapan spektrum gelombang cahaya optik, sehingga dapat beroperasi sempurna pada kondisi nol oksigen (lingkungan gas inert nitrogen) dan kebal 100% terhadap keracunan zat kimia.",
  "highlights": [
    "Kebutuhan Oksigen Lingkungan: Wajib Minimal 10-15% O2 (Katalitik) vs Dapat Bekerja pada 0% O2 / Lingkungan Inert (Inframerah)",
    "Ketahanan Racun Sensor: Rentan Keracunan Silikon & H2S (Katalitik) vs Kebal 100% Terhadap Racun Kimia (Inframerah)",
    "Deteksi Gas Non-Hidrokarbon: Mampu Mendeteksi Gas Hidrogen H2 (Katalitik) vs Buta Terhadap Gas Hidrogen H2 (Inframerah)",
    "Aplikasi Sektor Kritis: Ruang Terbatas Terbuka (Katalitik) vs Tangki Purging Gas Inert & Kilang Lepas Pantai (Inframerah)"
  ],
  "comparisonTable": {
    "leftTitle": "Detektor Gas Katalitik (Pellistor Bead)",
    "rightTitle": "Detektor Gas Inframerah (NDIR Optik)",
    "rows": [
      {
        "aspect": "Prinsip Kerja Pendeteksian",
        "left": "Oksidasi/pembakaran katalitik mikro pada permukaan kumparan platina",
        "right": "Penyerapan spektrum radiasi cahaya inframerah oleh molekul hidrokarbon"
      },
      {
        "aspect": "Kebutuhan Keberadaan Oksigen",
        "left": "Mutlak membutuhkan oksigen minimal 10-15% volume di udara",
        "right": "Dapat beroperasi sempurna pada 0% O2 (lingkungan ter-purge nitrogen)"
      },
      {
        "aspect": "Kerentanan terhadap Racun Kimia",
        "left": "Tinggi: Rusak permanen oleh silikon, timbal, dan sulfur (Poisoning)",
        "right": "Kebal total: Partikel kimia tidak merusak berkas sinar optik"
      },
      {
        "aspect": "Kemampuan Mendeteksi Hidrogen (H2)",
        "left": "Sangat baik: Mampu mendeteksi gas hidrogen dengan presisi tinggi",
        "right": "Tidak bisa: Molekul diatomik simetris H2 tidak menyerap sinar inframerah"
      },
      {
        "aspect": "Kebutuhan Kalibrasi Rutin",
        "left": "Sering: Perlu bump test dan kalibrasi berkala bulanan karena degradasi",
        "right": "Jarang: Stabilitas sensor optik sangat tinggi, kalibrasi tahunan"
      },
      {
        "aspect": "Konsumsi Daya Baterai",
        "left": "Tinggi: Membutuhkan arus pemanas kawat kontinu (baterai cepat habis)",
        "right": "Rendah: Menggunakan LED inframerah hemat energi (baterai tahan berminggu-minggu)"
      },
      {
        "aspect": "Rekomendasi Pelatihan Personil",
        "left": "Pelatihan Deteksi Gas Confined Space Gas Tester & Petugas Madya",
        "right": "Pelatihan Petugas K3 Utama Ruang Terbatas & Ahli K3 Kimia"
      }
    ]
  },
  "blocks": [
    {
      "heading": "Standar Deteksi Gas di Ruang Terbatas sesuai SE Menakertrans No. 01/2012",
      "paragraphs": [
        "Pengujian atmosfer di ruang terbatas (confined space seperti tangki timbun, bunker kapal, reaktor kimia, dan gorong-gorong) adalah prosedur wajib yang menentukan apakah pekerja diizinkan masuk atau dilarang.",
        "Kesalahan dalam memilih jenis teknologi sensor detektor gas dapat berakibat fatal. Pembacaan palsu nol persen LEL pada sensor yang mati lemas akibat ketiadaan oksigen dapat memicu ledakan katastrofik saat udara bersih masuk."
      ]
    },
    {
      "heading": "Analisis Teknis: Pembakaran Mikro Katalitik vs Spektroskopi Optik",
      "paragraphs": [
        "Kedua teknologi sensor gas memiliki batas kemampuan fisik yang kontras:"
      ],
      "bullets": [
        "Sensor Katalitik: Bekerja seperti lilin kecil tak terlihat. Gas metana yang masuk ke sensor terbakar di atas manik keramik katalis, menaikkan hambatan listrik kawat platina. Jika tangki telah diisi gas nitrogen murni (kadar O2 = 0%), sensor katalitik tidak bisa membakar gas, sehingga layarnya menampilkan 0% LEL padahal tangki penuh gas mudah meledak.",
        "Sensor NDIR Inframerah: Mengarahkan berkas cahaya inframerah ke ruang sampel. Molekul ikatan C-H hidrokarbon menyerap panjang gelombang 3.4 mikron. Semakin banyak gas, semakin redup cahaya yang sampai ke sensor penerima. Sangat akurat di lingkungan tanpa oksigen, namun memiliki kelemahan: tidak bisa mendeteksi kebocoran gas hidrogen (H2) pada ruang baterai."
      ]
    },
    {
      "heading": "Panduan Penugasan Peralatan bagi Gas Tester Ruang Terbatas",
      "paragraphs": [
        "Gunakan detektor gas katalitik 4-gas (O2, LEL, CO, H2S) untuk pengujian ruang terbatas konvensional yang memiliki ventilasi udara alami di bawah pengawasan pemegang lisensi [pelatihan petugas madya ruang terbatas](/pelatihan/pelatihan-petugas-k3-madya-ruang-terbatas-confined-space-kemnaker).",
        "Wajibkan penggunaan detektor gas NDIR inframerah saat melakukan operasi pembersihan tangki minyak, inert purging pipa gas nitrogen, dan fasilitas petrokimia di bawah pimpinan personel bersertifikat [pelatihan petugas utama ruang terbatas](/pelatihan/pelatihan-petugas-k3-utama-ruang-terbatas-confined-space-kemnaker) dan [pelatihan deteksi gas confined space gas tester](/pelatihan/pelatihan-k3-pengukuran-dan-deteksi-gas-berbahaya-ruang-terbatas-gas-tester)."
      ]
    },
    {
      "heading": "Pelatihan Gas Tester Resmi di PT Kreasi Ultimate Berjaya",
      "paragraphs": [
        "PT Kreasi Ultimate Berjaya menyelenggarakan pelatihan uji atmosfer confined space dan sertifikasi resmi Kemnaker RI untuk Petugas K3 Madya dan Utama Ruang Terbatas."
      ]
    }
  ],
  "faqs": [
    {
      "question": "Mengapa sensor katalitik bisa mengalami keracunan (Poisoning)?",
      "answer": "Zat seperti silikon pelumas, timbal, atau tetraetil timbal akan membentuk lapisan kaca silika padat yang menutupi manik platina sensor katalitik, mematikan kemampuan katalisnya secara permanen."
    },
    {
      "question": "Berapa batas kadar oksigen aman untuk pekerja masuk ke ruang terbatas?",
      "answer": "Sesuai regulasi Kemnaker RI SE No. 01/2012, atmosfer ruang terbatas dinyatakan aman jika konsentrasi oksigen berada di rentang 19.5% hingga 23.5% volume."
    },
    {
      "question": "Apa perbedaan antara Bump Test dan Kalibrasi Penuh gas detector?",
      "answer": "Bump Test adalah pengujian respons cepat sensor dengan memaparkan gas uji selama beberapa detik untuk memastikan alarm menyala, sedangkan Kalibrasi Penuh adalah kalibrasi akurasi numerik pembacaan sensor."
    }
  ],
  "related": [
    "pelatihan/pelatihan-k3-pengukuran-dan-deteksi-gas-berbahaya-ruang-terbatas-gas-tester",
    "pelatihan/pelatihan-petugas-k3-utama-ruang-terbatas-confined-space-kemnaker",
    "pelatihan/pelatihan-petugas-k3-madya-ruang-terbatas-confined-space-kemnaker",
    "regulasi-k3/uu-1-1970-keselamatan-kerja",
    "panduan/syarat-ahli-k3-umum"
  ],
  "sources": [
    {
      "label": "Surat Edaran Menakertrans No. SE.01/MEN/PPK/I/2012 tentang Petunjuk Teknis Pembinaan K3 di Ruang Terbatas",
      "url": "https://jdih.kemnaker.go.id",
      "publisher": "Kemnaker RI"
    },
    {
      "label": "OSHA 29 CFR 1910.146: Permit-required confined spaces",
      "url": "https://www.osha.gov",
      "publisher": "OSHA"
    }
  ],
  "status": "published",
  "publishedAt": "2026-08-01",
  "updatedAt": "2026-09-01",
  "indexable": true,
  "intent": "perbandingan detektor-gas-katalitik-vs-detektor-gas-inframerah perbedaan kelebihan kekurangan pilih mana",
  "primaryKeyword": "perbedaan detektor gas katalitik vs detektor gas inframerah",
  "searchIntent": "perbedaan, perbandingan matriks, kelebihan, dan rekomendasi Perbandingan Detektor Gas LEL Tipe Katalitik vs Tipe Inframerah (NDIR)",
  "intentType": "commercial",
  "parentTopic": "Perbandingan K3 Peralatan, APD & Proteksi Kebakaran",
  "cannibalizationGroup": "perbandingan-detektor-gas-katalitik",
  "contentKind": "comparison",
  "primaryCtaText": "Konsultasi Pemilihan Perbandingan Detektor Gas LEL Tipe Katalitik vs Tipe Inframerah (NDIR)",
  "primaryCtaIntent": "syarat",
  "secondaryCtaText": "Tanya Jadwal & Biaya Program",
  "secondaryCtaIntent": "jadwal",
  "image": {
    "src": "/images/content/diskusi-instruktur-dan-peserta-di-ruang-seminar-5.webp",
    "alt": "Sesi diskusi interaktif antara instruktur dan peserta di ruang seminar (Dokumentasi 5) - Perbandingan Detektor Gas LEL Tipe Katalitik vs Tipe Inframerah (NDIR)"
  }
};
export default record;

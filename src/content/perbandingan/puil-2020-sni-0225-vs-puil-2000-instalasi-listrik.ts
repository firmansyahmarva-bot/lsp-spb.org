import { type ContentRecord } from '../../lib/content-types';

export const record: ContentRecord = {
  "section": "perbandingan",
  "slug": "puil-2020-sni-0225-vs-puil-2000-instalasi-listrik",
  "title": "Perbandingan Ketentuan PUIL 2020 (SNI 0225:2020) vs PUIL 2000",
  "metaTitle": "Perbandingan Ketentuan PUIL 2020 (SNI 0225:2020) vs PUIL 2000 | Matriks & Rekomendasi",
  "description": "Panduan perbandingan objektif Perbandingan Ketentuan PUIL 2020 (SNI 0225:2020) vs PUIL 2000: analisis kelebihan dan kekurangan PUIL 2020 (Harmonisasi IEC Modern) vs PUIL 2000 (Standar Konvensional), matriks perbedaan, dan rekomendasi pemilihan terbaik.",
  "answer": "Perbedaan utama antara PUIL 2020 (SNI 0225:2020) dan PUIL 2000 (SNI 04-0225-2000) terletak pada harmonisasi standar internasional IEC, kewajiban proteksi arus sisa (RCD/ELCB), dan adopsi teknologi energi terbarukan mutakhir: PUIL 2000 adalah standar instalasi listrik lama yang masih mengacu pada edisi terjemahan IEC awal tahun 1980-an dengan penomoran kaku. Sementara PUIL 2020 adalah standar nasional aktif yang mengadopsi penuh seri IEC 60364 mutakhir, mewajibkan penggunaan perangkat proteksi arus sisa RCD 30 mA untuk proteksi tambahan kontak langsung, merinci proteksi bahaya percikan busur api (Arc Fault Detection Devices / AFDD), serta mengatur secara komprehensif instalasi Pembangkit Listrik Tenaga Surya (PLTS Atap PV) dan stasiun pengisian kendaraan listrik (EV Charging Station).",
  "highlights": [
    "Harmonisasi Global: Mengadopsi Seri Standar Internasional IEC 60364 Mutakhir (PUIL 2020) vs Terjemahan IEC Usang (PUIL 2000)",
    "Proteksi Kontak Sentuh: Mewajibkan Penggunaan RCD / ELCB Sensitivitas 30 mA untuk Sirkuit Stop Kontak Daya",
    "Adopsi Teknologi Hijau: Mengatur Standar Instalasi Panel Surya PLTS Atap & Stasiun Pengisian Kendaraan Listrik (EV)",
    "Regulasi Mandatori K3: Dasar Pengawasan Permenaker No. 12 Tahun 2015 tentang K3 Listrik di Tempat Kerja"
  ],
  "comparisonTable": {
    "leftTitle": "PUIL 2020 (SNI 0225:2020 Mutakhir)",
    "rightTitle": "PUIL 2000 (SNI 04-0225-2000 Lama)",
    "rows": [
      {
        "aspect": "Status Standar Rujukan",
        "left": "Standar Nasional Indonesia aktif berlaku mengikat seluruh instalatur",
        "right": "Telah direvisi dan digantikan secara resmi oleh edisi 2011 dan 2020"
      },
      {
        "aspect": "Kewajiban Proteksi Arus Sisa (RCD)",
        "left": "Mandatori RCD 30 mA untuk seluruh stop kontak umum (proteksi sentuh)",
        "right": "RCD/ELCB hanya bersifat anjuran tambahan tanpa penegasan wajib"
      },
      {
        "aspect": "Proteksi Bahaya Busur Api Listrik",
        "left": "Mengatur pemasangan Arc Fault Detection Devices (AFDD) pencegah api",
        "right": "Belum mengenal teknologi deteksi busur api mikro AFDD"
      },
      {
        "aspect": "Instalasi Energi Terbarukan (PLTS)",
        "left": "Diatur lengkap dalam Bagian 7-712: Inverter PV, proteksi DC, grounding",
        "right": "Sama sekali belum mengatur sistem panel surya fotovoltaik"
      },
      {
        "aspect": "Infrastruktur Kendaraan Listrik",
        "left": "Diatur rinci dalam Bagian 7-722: Pasokan daya Electric Vehicle (EV)",
        "right": "Belum ada pengaturan stasiun pengisian daya mobil/motor listrik"
      },
      {
        "aspect": "Penandaan Warna Kabel Fasa",
        "left": "Fasa L1 (Cokelat), L2 (Hitam), L3 (Abu-abu), Netral (Biru), Ground (Kuning-Hijau)",
        "right": "Fasa R (Merah), S (Kuning), T (Hitam), Netral (Biru), Ground (Kuning-Hijau)"
      },
      {
        "aspect": "Program Pelatihan Relevan",
        "left": "Pelatihan Teknisi K3 Listrik & Ahli K3 Spesialis Listrik Kemnaker",
        "right": "Materi instalatur konvensional lama"
      }
    ]
  },
  "blocks": [
    {
      "heading": "Modernisasi Standar Ketenagalistrikan Nasional: Era PUIL 2020",
      "paragraphs": [
        "Arus listrik adalah salah satu sumber energi paling vital sekaligus penyebab kebakaran gedung dan kematian pekerja terbanyak di Indonesia akibat bahaya korsleting dan sengatan listrik langsung.",
        "Badan Standardisasi Nasional (BSN) bersama Kementerian ESDM dan Kementerian Ketenagakerjaan menetapkan PUIL 2020 (SNI 0225:2020) sebagai kitab suci instalasi listrik nasional guna memastikan keselamatan manusia, ternak, dan harta benda dari bahaya kelistrikan modern."
      ]
    },
    {
      "heading": "Perubahan Kritis PUIL 2020: Kode Warna Kabel dan Kewajiban RCD 30 mA",
      "paragraphs": [
        "Perubahan standar ini berdampak langsung pada instalasi panel di pabrik dan gedung:"
      ],
      "bullets": [
        "Wajib RCD / ELCB 30 mA: Jika seseorang menyentuh kabel listrik terbuka, sekering MCB konvensional tidak akan trip karena arus listrik yang melewati tubuh manusia (sekitar 100-200 mA) jauh di bawah rating MCB 10 Ampere. RCD 30 mA memutus aliran listrik dalam waktu kurang dari 30 milidetik, menyelamatkan nyawa manusia dari fibrilasi jantung mematikan.",
        "Harmonisasi Warna Kabel IEC: PUIL 2020 menata ulang warna kabel fasa instalasi baru agar selaras dengan kode warna global: Fasa 1 Cokelat, Fasa 2 Hitam, Fasa 3 Abu-abu, Netral Biru terang, dan Penghantar Pembumian (PE) Loreng Kuning-Hijau.",
        "Instalasi PLTS Atap: Mengatur instalasi sakelar isolator DC di dekat panel surya agar petugas pemadam kebakaran tidak tersengat listrik saat memadamkan atap di siang hari."
      ]
    },
    {
      "heading": "Panduan Kepatuhan bagi Teknisi Listrik & Penanggung Jawab Gedung",
      "paragraphs": [
        "Pastikan seluruh instalasi listrik baru, peremajaan panel MDP, dan instalasi solar cell pabrik Anda telah diverifikasi mengacu pada ketentuan PUIL 2020.",
        "Bekali teknisi listrik Anda dengan lisensi resmi negara melalui program [pelatihan teknisi K3 listrik](/pelatihan/pelatihan-teknisi-k3-listrik-sertifikasi-kemnaker-ri) dan tunjuk personil bersertifikat [pelatihan ahli K3 spesialis listrik](/pelatihan/pelatihan-ahli-k3-spesialis-listrik-kemnaker-ri) resmi Kemnaker RI untuk mengesahkan gambar diagram instalasi."
      ]
    },
    {
      "heading": "Pelatihan K3 Kelistrikan Resmi di PT Kreasi Ultimate Berjaya",
      "paragraphs": [
        "PT Kreasi Ultimate Berjaya menyelenggarakan pelatihan resmi Teknisi K3 Listrik dan Ahli K3 Spesialis Listrik Kemnaker RI berbasis standar PUIL 2020 dan Permenaker No. 12 Tahun 2015."
      ]
    }
  ],
  "faqs": [
    {
      "question": "Apakah kabel fasa lama merah-kuning-hitam wajib diganti semua ke cokelat-hitam-abu?",
      "answer": "Pada instalasi eksisting tidak diwajibkan diganti seluruhnya, namun pada titik terminasi panel wajib diberi selongsong tanda pengenal warna baru PUIL 2020 atau tanda penomoran fasa yang jelas."
    },
    {
      "question": "Berapa nilai resistansi pembumian (Grounding) maksimal menurut PUIL 2020?",
      "answer": "Nilai resistansi elektroda pembumian sistem penangkal petir dan sistem kelistrikan umum disyaratkan sekecil mungkin dan tidak boleh melebihi 5 Ohm."
    },
    {
      "question": "Kapan sebuah perusahaan wajib mempekerjakan Ahli K3 Spesialis Listrik?",
      "answer": "Sesuai Permenaker No. 12 Tahun 2015 Pasal 7, perusahaan yang membangkitkan, mentransmisikan, mendistribusikan, atau menggunakan daya listrik di atas 200 kVA wajib mempekerjakan sekurang-kurangnya 1 orang Ahli K3 Spesialis Listrik."
    }
  ],
  "related": [
    "pelatihan/pelatihan-teknisi-k3-listrik-sertifikasi-kemnaker-ri",
    "pelatihan/pelatihan-ahli-k3-spesialis-listrik-kemnaker-ri",
    "pelatihan/ahli-k3-umum",
    "panduan/syarat-ahli-k3-umum",
    "regulasi-k3/uu-1-1970-keselamatan-kerja"
  ],
  "sources": [
    {
      "label": "SNI 0225:2020 Persyaratan Umum Instalasi Listrik 2020 (PUIL 2020)",
      "url": "https://bsn.go.id",
      "publisher": "Badan Standardisasi Nasional"
    },
    {
      "label": "Permenaker No. 12 Tahun 2015 tentang Keselamatan dan Kesehatan Kerja Listrik di Tempat Kerja",
      "url": "https://jdih.kemnaker.go.id/katalog/permenaker-12-2015",
      "publisher": "Kemnaker RI"
    }
  ],
  "status": "published",
  "publishedAt": "2026-08-01",
  "updatedAt": "2026-09-01",
  "indexable": true,
  "intent": "perbandingan puil-2020-sni-0225-vs-puil-2000-instalasi-listrik perbedaan kelebihan kekurangan pilih mana",
  "primaryKeyword": "perbedaan puil 2020 sni 0225 vs puil 2000 instalasi listrik",
  "searchIntent": "perbedaan, perbandingan matriks, kelebihan, dan rekomendasi Perbandingan Ketentuan PUIL 2020 (SNI 0225:2020) vs PUIL 2000",
  "intentType": "commercial",
  "parentTopic": "Perbandingan K3 Regulasi, Standar Teknis & Batas Hukum Ketenagakerjaan",
  "cannibalizationGroup": "perbandingan-puil-2020-sni-0225",
  "contentKind": "comparison",
  "primaryCtaText": "Konsultasi Pemilihan 2020) vs PUIL 2000",
  "primaryCtaIntent": "syarat",
  "secondaryCtaText": "Tanya Jadwal & Biaya Program",
  "secondaryCtaIntent": "jadwal",
  "image": {
    "src": "/images/content/diskusi-kelompok-dalam-sesi-kelas-1.webp",
    "alt": "Diskusi kelompok kerja dan analisis studi kasus K3 di ruang pelatihan (Dokumentasi 1) - Perbandingan Ketentuan PUIL 2020 (SNI 0225:2020) vs PUIL 2000"
  }
};
export default record;

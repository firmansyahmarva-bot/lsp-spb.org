export interface SourceItem {
  label: string;
  url: string;
  publisher: string;
}

export const officialSources: Record<string, SourceItem> = {
  uu1: {
    label: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja',
    url: 'https://jdih.kemnaker.go.id/katalog/uu-1-1970',
    publisher: 'Pemerintah RI / Kemnaker RI',
  },
  uu13: {
    label: 'UU No. 13 Tahun 2003 tentang Ketenagakerjaan',
    url: 'https://jdih.kemnaker.go.id/katalog/uu-13-2003',
    publisher: 'Pemerintah RI / Kemnaker RI',
  },
  uu6_2023: {
    label: 'UU No. 6 Tahun 2023 tentang Penetapan Perppu Cipta Kerja Menjadi Undang-Undang',
    url: 'https://jdih.kemnaker.go.id/katalog/uu-6-2023',
    publisher: 'Pemerintah RI',
  },
  pp50: {
    label: 'PP No. 50 Tahun 2012 tentang Penerapan Sistem Manajemen K3 (SMK3)',
    url: 'https://jdih.kemnaker.go.id/katalog/pp-50-2012',
    publisher: 'Pemerintah RI / Kemnaker RI',
  },
  pp10: {
    label: 'PP No. 10 Tahun 2018 tentang Badan Nasional Sertifikasi Profesi (BNSP)',
    url: 'https://peraturan.go.id/id/pp-no-10-tahun-2018',
    publisher: 'Pemerintah RI / BNSP',
  },
  permen02_1992: {
    label: 'Permenaker No. PER.02/MEN/1992 tentang Tata Cara Penunjukan Ahli K3',
    url: 'https://jdih.kemnaker.go.id/katalog/permenaker-02-1992',
    publisher: 'Kemnaker RI',
  },
  permen04_1987: {
    label: 'Permenaker No. PER.04/MEN/1987 tentang P2K3 & Tata Cara Penunjukan Ahli K3',
    url: 'https://jdih.kemnaker.go.id/katalog/permenaker-04-1987',
    publisher: 'Kemnaker RI',
  },
  permen12_2015: {
    label: 'Permenaker No. 12 Tahun 2015 tentang K3 Listrik di Tempat Kerja',
    url: 'https://jdih.kemnaker.go.id/katalog/permenaker-12-2015',
    publisher: 'Kemnaker RI',
  },
  permen33_2015: {
    label: 'Permenaker No. 33 Tahun 2015 tentang K3 Penyalur Petir',
    url: 'https://jdih.kemnaker.go.id/katalog/permenaker-33-2015',
    publisher: 'Kemnaker RI',
  },
  permen08_2020: {
    label: 'Permenaker No. 08 Tahun 2020 tentang K3 Pesawat Angkat dan Pesawat Angkut',
    url: 'https://jdih.kemnaker.go.id/katalog/permenaker-08-2020',
    publisher: 'Kemnaker RI',
  },
  permen38_2016: {
    label: 'Permenaker No. 38 Tahun 2016 tentang K3 Pesawat Tenaga dan Produksi',
    url: 'https://jdih.kemnaker.go.id/katalog/permenaker-38-2016',
    publisher: 'Kemnaker RI',
  },
  permen37_2016: {
    label: 'Permenaker No. 37 Tahun 2016 tentang K3 Bejana Tekanan dan Tangki Timbun',
    url: 'https://jdih.kemnaker.go.id/katalog/permenaker-37-2016',
    publisher: 'Kemnaker RI',
  },
  permen01_1988: {
    label: 'Permenaker No. PER.01/MEN/1988 tentang Kualifikasi & Syarat Operator Pesawat Uap',
    url: 'https://jdih.kemnaker.go.id/katalog/permenaker-01-1988',
    publisher: 'Kemnaker RI',
  },
  permen09_2016: {
    label: 'Permenaker No. 09 Tahun 2016 tentang K3 Bekerja Pada Ketinggian',
    url: 'https://jdih.kemnaker.go.id/katalog/permenaker-09-2016',
    publisher: 'Kemnaker RI',
  },
  permen05_2018: {
    label: 'Permenaker No. 05 Tahun 2018 tentang K3 Lingkungan Kerja',
    url: 'https://jdih.kemnaker.go.id/katalog/permenaker-05-2018',
    publisher: 'Kemnaker RI',
  },
  permen15_2008: {
    label: 'Permenaker No. PER.15/MEN/VIII/2008 tentang P3K di Tempat Kerja',
    url: 'https://jdih.kemnaker.go.id/katalog/permenaker-15-2008',
    publisher: 'Kemnaker RI',
  },
  kep186_1999: {
    label: 'Kepmenaker No. KEP.186/MEN/1999 tentang Unit Penanggulangan Kebakaran di Tempat Kerja',
    url: 'https://jdih.kemnaker.go.id/katalog/kepmenaker-186-1999',
    publisher: 'Kemnaker RI',
  },
  kep187_1999: {
    label: 'Kepmenaker No. KEP.187/MEN/1999 tentang Pengendalian Bahan Kimia Berbahaya di Tempat Kerja',
    url: 'https://jdih.kemnaker.go.id/katalog/kepmenaker-187-1999',
    publisher: 'Kemnaker RI',
  },
  se01_2012: {
    label: 'Surat Edaran Menakertrans No. SE.01/MEN/PPK/IV/2012 tentang Petunjuk Masuk Ruang Terbatas (Confined Space)',
    url: 'https://jdih.kemnaker.go.id/katalog/se-01-2012',
    publisher: 'Kemnaker RI',
  },
  permenkes66_2016: {
    label: 'Permenkes No. 66 Tahun 2016 tentang Keselamatan dan Kesehatan Kerja Rumah Sakit (K3RS)',
    url: 'https://peraturan.bpk.go.id/Details/113333/permenkes-no-66-tahun-2016',
    publisher: 'Kementerian Kesehatan RI',
  },
  pupr10_2021: {
    label: 'Permen PUPR No. 10 Tahun 2021 tentang Pedoman Sistem Manajemen Keselamatan Konstruksi (SMKK)',
    url: 'https://jdih.pu.go.id/detail-dokumen/2867/1',
    publisher: 'Kementerian PUPR RI',
  },
  esdm1827_2018: {
    label: 'Kepmen ESDM No. 1827 K/30/MEM/2018 tentang Pedoman Penerapan Kaidah Teknik Pertambangan yang Baik (SMKP)',
    url: 'https://jdih.esdm.go.id/peraturan/kepmen-1827-2018.pdf',
    publisher: 'Kementerian ESDM RI',
  },
  bnsp_general: {
    label: 'Badan Nasional Sertifikasi Profesi (BNSP) - Sistem Sertifikasi Kompetensi Kerja Nasional',
    url: 'https://bnsp.go.id',
    publisher: 'BNSP Republik Indonesia',
  },
  iso45001: {
    label: 'ISO 45001:2018 Occupational Health and Safety Management Systems',
    url: 'https://www.iso.org/standard/63787.html',
    publisher: 'International Organization for Standardization (ISO)',
  },
  sni_puil: {
    label: 'SNI 0225:2020 / PUIL 2020 - Persyaratan Umum Instalasi Listrik',
    url: 'https://bsn.go.id',
    publisher: 'Badan Standardisasi Nasional (BSN)',
  }
};

import type { Section } from './content';

export interface SectionFaq {
  question: string;
  answer: string;
}

export interface SectionLegalInfo {
  badge: string;
  title: string;
  summary: string;
  references: string[];
}

export const sectionLegalInfo: Record<Section, SectionLegalInfo> = {
  pelatihan: {
    badge: 'LANDASAN HUKUM PELATIHAN K3',
    title: 'Kewajiban Pembinaan Norma K3 Perusahaan',
    summary:
      'Penyelenggaraan pelatihan dan penunjukan personil K3 diwajibkan berdasarkan Undang-Undang No. 1 Tahun 1970 tentang Keselamatan Kerja dan Peraturan Menteri Tenaga Kerja No. Per.02/MEN/1992 tentang Tata Cara Penunjukan, Kewajiban dan Wewenang Ahli Keselamatan dan Kesehatan Kerja. Perusahaan dengan tenaga kerja 100 orang atau memiliki potensi bahaya tinggi wajib memiliki Ahli K3 dan membentuk Panitia Pembina Keselamatan dan Kesehatan Kerja (P2K3).',
    references: [
      'UU No. 1 Tahun 1970 (Pasal 9 & 10 tentang Pembinaan & P2K3)',
      'Permenaker No. Per.02/MEN/1992 (Penunjukan Ahli K3 Umum)',
      'Permenaker No. Per.04/MEN/1987 (Panitia Pembina K3 / P2K3)',
      'PP No. 50 Tahun 2012 (Penerapan Sistem Manajemen K3)',
    ],
  },
  'regulasi-k3': {
    badge: 'HIERARKI HUKUM K3 INDONESIA',
    title: 'Tata Urutan Peraturan Perundangan K3',
    summary:
      'Kepatuhan regulasi K3 di Indonesia tersusun secara berjenjang mulai dari Undang-Undang Dasar 1945 Pasal 27 ayat 2, Undang-Undang No. 1 Tahun 1970, Peraturan Pemerintah (PP), Peraturan Menteri Ketenagakerjaan (Permenaker), hingga Keputusan Menteri (Kepmenaker) dan Surat Edaran Dirjen Binwasnaker & K3.',
    references: [
      'UU No. 13 Tahun 2003 tentang Ketenagakerjaan (Pasal 86 & 87)',
      'PP No. 50 Tahun 2012 tentang Penerapan SMK3',
      'Permenaker No. 5 Tahun 2018 tentang Keselamatan dan Kesehatan Lingkungan Kerja',
      'Permenaker No. 8 Tahun 2020 tentang K3 Pesawat Angkat dan Pesawat Angkut',
    ],
  },
  panduan: {
    badge: 'STANDAR IMPLEMENTASI LAPANGAN',
    title: 'Metodologi & Standar Operasional K3',
    summary:
      'Panduan teknis K3 mengintegrasikan pendekatan Hazard Identification, Risk Assessment, and Determining Control (HIRADC), Job Safety Analysis (JSA), Inspeksi Terencana, serta Prosedur Tanggap Darurat berbasis siklus PDCA (Plan-Do-Check-Act) sesuai ISO 45001:2018.',
    references: [
      'ISO 45001:2018 (Occupational Health and Safety Management Systems)',
      'PP No. 50 Tahun 2012 (166 Kriteria Audit SMK3)',
      'Permenaker No. Per.05/MEN/1996 & Standar SMK3 PP 50/2012',
    ],
  },
  'kamus-k3': {
    badge: 'TERMINOLOGI STANDAR NASIONAL & GLOBAL',
    title: 'Glosarium & Definisi Baku K3',
    summary:
      'Kamus K3 menyajikan definisi terminologi keselamatan kerja, kesehatan kerja, higiene industri, ergonomi, dan toksikologi kerja yang diselaraskan dengan Kamus Besar Bahasa Indonesia (KBBI), Standar Nasional Indonesia (SNI), serta pedoman ILO-OSH 2001.',
    references: [
      'SNI ISO 45001:2018 Sistem Manajemen K3',
      'ILO Guidelines on Occupational Safety and Health Management Systems (ILO-OSH 2001)',
    ],
  },
  profesi: {
    badge: 'STANDAR KOMPETENSI KERJA NASIONAL',
    title: 'Jenjang Karir & Kualifikasi Profesi HSE',
    summary:
      'Kualifikasi profesi K3 di Indonesia diatur melalui Standar Kompetensi Kerja Nasional Indonesia (SKKNI) bidang K3 dan sertifikasi penunjukan Kementerian Ketenagakerjaan RI, mencakup Ahli K3 Umum, Auditor SMK3, Pengawas K3 Migas/Konstruksi, hingga Safety Officer.',
    references: [
      'SKKNI K3 Kepmenaker No. 38 Tahun 2019',
      'Permenaker No. Per.02/MEN/1992 (Penunjukan Ahli K3)',
    ],
  },
  kompetensi: {
    badge: 'PENGEMBANGAN KOMPETENSI K3',
    title: 'Standar Keahlian & Keterampilan Praktis HSE',
    summary:
      'Kompetensi K3 mencerminkan kemampuan nyata praktisi dalam mengidentifikasi bahaya, mengevaluasi risiko, dan menerapkan langkah pengendalian. Sebagian kompetensi dapat diselaraskan dengan unit SKKNI atau skema sertifikasi tertentu, namun kesesuaian dan persyaratannya perlu diverifikasi pada masing-masing skema yang berlaku.',
    references: [
      'SKKNI K3 Kepmenaker No. 38 Tahun 2019 (Rujukan Kompetensi Kerja)',
      'Pedoman Pengembangan Skema Sertifikasi Profesi K3',
    ],
  },
  alat: {
    badge: 'PANDUAN ALAT KESELAMATAN',
    title: 'Spesifikasi & Standar Alat K3 Industri',
    summary:
      'Informasi spesifikasi teknis, standar SNI/EN/ANSI, pengujian berkala, serta kalibrasi peralatan pelindung diri (APD), alat ukur lingkungan kerja (sound level meter, lux meter, gas detector), dan sarana pemadam api.',
    references: [
      'Permenaker No. Per.08/MEN/VII/2010 tentang Alat Pelindung Diri (APD)',
      'Standar SNI, ANSI Z87.1, EN 397, dan NFPA',
    ],
  },
  industri: {
    badge: 'PENERAPAN K3 SEKTORAL',
    title: 'Kebutuhan K3 Berdasarkan Sektor Industri',
    summary:
      'Penerapan pengendalian risiko dan kebutuhan pelatihan K3 bervariasi mengikuti karakteristik operasional, jenis aktivitas kerja, potensi bahaya spesifik, serta peraturan sektoral yang berlaku pada masing-masing bidang usaha.',
    references: [
      'UU No. 1 Tahun 1970 tentang Keselamatan Kerja',
      'PP No. 50 Tahun 2012 tentang Penerapan Sistem Manajemen K3',
      'Peraturan sektoral kementerian teknis terkait (Kemnaker, ESDM, PUPR, Kemenkes)',
    ],
  },
  perbandingan: {
    badge: 'ANALISIS KOMPARATIF K3',
    title: 'Matriks Perbandingan Skema & Sertifikasi',
    summary:
      'Perbandingan komprehensif antara sertifikasi Kemnaker RI vs BNSP, SMK3 PP 50/2012 vs ISO 45001, serta pemilihan jalur sertifikasi yang paling sesuai dengan kebutuhan regulasi operasional perusahaan.',
    references: [
      'UU No. 1 Tahun 1970 vs UU No. 13 Tahun 2003',
      'PP 50 Tahun 2012 vs ISO 45001:2018',
    ],
  },
  lokasi: {
    badge: 'JARINGAN LAYANAN NASIONAL',
    title: 'Cakupan Layanan Pelatihan & In-House Training',
    summary:
      'Layanan pelatihan publik online Zoom interaktif dengan penjemputan berkas dan pengiriman sertifikat resmi, serta pelaksanaan In-House Training langsung di site proyek seluruh Indonesia.',
    references: [
      'Kantor Pusat: Yogyakarta & Sleman, D.I. Yogyakarta',
      'Kantor Operasional: Semarang, Jawa Tengah',
    ],
  },
};

export const sectionFaqs: Record<Section, SectionFaq[]> = {
  pelatihan: [
    {
      question: 'Apa perbedaan mendasar antara sertifikasi K3 Kemnaker RI dan sertifikasi BNSP?',
      answer:
        'Sertifikasi Kemnaker RI berorientasi pada kepatuhan regulasi wajib (compliance) yang menghasilkan Surat Keputusan Penunjukan (SKP) dan Lisensi Kewenangan personil untuk menandatangani dokumen legalitas K3 di perusahaan. Sementara sertifikasi BNSP berfokus pada pengakuan kompetensi profesi independen berdasarkan Standar Kompetensi Kerja Nasional Indonesia (SKKNI). Keduanya saling melengkapi.',
    },
    {
      question: 'Siapa saja yang memenuhi syarat untuk mengikuti Pelatihan Ahli K3 Umum Kemnaker RI?',
      answer:
        'Syarat formal penunjukan Ahli K3 Umum oleh Kemnaker RI adalah berpendidikan minimal Sarjana (S1) atau Diploma Tiga (D3) dari semua jurusan. Peserta wajib melampirkan salinan ijazah legalisir, surat keterangan kerja atau surat rekomendasi dari perusahaan, dan pas foto resmi background merah.',
    },
    {
      question: 'Berapa durasi waktu pelatihan Ahli K3 Umum 120 JP?',
      answer:
        'Pelatihan Ahli K3 Umum berdurasi 120 Jam Pelajaran (JP), umumnya dilaksanakan intensif selama 12 hari kerja dari Senin sampai Sabtu, mencakup pemaparan teori norma K3, studi kasus, seminar, serta Praktik Kerja Lapangan (PKL) dan penyusunan laporan audit K3.',
    },
    {
      question: 'Apakah PT Kreasi Ultimate Berjaya melayani In-House Training langsung di pabrik atau kantor perusahaan?',
      answer:
        'Ya, kami melayani penyelenggaraan In-House Training K3 secara khusus untuk korporasi dengan jadwal, materi yang disesuaikan dengan jenis industri (manufaktur, migas, konstruksi, pertambangan), dan pengurusan sertifikat resmi Kemnaker RI atau BNSP.',
    },
  ],
  'regulasi-k3': [
    {
      question: 'Mengapa perusahaan wajib mematuhi UU No. 1 Tahun 1970?',
      answer:
        'UU No. 1 Tahun 1970 adalah payung hukum keselamatan kerja di Indonesia yang mewajibkan setiap tempat kerja yang menggunakan mesin, bahan berbahaya, instalasi listrik, atau mempekerjakan tenaga kerja untuk menerapkan syarat-syarat K3 guna mencegah kecelakaan kerja dan penyakit akibat kerja.',
    },
    {
      question: 'Perusahaan mana saja yang wajib menerapkan SMK3 berdasarkan PP No. 50 Tahun 2012?',
      answer:
        'Sesuai Pasal 5 PP No. 50 Tahun 2012, perusahaan yang mempekerjakan pekerja minimal 100 orang, atau mempunyai tingkat potensi bahaya tinggi (seperti pertambangan, minyak dan gas, kimia, konstruksi) wajib menerapkan Sistem Manajemen K3.',
    },
  ],
  panduan: [
    {
      question: 'Apa langkah-langkah utama dalam menyusun HIRADC?',
      answer:
        'Penyusunan HIRADC diawali dengan mengidentifikasi seluruh aktivitas kerja dan bahaya terkait, menganalisis kemungkinan (likelihood) dan keparahan (severity), menentukan tingkat risiko, dan merancang tindakan pengendalian mengikuti hierarki: Eliminasi, Substitusi, Rekayasa Teknik, Pengendalian Administratif, dan APD.',
    },
  ],
  'kamus-k3': [
    {
      question: 'Apa perbedaan antara bahaya (hazard) dan risiko (risk)?',
      answer:
        'Bahaya (hazard) adalah segala sumber, situasi, atau tindakan yang berpotensi menimbulkan kerugian atau cedera. Sedangkan risiko (risk) adalah kombinasi dari probabilitas terjadinya kejadian berbahaya dengan keparahan cedera yang dapat diakibatkannya.',
    },
  ],
  profesi: [
    {
      question: 'Apa tanggung jawab utama seorang Safety Officer di tempat kerja?',
      answer:
        'Safety Officer bertanggung jawab melakukan inspeksi harian, memantau penerapan prosedur K3, memimpin toolbox meeting, mengidentifikasi kondisi tidak aman (unsafe condition) dan tindakan tidak aman (unsafe action), serta membantu investigasi kecelakaan kerja.',
    },
  ],
  kompetensi: [
    {
      question: 'Apa yang dimaksud dengan kompetensi K3?',
      answer:
        'Kompetensi K3 adalah kemampuan kerja terpadu yang mencakup penguasaan pengetahuan, keterampilan praktis, dan sikap kerja yang konsisten dalam mengidentifikasi bahaya, mengevaluasi risiko, dan menerapkan tindakan pengendalian di tempat kerja.',
    },
    {
      question: 'Apa perbedaan kompetensi K3 dan pelatihan K3?',
      answer:
        'Pelatihan K3 merupakan proses pembelajaran terstruktur untuk mentransfer pengetahuan dan melatih keterampilan. Sedangkan kompetensi K3 adalah kemampuan nyata yang telah terbukti dan dapat didemonstrasikan dalam menjalankan tugas operasional sehari-hari.',
    },
    {
      question: 'Apakah setiap kompetensi K3 harus disertifikasi?',
      answer:
        'Tidak semua kompetensi K3 harus disertifikasi secara formal. Banyak keterampilan diterapkan sebagai bagian dari tanggung jawab kerja rutin. Sertifikasi kompetensi resmi (seperti melalui skema BNSP) dibutuhkan saat dipersyaratkan oleh regulasi, standar proyek, persyaratan tender, atau kebijakan internal perusahaan.',
    },
    {
      question: 'Bagaimana memilih kompetensi K3 yang sesuai dengan pekerjaan?',
      answer:
        'Pilihlah kompetensi berdasarkan tugas nyata Anda di tempat kerja, potensi bahaya utama di lapangan, sektor industri operasional, dokumen kerja yang wajib Anda susun (seperti HIRADC atau laporan investigasi), serta persyaratan kualifikasi yang diminta oleh pemberi kerja atau pemilik proyek.',
    },
  ],
  alat: [
    {
      question: 'Berapa kali APAR harus diinspeksi secara berkala?',
      answer:
        'Sesuai Permenakertrans No. Per.04/MEN/1980, Alat Pemadam Api Ringan (APAR) wajib diperiksa secara visual sekurang-kurangnya 2 kali dalam setahun (setiap 6 bulan) dan dilakukan pengujian tekanan serta isi ulang secara berkala.',
    },
  ],
  industri: [
    {
      question: 'Mengapa kebutuhan K3 setiap industri berbeda?',
      answer:
        'Setiap industri memiliki proses kerja, peralatan, bahan, dan lingkungan operasional yang berlainan. Sebagai contoh, industri konstruksi dan migas berfokus pada pekerjaan berisiko tinggi seperti ketinggian dan ruang terbatas, sedangkan fasilitas kesehatan berfokus pada bahaya biologis dan ergonomi. Karena itu, mitigasi bahaya dan program pembinaan K3 harus diselaraskan dengan profil risiko spesifik tiap sektor.',
    },
    {
      question: 'Bagaimana menentukan pelatihan K3 yang dibutuhkan perusahaan?',
      answer:
        'Perusahaan dapat memetakan kebutuhan pelatihan dengan mengidentifikasi aktivitas kerja utama, menganalisis potensi bahaya dominan melalui dokumen HIRADC/JSA, menentukan tingkatan peran karyawan yang memerlukan pembinaan (pekerja teknis, supervisor, atau manajemen), serta memeriksa regulasi penunjukan personil yang diwajibkan oleh kementerian ketenagakerjaan atau sektor terkait.',
    },
    {
      question: 'Apakah perusahaan bisa meminta program in-house sesuai risiko tempat kerja?',
      answer:
        'Bisa. Layanan In-House Training K3 dapat diselenggarakan khusus untuk korporasi secara offline di fasilitas site/pabrik perusahaan maupun secara blended online. Materi pembinaan, jadwal pelaksanaan, dan simulasi studi kasus dapat disesuaikan langsung dengan jenis industri serta potensi bahaya aktual di tempat kerja Anda.',
    },
    {
      question: 'Informasi apa yang perlu disiapkan sebelum meminta rekomendasi program?',
      answer:
        'Agar tim kami dapat memberikan rekomendasi dan estimasi proposal yang akurat, siapkan informasi ringkas meliputi: (1) sektor atau bidang usaha perusahaan, (2) aktivitas kerja dan proses utama, (3) potensi bahaya dominan yang dihadapi, (4) peran atau jabatan calon peserta, (5) perkiraan jumlah peserta, (6) preferensi lokasi (in-house di site atau online), serta (7) target waktu pelaksanaan.',
    },
  ],
  perbandingan: [
    {
      question: 'Kapan perusahaan harus memilih SMK3 PP 50/2012 dibandingkan ISO 45001?',
      answer:
        'SMK3 PP 50/2012 adalah kewajiban hukum (mandatory legal compliance) di Indonesia yang diaudit oleh badan audit resmi penunjukan Kemnaker RI. ISO 45001 adalah standar sukarela internasional yang sering disyaratkan oleh mitra bisnis multinasional atau tender global. Praktik terbaik adalah mengintegrasikan keduanya.',
    },
  ],
  lokasi: [
    {
      question: 'Apakah peserta luar kota Yogyakarta dan Semarang bisa mengikuti pelatihan?',
      answer:
        'Sangat bisa. Kelas publik diselenggarakan secara blended online melalui Zoom interaktif, sehingga peserta dari seluruh pelosok Indonesia dapat bergabung dengan mudah dari domisili masing-masing.',
    },
  ],
};

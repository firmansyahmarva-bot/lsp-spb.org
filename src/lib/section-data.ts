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
      question: 'Bagaimana memilih Pelatihan K3 yang sesuai dengan pekerjaan?',
      answer:
        'Pahami aktivitas kerja nyata, potensi bahaya di lapangan, dan tujuan keikutsertaan Anda. Jika perusahaan membutuhkan personil berlisensi penunjukan resmi untuk memenuhi regulasi ketenagakerjaan, pilih jalur pembinaan Kemnaker RI (seperti Ahli K3 Umum, Petugas K3 Kimia, atau Teknisi K3 Listrik). Bila tujuannya pengakuan kompetensi profesi independen, ambil sertifikasi BNSP. Untuk kebutuhan keselamatan praktis internal, pelatihan operasional non-sertifikasi dapat menjadi pilihan efisien.',
    },
    {
      question: 'Apa perbedaan pembinaan Kemnaker dan sertifikasi kompetensi BNSP?',
      answer:
        'Pembinaan Kemnaker RI berfokus pada kepatuhan regulasi ketenagakerjaan wajib (regulatory compliance) yang dapat disertai penerbitan Surat Keputusan Penunjukan (SKP) dan Lisensi Kewenangan bagi personil yang ditugaskan perusahaan. Sedangkan sertifikasi kompetensi BNSP menguji dan mengakui standar keterampilan kerja berbasis SKKNI secara nasional melalui Lembaga Sertifikasi Profesi (LSP). Kedua jalur memiliki fungsi berbeda dan saling melengkapi.',
    },
    {
      question: 'Apakah semua Pelatihan K3 menghasilkan lisensi atau sertifikat kompetensi?',
      answer:
        'Tidak. Output setiap program berbeda tergantung skema dan badan penerbitnya. Pembinaan kepatuhan regulasi dapat menghasilkan sertifikat pembinaan dan lisensi penunjukan Kemnaker (jika memenuhi syarat utusan perusahaan). Asesmen BNSP menghasilkan Sertifikat Kompetensi K3. Sementara pelatihan teknis praktis, workshop internal, atau safety awareness menghasilkan sertifikat kepesertaan (attendance certificate) dari lembaga penyelenggara.',
    },
    {
      question: 'Apakah Pelatihan K3 tersedia untuk peserta individu dan perusahaan?',
      answer:
        'Ya. Kami melayani pendaftaran publik bagi peserta individu (profesional, praktisi, atau fresh graduate yang memenuhi kualifikasi) maupun penyelenggaraan In-House Training khusus untuk rombongan karyawan perusahaan. Program in-house dapat disesuaikan dengan profil risiko tempat kerja, fasilitas operasional, dan target jadwal perusahaan.',
    },
    {
      question: 'Bagaimana cara menanyakan jadwal, syarat dan biaya terbaru?',
      answer:
        'Anda dapat mengklik tombol konsultasi WhatsApp di situs ini untuk langsung terhubung dengan tim representatif kami. Sampaikan nama program yang diminati, latar belakang pendidikan atau pekerjaan, serta estimasi jumlah peserta (individu atau rombongan in-house) agar kami dapat mengirimkan silabus lengkap, persyaratan pendaftaran, jadwal batch terdekat, dan rincian investasi resmi.',
    },
  ],
  'regulasi-k3': [
    {
      question: 'Apa dasar hukum utama K3 di Indonesia?',
      answer:
        'Dasar hukum pokok K3 di Indonesia adalah Undang-Undang No. 1 Tahun 1970 tentang Keselamatan Kerja yang mengatur keselamatan di segala tempat kerja darat, air, dan udara. Ketentuan ini diperkuat oleh UU No. 13 Tahun 2003 (Pasal 86 & 87) tentang Ketenagakerjaan serta PP No. 50 Tahun 2012 tentang Penerapan Sistem Manajemen K3 (SMK3).',
    },
    {
      question: 'Apa perbedaan UU, PP, Permenaker dan Kepmenaker?',
      answer:
        'Undang-Undang (UU) menetapkan prinsip hukum, hak, dan kewajiban pokok secara umum. Peraturan Pemerintah (PP) mengatur pelaksanaan sistem secara komprehensif (seperti audit SMK3). Peraturan Menteri Ketenagakerjaan (Permenaker) memuat norma teknis operasional spesifik (seperti K3 listrik, ketinggian, atau pesawat angkat). Sedangkan Keputusan Menteri (Kepmenaker) dan Surat Edaran Dirjen menetapkan pedoman teknis pelaksanaan atau Standar Kompetensi Kerja Nasional Indonesia (SKKNI).',
    },
    {
      question: 'Bagaimana mencari regulasi berdasarkan jenis pekerjaan?',
      answer:
        'Gunakan filter bidang teknis atau fitur pencarian pada direktori regulasi ini. Sebagai contoh, untuk pekerjaan listrik rujuk Permenaker No. 12/2015 dan PUIL 2020; untuk pekerjaan ketinggian rujuk Permenaker No. 09/2016; untuk operator forklift/crane rujuk Permenaker No. 08/2020; dan untuk bahan kimia rujuk Kepmenaker No. 187/1999.',
    },
    {
      question: 'Apakah regulasi lama masih dapat digunakan?',
      answer:
        'Regulasi yang telah dicabut atau diperbarui (seperti Permenaker No. 05/1996 yang digantikan PP No. 50/2012, atau Permenaker No. 09/2008 yang digantikan Permenaker No. 08/2020) tidak lagi mengikat secara hukum positif. Namun, dokumen tersebut tetap penting sebagai referensi historis, kajian latar belakang hukum, atau perbandingan transisi klausul.',
    },
    {
      question: 'Regulasi apa yang mengatur Ahli K3 dan P2K3?',
      answer:
        'Kelembagaan Panitia Pembina Keselamatan dan Kesehatan Kerja (P2K3) diatur melalui Permenaker No. Per.04/MEN/1987. Tata cara penunjukan, kewajiban, dan wewenang Ahli K3 diatur dalam Permenaker No. Per.02/MEN/1992, yang didukung Kepmenaker No. 317 Tahun 2023 terkait pedoman pembinaan dan sertifikasinya.',
    },
    {
      question: 'Bagaimana mengetahui pelatihan yang sesuai dengan regulasi?',
      answer:
        'Periksa pasal persyaratan kualifikasi personel pada regulasi terkait (misalnya syarat penunjukan Ahli K3 Umum, Teknisi K3 Listrik, atau Petugas P3K). Anda juga dapat berkonsultasi langsung melalui WhatsApp resmi PT Kreasi Ultimate Berjaya untuk memverifikasi pelatihan sertifikasi Kemnaker RI atau BNSP yang tepat sesuai profil risiko perusahaan Anda.',
    },
  ],
  panduan: [
    {
      question: 'Apa itu K3 dan apa tujuannya?',
      answer:
        'Keselamatan dan Kesehatan Kerja (K3) adalah upaya terencana dan sistematis untuk mencegah terjadinya kecelakaan kerja dan penyakit akibat kerja (PAK) serta mewujudkan lingkungan kerja yang aman, sehat, dan efisien. Tujuannya adalah melindungi keselamatan seluruh tenaga kerja, menjaga aset serta sumber produksi perusahaan, dan memenuhi standar kepatuhan regulasi ketenagakerjaan.',
    },
    {
      question: 'Apa langkah awal menerapkan K3 di tempat kerja?',
      answer:
        'Langkah awal dimulai dari mengidentifikasi seluruh aktivitas kerja dan potensi bahaya yang ada, dilanjutkan dengan penilaian risiko (seperti menggunakan metode HIRADC atau JSA). Setelah tingkat risiko diketahui, perusahaan menetapkan langkah pengendalian prioritas, menyusun prosedur kerja aman (SOP), menunjuk personel penanggung jawab K3, serta memberikan pelatihan dasar keselamatan kepada pekerja.',
    },
    {
      question: 'Apa perbedaan panduan K3, SOP K3 dan regulasi K3?',
      answer:
        'Regulasi K3 merupakan produk hukum yang mengikat (seperti Undang-Undang atau Peraturan Menteri) yang menetapkan kewajiban hukum minimum. Panduan K3 adalah penjelasan praktis dan metodologi untuk mempermudah pemahaman atau penerapan suatu topik K3. Sedangkan SOP K3 adalah instruksi kerja terperinci langkah-demi-langkah untuk aktivitas, peralatan, atau proses spesifik di lapangan.',
    },
    {
      question: 'Bagaimana memilih Pelatihan K3 yang sesuai?',
      answer:
        'Pemilihan pelatihan K3 diselaraskan dengan profil risiko tempat kerja, kewajiban perundangan di sektor industri bersangkutan, peran pekerjaan yang diemban, serta persyaratan latar belakang pendidikan peserta (misalnya penunjukan Ahli K3 Umum untuk pengurus P2K3 atau sertifikasi operator untuk peralatan berat).',
    },
    {
      question: 'Apakah perusahaan dapat berkonsultasi tentang kebutuhan program K3?',
      answer:
        'Ya. Perusahaan dapat berkonsultasi langsung melalui WhatsApp untuk mendiskusikan pemetaan bahaya operasional, kewajiban perundangan yang berlaku, rekomendasi jenis pelatihan personel, hingga permintaan proposal in-house training dengan kurikulum yang disesuaikan dengan kondisi tempat kerja.',
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
      question: 'Apa yang harus dibandingkan sebelum memilih program K3?',
      answer:
        'Periksa landasan hukum atau standar yang mendasari, kewenangan dokumen yang dihasilkan (sertifikat kompetensi vs SKP/lisensi penunjukan Kemnaker), kesesuaian dengan profil risiko industri dan posisi kerja, serta persyaratan latar belakang pendidikan peserta.',
    },
    {
      question: 'Apakah sertifikasi BNSP dan Kemnaker memiliki fungsi yang sama?',
      answer:
        'Berbeda dan saling melengkapi. Sertifikasi Kemnaker RI berfokus pada pemenuhan kepatuhan hukum perusahaan (legal compliance) untuk penunjukan personil berwenang di tempat kerja. Sedangkan sertifikasi BNSP berfokus pada pengakuan dan pembuktian standar kompetensi kerja individu (SKKNI) secara nasional.',
    },
    {
      question: 'Apakah dua pilihan K3 selalu saling menggantikan?',
      answer:
        'Tidak selalu. Sebagian opsi bersifat substitutif (misalnya memilih APD earplug vs earmuff atau kelas online vs offline), namun banyak opsi bersifat saling melengkapi atau berjenjang (misalnya menerapkan SMK3 PP 50/2012 sekaligus ISO 45001, atau memadukan HIRADC di tingkat proses dengan JSA di tingkat tugas teknis).',
    },
    {
      question: 'Kapan memilih public class atau in-house training?',
      answer:
        'Pilih public class jika pendaftar merupakan individu atau perusahaan yang hanya mengirimkan 1–3 orang peserta dengan jadwal fleksibel. Pilih in-house training jika perusahaan memiliki lebih dari 5–10 orang peserta, memerlukan jadwal khusus, atau membutuhkan studi kasus dan simulasi yang disesuaikan langsung dengan risiko fasilitas kerja.',
    },
    {
      question: 'Mengapa kebutuhan perusahaan dapat menghasilkan pilihan berbeda?',
      answer:
        'Karakteristik bahaya, skala operasional, jumlah tenaga kerja, kewajiban regulasi sektoral (seperti ESDM, PUPR, atau Kemnaker), serta persyaratan kualifikasi tender klien sangat menentukan apakah perusahaan memerlukan penunjukan personil tertentu, integrasi sistem manajemen, atau sertifikasi spesialis.',
    },
    {
      question: 'Bagaimana meminta rekomendasi sebelum mendaftar?',
      answer:
        'Anda dapat berkonsultasi langsung melalui WhatsApp resmi PT Kreasi Ultimate Berjaya dengan menyampaikan peran kerja, sektor industri perusahaan, opsi yang sedang dibandingkan, serta hasil yang diharapkan agar tim konsultan kami dapat memberikan rekomendasi objektif.',
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

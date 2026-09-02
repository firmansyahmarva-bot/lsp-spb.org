import type { ContentRecord } from './content-types';

export const officialSources = {
  uu1: { label: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja', url: 'https://jdih.kemnaker.go.id/katalog/uu-1-1970', publisher: 'Pemerintah RI / Kemnaker' },
  ak3u: { label: 'Permenaker No. PER.02/MEN/1992 tentang Penunjukan Ahli K3', url: 'https://jdih.kemnaker.go.id/katalog/permenaker-02-1992', publisher: 'Kemnaker RI' },
  pp50: { label: 'PP No. 50 Tahun 2012 tentang Penerapan SMK3', url: 'https://jdih.kemnaker.go.id/katalog/pp-50-2012', publisher: 'Pemerintah RI / Kemnaker' },
  bnsp: { label: 'Badan Nasional Sertifikasi Profesi (BNSP)', url: 'https://bnsp.go.id', publisher: 'BNSP RI' },
};

export const priorityRecords: ContentRecord[] = [
  // 1. /pelatihan/ahli-k3-umum
  {
    section: 'pelatihan',
    slug: 'ahli-k3-umum',
    title: 'Pelatihan Ahli K3 Umum (Sertifikasi Kemnaker RI)',
    metaTitle: 'Pelatihan Ahli K3 Umum Sertifikasi Kemnaker RI | Jadwal & Biaya',
    description: 'Program pembinaan calon Ahli K3 Umum resmi Kemnaker RI (120 JP). Informasi kurikulum, syarat D3/S1, jadwal batch, estimasi biaya, dan konsultasi in-house training.',
    answer: 'Pelatihan Ahli K3 Umum adalah program pembinaan intensif 120 Jam Pelajaran (±12 hari) sesuai Permenaker No. 02/MEN/1992 untuk mempersiapkan tenaga ahli K3 yang mampu mengawasi pelaksanaan norma K3 di tempat kerja dan memenuhi kewajiban hukum P2K3 perusahaan.',
    highlights: [
      'Sertifikasi Resmi Kemnaker RI (Sertifikat Pembinaan, SKP & Lisensi K3)',
      'Durasi Standar 120 JP (12 Hari Kerja) mencakup Teori, PKL & Evaluasi Kemnaker',
      'Syarat Pendidikan Minimal D3 / S1 Semua Jurusan',
      'Tersedia Jalur Kelas Publik & In-House Training Khusus Perusahaan',
    ],
    primaryCtaText: 'Tanya Jadwal & Kuota Ahli K3 Umum',
    primaryCtaIntent: 'jadwal',
    secondaryCtaText: 'Minta Rincian Biaya & Penawaran',
    secondaryCtaIntent: 'biaya',
    courseDetails: {
      level: 'Calon Ahli K3 Umum (Tingkat Nasional)',
      duration: '120 Jam Pelajaran (JP) / ± 12 Hari Kerja',
      method: 'Blended Learning (Online Teori via Zoom + PKL Lapangan & Evaluasi) atau Tatap Muka Penuh',
      legalBasis: 'UU No. 1 Tahun 1970 & Permenaker No. PER.02/MEN/1992',
      targetAudience: [
        'HSE Officer / Safety Officer yang membutuhkan legalitas lisensi Kemnaker',
        'Staf / Supervisor / Manager operasional yang ditunjuk sebagai pengurus P2K3 perusahaan',
        'Fresh graduate minimal D3/S1 semua jurusan yang ingin berkarir di bidang K3',
        'Perwakilan divisi HRD / GA / Engineering yang bertanggung jawab atas keselamatan kerja',
      ],
      prerequisites: [
        'Pendidikan minimal Diploma 3 (D3) atau Sarjana (S1) semua jurusan (PTN/PTS terakreditasi)',
        'Scan Ijazah Asli & Transkrip Nilai',
        'Scan KTP yang masih berlaku',
        'Surat Keterangan Bekerja / Penugasan dari Perusahaan (untuk peserta utusan perusahaan guna penerbitan SKP & Lisensi)',
        'Surat Pernyataan / Keterangan Belum Bekerja (bagi peserta mandiri / fresh graduate)',
        'Pas Foto formal background merah',
      ],
      certificationOutput: [
        'Sertifikat Pembinaan Calon Ahli K3 Umum dari Kementerian Ketenagakerjaan RI',
        'Surat Keputusan Penunjukan (SKP) Ahli K3 Umum dari Kemnaker RI (bagi peserta utusan perusahaan)',
        'Kartu Lisensi Kewenangan Ahli K3 Umum dari Kemnaker RI (masa berlaku 3 tahun)',
        'Sertifikat Pelatihan Internal & Surat Keterangan Lulus dari Penyelenggara',
      ],
      syllabusModules: [
        {
          module: 'Kelompok Dasar (Dasar-Dasar K3)',
          hours: '± 15 JP',
          topics: [
            'Kebijakan Nasional K3 dan Dinamika Ketenagakerjaan Indonesia',
            'Undang-Undang No. 1 Tahun 1970 tentang Keselamatan Kerja',
            'Sistem Kelembagaan dan Pengawasan K3 di Perusahaan (P2K3)',
          ],
        },
        {
          module: 'Kelompok Inti Bagian 1 (Pengawasan Norma Teknis K3)',
          hours: '± 35 JP',
          topics: [
            'Pengawasan K3 Pesawat Tenaga dan Produksi (Permenaker 38/2016)',
            'Pengawasan K3 Pesawat Angkat dan Angkut (Permenaker 8/2020)',
            'Pengawasan K3 Pesawat Uap dan Bejana Tekanan (Permenaker 37/2016 & Permenaker 4/2025)',
            'Pengawasan K3 Instalasi Listrik dan Penyalur Petir (Permenaker 12/2015 & 33/2015)',
            'Pengawasan K3 Elevator dan Eskalator (Permenaker 6/2017)',
            'Pengawasan K3 Penanggulangan Kebakaran di Tempat Kerja (Kepmenaker 186/1999)',
          ],
        },
        {
          module: 'Kelompok Inti Bagian 2 (Lingkungan Kerja, Kesehatan & Konstruksi)',
          hours: '± 35 JP',
          topics: [
            'Pengawasan K3 Konstruksi Bangunan dan Sarana Penunjang',
            'Pengawasan K3 Lingkungan Kerja dan Bahan Berbahaya Beracun (Permenaker 5/2018 & Kepmenaker 187/1999)',
            'Pengawasan K3 Kesehatan Kerja, Ergonomi, dan Pelayanan Kesehatan Kerja',
            'Penerapan Sistem Manajemen K3 (SMK3 PP No. 50 Tahun 2012) dan Audit SMK3',
            'Manajemen Risiko K3 (Identifikasi Bahaya, Penilaian Risiko & Pengendalian / HIRADC)',
            'Analisis dan Laporan Kecelakaan Kerja serta Statistik K3',
          ],
        },
        {
          module: 'Kelompok Penunjang & Uji Praktik',
          hours: '± 35 JP',
          topics: [
            'Praktik Kerja Lapangan (PKL) Observasi K3 ke Perusahaan / Objek Pengawasan',
            'Penyusunan Kertas Kerja / Laporan Hasil Observasi PKL',
            'Seminar dan Pemaparan Laporan PKL di hadapan Penguji Kemnaker & Instruktur',
            'Ujian Evaluasi Teori dan Studi Kasus Standar Kemnaker RI',
          ],
        },
      ],
      priceInfo: 'Investasi pelatihan mencakup modul resmi, bimbingan instruktur senior, fasilitas PKL, ujian Kemnaker, serta pengurusan legalitas dokumen SKP & Lisensi. Tersedia harga khusus paket rombongan / In-House Training perusahaan.',
    },
    blocks: [
      {
        heading: 'Mengapa Sertifikasi Ahli K3 Umum Sangat Dibutuhkan?',
        paragraphs: [
          'Berdasarkan Undang-Undang No. 1 Tahun 1970 dan Permenaker No. PER.02/MEN/1992, setiap tempat kerja yang mempekerjakan 100 orang atau lebih, atau memiliki tingkat bahaya tinggi, diwajibkan membentuk Panitia Pembina Keselamatan dan Kesehatan Kerja (P2K3) dan menunjuk minimal 1 orang Ahli K3 Umum yang memiliki Surat Keputusan Penunjukan (SKP) resmi dari Menteri Ketenagakerjaan RI.',
          'Bagi perusahaan, keberadaan Ahli K3 Umum memastikan kepatuhan regulasi (legal compliance), melindungi aset dari kecelakaan kerja yang merugikan, serta memenuhi persyaratan tender proyek industri, migas, konstruksi, dan sertifikasi ISO 45001 / SMK3 PP 50/2012.',
          'Bagi profesional dan pencari kerja, sertifikat Ahli K3 Umum Kemnaker RI merupakan standar emas kredibilitas yang paling banyak dipersyaratkan oleh divisi rekrutmen perusahaan BUMN, multinasional, dan swasta nasional di seluruh Indonesia.',
        ],
      },
      {
        heading: 'Perbedaan Peserta Utusan Perusahaan vs Peserta Mandiri / Fresh Graduate',
        paragraphs: [
          'Banyak calon peserta belum memahami perbedaan keluaran berkas antara peserta yang dikirim perusahaan dengan peserta yang mendaftar secara mandiri/fresh graduate:',
        ],
        bullets: [
          'Peserta Utusan Perusahaan (Memiliki Surat Tugas): Setelah lulus evaluasi Kemnaker RI, peserta memperoleh Sertifikat Pembinaan, SKP (Surat Keputusan Penunjukan Ahli K3 Umum atas nama perusahaan yang menugaskan), dan Kartu Lisensi Kewenangan K3 (berlaku 3 tahun).',
          'Peserta Mandiri / Fresh Graduate (Belum Bekerja): Peserta yang lulus tetap memperoleh Sertifikat Pembinaan Calon Ahli K3 Umum resmi Kemnaker RI dan Surat Keterangan Lulus. Sertifikat ini berlaku seumur hidup sebagai bukti kompetensi. Ketika nantinya diterima bekerja di suatu perusahaan, sertifikat tersebut tinggal diajukan ke Kemnaker untuk diterbitkan SKP dan Lisensi K3 atas nama perusahaan baru tanpa perlu mengulang pelatihan 120 JP.',
        ],
      },
      {
        heading: 'Format Pelaksanaan: Blended Learning vs In-House Training',
        paragraphs: [
          'Untuk menyesuaikan waktu operasional peserta, pelatihan diselenggarakan melalui beberapa metode fleksibel dengan mutu dan standar silabus yang tetap terjamin:',
        ],
        bullets: [
          'Public Batch (Blended Online): Pembelajaran materi teori regulasi dan studi kasus dilakukan interaktif via Zoom tatap muka daring, dilanjutkan dengan kegiatan PKL observasi lapangan terpandu dan ujian evaluasi akhir.',
          'In-House Training (Khusus Perusahaan): Pelatihan diselenggarakan eksklusif untuk internal satu perusahaan dengan jadwal yang fleksibel, studi kasus yang disesuaikan langsung dengan risiko tempat kerja perusahaan, serta efisiensi biaya untuk jumlah peserta kelompok.',
        ],
      },
      {
        heading: 'Tahapan Konsultasi dan Pendaftaran Bersama PT Kreasi Ultimate Berjaya',
        paragraphs: [
          'PT Kreasi Ultimate Berjaya siap mendampingi kebutuhan bimbingan dan administrasi pelatihan K3 Anda secara transparan dan terverifikasi:',
        ],
        bullets: [
          '1. Konsultasi Awal: Sampaikan profil peserta (mandiri / utusan perusahaan), tujuan sertifikasi, dan rencana waktu.',
          '2. Pre-Screening Dokumen: Tim kami membantu memverifikasi keabsahan ijazah, KTP, dan surat tugas sebelum pendaftaran dilakukan.',
          '3. Konfirmasi Jadwal & Registrasi: Pembayaran dan pendaftaran hanya diproses pada jadwal batch resmi yang telah terkonfirmasi kuotanya.',
          '4. Pendampingan Pembinaan & Evaluasi: Peserta mendapatkan modul lengkap, bimbingan instruktur profesional, fasilitas PKL, hingga pengawalan proses evaluasi Kemnaker.',
          '5. Serah Terima Berkas Sertifikat: Penyerahan sertifikat pembinaan dan pengurusan dokumen SKP/Lisensi dilakukan secara aman dan tertelusur.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Berapa lama durasi pelatihan Ahli K3 Umum Kemnaker RI?',
        answer: 'Durasi standar pembinaan Ahli K3 Umum Kemnaker RI adalah 120 Jam Pelajaran (JP), yang biasanya diselesaikan dalam waktu 12 hari kerja efektif mencakup teori, praktik kerja lapangan (PKL), penyusunan seminar, dan evaluasi ujian.',
      },
      {
        question: 'Apakah lulusan SMA/SMK bisa mengikuti sertifikasi Ahli K3 Umum Kemnaker?',
        answer: 'Sesuai Permenaker No. PER.02/MEN/1992 Pasal 3, syarat formal untuk memperoleh penunjukan Ahli K3 Umum Kemnaker RI adalah berpendidikan minimal Sarjana Muda / Diploma 3 (D3) atau Sarjana (S1). Lulusan SMA/SMK disarankan mengambil skema kompetensi BNSP seperti Petugas K3, Operator K3, atau sertifikasi teknis seperti K3 Kebakaran / P3K.',
      },
      {
        question: 'Apakah jurusan kuliah selain teknik/K3 bisa mendaftar?',
        answer: 'Bisa. Pelatihan Ahli K3 Umum terbuka untuk lulusan D3 / D4 / S1 dari SEMUA JURUSAN (Teknik, Ekonomi, Hukum, Komunikasi, Kesehatan, Pertanian, MIPA, dll.) asalkan perguruan tinggi dan program studi terakreditasi.',
      },
      {
        question: 'Berapa lama masa berlaku Sertifikat dan Lisensi Ahli K3 Umum?',
        answer: 'Sertifikat Pembinaan Kemnaker RI berlaku seumur hidup sebagai bukti telah menyelesaikan pembinaan. Sedangkan Surat Keputusan Penunjukan (SKP) dan Kartu Lisensi K3 berlaku selama 3 (tiga) tahun dan terikat pada perusahaan tempat Ahli K3 bertugas, serta dapat diperpanjang secara berkala.',
      },
      {
        question: 'Bagaimana cara meminta penawaran In-House Training untuk perusahaan kami?',
        answer: 'Anda dapat langsung menghubungi PT Kreasi Ultimate Berjaya via WhatsApp atau email dengan menginformasikan perkiraan jumlah peserta, preferensi jadwal, dan lokasi pelaksanaan. Tim kami akan menyiapkan proposal resmi, silabus, dan surat penawaran harga.',
      },
    ],
    related: [
      'panduan/syarat-ahli-k3-umum',
      'panduan/materi-ahli-k3-umum',
      'panduan/tugas-ahli-k3-umum',
      'panduan/biaya-pelatihan-k3',
      'perbandingan/bnsp-vs-kemnaker',
      'profesi/ahli-k3-umum',
    ],
    sources: [officialSources.uu1, officialSources.ak3u, officialSources.pp50],
    status: 'published',
    publishedAt: '2026-08-01',
    updatedAt: '2026-09-01',
    verifiedAt: '2026-09-01',
    indexable: true,
    intent: 'pelatihan ahli k3 umum sertifikasi kemnaker jadwal biaya',
    contentKind: 'program',
  },

  // 2. /panduan/syarat-ahli-k3-umum
  {
    section: 'panduan',
    slug: 'syarat-ahli-k3-umum',
    title: 'Syarat Pendaftaran Pelatihan & Sertifikasi Ahli K3 Umum',
    metaTitle: 'Syarat Ahli K3 Umum Kemnaker RI: Pendidikan, Dokumen & Ketentuan',
    description: 'Panduan lengkap syarat pendaftaran Ahli K3 Umum Kemnaker RI: kualifikasi pendidikan minimal D3/S1, kelengkapan berkas KTP, Ijazah, Surat Tugas, dan alur verifikasi.',
    answer: 'Persyaratan utama menjadi Ahli K3 Umum Kemnaker RI berlandaskan Permenaker No. 02/MEN/1992: berpendidikan formal minimal Diploma 3 (D3) atau Sarjana (S1) semua jurusan, menyertakan scan ijazah asli, KTP, pas foto latar belakang merah, serta surat penugasan perusahaan (bagi peserta utusan instansi) atau surat pernyataan (bagi peserta mandiri).',
    highlights: [
      'Pendidikan Minimal D3 / D4 / S1 Semua Jurusan (Terakreditasi)',
      'Kelengkapan Berkas: KTP, Ijazah Asli, Transkrip, Pas Foto Background Merah',
      'Surat Penugasan Perusahaan untuk Penerbitan SKP & Lisensi K3',
      'Tersedia Jalur untuk Fresh Graduate / Calon Profesional Mandiri',
    ],
    primaryCtaText: 'Konsultasi Syarat & Verifikasi Berkas',
    primaryCtaIntent: 'syarat',
    secondaryCtaText: 'Tanya Jadwal Batch Terdekat',
    secondaryCtaIntent: 'jadwal',
    documentChecklist: [
      {
        category: 'Dokumen Wajib Semua Peserta (Mandiri & Perusahaan)',
        items: [
          'Scan KTP / Kartu Tanda Penduduk yang masih berlaku (format PDF / JPG jelas terbaca)',
          'Scan Ijazah Asli minimal D3 / S1 semua jurusan (bukan surat keterangan lulus sementara kecuali ada ketentuan khusus)',
          'Scan Transkrip Nilai Akademik Asli',
          'File Pas Foto formal terbaru dengan latar belakang MERAH (pakaian rapi berdasi / berkerah formal)',
          'Surat Pernyataan Kesediaan Mematuhi Tata Tertib Pelatihan dan Ujian',
        ],
      },
      {
        category: 'Dokumen Tambahan Khusus Utusan Perusahaan (Untuk SKP & Lisensi)',
        items: [
          'Surat Tugas / Rekomendasi Resmi dari Pimpinan Perusahaan berkop surat dan bertandatangan basah/elektronik',
          'Surat Keterangan Pengalaman Kerja di bidang K3 (minimal 2 tahun untuk D3, atau 1 tahun untuk S1)',
          'Surat Pernyataan Penunjukan sebagai Calon Ahli K3 Umum di Perusahaan bersangkutan',
          'Salinan Akta Pendirian Perusahaan / NIB (Nomor Induk Berusaha) jika diperlukan untuk proses administrasi Kemnaker',
        ],
      },
      {
        category: 'Kesiapan Teknis (Untuk Pembelajaran Blended / Online)',
        items: [
          'Laptop / Komputer dengan webcam aktif dan mikrofon jernih',
          'Koneksi internet stabil minimal 10 Mbps untuk Zoom meeting interaktif selama 12 hari',
          'Aplikasi Zoom dan pembaca dokumen PDF terpasang',
        ],
      },
    ],
    blocks: [
      {
        heading: 'Dasar Hukum Persyaratan Ahli K3 Umum',
        paragraphs: [
          'Persyaratan calon Ahli K3 Umum ditetapkan secara tegas dalam Peraturan Menteri Tenaga Kerja No. PER.02/MEN/1992 tentang Tata Cara Penunjukan, Kewajiban, dan Wewenang Ahli Keselamatan dan Kesehatan Kerja. Pasal 3 menyebutkan bahwa untuk dapat ditunjuk sebagai Ahli K3, seseorang harus memenuhi kriteria pendidikan, pengalaman, dan kelulusan pembinaan teknis.',
          'Kemnaker RI menerapkan verifikasi berkas secara ketat melalui sistem database ketenagakerjaan resmi (TemanK3) guna menjamin seluruh personel yang memegang lisensi memiliki dasar akademik yang kredibel.',
        ],
      },
      {
        heading: 'Mengapa Lulusan SMA/SMK Belum Bisa Mengambil Lisensi Ahli K3 Umum Kemnaker?',
        paragraphs: [
          'Banyak yang menanyakan mengapa lulusan SMA/SMK tidak dapat mendaftar pembinaan Ahli K3 Umum Kemnaker. Hal ini dikarenakan Ahli K3 Umum dirancang sebagai jabatan strategis pengawasan kebijakan dan sistem manajemen risiko yang setara dengan jenjang penasihat manajemen/sekretaris P2K3.',
          'Bagi rekan-rekan lulusan SMA/SMK yang berminat berkarir di bidang K3, jalur yang tepat dan legal adalah:',
        ],
        bullets: [
          'Sertifikasi Kompetensi BNSP: Skema Operator K3, Petugas K3, atau Juru Ikat/Rigger yang menerima kualifikasi pendidikan SMA/SMK.',
          'Sertifikasi Teknis Kemnaker: Petugas Peran Kebakaran (Kelas D/C), Petugas P3K di Tempat Kerja, Operator Forklift/Crane, atau K3 Ketinggian TKBT.',
          'Melanjutkan Pendidikan ke D3/S1: Mengambil studi Diploma atau Sarjana untuk kemudian mengambil sertifikasi Ahli K3 Umum setelah lulus.',
        ],
      },
      {
        heading: 'Alur Verifikasi Berkas Sebelum Membayar Biaya Pelatihan',
        paragraphs: [
          'Untuk menghindari risiko penolakan berkas oleh evaluator Kemnaker di tengah jalannya pelatihan, PT Kreasi Ultimate Berjaya menerapkan SOP Pre-Screening gratis:',
        ],
        bullets: [
          '1. Calon peserta mengirimkan foto/scan dokumen KTP dan Ijazah ke tim admisi kami.',
          '2. Tim kami mengecek kesesuaian data akademik di PDDikti dan memeriksa legalitas dokumen.',
          '3. Setelah berkas dinyatakan lolos pra-syarat, peserta diberikan surat konfirmasi pendaftaran resmi.',
          '4. Peserta melakukan registrasi batch pada jadwal yang dipilih dengan rasa tenang dan aman.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Apakah ijazah luar negeri bisa digunakan untuk syarat Ahli K3 Umum?',
        answer: 'Bisa, asalkan ijazah luar negeri tersebut telah memiliki Surat Keputusan Penyetaraan Ijazah Luar Negeri resmi dari Kemendikbudristek RI.',
      },
      {
        question: 'Apakah surat keterangan lulus (SKL) bisa menggantikan ijazah asli?',
        answer: 'Pada prinsipnya Kemnaker mensyaratkan ijazah asli. Dalam kasus tertentu di mana ijazah fisik belum terbit pasca-wisuda, SKL yang dilegalisir basah oleh rektorat dapat diajukan untuk pre-screening terlebih dahulu, dengan komitmen ijazah diserahkan sebelum berkas SKP diproses.',
      },
      {
        question: 'Jika saya mendaftar mandiri (fresh graduate), dokumen apa yang tidak perlu?',
        answer: 'Peserta mandiri tidak perlu melampirkan Surat Tugas Perusahaan, Surat Pengalaman Kerja, dan NIB Perusahaan. Dokumen yang diperlukan cukup KTP, Ijazah, Transkrip, Pas Foto, dan Surat Pernyataan Belum Bekerja.',
      },
    ],
    related: [
            'panduan/materi-ahli-k3-umum',
            'panduan/biaya-pelatihan-k3',
            'perbandingan/bnsp-vs-kemnaker',
            'profesi/ahli-k3-umum',
          ],
          sources: [officialSources.ak3u, officialSources.uu1],
          status: 'published',
          publishedAt: '2026-08-01',
          updatedAt: '2026-09-01',
          verifiedAt: '2026-09-01',
          indexable: true,
          intent: 'syarat pendaftaran ahli k3 umum kemnaker dokumen pendidikan',
          contentKind: 'guide',
        },
      
        // 3. /panduan/materi-ahli-k3-umum
        {
          section: 'panduan',
          slug: 'materi-ahli-k3-umum',
          title: 'Materi & Silabus Lengkap Pelatihan Ahli K3 Umum 120 JP',
          metaTitle: 'Materi Ahli K3 Umum Kemnaker RI: Silabus 120 JP, PKL & Modul',
          description: 'Rincian kurikulum dan materi pelatihan Ahli K3 Umum Kemnaker RI (120 JP): Kelompok Dasar, Kelompok Inti, Kelompok Penunjang, PKL Lapangan, dan Ujian Evaluasi.',
          answer: 'Materi pelatihan Ahli K3 Umum mengacu pada silabus standar Kemnaker RI dengan total 120 Jam Pelajaran (JP). Materi terbagi menjadi 4 pilar: Kelompok Dasar (Kebijakan K3, UU 1/1970, Kelembagaan P2K3), Kelompok Inti (Norma Teknis Mekanik, Listrik, Kebakaran, Konstruksi, Kimia, Kesehatan Kerja, SMK3, HIRADC), Kelompok Penunjang, serta Praktik Kerja Lapangan (PKL) & Seminar Laporan.',
          highlights: [
            'Silabus Resmi Standar Direktorat Bina Kelembagaan K3 Kemnaker RI',
            'Total Bobot 120 Jam Pelajaran (Teori 80 JP + PKL & Ujian 40 JP)',
            'Mencakup 10 Norma Pengawasan K3 Spesifik',
            'Studi Kasus Observasi Nyata (PKL Lapangan) & Seminar Kertas Kerja',
          ],
          primaryCtaText: 'Tanya Jadwal & Kurikulum Batch',
          primaryCtaIntent: 'jadwal',
          secondaryCtaText: 'Konsultasi Pelatihan Perusahaan',
          secondaryCtaIntent: 'perusahaan',
          blocks: [
            {
              heading: 'Struktur Kurikulum 120 Jam Pelajaran (JP)',
              paragraphs: [
                'Kurikulum pembinaan calon Ahli K3 Umum dirancang komprehensif agar lulusan memiliki pandangan holistik mengenai keselamatan kerja di berbagai sektor industri (manufaktur, migas, konstruksi, pertambangan, rumah sakit, dll.).',
                'Satu Jam Pelajaran (JP) bernilai 45 menit pembelajaran efektif yang diampu oleh Pengawas Ketenagakerjaan Kemnaker RI, pejabat Disnaker, serta Instruktur K3 senior.',
              ],
            },
            {
              heading: 'Rincian 4 Pilar Materi Ahli K3 Umum',
              paragraphs: ['Berikut pembagian detail silabus dari hari pertama hingga evaluasi akhir:'],
              bullets: [
                '1. Kelompok Dasar (Pondasi Regulasi Nasional): Mempelajari Kebijakan Nasional K3, Penjelasan Historis & Pasal Kunci UU No. 1 Tahun 1970, Pengawasan Ketenagakerjaan, serta Tata Kelola Kelembagaan K3 (P2K3 & PJK3 berdasarkan Permenaker 04/1995 dan Permenaker 13/2025).',
                '2. Kelompok Inti - Norma Mekanik, Uap & Tekanan: K3 Pesawat Tenaga & Produksi (Permenaker 38/2016), Pesawat Angkat & Angkut (Permenaker 8/2020), Bejana Tekanan & Tangki Timbun (Permenaker 37/2016), serta Pesawat Uap/Boiler.',
                '3. Kelompok Inti - Norma Listrik, Lift & Kebakaran: K3 Instalasi Listrik dan Penyalur Petir (Permenaker 12/2015), K3 Elevator & Eskalator (Permenaker 6/2017), Manajemen Penanggulangan Kebakaran & Sistem Proteksi Aktif/Pasif (Kepmenaker 186/1999).',
                '4. Kelompok Inti - Konstruksi, Kimia, Lingkungan & Kesehatan: K3 Konstruksi Bangunan (Permen PUPR 10/2021 & Permenaker), K3 Bahan Berbahaya Beracun / B3 (Kepmenaker 187/1999), K3 Lingkungan Kerja & Faktor Fisika/Kimia/Ergonomi (Permenaker 5/2018), serta Penyelenggaraan Pelayanan Kesehatan Kerja & Gizi Kerja (Permenaker 03/1982 & Permenaker 15/2008).',
                '5. Kelompok Inti - Sistem Manajemen & Analisis Risiko: Penerapan SMK3 berdasarkan PP No. 50 Tahun 2012, 166 Kriteria Audit SMK3, Metodologi Identifikasi Bahaya & Pengendalian Risiko (HIRADC / JSA), Investigasi Kecelakaan Kerja, serta Perhitungan Statistik Frekuensi & Keparahan (FR & SR).',
                '6. Praktik Kerja Lapangan (PKL) & Evaluasi: Peserta melakukan observasi langsung terhadap penerapan norma K3 di perusahaan sampel, mengidentifikasi temuan positif dan temuan negatif, menyusun laporan analisis berbasis regulasi, mempresentasikan hasil di depan evaluator Kemnaker, dan mengikuti ujian komprehensif tertulis.',
              ],
            },
            {
              heading: 'Manfaat Nyata Mempelajari Materi Ahli K3 Umum untuk Dunia Kerja',
              paragraphs: [
                'Setelah menyelesaikan 120 JP pembinaan ini, peserta tidak hanya menguasai pasal-pasal undang-undang, tetapi memiliki kemampuan praktis operasional:',
              ],
              bullets: [
                'Mampu menyusun dokumen HIRADC dan JSA yang realistis untuk mencegah potensi bahaya fatal di area kerja.',
                'Mampu memimpin rapat P2K3 dan menyusun laporan triwulan resmi untuk diserahkan ke Dinas Tenaga Kerja setempat.',
                'Memahami titik kritis sertifikasi riksa uji alat (alat angkut, boiler, bejana tekan, instalasi listrik, hydrant) sehingga terhindar dari sanksi hukum.',
                'Mampu mendampingi proses sertifikasi SMK3 PP 50/2012 atau ISO 45001 dari badan audit eksternal.',
              ],
            },
          ],
          faqs: [
            {
              question: 'Apakah ada ujian dalam pelatihan Ahli K3 Umum?',
              answer: 'Ya, terdapat evaluasi komprehensif yang diselenggarakan langsung di bawah pengawasan evaluator Kemnaker RI, mencakup ujian teori tertulis (pilihan ganda dan essay studi kasus) serta ujian presentasi seminar laporan PKL.',
            },
            {
              question: 'Bagaimana pelaksanaan PKL jika pelatihan dilakukan secara online (blended)?',
              answer: 'Pada kelas blended online, PKL dilakukan dengan metode observasi video studi kasus industri terverifikasi atau kunjungan mandiri terstruktur ke fasilitas kerja yang telah disetujui instruktur, kemudian dianalisis dalam kelompok untuk dibuatkan laporan formal.',
            },
            {
              question: 'Apakah materi pelatihan disediakan dalam bentuk buku/hardcopy?',
              answer: 'Ya, peserta mendapatkan modul komprehensif, himpunan undang-undang regulasi K3 nasional, format kertas kerja PKL, dan slide presentasi instruktur.',
            },
          ],
          related: [
            'pelatihan/ahli-k3-umum',
            'panduan/syarat-ahli-k3-umum',
            'panduan/tugas-ahli-k3-umum',
            'panduan/biaya-pelatihan-k3',
            'perbandingan/bnsp-vs-kemnaker',
          ],
          sources: [officialSources.ak3u, officialSources.uu1, officialSources.pp50],
          status: 'published',
          publishedAt: '2026-08-01',
          updatedAt: '2026-09-01',
          verifiedAt: '2026-09-01',
          indexable: true,
          intent: 'materi kurikulum silabus pelatihan ahli k3 umum kemnaker 120 jp',
          contentKind: 'guide',
        },
      
        // 4. /panduan/tugas-ahli-k3-umum
        {
          section: 'panduan',
          slug: 'tugas-ahli-k3-umum',
          title: 'Tugas, Wewenang & Tanggung Jawab Ahli K3 Umum di Perusahaan',
          metaTitle: 'Tugas dan Wewenang Ahli K3 Umum di Perusahaan Sesuai Permenaker',
          description: 'Panduan lengkap tugas pokok, wewenang hukum, dan tanggung jawab Ahli K3 Umum di perusahaan berdasarkan Permenaker No. 02/MEN/1992 dan regulasi K3 Indonesia.',
          answer: 'Berdasarkan Permenaker No. 02/MEN/1992, tugas utama Ahli K3 Umum adalah membantu pengurus perusahaan mengawasi ditaatinya peraturan perundang-undangan K3, menjabat sebagai Sekretaris P2K3, melakukan inspeksi tempat kerja, menginvestigasi kecelakaan kerja, serta melaporkan kegiatan K3 secara berkala setiap 3 bulan sekali kepada Menteri Ketenagakerjaan / Dinas Tenaga Kerja.',
          highlights: [
            'Landasan Hukum: Permenaker No. PER.02/MEN/1992 Pasal 9 & Pasal 10',
            'Peran Kunci sebagai Sekretaris Panitia Pembina K3 (P2K3)',
            'Wewenang Memasuki Tempat Kerja & Meminta Keterangan Pelaksanaan K3',
            'Kewajiban Pelaporan Berkala Triwulan ke Kantor Disnaker',
          ],
          primaryCtaText: 'Konsultasi Pelatihan Ahli K3 Umum',
          primaryCtaIntent: 'daftar',
          secondaryCtaText: 'Tanya Program K3 Perusahaan',
          secondaryCtaIntent: 'perusahaan',
          blocks: [
            {
              heading: 'Kedudukan Hukum Ahli K3 Umum di Struktur Organisasi Perusahaan',
              paragraphs: [
                'Ahli K3 Umum bukan sekadar petugas lapangan, melainkan tenaga teknis berkeahlian khusus yang ditunjuk oleh Menteri Ketenagakerjaan RI untuk membantu pimpinan perusahaan menjalankan prinsip-prinsip keselamatan kerja secara berkesinambungan.',
                'Dalam struktur organisasi keselamatan kerja, Ahli K3 Umum umumnya diposisikan sebagai Sekretaris Panitia Pembina Keselamatan dan Kesehatan Kerja (P2K3) di mana Ketua P2K3 dijabat langsung oleh pimpinan puncak perusahaan (Direktur / General Manager).',
              ],
            },
            {
              heading: 'Rincian Tugas Pokok Ahli K3 Umum (Permenaker 02/1992 Pasal 9)',
              paragraphs: ['Secara normatif, tugas dan kewajiban seorang Ahli K3 Umum meliputi:'],
              bullets: [
                '1. Mengawasi Kepatuhan Norma K3: Memastikan seluruh aktivitas operasional, mesin, instalasi, dan lingkungan kerja mematuhi ketentuan perundang-undangan K3 yang berlaku.',
                '2. Membantu Pimpinan Menyusun Kebijakan & Program K3: Merancang rencana kerja K3 tahunan, target keselamatan kerja (Zero Accident), dan prosedur tanggap darurat.',
                '3. Melakukan Identifikasi Bahaya & Penilaian Risiko (HIRADC): Memetakan potensi bahaya di setiap lini kerja dan merekomendasikan pengendalian hirarki teknis yang efektif.',
                '4. Melakukan Inspeksi K3 Terjadwal: Melakukan pemeriksaan rutin terhadap APD, alat pemadam kebakaran (APAR), jalur evakuasi, mesin produksi, dan perilaku kerja aman.',
                '5. Menginvestigasi dan Menganalisis Insiden: Melakukan olah tempat kejadian perkara bila terjadi kecelakaan atau near-miss, mencari akar penyebab (Root Cause Analysis), dan menetapkan tindakan korektif pencegahan agar tidak terulang.',
                '6. Menyusun dan Mengirimkan Laporan Triwulan: Melaporkan kinerja dan kegiatan P2K3 setiap 3 (tiga) bulan sekali kepada Dinas Tenaga Kerja setempat dengan tembusan ke Kemnaker RI.',
                '7. Menyelenggarakan Edukasi & Safety Induction: Memberikan pembekalan K3 bagi karyawan baru, kontraktor, tamu, serta menyelenggarakan program Toolbox Meeting berkala.',
              ],
            },
            {
              heading: 'Wewenang Resmi Ahli K3 Umum (Permenaker 02/1992 Pasal 10)',
              paragraphs: [
                'Untuk memastikan tugas pengawasan dapat berjalan efektif, Menteri Ketenagakerjaan memberikan wewenang hukum kepada Ahli K3 Umum yang sah:',
              ],
              bullets: [
                'Memasuki tempat kerja sesuai dengan keputusan penunjukannya untuk melakukan pemeriksaan dan verifikasi norma K3.',
                'Meminta keterangan dan/atau informasi yang berkaitan dengan pelaksanaan syarat-syarat K3 di tempat kerja kepada pihak terkait.',
                'Memonitor, memeriksa, menguji, dan menganalisis kondisi lingkungan kerja serta keandalan sarana keselamatan.',
                'Memberikan saran dan rekomendasi perbaikan teknis K3 secara tertulis kepada pimpinan perusahaan.',
              ],
            },
            {
              heading: 'Batasan Tanggung Jawab: Ahli K3 vs Manajemen Perusahaan',
              paragraphs: [
                'Perlu digarisbawahi bahwa Ahli K3 Umum berperan sebagai advisor dan pengawas teknis independen di internal perusahaan. Tanggung jawab hukum penyediaan fasilitas K3, anggaran keselamatan, dan keselamatan seluruh tenaga kerja tetap berada di tangan pengurus / manajemen puncak perusahaan (sesuai UU No. 1 Tahun 1970 Pasal 14).',
                'Ahli K3 Umum bertanggung jawab memastikan bahwa rekomendasi pencegahan bahaya telah disampaikan secara profesional, terdokumentasi, dan terukur.',
              ],
            },
          ],
          faqs: [
            {
              question: 'Apakah satu perusahaan boleh memiliki lebih dari satu Ahli K3 Umum?',
              answer: 'Boleh, bahkan sangat dianjurkan untuk perusahaan berskala besar, memiliki banyak cabang operasional (multi-site), atau memiliki kompleksitas bahaya tinggi agar pengawasan K3 lebih optimal.',
            },
            {
              question: 'Apa akibatnya jika perusahaan tidak memiliki Ahli K3 Umum yang berlisensi?',
              answer: 'Perusahaan berisiko mendapatkan nota pemeriksaan dan peringatan dari Pengawas Ketenagakerjaan Disnaker, sanksi administratif, kesulitan mengikuti lelang tender proyek, serta berpotensi gagal dalam audit sertifikasi SMK3 PP 50/2012 maupun ISO 45001.',
            },
            {
              question: 'Bagaimana jika Ahli K3 Umum pindah bekerja ke perusahaan lain?',
              answer: 'Sertifikat pembinaan tetap menjadi hak milik individu. Namun, SKP dan Lisensi K3 lama harus dicabut/dimutasi, kemudian perusahaan baru mengajukan permohonan penerbitan SKP dan Lisensi K3 baru atas nama perusahaan yang baru ke Kemnaker RI tanpa perlu mengulang kelas pelatihan.',
            },
          ],
          related: [
            'pelatihan/ahli-k3-umum',
            'panduan/syarat-ahli-k3-umum',
            'panduan/materi-ahli-k3-umum',
            'profesi/ahli-k3-umum',
            'perbandingan/bnsp-vs-kemnaker',
          ],
          sources: [officialSources.ak3u, officialSources.uu1],
          status: 'published',
          publishedAt: '2026-08-01',
          updatedAt: '2026-09-01',
          verifiedAt: '2026-09-01',
          indexable: true,
          intent: 'tugas fungsi wewenang tanggung jawab ahli k3 umum perusahaan permenaker',
          contentKind: 'guide',
        },
      
        // 5. /panduan/biaya-pelatihan-k3
        {
          section: 'panduan',
          slug: 'biaya-pelatihan-k3',
          title: 'Biaya Pelatihan Ahli K3 Umum & Program K3: Rincian & Faktor Penentu',
          metaTitle: 'Biaya Pelatihan Ahli K3 Umum & K3 Indonesia: Rincian & Estimasi',
          description: 'Panduan transparan estimasi biaya pelatihan Ahli K3 Umum Kemnaker & BNSP: komponen biaya sertifikat, modul, PKL, fasilitas kelas publik vs in-house training perusahaan.',
          answer: 'Biaya pelatihan Ahli K3 Umum di Indonesia umumnya berkisar antara Rp 4.500.000 hingga Rp 8.500.000 per peserta untuk kelas publik (tergantung metode online blended atau offline tatap muka penuh), mencakup 120 JP pembinaan, modul regulasi, fasilitas PKL, evaluasi Kemnaker, serta pengurusan SKP dan Lisensi K3. Untuk in-house training perusahaan, biaya dihitung berdasarkan paket rombongan dengan efisiensi yang lebih tinggi.',
          highlights: [
            'Transparansi Komponen Biaya Tanpa Biaya Tersembunyi (No Hidden Fee)',
            'Paket Public Batch: Blended Online vs Offline Tatap Muka',
            'Paket In-House Training Khusus Perusahaan (Lebih Hemat untuk Kelompok)',
            'Sudah Termasuk Pengurusan SKP & Lisensi Kemnaker RI',
          ],
          primaryCtaText: 'Minta Estimasi Biaya & Penawaran Resmi',
          primaryCtaIntent: 'biaya',
          secondaryCtaText: 'Konsultasi In-House Training Perusahaan',
          secondaryCtaIntent: 'perusahaan',
          blocks: [
            {
              heading: 'Komponen Utama yang Membentuk Biaya Pelatihan K3',
              paragraphs: [
                'Dalam memilih lembaga penyelenggara pembinaan K3, penting untuk memahami rincian fasilitas yang Anda terima agar tidak terjebak biaya tambahan di tengah atau akhir pelatihan. Di PT Kreasi Ultimate Berjaya, seluruh penawaran disampaikan secara terbuka:',
              ],
              bullets: [
                '1. Honorarium Instruktur & Pengawas: Pembinaan diisi oleh Pengawas Ketenagakerjaan resmi Kemnaker RI, pejabat Disnaker, serta praktisi ahli bersertifikat.',
                '2. Penerbitan Dokumen Legalitas Kemnaker: Biaya evaluasi, verifikasi berkas, pencetakan Sertifikat Pembinaan resmi Kemnaker RI, Surat Keputusan Penunjukan (SKP), dan Kartu Lisensi Kewenangan K3.',
                '3. Modul & Perlengkapan Belajar: Himpunan buku peraturan perundangan K3, modul materi teknis, seminar kit, dan akses materi digital.',
                '4. Penyelenggaraan PKL & Ujian: Koordinasi observasi lapangan, bimbingan penyusunan laporan seminar, serta sistem evaluasi ujian tertulis.',
                '5. Fasilitas Venue & Konsumsi (Khusus Kelas Offline): Sewa ruang pertemuan standar hotel, sound system, coffee break 2x sehari, dan makan siang selama 12 hari pelatihan.',
              ],
            },
            {
              heading: 'Perbandingan Biaya: Kelas Publik vs In-House Training Perusahaan',
              paragraphs: [
                'Model pelaksanaan pelatihan sangat menentukan efisiensi anggaran pelatihan instansi atau individu Anda:',
              ],
              bullets: [
                'Kelas Publik (Individu / Kiriman 1-3 Orang Perusahaan): Peserta digabungkan dalam batch terjadwal dengan peserta dari berbagai perusahaan lain. Sangat ekonomis untuk kebutuhan 1 atau 2 orang staf K3.',
                'In-House Training (Khusus 1 Perusahaan, Minimal 10-20 Peserta): Pelatihan diselenggarakan eksklusif untuk staf internal perusahaan Anda di lokasi kantor/pabrik Anda atau hotel rekanan. Biaya per kepala menjadi jauh lebih hemat hingga 30-40%, jadwal dapat disesuaikan dengan shift operasional, dan studi kasus fokus 100% pada risiko industri perusahaan Anda.',
              ],
            },
            {
              heading: 'Faktor yang Membedakan Harga Pelatihan K3 di Pasaran',
              paragraphs: [
                'Jika Anda melihat variasi harga di internet, faktor penentunya antara lain:',
              ],
              bullets: [
                'Lembaga Sertifikasi (Kemnaker vs BNSP vs Internal): Sertifikasi Kemnaker 120 JP membutuhkan waktu 12 hari dengan penerbitan SKP & Lisensi negara sehingga investasinya berbeda dengan workshop awareness 1-2 hari.',
                'Format Pelaksanaan (Online Blended vs Offline Hotel): Kelas daring lebih terjangkau karena menghemat biaya sewa ruang hotel dan konsumsi harian selama 12 hari.',
                'Dukungan Pascapelatihan: Layanan pengawalan administrasi berkas mutasi/perpanjangan SKP di kemudian hari.',
              ],
            },
            {
              heading: 'Cara Mendapatkan Surat Penawaran Resmi & Invoice Perusahaan',
              paragraphs: [
                'Bagi bagian HRD / Procurement / Manajemen yang membutuhkan dokumen formal untuk pengajuan anggaran perusahaan:',
              ],
              bullets: [
                '1. Hubungi tim marketing PT Kreasi Ultimate Berjaya melalui WhatsApp atau Email.',
                '2. Informasikan nama program yang diminati, perkiraan jumlah peserta, dan target bulan pelaksanaan.',
                '3. Tim kami akan menerbitkan Surat Penawaran Harga (SPH) resmi berkop surat, lengkap dengan silabus, nomor rekening resmi perusahaan, dan rincian fasilitas pada jam operasional kerja.',
              ],
            },
          ],
          faqs: [
            {
              question: 'Apakah biaya pelatihan Ahli K3 Umum bisa dicicil?',
              answer: 'Untuk peserta mandiri, kami menyediakan skema pembayaran bertahap (Down Payment untuk booking seat dan pelunasan sebelum pembukaan kelas/evaluasi). Silakan konsultasikan dengan tim admisi kami.',
            },
            {
              question: 'Apakah ada biaya tambahan untuk penerbitan SKP dan Lisensi K3?',
              answer: 'Pada paket pelatihan Ahli K3 Umum reguler kami, biaya yang tertera sudah mencakup pengurusan Sertifikat Pembinaan, SKP, dan Lisensi K3 dari Kemnaker RI bagi peserta yang memenuhi syarat dokumen utusan perusahaan.',
            },
            {
              question: 'Bagaimana prosedur pembayaran untuk perusahaan (Term of Payment)?',
              answer: 'Untuk pendaftaran utusan perusahaan atau In-House Training, kami menerima mekanisme Purchase Order (PO) / Surat Perjanjian Kerja Sama (PKS) dengan Term of Payment (TOP) yang disepakati bersama.',
            },
          ],
          related: [
            'pelatihan/ahli-k3-umum',
            'panduan/syarat-ahli-k3-umum',
            'panduan/materi-ahli-k3-umum',
            'perbandingan/bnsp-vs-kemnaker',
            'jadwal',
            'kontak',
          ],
          sources: [officialSources.uu1, officialSources.ak3u],
          status: 'published',
          publishedAt: '2026-08-01',
          updatedAt: '2026-09-01',
          verifiedAt: '2026-09-01',
          indexable: true,
          intent: 'biaya pelatihan ahli k3 umum kemnaker rincian harga in house publik',
          contentKind: 'guide',
        },
      
        // 6. /perbandingan/bnsp-vs-kemnaker
        {
          section: 'perbandingan',
          slug: 'bnsp-vs-kemnaker',
          title: 'Perbedaan Sertifikasi K3 Kemnaker RI vs Sertifikasi K3 BNSP',
          metaTitle: 'BNSP vs Kemnaker: Perbedaan Sertifikat K3, Lisensi & Kewenangan',
          description: 'Perbandingan lengkap Sertifikasi K3 Kemnaker RI vs K3 BNSP: dasar hukum, penerbit sertifikat, tujuan karir, kewenangan hukum, masa berlaku, dan panduan memilih.',
          answer: 'Perbedaan utama terletak pada otoritas dan tujuan: Sertifikasi K3 Kemnaker RI adalah pembinaan pemenuhan regulasi wajib tempat kerja (compliance) yang menghasilkan Sertifikat, SKP, dan Lisensi Kewenangan hukum bagi Ahli K3 di perusahaan. Sedangkan Sertifikasi K3 BNSP adalah asesmen uji kompetensi berbasis standar profesi (SKKNI) melalui LSP berlisensi untuk membuktikan keterampilan kerja individu secara nasional.',
          highlights: [
            'Kemnaker RI: Fokus Kepatuhan Regulasi Perusahaan (Penunjukan Ahli K3, SKP & Lisensi)',
            'BNSP (Badan Nasional Sertifikasi Profesi): Fokus Pengakuan Kompetensi Profesi (SKKNI)',
            'Keduanya Saling Melengkapi, Bukan Saling Menjatuhkan',
            'Panduan Memilih Jalur Sesuai Posisi Kerja & Kebutuhan Tender',
          ],
          primaryCtaText: 'Konsultasi Pemilihan Jalur K3',
          primaryCtaIntent: 'kemnaker_bnsp',
          secondaryCtaText: 'Tanya Jadwal Ahli K3 Umum Kemnaker',
          secondaryCtaIntent: 'jadwal',
          comparisonTable: {
            leftTitle: 'Sertifikasi K3 Kemnaker RI',
            rightTitle: 'Sertifikasi K3 BNSP',
            rows: [
              {
                aspect: 'Dasar Hukum',
                left: 'UU No. 1/1970, Permenaker No. 02/1992, dan peraturan pelaksanaan teknis K3 per bidang.',
                right: 'UU No. 13/2003 tentang Ketenagakerjaan, PP No. 10/2018 tentang BNSP, dan SKKNI K3.',
              },
              {
                aspect: 'Lembaga Penerbit',
                left: 'Kementerian Ketenagakerjaan Republik Indonesia (Direktorat Bina Pengawasan Ketenagakerjaan dan K3).',
                right: 'Badan Nasional Sertifikasi Profesi (BNSP) melalui Lembaga Sertifikasi Profesi (LSP) berlisensi resmi.',
              },
              {
                aspect: 'Output Dokumen',
                left: 'Sertifikat Pembinaan Kemnaker + SKP (Surat Keputusan Penunjukan) + Kartu Lisensi Kewenangan K3.',
                right: 'Sertifikat Kompetensi Kerja Nasional Indonesia bertanda logo Garuda BNSP.',
              },
              {
                aspect: 'Fokus & Tujuan',
                left: 'Pemenuhan kewajiban kepatuhan hukum perusahaan (Compliance), pembentukan P2K3, dan pengawasan norma K3.',
                right: 'Pengakuan standar keahlian dan keterampilan kerja personel (Competency assurance) sesuai unit SKKNI.',
              },
              {
                aspect: 'Keterikatan dengan Perusahaan',
                left: 'SKP dan Lisensi K3 terikat pada nama perusahaan tempat Ahli K3 bertugas (Sertifikat pembinaan melekat ke individu).',
                right: 'Melekat sepenuhnya pada individu pemegang sertifikat tanpa memandang status perusahaan tempat bekerja.',
              },
              {
                aspect: 'Masa Berlaku Dokumen',
                left: 'Sertifikat Pembinaan seumur hidup; SKP dan Lisensi K3 berlaku 3 tahun dan dapat diperpanjang.',
                right: 'Sertifikat Kompetensi BNSP umumnya berlaku 3 tahun dan diperpanjang melalui uji resertifikasi portofolio.',
              },
              {
                aspect: 'Format Kegiatan',
                left: 'Wajib mengikuti Pembinaan Intensif (misal 120 JP) + PKL Lapangan + Ujian Evaluasi Kemnaker.',
                right: 'Proses Asesmen / Uji Kompetensi (Portofolio bukti kerja, wawancara lisan, dan/atau observasi praktik oleh Asesor).',
              },
            ],
          },
          blocks: [
            {
              heading: 'Memahami Dua Jalur Sertifikasi K3 di Indonesia',
              paragraphs: [
                'Dalam ekosistem Keselamatan dan Kesehatan Kerja di Indonesia, calon peserta pelatihan sering kali bingung memilih antara sertifikasi dari Kementerian Ketenagakerjaan (Kemnaker RI) atau Badan Nasional Sertifikasi Profesi (BNSP).',
                'Kedua sertifikasi ini memiliki fungsi dan payung hukum yang berbeda namun saling melengkapi. Tidak ada yang "lebih tinggi" atau "lebih rendah", melainkan penggunaannya harus disesuaikan dengan kebutuhan nyata.',
              ],
            },
            {
              heading: 'Kapan Anda Wajib Memilih Sertifikasi Kemnaker RI?',
              paragraphs: ['Pilihlah jalur sertifikasi Kemnaker RI apabila:'],
              bullets: [
                'Perusahaan Anda membutuhkan pemenuhan audit kepatuhan hukum (Permenaker 02/1992 atau PP 50/2012 SMK3).',
                'Anda ditunjuk sebagai Sekretaris P2K3 di perusahaan tempat Anda bekerja.',
                'Perusahaan Anda hendak mengikuti tender proyek konstruksi, manufaktur, migas, atau BUMN yang secara eksplisit mensyaratkan personil dengan Surat Keputusan Penunjukan (SKP) dan Lisensi K3 resmi Kemnaker RI.',
                'Anda adalah fresh graduate / profesional yang ingin memiliki modal kredibilitas paling umum yang dipersyaratkan oleh lowongan kerja HSE di Indonesia (Ahli K3 Umum Kemnaker).',
              ],
            },
            {
              heading: 'Kapan Anda Membutuhkan Sertifikasi BNSP?',
              paragraphs: ['Pilihlah skema sertifikasi BNSP apabila:'],
              bullets: [
                'Anda telah memiliki portofolio dan pengalaman kerja di bidang K3 dan ingin mendapatkan pengakuan kompetensi formal berskala nasional/regional (KKNI / ASEAN MRA).',
                'Tender proyek secara spesifik meminta personil dengan sertifikat kompetensi BNSP (misalnya skema Ahli K3 Muda, Madya, Utama BNSP, Petugas K3 Migas BNSP, atau Auditor K3 BNSP).',
                'Anda bekerja sebagai konsultan independen, trainer K3, atau profesional lepas yang membutuhkan pengakuan kompetensi independen tanpa terikat satu entitas perusahaan.',
              ],
            },
            {
              heading: 'Konsultasi Jalur Tepat Bersama PT Kreasi Ultimate Berjaya',
              paragraphs: [
                'PT Kreasi Ultimate Berjaya menyediakan layanan konsultasi objektif untuk membantu Anda dan perusahaan memilih skema pelatihan yang paling efektif secara biaya dan tepat sasaran secara legalitas. Hubungi konsultan kami untuk pemetaan kebutuhan Anda.',
              ],
            },
          ],
          faqs: [
            {
              question: 'Apakah sertifikat BNSP otomatis bisa ditukar menjadi SKP Kemnaker?',
              answer: 'Tidak. Sertifikat kompetensi BNSP tidak otomatis menjadi SKP atau Lisensi K3 Kemnaker, dan sebaliknya. Keduanya berada di bawah sistem kelembagaan yang berbeda (PP 10/2018 untuk BNSP vs Permenaker 02/1992 untuk Kemnaker).',
            },
            {
              question: 'Apakah seorang praktisi HSE boleh memiliki kedua sertifikat tersebut?',
              answer: 'Sangat boleh dan justru sangat ideal. Banyak praktisi senior memegang Lisensi Ahli K3 Umum Kemnaker untuk kebutuhan kepatuhan hukum di perusahaannya, sekaligus memegang Sertifikat Kompetensi BNSP (misal Ahli K3 Madya/Utama) untuk membuktikan kematangan portofolio profesionalnya.',
            },
          ],
          related: [
            'pelatihan/ahli-k3-umum',
            'panduan/syarat-ahli-k3-umum',
            'panduan/biaya-pelatihan-k3',
            'profesi/ahli-k3-umum',
            'regulasi-k3/uu-1-1970',
            'regulasi-k3/pp-50-2012',
          ],
          sources: [officialSources.uu1, officialSources.ak3u, officialSources.bnsp],
          status: 'published',
          publishedAt: '2026-08-01',
          updatedAt: '2026-09-01',
          verifiedAt: '2026-09-01',
          indexable: true,
          intent: 'perbandingan perbedaan sertifikasi k3 bnsp vs kemnaker lisensi skp',
          contentKind: 'comparison',
        },
      
        // 7. /profesi/ahli-k3-umum
        {
          section: 'profesi',
          slug: 'ahli-k3-umum',
          title: 'Profesi Ahli K3 Umum di Indonesia: Peran, Jenjang Karir & Kualifikasi',
          metaTitle: 'Profesi Ahli K3 Umum: Tugas, Gaji, Karir & Kualifikasi di Indonesia',
          description: 'Profil profesi Ahli K3 Umum di Indonesia: tugas operasional, wewenang hukum, prospek jenjang karir HSE, rentang gaji, dan kualifikasi yang dibutuhkan perusahaan.',
          answer: 'Profesi Ahli K3 Umum adalah tenaga profesional berkeahlian khusus yang memiliki kewenangan hukum dari Kemnaker RI untuk mengidentifikasi bahaya, mengevaluasi risiko, dan memastikan kepatuhan norma keselamatan kerja di perusahaan. Profesi ini menjadi posisi kunci dalam kepengurusan P2K3 di berbagai sektor industri.',
          highlights: [
            'Peran Kunci dalam Kepatuhan Hukum & Pengendalian Risiko Perusahaan',
            'Jenjang Karir Terbuka: HSE Officer -> HSE Supervisor -> HSE Manager',
            'Kebutuhan Tinggi di Sektor Manufaktur, Konstruksi, Tambang, Migas & Rumah Sakit',
            'Membutuhkan Kombinasi Pemahaman Regulasi, Analisis Bahaya & Komunikasi',
          ],
          primaryCtaText: 'Tanya Pelatihan Ahli K3 Umum',
          primaryCtaIntent: 'daftar',
          secondaryCtaText: 'Konsultasi Karir K3',
          secondaryCtaIntent: 'syarat',
          blocks: [
            {
              heading: 'Siapa itu Ahli K3 Umum?',
              paragraphs: [
                'Ahli K3 Umum adalah tenaga ahli dari luar Departemen Tenaga Kerja yang ditunjuk oleh Menteri Ketenagakerjaan atas usul pengurus perusahaan untuk mengawasi ditaatinya Undang-Undang Keselamatan Kerja di tempat kerja bersangkutan.',
                'Profesi ini menggabungkan keahlian manajemen risiko, pemahaman regulasi teknis ketenagakerjaan, investigasi insiden, serta kepemimpinan komunikasi keselamatan untuk memastikan seluruh pekerja dapat pulang ke rumah dengan selamat setiap hari.',
              ],
            },
            {
              heading: 'Sektor Industri yang Wajib Mempekerjakan Ahli K3 Umum',
              paragraphs: [
                'Sesuai ketentuan hukum, hampir seluruh industri formal berskala menengah hingga besar memerlukan Ahli K3 Umum:',
              ],
              bullets: [
                'Manufaktur & Pabrikasi: Mengendalikan bahaya mesin produksi, pesawat angkat-angkut, boiler, bahan kimia, dan kelistrikan.',
                'Konstruksi & Infrastruktur: Mengawal pekerjaan berisiko tinggi seperti bekerja di ketinggian, galian tanah, perancah (scaffolding), dan alat berat.',
                'Minyak, Gas & Pertambangan: Mengelola process safety, izin kerja khusus (PTW), isolasi energi (LOTO), dan tanggap darurat industri.',
                'Fasilitas Layanan Kesehatan / Rumah Sakit: Mengawasi bahaya biologis/infeksi, radiasi, limbah medis B3, serta proteksi kebakaran gedung.',
                'Logistik & Pergudangan: Menata lalu lintas armada forklift, penataan rak penyimpanan tinggi, dan ergonomi angkat-angkut manual.',
              ],
            },
            {
              heading: 'Prospek Jenjang Karir & Gambaran Kompensasi',
              paragraphs: [
                'Karir di bidang K3 (Health, Safety, and Environment) menawarkan jalur perkembangan yang sangat jelas dan terstruktur:',
              ],
              bullets: [
                'Entry Level (HSE Officer / Safety Officer): Menjalankan inspeksi harian, briefing safety induction, penyusunan JSA, dan pencatatan statistik K3.',
                'Mid Level (HSE Supervisor / Senior Safety Specialist): Mengoordinasikan izin kerja risiko tinggi, memimpin rapat P2K3, mengelola audit SMK3 internal, dan investigasi insiden kompleks.',
                'Senior Level (HSE Manager / VP of QHSSE): Merumuskan strategi tata kelola keselamatan korporasi, integrasi ISO 45001 / ISO 14001, audit due diligence, dan pelaporan langsung kepada Direksi.',
              ],
            },
            {
              heading: 'Langkah Awal Memasuki Profesi Ahli K3 Umum',
              paragraphs: [
                'Bagi lulusan D3/S1 yang ingin memulai karir sebagai Ahli K3 Umum, langkah pertama yang paling strategis adalah menyelesaikan program Pembinaan Calon Ahli K3 Umum 120 JP resmi Kemnaker RI bersama PT Kreasi Ultimate Berjaya.',
              ],
            },
          ],
          faqs: [
            {
              question: 'Apakah seorang Ahli K3 Umum harus berlatar belakang pendidikan teknik?',
              answer: 'Tidak wajib. Banyak praktisi HSE berlatar belakang non-teknik (Kesehatan Masyarakat, Manajemen, Hukum, Biologi, Psikologi) yang berhasil menjadi HSE Manager karena profesi K3 sangat mengedepankan manajemen sistem, kepatuhan hukum, dan komunikasi.',
            },
            {
              question: 'Apa perbedaan mendasar antara Safety Officer dengan Ahli K3 Umum?',
              answer: 'Safety Officer adalah sebutan jabatan tugas keselamatan di suatu proyek/perusahaan. Sedangkan Ahli K3 Umum adalah legal standing resmi penunjukan dari Kementerian Ketenagakerjaan RI yang memiliki wewenang hukum sebagai Sekretaris P2K3.',
            },
          ],
          related: [
            'pelatihan/ahli-k3-umum',
            'panduan/syarat-ahli-k3-umum',
            'panduan/tugas-ahli-k3-umum',
            'panduan/biaya-pelatihan-k3',
            'perbandingan/bnsp-vs-kemnaker',
          ],
          sources: [officialSources.uu1, officialSources.ak3u],
          status: 'published',
          publishedAt: '2026-08-01',
          updatedAt: '2026-09-01',
          verifiedAt: '2026-09-01',
          indexable: true,
          intent: 'profesi karir tugas gaji kualifikasi ahli k3 umum indonesia',
          contentKind: 'profession',
        },
      ];

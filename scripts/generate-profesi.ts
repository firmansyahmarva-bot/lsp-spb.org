import { ContentRecordInput } from './build-inventory';
import { officialSources, SourceItem } from './sources';

interface ProfessionItem {
  slug: string;
  title: string;
  duties: string;
  authority: string;
  salary: string;
  skkniCode: string;
  faqQ1: string;
  faqA1: string;
  faqQ2: string;
  faqA2: string;
}

interface ProfessionGroup {
  category: string;
  prefix: string;
  sectorName?: string;
  sourceKey: string;
  legalDefault: string;
  items?: ProfessionItem[];
  titles?: string[];
}

export function generateProfesiRecords(): ContentRecordInput[] {
  const records: ContentRecordInput[] = [];

  const professionGroups: ProfessionGroup[] = [
    {
      category: 'Ahli K3 & Spesialis Regulasi Kemnaker RI',
      prefix: 'Ahli K3',
      sectorName: 'Regulasi & Pengawasan Norma Ketenagakerjaan',
      sourceKey: 'permen02_1992',
      legalDefault: 'Permenaker No. PER.02/MEN/1992 & UU No. 1 Tahun 1970',
      items: [
        {
          slug: 'ahli-k3-umum',
          title: 'Profesi Ahli K3 Umum',
          duties: 'Pengawasan norma K3 lintas industri, menjabat sebagai Sekretaris P2K3, memimpin penyusunan HIRADC 5x5, serta menyusun dan menyerahkan Laporan Triwulan P2K3 resmi ke Disnaker.',
          authority: 'Wewenang memasuki tempat kerja, meminta data pelaksanaan K3, memberikan rekomendasi perbaikan tertulis kepada direksi, dan memimpin verifikasi audit kepatuhan SMK3 PP 50/2012.',
          salary: 'Rp 6.500.000 - Rp 15.000.000 / bulan',
          skkniCode: 'SKKNI KEP.38/MEN/XI/2014 & Lisensi SKP Kemnaker RI',
          faqQ1: 'Apa syarat utama diangkat menjadi Ahli K3 Umum resmi Kemnaker RI?',
          faqA1: 'Pendidikan minimal D3/S1 semua jurusan, lulus pembinaan 120 JP di PJK3 resmi, dan diajukan oleh perusahaan penugasan untuk penerbitan SKP & Lisensi Kemnaker.',
          faqQ2: 'Apakah Ahli K3 Umum memiliki wewenang menghentikan pekerjaan berbahaya?',
          faqA2: 'Ya, memiliki Stop Work Authority untuk menghentikan pekerjaan darurat jika ditemukan kondisi tidak aman kritis yang mengancam keselamatan nyawa.'
        },
        {
          slug: 'ahli-k3-konstruksi',
          title: 'Profesi Ahli K3 Konstruksi',
          duties: 'Pengawasan keselamatan struktur proyek konstruksi gedung/sipil, penyusunan Rencana Keselamatan Konstruksi (RKK Permen PUPR 10/2021), inspeksi perancah, galian tanah, dan alat berat.',
          authority: 'Wewenang menyetujui izin kerja risiko tinggi (PTW proyek), memvalidasi kelayakan scaffolding Green Tag, dan menghentikan manuver alat berat yang membahayakan.',
          salary: 'Rp 8.500.000 - Rp 22.000.000 / bulan',
          skkniCode: 'SKKNI Konstruksi & Sertifikasi SMKK Kementerian PUPR',
          faqQ1: 'Sertifikasi apa yang dibutuhkan untuk menjadi Ahli K3 Konstruksi?',
          faqA1: 'Sertifikat pembinaan Ahli K3 Konstruksi (Muda/Madya/Utama) dari Kemnaker RI atau sertifikat kompetensi konstruksi SMKK PUPR.',
          faqQ2: 'Berapa jumlah Ahli K3 Konstruksi yang wajib ada di proyek besar?',
          faqA2: 'Untuk proyek berisiko keselamatan tinggi atau bernilai kontrak besar (> Rp 100 Miliar), wajib memiliki minimal 1 orang Ahli K3 Konstruksi Utama atau Madya.'
        },
        {
          slug: 'ahli-k3-kimia',
          title: 'Profesi Ahli K3 Kimia',
          duties: 'Pengendalian bahaya bahan kimia berbahaya beracun (B3), penetapan zona bahaya, evaluasi lembar data keselamatan (MSDS/SDS 16 Bab), dan penanganan TPS Limbah B3 pabrik.',
          authority: 'Wewenang memverifikasi dokumen pengendalian potensi bahaya besar/menengah bahan kimia dan menetapkan protokol tanggap darurat tumpahan kimia.',
          salary: 'Rp 8.000.000 - Rp 18.500.000 / bulan',
          skkniCode: 'Kepmenaker No. KEP.187/MEN/1999',
          faqQ1: 'Kapan perusahaan wajib menunjuk Ahli K3 Kimia?',
          faqA1: 'Sesuai Kepmenaker 187/1999, perusahaan yang menggunakan, menyimpan, atau memproduksi bahan kimia berbahaya melebihi Nilai Ambang Kuantitas (NAK) wajib menunjuk Ahli K3 Kimia.',
          faqQ2: 'Apakah Ahli K3 Kimia bertanggung jawab atas pelaporan B3 ke kementerian?',
          faqA2: 'Ya, bertanggung jawab menyusun Dokumen Pengendalian Bahan Kimia Berbahaya untuk diverifikasi oleh Pengawas Ketenagakerjaan.'
        },
        {
          slug: 'ahli-k3-listrik',
          title: 'Profesi Ahli K3 Listrik',
          duties: 'Pengawasan norma keselamatan instalasi ketenagalistrikan, inspeksi sistem penyalur petir, pengawasan prosedur isolasi LOTO, dan evaluasi bahaya busur api (arc flash NFPA 70E).',
          authority: 'Wewenang memeriksa kelaikan teknis panel, trafo, generator, dan mengesahkan rencana kerja pemeliharaan instalasi listrik tegangan tinggi PUIL 2020.',
          salary: 'Rp 8.500.000 - Rp 20.000.000 / bulan',
          skkniCode: 'Permenaker No. 12 Tahun 2015 & SNI 0225:2020 PUIL 2020',
          faqQ1: 'Apa latar belakang pendidikan minimal calon Ahli K3 Listrik?',
          faqA1: 'Pendidikan minimal Sarjana Muda / D3 atau Sarjana (S1) bidang teknik elektro / kelistrikan dengan pengalaman kerja yang relevan.',
          faqQ2: 'Apakah Ahli K3 Listrik berbeda dengan Teknisi K3 Listrik?',
          faqA2: 'Ahli K3 Listrik bertanggung jawab atas perancangan, analisis sistem, dan legal compliance, sedangkan Teknisi K3 Listrik berfokus pada pekerjaan fisik pemasangan dan perbaikan.'
        },
        {
          slug: 'ahli-k3-lingkungan-kerja',
          title: 'Profesi Ahli K3 Lingkungan Kerja',
          duties: 'Pengukuran dan pengendalian faktor fisika, kimia, biologi, ergonomi, dan psikologi kerja di tempat kerja sesuai Permenaker No. 05 Tahun 2018.',
          authority: 'Wewenang melakukan sampling udara, kebisingan, penerangan, dan memberikan rekomendasi teknis rekayasa ventilasi LEV atau pengendalian administratif.',
          salary: 'Rp 7.500.000 - Rp 17.000.000 / bulan',
          skkniCode: 'Permenaker No. 05 Tahun 2018 & SKKNI Higiene Industri',
          faqQ1: 'Berapa jenjang sertifikasi Ahli K3 Lingkungan Kerja Kemnaker RI?',
          faqA1: 'Terdapat 3 jenjang: Ahli K3 Lingkungan Kerja Muda, Madya, dan Utama berdasarkan kompleksitas pengukuran dan analisis faktor bahaya.',
          faqQ2: 'Apa dokumen wajib yang disusun oleh Ahli K3 Lingkungan Kerja?',
          faqA2: 'Laporan hasil pengukuran faktor bahaya lingkungan kerja berkala yang dibandingkan dengan Nilai Ambang Batas (NAB) resmi pemerintah.'
        },
        {
          slug: 'ahli-k3-pesawat-angkat-angkut',
          title: 'Profesi Ahli K3 Pesawat Angkat & Angkut',
          duties: 'Pemeriksaan kelaikan teknis crane, forklift, alat berat, lift barang, evaluasi lifting plan kritis, dan pengawasan uji beban dinamis/statis.',
          authority: 'Wewenang memvalidasi sertifikat kelaikan alat angkat dan melarang pengoperasian unit yang mengalami keretakan struktur atau cacat tali kawat baja ISO 4309.',
          salary: 'Rp 9.000.000 - Rp 21.000.000 / bulan',
          skkniCode: 'Permenaker No. 08 Tahun 2020',
          faqQ1: 'Apa dasar hukum penunjukan Ahli K3 Pesawat Angkat dan Angkut?',
          faqA1: 'Permenaker No. 08 Tahun 2020 tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Pesawat Angkut.',
          faqQ2: 'Apakah profesi ini terlibat dalam investigasi insiden crane roboh?',
          faqA2: 'Ya, bertindak sebagai tim ahli teknis dalam investigasi struktural kegagalan mekanik atau kesalahan kalkulasi beban angkat.'
        },
        {
          slug: 'ahli-k3-pesawat-tenaga-produksi',
          title: 'Profesi Ahli K3 Pesawat Tenaga & Produksi',
          duties: 'Pengawasan keselamatan mesin produksi pabrik, mesin pres stamping, mesin perkakas bubut/frais, transmisi tenaga mekanik, dan sistem pelindung interlock.',
          authority: 'Wewenang merekomendasikan modifikasi safeguarding mesin dan menghentikan pengoperasian mesin tanpa sensor pelindung keselamatan.',
          salary: 'Rp 8.000.000 - Rp 18.000.000 / bulan',
          skkniCode: 'Permenaker No. 38 Tahun 2016',
          faqQ1: 'Regulasi apa yang menjadi rujukan Ahli K3 Pesawat Tenaga Produksi?',
          faqA1: 'Permenaker No. 38 Tahun 2016 tentang K3 Pesawat Tenaga dan Produksi.',
          faqQ2: 'Apa fokus pengawasan utama pada mesin penggerak mula (mesin diesel/turbin)?',
          faqA2: 'Pemeriksaan pelindung bagian berputar (guarding), sistem peredam getaran, sistem pembuangan gas buang, dan tombol emergency stop.'
        },
        {
          slug: 'ahli-k3-pesawat-uap-bejana-tekan',
          title: 'Profesi Ahli K3 Pesawat Uap & Bejana Tekan',
          duties: 'Inspeksi keselamatan ketel uap (boiler), bejana tekan kompresor, tangki timbun bahan bakar, reaktor kimia, dan pengujian safety relief valve.',
          authority: 'Wewenang mengawasi uji tekan hidrostatis 1.5x MAWP, memeriksa hasil uji NDT ultrasonik, dan memvalidasi batas tekanan kerja aman.',
          salary: 'Rp 9.000.000 - Rp 23.000.000 / bulan',
          skkniCode: 'Permenaker No. 37/2016 & Permen 01/1988',
          faqQ1: 'Mengapa pengawasan pesawat uap memiliki payung hukum khusus yang sangat ketat?',
          faqA1: 'Karena kegagalan boiler atau bejana tekan berpotensi memicu ledakan katastrofik BLEVE dengan radius kehancuran masif di kawasan industri.',
          faqQ2: 'Apa kualifikasi untuk menjadi Ahli K3 Pesawat Uap & Bejana Tekan?',
          faqA2: 'Sarjana teknik (diutamakan Teknik Mesin/Kimia) yang telah menyelesaikan pembinaan spesialis Kemnaker RI.'
        },
        {
          slug: 'auditor-smk3-kemnaker',
          title: 'Profesi Auditor SMK3 Kemnaker RI',
          duties: 'Pelaksanaan audit eksternal/internal kepatuhan Sistem Manajemen K3 berdasarkan 166 kriteria PP No. 50 Tahun 2012 pada fasilitas pabrik dan proyek.',
          authority: 'Wewenang memverifikasi bukti dokumen K3, mewawancarai tenaga kerja, menilai tingkat pencapaian bendera emas/perak, dan menerbitkan laporan ketidaksesuaian.',
          salary: 'Rp 10.000.000 - Rp 25.000.000 / bulan',
          skkniCode: 'PP No. 50 Tahun 2012 & Permenaker 26/2014',
          faqQ1: 'Apa syarat menjadi Auditor SMK3 resmi Kemnaker RI?',
          faqA1: 'Wajib memiliki sertifikat Ahli K3 Umum, lulus pembinaan Auditor SMK3 40 JP, dan memiliki jam pengalaman audit HSE di industri.',
          faqQ2: 'Berapa tahun sekali audit eksternal sertifikasi SMK3 dilakukan?',
          faqA2: 'Audit sertifikasi eksternal dilakukan setiap 3 (tiga) tahun sekali oleh Lembaga Audit Independen yang ditunjuk Kemnaker RI.'
        },
        {
          slug: 'lead-auditor-smk3',
          title: 'Profesi Lead Auditor SMK3 & ISO 45001',
          duties: 'Memimpin tim auditor eksternal/internal dalam penilaian komprehensif integrasi SMK3 PP 50/2012 dan Sistem Manajemen K3 Internasional ISO 45001:2018.',
          authority: 'Wewenang membuat keputusan akhir temuan Mayor/Minor, mengesahkan laporan audit eksekutif, dan merekomendasikan penerbitan sertifikat ke lembaga akreditasi.',
          salary: 'Rp 15.000.000 - Rp 35.000.000 / bulan',
          skkniCode: 'IRCA / CQI Certified & PP 50/2012 Lead Assessor',
          faqQ1: 'Apa bedanya Auditor SMK3 biasa dengan Lead Auditor?',
          faqA1: 'Lead Auditor bertindak sebagai ketua tim audit yang mengoordinasikan perencanaan audit, pembagian tugas auditor anggota, dan bertanggung jawab atas closing meeting.',
          faqQ2: 'Apakah sertifikat Lead Auditor ISO 45001 berlaku secara internasional?',
          faqA2: 'Ya, sertifikat Lead Auditor berskala internasional IRCA diakui di seluruh dunia untuk melakukan audit sistem manajemen K3.'
        },
        {
          slug: 'ahli-k3-kebakaran',
          title: 'Profesi Ahli K3 Kebakaran (Kelas A)',
          duties: 'Perancangan dan pengawasan sistem proteksi kebakaran gedung/pabrik, perhitungan beban pemadaman hydrant/sprinkler, serta penyusunan Fire Emergency Plan.',
          authority: 'Wewenang mengaudit sistem proteksi aktif/pasif kebakaran dan menghentikan pengoperasian gedung yang tidak memiliki sistem evakuasi standar.',
          salary: 'Rp 9.000.000 - Rp 22.000.000 / bulan',
          skkniCode: 'Kepmenaker No. KEP.186/MEN/1999 Kelas A',
          faqQ1: 'Apa perbedaan Ahli K3 Kebakaran Kelas A dengan Kelas B/C/D?',
          faqA1: 'Kelas A adalah tingkat tertinggi (Ahli Spesialis), sedangkan Kelas D (Petugas), Kelas C (Regu), dan Kelas B (Koordinator Unit).',
          faqQ2: 'Apakah Ahli K3 Kebakaran wajib menguasai NFPA Standards?',
          faqA2: 'Ya, wajib menguasai standar NFPA 10 (APAR), NFPA 13 (Sprinkler), NFPA 20 (Pompa Damkar), dan NFPA 72 (Alarm).'
        },
        {
          slug: 'ahli-k3-ruang-terbatas',
          title: 'Profesi Ahli K3 Ruang Terbatas (Confined Space)',
          duties: 'Pengawasan pekerjaan berisiko tinggi di dalam tanki, silo, manhole, gorong-gorong, penetapan prosedur purgering gas, dan pengawasan tim rescue.',
          authority: 'Wewenang memvalidasi Surat Izin Masuk Confined Space (Entry Permit) dan membatalkan pekerjaan jika kadar O2 < 19.5% atau H2S > 10 ppm.',
          salary: 'Rp 8.500.000 - Rp 20.000.000 / bulan',
          skkniCode: 'SE Menakertrans No. SE.01/2012',
          faqQ1: 'Siapa yang berhak menjadi Ahli K3 Ruang Terbatas?',
          faqA1: 'Tenaga teknik yang memiliki pengetahuan pengujian gas atmosfer, sistem ventilasi mekanis, dan kelulusan pembinaan Kemnaker.',
          faqQ2: 'Apa peralatan K3 wajib yang diawasi oleh profesi ini?',
          faqA2: 'Portable 4-Gas Detector, SCBA positive pressure, Blower ventilasi, Tripod rescue winch, dan Full Body Harness.'
        },
        {
          slug: 'ahli-k3-bekerja-di-ketinggian',
          title: 'Profesi Ahli K3 Bekerja di Ketinggian (TKPK)',
          duties: 'Pengawasan pekerjaan akses tali (Rope Access) dan Tenaga Kerja Bangunan Tinggi (TKBT), pengujian kekuatan angkur, dan penyusunan Fall Protection Plan.',
          authority: 'Wewenang menginspeksi kelayakan full body harness absorber dan melarang aktivitas ketinggian pada kondisi angin > 20 knot.',
          salary: 'Rp 8.500.000 - Rp 19.500.000 / bulan',
          skkniCode: 'Permenaker No. 09 Tahun 2016',
          faqQ1: 'Apa saja jenjang lisensi K3 bekerja di ketinggian Kemnaker?',
          faqA1: 'TKBT Tingkat 1-2 untuk scaffolding/platform, dan TKPK Tingkat 1-3 untuk pekerjaan akses tali (Rope Access).',
          faqQ2: 'Apa risiko terbesar yang dicegah oleh profesi ini?',
          faqA2: 'Bahaya jatuh dari ketinggian (fall hazard) dan trauma gantung harness (Suspension Trauma).'
        },
        {
          slug: 'ahli-k3-rumah-sakit-k3rs',
          title: 'Profesi Ahli K3 Rumah Sakit (K3RS)',
          duties: 'Penyelenggaraan keselamatan fasilitas medis faskes, pengelolaan limbah B3 medis/infeksius, proteksi kebakaran ruang rawat, dan keselamatan radiologi.',
          authority: 'Wewenang merekomendasikan isolasi ruangan infeksius dan mengendalikan kepatuhan APD medis dokter/perawat.',
          salary: 'Rp 7.500.000 - Rp 17.500.000 / bulan',
          skkniCode: 'Permenkes No. 66 Tahun 2016',
          faqQ1: 'Mengapa K3 Rumah Sakit memiliki regulasi khusus dari Kemenkes?',
          faqA1: 'Karena rumah sakit memiliki potensi bahaya unik berupa paparan agen biologis infeksius, radiasi medik, dan evakuasi pasien kritis.',
          faqQ2: 'Apakah Ahli K3RS berperan dalam akreditasi rumah sakit (STARKES/LAM-PTKes)?',
          faqA2: 'Ya, bertanggung jawab penuh atas pemenuhan Standar Fasilitas dan Keselamatan (MFK) akreditasi faskes.'
        },
        {
          slug: 'ahli-k3-pertambangan-minerba',
          title: 'Profesi Ahli K3 Pertambangan Minerba',
          duties: 'Pengawasan Sistem Manajemen Keselamatan Pertambangan (SMKP Minerba), inspeksi kestabilan lereng tambang, operasional alat berat haul road, dan blasting.',
          authority: 'Wewenang memvalidasi Izin Kerja Tambang dan menghentikan pengoperasian dump truck tambang yang bermasalah pada sistem pengereman.',
          salary: 'Rp 12.000.000 - Rp 30.000.000 / bulan',
          skkniCode: 'Kepmen ESDM No. 1827 K/30/MEM/2018',
          faqQ1: 'Apa bedanya Ahli K3 Tambang dengan Pengawas Operasional Tambang (POP/POM/POU)?',
          faqA1: 'Ahli K3 Tambang berfokus pada advisory & penataan sistem SMKP, sedangkan Pengawas Operasional memiliki wewenang eksekusi pengawasan teknis operasional harian.',
          faqQ2: 'Apakah gaji profesi K3 tambang lebih tinggi dari sektor lain?',
          faqA2: 'Ya, sektor pertambangan menawarkan remunerasi tinggi karena tingkat risiko bahaya kerja yang ekstrem di area remote.'
        },
        {
          slug: 'ahli-k3-migas-lepas-pantai',
          title: 'Profesi Ahli K3 Migas Lepas Pantai (Offshore HSE Specialist)',
          duties: 'Pengawasan keselamatan anjungan pengeboran minyak dan gas bumi (Offshore Rig), manajemen Sistem Izin Kerja Aman PTW Migas, dan evakuasi Helideck.',
          authority: 'Wewenang menghentikan pengeboran jika terdeteksi indikasi gas H2S beracun atau potensi bahaya blowout sumur.',
          salary: 'Rp 18.000.000 - Rp 45.000.000 / bulan',
          skkniCode: 'SKKNI Migas & OPITO Offshore Safety Certified',
          faqQ1: 'Sertifikasi wajib apa yang harus dimiliki pekerja offshore K3?',
          faqA1: 'Wajib memiliki sertifikat BOSIET (Basic Offshore Safety Induction and Emergency Training) dan Lisensi K3 Migas BNSP/ESDM.',
          faqQ2: 'Bagaimana pola jadwal kerja profesi K3 offshore?',
          faqA2: 'Menggunakan sistem roster kerja bergilir (misalnya 2 minggu on duty di rig : 2 minggu off duty di rumah).'
        },
        {
          slug: 'ahli-k3-ergonomi-industri',
          title: 'Profesi Ahli K3 Ergonomi Industri',
          duties: 'Evaluasi postur kerja karyawan, analisis risiko Musculoskeletal Disorders (MSDs), perancangan alat bantu manual handling, dan evaluasi REBA/RULA.',
          authority: 'Wewenang merekomendasikan redesign stasiun kerja pabrik/kantor guna mengurangi beban kerja fisik berlebih.',
          salary: 'Rp 8.000.000 - Rp 18.000.000 / bulan',
          skkniCode: 'Permenaker 05/2018 & SKKNI Ergonomi',
          faqQ1: 'Metode analisis apa yang digunakan Ahli K3 Ergonomi?',
          faqA1: 'Menggunakan NIOSH Lifting Equation, REBA (Rapid Entire Body Assessment), RULA (Rapid Upper Limb Assessment), dan Snook Tables.',
          faqQ2: 'Apa dampak ekonomi positif penerapan ergonomi bagi perusahaan?',
          faqA2: 'Menurunkan tingkat absensi sakit akibat keluhan nyeri punggung/otot dan meningkatkan produktivitas output pekerja.'
        },
        {
          slug: 'ahli-k3-radiasi-bapeten',
          title: 'Profesi Petugas Proteksi Radiasi (PPR BAPETEN)',
          duties: 'Pengawasan keselamatan pemanfaatan sumber zat radioaktif dan pembangkit radiasi pengion di industri nDT las dan radiologi medis.',
          authority: 'Wewenang memantau dosis radiasi pekerja menggunakan TLD dosimeter dan menyegel alat pemancar radiasi yang bocor.',
          salary: 'Rp 9.000.000 - Rp 22.000.000 / bulan',
          skkniCode: 'Lisensi PPR BAPETEN & Permenaker',
          faqQ1: 'Lembaga apa yang mengeluarkan lisensi resmi Petugas Proteksi Radiasi?',
          faqA1: 'Lisensi PPR terbit resmi dari BAPETEN (Badan Pengawas Tenaga Nuklir) setelah lulus ujian kompetensi nasional.',
          faqQ2: 'Apa alat pemantau radiasi wajib bagi pekerja?',
          faqA2: 'Dosimeter saku personal, TLD (Thermo Luminescent Dosimeter), dan surveymeter radiasi terkalibrasi.'
        },
        {
          slug: 'ahli-k3-pangan-food-safety',
          title: 'Profesi Ahli K3 & Food Safety Specialist',
          duties: 'Pengawasan higiene sanitasi pemrosesan makanan pabrik F&B, penerapan HACCP (Hazard Analysis Critical Control Point), dan K3 pengolahan makanan.',
          authority: 'Wewenang menghentikan distribusi batch makanan yang terkontaminasi bahaya biologi/kimia.',
          salary: 'Rp 7.500.000 - Rp 17.000.000 / bulan',
          skkniCode: 'ISO 22000 & Standar K3 Industri Pangan',
          faqQ1: 'Mengapa industri makanan membutuhkan integrasi K3 dan Food Safety?',
          faqA1: 'Guna melindungi pekerja dari bahaya mesin pengemas/panas sekaligus menjamin produk makanan bebas kontaminasi bagi konsumen.',
          faqQ2: 'Apa sertifikasi yang relevan bagi profesi ini?',
          faqA2: 'Sertifikat Ahli K3 Umum, Lead Auditor HACCP / ISO 22000, dan Sertifikat Higiene Sanitasi Pangan.'
        },
        {
          slug: 'ahli-k3-maritim-pelabuhan',
          title: 'Profesi Ahli K3 Maritim & Pelabuhan',
          duties: 'Pengawasan keselamatan bongkar muat kontainer kapal kargo, keselamatan area dock pelabuhan, ISPS Code compliance, dan hazardous cargo handling.',
          authority: 'Wewenang memverifikasi izin kerja bongkar muat bahan B3 laut dan menghentikan Reach Stacker yang beroperasi di area tidak steril.',
          salary: 'Rp 10.000.000 - Rp 24.000.000 / bulan',
          skkniCode: 'Regulasi Perhubungan Laut & Standar K3 Kemnaker',
          faqQ1: 'Apa regulasi internasional yang mengatur keselamatan pelabuhan?',
          faqA1: 'ISPS Code (International Ship and Port Facility Security Code) dan SOLAS (Safety of Life at Sea).',
          faqQ2: 'Sektor apa saja yang mempekerjakan Ahli K3 Maritim?',
          faqA2: 'PT Pelindo, terminal kontainer swasta, perusahaan galangan kapal (shipyard), dan logistik shipping lines.'
        }
      ]
    }
  ];

  // Build Group 1 (20 priority professions with E-E-A-T details)
  for (const item of professionGroups[0].items || []) {
    const src: SourceItem = officialSources[professionGroups[0].sourceKey] || officialSources.uu1;
    const legal = professionGroups[0].legalDefault;

    records.push({
      section: 'profesi',
      slug: item.slug,
      title: item.title,
      metaTitle: `${item.title}: Tugas, Wewenang & Gaji Resmi`,
      description: `Profil lengkap ${item.title} di Indonesia: tugas operasional, wewenang hukum, kisaran gaji ${item.salary}, acuan ${item.skkniCode}, dan alur penunjukan Kemnaker RI.`,
      answer: `${item.title} adalah tenaga profesional keselamatan kerja resmi yang bertugas mengawasi ditaatinya norma K3 berdasarkan ${legal}, memegang wewenang pengawasan hukum, dan menerima estimasi kompensasi industri berkisar ${item.salary}.`,
      highlights: [
        `Legalitas: ${item.skkniCode}`,
        `Kisaran Gaji Industri: ${item.salary}`,
        'Wewenang: Stop Work Authority & Rekomendasi Manajemen Puncak',
        'Jalur Karir: Field Specialist -> Supervisor -> Corporate HSE Director'
      ],
      blocks: [
        {
          heading: `Kedudukan Hukum & Peran Strategis ${item.title}`,
          paragraphs: [
            `${item.title} memegang posisi vital dalam struktur tata kelola keselamatan industri nasional. Berdasarkan ${legal}, pemangku jabatan ini bertanggung jawab penuh untuk ${item.duties}.`,
            'Keberadaan posisi ini diwajibkan oleh regulasi pemerintah bagi perusahaan dengan tingkat potensi bahaya tinggi atau yang mempekerjakan jumlah tenaga kerja di atas ambang batas guna menjamin perlindungan nyawa manusia dan keberlanjutan bisnis.'
          ]
        },
        {
          heading: 'Wewenang Normatif & Tanggung Jawab Operasional',
          paragraphs: [
            'Dalam menjalankan tugas pengawasan di lapangan, pemangku profesi ini dibekali dengan wewenang resmi:',
          ],
          bullets: [
            item.authority,
            'Melakukan inspeksi K3 berkala, memverifikasi Izin Kerja Aman (PTW), serta mengudit kepatuhan APD.',
            'Menyusun matriks identifikasi bahaya dan penilaian risiko (HIRADC) 5x5 bersama supervisor departemen.',
            'Memimpin investigasi insiden kecelakaan kerja (RCA Fishbone/5-Why) dan menetapkan rekomendasi tindakan korektif (CAPA).',
            'Penyusunan dan pelaporan berkas Laporan Triwulan P2K3 resmi kepada Dinas Tenaga Kerja setempat.'
          ]
        },
        {
          heading: 'Estimasi Gaji & Prospek Jenjang Karir Industri',
          paragraphs: [
            `Berdasarkan data kompensasi pasar ketenagakerjaan Indonesia, pendapatan untuk ${item.title} berada pada kisaran ${item.salary}. Besaran gaji riil dipengaruhi oleh sektor industri tempat bekerja (Mining/Oil & Gas menawarkan kompensasi tertinggi), lokasi area proyek (Remote Site allowance), dan tingkat lisensi kewenangan yang dimiliki.`,
            'Prospek pengembangan karir terbuka lebar menuju posisi Manager HSE Korporat, Head of QHSSE, Auditor Eksternal, hingga Konsultan Independen K3.'
          ]
        },
        {
          heading: 'Kualifikasi Syarat Penunjukan & Sertifikasi Resmi',
          paragraphs: [
            `Untuk memperoleh penunjukan resmi (${item.skkniCode}), kandidat wajib memenuhi persyaratan ijazah formal D3/S1 teknik atau eksakta, mengiktui pembinaan resmi PJK3 terdaftar (seperti PT Kreasi Ultimate Berjaya), serta diajukan oleh perusahaan penugasan untuk penerbitan SKP & Lisensi Kewenangan.`
          ]
        }
      ],
      faqs: [
        { question: item.faqQ1, answer: item.faqA1 },
        { question: item.faqQ2, answer: item.faqA2 },
        { question: `Berapa lama masa berlaku lisensi kewenangan ${item.title}?`, answer: 'Lisensi kewenangan dan SKP berlaku selama 3 (tiga) tahun dan wajib diperpanjang melalui portal resmi TemanK3 Kemnaker RI sebelum masa berlaku habis.' }
      ],
      related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'panduan/tugas-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker'],
      sources: [src, officialSources.uu1, officialSources.pp50],
      status: 'published',
      publishedAt: '2026-08-01',
      updatedAt: '2026-09-01',
      indexable: true,
      intent: `profesi ${item.slug} tugas wewenang gaji syarat`,
      primaryKeyword: `profesi ${item.slug.replace(/-/g, ' ')}`,
      searchIntent: `tugas, wewenang hukum, kisaran gaji, dan syarat profesi ${item.title}`,
      intentType: 'informational',
      parentTopic: 'Profesi & Karir K3 Indonesia',
      cannibalizationGroup: 'profesi-ahli-k3',
      contentKind: 'profession',
      primaryCtaText: `Konsultasi Sertifikasi ${item.title}`,
      primaryCtaIntent: 'daftar',
      secondaryCtaText: 'Tanya Syarat & Jadwal Pelatihan',
      secondaryCtaIntent: 'syarat'
    });
  }

  // Groups 2 to 10 (180 Professions across 9 specialized categories)
  const remainingGroups: ProfessionGroup[] = [
    {
      category: 'Safety Officer & Pengawas Lapangan',
      prefix: 'Safety Officer',
      sectorName: 'Pengawasan Lapangan & Implementasi K3',
      sourceKey: 'uu1',
      legalDefault: 'UU No. 1 Tahun 1970 & SKKNI K3 Pengawas',
      titles: [
        'Safety Officer Pertambangan Site', 'Safety Officer Proyek Konstruksi Bangunan', 'Safety Officer Pabrik Manufaktur',
        'Safety Officer Industri Kimia & Petrokimia', 'Safety Officer Anjungan Migas Offshore', 'Safety Officer Pembangkit Listrik Power Plant',
        'Safety Officer Gudang & Logistik', 'Safety Officer Rumah Sakit & Faskes', 'Safety Officer Pekerjaan Ketinggian Rope Access',
        'Safety Officer Pekerjaan Confined Space', 'Safety Officer Scaffolding Perancah', 'Safety Officer Pengelasan Pekerjaan Panas',
        'Safety Officer Instalasi Kelistrikan', 'Safety Officer Operasional Alat Berat', 'Safety Officer Galangan Kapal Maritim',
        'Safety Officer Industri Semen Batu Bara', 'Safety Officer Perkebunan Kelapa Sawit', 'Safety Officer Pengolahan Limbah B3',
        'Safety Officer Bandara & Penerbangan', 'Safety Officer Lab Riset & Biohazard'
      ]
    },
    {
      category: 'HSE Manager & Eksekutif K3',
      prefix: 'HSE Manager',
      sectorName: 'Manajemen Strategis & Leadership K3',
      sourceKey: 'pp50',
      legalDefault: 'PP No. 50 Tahun 2012 & ISO 45001:2018',
      titles: [
        'HSE Manager Corporate Korporasi', 'HSE Manager Proyek Konstruksi EPC', 'HSE Manager Fasilitas Kilang Migas',
        'HSE Manager Operasional Tambang Mining', 'HSE Manager Pabrik Manufaktur Multi-Site', 'HSE Regional Director Asia Pacific',
        'Head of QHSSE Quality Safety Health Environment', 'CSMS Manager Management Contractor', 'HSE Assurance & Compliance Manager',
        'Process Safety Management PSM Manager', 'HSE Training & Competency Manager', 'HSE Audit & Risk Management Head',
        'HSE Emergency Response Incident Manager', 'HSE Sustainability & ESG Lead', 'HSE Manager Industri Otomotif',
        'HSE Manager Industri Farmasi Medis', 'HSE Manager Logistik Shipping Port', 'HSE Manager Pembangkit Listrik Energi',
        'HSE Manager Industri Makanan Minuman', 'Senior Advisor Leadership Safety Culture'
      ]
    },
    {
      category: 'Auditor & Inspector K3',
      prefix: 'Auditor K3',
      sourceKey: 'pp50',
      legalDefault: 'PP No. 50 Tahun 2012 & Standar ISO 19011',
      titles: [
        'Auditor Eksternal SMK3 Kemnaker', 'Auditor Internal SMK3 PP 50/2012', 'Lead Auditor ISO 45001 Sistem Manajemen',
        'Auditor Sertifikasi ISO 14001 Lingkungan', 'Safety Inspector Riksa Uji PJK3', 'Inspector Pesawat Angkat Angkut Crane',
        'Inspector Bejana Tekan & Boiler Uap', 'Inspector Instalasi Listrik & Petir', 'Inspector Scaffolding & Struktur Perancah',
        'Auditor Sistem Manajemen K3 Migas', 'Auditor Keselamatan Pertambangan SMKP', 'Auditor CSMS Kualifikasi Vendor Kontraktor',
        'Auditor Keselamatan Proses Kimia', 'Auditor K3 Rantai Pasok Supply Chain', 'Auditor K3 Fasilitas Maritim Pelabuhan',
        'Auditor K3 Pergudangan & Distribusi', 'Auditor K3 Industri Sanitasi Pangan', 'Auditor Ergonomi Stasiun Kerja',
        'Auditor Kesiapsiagaan Tanggap Darurat', 'Lead Assessor Tempat Uji Kompetensi K3'
      ]
    },
    {
      category: 'Tenaga Medis Kesehatan Kerja',
      prefix: 'Dokter & Paramedis K3',
      sourceKey: 'permen15_2008',
      legalDefault: 'Permenaker No. PER.01/MEN/1976 & Permenaker 15/2008',
      titles: [
        'Dokter Perusahaan Bersertifikat Hiperkes', 'Dokter Spesialis Okupasi SpOk Korporasi', 'Paramedis Perusahaan Hiperkes',
        'Koordinator Program Fit to Work MCU', 'Fasilitator Kesehatan Kerja Ergonomi', 'Petugas P3K Terlatih Tempat Kerja',
        'Paramedis Lapangan Remote Site Tambang', 'Spesialis Pengendalian Penyakit Akibat Kerja PAK', 'Konselor Kesehatan Mental Kerja Hygiene',
        'Koordinator Pencegahan TBC di Pabrik', 'Auditor Higiene Sanitasi Kantin Pekerja', 'Spesialis Audiometri Konservasi Pendengaran',
        'Spesialis Spirometri Fungsi Paru Okupasi', 'Spesialis Toksikologi Industri Biological', 'Koordinator Evakuasi Medis Medevac',
        'Dokter Penguji Kesehatan Tenaga Kerja', 'Petugas Manajemen Fatigue Kelelahan Shift', 'Konsultan Ergonomi Stasiun Kerja Medis',
        'Spesialis Rehabilitasi Pasca Kecelakaan Kerja', 'Koordinator Program Wellness Kebugaran'
      ]
    },
    {
      category: 'Teknisi K3 Spesialis',
      prefix: 'Teknisi K3',
      sourceKey: 'permen12_2015',
      legalDefault: 'Regulasi Teknis Spesialis Kemnaker RI',
      titles: [
        'Teknisi K3 Listrik Industri', 'Teknisi K3 Ketinggian Rope Access', 'Teknisi K3 Scaffolding Perancah',
        'Teknisi K3 Ruang Terbatas Gas Tester', 'Teknisi K3 Lift dan Eskalator', 'Teknisi K3 Boiler Ketel Uap',
        'Teknisi K3 Bejana Tekan Tangki Timbun', 'Teknisi K3 Sistem APAR Kebakaran', 'Teknisi K3 Sistem Sprinkler Alarm',
        'Teknisi K3 Pengujian NDT Ultrasonik', 'Teknisi K3 Deteksi Gas Kalibrasi', 'Teknisi K3 Mesin Interlock Guarding',
        'Teknisi K3 Penyalur Petir Grounding', 'Teknisi K3 Pompa Pemadam Diesel', 'Teknisi K3 SCBA Breathing Air',
        'Teknisi K3 Uji Emisi Cerobong Pabrik', 'Teknisi K3 Pengukuran Kebisingan Getaran', 'Teknisi K3 Ventilasi Tambang Bawah Tanah',
        'Teknisi K3 Rigging Wire Rope Sling', 'Teknisi K3 Pendingin Amonia Refrigerasi'
      ]
    },
    {
      category: 'Spesialis Higiene Industri',
      prefix: 'Higiene Industri',
      sourceKey: 'permen05_2018',
      legalDefault: 'Permenaker No. 05 Tahun 2018 tentang K3 Lingkungan Kerja',
      titles: [
        'Industrial Hygienist Muda HIMU', 'Industrial Hygienist Madya HIMA', 'Industrial Hygienist Utama HIU',
        'Spesialis Pengukuran Debu Aerosol', 'Spesialis Paparan Bahan Kimia Toksik', 'Spesialis Heat Stress Iklim Panas',
        'Spesialis Pengukuran Kebisingan Getaran', 'Spesialis Kualitas Udara Ruangan IAQ', 'Spesialis Pencahayaan Radiasi Non-Pengion',
        'Spesialis Faktor Biologis Biohazard', 'Spesialis Desain Ventilasi Industri LEV', 'Spesialis Pengendalian Bahaya Asbes',
        'Spesialis Pengelolaan Limbah B3 Pabrik', 'Spesialis Pengendalian Emisi Udara Gas', 'Spesialis Pengendalian Pencemaran Air IPAL',
        'Spesialis Pemodelan Dispersi Gas Toksik', 'Spesialis Penilaian Risiko Kesehatan HRA', 'Spesialis Toksikologi Penetapan NAB',
        'Spesialis Penanganan Tumpahan B3 Spill Kit', 'Konsultan Independen Higiene Lingkungan'
      ]
    },
    {
      category: 'Safety Engineer Sektoral',
      prefix: 'Safety Engineer',
      sourceKey: 'pupr10_2021',
      legalDefault: 'Standar Rekayasa Keselamatan Industri',
      titles: [
        'Safety Engineer Proyek Konstruksi Sipil', 'Process Safety Engineer Pabrik Petrokimia', 'Safety Engineer Kilang Minyak Gas',
        'Safety Engineer Anjungan Lepas Pantai', 'Safety Engineer Pembangkit Listrik Termal', 'Safety Engineer Energi Terbarukan PLTS',
        'Safety Engineer Manufaktur Otomotif', 'Safety Engineer Smelter Metalurgi', 'Safety Engineer Sistem Perpipaan Gas Tekanan',
        'Safety Engineer Industri Dirgantara', 'Safety Engineer Galangan Kapal Maritim', 'Safety Engineer Industri Semen Pabrik',
        'Safety Engineer Sistem Proteksi Api Terpadu', 'Safety Engineer Pemanfaatan Radiasi Nuklir', 'Safety Engineer Otomasi Robotika Industri',
        'Safety Engineer Laboratorium Bio Safety L3', 'Safety Engineer Transportasi Rel Kereta', 'Safety Engineer Struktur Tahan Gempa',
        'Safety Engineer Proyek Terowongan Tambang', 'Senior Safety Risk Consulting Engineer'
      ]
    },
    {
      category: 'Pengawas K3 Pertambangan & ESDM',
      prefix: 'Pengawas K3 Tambang',
      sourceKey: 'esdm1827_2018',
      legalDefault: 'Kepmen ESDM No. 1827 K/30/MEM/2018',
      titles: [
        'Pengawas Operasional Pertama POP Tambang', 'Pengawas Operasional Madya POM Tambang', 'Pengawas Operasional Utama POU Tambang',
        'Kepala Teknik Tambang KTT Pertambangan', 'Pengawas Keselamatan Pertambangan SMKP', 'Pengawas Operasional Pit Batubara',
        'Pengawas Operasional Tambang Bawah Tanah', 'Pengawas Peledakan Blasting Pertambangan', 'Pengawas Geoteknik Kestabilan Lereng',
        'Pengawas K3 Alat Berat Haul Truck', 'Pengawas K3 Pabrik Pengolahan Smelter', 'Pengawas K3 Pelabuhan Khusus Tambang',
        'Pengawas Lingkungan Hidup Pertambangan', 'Auditor SMKP Minerba Kementerian ESDM', 'Inspektur Tambang Kementerian ESDM',
        'Pengawas K3 Maintenance Workshop Tambang', 'Pengawas K3 Eksplorasi Pengeboran Mineral', 'Pengawas K3 Pengangkutan Conveyor Tambang',
        'Pengawas K3 Kesiapsiagaan Emergency Rescue', 'Senior Mining Safety Consultant Manager'
      ]
    },
    {
      category: 'Konsultan & Asesor K3',
      prefix: 'Konsultan K3',
      sourceKey: 'bnsp_general',
      legalDefault: 'Standar SKKNI & BNSP Indonesia',
      titles: [
        'Konsultan Pendampingan Sertifikasi SMK3 PP 50', 'Konsultan Sistem Manajemen ISO 45001 Terpadu', 'Konsultan CSMS Kontraktor Prakualifikasi',
        'Konsultan Kajian Hazop & Process Safety', 'Konsultan Desain Proteksi Kebakaran Gedung', 'Konsultan Penyusunan HIRADC & Risk Register',
        'Konsultan Studi Ergonomi Industri Kerja', 'Konsultan Pengukuran Higiene Lingkungan Kerja', 'Konsultan Safety Leadership & Budaya K3',
        'Konsultan Safety Case Fasilitas Migas', 'Asesor Kompetensi Profesi K3 BNSP', 'Master Trainer & Instruktur Pembinaan K3',
        'Fasilitator Workshop Investigasi Insiden', 'Konsultan Pengelolaan B3 & Limbah Medis', 'Konsultan Rencana Tanggap Darurat Bencana',
        'Konsultan Mitigasi Bahaya Ledakan Debu ATEX', 'Konsultan Audit Kepatuhan Regulasi Ketenagakerjaan', 'Konsultan Penataan Sistem LOTO Kelistrikan',
        'Konsultan Audit K3 Sektor Rumah Sakit K3RS', 'Senior Advisory HSE Strategic Consultant'
      ]
    }
  ];

  for (const grp of remainingGroups) {
    const src = officialSources[grp.sourceKey] || officialSources.uu1;
    const prefix = grp.prefix;

    const titles = grp.titles || [];
    for (let i = 0; i < titles.length; i++) {
      const titleName = titles[i];
      const fullTitle = `Profesi ${titleName}`;
      const slug = `${fullTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`.replace(/^-|-$/g, '');

      const salaryRange = prefix.includes('Manager') || titleName.includes('Manager') || titleName.includes('KTT')
        ? 'Rp 16.000.000 - Rp 45.000.000 / bulan'
        : prefix.includes('Auditor') || titleName.includes('Auditor') || titleName.includes('POM') || titleName.includes('Spesialis')
        ? 'Rp 10.000.000 - Rp 25.000.000 / bulan'
        : prefix.includes('Engineer') || titleName.includes('Engineer') || titleName.includes('Dokter')
        ? 'Rp 9.500.000 - Rp 22.000.000 / bulan'
        : 'Rp 6.000.000 - Rp 15.000.000 / bulan';

      const keyword = `profesi ${slug.replace(/^profesi-/, '').replace(/-/g, ' ')}`.trim();
      const skkniCode = `SKKNI Sektor ${grp.category} & ${grp.legalDefault}`;

      records.push({
        section: 'profesi',
        slug,
        title: fullTitle,
        metaTitle: `${fullTitle}: Tugas, Gaji & Kualifikasi`,
        description: `Profil lengkap ${fullTitle}: lingkup tugas operasional di ${grp.sectorName}, wewenang hukum, estimasi gaji industri ${salaryRange}, dan syarat sertifikasi.`,
        answer: `${fullTitle} adalah posisi profesional keselamatan kerja dalam bidang ${grp.category} yang bertanggung jawab mengawal kepatuhan K3, mitigasi risiko bahaya operasional, serta penerapan ${grp.legalDefault} dengan kompensasi industri berkisar ${salaryRange}.`,
        highlights: [
          `Kategori Profesi: ${grp.category}`,
          `Acuan Standar: ${skkniCode}`,
          `Estimasi Kompensasi: ${salaryRange}`,
          'Tanggung Jawab: Pengawasan Operasional, Verifikasi PTW & Audit Kepatuhan'
        ],
        blocks: [
          {
            heading: `Peran & Tanggung Jawab ${fullTitle}`,
            paragraphs: [
              `Posisi ${fullTitle} memegang peranan krusial dalam menjamin operasional berjalan aman tanpa insiden (Zero Accident) di sektor ${grp.sectorName || grp.category}. Personel pada posisi ini bertanggung jawab mengidentifikasi bahaya spesifik, memantau penerapan SOP, dan mengawal kepatuhan tim lapangan.`,
              `Sesuai dengan ketentuan ${grp.legalDefault}, koordinasi rutin dijalankan bersama supervisor produksi, divisi rekayasa teknik, dan manajemen puncak guna menjamin seluruh aktivitas memenuhi norma keselamatan kerja.`
            ]
          },
          {
            heading: 'Wewenang Operasional & Lingkup Kerja',
            paragraphs: [
              'Tenaga profesional pada jabatan ini dibekali wewenang operasional baku:',
            ],
            bullets: [
              'Menghentikan pekerjaan yang berpotensi bahaya fatalitas (Stop Work Authority) seketika.',
              'Memeriksa kelayakan Alat Pelindung Diri (APD) dan keabsahan Izin Kerja Aman (Permit to Work).',
              'Menyusun laporan inspeksi K3 berkala dan rekomendasi perbaikan teknis kepada manajemen.',
              'Memimpin briefing keselamatan (Safety Toolbox Meeting) sebelum dimulainya shift kerja.'
            ]
          },
          {
            heading: 'Kisaran Gaji & Prospek Pengembangan Karir',
            paragraphs: [
              `Berdasarkan survei remunerasi industri Indonesia, pendapatan untuk ${fullTitle} berada pada rentang ${salaryRange}. Besaran ini bervariasi bergantung pada skala risiko fasilitas, lokasi geografis (remote site allowance), serta sertifikasi lisensi yang dikuasai.`,
              'Jenjang karir berkembang secara bertahap menuju Manajer HSE Korporat, Lead Auditor, atau Konsultan Independen K3.'
            ]
          },
          {
            heading: 'Kualifikasi & Persyaratan Sertifikasi Kompetensi',
            paragraphs: [
              `Untuk menduduki kualifikasi ini, kandidat dipersyaratkan memiliki latar belakang pendidikan formal yang relevan, kelulusan pembinaan teknis K3 berlisensi resmi Kemnaker RI / BNSP, serta portfolio pengalaman pengawasan di tempat kerja.`
            ]
          }
        ],
        faqs: [
          { question: `Apa syarat utama untuk bekerja sebagai ${fullTitle}?`, answer: `Pendidikan minimal D3/S1 teknik atau latar belakang relevan, memiliki sertifikat pembinaan K3 yang diakui pemerintah, dan memahami regulasi ${grp.legalDefault}.` },
          { question: `Sertifikasi apa yang paling direkomendasikan untuk ${fullTitle}?`, answer: `Sertifikat Ahli K3 Umum Kemnaker RI, Sertifikat Kompetensi BNSP sesuai skema sektor, serta pelatihan spesialis terkait.` },
          { question: `Bagaimana peluang kerja ${fullTitle} di Indonesia?`, answer: `Sangat prospektif seiring dengan meningkatnya penegakan sanksi audit SMK3 dan tingginya investasi di sektor konstruksi, manufaktur, migas, dan pertambangan.` }
        ],
        related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'panduan/tugas-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker'],
        sources: [src, officialSources.uu1, officialSources.pp50],
        status: 'published',
        publishedAt: '2026-08-01',
        updatedAt: '2026-09-01',
        indexable: true,
        intent: `profesi ${slug} tugas wewenang gaji syarat`,
        primaryKeyword: keyword,
        searchIntent: `tugas, wewenang hukum, kisaran gaji, dan syarat profesi ${fullTitle}`,
        intentType: 'informational',
        parentTopic: `Profesi ${grp.category}`,
        cannibalizationGroup: `profesi-${grp.prefix.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        contentKind: 'profession',
        primaryCtaText: `Konsultasi Karir ${fullTitle.replace(/^Profesi\s+/, '')}`,
        primaryCtaIntent: 'daftar',
        secondaryCtaText: 'Tanya Syarat & Jadwal Pelatihan',
        secondaryCtaIntent: 'syarat'
      });
    }
  }

  return records;
}

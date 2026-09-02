import { ContentRecordInput } from './build-inventory';
import { officialSources } from './sources';

interface AlatCluster {
  category: string;
  prefix: string;
  sourceKey: string;
  standardDefault: string;
  items: string[];
}

export function generateAlatRecords(): ContentRecordInput[] {
  const records: ContentRecordInput[] = [];

  const alatClusters: AlatCluster[] = [
    {
      category: 'APD Kepala, Mata, Telinga & Pernapasan',
      prefix: 'APD Kepala-Napas',
      sourceKey: 'uu1',
      standardDefault: 'Permenaker No. 08/2010 & Standar SNI/ANSI/EN',
      items: [
        'Safety Helmet Standar SNI 8052 (Helm Keselamatan Kerja)', 'Helm Safety Khusus Pekerja Ketinggian (Climbing Style Helmet)',
        'Helm Safety Tahan Tegangan Listrik Tinggi Dielektrik', 'Helm Safety Berventilasi untuk Lingkungan Panas Lapangan',
        'Kacamata Pengaman Keselamatan (Safety Glasses Clear ANSI Z87.1)', 'Kacamata Pengaman Lensa Gelap Anti Silau (Tinted Safety Glasses)',
        'Kacamata Goggle Anti Percikan Kimia Korosif (Chemical Splash Goggles)', 'Pelindung Wajah Penuh Polikarbonat (Full Face Shield Clear)',
        'Topeng Las Otomatis Penggelap (Auto-Darkening Welding Helmet)', 'Pelindung Wajah Khusus Bahaya Arc Flash Listrik (Arc Flash Face Shield)',
        'Sumbat Telinga Busa Sekali Pakai (Disposable Foam Earplugs)', 'Sumbat Telinga Karet Bertali Dapat Dicuci (Reusable Corded Earplugs)',
        'Penutup Telinga Peredam Bising Tinggi (Earmuffs NRR 30 dB)', 'Penutup Telinga Terpasang pada Helm (Cap-Mounted Earmuffs)',
        'Penutup Telinga Elektronik Komunikasi Radio (Electronic Noise Cancelling Earmuffs)', 'Masker Debu Partikulat Sekali Pakai Standar N95 / KN95',
        'Masker Partikulat Berkatup Pernapasan (N95 Valved Respirator)', 'Masker Partikulat Tahan Minyak Standar P100 / FFP3',
        'Respirator Setengah Wajah Elastomerik (Half Facepiece Respirator)', 'Respirator Wajah Penuh Polikarbonat (Full Facepiece Respirator)',
        'Kartrid Filter Uap Organik Pelarut Cat (Organic Vapor Cartridge)', 'Kartrid Filter Gas Asam Klorin & Asam Sulfat (Acid Gas Cartridge)',
        'Kartrid Filter Gas Amonia & Metilamin (Ammonia Cartridge)', 'Kartrid Filter Kombinasi Gas & Partikulat Toksik Multi-Gas',
        'Alat Bantu Pernapasan Udara Bertekanan Mandiri (SCBA 300 Bar)', 'Peralatan Pernapasan Jalur Udara Berkelanjutan (Airline Breathing Apparatus)',
        'Respirator Pemurni Udara Bertenaga Baterai (PAPR System)', 'Masker Pelarian Darurat Evakuasi Gas Toksik (Emergency Escape Breathing Device - EEBD)',
        'Hood Pelindung Kepala Penghembus Pasir (Sandblasting Helmet & Air Hood)', 'Kacamata Pengaman Lensa Anti Kabut & Anti Gores Premium',
        'Pelindung Dagu & Tali Dagu 4 Titik Helm Ketinggian', 'Kaca Pengaman Goggle Khusus Pemotongan Gas Oksiasetilen (Shade 5)',
        'Kaca Filter Topeng Las Listrik Kaca Gelap (Shade 10-12)', 'Penutup Kepala Higienis Disposable Bouffant Cap Ruang Bersih',
        'Balaklava Kain Tahan Api Nomex Pelindung Leher & Wajah', 'Tudung Kepala Pelindung Percikan Bahan Kimia Kuat (Chemical Hood)',
        'Kotak Penyimpanan Higienis Masker Respirator Silikon', 'Alat Uji Kerapatan Masker Respirator Kit Kualitatif',
        'Kain Pembersih Lensa Kacamata Safety Bebas Alkohol', 'Tempat Wadah Pemasangan APD Terpadu (PPE Dispenser Station)'
      ]
    },
    {
      category: 'APD Tubuh, Tangan, Kaki & Proteksi Jatuh',
      prefix: 'APD Tubuh-Kaki',
      sourceKey: 'permen09_2016',
      standardDefault: 'Permenaker No. 09/2016 & Standar EN 361 / ASTM',
      items: [
        'Sabuk Pengaman Tubuh Penuh (Full Body Harness 4-Point D-Ring)', 'Tali Pengaman Ganda dengan Peredam Kejut (Double Lanyard Shock Absorber)',
        'Tali Penahan Jatuh Otomatis Menarik (Self-Retracting Lifeline - SRL)', 'Tali Pemosisi Kerja Ketinggian Dapat Diatur (Work Positioning Lanyard)',
        'Alat Pencegah Jatuh Bergerak pada Tali (Rope Grab / Mobile Fall Arrester)', 'Tali Keselamatan Vertikal Kernmantle 11mm (Vertical Lifeline Rope)',
        'Tali Keselamatan Horizontal Baja Portabel (Temporary Horizontal Lifeline)', 'Konektor Pengunci Karabiner Baja Putar Otomatis (Auto-Locking Steel Carabiner)',
        'Tali Anyaman Webbing Sling Titik Tambat Angkur (Anchor Strop Webbing)', 'Klem Balok Baja Titik Tambat Portabel (Beam Anchor Clamp)',
        'Sepatu Keselamatan Kulit Ujung Baja Standar S1P/S3 (Safety Shoes)', 'Sepatu Bot Karet Pengaman Tahan Kimia & Air (Safety Rubber Gumboots)',
        'Sepatu Keselamatan Ujung Komposit Non-Metalik (Composite Toe Shoes)', 'Sepatu Keselamatan Bahaya Sengatan Listrik EH (Electrical Hazard Rated Boots)',
        'Sepatu Keselamatan dengan Pelindung Tulang Kaki Metatarsal', 'Sepatu Keselamatan Sol Tahan Panas 300 Derajat Celcius (HRO Outsole)',
        'Sepatu Keselamatan Khusus Area Bersih & Anti-Statis (ESD Cleanroom Shoes)', 'Pelindung Kaki Kulit Pengelasan (Leather Welding Spats & Leggings)',
        'Sarung Tangan Kulit Pengelasan Tahan Panas (Leather Welding Gloves)', 'Sarung Tangan Rajut Berlapis Poliuretan Presisi (PU Coated Work Gloves)',
        'Sarung Tangan Karet Nitril Tahan Bahan Kimia & Minyak (Nitrile Gloves)', 'Sarung Tangan Karet Neoprene Tahan Asam & Pelarut Berat',
        'Sarung Tangan Tahan Potongan Pisau Tingkat 5 (Cut Resistant Level 5 Gloves)', 'Sarung Tangan Tahan Benturan Punggung Tangan (Impact Resistant Gloves)',
        'Sarung Tangan Karet Dielektrik Listrik Kelas 0 s.d. 4 (Electrical Insulating Gloves)', 'Sarung Tangan Pelindung Suhu Dingin Ekstrem (Cryogenic Gloves)',
        'Sarung Tangan Kulit Tebal Rigger & Handling Material Kasar', 'Pakaian Kerja Lapangan Wearpack / Coverall Katun 100%',
        'Pakaian Kerja Tahan Api Nomex / Katun FR (Flame Retardant Coverall)', 'Rompi Keselamatan Berpendar Visibilitas Tinggi (High-Visibility Reflective Vest)',
        'Jas Hujan Industri Keselamatan Berpita Reflektor (Safety Raincoat Set)', 'Pakaian Pelindung Bahan Kimia Cair Tipe 3/4 (Chemical Protective Suit)',
        'Baju Hazmat Perlindungan Total Kedap Gas Tipe 1 (Gas-Tight Hazmat Suit)', 'Apron Pelindung Dada Kulit Pekerjaan Pengelasan (Leather Welding Apron)',
        'Apron Plastik PVC Tahan Percikan Asam Laboratorium', 'Manset Pelindung Lengan Kulit Pengelasan (Leather Welding Sleeves)',
        'Bantalan Lutut Pelindung Bekerja Berlutut (Heavy Duty Knee Pads)', 'Sabuk Penyangga Pinggang Pekerja Angkat Manual (Back Support Belt)',
        'Tali Gantung Pengaman Perkakas Tangan Ketinggian (Tool Lanyard Tether)', 'Tas Kantong Perkakas Pemanjat Ketinggian (Tool Holster Pouch)'
      ]
    },
    {
      category: 'Alat Pemadam Api & Sarana Proteksi Kebakaran',
      prefix: 'Fire Equipment',
      sourceKey: 'kep186_1999',
      standardDefault: 'Permenaker No. 04/1980, Kepmenaker 186/1999 & Standar NFPA',
      items: [
        'Tabung APAR Serbuk Kimia Kering ABC (Dry Chemical Powder 6 Kg)', 'Tabung APAR Gas Karbon Dioksida Bebas Residu (CO2 5 Kg)',
        'Tabung APAR Busa Mekanik AFFF (Aqueous Film Forming Foam 9 Liter)', 'Tabung APAR Gas Bersih Pengganti Halon Ramah Lingkungan (Clean Agent HCFC/Novec)',
        'Tabung APAR Kimia Basah Dapur Restoran Kelas K (Wet Chemical 6 Liter)', 'Tabung APAR Beroda Kapasitas Besar (Trolley Fire Extinguisher 50 Kg)',
        'Selimut Pemadam Api Serat Kaca Tahan Panas 550 C (Fire Blanket)', 'Kotak Lemari Penyimpanan Tabung APAR Luar Ruangan Kaca Tempered',
        'Kotak Hydrant Dalam Gedung Lengkap Selang & Nozzle (Indoor Hose Cabinet)', 'Pilar Hydrant Halaman Dua Lubang Keluaran (Two-Way Yard Hydrant Pillar)',
        'Selang Pemadam Api Kanvas Berlapis Karet EPDM (Fire Hose 1.5 & 2.5 Inci)', 'Nozzle Pemadam Api Variabel Jet-Spray Polikarbonat / Kuningan',
        'Kopling Selang Pemadam Sistem Sambungan Cepat Machino & Storz', 'Kunci Pembuka Tutup Pilar Hydrant & Katup Bawah Tanah (Hydrant Key)',
        'Sambungan Pemadam Kembar Mobil Dinas Pemadam (Siamese Connection 4x2.5x2.5)', 'Katup Pendaratan Sudut Kotak Hydrant (Hydrant Landing Valve)',
        'Kepala Sprinkler Otomatis Kaca Suhu 68 Derajat Celcius (Pendant Sprinkler)', 'Kepala Sprinkler Otomatis Mengarah ke Atas (Upright Sprinkler Head)',
        'Kepala Sprinkler Dinding Samping Horisontal (Sidewall Sprinkler)', 'Perangkat Detektor Asap Optik Fotoelektrik Addressable (Photoelectric Smoke Detector)',
        'Perangkat Detektor Panas Suhu Tetap & Kenaikan Laju (Fixed & RoR Heat Detector)', 'Perangkat Detektor Api Sinar Ultraviolet & Inframerah (UV/IR Flame Detector)',
        'Tombol Panggil Darurat Manual Kaca Pecah (Manual Break Glass Call Point)', 'Lonceng Alarm Kebakaran Listrik Tegangan 24V DC (Fire Alarm Bell)',
        'Lampu Strobo Sirene Evakuasi Kebakaran Keras (Fire Alarm Horn Strobe)', 'Panel Utama Kontrol Alarm Kebakaran Master (Fire Alarm Control Panel MCFA)',
        'Baju Pemadam Kebakaran Lengkap Tahan Panas Nomex III A (Fire Bunker Gear)', 'Baju Pendekat Api Serat Aluminium Radiasi Tinggi (Fire Proximity Suit)',
        'Helm Pemadam Kebakaran Lapangan Lengkap Pelindung Muka & Leher', 'Sepatu Bot Karet Pemadam Kebakaran Tahan Panas & Paku (Firefighter Boots)',
        'Sarung Tangan Pemadam Api Tahan Panas & Tusukan (Firefighter Gloves)', 'Kipas Blower Penghembus Asap Ventilasi Darurat (Positive Pressure PPV Fan)',
        'Tangga Darurat Tali Lipat Portabel Aluminium (Emergency Escape Rope Ladder)', 'Lampu Sorot Darurat Kepala Portabel Tahan Ledakan (Explosion Proof Flashlight)',
        'Pompa Jinjing Pemadam Kebakaran Tekanan Tinggi (Portable High-Pressure Fire Pump)'
      ]
    },
    {
      category: 'Alat Ukur Higiene Industri & Detektor Gas',
      prefix: 'Hygienic Tools',
      sourceKey: 'permen05_2018',
      standardDefault: 'Permenaker No. 05/2018 & Standar Kalibrasi Metrologi',
      items: [
        'Detektor Gas Portabel Multi-Sensor 4 Gas (O2, LEL, CO, H2S)', 'Detektor Gas Tunggal Khusus Oksigen (Single Gas Oxygen Detector)',
        'Detektor Gas Tunggal Khusus Asam Sulfida (Single Gas H2S Detector)', 'Detektor Gas Tunggal Khusus Karbon Monoksida (Single Gas CO Detector)',
        'Detektor Gas Tunggal Khusus Gas Mudah Terbakar LEL (Flammable Gas Meter)', 'Detektor Kebocoran Gas Pendingin Freon & Amonia Refrigerasi',
        'Detektor Gas Photoionization (PID VOC Gas Meter) Uap Pelarut', 'Pompa Sampling Gas Tabung Reagen Tabung Sorben (Colorimetric Gas Pump)',
        'Pompa Pengambil Sampel Udara Personal (Personal Air Sampling Pump)', 'Alat Ukur Intensitas Kebisingan Suara (Sound Level Meter Tipe 2 Terkalibrasi)',
        'Dosimeter Kebisingan Personal Terpasang di Kerah Baju (Noise Dosimeter)', 'Kalibrator Akustik Sound Level Meter Standar 94 dB / 114 dB',
        'Alat Ukur Tingkat Pencahayaan Tempat Kerja (Digital Lux Meter)', 'Alat Ukur Iklim Panas Kerja Indeks Suhu Basah dan Bola (Heat Stress Meter ISBB)',
        'Alat Ukur Getaran Mesin & Getaran Tubuh Manusia (Human Vibration Meter HAVS/WBV)', 'Alat Ukur Kecepatan Aliran Udara & Ventilasi (Vane Anemometer Digital)',
        'Anemometer Kawat Panas Pengukur Aliran Rendah (Hot-Wire Thermo-Anemometer)', 'Tabung Pitot & Manometer Digital Pengukur Tekanan Saluran Ducting',
        'Kamera Termografi Inframerah Pemeriksaan Panel Listrik (Thermal Imaging Camera)', 'Alat Uji Tahanan Isolasi Listrik 1000V s.d. 5000V (Insulation Tester Megger)',
        'Alat Uji Tahanan Pembumian Tanah 3 Kawat (Earth Ground Tester 5 Ohm)', 'Clamp Meter Multimeter Digital True RMS Terstandar CAT IV',
        'Alat Pengukur Ketebalan Pelat Logam Ultrasonik (Ultrasonic Thickness Gauge)', 'Alat Pengukur Kualitas Udara Ruangan Parameter CO2, Suhu & Kelembaban (IAQ Meter)',
        'Penghitung Partikulat Debu Udara Laser Portabel (Particle Counter PM2.5/PM10)', 'Alat Uji Medan Elektromagnetik Radiasi Non-Pengion (EMF Meter)',
        'Alat Uji Kebocoran Radiasi Sinar X Rontgen (Radiation Survey Meter)', 'Dosimeter Saku Digital Akumulasi Radiasi Pekerja (Electronic Personal Dosimeter)',
        'Alat Pengukur pH Cairan & Konduktivitas Air Limbah Portabel (pH Meter)', 'Alat Uji Statis Elektrostatis Permukaan Kerja (Electrostatic Field Meter)',
        'Alat Pendeteksi Logam & Kabel Tersembunyi di Dinding (Wall Scanner Detector)', 'Cermin Inspeksi Bawah Kendaraan & Celah Sempit (Under-Vehicle Inspection Mirror)',
        'Endoskop Kamera Fleksibel Borescope Pemeriksaan Pipa Internal', 'Beban Uji Terkalibrasi untuk Pengujian Timbangan Industri',
        'Kit Kalibrasi Gas Mandiri Regulator & Tabung Gas Kalibrasi Campuran'
      ]
    },
    {
      category: 'Peralatan Ruang Terbatas, LOTO & Evakuasi Medis',
      prefix: 'Rescue-LOTO',
      sourceKey: 'se01_2012',
      standardDefault: 'SE Menakertrans 01/2012, Permenaker 15/2008 & OSHA',
      items: [
        'Tripod Penyelamat Ruang Terbatas Aluminium Kokoh (Rescue Tripod Kit)', 'Katrol Derek Penyelamat Otomatis dengan Rem Sentrifugal (Man-Riding Winch)',
        'Kipas Blower Ventilasi Udara Ruang Terbatas Tahan Ledakan (Explosion-Proof Blower)', 'Selang Fleksibel Blower Ventilasi Udara Spiral 5 Meter (Ducting Hose)',
        'Gembok Pengaman Isolasi Energi LOTO Warna Merah Berbeda Kunci (LOTO Padlock)', 'Gembok LOTO Badan Baja Tahan Karat Korosi Industri Kimia',
        'Pengait Pengunci Multi-Gembok LOTO Rahang Baja (Steel LOTO Hasp 1 & 1.5 Inci)', 'Pengunci Saklar Pemutus Arus MCB & MCCB (Circuit Breaker Lockout)',
        'Pengunci Katup Pipa Putar Gagang Bola (Ball Valve Lockout Device)', 'Pengunci Katup Pipa Roda Putar Ulir (Gate Valve Lockout Device)',
        'Pengunci Steker Listrik Tabung Kabel (Plug Lockout Device)', 'Pengunci Tombol Darurat & Saklar Rotary (Push Button Lockout)',
        'Papan Panel Stasiun Gantung Gembok LOTO Terpusat (LOTO Station Board)', 'Label Tanda Bahaya Jangan Dioperasikan LOTO (Danger Do Not Operate Tags)',
        'Kabel Pengunci LOTO Fleksibel Serba Guna (Adjustable Cable Lockout)', 'Gunting Pemutus Gembok LOTO Darurat Bersertifikasi (Heavy Duty Bolt Cutter)',
        'Kotak Pengunci Kelompok LOTO Bersama (Group Lockout Box Baja)', 'Kotak P3K Dinding Standar Kemnaker Bentuk A (Kapasitas 25 Tenaga Kerja)',
        'Kotak P3K Dinding Standar Kemnaker Bentuk B (Kapasitas 50 Tenaga Kerja)', 'Kotak P3K Lemari Standar Kemnaker Bentuk C (Kapasitas 100 Tenaga Kerja)',
        'Tas P3K Kit Jinjing Lapangan Trauma First Aid Kit Lengkap', 'Tandu Lipat Darurat Dua Lipatan Bahan Aluminium (Folding Stretcher)',
        'Tandu Sekop Pemisah Cedera Tulang Belakang (Scoop Stretcher)', 'Papan Tulang Belakang Keras Lengkap Tali Pengikat (Long Spine Board - LSB)',
        'Penyangga Kepala Korban Trauma Tulang Leher (Head Immobilizer)', 'Penyangga Leher Korban Trauma Dapat Disesuaikan Ukuran (Cervical Collar)',
        'Set Bidai Kayu & Bidai Vakum Patah Tulang Berbagai Ukuran (Splint Set)', 'Torniket Hemostatik Taktis Penghenti Pendarahan Hebat (Combat Application Tourniquet)',
        'Defibrilator Eksternal Otomatis Bantuan Suara Panduan (AED Defibrillator)', 'Tabung Oksigen Medis Portabel 1 M3 Lengkap Regulator & Masker Aliran Tinggi'
      ]
    }
  ];

  for (const cluster of alatClusters) {
    const src = officialSources[cluster.sourceKey] || officialSources.uu1;
    for (let i = 0; i < cluster.items.length; i++) {
      const toolName = cluster.items[i];
      const fullTitle = `${toolName}`;
      const slug = `${toolName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`.replace(/^-|-$/g, '');
      const keyword = `${slug.replace(/-/g, ' ')} spesifikasi riksa uji`.trim();

      records.push({
        section: 'alat',
        slug,
        title: fullTitle,
        metaTitle: `${fullTitle} | Spesifikasi & Riksa Uji`,
        description: `Spesifikasi teknis, standar keselamatan ${cluster.standardDefault}, prosedur riksa uji, panduan inspeksi berkala, dan perawatan ${fullTitle} di tempat kerja.`,
        answer: `${fullTitle} adalah peralatan keselamatan kerja dalam kategori ${cluster.category} yang dirancang untuk memberikan proteksi langsung, deteksi bahaya, atau penanganan darurat di fasilitas industri sesuai dengan ${cluster.standardDefault}.`,
        highlights: [
          `Kategori: ${cluster.category}`,
          `Kelompok: ${cluster.prefix}`,
          `Standar Mutu: ${cluster.standardDefault}`,
          'Fungsi: Pencegahan Kecelakaan, Perlindungan Fisik & Kesiapan Tanggap Darurat'
        ],
        blocks: [
          {
            heading: `Fungsi & Spesifikasi Teknis ${fullTitle}`,
            paragraphs: [
              `Dalam sistem keselamatan kerja industri terpadu, ${fullTitle} memegang peranan krusial untuk melindungi integritas fisik tenaga kerja dan mendeteksi kondisi tidak aman sejak dini.`,
              `Peralatan ini harus memenuhi standar mutu dan pengujian ${cluster.standardDefault} guna memastikan keandalan fungsi protektif saat dioperasikan pada kondisi kerja ekstrem maupun skenario keadaan darurat.`
            ]
          },
          {
            heading: 'Prosedur Pemeriksaan (Inspeksi) & Kalibrasi Berkala',
            paragraphs: [
              'Untuk menjamin kelaikan peralatan sebelum digunakan di lapangan, tim K3 wajib melakukan checklist verifikasi:',
            ],
            bullets: [
              'Pemeriksaan visual fisik terhadap keretakan material, deformasi struktur, karat, atau keausan komponen',
              'Verifikasi label sertifikasi uji kelayakan, tanda SNI / EN / ANSI, dan nomor registrasi alat',
              'Pengujian fungsi operasional, sensor deteksi, indikator baterai, atau mekanisme penguncian',
              'Pelaksanaan kalibrasi periodik oleh laboratorium pengujian terakreditasi KAN (khusus alat ukur)'
            ]
          },
          {
            heading: 'Panduan Penyimpanan & Perawatan Higienis',
            paragraphs: [
              'Setelah digunakan, peralatan wajib dibersihkan dari kontaminasi debu, minyak, atau zat kimia korosif, disimpan di tempat kering dan berventilasi baik terhindar dari paparan sinar matahari langsung, serta dicatat dalam buku register logbook pemeliharaan inventaris K3.'
            ]
          },
          {
            heading: 'Layanan Konsultasi & Riksa Uji di PT Kreasi Ultimate Berjaya',
            paragraphs: [
              'PT Kreasi Ultimate Berjaya menyediakan layanan pendampingan pengadaan peralatan K3 terstandar, pelatihan sertifikasi operator alat, dan fasilitasi riksa uji kelayakan resmi bersama PJK3 berlisensi kementerian.'
            ]
          }
        ],
        faqs: [
          { question: `Berapa lama masa pakai (lifetime) efektif untuk ${fullTitle}?`, answer: 'Masa pakai bervariasi sesuai jenis alat (misal helm keselamatan 3-5 tahun, harness 5 tahun jika tidak mengalami benturan, sensor gas detector 2-3 tahun) dan wajib diganti lebih awal jika ditemukan kerusakan fisik.' },
          { question: `Bagaimana mengetahui apakah ${fullTitle} telah memenuhi standar resmi?`, answer: 'Periksa cetakan embossed atau stiker label sertifikasi standar (SNI, CE EN, ANSI, atau izin tipe kementerian) yang tertera pada badan alat.' },
          { question: `Apakah operator yang menggunakan ${fullTitle} memerlukan pelatihan khusus?`, answer: 'Ya, setiap personel wajib mendapatkan induksi dan pelatihan teknik penggunaan yang benar agar alat memberikan proteksi maksimal sesuai desainnya.' }
        ],
        related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker', 'jadwal'],
        sources: [src, officialSources.uu1, officialSources.pp50],
        status: 'published',
        publishedAt: '2026-08-01',
        updatedAt: '2026-09-01',
        indexable: true,
        intent: `alat k3 ${slug} spesifikasi riksa uji standar inspeksi`,
        primaryKeyword: keyword,
        searchIntent: `spesifikasi teknis, standar keselamatan, cara inspeksi, dan riksa uji ${fullTitle}`,
        intentType: 'informational',
        parentTopic: `Peralatan K3 ${cluster.category}`,
        cannibalizationGroup: `alat-${cluster.prefix.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        contentKind: 'tool',
        primaryCtaText: `Konsultasi Riksa Uji ${fullTitle.split('(')[0].trim()}`,
        primaryCtaIntent: 'perusahaan',
        secondaryCtaText: 'Tanya Sertifikasi Operator Alat',
        secondaryCtaIntent: 'jadwal'
      });
    }
  }

  return records;
}

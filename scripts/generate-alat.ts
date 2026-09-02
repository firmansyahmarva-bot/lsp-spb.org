import { ContentRecordInput } from './build-inventory';

export function generateAlatRecords(): ContentRecordInput[] {
  const records: ContentRecordInput[] = [];

  const alatClusters = [
    {
      category: 'APD Kepala, Mata, Telinga & Pernapasan',
      prefix: 'APD Kepala-Napas',
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
      category: 'Alat Pemadam Api & Proteksi Kebakaran',
      prefix: 'Alat Pemadam',
      items: [
        'Tabung APAR Dry Chemical Powder ABC 3 kg & 6 kg', 'Tabung APAR Karbon Dioksida (CO2) 3 kg & 5 kg Kelas B & C',
        'Tabung APAR Busa Mekanik (AFFF Foam) 6 Liter & 9 Liter', 'Tabung APAR Gas Bersih Pengganti Halon (Clean Agent HFC/Novec)',
        'Tabung Pemadam Api Beroda (APAB Powder Trolley 25 kg & 50 kg)', 'Tabung Pemadam Api Beroda Busa (AFFF Foam Trolley 50 Liter)',
        'Selang Pemadam Kebakaran Kanvas Sintetis 1.5 Inch & 2.5 Inch', 'Selang Pemadam Kebakaran Karet EPDM Berlapis Ganda (Rubber Fire Hose)',
        'Nozzle Pemadam Kebakaran Jet-Spray Kuningan / Aluminium (Smooth Bore & Fog Nozzle)', 'Nozzle Pistol Grip Otomatis Pengatur Debit Aliran (Pistol Grip Nozzle)',
        'Kopling Selang Pemadam Kebakaran Sistem Machino / Storz / John Morris', 'Kunci Hidran Pembuka Katup Pilar Bawah Tanah (Hydrant Wrench / Spanner)',
        'Pilar Hydrant Air Pemadam Dua Cabang (Two-Way Outdoor Pillar Hydrant)', 'Kotak Hydrant Luar Ruangan Lengkap Kaca & Kunci (Outdoor Hydrant Box)',
        'Kotak Hydrant Dalam Gedung dengan Gulungan Selang (Indoor Hydrant Cabinet & Hose Reel)', 'Sambungan Pemadam Kebakaran Mobil Damkar (Siamese Connection 4x2.5 Inch)',
        'Katup Pendaratan Sudut Hydrant Gedung (Landing Valve Brass 2.5 Inch)', 'Pipa Semprot Busa Pemadam Kebakaran (Low Expansion Foam Branchpipe)',
        'Tabung Induktor Pengisap Busa Konsentrat (Inline Foam Inductor)', 'Tangki Konsentrat Busa Pemadam Kebakaran (AFFF Foam Concentrate Tank)',
        'Selimut Pemadam Api Serat Kaca Tahan Panas (Fire Blanket 1.8 x 1.8 Meter)', 'Kepala Sprinkler Kebakaran Tipe Pendant Kaca Bola Termal 68 Derajat',
        'Kepala Sprinkler Kebakaran Tipe Upright Langit-Langit Terbuka', 'Kepala Sprinkler Kebakaran Tipe Sidewall Dinding Ruangan',
        'Katup Kendali Utama Aliran Sprinkler (Alarm Check Valve System)', 'Saklar Aliran Air Pipa Pemadam Kebakaran (Water Flow Switch Detector)',
        'Katup Uji & Pembuangan Akhir Sprinkler (Inspector Test & Drain Valve)', 'Detektor Asap Optik Fotoelektrik Sistem Konvensional',
        'Detektor Asap Sistem Alamat Terprogram (Addressable Optical Smoke Detector)', 'Detektor Panas Kenaikan Suhu Cepat (Rate-of-Rise Heat Detector - ROR)',
        'Detektor Panas Suhu Tetap (Fixed Temperature Heat Detector 57-70C)', 'Detektor Api Optik Spektrum Ganda Ultraviolet/Inframerah (UV/IR Flame Detector)',
        'Detektor Asap Berkas Cahaya Linier Jarak Jauh (Beam Smoke Detector)', 'Sistem Deteksi Asap Pengisap Udara Dini (Aspirating Smoke Detection - VESDA)',
        'Tombol Panggil Darurat Manual Kaca Pecah (Manual Call Point Break Glass)', 'Lampu Indikator & Sirine Alarm Kebakaran Elektronik (Fire Horn Strobe)',
        'Panel Kendali Alarm Kebakaran Utama (Fire Alarm Control Panel - FACP)', 'Pompa Pemadam Api Utama Elektrik (Electric Fire Main Pump)',
        'Pompa Pemadam Api Penggerak Mesin Diesel Darurat (Diesel Engine Fire Pump)', 'Pompa Pemelihara Tekanan Jalur Pipa Hydrant (Jockey Fire Pump)'
      ]
    },
    {
      category: 'Alat Deteksi Gas, Higiene & Pengukuran K3',
      prefix: 'Instrumen K3',
      items: [
        'Detektor Gas Portabel 4 Sensor (Multi-Gas Detector O2, LEL, H2S, CO)', 'Detektor Gas Tunggal Toksik Portabel (Single Gas Detector H2S / CO)',
        'Detektor Gas Hidrokarbon Inframerah Anti Racun Silikon', 'Pompa Pengambil Sampel Gas Tabung Kolorimetri (Colorimetric Gas Sampling Pump)',
        'Tabung Deteksi Cepat Reagen Gas Kimia Khusus (Drager / Gastec Tubes)', 'Instrumen Pemantau Kualitas Udara Dalam Ruang (Indoor Air Quality Monitor CO2/TVOC)',
        'Alat Pengukur Kebisingan Terintegrasi (Sound Level Meter Tipe 1 / Tipe 2)', 'Dosimeter Kebisingan Personal Terpasang di Kerah Baju (Noise Dosimeter)',
        'Kalibrator Akustik Pengujian Suara (Sound Level Meter Acoustic Calibrator)', 'Alat Pengukur Intensitas Cahaya Digital Terkalibrasi (Digital Lux Meter)',
        'Alat Pemantau Iklim Kerja Indeks Suhu Basah Bola (Heat Stress Monitor WBGT)', 'Anemometer Pengukur Kecepatan Aliran Udara Kipas Ventilasi',
        'Tabung Pitot Pengukur Tekanan Statis & Dinamis Saluran Udara (Pitot Tube & Manometer)', 'Alat Pengukur Getaran Mesin & Lengan-Tangan (Vibration Meter Triaxial)',
        'Alat Pengukur Getaran Seluruh Tubuh Kursi Operator (Seat-Pad WBV Accelerometer)', 'Pompa Pengambil Sampel Debu Personal Aliran Konstan (Personal Air Sampling Pump)',
        'Siklon Pemisah Fraksi Debu Respirabel Aluminium (Respirable Dust Cyclone)', 'Kaset Filter Filter Membran Selulosa Pengambil Sampel Debu',
        'Timbangan Mikro Analitis Pengujian Gravimetri Debu Laboratorium', 'Kamera Pencitraan Termal Inframerah Panel Listrik (Thermal Imaging Camera)',
        'Instrumen Penguji Tahanan Pembumian Tanah (Earth Ground Resistance Tester)', 'Instrumen Penguji Tahanan Isolasi Kabel Listrik (Megohmmeter / Megger 1000V)',
        'Alat Uji Arus Kebocoran & Keselamatan Peralatan Listrik (Portable Appliance Tester)', 'Detektor Tegangan Listrik Tanpa Sentuh (Non-Contact Voltage Detector Pen)',
        'Alat Pengukur Ketebalan Pelat Baja Ultrasonik (Ultrasonic Thickness Gauge NDT)', 'Detektor Cacat Struktur Menggunakan Partikel Magnetik (Magnetic Yoke NDT)',
        'Alat Deteksi Kebocoran Gas Bertekanan Ultrasonik (Ultrasonic Leak Detector)', 'Alat Pengukur Radiasi Nuklir Geiger Muller Counter (Survey Meter Radiasi)',
        'Lencana Pemantau Dosis Radiasi Personal TLD (Thermoluminescent Dosimeter Badge)', 'Kit Kalibrasi Gas Standar (Span Calibration Gas Cylinder & Regulator)'
      ]
    },
    {
      category: 'Peralatan Rigging, Scaffolding, LOTO & Penunjang',
      prefix: 'Alat Penunjang',
      items: [
        'Kunci Gembok Keselamatan LOTO Silinder Kuningan (Safety Lockout Padlock)', 'Pengait Gembok Ganda Multi-Gembok Logam (Steel Lockout Hasp 1 & 1.5 Inch)',
        'Tagging Peringatan Bahaya LOTO Dilaminasi PVC (Do Not Operate Danger Tags)', 'Pengunci Saklar MCB Sirkuit Listrik Miniatur (Miniature Circuit Breaker Lockout)',
        'Pengunci Saklar Pemutus Arus Besar Panel Listrik (Molded Case Breaker Lockout)', 'Pengunci Katup Putar Bola Pipa Saluran (Ball Valve Lockout Clamp)',
        'Pengunci Roda Katup Pintu Air Pipa (Gate Valve Lockout Cover)', 'Pengunci Steker Kabel Listrik Industri (Industrial Electrical Plug Lockout)',
        'Pengunci Tombol Darurat & Saklar Putar Panel (Push Button & Rotary Switch Cover)', 'Stasiun Kotak Penyimpanan Manajemen Kunci LOTO (Lockout Tagout Station Box)',
        'Kotak Kunci Grup LOTO Portabel Baja (Group Lockout Box)', 'Tripod Penyelamat Ruang Terbatas Paduan Aluminium (Confined Space Rescue Tripod)',
        'Derek Penyelamat Manual Ruang Terbatas (Man-Riding Winch & Wire Rope)', 'Blower Ventilasi Ruang Terbatas Tahan Ledakan (Explosion-Proof Confined Space Fan)',
        'Saluran Udara Fleksibel Blower Ruang Terbatas (Ducting Hose Anti-Static)', 'Pipa Perancah Scaffolding Baja Galvanis Standar BS 1139',
        'Klem Scaffolding Hidup / Putar Sambungan Sudut (Swivel Coupler Forged Steel)', 'Klem Scaffolding Mati Sambungan 90 Derajat (Right Angle Fixed Coupler)',
        'Sambungan Lurus Dalam Pipa Perancah (Internal Joint Pin Sleeve)', 'Papan Kerja Logam Scaffolding Berlubang Anti-Slip (Metal Plank with Hooks)',
        'Pelat Dasar Penyangga Tiang Perancah (Base Plate & Adjustable Base Jack)', 'Papan Penahan Kaki Scaffolding Kayu / Logam (Toeboard Clamp System)',
        'Tagging Status Kelaikan Scaffolding Hijau & Merah (Scafftag Safety System)', 'Tali Kawat Baja Pengangkat Beban Crane (Wire Rope Sling 4-Leg with Thimble)',
        'Tali Anyaman Sintetis Pengangkat Beban Berat (Webbing Sling Polyester 2-10 Ton)', 'Tali Bulat Pembungkus Beban Tanpa Sambungan (Round Sling Endless 5 Ton)',
        'Konektor Sambungan Shackle Busur Baut Pengaman (Bow Shackle Safety Pin Grade 80)', 'Kait Pengangkat Beban Baja Tempa dengan Lidah Pengaman (Clevis Sling Hook with Latch)',
        'Klem Pengangkat Pelat Baja Vertikal & Horizontal (Plate Lifting Clamp)', 'Balok Penyebar Beban Pengangkatan Crane (Spreader Beam & Lifting Beam Bar)'
      ]
    }
  ];

  for (const cluster of alatClusters) {
    for (const item of cluster.items) {
      const slug = `${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`.replace(/^-|-$/g, '');
      const fullTitle = `${item}`;

      records.push({
        section: 'alat',
        slug,
        title: fullTitle,
        metaTitle: `${fullTitle}: Spesifikasi, Inspeksi & Standar K3`,
        description: `Panduan teknis ${fullTitle}: standar kelayakan, spesifikasi SNI/EN/ANSI, prosedur inspeksi visual berkala, dan cara penggunaan aman di tempat kerja.`,
        answer: `${fullTitle} adalah peralatan keselamatan dalam kategori ${cluster.category} yang dirancang untuk melindungi pekerja, mendeteksi bahaya, serta memitigasi risiko insiden di tempat kerja.`,
        highlights: [`Kategori ${cluster.category}`, 'Standar Spesifikasi SNI / EN / ANSI', 'Checklist Inspeksi & Uji Kelayakan', 'Panduan Pemeliharaan Terstandar'],
        blocks: [
          { heading: `Fungsi & Peranan ${fullTitle}`, paragraphs: [`Dalam operasional industri dan kepatuhan K3, ${fullTitle} memegang peranan krusial dalam melindungi personel serta aset dari potensi bahaya lingkungan kerja.`, 'Peralatan ini wajib memenuhi standar sertifikasi yang diakui secara nasional maupun internasional guna menjamin keandalan fungsi proteksinya saat digunakan.'] },
          { heading: 'Kriteria Kelayakan & Standar Teknis', paragraphs: ['Sebelum digunakan, peralatan ini wajib diperiksa berdasarkan parameter teknis berikut:'], bullets: ['Kelengkapan sertifikat uji mutu dan label sertifikasi standar (SNI/EN/ANSI)', 'Kondisi fisik bebas dari retak, deformasi, korosi, atau keausan berlebih', 'Fungsi mekanisme penguncian, pegas, atau sensor bekerja dengan akurat', 'Kesesuaian kapasitas beban kerja aman (Working Load Limit - WLL) dengan tugas'] },
          { heading: 'Prosedur Inspeksi & Pemeliharaan Rutin', paragraphs: ['Lakukan inspeksi visual pra-pemakaian oleh pengguna serta inspeksi formal berkala oleh tenaga kompeten yang tercatat dalam logbook peralatan keselamatan.'] },
          { heading: 'Kaitan dengan Regulasi & Pelatihan', paragraphs: ['Penggunaan dan tata cara pemeriksaan peralatan ini diajarkan secara mendalam dalam program pembinaan teknis K3 Kemnaker RI dan sertifikasi kompetensi profesi BNSP terkait.'] }
        ],
        faqs: [
          { question: `Kapan ${fullTitle} harus ditarik dari penggunaan (diberhentikan)?`, answer: 'Peralatan harus segera ditarik dari penggunaan apabila mengalami benturan keras/jatuh, menunjukkan cacat struktural, gagal uji inspeksi, atau telah melewati masa kedaluwarsa pakai pabrikan.' },
          { question: `Apakah ${fullTitle} wajib memiliki sertifikasi standar?`, answer: 'Ya, seluruh peralatan K3 wajib memiliki tanda sertifikasi standar resmi (seperti SNI, EN, ANSI, atau CE) untuk menjamin perlindungan keselamatan.' }
        ],
        related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker'],
        sources: [
          { label: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja', url: 'https://jdih.kemnaker.go.id/katalog/uu-1-1970', publisher: 'Pemerintah RI / Kemnaker' },
          { label: 'Permenaker No. 08 Tahun 2010 tentang Alat Pelindung Diri', url: 'https://jdih.kemnaker.go.id/katalog/permenaker-08-2010', publisher: 'Kemnaker RI' }
        ],
        status: 'published',
        publishedAt: '2026-08-01',
        updatedAt: '2026-09-01',
        indexable: true,
        intent: `alat k3 ${slug} spesifikasi inspeksi`,
        primaryKeyword: `${slug.replace(/-/g, ' ')}`,
        searchIntent: `spesifikasi, standar SNI, dan cara inspeksi ${fullTitle}`,
        intentType: 'informational',
        parentTopic: `Peralatan K3: ${cluster.category}`,
        cannibalizationGroup: `alat-${cluster.prefix.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        contentKind: 'tool',
        primaryCtaText: 'Konsultasi Standar Peralatan K3',
        primaryCtaIntent: 'perusahaan',
        secondaryCtaText: 'Lihat Program Pembinaan K3',
        secondaryCtaIntent: 'jadwal'
      });
    }
  }

  return records;
}

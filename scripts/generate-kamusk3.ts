import { ContentRecordInput } from './build-inventory';

export function generateKamusK3Records(): ContentRecordInput[] {
  const records: ContentRecordInput[] = [];

  const clusters = [
    {
      domain: 'Prinsip & Teori Kecelakaan',
      prefix: 'Teori K3',
      terms: [
        'Teori Domino Heinrich', 'Model Swiss Cheese James Reason', 'Piramida Kecelakaan Frank Bird', 'Analisis Akar Masalah (Root Cause Analysis)',
        'Diagram Tulang Ikan (Ishikawa Fishbone)', 'Metode Analisis Bowtie (Bowtie Analysis)', 'Hierarki Pengendalian Bahaya (Hierarchy of Controls)',
        'Konsep Zero Harm & Vision Zero', 'Budaya Keselamatan (Safety Culture Ladder)', 'Iklim Keselamatan Kerja (Safety Climate)',
        'Safety Leadership & Komitmen Manajemen', 'Tindakan Tidak Aman (Unsafe Act)', 'Kondisi Tidak Aman (Unsafe Condition)',
        'Hampir Celaka (Nearmiss Incident)', 'Kecelakaan Kerja Akibat Hubungan Kerja (LTI)', 'Total Recordable Incident Rate (TRIR)',
        'Lost Time Incident Frequency Rate (LTIFR)', 'Tingkat Keparahan Cedera (Severity Rate)', 'Hari Kerja Hilang (Lost Workdays)',
        'Analisis Tren Keselamatan (Safety Trend Analysis)', 'Leading Indicator vs Lagging Indicator', 'Safety Behavior Observation (SBO)',
        'Penghentian Kerja Bahaya (Stop Work Authority)', 'Sistem Pelaporan Bahaya Karyawan (Hazard Reporting)', 'Induksi Keselamatan (Safety Induction)',
        'Pertemuan Keselamatan Harian (Toolbox Meeting)', 'Izin Kerja Aman Terintegrasi (PTW System)', 'Rencana Tanggap Darurat Fasilitas (ERP)',
        'Manajemen Perubahan Operasional (MOC)', 'Audit Keselamatan Berlapis (Layered Safety Audit)', 'Pemeriksaan Visual 5R/5S Tempat Kerja',
        'Analisis Biaya Kecelakaan Kerja (Iceberg Theory)', 'Manajemen Keselamatan Kontraktor (CSMS)', 'Penilaian Kematangan Budaya K3',
        'Program Insentif & Pengakuan Keselamatan', 'Matriks Akuntabilitas K3 Pengawas', 'Penyelidikan Insiden Metode 5-Why',
        'Fault Tree Analysis (FTA) Kegagalan Sistem', 'Event Tree Analysis (ETA) Skenario Bahaya', 'Human Error Assessment & Reduction Technique (HEART)',
        'Situational Awareness Tenaga Kerja', 'Pola Perilaku Berisiko (Risk Tolerance)', 'Safety Walkthrough Direksi',
        'Manajemen Jam Kerja Selamat (Safe Man Hours)', 'Standar Kualifikasi Kompetensi Personel K3', 'Pengawasan Norma K3 Terpadu',
        'Perlindungan Tenaga Kerja Rentan', 'Kewajiban Pengurus Tempat Kerja', 'Tata Kelola Dokumentasi K3 Terstandar', 'Prinsip Kehati-hatian Dini (Precautionary Principle)'
      ]
    },
    {
      domain: 'Higiene Industri & Toksikologi',
      prefix: 'Higiene K3',
      terms: [
        'Nilai Ambang Batas (NAB) Faktor Kimia', 'Konsentrasi Paparan Singkat (KTD / STEL)', 'Kadar Tertinggi Diperkenankan (C / Ceiling)',
        'Paparan Rata-Rata Tertimbang Waktu (TWA)', 'Toksikologi Industri & Efek Dosis-Respons', 'Bahan Kimia Karsinogenik Golongan 1',
        'Bahan Kimia Mutagenik & Teratogenik', 'Paparan Uap Benzena & Mitigasi Leukemia', 'Paparan Debu Asbes & Pencegahan Asbestosis',
        'Paparan Silika Kristalin & Silikosis', 'Toksisitas Logam Berat Timbal (Pb)', 'Toksisitas Merkuri & Kerusakan Syaraf',
        'Toksisitas Gas Karbon Monoksida (CO)', 'Toksisitas Gas Asam Sulfida (H2S)', 'Toksisitas Gas Klorin (Cl2) Industri',
        'Paparan Gas Amonia (NH3) Ruang Tertutup', 'Paparan Senyawa Organik Volatil (VOCs)', 'Pengambilan Sampel Udara Personal (Personal Air Sampling)',
        'Kaset Filter Debu Respirabel & Inhalabel', 'Tabung Sorben Arang Aktif Pengambil Sampel Gas', 'Indeks Pajanan Biologi (Biological Exposure Indices - BEI)',
        'Pemantauan Gas Biohazard Ruang Laboratorium', 'Ventilasi Pembuangan Lokal (Local Exhaust Ventilation - LEV)', 'Uji Efisiensi Kap Pengisap Ventilasi (Hood Capture Velocity)',
        'Standar Kualitas Udara Dalam Ruang (IAQ)', 'Paparan Partikulat PM2.5 & PM10 Pabrik', 'Paparan Uap Asam Klorida & Asam Sulfat',
        'Paparan Pelarut Toluena & Xilena Cat', 'Pengendalian Bahaya Debu Kapas (Bissinosis)', 'Pengendalian Bahaya Debu Batubara (Pneumokoniosis)',
        'Standar Higiene Fasilitas Sanitasi Pabrik', 'Pemeriksaan Kualitas Air Minum Pekerja', 'Kantin Sehat & Higiene Pengolahan Pangan Industri',
        'Pemantauan Jamur & Bakteri Saluran AC Gedung', 'Bahaya Aerosol Biologis (Bioaerosol)', 'Uji Fit Testing Masker Respirator Kualitatif-Kuantitatif',
        'Penyimpanan Bahan Kimia Inkompatibel', 'Label Bahaya Sistem Harmonisasi Global (GHS)', 'Format 16 Bab Lembar Data Keselamatan (MSDS)',
        'Indeks Bahaya Kesehatan NFPA 704', 'Pengelolaan Reaktivitas Kimia Eksotermik', 'Dekontaminasi Tubuh Korban Paparan Kimia',
        'Pengoperasian Stasiun Eyewash & Emergency Shower', 'Pengendalian Uap Pengelasan (Welding Fume)', 'Paparan Isosianat Industri Busa & Cat',
        'Paparan Pestisida Organofosfat Perkebunan', 'Pengujian Kadar Oksigen Udara Kerja', 'Standar Kebersihan Udara Ruang Bersih (Cleanroom)',
        'Pengolahan Limbah Udara Wet Scrubber', 'Audit Kepatuhan Higiene Industri Permenaker 05/2018'
      ]
    },
    {
      domain: 'Keselamatan Proses & Bahaya Ledakan',
      prefix: 'Process Safety',
      terms: [
        'Manajemen Keselamatan Proses (PSM 14 Elemen)', 'Batas Ledakan Bawah (Lower Explosive Limit - LEL)', 'Batas Ledakan Atas (Upper Explosive Limit - UEL)',
        'Titik Nyala (Flash Point) Cairan Mudah Terbakar', 'Titik Bakar (Fire Point) Bahan Bakar', 'Suhu Swasulut (Auto-Ignition Temperature)',
        'Klasifikasi Area Berbahaya Hazardous Area (Zonasi ATEX)', 'Peralatan Listrik Tahan Ledakan (Explosion Proof - Ex)', 'Ledakan Debu Industri (Dust Explosion Pentagram)',
        'Fenomena BLEVE (Boiling Liquid Expanding Vapor Explosion)', 'Fenomena VCE (Vapor Cloud Explosion)', 'Fenomena Jet Fire & Pool Fire Kilang',
        'Fenomena Flash Fire & Pakaian Tahan Api', 'Hazard and Operability Study (HAZOP)', 'Failure Mode and Effects Analysis (FMEA)',
        'Layer of Protection Analysis (LOPA)', 'Safety Instrumented System (SIS) & Safety Integrity Level (SIL)', 'Katup Pengaman Tekanan (Pressure Safety Valve - PSV)',
        'Piringan Pecah Pengaman (Rupture / Bursting Disc)', 'Sistem Flare & Pembuangan Gas Darurat (Blowdown System)', 'Sistem Interlock Instrumentasi Keselamatan Pabrik',
        'Inerting Tangki Menggunakan Gas Nitrogen', 'Purging Saluran Pipa Gas Sebelum Perawatan', 'Uji Emisi Fugitive Kebocoran Katup (LDAR)',
        'Detektor Api Optik Ultraviolet/Inframerah (UV/IR)', 'Detektor Gas Mudah Terbakar Catalytic Bead', 'Detektor Gas Inframerah Open Path',
        'Pemodelan Konsekuensi Radiasi Termal Kebakaran', 'Penyelidikan Integritas Mekanik Tangki (API 653)', 'Pemeriksaan Korosi Bawah Insulasi (Corrosion Under Insulation - CUI)',
        'Pengendalian Tekanan Lebih Reaktor Eksoterm', 'Penanganan Bahan Kimia Polimerisasi Reaktif', 'Pencegahan Pembentukan Hidrat Pipa Gas Alam',
        'Pengendalian Aliran Statis Pengisian Tangki BBM', 'Emergency Shutdown System (ESD) Kilang', 'Deluge Foam System Proteksi Tangki Timbun',
        'Isolasi Pipa Menggunakan Spading & Blind Flange', 'Pemeriksaan Integritas Sistem Perpipaan (API 570)', 'Manajemen Bahaya Korosi Asam Sulfida (Sour Service)',
        'Inspeksi Kebocoran Flange Menggunakan Bubble Test', 'Pengendalian Bahaya Reaksi Kimia Runaway', 'Sistem Ventilasi Ruang Pompa Hidrokarbon',
        'Pengamanan Silo Penyimpanan Gandum & Batubara', 'Pemeriksaan grounding Tangki BBM Menggunakan Ground Monitoring', 'Uji Coba Fungsi Katup Emergency Depo BBM',
        'Penyusunan Safety Case Fasilitas Kilang LNG', 'Pengujian Tekanan Hydrotest Pipa Proses Pabrik', 'Sistem Pengendalian Level Tangki Anti-Overfill (API 2350)',
        'Audit Kepatuhan Process Safety Management Pabrik Kimia', 'Pencegahan Kebocoran Cairan Berbahaya ke Lingkungan'
      ]
    },
    {
      domain: 'Ergonomi & Fisiologi Kerja',
      prefix: 'Ergonomi K3',
      terms: [
        'Prinsip Dasar Ergonomi Tempat Kerja', 'Gangguan Otot Rangka Akibat Kerja (MSDs)', 'Metode Penilaian Postur Cepat RULA (Rapid Upper Limb Assessment)',
        'Metode Penilaian Tubuh Cepat REBA (Rapid Entire Body Assessment)', 'Persamaan Pengangkatan Manual NIOSH Lifting Equation', 'Batas Berat Pengangkatan yang Direkomendasikan (RWL)',
        'Indeks Pengangkatan Manual (Lifting Index - LI)', 'Sindrom Terowongan Karpal (Carpal Tunnel Syndrome - CTS)', 'Nyeri Punggung Bawah Terkait Pekerjaan (Low Back Pain - LBP)',
        'Pencegahan Tendinitis & Tenosinovitis Operator', 'Ergonomi Penggunaan Display Layar Komputer (VDT)', 'Desain Kursi Kerja Ergonomis & Penyesuaian Lumbal',
        'Ketinggian Meja Kerja Berdiri & Duduk (Sit-Stand Desk)', 'Pencahayaan Ergonomis & Pencegahan Kelelahan Mata (Eye Strain)', 'Kelelahan Kerja & Pengukuran Waktu Reaksi Karyawan',
        'Manajemen Shift Kerja & Ritme Sirkadian Tubuh', 'Iklim Kerja Panas & Pengukuran Indeks Suhu Basah Bola (ISBB / WBGT)', 'Aklimatisasi Pekerja di Lingkungan Suhu Ekstrem',
        'Kebutuhan Cairan Hidrasi & Pencegahan Dehidrasi Pekerja', 'Penyakit Akibat Panas (Heat Stroke & Heat Exhaustion)', 'Paparan Suhu Dingin Ekstrem (Hipotermia & Frostbite)',
        'Getaran Seluruh Tubuh (Whole-Body Vibration - WBV) Alat Berat', 'Getaran Lengan-Tangan (Hand-Arm Vibration - HAVS / White Finger)', 'Desain Pegangan Alat Perkakas Ergonomis (Tool Grip Design)',
        'Pengurangan Gerakan Repetitif Lini Produksi', 'Penataan Tata Letak Stasiun Kerja (Workstation Layout)', 'Ergonomi Aktivitas Mendorong & Menarik Beban (Snook Tables)',
        'Pemberian Istirahat Mikro (Microbreak) Pekerja Monoton', 'Stres Kerja & Pengukuran Faktor Psikososial Organisasi', 'Beban Kerja Mental & Metode Penilaian NASA-TLX',
        'Program Senam Peregangan di Tempat Kerja (Workplace Stretching)', 'Ergonomi Posisi Menjangkau (Work Reach Envelopes)', 'Alat Bantu Angkat Mekanis (Vacuum Lifter & Hoist Ergonomis)',
        'Desain Pedal Kaki & Kontrol Mesin Operator', 'Pencegahan Kelelahan Pengemudi Angkutan Berat (Fatigue Monitoring)', 'Penilaian Beban Kerja Fisik Berdasarkan Denyut Jantung',
        'Ergonomi Pekerjaan Pengelasan & Pemasangan Pipa', 'Desain Tangga & Kemiringan Ramp Sesuai Ergonomi', 'Penyediaan Fasilitas Ruang Laktasi Kerja',
        'Ergonomi Pekerja Lanjut Usia & Inklusivitas', 'Penggunaan Matras Anti-Lelah (Anti-Fatigue Mat) Kerja Berdiri', 'Kebugaran Jasmani Tenaga Kerja & Program Senam',
        'Ergonomi Penanganan Pasien di Rumah Sakit (Patient Handling)', 'Ergonomi Kerja Pertanian & Perkebunan Manual', 'Penyesuaian Stasiun Kerja Perakitan Komponen Mikro',
        'Desain Keyboard & Mouse Komputer Ergonomis', 'Pengendalian Kebisingan di Ruang Kontrol Pabrik', 'Pemeriksaan Kesehatan Ergonomi Berkala Tenaga Kerja',
        'Penyusunan Kebijakan Ergonomi Perusahaan Terpadu', 'Audit Kepatuhan Ergonomi Permenaker 05/2018'
      ]
    },
    {
      domain: 'Keselamatan Kelistrikan & Termal',
      prefix: 'Listrik & Termal',
      terms: [
        'Hukum Ohm & Bahaya Arus Kejut Listrik (Electric Shock)', 'Ambang Batas Fibrilasi Jantung Akibat Sengatan Listrik', 'Tegangan Sentuh (Touch Voltage) & Tegangan Langkah (Step Voltage)',
        'Sistem Pembumian Pengaman (Equipment Grounding & Bonding)', 'Penyambung Sirkuit Gangguan Tanah (GFCI / ELCB / RCD)', 'Inspeksi Tahanan Pembumian (Ground Resistance Testing)',
        'Prosedur Penguncian & Pelabelan Energi Listrik (Electrical LOTO)', 'Pemeriksaan Kondisi Nol Energi (Zero Energy Verification)', 'Bahaya Ledakan Busur Api (Arc Flash Boundary)',
        'Tingkat Bahaya Kalori Arc Flash (Incident Energy Cal/cm2)', 'Pakaian Pelindung Arc Flash Berdasarkan Kategori Hazard (NFPA 70E)', 'Inspeksi Alat Pelindung Diri Listrik (Sarung Tangan Karet Dielektrik)',
        'Inspeksi Tongkat Uji Bertegangan (Hot Stick & Voltage Detector)', 'Sistem Proteksi Petir Eksternal (Finial Franklin & Faraday Cage)', 'Sistem Proteksi Petir Internal (Surge Protective Device - SPD)',
        'Tahanan Isolasi Konduktor Kabel Listrik (Megger Test)', 'Uji Termografi Inframerah Terminal Listrik Longgar', 'Bahaya Overload Sirkuit Listrik & Pencegahan Korsleting',
        'Pemasangan Kabel Tray & Penataan Saluran Kabel Rapi', 'Sistem Keselamatan Gardu Induk Tegangan Menengah & Tinggi', 'Jarak Bebas Minimum Aman (Safe Working Clearance) Jaringan Listrik',
        'K3 Penggantian Sekring & Reset Pemutus Sirkuit (Circuit Breaker)', 'Pencegahan Percikan Statis Pengalihan Cairan Pelarut', 'Isolasi Ganda (Double Insulation) Perkakas Listrik Portable',
        'Inspeksi Kabel Ekstensi & Stop Kontak Portabel', 'Pemasangan Lampu Penerangan Darurat Otomatis', 'K3 Baterai Lithium-Ion Stasiun Pengisian Daya',
        'Bahaya Gas Hidrogen Ruang Pengecasan Baterai Forklift', 'Pemeriksaan Kebocoran Arus Trafo Tenaga Minyak', 'Sistem Pemadam Otomatis Ruang Transformator Listrik',
        'K3 Pembangkit Listrik Tenaga Surya Roof-Top', 'K3 Pekerjaan SUTET Menggunakan Metode PDKB Bertegangan', 'Sistem Kelistrikan Ruang Bersih Farmasi & Ledakan',
        'Pemeriksaan Saluran Busduct Distribusi Daya Pabrik', 'Keselamatan Panel Listrik Distribusi Daya Utama (LVMDP)', 'Pengendalian Harmonik & Kualitas Daya Listrik Industri',
        'K3 Operasi Generator Set Diesel Darurat (Genset)', 'Uji Coba Fungsi Pemindah Daya Otomatis (Automatic Transfer Switch)', 'Pencegahan Kontak Langsung Bagian Bertegangan Mesin',
        'Pemeriksaan Saklar Emergency Stop Sirkuit Listrik', 'Pemberian Tanda Peringatan Bahaya Listrik Tegangan Tinggi', 'Sertifikasi Kompetensi Teknisi K3 Listrik Kemnaker',
        'Penyusunan Buku Rencana Instalasi Listrik Bangunan', 'K3 Instalasi Listrik Lokasi Tambang Bawah Tanah', 'K3 Kelistrikan Instalasi Maritim & Kapal Laut',
        'Pemeriksaan Rutin Sistem Pembumian Penangkal Petir Menara', 'Sistem Peringatan Dini Sambaran Petir (Lightning Early Warning)', 'Pengujian Ketahanan Isolasi Minyak Trafo (Dielectric Breakdown)',
        'Pelabelan Tegangan & Identifikasi Sirkuit Panel Listrik', 'Audit Kepatuhan K3 Instalasi Listrik Permenaker 12/2015'
      ]
    },
    {
      domain: 'Keselamatan Mekanik & Perancangan Mesin',
      prefix: 'Mekanik K3',
      terms: [
        'Prinsip Pelindung Mesin Tetap (Fixed Machine Guarding)', 'Pelindung Mesin Interlock (Interlocked Guarding)', 'Tirai Cahaya Sensor Keselamatan (Light Curtain Safety System)',
        'Tombol Penghenti Darurat Mesin (Emergency Stop Pushbutton)', 'Titik Jepit Mekanik Berputar (Nip Points & Pinch Points)', 'Bahaya Bagian Mesin Maju-Mundur (Reciprocating Motions)',
        'Bahaya Pemotongan & Penghancuran Pisau Mesin Industri', 'Pengaman Mesin Pres Logam Stamping Dua Tombol (Two-Hand Control)', 'Inspeksi Rem & Kopling Mesin Pres Daya Mekanik',
        'Pengaman Mesin Bubut & Pelindung Pencekam Benda Kerja (Chuck Guard)', 'Pengaman Mesin Gergaji Bundar & Pisau Pembelah (Riving Knife)', 'Inspeksi & Uji Ketajaman Serta Kecepatan Batu Gerinda (Grinding Wheel)',
        'Pengaman Rantai & Sabuk Penggerak Transmisi (Belt & Chain Guard)', 'Sistem Penahan Balik Konveyor Tambang (Holdback & Backstop)', 'Tali Tarik Penghenti Darurat Konveyor (Pull Cord Switch)',
        'Pengaman Sensor Kecepatan Nol Mesin Berputar', 'Pemeriksaan Integritas Tabung Kompresor Udara', 'Katup Pengaman Pelepas Tekanan Lebih Kompresor (Safety Valve)',
        'Pengaman Pintu Autoclave & Kunci Tekanan Otomatis', 'Inspeksi Rem Pengaman Kereta Gantung & Gondola Gedung', 'Sistem Pengunci Pintu Hoist Penumpang Konstruksi (Alimak)',
        'Pengaman Beban Lebih Derek Crane (Overload Limiter Indicator)', 'Saklar Pembatas Ketinggian Kait Crane (Anti-Two Block Switch)', 'Pengunci Kait Derek Keselamatan (Safety Hook Latch)',
        'Inspeksi Kerusakan Tali Baja Crane (Broken Wire & Kinking)', 'Pemeriksaan Keausan Rantai Pengangkat Beban (Chain Elongation)', 'Pemeriksaan Segel Sambungan Bejana Tekan (Gasket Leakage)',
        'Sistem Pengatur Suhu Otomatis Ketel Uap (Boiler Burner Control)', 'Pengukur Tinggi Muka Air Kaca Duga Boiler (Water Gauge Glass)', 'Pelindung Percikan Logam Cair Tungku Peleburan Smelter',
        'Pengaman Mesin Injection Molding & Pintu Sensor Hidrolik', 'Sistem Pemadam Api Otomatis Kabin Alat Berat Tambang', 'Kabin Pelindung Bahaya Terguling Alat Berat (ROPS System)',
        'Kabin Pelindung Bahaya Kejatuhan Benda (FOPS System)', 'Sensor Pendeteksi Keberadaan Pejalan Kaki Sekitar Forklift', 'Kamera & Kaca Spion Blindspot Alat Berat Industri',
        'Alarm Mundur Otomatis Truk & Alat Angkut Berat', 'Pengaman Penyangga Roda Truk Saat Bongkar Muat (Wheel Chock)', 'Penyangga Hidrolik Pengaman Bak Dump Truck Saat Servis',
        'Pemeriksaan Katup Penahan Beban Hidrolik Crane (Holding Valve)', 'Sistem Pencegah Tumpahan Bahan Curah Konveyor (Skirtboard)', 'Pengaman Mesin Pencampur Adonan & Mixer Industri Kimia',
        'Inspeksi Kebocoran Oli Hidrolik Tekanan Tinggi Mesin', 'Pengendalian Bahaya Semburan Fluida Tekanan Tinggi (Fluid Injection)', 'Pelindung Silinder Berputar Mesin Pemintal Tekstil',
        'Sistem Deteksi Suhu Lebih Bantalan Mesin (Bearing Temperature Monitor)', 'Sistem Penyeimbang Dinamis Kipas Industri (Impeller Balancing)', 'Pengaman Mesin Pemecah Batu Crusher Tambang',
        'Pemberian Label Peringatan Bahaya Mekanik Mesin', 'Audit Kepatuhan K3 Pesawat Tenaga & Produksi Permenaker 38/2016'
      ]
    },
    {
      domain: 'Tanggap Darurat, Pemadaman & Medis',
      prefix: 'Tanggap Darurat',
      terms: [
        'Struktur Organisasi Tanggap Darurat Pabrik (ERT Structure)', 'Sistem Komando Insiden Industri (Incident Command System)', 'Prosedur Pemberitahuan & Aktivasi Alarm Darurat',
        'Denah Rute Evakuasi & Penempatan Titik Kumpul (Assembly Point)', 'Pintu Keluar Darurat & Batang Dorong Panik (Panic Bar Door)', 'Lampu Penerangan Darurat Baterai Mandiri (Emergency Lighting)',
        'Penanda Jalur Evakuasi Fosforesen (Photoluminescent Exit Signs)', 'Pemeriksaan Koridor Bebas Hambatan (Egress Path Clearance)', 'Sistem Pengendalian Asap & Kipas Tekanan Positif Tangga',
        'Pemisahan Kompartemen Tahan Api 2 Jam (Fire Barrier Wall)', 'Pintu Tahan Api & Mekanisme Penutup Otomatis (Fire Rated Door)', 'Pemeriksaan Tekanan Tabung APAR Dry Chemical Powder',
        'Pemeriksaan Berat Bersih Tabung Pemadam Karbon Dioksida (CO2)', 'Penggunaan APAR Busa Mekanik (Aqueous Film Forming Foam - AFFF)', 'Penggunaan APAR Gas Bersih Pengganti Halon (Clean Agent Novec/FM200)',
        'Penggelaran Selang Pemadam Kanvas & Nozzle Variabel Jet-Spray', 'Pemeriksaan Saluran Pipa Kering & Basah Gedung (Dry/Wet Riser)', 'Pengoperasian Katup Pendaratan Hydrant (Landing Valve)',
        'Pemeriksaan Sambungan Pemadam Mobil Dinas Kebakaran (Siamese Connection)', 'Uji Aliran Air & Tekanan Statis Nozzle Hydrant (Flow Testing)', 'Pengoperasian Pompa Pemadam Diesel Saat Listrik Padam',
        'Pengisian Ulang Tangki Air Khusus Cadangan Pemadam Kebakaran', 'Selimut Pemadam Api Serat Kaca (Fire Blanket)', 'Penggunaan Baju Tahan Panas & Baju Pendekat Api (Proximity Suit)',
        'Penggunaan Set Alat Pelindung Diri Pemadam Kebakaran Lengkap (Bunker Gear)', 'Teknik Membawa Korban Darurat Satu & Dua Penolong', 'Penggunaan Tandu Lipat & Tandu Sekop (Scoop Stretcher)',
        'Penggunaan Papan Tulang Belakang Keras (Long Spine Board - LSB)', 'Pemasangan Penyangga Leher Korban Trauma (Cervical Collar)', 'Pemasangan Bidai Kayu & Bidai Vakum Fraktur Tulang',
        'Teknik Pembalutan Luka Tekan & Balut Cepat Steril', 'Penggunaan Torniket Hemostatik Pendarahan Arteri Berat', 'Resusitasi Jantung Paru (RJP) Satu & Dua Penolong Dewasa',
        'Pengoperasian Defibrilator Eksternal Otomatis (AED)', 'Manuver Heimlich Penanganan Tersedak Benda Asing', 'Penanganan Korban Sengatan Listrik & Luka Bakar Termal',
        'Penanganan Korban Keracunan Gas & Hirupan Asap Kebakaran', 'Penanganan Korban Syok Anafilaktik & Syok Hipovolemik', 'Pemeriksaan Isi Standar Kotak P3K Bentuk A, B, C Kemnaker',
        'Pengelolaan Ruang Pertolongan Pertama (First Aid Room) Pabrik', 'Sistem Triase Bencana Massal Metode START (Simple Triage)', 'Penyusunan Rencana Kontinjensi Bencana Alam Pabrik (Gempa/Banjir)',
        'Simulasi Skenario Evakuasi Kebakaran & Gempa Bumi Berkala', 'Sistem Pengeras Suara Komunikasi Publik Darurat (PA System)', 'Pengujian Sistem Telepon Darurat Langsung ke Pos Sekuriti',
        'Penyelamatan Korban Ketinggian Menggunakan Sistem Katrol Tali', 'Penyelamatan Korban Terjebak di Ruang Terbatas Menggunakan Tripod Winch', 'Penanganan Tumpahan Kimia Menggunakan Spill Kit B3 Cepat',
        'Evaluasi Waktu Tanggap Evakuasi Total Gedung (Evacuation Time Trial)', 'Penyusunan Laporan Penanganan Insiden & Kesiapan Tanggap Darurat'
      ]
    }
  ];

  for (const c of clusters) {
    for (let i = 0; i < c.terms.length; i++) {
      const termName = c.terms[i];
      const slug = `${termName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`.replace(/^-|-$/g, '');
      const fullTitle = `${termName}`;

      records.push({
        section: 'kamus-k3',
        slug,
        title: fullTitle,
        metaTitle: `${fullTitle}: Definisi, Prinsip & Penerapan K3`,
        description: `Penjelasan teknis ${fullTitle}: konsep dasar, mekanisme bahaya, standar pengendalian risiko, dan implementasi kepatuhan K3 industri.`,
        answer: `${fullTitle} adalah konsep dan standar teknis dalam domain ${c.domain} yang diterapkan untuk mengidentifikasi, mengukur, serta mengendalikan potensi bahaya kecelakaan dan penyakit akibat kerja di tempat kerja.`,
        highlights: [`Topik Teknis ${c.domain}`, 'Prinsip Rekayasa Keselamatan', 'Rujukan Standar Standar Regulasi', 'Panduan Implementasi Praktis'],
        blocks: [
          { heading: `Konsep & Definisi ${fullTitle}`, paragraphs: [`Dalam manajemen keselamatan dan kesehatan kerja, ${fullTitle} menjadi parameter penting untuk memahami dinamika risiko dan mekanisme pencegahan bahaya di lingkungan industri.`, 'Penerapan konsep ini membantu para praktisi HSE dan tim teknis dalam merancang tindakan mitigasi berbasis rekayasa teknis, pengendalian administratif, dan kepatuhan prosedur operasional.'] },
          { heading: 'Mekanisme Bahaya & Faktor Kritis', paragraphs: ['Aspek-aspek kritis yang perlu diperhatikan meliputi:'], bullets: ['Sumber potensi bahaya dan titik kegagalan sistem', 'Jalur pajanan terhadap tenaga kerja atau aset fasilitas', 'Kriteria batas aman dan indikator kinerja keselamatan', 'Kebutuhan peralatan inspeksi dan alat pelindung diri yang relevan'] },
          { heading: 'Standar & Praktik Pengendalian Terbaik', paragraphs: ['Pengendalian dilakukan secara berjenjang mengikuti hierarki kontrol K3: eliminasi bahaya, substitusi bahan, rekayasa teknik (seperti ventilasi dan penutup mesin), pengendalian administratif (SOP dan pelatihan), serta penyediaan APD terstandar.'] },
          { heading: 'Relevansi dengan Pelatihan & Kepatuhan Hukum', paragraphs: ['Pemahaman mendalam mengenai topik ini dipelajari secara komprehensif dalam program pelatihan Ahli K3 Umum, sertifikasi teknis kementerian, dan skema uji kompetensi BNSP terkait.'] }
        ],
        faqs: [
          { question: `Mengapa ${fullTitle} penting dipahami dalam penerapan K3?`, answer: 'Pemahaman materi ini menjadi dasar perumusan HIRADC, penyusunan instruksi kerja aman, dan pemenuhan audit kepatuhan SMK3 di fasilitas industri.' },
          { question: `Regulasi apa yang mengatur standar terkait ${fullTitle}?`, answer: 'Pengaturan mengacu pada UU No. 1 Tahun 1970, PP No. 50 Tahun 2012, serta peraturan menteri teknis ketenagakerjaan yang relevan.' }
        ],
        related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker'],
        sources: [
          { label: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja', url: 'https://jdih.kemnaker.go.id/katalog/uu-1-1970', publisher: 'Pemerintah RI / Kemnaker' },
          { label: 'PP No. 50 Tahun 2012 tentang Penerapan SMK3', url: 'https://jdih.kemnaker.go.id/katalog/pp-50-2012', publisher: 'Pemerintah RI / Kemnaker' }
        ],
        status: 'published',
        publishedAt: '2026-08-05',
        updatedAt: '2026-09-01',
        indexable: true,
        intent: `kamus k3 ${slug} definisi penerapan`,
        primaryKeyword: `${slug.replace(/-/g, ' ')}`,
        searchIntent: `pengertian, konsep teknis, dan implementasi ${fullTitle}`,
        intentType: 'informational',
        parentTopic: `Kamus & Topik Teknis ${c.domain}`,
        cannibalizationGroup: `kamus-${c.prefix.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        contentKind: 'term',
        primaryCtaText: 'Konsultasi Program Pelatihan Terkait',
        primaryCtaIntent: 'jadwal',
        secondaryCtaText: 'Lihat Katalog Pelatihan K3',
        secondaryCtaIntent: 'jadwal'
      });
    }
  }

  return records;
}

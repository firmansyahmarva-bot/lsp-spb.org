import { ContentRecordInput } from './build-inventory';
import { officialSources } from './sources';

interface TermCluster {
  domain: string;
  prefix: string;
  sourceKey: string;
  legalBasis: string;
  terms: string[];
}

export function generateKamusK3Records(): ContentRecordInput[] {
  const records: ContentRecordInput[] = [];

  const clusters: TermCluster[] = [
    {
      domain: 'Prinsip & Teori Kecelakaan Kerja',
      prefix: 'Teori K3',
      sourceKey: 'uu1',
      legalBasis: 'UU No. 1 Tahun 1970 & Standar Investigasi Insiden',
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
      domain: 'Higiene Industri & Toksikologi Lingkungan Kerja',
      prefix: 'Higiene Industri',
      sourceKey: 'permen05_2018',
      legalBasis: 'Permenaker No. 05 Tahun 2018 tentang K3 Lingkungan Kerja',
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
      sourceKey: 'kep187_1999',
      legalBasis: 'Kepmenaker No. 187/1999 & Standar Process Safety Management (PSM)',
      terms: [
        'Manajemen Keselamatan Proses (PSM 14 Elemen)', 'Batas Ledakan Bawah (Lower Explosive Limit - LEL)', 'Batas Ledakan Atas (Upper Explosive Limit - UEL)',
        'Titik Nyala (Flash Point) Cairan Mudah Terbakar', 'Titik Bakar (Fire Point) Bahan Bakar', 'Suhu Swasulut (Auto-Ignition Temperature)',
        'Klasifikasi Area Berbahaya Hazardous Area (Zonasi ATEX)', 'Peralatan Listrik Tahan Ledakan (Explosion Proof - Ex)', 'Ledakan Debu Industri (Dust Explosion Pentagram)',
        'Fenomena BLEVE (Boiling Liquid Expanding Vapor Explosion)', 'Fenomena VCE (Vapor Cloud Explosion)', 'Fenomena Jet Fire & Pool Fire Kilang',
        'Fenomena Flash Fire & Pakaian Tahan Api', 'Hazard and Operability Study (HAZOP)', 'Failure Mode and Effects Analysis (FMEA)',
        'Layers of Protection Analysis (LOPA)', 'Safety Instrumented System (SIS) & Safety Integrity Level (SIL)', 'Katup Pengaman Tekanan (Pressure Safety Valve - PSV)',
        'Cakram Pecah Tekanan (Rupture Disc System)', 'Sistem Flare & Pelepasan Tekanan Darurat', 'Pre-Startup Safety Review (PSSR Checklist)',
        'Integritas Mekanikal Peralatan Kritis (Mechanical Integrity)', 'Manajemen Bahaya Reaktivitas Kimia (Chemical Reactivity Hazard)', 'Pengendalian Runaway Reaction Reaktor Kimia',
        'Inerting Tangki Menggunakan Gas Nitrogen (N2 Purging)', 'Sistem Pendeteksi Gas Beracun & Api Terintegrasi (F&G System)', 'Penahan Api Saluran Pipa (Flame Arrester)',
        'Panel Pelepas Ledakan Bangunan (Explosion Relief Venting)', 'Sistem Pemadam Busa Curah Otomatis (Deluge Foam System)', 'Isolasi Katup Darurat Jarak Jauh (Emergency Isolation Valve - EIV)',
        'Pemodelan Sebaran Awan Gas Beracun (Gas Dispersion Modeling)', 'Zona Aman Radiasi Panas (Thermal Radiation Exclusion Zone)', 'Overpressure Wave & Kerusakan Struktur Bangunan',
        'Kuantifikasi Frekuensi Kejadian Bahaya (QRA Study)', 'Audit Kepatuhan Keselamatan Proses Kimia Terpadu', 'Sistem Drainase Kimia & Pemisah Minyak-Air (API Separator)',
        'Pengendalian Listrik Statis Pengisian Truk Tangki BBM', 'Prosedur Hot Tapping Jalur Pipa Bertekanan Aktif', 'Kajian Kelaikan Berkelanjutan (Asset Life Assessment)',
        'Penyelidikan Insiden Proses Menggunakan Metode TapRooT', 'Sistem Ventilasi Darurat Ruang Reaktor Kimia', 'Pemisahan Jarak Aman Tangki Timbun (Tank Separation Distance)',
        'Sistem Tanggul Pengaman Tumpahan Tangki (Bund Wall Containment)', 'Proteksi Katodik Pipa Bawah Tanah (Cathodic Protection)', 'Pengujian Korosi Akustik Emisi Pipa Tekanan Tinggi',
        'Katup Penutup Otomatis Darurat Gas (Automatic Shut-Off Valve)', 'Kajian Kelaikan Operasi Pabrik (Plant Pre-Commissioning)', 'Manajemen Suku Cadang Kritis Keselamatan (Safety Critical Spares)',
        'Simulasi Kegagalan Daya Total Kilang (Blackout Emergency Drill)', 'Penyusunan Safety Case Fasilitas Tingkat Bahaya Besar'
      ]
    },
    {
      domain: 'Keselamatan Listrik & Mekanikal Industri',
      prefix: 'Kelistrikan & Mekanik',
      sourceKey: 'permen12_2015',
      legalBasis: 'Permenaker No. 12/2015, Permenaker No. 38/2016 & PUIL 2020',
      terms: [
        'Prosedur Lockout Tagout (LOTO 6 Langkah)', 'Gembok Pengaman LOTO & Hasp Multi-Lock', 'Tag Bahaya Jangan Dioperasikan (Danger Tag)',
        'Pengujian Tegangan Nol (Zero Voltage Verification)', 'Bahaya Busur Api Listrik (Arc Flash Boundary)', 'Kategori APD Arc Flash (Cal/cm2 Rating)',
        'Sistem Pembumian Proteksi (Protective Grounding)', 'Penyalur Petir Konvensional Franklin & Sangkar Faraday', 'Penyalur Petir Elektrostatis Early Streamer Emission (ESE)',
        'Tahanan Pembumian Maksimum 5 Ohm (Grounding Resistance)', 'Gawai Proteksi Arus Sisa (Residual Current Device - RCD/GFCI)', 'Pemutus Sirkuit Udara (Air Circuit Breaker - ACB)',
        'Pemutus Sirkuit Casing Terpasang (Molded Case Circuit Breaker - MCCB)', 'Inspeksi Termografi Titik Panas Panel Listrik (Infrared Thermography)', 'Klasifikasi Tingkat Perlindungan Enklosur (IP Rating)',
        'Pengaman Titik Operasi Mesin (Point of Operation Guarding)', 'Tirai Sinar Sensor Keselamatan (Safety Light Curtain)', 'Saklar Interlock Pengaman Pintu Mesin (Safety Interlock Switch)',
        'Tombol Penghenti Darurat (Emergency Stop Mushroom Button)', 'Kontrol Pengoperasian Dua Tangan (Two-Hand Control Device)', 'Pengaman Transmisi Sabuk & Roda Gigi (Belt & Gear Guarding)',
        'Batas Beban Kerja Aman Alat Angkat (Safe Working Load - SWL)', 'Indikator Momen Beban Crane (Load Moment Indicator - LMI)', 'Sudut Angkat Kritis Sling Tali Kawat Baja (Sling Angle Tension)',
        'Uji Tarik & Uji Beban Lebih (Proof Load Overload Test)', 'Inspeksi Kawat Putus Sling Baja (Wire Rope Broken Wires Limit)', 'Faktor Keamanan Tali & Alat Angkat (Safety Factor 5:1)',
        'Penyangga Kaki Crane (Outrigger Pad & Ground Bearing Pressure)', 'Katup Pengurang Tekanan Uap (Pressure Reducing Valve - PRV)', 'Gelas Penduga Ketinggian Air Boiler (Water Level Gauge Glass)',
        'Sistem Blowdown Otomatis Ketel Uap (Automatic Boiler Blowdown)', 'Katup Pengaman Tekanan Ganda Bejana Uap (Dual Safety Relief Valve)',
        'Uji Beban Dinamis & Statis Crane Angkat (Crane Proof Testing)', 'Pemeriksaan Batas Keausan Hook Kait Crane (Hook Throat Opening Limit)',
        'Sistem Rem Darurat Otomatis Hoist Crane (Fail-Safe Electromagnetic Brake)', 'Pengaman Batas Angkat Ketinggian Hook (Upper Limit Switch Crane)',
        'Pengaman Anti-Benturan Antar Crane (Anti-Collision Sensor System)', 'Perangkap Air & Pemisah Kondensat Jalur Udara Kompresor (Air Water Separator)',
        'Tangki Penerima Udara Kompresor (Air Receiver Tank Inspection)', 'Pemeriksaan Korosi Bawah Insulasi Pipa Uap (CUI Ultrasonic Testing)',
        'Pengaman Sabuk Konveyor Tali Tarik Darurat (Emergency Pull Cord Switch)', 'Pembersih Scraping Belt Konveyor (Conveyor Belt Scraper Safety)',
        'Pengaman Sensor Kecepatan Putar Konveyor (Zero Speed Switch Under-Speed)', 'Pengaman Pelindung Pisau Mesin Bubut (Lathe Chuck Shield Interlock)',
        'Pengaman Jarak Dudukan Gerinda (Bench Grinder Tool Rest Gap 3mm)', 'Pemeriksaan Keseimbangan Roda Gerinda (Grinding Wheel Ring Test)',
        'Pengaman Pedal Kaki Mesin Stamping (Shrouded Foot Pedal Guard)', 'Pengaman Sensor Tirai Laser Mesin Tekuk Plat (Press Brake Laser Guard)',
        'Sistem Interlock Kunci Terjebak Mekanikal (Trapped Key Interlock System)', 'Pengaman Pintu Lift Interlock Mekanik & Elektrik (Elevator Door Interlock)'
      ]
    },
    {
      domain: 'Ergonomi & Faktor Manusia di Tempat Kerja',
      prefix: 'Ergonomi K3',
      sourceKey: 'permen05_2018',
      legalBasis: 'Permenaker No. 05 Tahun 2018 & Standar Ergonomi Kerja',
      terms: [
        'Gangguan Tulang Otot Rangka Akibat Kerja (Musculoskeletal Disorders - MSDs)', 'Metode Penilaian Cepat Seluruh Tubuh (Rapid Entire Body Assessment - REBA)',
        'Metode Penilaian Cepat Anggota Tubuh Atas (Rapid Upper Limb Assessment - RULA)', 'Persamaan Pengangkatan Beban Manual Standar NIOSH (NIOSH Lifting Equation)',
        'Batas Beban Pengangkatan yang Direkomendasikan (Recommended Weight Limit - RWL)', 'Indeks Pengangkatan Beban Berisiko (Lifting Index - LI)',
        'Analisis Beban Kerja Postur OWAS (Ovako Working Posture Analysis System)', 'Metode Penilaian Risiko Gerakan Berulang (Job Strain Index - JSI)',
        'Penilaian Regangan Otot Ekstremitas Atas (Quick Exposure Check - QEC)', 'Desain Stasiun Kerja Duduk-Berdiri Ergonomis (Sit-Stand Workstation)',
        'Tinggi Meja Kerja Sesuai Posisi Siku Istirahat', 'Pencahayaan Visual Task Bebas Silau (Glare Control & Visual Fatigue)',
        'Penyesuaian Kursi Kerja Ergonomis 5 Kaki (Lumbar Support & Armrest)', 'Pencegahan Sindrom Carpal Tunnel (CTS) Operator Komputer',
        'Beban Kerja Mental Karyawan (NASA Task Load Index - NASA-TLX)', 'Kelelahan Kerja Akibat Shift Malam (Circadian Rhythm Disruption)',
        'Manajemen Waktu Istirahat Mikro (Micro-Breaks & Muscle Stretching)', 'Ergonomi Partisipatif Lini Produksi Manufaktur',
        'Antropometri Desain Alat Kerja Populasi Indonesia', 'Getaran Lengan-Tangan Perkakas Gerinda (Hand-Arm Vibration Syndrome - HAVS)',
        'Getaran Seluruh Tubuh Pengemudi Alat Berat (Whole-Body Vibration - WBV)', 'Pengendalian Stres Kerja & Program Konseling Karyawan',
        'Ergonomi Rumah Sakit: Teknik Memindahkan Pasien Lumpuh', 'Ergonomi Kasir Ritel & Pengurangan Putaran Pinggang Berulang',
        'Ergonomi Pergudangan: Penataan Ketinggian Rak Zona Emas (Knuckle to Shoulder)', 'Pencegahan Nyeri Punggung Bawah (Low Back Pain Mitigation)',
        'Ergonomi Pekerja Komputer VDT & Aturan 20-20-20 Istirahat Mata', 'Alat Bantu Angkat Mekanis Vacuum Lifter & Scissor Table',
        'Penilaian Faktor Psikososial Kerja Berdasarkan SNI 9011:2021', 'Audit Kepatuhan Standar Ergonomi Permenaker 05/2018',
        'Penataan Jangkauan Tangan Area Kerja Primer & Sekunder', 'Desain Pegangan Perkakas Tangan Ergonomis (Handle Diameter & Grip)',
        'Pencegahan Trigger Finger pada Pekerja Perakitan Kabel', 'Pencegahan Tendonitis Bahu Operator Pengangkatan Di Atas Kepala',
        'Pengukuran Beban Kerja Fisik Menggunakan Denyut Jantung Kardiovaskular', 'Evaluasi Tingkat Konsumsi Oksigen Kerja Fisik Berat (VO2 Max Testing)',
        'Desain Antarmuka Manusia-Mesin (Human-Machine Interface / HMI Ergonomics)', 'Pencegahan Kelelahan Mata Operator Ruang Kontrol Sentral (CCTV Fatigue)',
        'Pengaturan Rotasi Kerja Shift Mengurangi Beban Otot Monoton', 'Penyediaan Matras Anti-Lelah Berdiri Lama (Anti-Fatigue Floor Mat)',
        'Desain Jalur Lalu Lintas Pejalan Kaki Pabrik Bebas Hambatan Sandungan', 'Pemeriksaan Getaran Jok Kursi Operator Truk Tambang Suspensi Udara',
        'Desain Tata Letak Tombol Darurat yang Mudah Dijangkau Seluruh Postur', 'Desain Ruang Istirahat Pekerja yang Tenang & Memulihkan Stamina',
        'Pengukuran Tingkat Kejenuhan Kerja (Occupational Burnout Inventory)', 'Program Senam Peregangan Kerja Bersama Setiap Pukul 10 & 14',
        'Analisis Kesalahan Manusia Berbasis Kognitif (Cognitive Work Analysis)', 'Desain Kemasan Barang Maksimum 20 Kg untuk Angkat Manual',
        'Pelatihan Teknik Mengangkat Beban Tekuk Lutut Punggung Lurus', 'Penyusunan Program Manajemen Ergonomi Terpadu Korporasi'
      ]
    },
    {
      domain: 'Proteksi Kebakaran Aktif-Pasif & Tanggap Darurat',
      prefix: 'Fire Safety',
      sourceKey: 'kep186_1999',
      legalBasis: 'Kepmenaker No. 186/1999 & Permenaker No. 04/1980',
      terms: [
        'Tetrahedron Api (Bahan Bakar, Panas, Oksigen, Reaksi Rantai)', 'Klasifikasi Kebakaran Kelas A, B, C, D, K Standar Nasional',
        'Media Pemadam Serbuk Kimia Kering (Dry Chemical Powder Multi-Purpose)', 'Media Pemadam Gas Karbon Dioksida (CO2 Clean Agent)',
        'Media Pemadam Busa Mekanik (Aqueous Film Forming Foam - AFFF)', 'Media Pemadam Kimia Basah (Wet Chemical Kalium Asetat)',
        'Media Pemadam Gas Bersih Pengganti Halon (FM-200 / Novec 1230)', 'Pemeriksaan Jarum Indikator Tekanan Tabung APAR (Pressure Gauge)',
        'Metode Pengoperasian APAR PASS (Pull, Aim, Squeeze, Sweep)', 'Jarak Jangkau Penempatan APAR Maksimum 15 Meter',
        'Jaringan Pipa Hydrant Basah (Wet Riser System) Gedung', 'Jaringan Pipa Hydrant Kering (Dry Riser System) Khusus Damkar',
        'Pilar Hydrant Luar Halaman Gedung (Outdoor Yard Hydrant Pillar)', 'Kotak Hydrant Dalam Gedung (Indoor Fire Hose Cabinet)',
        'Nozzle Pemadam Pancaran Padat & Tirai Kabut (Jet-Spray Fog Nozzle)', 'Kopling Selang Pemadam Standar Machino & Storz',
        'Kopling Kembar Mobil Dinas Pemadam (Siamese Connection)', 'Pompa Pemadam Utama Elektrik & Pompa Cadangan Diesel',
        'Pompa Penjaga Tekanan Pipa Hydrant (Jockey Pump System)', 'Kepala Sprinkler Otomatis Kaca Termosensitif (Glass Bulb Sprinkler)',
        'Panel Kontrol Alarm Kebakaran Utama (Fire Alarm Control Panel - MCFA)', 'Detektor Asap Optik Fotoelektrik (Photoelectric Smoke Detector)',
        'Detektor Panas Temperatur Tetap & Kenaikan Laju (Fixed & RoR Heat Detector)', 'Detektor Api Sinar Ultraviolet & Inframerah (UV/IR Flame Detector)',
        'Tombol Manual Panggil Darurat Kebakaran (Manual Call Point / Break Glass)', 'Lonceng & Lampu Strobo Alarm Evakuasi Gedung (Strobe Siren)',
        'Kipas Tekanan Udara Positif Tangga Darurat (Pressurized Stairwell Fan)', 'Pintu Kebakaran Tahan Api 2 Jam dengan Panic Exit Device',
        'Dinding Pemisah Kompartemen Api (Fire Separation Barrier)', 'Tanda Petunjuk Jalur Keluar Darurat Menyala (Photoluminescent Exit Sign)',
        'Sistem Pemadam Busa Udara Bertekanan Tinggi (Compressed Air Foam System - CAFS)', 'Sistem Pemadam Kabut Air Bertekanan Tinggi (Water Mist System)',
        'Katup Pengendali Aliran Alarm Sprinkler (Alarm Check Valve & Water Motor Gong)', 'Saklar Aliran Air Sprinkler (Vane-Type Water Flow Switch)',
        'Kepala Sprinkler Respon Cepat Hunian (Early Suppression Fast Response - ESFR)', 'Sistem Pre-Action Sprinkler Ruang Server & Arsip Berharga',
        'Sistem Pemadam Total Flooding Karbon Dioksida Tekanan Tinggi', 'Sistem Pemadam Gas Inert IG-541 Inergen & Gas Campuran N2/Ar/CO2',
        'Katup Pelepas Tekanan Otomatis Ruang Gas Total Flooding (Pressure Relief Vent)', 'Sistem Pipa Pemadam Dapur Restoran Hood Ansulex K-Class',
        'Sistem Tirai Air Pembatas Radiasi Dinding Tangki (Water Spray Deluge Curtain)', 'Monitor Meriam Air & Busa Pemadam Kebakaran Industri (Fire Water Monitor)',
        'Peredam Asap Otomatis Saluran Ducting AC (Motorized Smoke Damper)', 'Penyekat Api Penetrasi Kabel Dinding (Firestop Penetration Sealant)',
        'Kaca Jendela Tahan Api Berkawat Baja (Wired Fire Rated Glass)', 'Lampu Penerangan Darurat Mandiri Baterai (Emergency Battery Light)',
        'Papan Rencana Operasi Tanggap Darurat Kebakaran Gedung (Fire Safety Plan Map)', 'Sistem Pengeras Suara Komunikasi Darurat Massal (Public Address Voice Evacuation)',
        'Titik Kumpul Evakuasi Luar Ruangan Aman (Emergency Assembly Point Station)', 'Audit Kesiapan Sarana Proteksi Kebakaran Gedung Sesuai Permenaker 02/1983'
      ]
    },
    {
      domain: 'Metode Analisis Risiko, Audit & Investigasi Insiden',
      prefix: 'Risk & Audit',
      sourceKey: 'pp50',
      legalBasis: 'PP No. 50 Tahun 2012 & Standar ISO 31000 / ISO 45001',
      terms: [
        'Matriks Risiko 5x5 Tingkat Kemungkinan & Keparahan', 'Analisis Bahaya Awal (Preliminary Hazard Analysis - PHA)',
        'What-If Analysis untuk Tinjauan Proses Operasional', 'Job Safety Analysis (JSA) Langkah Kerja Bertahap',
        'Hazard Identification, Risk Assessment, and Determining Controls (HIRADC)', 'Kajian Bahaya & Operabilitas (Hazard and Operability / HAZOP)',
        'Pohon Analisis Kegagalan Logika Deduktif (Fault Tree Analysis - FTA)', 'Pohon Analisis Kejadian Logika Induktif (Event Tree Analysis - ETA)',
        'Analisis Lapisan Perlindungan Independen (LOPA)', 'Diagram Bowtie: Ancaman, Top Event, Penghalang & Konsekuensi',
        'Metode Investigasi Insiden 5-Why Analysis', 'Metode Investigasi Pohon Faktor Penyebab (Casual Factor Tree)',
        'Sistem Investigasi Terstruktur TapRooT Root Cause Tree', 'Pengumpulan Bukti Fisik, Posisi, Bagian, Kertas & Saksi (4P/PEOPLE)',
        'Wawancara Saksi Mata Insiden Menggunakan Teknik Kognitif', 'Penyusunan Tindakan Korektif & Tindakan Pencegahan (CAPA)',
        'Audit Kepatuhan 166 Kriteria SMK3 Berdasarkan PP 50/2012', 'Audit Sistem Manajemen K3 Berdasarkan Klausul ISO 45001',
        'Audit Kepatuhan Kontraktor (Contractor Safety Management System Audit)', 'Audit Keselamatan Pertambangan (SMKP Minerba Audit)',
        'Audit Keselamatan Konstruksi (SMKK PUPR Audit)', 'Audit Sertifikasi Tempat Uji Kompetensi (TUK) BNSP',
        'Penyusunan Lembar Ketidaksesuaian Audit Mayor & Minor (NCR Sheet)', 'Tinjauan Manajemen Berkala (Management Review Meeting)',
        'Evaluasi Kepatuhan Regulasi Ketenagakerjaan (Legal Compliance Register)', 'Perhitungan Statistik Kecelakaan Kerja: FR, SR, Safe Man Hours',
        'Sistem Manajemen Perubahan (Management of Change / MOC)', 'Tinjauan Keselamatan Sebelum Fasilitas Beroperasi (PSSR)',
        'Penyusunan Rencana Tanggap Darurat & Skenario Kontinjensi (ERP)', 'Audit Kematangan Budaya Keselamatan (Safety Culture Maturity Assessment)',
        'Metode Analisis Modus Kegagalan & Dampak Kritis (FMECA Criticality)', 'Kajian Kualitatif Bahaya Proses (Process Hazard Analysis / PHA Revalidation)',
        'Analisis Keandalan Manusia (Human Reliability Assessment / HRA Method)', 'Sistem Pelaporan Kejadian Hampir Celaka (Nearmiss Management System)',
        'Metode Analisis Pohon Keputusan Keselamatan (Decision Tree Safety Analysis)', 'Pemetaan Zona Risiko Fasilitas Industri (Facility Risk Contouring)',
        'Simulasi Perambatan Api & Asap Berbasis Komputasi (CFD Fire Modeling)', 'Audit Due Diligence K3 untuk Merger & Akuisisi Pabrik',
        'Audit Kesiapan Tanggap Darurat Bencana Alam Gempa & Banjir', 'Penyusunan Matriks Kompetensi & Kebutuhan Pelatihan K3 (TNA Matrix)',
        'Metode Analisis Biaya Manfaat Investasi Keselamatan (Cost-Benefit Safety Analysis)', 'Penetapan Indikator Kinerja K3 Terkemuka (Leading KPI Scorecard)',
        'Audit Kepatuhan Pelabelan & Lembar Data Keselamatan Kimia GHS', 'Audit Keselamatan Instalasi Kelistrikan & Penyalur Petir Pabrik',
        'Audit Higiene Industri & Pengukuran Faktor Fisika Kimia Kerja', 'Audit Ergonomi Lini Perakitan Menggunakan Video Analisis',
        'Penyusunan Laporan Tahunan Kinerja K3 untuk Dewan Komisaris', 'Audit Pemenuhan Tindakan Korektif Pasca Audit Pengawas Ketenagakerjaan',
        'Validasi Efektivitas Barikade Fisik dalam Diagram Bowtie', 'Audit Integritas Dokumen Izin Kerja Aman Terintegrasi (PTW Audit)'
      ]
    }
  ];

  for (const c of clusters) {
    const src = officialSources[c.sourceKey] || officialSources.uu1;
    for (let i = 0; i < c.terms.length; i++) {
      const termName = c.terms[i];
      const slug = `${termName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`.replace(/^-|-$/g, '');
      const fullTitle = `${termName}`;
      const keyword = `${slug.replace(/-/g, ' ')} k3`.trim();

      records.push({
        section: 'kamus-k3',
        slug,
        title: fullTitle,
        metaTitle: `${fullTitle}: Definisi, Rumus & Standar K3`,
        description: `Penjelasan lengkap ${fullTitle} dalam domain ${c.domain}: pengertian, prinsip rekayasa keselamatan, dasar hukum ${c.legalBasis}, dan implementasi mitigasi di industri.`,
        answer: `${fullTitle} adalah parameter, metodologi, dan standar teknis fundamental dalam domain ${c.domain} yang diterapkan untuk mengidentifikasi potensi kegagalan sistem, mengukur paparan bahaya, serta menetapkan kontrol rekayasa dan kepatuhan hukum berdasarkan ${c.legalBasis}.`,
        highlights: [
          `Domain: ${c.domain}`,
          `Kategori: ${c.prefix}`,
          `Dasar Rujukan: ${c.legalBasis}`,
          'Aplikasi: Penilaian Risiko HIRADC, Inspeksi Lapangan & Audit SMK3'
        ],
        blocks: [
          {
            heading: `Konsep & Definisi Teknis ${fullTitle}`,
            paragraphs: [
              `Dalam rekayasa keselamatan dan kesehatan kerja modern, ${fullTitle} menjadi instrumen kritis untuk memetakan dinamika risiko di lingkungan kerja industri. Penerapannya memungkinkan para engineer dan praktisi HSE merancang sistem proteksi yang efektif sebelum terjadinya kegagalan fatal.`,
              `Prinsip ini memiliki keterkaitan langsung dengan pemenuhan ${c.legalBasis}, di mana pengurus fasilitas diwajibkan memastikan seluruh sarana teknis, batas paparan lingkungan, dan perilaku operasional terkendali dalam batas toleransi aman.`
            ]
          },
          {
            heading: 'Mekanisme Bahaya & Titik Kritis Pengendalian',
            paragraphs: [
              'Analisis mendalam terhadap topik ini mencakup pemahaman faktor-faktor pemicu dan titik kritis sistem:',
            ],
            bullets: [
              'Identifikasi sumber energi berbahaya, jalur pajanan, dan skenario kegagalan material/komponen',
              'Penetapan ambang batas kuantitatif, nilai toleransi aman, dan parameter monitoring berkala',
              'Penerapan hirarki kontrol K3: Eliminasi, Substitusi, Rekayasa Teknik, Pengendalian Administratif, dan APD',
              'Penyusunan prosedur tanggap darurat dan verifikasi efektivitas perlindungan protektif'
            ]
          },
          {
            heading: 'Implementasi Praktis di Tempat Kerja',
            paragraphs: [
              'Penerapan terpadu di lapangan diintegrasikan ke dalam dokumen HIRADC, instruksi kerja aman (SOP), izin kerja risiko tinggi (PTW), serta checklist inspeksi rutin harian tim operasional pabrik.'
            ]
          },
          {
            heading: 'Relevansi dengan Pembinaan & Sertifikasi K3',
            paragraphs: [
              'Pemahaman komprehensif mengenai parameter ini diajarkan secara terstruktur dalam program pelatihan sertifikasi Ahli K3 Umum, sertifikasi teknis spesialis kementerian, dan uji kompetensi BNSP di PT Kreasi Ultimate Berjaya.'
            ]
          }
        ],
        faqs: [
          { question: `Mengapa ${fullTitle} krusial dipahami dalam manajemen risiko K3?`, answer: `Karena ${fullTitle} menjadi dasar ilmiah dalam mendeteksi potensi bahaya, menghitung skor risiko, dan menentukan langkah mitigasi rekayasa yang terukur di tempat kerja.` },
          { question: `Regulasi apa yang menjadi rujukan kepatuhan terkait ${fullTitle}?`, answer: `Pengaturan kepatuhan mengacu pada ${c.legalBasis}, UU No. 1 Tahun 1970, serta standar teknis SNI / ISO / NFPA yang relevan.` },
          { question: `Bagaimana cara menguji atau mengukur pemenuhan ${fullTitle} di lapangan?`, answer: 'Pengukuran dilakukan melalui inspeksi visual berkala, pengujian instrumen kalibrasi, pengkajian dokumen HIRADC/JSA, dan audit internal sistem manajemen K3 fasilitas.' }
        ],
        related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker', 'jadwal'],
        sources: [src, officialSources.uu1, officialSources.pp50],
        status: 'published',
        publishedAt: '2026-08-01',
        updatedAt: '2026-09-01',
        indexable: true,
        intent: `kamus k3 ${slug} definisi rumus standar penerapan`,
        primaryKeyword: keyword,
        searchIntent: `pengertian, rumus, standar teknis, dan penerapan ${fullTitle}`,
        intentType: 'informational',
        parentTopic: `Kamus K3 ${c.domain}`,
        cannibalizationGroup: `kamus-${c.prefix.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        contentKind: 'term',
        primaryCtaText: `Konsultasi Pelatihan Terkait ${fullTitle.split('(')[0].trim()}`,
        primaryCtaIntent: 'jadwal',
        secondaryCtaText: 'Lihat Program Pembinaan K3',
        secondaryCtaIntent: 'daftar'
      });
    }
  }

  return records;
}

import { ContentRecordInput } from './build-inventory';
import { officialSources } from './sources';

export function generatePelatihanRecords(): ContentRecordInput[] {
  const records: ContentRecordInput[] = [];

  // Group 1: Kelembagaan, SMK3 & Tata Kelola Regulasi (30 records)
  const kelembagaanSeeds = [
    { slug: 'ahli-k3-umum', title: 'Pelatihan Ahli K3 Umum (Kemnaker RI)', duration: '120 JP (12 Hari)', legal: 'Permenaker No. 02/MEN/1992', audience: ['Calon Sekretaris P2K3', 'HSE Officer', 'Fresh Graduate D3/S1'] },
    { slug: 'auditor-smk3', title: 'Pelatihan Auditor SMK3 (PP 50/2012)', duration: '40 JP (4 Hari)', legal: 'PP No. 50 Tahun 2012', audience: ['Ahli K3 Umum', 'Internal Auditor Perusahaan', 'Management Representative'] },
    { slug: 'lead-auditor-smk3', title: 'Pelatihan Lead Auditor SMK3 Kemnaker RI', duration: '50 JP (5 Hari)', legal: 'PP No. 50 Tahun 2012', audience: ['Auditor Senior', 'Konsultan K3', 'HSE Manager'] },
    { slug: 'pembinaan-p2k3', title: 'Pelatihan Tata Kelola & Sekretariat P2K3 Perusahaan', duration: '24 JP (3 Hari)', legal: 'Permenaker No. 04/MEN/1987', audience: ['Pengurus P2K3', 'HRD & HSE Koordinator', 'Manajemen Perusahaan'] },
    { slug: 'implementasi-smk3-pp-50', title: 'Pelatihan Implementasi 166 Kriteria SMK3 PP 50/2012', duration: '30 JP (3 Hari)', legal: 'PP No. 50 Tahun 2012', audience: ['Tim Implementator SMK3', 'Supervisor HSE', 'Section Head'] },
    { slug: 'integrasi-smk3-dan-iso-45001', title: 'Pelatihan Integrasi SMK3 PP 50/2012 & ISO 45001:2018', duration: '32 JP (4 Hari)', legal: 'PP 50/2012 & ISO 45001', audience: ['QHSSE Manager', 'System Specialist', 'Management Representative'] },
    { slug: 'auditor-internal-smk3', title: 'Pelatihan Auditor Internal SMK3 Perusahaan', duration: '24 JP (3 Hari)', legal: 'PP No. 50 Tahun 2012', audience: ['Internal Auditor Lintas Divisi', 'Staf HSE', 'Supervisor Produksi'] },
    { slug: 'manajemen-risiko-k3', title: 'Pelatihan Manajemen Risiko K3 & HIRADC Komprehensif', duration: '24 JP (3 Hari)', legal: 'PP No. 50 Tahun 2012 & ISO 31000', audience: ['Risk Officer', 'Safety Engineer', 'Pengawas Operasional'] },
    { slug: 'investigasi-insiden-k3', title: 'Pelatihan Investigasi Kecelakaan Kerja & Analisis Akar Masalah (RCA)', duration: '24 JP (3 Hari)', legal: 'Permenaker No. 03/MEN/1998', audience: ['Tim Investigasi Insiden', 'Safety Supervisor', 'Legal HSE'] },
    { slug: 'safety-leadership-eksekutif', title: 'Pelatihan Safety Leadership & Budaya K3 bagi Manajemen Eksekutif', duration: '16 JP (2 Hari)', legal: 'UU No. 1 Tahun 1970', audience: ['Direktur Operasional', 'General Manager', 'Kepala Pabrik'] },
    { slug: 'safety-accountability-pengawas', title: 'Pelatihan Akuntabilitas Keselamatan bagi Pengawas Lapangan', duration: '20 JP (2 Hari)', legal: 'UU No. 1 Tahun 1970', audience: ['Mandor', 'Group Leader', 'Site Supervisor'] },
    { slug: 'pengukuran-lingkungan-kerja', title: 'Pelatihan Dasar Pengukuran Faktor Bahaya Lingkungan Kerja', duration: '30 JP (3 Hari)', legal: 'Permenaker No. 05 Tahun 2018', audience: ['Teknisi Higiene Industri', 'HSE Officer', 'Staf Lab K3'] },
    { slug: 'safety-officer-k3', title: 'Pelatihan & Pembinaan Safety Officer Lapangan Terapan', duration: '40 JP (4 Hari)', legal: 'UU No. 1 Tahun 1970', audience: ['Safety Officer Pemula', 'Site Inspector', 'Koordinator K3'] },
    { slug: 'inspeksi-k3-terjadwal', title: 'Pelatihan Teknik Inspeksi K3 & Audit Visual Tempat Kerja', duration: '20 JP (2 Hari)', legal: 'PP No. 50 Tahun 2012', audience: ['Petugas Inspeksi K3', 'Anggota P2K3', 'Supervisor Lapangan'] },
    { slug: 'penyusunan-sop-k3', title: 'Pelatihan Penyusunan Standard Operating Procedure (SOP) & JSA Berbasis K3', duration: '24 JP (3 Hari)', legal: 'PP No. 50 Tahun 2012', audience: ['SOP Developer', 'HSE Staff', 'Engineer Proses'] },
    { slug: 'safety-induction-kontraktor', title: 'Pelatihan Manajemen Safety Induction & CSMS (Contractor Safety)', duration: '24 JP (3 Hari)', legal: 'Permenaker No. 05/MEN/1996 & PP 50', audience: ['Vendor Management', 'CSMS Officer', 'Pengawas Kontraktor'] },
    { slug: 'penilaian-kinerja-k3', title: 'Pelatihan KPI & Leading-Lagging Indicator Kinerja K3', duration: '20 JP (2 Hari)', legal: 'PP No. 50 Tahun 2012', audience: ['HSE Planner', 'Performance Analyst', 'Manager HSE'] },
    { slug: 'k3-pelaporan-wajib-naker', title: 'Pelatihan Tata Cara Pelaporan K3 & e-K3 Kemnaker RI', duration: '16 JP (2 Hari)', legal: 'UU No. 1 Tahun 1970 & Permenaker', audience: ['Staf Administrasi K3', 'Sekretaris P2K3', 'HR Compliance'] },
    { slug: 'komunikasi-k3-toolbox', title: 'Pelatihan Komunikasi Efektif K3 & Pemanduan Safety Toolbox Meeting', duration: '16 JP (2 Hari)', legal: 'UU No. 1 Tahun 1970', audience: ['Pengawas Lapangan', 'Foreman', 'Safety Champion'] },
    { slug: 'manajemen-perubahan-moc-k3', title: 'Pelatihan Management of Change (MOC) Keselamatan Kerja', duration: '24 JP (3 Hari)', legal: 'PP No. 50 Tahun 2012', audience: ['Project Engineer', 'Operations Manager', 'Safety Specialist'] },
    { slug: 'k3-perkantoran', title: 'Pelatihan K3 Perkantoran & Fasilitas Gedung Komersial', duration: '20 JP (2 Hari)', legal: 'Permenkes No. 48 Tahun 2016', audience: ['Building Manager', 'GA & Facility Officer', 'Pengurus K3 Gedung'] },
    { slug: 'k3-fasilitas-kesehatan', title: 'Pelatihan K3 Rumah Sakit & Fasilitas Pelayanan Kesehatan (K3RS)', duration: '32 JP (4 Hari)', legal: 'Permenkes No. 66 Tahun 2016', audience: ['Komite K3RS', 'Sanitarian Rumah Sakit', 'Kepala Instalasi'] },
    { slug: 'k3-laboratorium-kimia', title: 'Pelatihan K3 Laboratorium Pengujian Kimia & Biologis', duration: '24 JP (3 Hari)', legal: 'Permenaker No. 05 Tahun 2018', audience: ['Kepala Laboratorium', 'Analis Kimia', 'Lab Safety Officer'] },
    { slug: 'k3-gudang-logistik', title: 'Pelatihan K3 Pergudangan, Logistik & Material Handling', duration: '24 JP (3 Hari)', legal: 'Permenaker No. 08 Tahun 2020', audience: ['Warehouse Manager', 'Supervisor Logistik', 'Safety Inspector'] },
    { slug: 'k3-transportasi-armada', title: 'Pelatihan K3 Transportasi Darat & Manajemen Keselamatan Armada Fleet', duration: '24 JP (3 Hari)', legal: 'Permenhub & Standar K3', audience: ['Fleet Manager', 'Safety Dispatcher', 'Koordinator Transport'] },
    { slug: 'k3-perhotelan-pariwisata', title: 'Pelatihan K3 Sektor Perhotelan, Resort & Pariwisata', duration: '20 JP (2 Hari)', legal: 'Permenaker & Standar CHSE', audience: ['Chief Engineering Hotel', 'Security & Safety Head', 'HR Hotel'] },
    { slug: 'k3-ritel-pusat-belanja', title: 'Pelatihan K3 Ritel Modern & Pusat Perbelanjaan', duration: '20 JP (2 Hari)', legal: 'Permenaker & Permenkes', audience: ['Store Safety Officer', 'Mall Operation Manager', 'Tenant Coordinator'] },
    { slug: 'k3-telekomunikasi-bts', title: 'Pelatihan K3 Infrastruktur Menara Telekomunikasi & Fiber Optik', duration: '30 JP (3 Hari)', legal: 'Permenaker No. 09 Tahun 2016', audience: ['Tower Rigging Team', 'Site Engineer Telco', 'HSE Telco'] },
    { slug: 'k3-manufaktur-otomotif', title: 'Pelatihan K3 Lini Manufaktur & Perakitan Otomotif', duration: '30 JP (3 Hari)', legal: 'Permenaker No. 38 Tahun 2016', audience: ['Plant Safety Officer', 'Production Supervisor', 'Kaizen Engineer'] },
    { slug: 'k3-industri-makanan-minuman', title: 'Pelatihan K3 Industri Makanan, Minuman & Sanitasi Pabrik (F&B)', duration: '24 JP (3 Hari)', legal: 'Permenaker No. 05 Tahun 2018', audience: ['QA/QC Safety', 'Food Safety Team', 'HSE F&B Plant'] },
  ];

  // Group 2: Penanggulangan Kebakaran & Proteksi Api (30 records)
  const kebakaranSeeds = [
    { slug: 'k3-kebakaran', title: 'Pelatihan K3 Penanggulangan Kebakaran (Kelas D/C/B/A)', duration: '3 s.d. 6 Hari', legal: 'Kepmenaker No. KEP.186/MEN/1999', audience: ['Regu Pemadam Kebakaran', 'Petugas Tanggap Darurat', 'Building Safety'] },
    { slug: 'k3-kebakaran-kelas-d', title: 'Pelatihan Petugas Peran Kebakaran (Kelas D Kemnaker RI)', duration: '24 JP (3 Hari)', legal: 'Kepmenaker No. KEP.186/MEN/1999', audience: ['Staf Lintas Divisi', 'Anggota Regu APAR', 'Floor Warden'] },
    { slug: 'k3-kebakaran-kelas-c', title: 'Pelatihan Regu Penanggulangan Kebakaran (Kelas C Kemnaker RI)', duration: '48 JP (6 Hari)', legal: 'Kepmenaker No. KEP.186/MEN/1999', audience: ['Anggota Regu Hydrant Pabrik', 'Petugas Security', 'Tim Pemadam Lapangan'] },
    { slug: 'k3-kebakaran-kelas-b', title: 'Pelatihan Koordinator Unit Penanggulangan Kebakaran (Kelas B)', duration: '50 JP (6 Hari)', legal: 'Kepmenaker No. KEP.186/MEN/1999', audience: ['Fire Coordinator', 'Chief Safety', 'Kepala Regu Tanggap Darurat'] },
    { slug: 'k3-kebakaran-kelas-a', title: 'Pelatihan Ahli K3 Spesialis Penanggulangan Kebakaran (Kelas A)', duration: '60 JP (8 Hari)', legal: 'Kepmenaker No. KEP.186/MEN/1999', audience: ['Fire Safety Engineer', 'Penanggung Jawab Proteksi Kebakaran', 'Konsultan Fire'] },
    { slug: 'inspeksi-apar-hydrant', title: 'Pelatihan Inspeksi & Pengujian Sistem APAR dan Hydrant Pabrik', duration: '20 JP (2 Hari)', legal: 'Permenaker No. 04/MEN/1980', audience: ['Fire Inspector', 'Maintenance Technician', 'HSE Staff'] },
    { slug: 'sistem-sprinkler-fire-alarm', title: 'Pelatihan Pengoperasian & Pemeliharaan Sistem Sprinkler Otomatis & Alarm Api', duration: '24 JP (3 Hari)', legal: 'Permenaker No. 02/MEN/1983', audience: ['Teknisi MEP', 'Building Engineer', 'Fire Protection Staff'] },
    { slug: 'evakuasi-gedung-bertingkat', title: 'Pelatihan Manajemen Evakuasi Darurat & Fire Drill Gedung Bertingkat', duration: '16 JP (2 Hari)', legal: 'Kepmenaker No. 186/1999', audience: ['Building Warden', 'Emergency Team', 'HR & GA Gedung'] },
    { slug: 'pencegahan-kebakaran-migas', title: 'Pelatihan Pencegahan & Penanggulangan Bahaya Kebakaran Industri Migas', duration: '32 JP (4 Hari)', legal: 'Kepmenaker & Standar Migas', audience: ['Firefighter Migas', 'Operator Kilang', 'HSE Rig'] },
    { slug: 'kalkulasi-beban-kebakaran', title: 'Pelatihan Analisis Risiko & Kalkulasi Beban Api Fasilitas Industri', duration: '24 JP (3 Hari)', legal: 'Standar NFPA & SNI', audience: ['Fire Risk Assessor', 'Safety Engineer', 'Plant Designer'] },
    { slug: 'fire-blanket-dan-foam', title: 'Pelatihan Teknik Pemadaman Api Kimia Menggunakan Busa (Foam) & Fire Blanket', duration: '16 JP (2 Hari)', legal: 'Standar NFPA 11', audience: ['Operator Fuel Depot', 'Tanggap Darurat Kimia', 'Staf Gudang Pelarut'] },
    { slug: 'inspeksi-pintu-darurat-smoke-damper', title: 'Pelatihan Inspeksi Sarana Penyelamatan Jiwa & Kompartemen Asap', duration: '20 JP (2 Hari)', legal: 'Permenaker No. 02/1983', audience: ['Building Inspector', 'HSE Auditor', 'Facility Maintenance'] },
    { slug: 'simulasi-kebakaran-ruang-server', title: 'Pelatihan Proteksi Kebakaran Clean Agent Sistem Ruang Server & Data Center', duration: '20 JP (2 Hari)', legal: 'NFPA 2001 & SNI', audience: ['IT Facility Manager', 'Data Center Operator', 'MEP Engineer'] },
    { slug: 'fire-safety-manager', title: 'Pelatihan Kompetensi Fire Safety Manager Pengelola Properti', duration: '40 JP (4 Hari)', legal: 'Standar SKKNI Fire Manager', audience: ['Property Manager', 'Safety Director', 'Building Management'] },
    { slug: 'tanggap-darurat-ledakan-gas', title: 'Pelatihan Mitigasi & Tanggap Darurat Ledakan Gas Mudah Terbakar (LPG/LNG)', duration: '24 JP (3 Hari)', legal: 'Permenaker & Standar Migas', audience: ['Operator Terminal LPG', 'Petugas Pengisian Gas', 'HSE Officer'] },
    { slug: 'fire-pump-system-operation', title: 'Pelatihan Pengoperasian & Testing Pompa Pemadam Api (Fire Pump Jockey/Diesel)', duration: '20 JP (2 Hari)', legal: 'NFPA 20 & Permenaker', audience: ['Teknisi Pompa', 'Fire Crew', 'Operator Utilitas'] },
    { slug: 'uji-hidrostatis-tabung-apar', title: 'Pelatihan Uji Hidrostatis & Pengisian Ulang Media Tabung APAR', duration: '24 JP (3 Hari)', legal: 'Permenaker No. 04/1980', audience: ['Teknisi Servis APAR', 'Workshop Safety Crew', 'Vendor Refill APAR'] },
    { slug: 'fire-incident-command-system', title: 'Pelatihan Incident Command System (ICS) untuk Darurat Kebakaran Kompleks', duration: '30 JP (3 Hari)', legal: 'Standar Penanggulangan Bencana', audience: ['Incident Commander', 'Head of Security', 'Crisis Management Team'] },
    { slug: 'penanganan-kebakaran-baterai-ev', title: 'Pelatihan Mitigasi Bahaya Kebakaran Baterai Lithium-Ion & Kendaraan Listrik (EV)', duration: '20 JP (2 Hari)', legal: 'Standar Keselamatan Terkini', audience: ['EV Workshop Crew', 'Firefighter', 'HSE Stasiun Pengisian EV'] },
    { slug: 'sistem-deluge-dan-water-spray', title: 'Pelatihan Sistem Deluge & Water Spray Proteksi Trafo Daya Listrik', duration: '24 JP (3 Hari)', legal: 'NFPA 15 & Permenaker', audience: ['Teknisi Gardu Induk', 'HSE Pembangkit', 'Maintenance Listrik'] },
    { slug: 'penyelamatan-korban-kebakaran-smoke-rescue', title: 'Pelatihan Pencarian & Penyelamatan Korban dalam Ruangan Berasap (Search & Rescue)', duration: '24 JP (3 Hari)', legal: 'Standar SAR & K3', audience: ['Emergency Response Team', 'Fire Rescue Crew', 'Security Khusus'] },
    { slug: 'fire-safety-plan-penyusunan', title: 'Pelatihan Penyusunan Fire Safety Plan & Rencana Tindak Darurat Gedung', duration: '24 JP (3 Hari)', legal: 'Kepmenaker No. 186/1999', audience: ['Safety Officer Gedung', 'Facility Head', 'Konsultan Keselamatan'] },
    { slug: 'proteksi-kebakaran-pabrik-kayu-tekstil', title: 'Pelatihan Pengendalian Bahaya Debu Mudah Terbakar (Combustible Dust Explosion)', duration: '24 JP (3 Hari)', legal: 'NFPA 652 & Permenaker', audience: ['HSE Pabrik Kayu', 'Operator Dust Collector', 'Supervisor Tekstil'] },
    { slug: 'fire-fighting-breathing-apparatus-scba', title: 'Pelatihan Penggunaan SCBA (Self-Contained Breathing Apparatus) Pemadaman Api', duration: '20 JP (2 Hari)', legal: 'Standar Proteksi Pernapasan', audience: ['Fire Brigade Pabrik', 'Petugas Tanggap Darurat', 'ERT Rescue'] },
    { slug: 'uji-kebocoran-instalasi-pipa-gas-industri', title: 'Pelatihan Deteksi Gas & Uji Integritas Pipa Gas Bahan Bakar Industri', duration: '24 JP (3 Hari)', legal: 'Permenaker No. 37 Tahun 2016', audience: ['Teknisi Piping Gas', 'HSE Boiler', 'Operator Furnace'] },
    { slug: 'inspeksi-fire-stop-kompartemen', title: 'Pelatihan Inspeksi & Pemasangan Sistem Firestop Penetrasi Kabel/Pipa', duration: '16 JP (2 Hari)', legal: 'Standar Ketahanan Api SNI', audience: ['Site Inspector Sipil', 'MEP Contractor', 'Building Maintenance'] },
    { slug: 'keselamatan-pekerjaan-panas-hot-work-permit', title: 'Pelatihan Pengawasan Pekerjaan Panas (Hot Work Permit) & Fire Watcher', duration: '16 JP (2 Hari)', legal: 'Permenaker & Standar Pabrik', audience: ['Fire Watcher', 'Welding Inspector', 'Safety Officer Lapangan'] },
    { slug: 'penanggulangan-kebakaran-dapur-komersial', title: 'Pelatihan Proteksi Kebakaran Dapur Komersial (Wet Chemical System K-Class)', duration: '16 JP (2 Hari)', legal: 'NFPA 96 & Standar Restoran', audience: ['Chef & Kitchen Staff', 'F&B Safety Coordinator', 'Building Maintenance'] },
    { slug: 'audit-kepatuhan-proteksi-kebakaran', title: 'Pelatihan Audit Kepatuhan Sistem Proteksi Kebakaran Bangunan Industri', duration: '24 JP (3 Hari)', legal: 'Permenaker & PP 50/2012', audience: ['Auditor K3', 'Fire Safety Assessor', 'Corporate HSE'] },
    { slug: 'pemeliharaan-selang-nozzle-hydrant', title: 'Pelatihan Uji Tekan & Perawatan Selang serta Nozzle Hydrant Kebakaran', duration: '16 JP (2 Hari)', legal: 'NFPA 1962 & SNI', audience: ['Petugas Pemeliharaan Fire', 'Security Regu Api', 'Facility Crew'] },
  ];

  // Generate 8 more sub-domains with 30 records each = 240 + 60 = 300 total
  const remainingCategories = [
    {
      cat: 'listrik',
      prefix: 'K3 Kelistrikan & Energi',
      topics: [
        'K3 Listrik & Teknisi Listrik', 'Ahli K3 Listrik Kemnaker RI', 'Inspeksi Instalasi Listrik Industri', 'Prosedur Lockout-Tagout (LOTO)',
        'Mitigasi Bahaya Arc Flash Listrik', 'K3 Gardu Induk & Saluran Udara Tegangan Tinggi (SUTT)', 'Proteksi Sambaran Petir & Grounding',
        'K3 Pembangkit Listrik Tenaga Surya (PLTS)', 'K3 Pembangkit Listrik Tenaga Diesel & Uap', 'Pemeriksaan Panel Listrik Thermografi Inframerah',
        'K3 Pemeliharaan Motor Listrik & Transformator', 'Keselamatan Pengujian Relay Proteksi Listrik', 'K3 Baterai Bank & Sistem UPS Industri',
        'Isolasi Energi Listrik Tegangan Rendah & Menengah', 'K3 Pengelasan Listrik (SMAW/GMAW/GTAW)', 'Inspeksi Alat Uji Kelistrikan Portable (PAT Testing)',
        'K3 Pekerjaan Dalam Keadaan Bertegangan (PDKB)', 'Keselamatan Kerja Ruang Baterai Substation', 'Proteksi Bahaya Listrik Statis di Area Hazardous',
        'K3 Sistem Kelistrikan Rumah Sakit (Isolated Power System)', 'Audit Kepatuhan K3 Listrik Permenaker 12/2015', 'K3 Kelistrikan Pertambangan Bawah Tanah',
        'K3 Genset Darurat & Sistem Pemindah Otomatis (ATS)', 'K3 Instalasi Listrik Lokasi Basah & Korosif', 'Keselamatan Uji Isolasi Tahanan Kabel Megger',
        'K3 Kelistrikan Kilang Minyak & Petrokimia', 'K3 Penerangan Darurat & Lampu Evakuasi Gedung', 'Penyusunan Single Line Diagram & Dokumen K3 Listrik',
        'K3 Kelistrikan Industri Tekstil & Bahaya Debu', 'K3 Teknisi Listrik Pemeliharaan Fasilitas Komersial'
      ],
      legal: 'Permenaker No. 12 Tahun 2015',
      duration: '3 s.d. 12 Hari',
      audience: ['Teknisi Listrik', 'Ahli K3 Listrik', 'Supervisor MEP']
    },
    {
      cat: 'ketinggian',
      prefix: 'K3 Ketinggian & Ruang Terbatas',
      topics: [
        'K3 Bekerja di Ketinggian (TKPK / TKBT)', 'Tenaga Kerja Bangunan Tinggi Tingkat 1 (TKBT 1)', 'Tenaga Kerja Bangunan Tinggi Tingkat 2 (TKBT 2)',
        'Tenaga Kerja Pada Ketinggian Tingkat 1 (TKPK 1 Rope Access)', 'Tenaga Kerja Pada Ketinggian Tingkat 2 (TKPK 2 Rope Access)', 'Tenaga Kerja Pada Ketinggian Tingkat 3 (TKPK 3 Supervisor)',
        'K3 Scaffolding & Perancah Konstruksi', 'Supervisi & Inspeksi Perancah Scaffolding', 'Inspeksi & Sertifikasi Alat Proteksi Jatuh Personal',
        'Penyusunan Rencana Penyelamatan Ketinggian (Fall Rescue Plan)', 'K3 Pemasangan Jaring Pengaman & Safety Deck', 'K3 Bekerja di Atap Bangunan (Roof Work Safety)',
        'K3 Pemasangan Tower Komunikasi & Transmisi', 'K3 Gondola & Kereta Gantung Pembersih Kaca Gedung', 'K3 Pemangkasan Pohon Dekat Jaringan Listrik (Tree Trimming)',
        'K3 Ruang Terbatas (Confined Space Madya/Utama)', 'Petugas Masuk Ruang Terbatas (Authorized Entrant)', 'Petugas Madya Ruang Terbatas (Attendant)',
        'Petugas Utama & Penyelamat Ruang Terbatas (Rescue Team)', 'Pengujian Gas Atmosfer Berbahaya Ruang Terbatas', 'K3 Pembersihan Tangki Timbun Bahan Bakar (Tank Cleaning)',
        'K3 Pembersihan Saluran Gorong-Gorong & Manhole', 'K3 Reaktor Kimia & Vessel Bertekanan', 'Sistem Ventilasi Paksa & Purging Ruang Terbatas',
        'K3 Bekerja di Ruang Terbatas Industri Pangan & Silo', 'Penyusunan Izin Masuk Ruang Terbatas (Confined Space Permit)', 'K3 Pemeliharaan Terowongan Bawah Tanah',
        'Inspeksi Tripod & Winch Penyelamat Ruang Terbatas', 'K3 Ruang Terbatas Sektor Maritim & Void Tank Kapal', 'Audit Kepatuhan K3 Ketinggian & Ruang Terbatas'
      ],
      legal: 'Permenaker No. 09 Tahun 2016',
      duration: '3 s.d. 6 Hari',
      audience: ['Rope Access Tech', 'Scaffolder', 'Petugas Ruang Terbatas']
    },
    {
      cat: 'pesawat-angkat',
      prefix: 'K3 Pesawat Angkat & Angkut',
      topics: [
        'K3 Operator Forklift (Kelas 1 & 2)', 'K3 Operator Mobile Crane & Crane Beroda Rantai', 'K3 Operator Tower Crane Proyek Konstruksi',
        'K3 Operator Overhead Crane & Gantry Crane Pabrik', 'K3 Rigger & Juru Ikat Muatan Angkat (Slinging/Rigging)', 'K3 Operator Reach Stacker & Container Crane Pelabuhan',
        'K3 Operator Passenger Hoist & Alimak Konstruksi', 'K3 Operator Gondola Gedung Bertingkat', 'Inspeksi Kelayakan Alat Angkut & Rantai Sling Angkat',
        'Penyusunan Critical Lifting Plan & Manajemen Pengangkatan', 'K3 Operator Excavator & Backhoe Loader', 'K3 Operator Wheel Loader & Bulldozer Tambang',
        'K3 Operator Dump Truck Tambang & Articulated Hauler', 'K3 Operator Motor Grader & Pemadat Tanah (Compactor)', 'K3 Operator Telehandler & Manlift Boom Lift',
        'K3 Operator Scissor Lift & Aerial Work Platform (AWP)', 'K3 Operator Pita Transport (Conveyor Belt) Industri Semen', 'K3 Operator Escalator & Passenger Conveyor',
        'K3 Operator Elevator Penumpang & Lift Barang', 'Inspeksi & Uji Beban Statis-Dinamis Pesawat Angkat', 'K3 Operator Side Loader & Stacker Pergudangan',
        'K3 Pengangkatan Tandem Multi-Crane Konstruksi Jembatan', 'K3 Operator Crane Apung (Floating Crane) Maritim', 'Perawatan Tali Kawat Baja (Wire Rope) & Webbing Sling',
        'K3 Pengikatan & Penyeimbangan Beban Asimetris Berat', 'K3 Operator Truk Mixer Beton & Pompa Beton (Concrete Pump)', 'K3 Operator Piling Rig & Mesin Pancang Pondasi',
        'K3 Operator AGV (Automated Guided Vehicle) Pabrik Modern', 'Penyusunan SOP Pengangkatan Aman Sektor Migas', 'Audit Kepatuhan Lisensi K3 Pesawat Angkat Permenaker 08/2020'
      ],
      legal: 'Permenaker No. 08 Tahun 2020',
      duration: '3 s.d. 5 Hari',
      audience: ['Operator Alat Berat', 'Rigger', 'Inspector PAA']
    },
    {
      cat: 'pesawat-tenaga',
      prefix: 'K3 Pesawat Tenaga & Produksi, Boiler & Bejana',
      topics: [
        'K3 Operator Boiler & Ketel Uap (Kelas 1 & 2)', 'K3 Ahli Spesialis Pesawat Tenaga & Produksi (PTP)', 'K3 Operator Bejana Tekan & Tangki Timbun',
        'K3 Operator Kompresor Udara Bertekanan Industri', 'K3 Operator Mesin Turbin Uap & Gas Pembangkit', 'K3 Operator Mesin Bubut, Frais & Perkakas Logam',
        'K3 Operator Mesin Pres Logam & Stamping Machine', 'K3 Operator Mesin Pemotong & Penghancur Kayu (Sawmill)', 'K3 Operator Mesin Injection Molding Plastik',
        'K3 Operator Furnace, Tungku Peleburan & Kiln Semen', 'K3 Operator Mesin Penggiling & Crusher Tambang', 'Inspeksi Integritas Ketebalan Dinding Bejana Tekan (UT Testing)',
        'K3 Operator Autoclave & Sterilisator Tekanan Rumah Sakit', 'K3 Operator Mesin Cetak & Percetakan Skala Besar', 'K3 Operator Mesin Pengisi Kaleng & Botol Otomatis',
        'K3 Sistem Perpipaan Cairan & Gas Bertekanan Tinggi', 'K3 Safety Valve, Bursting Disc & Pengaman Tekanan Lebih', 'Inspeksi Kebocoran & Korosi Tangki Timbun BBM',
        'K3 Operator Ruang Mesin Pendingin Amonia (Cold Storage Refrigeration)', 'K3 Operator Mesin Laser Cutting & Plasma Cutting', 'K3 Operator Mesin CNC & Robotik Industri',
        'K3 Operator Drum Drier & Oven Pengering Industri', 'Penyusunan Prosedur Blowdown & Pengurasan Boiler Aman', 'K3 Operator Mesin Roll Calender Industri Karet/Plastik',
        'K3 Operator Mesin Pemintal & Penenun Tekstil', 'K3 Mesin Pengaduk Reaktor Kimia Berputar', 'Inspeksi Guarding Mesin & Sensor Interlock Pengaman',
        'K3 Operator Pemanas Fluida Termal (Thermal Oil Heater)', 'K3 Pengujian Hidrostatis Bejana Tekan & Pipa', 'Audit Kepatuhan K3 PTP & Bejana Tekan Permenaker 37 & 38/2016'
      ],
      legal: 'Permenaker No. 37 & 38 Tahun 2016',
      duration: '3 s.d. 6 Hari',
      audience: ['Operator Boiler', 'Teknisi Bejana Tekan', 'Maintenance Mesin']
    },
    {
      cat: 'kesehatan-higiene',
      prefix: 'Kesehatan Kerja, Higiene Industri & P3K',
      topics: [
        'Petugas P3K di Tempat Kerja Kemnaker RI', 'Pelatihan Dokter Perusahaan (Sertifikasi Hiperkes)', 'Pelatihan Paramedis Perusahaan (Sertifikasi Hiperkes)',
        'Higiene Industri Tingkat Muda (HIMU)', 'Higiene Industri Tingkat Madya (HIMA)', 'Higiene Industri Tingkat Utama (HIU)',
        'Ahli K3 Lingkungan Kerja Kemnaker RI', 'Pelatihan Ergonomi Industri & Pencegahan MSDs', 'Pelatihan Pengelolaan Program Fit to Work & MCU Karyawan',
        'Pelatihan Penilaian Bahaya Kebisingan & Audiometri Kerja', 'Pelatihan Program Pencegahan & Pengendalian Tuberkulosis (TBC) di Tempat Kerja', 'Pelatihan Pencegahan HIV/AIDS & NAPZA di Lingkungan Kerja',
        'Pelatihan Pengelolaan Stres Kerja & Kesehatan Mental Karyawan', 'Pelatihan Penilaian Iklim Kerja Panas (Heat Stress) & Indeks WBGT', 'Pelatihan Pengukuran Kualitas Udara Dalam Ruangan (Indoor Air Quality)',
        'Pelatihan Penilaian Getaran Seluruh Tubuh (WBV) & Lengan-Tangan (HAV)', 'Pelatihan Penanganan Gawat Darurat Medis Trauma di Lokasi Terpencil', 'Pelatihan Pengelolaan Kantin & Higiene Sanitasi Makanan Perusahaan',
        'Pelatihan Gizi Kerja & Produktivitas Tenaga Kerja', 'Pelatihan Pencegahan Penyakit Akibat Kerja (PAK) Sektor Kimia', 'Pelatihan Pengelolaan Limbah Medis B3 Rumah Sakit & Klinik Perusahaan',
        'Pelatihan Asesmen Pencahayaan Tempat Kerja Sesuai Standar Lux', 'Pelatihan Penggunaan AED (Automated External Defibrillator) & RJP Tingkat Lanjut', 'Pelatihan Desain Stasiun Kerja Ergonomis Perkantoran & VDT',
        'Pelatihan Pengawasan Kebugaran & Kelelahan Kerja (Fatigue Management)', 'Pelatihan Pemeriksaan Kesehatan Berkala & Khusus Ketenagakerjaan', 'Pelatihan Tanggap Darurat Wabah Infeksius di Tempat Kerja',
        'Pelatihan Pengendalian Vektor Penyakit & Pest Control Pabrik', 'Pelatihan Bimbingan Konseling Karyawan Pasca Kecelakaan Kerja', 'Audit Kepatuhan Kesehatan & Higiene Lingkungan Kerja Permenaker 05/2018'
      ],
      legal: 'Permenaker No. 05 Tahun 2018 & 15/2008',
      duration: '3 s.d. 10 Hari',
      audience: ['Petugas P3K', 'Dokter/Paramedis', 'Industrial Hygienist']
    },
    {
      cat: 'kimia-lingkungan',
      prefix: 'K3 Kimia, B3 & Pengendalian Lingkungan',
      topics: [
        'Ahli K3 Kimia Kemnaker RI', 'Petugas K3 Kimia Kemnaker RI', 'Manajemen Pengelolaan Bahan Berbahaya dan Beracun (B3)',
        'Pengelolaan & Penyimpanan Limbah B3 Industri', 'Pemahaman Lembar Data Keselamatan (LDK/MSDS) & Pelabelan GHS', 'Mitigasi Bahaya Paparan Gas Beracun H2S (Hydrogen Sulfide)',
        'Mitigasi Bahaya Paparan Klorin & Gas Asam Industri', 'K3 Penanganan Cairan Korosif Asam Kuat & Basa Kuat', 'Penyusunan Dokumen Chemical Spillage Response Plan',
        'K3 Operasional Instalasi Pengolahan Air Limbah (IPAL/WWTP)', 'K3 Operasional Insinerator Pembakar Sampah B3', 'Pengendalian Emisi Cerobong Udara & Gas Buang Industri',
        'K3 Pengangkutan Bahan Kimia B3 Jalur Darat', 'K3 Laboratorium Pengujian Limbah & Toksisitas', 'Mitigasi Bahaya Paparan Pelarut Organik (Solvent VOCs)',
        'K3 Pengelupasan Cat & Sandblasting Bahan Kimia', 'Penyusunan Neraca Limbah B3 & Manifest Elektronik Festronik', 'K3 Penyimpanan Bahan Kimia Mudah Meledak (Explosives)',
        'K3 Penyimpanan Bahan Kimia Oksidator Kuat & Peroksida', 'K3 Penanganan Pestisida & Bahan Agrokimia Perkebunan', 'Pengendalian Bahaya Asbes & Prosedur Asbestos Removal',
        'Pengendalian Bahaya Debu Silika Kristalin Industri Keramik/Semen', 'K3 Pembersihan Tumpahan Minyak di Perairan (Oil Spill Response)', 'Inspeksi & Sertifikasi Eyewash serta Emergency Shower Station',
        'K3 Pengoperasian Tangki Klorinasi PDAM & Pengolahan Air', 'K3 Industri Pelapisan Logam (Electroplating & Anodizing)', 'K3 Penanganan Logam Berat (Merkuri, Timbal, Kadmium)',
        'K3 Pemusnahan Obat Kedaluwarsa & Farmasi B3', 'Penyusunan Rencana Pengendalian Pencemaran Lingkungan Darurat', 'Audit Kepatuhan Pengelolaan K3 Kimia & B3 Kepmenaker 187/1999'
      ],
      legal: 'Kepmenaker No. 187/MEN/1999 & PP 74/2001',
      duration: '3 s.d. 12 Hari',
      audience: ['Petugas K3 Kimia', 'Ahli K3 Kimia', 'Environmental Officer']
    },
    {
      cat: 'konstruksi-sipil',
      prefix: 'K3 Konstruksi, Sipil & Proyek',
      topics: [
        'Ahli K3 Konstruksi (Tingkat Muda)', 'Ahli K3 Konstruksi (Tingkat Madya)', 'Ahli K3 Konstruksi (Tingkat Utama)',
        'Petugas Keselamatan Konstruksi (Safety Officer Proyek)', 'K3 Pekerjaan Penggalian Tanah Dalam (Excavation & Trenching)', 'K3 Pekerjaan Pembongkaran Struktur Bangunan (Demolition Safety)',
        'K3 Konstruksi Jembatan Bentang Panjang & Girder', 'K3 Pekerjaan Terowongan Bawah Tanah & Bored Tunnel', 'K3 Pekerjaan Pondasi Tiang Pancang & Bored Pile',
        'K3 Pekerjaan Pengecoran Beton Skala Besar (Mass Concrete)', 'K3 Konstruksi Bangunan Tinggi (High-Rise Building Construction)', 'K3 Pemasangan Fasad Kaca & Curtain Wall Gedung',
        'K3 Pekerjaan Struktur Baja Berat & Erection Steel', 'K3 Pekerjaan Pembesian & Pemotongan Tulangan Beton', 'Penyusunan Rencana Keselamatan Konstruksi (RKK Permen PUPR 10/2021)',
        'K3 Pekerjaan Pengaspalan & Konstruksi Jalan Raya', 'K3 Pekerjaan Konstruksi Bendungan & Tanggul Air', 'K3 Pekerjaan Reklamasi Pantai & Pengerukan Pasir',
        'K3 Pekerjaan Bawah Air (Underwater Construction & Diving)', 'Inspeksi Keselamatan Lalu Lintas Proyek (Traffic Management Konstruksi)', 'K3 Pemasangan Instalasi Mekanikal & Elektrikal Proyek',
        'K3 Pengujian Beban Dinamis Struktur Jembatan', 'K3 Manajemen Kamp Buruh & Fasilitas Sanitasi Proyek', 'K3 Pekerjaan Pengeboran & Grouting Geoteknik',
        'K3 Pekerjaan Konstruksi Rel Kereta Api & MRT', 'K3 Pekerjaan Saluran Pipa Minyak & Gas Bawah Tanah', 'K3 Pemasangan Scaffolding Gantung & Perancah Khusus',
        'Penyusunan JSA Khusus Aktivitas Konstruksi Berisiko Tinggi', 'K3 Pekerjaan Pengecatan Ketinggian Jembatan & Struktur Baja', 'Audit Kepatuhan Sistem Manajemen Keselamatan Konstruksi (SMKK)'
      ],
      legal: 'Permenaker No. 01/1980 & Permen PUPR 10/2021',
      duration: '4 s.d. 12 Hari',
      audience: ['Ahli K3 Konstruksi', 'Site Engineer', 'Project Manager']
    },
    {
      cat: 'migas-tambang',
      prefix: 'K3 Sektor Khusus (Migas, Tambang, Maritim & Energi)',
      topics: [
        'Ahli K3 Migas & Keselamatan Operasi Kilang', 'Pengawas K3 Migas (Safety Supervisor Rig/Kilang)', 'Operator K3 Migas Lapangan',
        'Pengawas Operasional Pertama (POP) Pertambangan', 'Pengawas Operasional Madya (POM) Pertambangan', 'Pengawas Operasional Utama (POU) Pertambangan',
        'K3 Pengeboran Sumur Minyak & Gas (Drilling Rig Safety)', 'K3 Pekerjaan Sumur Produksi & Workover Migas', 'K3 Fasilitas Produksi Lepas Pantai (Offshore Platform Safety)',
        'K3 Pipa Transmisi Gas Alam Tekanan Tinggi', 'K3 Pengolahan Gas Bumi & Liquefied Natural Gas (LNG)', 'K3 Pertambangan Batubara Terbuka (Open Pit Coal Mining)',
        'K3 Pertambangan Mineral Bawah Tanah (Underground Mining)', 'K3 Pengolahan & Pemurnian Mineral Smelter Nikel', 'K3 Peledakan Tambang & Penanganan Bahan Peledak (Blasting Safety)',
        'K3 Kestabilan Lereng & Dinding Tambang Terbuka', 'K3 Penimbunan Tailing & Manajemen Bendungan Tailing Tambang', 'K3 Pengangkutan Batubara Menggunakan Dump Truck Raksasa (Hauling)',
        'K3 Pembangkit Listrik Tenaga Panas Bumi (Geothermal Safety)', 'K3 Maritim & Keselamatan Bongkar Muat Pelabuhan (Stevedoring)', 'K3 Galangan Kapal & Perbaikan Kapal Dok (Shipyard Safety)',
        'K3 Pengelasan Bawah Air & Survey Integritas Kapal', 'K3 Penanganan Kargo Berbahaya di Pelabuhan (IMDG Code)', 'K3 Operasi Helideck Fasilitas Lepas Pantai',
        'K3 Keselamatan Penyelaman Komersial & Bekerja di Bawah Air', 'Penyusunan Safety Case Fasilitas Migas Lepas Pantai', 'K3 Manajemen Bahaya Radiasi Sinar Gamma Pengujian NDT Pipa',
        'K3 Penanganan Kebocoran Minyak Skala Besar di Laut', 'Penyusunan Sistem Manajemen Keselamatan Pertambangan (SMKP Minerba)', 'Audit Kepatuhan K3 Migas & Minerba Regulasi ESDM'
      ],
      legal: 'Permen ESDM No. 26/2018 & Standar Migas',
      duration: '4 s.d. 14 Hari',
      audience: ['HSE Migas', 'Pengawas Tambang (POP)', 'Safety Offshore']
    }
  ];

  // Populate first 60 from kelembagaan and kebakaran
  for (const s of kelembagaanSeeds) {
    records.push({
      section: 'pelatihan',
      slug: s.slug,
      title: s.title,
      metaTitle: `${s.title} | Pelatihan K3 Indonesia`,
      description: `Informasi silabus, persyaratan peserta, jadwal batch terdekat, dan konsultasi sertifikasi ${s.title} bersama PT Kreasi Ultimate Berjaya.`,
      answer: `${s.title} adalah program pelatihan resmi berdurasi ${s.duration} yang dirancang untuk membina ${s.audience.join(', ')} berlandaskan ${s.legal}.`,
      highlights: ['Sertifikasi Resmi Terstandar', `Durasi Pembinaan ${s.duration}`, `Acuan Hukum ${s.legal}`, 'Tersedia Kelas Publik & In-House Training'],
      blocks: [
        { heading: `Mengenal ${s.title}`, paragraphs: [`${s.title} diselenggarakan guna memenuhi standar keselamatan kerja nasional serta memastikan kepatuhan regulasi ${s.legal}. Pelatihan ini membekali peserta dengan keterampilan teknis dan manajerial yang komprehensif.`, `Program ini ditujukan khusus bagi ${s.audience.join(', ')} yang bertugas mengawasi dan mengimplementasikan norma keselamatan kerja di perusahaan.`] },
        { heading: 'Struktur Kurikulum & Pembahasan', paragraphs: ['Materi pembinaan mencakup pemaparan regulasi perundang-undangan K3, identifikasi potensi bahaya tempat kerja, tata cara pelaporan, dan studi kasus kecelakaan kerja aktual.'], bullets: ['Pemahaman Kebijakan & Regulasi Pemerintah', 'Analisis Risiko & Prosedur Kerja Aman', 'Penyusunan Laporan & Evaluasi Kepatuhan', 'Simulasi Lapangan & Ujian Evaluasi'] },
        { heading: 'Persyaratan Calon Peserta', paragraphs: ['Peserta diwajibkan melengkapi identitas diri (KTP), ijazah pendidikan terakhir yang relevan, pas foto, serta surat penugasan dari perusahaan bagi utusan instansi.', 'Tim admisi PT Kreasi Ultimate Berjaya menyediakan layanan pre-screening berkas pendaftaran bebas biaya guna memastikan kelayakan peserta sebelum proses pembayaran.'] },
        { heading: 'Penyelenggaraan & Konsultasi Proposal', paragraphs: ['Pelatihan tersedia dalam skema kelas publik reguler (metode Blended Online atau Tatap Muka) serta In-House Training yang disesuaikan secara khusus dengan kalender kerja dan profil risiko fasilitas perusahaan Anda.'] }
      ],
      faqs: [
        { question: `Berapa lama durasi pelaksanaan ${s.title}?`, answer: `Durasi program ini adalah ${s.duration} yang mencakup teori interaktif, studi kasus terpandu, dan evaluasi kelulusan.` },
        { question: `Apakah sertifikasi ${s.title} diakui secara nasional?`, answer: `Ya, sertifikasi mengacu pada ketentuan legalitas ${s.legal} yang diakui oleh kementerian dan industri di seluruh Indonesia.` }
      ],
      related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'panduan/biaya-pelatihan-k3', 'perbandingan/bnsp-vs-kemnaker'],
      sources: [officialSources.uu1, officialSources.pp50],
      status: 'published',
      publishedAt: '2026-08-15',
      updatedAt: '2026-09-01',
      indexable: true,
      intent: `pelatihan ${s.title} silabus jadwal biaya`,
      primaryKeyword: `pelatihan ${s.slug.replace(/-/g, ' ')}`,
      searchIntent: `informasi pendaftaran, kurikulum, dan jadwal ${s.title}`,
      intentType: 'commercial',
      parentTopic: 'Pelatihan K3 Indonesia',
      cannibalizationGroup: `pelatihan-kelembagaan`,
      contentKind: 'program',
      courseDetails: {
        level: 'Sertifikasi Resmi K3',
        duration: s.duration,
        method: 'Blended Online / Tatap Muka In-House',
        legalBasis: s.legal,
        targetAudience: s.audience,
        prerequisites: ['KTP & Ijazah Pendidikan Relevan', 'Surat Tugas / Rekomendasi Perusahaan'],
        certificationOutput: ['Sertifikat Pembinaan Resmi', 'Surat Keterangan Pembinaan', 'Buku Kerja & Modul'],
        syllabusModules: [
          { module: 'Kebijakan & Peraturan Perundang-undangan K3', topics: ['Dasar Hukum K3 Nasional', 'Hak dan Kewajiban Tenaga Kerja', 'Pengawasan Norma K3'] },
          { module: 'Identifikasi Bahaya & Pengendalian Risiko', topics: ['Metode Penilaian Risiko', 'Hierarki Pengendalian Bahaya', 'Standar Prosedur Kerja Aman'] },
          { module: 'Studi Kasus & Evaluasi Kelulusan', topics: ['Analisis Insiden Nyata', 'Penyusunan Kertas Kerja', 'Ujian Komprehensif'] }
        ]
      },
      primaryCtaText: `Tanya Jadwal ${s.title}`,
      primaryCtaIntent: 'jadwal',
      secondaryCtaText: 'Minta Proposal In-House',
      secondaryCtaIntent: 'perusahaan'
    });
  }

  for (const s of kebakaranSeeds) {
    records.push({
      section: 'pelatihan',
      slug: s.slug,
      title: s.title,
      metaTitle: `${s.title} | Pelatihan K3 Indonesia`,
      description: `Informasi silabus, jadwal batch, dan sertifikasi resmi ${s.title} untuk kesiapan tanggap darurat api di tempat kerja.`,
      answer: `${s.title} adalah program pelatihan proteksi dan penanggulangan bahaya kebakaran berdurasi ${s.duration} yang mengacu pada ${s.legal}.`,
      highlights: ['Sertifikasi Resmi Kebakaran', `Durasi Pembinaan ${s.duration}`, `Dasar Hukum ${s.legal}`, 'Praktik Pemadaman Api Nyata'],
      blocks: [
        { heading: `Gambaran Program ${s.title}`, paragraphs: [`${s.title} dirancang untuk mempersiapkan ${s.audience.join(', ')} agar memiliki kesiapsiagaan tinggi dalam mencegah, mengendalikan, dan memadamkan kebakaran di area kerja sesuai standar ${s.legal}.`] },
        { heading: 'Kurikulum & Materi Pelatihan', paragraphs: ['Peserta mempelajari teori pembentukan api, klasifikasi kebakaran, teknik pengoperasian APAR/Hydrant, serta manajemen evakuasi darurat.'], bullets: ['Teori Segitiga Api & Kimia Kebakaran', 'Pengoperasian APAR & Media Pemadam', 'Penggelaran Selang & Nozzle Hydrant', 'Prosedur Evakuasi & Penyelamatan Jiwa'] },
        { heading: 'Persyaratan & Sasaran Peserta', paragraphs: ['Program ini terbuka bagi karyawan operasional, regu pemadam internal, anggota P2K3, serta petugas keamanan pabrik dan gedung perkantoran.'] },
        { heading: 'Konsultasi In-House Training', paragraphs: ['PT Kreasi Ultimate Berjaya melayani penyelenggaraan pelatihan proteksi kebakaran langsung di fasilitas industri Anda lengkap dengan simulasi praktik pemadaman api.'] }
      ],
      faqs: [
        { question: `Apakah ada sesi praktik langsung pada ${s.title}?`, answer: 'Ya, pelatihan mencakup simulasi pemadaman api awal menggunakan APAR dan penggelaran sistem instalasi hydrant air.' },
        { question: `Berapa durasi pembinaan ${s.title}?`, answer: `Pelatihan dilaksanakan selama ${s.duration} yang mencakup teori kelas dan uji praktik lapangan.` }
      ],
      related: ['pelatihan/k3-kebakaran', 'pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker'],
      sources: [officialSources.uu1, officialSources.kep186],
      status: 'published',
      publishedAt: '2026-08-15',
      updatedAt: '2026-09-01',
      indexable: true,
      intent: `pelatihan ${s.title} jadwal materi biaya`,
      primaryKeyword: `pelatihan ${s.slug.replace(/-/g, ' ')}`,
      searchIntent: `informasi pendaftaran dan silabus ${s.title}`,
      intentType: 'commercial',
      parentTopic: 'K3 Kebakaran & Tanggap Darurat',
      cannibalizationGroup: `pelatihan-kebakaran`,
      contentKind: 'program',
      courseDetails: {
        level: 'Sertifikasi K3 Kebakaran',
        duration: s.duration,
        method: 'Teori Interaktif & Praktik Pemadaman',
        legalBasis: s.legal,
        targetAudience: s.audience,
        prerequisites: ['KTP & Ijazah', 'Kondisi Fisik Sehat'],
        certificationOutput: ['Sertifikat Resmi Penanggulangan Kebakaran', 'Lisensi Kewenangan', 'Buku Panduan'],
        syllabusModules: [
          { module: 'Dasar Proteksi Kebakaran', topics: ['Fenomena Api & Perpindahan Panas', 'Klasifikasi Kebakaran Bahan', 'Bahaya Asap Beracun'] },
          { module: 'Sistem & Sarana Pemadaman', topics: ['Inspeksi Tabung APAR', 'Pengoperasian Jaringan Hydrant', 'Sistem Deteksi Otomatis'] },
          { module: 'Drill Evakuasi & Ujian', topics: ['Rute Evakuasi & Assembly Point', 'Simulasi Pemadaman Lapangan', 'Evaluasi Pemahaman'] }
        ]
      },
      primaryCtaText: `Tanya Jadwal ${s.title}`,
      primaryCtaIntent: 'jadwal',
      secondaryCtaText: 'Konsultasi In-House Pabrik',
      secondaryCtaIntent: 'perusahaan'
    });
  }

  // Populate remaining 8 categories (240 records) -> Total = 300 records
  for (const cat of remainingCategories) {
    for (let i = 0; i < cat.topics.length; i++) {
      const topicTitle = cat.topics[i];
      const slugName = topicTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const fullTitle = `Pelatihan ${topicTitle}`;
      
      records.push({
        section: 'pelatihan',
        slug: slugName,
        title: fullTitle,
        metaTitle: `${fullTitle} | Pelatihan K3 Indonesia`,
        description: `Informasi lengkap ${fullTitle}: silabus materi, persyaratan peserta, jadwal batch, dan sertifikasi resmi bersama PT Kreasi Ultimate Berjaya.`,
        answer: `${fullTitle} adalah program pembinaan teknis keselamatan kerja berdurasi ${cat.duration} yang dirancang untuk membekali ${cat.audience.join(', ')} mengacu pada ${cat.legal}.`,
        highlights: ['Sertifikasi Terstandar Industri', `Durasi Pembinaan ${cat.duration}`, `Acuan Regulasi ${cat.legal}`, 'Instruktur Praktisi Ahli'],
        blocks: [
          { heading: `Tujuan & Ruang Lingkup ${fullTitle}`, paragraphs: [`${fullTitle} dirancang untuk meningkatkan kompetensi personel dalam mengidentifikasi bahaya, mengoperasikan peralatan secara aman, serta mematuhi ketentuan ${cat.legal}.`, `Pelatihan ini sangat direkomendasikan bagi ${cat.audience.join(', ')} guna memastikan pencegahan kecelakaan kerja di lingkungan industri.`] },
          { heading: 'Pokok Bahasan & Silabus Materi', paragraphs: ['Kurikulum pelatihan mencakup pemahaman regulasi terkini, pengenalan standar teknis operasional, inspeksi keselamatan berkala, dan penanganan kondisi darurat.'], bullets: ['Regulasi & Standar K3 Terkait', 'Analisis Keselamatan Pekerjaan (JSA)', 'Pemeriksaan & Uji Operasional Alat', 'Simulasi Tanggap Darurat & Evaluasi'] },
          { heading: 'Persyaratan Calon Peserta', paragraphs: ['Calon peserta wajib menyerahkan salinan KTP, ijazah pendidikan terakhir, pas foto, serta surat penugasan kerja perusahaan.', 'PT Kreasi Ultimate Berjaya menyediakan verifikasi pre-screening berkas pendaftaran bebas biaya sebelum pelaksanaan batch.'] },
          { heading: 'Pilihan Pelaksanaan Kelas', paragraphs: ['Tersedia dalam skema kelas publik online interaktif maupun in-house training on-site di lokasi operasional perusahaan Anda di seluruh wilayah Indonesia.'] }
        ],
        faqs: [
          { question: `Berapa lama waktu pelaksanaan ${fullTitle}?`, answer: `Program ini diselenggarakan dengan durasi efektif ${cat.duration} memadukan materi teori dan sesi evaluasi.` },
          { question: `Apakah program ${fullTitle} dapat diadakan in-house?`, answer: 'Ya, kami melayani penyelenggaraan In-House Training khusus untuk grup karyawan perusahaan dengan jadwal dan lokasi yang fleksibel.' }
        ],
        related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'panduan/biaya-pelatihan-k3', 'perbandingan/bnsp-vs-kemnaker'],
        sources: [officialSources.uu1, officialSources.pp50],
        status: 'published',
        publishedAt: '2026-08-15',
        updatedAt: '2026-09-01',
        indexable: true,
        intent: `pelatihan ${slugName} silabus jadwal biaya`,
        primaryKeyword: `pelatihan ${slugName.replace(/-/g, ' ')}`,
        searchIntent: `informasi pendaftaran, biaya dan kurikulum ${fullTitle}`,
        intentType: 'commercial',
        parentTopic: cat.prefix,
        cannibalizationGroup: `pelatihan-${cat.cat}`,
        contentKind: 'program',
        courseDetails: {
          level: 'Sertifikasi Kompetensi K3',
          duration: cat.duration,
          method: 'Blended Online / In-House Workshop',
          legalBasis: cat.legal,
          targetAudience: cat.audience,
          prerequisites: ['KTP & Ijazah Terkait', 'Surat Tugas Instansi'],
          certificationOutput: ['Sertifikat Resmi Pembinaan K3', 'Modul & Materi Lengkap'],
          syllabusModules: [
            { module: 'Dasar Regulasi & Teori Keselamatan', topics: ['Standar Peraturan Terkait', 'Tanggung Jawab Operasional', 'Prinsip Pencegahan Bahaya'] },
            { module: 'Praktik Teknis & Pemeriksaan', topics: ['Prosedur Kerja Standar', 'Inspeksi & Uji Fungsi Alat', 'Mitigasi Insiden'] },
            { module: 'Evaluasi & Uji Kompetensi', topics: ['Penyusunan Laporan Kerja', 'Ujian Akhir Kelulusan'] }
          ]
        },
        primaryCtaText: `Tanya Jadwal ${fullTitle}`,
        primaryCtaIntent: 'jadwal',
        secondaryCtaText: 'Konsultasi In-House Perusahaan',
        secondaryCtaIntent: 'perusahaan'
      });
    }
  }

  return records;
}

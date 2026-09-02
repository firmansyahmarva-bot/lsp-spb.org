import { ContentRecordInput } from './build-inventory';

export function generatePerbandinganRecords(): ContentRecordInput[] {
  const records: ContentRecordInput[] = [];

  const comparisonSets = [
    {
      domain: 'Jalur Sertifikasi & Lisensi',
      pairs: [
        { slug: 'bnsp-vs-kemnaker', title: 'Perbandingan Sertifikasi BNSP vs Sertifikasi Kemnaker RI', left: 'Sertifikasi BNSP (SKKNI)', right: 'Sertifikasi Kemnaker RI', desc: 'Perbandingan legalitas, fungsi kewenangan, masa berlaku, dan tujuan karir antara jalur sertifikasi BNSP dan pembinaan Kemnaker RI.' },
        { slug: 'ahli-k3-umum-vs-ahli-k3-konstruksi', title: 'Perbandingan Ahli K3 Umum vs Ahli K3 Spesialis Konstruksi', left: 'Ahli K3 Umum', right: 'Ahli K3 Konstruksi', desc: 'Perbedaan ruang lingkup tugas, dasar hukum Permenaker 02/1992 vs Permen PUPR 10/2021, dan penempatan sektor kerja.' },
        { slug: 'ahli-k3-umum-vs-ahli-k3-kimia', title: 'Perbandingan Ahli K3 Umum vs Ahli K3 Spesialis Kimia', left: 'Ahli K3 Umum', right: 'Ahli K3 Kimia', desc: 'Perbandingan wewenang penunjukan kelembagaan umum vs pengelolaan Nilai Ambang Kuantitas bahan kimia B3 beracun.' },
        { slug: 'ahli-k3-umum-vs-ahli-k3-listrik', title: 'Perbandingan Ahli K3 Umum vs Ahli K3 Spesialis Listrik', left: 'Ahli K3 Umum', right: 'Ahli K3 Listrik', desc: 'Perbedaan fokus pengawasan sistem manajemen menyeluruh vs riksa uji instalasi kelistrikan tegangan tinggi pabrik.' },
        { slug: 'ahli-k3-umum-vs-auditor-smk3', title: 'Perbandingan Ahli K3 Umum vs Auditor SMK3 PP 50/2012', left: 'Ahli K3 Umum (Implementator)', right: 'Auditor SMK3 (Penilai Independen)', desc: 'Perbedaan fungsi pelaksana operasional sistem K3 harian vs penguji independen pemenuhan 166 kriteria sertifikasi SMK3.' },
        { slug: 'petugas-p3k-vs-paramedis-hiperkes', title: 'Perbandingan Petugas P3K Tempat Kerja vs Paramedis Hiperkes', left: 'Petugas P3K (First Aider)', right: 'Paramedis Hiperkes Perusahaan', desc: 'Perbedaan tingkat kewenangan medis gawat darurat dasar di lapangan vs pengelolaan klinik kesehatan kerja terpadu.' },
        { slug: 'petugas-k3-kebakaran-kelas-d-vs-kelas-a', title: 'Perbandingan Petugas Kebakaran Kelas D vs Ahli K3 Kebakaran Kelas A', left: 'Petugas Kebakaran Kelas D', right: 'Ahli K3 Kebakaran Kelas A', desc: 'Perbedaan peran regu pemadam api tingkat awal menggunakan APAR vs perancang sistem proteksi kebakaran gedung total.' },
        { slug: 'tkbt-vs-tkpk-bekerja-di-ketinggian', title: 'Perbandingan Tenaga Bangunan Tinggi (TKBT) vs Akses Tali (TKPK)', left: 'TKBT (Perancah & Platform)', right: 'TKPK (Rope Access Tali)', desc: 'Perbedaan metode perlindungan jatuh perancah/tangga vs teknik manuver tali kernmantle di fasad gedung tinggi.' },
        { slug: 'operator-forklift-kelas-1-vs-kelas-2', title: 'Perbandingan Operator Forklift Kelas 1 vs Operator Forklift Kelas 2', left: 'Forklift Kelas 1 (>15 Ton)', right: 'Forklift Kelas 2 (<=15 Ton)', desc: 'Perbedaan kapasitas angkat muatan, persyaratan pendidikan, dan kewenangan pengoperasian alat angkut pergudangan.' },
        { slug: 'operator-crane-kelas-1-vs-kelas-2-vs-kelas-3', title: 'Perbandingan Tingkatan Lisensi Operator Crane Kelas 1, 2, dan 3', left: 'Crane Kelas 1 (>100 Ton)', right: 'Crane Kelas 2 & 3 (<100 Ton)', desc: 'Perbandingan tonase angkat mobile/tower crane, silabus uji praktik, dan persyaratan masa kerja operator alat berat.' },
        { slug: 'pengawas-pop-vs-pom-minerba-tambang', title: 'Perbandingan Pengawas Tambang POP vs POM Minerba', left: 'POP (Pengawas Operasional Pertama)', right: 'POM (Pengawas Operasional Madya)', desc: 'Perbedaan tingkat kepemimpinan frontline supervisor operasional tambang vs middle management pengelolaan keselamatan tambang.' },
        { slug: 'ahli-k3-migas-vs-ahli-k3-umum', title: 'Perbandingan Ahli K3 Sektor Migas vs Ahli K3 Umum', left: 'Ahli K3 Migas (Standar ESDM)', right: 'Ahli K3 Umum (Kemnaker RI)', desc: 'Perbedaan acuan regulasi sektor hulu migas berisiko tinggi vs tata kelola norma keselamatan industri umum nasional.' },
        { slug: 'pelatihan-k3-blended-online-vs-tatap-muka', title: 'Perbandingan Pelatihan K3 Blended Online vs Full Tatap Muka', left: 'Blended Online (Zoom + PKL)', right: 'Full Tatap Muka Offline', desc: 'Perbandingan efisiensi waktu, fleksibilitas belajar, biaya akomodasi, dan keabsahan sertifikat keluaran resmi.' },
        { slug: 'inhouse-training-vs-public-class-k3', title: 'Perbandingan In-House Training Perusahaan vs Kelas Publik K3', left: 'In-House Training (Grup Internal)', right: 'Kelas Publik (Individu Terbuka)', desc: 'Perbandingan efisiensi biaya per peserta, penyesuaian studi kasus pabrik, dan fleksibilitas jadwal kalender pelatihan.' }
      ]
    },
    {
      domain: 'Sistem Manajemen & Audit K3',
      pairs: [
        { slug: 'smk3-pp-50-vs-iso-45001', title: 'Perbandingan SMK3 PP No. 50 Tahun 2012 vs ISO 45001:2018', left: 'SMK3 PP 50/2012 (Wajib Hukum)', right: 'ISO 45001:2018 (Standar Global)', desc: 'Perbandingan sifat kepatuhan mandatori hukum Indonesia vs standar sukarela sertifikasi pasar internasional.' },
        { slug: 'audit-smk3-64-vs-122-vs-166-kriteria', title: 'Perbandingan Audit SMK3 Tingkat Awal (64), Transisi (122) & Lanjutan (166)', left: 'Tingkat Awal / Transisi', right: 'Tingkat Lanjutan (166 Kriteria)', desc: 'Perbedaan jumlah parameter pembuktian dokumen, skala ukuran perusahaan, dan syarat perolehan bendera emas.' },
        { slug: 'audit-internal-vs-audit-eksternal-smk3', title: 'Perbandingan Audit Internal SMK3 vs Audit Eksternal Sertifikasi', left: 'Audit Internal (Tim Perusahaan)', right: 'Audit Eksternal (Lembaga Audit SKP)', desc: 'Perbedaan tujuan evaluasi perbaikan mandiri berkala vs penetapan status kelulusan sertifikat resmi Kemnaker.' },
        { slug: 'smkk-pupr-vs-smk3-kemnaker', title: 'Perbandingan SMKK Kementerian PUPR vs SMK3 Kemnaker RI', left: 'SMKK Permen PUPR 10/2021', right: 'SMK3 PP No. 50 Tahun 2012', desc: 'Perbedaan penerapan pada proyek jasa konstruksi sipil berjangka waktu vs sistem keselamatan fasilitas industri permanen.' },
        { slug: 'smkp-minerba-vs-smk3-pp-50', title: 'Perbandingan SMKP Minerba ESDM vs SMK3 PP 50/2012', left: 'SMKP (Pertambangan ESDM)', right: 'SMK3 (Ketenagakerjaan Umum)', desc: 'Perbedaan 7 elemen keselamatan pertambangan berstandar teknis mineral vs 5 prinsip tata kelola K3 ketenagakerjaan.' },
        { slug: 'csms-tier-1-vs-tier-2-vs-tier-3', title: 'Perbandingan Kategori Risiko Kontraktor CSMS: Tinggi, Sedang & Rendah', left: 'CSMS High Risk (Tier 1)', right: 'CSMS Low Risk (Tier 3)', desc: 'Perbedaan persyaratan dokumen prakualifikasi, asuransi, audit lapangan, dan rasio personel HSE kontraktor.' },
        { slug: 'leading-indicator-vs-lagging-indicator-k3', title: 'Perbandingan Leading Indicator vs Lagging Indicator Kinerja Keselamatan', left: 'Leading Indicator (Proaktif)', right: 'Lagging Indicator (Reaktif)', desc: 'Perbedaan pengukuran patroli inspeksi, hazard report, pelatihan vs pencatatan statistik insiden TRIR dan LTI.' },
        { slug: 'audit-k3rs-vs-audit-smk3-pabrik', title: 'Perbandingan Audit K3 Rumah Sakit (K3RS) vs Audit SMK3 Pabrik', left: 'K3 Rumah Sakit (Permenkes 66)', right: 'SMK3 Industri Manufaktur', desc: 'Perbedaan fokus proteksi keselamatan pasien & infeksi nosokomial vs proteksi bahaya mekanik permesinan pabrik.' },
        { slug: 'iso-45001-vs-ohsas-18001', title: 'Perbandingan ISO 45001:2018 vs OHSAS 18001 (Standar Lama)', left: 'ISO 45001 (High Level Structure)', right: 'OHSAS 18001 (Telah Ditarik)', desc: 'Evolusi penekanan kepemimpinan direksi, partisipasi pekerja, konteks risiko organisasi, dan manajemen peluang K3.' },
        { slug: 'safety-culture-ladder-generatif-vs-reaktif', title: 'Perbandingan Tingkat Budaya K3: Budaya Reaktif vs Budaya Generatif', left: 'Budaya K3 Reaktif / Kalkulatif', right: 'Budaya K3 Generatif / Proaktif', desc: 'Perbedaan paradigma keselamatan sekadar kepatuhan aturan vs keselamatan sebagai nilai inti terintegrasi bisnis.' },
        { slug: 'temuan-mayor-vs-temuan-minor-audit-smk3', title: 'Perbandingan Temuan Mayor vs Temuan Minor dalam Audit SMK3', left: 'Temuan Mayor (Pelanggaran Kritis)', right: 'Temuan Minor (Administratif)', desc: 'Dampak temuan mayor terhadap penundaan penerbitan sertifikat vs batas waktu penyelesaian tindakan korektif (CAPA).' },
        { slug: 'evaluasi-kepuasan-pekerja-vs-audit-kepatuhan-k3', title: 'Perbandingan Survei Iklim Keselamatan vs Audit Kepatuhan Regulasi', left: 'Survei Iklim K3 (Persepsi Pekerja)', right: 'Audit Regulasi (Evidensi Hukum)', desc: 'Perbedaan pengukuran persepsi moral dan kepercayaan pekerja vs pemeriksaan fisik kelayakan sarana sesuai undang-undang.' },
        { slug: 'manajemen-perubahan-moc-fasilitas-vs-organisasi', title: 'Perbandingan MOC Perubahan Peralatan Teknis vs Perubahan Struktur Organisasi', left: 'MOC Teknis Fasilitas Mesin', right: 'MOC Organisasi & Personel', desc: 'Perbedaan analisis bahaya instalasi baru vs analisis kompetensi dan pembagian wewenang tugas baru personel.' },
        { slug: 'zero-accident-award-vs-sertifikat-smk3', title: 'Perbandingan Penghargaan Kecelakaan Nihil vs Sertifikat Sistem SMK3', left: 'Zero Accident Award (Hasil Kinerja)', right: 'Sertifikasi SMK3 (Penerapan Sistem)', desc: 'Perbedaan piagam penghargaan tanpa fatalitas berbasis jam kerja vs audit pemenuhan sistem dokumentasi 166 kriteria.' }
      ]
    },
    {
      domain: 'Peralatan, APD & Proteksi Kebakaran',
      pairs: [
        { slug: 'apar-powder-vs-apar-co2', title: 'Perbandingan Tabung APAR Dry Chemical Powder vs APAR CO2', left: 'APAR Powder (Multi-Kelas ABC)', right: 'APAR CO2 (Gas Bersih B & C)', desc: 'Perbandingan efektivitas pemadaman api serbaguna vs proteksi ruang server elektronik tanpa meninggalkan residu serbuk.' },
        { slug: 'apar-foam-vs-apar-clean-agent', title: 'Perbandingan APAR Busa Mekanik (Foam AFFF) vs APAR Clean Agent', left: 'APAR Busa Foam (Minyak Kelas B)', right: 'APAR Clean Agent (Novec/FM200)', desc: 'Perbedaan penutupan lapisan selimut cairan minyak vs pemutusan rantai reaksi kimia api di area sensitif elektronik.' },
        { slug: 'full-body-harness-vs-waist-belt-ketinggian', title: 'Perbandingan Full Body Harness vs Sabuk Pinggang (Waist Belt)', left: 'Full Body Harness (Wajib Ketinggian)', right: 'Waist Belt (Hanya Pemosisi Kerja)', desc: 'Larangan penggunaan sabuk pinggang untuk penahan jatuh karena risiko cedera tulang belakang fatal saat terhempas.' },
        { slug: 'lanyard-shock-absorber-vs-self-retracting-lifeline-srl', title: 'Perbandingan Tali Peredam Kejut (Shock Absorber) vs Tali Otomatis (SRL)', left: 'Lanyard Shock Absorber (Panjang 2m)', right: 'SRL (Mengunci Instan <0.5m)', desc: 'Perbedaan kalkulasi jarak jatuh bebas minimum (fall clearance) dan kenyamanan mobilitas pemanjat ketinggian.' },
        { slug: 'masker-n95-vs-respirator-setengah-wajah-elastomerik', title: 'Perbandingan Masker Debu N95 Sekali Pakai vs Respirator Elastomerik', left: 'Masker N95 (Disposable Partikulat)', right: 'Respirator Setengah Wajah (Kartrid Ganti)', desc: 'Perbedaan efisiensi kerapatan seal wajah, kemampuan menyaring uap kimia toksik, dan biaya jangka panjang pabrik.' },
        { slug: 'earplug-vs-earmuff-pelindung-pendengaran', title: 'Perbandingan Sumbat Telinga (Earplug) vs Penutup Telinga (Earmuff)', left: 'Earplug (Ringan, Masuk Saluran)', right: 'Earmuff (Menutup Daun Telinga)', desc: 'Perbandingan tingkat reduksi kebisingan NRR, kenyamanan di lingkungan panas lembab, dan higienitas pemakaian berulang.' },
        { slug: 'helm-safety-sni-vs-helm-panjat-climbing', title: 'Perbandingan Helm Safety Industri SNI vs Helm Panjat Ketinggian', left: 'Helm SNI (Tali Dagu Standar)', right: 'Helm Panjat (Tali Dagu 4 Titik)', desc: 'Perbedaan ketahanan tali dagu menahan benturan saat terjatuh vertikal vs perlindungan benturan benda jatuh dari atas.' },
        { slug: 'sepatu-safety-ujung-baja-vs-ujung-komposit', title: 'Perbandingan Sepatu Safety Toe Cap Baja vs Toe Cap Komposit Non-Metalik', left: 'Toe Cap Baja (Tahan Tekanan Kuat)', right: 'Toe Cap Komposit (Ringan, Anti-Listrik)', desc: 'Perbedaan bobot, konduktivitas listrik/suhu dingin, dan deteksi keamanan pemindai logam di bandara/pabrik.' },
        { slug: 'scba-300-bar-vs-airline-breathing-system', title: 'Perbandingan Tabung SCBA Mandiri vs Sistem Pasokan Jalur Udara (Airline)', left: 'SCBA (Mandiri, Batas Waktu 45 Menit)', right: 'Airline (Pasokan Tak Terbatas Selang)', desc: 'Perbedaan kebebasan mobilitas regu penyelamat darurat vs durasi kerja panjang pemeliharaan tangki industri tertutup.' },
        { slug: 'detektor-gas-katalitik-vs-detektor-gas-inframerah', title: 'Perbandingan Detektor Gas LEL Tipe Katalitik vs Tipe Inframerah (NDIR)', left: 'Catalytic Bead (Sensitif Multi-Gas)', right: 'Infrared NDIR (Tahan Racun Silikon/H2S)', desc: 'Perbedaan kebutuhan oksigen untuk pembacaan, risiko keracunan sensor katalitik, dan akurasi di area lembab.' },
        { slug: 'sarung-tangan-nitril-vs-sarung-tangan-neoprene', title: 'Perbandingan Sarung Tangan Karet Nitril vs Karet Neoprene', left: 'Nitril (Tahan Minyak & Pelarut Ringan)', right: 'Neoprene (Tahan Asam Pekat & Basa Kuat)', desc: 'Perbedaan laju permeasi kimia, elastisitas fleksibilitas jari, dan ketahanan terhadap degradasi cairan korosif.' },
        { slug: 'selang-hydrant-kanvas-vs-selang-hydrant-karet-epdm', title: 'Perbandingan Selang Pemadam Kanvas Sintetis vs Karet EPDM Merah', left: 'Selang Kanvas (Ringan, Mudah Lipat)', right: 'Selang Karet EPDM (Tahan Gesekan Kasar)', desc: 'Perbedaan ketahanan aus permukaan tanah berbatu, perawatan pengeringan jamur, dan keawetan di area industri kimia.' },
        { slug: 'baju-wearpack-katun-vs-baju-tahan-api-nomex', title: 'Perbandingan Baju Kerja Katun 100% vs Baju Tahan Api Serat Nomex FR', left: 'Katun 100% (Nyaman, Tidak Meleleh)', right: 'Nomex FR (Padam Sendiri, Tahan Flash Fire)', desc: 'Perbedaan proteksi termal bahaya kebakaran kilang migas/listrik arc flash vs pakaian bengkel manufaktur biasa.' },
        { slug: 'kacamata-safety-clear-vs-goggle-anti-splash', title: 'Perbandingan Kacamata Safety Kaca Biasa vs Goggle Anti Percikan Kimia', left: 'Safety Glasses (Benturan Partikel Padat)', right: 'Safety Goggles (Kedap Percikan Cairan)', desc: 'Perlindungan ventilasi tidak langsung (indirect vent) mencegah tetesan asam masuk ke kelopak mata dari segala arah.' }
      ]
    },
    {
      domain: 'Metode Kerja & Rekayasa Lapangan',
      pairs: [
        { slug: 'scaffolding-pipa-vs-boom-lift-manlift', title: 'Perbandingan Penggunaan Scaffolding Perancah vs Manlift Boom Lift', left: 'Scaffolding (Struktur Statis Luas)', right: 'Boom Lift (Mobile, Cepat Berpindah)', desc: 'Perbandingan waktu pemasangan instalasi, fleksibilitas manuver ketinggian, kebutuhan lahan datar, dan biaya sewa harian.' },
        { slug: 'tali-baja-wire-rope-vs-webbing-sling-sintetis', title: 'Perbandingan Tali Kawat Baja (Wire Rope) vs Webbing Sling Sintetis', left: 'Wire Rope (Kuat, Tahan Gesekan Panas)', right: 'Webbing Sling (Ringan, Anti Gores Beban)', desc: 'Perbedaan penanganan material berbobot berat bersuhu tinggi vs pengangkatan komponen presisi bercat halus.' },
        { slug: 'penggalian-metode-shoring-vs-metode-sloping', title: 'Perbandingan Proteksi Penggalian: Penyangga (Shoring) vs Sudut Lereng (Sloping)', left: 'Shoring (Dinding Penahan Kotak/Sheet Pile)', right: 'Sloping (Kemiringan Sudut Aman Tanah)', desc: 'Perbedaan kebutuhan ruang lahan proyek sempit perkotaan vs efisiensi biaya galian tanah di area proyek terbuka.' },
        { slug: 'ventilasi-alami-vs-ventilasi-paksa-blower', title: 'Perbandingan Ventilasi Alami Ruangan vs Ventilasi Mekanis Paksa (LEV/Blower)', left: 'Ventilasi Alami (Jendela & Louver)', right: 'Ventilasi Paksa (Exhaust Fan & Blower)', desc: 'Perbedaan kemampuan mengencerkan gas beracun ruang terbatas vs penghematan energi sirkulasi udara gedung biasa.' },
        { slug: 'hot-work-pengelasan-listrik-vs-pengelasan-gas-oksiasetilen', title: 'Perbandingan Bahaya K3 Pengelasan Listrik (SMAW) vs Pengelasan Gas (OAW)', left: 'Las Listrik (Bahaya Sengatan & Sinar UV)', right: 'Las Oksiasetilen (Bahaya Ledakan Tabung Gas)', desc: 'Perbedaan kontrol isolasi kelistrikan grounding vs pencegahan bahaya arus balik api (flashback arrestor) selang gas.' },
        { slug: 'pembersihan-tangki-metode-manual-vs-metode-otomatis-tanpa-orang', title: 'Perbandingan Pembersihan Tangki BBM Manual (Man-Entry) vs Non-Man Entry', left: 'Man-Entry (Pekerja Masuk Tangki)', right: 'Non-Man Entry (Nozzle Robotik Otomatis)', desc: 'Penerapan hierarki eliminasi risiko total bahaya ruang terbatas menggunakan teknologi pencucian tangki jarak jauh.' },
        { slug: 'pengecatan-metode-spray-gun-vs-metode-kuas-roller', title: 'Perbandingan Bahaya K3 Pengecatan Spray Gun vs Pengecatan Kuas Manual', left: 'Spray Gun (Kabut Aerosol & Bahaya Ledakan)', right: 'Kuas/Roller (Paparan Rendah, Lambat)', desc: 'Perbedaan kebutuhan ventilasi tahan ledakan, masker respirator uap organik, dan grounding selang semprot anti-statis.' },
        { slug: 'bongkar-muat-crane-vs-forklift-pergudangan', title: 'Perbandingan Penggunaan Crane Derek vs Forklift Angkut Pergudangan', left: 'Crane (Pengangkatan Vertikal Gantung)', right: 'Forklift (Pengangkutan Horizontal Bertingkat)', desc: 'Perbedaan zona bahaya lintasan bawah muatan gantung vs bahaya tabrakan pejalan kaki di lorong sempit rak gudang.' },
        { slug: 'penanganan-limbah-b3-insinerator-vs-solidifikasi-landfill', title: 'Perbandingan Pengolahan Limbah B3: Insinerasi Termal vs Solidifikasi Stabilisasi', left: 'Insinerator (Pembakaran Suhu Tinggi 1200C)', right: 'Solidifikasi (Pengikatan Semen & Landfill)', desc: 'Perbedaan reduksi volume limbah organik berbahaya vs penanganan limbah logam berat anorganik sebelum penimbunan berizin.' },
        { slug: 'pemotongan-logam-metode-plasma-cutting-vs-gerinda-potong', title: 'Perbandingan Pemotongan Logam Plasma Cutting vs Batu Gerinda Gesek', left: 'Plasma Cutting (Cepat, Percikan Logam Halus)', right: 'Batu Gerinda (Risiko Pecah Roda & Debu)', desc: 'Perbedaan perlindungan radiasi busur cahaya tinggi vs risiko luka mekanik fatal akibat pecahan roda gerinda berputar.' },
        { slug: 'transportasi-kimia-truk-tangki-curah-vs-kontainer-iso-tank', title: 'Perbandingan Pengangkutan Bahan Kimia Truk Tangki vs ISO Tank Container', left: 'Truk Tangki Curah (Khusus Satu Produk)', right: 'ISO Tank (Multimoda Darat-Laut Fleksibel)', desc: 'Perbedaan integritas bejana tekan standar maritim IMDG vs perawatan katup pengaman truk tangki jalan raya.' },
        { slug: 'akses-atap-gedung-tangga-monyet-vs-tangga-bordes-permanen', title: 'Perbandingan Tangga Vertikal Berkurung (Caged Ladder) vs Tangga Bordes Miring', left: 'Caged Ladder (Vertikal 90 Derajat)', right: 'Tangga Bordes (Kemiringan 30-45 Derajat)', desc: 'Perbedaan kelelahan fisik pemanjat, kemudahan membawa alat uji inspeksi, dan mitigasi bahaya jatuh terpeleset.' },
        { slug: 'pemadaman-kebakaran-metode-pendinginan-cooling-vs-penyelimutan-smothering', title: 'Perbandingan Taktik Pemadaman Api: Pendinginan Air vs Penyelimutan Oksigen', left: 'Pendinginan (Menurunkan Panas dengan Air)', right: 'Penyelimutan (Menutup Oksigen dengan Busa/CO2)', desc: 'Pemilihan media pemadam berdasarkan jenis bahan bakar padat kayu (Kelas A) vs cairan bahan bakar minyak (Kelas B).' },
        { slug: 'penerangan-darurat-sistem-terpusat-genset-vs-baterai-mandiri', title: 'Perbandingan Lampu Darurat Sistem Baterai Mandiri vs Sistem Sentral Generator', left: 'Baterai Mandiri (Menyala Instan 0 Detik)', right: 'Genset Sentral (Jeda Waktu Start 10 Detik)', desc: 'Kombinasi sistem lampu darurat baterai individu di jalur keluar saat genset darurat sedang proses otomatis menyala.' }
      ]
    },
    {
      domain: 'Metodologi Analisis Risiko & Investigasi',
      pairs: [
        { slug: 'hiradc-vs-job-safety-analysis-jsa', title: 'Perbandingan HIRADC Tingkat Fasilitas vs JSA Tingkat Pekerjaan Lapangan', left: 'HIRADC (Makro Seluruh Fasilitas)', right: 'JSA (Mikro Rincian Langkah Tugas Harian)', desc: 'Perbedaan dokumen perencanaan strategis tahunan perusahaan vs panduan teknis operasional harian bagi pekerja lapangan.' },
        { slug: 'hazop-vs-fmea-analisis-keselamatan-proses', title: 'Perbandingan Metodologi HAZOP vs FMEA dalam Industri Proses', left: 'HAZOP (Penyimpangan Parameter Operasi)', right: 'FMEA (Mode Kegagalan Komponen Mesin)', desc: 'Perbedaan analisis kata pandu aliran/tekanan/suhu pipa proses vs evaluasi keandalan komponen mekanik individual.' },
        { slug: 'investigasi-5-why-vs-diagram-fishbone-ishikawa', title: 'Perbandingan Metode Investigasi Insiden: 5-Why vs Diagram Tulang Ikan (Fishbone)', left: '5-Why (Penelusuran Rantai Kausalitas Linear)', right: 'Fishbone (Kategorisasi Multi-Faktor 6M)', desc: 'Perbedaan teknik investigasi cepat insiden sederhana vs analisis komprehensif kegagalan sistemik kecelakaan fatal.' },
        { slug: 'fault-tree-analysis-fta-vs-event-tree-analysis-eta', title: 'Perbandingan Analisis Pohon Kegagalan (FTA) vs Pohon Kejadian (ETA)', left: 'FTA (Deduktif: Dari Akibat Menuju Sebab)', right: 'ETA (Induktif: Dari Pemicu Menuju Konsekuensi)', desc: 'Perbedaan logika gerbang AND/OR identifikasi kombinasi kegagalan vs pemetaan skenario percabangan tindakan mitigasi darurat.' },
        { slug: 'bowtie-analysis-vs-matriks-risiko-5x5', title: 'Perbandingan Metode Analisis Bowtie vs Matriks Risiko Kualitatif 5x5', left: 'Bowtie (Visualisasi Barrier Penghalang Bahaya)', right: 'Matriks 5x5 (Skor Angka Peluang x Dampak)', desc: 'Keunggulan Bowtie dalam menunjukkan keandalan kontrol pencegahan dan mitigasi vs kesederhanaan ranking matriks skor numerik.' },
        { slug: 'lopa-layer-of-protection-vs-hazop', title: 'Perbandingan Analisis LOPA vs Kajian HAZOP', left: 'LOPA (Kuantitatif Independen Protection Layer)', right: 'HAZOP (Kualitatif Brainstorming Tim)', desc: 'Peran LOPA sebagai tindak lanjut kuantitatif menentukan kecukupan Safety Integrity Level (SIL) pasca temuan risiko HAZOP.' },
        { slug: 'safety-audit-vs-safety-inspection-lapangan', title: 'Perbandingan Safety Audit Sistem vs Safety Inspection Fisik Lapangan', left: 'Safety Audit (Evaluasi Kepatuhan Sistem Prosedur)', right: 'Safety Inspection (Pemeriksaan Kondisi Fisik Alat)', desc: 'Perbedaan peninjauan kecukupan kebijakan dan rekaman dokumen vs pengecekan langsung bahaya fisik di lantai pabrik.' },
        { slug: 'behavior-based-safety-bbs-vs-engineering-control', title: 'Perbandingan Pendekatan Perilaku (BBS) vs Rekayasa Keteknikan (Engineering)', left: 'BBS (Intervensi Kebiasaan & Sikap Kerja)', right: 'Engineering (Pemasangan Pengaman Fisik Mesin)', desc: 'Hierarki pengendalian yang mendahulukan pengamanan fisik mesin sebelum mengandalkan kedisiplinan perilaku manusia.' },
        { slug: 'nearmiss-reporting-vs-accident-reporting', title: 'Perbandingan Pelaporan Hampir Celaka (Nearmiss) vs Pelaporan Kecelakaan Aktual', left: 'Nearmiss (Peluang Belajar Tanpa Kerugian)', right: 'Accident (Investigasi Kerugian Cedera/Aset)', desc: 'Strategi pemanfaatan laporan nearmiss sebagai leading indicator untuk mencegah kecelakaan fatal sebelum terjadi.' },
        { slug: 'analisis-risiko-kualitatif-vs-kuantitatif-qra', title: 'Perbandingan Analisis Risiko Kualitatif vs Analisis Risiko Kuantitatif (QRA)', left: 'Kualitatif (Deskriptif Rendah-Sedang-Tinggi)', right: 'QRA (Kalkulasi Matematis Frekuensi Fatalitas)', desc: 'Penerapan matriks deskriptif untuk operasional harian vs pemodelan numerik radius ledakan kilang migas kompleks.' },
        { slug: 'whs-risk-assessment-vs-environmental-eia-amdal', title: 'Perbandingan Penilaian Risiko K3 Pekerja vs Kajian Dampak Lingkungan (AMDAL)', left: 'Penilaian K3 (Keselamatan Manusia di Tempat Kerja)', right: 'AMDAL (Dampak Ekosistem & Masyarakat Luar)', desc: 'Perbedaan batasan analisis paparan internal pekerja pabrik vs analisis pencemaran limbah ke badan air dan udara publik.' },
        { slug: 'tinjauan-manajemen-smk3-vs-rapat-rutin-p2k3', title: 'Perbandingan Rapat Tinjauan Manajemen Direksi vs Rapat Bulanan P2K3', left: 'Tinjauan Manajemen (Strategis Tahunan Direksi)', right: 'Rapat P2K3 (Operasional Bulanan Tim Bersama)', desc: 'Perbedaan keputusan alokasi kebijakan dan anggaran besar tahunan vs penyelesaian tindak lanjut temuan inspeksi bulanan.' },
        { slug: 'root-cause-analysis-rca-vs-fault-finding', title: 'Perbandingan Analisis Akar Masalah (RCA) Sistemik vs Mencari Kesalahan Personel', left: 'RCA (Fokus Perbaikan Kelemahan Sistem Kerja)', right: 'Fault Finding (Fokus Menyalahkan Kelalaian Individu)', desc: 'Pentingnya budaya Just Culture yang tidak mencari kambing hitam melainkan memperbaiki prosedur dan pelatihan yang kurang.' },
        { slug: 'risk-tolerance-vs-as-low-as-reasonably-practicable-alarp', title: 'Perbandingan Konsep Toleransi Risiko Perusahaan vs Prinsip ALARP', left: 'Risk Tolerance (Ambang Batas Keberanian Korporat)', right: 'ALARP (Pengurangan Risiko Hingga Batas Wajar)', desc: 'Kriteria pembuktian bahwa biaya penambahan kontrol lebih lanjut sudah sangat tidak sebanding dengan penurunan risiko yang diperoleh.' }
      ]
    }
  ];

  for (const set of comparisonSets) {
    for (const p of set.pairs) {
      records.push({
        section: 'perbandingan',
        slug: p.slug,
        title: p.title,
        metaTitle: `${p.title} | Panduan Keputusan K3`,
        description: `${p.desc} Matriks perbandingan fitur, aspek regulasi, kelebihan, kekurangan, dan rekomendasi pilihan terbaik.`,
        answer: `${p.title} memberikan analisis komparatif terstruktur antara ${p.left} dan ${p.right} guna membantu profesional dan manajemen perusahaan dalam mengambil keputusan yang tepat.`,
        highlights: [`Kategori ${set.domain}`, `Matriks Perbandingan ${p.left} vs ${p.right}`, 'Analisis Aspek Hukum & Operasional', 'Rekomendasi Berdasarkan Skenario'],
        blocks: [
          { heading: `Latar Belakang Perbandingan ${p.title}`, paragraphs: [`Dalam pengelolaan keselamatan dan kesehatan kerja, pemilihan antara ${p.left} dan ${p.right} sering kali menjadi pertimbangan krusial bagi individu maupun manajemen korporasi.`, `${p.desc} Memahami perbedaan mendasar dari kedua aspek ini akan mencegah kesalahan investasi anggaran dan memastikan kepatuhan regulasi yang optimal.`] },
          { heading: 'Perbedaan Parameter & Karakteristik Kunci', paragraphs: ['Aspek-aspek utama yang membedakan kedua pilihan ini meliputi:'], bullets: ['Landasan hukum dan instansi pembina atau penerbit standar resmi', 'Ruang lingkup aplikasi dan batasan operasional di lingkungan industri', 'Alokasi investasi biaya, durasi waktu, dan kompleksitas pelaksanaan', 'Tingkat pengakuan dan fleksibilitas pemanfaatan jangka panjang'] },
          { heading: 'Rekomendasi Pemilihan Berdasarkan Kebutuhan', paragraphs: ['Pilihan terbaik sangat bergantung pada tujuan spesifik organisasi atau profil karier individu. Untuk kebutuhan pemenuhan audit hukum wajib di Indonesia, utamakan jalur yang dipersyaratkan oleh peraturan perundang-undangan nasional, sedangkan untuk pengakuan kompetensi berbasis unjuk kerja, jalur portofolio standar nasional/internasional dapat menjadi pelengkap yang kuat.'] },
          { heading: 'Konsultasi Program & Pilihan Sertifikasi', paragraphs: ['PT Kreasi Ultimate Berjaya siap memberikan bimbingan konsultasi bebas biaya guna membantu Anda menentukan program pembinaan atau skema sertifikasi yang paling sesuai dengan kebutuhan perusahaan Anda.'] }
        ],
        faqs: [
          { question: `Kapan sebaiknya memilih ${p.left}?`, answer: `Pilihlah ${p.left} apabila fokus utama Anda adalah pemenuhan kualifikasi dasar, kepatuhan audit regulasi instansi terkait, dan kesiapan operasional awal.` },
          { question: `Kapan sebaiknya memilih ${p.right}?`, answer: `Pilihlah ${p.right} apabila Anda membutuhkan spesialisasi teknis mendalam, pengakuan kompetensi lanjutan, atau penyesuaian khusus dengan skenario industri berisiko tinggi.` }
        ],
        related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker'],
        sources: [
          { label: 'UU No. 1 Tahun 1970 tentang Keselamatan Kerja', url: 'https://jdih.kemnaker.go.id/katalog/uu-1-1970', publisher: 'Pemerintah RI / Kemnaker' },
          { label: 'PP No. 50 Tahun 2012 tentang Penerapan SMK3', url: 'https://jdih.kemnaker.go.id/katalog/pp-50-2012', publisher: 'Pemerintah RI / Kemnaker' }
        ],
        status: 'published',
        publishedAt: '2026-08-01',
        updatedAt: '2026-09-01',
        indexable: true,
        intent: `perbandingan ${p.slug.replace(/-/g, ' ')}`,
        primaryKeyword: `${p.slug.replace(/-/g, ' ')}`,
        searchIntent: `perbandingan perbedaan antara ${p.left} dan ${p.right}`,
        intentType: 'informational',
        parentTopic: `Perbandingan & Keputusan K3: ${set.domain}`,
        cannibalizationGroup: 'perbandingan-k3',
        contentKind: 'comparison',
        comparisonTable: {
          leftTitle: p.left,
          rightTitle: p.right,
          rows: [
            { aspect: 'Tujuan Utama', left: 'Pemenuhan Kepatuhan / Kompetensi Dasar', right: 'Spesialisasi Teknis / Pengujian Mendalam' },
            { aspect: 'Dasar Regulasi', left: 'Regulasi Pokok Ketenagakerjaan / Standar Umum', right: 'Standar Teknis Sektoral / SKKNI Spesifik' },
            { aspect: 'Sasaran Peserta', left: 'Praktisi HSE, Koordinator, Pemula D3/S1', right: 'Spesialis Teknis, Auditor, Senior Engineer' },
            { aspect: 'Keluaran Sertifikat', left: 'Sertifikat Pembinaan / Lisensi Resmi', right: 'Sertifikat Kompetensi Garuda / Khusus' },
            { aspect: 'Kesesuaian Industri', left: 'Seluruh Sektor Manufaktur & Properti Umum', right: 'Industri Risiko Tinggi & Proyek Spesifik' }
          ]
        },
        primaryCtaText: 'Konsultasi Pemilihan Program Terbaik',
        primaryCtaIntent: 'kemnaker_bnsp',
        secondaryCtaText: 'Lihat Jadwal Pelatihan K3',
        secondaryCtaIntent: 'jadwal'
      });
    }
  }

  return records;
}

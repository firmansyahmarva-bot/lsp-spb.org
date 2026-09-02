import { ContentRecordInput } from './build-inventory';
import { officialSources } from './sources';

interface ComparisonPair {
  slug: string;
  title: string;
  left: string;
  right: string;
  desc: string;
}

interface ComparisonDomain {
  domain: string;
  sourceKey: string;
  pairs: ComparisonPair[];
}

export function generatePerbandinganRecords(): ContentRecordInput[] {
  const records: ContentRecordInput[] = [];

  const comparisonSets: ComparisonDomain[] = [
    {
      domain: 'Jalur Sertifikasi & Lisensi Profesi K3',
      sourceKey: 'pp10',
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
      domain: 'Sistem Manajemen, Standar Audit & Kepatuhan',
      sourceKey: 'pp50',
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
      sourceKey: 'kep186_1999',
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
        { slug: 'tripod-rescue-winch-vs-davit-arm-system', title: 'Perbandingan Tripod Penyelamat Ruang Terbatas vs Sistem Davit Arm', left: 'Tripod Kit (Portabel, Simetris)', right: 'Davit Arm (Rotasi Sudut, Offset)', desc: 'Perbedaan kemudahan pemasangan di atas manhole vertikal vs fleksibilitas manuver pengangkatan di sisi dinding tangki.' }
      ]
    },
    {
      domain: 'Metodologi Analisis Risiko & Investigasi Insiden',
      sourceKey: 'pp50',
      pairs: [
        { slug: 'hazop-vs-fmea-analisis-risiko-k3', title: 'Perbandingan Metode HAZOP vs FMEA dalam Analisis Risiko K3', left: 'HAZOP (Process Guide Words)', right: 'FMEA (Failure Mode & RPN)', desc: 'Perbandingan analisis penyimpangan proses kimia/pipa vs analisis mode kegagalan komponen mekanikal permesinan.' },
        { slug: 'hiradc-vs-jsa-analisis-keselamatan-kerja', title: 'Perbandingan HIRADC Tingkat Fasilitas vs JSA Tingkat Tugas Spesifik', left: 'HIRADC (Makro Seluruh Fasilitas)', right: 'JSA (Mikro Langkah Kerja Tugas)', desc: 'Perbedaan pemetaan matriks risiko komprehensif tahunan vs mitigasi langkah demi langkah sebelum pekerjaan harian dimulai.' },
        { slug: 'fault-tree-analysis-fta-vs-event-tree-analysis-eta', title: 'Perbandingan Fault Tree Analysis (FTA) vs Event Tree Analysis (ETA)', left: 'FTA (Deduktif Top-Down)', right: 'ETA (Induktif Bottom-Up)', desc: 'Perbedaan identifikasi kombinasi akar penyebab kegagalan vs peramalan cabang skenario dampak pasca inisiasi bahaya.' },
        { slug: 'investigasi-5-why-vs-fishbone-diagram', title: 'Perbandingan Investigasi Insiden Metode 5-Why vs Diagram Tulang Ikan (Fishbone)', left: '5-Why (Rantai Logika Linear)', right: 'Fishbone 4M+1E (Kategori Sistemik)', desc: 'Perbandingan penelusuran akar masalah cepat untuk insiden sederhana vs analisis faktor multi-dimensi untuk kecelakaan kompleks.' },
        { slug: 'metode-bowtie-vs-risk-matrix-5x5', title: 'Perbandingan Analisis Diagram Bowtie vs Matriks Risiko 5x5', left: 'Bowtie Analysis (Visual Penghalang)', right: 'Matriks Risiko 5x5 (Kualitatif Skor)', desc: 'Perbedaan visualisasi barrier pencegahan dan mitigasi konsekuensi vs penentuan peringkat prioritas risiko operasional.' },
        { slug: 'metode-tapproot-vs-scat-investigasi-insiden', title: 'Perbandingan Sistem Investigasi TapRooT vs DNV SCAT', left: 'TapRooT (Pohon Akar Terstruktur)', right: 'DNV SCAT (Sebab Dasar Praktik)', desc: 'Perbandingan metodologi investigasi insiden proses berlisensi global vs pemetaan bagan tindakan korektif DNV.' },
        { slug: 'what-if-analysis-vs-checklist-inspeksi-k3', title: 'Perbandingan What-If Analysis vs Checklist Inspeksi Terjadwal', left: 'What-If Analysis (Eksplorasi Skenario)', right: 'Checklist Inspeksi (Verifikasi Kondisi)', desc: 'Perbedaan metode brainstorming potensi bahaya desain baru vs pemeriksaan kepatuhan fisik sarana eksisting.' },
        { slug: 'penilaian-risiko-kualitatif-vs-kuantitatif-qra', title: 'Perbandingan Analisis Risiko Kualitatif vs Kuantitatif (QRA)', left: 'Kualitatif (Matriks Peluang-Dampak)', right: 'QRA Kuantitatif (Frekuensi & Radius Dampak)', desc: 'Perbedaan estimasi deskriptif untuk operasional umum vs pemodelan matematika simulasi ledakan berbiaya tinggi.' },
        { slug: 'metode-rula-vs-reba-penilaian-ergonomi', title: 'Perbandingan Metode Penilaian Ergonomi RULA vs REBA', left: 'RULA (Anggota Tubuh Bagian Atas)', right: 'REBA (Seluruh Postur Tubuh)', desc: 'Perbedaan evaluasi posisi kerja duduk statis komputer/perakitan vs pekerjaan angkat-angkut dinamis di pergudangan.' },
        { slug: 'penilaian-risiko-kesehatan-hra-vs-hiradc-k3', title: 'Perbandingan Health Risk Assessment (HRA) vs HIRADC K3', left: 'HRA (Pajanan Paparan Kronis Tubuh)', right: 'HIRADC (Bahaya Cedera Akut Seketika)', desc: 'Perbedaan identifikasi penyakit akibat kerja jangka panjang vs pencegahan insiden kecelakaan cedera fisik langsung.' },
        { slug: 'audit-kepatuhan-legalitas-vs-audit-perilaku-k3-sbo', title: 'Perbandingan Audit Kepatuhan Regulasi vs Observasi Perilaku K3 (SBO)', left: 'Audit Regulasi (Kondisi Fisik & SOP)', right: 'SBO (Kebiasaan Kerja Selamat)', desc: 'Perbedaan penilaian bukti administratif hukum vs intervensi psikologi kebiasaan pekerja di lapangan.' },
        { slug: 'gap-analysis-smk3-vs-pre-audit-sertifikasi', title: 'Perbandingan Gap Analysis SMK3 vs Pre-Audit Sertifikasi Eksternal', left: 'Gap Analysis (Pemetaan Kesiapan)', right: 'Pre-Audit (Simulasi Ujian Akhir)', desc: 'Perbedaan identifikasi kekurangan dokumen di awal proyek implementasi vs uji coba menyeluruh sebelum audit resmi.' },
        { slug: 'lopa-analysis-vs-sil-determination', title: 'Perbandingan Layers of Protection Analysis (LOPA) vs Penetapan SIL', left: 'LOPA (Kuantifikasi Lapisan Proteksi)', right: 'SIL (Tingkat Integritas Safety Loop)', desc: 'Perbedaan analisis kecukupan penghalang independen (IPL) vs spesifikasi keandalan instrumen sensor katup darurat.' },
        { slug: 'surveilans-kesehatan-kerja-vs-medical-checkup-rutin', title: 'Perbandingan Surveilans Kesehatan Okupasi vs MCU Tahunan Rutin', left: 'Surveilans Okupasi (Analisis Tren Pajanan)', right: 'MCU Rutin (Pemeriksaan Individu)', desc: 'Perbedaan pemantauan dampak biologis faktor kerja pada kelompok pekerja berisiko vs skrining kesehatan umum individu.' }
      ]
    },
    {
      domain: 'Regulasi, Standar Teknis & Batas Hukum Ketenagakerjaan',
      sourceKey: 'uu1',
      pairs: [
        { slug: 'uu-1-1970-vs-uu-13-2003-pasal-k3', title: 'Perbandingan UU No. 1 Tahun 1970 vs UU No. 13 Tahun 2003 (Klaster K3)', left: 'UU 1/1970 (Hukum Pokok Keselamatan)', right: 'UU 13/2003 (Kewajiban SMK3 Ketenagakerjaan)', desc: 'Perbandingan payung hukum teknis syarat keselamatan kerja tempat kerja vs kewajiban perlindungan hak pekerja dan sanksi ketenagakerjaan.' },
        { slug: 'nab-permenaker-05-2018-vs-sni-higiene-lama', title: 'Perbandingan Batas NAB Permenaker 05/2018 vs Standar SNI Higiene Lama', left: 'Permenaker 05/2018 (Komprehensif 5 Faktor)', right: 'Standar SNI Lama (Faktor Terpisah)', desc: 'Pembaruan daftar nilai ambang batas kimia, penegasan 5 faktor bahaya lingkungan, dan integrasi faktor psikososial ergonomi.' },
        { slug: 'permenaker-08-2020-vs-permenaker-09-2008-pesawat-angkat', title: 'Perbandingan Permenaker No. 08/2020 vs Permenaker No. 09/2008', left: 'Permenaker 08/2020 (Pembaruan Terpadu)', right: 'Permenaker 09/2008 (Regulasi Lama)', desc: 'Penggabungan norma pesawat angkat dan angkut, pembaruan syarat teknis alat angkat modern, dan klasifikasi baru lisensi operator.' },
        { slug: 'permenaker-37-2016-vs-peraturan-uap-stbl-1930', title: 'Perbandingan Permenaker No. 37/2016 vs Stoomverordening 1930', left: 'Permenaker 37/2016 (Bejana Tekanan Modern)', right: 'Stoomverordening 1930 (Regulasi Uap Historis)', desc: 'Pemisahan jelas ketentuan bejana tekan kompresor/tangki timbun modern dengan ketel uap pembangkit uap panas.' },
        { slug: 'permenkes-66-2016-vs-permenkes-48-2016', title: 'Perbandingan Standar K3 Rumah Sakit (K3RS) vs K3 Perkantoran', left: 'K3 Rumah Sakit (Permenkes 66/2016)', right: 'K3 Perkantoran (Permenkes 48/2016)', desc: 'Perbedaan spesifikasi mitigasi bahaya infeksius limbah medis B3 rumah sakit vs ergonomi tata letak meja komputer kantor.' },
        { slug: 'puil-2020-sni-0225-vs-puil-2000-instalasi-listrik', title: 'Perbandingan Ketentuan PUIL 2020 (SNI 0225:2020) vs PUIL 2000', left: 'PUIL 2020 (Harmonisasi IEC Modern)', right: 'PUIL 2000 (Standar Konvensional)', desc: 'Pembaruan standar proteksi tegangan sentuh, penerapan gawai proteksi arus sisa (RCD wajib), dan keselamatan instalasi PLTS.' },
        { slug: 'permen-pupr-10-2021-vs-permen-pu-05-2014-smkk', title: 'Perbandingan Permen PUPR No. 10/2021 vs Permen PU No. 05/2014', left: 'Permen PUPR 10/2021 (SMKK Komprehensif)', right: 'Permen PU 05/2014 (SMK3 Konstruksi Lama)', desc: 'Penyempurnaan 9 komponen rincian biaya keselamatan konstruksi dalam dokumen tender dan struktur UKK proyek.' },
        { slug: 'nfpa-standar-global-vs-sni-kebakaran-nasional', title: 'Perbandingan Standar NFPA Internasional vs SNI Proteksi Kebakaran', left: 'Standar NFPA (Rujukan Rekayasa Global)', right: 'Standar SNI (Regulasi Wajib Nasional)', desc: 'Kesesuaian parameter teknis instalasi sprinkler, pompa damkar, hydrant gedung antara acuan internasional dan konsensus BSN.' },
        { slug: 'pp-50-2012-vs-permenaker-05-1996-smk3', title: 'Perbandingan PP No. 50 Tahun 2012 vs Permenaker No. 05/1996', left: 'PP No. 50 Tahun 2012 (Peraturan Pemerintah)', right: 'Permenaker 05/1996 (Peraturan Menteri Lama)', desc: 'Peningkatan hierarki kekuatan hukum penerapan SMK3 menjadi Peraturan Pemerintah dengan 5 prinsip dasar dan 166 kriteria.' },
        { slug: 'permenaker-02-1992-vs-skkni-k3-bnsp', title: 'Perbandingan Penunjukan Ahli K3 Permenaker 02/1992 vs SKKNI BNSP', left: 'Permenaker 02/1992 (Lisensi Kewenangan Hukum)', right: 'SKKNI K3 (Standar Kompetensi Kerja)', desc: 'Perbedaan penunjukan kewenangan hukum untuk mewakili manajemen vs pengakuan sertifikasi keterampilan profesi individu.' },
        { slug: 'perka-bapeten-radiasi-vs-permenaker-lingkungan-kerja', title: 'Perbandingan Regulasi Radiasi BAPETEN vs Permenaker No. 05/2018', left: 'BAPETEN (Radiasi Pengion Nuklir/Rontgen)', right: 'Permenaker 05/2018 (Radiasi Non-Pengion EMF/UV)', desc: 'Pemisahan yurisdiksi pengawasan paparan radioaktif medis industri dengan pengawasan radiasi gelombang mikro/cahaya tampak.' },
        { slug: 'kepmen-esdm-1827-2018-vs-permenaker-tambang', title: 'Perbandingan Regulasi K3 Tambang Kepmen ESDM 1827 vs Kemnaker RI', left: 'Kepmen ESDM 1827/2018 (Kaidah Tambang SMKP)', right: 'Regulasi Kemnaker (Norma Umum Ketenagakerjaan)', desc: 'Pembagian kewenangan Inspektur Tambang ESDM pada area operasional tambang vs Pengawas Ketenagakerjaan pada aspek hubungan kerja.' },
        { slug: 'se-ruang-terbatas-2012-vs-osha-1910-146', title: 'Perbandingan SE Menakertrans No. 01/2012 vs OSHA Confined Space', left: 'SE Menakertrans 01/2012 (Petunjuk Nasional)', right: 'OSHA 29 CFR 1910.146 (Standar AS)', desc: 'Persamaan kriteria isolasi energi, pengujian gas atmosfer, penunjukan stand-by person, dan prosedur penyelamatan korban.' },
        { slug: 'permenaker-15-2008-vs-standar-p3k-osha-ansi', title: 'Perbandingan Standar Kotak P3K Kemnaker RI vs Standar ANSI/OSHA', left: 'Permenaker 15/2008 (Bentuk A, B, C)', right: 'ANSI/ISEA Z308.1 (Class A & Class B)', desc: 'Perbedaan daftar 21 item wajib kotak P3K Indonesia vs kemasan unitized obat bebas dan dressing standar Amerika.' }
      ]
    }
  ];

  for (const set of comparisonSets) {
    const src = officialSources[set.sourceKey] || officialSources.uu1;
    for (let i = 0; i < set.pairs.length; i++) {
      const pair = set.pairs[i];
      const fullTitle = pair.title;
      const slug = pair.slug;
      const keyword = `perbedaan ${pair.slug.replace(/-/g, ' ')}`.trim();

      records.push({
        section: 'perbandingan',
        slug,
        title: fullTitle,
        metaTitle: `${fullTitle} | Matriks & Rekomendasi`,
        description: `Panduan perbandingan objektif ${pair.title}: analisis kelebihan dan kekurangan ${pair.left} vs ${pair.right}, matriks perbedaan, dan rekomendasi pemilihan terbaik.`,
        answer: `${fullTitle} membedah perbedaan mendasar antara ${pair.left} dan ${pair.right} dalam aspek legalitas regulasi, lingkup penerapan teknis, manfaat praktis, serta rekomendasi pemilihan yang paling tepat sesuai kebutuhan operasional dan kepatuhan perusahaan Anda.`,
        highlights: [
          `Fokus Domain: ${set.domain}`,
          `Opsi A: ${pair.left}`,
          `Opsi B: ${pair.right}`,
          'Tujuan: Panduan Pengambilan Keputusan Strategis & Efisiensi Investasi K3'
        ],
        comparisonTable: {
          leftTitle: pair.left,
          rightTitle: pair.right,
          rows: [
            { aspect: 'Landasan Hukum & Regulasi', left: `Mengacu pada standar khusus ${pair.left}`, right: `Mengacu pada regulasi kepatuhan ${pair.right}` },
            { aspect: 'Lembaga Penerbit / Regulator', left: 'Kementerian Teknis / Badan Otoritas Terkait', right: 'Badan Standardisasi / Badan Nasional Independen' },
            { aspect: 'Sifat Penerapan', left: 'Wajib Pemenuhan Regulasi Operasional', right: 'Pengakuan Kompetensi / Standar Mutu Terakreditasi' },
            { aspect: 'Masa Berlaku Dokumen', left: '2 hingga 3 Tahun (Dapat Diperpanjang)', right: '3 Tahun / Mengikuti Siklus Resertifikasi' },
            { aspect: 'Keunggulan Utama', left: 'Fokus spesifik pada fungsi teknis operasional harian', right: 'Pengakuan luas untuk kualifikasi karir & tender proyek' },
            { aspect: 'Rekomendasi Pemilihan', left: 'Dipilih untuk pemenuhan kewajiban hukum fasilitas', right: 'Dipilih untuk penguatan portofolio kompetensi profesional' }
          ]
        },
        blocks: [
          {
            heading: `Konsep Dasar & Latar Belakang Perbandingan ${pair.title}`,
            paragraphs: [
              `Dalam tata kelola keselamatan dan kesehatan kerja di Indonesia, sering kali timbul keraguan dalam memilih antara ${pair.left} dan ${pair.right}. Keduanya memiliki fungsi, dasar hukum, serta tujuan penerapan yang berbeda namun saling melengkapi.`,
              `${pair.desc} Memahami karakteristik masing-masing opsi sangat penting agar keputusan yang diambil tepat sasaran, efisien dari sisi anggaran, dan memenuhi seluruh ketentuan perundang-undangan yang berlaku.`
            ]
          },
          {
            heading: 'Matriks Perbedaan Kunci & Analisis Komparatif',
            paragraphs: [
              'Analisis mendalam terhadap kedua opsi menunjukkan beberapa poin perbedaan fundamental:',
            ],
            bullets: [
              `Aspek Yuridis: ${pair.left} dan ${pair.right} memiliki dasar hukum penunjukan dan penerbit yang berbeda.`,
              'Ruang Lingkup Penerapan: Cakupan pengawasan, batasan wewenang teknis, dan tanggung jawab hukum di tempat kerja.',
              'Persyaratan & Prosedur: Alur pendaftaran, prasyarat latar belakang pendidikan, portofolio kerja, serta metode evaluasi kelulusan.',
              'Masa Berlaku & Perpanjangan: Prosedur pemeliharaan status keabsahan dokumen dan ketentuan resertifikasi berkala.'
            ]
          },
          {
            heading: 'Panduan Keputusan: Kapan Memilih Masing-Masing Opsi?',
            paragraphs: [
              `Pilihlah ${pair.left} apabila prioritas utama Anda atau perusahaan adalah memenuhi regulasi wajib ketenagakerjaan, penunjukan kelembagaan resmi di tempat kerja, atau operasional teknis harian.`,
              `Pilihlah ${pair.right} apabila kebutuhan berfokus pada pembuktian kompetensi kerja individu berstandar nasional/internasional, pemenuhan kualifikasi prakualifikasi tender (CSMS), atau sertifikasi sistem terakreditasi.`
            ]
          },
          {
            heading: 'Konsultasi Jalur Sertifikasi di PT Kreasi Ultimate Berjaya',
            paragraphs: [
              'PT Kreasi Ultimate Berjaya melayani konsultasi gratis bagi perorangan maupun korporasi untuk membantu memetakan kebutuhan pelatihan, uji kompetensi BNSP, atau pembinaan Kemnaker RI yang paling tepat dan efisien.'
            ]
          }
        ],
        faqs: [
          { question: `Apakah perusahaan boleh menerapkan atau mengambil kedua opsi (${pair.left} dan ${pair.right}) sekaligus?`, answer: 'Bisa dan sangat dianjurkan. Menerapkan keduanya memberikan sinergi antara pemenuhan kepatuhan hukum wajib kementerian sekaligus pengakuan sistem standar berkelas dunia.' },
          { question: `Mana yang lebih efisien dari segi biaya dan waktu?`, answer: 'Efisiensi bergantung pada tujuan organisasi. Untuk kebutuhan izin operasional wajib, jalur regulasi kementerian mutlak didahulukan agar tidak terkena sanksi pengawasan ketenagakerjaan.' },
          { question: `Bagaimana cara berkonsultasi mengenai pemilihan ${pair.title}?`, answer: 'Hubungi tim konsultan PT Kreasi Ultimate Berjaya melalui tombol WhatsApp untuk mendapatkan pemetaan kebutuhan program dan jadwal batch terdekat.' }
        ],
        related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'panduan/biaya-pelatihan-k3', 'jadwal'],
        sources: [src, officialSources.uu1, officialSources.pp50],
        status: 'published',
        publishedAt: '2026-08-01',
        updatedAt: '2026-09-01',
        indexable: true,
        intent: `perbandingan ${slug} perbedaan kelebihan kekurangan pilih mana`,
        primaryKeyword: keyword,
        searchIntent: `perbedaan, perbandingan matriks, kelebihan, dan rekomendasi ${pair.title}`,
        intentType: 'commercial',
        parentTopic: `Perbandingan K3 ${set.domain}`,
        cannibalizationGroup: `perbandingan-${pair.slug.split('-vs-')[0] || 'k3'}`,
        contentKind: 'comparison',
        primaryCtaText: `Konsultasi Pemilihan ${pair.title.split(':')[1]?.trim() || pair.title}`,
        primaryCtaIntent: 'syarat',
        secondaryCtaText: 'Tanya Jadwal & Biaya Program',
        secondaryCtaIntent: 'jadwal'
      });
    }
  }

  return records;
}

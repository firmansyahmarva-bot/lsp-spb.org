import { ContentRecordInput } from './build-inventory';

export function generateIndustriRecords(): ContentRecordInput[] {
  const records: ContentRecordInput[] = [];

  const industryClusters = [
    {
      group: 'Energi, Migas, Pertambangan & Mineral',
      prefix: 'Energi-Tambang',
      sectors: [
        'Eksplorasi & Pengeboran Minyak-Gas Hulu (Upstream)', 'Kilang Pengolahan Minyak Bumi (Oil Refinery)', 'Fasilitas Gas Alam Cair (Liquefied Natural Gas - LNG)',
        'Pipa Transmisi & Distribusi Gas Bumi', 'Terminal Penyimpanan BBM & Depo Avtur', 'Pertambangan Batubara Terbuka (Open Cast Coal Mine)',
        'Pertambangan Batubara Bawah Tanah (Underground Coal Mine)', 'Pertambangan Bijih Tembaga & Emas Skala Besar', 'Pertambangan & Pemurnian Bijih Nikel Laterit',
        'Fasilitas Pabrik Peleburan Smelter Nikel RKEF & HPAL', 'Fasilitas Pabrik Peleburan Smelter Tembaga & Konsentrat', 'Fasilitas Pabrik Peleburan Aluminium Ingot',
        'Pembangkit Listrik Tenaga Uap (PLTU Batubara)', 'Pembangkit Listrik Tenaga Gas & Uap (PLTGU)', 'Pembangkit Listrik Tenaga Panas Bumi (PLTP Geothermal)',
        'Pembangkit Listrik Tenaga Air (PLTA & Waduk Hidro)', 'Pembangkit Listrik Tenaga Surya Skala Utilitas (PLTS Ground-Mounted)', 'Pembangkit Listrik Tenaga Bayu / Angin (PLTB Wind Farm)',
        'Pertambangan Bauksit & Pabrik Pengolahan Alumina (SGA)', 'Pertambangan Timah Darat & Kapal Keruk Laut', 'Pertambangan Pasir Besi & Mineral Pasir Laut',
        'Pertambangan Batu Kapur & Kuari Bahan Baku Semen', 'Pertambangan Granit & Andesit Industri Konstruksi', 'Pabrik Pengolahan Minyak Pelumas & Oli Bekas',
        'Terminal Pengisian Bahan Bakar Gas (SPBG & Mother Station)', 'Distribusi & Pengisian Tabung Gas LPG Industri', 'Fasilitas Regasifikasi Gas Terapung (FSRU Offshore)',
        'Pengeboran Sumur Eksplorasi Panas Bumi Suhu Tinggi', 'Pembangkit Listrik Tenaga Biomassa & Biogas Sawit', 'Kawasan Pertambangan Aspal Alam Buton'
      ]
    },
    {
      group: 'Manufaktur, Fabrikasi & Logam Berat',
      prefix: 'Manufaktur-Logam',
      sectors: [
        'Pabrik Manufaktur & Perakitan Kendaraan Otomotif', 'Pabrik Pembuatan Komponen Presisi & Suku Cadang Mesin', 'Pabrik Pembuatan Ban Kendaraan & Produk Karet',
        'Pabrik Peleburan Baja, Billet & Besi Beton', 'Pabrik Pembuatan Pipa Baja Seamless & Spiral Las', 'Pabrik Pengecoran Logam Cor (Foundry & Casting)',
        'Pabrik Semen Portland & Penggilingan Klinker', 'Pabrik Pembuatan Keramik Ubin & Porselen Lantai', 'Pabrik Kaca Lembaran & Botol Kemasan Kaca',
        'Pabrik Kimia Dasar Petrokimia (Etilena & Propilena)', 'Pabrik Kimia Pupuk Urea, Amonia & NPK', 'Pabrik Cat, Tinta Cetak, Pelarut & Resin Sintetis',
        'Pabrik Tekstil Pemintalan Benang & Penenunan Kain', 'Pabrik Garmen, Konveksi & Pakaian Jadi Ekspor', 'Pabrik Pembuatan Sepatu Olahraga & Alas Kaki Kulit',
        'Pabrik Pulp, Selulosa & Kertas Kemasan Industri', 'Pabrik Pengolahan Kayu Lapis, Plywood & Mebel Furniture', 'Pabrik Pencetakan & Pengemasan Kemasan Plastik Fleksibel',
        'Pabrik Percetakan Skala Besar & Penerbitan Media', 'Pabrik Manufaktur Elektronik Konsumen & Peralatan Rumah Tangga', 'Pabrik Perakitan Komputer, Handphone & Semikonduktor',
        'Pabrik Pembuatan Kabel Listrik Tembaga & Aluminium', 'Pabrik Baterai Asam Timbal (Aki) & Daur Ulang Timbal', 'Pabrik Manufaktur Sel Baterai Lithium Kendaraan Listrik',
        'Pabrik Pembuatan Tabung Gas Bertekanan & Tangki Baja', 'Pabrik Transformator Listrik & Panel Tegangan Tinggi', 'Pabrik Perakitan Traktor & Alat Pertanian Modern',
        'Pabrik Pengolahan Bahan Kimia Pembersih & Kosmetika', 'Pabrik Pembuatan Kardus Gelombang & Box Kemasan', 'Pabrik Pipa PVC, HDPE & Fitting Plastik Industri'
      ]
    },
    {
      group: 'Infrastruktur, Konstruksi, Sipil & Logistik',
      prefix: 'Konstruksi-Logistik',
      sectors: [
        'Proyek Konstruksi Gedung Pencakar Langit (High-Rise Building)', 'Proyek Konstruksi Jalan Tol Trans & Layang Elevated', 'Proyek Pembangunan Jembatan Bentang Panjang & Kabel Pancang',
        'Proyek Pembangunan Terowongan Bawah Tanah & Jalur MRT/LRT', 'Proyek Pembangunan Bendungan Air & Saluran Irigasi Raksasa', 'Proyek Reklamasi Pantai & Pembangunan Tanggul Laut',
        'Proyek Pembangunan Pelabuhan Laut & Terminal Peti Kemas', 'Proyek Pembangunan Terminal Bandara Udara Internasional', 'Proyek Pemasangan Rel Kereta Api Cepat & Jaringan Sinyal',
        'Proyek Pemasangan Jaringan Pipa Air Bersih PDAM & Limbah Kota', 'Proyek Pemasangan Saluran Udara Tegangan Ekstra Tinggi (SUTET)', 'Proyek Fabrikasi & Pemasangan Jembatan Baja',
        'Proyek Pembangunan Kawasan Industri Terpadu (Industrial Estate)', 'Proyek Perumahan Real Estate Skala Kota Mandiri', 'Proyek Pembongkaran Struktur Bangunan Tua (Demolition Site)',
        'Pergudangan Modern & Pusat Distribusi E-Commerce', 'Kawasan Pusat Logistik Berikat & Pergudangan Ekspor-Impor', 'Fasilitas Gudang Berpendingin Suhu Rendah (Cold Storage)',
        'Perusahaan Transportasi Darat Angkutan Truk Logistik Berat', 'Perusahaan Angkutan Barang Berbahaya Bahan Kimia B3', 'Fasilitas Terminal Peti Kemas & Depo Kontainer Kosong',
        'Perusahaan Bongkar Muat Kapal Pelabuhan (Stevedoring Company)', 'Fasilitas Galangan Kapal Perbaikan Dok & Pembuatan Kapal', 'Perusahaan Pelayaran Niaga Kargo Curah & Kontainer',
        'Perusahaan Maskapai Penerbangan Niaga & Angkutan Udara', 'Perusahaan Ground Handling Penanganan Pesawat di Bandara', 'Perusahaan Operator Kereta Api Penumpang & Barang',
        'Perusahaan Pengelola Jalan Tol & Patroli Keamanan Lalu Lintas', 'Fasilitas Stasiun Pengisian Bahan Bakar Umum (SPBU)', 'Perusahaan Ekspedisi Kurir Cepat & Distribusi Paket'
      ]
    },
    {
      group: 'Layanan Medis, Agroindustri, Pariwisata & Teknologi',
      prefix: 'Layanan-Agro',
      sectors: [
        'Rumah Sakit Umum Pusat & Rumah Sakit Swasta Rujukan', 'Klinik Pratama, Puskesmas & Fasilitas Rawat Jalan', 'Laboratorium Klinik Pengujian Medis & Diagnostik',
        'Industri Farmasi Pembuatan Obat Tablet, Injeksi & Vaksin', 'Industri Pembuatan Alat Kesehatan & Bahan Medis Habis Pakai', 'Perkebunan Kelapa Sawit & Pabrik Minyak Kelapa Sawit (PKS)',
        'Perkebunan Karet Alam & Pabrik Pengolahan Crumb Rubber', 'Perkebunan Tebu & Pabrik Gula Rafinasi Skala Besar', 'Perkebunan Teh, Kopi & Pabrik Pengeringan Daun Teh',
        'Pabrik Pengolahan Tepung Terigu, Gandum & Silo Biji-Bijian', 'Pabrik Pembuatan Biskuit, Roti & Makanan Ringan Massal', 'Pabrik Pengolahan Susu Formula & Produk Olahan Susu (Dairy)',
        'Pabrik Pengolahan Daging Unggas & Rumah Potong Hewan Modern', 'Pabrik Pengalengan Ikan, Tuna & Pengolahan Udang Beku', 'Pabrik Minuman Ringan Berkarbonasi & Air Minum Dalam Kemasan (AMDK)',
        'Pabrik Pembuatan Minyak Goreng Sawit & Margarin Nabati', 'Pabrik Pengolahan Bumbu Masak, Kecap & Saus Industri', 'Hotel Bintang Lima, Resort Wisata & Pusat Konvensi',
        'Taman Hiburan Bertema Raksasa & Fasilitas Rekreasi Air (Waterpark)', 'Gedung Pusat Perbelanjaan Mall & Hypermarket Ritel Modern', 'Gedung Perkantoran Menara Sewa & Coworking Space Terpadu',
        'Fasilitas Data Center Skala Besar & Infrastruktur Server Cloud', 'Perusahaan Operator Jaringan Menara Telekomunikasi Seluler', 'Lembaga Pendidikan Tinggi, Universitas & Laboratorium Riset',
        'Fasilitas Pengolahan Sampah Menjadi Energi Listrik (Waste-to-Energy PLTSa)', 'Fasilitas Instalasi Pengolahan Air Limbah Terpadu Kawasan (WTP)', 'Perusahaan Jasa Pengelolaan & Pengangkutan Limbah Industri B3',
        'Perusahaan Laboratorium Uji Lingkungan & Kalibrasi Instrumen', 'Fasilitas Kebun Binatang & Konservasi Satwa Liar Taman Safari', 'Perusahaan Jasa Keamanan, Penyelamatan & Pemadam Swasta'
      ]
    }
  ];

  for (const cluster of industryClusters) {
    for (const sector of cluster.sectors) {
      const slug = `k3-industri-${sector.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`.replace(/^-|-$/g, '');
      const fullTitle = `Penerapan K3 pada Sektor: ${sector}`;

      records.push({
        section: 'industri',
        slug,
        title: fullTitle,
        metaTitle: `${fullTitle} | Penerapan K3 Sektoral`,
        description: `Analisis profil risiko, bahaya kritis, regulasi wajib, program keselamatan, dan sertifikasi K3 yang diperlukan pada industri ${sector}.`,
        answer: `${fullTitle} membahas identifikasi bahaya dominan, persyaratan standar perundangan, kebutuhan lisensi personel, serta strategi penerapan SMK3 yang disesuaikan khusus untuk lingkungan operasional ${sector}.`,
        highlights: [`Sektor ${cluster.group}`, 'Analisis Profil Bahaya Dominan', 'Daftar Regulasi & Sertifikasi Wajib', 'Panduan Implementasi K3 Sektoral'],
        blocks: [
          { heading: `Karakteristik Operasional & Risiko ${sector}`, paragraphs: [`Lingkungan operasional pada sektor ${sector} memiliki kompleksitas risiko bahaya yang unik dan membutuhkan pendekatan keselamatan kerja yang spesifik.`, 'Penerapan standar keselamatan tidak hanya ditujukan untuk melindungi keselamatan jiwa pekerja dari kecelakaan fatal, namun juga melindungi keandalan aset produksi dan kelestarian lingkungan sekitar.'] },
          { heading: 'Potensi Bahaya Kritis & Titik Rawan', paragraphs: ['Sumber potensi bahaya dominan pada sektor ini meliputi:'], bullets: ['Bahaya mekanik permesinan dan pergerakan alat berkapasitas besar', 'Bahaya kimia toksik, bahan mudah terbakar, atau paparan debu industri', 'Bahaya fisik lingkungan seperti kebisingan ekstrem, getaran, atau suhu panas', 'Bahaya ergonomi dan faktor organisasi kerja dengan ritme shift intensif'] },
          { heading: 'Regulasi Wajib & Lisensi Personel K3', paragraphs: ['Perusahaan yang beroperasi pada sektor ini diwajibkan menerapkan PP No. 50 Tahun 2012 tentang SMK3 serta mempekerjakan personel bersertifikat resmi seperti Ahli K3 Umum, pengawas sektoral, dan operator berlisensi Kemnaker RI.'] },
          { heading: 'Solusi Pembinaan & In-House Training', paragraphs: ['PT Kreasi Ultimate Berjaya menyediakan program pelatihan terakreditasi dan workshop In-House Training yang materinya disesuaikan langsung dengan studi kasus bahaya di fasilitas industri Anda.'] }
        ],
        faqs: [
          { question: `Apa program pelatihan K3 yang paling direkomendasikan untuk sektor ${sector}?`, answer: 'Program yang direkomendasikan mencakup pembinaan Ahli K3 Umum, pelatihan Auditor SMK3, penanggulangan kebakaran, petugas P3K, dan sertifikasi operator teknis terkait.' },
          { question: `Apakah PT Kreasi Ultimate Berjaya melayani pelatihan in-house di lokasi industri ini?`, answer: 'Ya, kami melayani penyelenggaraan In-House Training on-site di seluruh wilayah Indonesia dengan materi dan simulasi yang disesuaikan profil risiko fasilitas Anda.' }
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
        intent: `k3 industri ${slug.replace(/^k3-industri-/, '').replace(/-/g, ' ')}`,
        primaryKeyword: `k3 industri ${slug.replace(/^k3-industri-/, '').replace(/-/g, ' ')}`,
        searchIntent: `penerapan standar K3, potensi bahaya, dan regulasi pada sektor ${sector}`,
        intentType: 'informational',
        parentTopic: `K3 Industri: ${cluster.group}`,
        cannibalizationGroup: `industri-${cluster.prefix.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        contentKind: 'industry',
        primaryCtaText: 'Konsultasi K3 Sektor Industri Ini',
        primaryCtaIntent: 'perusahaan',
        secondaryCtaText: 'Tanya Jadwal Pelatihan K3',
        secondaryCtaIntent: 'jadwal'
      });
    }
  }

  return records;
}

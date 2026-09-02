import { ContentRecordInput } from './build-inventory';
import { officialSources } from './sources';

interface IndustryCluster {
  group: string;
  prefix: string;
  sourceKey: string;
  frameworkDefault: string;
  sectors: string[];
}

export function generateIndustriRecords(): ContentRecordInput[] {
  const records: ContentRecordInput[] = [];

  const industryClusters: IndustryCluster[] = [
    {
      group: 'Energi, Migas, Pertambangan & Mineral',
      prefix: 'Energi-Tambang',
      sourceKey: 'esdm1827_2018',
      frameworkDefault: 'SMKP Minerba, Sistem Manajemen Keselamatan Migas & SMK3 PP 50/2012',
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
      sourceKey: 'permen38_2016',
      frameworkDefault: 'SMK3 PP 50/2012, ISO 45001 & Norma Teknis Kemnaker RI',
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
      sourceKey: 'pupr10_2021',
      frameworkDefault: 'SMKK Kementerian PUPR No. 10/2021 & SMK3 PP 50/2012',
      sectors: [
        'Proyek Konstruksi Gedung Pencakar Langit (High-Rise Building)', 'Proyek Konstruksi Jalan Tol Trans & Layang Elevated', 'Proyek Pembangunan Jembatan Bentang Panjang & Kabel Pancang',
        'Proyek Pembangunan Terowongan Bawah Tanah & Jalur MRT/LRT', 'Proyek Pembangunan Bendungan Air & Saluran Irigasi Raksasa', 'Proyek Reklamasi Pantai & Pembangunan Tanggul Laut',
        'Proyek Pembangunan Pelabuhan Laut & Terminal Peti Kemas', 'Proyek Pembangunan Terminal Bandara Udara Internasional', 'Proyek Pemasangan Rel Kereta Api Cepat & Jaringan Sinyal',
        'Proyek Pemasangan Jaringan Pipa Air Bersih PDAM & Limbah Kota', 'Proyek Pemasangan Saluran Udara Tegangan Ekstra Tinggi (SUTET)', 'Proyek Fabrikasi & Pemasangan Jembatan Baja',
        'Proyek Pembangunan Kawasan Industri Terpadu (Industrial Estate)', 'Proyek Perumahan Real Estate Skala Kota Mandiri', 'Proyek Pembongkaran Struktur Bangunan Tua (Demolition Site)',
        'Pergudangan Modern & Pusat Distribusi E-Commerce', 'Kawasan Pusat Logistik Berikat & Pergudangan Ekspor-Impor', 'Fasilitas Gudang Berpendingin Suhu Rendah (Cold Storage)',
        'Perusahaan Transportasi Darat Angkutan Truk Logistik Berat', 'Perusahaan Angkutan Barang Berbahaya Bahan Kimia B3', 'Fasilitas Terminal Peti Kemas & Depo Kontainer Kosong',
        'Perusahaan Bongkar Muat Kapal Pelabuhan (Stevedoring Company)', 'Fasilitas Galangan Kapal Perbaikan Dok & Pembuatan Kapal', 'Perusahaan Pelayaran Niaga Kargo Curah & Kontainer',
        'Perusahaan Maskapai Penerbangan Niaga & Angkutan Udara', 'Perusahaan Ground Handling Penanganan Pesawat di Bandara', 'Perusahaan Ground Handling Helikopter & Helideck Tambang',
        'Perusahaan Pengelola Jalan Tol & Patroli Keamanan Lalu Lintas', 'Fasilitas Stasiun Pengisian Bahan Bakar Umum (SPBU)', 'Perusahaan Ekspedisi Kurir Cepat & Distribusi Paket'
      ]
    },
    {
      group: 'Layanan Medis, Agroindustri, Pariwisata & Fasilitas Publik',
      prefix: 'Layanan-Agro',
      sourceKey: 'permenkes66_2016',
      frameworkDefault: 'Permenkes No. 66/2016 (K3RS), Standar Akreditasi & SMK3 PP 50/2012',
      sectors: [
        'Rumah Sakit Umum Pusat & Rumah Sakit Swasta Rujukan', 'Klinik Pratama, Puskesmas & Fasilitas Rawat Jalan', 'Laboratorium Klinik Pengujian Medis & Diagnostik',
        'Industri Farmasi Pembuatan Obat Tablet, Injeksi & Vaksin', 'Industri Pembuatan Alat Kesehatan & Bahan Medis Habis Pakai', 'Perkebunan Kelapa Sawit & Pabrik Minyak Kelapa Sawit (PKS)',
        'Perkebunan Karet & Pabrik Pengolahan Crumb Rubber', 'Perkebunan Tebu & Pabrik Gula Kristal Putih', 'Perkebunan Teh, Kopi & Pabrik Pengolahan Minuman',
        'Industri Pengolahan Susu Sapi & Produk Olahan Dairy', 'Industri Pemotongan Unggas & Pengolahan Daging Beku', 'Industri Pembekuan Udang & Pengolahan Hasil Laut Ekspor',
        'Industri Pengolahan Tepung Terigu & Biji-Bijian Pangan', 'Industri Pengalengan Ikan & Buah-Buahan Makanan', 'Pabrik Air Minum Dalam Kemasan (AMDK & Galon)',
        'Pabrik Minuman Ringan Berkarbonasi & Teh Siap Minum', 'Hotel Bintang Lima, Resort Pantai & Kawasan Pariwisata', 'Pusat Perbelanjaan Mall Megah & Gedung Komersial',
        'Taman Hiburan Bertema, Theme Park & Wahana Air Rekreasi', 'Gedung Pusat Data Komputasi Awan (Data Center Tier 3/4)', 'Gedung Perkantoran Menara Sewa Korporat Tinggi',
        'Fasilitas Instalasi Pengolahan Air Minum (IPA PDAM)', 'Fasilitas Pengolahan Air Limbah Terpadu (IPAL Terpusat)', 'Tempat Pemrosesan Akhir Sampah (TPA Sampah Sanitari)',
        'Pusat Daur Ulang Logam, Kertas & Plastik Terpadu', 'Fasilitas Pemusnahan Limbah Medis Insinerator Suhu Tinggi', 'Pabrik Pupuk Organik & Kompos Pertanian Skala Besar',
        'Kawasan Tambak Udang Intensif & Pembenihan Ikan', 'Perusahaan Jasa Keamanan & Pengamanan Fisik Industri', 'Lembaga Pendidikan Tinggi & Laboratorium Riset Universitas'
      ]
    }
  ];

  for (const cluster of industryClusters) {
    const src = officialSources[cluster.sourceKey] || officialSources.uu1;
    for (let i = 0; i < cluster.sectors.length; i++) {
      const sectorName = cluster.sectors[i];
      const fullTitle = `Penerapan K3 di Sektor ${sectorName}`;
      const slug = `${sectorName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`.replace(/^-|-$/g, '');
      const keyword = `k3 sektor ${slug.replace(/-/g, ' ')}`.trim();

      records.push({
        section: 'industri',
        slug,
        title: fullTitle,
        metaTitle: `${fullTitle} | Standar & Bahaya Kritis`,
        description: `Panduan implementasi K3 sektor ${sectorName}: identifikasi bahaya dominan, kerangka regulasi ${cluster.frameworkDefault}, kebutuhan lisensi personil, dan program mitigasi kecelakaan.`,
        answer: `${fullTitle} dirancang untuk mengelola risiko kecelakaan spesifik dan penyakit akibat kerja di sektor ${sectorName} melalui integrasi ${cluster.frameworkDefault} serta penempatan personel K3 bersertifikasi resmi.`,
        highlights: [
          `Sektor Industri: ${sectorName}`,
          `Kategori: ${cluster.group}`,
          `Kerangka Kepatuhan: ${cluster.frameworkDefault}`,
          'Tujuan: Pengendalian Bahaya Kritis & Pencapaian Zero Accident Sektoral'
        ],
        blocks: [
          {
            heading: `Karakteristik Operasional & Profil Risiko ${sectorName}`,
            paragraphs: [
              `Operasional di sektor ${sectorName} memiliki profil bahaya yang khas dan memerlukan pendekatan keselamatan kerja terstruktur. Aktivitas di area ini melibatkan kombinasi risiko mekanikal, kelistrikan, bahan kimia berbahaya, serta faktor lingkungan kerja fisik yang berpotensi memicu kecelakaan parah jika tidak dikendalikan dengan ketat.`,
              `Penerapan K3 berlandaskan ${cluster.frameworkDefault} menjadi kewajiban mutlak bagi pengelola fasilitas guna melindungi keselamatan seluruh tenaga kerja, meminimalkan downtime operasional, dan memenuhi audit sertifikasi sistem manajemen.`
            ]
          },
          {
            heading: 'Bahaya Kritis & Program Mitigasi Unggulan',
            paragraphs: [
              'Program keselamatan yang wajib diterapkan mencakup:',
            ],
            bullets: [
              'Penyusunan HIRADC spesifik yang memetakan titik kegagalan proses dan aktivitas risiko tinggi',
              'Penerapan sistem Izin Kerja Aman (Permit to Work) untuk pekerjaan berisiko tinggi',
              'Pelaksanaan pemeliharaan preventif dan riksa uji kelayakan berkala peralatan mesin/sarana pabrik',
              'Penyediaan Alat Pelindung Diri (APD) terstandar dan penegakan disiplin pemakaian di area kerja',
              'Pembentukan Tim Tanggap Darurat (Emergency Response Team) dan simulasi latihan berkala'
            ]
          },
          {
            heading: 'Kebutuhan Sertifikasi & Lisensi Personel K3',
            paragraphs: [
              'Perusahaan pada sektor ini dipersyaratkan menunjuk tenaga kerja yang memiliki sertifikat pembinaan Ahli K3 Umum, Ahli K3 Spesialis sektoral terkait, auditor internal SMK3, serta operator berlisensi SIO Kemnaker RI.'
            ]
          },
          {
            heading: 'Layanan Pendampingan K3 Sektoral di PT Kreasi Ultimate Berjaya',
            paragraphs: [
              'PT Kreasi Ultimate Berjaya menyediakan layanan terpadu mencakup pelatihan in-house yang dikustomisasi sesuai proses kerja sektor Anda, audit kesiapan sertifikasi SMK3, hingga konsultasi penyusunan dokumen keselamatan kerja komprehensif.'
            ]
          }
        ],
        faqs: [
          { question: `Apa bahaya paling kritis yang dihadapi pekerja di sektor ${sectorName}?`, answer: `Bahaya dominan meliputi risiko mekanik permesinan, paparan lingkungan fisik ekstrem, potensi kebakaran/ledakan, dan kelelahan kerja yang membutuhkan mitigasi bertingkat.` },
          { question: `Regulasi apa yang wajib dipatuhi oleh manajemen di sektor ${sectorName}?`, answer: `Kepatuhan mengacu pada ${cluster.frameworkDefault}, UU No. 1 Tahun 1970, serta peraturan menteri sektoral terkait yang mengikat.` },
          { question: `Bagaimana cara menyelenggarakan pelatihan in-house K3 khusus sektor ${sectorName}?`, answer: 'Anda dapat menghubungi konsultan PT Kreasi Ultimate Berjaya via WhatsApp untuk mendiskusikan silabus modular, jadwal pelaksanaan, dan simulasi studi kasus lapangan fasilitas Anda.' }
        ],
        related: ['pelatihan/ahli-k3-umum', 'panduan/syarat-ahli-k3-umum', 'perbandingan/bnsp-vs-kemnaker', 'jadwal'],
        sources: [src, officialSources.uu1, officialSources.pp50],
        status: 'published',
        publishedAt: '2026-08-01',
        updatedAt: '2026-09-01',
        indexable: true,
        intent: `industri k3 ${slug} bahaya risiko smk3 regulasi`,
        primaryKeyword: keyword,
        searchIntent: `penerapan k3, profil bahaya, regulasi, dan sertifikasi sektor ${sectorName}`,
        intentType: 'informational',
        parentTopic: `K3 Sektoral ${cluster.group}`,
        cannibalizationGroup: `industri-${cluster.prefix.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        contentKind: 'industry',
        primaryCtaText: `Konsultasi K3 Sektor ${sectorName.split('(')[0].trim()}`,
        primaryCtaIntent: 'perusahaan',
        secondaryCtaText: 'Minta Penawaran Pelatihan In-House',
        secondaryCtaIntent: 'jadwal'
      });
    }
  }

  return records;
}

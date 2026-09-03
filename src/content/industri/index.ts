import { type ContentRecord } from '../../lib/content-types';
import rec_0 from './eksplorasi-pengeboran-minyak-gas-hulu-upstream';
import rec_1 from './kilang-pengolahan-minyak-bumi-oil-refinery';
import rec_2 from './fasilitas-gas-alam-cair-liquefied-natural-gas-lng';
import rec_3 from './pipa-transmisi-distribusi-gas-bumi';
import rec_4 from './terminal-penyimpanan-bbm-depo-avtur';
import rec_5 from './pertambangan-batubara-terbuka-open-cast-coal-mine';
import rec_6 from './pertambangan-batubara-bawah-tanah-underground-coal-mine';
import rec_7 from './pertambangan-bijih-tembaga-emas-skala-besar';
import rec_8 from './pertambangan-pemurnian-bijih-nikel-laterit';
import rec_9 from './fasilitas-pabrik-peleburan-smelter-nikel-rkef-hpal';
import rec_10 from './fasilitas-pabrik-peleburan-smelter-tembaga-konsentrat';
import rec_11 from './fasilitas-pabrik-peleburan-aluminium-ingot';
import rec_12 from './pembangkit-listrik-tenaga-uap-pltu-batubara';
import rec_13 from './pembangkit-listrik-tenaga-gas-uap-pltgu';
import rec_14 from './pembangkit-listrik-tenaga-panas-bumi-pltp-geothermal';
import rec_15 from './pembangkit-listrik-tenaga-air-plta-waduk-hidro';
import rec_16 from './pembangkit-listrik-tenaga-surya-skala-utilitas-plts-ground-mounted';
import rec_17 from './pembangkit-listrik-tenaga-bayu-angin-pltb-wind-farm';
import rec_18 from './pertambangan-bauksit-pabrik-pengolahan-alumina-sga';
import rec_19 from './pertambangan-timah-darat-kapal-keruk-laut';
import rec_20 from './pertambangan-pasir-besi-mineral-pasir-laut';
import rec_21 from './pertambangan-batu-kapur-kuari-bahan-baku-semen';
import rec_22 from './pertambangan-granit-andesit-industri-konstruksi';
import rec_23 from './pabrik-pengolahan-minyak-pelumas-oli-bekas';
import rec_24 from './terminal-pengisian-bahan-bakar-gas-spbg-mother-station';
import rec_25 from './distribusi-pengisian-tabung-gas-lpg-industri';
import rec_26 from './fasilitas-regasifikasi-gas-terapung-fsru-offshore';
import rec_27 from './pengeboran-sumur-eksplorasi-panas-bumi-suhu-tinggi';
import rec_28 from './pembangkit-listrik-tenaga-biomassa-biogas-sawit';
import rec_29 from './kawasan-pertambangan-aspal-alam-buton';
import rec_30 from './pabrik-manufaktur-perakitan-kendaraan-otomotif';
import rec_31 from './pabrik-pembuatan-komponen-presisi-suku-cadang-mesin';
import rec_32 from './pabrik-pembuatan-ban-kendaraan-produk-karet';
import rec_33 from './pabrik-peleburan-baja-billet-besi-beton';
import rec_34 from './pabrik-pembuatan-pipa-baja-seamless-spiral-las';
import rec_35 from './pabrik-pengecoran-logam-cor-foundry-casting';
import rec_36 from './pabrik-semen-portland-penggilingan-klinker';
import rec_37 from './pabrik-pembuatan-keramik-ubin-porselen-lantai';
import rec_38 from './pabrik-kaca-lembaran-botol-kemasan-kaca';
import rec_39 from './pabrik-kimia-dasar-petrokimia-etilena-propilena';
import rec_40 from './pabrik-kimia-pupuk-urea-amonia-npk';
import rec_41 from './pabrik-cat-tinta-cetak-pelarut-resin-sintetis';
import rec_42 from './pabrik-tekstil-pemintalan-benang-penenunan-kain';
import rec_43 from './pabrik-garmen-konveksi-pakaian-jadi-ekspor';
import rec_44 from './pabrik-pembuatan-sepatu-olahraga-alas-kaki-kulit';
import rec_45 from './pabrik-pulp-selulosa-kertas-kemasan-industri';
import rec_46 from './pabrik-pengolahan-kayu-lapis-plywood-mebel-furniture';
import rec_47 from './pabrik-pencetakan-pengemasan-kemasan-plastik-fleksibel';
import rec_48 from './pabrik-percetakan-skala-besar-penerbitan-media';
import rec_49 from './pabrik-manufaktur-elektronik-konsumen-peralatan-rumah-tangga';
import rec_50 from './pabrik-perakitan-komputer-handphone-semikonduktor';
import rec_51 from './pabrik-pembuatan-kabel-listrik-tembaga-aluminium';
import rec_52 from './pabrik-baterai-asam-timbal-aki-daur-ulang-timbal';
import rec_53 from './pabrik-manufaktur-sel-baterai-lithium-kendaraan-listrik';
import rec_54 from './pabrik-pembuatan-tabung-gas-bertekanan-tangki-baja';
import rec_55 from './pabrik-transformator-listrik-panel-tegangan-tinggi';
import rec_56 from './pabrik-perakitan-traktor-alat-pertanian-modern';
import rec_57 from './pabrik-pengolahan-bahan-kimia-pembersih-kosmetika';
import rec_58 from './pabrik-pembuatan-kardus-gelombang-box-kemasan';
import rec_59 from './pabrik-pipa-pvc-hdpe-fitting-plastik-industri';
import rec_60 from './proyek-konstruksi-gedung-pencakar-langit-high-rise-building';
import rec_61 from './proyek-konstruksi-jalan-tol-trans-layang-elevated';
import rec_62 from './proyek-pembangunan-jembatan-bentang-panjang-kabel-pancang';
import rec_63 from './proyek-pembangunan-terowongan-bawah-tanah-jalur-mrt-lrt';
import rec_64 from './proyek-pembangunan-bendungan-air-saluran-irigasi-raksasa';
import rec_65 from './proyek-reklamasi-pantai-pembangunan-tanggul-laut';
import rec_66 from './proyek-pembangunan-pelabuhan-laut-terminal-peti-kemas';
import rec_67 from './proyek-pembangunan-terminal-bandara-udara-internasional';
import rec_68 from './proyek-pemasangan-rel-kereta-api-cepat-jaringan-sinyal';
import rec_69 from './proyek-pemasangan-jaringan-pipa-air-bersih-pdam-limbah-kota';
import rec_70 from './proyek-pemasangan-saluran-udara-tegangan-ekstra-tinggi-sutet';
import rec_71 from './proyek-fabrikasi-pemasangan-jembatan-baja';
import rec_72 from './proyek-pembangunan-kawasan-industri-terpadu-industrial-estate';
import rec_73 from './proyek-perumahan-real-estate-skala-kota-mandiri';
import rec_74 from './proyek-pembongkaran-struktur-bangunan-tua-demolition-site';
import rec_75 from './pergudangan-modern-pusat-distribusi-e-commerce';
import rec_76 from './kawasan-pusat-logistik-berikat-pergudangan-ekspor-impor';
import rec_77 from './fasilitas-gudang-berpendingin-suhu-rendah-cold-storage';
import rec_78 from './perusahaan-transportasi-darat-angkutan-truk-logistik-berat';
import rec_79 from './perusahaan-angkutan-barang-berbahaya-bahan-kimia-b3';
import rec_80 from './fasilitas-terminal-peti-kemas-depo-kontainer-kosong';
import rec_81 from './perusahaan-bongkar-muat-kapal-pelabuhan-stevedoring-company';
import rec_82 from './fasilitas-galangan-kapal-perbaikan-dok-pembuatan-kapal';
import rec_83 from './perusahaan-pelayaran-niaga-kargo-curah-kontainer';
import rec_84 from './perusahaan-maskapai-penerbangan-niaga-angkutan-udara';
import rec_85 from './perusahaan-ground-handling-penanganan-pesawat-di-bandara';
import rec_86 from './perusahaan-ground-handling-helikopter-helideck-tambang';
import rec_87 from './perusahaan-pengelola-jalan-tol-patroli-keamanan-lalu-lintas';
import rec_88 from './fasilitas-stasiun-pengisian-bahan-bakar-umum-spbu';
import rec_89 from './perusahaan-ekspedisi-kurir-cepat-distribusi-paket';
import rec_90 from './rumah-sakit-umum-pusat-rumah-sakit-swasta-rujukan';
import rec_91 from './klinik-pratama-puskesmas-fasilitas-rawat-jalan';
import rec_92 from './laboratorium-klinik-pengujian-medis-diagnostik';
import rec_93 from './industri-farmasi-pembuatan-obat-tablet-injeksi-vaksin';
import rec_94 from './industri-pembuatan-alat-kesehatan-bahan-medis-habis-pakai';
import rec_95 from './perkebunan-kelapa-sawit-pabrik-minyak-kelapa-sawit-pks';
import rec_96 from './perkebunan-karet-pabrik-pengolahan-crumb-rubber';
import rec_97 from './perkebunan-tebu-pabrik-gula-kristal-putih';
import rec_98 from './perkebunan-teh-kopi-pabrik-pengolahan-minuman';
import rec_99 from './industri-pengolahan-susu-sapi-produk-olahan-dairy';
import rec_100 from './industri-pemotongan-unggas-pengolahan-daging-beku';
import rec_101 from './industri-pembekuan-udang-pengolahan-hasil-laut-ekspor';
import rec_102 from './industri-pengolahan-tepung-terigu-biji-bijian-pangan';
import rec_103 from './industri-pengalengan-ikan-buah-buahan-makanan';
import rec_104 from './pabrik-air-minum-dalam-kemasan-amdk-galon';
import rec_105 from './pabrik-minuman-ringan-berkarbonasi-teh-siap-minum';
import rec_106 from './hotel-bintang-lima-resort-pantai-kawasan-pariwisata';
import rec_107 from './pusat-perbelanjaan-mall-megah-gedung-komersial';
import rec_108 from './taman-hiburan-bertema-theme-park-wahana-air-rekreasi';
import rec_109 from './gedung-pusat-data-komputasi-awan-data-center-tier-3-4';
import rec_110 from './gedung-perkantoran-menara-sewa-korporat-tinggi';
import rec_111 from './fasilitas-instalasi-pengolahan-air-minum-ipa-pdam';
import rec_112 from './fasilitas-pengolahan-air-limbah-terpadu-ipal-terpusat';
import rec_113 from './tempat-pemrosesan-akhir-sampah-tpa-sampah-sanitari';
import rec_114 from './pusat-daur-ulang-logam-kertas-plastik-terpadu';
import rec_115 from './fasilitas-pemusnahan-limbah-medis-insinerator-suhu-tinggi';
import rec_116 from './pabrik-pupuk-organik-kompos-pertanian-skala-besar';
import rec_117 from './kawasan-tambak-udang-intensif-pembenihan-ikan';
import rec_118 from './perusahaan-jasa-keamanan-pengamanan-fisik-industri';
import rec_119 from './lembaga-pendidikan-tinggi-laboratorium-riset-universitas';

export const industriRecords: ContentRecord[] = [
  rec_0,
  rec_1,
  rec_2,
  rec_3,
  rec_4,
  rec_5,
  rec_6,
  rec_7,
  rec_8,
  rec_9,
  rec_10,
  rec_11,
  rec_12,
  rec_13,
  rec_14,
  rec_15,
  rec_16,
  rec_17,
  rec_18,
  rec_19,
  rec_20,
  rec_21,
  rec_22,
  rec_23,
  rec_24,
  rec_25,
  rec_26,
  rec_27,
  rec_28,
  rec_29,
  rec_30,
  rec_31,
  rec_32,
  rec_33,
  rec_34,
  rec_35,
  rec_36,
  rec_37,
  rec_38,
  rec_39,
  rec_40,
  rec_41,
  rec_42,
  rec_43,
  rec_44,
  rec_45,
  rec_46,
  rec_47,
  rec_48,
  rec_49,
  rec_50,
  rec_51,
  rec_52,
  rec_53,
  rec_54,
  rec_55,
  rec_56,
  rec_57,
  rec_58,
  rec_59,
  rec_60,
  rec_61,
  rec_62,
  rec_63,
  rec_64,
  rec_65,
  rec_66,
  rec_67,
  rec_68,
  rec_69,
  rec_70,
  rec_71,
  rec_72,
  rec_73,
  rec_74,
  rec_75,
  rec_76,
  rec_77,
  rec_78,
  rec_79,
  rec_80,
  rec_81,
  rec_82,
  rec_83,
  rec_84,
  rec_85,
  rec_86,
  rec_87,
  rec_88,
  rec_89,
  rec_90,
  rec_91,
  rec_92,
  rec_93,
  rec_94,
  rec_95,
  rec_96,
  rec_97,
  rec_98,
  rec_99,
  rec_100,
  rec_101,
  rec_102,
  rec_103,
  rec_104,
  rec_105,
  rec_106,
  rec_107,
  rec_108,
  rec_109,
  rec_110,
  rec_111,
  rec_112,
  rec_113,
  rec_114,
  rec_115,
  rec_116,
  rec_117,
  rec_118,
  rec_119
];

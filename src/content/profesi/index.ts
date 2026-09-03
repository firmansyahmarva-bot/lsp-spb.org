import { type ContentRecord } from '../../lib/content-types';
import rec_0 from './ahli-k3-umum';
import rec_1 from './ahli-k3-konstruksi';
import rec_2 from './ahli-k3-kimia';
import rec_3 from './ahli-k3-listrik';
import rec_4 from './ahli-k3-lingkungan-kerja';
import rec_5 from './ahli-k3-pesawat-angkat-angkut';
import rec_6 from './ahli-k3-pesawat-tenaga-produksi';
import rec_7 from './ahli-k3-pesawat-uap-bejana-tekan';
import rec_8 from './auditor-smk3-kemnaker';
import rec_9 from './lead-auditor-smk3';
import rec_10 from './ahli-k3-kebakaran';
import rec_11 from './ahli-k3-ruang-terbatas';
import rec_12 from './ahli-k3-bekerja-di-ketinggian';
import rec_13 from './ahli-k3-rumah-sakit-k3rs';
import rec_14 from './ahli-k3-pertambangan-minerba';
import rec_15 from './ahli-k3-migas-lepas-pantai';
import rec_16 from './ahli-k3-ergonomi-industri';
import rec_17 from './ahli-k3-radiasi-bapeten';
import rec_18 from './ahli-k3-pangan-food-safety';
import rec_19 from './ahli-k3-maritim-pelabuhan';
import rec_20 from './profesi-safety-officer-pertambangan-site';
import rec_21 from './profesi-safety-officer-proyek-konstruksi-bangunan';
import rec_22 from './profesi-safety-officer-pabrik-manufaktur';
import rec_23 from './profesi-safety-officer-industri-kimia-petrokimia';
import rec_24 from './profesi-safety-officer-anjungan-migas-offshore';
import rec_25 from './profesi-safety-officer-pembangkit-listrik-power-plant';
import rec_26 from './profesi-safety-officer-gudang-logistik';
import rec_27 from './profesi-safety-officer-rumah-sakit-faskes';
import rec_28 from './profesi-safety-officer-pekerjaan-ketinggian-rope-access';
import rec_29 from './profesi-safety-officer-pekerjaan-confined-space';
import rec_30 from './profesi-safety-officer-scaffolding-perancah';
import rec_31 from './profesi-safety-officer-pengelasan-pekerjaan-panas';
import rec_32 from './profesi-safety-officer-instalasi-kelistrikan';
import rec_33 from './profesi-safety-officer-operasional-alat-berat';
import rec_34 from './profesi-safety-officer-galangan-kapal-maritim';
import rec_35 from './profesi-safety-officer-industri-semen-batu-bara';
import rec_36 from './profesi-safety-officer-perkebunan-kelapa-sawit';
import rec_37 from './profesi-safety-officer-pengolahan-limbah-b3';
import rec_38 from './profesi-safety-officer-bandara-penerbangan';
import rec_39 from './profesi-safety-officer-lab-riset-biohazard';
import rec_40 from './profesi-hse-manager-corporate-korporasi';
import rec_41 from './profesi-hse-manager-proyek-konstruksi-epc';
import rec_42 from './profesi-hse-manager-fasilitas-kilang-migas';
import rec_43 from './profesi-hse-manager-operasional-tambang-mining';
import rec_44 from './profesi-hse-manager-pabrik-manufaktur-multi-site';
import rec_45 from './profesi-hse-regional-director-asia-pacific';
import rec_46 from './profesi-head-of-qhsse-quality-safety-health-environment';
import rec_47 from './profesi-csms-manager-management-contractor';
import rec_48 from './profesi-hse-assurance-compliance-manager';
import rec_49 from './profesi-process-safety-management-psm-manager';
import rec_50 from './profesi-hse-training-competency-manager';
import rec_51 from './profesi-hse-audit-risk-management-head';
import rec_52 from './profesi-hse-emergency-response-incident-manager';
import rec_53 from './profesi-hse-sustainability-esg-lead';
import rec_54 from './profesi-hse-manager-industri-otomotif';
import rec_55 from './profesi-hse-manager-industri-farmasi-medis';
import rec_56 from './profesi-hse-manager-logistik-shipping-port';
import rec_57 from './profesi-hse-manager-pembangkit-listrik-energi';
import rec_58 from './profesi-hse-manager-industri-makanan-minuman';
import rec_59 from './profesi-senior-advisor-leadership-safety-culture';
import rec_60 from './profesi-auditor-eksternal-smk3-kemnaker';
import rec_61 from './profesi-auditor-internal-smk3-pp-50-2012';
import rec_62 from './profesi-lead-auditor-iso-45001-sistem-manajemen';
import rec_63 from './profesi-auditor-sertifikasi-iso-14001-lingkungan';
import rec_64 from './profesi-safety-inspector-riksa-uji-pjk3';
import rec_65 from './profesi-inspector-pesawat-angkat-angkut-crane';
import rec_66 from './profesi-inspector-bejana-tekan-boiler-uap';
import rec_67 from './profesi-inspector-instalasi-listrik-petir';
import rec_68 from './profesi-inspector-scaffolding-struktur-perancah';
import rec_69 from './profesi-auditor-sistem-manajemen-k3-migas';
import rec_70 from './profesi-auditor-keselamatan-pertambangan-smkp';
import rec_71 from './profesi-auditor-csms-kualifikasi-vendor-kontraktor';
import rec_72 from './profesi-auditor-keselamatan-proses-kimia';
import rec_73 from './profesi-auditor-k3-rantai-pasok-supply-chain';
import rec_74 from './profesi-auditor-k3-fasilitas-maritim-pelabuhan';
import rec_75 from './profesi-auditor-k3-pergudangan-distribusi';
import rec_76 from './profesi-auditor-k3-industri-sanitasi-pangan';
import rec_77 from './profesi-auditor-ergonomi-stasiun-kerja';
import rec_78 from './profesi-auditor-kesiapsiagaan-tanggap-darurat';
import rec_79 from './profesi-lead-assessor-tempat-uji-kompetensi-k3';
import rec_80 from './profesi-dokter-perusahaan-bersertifikat-hiperkes';
import rec_81 from './profesi-dokter-spesialis-okupasi-spok-korporasi';
import rec_82 from './profesi-paramedis-perusahaan-hiperkes';
import rec_83 from './profesi-koordinator-program-fit-to-work-mcu';
import rec_84 from './profesi-fasilitator-kesehatan-kerja-ergonomi';
import rec_85 from './profesi-petugas-p3k-terlatih-tempat-kerja';
import rec_86 from './profesi-paramedis-lapangan-remote-site-tambang';
import rec_87 from './profesi-spesialis-pengendalian-penyakit-akibat-kerja-pak';
import rec_88 from './profesi-konselor-kesehatan-mental-kerja-hygiene';
import rec_89 from './profesi-koordinator-pencegahan-tbc-di-pabrik';
import rec_90 from './profesi-auditor-higiene-sanitasi-kantin-pekerja';
import rec_91 from './profesi-spesialis-audiometri-konservasi-pendengaran';
import rec_92 from './profesi-spesialis-spirometri-fungsi-paru-okupasi';
import rec_93 from './profesi-spesialis-toksikologi-industri-biological';
import rec_94 from './profesi-koordinator-evakuasi-medis-medevac';
import rec_95 from './profesi-dokter-penguji-kesehatan-tenaga-kerja';
import rec_96 from './profesi-petugas-manajemen-fatigue-kelelahan-shift';
import rec_97 from './profesi-konsultan-ergonomi-stasiun-kerja-medis';
import rec_98 from './profesi-spesialis-rehabilitasi-pasca-kecelakaan-kerja';
import rec_99 from './profesi-koordinator-program-wellness-kebugaran';
import rec_100 from './profesi-teknisi-k3-listrik-industri';
import rec_101 from './profesi-teknisi-k3-ketinggian-rope-access';
import rec_102 from './profesi-teknisi-k3-scaffolding-perancah';
import rec_103 from './profesi-teknisi-k3-ruang-terbatas-gas-tester';
import rec_104 from './profesi-teknisi-k3-lift-dan-eskalator';
import rec_105 from './profesi-teknisi-k3-boiler-ketel-uap';
import rec_106 from './profesi-teknisi-k3-bejana-tekan-tangki-timbun';
import rec_107 from './profesi-teknisi-k3-sistem-apar-kebakaran';
import rec_108 from './profesi-teknisi-k3-sistem-sprinkler-alarm';
import rec_109 from './profesi-teknisi-k3-pengujian-ndt-ultrasonik';
import rec_110 from './profesi-teknisi-k3-deteksi-gas-kalibrasi';
import rec_111 from './profesi-teknisi-k3-mesin-interlock-guarding';
import rec_112 from './profesi-teknisi-k3-penyalur-petir-grounding';
import rec_113 from './profesi-teknisi-k3-pompa-pemadam-diesel';
import rec_114 from './profesi-teknisi-k3-scba-breathing-air';
import rec_115 from './profesi-teknisi-k3-uji-emisi-cerobong-pabrik';
import rec_116 from './profesi-teknisi-k3-pengukuran-kebisingan-getaran';
import rec_117 from './profesi-teknisi-k3-ventilasi-tambang-bawah-tanah';
import rec_118 from './profesi-teknisi-k3-rigging-wire-rope-sling';
import rec_119 from './profesi-teknisi-k3-pendingin-amonia-refrigerasi';
import rec_120 from './profesi-industrial-hygienist-muda-himu';
import rec_121 from './profesi-industrial-hygienist-madya-hima';
import rec_122 from './profesi-industrial-hygienist-utama-hiu';
import rec_123 from './profesi-spesialis-pengukuran-debu-aerosol';
import rec_124 from './profesi-spesialis-paparan-bahan-kimia-toksik';
import rec_125 from './profesi-spesialis-heat-stress-iklim-panas';
import rec_126 from './profesi-spesialis-pengukuran-kebisingan-getaran';
import rec_127 from './profesi-spesialis-kualitas-udara-ruangan-iaq';
import rec_128 from './profesi-spesialis-pencahayaan-radiasi-non-pengion';
import rec_129 from './profesi-spesialis-faktor-biologis-biohazard';
import rec_130 from './profesi-spesialis-desain-ventilasi-industri-lev';
import rec_131 from './profesi-spesialis-pengendalian-bahaya-asbes';
import rec_132 from './profesi-spesialis-pengelolaan-limbah-b3-pabrik';
import rec_133 from './profesi-spesialis-pengendalian-emisi-udara-gas';
import rec_134 from './profesi-spesialis-pengendalian-pencemaran-air-ipal';
import rec_135 from './profesi-spesialis-pemodelan-dispersi-gas-toksik';
import rec_136 from './profesi-spesialis-penilaian-risiko-kesehatan-hra';
import rec_137 from './profesi-spesialis-toksikologi-penetapan-nab';
import rec_138 from './profesi-spesialis-penanganan-tumpahan-b3-spill-kit';
import rec_139 from './profesi-konsultan-independen-higiene-lingkungan';
import rec_140 from './profesi-safety-engineer-proyek-konstruksi-sipil';
import rec_141 from './profesi-process-safety-engineer-pabrik-petrokimia';
import rec_142 from './profesi-safety-engineer-kilang-minyak-gas';
import rec_143 from './profesi-safety-engineer-anjungan-lepas-pantai';
import rec_144 from './profesi-safety-engineer-pembangkit-listrik-termal';
import rec_145 from './profesi-safety-engineer-energi-terbarukan-plts';
import rec_146 from './profesi-safety-engineer-manufaktur-otomotif';
import rec_147 from './profesi-safety-engineer-smelter-metalurgi';
import rec_148 from './profesi-safety-engineer-sistem-perpipaan-gas-tekanan';
import rec_149 from './profesi-safety-engineer-industri-dirgantara';
import rec_150 from './profesi-safety-engineer-galangan-kapal-maritim';
import rec_151 from './profesi-safety-engineer-industri-semen-pabrik';
import rec_152 from './profesi-safety-engineer-sistem-proteksi-api-terpadu';
import rec_153 from './profesi-safety-engineer-pemanfaatan-radiasi-nuklir';
import rec_154 from './profesi-safety-engineer-otomasi-robotika-industri';
import rec_155 from './profesi-safety-engineer-laboratorium-bio-safety-l3';
import rec_156 from './profesi-safety-engineer-transportasi-rel-kereta';
import rec_157 from './profesi-safety-engineer-struktur-tahan-gempa';
import rec_158 from './profesi-safety-engineer-proyek-terowongan-tambang';
import rec_159 from './profesi-senior-safety-risk-consulting-engineer';
import rec_160 from './profesi-pengawas-operasional-pertama-pop-tambang';
import rec_161 from './profesi-pengawas-operasional-madya-pom-tambang';
import rec_162 from './profesi-pengawas-operasional-utama-pou-tambang';
import rec_163 from './profesi-kepala-teknik-tambang-ktt-pertambangan';
import rec_164 from './profesi-pengawas-keselamatan-pertambangan-smkp';
import rec_165 from './profesi-pengawas-operasional-pit-batubara';
import rec_166 from './profesi-pengawas-operasional-tambang-bawah-tanah';
import rec_167 from './profesi-pengawas-peledakan-blasting-pertambangan';
import rec_168 from './profesi-pengawas-geoteknik-kestabilan-lereng';
import rec_169 from './profesi-pengawas-k3-alat-berat-haul-truck';
import rec_170 from './profesi-pengawas-k3-pabrik-pengolahan-smelter';
import rec_171 from './profesi-pengawas-k3-pelabuhan-khusus-tambang';
import rec_172 from './profesi-pengawas-lingkungan-hidup-pertambangan';
import rec_173 from './profesi-auditor-smkp-minerba-kementerian-esdm';
import rec_174 from './profesi-inspektur-tambang-kementerian-esdm';
import rec_175 from './profesi-pengawas-k3-maintenance-workshop-tambang';
import rec_176 from './profesi-pengawas-k3-eksplorasi-pengeboran-mineral';
import rec_177 from './profesi-pengawas-k3-pengangkutan-conveyor-tambang';
import rec_178 from './profesi-pengawas-k3-kesiapsiagaan-emergency-rescue';
import rec_179 from './profesi-senior-mining-safety-consultant-manager';
import rec_180 from './profesi-konsultan-pendampingan-sertifikasi-smk3-pp-50';
import rec_181 from './profesi-konsultan-sistem-manajemen-iso-45001-terpadu';
import rec_182 from './profesi-konsultan-csms-kontraktor-prakualifikasi';
import rec_183 from './profesi-konsultan-kajian-hazop-process-safety';
import rec_184 from './profesi-konsultan-desain-proteksi-kebakaran-gedung';
import rec_185 from './profesi-konsultan-penyusunan-hiradc-risk-register';
import rec_186 from './profesi-konsultan-studi-ergonomi-industri-kerja';
import rec_187 from './profesi-konsultan-pengukuran-higiene-lingkungan-kerja';
import rec_188 from './profesi-konsultan-safety-leadership-budaya-k3';
import rec_189 from './profesi-konsultan-safety-case-fasilitas-migas';
import rec_190 from './profesi-asesor-kompetensi-profesi-k3-bnsp';
import rec_191 from './profesi-master-trainer-instruktur-pembinaan-k3';
import rec_192 from './profesi-fasilitator-workshop-investigasi-insiden';
import rec_193 from './profesi-konsultan-pengelolaan-b3-limbah-medis';
import rec_194 from './profesi-konsultan-rencana-tanggap-darurat-bencana';
import rec_195 from './profesi-konsultan-mitigasi-bahaya-ledakan-debu-atex';
import rec_196 from './profesi-konsultan-audit-kepatuhan-regulasi-ketenagakerjaan';
import rec_197 from './profesi-konsultan-penataan-sistem-loto-kelistrikan';
import rec_198 from './profesi-konsultan-audit-k3-sektor-rumah-sakit-k3rs';
import rec_199 from './profesi-senior-advisory-hse-strategic-consultant';

export const profesiRecords: ContentRecord[] = [
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
  rec_119,
  rec_120,
  rec_121,
  rec_122,
  rec_123,
  rec_124,
  rec_125,
  rec_126,
  rec_127,
  rec_128,
  rec_129,
  rec_130,
  rec_131,
  rec_132,
  rec_133,
  rec_134,
  rec_135,
  rec_136,
  rec_137,
  rec_138,
  rec_139,
  rec_140,
  rec_141,
  rec_142,
  rec_143,
  rec_144,
  rec_145,
  rec_146,
  rec_147,
  rec_148,
  rec_149,
  rec_150,
  rec_151,
  rec_152,
  rec_153,
  rec_154,
  rec_155,
  rec_156,
  rec_157,
  rec_158,
  rec_159,
  rec_160,
  rec_161,
  rec_162,
  rec_163,
  rec_164,
  rec_165,
  rec_166,
  rec_167,
  rec_168,
  rec_169,
  rec_170,
  rec_171,
  rec_172,
  rec_173,
  rec_174,
  rec_175,
  rec_176,
  rec_177,
  rec_178,
  rec_179,
  rec_180,
  rec_181,
  rec_182,
  rec_183,
  rec_184,
  rec_185,
  rec_186,
  rec_187,
  rec_188,
  rec_189,
  rec_190,
  rec_191,
  rec_192,
  rec_193,
  rec_194,
  rec_195,
  rec_196,
  rec_197,
  rec_198,
  rec_199
];

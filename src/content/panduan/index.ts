import { type ContentRecord } from '../../lib/content-types';
import rec_0 from './syarat-ahli-k3-umum';
import rec_1 from './biaya-pelatihan-k3';
import rec_2 from './materi-ahli-k3-umum';
import rec_3 from './tugas-ahli-k3-umum';
import rec_4 from './cara-daftar-pelatihan-k3-online';
import rec_5 from './biaya-pelatihan-auditor-smk3';
import rec_6 from './syarat-perpanjangan-skp-ahli-k3';
import rec_7 from './cara-pengajuan-proposal-inhouse-training-k3';
import rec_8 from './biaya-pelatihan-k3-kebakaran';
import rec_9 from './syarat-pendaftaran-petugas-p3k-kemnaker';
import rec_10 from './biaya-pelatihan-k3-listrik';
import rec_11 from './syarat-sertifikasi-bnsp-k3';
import rec_12 from './biaya-sertifikasi-bnsp-safety-officer';
import rec_13 from './perbedaan-ahli-k3-kemnaker-vs-bnsp';
import rec_14 from './cara-membuat-laporan-triwulan-p2k3';
import rec_15 from './dokumen-wajib-audit-smk3-pp-50';
import rec_16 from './biaya-pelatihan-bekerja-di-ketinggian';
import rec_17 from './syarat-mengikuti-pelatihan-ruang-terbatas';
import rec_18 from './biaya-pelatihan-operator-forklift';
import rec_19 from './syarat-sertifikasi-operator-crane-kemnaker';
import rec_20 from './tata-cara-klaim-jkk-bpjs-ketenagakerjaan';
import rec_21 from './cara-menyusun-rencana-keselamatan-konstruksi-rkk';
import rec_22 from './biaya-pelatihan-hiperkes-dokter-paramedis';
import rec_23 from './syarat-pembentukan-p2k3-perusahaan';
import rec_24 from './cara-menghitung-trir-dan-ltifr-k3';
import rec_25 from './biaya-pelatihan-ahli-k3-kimia';
import rec_26 from './syarat-menjadi-auditor-smk3-resmi';
import rec_27 from './tata-cara-audit-internal-smk3-tahunan';
import rec_28 from './biaya-pelatihan-k3-rumah-sakit-k3rs';
import rec_29 from './syarat-penerbitan-surat-keterangan-laik-k3-riksa-uji';
import rec_30 from './cara-menyusun-hiradc-lengkap';
import rec_31 from './biaya-pelatihan-ahli-k3-konstruksi';
import rec_32 from './syarat-menjadi-trainer-instruktur-k3';
import rec_33 from './cara-mendapatkan-penghargaan-zero-accident';
import rec_34 from './biaya-pelatihan-pop-minerba-tambang';
import rec_35 from './syarat-mengikuti-uji-kompetensi-pop-tambang';
import rec_36 from './cara-menyusun-emergency-response-plan-erp';
import rec_37 from './biaya-pelatihan-ahli-k3-lingkungan-kerja';
import rec_38 from './syarat-pendaftaran-sertifikasi-rigger-juru-ikat';
import rec_39 from './cara-menyusun-csms-kontraktor';
import rec_40 from './biaya-pelatihan-k3-migas-pengawas';
import rec_41 from './syarat-uji-kompetensi-pengawas-k3-migas';
import rec_42 from './tata-cara-penerbitan-lisensi-k3-kemnaker';
import rec_43 from './cara-menyusun-job-safety-analysis-jsa';
import rec_44 from './biaya-pelatihan-investigasi-kecelakaan-k3';
import rec_45 from './syarat-pembentukan-komite-k3-rumah-sakit';
import rec_46 from './cara-menghitung-kebutuhan-apar-gedung';
import rec_47 from './biaya-pelatihan-scaffolding-kemnaker';
import rec_48 from './syarat-menjadi-petugas-k3-kimia';
import rec_49 from './cara-membuat-safety-induction-video-materi';
import rec_50 from './biaya-pelatihan-operator-boiler-kemnaker';
import rec_51 from './syarat-uji-kelaikan-lift-penumpang-gedung';
import rec_52 from './cara-melakukan-fit-testing-respirator-masker';
import rec_53 from './biaya-pelatihan-petugas-k3-ruang-terbatas';
import rec_54 from './syarat-menjadi-ahli-k3-spesialis-listrik';
import rec_55 from './cara-mengisi-buku-catatan-inspeksi-k3';
import rec_56 from './biaya-pelatihan-lead-auditor-iso-45001';
import rec_57 from './syarat-fasilitas-ruang-p3k-pabrik';
import rec_58 from './cara-mengelola-limbah-b3-sesuai-aturan';
import rec_59 from './biaya-pelatihan-first-aid-cpr-aed';
import rec_60 from './syarat-uji-emisi-cerobong-pabrik-k3';
import rec_61 from './cara-membuat-safety-passport-pekerja';
import rec_62 from './biaya-pelatihan-k3-pengelasan-welding';
import rec_63 from './syarat-penyediaan-kotak-p3k-bentuk-a-b-c';
import rec_64 from './cara-menyelenggarakan-fire-drill-gedung';
import rec_65 from './biaya-pelatihan-petugas-proteksi-radiasi-ppr';
import rec_66 from './syarat-uji-hidrostatis-bejana-tekanan';
import rec_67 from './cara-membuat-peta-evakuasi-gedung-k3';
import rec_68 from './biaya-pelatihan-petugas-gas-tester-agt';
import rec_69 from './syarat-pembuatan-surat-izin-operator-sio-kemnaker';
import rec_70 from './cara-melakukan-inspeksi-visual-scaffolding';
import rec_71 from './biaya-pelatihan-audiometri-spirometri-k3';
import rec_72 from './syarat-penggantian-apd-rusak-di-tempat-kerja';
import rec_73 from './cara-menyusun-prosedur-tanggap-darurat-tumpahan-kimia';
import rec_74 from './biaya-pelatihan-ergonomi-stasiun-kerja-perkantoran';
import rec_75 from './syarat-perizinan-pjk3-jasa-pembinaan-k3';
import rec_76 from './cara-membuat-matriks-kompetensi-k3-karyawan';
import rec_77 from './sop-lockout-tagout-loto-penguncian-penandaan-sakelar-utama-panel-distribusi-listrik';
import rec_78 from './sop-pengujian-tahanan-pembumian-grounding-testing-menggunakan-earth-tester';
import rec_79 from './sop-pengujian-tahanan-isolasi-kabel-tegangan-menengah-menggunakan-megohmmeter-megger';
import rec_80 from './sop-pemeliharaan-preventif-substation-gardu-induk-transformator-daya-pabrik';
import rec_81 from './sop-inspeksi-termografi-inframerah-kenaikan-suhu-busbar-panel-listrik-industri';
import rec_82 from './sop-penanganan-darurat-sengatan-listrik-evakuasi-personel-maintenance-bertegangan';
import rec_83 from './sop-pekerjaan-dalam-keadaan-bertegangan-pdkb-menggunakan-sarung-tangan-isolasi-karet';
import rec_84 from './sop-pembersihan-debu-korosi-panel-listrik-menggunakan-contact-cleaner-non-konduktif';
import rec_85 from './sop-pengantian-sekering-fused-cut-out-fco-jaringan-udara-tegangan-menengah-20kv';
import rec_86 from './sop-penguji-fungsi-sistem-proteksi-arus-bocor-elcb-rccb-panel-distribusi-sub-feeder';
import rec_87 from './sop-pemasangan-sistem-penyalur-petir-sangkar-faraday-inspeksi-head-sangkar';
import rec_88 from './sop-pengoperasian-genset-cadangan-diesel-engine-saat-terjadi-pemadaman-listrik-pln';
import rec_89 from './sop-pemeriksaan-ruang-baterai-ups-akumulator-asam-timbal-sistem-ventilasi-gas-hidrogen';
import rec_90 from './sop-penanganan-kebakaran-korsleting-panel-listrik-menggunakan-apar-gas-co2';
import rec_91 from './sop-pengisolasian-tegangan-sisa-kapasitor-bank-industri-sebelum-perawatan';
import rec_92 from './sop-inspeksi-kelayakan-kabel-fleksibel-mesin-las-listrik-clamp-pembumian-workpiece';
import rec_93 from './sop-penggunaan-alat-ukur-clamp-meter-tang-ampere-pada-saluran-tiga-fasa-r-s-t';
import rec_94 from './sop-pemasangan-rambu-peringatan-bahaya-listrik-tegangan-tinggi-barikade-isolasi';
import rec_95 from './sop-verifikasi-zero-energy-state-pasca-loto-sebelum-membuka-pintu-panel-listrik';
import rec_96 from './sop-pemeliharaan-motor-listrik-industri-tiga-fasa-pengujian-winding-insulation';
import rec_97 from './sop-pengoperasian-inverter-variable-frequency-drive-vfd-pada-sistem-pompa-industri';
import rec_98 from './sop-penghentian-darurat-power-supply-pabrik-menggunakan-emergency-stop-push-button';
import rec_99 from './sop-inspeksi-kekencangan-baut-terminal-kabel-busbar-panel-menggunakan-kunci-momen';
import rec_100 from './sop-penanganan-kebocoran-minyak-insulasi-transformator-daya-pengambilan-sampel-uji';
import rec_101 from './sop-pengolesan-pasta-konduktif-pada-sambungan-tembaga-busbar-panel-listrik';
import rec_102 from './sop-pemeriksaan-harian-pre-operational-checklist-forklift-diesel-electric-battery';
import rec_103 from './sop-perhitungan-beban-aman-swl-sudut-pengikatan-rigging-calculation-beban-berat';
import rec_104 from './sop-inspeksi-kriteria-afkir-tali-kawat-baja-wire-rope-crane-berdasarkan-iso-4309';
import rec_105 from './sop-pengoperasian-overhead-crane-menggunakan-pendant-control-remote-radio-frequency';
import rec_106 from './sop-komunikasi-sinyal-tangan-standar-juru-ikat-beban-rigger-kepada-operator-crane';
import rec_107 from './sop-penyetelan-pengujian-fungsi-limit-switch-pembatas-ketinggian-hook-crane';
import rec_108 from './sop-pemasangan-outrigger-jack-base-mobile-crane-pada-tanah-permukaan-miring';
import rec_109 from './sop-inspeksi-kelayakan-sabuk-pengikat-webbing-sling-shackle-d-ring-swivel-hook';
import rec_110 from './sop-pengoperasian-tower-crane-konstruksi-saat-kondisi-angin-kencang-high-wind-limit';
import rec_111 from './sop-pengikatan-pipa-baja-panjang-menggunakan-metode-double-wrap-choker-hitch';
import rec_112 from './sop-pengoperasian-reach-stacker-bongkar-muat-kontainer-pelabuhan-logistik';
import rec_113 from './sop-inspeksi-kelayakan-lifter-passenger-hoist-elevator-konstruksi-bangunan';
import rec_114 from './sop-pengoperasian-gondola-pembersih-dinding-kaca-gedung-bertingkat';
import rec_115 from './sop-pengoperasian-heavy-duty-excavator-pada-pekerjaan-penggalian-tanah-proyek';
import rec_116 from './sop-pengoperasian-wheel-loader-pemindahan-material-curah-pasir-batu-tambang';
import rec_117 from './sop-inspeksi-sistem-pengereman-piringan-hidrolik-kemudi-dump-truck-mining';
import rec_118 from './sop-penanganan-kejadian-crane-guling-evakuasi-operator-dari-kabin-kemudi';
import rec_119 from './sop-pengoperasian-winch-derek-tarik-tambang-pemeliharaan-drum-gulungan-tali';
import rec_120 from './sop-inspeksi-roda-chain-block-manual-hand-lever-hoist-sebelum-pengangkatan';
import rec_121 from './sop-pengoperasian-conveyor-belt-pabrik-pengujian-emergency-pull-cord-switch';
import rec_122 from './sop-pengoperasian-manlift-boom-lift-aerial-work-platform-awp-ketinggian';
import rec_123 from './sop-inspeksi-kelayakan-garpu-fork-arm-rantai-pengangkat-forklift-industri';
import rec_124 from './sop-pembongkaran-penurunan-komponen-tower-crane-pasca-proyek-konstruksi-selesai';
import rec_125 from './sop-pengoperasian-automated-guided-vehicle-agv-di-area-gudang-logistik-otomatis';
import rec_126 from './sop-penataan-stacking-palet-kayu-di-area-loading-dock-gudang-distribusi';
import rec_127 from './sop-penyulutan-awal-firing-up-burner-ketel-uap-boiler-bahan-bakar-minyak-gas';
import rec_128 from './sop-pengujian-popping-pressure-katup-pengaman-tekanan-safety-valve-test-boiler';
import rec_129 from './sop-pelaksanaan-blowdown-berkala-pembersihan-kerak-endapan-air-ketel-uap';
import rec_130 from './sop-inspeksi-ketebalan-dinding-bejana-tekan-menggunakan-ultrasonic-thickness-gauge';
import rec_131 from './sop-pengujian-hidrostatik-hydrotest-bejana-tekan-pada-tekanan-1-5-kali-mawp';
import rec_132 from './sop-pengolahan-air-umpan-boiler-water-treatment-softener-dosing-kimia';
import rec_133 from './sop-penanganan-kebocoran-pipa-uap-tegangan-tinggi-steam-leakage-emergency';
import rec_134 from './sop-inspeksi-keretakan-sambungan-las-bejana-tekan-menggunakan-ndt-magnetic-particle';
import rec_135 from './sop-pengoperasian-kompresor-udara-bertekanan-tinggi-drainase-tangki-udara';
import rec_136 from './sop-pengisian-tabung-gas-bertekanan-silinder-lpg-argon-dan-oksigen-medis';
import rec_137 from './sop-pengoperasian-autoclave-sterilisator-tekanan-tinggi-rumah-sakit';
import rec_138 from './sop-pemeliharaan-heat-exchanger-shell-tube-pabrik-kimia-petrokimia';
import rec_139 from './sop-inspeksi-tangki-timbun-bahan-bakar-minyak-bbm-menggunakan-api-653-inspection';
import rec_140 from './sop-pengoperasian-deaerator-pembuangan-gas-terlarut-air-umpan-ketel-uap';
import rec_141 from './sop-pengoperasian-tangki-spherical-lpg-tekanan-tinggi-pengawasan-valve-emergency';
import rec_142 from './sop-pembersihan-kerak-jelaga-dinding-dalam-pipa-api-ketel-uap-soot-blowing';
import rec_143 from './sop-inspeksi-gelas-duga-glass-gauge-penunjuk-level-air-boiler-replacement';
import rec_144 from './sop-pengoperasian-chiller-refrigerant-vessel-sistem-pendingin-hvac-industri';
import rec_145 from './sop-pemasangan-rupture-disc-sistem-pelepasan-tekanan-darurat-bejana-reaktor';
import rec_146 from './sop-pengoperasian-sterilizer-rebusan-kelapa-sawit-pabrik-pks';
import rec_147 from './sop-pengoperasian-tangki-kriogenik-lng-oksigen-cair-suhu-sangat-rendah';
import rec_148 from './sop-inspeksi-proteksi-katodik-cathodic-protection-tangki-timbun-bawah-tanah';
import rec_149 from './sop-purging-gas-iner-nitrogen-sebelum-perbaikan-pipa-gas-lpg-amonia';
import rec_150 from './sop-pengoperasian-boiler-biomassa-cangkang-sawit-batu-bara-pulverized';
import rec_151 from './sop-penanganan-bahaya-bleve-boiling-liquid-expanding-vapor-explosion-tangki-gas';
import rec_152 from './sop-penanganan-tumpahan-bahan-kimia-berbahaya-menggunakan-hazmat-spill-kit';
import rec_153 from './sop-pengambilan-pembacaan-lembar-data-keselamatan-bahan-sds-msds-16-bab';
import rec_154 from './sop-klasifikasi-pemasangan-piktogram-simbol-bahaya-ghs-pada-wadah-kimia';
import rec_155 from './sop-penyimpanan-bahan-kimia-berbahaya-berdasarkan-matriks-inkompatibilitas';
import rec_156 from './sop-pengoperasian-inspeksi-ruang-penyimpanan-tps-limbah-b3-industri';
import rec_157 from './sop-penggunaan-alat-pelindung-diri-respirator-kartrid-kimia-hazmat-suit-level-a';
import rec_158 from './sop-penanganan-kebocoran-gas-klorin-gas-amonia-pabrik-pengaktifan-water-curtain';
import rec_159 from './sop-inspeksi-pengujian-fungsi-eyewash-emergency-shower-area-laboratorium';
import rec_160 from './sop-pengangkutan-loading-unloading-bahan-b3-cair-menggunakan-truk-tangki';
import rec_161 from './sop-pengukuran-kadar-gas-toksik-menggunakan-portable-gas-detector-multi-gas';
import rec_162 from './sop-dekontaminasi-apd-personel-pasca-penanganan-tumpahan-kimia-b3';
import rec_163 from './sop-pengolahan-dosing-bahan-kimia-koagulan-flokulan-instalasi-ipal-pabrik';
import rec_164 from './sop-penanganan-pelarut-organik-solvent-bahan-menguap-voc-di-area-produksi';
import rec_165 from './sop-penggunaan-gas-asetilena-oksigen-pada-pekerjaan-las-karbit-panas';
import rec_166 from './sop-penyimpanan-penanganan-asam-sulfat-pekat-h2so4-asam-klorida-hcl';
import rec_167 from './sop-pengoperasian-incinerator-pembakaran-limbah-b3-kimia-medis';
import rec_168 from './sop-inspeksi-tabung-pemadam-kebakaran-khusus-kimia-powder-clean-agent';
import rec_169 from './sop-penanganan-peroksida-organik-bahan-kimia-reaktif-air-udara';
import rec_170 from './sop-pemantauan-kadar-kimia-di-udara-tempat-kerja-sampling-nab-kimia';
import rec_171 from './sop-penanganan-pestisida-bahan-kimia-agrokimia-area-perkebunan';
import rec_172 from './sop-penanganan-bahan-peledak-komersial-blasting-area-pertambangan';
import rec_173 from './sop-pemutakhiran-daftar-inventaris-bahan-kimia-b3-perusahaan-terjadwal';
import rec_174 from './sop-penanganan-kebocoran-tabung-gas-oksigen-nitrogen-bertekanan';
import rec_175 from './sop-prosedur-masuk-area-reaktor-petrokimia-dengan-izin-kerja-kimia-khusus';
import rec_176 from './sop-pelabelan-wadah-limbah-b3-cair-penyegelan-drum-penampung';
import rec_177 from './sop-pengukuran-kebisingan-tempat-kerja-menggunakan-sound-level-meter-dosimeter';
import rec_178 from './sop-pengukuran-getaran-mekanis-tangan-lengan-hav-seluruh-tubuh-wbv';
import rec_179 from './sop-penilaian-iklim-kerja-panas-menggunakan-indeks-suhu-basah-dan-bola-isbb';
import rec_180 from './sop-pengukuran-intensitas-pencahayaan-tempat-kerja-menggunakan-lux-meter';
import rec_181 from './sop-sampling-pengukuran-debu-respirabel-menggunakan-high-volume-air-sampler';
import rec_182 from './sop-penilaian-risiko-ergonomi-postur-kerja-menggunakan-metode-reba-rula';
import rec_183 from './sop-evaluasi-kualitas-udara-dalam-ruangan-indoor-air-quality-iaq-perkantoran';
import rec_184 from './sop-pemilihan-fit-testing-alat-pelindung-pendengaran-earplug-earmuff';
import rec_185 from './sop-pelaksanaan-program-konservasi-pendengaran-hearing-conservation-program';
import rec_186 from './sop-evaluasi-ergonomi-manual-handling-menggunakan-niosh-lifting-equation';
import rec_187 from './sop-perancangan-pemeliharaan-sistem-ventilasi-industri-local-exhaust-lev';
import rec_188 from './sop-pengendalian-faktor-biologi-jamur-bakteri-vektor-di-area-pabrik';
import rec_189 from './sop-penilaian-faktor-psikologi-stres-kerja-kelelahan-pekerja-shift-malam';
import rec_190 from './sop-penerapan-housekeeping-5s-5r-di-area-workshop-gudang-produksi';
import rec_191 from './sop-pengukuran-radiasi-non-pengion-gelombang-elektromagnetik-panel-listrik';
import rec_192 from './sop-inspeksi-kualitas-sanitasi-air-bersih-hygiene-kantin-perusahaan';
import rec_193 from './sop-pengendalian-bakteri-legionella-pada-sistem-cooling-tower-ac-central';
import rec_194 from './sop-penilaian-beban-kerja-fisik-berdasarkan-konsumsi-oksigen-denyut-jantung';
import rec_195 from './sop-inspeksi-pengendalian-hama-pest-control-lingkungan-kerja-pabrik';
import rec_196 from './sop-pengukuran-pengendalian-bau-kebauan-industri-menggunakan-odour-meter';
import rec_197 from './sop-kalibrasi-alat-ukur-lingkungan-kerja-sebelum-pelaksanaan-sampling';
import rec_198 from './sop-evaluasi-stasiun-kerja-komputer-ergonomi-display-screen-equipment-vdt';
import rec_199 from './sop-pemantauan-kadar-debu-kayu-serabut-tekstil-di-area-ruang-proses';
import rec_200 from './sop-pengukuran-radiasi-pengion-menggunakan-surveymeter-radiasi-bapeten';
import rec_201 from './sop-penyusunan-laporan-pemantauan-profil-higiene-industri-perusahaan';
import rec_202 from './sop-pemeriksaan-kelayakan-full-body-harness-absorber-lanyard-sebelum-dipakai';
import rec_203 from './sop-pengukuran-gas-atmosfer-ruang-terbatas-menggunakan-portable-gas-detector';
import rec_204 from './sop-penyelamatan-korban-gantung-harness-suspension-trauma-rescue-sop';
import rec_205 from './sop-evakuasi-korban-ruang-terbatas-menggunakan-tripod-winch-rescue-stretcher';
import rec_206 from './sop-pengolesan-pengujian-kebocoran-gas-menggunakan-blower-ventilasi-udara';
import rec_207 from './sop-penggunaan-alat-bantu-pernapasan-scba-positif-pressure-di-ruang-terbatas';
import rec_208 from './sop-pemasangan-titik-angkur-anchor-point-lifeline-horizontal-vertikal';
import rec_209 from './sop-pekerjaan-akses-tali-rope-access-tkpk-pembersihan-dinding-kaca-gedung';
import rec_210 from './sop-pengawasan-petugas-standby-person-madya-di-luar-manhole-ruang-terbatas';
import rec_211 from './sop-pengisian-pengesahan-surat-izin-masuk-ruang-terbatas-entry-permit';
import rec_212 from './sop-pekerjaan-di-atas-scaffolding-perancah-pemasangan-barikade-jatuh';
import rec_213 from './sop-pekerjaan-maintenance-menara-telekomunikasi-tower-celluler-ketinggian';
import rec_214 from './sop-pekerjaan-di-atas-tangki-timbun-bbm-silo-material-semen-curah';
import rec_215 from './sop-pemasangan-jaring-pengaman-keselamatan-safety-net-proyek-konstruksi';
import rec_216 from './sop-penanganan-pekerjaan-lubang-bukaan-floor-opening-wall-opening';
import rec_217 from './sop-pekerjaan-inspeksi-di-dalam-tangki-reaktor-vessel-pabrik-kimia';
import rec_218 from './sop-pemasangan-tangga-kerja-ladder-platform-kerja-sementara-ketinggian';
import rec_219 from './sop-pembersihan-pengerukan-lumpur-gorong-gorong-saluran-bawah-tanah';
import rec_220 from './sop-pekerjaan-pengecatan-coating-di-dalam-area-ruang-terbatas-tangki';
import rec_221 from './sop-inspeksi-kelayakan-tangga-lipat-aluminium-tangga-monyet-permanen';
import rec_222 from './sop-pekerjaan-pemasangan-penangkal-petir-di-puncak-cerobong-gedung-tinggi';
import rec_223 from './sop-pengolesan-waterproofing-di-area-basement-gedung-ruang-sempit';
import rec_224 from './sop-pengaliran-udara-suplemental-oksigen-di-area-ruang-terbatas-kritis';
import rec_225 from './sop-penanganan-kondisi-darurat-kejebak-dalam-manhole-prosedur-call-rescue';
import rec_226 from './sop-penutupan-kembali-manhole-ruang-terbatas-pasca-pekerjaan-selesai';
import rec_227 from './sop-pemadaman-kebakaran-menggunakan-apar-metode-pass-pull-aim-squeeze-sweep';
import rec_228 from './sop-penggelaran-penyambungan-selang-hydrant-kanvas-kopling-machino';
import rec_229 from './sop-pengoperasian-pompa-pemadam-diesel-utama-saat-aliran-listrik-terputus';
import rec_230 from './sop-pengoperasian-main-control-fire-alarm-mcfa-penanganan-alarm-darurat';
import rec_231 from './sop-pengujian-bulanan-tekanan-tabung-apar-dry-chemical-powder-co2';
import rec_232 from './sop-pengujian-katup-aliran-air-sistem-sprinkler-inspector-test-valve';
import rec_233 from './sop-prosedur-evakuasi-total-gedung-bertingkat-menuju-assembly-point';
import rec_234 from './sop-tugas-floor-warden-penyisiran-ruangan-toilet-penutupan-pintu-tahan-api';
import rec_235 from './sop-evakuasi-khusus-penyandang-disabilitas-ibu-hamil-lansia-saat-darurat';
import rec_236 from './sop-pengoperasian-kipas-tekanan-positif-tangga-darurat-stairwell-pressurization';
import rec_237 from './sop-penggunaan-fire-blanket-pemadaman-api-di-tubuh-pekerja';
import rec_238 from './sop-pemadaman-kebakaran-minyak-dapur-komersial-sistem-wet-chemical-k-class';
import rec_239 from './sop-pemadaman-kebakaran-ruang-server-komputer-sistem-gas-fm-200-novec-1230';
import rec_240 from './sop-penanganan-kebakaran-tangki-bbm-menggunakan-sistem-busa-foam-afff';
import rec_241 from './sop-penggunaan-baju-tahan-panas-proximity-suit-tabung-pernapasan-scba';
import rec_242 from './sop-koordinasi-penyerahan-komando-pemadaman-ke-dinas-kebakaran-kota';
import rec_243 from './sop-penghitungan-absensi-tenaga-kerja-di-assembly-point-headcount-roll-call';
import rec_244 from './sop-penyelidikan-awal-titik-mula-api-fire-origin-pasca-pemadaman';
import rec_245 from './sop-pengisian-ulang-air-cadangan-bak-penampung-pemadam-fire-water-reservoir';
import rec_246 from './sop-pengujian-hidrostatis-berkala-5-tahun-selang-tabung-pemadam-api';
import rec_247 from './sop-penanganan-kebakaran-korsleting-panel-listrik-menggunakan-apar-co2';
import rec_248 from './sop-pembersihan-residu-kimia-serbuk-pemadam-pasca-kebakaran-padam';
import rec_249 from './sop-pelaksanaan-fire-drill-debriefing-evaluasi-waktu-evakuasi-gedung';
import rec_250 from './sop-pengaktifan-kembali-sistem-proteksi-api-reset-panel-alarm-kebakaran';
import rec_251 from './sop-inspeksi-pintu-tahan-api-fire-door-pemeliharaan-door-closer-gedung';
import rec_252 from './sop-penilaian-korban-gawat-darurat-menggunakan-prinsip-drabc-danger-response-airway-breathing-circulation';
import rec_253 from './sop-resusitasi-jantung-paru-rjp-cpr-satu-penolong-dua-penolong-dewasa';
import rec_254 from './sop-pengoperasian-automated-external-defibrillator-aed-pada-korban-henti-jantung';
import rec_255 from './sop-pembebasan-sumbatan-saluran-napas-korban-tersedak-heimlich-maneuver';
import rec_256 from './sop-penghentian-pendarahan-arteri-hebat-menggunakan-torniket-hemostatik';
import rec_257 from './sop-balut-tekan-steril-pada-luka-sayat-robek-di-tempat-kerja';
import rec_258 from './sop-pembidaian-fraktur-tulang-tertutup-fraktur-tulang-terbuka';
import rec_259 from './sop-pemasangan-penyangga-leher-cervical-collar-korban-dugaan-cedera-tulang-belakang';
import rec_260 from './sop-pemindahan-korban-trauma-menggunakan-long-spine-board-tandu-sekop';
import rec_261 from './sop-penanganan-luka-bakar-termal-ringan-sedang-menggunakan-air-mengalir-20-menit';
import rec_262 from './sop-penanganan-korban-tersengat-listrik-pencegahan-cardiac-arrest';
import rec_263 from './sop-penanganan-korban-pingsan-akibat-heat-stroke-di-lingkungan-kerja-panas';
import rec_264 from './sop-penanganan-korban-keracunan-gas-beracun-karbon-monoksida-asam-sulfida';
import rec_265 from './sop-penanganan-syok-hipovolemik-penyelimutan-suhu-tubuh-korban';
import rec_266 from './sop-penanganan-reaksi-alergi-berat-syok-anafilaktik-di-tempat-kerja';
import rec_267 from './sop-penanganan-korban-tertusuk-jarum-suntik-medis-bekas-needlestick-protocol';
import rec_268 from './sop-penanganan-korban-gigitan-ular-berbisa-di-area-perkebunan-proyek';
import rec_269 from './sop-pengelolaan-pemeriksaan-rutin-bulanan-isi-kotak-p3k-bentuk-a-b-c';
import rec_270 from './sop-pengelolaan-ruang-poliklinik-p3k-pabrik-buku-register-kunjungan-medis';
import rec_271 from './sop-koordinasi-evakuasi-medis-darurat-menggunakan-ambulans-medevac-protocol';
import rec_272 from './sop-rujukan-pasien-gawat-darurat-ke-rumah-sakit-trauma-center-bpjs';
import rec_273 from './sop-pemeriksaan-tanda-tanda-vital-korban-tekanan-darah-nadi-laju-napas-saturasi-spo2';
import rec_274 from './sop-penanganan-benda-asing-masuk-ke-dalam-mata-eye-irrigation-sop';
import rec_275 from './sop-penanganan-serangan-asma-akut-penggunaan-inhaler-pekerja';
import rec_276 from './sop-penulisan-formulir-laporan-medis-pertolongan-pertama-insiden-k3';
import rec_277 from './sop-verifikasi-dokumen-rencana-keselamatan-konstruksi-rkk-sebelum-pekerjaan-dimulai';
import rec_278 from './sop-pekerjaan-penggalian-tanah-dalam-trenching-pemasangan-shoring';
import rec_279 from './sop-pengawasan-pemasangan-bekisting-formwork-pembetonan-struktur-gedung';
import rec_280 from './sop-ereksi-rangka-baja-konstruksi-gedung-layang-jembatan';
import rec_281 from './sop-demolisi-pembongkaran-struktur-bangunan-tua-secara-bertahap';
import rec_282 from './sop-pekerjaan-terowongan-bawah-tanah-tunneling-excavation';
import rec_283 from './sop-peledakan-komersial-blasting-pembuatan-jalan-proyek-konstruksi';
import rec_284 from './sop-pemasangan-pembongkaran-tie-in-tower-crane-konstruksi-gedung';
import rec_285 from './sop-pengaturan-traffic-management-marka-lalu-lintas-proyek-konstruksi';
import rec_286 from './sop-pengelasan-konstruksi-baja-pemasangan-pipa-distribusi-proyek';
import rec_287 from './sop-pelaksanaan-safety-patrol-harian-inspeksi-temuan-hazard-proyek';
import rec_288 from './sop-perhitungan-ahsp-biaya-k3-konstruksi-menurut-permen-pupr-10-2021';
import rec_289 from './sop-k3-pekerjaan-pemancangan-tiang-pancang-pile-driving-foundation';
import rec_290 from './sop-penanganan-limbah-konstruksi-pengendalian-sedimentasi-air-proyek';
import rec_291 from './sop-pengawasan-pekerjaan-atap-roofing-cladding-bangunan-tinggi';
import rec_292 from './sop-pengawasan-pekerjaan-finishing-interior-mep-gedung-bertingkat';
import rec_293 from './sop-pemasangan-komponen-beton-pracatak-precast-concrete-installation';
import rec_294 from './sop-keselamatan-operasional-alat-berat-heavy-equipment-di-proyek';
import rec_295 from './sop-pekerjaan-pengeboran-batu-soil-nailing-stabilisasi-lereng-proyek';
import rec_296 from './sop-pengawasan-pekerjaan-subkontraktor-briefing-mandor-proyek';
import rec_297 from './sop-tanggap-darurat-bencana-cuaca-ekstrem-tanah-longsor-proyek';
import rec_298 from './sop-penanganan-insiden-struktur-roboh-evakuasi-pekerja-proyek';
import rec_299 from './sop-inspeksi-kelayakan-tangga-kerja-temporary-working-platform-proyek';
import rec_300 from './sop-pengikatan-matriks-besi-beton-pemotongan-steel-rebar-cutter';
import rec_301 from './sop-closing-izin-kerja-konstruksi-evaluasi-kinerja-k3-kontraktor';
import rec_302 from './sop-pengoperasian-mesin-press-stamping-verifikasi-sensor-safety-light-curtain';
import rec_303 from './sop-pemeliharaan-mesin-bubut-lathe-penggunaan-cover-pelindung-tatal-berputar';
import rec_304 from './sop-pengoperasian-mesin-frais-milling-pemasangan-shield-pelindung-gram';
import rec_305 from './sop-pengolesan-pelumas-rantai-roda-gigi-penggerak-mesin-pabrik';
import rec_306 from './sop-pengoperasian-mesin-potong-guillotine-kertas-logam-two-hand-control-button';
import rec_307 from './sop-pembersihan-clearing-jammed-material-pada-mesin-shredder-industri';
import rec_308 from './sop-inspeksi-kelayakan-pelindung-tutup-sabuk-v-belt-pulley-mesin-industri';
import rec_309 from './sop-pengoperasian-mesin-gerinda-duduk-penyetelan-jarak-work-rest-3mm';
import rec_310 from './sop-penghentian-darurat-mesin-cetak-injeksi-plastik-emergency-stop-protocol';
import rec_311 from './sop-inspeksi-interlock-door-safety-switch-mesin-pengemas-otomatis';
import rec_312 from './sop-pemeliharaan-mesin-kompresor-udara-pengujian-bejana-tekan-udara';
import rec_313 from './sop-pengoperasian-mesin-bending-tekuk-pelat-logam-hidrolik';
import rec_314 from './sop-inspeksi-kelayakan-pisau-mesin-roll-bending-roda-pemotong-metal';
import rec_315 from './sop-pengolesan-pendingin-coolant-mesin-perkakas-pemantauan-bak-penampung';
import rec_316 from './sop-pengoperasian-mesin-cnc-router-woodworking-pengisapan-debu-kayu-lev';
import rec_317 from './sop-pemeliharaan-mesin-cetak-rotary-printing-penguncian-loto-mekanis';
import rec_318 from './sop-pengoperasian-mesin-mixer-pencampur-makanan-kertas-interlock-cover';
import rec_319 from './sop-inspeksi-kelayakan-rem-elektromagnetik-mesin-penggerak-utama-mula';
import rec_320 from './sop-pengoperasian-mesin-extruder-plastik-pengawasan-suhu-pemanas-barrel';
import rec_321 from './sop-pembersihan-endapan-kerak-mesin-boiler-pembakar-sampah-industri';
import rec_322 from './sop-pengoperasian-mesin-laser-cutting-logam-proteksi-sinar-radiasi-laser';
import rec_323 from './sop-inspeksi-sakelar-kaki-foot-switch-mesin-press-dengan-pelindung-cover-shield';
import rec_324 from './sop-pemeliharaan-turbin-uap-pembangkit-listrik-pengujian-over-speed-trip';
import rec_325 from './sop-pengoperasian-mesin-centrifuge-pemisah-cairan-penguncian-penutup-putar';
import rec_326 from './sop-penghentian-mesin-produksi-saat-terjadi-suara-getaran-anomali-kritis';

export const panduanRecords: ContentRecord[] = [
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
  rec_199,
  rec_200,
  rec_201,
  rec_202,
  rec_203,
  rec_204,
  rec_205,
  rec_206,
  rec_207,
  rec_208,
  rec_209,
  rec_210,
  rec_211,
  rec_212,
  rec_213,
  rec_214,
  rec_215,
  rec_216,
  rec_217,
  rec_218,
  rec_219,
  rec_220,
  rec_221,
  rec_222,
  rec_223,
  rec_224,
  rec_225,
  rec_226,
  rec_227,
  rec_228,
  rec_229,
  rec_230,
  rec_231,
  rec_232,
  rec_233,
  rec_234,
  rec_235,
  rec_236,
  rec_237,
  rec_238,
  rec_239,
  rec_240,
  rec_241,
  rec_242,
  rec_243,
  rec_244,
  rec_245,
  rec_246,
  rec_247,
  rec_248,
  rec_249,
  rec_250,
  rec_251,
  rec_252,
  rec_253,
  rec_254,
  rec_255,
  rec_256,
  rec_257,
  rec_258,
  rec_259,
  rec_260,
  rec_261,
  rec_262,
  rec_263,
  rec_264,
  rec_265,
  rec_266,
  rec_267,
  rec_268,
  rec_269,
  rec_270,
  rec_271,
  rec_272,
  rec_273,
  rec_274,
  rec_275,
  rec_276,
  rec_277,
  rec_278,
  rec_279,
  rec_280,
  rec_281,
  rec_282,
  rec_283,
  rec_284,
  rec_285,
  rec_286,
  rec_287,
  rec_288,
  rec_289,
  rec_290,
  rec_291,
  rec_292,
  rec_293,
  rec_294,
  rec_295,
  rec_296,
  rec_297,
  rec_298,
  rec_299,
  rec_300,
  rec_301,
  rec_302,
  rec_303,
  rec_304,
  rec_305,
  rec_306,
  rec_307,
  rec_308,
  rec_309,
  rec_310,
  rec_311,
  rec_312,
  rec_313,
  rec_314,
  rec_315,
  rec_316,
  rec_317,
  rec_318,
  rec_319,
  rec_320,
  rec_321,
  rec_322,
  rec_323,
  rec_324,
  rec_325,
  rec_326
];

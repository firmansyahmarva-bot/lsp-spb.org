import { type ContentRecord } from '../../lib/content-types';
import rec_0 from './bnsp-vs-kemnaker';
import rec_1 from './ahli-k3-umum-vs-ahli-k3-konstruksi';
import rec_2 from './ahli-k3-umum-vs-ahli-k3-kimia';
import rec_3 from './ahli-k3-umum-vs-ahli-k3-listrik';
import rec_4 from './ahli-k3-umum-vs-auditor-smk3';
import rec_5 from './petugas-p3k-vs-paramedis-hiperkes';
import rec_6 from './petugas-k3-kebakaran-kelas-d-vs-kelas-a';
import rec_7 from './tkbt-vs-tkpk-bekerja-di-ketinggian';
import rec_8 from './operator-forklift-kelas-1-vs-kelas-2';
import rec_9 from './operator-crane-kelas-1-vs-kelas-2-vs-kelas-3';
import rec_10 from './pengawas-pop-vs-pom-minerba-tambang';
import rec_11 from './ahli-k3-migas-vs-ahli-k3-umum';
import rec_12 from './pelatihan-k3-blended-online-vs-tatap-muka';
import rec_13 from './inhouse-training-vs-public-class-k3';
import rec_14 from './smk3-pp-50-vs-iso-45001';
import rec_15 from './audit-smk3-64-vs-122-vs-166-kriteria';
import rec_16 from './audit-internal-vs-audit-eksternal-smk3';
import rec_17 from './smkk-pupr-vs-smk3-kemnaker';
import rec_18 from './smkp-minerba-vs-smk3-pp-50';
import rec_19 from './csms-tier-1-vs-tier-2-vs-tier-3';
import rec_20 from './leading-indicator-vs-lagging-indicator-k3';
import rec_21 from './audit-k3rs-vs-audit-smk3-pabrik';
import rec_22 from './iso-45001-vs-ohsas-18001';
import rec_23 from './safety-culture-ladder-generatif-vs-reaktif';
import rec_24 from './temuan-mayor-vs-temuan-minor-audit-smk3';
import rec_25 from './evaluasi-kepuasan-pekerja-vs-audit-kepatuhan-k3';
import rec_26 from './manajemen-perubahan-moc-fasilitas-vs-organisasi';
import rec_27 from './zero-accident-award-vs-sertifikat-smk3';
import rec_28 from './apar-powder-vs-apar-co2';
import rec_29 from './apar-foam-vs-apar-clean-agent';
import rec_30 from './full-body-harness-vs-waist-belt-ketinggian';
import rec_31 from './lanyard-shock-absorber-vs-self-retracting-lifeline-srl';
import rec_32 from './masker-n95-vs-respirator-setengah-wajah-elastomerik';
import rec_33 from './earplug-vs-earmuff-pelindung-pendengaran';
import rec_34 from './helm-safety-sni-vs-helm-panjat-climbing';
import rec_35 from './sepatu-safety-ujung-baja-vs-ujung-komposit';
import rec_36 from './scba-300-bar-vs-airline-breathing-system';
import rec_37 from './detektor-gas-katalitik-vs-detektor-gas-inframerah';
import rec_38 from './sarung-tangan-nitril-vs-sarung-tangan-neoprene';
import rec_39 from './selang-hydrant-kanvas-vs-selang-hydrant-karet-epdm';
import rec_40 from './baju-wearpack-katun-vs-baju-tahan-api-nomex';
import rec_41 from './tripod-rescue-winch-vs-davit-arm-system';
import rec_42 from './hazop-vs-fmea-analisis-risiko-k3';
import rec_43 from './hiradc-vs-jsa-analisis-keselamatan-kerja';
import rec_44 from './fault-tree-analysis-fta-vs-event-tree-analysis-eta';
import rec_45 from './investigasi-5-why-vs-fishbone-diagram';
import rec_46 from './metode-bowtie-vs-risk-matrix-5x5';
import rec_47 from './metode-tapproot-vs-scat-investigasi-insiden';
import rec_48 from './what-if-analysis-vs-checklist-inspeksi-k3';
import rec_49 from './penilaian-risiko-kualitatif-vs-kuantitatif-qra';
import rec_50 from './metode-rula-vs-reba-penilaian-ergonomi';
import rec_51 from './penilaian-risiko-kesehatan-hra-vs-hiradc-k3';
import rec_52 from './audit-kepatuhan-legalitas-vs-audit-perilaku-k3-sbo';
import rec_53 from './gap-analysis-smk3-vs-pre-audit-sertifikasi';
import rec_54 from './lopa-analysis-vs-sil-determination';
import rec_55 from './surveilans-kesehatan-kerja-vs-medical-checkup-rutin';
import rec_56 from './uu-1-1970-vs-uu-13-2003-pasal-k3';
import rec_57 from './nab-permenaker-05-2018-vs-sni-higiene-lama';
import rec_58 from './permenaker-08-2020-vs-permenaker-09-2008-pesawat-angkat';
import rec_59 from './permenaker-37-2016-vs-peraturan-uap-stbl-1930';
import rec_60 from './permenkes-66-2016-vs-permenkes-48-2016';
import rec_61 from './puil-2020-sni-0225-vs-puil-2000-instalasi-listrik';
import rec_62 from './permen-pupr-10-2021-vs-permen-pu-05-2014-smkk';
import rec_63 from './nfpa-standar-global-vs-sni-kebakaran-nasional';
import rec_64 from './pp-50-2012-vs-permenaker-05-1996-smk3';
import rec_65 from './permenaker-02-1992-vs-skkni-k3-bnsp';
import rec_66 from './perka-bapeten-radiasi-vs-permenaker-lingkungan-kerja';
import rec_67 from './kepmen-esdm-1827-2018-vs-permenaker-tambang';
import rec_68 from './se-ruang-terbatas-2012-vs-osha-1910-146';
import rec_69 from './permenaker-15-2008-vs-standar-p3k-osha-ansi';

export const perbandinganRecords: ContentRecord[] = [
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
  rec_69
];

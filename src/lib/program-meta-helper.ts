import type { ContentRecord } from './content-types';

export interface ProgramDisplayMeta {
  issuer: string;
  duration: string;
  price: string;
  image: {
    src: string;
    alt: string;
  };
}

export function getProgramDisplayMeta(r: ContentRecord): ProgramDisplayMeta {
  const text = `${r.title} ${r.slug} ${r.primaryKeyword || ''}`.toLowerCase();

  // 1. Determine Issuer
  let issuer = 'Regulasi K3';
  if (
    text.includes('bnsp') ||
    text.includes('skkni') ||
    text.includes('lsp') ||
    text.includes('higiene') ||
    text.includes('pop') ||
    text.includes('pom') ||
    text.includes('pou')
  ) {
    issuer = 'BNSP RI';
  } else if (
    text.includes('kemnaker') ||
    text.includes('ahli k3') ||
    text.includes('smk3') ||
    text.includes('p3k') ||
    text.includes('kebakaran') ||
    text.includes('listrik') ||
    text.includes('ketinggian') ||
    text.includes('ruang terbatas') ||
    text.includes('crane') ||
    text.includes('forklift') ||
    text.includes('boiler') ||
    text.includes('uap')
  ) {
    issuer = 'Kemnaker RI';
  }

  // 2. Determine Duration
  let duration = r.courseDetails?.duration || '3 Hari';
  if (text.includes('ahli k3 umum') || text.includes('120 jp') || text.includes('ahli k3 listrik') || text.includes('ahli k3 kimia')) {
    duration = '120 JP (12 Hari)';
  } else if (text.includes('auditor smk3') || text.includes('40 jp')) {
    duration = '40 JP (4 Hari)';
  } else if (text.includes('lead auditor')) {
    duration = '50 JP (5 Hari)';
  } else if (text.includes('p3k')) {
    duration = '30 JP (3 Hari)';
  } else if (text.includes('kebakaran kelas d')) {
    duration = '24 JP (3 Hari)';
  } else if (text.includes('kebakaran kelas c') || text.includes('kebakaran kelas b') || text.includes('kebakaran kelas a')) {
    duration = '40-60 JP (4-6 Hari)';
  } else if (text.includes('teknisi k3 listrik')) {
    duration = '45 JP (5 Hari)';
  } else if (text.includes('tkpk 1') || text.includes('rope access')) {
    duration = '5 Hari';
  } else if (text.includes('tkbt') || text.includes('ketinggian')) {
    duration = '3 Hari';
  } else if (text.includes('confined space') || text.includes('ruang terbatas')) {
    duration = '3-4 Hari';
  } else if (text.includes('crane') || text.includes('forklift') || text.includes('rigger')) {
    duration = '3 Hari';
  } else if (text.includes('higiene industri')) {
    duration = '3-4 Hari';
  }

  // 3. Determine Realistic Market Price (distinct per program)
  let price = 'Rp 4.500.000';
  if (text.includes('ahli k3 umum')) {
    price = 'Rp 4.500.000';
  } else if (text.includes('lead auditor')) {
    price = 'Rp 7.500.000';
  } else if (text.includes('auditor smk3')) {
    price = 'Rp 5.500.000';
  } else if (text.includes('p3k')) {
    price = 'Rp 3.200.000';
  } else if (text.includes('kebakaran kelas d')) {
    price = 'Rp 2.800.000';
  } else if (text.includes('kebakaran kelas c') || text.includes('kebakaran kelas b') || text.includes('kebakaran kelas a')) {
    price = 'Rp 4.800.000';
  } else if (text.includes('teknisi k3 listrik')) {
    price = 'Rp 5.800.000';
  } else if (text.includes('ahli k3 listrik')) {
    price = 'Rp 8.500.000';
  } else if (text.includes('tkpk 1') || text.includes('rope access')) {
    price = 'Rp 5.500.000';
  } else if (text.includes('tkbt')) {
    price = 'Rp 3.800.000';
  } else if (text.includes('confined space') || text.includes('ruang terbatas')) {
    price = 'Rp 4.200.000';
  } else if (text.includes('crane')) {
    price = 'Rp 4.500.000';
  } else if (text.includes('forklift')) {
    price = 'Rp 3.800.000';
  } else if (text.includes('rigger')) {
    price = 'Rp 3.500.000';
  } else if (text.includes('ahli k3 kimia')) {
    price = 'Rp 6.800.000';
  } else if (text.includes('petugas k3 kimia')) {
    price = 'Rp 4.500.000';
  } else if (text.includes('higiene industri') || text.includes('hima') || text.includes('himas') || text.includes('himu')) {
    price = 'Rp 7.000.000';
  } else if (text.includes('ahli k3 konstruksi')) {
    price = 'Rp 5.200.000';
  } else if (text.includes('investigasi insiden') || text.includes('rca')) {
    price = 'Rp 3.500.000';
  } else if (text.includes('hiradc') || text.includes('manajemen risiko')) {
    price = 'Rp 2.900.000';
  } else if (text.includes('smk3') || text.includes('iso 45001')) {
    price = 'Rp 4.200.000';
  } else {
    // Deterministic price based on slug character hash between Rp 3.200.000 and Rp 6.800.000
    const hash = r.slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const priceVariants = [
      'Rp 3.200.000',
      'Rp 3.500.000',
      'Rp 3.800.000',
      'Rp 4.200.000',
      'Rp 4.500.000',
      'Rp 4.800.000',
      'Rp 5.200.000',
      'Rp 5.500.000',
      'Rp 5.800.000',
      'Rp 6.200.000',
      'Rp 6.500.000',
      'Rp 6.800.000',
    ];
    price = priceVariants[hash % priceVariants.length];
  }

  // 4. Determine Relevant Authentic Photo
  let photo = '/images/content/instruktur-memandu-sesi-kelas-1.webp';
  if (text.includes('crane') || text.includes('angkat') || text.includes('rigger')) {
    photo = '/images/content/peserta-mengikuti-pelatihan-crane-1.webp';
  } else if (text.includes('forklift') || text.includes('angkut')) {
    photo = '/images/content/peserta-mengikuti-pelatihan-forklift-1.webp';
  } else if (text.includes('bnsp') || text.includes('asesmen') || text.includes('uji kompetensi')) {
    photo = '/images/content/asesmen-individu-dengan-pengisian-dokumen-1.webp';
  } else if (text.includes('ujian') || text.includes('evaluasi')) {
    photo = '/images/content/peserta-mengerjakan-ujian-tertulis-di-kelas-1.webp';
  } else if (text.includes('industri') || text.includes('pabrik') || text.includes('konstruksi')) {
    photo = '/images/content/foto-bersama-pekerja-di-fasilitas-industri-1.webp';
  } else if (text.includes('p3k') || text.includes('medis') || text.includes('kesehatan')) {
    photo = '/images/content/peserta-mengikuti-sesi-di-ruang-kelas-1.webp';
  } else if (text.includes('listrik') || text.includes('ketinggian') || text.includes('ruang terbatas')) {
    photo = '/images/content/praktik-pengangkatan-beban-dengan-crane-1.webp';
  }

  return {
    issuer,
    duration,
    price,
    image: {
      src: r.image?.src || photo,
      alt: r.image?.alt || `Dokumentasi Pelatihan ${r.title}`,
    },
  };
}

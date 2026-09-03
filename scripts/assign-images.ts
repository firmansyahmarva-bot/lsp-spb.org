import * as fs from 'fs';
import * as path from 'path';
import { type ContentRecordInput } from './build-inventory';

export interface ImageMeta {
  src: string;
  alt: string;
  filename: string;
  category: string;
  index: number;
}

// Map filename prefixes to natural, professional Indonesian alt texts
function generateAltText(filename: string): string {
  const nameWithoutExt = filename.replace(/\.webp$/, '');
  const baseName = nameWithoutExt.replace(/-\d+$/, '');
  const numMatch = nameWithoutExt.match(/-(\d+)$/);
  const numStr = numMatch ? ` (Dokumentasi ${numMatch[1]})` : '';

  switch (baseName) {
    case 'asesmen-individu-dengan-pengisian-dokumen':
      return `Sesi asesmen individu dan verifikasi dokumen portofolio K3${numStr}`;
    case 'asesmen-individu-peserta-di-ruang-kelas':
      return `Pelaksanaan asesmen kompetensi dan uji mandiri peserta di ruang kelas${numStr}`;
    case 'diskusi-instruktur-dan-peserta-di-ruang-seminar':
      return `Sesi diskusi interaktif antara instruktur dan peserta di ruang seminar${numStr}`;
    case 'diskusi-kelompok-dalam-sesi-kelas':
      return `Diskusi kelompok kerja dan analisis studi kasus K3 di ruang pelatihan${numStr}`;
    case 'foto-bersama-pekerja-di-fasilitas-industri':
      return `Dokumentasi kebersamaan peserta dan tim K3 di fasilitas industri${numStr}`;
    case 'foto-bersama-peserta-dan-instruktur-di-kelas':
      return `Foto bersama peserta pembinaan dan instruktur resmi di ruang kelas${numStr}`;
    case 'foto-bersama-peserta-pelatihan-di-kelas':
      return `Dokumentasi foto bersama peserta pelatihan sertifikasi K3 di kelas${numStr}`;
    case 'instruktur-memandu-sesi-kelas':
      return `Instruktur K3 memandu pemaparan modul dan regulasi di hadapan peserta${numStr}`;
    case 'instruktur-menjelaskan-materi-di-kelas-kecil':
      return `Instruktur menjelaskan materi teknis dan studi kasus keselamatan kerja${numStr}`;
    case 'instruktur-menyampaikan-materi-kepada-peserta':
      return `Instruktur K3 menyampaikan materi pembinaan dan standar keselamatan${numStr}`;
    case 'instruktur-menyampaikan-presentasi-di-kelas':
      return `Penyampaian presentasi standar operasional dan manajemen K3 oleh instruktur${numStr}`;
    case 'peserta-mengerjakan-ujian-tertulis-di-kelas':
      return `Peserta mengerjakan evaluasi ujian tertulis pembinaan regulasi keselamatan kerja${numStr}`;
    case 'peserta-mengikuti-pelatihan-di-kelas':
      return `Suasana peserta mengikuti sesi pembinaan keselamatan dan kesehatan kerja${numStr}`;
    case 'peserta-mengikuti-sesi-di-ruang-kelas':
      return `Peserta menyimak pemaparan materi K3 terstruktur di ruang pelatihan${numStr}`;
    case 'peserta-menyimak-presentasi-di-ruang-kelas':
      return `Peserta menyimak presentasi visual implementasi K3 di tempat kerja${numStr}`;
    case 'peserta-menyimak-sesi-pembelajaran-di-kelas':
      return `Peserta fokus menyimak sesi pembelajaran dan pembahasan norma K3${numStr}`;
    case 'praktik-pengangkatan-beban-dengan-crane':
      return `Simulasi dan praktik pengangkatan beban aman menggunakan crane di lapangan${numStr}`;
    case 'praktik-pengikatan-beban-di-area-industri':
      return `Praktik teknis pengikatan beban (rigging) dan verifikasi alat angkat di area kerja${numStr}`;
    case 'praktik-pengoperasian-forklift-di-lapangan':
      return `Praktik pengoperasian forklift dan manuver aman di area kerja pergudangan${numStr}`;
    case 'praktik-rigging-dan-pengangkatan-beban':
      return `Praktik langsung teknik rigging, inspeksi sling, dan sinyal komunikasi pengangkatan${numStr}`;
    default:
      return `Dokumentasi resmi kegiatan pembinaan dan pelatihan K3${numStr}`;
  }
}

export function loadAllImages(): ImageMeta[] {
  const dir = path.join(process.cwd(), 'public', 'images', 'content');
  if (!fs.existsSync(dir)) {
    return [];
  }
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp'));
  return files.map((filename, index) => {
    const category = filename.replace(/-\d+\.webp$/, '');
    return {
      src: `/images/content/${filename}`,
      alt: generateAltText(filename),
      filename,
      category,
      index,
    };
  });
}

export interface ImageAssignmentStats {
  section: string;
  total: number;
  directMatched: number;
  fallbackGeneric: number;
  noImage: number;
  withGallery: number;
}

export function assignImagesToRecords(records: ContentRecordInput[]): {
  records: ContentRecordInput[];
  stats: ImageAssignmentStats[];
} {
  const allImages = loadAllImages();
  if (allImages.length === 0) {
    console.warn('Warning: No images found in public/images/content/');
    return { records, stats: [] };
  }

  // Group images by categories
  const imagesByCategory: Record<string, ImageMeta[]> = {};
  for (const img of allImages) {
    imagesByCategory[img.category] = imagesByCategory[img.category] || [];
    imagesByCategory[img.category].push(img);
  }

  // Pre-filtered thematic image pools
  const craneImages = allImages.filter(img => img.category.includes('crane'));
  const forkliftImages = allImages.filter(img => img.category.includes('forklift'));
  const riggingImages = allImages.filter(img => img.category.includes('rigging') || img.category.includes('pengikatan'));
  const practicalImages = allImages.filter(img => img.category.startsWith('praktik-'));
  const assessmentImages = allImages.filter(img => img.category.startsWith('asesmen-'));
  const examImages = allImages.filter(img => img.category.includes('ujian-tertulis'));
  const instructorImages = allImages.filter(img => img.category.startsWith('instruktur-'));
  const discussionImages = allImages.filter(img => img.category.startsWith('diskusi-'));
  const groupPhotos = allImages.filter(img => img.category.startsWith('foto-bersama-'));
  const classroomImages = allImages.filter(img => img.category.startsWith('peserta-'));

  // Section-specific balanced fallback pools
  const sectionFallbackPools: Record<string, ImageMeta[]> = {
    pelatihan: [...practicalImages, ...classroomImages, ...instructorImages, ...groupPhotos],
    profesi: [...instructorImages, ...discussionImages, ...groupPhotos, ...classroomImages],
    kompetensi: [...assessmentImages, ...examImages, ...classroomImages, ...instructorImages],
    industri: [...groupPhotos, ...practicalImages, ...discussionImages, ...classroomImages],
    'regulasi-k3': [...examImages, ...assessmentImages, ...instructorImages, ...classroomImages],
    panduan: [...practicalImages, ...assessmentImages, ...classroomImages, ...instructorImages],
    'kamus-k3': [...instructorImages, ...classroomImages, ...discussionImages],
    perbandingan: [...discussionImages, ...instructorImages, ...groupPhotos, ...classroomImages],
    alat: [...practicalImages, ...riggingImages, ...craneImages, ...forkliftImages, ...classroomImages],
    lokasi: [...groupPhotos, ...instructorImages, ...classroomImages, ...discussionImages],
  };

  const sectionPointers: Record<string, number> = {};
  const statsMap: Record<string, ImageAssignmentStats> = {};

  const updatedRecords = records.map(record => {
    const sec = record.section;
    if (!statsMap[sec]) {
      statsMap[sec] = {
        section: sec,
        total: 0,
        directMatched: 0,
        fallbackGeneric: 0,
        noImage: 0,
        withGallery: 0,
      };
    }
    statsMap[sec].total++;

    const textToMatch = `${record.slug} ${record.title} ${record.parentTopic || ''}`.toLowerCase();
    let directMatches: ImageMeta[] = [];

    // Direct Topical Matching Logic
    if (textToMatch.includes('crane') || textToMatch.includes('overhead-crane') || textToMatch.includes('mobile-crane') || textToMatch.includes('gantry-crane')) {
      directMatches = craneImages;
    } else if (textToMatch.includes('forklift') || textToMatch.includes('reach-truck') || textToMatch.includes('tow-tractor') || textToMatch.includes('stacker')) {
      directMatches = forkliftImages;
    } else if (textToMatch.includes('rigging') || textToMatch.includes('rigger') || textToMatch.includes('sling') || textToMatch.includes('shackle') || textToMatch.includes('tali-kawat')) {
      directMatches = riggingImages;
    } else if (textToMatch.includes('pesawat-angkat') || textToMatch.includes('alat-angkat') || textToMatch.includes('operator-alat-berat')) {
      directMatches = [...craneImages, ...forkliftImages, ...riggingImages];
    } else if (textToMatch.includes('asesmen') || textToMatch.includes('uji-kompetensi') || textToMatch.includes('portofolio') || textToMatch.includes('skkni') || textToMatch.includes('lsp') || textToMatch.includes('bnsp')) {
      directMatches = assessmentImages;
    } else if (textToMatch.includes('ujian') || textToMatch.includes('evaluasi') || textToMatch.includes('post-test') || textToMatch.includes('pemeriksaan-tertulis')) {
      directMatches = examImages;
    } else if (textToMatch.includes('instruktur') || textToMatch.includes('trainer') || textToMatch.includes('pengajar') || textToMatch.includes('konsultan') || textToMatch.includes('ahli-k3')) {
      directMatches = instructorImages;
    } else if (textToMatch.includes('diskusi') || textToMatch.includes('seminar') || textToMatch.includes('studi-kasus') || textToMatch.includes('perbandingan') || textToMatch.includes('vs')) {
      directMatches = discussionImages;
    } else if (textToMatch.includes('industri') || textToMatch.includes('pabrik') || textToMatch.includes('fasilitas') || textToMatch.includes('lapangan')) {
      directMatches = [...groupPhotos, ...practicalImages];
    }

    let assignedImage: { src: string; alt: string };
    let assignedGallery: { src: string; alt: string }[] | undefined = undefined;

    if (directMatches.length > 0) {
      statsMap[sec].directMatched++;
      // Pick a deterministic image from the direct matches based on slug hash/length
      const hash = record.slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const chosen = directMatches[hash % directMatches.length];
      assignedImage = {
        src: chosen.src,
        alt: `${chosen.alt} - ${record.title}`,
      };

      // For pelatihan: build gallery if multiple matches exist
      if (sec === 'pelatihan' && directMatches.length >= 2) {
        // Take up to 4 distinct images for the gallery
        const galleryCount = Math.min(4, directMatches.length);
        const startIndex = hash % directMatches.length;
        const galleryList: ImageMeta[] = [];
        for (let i = 0; i < galleryCount; i++) {
          const img = directMatches[(startIndex + i) % directMatches.length];
          if (!galleryList.some(g => g.src === img.src)) {
            galleryList.push(img);
          }
        }
        if (galleryList.length >= 2) {
          assignedGallery = galleryList.map(g => ({
            src: g.src,
            alt: `${g.alt} - ${record.title}`,
          }));
          statsMap[sec].withGallery++;
        }
      }
    } else {
      statsMap[sec].fallbackGeneric++;
      // Section-specific round robin from fallback pool
      const pool = sectionFallbackPools[sec] || allImages;
      sectionPointers[sec] = sectionPointers[sec] || 0;
      const chosen = pool[sectionPointers[sec] % pool.length];
      sectionPointers[sec]++;

      assignedImage = {
        src: chosen.src,
        alt: `${chosen.alt} - ${record.title}`,
      };

      // For pelatihan with generic fallback: optionally assign a 2-slide gallery if useful
      if (sec === 'pelatihan') {
        const nextImg = pool[sectionPointers[sec] % pool.length];
        sectionPointers[sec]++;
        assignedGallery = [
          assignedImage,
          {
            src: nextImg.src,
            alt: `${nextImg.alt} - ${record.title}`,
          },
        ];
        statsMap[sec].withGallery++;
      }
    }

    if (!assignedImage || !assignedImage.src) {
      statsMap[sec].noImage++;
    }

    return {
      ...record,
      image: assignedImage,
      gallery: assignedGallery,
    };
  });

  const stats = Object.values(statsMap);
  return { records: updatedRecords, stats };
}

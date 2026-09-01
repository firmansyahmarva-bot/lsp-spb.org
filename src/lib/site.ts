export const site = {
  name: 'PT Kreasi Ultimate Berjaya',
  brandName: 'Kreasi Ultimate Berjaya (KUB)',
  url: 'https://pelatihan-k3.co.id',
  domain: 'pelatihan-k3.co.id',
  tagline: 'Pusat Informasi & Konsultasi Pelatihan K3 Indonesia',
  description: 'Pusat informasi, bimbingan, dan konsultasi resmi pelatihan K3, sertifikasi Ahli K3 Umum Kemnaker RI, skema kompetensi BNSP, dan in-house training K3 di Indonesia.',
  email: 'kreasiultimateberjaya@gmail.com',
  phone: '(0274) 4353898',
  whatsappDisplay: '+62 889-1754-596',
  whatsapp: '628891754596',
  instagram: 'https://www.instagram.com/kreasievents.id/',
  hours: 'Senin – Jumat: 08.30 – 17.00 WIB | Sabtu: 08.30 – 14.00 WIB',
  locations: [
    {
      slug: 'yogyakarta',
      name: 'Yogyakarta',
      address: 'Jl. Wonosari Km 8.5, Gandu, Sendangtirto, Kec. Berbah, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55573',
      city: 'Yogyakarta / Sleman',
      isHeadOffice: true,
    },
    {
      slug: 'sleman',
      name: 'Sleman',
      address: 'Jl. Wonosari Km 8.5, Gandu, Sendangtirto, Kec. Berbah, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55573',
      city: 'Sleman',
      isHeadOffice: false,
    },
    {
      slug: 'semarang',
      name: 'Semarang',
      address: 'Jl. Jaten III, Pedurungan Tengah, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50192',
      city: 'Semarang',
      isHeadOffice: false,
    },
  ],
} as const;

export function waUrl(message = 'Halo PT Kreasi Ultimate Berjaya, saya ingin berkonsultasi mengenai program Pelatihan K3.') {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function waIntentUrl(intent: 'jadwal' | 'biaya' | 'syarat' | 'perusahaan' | 'daftar' | 'kemnaker_bnsp', context?: string) {
  const topic = context ? ` terkait ${context}` : ' Pelatihan K3';
  const messages: Record<typeof intent, string> = {
    jadwal: `Halo PT Kreasi Ultimate Berjaya, saya ingin menanyakan informasi jadwal batch terdekat untuk${topic}.`,
    biaya: `Halo PT Kreasi Ultimate Berjaya, saya ingin meminta informasi rincian estimasi biaya & fasilitas pelatihan${topic}.`,
    syarat: `Halo PT Kreasi Ultimate Berjaya, saya ingin konsultasi mengenai syarat pendaftaran & kelengkapan berkas untuk${topic}.`,
    perusahaan: `Halo PT Kreasi Ultimate Berjaya, perusahaan kami ingin mengajukan penawaran / konsultasi program In-House Training K3${context ? ` (${context})` : ''}.`,
    daftar: `Halo PT Kreasi Ultimate Berjaya, saya berminat mendaftar program pelatihan${topic}. Mohon info prosedur registrasinya.`,
    kemnaker_bnsp: `Halo PT Kreasi Ultimate Berjaya, saya ingin konsultasi memilih jalur sertifikasi K3 (Kemnaker vs BNSP) yang sesuai dengan kebutuhan saya.`,
  };
  return waUrl(messages[intent] || messages.jadwal);
}

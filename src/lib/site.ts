export const site = {
  name: 'Kreasi Ultimate Berjaya',
  shortName: 'KUB K3',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://kreasi-ultimate-berjaya-k3.firmansyahmarva.chatgpt.site',
  description: 'Pusat informasi pelatihan K3, kompetensi, profesi, dan regulasi keselamatan kerja Indonesia.',
  email: 'kreasiultimateberjaya@gmail.com',
  phone: '(0274) 4353898',
  whatsappDisplay: '+62 889-1754-596',
  whatsapp: '628891754596',
  instagram: 'https://www.instagram.com/kreasievents.id/',
  locations: [
    { slug: 'yogyakarta', name: 'Yogyakarta', address: 'Wonosari St No. km 8.5, Gandu, Sendangtirto, Berbah, Sleman Regency, Special Region of Yogyakarta 55573' },
    { slug: 'sleman', name: 'Sleman', address: 'Wonosari St No. km 8.5, Gandu, Sendangtirto, Berbah, Sleman Regency, Special Region of Yogyakarta 55573' },
    { slug: 'semarang', name: 'Semarang', address: '2F2C+CR5, Jl. Jaten III, Pedurungan Tengah, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50192' },
  ],
} as const;

export const waUrl = (message = 'Halo Kreasi Ultimate Berjaya, saya ingin berkonsultasi mengenai pelatihan K3.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

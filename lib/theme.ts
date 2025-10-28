export const theme = {
  colors: {
    primary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#4CAF50', // Soft green
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    romantic: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#E53935', // Romantic red
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    cream: {
      50: '#FFF8F0',
      100: '#FFF0E6',
      200: '#FFE1CC',
      300: '#FFD1B3',
      400: '#FFC299',
      500: '#FFB380',
      600: '#E6A173',
      700: '#CC8F66',
      800: '#B37D59',
      900: '#996B4C',
    },
  },
  fonts: {
    heading: 'Playfair Display',
    body: 'Poppins',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  shadows: {
    soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    medium: '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    strong: '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  animations: {
    fadeIn: 'fadeIn 0.6s ease-out',
    slideUp: 'slideUp 0.6s ease-out',
    slideInLeft: 'slideInLeft 0.6s ease-out',
    slideInRight: 'slideInRight 0.6s ease-out',
    scaleIn: 'scaleIn 0.4s ease-out',
    float: 'float 3s ease-in-out infinite',
  },
} as const

export const brandInfo = {
  name: 'Floral Whispers Gifts',
  tagline: 'Feel the Beauty and Blossom',
  phone: '0721554393',
  whatsapp: '+254721554393',
  email: 'floralwhispersgifts@gmail.com',
  address: 'Delta House 5th Floor, University Way, Moi Avenue, Nairobi',
  instagram: '@floralwhispersgifts',
  description: 'Nairobi\'s premier flower and gift brand offering fresh bouquets, money bouquets, custom gifts, and event decorations.',
  hours: 'Mon–Sat: 8AM – 7PM',
} as const

export const collections = [
  {
    id: 'bouquets',
    title: 'Fresh Bouquets',
    description: 'Handcrafted floral arrangements for every occasion',
    image: '/images/arrangements/amazing, beatiful,mixedmoneyboquetflower1.png',
    href: '#collections',
  },
  {
    id: 'money-bouquets',
    title: 'Money Bouquets',
    description: 'Creative money arrangements for special celebrations',
    image: '/images/arrangements/100notesbouquet1.png',
    href: '#collections',
  },
  {
    id: 'gift-boxes',
    title: 'Gift Boxes',
    description: 'Curated gift collections for birthdays and anniversaries',
    image: '/images/collections/birthday,friend,gifts1.png',
    href: '#collections',
  },
  {
    id: 'events',
    title: 'Events & Décor',
    description: 'Wedding and event decoration services',
    image: '/images/arrangements/amazing, beatiful,mixedmoneyboquetflower2.png',
    href: '#collections',
  },
  {
    id: 'deliveries',
    title: 'Same-Day Delivery',
    description: 'Fast and reliable delivery across Nairobi',
    image: '/images/arrangements/amazing, beatiful,mixedmoneyboquetflower3.png',
    href: '#contact',
  },
] as const

export const whyChooseUs = [
  {
    icon: '🌸',
    title: 'Fresh & Handcrafted',
    description: 'Every arrangement is made with fresh flowers and personal care',
  },
  {
    icon: '🚚',
    title: 'Same-Day Delivery',
    description: 'Fast and reliable delivery service across Nairobi',
  },
  {
    icon: '💬',
    title: 'Instant WhatsApp Orders',
    description: 'Easy ordering through WhatsApp for your convenience',
  },
  {
    icon: '🎁',
    title: 'Custom Gift Options',
    description: 'Personalized gifts tailored to your special occasion',
  },
] as const

export const galleryImages = [
  {
    id: 1,
    src: '/images/arrangements/amazing, beatiful,mixedmoneyboquetflower1.png',
    alt: 'Beautiful mixed flower bouquet',
    category: 'bouquets',
  },
  {
    id: 2,
    src: '/images/arrangements/amazing, beatiful,mixedmoneyboquetflower2.png',
    alt: 'Elegant floral arrangement',
    category: 'bouquets',
  },
  {
    id: 3,
    src: '/images/arrangements/amazing, beatiful,mixedmoneyboquetflower3.png',
    alt: 'Romantic flower bouquet',
    category: 'bouquets',
  },
  {
    id: 4,
    src: '/images/arrangements/100notesbouquet1.png',
    alt: 'Creative money bouquet',
    category: 'money-bouquets',
  },
  {
    id: 5,
    src: '/images/arrangements/100notesbouquet2.png',
    alt: 'Elegant money arrangement',
    category: 'money-bouquets',
  },
  {
    id: 6,
    src: '/images/collections/birthday,friend,gifts1.png',
    alt: 'Birthday gift collection',
    category: 'gift-boxes',
  },
  {
    id: 7,
    src: '/images/collections/birthday,friend,gifts2.png',
    alt: 'Friend gift box',
    category: 'gift-boxes',
  },
  {
    id: 8,
    src: '/images/arrangements/amazing, beatiful,mixedmoneyboquetflower4.png',
    alt: 'Mixed flower arrangement',
    category: 'bouquets',
  },
] as const

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Floral Whispers Gifts - Feel the Beauty and Blossom',
  description: 'Nairobi\'s premier flower and gift brand offering fresh bouquets, money bouquets, custom gifts, and event decorations. Same-day delivery across Nairobi.',
  keywords: 'flowers Nairobi, gift delivery, bouquets, money bouquets, event decorations, floral arrangements',
  authors: [{ name: 'Floral Whispers Gifts' }],
  creator: 'Floral Whispers Gifts',
  publisher: 'Floral Whispers Gifts',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://floralwhispersgifts.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Floral Whispers Gifts - Feel the Beauty and Blossom',
    description: 'Nairobi\'s premier flower and gift brand offering fresh bouquets, money bouquets, custom gifts, and event decorations.',
    url: 'https://floralwhispersgifts.com',
    siteName: 'Floral Whispers Gifts',
    images: [
      {
        url: '/images/hero/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Floral Whispers Gifts - Beautiful flower arrangements',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Floral Whispers Gifts - Feel the Beauty and Blossom',
    description: 'Nairobi\'s premier flower and gift brand offering fresh bouquets, money bouquets, custom gifts, and event decorations.',
    images: ['/images/hero/hero-bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

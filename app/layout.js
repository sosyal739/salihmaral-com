import './globals.css'

export const metadata = {
  metadataBase: new URL('https://www.salihmaral.com'),
  title: {
    template: '%s | Salih Maral',
    default: 'Salih Maral – Resmi Google Partner & Dijital Büyüme Ajansı',
  },
  description: '17+ yıllık resmi Google Partner tecrübesiyle Türkiye ve küresel pazarlarda Google Ads, Meta Ads, SEO ve e-ihracat odaklı performans pazarlaması danışmanlığı.',
  keywords: [
    'Google Ads Ajansı',
    'Google Ads Uzmanı',
    'Resmi Google Partner',
    'Meta Ads Ajansı',
    'Facebook Ads',
    'Instagram Ads',
    'TikTok Ads',
    'X Reklamları',
    'SEO Uzmanı',
    'SEO Ajansı',
    'E-İhracat Reklam Yönetimi',
    'İhracat Dijital Pazarlama',
    'Performans Pazarlaması',
    'Server-Side Tracking',
    'Meta CAPI',
    'Google Haritalar Yönetimi',
    'Generative Engine Optimization',
    'GEO Uzmanı',
    'AI SEO'
  ],
  authors: [{ name: 'Salih Maral', url: 'https://www.salihmaral.com' }],
  creator: 'Salih Maral',
  publisher: 'Salih Maral',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.salihmaral.com',
    types: {
      'application/rss+xml': 'https://www.salihmaral.com/feed.xml'
    },
    languages: {
      'tr': 'https://www.salihmaral.com',
      'en': 'https://www.salihmaral.com/en',
      'x-default': 'https://www.salihmaral.com'
    }
  },
  openGraph: {
    title: 'Salih Maral – Resmi Google Partner & Dijital Büyüme Ajansı',
    description: '17+ yıllık resmi Google Partner tecrübesiyle Türkiye ve küresel pazarlarda Google Ads, Meta Ads, SEO ve ihracat odaklı performans pazarlaması danışmanlığı.',
    url: 'https://www.salihmaral.com',
    siteName: 'Salih Maral',
    images: [
      {
        url: '/logo-og.png',
        width: 1200,
        height: 630,
        alt: 'Salih Maral - Resmi Google Partner',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salih Maral – Resmi Google Partner & Dijital Büyüme Ajansı',
    description: '17+ yıllık resmi Google Partner tecrübesiyle Türkiye ve küresel pazarlarda yüksek performanslı reklam sistemleri.',
    images: ['/logo.png'],
    creator: '@salihmaral',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  category: 'Digital Marketing',
}

export default function RootLayout({ children }) {
  return children
}

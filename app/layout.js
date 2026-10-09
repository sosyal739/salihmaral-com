import { Manrope } from 'next/font/google'
import './globals.css'
import MobileStickyBar from '@/components/MobileStickyBar'

const manrope = Manrope({ 
  subsets: ['latin', 'latin-ext'], 
  display: 'swap', 
  preload: true,
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata = {
  metadataBase: new URL('https://salihmaral.com'),
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
  authors: [{ name: 'Salih Maral', url: 'https://salihmaral.com' }],
  creator: 'Salih Maral',
  publisher: 'Salih Maral',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://salihmaral.com',
    languages: {
      'tr': 'https://salihmaral.com',
      'en': 'https://salihmaral.com/en',
      'de': 'https://salihmaral.com',
      'x-default': 'https://salihmaral.com'
    }
  },
  openGraph: {
    title: 'Salih Maral – Resmi Google Partner & Dijital Büyüme Ajansı',
    description: '17+ yıllık resmi Google Partner tecrübesiyle Türkiye ve küresel pazarlarda Google Ads, Meta Ads, SEO ve ihracat odaklı performans pazarlaması danışmanlığı.',
    url: 'https://salihmaral.com',
    siteName: 'Salih Maral Dijital Büyüme Ajansı',
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

// JSON-LD Structured Data - Language-neutral only (language-specific in page components)
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://salihmaral.com/#organization',
      name: 'Salih Maral Dijital Büyüme Ajansı',
      url: 'https://salihmaral.com',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://salihmaral.com/#logo',
        url: 'https://salihmaral.com/logo.png',
        width: 800,
        height: 800,
        caption: 'Salih Maral Dijital Büyüme Ajansı'
      },
      image: { '@id': 'https://salihmaral.com/#logo' },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@salihmaral.com',
        contactType: 'customer service',
        availableLanguage: ['Turkish', 'English', 'German'],
        areaServed: ['TR', 'DE', 'GB', 'US', 'EU']
      },
      sameAs: [
        'https://salihmaral.com',
        'https://www.linkedin.com/in/salih-maral-78159a22a/',
        'https://x.com/salihmaral',
        'https://www.facebook.com/salihmaral.de',
        'https://www.instagram.com/salihmaral.de',
        'https://github.com/sosyal739'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': 'https://salihmaral.com/#website',
      url: 'https://salihmaral.com',
      name: 'Salih Maral Dijital Büyüme Ajansı',
      publisher: { '@id': 'https://salihmaral.com/#organization' },
      inLanguage: ['tr-TR', 'en-US', 'de-DE']
    },
    {
      '@type': 'Person',
      '@id': 'https://salihmaral.com/#person',
      name: 'Salih Maral',
      jobTitle: 'Resmi Google Partner & Büyüme Danışmanı',
      url: 'https://salihmaral.com',
      image: 'https://salihmaral.com/logo.png',
      description: '17+ yıllık resmi Google Partner tecrübesiyle Türkiye ve küresel pazarlarda Google Ads, Meta Ads, TikTok Ads, SEO, Generative Engine Optimization (GEO) ve Server-Side Tracking uzmanı.',
      worksFor: { '@id': 'https://salihmaral.com/#organization' },
      knowsAbout: [
        'Google Ads Yönetimi',
        'Meta Ads (Facebook & Instagram)',
        'E-İhracat Reklam Stratejileri',
        'TikTok Ads',
        'SEO ve İçerik Stratejileri',
        'Generative Engine Optimization (GEO)',
        'Server-Side Tracking (sGTM & Meta CAPI)',
        'Dönüşüm Oranı Optimizasyonu (CRO)',
        'Performans Pazarlaması'
      ],
      knowsLanguage: ['tr', 'en', 'de'],
      sameAs: [
        'https://salihmaral.com',
        'https://www.linkedin.com/in/salih-maral-78159a22a/',
        'https://x.com/salihmaral',
        'https://github.com/sosyal739'
      ]
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://salihmaral.com/#localbusiness',
      name: 'Salih Maral Dijital Büyüme Ajansı',
      url: 'https://salihmaral.com',
      email: 'info@salihmaral.com',
      image: 'https://salihmaral.com/logo.png',
      priceRange: '₺₺ / €€',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '312',
        bestRating: '5',
        worstRating: '1'
      },
      areaServed: [
        { '@type': 'Country', name: 'Turkey' },
        { '@type': 'Country', name: 'Germany' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Europe' }
      ],
      serviceType: [
        'Google Ads Yönetimi',
        'Meta Ads Yönetimi',
        'E-İhracat ve Küresel Reklam Danışmanlığı',
        'SEO Danışmanlığı',
        'Server-Side Tracking (sGTM & CAPI)',
        'Yapay Zeka Destekli Arama Optimizasyonu (GEO)'
      ],
      founder: { '@id': 'https://salihmaral.com/#person' },
      parentOrganization: { '@id': 'https://salihmaral.com/#organization' },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      }
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://salihmaral.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Google Ads reklam bütçesi ve ajans yönetimi nasıl çalışır?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Google Ads reklam harcamalarınız doğrudan kendi Google faturalandırma hesabınızdan çekilir. Yönetim hizmetimiz ise komisyonsuz, şeffaf ve sabit aylık paketlerle yürütülür.'
          }
        },
        {
          '@type': 'Question',
          name: 'Türkiye\'den Avrupa ve Almanya pazarına e-ihracat reklamları nasıl kurgulanır?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hedef ülkenin yerel arama alışkanlıkları, dil incelikleri, euro bazlı CPC maliyetleri ve satın alma psikolojisine uygun Google Shopping, Search ve Meta Ads kampanyaları sıfırdan profesyonelce kurulur.'
          }
        },
        {
          '@type': 'Question',
          name: 'Hangi reklam platformlarını yönetiyorsunuz?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Google Ads (Arama, Shopping, YouTube, PMax), Meta Ads (Facebook & Instagram), TikTok Ads ve X (Twitter) platformlarında uçtan uca kampanya kurulumu ve optimizasyonu sunuyoruz.'
          }
        }
      ]
    },
    {
      '@type': 'AggregateRating',
      '@id': 'https://salihmaral.com/#rating',
      itemReviewed: { '@id': 'https://salihmaral.com/#organization' },
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '312',
      reviewCount: '312'
    }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        {/* Google Analytics 4 (GA4) with Google Consent Mode v2 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'granted',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
              gtag('js', new Date());
              gtag('config', 'G-QT1CZE5BJK', {
                'anonymize_ip': true,
                'cookie_flags': 'SameSite=None;Secure',
                'send_page_view': true
              });
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QT1CZE5BJK" />
        
        {/* Favicon - Multiple sizes for different devices and Google Search */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <meta name="theme-color" content="#4285F4" />
        <meta name="msapplication-TileColor" content="#4285F4" />
        
        {/* Preload critical hero image for faster LCP */}
        <link rel="preload" as="image" type="image/webp" href="/hero.webp" />
        <link rel="preload" as="image" type="image/webp" href="/logo-sm.webp" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${manrope.className} ${manrope.variable} font-sans antialiased text-gray-900 bg-white selection:bg-[#5138EE]/10 selection:text-[#5138EE] pb-20 md:pb-0`}>
        {children}
        <MobileStickyBar />
      </body>
    </html>
  )
}

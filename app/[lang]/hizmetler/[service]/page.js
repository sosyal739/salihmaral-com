import ServiceDetailClient from './ServiceDetailClient'
import { notFound } from 'next/navigation'

const serviceMeta = {
  'google-ads': {
    de: {
      title: 'Google Ads Betreuung zum Fixpreis | Salih Maral',
      description: 'Zertifizierte Google Ads Betreuung zum fairen Fixpreis: 17+ Jahre Senior-Expertise, Performance Max & Search für maximalen ROAS ohne Streuverlust.',
    },
    en: {
      title: 'Google Ads Agency | Flat Fee PPC Management | Salih Maral',
      description: 'Scale your business with certified flat-fee Google Ads management. Search, Performance Max & Shopping campaigns optimized for maximum ROAS by a 17+ yr partner.',
    },
    tr: {
      title: 'Google Ads Ajansı & Danışmanlığı | Salih Maral',
      description: 'Resmi Google Partneri ile şeffaf sabit fiyatlı Google Ads yönetimi: Arama, PMax ve Alışveriş reklamları ile yüksek karlılık ve satış.',
    },
  },
  'meta-ads': {
    de: {
      title: 'Meta Ads Agentur (Facebook & Instagram) | Salih Maral',
      description: 'Zertifizierte Meta Ads Betreuung zum Fixpreis: Advantage+ Shopping, Creative AI & CAPI für messbare E-Commerce Skalierung und minimale CPAs.',
    },
    en: {
      title: 'Meta Ads Agency (Facebook & Instagram) | Salih Maral',
      description: 'Certified Meta Ads management: Advantage+ Shopping, Creative AI, and Server-Side CAPI to scale e-commerce and lower CPAs.',
    },
    tr: {
      title: 'Meta Ads Ajansı (Facebook & Instagram) | Salih Maral',
      description: 'Profesyonel Meta Ads yönetimi: Advantage+ Alışveriş, CAPI ve yapay zeka kreatifleri ile satışlarınızı ve ROAS\'ınızı katlayın.',
    },
  },
  'youtube-ads': {
    de: {
      title: 'YouTube Ads Betreuung & Video-Wachstum | Salih Maral',
      description: 'Erreichen Sie echte Zuschauer und loyale Abonnenten mit zielgerichteten In-Feed & Shorts Video Ads auf YouTube.',
    },
    en: {
      title: 'YouTube Ads & Video Growth Services | Salih Maral',
      description: 'Reach real viewers and loyal subscribers with targeted In-Feed & Shorts video ads to drive organic YouTube channel growth.',
    },
    tr: {
      title: 'YouTube Ads ve Video Reklam Yönetimi | Salih Maral',
      description: 'Videolarınızı doğru insanlara izletin. Ülke hedefli YouTube Ads ve Shorts reklamları ile gerçek izlenme ve kanal büyümesi.',
    },
  },
  'server-side-tracking': {
    de: {
      title: 'Tracking Setup & CAPI (Google Ads, GA4) | Salih Maral',
      description: 'Lückenloses Werbe- und Tracking-Setup: Google Ads, GA4 E-Commerce, Search Console, Merchant Center, Meta Pixel, Conversions API (CAPI) & Server-Side GTM.',
    },
    en: {
      title: 'Ad & Tracking Setup (Google Ads, GA4, CAPI) | Salih Maral',
      description: 'Full-funnel ad and tracking setup: Google Ads, GA4 E-Commerce, Search Console, Merchant Center, Meta Pixel, Conversions API (CAPI), and Server-Side GTM.',
    },
    tr: {
      title: 'Tracking & Reklam Kurulumu (GA4, CAPI) | Salih Maral',
      description: 'Anahtar teslim reklam ve ölçüm altyapı kurulumu: Google Ads, GA4 E-Ticaret, Search Console, Merchant Center, Meta Pixel, CAPI ve Server-Side GTM.',
    },
  },
  'tiktok-ads': {
    de: {
      title: 'TikTok Ads Betreuung & E-Commerce | Salih Maral',
      description: 'Virale Performance-Kampagnen und Spark Ads für dynamisches E-Commerce-Wachstum und hohe Conversion-Raten auf TikTok.',
    },
    en: {
      title: 'TikTok Ads Management Services | Salih Maral',
      description: 'Viral direct-response campaigns and Spark Ads for rapid e-commerce growth and high conversion rates on TikTok.',
    },
    tr: {
      title: 'TikTok Ads Reklam Yönetimi | Salih Maral',
      description: 'Viral kreatif kurguları ve Spark Ads ile genç kitleyi müşteriye dönüştüren doğrudan satış odaklı TikTok reklamları.',
    },
  },
  'x-ads': {
    de: {
      title: 'X (Twitter) Ads Betreuung & B2B Lead Gen | Salih Maral',
      description: 'Positionieren Sie Ihre Marke bei Trendthemen und Entscheidern. B2B Lead-Generierung und Reichweite auf X.',
    },
    en: {
      title: 'X (Twitter) Ads Management & B2B Leads | Salih Maral',
      description: 'Position your brand in front of decision-makers. B2B lead generation, app installs, and viral reach on X (Twitter).',
    },
    tr: {
      title: 'X (Twitter) Ads Reklam Yönetimi ve B2B Büyüme | Salih Maral',
      description: 'Karar vericilere ve trend konulara doğrudan ulaşın. B2B müşteri kazanımı ve yüksek etkileşimli X reklamları.',
    },
  },
  'seo': {
    de: {
      title: 'SEO Agentur & Princeton GEO Optimierung | Salih Maral',
      description: 'Top-Rankings bei Google und KI-Suchmaschinen (Perplexity, ChatGPT, Claude). Technisches SEO, Content-Hubs und Local SEO.',
    },
    en: {
      title: 'SEO & Generative Engine Optimization (GEO) | Salih Maral',
      description: 'Dominate Google and AI search engines (Perplexity, ChatGPT, Claude). Technical SEO, programmatic content hubs, and Local SEO.',
    },
    tr: {
      title: 'SEO ve Generative Engine Optimization (GEO) | Salih Maral',
      description: 'Google ilk sıra ve yapay zeka arama motorlarında (Perplexity, ChatGPT, Gemini) zirveye çıkın. Teknik SEO ve İçerik Motoru.',
    },
  },
  'islamic-charity-ngo-marketing': {
    de: {
      title: 'Spendenmarketing & Google Ad Grants für NGOs | Salih Maral',
      description: 'Digitale Spendenkampagnen für Brunnen, Waisen und Nothilfe. Bis zu $10.000/Monat kostenlose Google Werbebudgets (Ad Grants).',
    },
    en: {
      title: 'Donation Marketing & Google Ad Grants for NGOs | Salih Maral',
      description: 'Scale donations for water wells, orphan sponsorships, and Ramadan appeals. Up to $10,000/month in free Google Ad Grants.',
    },
    tr: {
      title: 'STK & Dernekler İçin Dijital Pazarlama | Salih Maral',
      description: 'Su kuyusu, yetim ve Ramazan/Kurban bağış hunileri. $10.000/aylık ücretsiz Google Ad Grants hibe reklam yönetimi.',
    },
  },
  'web-sitesi-tasarimi': {
    de: {
      title: 'Schlüsselfertiges Webdesign & Next.js SEO | Salih Maral',
      description: 'Hochmoderne, SEO-optimierte Unternehmenswebsites mit Next.js, Admin-Panel und unbegrenzten Revisionen.',
    },
    en: {
      title: 'Turnkey Web Design & SEO Website Development | Salih Maral',
      description: 'State-of-the-art Next.js 16 corporate websites: 100/100 SEO & GEO ready, easy-to-use admin panel, and unlimited revisions included.',
    },
    tr: {
      title: 'Anahtar Teslim Web Sitesi & Kurumsal Tasarım | Salih Maral',
      description: 'Son model Next.js 16 donanımlı, 100/100 SEO & GEO uyumlu, gelişmiş admin panelli ve sınırsız revize garantili anahtar teslim web sitesi.',
    },
  },
}

const serviceFaqs = {
  'web-sitesi-tasarimi': {
    en: [
      {
        q: 'What is included in the Turnkey Website package (Admin Panel, SEO & Revisions)?',
        a: 'Every website is built from scratch with Next.js 16 architecture, equipped with a user-friendly Admin Panel (CMS), 100/100 Google Lighthouse SEO & GEO optimization, GA4/CAPI tracking, and unlimited design revisions until you are 100% satisfied.'
      },
      {
        q: 'Why do you use Next.js instead of traditional WordPress templates?',
        a: 'Ready-made WordPress themes suffer from slow loading speeds, plugin vulnerabilities, and wasted ad clicks. Our Next.js server-side rendered (SSR) websites load in under 0.8 seconds, boost Google Ads Quality Score to 10/10, and rank effortlessly on Google.'
      }
    ],
    tr: [
      {
        q: 'Anahtar teslim web sitesi paketinde neler var (Admin Paneli, SEO ve Sınırsız Revize)?',
        a: 'Siteniz son model Next.js 16 mimarisiyle sıfırdan kurulur; kod bilmeden her yeri yönetebileceğiniz gelişmiş Türkçe/İngilizce Admin Paneli, 100/100 Google SEO & GEO uyumu, GA4/CAPI reklam takip kurulumu ve memnun kalana kadar sınırsız revize garantisi dahildir.'
      },
      {
        q: 'Neden klasik WordPress şablonları yerine son model özel yazılım kullanıyorsunuz?',
        a: 'Hazır WordPress temaları yavaş açılır, güvenlik açığı barındırır ve reklam tıklamalarınızı boşa harcar. Kurduğumuz Next.js tabanlı siteler 0.8 saniyenin altında açılır, Google Ads Kalite Puanınızı 10/10 yapar ve SEO sıralamalarında doğrudan üstünlük sağlar.'
      }
    ]
  },
  'meta-ads': {
    de: [
      {
        q: 'Was kostet die professionelle Meta Ads Betreuung (Fixpreis vs. prozentuale Provision)?',
        a: 'Bei Salih Maral betreuen wir Ihre Facebook und Instagram Ads zu transparenten monatlichen Fixpreisen ab 590 €/Monat – ohne prozentuale Umsatzbeteiligung an Ihrem Werbebudget. So stellen wir sicher, dass das primäre Ziel die Senkung Ihres CPA und die Steigerung Ihres Netto-ROAS ist, statt Ihr Werbebudget künstlich in die Höhe zu treiben.'
      },
      {
        q: 'Wie bekämpft man Creative Fatigue (Anzeigenmüdigkeit) auf Instagram & Facebook?',
        a: 'Creative Fatigue tritt ein, wenn dieselbe Zielgruppe ein Werbemittel zu oft sieht, wodurch Frequenz steigt und Klickraten (CTR) einbrechen. Wir lösen dies durch eine wöchentliche Creative-Pipeline mit systematischer Diversifikation: UGC-Videos, statische Problem-Lösungs-Grafiken und dynamische Advantage+ Karussell-Anzeigen.'
      },
      {
        q: 'Was ist der Vorteil von Meta Advantage+ Shopping Campaigns (ASC)?',
        a: 'Advantage+ Shopping Campaigns nutzen maschinelles Lernen, um bis zu 150 Kreativ-Assets automatisch mit kaufbereiten Nutzern zu matchen. Wir begrenzen den Bestandskunden-Anteil (Customer Budget Cap) strategisch auf 5-15%, um echtes Neukundenwachstum zu sichern.'
      },
      {
        q: 'Warum ist die Meta Conversions API (CAPI) mit Server-Side GTM in Deutschland Pflicht?',
        a: 'Durch strenge DSGVO/TTDSG-Cookie-Banner und Safari ITP gehen über 30% der Browser-Pixel-Events verloren. Über Server-Side CAPI stellen wir sicher, dass Kauf- und Lead-Signale datenschutzkonform und verlustfrei an Meta übertragen werden, was den Algorithmus stabilisiert und den CPA nachweislich senkt.'
      }
    ],
    en: [
      {
        q: 'What are the fees for professional Meta Ads management (Flat fee vs % of spend)?',
        a: 'We operate on a transparent monthly flat fee (Fixpreis) starting from €590/month rather than taking percentage cuts from your ad budget. This ensures our priority is strictly to reduce your CPA and scale profitable net ROAS without artificial budget inflation.'
      },
      {
        q: 'How do you prevent Creative Fatigue on Facebook & Instagram Ads?',
        a: 'Creative Fatigue occurs when audience frequency spikes and CTR drops due to overexposed ads. We eliminate this with a weekly creative pipeline: UGC video hooks, static problem-solution infographics, and dynamic Advantage+ catalog carousels.'
      },
      {
        q: 'What are the advantages of Meta Advantage+ Shopping Campaigns (ASC)?',
        a: 'Advantage+ Shopping Campaigns leverage machine learning to dynamically match up to 150 assets with high-intent buyers. By implementing a strict 5-15% Customer Budget Cap, we prevent algorithm waste on repeat buyers and secure true incremental acquisition.'
      },
      {
        q: 'Why is Meta Conversions API (CAPI) with Server-Side GTM mandatory for modern tracking?',
        a: 'Strict privacy regulations, ad-blockers and browser cookie restrictions block over 30% of browser pixel events. Server-Side CAPI restores loss-free, compliant event signals to Meta, lowering CPA and improving algorithm precision.'
      }
    ],
    tr: [
      {
        q: "Profesyonel Meta Ads yönetimi ücreti nedir (Sabit fiyat mı, bütçe komisyonu mu)?",
        a: "Reklam harcamanızdan %10-15 komisyon kesmek yerine şeffaf ve sabit hizmet bedeli (Fixpreis) ile çalışıyoruz. Bu sayede ajansın bütçenizi gereksiz yükseltmesini engelliyor, doğrudan dönüşüm başı maliyetinizi (CPA) düşürüp karlılığınızı (ROAS) katlamaya odaklanıyoruz."
      },
      {
        q: "Facebook ve Instagram reklamlarında Creative Fatigue (Reklam Yorgunluğu) nasıl çözülür?",
        a: "Hedef kitlenin aynı reklamı defalarca görmesi sonucu sıklık artar ve tıklama oranları (CTR) düşer. Haftalık yeni kreatif testleri, kullanıcı deneyimi (UGC) videoları, problem-çözüm grafikleri ve Advantage+ dinamik katalog formatları ile reklam yorgunluğunu tamamen ortadan kaldırıyoruz."
      },
      {
        q: "Meta Advantage+ Alışveriş Kampanyaları (ASC) nedir ve ne gibi avantajlar sağlar?",
        a: "Meta Advantage+ Shopping, makine öğrenimi ile 150 adede kadar kreatif varyasyonunu satın alma olasılığı en yüksek kullanıcılarla otomatik eşleştirir. Mevcut müşteri bütçe sınırını (Customer Budget Cap) %10-15 seviyesinde tutarak bütçenin eski alıcılarda tükenmesini engelliyor, karlı yeni müşteri akışı sağlıyoruz."
      },
      {
        q: "Meta Conversions API (CAPI) ve sunucu taraflı takip neden zorunludur?",
        a: "Tarayıcı çerez kısıtlamaları ve reklam engelleyicileri piksel verilerinin %30'undan fazlasını siler. Server-Side CAPI ile satın alma ve lead sinyalleri sunucu üzerinden kayıpsız iletilir; yapay zekanın veri körlüğü önlenir ve maliyetler düşer."
      }
    ]
  },
  'google-ads': {
    de: [
      {
        q: 'Google Ads Agentur Preise & Kosten: Wie rechnen Sie ab (Fixpreis oder Prozent vom Ad Spend)?',
        a: 'Wir setzen bewusst auf eine transparente monatliche Betreuungspauschale (Fixpreis) statt prozentualer Umsatzprovisionen. Unser Ziel ist es nicht, Ihr Werbebudget künstlich in die Höhe zu treiben, sondern Ihre Kosten pro Conversion (CPA) zu senken und Ihren ROAS zu maximieren.'
      },
      {
        q: 'Wie schnell stellen sich erste messbare Ergebnisse mit Google Ads ein?',
        a: 'Google Search Kampagnen generieren ab dem ersten Schaltungstag qualifizierte Suchanfragen und Leads. Durch kontinuierliche Suchbegriffsanalyse, negative Keywords und Conversion-Tracking stabilisiert sich der optimale CPA innerhalb von 14 bis 30 Tagen.'
      },
      {
        q: 'Bieten Sie auch mehrsprachige Betreuung (Deutsch, Türkisch & Englisch) an?',
        a: 'Ja. Als offizieller Google Partner mit über 17 Jahren Praxiserfahrung beraten wir internationale Unternehmen fließend auf Deutsch, Türkisch und Englisch.'
      }
    ],
    en: [
      {
        q: 'Google Ads Agency Costs & Pricing: How do you charge (Flat fee or % of ad spend)?',
        a: 'We deliberately operate on a transparent monthly flat-fee model rather than taking a percentage of your ad spend. This aligns our goals strictly with lowering your CPA and boosting your ROAS.'
      },
      {
        q: 'How fast can we see measurable results with Google Ads?',
        a: 'Search campaigns generate qualified intent clicks from day one. With negative keyword pruning and server-side tracking, optimal acquisition cost is typically achieved within 14 to 30 days.'
      }
    ],
    tr: [
      {
        q: 'Google Ads Ajans Ücretleri: Nasıl çalışıyorsunuz (Sabit fiyat mı, bütçe komisyonu mu)?',
        a: "Yönetilen bütçeden %10 - %15 komisyon kesmek yerine şeffaf ve sabit hizmet bedeli (Fixpreis) ile çalışıyoruz. Bütçenizi şişirmeden doğrudan maliyetlerinizi düşürmeye ve karlılığı artırmaya odaklanıyoruz."
      },
      {
        q: 'Google Ads reklamları ne kadar sürede sonuç verir?',
        a: 'Arama ağı reklamları yayına girdiği ilk günden itibaren telefon ve teklif talebi getirmeye başlar. Negatif kelime optimizasyonu ve doğru takip ile 14-30 gün içinde en yüksek karlılık oranına ulaşılır.'
      }
    ]
  }
}

export async function generateMetadata({ params }) {
  const resolvedParams = params && typeof params.then === 'function' ? await params : params
  const { lang, service } = resolvedParams || {}
  const currentLang = lang || 'tr'
  
  let key = service || ''
  if (service === 'bewertungsmanagement' || service === 'review-management' || service === 'yorum-yonetimi' || service === 'web-design') {
    key = 'web-sitesi-tasarimi'
  }

  const metaData = serviceMeta[key]?.[currentLang] || {
    title: `${service || 'Hizmetler'} | Salih Maral`,
    description: 'Salih Maral profesyonel dijital pazarlama ve büyüme hizmetleri.',
  }

  const pathPrefix = currentLang === 'en' ? 'en/services' : 'tr/hizmetler'
  const serviceSlug = key === 'web-sitesi-tasarimi' 
    ? (currentLang === 'en' ? 'web-design' : 'web-sitesi-tasarimi')
    : key
  const canonicalUrl = `https://www.salihmaral.com/${pathPrefix}/${serviceSlug}`

  return {
    title: {
      absolute: metaData.title,
    },
    description: metaData.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `https://www.salihmaral.com/en/services/${key === 'web-sitesi-tasarimi' ? 'web-design' : key}`,
        tr: `https://www.salihmaral.com/tr/hizmetler/${key === 'web-sitesi-tasarimi' ? 'web-sitesi-tasarimi' : key}`,
        'x-default': `https://www.salihmaral.com/tr/hizmetler/${key === 'web-sitesi-tasarimi' ? 'web-sitesi-tasarimi' : key}`,
      }
    },
    openGraph: {
      title: metaData.title,
      description: metaData.description,
      url: canonicalUrl,
      images: [
        {
          url: 'https://www.salihmaral.com/logo-og.png',
          width: 1200,
          height: 630,
          alt: metaData.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaData.title,
      description: metaData.description,
      images: ['https://www.salihmaral.com/logo.png'],
      creator: '@salihmaral',
    },
  }
}

export async function generateStaticParams() {
  const baseServices = ['google-ads', 'meta-ads', 'youtube-ads', 'server-side-tracking', 'tiktok-ads', 'x-ads', 'seo', 'islamic-charity-ngo-marketing', 'web-sitesi-tasarimi']
  const params = []

  // German
  baseServices.forEach(service => {
    params.push({ lang: 'de', service })
  })
  params.push({ lang: 'de', service: 'bewertungsmanagement' })
  params.push({ lang: 'de', service: 'yorum-yonetimi' })

  // English
  baseServices.forEach(service => {
    params.push({ lang: 'en', service })
  })
  params.push({ lang: 'en', service: 'web-design' })
  params.push({ lang: 'en', service: 'review-management' })
  params.push({ lang: 'en', service: 'yorum-yonetimi' })

  // Turkish
  baseServices.forEach(service => {
    params.push({ lang: 'tr', service })
  })
  params.push({ lang: 'tr', service: 'yorum-yonetimi' })

  return params
}

export default async function ServicePage({ params }) {
  const resolvedParams = params && typeof params.then === 'function' ? await params : params
  const { lang, service } = resolvedParams || {}
  
  if (!service) {
    notFound()
  }

  const currentLang = lang || 'tr'
  let key = service || ''
  if (service === 'bewertungsmanagement' || service === 'review-management' || service === 'yorum-yonetimi' || service === 'web-design') {
    key = 'web-sitesi-tasarimi'
  }

  const metaData = serviceMeta[key]?.[currentLang] || {
    title: `${service || 'Hizmetler'} | Salih Maral`,
    description: 'Salih Maral profesyonel dijital pazarlama ve büyüme hizmetleri.',
  }

  const pathPrefix = currentLang === 'en' ? 'en/services' : 'tr/hizmetler'
  const serviceSlug = key === 'web-sitesi-tasarimi' 
    ? (currentLang === 'en' ? 'web-design' : 'web-sitesi-tasarimi')
    : key
  const canonicalUrl = `https://www.salihmaral.com/${pathPrefix}/${serviceSlug}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: metaData.title,
        description: metaData.description,
        provider: {
          '@type': 'ProfessionalService',
          '@id': 'https://www.salihmaral.com/#organization',
          name: 'Salih Maral Digital Marketing',
          url: 'https://www.salihmaral.com',
          telephone: '+49 176 8452 7954',
          priceRange: '€€',
          image: 'https://www.salihmaral.com/logo.png',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'DE',
          },
        },
        areaServed: [
          { '@type': 'Country', name: 'Germany' },
          { '@type': 'Country', name: 'Austria' },
          { '@type': 'Country', name: 'Switzerland' },
          { '@type': 'Country', name: 'Turkey' },
        ],
        url: canonicalUrl,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: currentLang === 'de' ? 'Startseite' : currentLang === 'en' ? 'Home' : 'Ana Sayfa',
            item: currentLang === 'de' ? 'https://www.salihmaral.com' : `https://www.salihmaral.com/${currentLang}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: currentLang === 'de' ? 'Dienstleistungen' : currentLang === 'en' ? 'Services' : 'Hizmetler',
            item: `https://www.salihmaral.com/${currentLang === 'de' ? 'de/dienstleistungen' : currentLang === 'en' ? 'en/services' : 'tr/hizmetler'}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: metaData.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  }

  const currentFaqs = serviceFaqs[key]?.[currentLang] || []
  if (currentFaqs.length > 0) {
    serviceSchema['@graph'].push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: currentFaqs.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    })
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetailClient initialService={key} initialLang={currentLang} />
    </>
  )
}

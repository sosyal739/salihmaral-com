const langMeta = {
  de: {
    title: 'Salih Maral – Google Ads, Meta Ads & SEO Experte',
    description: 'Zertifizierter Google Partner mit 17+ Jahren Erfahrung. Performance Marketing mit Google Ads, Meta Ads, TikTok Ads & SEO.',
    canonical: 'https://www.salihmaral.com',
  },
  en: {
    title: 'Google Ads Agency & Performance Marketing | Salih Maral',
    description: 'Scale your business with certified flat-fee Google Ads, Meta Ads, TikTok Ads & SEO management by an official 17+ yr Senior Google Partner.',
    canonical: 'https://www.salihmaral.com/en',
  },
  tr: {
    title: 'Google Ads Ajansı & SEO Danışmanlığı | Salih Maral',
    description: '17+ yıllık Resmi Google Partneri ile şeffaf sabit fiyatlı Google Ads, Meta Ads ve SEO yönetimi. E-ticaret ve markalar için yüksek ROAS ve karlı büyüme.',
    canonical: 'https://www.salihmaral.com/tr',
  },
}

export async function generateMetadata({ params }) {
  const { lang } = await params
  const currentLang = lang || 'tr'
  const meta = langMeta[currentLang] || langMeta.tr

  return {
    title: {
      absolute: meta.title,
    },
    description: meta.description,
    alternates: {
      canonical: meta.canonical,
      languages: {
        en: 'https://www.salihmaral.com/en',
        tr: 'https://www.salihmaral.com/tr',
        'x-default': 'https://www.salihmaral.com',
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.canonical,
    },
  }
}

export default function LangLayout({ children }) {
  return <>{children}</>
}

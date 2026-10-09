const langMeta = {
  de: {
    title: 'Salih Maral – Google Ads, Meta Ads & SEO Experte',
    description: 'Zertifizierter Google Partner mit 17+ Jahren Erfahrung. Performance Marketing mit Google Ads, Meta Ads, TikTok Ads & SEO.',
    canonical: 'https://www.salihmaral.com',
  },
  en: {
    title: 'Google Ads Agency Germany & PPC Expert | Salih Maral',
    description: 'Scale your business in Germany with certified flat-fee Google Ads, Meta Ads, TikTok Ads & SEO management by an official 17+ yr Senior Google Partner.',
    canonical: 'https://www.salihmaral.com/en',
  },
  tr: {
    title: 'Almanya Google Ads Ajansı & SEO Uzmanı | Salih Maral',
    description: 'Almanya ve Avrupa pazarında büyümek isteyen markalar ve gurbetçi işletmeler için Resmi Google Partneri ile sabit fiyatlı Google Ads, Meta Ads & Yerel SEO.',
    canonical: 'https://www.salihmaral.com/tr',
  },
}

export async function generateMetadata({ params }) {
  const { lang } = await params
  const currentLang = lang || 'de'
  const meta = langMeta[currentLang] || langMeta.de

  return {
    title: {
      absolute: meta.title,
    },
    description: meta.description,
    alternates: {
      canonical: meta.canonical,
      languages: {
        de: 'https://www.salihmaral.com',
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

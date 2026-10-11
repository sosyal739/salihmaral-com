export const metadata = {
  title: 'Blog & Strategic Guides | Salih Maral',
  description: 'Actionable expert guides on Google Ads, Meta Ads, SEO, GEO, and Server-Side Tracking for international business growth.',
  alternates: {
    canonical: 'https://www.salihmaral.com/en/blog',
    languages: {
      tr: 'https://www.salihmaral.com/blog',
      en: 'https://www.salihmaral.com/en/blog',
      'x-default': 'https://www.salihmaral.com/blog',
    },
  },
  openGraph: {
    title: 'Digital Marketing & Growth Blog | Salih Maral',
    description: 'In-depth strategic guides on Google Ads, Meta Ads, SEO, and Server-Side Tracking.',
    url: 'https://www.salihmaral.com/en/blog',
    locale: 'en_US',
    type: 'website',
  },
}

export default function EnBlogLayout({ children }) {
  return <>{children}</>
}

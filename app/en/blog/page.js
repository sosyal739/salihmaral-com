import { getAllPosts } from '@/lib/blog.server'
import BlogPageClient from '@/app/blog/BlogPageClient'

export const metadata = {
  title: {
    absolute: 'Digital Marketing & Growth Blog | Salih Maral',
  },
  description: 'In-depth strategic guides on Google Ads, Meta Ads, SEO, GEO, and Server-Side Tracking for international brands and e-commerce.',
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
    description: 'In-depth strategic guides on Google Ads, Meta Ads, SEO, GEO, and Server-Side Tracking for international brands and e-commerce.',
    url: 'https://www.salihmaral.com/en/blog',
    locale: 'en_US',
    type: 'website',
  },
}

export default async function EnBlogPage() {
  const initialPosts = getAllPosts('en') || []
  return <BlogPageClient initialPosts={initialPosts} initialLang="en" />
}

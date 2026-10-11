import { getAllPosts } from '@/lib/blog.server'
import BlogPageClient from './BlogPageClient'

export const metadata = {
  title: {
    absolute: 'Dijital Pazarlama & Büyüme Blogu | Salih Maral',
  },
  description: 'Google Ads, Meta Ads, SEO, E-İhracat ve Server-Side Tracking hakkında güncel uzman rehberleri.',
  alternates: {
    canonical: 'https://www.salihmaral.com/blog',
    languages: {
      tr: 'https://www.salihmaral.com/blog',
      en: 'https://www.salihmaral.com/en/blog',
      'x-default': 'https://www.salihmaral.com/blog',
    },
  },
  openGraph: {
    title: 'Dijital Pazarlama & Büyüme Blogu | Salih Maral',
    description: 'Google Ads, Meta Ads, SEO, E-İhracat ve Server-Side Tracking hakkında güncel uzman rehberleri.',
    url: 'https://www.salihmaral.com/blog',
    type: 'website',
  },
}

export default async function BlogPage() {
  const initialPosts = getAllPosts('tr') || []
  return <BlogPageClient initialPosts={initialPosts} />
}

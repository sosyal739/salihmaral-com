import fs from 'fs'
import path from 'path'

export default async function sitemap() {
  const baseUrl = 'https://www.salihmaral.com'
  const currentDate = new Date().toISOString().split('T')[0]

  // 1. Static Core Pages (Root / is Turkish primary; /tr and /en localized)
  const staticEntries = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: {
          tr: `${baseUrl}`,
          en: `${baseUrl}/en`,
          'x-default': `${baseUrl}`,
        },
      },
    },
    {
      url: `${baseUrl}/tr`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: {
        languages: {
          tr: `${baseUrl}/tr`,
          en: `${baseUrl}/en`,
          'x-default': `${baseUrl}`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          tr: `${baseUrl}/tr`,
          en: `${baseUrl}/en`,
          'x-default': `${baseUrl}`,
        },
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: {
        languages: {
          tr: `${baseUrl}/blog`,
          en: `${baseUrl}/en/blog`,
          'x-default': `${baseUrl}/blog`,
        },
      },
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: {
        languages: {
          tr: `${baseUrl}/blog`,
          en: `${baseUrl}/en/blog`,
          'x-default': `${baseUrl}/blog`,
        },
      },
    },
  ]

  // 2. Service Pages (Turkish & English with x-default pointing to Turkish)
  const services = [
    'google-ads',
    'meta-ads',
    'youtube-ads',
    'server-side-tracking',
    'tiktok-ads',
    'x-ads',
    'seo',
    'web-sitesi-tasarimi',
    'islamic-charity-ngo-marketing',
  ]
  const serviceEntries = []

  services.forEach((slug) => {
    const enSlug = slug === 'web-sitesi-tasarimi' ? 'web-design' : slug
    const trSlug = slug

    const languages = {
      tr: `${baseUrl}/tr/hizmetler/${trSlug}`,
      en: `${baseUrl}/en/services/${enSlug}`,
      'x-default': `${baseUrl}/tr/hizmetler/${trSlug}`,
    }

    // Turkish (Primary)
    serviceEntries.push({
      url: `${baseUrl}/tr/hizmetler/${trSlug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: { languages },
    })
    // English
    serviceEntries.push({
      url: `${baseUrl}/en/services/${enSlug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: { languages },
    })
  })

  // 3. Dynamic Blog Posts (75 strategic pillar guides in both Turkish & English = 150 indexed pages)
  const blogEntries = []
  const postsDir = path.join(process.cwd(), 'content', 'blog')

  if (fs.existsSync(postsDir)) {
    const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'))
    const uniqueSlugs = new Set()

    files.forEach((file) => {
      const parts = file.split('.')
      if (parts.length >= 3) {
        const slug = parts.slice(0, -2).join('.')
        uniqueSlugs.add(slug)
      }
    })

    uniqueSlugs.forEach((slug) => {
      const trUrl = `${baseUrl}/blog/${slug}`
      const enUrl = `${baseUrl}/en/blog/${slug}`
      const languages = {
        tr: trUrl,
        en: enUrl,
        'x-default': trUrl,
      }

      // Turkish Blog Post
      blogEntries.push({
        url: trUrl,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.85,
        alternates: { languages },
      })

      // English Blog Post
      blogEntries.push({
        url: enUrl,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.85,
        alternates: { languages },
      })
    })
  }

  return [...staticEntries, ...serviceEntries, ...blogEntries]
}

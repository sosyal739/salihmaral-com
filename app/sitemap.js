import fs from 'fs'
import path from 'path'

export default async function sitemap() {
  const baseUrl = 'https://www.salihmaral.com'
  const currentDate = new Date().toISOString().split('T')[0]

  // 1. Static Core Pages (Root / is Turkish primary; /tr and /en localized)
  const staticRoutes = [
    '',
    '/tr',
    '/en',
    '/about',
    '/blog',
  ]

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' || route.startsWith('/tr') ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/tr') ? 0.9 : 0.8,
  }))

  // 2. Service Pages (Turkish & English with x-default pointing to Turkish)
  const services = ['google-ads', 'meta-ads', 'youtube-ads', 'server-side-tracking', 'tiktok-ads', 'x-ads', 'seo', 'yorum-yonetimi', 'islamic-charity-ngo-marketing']
  const serviceEntries = []

  services.forEach((slug) => {
    const enSlug = slug === 'yorum-yonetimi' ? 'review-management' : slug
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

  // 3. Dynamic Blog Posts (68 high-quality strategy & marketing guides)
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
      blogEntries.push({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.85,
      })
    })
  }

  return [...staticEntries, ...serviceEntries, ...blogEntries]
}

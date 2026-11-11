import { getAllPosts } from '@/lib/blog.server'

export const dynamic = 'force-static'

const SITE = 'https://www.salihmaral.com'

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export async function GET() {
  const posts = getAllPosts('tr')
    .filter((p) => p.date && !Number.isNaN(new Date(p.date).getTime()))
    .sort((a, b) => String(b.date).localeCompare(String(a.date)))
    .slice(0, 50)

  const items = posts
    .map((p) => {
      const url = `${SITE}/blog/${p.slug}`
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <category>${esc(p.category)}</category>
      <description>${esc(p.excerpt)}</description>
    </item>`
    })
    .join('\n')

  const newest = posts.length ? new Date(posts[0].date).toUTCString() : new Date().toUTCString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Salih Maral – Blog</title>
    <link>${SITE}/blog</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Google Ads, Meta Ads, SEO ve GEO üzerine rehberler.</description>
    <language>tr-TR</language>
    <lastBuildDate>${newest}</lastBuildDate>
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}

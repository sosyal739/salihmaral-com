import { getPostBySlug, getAllPosts, getAllSlugs } from '@/lib/blog.server'
import BlogDetailClient from '@/app/blog/[slug]/BlogDetailClient'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  try {
    const resolvedParams = await params
    const { slug } = resolvedParams || {}
    
    if (!slug) {
      return {
        title: { absolute: 'Blog | Salih Maral' },
        description: 'Actionable expert guides on Google Ads, Meta Ads, SEO, and GEO.',
      }
    }

    let post = getPostBySlug(slug, 'en') || getPostBySlug(slug, 'tr')
    if (!post) {
      return {
        title: { absolute: 'Blog | Salih Maral' },
        description: 'Actionable expert guides on Google Ads, Meta Ads, SEO, and GEO.',
      }
    }

    const cleanTitle = post.title.replace(/\s*\|\s*Salih Maral.*$/i, '').trim()
    const fullTitle = cleanTitle.length + 14 <= 60
      ? `${cleanTitle} | Salih Maral`
      : cleanTitle.length <= 60
      ? cleanTitle
      : cleanTitle.slice(0, 57).replace(/\s+\S*$/, '') + '...'

    let description = post.excerpt || `${cleanTitle} - Salih Maral Digital Marketing Blog`
    if (description.length < 120) {
      description = (description + ' In-depth guide and strategic insights by Salih Maral.').trim()
    }
    if (description.length > 158) {
      description = description.slice(0, 155).replace(/\s+\S*$/, '') + '...'
    }

    const canonicalUrl = `https://www.salihmaral.com/en/blog/${slug}`
    const trUrl = `https://www.salihmaral.com/blog/${slug}`

    return {
      title: {
        absolute: fullTitle,
      },
      description: description,
      alternates: {
        canonical: canonicalUrl,
        languages: {
          tr: trUrl,
          en: canonicalUrl,
          'x-default': trUrl,
        },
      },
      openGraph: {
        title: fullTitle,
        description: description,
        url: canonicalUrl,
        locale: 'en_US',
        type: 'article',
        publishedTime: post.date,
        authors: ['Salih Maral'],
        images: [
          {
            url: post.coverImage || 'https://www.salihmaral.com/logo-og.png',
            width: 1200,
            height: 630,
            alt: cleanTitle,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: fullTitle,
        description: description,
        images: [post.coverImage || 'https://www.salihmaral.com/logo.png'],
        creator: '@salihmaral',
      },
    }
  } catch (err) {
    return {
      title: { absolute: 'Blog | Salih Maral' },
      description: 'Actionable expert guides on Google Ads, Meta Ads, SEO, and GEO.',
    }
  }
}

export default async function EnBlogDetailPage({ params }) {
  const resolvedParams = await params
  const { slug } = resolvedParams || {}
  
  if (!slug) {
    notFound()
  }

  let post = getPostBySlug(slug, 'en') || getPostBySlug(slug, 'tr')
  if (!post) {
    notFound()
  }

  // Calculate internal related posts for strong English SEO mesh
  const allPosts = getAllPosts('en') || []
  const sameCategory = allPosts.filter(p => p.slug !== slug && p.category === post.category)
  const otherPosts = allPosts.filter(p => p.slug !== slug && p.category !== post.category)
  const relatedPosts = [...sameCategory, ...otherPosts].slice(0, 3)

  const cleanTitle = post.title.replace(/\s*\|\s*Salih Maral.*$/i, '').trim()
  const canonicalUrl = `https://www.salihmaral.com/en/blog/${slug}`
  const trUrl = `https://www.salihmaral.com/blog/${slug}`

  const faqItems = []
  const rawHtml = post.content || ''
  const pStrongRegex = /<p>\s*<strong>([^<]*\?)<\/strong>\s*<br\s*\/?>\s*([\s\S]*?)<\/p>/gi
  let match
  while ((match = pStrongRegex.exec(rawHtml)) !== null) {
    const q = match[1].replace(/<[^>]+>/g, '').trim()
    const a = match[2].replace(/<[^>]+>/g, '').trim()
    if (q && a) {
      faqItems.push({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })
    }
  }
  if (faqItems.length === 0) {
    const h3Regex = /<h3[^>]*>([^<]*\?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi
    while ((match = h3Regex.exec(rawHtml)) !== null) {
      const q = match[1].replace(/<[^>]+>/g, '').trim()
      const a = match[2].replace(/<[^>]+>/g, '').trim()
      if (q && a) {
        faqItems.push({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })
      }
    }
  }

  const graphNodes = [
    {
      '@type': 'BlogPosting',
      '@id': `${canonicalUrl}#article`,
      url: canonicalUrl,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl,
      },
      headline: cleanTitle,
      description: post.excerpt || cleanTitle,
      image: post.coverImage || 'https://www.salihmaral.com/logo.png',
      author: {
        '@type': 'Person',
        '@id': 'https://www.salihmaral.com/#person',
        name: 'Salih Maral',
        jobTitle: 'Official Google Partner & Senior Performance Marketing Consultant',
        url: 'https://www.salihmaral.com/en',
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://www.salihmaral.com/#organization',
        name: 'Salih Maral Digital Growth Agency',
        url: 'https://www.salihmaral.com/en',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.salihmaral.com/logo.png',
        },
      },
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: 'en-US',
      articleSection: post.category || 'Digital Marketing',
      keywords: post.category ? `${post.category}, Digital Marketing, Salih Maral` : 'Digital Marketing, Salih Maral',
      isPartOf: { '@id': 'https://www.salihmaral.com/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.salihmaral.com/en',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://www.salihmaral.com/en/blog',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: cleanTitle,
          item: canonicalUrl,
        },
      ],
    },
  ]

  if (faqItems.length > 0) {
    graphNodes.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: faqItems,
    })
  }

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@graph': graphNodes,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <BlogDetailClient initialPost={post} initialLang="en" relatedPosts={relatedPosts} />
    </>
  )
}

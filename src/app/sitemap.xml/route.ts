// app/sitemap.xml/route.ts
import { NextResponse } from 'next/server'
import { APP_ROUTERS, METADATA } from '@/helpers/config'
import { getAllCategoriesWithAllStores } from '@/services/categoryApi'
import { getTopics } from '@/services/topicApi'
import { getAllBlogs } from '@/services/blogApi'
import { listLetters } from '../(home)/brands/[letter]/StoreHeader'
import { formatImageUrl } from '@/helpers/formatImageUrl'
import { BlogData } from '@/types/blog.type'

const BASE_URL = METADATA.APP_URL

type ImageEntry = {
  loc: string
  title?: string
  caption?: string
}

type UrlEntry = {
  loc: string
  lastmod?: string
  changefreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority?: number // 0.0 - 1.0
  images?: ImageEntry[]
}

const staticUrls: Omit<UrlEntry, 'lastmod'>[] = [
  {
    loc: `${BASE_URL}${APP_ROUTERS.INDEX}`,
    changefreq: 'daily',
    priority: 1.0,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.ACCOUNT}`,
    changefreq: 'monthly',
    priority: 0.4,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.MY_COUPONS}`,
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.PROFILE}`,
    changefreq: 'monthly',
    priority: 0.4,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.ALL_CATEGORIES}`,
    changefreq: 'weekly',
    priority: 0.7,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.ALL_STORES}`,
    changefreq: 'weekly',
    priority: 0.7,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.ALL_TOPICS}`,
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.BLOGS}`,
    changefreq: 'daily',
    priority: 0.8,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.CHANGE_PASSWORD}`,
    changefreq: 'yearly',
    priority: 0.2,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.FORGOT_PASSWORD}`,
    changefreq: 'yearly',
    priority: 0.2,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.SIGN_IN}`,
    changefreq: 'yearly',
    priority: 0.2,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.SIGN_OUT}`,
    changefreq: 'yearly',
    priority: 0.2,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.SIGN_UP}`,
    changefreq: 'yearly',
    priority: 0.2,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.VERIFY}`,
    changefreq: 'yearly',
    priority: 0.2,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.HOT_DEALS}`,
    changefreq: 'daily',
    priority: 0.8,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.POLICY}`,
    changefreq: 'yearly',
    priority: 0.3,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.TERMS}`,
    changefreq: 'yearly',
    priority: 0.3,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.SUBMIT_COUPON}`,
    changefreq: 'monthly',
    priority: 0.5,
  },
]

// ---------- helpers ----------
function cdata(text?: string) {
  if (!text) return ''
  // an toàn với "]]>"
  const safe = text.replace(/]]>/g, ']]]]><![CDATA[>')
  return `<![CDATA[ ${safe} ]]>`
}

function toAbsolute(url: string): string {
  try {
    return new URL(url, BASE_URL).toString()
  } catch {
    return url
  }
}

function imageBlock(images?: ImageEntry[]) {
  if (!images || images.length === 0) return ''
  return images
    .map(({ loc, title, caption }) => {
      const parts = [
        `<image:loc>${toAbsolute(loc)}</image:loc>`,
        title ? `<image:title>${cdata(title)}</image:title>` : '',
        caption ? `<image:caption>${cdata(caption)}</image:caption>` : '',
      ]
        .filter(Boolean)
        .join('')
      return `<image:image>${parts}</image:image>`
    })
    .join('')
}

function generateSitemapXml(urls: UrlEntry[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
${urls
  .map(({ loc, lastmod, changefreq, priority, images }) => {
    return `  <url>
    <loc>${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
    ${typeof priority === 'number' ? `<priority>${priority}</priority>` : ''}
    ${imageBlock(images)}
  </url>`
  })
  .join('\n')}
</urlset>`
}

// đoán ảnh cho blog: sửa tên field theo model của bạn
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getImagesFromBlog(b: BlogData): ImageEntry[] {
  const url: string | undefined = formatImageUrl(b.image.public_id)

  if (!url) return []
  const title: string | undefined = b.meta_data?.title
  return [
    {
      loc: url,
      title,
      caption: title,
    },
  ]
}

export async function GET() {
  try {
    const nowIso = new Date().toISOString()

    // topics
    const topicsRes = await getTopics()
    const topics = Array.isArray(topicsRes?.data) ? topicsRes.data : []
    const topicUrls: UrlEntry[] = topics.map((t) => ({
      loc: `${BASE_URL}/topic/${t.slug}`,
      lastmod: new Date(t.updated_at || nowIso).toISOString(),
      changefreq: 'weekly',
      priority: 0.6,
      images: t.image.public_id
        ? [
            {
              loc: formatImageUrl(t.image.public_id),
              title: t.meta_data?.title,
              caption: t.name,
            },
          ]
        : undefined, // nếu có
    }))

    // blogs (thêm image, changefreq, priority)
    const blogsRes = await getAllBlogs()
    const blogs = Array.isArray(blogsRes?.data?.results)
      ? blogsRes.data.results
      : []
    const blogUrls: UrlEntry[] = blogs.map((b) => ({
      loc: `${BASE_URL}/blogs/${b.slug}`,
      lastmod: new Date(b.updated_at || nowIso).toISOString(),
      changefreq: 'daily',
      priority: 0.8,
      images: getImagesFromBlog(b),
    }))

    // brands (A-Z)
    const brands: UrlEntry[] = (
      Array.isArray(listLetters) ? listLetters : []
    ).map((l) => ({
      loc: `${BASE_URL}/brands/${l}`,
      lastmod: nowIso,
      changefreq: 'weekly',
      priority: 0.5,
    }))

    // categories + stores
    const categoriesRes = await getAllCategoriesWithAllStores()
    const categories = Array.isArray(categoriesRes?.data)
      ? categoriesRes.data
      : []
    const stores = categories.flatMap((cat) =>
      Array.isArray(cat?.stores) ? cat.stores : [],
    )

    const categoryUrls: UrlEntry[] = categories.map((c) => ({
      loc: `${BASE_URL}/coupons/${c.slug}`,
      lastmod: new Date(c.updated_at || nowIso).toISOString(),
      changefreq: 'weekly',
      priority: 0.7,
      images: c.image.public_id
        ? [
            {
              loc: formatImageUrl(c.image.public_id),
              title: c.meta_data?.title,
              caption: c.name,
            },
          ]
        : undefined, // nếu có
    }))

    const storeUrls: UrlEntry[] = stores.map((s) => ({
      loc: `${BASE_URL}/stores/${s.slug}`,
      lastmod: new Date(s.updated_at || nowIso).toISOString(),
      changefreq: 'weekly',
      priority: 0.7,
      images: s.image?.public_id
        ? [
            {
              loc: formatImageUrl(s.image.public_id),
              title: s.meta_data?.title,
              caption: s.name,
            },
          ]
        : undefined, // nếu có
    }))

    const finalUrls: UrlEntry[] = [
      ...staticUrls.map((u) => ({ ...u, lastmod: nowIso })),
      ...topicUrls,
      ...categoryUrls,
      ...storeUrls,
      ...brands,
      ...blogUrls,
    ]

    const xml = generateSitemapXml(finalUrls)

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 's-maxage=3600, stale-while-revalidate',
      },
    })
  } catch (err) {
    console.error('Sitemap generation failed:', err)
    return new NextResponse('Error generating sitemap', { status: 500 })
  }
}

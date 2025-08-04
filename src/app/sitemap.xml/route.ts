// app/sitemap.xml/route.ts

import { NextResponse } from 'next/server'
import { APP_ROUTERS, METADATA } from '@/helpers/config'
import { getAllCategoriesWithAllStores } from '@/services/categoryApi'
import { getTopics } from '@/services/topicApi'
import { getAllBlogs } from '@/services/blogApi'
import { listLetters } from '../(home)/brands/[letter]/StoreHeader'

const BASE_URL = METADATA.APP_URL

const staticUrls = [
  { loc: `${BASE_URL}${APP_ROUTERS.INDEX}` },
  { loc: `${BASE_URL}${APP_ROUTERS.ACCOUNT}` },
  { loc: `${BASE_URL}${APP_ROUTERS.MY_COUPONS}` },
  { loc: `${BASE_URL}${APP_ROUTERS.PROFILE}` },
  { loc: `${BASE_URL}${APP_ROUTERS.ALL_CATEGORIES}` },
  { loc: `${BASE_URL}${APP_ROUTERS.ALL_STORES}` },
  { loc: `${BASE_URL}${APP_ROUTERS.ALL_TOPICS}` },
  { loc: `${BASE_URL}${APP_ROUTERS.BLOGS}` },
  { loc: `${BASE_URL}${APP_ROUTERS.CHANGE_PASSWORD}` },
  { loc: `${BASE_URL}${APP_ROUTERS.FORGOT_PASSWORD}` },
  { loc: `${BASE_URL}${APP_ROUTERS.SIGN_IN}` },
  { loc: `${BASE_URL}${APP_ROUTERS.SIGN_OUT}` },
  { loc: `${BASE_URL}${APP_ROUTERS.SIGN_UP}` },
  { loc: `${BASE_URL}${APP_ROUTERS.VERIFY}` },
  { loc: `${BASE_URL}${APP_ROUTERS.HOT_DEALS}` },
  { loc: `${BASE_URL}${APP_ROUTERS.POLICY}` },
  { loc: `${BASE_URL}${APP_ROUTERS.TERMS}` },
  { loc: `${BASE_URL}${APP_ROUTERS.SUBMIT_COUPON}` },
]

function generateSitemapXml(urls: { loc: string; lastmod: string }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, lastmod }) => `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
  )
  .join('')}
</urlset>`
}

export async function GET() {
  try {
    const now = new Date().toISOString()
    const topicsRes = await getTopics()
    const topics = Array.isArray(topicsRes?.data) ? topicsRes.data : []
    const topicUrls = topics.map((t) => ({
      loc: `${BASE_URL}/topic/${t.slug}`,
      lastmod: new Date(t.updated_at || now).toISOString(),
    }))

    const blogsRes = await getAllBlogs()
    const blogs = Array.isArray(blogsRes?.data?.results)
      ? blogsRes.data.results
      : []
    const blogUrls = blogs.map((b) => ({
      loc: `${BASE_URL}/blogs/${b.slug}`,
      lastmod: new Date(b.updated_at || now).toISOString(),
    }))

    const brands = listLetters.map((l) => ({
      loc: `${BASE_URL}/brands/${l}`,
      lastmod: now,
    }))

    const categoriesRes = await getAllCategoriesWithAllStores()
    const categories = Array.isArray(categoriesRes?.data)
      ? categoriesRes.data
      : []
    const stores = categories.flatMap((cat) =>
      Array.isArray(cat?.stores) ? cat.stores : [],
    )

    const categoryUrls = categories.map((c) => ({
      loc: `${BASE_URL}/coupons/${c.slug}`,
      lastmod: new Date(c.updated_at || now).toISOString(),
    }))
    const storeUrls = stores.map((s) => ({
      loc: `${BASE_URL}/stores/${s.slug}`,
      lastmod: new Date(s.updated_at || now).toISOString(),
    }))

    const finalUrls = [
      ...staticUrls.map((u) => ({ ...u, lastmod: now })),
      ...topicUrls,
      ...categoryUrls,
      ...storeUrls,
      ...brands,
      ...blogUrls,
    ]

    const xml = generateSitemapXml(finalUrls)

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
      },
    })
  } catch (err) {
    console.error('Sitemap generation failed:', err)
    return new NextResponse('Error generating sitemap', { status: 500 })
  }
}

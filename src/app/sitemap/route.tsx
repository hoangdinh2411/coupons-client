import { NextResponse } from 'next/server'
import { APP_ROUTERS, METADATA } from '@/helpers/config'
import { generateSitemapXml } from '@/helpers/sitemapHelper'
import { UrlEntry } from '@/types/sitemap.type'
import getAllPages from './getAllPages'

const BASE_URL = METADATA.APP_URL

const staticUrls: Omit<UrlEntry, 'lastmod'>[] = [
  {
    loc: `${BASE_URL}${APP_ROUTERS.INDEX}`,
    changefreq: 'daily',
    priority: 1.0,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.ACCOUNT}`,
    changefreq: 'monthly',
    priority: 0.5,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.MY_COUPONS}`,
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.PROFILE}`,
    changefreq: 'monthly',
    priority: 0.5,
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
    priority: 0.5,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.FORGOT_PASSWORD}`,
    changefreq: 'yearly',
    priority: 0.5,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.SIGN_IN}`,
    changefreq: 'yearly',
    priority: 0.5,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.SIGN_OUT}`,
    changefreq: 'yearly',
    priority: 0.5,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.SIGN_UP}`,
    changefreq: 'yearly',
    priority: 0.5,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.VERIFY}`,
    changefreq: 'yearly',
    priority: 0.5,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.HOT_DEALS}`,
    changefreq: 'daily',
    priority: 0.8,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.POLICY}`,
    changefreq: 'yearly',
    priority: 0.5,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.TERMS}`,
    changefreq: 'yearly',
    priority: 0.5,
  },
  {
    loc: `${BASE_URL}${APP_ROUTERS.SUBMIT_COUPON}`,
    changefreq: 'monthly',
    priority: 0.5,
  },
]

export async function GET() {
  try {
    const nowIso = new Date().toISOString()
    const otherPages = await getAllPages()

    const finalUrls: UrlEntry[] = [
      ...staticUrls.map((u) => ({ ...u, lastmod: nowIso })),
      ...otherPages,
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

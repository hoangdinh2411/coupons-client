import { UrlEntry } from '@/types/sitemap.type'
import { generateSitemapXml } from '@/helpers/sitemapHelper'
import { NextResponse } from 'next/server'
import getAllBlogsSiteMap from './getAllBlogsForSitemap'

export async function GET() {
  try {
    const entries: UrlEntry[] = await getAllBlogsSiteMap()
    const xml = generateSitemapXml(entries)

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    })
  } catch (err) {
    console.error('Sitemap generation blogs failed:', err)
    return new NextResponse('Error generating  blogs sitemap', { status: 500 })
  }
}

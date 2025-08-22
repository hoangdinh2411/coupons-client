import { UrlEntry } from '@/types/sitemap.type'
import { generateSitemapXml } from '@/helpers/sitemapHelper'
import { NextResponse } from 'next/server'
import getAllStoresForSitemap from './getAllStoresForSitemap'

export async function GET() {
  try {
    const entries: UrlEntry[] = await getAllStoresForSitemap()
    const xml = generateSitemapXml(entries)

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    })
  } catch (err) {
    console.error('Sitemap generation stores failed:', err)
    return new NextResponse('Error generating  stores sitemap', {
      status: 500,
    })
  }
}

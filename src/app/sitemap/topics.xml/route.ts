import { UrlEntry } from '@/types/sitemap.type'
import { generateSitemapXml } from '@/helpers/sitemapHelper'
import { NextResponse } from 'next/server'
import getAllTopicsForSitemap from './getAllTopicsForSitemap'

export async function GET() {
  try {
    const entries: UrlEntry[] = await getAllTopicsForSitemap()
    const xml = generateSitemapXml(entries)

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    })
  } catch (err) {
    console.error('Sitemap generation topics failed:', err)
    return new NextResponse('Error generating  topics sitemap', {
      status: 500,
    })
  }
}

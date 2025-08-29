import { UrlEntry } from '@/types/sitemap.type'
import { generateSitemapXml } from '@/helpers/sitemapHelper'
import { NextResponse } from 'next/server'
import getAllCategoriesForSitemap from './getAllCategoriesForSitemap'

export async function GET() {
  try {
    const entries: UrlEntry[] = await getAllCategoriesForSitemap()
    const xml = generateSitemapXml(entries)

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    })
  } catch (err) {
    console.error('Sitemap generation categories failed:', err)
    return new NextResponse('Error generating  categories sitemap', {
      status: 500,
    })
  }
}

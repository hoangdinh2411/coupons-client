import { METADATA } from '@/helpers/config'
import { formatImageUrl } from '@/helpers/formatImageUrl'
import { getAllPage } from '@/services/clientApi'
import { UrlEntry } from '@/types/sitemap.type'

export default async function getAllPages(): Promise<UrlEntry[]> {
  const res = await getAllPage()
  if (!res.success || !res.data) return []
  const pages = res.data || []
  // Fetch the total number of products and calculate the number of sitemaps needed
  const nowIso = new Date().toISOString()
  return pages.map((page) => ({
    loc: `${METADATA.APP_URL}/${page.slug}`,
    lastmod: new Date(page.updated_at || nowIso).toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
    images: page.thumbnail?.public_id
      ? [
          {
            loc: formatImageUrl(page.thumbnail?.public_id),
            title: page?.type,
            caption: page?.type,
          },
        ]
      : [],
  }))
}

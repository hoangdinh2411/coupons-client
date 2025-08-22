import { METADATA } from '@/helpers/config'
import { formatImageUrl } from '@/helpers/formatImageUrl'
import { getAllCategoriesWithAllStores } from '@/services/categoryApi'
import { UrlEntry } from '@/types/sitemap.type'

export default async function getAllCategoriesForSitemap(): Promise<
  UrlEntry[]
> {
  const nowIso = new Date().toISOString()
  const categoriesRes = await getAllCategoriesWithAllStores()

  if (!categoriesRes.success || !categoriesRes.data) {
    return []
  }
  return categoriesRes.data.map((category) => ({
    loc: `${METADATA.APP_URL}/coupons/${category.slug}`,
    lastmod: new Date(category.updated_at || nowIso).toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
    images: category?.image?.public_id
      ? [
          {
            loc: formatImageUrl(category.image.public_id),
            title: category?.meta_data?.title,
            caption: category?.name,
          },
        ]
      : [],
  }))
}

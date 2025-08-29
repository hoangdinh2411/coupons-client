import { METADATA } from '@/helpers/config'
import { formatImageUrl } from '@/helpers/formatImageUrl'
import { getAllCategoriesWithAllStores } from '@/services/categoryApi'
import { UrlEntry } from '@/types/sitemap.type'
import { StoreData } from '@/types/store.type'

export default async function getAllStoresForSitemap(): Promise<UrlEntry[]> {
  const nowIso = new Date().toISOString()
  const res = await getAllCategoriesWithAllStores()

  if (!res.success || !res.data) {
    return []
  }

  const stores: StoreData[] = []
  res.data.forEach((c) => {
    if (c.stores && c.stores.length) {
      stores.push(...c.stores)
    }
  })

  return stores.map((store) => ({
    loc: `${METADATA.APP_URL}/stores/${store.slug}`,
    lastmod: new Date(store.updated_at || nowIso).toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
    images: store?.image?.public_id
      ? [
          {
            loc: formatImageUrl(store.image.public_id),
            title: store?.meta_data?.title,
            caption: store?.name,
          },
        ]
      : [],
  }))
}

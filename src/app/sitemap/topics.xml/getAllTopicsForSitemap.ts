import { METADATA } from '@/helpers/config'
import { formatImageUrl } from '@/helpers/formatImageUrl'
import { getTopics } from '@/services/topicApi'
import { UrlEntry } from '@/types/sitemap.type'

export default async function getAllTopicsForSitemap(): Promise<UrlEntry[]> {
  const nowIso = new Date().toISOString()
  const res = await getTopics()

  if (!res.success || !res.data) {
    return []
  }

  return res.data.map((topic) => ({
    loc: `${METADATA.APP_URL}/stores/${topic.slug}`,
    lastmod: new Date(topic.updated_at || nowIso).toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
    images: topic?.image?.public_id
      ? [
          {
            loc: formatImageUrl(topic.image.public_id),
            title: topic?.meta_data?.title,
            caption: topic?.name,
          },
        ]
      : [],
  }))
}

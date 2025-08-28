import { METADATA } from '@/helpers/config'
import { formatImageUrl } from '@/helpers/formatImageUrl'
import { getAllBlogs } from '@/services/blogApi'
import { BlogData } from '@/types/blog.type'
import { UrlEntry } from '@/types/sitemap.type'

export default async function getAllBlogsSiteMap(): Promise<UrlEntry[]> {
  let page = 1
  const limit = 500
  let hasMore = true
  const allBlogs: BlogData[] = []

  while (hasMore) {
    const blogsRes = await getAllBlogs(page, limit)
    if (!blogsRes.success || !blogsRes.data?.results) break

    allBlogs.push(...blogsRes.data.results)

    const totalCount = blogsRes.data.total || 0
    const fetchedCount = page * limit
    hasMore = fetchedCount < totalCount
    page++
  }
  if (!allBlogs) return []
  // Fetch the total number of products and calculate the number of sitemaps needed
  const nowIso = new Date().toISOString()
  return allBlogs.map((blog) => ({
    loc: `${METADATA.APP_URL}/blogs/${blog.slug}`,
    lastmod: new Date(blog.updated_at || nowIso).toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
    images: blog?.image?.public_id
      ? [
          {
            loc: formatImageUrl(blog.image.public_id),
            title: blog?.title,
            caption: blog?.title,
          },
        ]
      : [],
  }))
}

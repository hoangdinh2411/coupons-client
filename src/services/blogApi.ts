import customFetch from './customFetch'
import { BlogData } from '@/types/blog.type'

export const getLatestBlogsAndBlogPerTopics = async () => {
  return await customFetch<{
    latest: BlogData[]
    blogs_per_topic: {
      [key: number]: BlogData[]
    }
  }>(`/client/blogs`, {
    next: {
      revalidate: 3600,
    },
  })
}
export const getBlogBySlug = async (slug: string) => {
  return await customFetch<{
    latest: BlogData[]
    blog: BlogData
  }>(`/client/blogs/${slug}`, {
    next: {
      tags: [slug],
    },
  })
}

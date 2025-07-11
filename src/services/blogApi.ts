import customFetch from './customFetch'
import { BlogData } from '@/types/blog.type'

export const getLatestBlogsAndBlogPerTopics = async () => {
  return await customFetch<{
    latest: BlogData[]
    blogs_per_topic: {
      [key: number]: BlogData[]
    }
  }>(`/client/blogs`, {
    cache: 'no-cache',
  })
}

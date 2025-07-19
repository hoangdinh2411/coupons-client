import customFetch from './customFetch'
import { BlogData } from '@/types/blog.type'

export const getLatestBlogs = async () => {
  return await customFetch<BlogData[]>(`/client/blogs/latest`, {
    next: {
      revalidate: 3600,
    },
  })
}
export const getTrendingBlogs = async () => {
  return await customFetch<BlogData[]>(`/client/blogs/trending`, {
    next: {
      revalidate: 3600,
    },
  })
}
export const getBlogsPerTopic = async () => {
  return await customFetch<{
    [key: string]: BlogData[]
  }>(`/client/blogs/topics`, {
    next: {
      revalidate: 3600,
    },
  })
}
export const getBlogBySlug = async (slug: string) => {
  return await customFetch<{
    blog: BlogData
    read_more: BlogData[]
  }>(`/client/blogs?slug=${slug}`, {
    next: {
      tags: [slug],
    },
  })
}

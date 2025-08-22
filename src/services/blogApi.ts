import { IResponseWithTotal } from '@/types/share.type'
import customFetch from './customFetch'
import { BlogData } from '@/types/blog.type'

export const getLatestBlogs = async () => {
  return await customFetch<BlogData[]>(`/client/blogs/latest`, {
    next: {
      revalidate: 3600,
      tags: ['blogs-page'],
    },
  })
}
export const getTrendingBlogs = async () => {
  return await customFetch<BlogData[]>(`/client/blogs/trending`, {
    next: {
      revalidate: 3600,
      tags: ['blogs-page'],
    },
  })
}
export const getBlogsPerTopic = async () => {
  return await customFetch<{
    [key: string]: BlogData[]
  }>(`/client/blogs/topics`, {
    next: {
      revalidate: 3600,
      tags: ['blogs-page'],
    },
  })
}
export const getBlogBySlug = async (slug: string) => {
  return await customFetch<{
    blog: BlogData
    read_more: BlogData[]
  }>(`/client/blogs?slug=${slug}`, {
    cache: 'force-cache',
  })
}
export const getAllBlogs = async (page?: number, limit?: number) => {
  const params = new URLSearchParams()
  if (page && limit) {
    params.append('page', page.toString())
    params.append('limit', limit.toString())
  }
  return await customFetch<IResponseWithTotal<BlogData[]>>(
    `/client/blogs/all?${params.toString()}`,
    {
      next: {
        revalidate: 3600,
        tags: ['blogs-page'],
      },
    },
  )
}

import { IResponseWithTotal } from '@/types/share.type'
import customFetch from './customFetch'
import { BlogData } from '@/types/blog.type'

export const getLatestBlogs = async () => {
  return await customFetch<BlogData[]>(`/client/blogs/latest`, {
    next: {
      tags: ['blogs-page'],
    },
  })
}
export const getTrendingBlogs = async () => {
  return await customFetch<BlogData[]>(`/client/blogs/trending`, {
    next: {
      tags: ['blogs-page'],
    },
  })
}
export const getBlogsPerTopic = async () => {
  return await customFetch<{
    [key: string]: BlogData[]
  }>(`/client/blogs/topics`, {
    next: {
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
export const getAllBlogs = async () => {
  return await customFetch<IResponseWithTotal<BlogData[]>>(
    `/client/blogs/all`,
    {
      next: {
        tags: ['blogs-page'],
      },
    },
  )
}

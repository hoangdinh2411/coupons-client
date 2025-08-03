import { IResponseWithTotal } from './../types/share.type'
import { TopicData } from '@/types/topic.type'
import customFetch from './customFetch'
import { BlogData } from '@/types/blog.type'

export const getTopics = async () => {
  return await customFetch<TopicData[]>(`/client/topics`, {
    next: {
      revalidate: 3600,
    },
  })
}
export const getBlogsByTopic = async (
  slug: string,
  page: number,
  limit: number,
) => {
  return await customFetch<IResponseWithTotal<BlogData[]>>(
    `/client/topic/${slug}/blogs?page=${page}&limit=${limit}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  )
}

import { TopicData } from '@/types/topic.type'
import customFetch from './customFetch'

export const getTopics = async () => {
  return await customFetch<TopicData[]>(`/client/topics`, {
    cache: 'no-cache',
  })
}

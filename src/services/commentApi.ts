'use server'

import { IResponseWithTotal } from '@/types/share.type'
import customFetch from './customFetch'
import { CommentData, CommentPayload } from '@/types/comment.type'
import { revalidateTag } from 'next/cache'
import customFetchWithToken from './customFetchWithToken'

export const getComments = async (
  blogId: number,
  page?: number,
  limit?: number,
) => {
  let query = ''
  if (page && limit) {
    query = `?page=${page}&limit=${limit}`
  }
  return await customFetch<IResponseWithTotal<CommentData[]>>(
    `/client/blogs/${blogId}/comments${query}`,
    {
      next: {
        tags: ['comments-' + blogId],
      },
    },
  )
}
export const sendComment = async (data: CommentPayload) => {
  const res = await customFetchWithToken<CommentData>(`/comments`, {
    method: 'POST',
    body: JSON.stringify(data),
  })

  if (res.success) {
    revalidateTag('comments-' + data.blog_id)
  }
  return res
}
export const updateComment = async (data: CommentPayload) => {
  const res = await customFetchWithToken<CommentData>(
    `/comments/${data.comment_id}`,
    {
      method: 'PATCH',
      body: JSON.stringify({
        content: data.content,
      }),
    },
  )

  if (res.success) {
    revalidateTag('comments-' + data.blog_id)
  }
  return res
}
export const deleteComment = async (id: number, blog_id: number) => {
  const res = await customFetchWithToken<CommentData>(`/comments/${id}`, {
    method: 'DELETE',
  })

  if (res.success) {
    revalidateTag('comments-' + blog_id)
  }
  return res
}

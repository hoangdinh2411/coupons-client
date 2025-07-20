'use client'
import { getComments } from '@/services/commentApi'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { useEffect, useState } from 'react'
import { CommentData } from '@/types/comment.type'

interface CommentSectionProps {
  blog_id: number
}

export default function CommentSection({ blog_id }: CommentSectionProps) {
  const [comments, setComments] = useState<CommentData[]>([])
  const [total, setTotal] = useState<number>(0)
  useEffect(() => {
    getComments(blog_id, 1, 2).then((res) => {
      if (res.success && res.data) {
        console.log(res)
        setComments(res.data?.results || [])
        setTotal(res.data?.total || 0)
      }
    })
  }, [])

  const handleShowAllComments = () => {
    getComments(blog_id).then((res) => {
      if (res.success && res.data) {
        setComments(res.data?.results || [])
      }
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <section className="border-green grid gap-4 rounded-md border bg-green-50 px-4 py-6 sm:gap-6 sm:px-6 sm:py-8 lg:px-8">
        <CommentForm blog_id={blog_id} setComments={setComments} />
      </section>
      <section className="border-green grid gap-4 rounded-md border bg-green-50 px-4 py-6 sm:gap-6 sm:px-6 sm:py-8 lg:px-8">
        <CommentList
          comments={comments}
          total={total}
          handleShowAllComments={handleShowAllComments}
          setComments={setComments}
        />
      </section>
    </div>
  )
}

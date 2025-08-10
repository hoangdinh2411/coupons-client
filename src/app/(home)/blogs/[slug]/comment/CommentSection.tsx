'use client'
import { getComments } from '@/services/commentApi'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { Suspense, useEffect, useState } from 'react'
import { CommentData } from '@/types/comment.type'
import SpinnerLoading from '@/components/loading'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

interface CommentSectionProps {
  blog_id: number
}

export default function CommentSection({ blog_id }: CommentSectionProps) {
  const [comments, setComments] = useState<CommentData[]>([])
  const [total, setTotal] = useState<number>(0)
  const [showAll, setShowAll] = useState<boolean>(false)
  const [limit, setLimit] = useState(4)
  useEffect(() => {
    if (comments.length <= limit) return
    getComments(blog_id, 1, limit).then((res) => {
      if (res.success && res.data) {
        setComments(res.data?.results || [])
        setTotal(res.data?.total || 0)
        if (limit >= res.data.total) {
          setShowAll(true)
        }
      }
    })
  }, [comments, limit])

  const handleShowAllComments = () => {
    setLimit(total)
    setShowAll(true)
  }

  return (
    <div className="flex flex-col gap-6">
      <section className="border-green grid gap-4 rounded-md border bg-green-50 px-4 py-6 sm:gap-6 sm:px-6 sm:py-8 lg:px-8">
        <Suspense fallback={<SpinnerLoading />}>
          <CommentForm blog_id={blog_id} setComments={setComments} />
        </Suspense>
      </section>
      <section className="border-green grid gap-4 rounded-md border bg-green-50 px-4 py-6 sm:gap-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="space-y-4">
          <CommentList comments={comments} setComments={setComments} />
          {!showAll && comments.length > 0 && (
            <button
              onClick={handleShowAllComments}
              className="bg-green hover:bg-green/80 mt-8 flex w-fit cursor-pointer items-center gap-2 rounded-full px-7 py-2 text-lg text-white transition-colors duration-300 ease-out"
            >
              See All
              <MdOutlineArrowRightAlt />
            </button>
          )}
        </div>
      </section>
    </div>
  )
}

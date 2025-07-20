'use client'
import ButtonWithLoading from '@/components/button-with-loading/ButtonWithLoading'
import { APP_ROUTERS } from '@/helpers/config'
import { formatDisplayName } from '@/helpers/format'
import { sendComment } from '@/services/commentApi'
import UseAppStore from '@/stores/app.store'
import { CommentData } from '@/types/comment.type'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction, useRef, useTransition } from 'react'
import toast from 'react-hot-toast'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

export default function CommentForm({
  blog_id,
  setComments,
}: {
  blog_id: number
  setComments: Dispatch<SetStateAction<CommentData[]>>
}) {
  const user = UseAppStore((state) => state.user)
  const commentRef = useRef<HTMLTextAreaElement | null>(null)
  const [isPending, startTransition] = useTransition()
  const handleSubmitComment = () => {
    startTransition(async () => {
      if (commentRef.current) {
        const content = commentRef.current.value.trim()
        if (!content) {
          toast.error('Please, write something')
          return
        }

        const res = await sendComment({
          blog_id,
          content,
        })
        if (res.success && res.data) {
          setComments((prev) => [res.data as CommentData, ...prev])
          return
        }
        toast.error(res.message || 'Cannot comment this blog')
      }
    })
  }
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-olive-green text-xl font-semibold capitalize">
          Write a Comment
        </span>
      </div>
      <div className="border-green h-[1px] w-full border-b border-dashed" />

      {user ? (
        <form className="space-y-6">
          <div className="flex w-full flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="relative block h-14 w-14 overflow-hidden rounded-full">
                <Image
                  fill
                  sizes="auto"
                  priority
                  src={'/images/no-img.webp'}
                  alt={formatDisplayName(user)}
                />
              </div>
              <p>
                <b className="text-green text-lg font-bold">
                  {formatDisplayName(user)}
                </b>
              </p>
            </div>
            <label className="text-olive-green block text-lg font-semibold">
              Comment
            </label>
            <textarea
              ref={commentRef}
              className="focus:border-green focus:ring-green/20 w-full rounded-lg border border-gray-400 bg-white p-4 transition-all duration-200 focus:ring-2"
              rows={4}
              placeholder="Write your comment here..."
              name="comment_content"
              required
            />
          </div>
          <ButtonWithLoading
            isPending={isPending}
            className="w-fit"
            onClick={handleSubmitComment}
          >
            Submit Comment
            <MdOutlineArrowRightAlt />
          </ButtonWithLoading>
        </form>
      ) : (
        <Link href={APP_ROUTERS.SIGN_IN} className="btn-primary w-fit">
          Login
        </Link>
      )}
    </div>
  )
}

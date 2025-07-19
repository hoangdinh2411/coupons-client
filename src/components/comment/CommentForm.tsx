'use client'
import { APP_ROUTERS } from '@/helpers/config'
import { formatDisplayName } from '@/helpers/format'
import UseAppStore from '@/stores/app.store'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

export default function CommentForm() {
  const user = UseAppStore((state) => state.user)
  const commentRef = useRef<HTMLTextAreaElement | null>(null)
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
          <button className="btn-primary w-fit">
            Submit Comment
            <MdOutlineArrowRightAlt />
          </button>
        </form>
      ) : (
        <Link href={APP_ROUTERS.SIGN_IN} className="btn-primary w-fit">
          Login
        </Link>
      )}
    </div>
  )
}

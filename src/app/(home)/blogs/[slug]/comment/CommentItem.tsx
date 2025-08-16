'use client'
import ButtonWithLoading from '@/components/button-with-loading/ButtonWithLoading'
import { formatDisplayName } from '@/helpers/format'
import { formatImageUrl } from '@/helpers/formatImageUrl'
import { deleteComment, updateComment } from '@/services/commentApi'
import UseAppStore from '@/stores/app.store'
import { CommentData } from '@/types/comment.type'
import dayjs from 'dayjs'
import Image from 'next/image'
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
  useTransition,
} from 'react'
import toast from 'react-hot-toast'
import { HiOutlineDotsVertical } from 'react-icons/hi'

export default function CommentItem({
  comment,
  setComments,
}: {
  comment: CommentData
  setComments: Dispatch<SetStateAction<CommentData[]>>
}) {
  const [open, setOpen] = useState<boolean>(false)
  const user = UseAppStore((state) => state.user)
  const [isEditing, setIsEditing] = useState(false)
  const commentRef = useRef<HTMLTextAreaElement | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleToggle = () => {
    setOpen(!open)
  }
  const handleToggleEdit = () => {
    setIsEditing(!isEditing)
  }
  useEffect(() => {
    function handleClickOutside() {
      if (open) {
        handleToggle()
      }
    }
    document.addEventListener('mouseup', handleClickOutside)
    return () => {
      document.removeEventListener('mouseup', handleClickOutside)
    }
  }, [open])
  const handleSubmitComment = () => {
    let content = ''
    if (commentRef.current) {
      content = commentRef.current.value.trim()
      commentRef.current.value = ''

      if (!content) {
        toast.error('Please, write something')
        return
      }
      if (content !== comment.content) {
        startTransition(async () => {
          const res = await updateComment({
            content,
            comment_id: comment.id,
          })
          if (res.success && res.data) {
            setComments((prev) =>
              prev.map((c) => (c.id === comment.id ? { ...c, content } : c)),
            )
            handleToggleEdit()
          } else {
            toast.error(res.message || 'Cannot comment this blog')
          }
        })
      } else {
        handleToggleEdit()
      }
    }
  }
  const handleDelete = async () => {
    startTransition(async () => {
      const res = await deleteComment(comment.id, comment.blog.id)
      if (res.success) {
        setComments((prev) => prev.filter((c) => c.id !== comment.id))
      } else {
        toast.error(res.message ?? 'Cannot delete the comment. Try again later')
      }
    })
  }
  return (
    <li className="flex flex-col gap-4 rounded-md bg-white p-4">
      <div className="flex items-center justify-between text-base font-medium text-gray-600">
        {dayjs(comment.updated_at).format('MMMM D, YYYY h:mm A')}
        {user && user.id === comment.user.id && (
          <div className="relative">
            <span onClick={handleToggle} className="cursor-pointer">
              <HiOutlineDotsVertical />
            </span>
            <div
              className={`absolute top-full right-0 min-w-20 ${open ? 'flex' : 'hidden'} z-10 flex-col gap-2 rounded-md bg-white shadow-lg`}
            >
              {!isEditing && (
                <p
                  className="hover:bg-light-green w-full cursor-pointer p-2"
                  onClick={handleToggleEdit}
                >
                  Edit
                </p>
              )}
              <p
                className="hover:bg-light-green w-full cursor-pointer p-2"
                onClick={handleDelete}
              >
                Delete
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="border-green h-[1px] w-full border-b border-dashed" />
      <div className="flex items-center gap-4">
        <span className="relative size-8 overflow-hidden rounded-full">
          <Image
            src={formatImageUrl(comment.user.avatar.public_id)}
            alt={formatDisplayName(comment.user)}
            fill
            priority
            sizes="32px"
          />
        </span>
        <div>
          <span className="text-olive-green text-lg font-semibold">
            {formatDisplayName(comment.user)}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {/* <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {Array.from({ length: comment_rating }, (_, i) => (
              <svg
                key={i}
                className="h-4 w-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div> */}
        {isEditing ? (
          <form className="space-y-6">
            <div className="border-green flex w-full flex-col gap-3 rounded border border-solid">
              <textarea
                ref={commentRef}
                className="w-full rounded-lg bg-white p-4 transition-all duration-200"
                rows={4}
                defaultValue={comment.content}
                placeholder="Write your comment here..."
                required
              />
            </div>
            <div className="flex items-center justify-end gap-2">
              <ButtonWithLoading
                isPending={isPending}
                className="w-fit"
                onClick={handleSubmitComment}
                type="button"
              >
                Save
              </ButtonWithLoading>
              <ButtonWithLoading
                className="w-fit bg-gray-300 text-black"
                onClick={handleToggleEdit}
              >
                Cancel
              </ButtonWithLoading>
            </div>
          </form>
        ) : (
          <p className="text-olive-green">{comment.content}</p>
        )}
      </div>
    </li>
  )
}

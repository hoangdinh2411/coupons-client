import { MdOutlineArrowRightAlt } from 'react-icons/md'
import CommentItem from './CommentItem'
import { CommentData } from '@/types/comment.type'
import { Dispatch, SetStateAction } from 'react'

interface CommentListProps {
  comments: CommentData[]
  total: number
  handleShowAllComments: () => void
  setComments: Dispatch<SetStateAction<CommentData[]>>
}

export default function CommentList({
  comments,
  total,
  handleShowAllComments,
  setComments,
}: CommentListProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-olive-green text-xl font-semibold capitalize">
          All Comments
        </span>
      </div>
      <ul className="flex flex-col gap-4 rounded-md">
        {comments.map((comment) => (
          <CommentItem
            setComments={setComments}
            key={comment.id}
            comment={comment}
          />
        ))}
      </ul>
      {comments.length < total && (
        <button
          onClick={handleShowAllComments}
          className="bg-green hover:bg-green/80 mt-8 flex w-fit cursor-pointer items-center gap-2 rounded-full px-7 py-2 text-lg text-white transition-colors duration-300 ease-out"
        >
          See All
          <MdOutlineArrowRightAlt />
        </button>
      )}
    </div>
  )
}

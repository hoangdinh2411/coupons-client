import CommentItem from './CommentItem'
import { CommentData } from '@/types/comment.type'
import { Dispatch, Fragment, SetStateAction } from 'react'

interface CommentListProps {
  comments: CommentData[]
  setComments: Dispatch<SetStateAction<CommentData[]>>
}

export default function CommentList({
  comments,
  setComments,
}: CommentListProps) {
  return (
    <Fragment>
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
    </Fragment>
  )
}

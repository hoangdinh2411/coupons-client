import { MdOutlineArrowRightAlt } from 'react-icons/md'
import CommentItem from './CommentItem'

interface CommentListProps {
  comments: {
    comment_id: string
    comment_post_id: string
    comment_author: string
    comment_content: string
    comment_published_date: string
    comment_rating: number
    comment_like: number
    comment_image: string
  }[]
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-olive-green text-xl font-semibold capitalize">
          All Comments
        </span>
      </div>
      <ul className="rounded-md bg-white p-6">
        {comments.map((comment) => (
          <CommentItem
            key={comment.comment_id}
            comment_author={comment.comment_author}
            comment_content={comment.comment_content}
            comment_published_date={comment.comment_published_date}
            comment_rating={comment.comment_rating}
            comment_like={comment.comment_like}
            comment_image={comment.comment_image}
          />
        ))}
      </ul>
      <button className="bg-green hover:bg-green/80 mt-8 flex w-fit cursor-pointer items-center gap-2 rounded-full px-7 py-2 text-lg text-white transition-colors duration-300 ease-out">
        See All
        <MdOutlineArrowRightAlt />
      </button>
    </div>
  )
}

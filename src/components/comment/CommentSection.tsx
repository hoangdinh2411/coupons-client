import CommentForm from './CommentForm'
import CommentList from './CommentList'

interface CommentSectionProps {
  blog_id: number
}

const COMMENT_POST = [
  {
    comment_id: '1',
    comment_post_id: '1',
    comment_author: 'John Doe',
    comment_content:
      "I had no idea that consolidating my student loans could simplify my repayment and potentially lower my monthly payments. This article has given me a new perspective on managing my loans. I'll definitely look into consolidation options.Thank you",
    comment_published_date: 'Published July 11, 2025',
    comment_rating: 5,
    comment_like: 178,
    comment_image: '/images/anklet_hero-367x280.webp',
  },
]

export default async function CommentSection({ blog_id }: CommentSectionProps) {
  console.log(blog_id)
  return (
    <div className="flex flex-col gap-6">
      <section className="border-green grid gap-4 rounded-md border bg-green-50 px-4 py-6 sm:gap-6 sm:px-6 sm:py-8 lg:px-8">
        <CommentForm />
      </section>
      <section className="border-green grid gap-4 rounded-md border bg-green-50 px-4 py-6 sm:gap-6 sm:px-6 sm:py-8 lg:px-8">
        <CommentList comments={COMMENT_POST} />
      </section>
    </div>
  )
}

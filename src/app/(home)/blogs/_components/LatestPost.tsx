import BlogCard from '@/components/card/BlogCard'

interface ListPostProps {
  posts: {
    post_id: string
    post_title: string
    post_published_date: string
    post_image: string
    post_category: string
    post_category_image: string
  }[]
}

export default function ListPost({ posts }: ListPostProps) {
  return (
    <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard
          key={post.post_id}
          post_id={post.post_id}
          post_title={post.post_title}
          post_published_date={post.post_published_date}
          post_image={post.post_image}
          post_category={post.post_category}
          post_category_image={post.post_category_image}
        />
      ))}
    </div>
  )
}

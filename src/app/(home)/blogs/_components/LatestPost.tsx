import BlogCard from '@/components/card/BlogCard'

interface ListPostProps {
  posts: {
    post_id: string
    post_title: string
    post_published_date: string
    post_image: string
    post_category: string
    post_category_image: string
    post_slug: string
    post_slug: string
  }[]
  type: 'grid' | 'vertical'
}

export default function ListPost({ posts, type }: ListPostProps) {
  return (
    <div
      className={
        type === 'grid'
          ? 'mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
          : 'flex flex-col gap-6'
      }
    >
      {posts.map((post) => (
        <BlogCard
          key={post.post_id}
          post_title={post.post_title}
          post_published_date={post.post_published_date}
          post_image={post.post_image}
          post_category={post.post_category}
          post_category_image={post.post_category_image}
          post_slug={post.post_slug}
          post_variant={type}
        />
      ))}
    </div>
  )
}

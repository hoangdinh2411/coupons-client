import BlogCard from '@/components/card/BlogCard'
import { BlogData } from '@/types/blog.type'

interface ListBlogProps {
  blogs: BlogData[]
  type: 'grid' | 'vertical'
}

export default function ListBlog({ blogs, type }: ListBlogProps) {
  return (
    <div
      className={
        type === 'grid'
          ? 'mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
          : 'flex flex-col gap-6'
      }
    >
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} post_variant={type} />
      ))}
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/helpers/format'
import { BlogData } from '@/types/blog.type'

interface TrendingBlogProps {
  blogs: BlogData[]
}

export default function TrendingBlog({ blogs }: TrendingBlogProps) {
  return (
    <div className="hidden w-full md:w-1/3 lg:block">
      <div className="flex flex-col">
        <h5 className="text-olive-green mb-[18px] text-lg font-bold tracking-widest uppercase">
          Trending
        </h5>
        <ul className="mb-[22px]">
          {blogs.map((blog) => (
            <li key={blog.id} className="mb-4">
              <Link
                href={`/blogs/${blog.id}`}
                className="flex items-center gap-4"
              >
                <div className="relative aspect-[1/1] w-[110px]">
                  <Image
                    src={blog.image.url || '/images/no-img.webp'}
                    alt={blog.title}
                    fill
                    priority
                    sizes="width:100px"
                    className="w-full"
                  />
                </div>
                <div className="group flex-1 text-left">
                  <h3 className="text-olive-green group-hover:text-green mb-2">
                    {blog.title}
                  </h3>
                  <span className="text-olive-green group-hover:text-green text-xs">
                    Published {formatDate(blog.created_at)}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

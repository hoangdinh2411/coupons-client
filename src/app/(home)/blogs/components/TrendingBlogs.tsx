import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/helpers/format'
import { use } from 'react'
import { getTrendingBlogs } from '@/services/blogApi'

export default function TrendingBlogs() {
  const res = use(getTrendingBlogs())
  if (!res.success || !res.data) return null
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <h5 className="text-olive-green mb-[18px] text-lg font-bold tracking-widest uppercase">
          Trending
        </h5>
        <ul className="mb-[22px]">
          {res.data.map((blog) => (
            <li key={blog.id} className="mb-4">
              <Link
                href={`/blogs/${blog.slug}`}
                className="flex items-start gap-4"
              >
                <div className="relative aspect-[1/0.7] w-[110px]">
                  <Image
                    src={blog.image.url || '/images/no-img.webp'}
                    alt={blog.title}
                    fill
                    priority
                    sizes="width:100px"
                    className="w-full object-cover"
                  />
                </div>
                <div className="group flex-1 text-left">
                  <h3 className="text-olive-green group-hover:text-green mb-2 leading-5">
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

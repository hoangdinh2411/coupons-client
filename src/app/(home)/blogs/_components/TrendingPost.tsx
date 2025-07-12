import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/helpers/format'

interface TrendingPostProps {
  posts: {
    post_id: string
    post_title: string
    post_published_date: string
    post_image: string
  }[]
}

export default function TrendingPost({ posts }: TrendingPostProps) {
  return (
    <ul className="mb-[22px]">
      {posts.map((post) => (
        <li key={post.post_id} className="mb-4">
          <Link
            href={`/blogs/${post.post_id}`}
            className="flex items-center gap-4"
          >
            <div className="relative aspect-[1/1] w-[110px]">
              <Image
                src={post.post_image}
                alt={post.post_title}
                fill
                priority
                sizes="width:100px"
                className="w-full"
                objectFit="contain"
              />
            </div>
            <div className="group flex-1 text-left">
              <h3 className="text-olive-green group-hover:text-green mb-2">
                {post.post_title}
              </h3>
              <span className="text-olive-green group-hover:text-green text-xs">
                {formatDate(post.post_published_date)}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

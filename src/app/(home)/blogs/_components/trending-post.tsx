import Image from 'next/image'
import Link from 'next/link'

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
    <>
      <ul className="mb-[22px]">
        {posts.map((post) => (
          <li key={post.post_id} className="mb-4">
            <Link
              href={`/blogs/${post.post_id}`}
              className="flex items-center gap-4"
            >
              <div className="relative w-[110px]">
                <Image
                  src={post.post_image}
                  alt={post.post_title}
                  width={200}
                  height={152}
                  className="w-full"
                />
              </div>
              <div className="w-[calc(100% - 140px)] group text-left">
                <h3 className="mb-2 text-[##323232] group-hover:text-[#741fa2]">
                  {post.post_title}
                </h3>
                <span className="text-xs text-[#323232] group-hover:text-[#741fa2]">
                  {post.post_published_date}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

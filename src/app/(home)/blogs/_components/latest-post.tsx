import Image from 'next/image'
import Link from 'next/link'

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
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post) => (
        <div key={post.post_id}>
          {/* post image */}
          <Link href={`/blogs/${post.post_id}`}>
            <Image
              src={post.post_image}
              alt={post.post_title}
              width={368}
              height={280}
              className="h-auto w-full"
            />
          </Link>
          {/* post details */}
          <div className="group border-light-green bg-gray-border-gray-200 relative border-2 px-10 py-[30px] text-left transition-all duration-300 ease-out hover:bg-[#653297]">
            <span className="absolute -top-[10%] size-[46px] rounded-full border-2 border-gray-200">
              <Image
                src={post.post_category_image}
                alt=""
                width={46}
                height={46}
              />
            </span>
            <Link href={`/blogs/${post.post_id}`}>
              <div className="mt-3">
                <span className="text-md text-olive-green font-bold tracking-wide uppercase group-hover:text-white">
                  {post.post_category}
                </span>
              </div>
              <div>
                <h3 className="text-olive-green mb-2 min-h-[195px] text-[28px] font-bold group-hover:text-white">
                  {post.post_title}
                </h3>
                <span className="text-olive-green group-hover:text-white">
                  {post.post_published_date}
                </span>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

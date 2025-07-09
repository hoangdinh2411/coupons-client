import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  post_id: string
  post_title: string
  post_published_date: string
  post_image: string
  post_category?: string
  post_category_image?: string
}

export default function BlogCard({
  post_id,
  post_title,
  post_published_date,
  post_image,
  post_category,
  post_category_image,
}: BlogCardProps) {
  return (
    <div>
      <div className="group border-light-green bg-gray-border-gray-200 relative flex flex-row border-2 md:flex-col">
        {/* post image */}
        <Link href={`/blogs/${post_id}`} className="w-1/4 shrink-0 md:w-full">
          <Image
            src={post_image}
            alt={post_title}
            width={368}
            height={280}
            className="h-full w-full object-cover md:h-auto"
          />
        </Link>

        {/* post details */}
        <div className="relative flex-1 px-6 py-4 text-left transition-all duration-300 ease-out group-hover:bg-[#653297] lg:px-10 lg:py-[30px]">
          {post_category_image && (
            <span className="absolute -top-[10%] right-10 hidden size-[46px] rounded-full border-2 border-gray-200 lg:block">
              <Image src={post_category_image} alt="" width={46} height={46} />
            </span>
          )}
          <Link href={`/blogs/${post_id}`}>
            {post_category && (
              <div className="flex h-full flex-col justify-between gap-2">
                <div>
                  <span className="text-md text-olive-green font-bold tracking-wide uppercase group-hover:text-white">
                    {post_category}
                  </span>
                  <h3 className="text-olive-green mt-2 line-clamp-2 text-base font-bold group-hover:text-white md:text-xl lg:line-clamp-none lg:min-h-[195px] lg:text-[28px]">
                    {post_title}
                  </h3>
                </div>
                <span className="text-olive-green text-sm group-hover:text-white md:text-base">
                  {post_published_date}
                </span>
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  )
}

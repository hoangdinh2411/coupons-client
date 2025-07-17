import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/helpers/format'
import { BlogData } from '@/types/blog.type'

interface BlogCardProps {
  blog: BlogData
  post_variant: 'vertical' | 'grid'
}

export default function BlogCard({ blog, post_variant }: BlogCardProps) {
  const isVertical = post_variant === 'vertical'

  return (
    <div
      className={`group relative flex ${isVertical ? 'flex-col' : 'border-light-green bg-gray-border-gray-200 flex-row border-2 md:flex-col'}`}
    >
      {/* post image */}
      <Link
        href={`/blogs/${blog.slug}`}
        className={`${isVertical ? 'w-full' : 'w-1/4'} relative aspect-[1] max-h-[280px] max-w-[368px] md:w-full`}
      >
        <Image
          src={blog.image.url || '/images/no-img.webp'}
          alt={blog.title}
          fill
          priority
          sizes="auto"
          className={`h-full w-full object-cover ${!isVertical ? 'md:h-auto' : ''}`}
        />
        <span
          className={`absolute -bottom-2 ${isVertical ? 'left-6' : 'right-6'} hidden size-[40px] rounded-full border-2 border-gray-200 lg:block`}
        >
          <Image
            src={blog.topic?.image.url || '/images/no-img.webp'}
            alt={blog.topic?.name}
            fill
            sizes="auto"
            priority
          />
        </span>
      </Link>

      {/* post details */}
      <div
        className={`relative flex-1 text-left ${isVertical ? '' : 'group-hover:bg-green px-6 py-4 transition-all duration-300 ease-out lg:px-10 lg:py-[30px]'}`}
      >
        <Link href={`/blogs/${blog.slug}`}>
          {blog.topic && (
            <div
              className={`flex h-full flex-col justify-between gap-2 ${isVertical ? 'mt-6' : ''}`}
            >
              <div>
                <span
                  className={`text-md font-bold tracking-wide uppercase ${
                    isVertical
                      ? 'text-green'
                      : 'text-olive-green group-hover:text-white'
                  }`}
                >
                  {blog.topic.name}
                </span>
                <h3
                  className={`mt-2 line-clamp-2 text-base font-bold md:text-xl lg:line-clamp-none ${
                    isVertical
                      ? 'text-olive-green hover:text-green transition-all duration-300 ease-out lg:text-[22px]'
                      : 'text-olive-green group-hover:text-white lg:min-h-[195px] lg:text-[28px]'
                  }`}
                >
                  {blog.title}
                </h3>
              </div>
              <span
                className={`text-olive-green group-hover:text-green text-sm md:text-base`}
              >
                Published {formatDate(blog.created_at)}
              </span>
            </div>
          )}
        </Link>
      </div>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/helpers/format'
import { BlogData } from '@/types/blog.type'
import { formatImageUrl } from '@/helpers/formatImageUrl'

interface BlogCardProps {
  blog: BlogData
  post_variant: 'vertical' | 'grid' | 'row'
}

export default function BlogCard({ blog, post_variant }: BlogCardProps) {
  if (post_variant === 'row') {
    return (
      <div className="group hover:bg-green relative flex w-full flex-row p-2.5">
        <Link
          href={`/blogs/${blog.slug}`}
          className="relative aspect-[1] max-h-[200px] min-h-auto w-1/4 min-w-[200px]"
        >
          <Image
            src={formatImageUrl(blog.image.public_id)}
            alt={blog.title}
            fill
            priority
            loading="lazy"
            sizes="auto"
            className="h-full w-full object-cover"
          />
          <span className="absolute -top-4 -right-4 hidden size-[40px] overflow-hidden rounded-full border-2 border-gray-200 lg:block">
            <Image
              src={formatImageUrl(blog.topic.image.public_id)}
              alt={blog.topic?.name}
              fill
              sizes="auto"
              priority
            />
          </span>
        </Link>

        <div className="relative ml-10 w-full flex-1 text-left transition-all duration-300 ease-out">
          <Link href={`/blogs/${blog.slug}`}>
            {blog.topic && (
              <div className="flex h-full flex-col justify-between gap-2">
                <div className="flex flex-col items-start justify-between gap-3">
                  <span className="text-green text-xs font-bold tracking-wide uppercase group-hover:text-white">
                    {blog.topic.name}
                  </span>
                  <h3 className="text-olive-green text-xl font-bold group-hover:text-white">
                    {blog.title}
                  </h3>
                  <h6 className="text-olive-green mt-auto line-clamp-3 text-base group-hover:text-white">
                    {blog.meta_data?.description}
                  </h6>
                </div>
              </div>
            )}
          </Link>
        </div>
      </div>
    )
  }

  if (post_variant === 'grid') {
    return (
      <div className="group border-light-green bg-gray-border-gray-200 relative flex h-full border-2 lg:flex-col">
        {/* Image */}
        <Link
          href={`/blogs/${blog.slug}`}
          className="relative aspect-[1] h-full w-32 lg:size-full"
        >
          <Image
            src={formatImageUrl(blog.image.public_id)}
            alt={blog.title}
            fill
            priority
            sizes="auto"
            className="size-full object-cover md:h-auto"
          />
          <span className="absolute -bottom-2 left-6 z-10 line-clamp-1 hidden size-[40px] overflow-hidden rounded-full border-2 border-gray-200 lg:block">
            <Image
              src={formatImageUrl(blog.topic.image.public_id)}
              alt={blog.topic?.name}
              fill
              sizes="auto"
              priority
            />
          </span>
        </Link>

        {/* Content */}
        <div className="group-hover:bg-green relative flex-1 px-4 py-4 text-left transition-all duration-300 ease-out lg:px-10 lg:py-[30px]">
          <Link href={`/blogs/${blog.slug}`}>
            {blog.topic && (
              <div className="flex h-full flex-col justify-between gap-2">
                <div>
                  <span className="text-md text-olive-green font-bold tracking-wide uppercase group-hover:text-white">
                    {blog.topic.name}
                  </span>
                  <h3 className="text-olive-green mt-2 line-clamp-2 text-base font-bold group-hover:text-white md:text-xl lg:line-clamp-none lg:min-h-[195px] lg:text-[28px]">
                    {blog.title}
                  </h3>
                </div>
                <span className="text-olive-green group-hover:text-green text-sm md:text-base">
                  Published {formatDate(blog.updated_at)}
                </span>
              </div>
            )}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="group relative flex flex-col">
      {/* Image */}
      <Link
        href={`/blogs/${blog.slug}`}
        className="relative aspect-[1] max-h-[280px] w-full"
      >
        <Image
          src={formatImageUrl(blog.image.public_id)}
          alt={blog.title}
          fill
          priority
          sizes="auto"
          className="h-full w-full object-cover"
        />
        <span className="absolute -bottom-2 left-6 hidden size-[40px] overflow-hidden rounded-full border-2 border-gray-200 lg:block">
          <Image
            src={formatImageUrl(blog.topic.image.public_id)}
            alt={blog.topic?.name}
            fill
            sizes="auto"
            priority
          />
        </span>
      </Link>

      {/* Content */}
      <div className="relative flex-1 text-left">
        <Link href={`/blogs/${blog.slug}`}>
          {blog.topic && (
            <div className="mt-6 flex h-full flex-col justify-between gap-2">
              <div>
                <span className="text-md text-green font-bold tracking-wide uppercase">
                  {blog.topic.name}
                </span>
                <h3 className="text-olive-green hover:text-green mt-2 line-clamp-2 text-base font-bold transition-all duration-300 ease-out md:text-xl lg:line-clamp-none lg:text-[22px]">
                  {blog.title}
                </h3>
              </div>
              <span className="text-olive-green group-hover:text-green text-sm md:text-base">
                Published {formatDate(blog.updated_at)}
              </span>
            </div>
          )}
        </Link>
      </div>
    </div>
  )
}

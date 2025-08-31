import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

interface CategoryHeaderProps {
  title: string
  image?: string
  href: string
}

export default function CategoryHeader({
  title,
  image,
  href,
}: CategoryHeaderProps) {
  return (
    <div className="mb-[30px] flex items-center justify-between">
      <Link href={href} className="flex items-center gap-4 hover:underline">
        {image && (
          <Image
            src={image}
            alt={title}
            width={160}
            height={160}
            className="size-7 lg:size-10"
          />
        )}
        <h5 className="text-olive-green text-base font-bold tracking-widest uppercase lg:text-lg">
          {title}
        </h5>
      </Link>
      <Link
        href={href}
        className="text-olive-green hidden items-center text-sm font-bold tracking-widest uppercase md:flex lg:text-lg"
      >
        view all
        <FaChevronRight className="ml-2 inline-block size-3" />
      </Link>
    </div>
  )
}

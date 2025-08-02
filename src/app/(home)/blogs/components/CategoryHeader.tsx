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
      <div className="flex items-center gap-4">
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
      </div>
      <Link
        href={href}
        className="text-olive-green flex items-center text-sm font-bold tracking-widest uppercase lg:text-lg"
      >
        view all
        <FaChevronRight className="ml-2 inline-block size-3" />
      </Link>
    </div>
  )
}

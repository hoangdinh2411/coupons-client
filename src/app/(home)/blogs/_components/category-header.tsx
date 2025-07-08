import Image from 'next/image'
import Link from 'next/link'

interface CategoryHeaderProps {
  title: string
  image: string
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
        <Image
          src={image}
          alt={title}
          width={160}
          height={160}
          className="size-10"
        />
        <h5 className="text-lg font-bold tracking-widest text-[#323232] uppercase">
          {title}
        </h5>
      </div>
      <Link
        href={href}
        className="text-lg font-bold tracking-widest text-[#323232] uppercase"
      >
        view all {'>'}
      </Link>
    </div>
  )
}

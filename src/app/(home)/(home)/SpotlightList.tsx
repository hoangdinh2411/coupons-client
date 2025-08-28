import Image from 'next/image'
import Link from 'next/link'

interface SpotlightListProps {
  spotlights: {
    spotlight_id: string
    spotlight_title: string
    spotlight_description: string
    spotlight_image: string
    spotlight_link: string
  }[]
}

export default function SpotlightList({ spotlights }: SpotlightListProps) {
  return (
    <div>
      {spotlights.map((spotlight) => (
        <Link key={spotlight.spotlight_id} href={spotlight.spotlight_link}>
          <div className="mb-4 flex items-center">
            <div className="relative aspect-[1/1] w-36 overflow-hidden rounded-2xl">
              <Image
                src={spotlight.spotlight_image}
                alt={`${spotlight.spotlight_title} - spotlight feature image`}
                fill
                className="object-contain"
                loading="lazy"
                sizes="144px"
              />
            </div>
            <div className="p-4">
              <p className="mb-1 text-sm font-semibold uppercase">
                {spotlight.spotlight_title}
              </p>
              <h2 className="text-gray-600">
                {spotlight.spotlight_description}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

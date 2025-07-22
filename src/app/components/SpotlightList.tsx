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
            <Image
              className="h-32 w-36 rounded-2xl object-cover"
              src={spotlight.spotlight_image}
              alt={spotlight.spotlight_title}
              width={250}
              height={128}
              loading="lazy"
            />
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

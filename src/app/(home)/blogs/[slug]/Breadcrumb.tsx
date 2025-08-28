import { APP_ROUTERS } from '@/helpers/config'
import Link from 'next/link'
import React from 'react'

export default function Breadcrumb({ slug }: { slug: string }) {
  return (
    <div className="flex items-center justify-start gap-2 text-sm md:text-base">
      <Link className="hover:underline" href={APP_ROUTERS.INDEX}>
        Home
      </Link>
      &#8250;
      <Link className="hover:underline" href={APP_ROUTERS.BLOGS}>
        Blog
      </Link>
      &#8250;
      <span className="text-green flex-1 truncate capitalize">{slug}</span>
    </div>
  )
}

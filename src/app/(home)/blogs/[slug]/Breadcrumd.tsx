import { APP_ROUTERS } from '@/helpers/config'
import Link from 'next/link'
import React from 'react'

export default function Breadcrumb({ slug }: { slug: string }) {
  return (
    <div className="flex items-center justify-start gap-2">
      <Link href={APP_ROUTERS.INDEX}>Home</Link>
      &#8250;
      <Link href={APP_ROUTERS.BLOGS}>Blog</Link>
      &#8250;
      <Link
        href={`blogs/${slug}`}
        className="text-green pointer-events-none capitalize"
      >
        {slug}
      </Link>
    </div>
  )
}

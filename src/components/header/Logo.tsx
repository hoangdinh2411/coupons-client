import { APP_ROUTERS } from '@/helpers/config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link
      href={APP_ROUTERS.INDEX}
      className="relative h-10 w-10 md:h-12 md:w-40"
    >
      <Image
        src="/images/green-logo.png"
        alt="Logo"
        fill
        priority
        sizes="(max-width: 768px) 40px"
        className="block object-contain md:hidden"
      />
      <Image
        src="/images/logo-with-white-text-and-green-logo.png"
        alt="Logo"
        fill
        priority
        sizes="(min-width: 768px) 160px"
        className="hidden object-contain md:block"
      />
    </Link>
  )
}

export default Logo

'use client'
import { useIsMobile } from '@/app/hooks/useIsMobile'
import { APP_ROUTERS } from '@/helpers/config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  const isMobile = useIsMobile(768)

  if (isMobile) {
    return (
      <Link
        href={APP_ROUTERS.INDEX}
        className="relative block aspect-auto h-10 w-10 md:h-12 md:w-40"
      >
        <div className="relative block aspect-square">
          <Image
            src="/images/green-logo.png"
            alt="Logo"
            fill
            priority
            objectFit="contain"
            sizes="(max-width: 768px) 40px"
          />
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={APP_ROUTERS.INDEX}
      className="relative block aspect-auto h-10 w-10 md:h-12 md:w-40"
    >
      <div className="relative hidden aspect-[10/3] md:block">
        <Image
          src="/images/logo-with-white-text-and-green-logo.png"
          alt="Logo"
          fill
          priority
          objectFit="contain"
          sizes="(min-width: 768px) 160px"
        />
      </div>
    </Link>
  )
}

export default Logo

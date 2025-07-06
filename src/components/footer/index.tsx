import { APP_ROUTERS } from '@/helpers/config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TopFooter from './TopFooter'
import BottomFooter from './BottomFooter'

const Footer = () => {
  return (
    <footer className="bg-olive-green max-w-screen overflow-clip">
      <div className="justify-left relative flex items-center p-4">
        <Link
          href={APP_ROUTERS.INDEX}
          className="relative block aspect-auto h-[100px] w-[200px]"
        >
          <Image
            src="/images/logo-with-white-text-and-green-logo.png"
            alt="Logo"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 200px, (max-width: 1200px) 200px, 80px"
          />
        </Link>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 text-white md:px-8 lg:mt-10">
        <TopFooter />
        <BottomFooter />
      </div>
    </footer>
  )
}

export default Footer

import { APP_ROUTERS } from '@/helpers/config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

export default function Header() {
  return (
    <header>
      <div className="bg-light-green">
        <p className=" text-black flex justify-center items-center text-sm h-9 ">
          Save up to 20% on all Coupons & Accessories with “FG6556KD” code
        </p>
      </div>
      <nav className="bg-olive-green w-full relative py-4 flex gap-4 items-center ">
        <Link
          href={APP_ROUTERS.INDEX}
          className="relative w-40 aspect-auto h-12 block "
        >
          <Image
            src="/images/logo-with-white-text-and-green-logo.png"
            alt="Logo"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 120px, (max-width: 1200px) 200px, 80px"
          />
        </Link>
        <Menu />
      </nav>
    </header>
  )
}

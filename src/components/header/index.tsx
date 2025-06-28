import { APP_ROUTERS } from '@/helpers/config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import SearchBar from './SearchBar'
import Actions from './Actions'
import MobileActions from './MobileActions'
export default function Header() {
  return (
    <header>
      <div className="bg-light-green">
        <p className=" text-black flex justify-center items-center text-sm h-10 max-w-[1280px] m-auto ">
          Save up to 20% on all Coupons & Accessories with “FG6556KD” code
        </p>
      </div>
      <div className="bg-olive-green w-full ">
        <nav className=" w-full relative py-4 flex gap-4 items-center max-w-[1280px] p-4 m-auto">
          <Link
            href={APP_ROUTERS.INDEX}
            className="relative w-10 lg:w-40 aspect-auto h-12 block "
          >
            <Image
              src="/images/logo-with-white-text-and-green-logo.png"
              alt="Logo"
              fill
              priority
              className="object-contain lg:block hidden"
              sizes="(max-width: 768px) 120px, (max-width: 1200px) 200px, 80px"
            />
            <Image
              src="/images/green-logo.png"
              alt="Logo"
              fill
              priority
              className="object-contain lg:hidden block"
              sizes="(max-width: 768px) 120px, (max-width: 1200px) 200px, 80px"
            />
          </Link>
          <Menu />
          <SearchBar />
          <Actions />
          <MobileActions />
        </nav>
      </div>
    </header>
  )
}

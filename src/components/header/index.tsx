import { APP_ROUTERS } from '@/helpers/config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import SearchBar from './SearchBar'
import Actions from './Actions'
import MobileActions from './MobileActions'
import { getMenu } from '@/services/clientApi'
export default async function Header() {
  const res = await getMenu()

  if (!res.success || !res.data) {
    throw new Error(res?.message ?? 'cannot fetch menu')
  }

  return (
    <header>
      <div className="bg-light-green">
        <p className="m-auto flex h-10 max-w-[1280px] items-center justify-center text-sm text-black">
          Save up to 20% on all Coupons & Accessories with “FG6556KD” code
        </p>
      </div>
      <div className="bg-olive-green w-full">
        <nav className="relative m-auto flex w-full max-w-[1280px] items-center gap-4 p-4 py-4">
          <Link
            href={APP_ROUTERS.INDEX}
            className="relative block aspect-auto h-12 w-10 md:w-40"
          >
            <Image
              src="/images/logo-with-white-text-and-green-logo.png"
              alt="Logo"
              fill
              priority
              className="hidden object-contain md:block"
              sizes="(max-width: 1200px) 200px, 80px"
            />
            <Image
              src="/images/green-logo.png"
              alt="Logo"
              fill
              priority
              className="block object-contain md:hidden"
              sizes="(max-width: 768px) 120px"
            />
          </Link>
          <Menu data={res.data} />
          <SearchBar popularStores={res.data.popular} />
          <Actions />
          <MobileActions />
        </nav>
      </div>
    </header>
  )
}

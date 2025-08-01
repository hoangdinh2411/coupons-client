import { APP_ROUTERS } from '@/helpers/config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import SearchBar from './SearchBar'
import Actions from './Actions'
import MobileActions from './MobileActions'
import { getMenu } from '@/services/clientApi'
import { getUserProfile } from '@/services/userApi'
import { signOutApi } from '@/services/authApi'
export default async function Header() {
  const [menuRes, profileRes] = await Promise.all([getMenu(), getUserProfile()])

  if (!menuRes.success || !menuRes.data) {
    throw new Error(menuRes?.message ?? 'cannot fetch menu')
  }
  if (!profileRes.success || !profileRes.data) {
    await signOutApi()
  }

  const menu = menuRes.data
  const profile = profileRes.data

  return (
    <header>
      <div className="bg-light-green">
        <p className="text-olive-green m-auto flex h-10 max-w-(--max-width) items-center justify-center text-sm">
          Join our newsletter and get the best-verified deals delivered to your inbox weekly!
        </p>
      </div>
      <div className="bg-olive-green w-full">
        <nav className="relative m-auto flex w-full max-w-(--max-width) items-center gap-4 p-4 py-4">
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
          <Menu data={menu} />
          <SearchBar popularStores={menu.popular} />
          <Actions profile={profile} />
          <MobileActions />
        </nav>
      </div>
    </header>
  )
}

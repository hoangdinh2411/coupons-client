'use client'
import { getMenu } from '@/services/clientApi'
import { getUserProfile } from '@/services/userApi'
import Actions from './Actions'
import Logo from './Logo'
import Menu from './Menu'
import MobileActions from './MobileActions'
import SearchBar from './SearchBar'
import { Suspense, useEffect } from 'react'
import UseAppStore from '@/stores/app.store'

export default function Header() {
  const { setUser, setMenu, signOut } = UseAppStore((state) => state)
  useEffect(() => {
    async function init() {
      const [menuRes, profileRes] = await Promise.all([
        getMenu(),
        getUserProfile(),
      ])

      if (!menuRes.success || !menuRes.data) {
        throw new Error(menuRes?.message ?? 'cannot fetch menu')
      }
      if (!profileRes.success || !profileRes.data) {
        await signOut()
      }
      if (menuRes.data) {
        setMenu(menuRes.data)
      }
      if (profileRes.data) {
        setUser(profileRes.data)
      }
    }
    init()
  }, [])

  return (
    <header>
      <div className="bg-light-green">
        <p className="text-olive-green m-auto line-clamp-1 flex h-10 max-w-(--max-width) items-center justify-center px-2 text-center text-[10px] sm:text-sm">
          Join our newsletter and get the best-verified deals delivered to your
          inbox weekly!
        </p>
      </div>
      <div className="bg-olive-green w-full">
        <nav className="relative m-auto flex w-full max-w-(--max-width) items-center gap-4 p-4 py-4">
          <Logo />
          <Suspense>
            <Menu />
            <SearchBar />
            <Actions />
            <MobileActions />
          </Suspense>
        </nav>
      </div>
    </header>
  )
}

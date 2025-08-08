import { signOutApi } from '@/services/authApi'
import { getMenu } from '@/services/clientApi'
import { getUserProfile } from '@/services/userApi'
import Actions from './Actions'
import Logo from './Logo'
import Menu from './Menu'
import MobileActions from './MobileActions'
import SearchBar from './SearchBar'

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
        <p className="text-olive-green m-auto flex h-10 max-w-(--max-width) items-center justify-center px-2 text-center !text-xs sm:text-sm">
          Join our newsletter and get the best-verified deals delivered to your
          inbox weekly!
        </p>
      </div>
      <div className="bg-olive-green w-full">
        <nav className="relative m-auto flex w-full max-w-(--max-width) items-center gap-4 p-4 py-4">
          <Logo />
          <Menu data={menu} />
          <SearchBar popularStores={menu.popular} />
          <Actions profile={profile} />
          <MobileActions />
        </nav>
      </div>
    </header>
  )
}

import { getMenu } from '@/services/clientApi'
import Actions from './Actions'
import Logo from './Logo'
import Menu from './Menu'
import MobileActions from './MobileActions'
import SearchBar from './SearchBar'

export default async function Header() {
  const menuRes = await getMenu()
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
          <Menu menu={menuRes.data ?? null} />
          <SearchBar menu={menuRes.data ?? null} />
          <Actions />
          <MobileActions menu={menuRes.data ?? null} />
        </nav>
      </div>
    </header>
  )
}

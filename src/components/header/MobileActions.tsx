'use client'
import { APP_ROUTERS } from '@/helpers/config'
import { formatDisplayName } from '@/helpers/format'
import UseAppStore from '@/stores/app.store'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
import {
  MdOutlineKeyboardArrowDown,
  // MdOutlineKeyboardArrowUp,
} from 'react-icons/md'
export default function MobileActions() {
  const { user } = UseAppStore((state) => state)
  // const [selectedStore, setSelectedStore] = useState('')
  // const [selectedTopic, setSelectedTopic] = useState('')
  return (
    <div className="block lg:hidden">
      <input type="checkbox" name="" id="mobile-menu" className="peer" hidden />
      <label htmlFor="mobile-menu">
        <IoIosMenu size={32} color="white" className="cursor-pointer" />
      </label>
      <div className="fixed top-0 left-0 z-100 hidden h-full w-full overflow-y-scroll bg-white peer-checked:block">
        <div className="relative shadow-lg">
          <div className="relative m-auto flex w-full max-w-(--max-width) items-center justify-around gap-4 p-4 py-4">
            <Link
              href={APP_ROUTERS.INDEX}
              className="relative mr-auto aspect-auto h-12 w-40"
            >
              <Image
                src="/images/logo-with-text-and-green-logo.png"
                alt="Logo"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 120px, (max-width: 1200px) 200px, 80px"
              />
            </Link>
            <label htmlFor="mobile-menu" className="mr-4">
              <IoMdClose size={32} className="cursor-pointer" />
            </label>
          </div>
          <div className="flex items-center justify-center gap-4 px-4 py-8 sm:px-8">
            {user ? (
              <Fragment>
                <p>Welcome back: </p>
                <p> {formatDisplayName(user)}</p>
              </Fragment>
            ) : (
              <Fragment>
                <Link
                  className="btn-primary h-12 max-w-[320px] border-1 border-solid border-gray-300 bg-white font-extrabold text-black"
                  href={APP_ROUTERS.SIGN_IN}
                >
                  Sign In
                </Link>
                <Link
                  className="btn-primary h-12 max-w-[320px] font-extrabold"
                  href={APP_ROUTERS.SIGN_UP}
                >
                  Join for Free
                </Link>
              </Fragment>
            )}
          </div>
        </div>
        <nav className="px-2 py-3">
          <div className="flex flex-col items-start justify-start border-b-1 border-solid border-gray-300">
            <div className="w-full px-4 py-3">
              <Link href={APP_ROUTERS.HOT_DEALS} className="font-bold">
                Hot Deals
              </Link>
            </div>

            {/* Stores */}
            <div className="w-full px-4">
              <p className="w-full py-3 font-bold uppercase">Browser Stores</p>
              <div className="w-full pl-4 font-bold">
                <div>
                  <div className="flex w-full cursor-pointer items-center gap-2 py-2 text-sm">
                    <span className="font-bold">Popular </span>
                    <MdOutlineKeyboardArrowDown className="block" />
                    {/* <MdOutlineKeyboardArrowUp className="block" /> */}
                  </div>
                  <div className="grid grid-cols-2 gap-2 pl-4">
                    <Link
                      href="#"
                      className="py-1 text-sm font-semibold hover:underline"
                    >
                      AAA
                    </Link>
                    <Link
                      href="#"
                      className="py-1 text-sm font-semibold hover:underline"
                    >
                      BBB
                    </Link>
                    <Link
                      href="#"
                      className="py-1 text-sm font-semibold hover:underline"
                    >
                      CCC
                    </Link>
                    <Link
                      href="#"
                      className="py-1 text-sm font-semibold hover:underline"
                    >
                      DDD
                    </Link>
                  </div>
                </div>
                {/*  All */}
                <div className="w-full font-bold">
                  <div className="flex w-full cursor-pointer items-center gap-2 py-2 text-sm">
                    <Link
                      href={APP_ROUTERS.ALL_CATEGORIES}
                      className="font-bold hover:underline"
                    >
                      All Categories{' '}
                    </Link>
                  </div>
                </div>
                <div className="w-full font-bold">
                  <div className="flex w-full cursor-pointer items-center gap-2 py-2 text-sm">
                    <Link
                      href={APP_ROUTERS.STORES}
                      className="font-bold hover:underline"
                    >
                      All Stores{' '}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* BLogs */}
            <div className="w-full px-4">
              <input type="checkbox" className="peer" id="blogs" hidden />
              <label
                htmlFor="blogs"
                className="flex w-full gap-2 py-3 font-bold uppercase"
              >
                Blogs
                <MdOutlineKeyboardArrowDown />
              </label>

              <div className="hidden w-full pl-4 font-bold peer-checked:block">
                <div className="flex w-full cursor-pointer items-center gap-2 py-2 text-sm">
                  <Link
                    href={APP_ROUTERS.ALL_TOPICS}
                    className="font-bold hover:underline"
                  >
                    All Topics{' '}
                  </Link>
                </div>
                <div className="flex w-full cursor-pointer items-center gap-2 py-2 text-sm">
                  <span className="font-bold">Topic 1 </span>
                  {/* <MdOutlineKeyboardArrowUp className="block" /> */}
                </div>
                <div className="flex flex-col gap-2 pl-4">
                  <Link
                    href="#"
                    className="py-1 text-sm font-semibold hover:underline"
                  >
                    AAA
                  </Link>
                  <Link
                    href="#"
                    className="py-1 text-sm font-semibold hover:underline"
                  >
                    BBB
                  </Link>
                </div>
              </div>
              {/*  All */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

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
  const { user, menu } = UseAppStore((state) => state)
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
              className="relative mr-auto aspect-auto h-20 w-42"
            >
              <Image
                src="/images/logo-with-text-and-green-logo.png"
                alt="Logo"
                fill
                loading="lazy"
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
              <div className="flex w-full items-center justify-around">
                <p>
                  Welcome:{' '}
                  <b className="font-semibold">
                    {' '}
                    {formatDisplayName(user)}
                  </b>{' '}
                </p>
                <Link
                  className="btn-primary text-olive-green h-12 max-w-[320px] border-1 border-solid border-gray-300 bg-white font-extrabold"
                  href={APP_ROUTERS.MY_COUPONS}
                >
                  My Coupons
                </Link>
              </div>
            ) : (
              <Fragment>
                <Link
                  className="btn-primary text-olive-green h-12 max-w-[320px] border-1 border-solid border-gray-300 bg-white font-extrabold"
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
            <div className="w-full px-2 py-3 sm:px-4">
              <Link href={APP_ROUTERS.HOT_DEALS} className="font-bold">
                Hot Deals
              </Link>
            </div>

            {/* Stores */}
            <div className="w-full px-2 sm:px-4">
              <p className="w-full py-3 font-bold uppercase">Browser Stores</p>
              <div className="ml-4 flex flex-col gap-3">
                <div className="w-full font-bold">
                  <input type="checkbox" className="peer" id="popular" hidden />
                  <label
                    htmlFor="popular"
                    className="flex cursor-pointer items-center gap-2 font-bold"
                  >
                    Popular
                    <MdOutlineKeyboardArrowDown className="block" />
                  </label>
                  <div className="hidden peer-checked:block">
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {menu.popular &&
                        menu.popular.map((s) => (
                          <Link
                            key={s.id}
                            href={'/stores/' + s.slug}
                            className="py-1 text-sm font-semibold hover:underline"
                          >
                            {s.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
                {/*  All categories*/}
                <div className="w-full font-bold">
                  {menu.top_categories &&
                    menu.top_categories.map((c) => (
                      <div className="w-full py-2" key={c.id}>
                        <input
                          type="checkbox"
                          className="peer"
                          id={c.id.toString()}
                          hidden
                        />
                        <label
                          htmlFor={c.id.toString()}
                          className="flex cursor-pointer items-center gap-2 font-bold"
                        >
                          {c.name}
                          <MdOutlineKeyboardArrowDown />
                        </label>

                        <div className="hidden pl-2 peer-checked:block">
                          <div className="mt-2 grid grid-cols-2 gap-2">
                            {c.stores &&
                              c.stores.map((s) => (
                                <div className="flex flex-col gap-2" key={s.id}>
                                  <Link
                                    href={`stores/${s.slug}`}
                                    className="py-1 text-sm font-semibold hover:underline"
                                  >
                                    {s.name}
                                  </Link>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    ))}

                  <div className="flex w-full cursor-pointer items-center gap-2 py-2 text-sm">
                    <Link
                      href={APP_ROUTERS.ALL_CATEGORIES}
                      className="font-bold hover:underline"
                    >
                      All Categories{' '}
                    </Link>
                  </div>
                  <div className="w-full font-bold">
                    <div className="flex w-full cursor-pointer items-center gap-2 py-2 text-sm">
                      <Link
                        href={APP_ROUTERS.ALL_STORES}
                        className="font-bold hover:underline"
                      >
                        All Stores{' '}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BLogs */}
            <div className="w-full px-4">
              <input type="checkbox" className="peer" id="blogs" hidden />
              <label
                htmlFor="blogs"
                className="flex w-full cursor-pointer items-center gap-2 py-3 font-bold uppercase"
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
                    All Topics
                  </Link>
                </div>
                {menu?.top_topic?.map((topic) => (
                  <div className="w-full py-2" key={topic.id}>
                    <input
                      type="checkbox"
                      className="peer"
                      id={topic.id.toString()}
                      hidden
                    />
                    <label
                      htmlFor={topic.id.toString()}
                      className="flex cursor-pointer items-center gap-2 font-bold"
                    >
                      {topic.name}
                      <MdOutlineKeyboardArrowDown />
                    </label>

                    <div className="hidden pl-2 peer-checked:block">
                      <div className="mt-2 grid grid-cols-1 gap-2">
                        {topic?.blogs &&
                          topic.blogs.map((blog) => (
                            <div className="flex flex-col gap-2" key={blog.id}>
                              <Link
                                href={`/blogs/${blog.slug}`}
                                className="py-1 text-sm font-semibold hover:underline"
                              >
                                {blog.title}
                              </Link>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div className="flex flex-col gap-2">
                  <Link
                    href="#"
                    className="py-1 text-sm font-semibold hover:underline"
                  >
                    AAA
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

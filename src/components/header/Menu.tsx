'use client'
import { APP_ROUTERS } from '@/helpers/config'
import { MenuData } from '@/types/client.type'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const POPULAR_INDEX = -1
export default function Menu({ data }: { data: MenuData }) {
  const [category, setCategory] = useState<number | null>(POPULAR_INDEX)
  const [target, setTarget] = useState<string>('')
  const categoryRef = useRef<HTMLDivElement>(null)
  const blogRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const handleToggleSubmenu = (value: string) => {
    setTarget((prev) => (prev === value ? '' : value))
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      setTimeout(() => {
        if (
          categoryRef.current &&
          !categoryRef.current.contains(event.target as Node) &&
          target === 'category'
        ) {
          setTarget('')
        }
        if (
          blogRef.current &&
          !blogRef.current.contains(event.target as Node) &&
          target === 'blog'
        ) {
          setTarget('')
        }
      }, 0)
    }
    document.addEventListener('mouseup', handleClickOutside)
    return () => {
      document.removeEventListener('mouseup', handleClickOutside)
    }
  }, [target])
  useEffect(() => {
    if (target) {
      setTarget('')
    }
  }, [pathname])
  return (
    <ul className="hidden gap-4 lg:flex">
      <li className="relative font-semibold text-white">
        <p
          className={`flex cursor-pointer items-center gap-1 rounded-full border-1 border-transparent p-1 px-4 py-3 hover:bg-white/10 ${target === 'category' ? 'border-white' : ''}`}
          onClick={() => handleToggleSubmenu('category')}
        >
          Stores
          <IoIosArrowDown
            data-open={target === 'category'}
            className="transition-all duration-200 data-[open=true]:rotate-180"
          />
        </p>
        <div
          ref={categoryRef}
          data-target={target}
          className="border-light-gray absolute top-[60px] z-10 hidden min-w-80 gap-2 rounded-sm border-1 bg-white p-2 font-medium text-black shadow-md data-[target=blog]:hidden data-[target=category]:flex"
        >
          <div className="flex min-w-36 flex-col gap-4 border-r-2 border-solid border-gray-200">
            <p
              className={`hover:text-green cursor-pointer ${category === POPULAR_INDEX ? 'border-r-4 font-semibold' : ''} border-green border-solid font-medium`}
              onClick={() => setCategory(POPULAR_INDEX)}
            >
              Popular
            </p>
            <Fragment>
              {data.categories.map((cat, idx) => (
                <p
                  key={idx}
                  className={`hover:text-green cursor-pointer ${category === idx ? 'border-r-4 font-semibold' : ''} border-green border-solid font-medium`}
                  onClick={() => setCategory(idx)}
                >
                  {cat.name}
                </p>
              ))}
              <Link
                className="hover:text-green font-semibold hover:underline"
                href={`${APP_ROUTERS.ALL_CATEGORIES}`}
              >
                All categories
              </Link>
            </Fragment>
          </div>
          <div className="min-w-50">
            <div
              className={`${category === POPULAR_INDEX ? 'flex' : 'hidden'} flex-col gap-3`}
            >
              {data.popular.map((s) => (
                <Link
                  key={s.id}
                  href={`${APP_ROUTERS.STORES}/${s.slug}`}
                  className="hover:underline"
                >
                  {s.name}
                </Link>
              ))}
              <Link
                href={`${APP_ROUTERS.STORES}`}
                className="hover:text-green font-semibold hover:underline"
              >
                All stores
              </Link>
            </div>
            {data.categories.map((cat, idx) => (
              <Fragment key={idx}>
                <div
                  className={`${category === idx ? 'flex' : 'hidden'} flex-col gap-3`}
                >
                  {cat?.stores &&
                    cat?.stores.map((s, index) => (
                      <Link
                        key={index}
                        href={`${APP_ROUTERS.STORES}/${s.slug}`}
                        className="hover:underline"
                      >
                        {s.name}
                      </Link>
                    ))}
                  <Link
                    href={`${APP_ROUTERS.STORES}`}
                    className="hover:text-green font-semibold hover:underline"
                  >
                    All stores
                  </Link>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </li>
      <li className="relative flex items-end font-semibold text-white">
        <Link
          href={APP_ROUTERS.HOT_DEALS}
          className="cursor-pointer rounded-full border-1 border-transparent px-4 py-3 hover:bg-white/10 focus:border-white"
        >
          Hot Deals
        </Link>
      </li>
      <li className="relative font-semibold text-white">
        <p
          className={`flex cursor-pointer items-center gap-1 rounded-full border-1 border-transparent p-1 px-4 py-3 hover:bg-white/10 ${target === 'blog' ? 'border-white' : ''}`}
          onClick={() => handleToggleSubmenu('blog')}
        >
          Blogs
          <IoIosArrowDown
            data-open={target === 'blog'}
            className="transition-all duration-200 data-[open=true]:rotate-180"
          />
        </p>
        <div
          ref={blogRef}
          data-open={target === 'blog'}
          className="border-light-gray absolute top-[60px] hidden min-w-80 gap-2 rounded-sm border-1 bg-white p-2 font-medium text-black shadow-md data-[open=true]:flex"
        >
          <div className="flex min-w-36 flex-col gap-4 border-r-2 border-solid border-gray-200">
            <Fragment>
              {categories.map((cat, idx) => (
                <p
                  key={idx}
                  className={`hover:text-green cursor-pointer ${category === idx ? 'border-r-4 font-semibold' : ''} border-green border-solid font-medium`}
                  onClick={() => setCategory(idx)}
                >
                  {cat.name}
                </p>
              ))}
            </Fragment>
          </div>
          <div className="min-w-40">
            {categories.map((cat, idx) => (
              <Fragment key={idx}>
                <div
                  className={`${category === idx ? 'flex' : 'hidden'} flex-col gap-3`}
                >
                  {cat.stores.map((s, index) => (
                    <Link key={index} href={`${APP_ROUTERS.STORES}/${s.slug}`}>
                      {s.name}
                    </Link>
                  ))}
                  <Link
                    href={`${APP_ROUTERS.STORES}`}
                    className="font-semibold"
                  >
                    All Articles
                  </Link>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </li>
    </ul>
  )
}

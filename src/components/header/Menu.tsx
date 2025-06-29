'use client'
import { APP_ROUTERS } from '@/helpers/config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const categories = [
  {
    name: 'clothes',
    stores: [
      {
        name: 'store abc',
        slug: 'store-abc',
      },
      {
        name: 'Amazon',
        slug: 'amazon',
      },
      {
        name: 'Tik tok',
        slug: 'tik-tok',
      },
      {
        name: 'Globy',
        slug: 'globy',
      },
    ],
  },
  {
    name: 'Baby',
    stores: [
      {
        name: 'store baby',
        slug: 'store-abc',
      },
      {
        name: 'Amazon baby',
        slug: 'amazon',
      },
      {
        name: 'Tik tok baby',
        slug: 'tik-tok ',
      },
      {
        name: 'Globy baby',
        slug: 'globy',
      },
    ],
  },
  {
    name: 'Travel',
    stores: [
      {
        name: 'store abc Travel',
        slug: 'store-abc',
      },
      {
        name: 'Amazon Travel',
        slug: 'amazon',
      },
      {
        name: 'Tik tok Travel',
        slug: 'tik-tok',
      },
      {
        name: 'Globy Travel',
        slug: 'globy',
      },
    ],
  },
]
export default function Menu() {
  const [category, setCategory] = useState<number | null>(0)
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
          console.log(target)
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
          className="border-light-gray absolute top-[60px] hidden min-w-80 gap-2 rounded-sm border-1 bg-white p-2 font-medium text-black shadow-md data-[target=blog]:hidden data-[target=category]:flex"
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
              <Link
                className="hover:text-green font-semibold"
                href={`${APP_ROUTERS.ALL_CATEGORIES}`}
              >
                All categories
              </Link>
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

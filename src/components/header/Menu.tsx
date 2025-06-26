'use client'
import { APP_ROUTERS } from '@/helpers/config'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Fragment, useEffect, useRef, useState } from 'react'

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
  const pathname = usePathname()
  const handleToggleSubmenu = (target: string) => {
    setTarget(target)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node) &&
        target === 'category'
      ) {
        setTarget('')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [target])
  useEffect(() => {
    if (target) {
      setTarget('')
    }
  }, [pathname])
  return (
    <ul className="flex">
      <li className=" relative text-white font-semibold ">
        <p
          className={`rounded-full hover:bg-white/10 py-3 px-4  border-transparent border-1 p-1 cursor-pointer ${target === 'category' ? 'border-white' : ''}`}
          onClick={() => handleToggleSubmenu('category')}
        >
          Stores
        </p>
        <div
          ref={categoryRef}
          data-target={target}
          className="data-[target=category]:flex data-[target=]:hidden p-2   min-w-80 absolute top-[60px] bg-white text-black font-medium  gap-2 rounded-sm border-1 border-light-gray shadow-md "
        >
          <div className="flex flex-col gap-4 min-w-36 border-r-2 border-gray-200 border-solid">
            <Fragment>
              {categories.map((cat, idx) => (
                <p
                  key={idx}
                  className={`cursor-pointer hover:text-green ${category === idx ? 'font-semibold border-r-4' : ''} border-solid border-green font-medium`}
                  onClick={() => setCategory(idx)}
                >
                  {cat.name}
                </p>
              ))}
              <Link
                className="font-semibold hover:text-green"
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
      <li className="text-white font-semibold">
        <p className="rounded-md hover:bg-white/10 py-3 px-4">Coupons</p>
      </li>
      <li className="text-white font-semibold">
        <p className="rounded-md hover:bg-white/10 py-3 px-4">Blogs</p>
      </li>
    </ul>
  )
}

'use client'
import { APP_ROUTERS } from '@/helpers/config'
import { formatDisplayName } from '@/helpers/format'
import UseAppStore from '@/stores/app.store'
import Link from 'next/link'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

export default function Actions() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const { user } = UseAppStore((state) => state)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      setTimeout(() => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node) &&
          isOpen
        ) {
          setIsOpen(false)
        }
      }, 0)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="z-[1] ml-auto hidden items-center gap-4 lg:flex">
      {user === null ? (
        <Fragment>
          <Link
            className="cursor-pointer rounded-full p-1 px-8 py-3 font-bold text-white hover:bg-white/10"
            href={APP_ROUTERS.SIGN_UP}
          >
            Join for Free
          </Link>

          <Link
            className="text-olive-green cursor-pointer rounded-full bg-white p-1 px-8 py-3 font-bold"
            href={APP_ROUTERS.SIGN_IN}
          >
            Sign In
          </Link>
        </Fragment>
      ) : (
        <div
          ref={containerRef}
          onClick={handleToggle}
          data-open={isOpen}
          className="relative z-100 flex w-fit cursor-pointer items-center gap-1 rounded-full border-1 border-solid border-transparent p-1 px-6 py-3 text-white hover:bg-white/10 data-[open=true]:border-white"
        >
          {formatDisplayName(user)}
          <IoIosArrowDown
            data-open={isOpen}
            className="transition-all duration-200 data-[open=true]:rotate-180"
          />
          <div
            data-open={isOpen}
            className="border-light-gray text-olive-green absolute top-[60px] right-0 hidden w-[200px] flex-col gap-2 rounded-sm border-1 bg-white p-2 font-medium shadow-md data-[open=true]:flex"
          >
            <Link
              className="p-1 font-semibold hover:underline"
              href={APP_ROUTERS.ACCOUNT}
            >
              My Saved Coupons
            </Link>
            <Link
              className="p-1 font-semibold hover:underline"
              href={APP_ROUTERS.ACCOUNT}
            >
              My Account
            </Link>
            <Link
              className="p-1 font-semibold hover:underline"
              href={APP_ROUTERS.SIGN_OUT}
            >
              Sign out
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

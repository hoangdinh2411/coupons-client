'use client'
import { APP_ROUTERS } from '@/helpers/config'
import UseAppStore from '@/stores/app.store'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
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
    <div className="lg:flex hidden gap-4   items-center ml-auto">
      {user !== null ? (
        <Link
          className="rounded-full text-white  hover:bg-white/10 py-3 px-8  border-transparent border-1 p-1 cursor-pointer "
          href={APP_ROUTERS.SIGN_IN}
        >
          Sign In
        </Link>
      ) : (
        <div
          ref={containerRef}
          onClick={handleToggle}
          data-open={isOpen}
          className="flex gap-1 data-[open=true]:border-white border-1 border-transparent border-solid items-center min-w-8 relative rounded-full text-white  hover:bg-white/10 py-3 px-6  border-transparent border-1 p-1 cursor-pointer "
        >
          email@mgail.com
          <IoIosArrowDown
            data-open={isOpen}
            className="data-[open=true]:rotate-180  transition-all duration-200"
          />
          <div
            data-open={isOpen}
            className="data-[open=true]:flex hidden  flex-col w-full  p-2  absolute top-[60px] left-0 bg-white text-black font-medium  gap-2 rounded-sm border-1 border-light-gray shadow-md "
          >
            <Link
              className="hover:underline p-1 font-semibold"
              href={APP_ROUTERS.MY_COUPONS}
            >
              My Saved Coupons
            </Link>
            <Link
              className="hover:underline p-1 font-semibold"
              href={APP_ROUTERS.PROFILE}
            >
              My Account
            </Link>
            <Link
              className="hover:underline p-1 font-semibold"
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

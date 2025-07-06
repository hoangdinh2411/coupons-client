'use client'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import Link from 'next/link'
export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleToggleFocused = () => {
    setIsFocused(!isFocused)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      setTimeout(() => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node) &&
          isFocused
        ) {
          setIsFocused(false)
        }
      }, 0)
    }
    document.addEventListener('mouseup', handleClickOutside)
    return () => {
      document.removeEventListener('mouseup', handleClickOutside)
    }
  }, [isFocused])
  return (
    <div
      ref={containerRef}
      data-focused={isFocused}
      className="bg-light-green relative w-full flex-1 rounded-t-2xl rounded-b-2xl lg:max-w-[450px] data-[focused=true]:lg:rounded-b-none data-[focused=true]:lg:bg-white"
    >
      <IoIosSearch
        className="absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer"
        size={24}
      />
      <input
        type="Search"
        className="h-10 w-full pl-10"
        onFocus={handleToggleFocused}
      />
      <div
        data-focused={isFocused}
        className="fixed top-0 left-0 hidden h-full w-full rounded-b-2xl bg-white data-[focused=true]:block lg:absolute lg:top-full lg:h-auto"
      >
        <div className="lg:h-au flex h-full flex-col gap-1">
          <div className="flex items-center gap-6 p-4 lg:hidden">
            <HiOutlineArrowLeft
              onClick={handleToggleFocused}
              className="cursor-pointer"
              size={24}
            />
            <div className="relative w-full rounded-full border-1 border-solid border-black">
              <IoIosSearch
                className="absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer"
                size={24}
              />
              <input type="Search" className="h-10 w-full pl-10" />
            </div>
          </div>
          <p className="bg-light-gray px-4 py-1 text-lg font-semibold lg:bg-transparent lg:px-4 lg:py-0 lg:text-sm">
            Recent
          </p>
          <div className="flex flex-col gap-1 py-1">
            <Link
              href="#"
              className="hover:bg-light-gray/30 px-6 py-1 text-sm text-gray-600 lg:px-8 lg:py-1"
            >
              Amazon
            </Link>
            <Link
              href="#"
              className="hover:bg-light-gray/30 px-6 py-1 text-sm text-gray-600 lg:px-8 lg:py-1"
            >
              AAAA
            </Link>
            <Link
              href="#"
              className="hover:bg-light-gray/30 px-6 py-1 text-sm text-gray-600 lg:px-8 lg:py-1"
            >
              BBB
            </Link>
            <Link
              href="#"
              className="hover:bg-light-gray/30 px-6 py-1 text-sm text-gray-600 lg:px-8 lg:py-1"
            >
              CCC
            </Link>
            <Link
              href="#"
              className="hover:bg-light-gray/30 px-6 py-1 text-sm text-gray-600 lg:px-8 lg:py-1"
            >
              DDD
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

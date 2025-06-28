'use client'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { HiOutlineArrowLeft } from 'react-icons/hi'
export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(true)
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
        className="fixed top-0 left-0 hidden h-auto w-full rounded-b-2xl bg-white data-[focused=true]:block lg:absolute lg:top-full lg:p-4"
      >
        <div className="flex items-center gap-2 p-4 lg:hidden">
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
        <div className="flex flex-col gap-2">
          <p className="lg:text-md bg-light-gray px-4 py-2 text-xl font-semibold lg:bg-transparent lg:px-0 lg:text-lg">
            Recent
          </p>
          <div className="flex flex-col gap-2 px-6 lg:px-2">
            <p className="text-gray-600">Amazon</p>
            <p className="text-gray-600">ABC</p>
            <p className="text-gray-600">DEC</p>
          </div>
        </div>
      </div>
    </div>
  )
}

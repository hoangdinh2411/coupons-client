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
      className="flex-1  relative bg-light-green rounded-t-2xl rounded-b-2xl
      data-[focused=true]:lg:rounded-b-none data-[focused=true]:lg:bg-white  lg:max-w-[450px] w-full"
    >
      <IoIosSearch
        className="absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer"
        size={24}
      />
      <input
        type="Search"
        className="h-10 pl-10 w-full  "
        onFocus={handleToggleFocused}
      />
      <div
        data-focused={isFocused}
        className="lg:absolute fixed top-0 h-auto lg:top-full left-0 bg-white  data-[focused=true]:block hidden w-full rounded-b-2xl lg:p-4"
      >
        <div className="flex lg:hidden p-4 gap-2 items-center">
          <HiOutlineArrowLeft
            onClick={handleToggleFocused}
            className="cursor-pointer "
            size={24}
          />
          <div
            className="relative   rounded-full border-1 border-solid border-black
      w-full"
          >
            <IoIosSearch
              className="absolute cursor-pointer top-1/2 left-2 -translate-y-1/2 "
              size={24}
            />
            <input type="Search" className="h-10 pl-10 w-full  " />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold lg:text-md text-xl lg:text-lg px-4 lg:px-0 py-2 bg-light-gray lg:bg-transparent">
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

'use client'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import Link from 'next/link'
import { search } from '@/services/clientApi'
import { MenuData, SearchData } from '@/types/client.type'
export default function SearchBar({ menu }: { menu: MenuData | null }) {
  const [isFocused, setIsFocused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [searchText, setSearchText] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [result, setResult] = useState<SearchData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const handleFocus = () => {
    setIsFocused(true)
  }
  const handleUnfocus = () => {
    setIsFocused(false)
  }
  const handleStoreInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.trim() === '') {
      setResult(null)
    }
    setSearchText(value)
    setIsTyping(true)
  }
  useEffect(() => {
    const handler = setTimeout(() => {
      if (!isLoading) {
        setDebouncedQuery(searchText)
      }
    }, 1000)

    return () => clearTimeout(handler)
  }, [searchText])

  async function handleSearch(text: string) {
    if (!text.trim()) return
    setIsLoading(true)
    const res = await search(text)
    if (!res.data || !res.success) return
    // check if value is not empty
    if (
      res.data &&
      ((Array.isArray(res.data.stores) && res.data.stores.length > 0) ||
        (Array.isArray(res.data.categories) &&
          res.data.categories.length > 0) ||
        (Array.isArray(res.data.blogs) && res.data.blogs.length > 0))
    ) {
      setResult(res.data)
    } else {
      setResult(null)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    if (debouncedQuery && isTyping) {
      handleSearch(debouncedQuery)
    }
  }, [debouncedQuery])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      setTimeout(() => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node) &&
          isFocused
        ) {
          handleUnfocus()
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
      className="bg-light-green relative z-20 ml-auto w-full flex-1 rounded-t-2xl rounded-b-2xl lg:max-w-[450px] data-[focused=true]:lg:rounded-b-none data-[focused=true]:lg:bg-white"
    >
      <IoIosSearch
        className="absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer"
        size={24}
        onClick={() => handleSearch(searchText)}
      />
      <input
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch(searchText)
          }
        }}
        type="Search"
        value={searchText}
        className="h-10 w-full pl-10"
        onFocus={handleFocus}
        onChange={handleStoreInputChange}
      />
      <div
        data-focused={isFocused}
        className="fixed top-0 left-0 hidden h-full w-full rounded-b-2xl bg-white data-[focused=true]:block lg:absolute lg:top-full lg:h-auto"
      >
        <div className="lg:h-au flex h-full flex-col gap-1">
          <div className="flex items-center gap-6 p-4 lg:hidden">
            <HiOutlineArrowLeft
              onClick={handleUnfocus}
              className="cursor-pointer"
              size={24}
            />
            <div className="relative w-full rounded-full border-1 border-solid border-black">
              <IoIosSearch
                className="absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer"
                size={24}
                onClick={() => handleSearch(searchText)}
              />
              <input
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch(searchText)
                  }
                }}
                type="Search"
                value={searchText}
                className="h-10 w-full pl-10"
                onChange={handleStoreInputChange}
              />
            </div>
          </div>

          {result !== null ? (
            <div className="flex flex-col gap-1 py-1">
              {result.stores && result.stores.length > 0 && (
                <div className="flex flex-col gap-1 py-1">
                  <p className="bg-light-gray px-4 py-1 text-lg font-semibold lg:bg-transparent lg:px-4 lg:py-0 lg:text-sm">
                    Stores
                  </p>
                  {result.stores.slice(0, 3).map((store) => (
                    <Link
                      key={store.id}
                      href={`/stores/${store.slug}`}
                      className="hover:bg-light-gray/30 px-6 py-1 text-sm text-gray-600 lg:px-8 lg:py-1"
                    >
                      {store.name}
                    </Link>
                  ))}
                </div>
              )}
              {result.categories && result.categories.length > 0 && (
                <div className="flex flex-col gap-1 py-1">
                  <p className="bg-light-gray px-4 py-1 text-lg font-semibold lg:bg-transparent lg:px-4 lg:py-0 lg:text-sm">
                    Categories
                  </p>
                  {result.categories.slice(0, 3).map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/categories/${cat.slug}`}
                      className="hover:bg-light-gray/30 px-6 py-1 text-sm text-gray-600 lg:px-8 lg:py-1"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
              {result.blogs && result.blogs?.length > 0 && (
                <div className="flex flex-col gap-1 py-1">
                  <p className="bg-light-gray px-4 py-1 text-lg font-semibold lg:bg-transparent lg:px-4 lg:py-0 lg:text-sm">
                    Blogs
                  </p>
                  {result.blogs.slice(0, 2).map((blog) => (
                    <Link
                      key={blog.id}
                      href={`/blogs/${blog.slug}`}
                      className="hover:bg-light-gray/30 px-6 py-1 text-sm text-gray-600 lg:px-8 lg:py-1"
                    >
                      {blog.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-1 py-1">
              <p className="bg-light-gray px-4 py-1 text-lg font-semibold lg:bg-transparent lg:px-4 lg:py-0 lg:text-sm">
                Recent
              </p>
              {menu &&
                menu.popular &&
                menu.popular.slice(0, 5).map((store) => (
                  <Link
                    key={store.id}
                    href={`/stores/${store.slug}`}
                    className="hover:bg-light-gray/30 px-6 py-1 text-sm text-gray-600 lg:px-8 lg:py-1"
                  >
                    {store.name}
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

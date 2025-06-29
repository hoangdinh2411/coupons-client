'use client'
import { APP_ROUTERS } from '@/helpers/config'
import { signOutApi } from '@/services/authApi'
import { getAllCategories } from '@/services/categoryApi'
import { getUserProfile } from '@/services/userApi'
import UseAppStore from '@/stores/app.store'
import Link from 'next/link'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { IoIosArrowDown } from 'react-icons/io'

export default function Actions() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const { user, setUser, setCategories } = UseAppStore((state) => state)
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
  const handleSignOut = async () => {
    const res = await signOutApi()
    if (res.ok) {
      setUser(null)
    }
  }
  useEffect(() => {
    const handleFetchProfile = async () => {
      const profileRes = await getUserProfile()
      if (!profileRes.success && user) {
        handleSignOut()
        return
      }
      if (!profileRes.data) {
        toast.error('Missing user profile')
        return
      }
      setUser(profileRes.data)
    }

    async function fetchCategoriesAndBlogsForMenu() {
      const [categoryRes] = await Promise.all([
        getAllCategories(),
        // getTopics(),
      ])
      // // const storeRes = await getAllStores();
      // if (storeRes.success && storeRes.data) {
      //   setStores(storeRes.data.results);
      // }
      // const categoryRes = await getCategories();
      if (categoryRes.success && categoryRes.data) {
        setCategories(categoryRes.data.results)
      }
      // if (topicsRes.success && topicsRes.data) {
      //   setTopics(topicsRes.data.results);
      // }
    }
    if (!user) {
      handleFetchProfile()
    }
    fetchCategoriesAndBlogsForMenu()
  }, [])

  const formatDisplayName = useMemo(() => {
    if (!user) return ''
    return user.first_name && user.last_name
      ? ` ${user.first_name} ${user.last_name}`
      : user.email
  }, [user])
  return (
    <div className="ml-auto hidden items-center gap-4 lg:flex">
      {user === null ? (
        <Link
          className="cursor-pointer rounded-full border-1 border-transparent p-1 px-8 py-3 text-white hover:bg-white/10"
          href={APP_ROUTERS.SIGN_IN}
        >
          Sign In
        </Link>
      ) : (
        <div
          ref={containerRef}
          onClick={handleToggle}
          data-open={isOpen}
          className="relative flex min-w-8 cursor-pointer items-center gap-1 rounded-full border-1 border-solid border-transparent p-1 px-6 py-3 text-white hover:bg-white/10 data-[open=true]:border-white"
        >
          {formatDisplayName}
          <IoIosArrowDown
            data-open={isOpen}
            className="transition-all duration-200 data-[open=true]:rotate-180"
          />
          <div
            data-open={isOpen}
            className="border-light-gray absolute top-[60px] left-0 hidden w-full flex-col gap-2 rounded-sm border-1 bg-white p-2 font-medium text-black shadow-md data-[open=true]:flex"
          >
            <Link
              className="p-1 font-semibold hover:underline"
              href={APP_ROUTERS.MY_COUPONS}
            >
              My Saved Coupons
            </Link>
            <Link
              className="p-1 font-semibold hover:underline"
              href={APP_ROUTERS.PROFILE}
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

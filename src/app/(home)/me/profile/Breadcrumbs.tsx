import { APP_ROUTERS } from '@/helpers/config'
import Link from 'next/link'
import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'

function Breadcrumbs() {
  return (
    <div>
      <div className="mb-6 flex flex-wrap sm:mb-10">
        <Link
          href={APP_ROUTERS.ACCOUNT}
          className="flex cursor-pointer items-center gap-1 text-sm leading-[1.33] font-bold tracking-[0.2px] text-[rgb(116,31,162)] no-underline"
        >
          <FaChevronLeft />
          <span>Account</span>
        </Link>
      </div>
    </div>
  )
}

export default Breadcrumbs

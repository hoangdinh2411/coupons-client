import Link from 'next/link'
import React from 'react'
import { FaCheck, FaChevronLeft } from 'react-icons/fa'

const MyCouponsPage = () => {
  return (
    <div className="mx-auto my-4 w-full max-w-3xl flex-1 p-4">
      {/* Breadcrumbs go back */}
      <div className="mb-6 flex flex-wrap">
        <Link
          href={'/me'}
          className="flex cursor-pointer items-center gap-1 text-sm leading-[1.33] font-bold tracking-[0.2px] text-[rgb(116,31,162)] no-underline"
        >
          <FaChevronLeft />
          <span>Account</span>
        </Link>
      </div>

      {/* Title */}
      <h3 className="mt-0 h-[40px] w-[224px] text-[40px] leading-[1.4] font-[450] tracking-normal text-[rgb(50,50,50)] [text-shadow:0px_2px_6px_rgba(0,0,0,0.04)] md:mt-6">
        My rewards
      </h3>

      {/* Rewards */}
      <div className="my-4 w-full rounded-lg text-white shadow-[0px_5px_10px_-7px_rgba(50,50,50,0.604)]">
        <div className="max-w-full flex-1 bg-white pt-16 pb-9 pl-8 text-[rgb(116,31,162)] shadow-[0px_5px_10px_-7px_rgba(50,50,50,0.604)] md:max-w-2/3 md:flex-2/3">
          <div className="flex justify-evenly">
            <div>
              <div className="m-auto ml-1 flex items-center text-center leading-12 font-bold [text-shadow:0px_2px_6px_rgba(0,0,0,0.04)] md:text-[46px]">
                <span className="">$0.00</span>
                <FaCheck className="mt-1 h-5 max-w-full" />
              </div>

              <span className="mt-[1px] text-center font-bold text-[rgb(116,31,162)] md:text-xl md:leading-4">
                Approved Rewards
              </span>
            </div>

            <div className="h-full">
              <div className="m-auto ml-1 flex items-center text-center leading-12 font-bold [text-shadow:0px_2px_6px_rgba(0,0,0,0.04)] md:text-[46px]">
                <span className="">+</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex w-full items-center justify-center text-center leading-12 font-bold [text-shadow:0px_2px_6px_rgba(0,0,0,0.04)] md:text-[46px]">
                <span className="">$0.00</span>
              </div>

              <span className="mt-[1px] text-center font-bold text-[rgb(116,31,162)] md:text-xl md:leading-4">
                Pending Rewards
              </span>
            </div>

            <div className="h-full">
              <div className="m-auto ml-1 flex items-center text-center leading-12 font-bold [text-shadow:0px_2px_6px_rgba(0,0,0,0.04)] md:text-[46px]">
                <span className="">=</span>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div></div>
      </div>
    </div>
  )
}

export default MyCouponsPage

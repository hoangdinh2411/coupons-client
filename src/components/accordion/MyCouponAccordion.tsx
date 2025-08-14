'use client'
import { CouponData } from '@/types/coupon.type'
import React, { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

type Props = {
  className?: string
  coupon: CouponData
}

export default function MyCouponAccordion({ className = '', coupon }: Props) {
  const [active, setActive] = useState<boolean>(false)
  return (
    <div className={`${className}`}>
      <div className="TextAccordion w-full">
        <div
          onClick={() => setActive((prev) => !prev)}
          className="TextAccordion_summary w-full cursor-pointer overflow-hidden rounded-md border-1 border-solid border-gray-200"
        >
          <div className="flex w-full list-none items-center justify-between p-6 text-left font-medium outline-0 outline-offset-4 focus-within:outline-2">
            <p className="text-olive-green sm:text-md text-lg font-bold">
              {coupon.title}
            </p>
            <div className="icon relative text-xl text-gray-500 transition-transform duration-300">
              <div
                className={`absolute transform transition-transform duration-300 ${active ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}
              >
                <FiPlus size={16} />
              </div>
              <div
                className={`transform transition-transform duration-300 ${active ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`}
              >
                <FiMinus />
              </div>
            </div>
          </div>
          {active && (
            <div className="prose text-olive-green w-full border-b-0 border-gray-200 bg-gray-100 p-6 text-sm">
              <div>
                <p className="sm:text-md text-sm font-semibold">
                  {coupon.offer_detail}
                </p>
                <hr className="my-4 h-px w-full border-t-0 bg-gray-300 sm:my-6 sm:w-[250px]" />
              </div>
              <div className="mb-4 flex flex-wrap">
                <div className="max-w-[50%] flex-[0_0_50%] sm:max-w-[25%] sm:flex-[0_0_25%]">
                  <span className="sm:text-md text-left text-sm">Type:</span>
                </div>
                <div className="max-w-[50%] flex-[0_0_50%] text-right sm:max-w-[75%] sm:flex-[0_0_75%] sm:text-left">
                  <span className="sm:text-md text-sm font-bold">
                    {coupon.type}
                  </span>
                </div>
              </div>
              <div className="mb-4 flex flex-wrap">
                <div className="max-w-[50%] flex-[0_0_50%] sm:max-w-[25%] sm:flex-[0_0_25%]">
                  <span className="sm:text-md text-left text-sm">
                    Activation Date:
                  </span>
                </div>
                <div className="max-w-[50%] flex-[0_0_50%] text-right sm:max-w-[75%] sm:flex-[0_0_75%] sm:text-left">
                  <span className="sm:text-md text-sm font-bold">
                    {coupon.start_date}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

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
          <div className="flex w-full list-none items-center justify-between bg-gray-200 p-6 text-left font-medium outline-0 outline-offset-4 focus-within:outline-2">
            <p className="text-olive-green">{coupon.title}</p>
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
            <div className="prose text-olive-green w-full border-b-1 border-gray-200 p-6 text-sm">
              dấdad
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

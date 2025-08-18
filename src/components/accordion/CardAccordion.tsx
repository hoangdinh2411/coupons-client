'use client'
import { CouponData } from '@/types/coupon.type'
import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

function CardAccordion({
  coupon,
  className = '',
}: {
  className?: string
  coupon: CouponData
}) {
  const [active, setActive] = useState<boolean>(false)
  return (
    <div
      className={`${className} CardAccordion w-full border-t-1 border-slate-200`}
    >
      <button
        onClick={() => setActive((prev) => !prev)}
        className={`CardAccordion_summary focus-within:border-green w-full cursor-pointer focus-within:border-2`}
      >
        <div className="icon flex items-center justify-between gap-2 py-2 text-[10px] font-[600] transition-transform duration-300 lg:text-sm">
          <span>
            {coupon.expire_date
              ? 'Ends ' + coupon.expire_date
              : 'Valid everyday'}
          </span>
          <div className="icon flex items-center justify-end gap-2 text-[10px] font-[600] transition-transform duration-300 lg:text-sm">
            <span>{active ? 'Hide Details' : 'Show Details'}</span>
            <div
              className={`transform transition-transform duration-300 ${
                active ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
              } absolute`}
            >
              <FiPlus />
            </div>
            <div
              className={`transform transition-transform duration-300 ${
                active ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
              }`}
            >
              <FiMinus />
            </div>
          </div>
        </div>
      </button>
      <div
        className={`${active ? 'flex' : 'hidden max-h-0'} h-full py-2 font-semibold`}
      >
        <p className="w-full">{coupon.offer_detail}</p>
      </div>
    </div>
  )
}

export default CardAccordion

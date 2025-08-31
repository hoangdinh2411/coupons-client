import { CouponData } from '@/types/coupon.type'
import { TypeDiscount } from '@/types/enum'
import React from 'react'

const OffersTable = ({ coupons }: { coupons: CouponData[] }) => {
  return (
    <div className="mx-auto mt-20 mb-10 w-full rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse bg-[#F9FAFB]">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b-slate-600 px-4 py-4 text-start text-sm text-gray-700 uppercase">
                Discount
              </th>
              <th className="min-w-[300px] border-b-slate-600 px-4 py-4 text-start text-sm text-gray-700 uppercase">
                Offer Description
              </th>
              <th className="border-b-slate-600 px-4 py-4 text-start text-sm text-gray-700 uppercase">
                Expiration Date
              </th>
            </tr>
          </thead>
          <tbody>
            {coupons.slice(0, 5).map((coupon) => (
              <tr key={coupon.id} className="hover:bg-gray-100">
                <td className="border-b-slate-600 px-4 py-4 text-start text-gray-500">
                  {`${coupon.discount} ${coupon.type_discount === TypeDiscount.PERCENT ? '%' : '$'}`}
                </td>
                <td className="min-w-[300px] border-b-slate-600 px-4 py-4 text-gray-500">
                  {coupon.offer_detail}
                </td>
                <td className="border-b-slate-600 px-4 py-4 text-start text-gray-500">
                  {coupon.expire_date ? coupon.expire_date : 'Valid everyday'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OffersTable

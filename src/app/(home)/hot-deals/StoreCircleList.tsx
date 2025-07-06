import React, { Fragment } from 'react'
import Image from 'next/image'
import TitleCoupon from './TitleCoupon'
type StoreCouponType = {
  title: string
  value: string | number
  link: string
  imgUrl: string
  icon: string
}
interface StoreCirclePropsType {
  stores: StoreCouponType[]
}
function StoreCircleList({ stores }: StoreCirclePropsType) {
  return (
    <Fragment>
      <TitleCoupon link="/" title="Best Stores for 4th of July " />

      <div className="grid grid-cols-3 gap-x-6 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
        {stores.map((store: StoreCouponType, index: number) => (
          <div
            key={index}
            className="group flex h-full w-full cursor-pointer flex-col items-center justify-center md:gap-2"
          >
            <div className="mx-auto max-w-[120px] md:w-full">
              <div className="border-dynamic bg-dynamic mb-3 overflow-hidden rounded-full border p-4 transition-shadow duration-300 ease-out group-hover:shadow-xl md:h-32 md:w-32 md:p-5">
                <Image
                  src={store.imgUrl}
                  className="aspect-square h-auto w-full object-contain"
                  alt=""
                  width={320}
                  height={320}
                />
              </div>
              <div className="flex flex-col items-center justify-center sm:flex-row lg:flex-col">
                <div className="flex justify-center font-bold group-hover:underline lg:w-full">
                  <Image
                    src={store.icon}
                    className="w-6"
                    alt=""
                    width={320}
                    height={320}
                  />
                  {store.value}
                  {'%'}
                </div>
                <div className="text-slate-600 group-hover:underline">
                  {store.title}{' '}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default StoreCircleList

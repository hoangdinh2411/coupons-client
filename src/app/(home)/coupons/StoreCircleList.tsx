import React from 'react'
import TitleCoupon from './TitleCoupon'
import Image from 'next/image'
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
    <div className="flex flex-wrap gap-6 md:gap-2">
      {stores.map((store: StoreCouponType, index: number) => (
        <div
          key={index}
          className="flex w-[calc(33.33%-24px)] md:w-[calc(25%-8px)] lg:w-[calc(12.5%-8px)] group cursor-pointer  h-full items-center justify-center flex-col mb-4 md:gap-2"
        >
          <div className=" mx-auto max-w-[120px] md:w-full ">
            <div className="border-dynamic mb-3 transition-shadow duration-300 ease-out group-hover:shadow-xl md:h-32 md:w-32 p-4 md:p-5 overflow-hidden rounded-full border bg-dynamic">
              <Image
                src={store.imgUrl}
                className="aspect-square h-auto w-full object-contain"
                alt=""
                width={320}
                height={320}
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center lg:flex-col">
              <div className="group-hover:underline  font-bold lg:w-full flex justify-center">
                <Image
                  src={store.icon}
                  className="w-6 "
                  alt=""
                  width={320}
                  height={320}
                />
                {store.value}
                {'%'}
              </div>
              <div className="group-hover:underline text-slate-600">
                {store.title}{' '}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StoreCircleList

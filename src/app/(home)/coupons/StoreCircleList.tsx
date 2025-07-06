import React from 'react'
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
          className="group mb-4 flex h-full w-[calc(33.33%-24px)] cursor-pointer flex-col items-center justify-center md:w-[calc(25%-8px)] md:gap-2 lg:w-[calc(12.5%-8px)]"
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
  )
}

export default StoreCircleList

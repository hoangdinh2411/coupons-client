import Image from 'next/image'
import TitleCoupon from './TitleCoupon'
import { memo } from 'react'

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
const StoreItem = memo(
  ({ store, index }: { store: StoreCouponType; index: number }) => (
    <a
      href={store.link}
      className="group flex cursor-pointer flex-col items-center justify-center gap-3 md:gap-2"
      aria-label={`${store.title} - ${store.value}% off`}
    >
      <div className="border-dynamic bg-dynamic overflow-hidden rounded-full border p-4 transition-shadow duration-300 ease-out group-hover:shadow-xl md:h-32 md:w-32 md:p-5">
        <Image
          src={store.imgUrl}
          className="aspect-square h-auto w-full object-contain"
          alt={`${store.title} logo`}
          width={120}
          height={120}
          sizes="(max-width: 768px) 80px, 120px"
          loading={index < 8 ? 'eager' : 'lazy'}
          quality={85}
        />
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center gap-1 font-bold group-hover:underline">
          <Image
            src={store.icon}
            className="h-4 w-4"
            alt=""
            width={16}
            height={16}
            sizes="16px"
            loading="lazy"
          />
          <span>{store.value}%</span>
        </div>
        <div className="text-sm text-slate-600 group-hover:underline">
          {store.title}
        </div>
      </div>
    </a>
  ),
)

StoreItem.displayName = 'StoreItem'

function StoreCircleList({ stores }: StoreCirclePropsType) {
  return (
    <section className="mb-12 pt-12 md:pt-16">
      <TitleCoupon link="/" title="Best Stores for 4th of July" />
      <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 lg:grid-cols-8">
        {stores.map((store, index) => (
          <StoreItem
            key={`store-${index}-${store.title}`}
            store={store}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default memo(StoreCircleList)

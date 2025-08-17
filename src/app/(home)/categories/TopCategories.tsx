'use client'
import UseAppStore from '@/stores/app.store'
import CardCoupon from './CardCoupon'
export default function TopCategories() {
  const menu = UseAppStore((state) => state.menu)
  return (
    <div className="my-9 flex flex-wrap items-center gap-1 gap-y-4 border-b-1 border-solid border-gray-200 pb-9">
      <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {menu &&
          menu.top_categories &&
          menu.top_categories
            ?.slice(0, 5)
            ?.map((category, index) => (
              <CardCoupon
                category={category}
                priority={index === 0}
                isAboveFold={index < 4}
                key={index}
              />
            ))}
      </div>
    </div>
  )
}

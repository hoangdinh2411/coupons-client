import CouponCard from '@/components/card/CouponCard'

interface ListSaleProps {
  listSale: {
    id: string
    title: string
    description: string
    imgUrl: string
    badgeIcon: string | null
    badgeTitle: string
  }[]
}

export default function ListSale({ listSale }: ListSaleProps) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
      {listSale.map((coupon) => (
        <CouponCard
          key={coupon.id}
          title={coupon.title}
          description={coupon.description}
          imgUrl={coupon.imgUrl}
          badgeIcon={coupon.badgeIcon}
          badgeTitle={coupon.badgeTitle}
          actionBtn
        />
      ))}
    </ul>
  )
}

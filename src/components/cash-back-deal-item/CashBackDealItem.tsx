import Image from 'next/image'
import Link from 'next/link'

interface CashBackDealItemProps {
  store: {
    store_id: string
    store_title: string
    store_value: string | number
    store_link: string
    store_imgUrl: string
    store_icon: string
  }
}

export default function CashBackDealItem({ store }: CashBackDealItemProps) {
  return (
    <Link
      href={store.store_link}
      key={store.store_id}
      className="group mb-auto"
    >
      <div className="mb-3 overflow-hidden rounded-full border border-[#003b95] bg-[#003b95] p-4 transition-shadow duration-300 ease-out group-hover:shadow-xl md:h-32 md:w-32 md:p-5">
        <Image
          src={store.store_imgUrl}
          alt={store.store_title}
          width={86}
          height={86}
          className="aspect-square h-auto w-full object-contain"
        />
      </div>
      <div className="mx-auto max-w-28 text-center text-xs leading-tight group-hover:underline group-hover:underline-offset-4 lg:text-sm">
        <Image
          src={store.store_icon}
          alt={store.store_title}
          width={16}
          height={16}
          className="-mr-1 mb-1 inline-block h-4 w-4 group-hover:animate-bounce"
        />
        <strong className="lg:mr-2">{store.store_value}%</strong>
        <div>{store.store_title}</div>
      </div>
    </Link>
  )
}

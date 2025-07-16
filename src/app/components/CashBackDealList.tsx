import CashBackDealItem from '../../components/cash-back-deal-item/CashBackDealItem'

interface CashBackDealListPropsType {
  stores: {
    store_id: string
    store_title: string
    store_value: string | number
    store_link: string
    store_imgUrl: string
    store_icon: string
  }[]
}

export default function CashBackDealList({
  stores,
}: CashBackDealListPropsType) {
  return (
    <div className="grid grid-cols-3 place-items-center gap-x-6 gap-y-8 md:grid-cols-4 lg:grid-cols-8">
      {stores.map((store) => (
        <CashBackDealItem key={store.store_id} store={store} />
      ))}
    </div>
  )
}

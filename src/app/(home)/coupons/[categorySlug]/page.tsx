import { getCategoryBySlug } from '@/services/categoryApi'
import Link from 'next/link'
import TopSplide from '../../stores/[slug]/TopSplide'
import CouponsHeader from './CouponHeader'
import ListCoupons from './ListCoupons'
import SideSection from './SideSection'

const CouponsByCategoryPage = async ({
  params,
}: {
  params: Promise<{ categorySlug: string }>
}) => {
  const { categorySlug } = await params
  console.log(categorySlug)

  const res = await getCategoryBySlug(categorySlug)
  console.log(res)

  return (
    <div className="">
      <div className="px-4">
        <TopSplide />
      </div>

      <CouponsHeader />

      <div className="container mx-auto grid max-w-screen-xl grid-cols-[theme(spacing.24)_auto] px-4 lg:mt-4 lg:grid-cols-[theme(spacing.80)_auto] lg:pt-40">
        <SideSection />

        <ListCoupons />

        <div className="col-span-2 row-start-1 mb-4 hidden text-center text-[10px] lg:col-span-1 lg:row-start-3 lg:mx-0 lg:mt-3 lg:mr-16 lg:mb-8 lg:block lg:text-left lg:text-sm">
          When you buy through links on TrustCoupon{' '}
          <Link href="#" className="block underline md:inline">
            we may earn a commission.
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CouponsByCategoryPage

import { getCategoryBySlug, getCouponsByCategory } from '@/services/categoryApi'
import Link from 'next/link'
import { notFound } from 'next/navigation'
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
  const categoryResponse = await getCategoryBySlug(categorySlug)
  if (!categoryResponse.success || !categoryResponse.data) {
    return notFound()
  }
  const { category, count_coupons, similar_stores } = categoryResponse.data
  const totalCoupons = parseInt(count_coupons.total_coupons) || 0
  const couponsResponse = await getCouponsByCategory(category.id, 1)
  const { data: coupons } = couponsResponse

  return (
    <div>
      <div className="px-4">
        <TopSplide />
      </div>

      <CouponsHeader title={category.name} />

      <div className="container mx-auto grid max-w-screen-xl grid-cols-[theme(spacing.24)_auto] px-4 lg:mt-4 lg:grid-cols-[theme(spacing.80)_auto] lg:pt-40">
        <SideSection
          title={category.name}
          countCoupons={count_coupons}
          similarStores={similar_stores}
        />

        <ListCoupons
          coupons={coupons || []}
          category={category}
          totalCoupons={totalCoupons}
          categoryId={category.id}
        />

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

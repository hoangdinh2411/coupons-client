'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import TopDealsSplide from './TopDealsSplide'
import Badge from '@/components/badge'
import { CouponData } from '@/types/coupon.type'
import { CategoryData } from '@/types/category.type'
import { CouponType } from '@/types/enum'
import { getCouponsByCategory } from '@/services/categoryApi'
import { usePathname } from 'next/navigation'
import FAQs from './FAQs'

const ListCoupons = ({
  coupons: initialCoupons,
  category,
  totalCoupons,
  categoryId,
  topDeals,
}: {
  coupons: CouponData[]
  category: CategoryData
  totalCoupons: number
  categoryId: number
  topDeals: CouponData[]
}) => {
  const [coupons, setCoupons] = useState<CouponData[]>(initialCoupons)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()
  // Check if there's a next page based on current coupons length vs total coupons
  const hasNextPage = coupons.length < totalCoupons

  const handleShowMore = async () => {
    if (loading || !hasNextPage) return

    setLoading(true)
    try {
      const nextPage = currentPage + 1
      const response = await getCouponsByCategory(categoryId, nextPage)

      if (response.success && response.data) {
        setCoupons((prevCoupons) => [...prevCoupons, ...(response.data || [])])
        setCurrentPage(nextPage)
      }
    } catch (error) {
      console.error('Error loading more coupons:', error)
    } finally {
      setLoading(false)
    }
  }
  const handleClick = (coupon: CouponData) => {
    // open a new tab/window at the same URL
    window.open(
      `${pathname}?outClicked=true&referenceId=${coupon.id}`,
      '_blank',
      'noopener,noreferrer',
    )
    if (coupon?.offer_link || coupon?.store?.url) {
      window.location.href = coupon?.offer_link || coupon?.store?.url || ''
    }
  }
  return (
    <div className="col-span-2 col-start-1 row-start-4 mt-2 mb-6 overflow-hidden lg:col-span-1 lg:col-start-2 lg:row-span-5 lg:row-start-3">
      <section className="relative mb-6 flex gap-x-4">
        <div className="relative min-h-24 min-w-24 overflow-hidden rounded-full border border-gray-200 p-2">
          <Link href={'/coupons/amazon'}>
            <Image
              src={category.image.url}
              alt="Amazon"
              className="h-auto w-full object-cover"
              fill
            />
          </Link>
        </div>

        <div>
          <p className="xs:text-2xl text-xl font-bold">
            Today&apos;s Top Deals
          </p>
          <p className="text-xs font-semibold tracking-wider uppercase">
            Presented by {category.name}
          </p>
          <Link
            href={`/coupons/amazon`}
            className="mt-3 flex items-center text-xs font-bold tracking-wider uppercase underline underline-offset-2"
            rel="nofollow sponsored"
          >
            <div className="relative h-5 w-5">
              <Image
                src={'/images/cashback-bolt.svg'}
                alt="Cashback Bolt"
                fill
              />
            </div>
            1% Cash Back on {category.name}
            <FaArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>

        <Link
          href={`/stores/`}
          className="absolute right-0.5 bottom-3 hidden h-11 items-center rounded-full border border-black bg-white px-4 py-1.5 text-xs font-bold whitespace-nowrap text-black lg:flex"
        >
          View more deals
        </Link>
      </section>

      <TopDealsSplide topDeals={topDeals} />

      <div className="my-14 flex w-full items-center justify-center">
        <Link
          href={'/coupons'}
          className="flex h-11 w-fit items-center justify-center rounded-full border border-black bg-white px-4 py-1.5 text-xs font-bold whitespace-nowrap text-black lg:hidden"
        >
          View more deals
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-3">
        {coupons?.map((coupon, index) => (
          <button
            onClick={() => handleClick(coupon)}
            key={index}
            className="relative mb-5 flex h-full cursor-pointer overflow-hidden border-[#E0E0E0] bg-transparent md:h-auto md:min-h-[278px] md:flex-col md:rounded-xl md:border lg:h-[300px] lg:flex-col lg:bg-white"
          >
            <div className="relative flex aspect-video max-h-full max-w-36 shrink-0 flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white object-contain px-4 capitalize md:max-w-full md:rounded-none md:border-0 md:px-8">
              <Image
                src={
                  coupon.store?.image?.url || '/images/default-store-logo.png'
                }
                alt="Target 2% Cash Back for Purchases Sitewide"
                className="object-contain px-2 pt-4 pb-0"
                fill
              />
            </div>

            <div className="relative flex h-full flex-col justify-between px-2 py-0 md:py-2">
              <div>
                <h3 className="text-xs font-bold tracking-wide uppercase md:mt-2">
                  {coupon.store?.name || 'Store Name'}
                </h3>
                <p className="my-2 line-clamp-2 text-base leading-5 capitalize md:mb-auto md:line-clamp-3">
                  {coupon.title || 'Coupon Title'}
                </p>
              </div>
              {coupon.type === CouponType.CODE ? (
                <p className="mt-2 self-start rounded-full bg-gray-100 px-4 py-1.5 text-xs font-bold lg:mb-1">
                  {coupon.type === CouponType.CODE ? 'Coupon Code' : ''}
                </p>
              ) : (
                <></>
              )}
            </div>

            {coupon.discount > 0 && (
              <Badge
                className="absolute top-2 left-2 !text-sm"
                imageIcon="/images/cashback-bolt.svg"
                text={`+${coupon.discount}% Back`}
              />
            )}
          </button>
        ))}
      </div>

      <div className="col-start-2 row-start-8 mb-24 flex items-center justify-center">
        {hasNextPage && (
          <button
            className="mt-4 w-48 cursor-pointer items-center justify-center rounded-full bg-purple-700 py-3 tracking-wider disabled:cursor-not-allowed disabled:opacity-50 lg:flex"
            onClick={handleShowMore}
            disabled={loading}
          >
            <span className="w-auto text-sm text-white">
              {loading ? 'Loading...' : 'Show More Offers'}
            </span>
          </button>
        )}
      </div>

      <article className="">
        <div
          className="no-tailwindcss-base"
          dangerouslySetInnerHTML={{ __html: category.description }}
        ></div>
      </article>
      <FAQs category={category} />
    </div>
  )
}

export default ListCoupons

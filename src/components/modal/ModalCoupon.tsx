// Type for feedback meta_data
'use client'
import React, { useEffect, useState, useTransition } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { getCoupon } from '@/services/couponApi'
import { CouponData } from '@/types/coupon.type'
import SpinnerLoading from '../loading'
import Modal from '.'
import dayjs from 'dayjs'
import UseAppStore from '@/stores/app.store'
import { saveCoupon } from '@/services/userApi'
import { CouponType } from '@/types/enum'
import { formatImageUrl } from '@/helpers/formatImageUrl'

function ModalCoupon() {
  const [open, setOpen] = useState(false)
  const params = useSearchParams()
  const [isPending, startTransition] = useTransition()
  const [coupon, setCoupon] = useState<CouponData | null>(null)
  const [copied, setCopied] = useState(false)
  const [accordionOpen, setAccordionOpen] = useState(false)

  // New states for email subscription and feedback
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const user = UseAppStore((state) => state.user)

  const handleCopyCode = async () => {
    if (coupon) {
      navigator.clipboard.writeText(coupon.code).then(() => {
        setCopied(true)
      })
      if (user) {
        await saveCoupon(coupon.id)
      }
    }
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    try {
      // API call để subscribe email
      // await subscribeEmail(email)
      setIsSubscribed(true)
    } catch (error) {
      console.error('Subscribe failed:', error)
    }
  }

  function isNumeric(value: string): boolean {
    return /^\d+$/.test(value)
  }

  useEffect(() => {
    const outClicked = params.get('outClicked')
    const referenceId = params.get('referenceId')
    if (referenceId && isNumeric(referenceId) && outClicked === 'true') {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [params.toString()])

  useEffect(() => {
    const referenceId = params.get('referenceId')
    if (open && referenceId) {
      startTransition(async () => {
        const res = await getCoupon(+referenceId)
        if (res.success && res.data) {
          setCoupon(res.data)
        }
      })
    }
  }, [open])

  const handleCloseCouponModal = () => {
    setOpen(false)
  }

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen)
  }

  return (
    <Modal
      onClose={handleCloseCouponModal}
      isCenter={false}
      isOpen={open}
      maxWidth="3xl"
    >
      {!isPending && coupon ? (
        <div className="relative grid max-h-[90vh] w-full grid-rows-[auto_auto_auto_1fr] gap-5 overflow-y-auto px-2 pt-10 md:px-0">
          {/* Fixed size image container */}
          <div className="relative mx-auto size-[96px] min-h-[96px] min-w-[96px] flex-shrink-0 overflow-hidden rounded-full border border-[#121821] bg-white object-contain">
            <Image
              src={formatImageUrl(coupon?.store?.image?.public_id)}
              alt={coupon.store?.name || coupon.title}
              fill
              priority
              sizes="96px"
            />
          </div>

          {/* Title - fixed height */}
          <h2 className="text-md flex-shrink-0 text-center font-bold md:text-xl">
            {coupon.title}
          </h2>

          {/* Coupon code and email section - fixed height */}
          <div className="flex flex-shrink-0 flex-col items-center">
            {/* Coupon code section */}
            {coupon.type === CouponType.CODE ? (
              <div className="flex flex-col items-center">
                <div className="relative mx-auto flex h-14 w-full items-center rounded-full border-1 border-slate-700 px-6 py-4 text-xl font-bold text-white transition duration-200 md:w-[288px]">
                  <span className="mr-2 flex-1 bg-gradient-to-r from-black via-gray-600 to-gray-300 bg-clip-text text-left text-transparent uppercase">
                    {coupon.code}
                  </span>

                  <span
                    onClick={handleCopyCode}
                    className="bg-green absolute top-1/2 right-1 ml-auto flex h-[90%] w-fit -translate-y-1/2 cursor-pointer items-center justify-center rounded-full px-6 font-bold text-white uppercase"
                  >
                    {copied ? 'copied' : 'copy'}
                  </span>
                </div>
                <p className="mt-2 text-xs text-gray-900 md:text-sm">
                  Copy and paste this code at{' '}
                  <Link
                    href={coupon?.offer_link || coupon.store?.url || ''}
                    className="text-green text-xs underline"
                  >
                    {coupon?.store?.name}
                  </Link>
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="relative mx-auto flex h-14 w-[288px] items-center rounded-full px-6 py-4 text-xl font-bold transition duration-200">
                  <Link
                    href={coupon.offer_link ?? ''}
                    target="_blank"
                    className="bg-green absolute top-1/2 right-1 ml-auto flex h-[90%] w-full -translate-y-1/2 cursor-pointer items-center justify-center rounded-full px-6 font-bold text-white uppercase"
                  >
                    Shop now
                  </Link>
                </div>
              </div>
            )}

            {/* Email Subscribe Section */}
            <div className="mx-auto mt-6 w-full md:max-w-md">
              <div className="mb-4 text-center">
                <p className="text-base text-gray-800">
                  Never miss a great{' '}
                  <span className="font-semibold text-[#B5D43B]">
                    {coupon.store?.name}
                  </span>{' '}
                  coupon, and so many more!
                </p>
              </div>

              {!isSubscribed ? (
                <form
                  onSubmit={handleSubscribe}
                  className="flex gap-0 overflow-hidden rounded-lg border border-gray-300"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="flex-1 border-none px-2 py-3 outline-none focus:ring-0 md:px-4"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#B5D43B] px-4 py-3 font-medium text-white transition duration-200 hover:bg-[#A5C235] md:px-6"
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="rounded-lg border border-[#B5D43B]/30 bg-[#B5D43B]/10 py-4 text-center">
                  <div className="mb-2 text-2xl text-[#B5D43B]">✓</div>
                  <p className="font-medium text-[#B5D43B]">
                    Thank you for subscribing!
                  </p>
                </div>
              )}

              <p className="mt-2 text-center text-xs text-gray-500">
                By clicking the Subscribe button, I agree to the{' '}
                <Link href="/terms" className="text-blue-500 hover:underline">
                  Terms of Use
                </Link>{' '}
                and have read the{' '}
                <Link href="/privacy" className="text-blue-500 hover:underline">
                  Privacy Statement
                </Link>
                .
              </p>
            </div>

            <p
              className="mt-6 flex-shrink-0 cursor-pointer text-base text-gray-900 underline"
              onClick={(e) => {
                e.preventDefault()
                toggleAccordion()
              }}
            >
              How does it work?
            </p>
          </div>

          {/* Accordion section - expandable */}
          <div className="w-full flex-grow text-black">
            <div className="w-full rounded-t-none bg-gray-100 px-2 py-4 md:px-8 md:py-8">
              <div
                className="text-md flex cursor-pointer font-semibold"
                onClick={(e) => {
                  e.preventDefault()
                  toggleAccordion()
                }}
              >
                {coupon.expire_date ? (
                  <span className="w-4/5 text-start text-lg font-semibold capitalize md:w-2/3">
                    {dayjs(coupon.expire_date).diff(dayjs(), 'day') < 7
                      ? 'ends soon'
                      : 'ends ' +
                        dayjs(coupon.expire_date).format('DD/MM/YYYY')}
                  </span>
                ) : (
                  <span className="w-4/5 text-start text-lg font-semibold capitalize md:w-2/3">
                    Valid everyday
                  </span>
                )}
                <div className="relative right-auto flex w-5/5 justify-end md:w-1/3">
                  <div className="flex items-center gap-2">
                    <p className="text-base font-semibold underline underline-offset-2">
                      Details & Exclusions
                    </p>
                    <div className="relative">
                      <svg
                        className={`h-5 w-5 fill-current stroke-1 transition-all duration-500 ease-in-out ${accordionOpen ? 'scale-50 rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M432 256c0 8.8-7.2 16-16 16H240v176c0 8.844-7.156 16.01-16 16.01s-16-7.21-16-16.01V272H32c-8.844 0-16-7.15-16-15.99C16 247.2 23.16 240 32 240h176V64c0-8.844 7.156-15.99 16-15.99s16 7.15 16 15.99v176h176c8.8 0 16 7.2 16 16" />
                      </svg>
                      <svg
                        className={`absolute top-0 h-5 w-5 fill-current stroke-1 transition-all duration-500 ease-in-out ${accordionOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M432 256c0 8.8-7.2 16-16 16H32c-8.844 0-16-7.15-16-15.99C16 247.2 23.16 240 32 240h384c8.8 0 16 7.2 16 16" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${accordionOpen ? 'mt-4 max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div>
                  <p className="font-sans text-lg font-extrabold">
                    Offer details
                  </p>
                  <p className="mt-4 text-sm">
                    Get Up to 60% Off {coupon.store?.name}&apos;s Top Deals of
                    the Day. No coupon or promo code needed!
                  </p>
                  <p className="mt-2 text-center text-sm capitalize md:mt-8">
                    *Turn off ad blockers. You must meet certain eligibility
                    requirements to earn rewards.
                    <Link
                      rel="noopener noreferrer nofollow"
                      href={coupon.offer_link ?? ''}
                      className="block font-bold underline underline-offset-2"
                      target="_blank"
                    >
                      See Full Details
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex min-h-[300px] items-center justify-center">
          <SpinnerLoading />
        </div>
      )}
    </Modal>
  )
}

export default ModalCoupon

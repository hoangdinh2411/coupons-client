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
type FeedbackMeta = { like_count?: number; dislike_count?: number }

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
  const [feedbackGiven, setFeedbackGiven] = useState<'yes' | 'no' | null>(null)

  // Counters for likes and dislikes
  const [likeCount, setLikeCount] = useState(0)
  const [dislikeCount, setDislikeCount] = useState(0)

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

  const handleFeedback = async (feedback: 'yes' | 'no') => {
    if (feedbackGiven === feedback) return // Prevent double clicking

    const previousFeedback = feedbackGiven
    setFeedbackGiven(feedback)

    // Update counters
    if (feedback === 'yes') {
      setLikeCount((prev) => prev + 1)
      // If previously disliked, decrease dislike count
      if (previousFeedback === 'no') {
        setDislikeCount((prev) => Math.max(0, prev - 1))
      }
    } else {
      setDislikeCount((prev) => prev + 1)
      // If previously liked, decrease like count
      if (previousFeedback === 'yes') {
        setLikeCount((prev) => Math.max(0, prev - 1))
      }
    }

    try {
      // API call để gửi feedback
      // await submitFeedback(coupon.id, feedback, previousFeedback)
    } catch (error) {
      console.error('Feedback failed:', error)
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
          // Load existing feedback counts from API (from meta_data if available)
          // If like_count/dislike_count are not present, fallback to 0
          const meta = res.data.meta_data as FeedbackMeta | undefined
          setLikeCount(
            meta && typeof meta.like_count === 'number' ? meta.like_count : 0,
          )
          setDislikeCount(
            meta && typeof meta.dislike_count === 'number'
              ? meta.dislike_count
              : 0,
          )
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
        <div className="relative flex h-[80vh] flex-col items-center gap-5 pt-10">
          <div className="relative mx-auto size-[96px] overflow-hidden rounded-full border border-[#121821] bg-[#121821] p-4 duration-300 ease-out group-hover:shadow-xl md:p-5">
            <Image
              src={coupon?.store?.image?.url || '/images/brandCard2.webp'}
              alt={coupon.store?.name || coupon.title}
              fill
              priority
              sizes="86px"
              className="aspect-square h-auto w-full object-contain"
            />
          </div>

          <h2 className="text-center text-xl font-bold">{coupon.title}</h2>

          <div className="flex flex-col items-center">
            <div className="relative mx-auto flex h-14 w-[288px] items-center rounded-full border-1 border-slate-700 px-6 py-4 text-xl font-bold text-white transition duration-200">
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
            <p className="mt-2 text-sm text-gray-900">
              Copy and paste this code at{' '}
              <Link
                href={coupon?.offer_link || coupon.store?.url || ''}
                className="text-green text-xs underline"
              >
                {coupon?.store?.name}
              </Link>
            </p>
          </div>

          {/* Email Subscribe Section */}
          <div className="mx-auto mt-6 w-full max-w-md">
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
                  className="flex-1 border-none px-4 py-3 outline-none focus:ring-0"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#B5D43B] px-6 py-3 font-medium text-white transition duration-200 hover:bg-[#A5C235]"
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
            className="mt-6 cursor-pointer text-base text-gray-900 underline"
            onClick={(e) => {
              e.preventDefault()
              toggleAccordion()
            }}
          >
            How does it work?
          </p>

          {/* Code Feedback Section with Counters */}
          <div className="mx-auto mt-4 w-full max-w-md">
            <div className="flex items-center justify-center gap-4">
              <span className="text-gray-700">Did the code work?</span>
              <div className="flex gap-3">
                <button
                  onClick={() => handleFeedback('yes')}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 transition duration-200 ${
                    feedbackGiven === 'yes'
                      ? 'border border-[#B5D43B]/30 bg-[#B5D43B]/20 text-[#B5D43B]'
                      : 'border border-gray-200 text-gray-600 hover:bg-[#B5D43B]/5'
                  }`}
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  <span className="text-sm font-medium">Yes</span>
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      feedbackGiven === 'yes'
                        ? 'bg-[#B5D43B] text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {likeCount}
                  </span>
                </button>

                <button
                  onClick={() => handleFeedback('no')}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 transition duration-200 ${
                    feedbackGiven === 'no'
                      ? 'border border-red-200 bg-red-100 text-red-700'
                      : 'border border-gray-200 text-gray-600 hover:bg-red-50'
                  }`}
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 113 0v6zM14 9.667v-5.43a2 2 0 00-1.106-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                  </svg>
                  <span className="text-sm font-medium">No</span>
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      feedbackGiven === 'no'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {dislikeCount}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full text-black">
            <div className="w-full rounded-t-none bg-gray-100 px-8 py-8">
              <div
                className="text-md flex cursor-pointer font-semibold"
                onClick={(e) => {
                  e.preventDefault()
                  toggleAccordion()
                }}
              >
                {coupon.expire_date && (
                  <span className="w-4/5 text-start text-lg font-semibold capitalize md:w-2/3">
                    {dayjs(coupon.expire_date).diff(dayjs(), 'day') < 7
                      ? 'ends soon'
                      : 'ends ' +
                        dayjs(coupon.expire_date).format('DD/MM/YYYY')}
                  </span>
                )}
                <div className="relative right-auto flex w-1/5 justify-end md:w-1/3">
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

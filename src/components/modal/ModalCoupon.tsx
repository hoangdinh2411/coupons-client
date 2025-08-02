'use client'
import React, { useEffect, useState, useTransition } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { getCoupon } from '@/services/couponApi'
import { CouponData } from '@/types/coupon.type'
import SpinnerLoading from '../loading'
import Modal from '.'

function ModalCoupon() {
  const [open, setOpen] = useState(false)
  const params = useSearchParams()
  const [isPending, startTransition] = useTransition()
  const [coupon, setCoupon] = useState<CouponData | null>(null)
  const [copied, setCopied] = useState(false)
  const [accordionOpen, setAccordionOpen] = useState(false)

  const handleCopyCode = () => {
    if (coupon) {
      navigator.clipboard.writeText(coupon.code).then(() => {
        setCopied(true)
      })
    }
  }

  function isNumeric(value: string): boolean {
    return /^\d+$/.test(value)
  }

  useEffect(() => {
    const outClicked = params.get('outClicked')
    const referenceId = params.get('referenceId')
    if (referenceId && isNumeric(referenceId) && outClicked === 'true') {
      setOpen(outClicked === 'true' ? true : false)
      startTransition(async () => {
        const res = await getCoupon(+referenceId)
        if (res.success && res.data) {
          setCoupon(res.data)
        }
      })
    }
  }, [params])

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
        <>
          <div className="relative mt-12 flex flex-col items-center gap-5 pt-10">
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

            <div>
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
                Copy and paste this code at {''}
                <Link
                  href={coupon?.offer_link || coupon.store?.url || ''}
                  className="text-green text-xs underline"
                >
                  {coupon?.store?.name}
                </Link>
              </p>
            </div>

            <p
              className="mt-4 cursor-pointer text-base text-gray-900 underline"
              onClick={(e) => {
                e.preventDefault()
                toggleAccordion()
              }}
            >
              How does it work?
            </p>

            <div className="w-full text-black">
              <div className="w-full rounded-t-none bg-gray-100 px-8 py-8">
                <div
                  className="text-md flex cursor-pointer font-semibold"
                  onClick={(e) => {
                    e.preventDefault()
                    toggleAccordion()
                  }}
                >
                  <span className="text-md w-4/5 text-start text-base font-semibold capitalize md:w-2/3">
                    ends soon.
                  </span>
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
                      Get Up to 60% Off Amazon&apos;s Top Deals of the Day. No
                      coupon or promo code needed!
                    </p>
                    <p className="captialize mt-2 text-center text-sm md:mt-8">
                      *Turn off ad blockers. You must meet certain eligibility
                      requirements to earn rewards.
                      <a
                        href=""
                        className="block font-bold underline underline-offset-2"
                        target="_blank"
                      >
                        See Full Details
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <SpinnerLoading />
      )}
    </Modal>
  )
}

export default ModalCoupon

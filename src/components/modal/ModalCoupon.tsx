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

  return (
    <Modal onClose={handleCloseCouponModal} isOpen={open} maxWidth="xl">
      {!isPending && coupon ? (
        <div className="relative flex flex-col items-center gap-5 py-10 text-center md:p-6">
          {/* Logo or Image */}
          <div className="relative size-[112px]">
            <Image
              src={coupon?.store?.image?.url || '/images/brandCard2.webp'}
              alt={coupon.store?.name || coupon.title}
              fill
              priority
              sizes="112px"
              className="rounded-[100%] border-1 border-slate-700 object-cover"
            />
          </div>

          {/* Title */}
          <h2 className="text-center text-xl font-bold">{coupon.title}</h2>

          {/* Description and Copy Button */}
          <div>
            <div className="relative flex h-14 w-[288px] items-center rounded-full border-1 border-slate-700 px-6 py-4 text-xl font-bold text-white transition duration-200">
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
                {coupon?.offer_link || coupon.store?.url}
              </Link>
            </p>
          </div>
          {/* Additional Info */}
          <p className="mt-4 cursor-pointer text-base text-gray-900 underline">
            How does it work?
          </p>
        </div>
      ) : (
        <SpinnerLoading />
      )}
    </Modal>
  )
}

export default ModalCoupon

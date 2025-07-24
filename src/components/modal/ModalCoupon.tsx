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
  const data = {
    title: 'Up to 30% Off with Ebay Coupon',
    imgUrl: '/images/brandCard2.webp',
    description: 'Copy and paste this code at ',
    slug: 'Ebay.com',
    actionBtn: true,
    couponCode: 'JSKAJQA',
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(data.couponCode).then(() => {
      alert('Coupon code copied to clipboard!')
    })
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
        <div className="relative flex flex-col items-center py-10 text-center md:p-6">
          {/* Logo or Image */}
          <div className="mb-4">
            <Image
              src={coupon?.store?.image?.url || '/images/brandCard2.webp'}
              alt="Ebay Logo"
              width={100}
              height={100}
              className="size-24 rounded-[100%] border-1 border-slate-700 object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="mb-2 text-lg font-bold">{coupon.title}</h2>

          {/* Description and Copy Button */}
          <button
            onClick={handleCopyCode}
            className="flex cursor-pointer items-center rounded-full border-1 border-slate-700 py-1 pr-1 pl-6 text-sm text-white transition duration-200"
          >
            <span className="mr-2 bg-gradient-to-r from-black via-gray-600 to-gray-300 bg-clip-text text-transparent">
              Code Provided at
            </span>
            <span className="bg-green rounded-full px-6 py-2 font-bold text-white">
              COPY
            </span>
          </button>
          <p className="mt-2 text-xs text-gray-900">
            {coupon.offer_detail}
            <Link
              href={coupon?.offer_link || coupon.store?.url || ''}
              className="text-green text-xs underline"
            >
              {coupon.store?.name}
            </Link>
          </p>
          {/* Additional Info */}
          <Link
            href={`/stores/${data.slug}`}
            className="mt-4 cursor-pointer text-sm text-gray-900 underline"
          >
            How does it work?
          </Link>
        </div>
      ) : (
        <SpinnerLoading />
      )}
    </Modal>
  )
}

export default ModalCoupon

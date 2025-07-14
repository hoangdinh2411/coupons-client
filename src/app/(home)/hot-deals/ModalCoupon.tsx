/* eslint-disable react/no-children-prop */
'use client'

import Modal from '@/components/modal'
import React from 'react'
import Image from 'next/image'

export interface ModalCouponProps {
  handleCloseCouponModal: () => void
  openCoupon: {
    isOpen: boolean
    title?: string
    badgeIcon?: string | null
    badgeTitle?: string
    imgUrl?: string
    description?: string
    name?: string
    actionBtn?: boolean
    couponCode?: string
  }
}

function ModalCoupon({ handleCloseCouponModal, openCoupon }: ModalCouponProps) {
  const {
    isOpen,
    title = 'Up to 30% Off with Ebay Coupon',
    imgUrl = '/images/brandCard2.webp',
    description = 'Copy and paste this code at ',
    name = 'Ebay',
    actionBtn = true,
    couponCode = 'Ebay30',
  } = openCoupon

  const handleCopyCode = () => {
    navigator.clipboard.writeText(couponCode).then(() => {
      alert('Coupon code copied to clipboard!')
    })
  }

  return (
    <div>
      <Modal onClose={handleCloseCouponModal} isOpen={isOpen} maxWidth="xl">
        <div className="relative flex flex-col items-center text-center md:p-6">
          {/* Logo or Image */}
          <div className="mb-4">
            <Image
              src={imgUrl}
              alt="Ebay Logo"
              width={100}
              height={100}
              className="size-24 rounded-[100%] border-1 border-slate-700 object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="mb-2 text-lg font-bold">{title}</h2>

          {/* Description and Copy Button */}
          {actionBtn && (
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
          )}
          <p className="mt-2 text-xs text-gray-900">
            {description}
            <span className="text-green text-xs underline">{name}</span>
          </p>
          {/* Additional Info */}
          <p className="mt-4 cursor-pointer text-sm text-gray-900 underline">
            How does it work?
          </p>
        </div>
      </Modal>
    </div>
  )
}

export default ModalCoupon

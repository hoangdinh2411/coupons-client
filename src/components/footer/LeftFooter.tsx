import { APP_ROUTERS } from '@/helpers/config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaTiktok } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const BOTTOM_FOOTER_DATA = [
  {
    href: 'https://www.facebook.com/TrustCoupon',
    ariaLabel: 'TrustCoupon on Facebook',
    icon: FaFacebook,
  },
  {
    href: 'https://www.instagram.com/TrustCoupon',
    ariaLabel: 'TrustCoupon on Instagram',
    icon: FaInstagram,
  },
  {
    href: 'https://www.pinterest.com/TrustCoupon',
    ariaLabel: 'TrustCoupon on Pinterest',
    icon: FaPinterest,
  },
  {
    href: 'https://x.com/TrustCoupon',
    ariaLabel: 'TrustCoupon on X',
    icon: FaXTwitter,
  },
  {
    href: 'https://www.tiktok.com/@TrustCoupon',
    ariaLabel: 'TrustCoupon on TikTok',
    icon: FaTiktok,
  },
]

const LeftFooter = () => {
  return (
    <div className="isolate w-full text-white md:w-2/5">
      <div className="flex flex-col items-start justify-start gap-6 lg:mb-8">
        <Link
          href={APP_ROUTERS.INDEX}
          className="relative block aspect-auto h-[100px] w-[200px]"
        >
          <Image
            src="/images/logo-with-white-text-and-green-logo.png"
            alt="Logo"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 200px, (max-width: 1200px) 200px, 80px"
          />
        </Link>
        <p className="leading-8">
            At TrustCoupon.com, our mission is to help you save money effortlessly. We provide a curated collection of verified coupons, promo codes, and deals from thousands of brands, ensuring every offer is trustworthy and ready to use.
        </p>
        <div className="mb-8 flex gap-4 lg:mb-0 lg:gap-6">
          {BOTTOM_FOOTER_DATA.map((social, index) => {
            const IconComponent = social.icon
            return (
              <Link
                key={index}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10"
                href={social.href}
                aria-label={social.ariaLabel}
              >
                <IconComponent className="h-6 w-6" />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LeftFooter

import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaTiktok } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const BOTTOM_FOOTER_DATA = {
  socialLinks: [
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
  ],
  footerLinks: [
    {
      label: 'TrustCoupon Canada',
      href: '/ca/',
      isInternal: true,
    },
    {
      label: 'AdChoices',
      href: 'https://optout.aboutads.info/?c=2&lang=EN',
      isInternal: false,
    },
    {
      label: 'Terms of Service',
      href: 'https://www.ziffdavis.com/terms-of-use',
      isInternal: false,
    },
    {
      label: 'Privacy Policy',
      href: 'https://www.ziffdavis.com/shopping-privacy-policy',
      isInternal: false,
    },
    {
      label: 'Do Not Sell My Personal Information',
      href: 'https://dsar.TrustCoupon.com/',
      isInternal: false,
    },
    {
      label: 'Accessibility',
      href: 'https://www.ziffdavis.com/accessibility',
      isInternal: false,
    },
    {
      label: 'Sitemap',
      href: '/sitemap/',
      isInternal: true,
    },
  ],
  copyright:
    '©2006-2025 TrustCoupon, Inc., a Ziff Davis company. All rights reserved. TrustCoupon and RMN are registered trademarks of TrustCoupon, Inc. Third-party trademarks are the property of their respective third-party owners. Presence of a third-party trademark does not mean that TrustCoupon has any relationship with that third-party or that the third-party endorses TrustCoupon or its services.',
}

const BottomFooter = () => {
  return (
    <div className="isolate mt-8 pb-10 text-xs text-white">
      <div className="mb-8 flex flex-col justify-between lg:mb-8 lg:flex-row lg:items-center">
        <div className="mb-8 flex lg:mb-0">
          {BOTTOM_FOOTER_DATA.socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <a
                key={index}
                className="mr-6 flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10"
                href={social.href}
                aria-label={social.ariaLabel}
              >
                <IconComponent className="h-6 w-6" />
              </a>
            )
          })}
        </div>

        <div className="font-proxima flex flex-wrap gap-4 lg:gap-6 [&>a]:block">
          {BOTTOM_FOOTER_DATA.footerLinks.map((link, index) => {
            // Internal Link (Next.js Link)
            if (link.isInternal && link.href) {
              return (
                <Link
                  key={index}
                  className="underline-offset-4 hover:underline"
                  href={link.href}
                >
                  {link.label}
                </Link>
              )
            }

            return (
              <a
                key={index}
                className="underline-offset-4 hover:underline"
                href={link.href}
              >
                {link.label}
              </a>
            )
          })}
        </div>
      </div>

      <span>{BOTTOM_FOOTER_DATA.copyright}</span>
    </div>
  )
}

export default BottomFooter

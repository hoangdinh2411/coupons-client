import React from 'react'
import RightFooter from './RightFooter'
import LeftFooter from './LeftFooter'
import Link from 'next/link'

const footerLinks = [
  {
    label: 'Terms of Service',
    href: '/terms-of-use',
  },
  {
    label: 'Privacy Policy',
    href: '/privacy-policy',
  },
  {
    label: 'Do Not Sell My Personal Information',
    href: '/dsar',
  },
  {
    label: 'Accessibility',
    href: '/accessibility',
  },
  {
    label: 'Sitemap',
    href: '/sitemap/',
  },
]
const Footer = () => {
  return (
    <footer className="bg-olive-green max-w-screen overflow-clip px-4 py-8">
      <div className="mx-auto flex max-w-(--max-width) flex-col gap-10 py-8 text-white md:flex-row md:gap-15 lg:gap-20">
        <LeftFooter />
        <RightFooter />
      </div>
      <div className="mx-auto max-w-(--max-width) py-4 text-center">
        <div className="font-proxima mb-4 flex flex-wrap justify-center gap-4 text-white md:gap-6">
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              className="text-xs underline-offset-4 hover:underline"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <span className="text-white">
          ©{new Date().getFullYear()} TrustCoupon.Com, Inc. All rights
          reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer

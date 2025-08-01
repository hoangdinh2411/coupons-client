import { APP_ROUTERS } from '@/helpers/config'
import Link from 'next/link'
import React from 'react'

const SAMPLE_FOOTER_DATA = {
  columns: [
    {
      title: 'Discover More',
      links: [
        { label: 'BROWSE STORES', href: APP_ROUTERS.ALL_STORES },
        { label: 'BROWSE CATEGORIES', href: APP_ROUTERS.ALL_CATEGORIES },
        { label: 'THE REAL DEAL BLOG', href: APP_ROUTERS.ALL_BLOGS },
      ],
    },
    {
      title: 'Tools & Support',
      links: [
        { label: 'MY TRUSTCOUPON', href: APP_ROUTERS.MY_COUPONS },
        { label: 'My Account + Rewards', href: APP_ROUTERS.PROFILE },
        { label: 'Submit a Coupon', href: APP_ROUTERS.SUBMIT_COUPON },
        { label: 'Get Help', href: '#' },
      ],
    },
  ],
}

const RightFooter = () => {
  return (
    <div className="md:-gap-4 flex flex-1 flex-wrap justify-between px-0 py-8 lg:gap-8 lg:px-8">
      {SAMPLE_FOOTER_DATA.columns.map((column, index) => (
        <div key={index} className="flex flex-col gap-8">
          <b className="text-lg font-bold uppercase">{column.title}</b>
          {column.links && (
            <ul className="flex flex-col gap-4">
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:border-b"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <form className="mt-8 w-full">
        <fieldset className="flex gap-8 overflow-hidden rounded-full bg-white px-4 py-2">
          <input
            placeholder="Enter your email"
            className="text-olive-green w-full bg-white"
          />
          <button
            type="button"
            className="bg-olive-green -full rounded-full px-4 py-2"
          >
            Subscribe
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default RightFooter

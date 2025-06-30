import { APP_ROUTERS } from '@/helpers/config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SAMPLE_FOOTER_DATA = {
  columns: [
    {
      title: '💰 CASH BACK',
      links: [
        { label: 'BROWSE STORES', href: '#' },
        { label: 'BROWSE CATEGORIES', href: '#' },
        { label: 'THE REAL DEAL BLOG', href: '#' },
        { label: 'BROWSER EXTENSION', href: '#' },
        { label: 'CAREERS', href: '#' },
      ],
    },
    {
      title: 'MY RMN',
      links: [
        { label: 'My Account + Rewards', href: '#' },
        { label: 'RMN Community', href: '#' },
        { label: 'Submit a Coupon', href: '#' },
        { label: 'Get Help', href: '#' },
      ],
    },
    {
      title: 'GET BROWSER EXTENSION',
      content: {
        type: 'description',
        text: 'Automatically apply codes + cash back when you shop online with the',
        link: {
          label: 'TrustCoupon Browser Extension',
          href: '#',
        },
      },
    },
    {
      title: 'DOWNLOAD THE APP',
      content: {
        type: 'app_download',
        description: 'Get app-only offers and the best of RMN',
        qrCode: {
          show: true,
          alt: 'QR Code',
        },
        appStoreButtons: [
          {
            label: '📱 Download on the App Store',
            href: '#',
            platform: 'ios',
          },
          {
            label: '📱 GET IT ON Google Play',
            href: '#',
            platform: 'android',
          },
        ],
      },
    },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-olive-green max-w-screen overflow-clip">
      <div className="relative flex flex-col items-center justify-center py-4">
        <Link
          href={APP_ROUTERS.INDEX}
          className="relative block aspect-auto h-48 w-10 md:w-40"
        >
          <Image
            src="/images/logo-with-white-text-and-green-logo.png"
            alt="Logo"
            fill
            priority
            className="hidden object-contain md:block"
            sizes="(max-width: 768px) 200px, (max-width: 1200px) 200px, 80px"
          />
        </Link>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 text-white md:px-8 lg:mt-10 xl:px-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {SAMPLE_FOOTER_DATA.columns.map((column, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-sm font-semibold">{column.title}</h3>

              {column.links && (
                <ul className="space-y-2 text-sm">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="transition-colors hover:text-green-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {column.content?.type === 'description' &&
                column.content.link && (
                  <div className="space-y-2 text-sm">
                    <p>{column.content.text}</p>
                    <a
                      href={column.content.link.href}
                      className="underline transition-colors hover:text-green-300"
                    >
                      {column.content.link.label}
                    </a>
                  </div>
                )}

              {column.content?.type === 'app_download' && (
                <div className="space-y-3">
                  <p className="text-sm">{column.content.description}</p>

                  {column.content.qrCode?.show && (
                    <div className="flex h-20 w-20 items-center justify-center rounded border-2 border-gray-300 bg-white">
                      <span className="text-xs text-gray-500">QR</span>
                    </div>
                  )}

                  <div className="space-y-2">
                    {column.content.appStoreButtons?.map(
                      (button, buttonIndex) => (
                        <a
                          key={buttonIndex}
                          href={button.href}
                          className="block"
                        >
                          <div className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                            {button.label}
                          </div>
                        </a>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

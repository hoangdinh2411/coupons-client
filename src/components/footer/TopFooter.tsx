import React from 'react'

const SAMPLE_FOOTER_DATA = {
  columns: [
    {
      title: 'CASH BACK',
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
        description: 'Get app-only offers and the best of TrustCoupon',
      },
    },
  ],
}

const TopFooter = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
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

          {column.content?.type === 'description' && column.content.link && (
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

              <div className="flex h-20 w-20 items-center justify-center rounded border-2 border-gray-300 bg-white">
                <span className="text-xs text-gray-500">QR Here</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default TopFooter

import { APP_ROUTERS } from '@/helpers/config'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function AuthLayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-green flex h-auto w-full items-center justify-center p-2">
        <Link
          href={APP_ROUTERS.INDEX}
          className="relative aspect-auto h-12 w-40"
        >
          <Image
            src="/images/logo-with-text-and-black-logo.png"
            alt="Logo"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 120px, (max-width: 1200px) 200px, 80px"
          />
        </Link>
      </div>
      <main className="flex flex-1 flex-col bg-white sm:bg-transparent">
        <div className="flex h-full w-full flex-col items-center justify-center px-4 sm:px-0 md:pt-0">
          {children}
        </div>
      </main>
      <div className="border-t-1 border-gray-300 p-5 text-center">
        © 2025 TrustCoupon, Inc.
      </div>
    </div>
  )
}

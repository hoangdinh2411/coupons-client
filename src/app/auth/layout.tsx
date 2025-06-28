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
    <div className="fixed top-0 left-0 flex h-full w-full flex-col">
      <header className="bg-green flex h-auto w-full items-center justify-center p-2">
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
      </header>
      <main className="flex w-full flex-1 items-center justify-between">
        {children}{' '}
      </main>
      <footer className="border-1 border-r-0 border-b-0 border-l-0 border-gray-300 p-5 text-center">
        © 2025 Trust Coupon, Inc.
      </footer>
    </div>
  )
}

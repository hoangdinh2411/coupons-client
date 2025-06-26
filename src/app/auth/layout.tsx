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
    <div className="fixed top-0 left-0 w-full h-full  flex flex-col ">
      <header className="w-full bg-green flex justify-center items-center p-2 h-auto">
        <Link
          href={APP_ROUTERS.INDEX}
          className="relative w-40 aspect-auto h-12"
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
      <main className="flex-1 flex justify-between items-center w-full">
        {children}{' '}
      </main>
      <footer className="p-5 text-center border-1 border-l-0 border-r-0 border-b-0 border-gray-300">
        © 2025 Trust Coupon, Inc.
      </footer>
    </div>
  )
}

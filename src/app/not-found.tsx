import Footer from '@/components/footer'
import { APP_ROUTERS } from '@/helpers/config'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
export const metadata: Metadata = {
  title: '404 — Sorry!',
}
export default function NotFound() {
  return (
    <div className="grid grid-cols-1">
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
      <main className="min-h-screen">
        <div className="flex h-full flex-col items-center justify-center">
          <h1 className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-3xl font-bold md:text-5xl">
            404 — Sorry!
          </h1>

          <h2 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Page not found
          </h2>
          <p className="mt-3 max-w-[600px] text-center text-lg text-gray-600">
            Sorry! We couldn’t find the page you requested. Please check the URL
            or head back to the homepage.
          </p>

          <div className="mt-8 flex w-full items-center justify-center gap-3">
            <Link href={APP_ROUTERS.INDEX} className="btn-primary max-w-30">
              Go home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

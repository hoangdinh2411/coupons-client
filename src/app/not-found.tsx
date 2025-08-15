import Footer from '@/components/footer'
import Header from '@/components/header'
import { APP_ROUTERS } from '@/helpers/config'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="grid grid-cols-1">
      <Header />
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

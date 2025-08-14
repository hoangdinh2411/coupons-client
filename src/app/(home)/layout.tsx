import Footer from '@/components/footer'
import Header from '@/components/header'
import { ReactNode, Suspense } from 'react'

export default function MainLayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <div className="grid grid-cols-1">
      <Suspense>
        <Header />
      </Suspense>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  )
}

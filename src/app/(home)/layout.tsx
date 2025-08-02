import Footer from '@/components/footer'
import Header from '@/components/header'
import { ReactNode } from 'react'

export default function MainLayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <div className="grid grid-cols-1">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  )
}

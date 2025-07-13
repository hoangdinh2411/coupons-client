import Footer from '@/components/footer'
import Header from '@/components/header'
import { Fragment, ReactNode } from 'react'

export default function MainLayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <Fragment>
      <Header />
      <main className="my-10 px-4">{children}</main>
      <Footer />
    </Fragment>
  )
}

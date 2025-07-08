import Footer from '@/components/footer'
// import Header from '@/components/header'
import { Fragment, ReactNode } from 'react'

export default function MainLayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <Fragment>
      {/* <Header /> */}
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}

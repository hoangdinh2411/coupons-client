import Footer from '@/components/footer'
// import Header from '@/components/header'
import { Fragment, ReactNode, Suspense } from 'react'

export default function MainLayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <Fragment>
      <Suspense>{/* <Header /> */}</Suspense>
      <main className="px-4">{children}</main>
      <Footer />
    </Fragment>
  )
}

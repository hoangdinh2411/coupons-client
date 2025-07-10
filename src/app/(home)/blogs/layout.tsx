import { Fragment, ReactNode } from 'react'
import CategoryList from './_components/CategoryList'
import Link from 'next/link'

export default function BlogLayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <Fragment>
      <nav className="mx-auto max-w-[1162px] pt-10">
        <CategoryList />
        <div className="mt-4 text-center text-xs">
          <p className="text-olive-green text-xs">
            Every product and brand is selected by RetailMeNot&apos;s editors.
            We may earn a commission on the items you choose to buy.{' '}
            <Link className="font-bold" href="/blogs/about">
              Learn more
            </Link>
          </p>
        </div>
      </nav>
      {children}
    </Fragment>
  )
}

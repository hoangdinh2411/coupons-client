import { Fragment, ReactNode } from 'react'
import CategoryList from './_components/CategoryList'
import Link from 'next/link'

const BLOG_CATEGORIES = [
  {
    category_id: '1',
    category_name: 'Budget',
    category_slug: '',
    category_image: '/images/blog-budget-124x124.webp',
  },
  {
    category_id: '2',
    category_name: 'Beauty',
    category_slug: '',
    category_image: '/images/blog-beauty-124x124.webp',
  },
  {
    category_id: '3',
    category_name: 'Fashion',
    category_slug: '',
    category_image: '/images/blog-fashion-124x124.webp',
  },
  {
    category_id: '4',
    category_name: 'Home',
    category_slug: '',
    category_image: '/images/blog-home-124x124.webp',
  },
  {
    category_id: '5',
    category_name: 'Tech',
    category_slug: '',
    category_image: '/images/blog-tech-124x124.webp',
  },
  {
    category_id: '6',
    category_name: 'Travel',
    category_slug: '',
    category_image: '/images/blog-travel-124x124.webp',
  },
  {
    category_id: '7',
    category_name: 'Deals',
    category_slug: '',
    category_image: '/images/blog-deals-124x124.webp',
  },
  {
    category_id: '8',
    category_name: 'Calendar',
    category_slug: '',
    category_image: '/images/blog-calendar-124x124.webp',
  },
]
export default function BlogLayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <Fragment>
      <nav className="mx-auto hidden max-w-[1162px] pt-5 lg:block">
        <CategoryList categories={BLOG_CATEGORIES} />
        <div className="mt-4 text-center text-xs">
          <p className="text-olive-green text-sm">
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

'use client'
import UseAppStore from '@/stores/app.store'
import Link from 'next/link'
import React from 'react'

export default function CategoryList() {
  const menu = UseAppStore((state) => state.menu)

  return (
    <div className="w-full columns-1 gap-4 lg:columns-3">
      {menu.categories &&
        menu.categories.map((cat) => (
          <div className="mb-8" key={cat.id}>
            <Link
              href={`coupons/${cat.slug}`}
              className="block text-sm font-semibold uppercase hover:underline"
            >
              {cat.name}
            </Link>
            <ul className="ml-12 list-disc">
              {cat.stores &&
                cat.stores.map((store) => (
                  <li key={store.id} className="text-sm text-slate-700">
                    <Link
                      className="block w-full py-2 hover:underline"
                      href={`/stores/${store.slug}`}
                    >
                      {store.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </div>
  )
}

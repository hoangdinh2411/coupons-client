'use client'
import BaseAccordion from '@/components/accordion/BaseAccordion'
import UseAppStore from '@/stores/app.store'
import React from 'react'

export default function PopularList() {
  const menu = UseAppStore((state) => state.menu)
  return (
    <section>
      <details className="group mb-8 border-b border-gray-200 pb-8 md:mt-20">
        <BaseAccordion
          data={menu.top_categories.map((c) => ({
            id: c.id,
            name: c.name,
            slug: '/coupons/' + c.slug,
          }))}
          title="Popular Categories"
        />
      </details>
      <details className="group mb-8 border-b border-gray-200 pb-8 md:mt-20">
        <BaseAccordion
          data={menu.popular.map((s) => ({
            id: s.id,
            name: s.name,
            slug: '/stores/' + s.slug,
          }))}
          title="Popular Stores"
        />
      </details>
    </section>
  )
}

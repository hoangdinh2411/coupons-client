import { APP_ROUTERS } from '@/helpers/config'
import { getAllCategoriesWithAllStores } from '@/services/clientApi'
import Link from 'next/link'
import React, { use } from 'react'

export default function CategoryList() {
  const res = use(getAllCategoriesWithAllStores())
  const data = res.data
  return (
    <div className=" w-full columns-1 gap-4 lg:columns-3">
      {data &&
        data.map((cat) => (
          <div className="mb-8" key={cat.id}>
            <Link
              href="/"
              className="  block text-sm font-semibold uppercase hover:underline"
            >
              {cat.name}
            </Link>
            <ul className="ml-12 list-disc">
              {cat.stores &&
                cat.stores.map((store) => (
                  <li
                    key={store.id}
                    className="text-sm text-slate-700 "
                  >
                    <Link
                      className="block w-full py-2 hover:underline"
                      href={`${APP_ROUTERS.STORES}/${store.slug}`}
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

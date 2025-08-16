import { CategoryData } from '@/types/category.type'
import Link from 'next/link'

export default function CategoryList({
  categories,
}: {
  categories: CategoryData[]
}) {
  return (
    <div className="w-full columns-1 gap-4 lg:columns-3">
      {categories &&
        categories?.map((cat) => (
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

import React from 'react'
import StoreHeader from './StoreHeader'
import Link from 'next/link'
import { searchStore } from '@/services/storeApi'

type Props = {
  letter?: string
}

export default async function StoreList({ letter }: Props) {
  const res = await searchStore(letter)

  return (
    <div className="">
      <StoreHeader currentLetter={letter ?? 'A'} />
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="container mx-auto">
          {res.data && res.data.length > 0 ? (
            <ul className="mx-4 grid list-disc gap-x-6 gap-y-6 pt-10 pb-4 text-sm md:grid-cols-2 lg:grid-cols-3">
              {res?.data.map((store) => (
                <li key={store.id}>
                  <Link
                    href={`/stores/${store.slug}`}
                    className="text-base hover:underline"
                  >
                    {store.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="py-4 text-center">No stores found</p>
          )}
        </div>
      </div>
    </div>
  )
}

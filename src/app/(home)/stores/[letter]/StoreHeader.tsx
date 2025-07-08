'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const listLetters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '0-9',
]

const sampleData = [
  { letter: 'A', stores: ['Amazon', 'Apple', 'Adobe'] },
  { letter: 'B', stores: ['Best Buy', 'Barnes & Noble'] },
  { letter: 'C', stores: ['Costco', 'CVS'] },
  { letter: 'D', stores: ['Dell', 'Disney'] },
  { letter: 'E', stores: ['eBay', 'Etsy'] },
  { letter: 'F', stores: ['Facebook', 'FedEx'] },
  { letter: 'G', stores: ['Google', 'GameStop'] },
  { letter: 'H', stores: ['Home Depot', 'Hulu'] },
  { letter: 'I', stores: ['IKEA', 'Instacart'] },
  { letter: 'J', stores: ['JCPenney', 'Jet.com'] },
  { letter: 'K', stores: ["Kohl's", 'Kroger'] },
  { letter: 'L', stores: ["Lowe's", 'LinkedIn'] },
  { letter: 'M', stores: ['Microsoft', "Macy's"] },
  { letter: 'N', stores: ['Netflix', 'Nordstrom'] },
  { letter: 'O', stores: ['Office Depot', 'Old Navy'] },
  { letter: 'P', stores: ['PayPal', 'Petco'] },
  { letter: 'Q', stores: ['Quora'] },
  { letter: 'R', stores: ['Rakuten', 'Reddit'] },
  { letter: 'S', stores: ['Starbucks', 'Sears'] },
  { letter: 'T', stores: ['Target', 'T-Mobile'] },
  { letter: 'U', stores: ['Uber Eats', 'Ulta Beauty'] },
  { letter: 'V', stores: ['Verizon', "Victoria's Secret"] },
  { letter: 'W', stores: ['Walmart', 'Wayfair'] },
  { letter: 'X', stores: ['Xbox Store'] },
  { letter: 'Y', stores: ['Yahoo Store'] },
  { letter: 'Z', stores: ['Zappos'] },
  { letter: '0-9', stores: ['123Stores', '1800Flowers'] },
]

interface StoreHeaderProps {
  currentLetter: string
}

const StoreHeader = ({ currentLetter }: StoreHeaderProps) => {
  const router = useRouter()

  const handleLinkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLetter = event.target.value
    router.push(`/stores/${selectedLetter}`)
  }

  return (
    <div className="shadow-xl">
      <div className="container mx-auto px-4">
        <h2 className="my-8 text-xl leading-tight font-bold md:text-2xl md:leading-normal">
          Browse Stores Starting with {currentLetter}
        </h2>

        <div className="relative flex items-center justify-between px-4 pt-1 max-lg:hidden">
          {listLetters.map((letter) => (
            <Link
              key={letter}
              href={`/stores/${letter}`}
              className={`border-b-4 px-4 pb-1 hover:font-semibold ${currentLetter === letter ? 'border-black font-semibold' : 'border-transparent'}`}
            >
              {letter}
            </Link>
          ))}
        </div>

        <select
          defaultValue="A"
          className="mb-4 block w-full rounded border border-gray-200 p-2 lg:hidden"
          onChange={handleLinkChange}
        >
          {listLetters.map((letter) => (
            <option key={letter} value={letter}>
              Starting with {letter}
            </option>
          ))}
        </select>
      </div>

      <div className="lg:bg-[#f7f7f7]">
        <div className="container mx-auto px-4">
          <ul className="mx-4 grid list-disc gap-x-6 gap-y-6 pt-10 pb-4 text-sm md:grid-cols-2 lg:grid-cols-3">
            {sampleData
              .filter((item) => item.letter === currentLetter)
              .flatMap((item) => item.stores)
              .map((store, index) => (
                <li key={index} className="text-base hover:underline">
                  <Link
                    href={`/stores/${currentLetter}/${store.toLowerCase()}`}
                  >
                    {store}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StoreHeader

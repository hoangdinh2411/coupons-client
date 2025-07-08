import React from 'react'
import StoreHeader from './StoreHeader'
import Link from 'next/link'

interface StoresLetterPageProps {
  params: {
    letter: string
  }
}

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

const StoresLetterPage = ({ params }: StoresLetterPageProps) => {
  const { letter } = params

  return (
    <div>
      <StoreHeader currentLetter={letter} />

      <div className="lg:bg-[#f7f7f7]">
        <div className="container mx-auto px-4">
          <ul className="mx-4 grid list-disc gap-x-6 gap-y-6 pt-10 pb-4 text-sm md:grid-cols-2 lg:grid-cols-3">
            {sampleData
              .filter((item) => item.letter === letter)
              .flatMap((item) => item.stores)
              .map((store, index) => (
                <li key={index} className="text-base hover:underline">
                  <Link href={`/stores/${letter}/${store.toLowerCase()}`}>
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

export default StoresLetterPage

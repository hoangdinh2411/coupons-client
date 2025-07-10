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

const StoreHeader = ({ currentLetter }: { currentLetter: string }) => {
  const router = useRouter()

  const handleLinkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLetter = event.target.value
    router.push(`/brands/${selectedLetter}`)
  }

  return (
    <div className="shadow-xl">
      <div className="container mx-auto w-full max-w-[1280px]">
        <h2 className="my-8 text-xl leading-tight font-extrabold md:text-2xl md:leading-normal">
          Browse Stores Starting with {currentLetter}
        </h2>

        <div className="relative flex items-center justify-between px-4 pt-1 max-lg:hidden">
          {listLetters.map((letter) => (
            <Link
              key={letter}
              href={`/brands/${letter}`}
              className={`border-b-4 px-4 pb-1 hover:font-extrabold ${currentLetter === letter ? 'border-black font-extrabold' : 'border-transparent'}`}
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
    </div>
  )
}

export default StoreHeader

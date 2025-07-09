'use client'
import Image from 'next/image'
import React from 'react'

const CARDS = [
  {
    imgUrl: '/images/blog-card1.webp',
    title: "Best trader Joe's",
    description: 'Beauty Dupes We Love',
  },
  {
    imgUrl: '/images/blog-card2.webp',
    title: 'Shop now',
    description: 'Exceptional American-Made Brands',
  },
  {
    imgUrl: '/images/blog-card3.webp',
    title: 'Swimwear',
    description: 'Beyond the Bikini',
  },
]

function RealDeal() {
  return (
    <div className="bg-[#EFFAFB] p-4 flex flex-col justify-center items-center">
      <Image
        src={'/images/realdeal-logo.svg'}
        alt="Real Deal Logo"
        width={300}
        height={300}
      />

      <div className="flex w-full gap-7">
        {/* Large Card Left */}
        <div className="w-4/5 mt-10">
          <Image
            src={'/images/open-blog-card.webp'}
            alt="Open Blog Card"
            className="rounded-4xl w-full flex-1"
            width={1400}
            height={1300}
          />
        </div>

        {/* List of Cards Right */}
        <div className="mt-10 flex flex-col gap-4">
          {CARDS.map((card, index) => (
            <div
              key={index}
              className="overflow-hidden flex gap-2 duration-300"
            >
              <div className="w-[144px]  h-[128px] rounded-xl">
                <Image
                  src={card.imgUrl}
                  alt={card.title}
                  width={500}
                  height={500}
                  className="size-full object-cover rounded-xl"
                />
                <div className="">
                  <p>Holiday Hours</p>
                  <p>
                    Stores Open 4th of July and Store Hours When and where to
                    shop for July 4th sales this year (2025). Best Trader
                    Joe&apos;s Best Trader Joe&apos;s Beauty Dupes We Love Shop
                    Now Shop Now Exceptional American-Made Brands Swimwear
                    Swimwear Beyond the Bikini Best Clothing, Shoes &
                    Accessories Deals
                  </p>
                </div>
              </div>
              <div className="flex-1 p-4 flex flex-col justify-center">
                <p className="text-md font-bold text-gray-800 uppercase">
                  {card.title}
                </p>
                <p className="text-lg  text-gray-400">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RealDeal

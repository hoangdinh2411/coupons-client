import { CARDS } from '@/constant/hot-deals'
import Image from 'next/image'
function RealDeal() {
  return (
    <section className="flex flex-col items-center justify-center bg-[#EFFAFB] p-4">
      <Image
        src={'/images/realdeal-logo.svg'}
        alt="Real Deal Logo"
        width={300}
        height={300}
        priority
      />
      <div className="flex w-full gap-7">
        <article className="mt-10 w-4/5">
          <Image
            src={'/images/open-blog-card.webp'}
            alt="Featured blog post"
            className="w-full flex-1 rounded-4xl"
            width={1400}
            height={1300}
            priority
          />
        </article>
        <aside className="mt-10 flex flex-col gap-4">
          {CARDS.map((card, index) => (
            <div
              key={index}
              className="flex gap-2 overflow-hidden duration-300"
            >
              <div className="h-[128px] w-[144px] rounded-xl">
                <Image
                  src={card.imgUrl}
                  alt={card.title}
                  width={500}
                  height={500}
                  className="size-full rounded-xl object-cover"
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
              <div className="flex flex-1 flex-col justify-center p-4">
                <p className="text-md font-bold text-gray-800 uppercase">
                  {card.title}
                </p>
                <p className="text-lg text-gray-400">{card.description}</p>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  )
}

export default RealDeal

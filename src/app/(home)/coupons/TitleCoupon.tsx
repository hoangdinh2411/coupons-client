import React from 'react'

function TitleCoupon({ title, link }: { title: string; link: string }) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between lg:mb-0">
      <h2 className="mb-4 text-xl font-bold capitalize leading-tight md:leading-normal">
        <a className="block pt-12" href={`${link}`}>
          {title}
        </a>
      </h2>
    </div>
  )
}

export default TitleCoupon

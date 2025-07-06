import React from 'react'

function TitleCoupon({
  title,
  link,
  viewAllText,
}: {
  title: string
  link: string
  viewAllText?: string
}) {
  return (
    <div className="mb-6 flex flex-wrap justify-between lg:mb-0">
      <p className="mb-4 w-full text-xl leading-tight font-bold capitalize md:w-auto md:leading-normal lg:text-2xl">
        <a className="block" href={`${link}`}>
          {title}
        </a>
      </p>
      {viewAllText && (
        <div className="block text-[12px] font-semibold tracking-widest uppercase underline underline-offset-4 md:ml-auto md:text-[16px] lg:mt-4">
          {viewAllText}
        </div>
      )}
    </div>
  )
}

export default TitleCoupon

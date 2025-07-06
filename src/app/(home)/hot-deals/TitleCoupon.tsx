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
      <p
        className="mb-4 w-full md:w-auto text-xl lg:text-2xl font-bold capitalize md:leading-normal leading-tight 
      "
      >
        <a className="block" href={`${link}`}>
          {title}
        </a>
      </p>
      {viewAllText && (
        <div
          className="
        block font-semibold  tracking-widest  underline-offset-4
        uppercase underline text-[12px] md:text-[16px] lg:mt-4 md:ml-auto"
        >
          {viewAllText}
        </div>
      )}
    </div>
  )
}

export default TitleCoupon

import dayjs from 'dayjs'
import React from 'react'

const CouponsHeader = () => {
  return (
    <>
      <div className="absolute right-0 left-0 hidden min-h-16 py-6 shadow-sm lg:block lg:bg-white">
        <div className="container mx-4 flex max-w-screen-xl flex-col px-4 xl:mx-auto">
          <p className="font-sans-bold mb-3 hidden text-xl leading-tight font-extrabold [grid-area:heading] lg:mt-1 lg:-mb-3 lg:flex lg:self-start lg:pl-0 lg:text-4xl">
            {'Baby'} {' Sales & Deals'}
          </p>
          <p className="mt-4 text-sm font-[600] tracking-wider uppercase">
            Top offers for {dayjs().format('MMMM, DD YYYY')}
          </p>
        </div>
      </div>

      <div className="block lg:hidden">
        <h1 className="col-span-2 col-start-1 row-start-2 flex bg-white px-4 pt-10 pb-2 text-xl font-extrabold lg:col-start-1 lg:row-start-1 lg:mt-1 lg:-mb-1 lg:items-end lg:self-start lg:pl-0 lg:text-4xl">
          {'Baby'} {' Sales & Deals'}
        </h1>

        <p className="my-2 px-4 text-sm font-[600] tracking-wider uppercase">
          Top offers for {dayjs().format('MMMM, DD YYYY')}
        </p>
      </div>
    </>
  )
}

export default CouponsHeader

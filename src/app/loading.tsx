import SpinnerLoading from '@/components/loading'
import React from 'react'

export default function Loading() {
  return(
    <div className='fixed top-0 left-0 size-full flex justify-center items-center'>
       <SpinnerLoading />
    </div>
  )
}

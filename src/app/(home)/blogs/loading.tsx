import SpinnerLoading from '@/components/loading'
import React from 'react'

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 flex size-full items-center justify-center">
      <SpinnerLoading className="h-20 w-20" />
    </div>
  )
}

import React from 'react'

export default function SpinnerLoading() {
  return (
    <div className="flex items-center justify-center">
      <div className="border-light-green h-8 w-8 animate-spin rounded-full border-4 border-t-transparent" />
    </div>
  )
}

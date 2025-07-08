import React from 'react'
import StoreHeader from './StoreHeader'

interface StoresLetterPageProps {
  params: {
    letter: string
  }
}

const StoresLetterPage = ({ params }: StoresLetterPageProps) => {
  const { letter } = params

  return (
    <div>
      <StoreHeader currentLetter={letter} />
    </div>
  )
}

export default StoresLetterPage

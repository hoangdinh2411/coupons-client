import React, { Suspense } from 'react'
import StoreList from './StoreList'

async function StoreListPage({
  params,
}: {
  params: Promise<{
    letter: string
  }>
}) {
  const { letter } = await params

  return (
    <Suspense>
      <StoreList letter={letter} />
    </Suspense>
  )
}

export default StoreListPage

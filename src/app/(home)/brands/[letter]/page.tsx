import React from 'react'
import StoreList from './StoreList'

async function StoreListPage({
  params,
}: {
  params: Promise<{
    letter: string
  }>
}) {
  const { letter } = await params

  return <StoreList letter={letter} />
}

export default StoreListPage

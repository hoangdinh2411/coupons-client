import React from 'react'
import StoreList from './StoreList'
import { METADATA } from '@/helpers/config'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ letter: string }>
}): Promise<Metadata> {
  const letter = (await params).letter
  return {
    title: 'Store start with letter ' + letter,
    openGraph: {
      title: 'Store start with letter ' + letter,
      url: `${METADATA.APP_URL}/brands/${letter}`,
    },
  }
}

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

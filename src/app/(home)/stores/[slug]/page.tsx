import { getStoreBySlug } from '@/services/storeApi'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function StoreDetailPage({
  params,
}: {
  params: Promise<{
    slug: string
  }>
}) {
  const { slug } = await params
  const res = await getStoreBySlug(slug)
  if (!res.success || !res.data) {
    return notFound()
  }
  return <div>{res.data.name}</div>
}

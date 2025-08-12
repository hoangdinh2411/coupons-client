'use server'
import { ImageType } from '@/types/share.type'
import customFetchWithToken from './customFetchWithToken'

export async function uploadFile(payload: FormData) {
  console.log('🚀 ~ uploadFile ~ payload:', payload)
  return await customFetchWithToken<ImageType[]>(`/files`, {
    method: 'POST',
    body: payload,
  })
}
export async function deleteFiles(public_ids: string[]) {
  return await customFetchWithToken(`/files`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(public_ids),
  })
}

import customFetch from './customFetch'
import { IResponse } from '@/types/share.type'
import { getToken } from '@/app/actions/getTokenFromCookie'
import { unauthorized } from 'next/navigation'

export default async function customFetchWithToken<T>(
  url: string,
  config: RequestInit = {},
): Promise<IResponse<T>> {
  const token = await getToken()
  if (!token) {
    return {
      success: false,
    }
  }
  config.headers = {
    ...config.headers,
    ['Authorization']: `Bearer ${token}`,
  }
  console.log(url)
  const res = await customFetch<T>(url, config)
  if (!res.success && res.status === 401 && !url.includes('/users/profile')) {
    unauthorized()
  }
  return res
}

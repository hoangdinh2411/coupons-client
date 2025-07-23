import customFetch from './customFetch'
import { IResponse } from '@/types/share.type'
import UseAppStore from '@/stores/app.store'
import { getToken } from '@/app/actions/getTokenFromCookie'

export default async function customFetchWithToken<T>(
  url: string,
  config: RequestInit = {},
): Promise<IResponse<T>> {
  const token = await getToken()
  config.headers = {
    ...config.headers,
    ['Authorization']: `Bearer ${token}`,
  }
  const res = await customFetch<T>(url, config)
  if (!res.success && res.status === 401) {
    const signOut = UseAppStore((state) => state.signOut)
    await signOut()
  }
  return res
}

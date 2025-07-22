import { UserData } from '@/types/auth.type'
import customFetchWithToken from './customFetchWithToken'

export const getUserProfile = async () => {
  return await customFetchWithToken<UserData>(`/users/profile`, {
    method: 'GET',
    cache: 'no-store',
  })
}

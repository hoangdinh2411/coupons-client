import { UserData, VerifyRequestPayload } from '@/models/auth.type'
import customFetch from './customFetch'
import customFetchWithToken from './customFetchWithToken'

export const signInApi = async <T>(data: T) => {
  return await customFetch<UserData>(`/auth/sign-in`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
export const signUpAi = async <T>(data: T) => {
  return await customFetch<UserData>(`/auth/sign-up?type=user`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export const verifyEmailApi = async (data: VerifyRequestPayload) => {
  return await customFetchWithToken<UserData>(`/auth/verify-account`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  })
}

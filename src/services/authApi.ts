import {
  UserData,
  VerifyCodeData,
  VerifyRequestPayload,
} from '@/types/auth.type'
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

export const verifyCode = async (data: VerifyRequestPayload) => {
  return await customFetchWithToken<VerifyCodeData>(`/auth/verify-code`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
export const forgetPasswordApi = async (email: string) => {
  return await customFetchWithToken<UserData>(`/auth/forget-password`, {
    method: 'POST',
    body: JSON.stringify({ email }),
  })
}
export const signOutApi = async () => {
  return await fetch('/api/sign-out', {
    method: 'DELETE',
    credentials: 'include',
  })
}

import {
  ResetPasswordPayload,
  SignInPayload,
  SignUpPayload,
  UserData,
  VerifyCodeData,
  VerifyRequestPayload,
} from '@/types/auth.type'
import customFetch from './customFetch'

export const signInApi = async (data: SignInPayload) => {
  return await customFetch<UserData>(`/auth/sign-in`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
export const signUpAi = async (data: SignUpPayload) => {
  return await customFetch<UserData>(`/auth/sign-up?type=user`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export const verifyCode = async (data: VerifyRequestPayload) => {
  return await customFetch<VerifyCodeData>(`/auth/verify-code`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
export const forgetPasswordApi = async (email: string) => {
  return await customFetch(`/auth/forget-password`, {
    method: 'POST',
    body: JSON.stringify({ email }),
  })
}
export const resetPasswordApi = async (payload: ResetPasswordPayload) => {
  return await customFetch(`/auth/change-pass`, {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}
export const signOutApi = async () => {
  return await fetch(process.env.NEXT_PUBLIC_APP_DOMAIN + '/api/sign-out', {
    method: 'DELETE',
    credentials: 'include',
  })
}
export const getTokenApi = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_APP_DOMAIN + '/api/get-token',
    {
      method: 'GET',
    },
  )

  const data = await res.json()
  return data.token
}

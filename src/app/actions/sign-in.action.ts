'use server'

import { SignInSchema } from '@/helpers/schemas'
import { UserData } from '@/models/auth.type'
import { signInApi } from '@/services/authApi'
import { cookies } from 'next/headers'

type SignInActionState = {
  errors?: {
    email?: string[]
    password?: string[]
  }
  data?: UserData
  error?: string
}

export async function loginAction(
  _prevState: SignInActionState,
  formData: FormData,
): Promise<SignInActionState> {
  const cookieStore = await cookies()
  const form = Object.fromEntries(formData)
  const validateResult = SignInSchema.safeParse(form)
  if (!validateResult.success) {
    return {
      errors: validateResult.error.flatten().fieldErrors,
    }
  }
  const res = await signInApi(validateResult.data)

  if (!res.success) {
    return { error: res.message }
  }
  const data = res.data
  if (!data) {
    return { error: 'Missing user data' }
  }
  if (!data.role) {
    return {
      error: 'Done have permission',
    }
  }

  const isProd = process.env.NODE_ENV === 'production'
  cookieStore.set('session', data.token || '', {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? 'none' : 'lax',
    path: '/',
    maxAge: 1000 * 60 * 60 * 24,
  })

  delete data.token
  return {
    data,
  }
}

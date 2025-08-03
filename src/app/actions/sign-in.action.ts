'use server'

import { SignInSchema } from '@/helpers/schemas'
import { signInApi } from '@/services/authApi'
import { UserData } from '@/types/auth.type'
import { cookies } from 'next/headers'

type SignInActionState = {
  errors?: {
    email?: string[]
    password?: string[]
  }
  data?: UserData
  error?: string
}

export async function SignInAction(
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
  cookieStore.set('token', data.token || '', {
    httpOnly: true,
    secure: isProd,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24,
  })

  delete data.token
  return {
    data,
  }
}

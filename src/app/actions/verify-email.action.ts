'use server'
import { VerifyEmailSchema } from '@/helpers/schemas'
import { verifyEmailApi } from '@/services/authApi'
import { z } from 'zod'

type SignInActionState = {
  errors?: z.inferFlattenedErrors<typeof VerifyEmailSchema>['fieldErrors']
  message?: string
  success: boolean
}

export async function handleFormAction(
  _previousState: SignInActionState,
  formData: FormData,
): Promise<SignInActionState> {
  const data = Object.fromEntries(formData.entries())

  const validatedFields = VerifyEmailSchema.safeParse(data)
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    }
  }
  const res = await verifyEmailApi({
    ...validatedFields.data,
    code: Number(validatedFields.data.code),
  })
  if (res.success) {
    return {
      success: true,
    }
  }
  return {
    message: res.message,
    success: false,
  }
}

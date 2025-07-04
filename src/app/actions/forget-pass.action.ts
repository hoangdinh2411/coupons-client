'use server'
import { ForgetSchema } from '@/helpers/schemas'
import { forgetPasswordApi } from '@/services/authApi'
import { z } from 'zod'

type ForgetPassAction = {
  errors?: z.inferFlattenedErrors<typeof ForgetSchema>['fieldErrors']
  message?: string
  email?: string
  success: boolean
}

export async function handleForgetPassAction(
  _previousState: ForgetPassAction,
  formData: FormData,
): Promise<ForgetPassAction> {
  const data = Object.fromEntries(formData.entries())

  const validatedFields = ForgetSchema.safeParse(data)
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    }
  }
  const res = await forgetPasswordApi(validatedFields.data.email)
  if (res.success) {
    return {
      success: true,
      email: validatedFields.data.email,
    }
  }
  return {
    success: false,
    message: res.message,
  }
}

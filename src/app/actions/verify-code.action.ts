'use server'
import { VerifyCodeSchema } from '@/helpers/schemas'
import { verifyCode } from '@/services/authApi'
import { VerifyCodeData } from '@/types/auth.type'
import { VerifyCodeType } from '@/types/enum'
import { z } from 'zod'

type VerifyCodeState = {
  errors?: z.inferFlattenedErrors<typeof VerifyCodeSchema>['fieldErrors']
  message?: string
  data?: VerifyCodeData
  success: boolean
}

export async function handleVerifyCodeAction(
  _previousState: VerifyCodeState,
  formData: FormData,
): Promise<VerifyCodeState> {
  const data = Object.fromEntries(formData.entries())

  const validatedFields = VerifyCodeSchema.safeParse(data)
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    }
  }
  const res = await verifyCode({
    ...validatedFields.data,
    code: Number(validatedFields.data.code),
    type: validatedFields.data.type as VerifyCodeType,
  })
  if (res.success && res.data) {
    return {
      data: res.data,
      success: true,
    }
  }
  return {
    success: false,
    message: res.message,
  }
}

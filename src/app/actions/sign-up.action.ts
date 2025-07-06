'use server'
import { SignUpSchema } from '@/helpers/schemas'
import { signUpAi } from '@/services/authApi'
import { UserData } from '@/types/auth.type'

type SignUpActionState = {
  errors?: {
    email?: string[]
    password?: string[]
    first_name?: string[]
    last_name?: string[]
    confirm_password?: string[]
  }
  data?: UserData
  error?: string
}

export async function SignUpAction(
  _prevState: SignUpActionState,
  formData: FormData,
): Promise<SignUpActionState> {
  const form = Object.fromEntries(formData)
  const validateResult = SignUpSchema.safeParse(form)
  if (!validateResult.success) {
    return {
      errors: validateResult.error.flatten().fieldErrors,
    }
  }
  const res = await signUpAi(validateResult.data)

  if (!res.success) {
    return { error: res.message }
  }
  const data = res.data

  return {
    data,
  }
}

import { VerifyCodeType } from '@/types/enum'
import { z } from 'zod'

export const ForgetSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})
export const SignInSchema = z
  .object({
    password: z.string().min(1, 'Password is required'),
  })
  .merge(ForgetSchema)

export const VerifyCodeSchema = z
  .object({
    code: z.number(),
    type: z.enum(Object.values(VerifyCodeType) as [string, ...string[]]),
  })
  .merge(ForgetSchema)

export const ResetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(3, { message: 'Password must be at least 3 characters' })
      .trim(),
    confirm_password: z
      .string()
      .min(3, { message: 'Confirm password must be at least 3 characters' })
      .trim(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password'],
  })

import { z } from 'zod'

export const signinSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(3, { message: 'Password must be at least 3 characters' })
    .trim(),
})

export const verifyFormSchema = z.object({
  verificationCode: z.string().nonempty('Verification code is required'),
})
export const forgetSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

export const resetPasswordSchema = z
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

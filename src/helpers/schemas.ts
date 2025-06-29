import { z } from 'zod'

export const SignInSchema = z.object({
  email: z.string().email('Email is required'),
  password: z.string().min(1, 'Password is required'),
})

export const VerifyEmailSchema = z.object({
  email: z.string().email('Email is required'),
  code: z.string().min(1, 'Code is required'),
})

export const ForgetSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

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
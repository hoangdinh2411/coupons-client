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

//
export const SubmitFormSchema = z.object({
  title: z.string().min(1, 'Please enter a title'),
  offerLink: z.string().url('Please enter a valid URL').optional(),
  offerDetail: z.string().min(1, 'Please provide offer details'),
  code: z.string().min(1, 'Please enter a code').optional(),
  startDate: z.string().optional(),
  expireDate: z.string().optional(),
  couponType: z.string().min(1, 'Please select a coupon type'),
  category: z.string().min(1, 'Please select a category'),
  store: z.string().min(1, 'Please select a store'),
})

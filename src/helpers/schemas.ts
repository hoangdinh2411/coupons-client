import { z } from 'zod'
import dayjs from 'dayjs'


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


export const SubmitFormSchema = z
  .object({
    title: z.string().min(1, 'Title is required'),
    offerLink: z.string().url('Invalid URL'),
    offerDetail: z.string().min(1, 'Description is required'),
    code: z.string().min(1, 'Code is required'),
    startDate: z.string().min(1, 'Start date is required'),
    expireDate: z.string().min(1, 'Expire date is required'),
    couponType: z.string().min(1, 'Coupon type is required'),
    category: z.string().min(1, 'Category is required'),
    store: z.string().min(1, 'Store is required'),
  })
  .refine((data) => dayjs(data.startDate).isBefore(dayjs(data.expireDate)), {
    path: ['expireDate'],
    message: 'Expire date must be after start date',
  })

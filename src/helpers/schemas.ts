import { VerifyCodeType } from '@/types/enum'
import { z } from 'zod'
import dayjs from 'dayjs'

export const ForgetSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})
export const SignInSchema = z
  .object({
    password: z.string().min(1, 'Password is required'),
  })
  .merge(ForgetSchema)

export const SignUpSchema = z
  .object({
    first_name: z.string().min(1, 'First name is required'),
    last_name: z.string().min(1, 'Last name is required'),
    confirm_password: z.string().min(1, 'Confirm password is required'),
  })
  .merge(SignInSchema)
  .refine((data) => data.password === data.confirm_password, {
    path: ['confirm_password'],
    message: 'Passwords do not match',
  })

export const VerifyCodeSchema = z
  .object({
    code: z.string().min(1, 'Code is required'),
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

export const SubmitFormSchema = z
  .object({
    title: z.string().min(1, 'Title is required'),
    offer_link: z.string().url('Invalid URL'),
    offer_detail: z.string().min(1, 'Description is required'),
    code: z.string().min(1, 'Code is required'),
    start_date: z.string().min(1, 'Start date is required'),
    expire_date: z.string().min(1, 'Expire date is required'),
    type: z.string().min(1, 'Coupon type is required'),
    category: z.string().min(1, 'Category is required'),
    store_id: z.number(),
  })
  .refine((data) => dayjs(data.start_date).isBefore(dayjs(data.expire_date)), {
    path: ['expire_date'],
    message: 'Expire date must be after start date',
  })

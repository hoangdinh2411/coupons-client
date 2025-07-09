import { CouponType, VerifyCodeType } from '@/types/enum'
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
    title: z.string().min(1, 'Coupon title is required').trim(),
    code: z.string().trim(),
    offer_detail: z.string().min(1, 'Offer detail is required').trim(),
    is_exclusive: z.boolean(),
    expire_date: z.string({
      message: 'Expire date is required',
    }),
    start_date: z.string({
      message: 'Start date is required',
    }),
    categories: z
      .array(z.number())
      .min(1, 'Need to select at least one category'),
    store_id: z.number({
      message: 'Select store',
    }),
    offer_link: z.string().trim().optional(),
    type: z.enum(Object.values(CouponType) as [string, ...string[]]),
  })
  .refine((data) => dayjs(data.expire_date).isAfter(dayjs(data.start_date)), {
    message: 'Expire date must be after start date',
    path: ['expire_date'],
  })

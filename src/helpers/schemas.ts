import { CouponType } from '@/types/enum'
import { z } from 'zod'
import dayjs from 'dayjs'

export const ForgetSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})
export const SignInSchema = z.object({
  password: z.string().min(1, 'Password is required'),
  email: z.string().email({ message: 'Invalid email address' }),
})

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
    expire_date: z.string().min(1, {
      message: 'Start date is required',
    }),
    start_date: z.string().min(1, {
      message: 'Start date is required',
    }),
    categories: z
      .array(z.number())
      .min(1, 'Need to select at least one category'),
    store_id: z
      .number({
        message: 'Select store',
      })
      .min(0, 'Store is required'),
    discount: z.coerce
      .string()
      .regex(/^[0-9]+$/, { message: 'Please enter numbers only' })
      .refine((value) => Number(value) >= 0 && Number(value) <= 100, {
        message: 'Between 0 -100 ',
      }),
    offer_link: z.string().min(1, 'Offer link is required').trim(),
    type: z.enum(Object.values(CouponType) as [string, ...string[]], {
      message: 'Select type for coupon',
    }),
  })
  .refine((data) => dayjs(data.expire_date).isAfter(dayjs(data.start_date)), {
    message: 'Expire date must be after start date',
    path: ['expire_date'],
  })

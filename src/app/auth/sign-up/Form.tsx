'use client'
import React, { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import ButtonWithLoading from '@/components/button-with-loading/ButtonWithLoading'
import { APP_ROUTERS } from '@/helpers/config'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { SignUpSchema } from '@/helpers/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpAi } from '@/services/authApi'
import { VerifyCodeType } from '@/types/enum'

const defaultValues = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  confirm_password: '',
}

type SignUpFormDataType = z.infer<typeof SignUpSchema>
export default function Form() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormDataType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues,
    mode: 'onChange',
  })

  function onSubmit(data: SignUpFormDataType) {
    startTransition(async () => {
      const res = await signUpAi(data)
      if (!res.success && res.message) {
        toast.error(res.message)
        return
      }

      if (res.data) {
        toast.success('Sign up success')
        if (res.data.email_verified) {
          router.push(APP_ROUTERS.SIGN_IN)
        } else {
          router.push(
            `${APP_ROUTERS.VERIFY}?email=${res.data.email}&type=${VerifyCodeType.VERIFY_ACCOUNT}`,
          )
        }
      }
    })
  }

  return (
    <form
      className="flex w-full flex-col gap-4 rounded-sm bg-white p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-4">
        <fieldset className="form-group">
          <label
            htmlFor="first-name-input"
            className="form-label block text-base font-bold text-slate-800"
          >
            First name
          </label>
          <input
            id="first-name-input"
            placeholder="First name"
            className="textfield"
            type="text"
            {...register('first_name')}
          />
          {errors.first_name && (
            <small className="font-500 mt-1 block text-sm text-red-600">
              {errors.first_name.message}
            </small>
          )}
        </fieldset>
        <fieldset className="form-group">
          <label
            htmlFor="last-name-input"
            className="form-label block text-base font-bold text-slate-800"
          >
            Last name
          </label>
          <input
            id="last-name-input"
            placeholder="Last name"
            className="textfield"
            type="text"
            {...register('last_name')}
          />
          {errors.last_name && (
            <small className="font-500 mt-1 block text-sm text-red-600">
              {errors.last_name.message}
            </small>
          )}
        </fieldset>
      </div>

      <fieldset className="form-group w-full">
        <label
          htmlFor="email-input"
          className="form-label block text-base font-bold text-slate-800"
        >
          Email Address
        </label>
        <input
          id="email-input"
          placeholder="Email Address"
          className="textfield"
          type="email"
          {...register('email')}
        />
        {errors.email && (
          <small className="font-500 mt-1 block text-sm text-red-600">
            {errors.email.message}
          </small>
        )}
      </fieldset>
      <fieldset className="form-group w-full">
        <label
          htmlFor="password-input"
          className="form-label block text-base font-bold text-slate-800"
        >
          Password
        </label>
        <input
          type="password"
          id="password-input"
          placeholder="Password"
          className="textfield"
          {...register('password')}
        />
        {errors.password && (
          <small className="font-500 mt-1 block text-sm text-red-600">
            {errors.password.message}
          </small>
        )}{' '}
      </fieldset>
      <fieldset className="form-group w-full">
        <label
          htmlFor="confirm-password-input"
          className="form-label block text-base font-bold text-slate-800"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password-input"
          placeholder="Password"
          className="textfield"
          {...register('confirm_password')}
        />
        {errors.confirm_password && (
          <small className="font-500 mt-1 block text-sm text-red-600">
            {errors.confirm_password.message}
          </small>
        )}{' '}
      </fieldset>
      <p className="text-center break-normal">
        By signing up you confirm that you are 16 years of age or older and you
        agree to our{' '}
        <Link
          className="text-green hover:text-olive-green underline"
          href={APP_ROUTERS.TERMS}
        >
          {' '}
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link
          className="text-green hover:text-olive-green underline"
          href={APP_ROUTERS.POLICY}
        >
          Privacy Policy
        </Link>
        .
      </p>
      <ButtonWithLoading isPending={isPending} type="submit">
        Sign Up
      </ButtonWithLoading>
    </form>
  )
}

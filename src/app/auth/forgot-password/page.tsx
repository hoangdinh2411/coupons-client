'use client'
import { forgetSchema } from '@/helper/auth.validation.schema'
import { APP_ROUTERS } from '@/helpers/config'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

function ForgotEmailTemplate() {
  const navigation = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: zodResolver(forgetSchema),
  })

  const onSubmit = (data: { email: string }) => {
    alert(JSON.stringify(data))
    navigation.push(APP_ROUTERS.VERIFY)
  }
  return (
    <div className="flex h-full w-full flex-col gap-1 bg-white px-6 pt-6 sm:mx-auto sm:h-[500px] sm:w-[358px] sm:bg-[#F3F4F6] sm:px-0 md:mt-6 md:pt-0">
      <div className="w-full sm:mx-auto md:w-full">
        <div className="md:mb-2">
          <h3 className="text-center text-[32px] font-semibold">
            Forgot Password
          </h3>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col max-w-[358px] mx-auto gap-2 rounded-sm sm:bg-[#F3F4F6] md:bg-white md:p-6"
        >
          <p className="mt-2 mb-4 text-center text-slate-800">
            Enter your email address below and we&apos;ll send you reset
            instructions.
          </p>
          <div className="form-group w-full">
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
              {...register('email')}
            />
            {errors.email && (
              <small className="font-500 mt-2 block text-sm text-red-600">
                {errors.email.message}
              </small>
            )}
          </div>

          <button type="submit" className="btn-primary">
            {' '}
            Send Instructions
          </button>
          <Link
            href={APP_ROUTERS.SIGN_IN}
            className="text-green font-500 hover:text-green mt-2 text-center"
          >
            Go Back to Login
          </Link>
        </form>
      </div>
    </div>
  )
}

export default ForgotEmailTemplate

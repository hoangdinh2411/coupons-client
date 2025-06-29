'use client'
import { APP_ROUTERS } from '@/helpers/config'
import { VerifyEmailSchema } from '@/helpers/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export type VerifySchemaType = z.infer<typeof VerifyEmailSchema>
function VerifyPage() {
  const navigation = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifySchemaType>({
    resolver: zodResolver(VerifyEmailSchema),
  })

  const onSubmit = (data: VerifySchemaType) => {
    alert(JSON.stringify(data))
    navigation.push(APP_ROUTERS.INDEX)
  }
  return (
    <div className="mx-auto flex w-screen flex-col gap-5 bg-white sm:w-[320px] sm:max-w-sm sm:bg-[#F3F4F6]">
      <p className="mt-6 text-center text-[40px] font-bold text-slate-800">
        Verify Account
      </p>
      <form
        className="mx-auto flex h-screen max-w-[358px] flex-col bg-white px-6 sm:mx-auto sm:h-full sm:max-h-[270px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="mb-6 text-center leading-5 text-slate-600 sm:mt-4">
          Enter your verification code below and we&apos;ll send you reset
          instructions.
        </p>
        {/* <label
          htmlFor="Email-input"
          className="form-label block text-base font-bold text-slate-800"
        >
          Email 
        </label>
        <input
          id="Email-input"
          placeholder="Email"
          className="textfield"
          {...register('email')}
        />
        {errors.code && (
          <small className="font-500 mt-2 block text-sm text-red-600">
            {errors.email?.message}
          </small>
        )} */}
        <label
          htmlFor="Verification-input"
          className="form-label block text-base font-bold text-slate-800 mt-2"
        >
          Verification code
        </label>
        <input
          id="Verification-input"
          placeholder="Verification code"
          className="textfield"
          {...register('code')}
        />
        {errors.code && (
          <small className="font-500 mt-2 block text-sm text-red-600">
            {errors.code.message}
          </small>
        )}
        <div className="mt-2"></div>
        <button type="submit" className="btn-primary">
          {' '}
          Verify
        </button>
      </form>
    </div>
  )
}

export default VerifyPage

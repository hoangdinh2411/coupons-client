'use client'
import { verifyFormSchema } from '@/helper/auth.validation.schema'
import { APP_ROUTERS } from '@/helpers/config'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
function VerifyTemplate() {
  const navigation = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ verificationCode: string }>({
    resolver: zodResolver(verifyFormSchema),
  })

  const onSubmit = (data: { verificationCode: string }) => {
    alert(JSON.stringify(data))
    navigation.push(APP_ROUTERS.INDEX)
  }
  return (
    <div className="mx-auto flex w-screen flex-col gap-5 bg-white sm:w-[320px] sm:max-w-sm sm:bg-[#F3F4F6]">
      <p className="mt-6 text-center text-[40px] font-bold text-slate-800">
        Verify Account
      </p>
      <form
        className="mx-auto flex h-screen max-w-[358px] flex-col bg-white px-6 sm:mx-auto sm:max-h-[240px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="mb-6 text-center leading-5 text-slate-600 sm:mt-4">
          Enter your verification code below and we&apos;ll send you reset
          instructions.
        </p>
        <label
          htmlFor="Verification-input"
          className="form-label block text-base font-bold text-slate-800"
        >
          Verification code
        </label>
        <input
          id="Verification-input"
          placeholder="Verification code"
          className="textfield"
          {...register('verificationCode')}
        />
        {errors.verificationCode && (
          <small className="font-500 mt-2 block text-sm text-red-600">
            {errors.verificationCode.message}
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

export default VerifyTemplate

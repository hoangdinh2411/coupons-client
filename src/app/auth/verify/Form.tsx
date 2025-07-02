'use client'
import { APP_ROUTERS } from '@/helpers/config'
import { VerifyEmailSchema } from '@/helpers/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
export type VerifySchemaType = z.infer<typeof VerifyEmailSchema>

export default function Form({ email }: { email: string }) {
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
    navigation.push(APP_ROUTERS.CHANGE_PASSWORD)
  }
  return (
    <form
      className="mx-auto flex h-screen max-w-[358px] flex-col bg-white p-6 sm:mx-auto sm:h-full sm:max-h-[270px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="mb-6 text-center leading-5 text-slate-600 sm:mt-4">
        Enter your verification code below and we&apos;ll send you reset
        instructions.
      </p>
      <input type="text" value={email} hidden {...register('email')} />
      <fieldset>
        <label
          htmlFor="Verification-input"
          className="form-label mt-2 block text-base font-bold text-slate-800"
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
      </fieldset>
      <button type="submit" className="btn-primary mt-4">
        Verify
      </button>
    </form>
  )
}

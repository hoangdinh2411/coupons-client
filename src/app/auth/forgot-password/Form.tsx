'use client'
import { APP_ROUTERS } from '@/helpers/config'
import { ForgetSchema } from '@/helpers/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {
  const navigation = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: zodResolver(ForgetSchema),
  })

  const onSubmit = ({ email }: { email: string }) => {
    navigation.push(`${APP_ROUTERS.VERIFY}?email=${email}`)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex w-full max-w-[358px] flex-col gap-3 rounded-sm sm:bg-[#F3F4F6] md:bg-white md:p-6"
    >
      <p className="mt-2 mb-4 text-center text-slate-800">
        Enter your email address below and we&apos;ll send you reset
        instructions.
      </p>
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
          {...register('email')}
        />
        {errors.email && (
          <small className="font-500 mt-2 block text-sm text-red-600">
            {errors.email.message}
          </small>
        )}
      </fieldset>

      <button type="submit" className="btn-primary mt-1">
        Send Instructions
      </button>
    </form>
  )
}

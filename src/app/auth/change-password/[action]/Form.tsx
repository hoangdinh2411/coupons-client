'use client'
import ButtonWithLoading from '@/components/button-with-loading/ButtonWithLoading'
import { APP_ROUTERS } from '@/helpers/config'
import { ForgetSchema } from '@/helpers/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form({ token }: { token: string }) {
  const navigation = useRouter()
  const {
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
      <fieldset className="form-group w-full">
        <label
          htmlFor="new-password"
          className="form-label block text-base font-bold text-slate-800"
        >
          New password
        </label>
        <input
          id="new-password"
          placeholder="Email Address"
          className="textfield"
          name="password"
          type="password"
        />
        {errors.email && (
          <small className="font-500 mt-2 block text-sm text-red-600">
            {errors.email.message}
          </small>
        )}
      </fieldset>
      <fieldset className="form-group w-full">
        <label
          htmlFor="confirm-password"
          className="form-label block text-base font-bold text-slate-800"
        >
          Confirm new password
        </label>
        <input
          id="confirm-password"
          placeholder="Email Address"
          className="textfield"
          name="confirm_password"
          type="password"
        />
        {errors.email && (
          <small className="font-500 mt-2 block text-sm text-red-600">
            {errors.email.message}
          </small>
        )}
      </fieldset>
      <fieldset className="form-group w-full">
        <input hidden name="token" defaultValue={token ?? ''} />
      </fieldset>

      <ButtonWithLoading type="submit" className="my-2">
        Change password{' '}
      </ButtonWithLoading>
    </form>
  )
}

'use client'
import ButtonWithLoading from '@/components/button-with-loading/ButtonWithLoading'
import { APP_ROUTERS } from '@/helpers/config'
import { ResetPasswordSchema } from '@/helpers/schemas'
import { resetPasswordApi } from '@/services/authApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React, { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as z from 'zod'

type ResetPassType = z.infer<typeof ResetPasswordSchema>
export default function Form({ token }: { token: string }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ResetPassType>({
    defaultValues: {
      password: '',
      confirm_password: '',
    },
    resolver: zodResolver(ResetPasswordSchema),
  })
  const [isPending, transition] = useTransition()
  const router = useRouter()
  const onSubmit = async (data: ResetPassType) => {
    transition(async () => {
      const res = await resetPasswordApi({
        ...data,
        reset_token: token,
      })
      if (!res.success && res.message) {
        toast.error(res.message)
        return
      }

      if (res.success) {
        toast.success('Change new password success')
        router.push(APP_ROUTERS.SIGN_IN)
      }
    })
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="m-auto flex w-full max-w-[358px] flex-col gap-3 rounded-sm sm:bg-white sm:p-6"
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
          type="password"
          {...register('password')}
        />
        {errors.password && (
          <small className="font-500 mt-2 block text-sm text-red-600">
            {errors.password.message}
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
          {...register('confirm_password')}
          type="password"
        />
        {errors.confirm_password && (
          <small className="font-500 mt-2 block text-sm text-red-600">
            {errors.confirm_password.message}
          </small>
        )}
      </fieldset>
      <fieldset className="form-group w-full">
        <input hidden name="token" defaultValue={token ?? ''} />
      </fieldset>

      <ButtonWithLoading isPending={isPending} type="submit" className="my-2">
        Update
      </ButtonWithLoading>
    </form>
  )
}

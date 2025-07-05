'use client'
import { handleForgetPassAction } from '@/app/actions/forget-pass.action'
import ButtonWithLoading from '@/components/button-with-loading/ButtonWithLoading'
import { APP_ROUTERS } from '@/helpers/config'
import { VerifyCodeType } from '@/types/enum'
import { useRouter } from 'next/navigation'
import React, { useActionState, useEffect } from 'react'
import toast from 'react-hot-toast'

export default function Form() {
  const [state, action] = useActionState(handleForgetPassAction, {
    success: false,
  })
  const router = useRouter()

  useEffect(() => {
    if (state.message) {
      toast.error(state.message)
      return
    }

    if (state.success && state.email) {
      router.push(
        `${APP_ROUTERS.VERIFY}?email=${state.email}&type=${VerifyCodeType.FORGET_PASSWORD}`,
      )
    }
  }, [state])
  return (
    <form action={action} className="mx-auto flex flex-col bg-white p-6">
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
          name="email"
        />
        {state.errors && (
          <small className="font-500 mt-2 block text-sm text-red-600">
            {state.errors.email}
          </small>
        )}
      </fieldset>
      <ButtonWithLoading type="submit" className="my-2">
        Send Instructions
      </ButtonWithLoading>
    </form>
  )
}

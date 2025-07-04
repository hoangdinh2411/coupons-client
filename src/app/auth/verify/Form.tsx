'use client'
import { handleVerifyCodeAction } from '@/app/actions/verify-code.action'
import ButtonWithLoading from '@/components/button-with-loading/ButtonWithLoading'
import { APP_ROUTERS } from '@/helpers/config'
import { VerifyCodeType } from '@/types/enum'
import { useRouter } from 'next/navigation'
import React, { useActionState, useEffect } from 'react'
import toast from 'react-hot-toast'

export default function Form({
  email,
  type,
}: {
  email: string
  type: VerifyCodeType
}) {
  const [state, action] = useActionState(handleVerifyCodeAction, {
    success: false,
  })
  const router = useRouter()

  useEffect(() => {
    if (state.message) {
      toast.error(state.message)
      return
    }

    if (state.success && state.data) {
      switch (state.data.type as VerifyCodeType) {
        case VerifyCodeType.VERIFY_ACCOUNT:
          toast.success('Verified success')
          router.push(APP_ROUTERS.SIGN_IN)
          return
        case VerifyCodeType.FORGET_PASSWORD:
          toast.success('Verified success')
          router.push(
            `${APP_ROUTERS.CHANGE_PASSWORD}?action=${state.data.token}`,
          )
          return
        default:
          toast.error('Not support this typ')
          break
      }
    }
  }, [state])
  return (
    <form
      className="mx-auto flex h-screen max-w-[358px] flex-col bg-white p-6 sm:mx-auto sm:h-full sm:max-h-[270px]"
      action={action}
    >
      <p className="mb-6 text-center leading-5 text-slate-600 sm:mt-4">
        Enter your verification code below and we&apos;ll send you reset
        instructions.
      </p>
      <input type="text" value={email} hidden name="email" />
      <input type="text" value={type} hidden name="type" />
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
          name="code"
        />
        {state.errors && state.errors.code && (
          <small className="font-500 mt-2 block text-sm text-red-600">
            {state.errors.code}
          </small>
        )}
      </fieldset>
      <ButtonWithLoading type="submit" className="my-2">
        {type === VerifyCodeType.FORGET_PASSWORD ? 'Send code' : 'Verify email'}
      </ButtonWithLoading>
    </form>
  )
}

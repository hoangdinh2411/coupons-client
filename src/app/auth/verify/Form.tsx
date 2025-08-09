'use client'
import ButtonWithLoading from '@/components/button-with-loading/ButtonWithLoading'
import { APP_ROUTERS } from '@/helpers/config'
import { verifyCode } from '@/services/authApi'
import { VerifyCodeType } from '@/types/enum'
import { useRouter } from 'next/navigation'
import React, { useState, useTransition } from 'react'
import toast from 'react-hot-toast'

export default function Form({
  email,
  type,
}: {
  email: string
  type: VerifyCodeType
}) {
  const [code, setCode] = useState('')

  const router = useRouter()
  const [isPending, transition] = useTransition()
  const handleSubmit = () => {
    transition(async () => {
      if (!code) {
        toast.error('Please enter code')
        return
      }
      const res = await verifyCode({
        email,
        code: Number(code),
        type,
      })
      if (!res.success && res.message) {
        toast.error(res.message)
        return
      }

      if (res.success && res.data) {
        toast.success('Verified success')
        switch (res.data.type as VerifyCodeType) {
          case VerifyCodeType.VERIFY_ACCOUNT:
            setTimeout(() => {
              router.push(APP_ROUTERS.SIGN_IN)
            }, 1000)
            return
          case VerifyCodeType.FORGET_PASSWORD:
            router.push(`${APP_ROUTERS.CHANGE_PASSWORD}/${res.data.token}`)
            return
          default:
            toast.error('Not support this type: ' + res.data.type)
            break
        }
      }
    })
  }
  return (
    <form className="mx-auto flex max-w-[400px] flex-col bg-white p-6">
      <p className="mb-6 text-center leading-5 text-slate-600 sm:mt-4">
        Enter your verification code below and we&apos;ll send you reset
        instructions.
      </p>
      <input type="text" defaultValue={email} hidden name="email" />
      <input type="text" defaultValue={type} hidden name="type" />
      <fieldset>
        <input
          id="Verification-input"
          placeholder="Verification code"
          className="textfield"
          name="code"
          onChange={(e) => setCode(e.target.value)}
        />
      </fieldset>
      <ButtonWithLoading
        type="button"
        onClick={handleSubmit}
        className="mt-4"
        isPending={isPending}
      >
        {type === VerifyCodeType.FORGET_PASSWORD ? 'Send code' : 'Verify email'}
      </ButtonWithLoading>
    </form>
  )
}

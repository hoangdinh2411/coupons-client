'use client'
import ButtonWithLoading from '@/components/button-with-loading/ButtonWithLoading'
import { APP_ROUTERS } from '@/helpers/config'
import { forgetPasswordApi } from '@/services/authApi'
import { VerifyCodeType } from '@/types/enum'
import { useRouter } from 'next/navigation'
import React, { useState, useTransition } from 'react'
import toast from 'react-hot-toast'

export default function Form() {
  const [email, setEmail] = useState('')
  const [isPending, transition] = useTransition()
  const router = useRouter()

  const handleSubmit = () => {
    transition(async () => {
      if (!email) {
        toast.error('Please fill email')
        return
      }
      const res = await forgetPasswordApi(email)
      if (!res.success && res.message) {
        toast.error(res.message)
        return
      }
      if (res.success) {
        router.push(
          `${APP_ROUTERS.VERIFY}?email=${email}&type=${VerifyCodeType.FORGET_PASSWORD}`,
        )
      }
    })
  }
  return (
    <form className="mx-auto flex flex-col bg-white p-6">
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </fieldset>
      <ButtonWithLoading
        onClick={handleSubmit}
        isPending={isPending}
        type="button"
        className="my-8"
      >
        Send Instructions
      </ButtonWithLoading>
    </form>
  )
}

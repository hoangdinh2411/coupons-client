'use client'
import { verifyFormSchema } from '@/helper/auth.validation.schema'
import { APP_ROUTERS } from '@/helpers/config'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
const textFieldClass =
  '!border !border-slate-300 w-full px-2 h-11 rounded-none text-slate-600 mt-1'

const buttonPrimaryClass =
  'rounded-3xl w-full mt-4 cursor-pointer hover:bg-light-green text-center py-2 text-white hover:text-slate-600 font-bold bg-green'

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
    <div className="flex flex-col gap-5 mx-auto md:max-w-sm  w-screen md:w-[350px]  bg-white md:bg-[#F3F4F6]">
      <p className="text-3xl font-bold text-slate-800 mt-10 text-center">
        Verify Account
      </p>
      <form
        className=" md:mx-auto px-6 h-screen flex flex-col md:h-[300px] bg-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-center leading-5 mt-4 text-slate-600 mb-6">
          Enter your verification code below and we&apos;ll send you reset
          instructions.
        </p>
        <label
          htmlFor="Verification-input"
          className="text-slate-800 form-label  text-base font-bold block "
        >
          Verification code
        </label>
        <input
          id="Verification-input"
          placeholder="Verification code"
          className={textFieldClass}
          {...register('verificationCode')}
        />
        {errors.verificationCode && (
          <small className="text-red-600 font-500 text-sm mt-2 block">
            {errors.verificationCode.message}
          </small>
        )}
        <div className="mt-4"></div>
        <button type="submit" className={buttonPrimaryClass}>
          {' '}
          Verify
        </button>
        <Link
          href={APP_ROUTERS.SIGN_IN}
          className="text-green font-600 text-center mt-2"
        >
          Go back to login
        </Link>
      </form>
    </div>
  )
}

export default VerifyTemplate

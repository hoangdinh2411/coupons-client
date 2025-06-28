'use client'
import { forgetSchema } from '@/helper/auth.validation.schema'
import { APP_ROUTERS } from '@/helpers/config'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

const textFieldClass =
  '!border !border-slate-300 w-full px-2 h-11 rounded-none text-slate-600 mt-1'

const buttonPrimaryClass =
  'rounded-3xl mt-4 cursor-pointer hover:bg-light-green text-center py-2 text-white hover:text-slate-600 font-bold bg-green'

function ForgotEmailTemplate() {
  const navigation = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: zodResolver(forgetSchema),
  })

  const onSubmit = (data: { email: string }) => {
    alert(JSON.stringify(data))
    navigation.push(APP_ROUTERS.VERIFY)
  }
  return (
    <div className="w-full py-10 max-w-screen h-full flex  flex-col bg-white md:bg-[#F3F4F6] gap-5 justify-center items-center  md:w-[330px] md:h-[500px] md:mx-auto ">
      <div className="sm:mx-auto w-full sm:w-sm md:mx-1 md:w-full">
        <div className="md:mb-4">
          <h3 className="text-center text-[36px] font-semibold">
            Forgot Password
          </h3>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" bg-white w-full gap-2 flex flex-col p-6 rounded-sm"
        >
          <p className="text-center text-slate-500 mb-6">
            Enter your email address below and we&apos;ll send you reset
            instructions.
          </p>
          <div className="form-group w-full">
            <label
              htmlFor="email-input"
              className="text-slate-800 form-label text-base font-bold block "
            >
              Email Address
            </label>
            <input
              id="email-input"
              placeholder="Email Address"
              className={textFieldClass}
              {...register('email')}
            />
            {errors.email && (
              <small className="text-red-600 font-500 text-sm mt-2 block">
                {errors.email.message}
              </small>
            )}
          </div>

          <button type="submit" className={buttonPrimaryClass}>
            {' '}
            Send
          </button>
          <Link
            href={APP_ROUTERS.SIGN_IN}
            className="text-green font-500 text-center hover:text-green mt-2"
          >
            Go Back to Login
          </Link>
        </form>
      </div>
    </div>
  )
}

export default ForgotEmailTemplate

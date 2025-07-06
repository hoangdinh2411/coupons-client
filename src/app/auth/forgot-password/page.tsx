import { APP_ROUTERS } from '@/helpers/config'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import Form from './Form'

export const metadata: Metadata = {
  title: 'Forgot password',
}

function ForgotPasswordPage() {
  return (
    <div className="w-full sm:mx-auto md:w-full">
      <div className="md:mb-2">
        <h3 className="text-center text-[40px] font-semibold">
          Forgot Password
        </h3>
      </div>
      <Form />
      <div className="mt-4 text-center">
        <Link
          href={APP_ROUTERS.SIGN_IN}
          className="font-500 hover:text-green text-center text-black underline"
        >
          Go Back to Login
        </Link>
      </div>
    </div>
  )
}

export default ForgotPasswordPage

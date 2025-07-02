import { APP_ROUTERS } from '@/helpers/config'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import Form from './Form'

export const metadata: Metadata = {
  title: 'Change password',
}

function ForgotPasswordPage() {
  return (
    <div className="flex h-full w-full flex-col gap-1 bg-white px-6 pt-6 sm:mx-auto sm:h-[500px] sm:w-[358px] sm:bg-[#F3F4F6] sm:px-0 md:mt-6 md:bg-transparent md:pt-0">
      <div className="w-full sm:mx-auto md:w-full">
        <div className="md:mb-2">
          <h3 className="text-center text-[40px] font-semibold">
            Change new password
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
    </div>
  )
}

export default ForgotPasswordPage

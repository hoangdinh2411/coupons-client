import { APP_ROUTERS } from '@/helpers/config'
import { Metadata } from 'next'
import Link from 'next/link'
import React, { Suspense } from 'react'
import Form from './Form'
import { redirect } from 'next/navigation'
import SpinnerLoading from '@/components/loading'

export const metadata: Metadata = {
  title: 'Change password',
}

async function ForgotPasswordPage({
  params,
}: {
  params: Promise<{ action: string }>
}) {
  const { action } = await params
  if (!action) {
    redirect(APP_ROUTERS.INDEX)
  }
  return (
    <div className="flex h-full w-full flex-col gap-1 bg-white px-6 pt-6 sm:mx-auto sm:h-[500px] sm:w-[358px] sm:bg-[#F3F4F6] sm:px-0 md:mt-6 md:bg-transparent md:pt-0">
      <div className="w-full sm:mx-auto md:w-full">
        <div className="md:mb-2">
          <h3 className="text-center text-[40px] font-semibold">
            Change new password
          </h3>
        </div>
        <Suspense fallback={<SpinnerLoading />}>
          <Form action={action} />
        </Suspense>
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

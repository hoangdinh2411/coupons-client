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
  console.log(action)
  if (!action) {
    redirect(APP_ROUTERS.INDEX)
  }
  return (
    <div className="w-full sm:mx-auto md:w-full">
      <div className="md:mb-2">
        <h3 className="text-center text-[40px] font-semibold">
          Change password
        </h3>
      </div>
      <Suspense fallback={<SpinnerLoading />}>
        <Form token={action ?? ''} />
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
  )
}

export default ForgotPasswordPage

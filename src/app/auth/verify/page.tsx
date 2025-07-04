import { redirect } from 'next/navigation'
import Form from './Form'
import { APP_ROUTERS } from '@/helpers/config'
import { Metadata } from 'next'
import { VerifyCodeType } from '@/types/enum'

export const metadata: Metadata = {
  title: 'Verify account',
}

async function VerifyPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string>>
}) {
  const params = await searchParams

  const email = params?.email
  const type = params?.type
  if (!email) {
    redirect(APP_ROUTERS.SIGN_IN)
  }
  return (
    <div className="mx-auto flex w-screen flex-col gap-5 bg-white sm:w-[320px] sm:max-w-sm sm:bg-transparent">
      <p className="mt-6 text-center text-[40px] font-bold text-slate-800">
        Verify {type === VerifyCodeType.VERIFY_ACCOUNT ? 'Account' : 'Code'}
      </p>
      <Form email={email} type={type as VerifyCodeType} />
    </div>
  )
}

export default VerifyPage

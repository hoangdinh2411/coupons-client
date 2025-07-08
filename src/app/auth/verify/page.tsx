import { redirect } from 'next/navigation'
import Form from './Form'
import { APP_ROUTERS } from '@/helpers/config'
import { Metadata } from 'next'
import { VerifyCodeType } from '@/types/enum'

export const metadata: Metadata = {
  title: 'Verify code',
}

async function VerifyPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string>>
}) {
  const params = await searchParams

  const email = params?.email
  const type = params?.type
  if (!email || !type) {
    redirect(APP_ROUTERS.INDEX)
  }
  return (
    <div className="flex w-full max-w-screen flex-col items-center justify-center gap-5 bg-white pb-10 md:mx-auto md:mt-6 md:w-[400px] md:bg-transparent">
      <p className="mt-6 text-center text-[40px] font-bold text-slate-800">
        Verify {type === VerifyCodeType.VERIFY_ACCOUNT ? 'Account' : 'Code'}
      </p>
      <Form email={email} type={type as VerifyCodeType} />
    </div>
  )
}

export default VerifyPage

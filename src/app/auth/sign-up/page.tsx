import { APP_ROUTERS } from '@/helpers/config'
import Link from 'next/link'

import Form from './Form'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Join for free',
}

//TODO: Typing & style
export default function SignInPage() {
  return (
    <div className="flex w-full max-w-screen flex-col items-center justify-center gap-5 bg-white pb-10 md:mx-auto md:mt-6 md:w-[400px] md:bg-transparent">
      <div className="w-full sm:mx-auto sm:w-sm md:mx-1 md:w-full">
        <div className="md:mb-4">
          <h3 className="text-center text-[40px] font-semibold">Sign Up</h3>
          <p className="text-center text-sm">
            Already have an account
            <Link
              href={APP_ROUTERS.SIGN_IN}
              className="text-green hover:text-olive-green ml-2 text-base font-semibold underline"
            >
              Sign In
            </Link>
          </p>
        </div>
        <Form />
      </div>
    </div>
  )
}

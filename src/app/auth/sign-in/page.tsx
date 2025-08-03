import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: 'Sign In',
}

export default function SignInPage() {
  return (
    <div className="flex w-full max-w-screen flex-col items-center justify-center gap-5 bg-white pb-10 md:mx-auto md:mt-6 md:w-[400px] md:bg-transparent">
      <div className="w-full sm:mx-auto sm:w-sm md:mx-1 md:w-full">
        <div className="md:mb-4">
          <h3 className="text-center text-[40px] font-semibold">Sign In</h3>
        </div>
        <Form />
      </div>
    </div>
  )
}

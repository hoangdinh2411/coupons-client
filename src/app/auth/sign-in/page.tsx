import { APP_ROUTERS } from '@/helpers/config'
import Link from 'next/link'

export default function AuthPage() {
  return (
    <div className="m-auto flex w-full max-w-[360px] flex-col items-center justify-start gap-5">
      <div>
        <h3 className="text-center text-[40px] font-semibold">Sign In</h3>
        <p className="text-sm">
          Don&#39;t have an account?{' '}
          <Link href={APP_ROUTERS.SIGN_UP} className="text-blue-800 underline">
            Sign Up
          </Link>
        </p>
      </div>
      <form className="w-full rounded-sm bg-white p-6"></form>
    </div>
  )
}

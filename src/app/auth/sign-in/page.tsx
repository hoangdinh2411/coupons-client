import { APP_ROUTERS } from '@/helpers/config'
import Link from 'next/link'

export default function AuthPage() {
  return (
    <div className="w-full max-w-[360px] m-auto flex flex-col gap-5 justify-start items-center">
      <div>
        <h3 className="text-center text-[40px] font-semibold">Sign In</h3>
        <p className="text-sm">
          Don&#39;t have an account?{' '}
          <Link href={APP_ROUTERS.SIGN_UP} className="text-blue-800 underline">
            Sign Up
          </Link>
        </p>
      </div>
      <form className=" bg-white w-full p-6 rounded-sm"></form>
    </div>
  )
}

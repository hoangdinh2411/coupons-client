'use client'
import { APP_ROUTERS } from '@/helpers/config'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useActionState, useEffect } from 'react'
import { SignInAction } from '@/app/actions/sign-in.action'
import toast from 'react-hot-toast'
import { UserData } from '@/types/auth.type'
import UseAppStore from '@/stores/app.store'
import { signOutApi } from '@/services/authApi'
import ButtonWithLoading from '@/components/button-with-loading/ButtonWithLoading'
import { VerifyCodeType } from '@/types/enum'

//TODO: Typing & style
export default function SignInPage() {
  const [state, action] = useActionState(SignInAction, {})
  const router = useRouter()
  const { setUser } = UseAppStore((state) => state)

  async function handleSignOut(email: string) {
    toast.success('Need to verify email')
    const res = await signOutApi()
    if (res.ok) {
      router.push(
        `${APP_ROUTERS.VERIFY}?email=${email}&type=${VerifyCodeType.VERIFY_ACCOUNT}`,
      )
    }
  }
  useEffect(() => {
    if (state.error) {
      toast.error(state.error)
    }
    if (state.data) {
      const result: UserData = state.data
      if (result && !result.email_verified) {
        handleSignOut(result.email)
        return
      }
      setUser(state.data)
      toast.success('Welcome back!')
      setTimeout(() => {
        router.push(APP_ROUTERS.INDEX)
      }, 2000)
    }
  }, [state])

  return (
    <div className="flex w-full max-w-screen flex-col items-center justify-center gap-4 bg-white md:mx-auto md:w-[400px] md:bg-transparent">
      <div className="w-full sm:mx-auto sm:w-sm md:mx-1 md:w-full">
        <div className="md:mb-4">
          <h3 className="text-center text-[40px] font-semibold">Sign In</h3>
        </div>
        <form
          action={action}
          className="flex w-full flex-col gap-3 rounded-sm bg-white p-6"
        >
          {/* <p className="mb-6 text-center text-slate-500">
            By logging in you confirm that you are 16 years of age or older and
            you agree to our{' '}
            <span className="hover:text-green cursor-pointer font-bold text-slate-700 underline">
              Terms of Service
            </span>{' '}
            and{' '}
            <span className="hover:text-green cursor-pointer font-bold text-slate-700 underline">
              Privacy Policy
            </span>
          </p> */}

          <fieldset className="form-group w-full">
            <label
              htmlFor="email-input"
              className="form-label block text-base font-bold text-slate-800"
            >
              Email Address
            </label>
            <input
              id="email-input"
              placeholder="Email Address"
              className="textfield"
              type="email"
              name="email"
            />
            {state?.errors && state?.errors.email && (
              <small className="font-500 mt-1 block text-sm text-red-600">
                {state?.errors.email}
              </small>
            )}
          </fieldset>
          <fieldset className="form-group w-full">
            <label
              htmlFor="password-input"
              className="form-label block text-base font-bold text-slate-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password-input"
              placeholder="Password"
              className="textfield"
              name="password"
            />
            {state?.errors && state?.errors.password && (
              <small className="font-500 mt-1 block text-sm text-red-600">
                {state?.errors.password}
              </small>
            )}{' '}
          </fieldset>
          <p className="text-left text-sm">
            Don&#39;t have an account?{' '}
            <Link
              href={APP_ROUTERS.SIGN_UP}
              className="text-green hover:text-olive-green text-base font-semibold underline"
            >
              Sign up
            </Link>
          </p>
          <ButtonWithLoading type="submit">Sign In</ButtonWithLoading>
          <Link
            href={APP_ROUTERS.FORGOT_PASSWORD}
            className="font-500 hover:text-green text-olive-green mt-2 text-center underline"
          >
            Forgot Password?
          </Link>
        </form>
      </div>
    </div>
  )
}

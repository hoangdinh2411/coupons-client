'use client'
import { APP_ROUTERS } from '@/helpers/config'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useActionState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { UserData } from '@/types/auth.type'
import ButtonWithLoading from '@/components/button-with-loading/ButtonWithLoading'
import { VerifyCodeType } from '@/types/enum'
import { SignUpAction } from '@/app/actions/sign-up.action'

//TODO: Typing & style
export default function SignInPage() {
  const [state, action] = useActionState(SignUpAction, {})
  const router = useRouter()

  useEffect(() => {
    if (state.error) {
      toast.error(state.error)
    }
    if (state.data) {
      toast.success('Sign up success!')

      const result: UserData = state.data
      if (result && !result.email_verified) {
        router.push(
          `${APP_ROUTERS.VERIFY}?email=${result.email}&type=${VerifyCodeType.VERIFY_ACCOUNT}`,
        )
        return
      }
    }
  }, [state])

  return (
    <div className="flex h-screen w-full max-w-screen flex-col items-center justify-center gap-5 bg-white md:mx-auto md:mt-6 md:w-[400px] md:bg-transparent">
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
        <form
          action={action}
          className="flex w-full flex-col gap-4 rounded-sm bg-white p-6"
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

          <div className="flex gap-4">
            <fieldset className="form-group">
              <label
                htmlFor="first-name-input"
                className="form-label block text-base font-bold text-slate-800"
              >
                First name
              </label>
              <input
                id="first-name-input"
                placeholder="First name"
                className="textfield"
                type="text"
                name="first_name"
              />
              {state?.errors && state?.errors.first_name && (
                <small className="font-500 mt-1 block text-sm text-red-600">
                  {state?.errors.first_name}
                </small>
              )}
            </fieldset>
            <fieldset className="form-group">
              <label
                htmlFor="last-name-input"
                className="form-label block text-base font-bold text-slate-800"
              >
                Last name
              </label>
              <input
                id="last-name-input"
                placeholder="Last name"
                className="textfield"
                type="text"
                name="last_name"
              />
              {state?.errors && state?.errors.last_name && (
                <small className="font-500 mt-1 block text-sm text-red-600">
                  {state?.errors.last_name}
                </small>
              )}
            </fieldset>
          </div>

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
          <fieldset className="form-group w-full">
            <label
              htmlFor="confirm-password-input"
              className="form-label block text-base font-bold text-slate-800"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password-input"
              placeholder="Password"
              className="textfield"
              name="confirm_password"
            />
            {state?.errors && state?.errors.confirm_password && (
              <small className="font-500 mt-1 block text-sm text-red-600">
                {state?.errors.confirm_password}
              </small>
            )}{' '}
          </fieldset>
          <p className="text-center break-normal">
            By signing up you confirm that you are 16 years of age or older and
            you agree to our{' '}
            <Link
              className="text-green hover:text-olive-green underline"
              href={APP_ROUTERS.TERMS}
            >
              {' '}
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              className="text-green hover:text-olive-green underline"
              href={APP_ROUTERS.POLICY}
            >
              Privacy Policy
            </Link>
            .
          </p>
          <ButtonWithLoading type="submit">Sign Up</ButtonWithLoading>
        </form>
      </div>
    </div>
  )
}

'use client'
import { signinSchema } from '@/helper/auth.validation.schema'
import { APP_ROUTERS } from '@/helpers/config'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

//TODO: Typing & style
export type AuthLoginSchemaType = z.infer<typeof signinSchema>
export default function SiginPage() {
  const navigation = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthLoginSchemaType>({
    resolver: zodResolver(signinSchema),
  })

  const onSubmit = (data: AuthLoginSchemaType) => {
    alert(JSON.stringify(data))
    navigation.push(APP_ROUTERS.VERIFY)
  }

  return (
    <div className="flex h-full w-full max-w-screen flex-col items-center justify-center gap-5 bg-white py-6 md:mx-auto md:mt-6 md:h-[500px] md:w-[330px] md:bg-[#F3F4F6]">
      <div className="w-full sm:mx-auto sm:w-sm md:mx-1 md:w-full">
        <div className="md:mb-4">
          <h3 className="text-center text-[40px] font-semibold">Log In</h3>
          <p className="text-center text-sm">
            Don&#39;t have an account?{' '}
            <Link
              href={APP_ROUTERS.SIGN_UP}
              className="text-green font-semibold underline"
            >
              Sign up
            </Link>
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-2 rounded-sm bg-white p-6"
        >
          <p className="mb-6 text-center text-slate-500">
            By logging in you confirm that you are 16 years of age or older and
            you agree to our{' '}
            <span className="hover:text-green cursor-pointer font-bold text-slate-700 underline">
              Terms of Service
            </span>{' '}
            and{' '}
            <span className="hover:text-green cursor-pointer font-bold text-slate-700 underline">
              Privacy Policy
            </span>
          </p>

          <div className="form-group w-full">
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
              {...register('email')}
            />
            {errors.email && (
              <small className="font-500 mt-1 block text-sm text-red-600">
                {errors.email.message}
              </small>
            )}
          </div>
          <div className="form-group w-full">
            <label
              htmlFor="email-input"
              className="form-label block text-base font-bold text-slate-800"
            >
              Password
            </label>
            <input
              id="password-input"
              placeholder="password"
              className="textfield"
              {...register('password')}
            />
            {errors.password && (
              <small className="font-500 mt-1 block text-sm text-red-600">
                {errors.password.message}
              </small>
            )}{' '}
          </div>
          <button type="submit" className="btn-primary">
            {' '}
            Login
          </button>
          <Link
            href={APP_ROUTERS.FORGOT_PASSWORD}
            className="font-500 hover:text-green mt-2 text-center text-slate-600"
          >
            Forgot Password?
          </Link>
        </form>
      </div>
    </div>
  )
}

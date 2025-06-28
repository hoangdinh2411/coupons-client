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

const textFieldClass =
  '!border !border-slate-300 w-full px-2 h-11 rounded-none text-slate-600 mt-1'

const buttonPrimaryClass =
  'rounded-3xl mt-4 cursor-pointer hover:bg-light-green text-center py-2 text-white hover:text-slate-600 font-bold bg-green'

interface ILoginPayloadType {
  email: string
  password: string
}
export default function SiginTemplate() {
  const navigation = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginPayloadType>({
    resolver: zodResolver(signinSchema),
  })

  const onSubmit = (data: ILoginPayloadType) => {
    alert(JSON.stringify(data))
    navigation.push(APP_ROUTERS.VERIFY)
  }

  return (
    <div className="w-full py-10 max-w-screen h-full flex  flex-col bg-white md:bg-[#F3F4F6] gap-5 justify-center items-center  md:w-[330px] md:h-[500px] md:mx-auto ">
      <div className="sm:mx-auto w-full sm:w-sm md:mx-1 md:w-full">
        <div className="md:mb-4">
          <h3 className="text-center text-[40px] font-semibold">Log In</h3>
          <p className="text-sm text-center">
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
          className=" bg-white w-full gap-2 flex flex-col p-6 rounded-sm"
        >
          <p className="text-center text-slate-500 mb-6">
            By logging in you confirm that you are 16 years of age or older and
            you agree to our{' '}
            <span className="font-bold underline text-slate-700 cursor-pointer hover:text-green">
              Terms of Service
            </span>{' '}
            and{' '}
            <span className="font-bold underline text-slate-700 cursor-pointer hover:text-green">
              Privacy Policy
            </span>
          </p>

          <div className="form-group w-full">
            <label
              htmlFor="email-input"
              className="text-slate-800 form-label text-base font-bold block "
            >
              Email Address
            </label>
            <input
              id="email-input"
              placeholder="Email Address"
              className={textFieldClass}
              {...register('email')}
            />
            {errors.email && (
              <small className="text-red-600 font-500 text-sm mt-1 block">
                {errors.email.message}
              </small>
            )}
          </div>
          <div className="form-group w-full">
            <label
              htmlFor="email-input"
              className="text-slate-800 form-label text-base font-bold block "
            >
              Password
            </label>
            <input
              id="password-input"
              placeholder="password"
              className="!border !border-slate-300 w-full px-2 h-11 rounded-none text-slate-600  mt-1"
              {...register('password')}
            />
            {errors.password && (
              <small className="text-red-600 font-500 text-sm mt-1 block">
                {errors.password.message}
              </small>
            )}{' '}
          </div>
          <button type="submit" className={buttonPrimaryClass}>
            {' '}
            Login
          </button>
          <Link
            href={APP_ROUTERS.FORGOT_PASSWORD}
            className="text-slate-600 font-500 text-center mt-2"
          >
            Forgot Password?
          </Link>
          <Link
            href={APP_ROUTERS.FORGOT_PASSWORD}
            className="text-slate-600 font-500 text-center mt-2 hover:underline"
          >
            Heads up! For accounts with no password created, use the ‘Forgot
            Password?’ link above, then check your email for instructions to
            create one.
          </Link>
        </form>
      </div>
    </div>
  )
}

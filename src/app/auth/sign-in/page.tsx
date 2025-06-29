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
    <div className="m-auto flex w-full max-w-[360px] flex-col items-center justify-start gap-5">
      <div>
        <h3 className="text-center text-[40px] font-semibold">Sign In</h3>
        <p className="text-sm">
          Don&#39;t have an account?{' '}
          <Link href={APP_ROUTERS.SIGN_UP} className="text-blue-800 underline">
            Sign Up
          </Link>
        </form>
      </div>
      <form className="w-full rounded-sm bg-white p-6"></form>
    </div>
  )
}

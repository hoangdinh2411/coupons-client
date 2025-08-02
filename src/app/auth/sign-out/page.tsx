'use client'
import SpinnerLoading from '@/components/loading'
import { APP_ROUTERS } from '@/helpers/config'
import UseAppStore from '@/stores/app.store'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
function SignOutPage() {
  const { signOut } = UseAppStore((state) => state)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    async function handleSignOut() {
      setLoading(true)
      await signOut()

      setTimeout(() => {
        router.push(APP_ROUTERS.SIGN_IN)
      }, 3000)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
    handleSignOut()
  }, [])

  const handelContinue = () => {
    router.push(APP_ROUTERS.INDEX)
  }
  return (
    <div className="flex w-full max-w-screen flex-col items-center justify-center gap-5 bg-white pb-10 md:mx-auto md:mt-6 md:w-[400px] md:bg-transparent">
      <p className="mt-6 flex flex-col items-center gap-4 text-[40px] font-bold text-slate-800">
        <FaUserCircle size={58} />
        Sign Out
      </p>
      {
        <div className="min-h-20 text-center">
          {loading ? (
            <SpinnerLoading />
          ) : (
            <div className="flex flex-col items-center gap-2">
              <h3>You&lsquo;ve been logged out!</h3>
              <p className="text-center">
                Hang tight to be automatically redirected, or tap below to
                continue
              </p>
              <button
                onClick={handelContinue}
                className="text-green hover:text-olive-green text-lg underline"
              >
                Continue
              </button>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default SignOutPage

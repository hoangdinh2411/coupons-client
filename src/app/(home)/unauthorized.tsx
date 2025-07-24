'use client'
import { APP_ROUTERS } from '@/helpers/config'
import UseAppStore from '@/stores/app.store'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Unauthorized() {
  const signOut = UseAppStore((state) => state.signOut)
  useEffect(() => {
    signOut()
  }, [])
  return (
    <div className="my-20 flex w-full max-w-[--max-width] flex-col items-center justify-between gap-4">
      <h1 className="text-2xl font-bold">401 - Unauthorized</h1>
      <p>Please sign in to access this page.</p>
      <Link className="btn-primary mt-4 w-50" href={APP_ROUTERS.SIGN_IN}>
        Sign In
      </Link>
    </div>
  )
}

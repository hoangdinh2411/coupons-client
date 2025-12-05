'use client'
import React, { ButtonHTMLAttributes } from 'react'
import { useFormStatus } from 'react-dom'
import SpinnerLoading from '../loading'

interface ButtonWithLoadingProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  isPending?: boolean
}

export default function ButtonWithLoading({
  children,
  className = '',
  isPending = false,
  ...rest
}: ButtonWithLoadingProp) {
  const { pending } = useFormStatus()
  return (
    <button
      className={`btn-primary relative ${className} `}
      {...rest}
      disabled={pending || isPending}
    >
      {isPending || pending ? <SpinnerLoading className="h-6 w-6" /> : children}
    </button>
  )
}

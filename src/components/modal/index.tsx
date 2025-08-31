'use client'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
  showCloseButton?: boolean
  isCenter?: boolean
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'lg',
  showCloseButton = true,
  isCenter = true,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null)
  const [wrapper, setWrapper] = useState<HTMLElement | null>(null)
  useLayoutEffect(() => {
    let element = document.getElementById('modal-root')

    if (!element) {
      const wrapper = document.createElement('div')
      wrapper.setAttribute('id', 'modal-root')
      document.body.appendChild(wrapper)
      element = wrapper
    }

    setWrapper(element)
  }, [])
  const maxWidthClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    full: 'max-w-screen',
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === dialogRef.current) {
      onClose()
    }
  }

  if (!wrapper) {
    return null
  }
  return createPortal(
    <div
      ref={dialogRef}
      className={`${isOpen ? 'flex' : 'hidden'} fixed inset-0 z-50 items-center justify-center bg-black/30 backdrop-blur-sm`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative ${isCenter ? 'mx-auto md:p-4' : 'mx-0'} flex w-full flex-col overflow-hidden ${maxWidthClasses[maxWidth]} h-auto rounded-xl bg-white shadow-lg`}
      >
        {showCloseButton && (
          <div className="absolute top-4 right-4 z-10">
            <div className="hover:border-green cursor-pointer rounded-[100%] border-2 border-white">
              <button
                className="cursor-pointer rounded-full p-2 hover:bg-gray-50 focus:outline-none"
                onClick={onClose}
                aria-label="Close modal"
              >
                <svg
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m10 12.357-7.155 7.155a1.667 1.667 0 1 1-2.357-2.357L7.643 10 .488 2.845A1.667 1.667 0 0 1 2.845.488L10 7.643 17.155.488a1.667 1.667 0 1 1 2.357 2.357L12.357 10l7.155 7.155a1.667 1.667 0 1 1-2.357 2.357z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        {title && (
          <div className="px-4 py-2 text-center text-lg font-bold">{title}</div>
        )}
        <div
          className={`min-h-[100vh] rounded-xl md:min-h-auto ${isCenter && 'p-4'} overflow-y-auto`}
        >
          {children}
        </div>
      </div>
    </div>,
    wrapper,
  )
}

export default Modal

import React, { useEffect, useRef } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
  showCloseButton?: boolean
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'lg',
  showCloseButton = true,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null)

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

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === dialogRef.current) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        className={`relative mx-auto flex w-full flex-col ${maxWidthClasses[maxWidth]} h-auto rounded-lg bg-white shadow-lg md:p-4`}
      >
        {showCloseButton && (
          <div className="absolute top-2 right-2 z-10">
            <div className="hover:border-green cursor-pointer rounded-[100%] border-2 border-white">
              <button
                className="cursor-pointer rounded-full p-2 hover:bg-gray-100 focus:outline-none"
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
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export default Modal

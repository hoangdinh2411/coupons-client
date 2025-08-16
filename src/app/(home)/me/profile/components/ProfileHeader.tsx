// components/ProfileHeader.tsx
import React from 'react'
import Image from 'next/image'

interface ProfileHeaderProps {
  email: string
  avatar?: { url: string }
  loading: boolean
  onSelectFile: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  email,
  avatar,
  loading,
  onSelectFile,
}) => {
  return (
    <div className="mb-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
      <h2 className="text-center text-lg font-medium break-all text-gray-700 sm:text-left sm:text-xl">
        {email || '****@gmail.com'}
      </h2>
      <div className="flex flex-col items-center gap-3 sm:gap-4">
        <div className="relative flex size-16 overflow-hidden rounded-full bg-gray-200 sm:size-20">
          {avatar?.url ? (
            <Image
              src={avatar.url}
              alt="Profile"
              className="h-full w-full object-cover"
              width={80}
              height={80}
            />
          ) : (
            <svg
              className="h-full w-full text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          )}
        </div>
        <label className="cursor-pointer text-sm font-medium text-[rgb(116,31,162)] hover:underline sm:text-base">
          {loading ? 'Uploading...' : 'Update Photo'}
          <input
            type="file"
            accept="image/*"
            onChange={onSelectFile}
            className="hidden"
            disabled={loading}
          />
        </label>
      </div>
    </div>
  )
}

export default ProfileHeader

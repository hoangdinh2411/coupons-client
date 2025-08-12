/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { APP_ROUTERS } from '@/helpers/config'
import UseAppStore from '@/stores/app.store'
import { updateProfile, updateAvatar } from '@/services/userApi'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { ImageType } from '@/types/share.type'
import DeleteAccount from './DeleteAccount'
import { uploadFile } from '@/services/fileApi'
interface ProfileFormData {
  firstName: string
  lastName: string
  email: string
  youtube: string
  linkedin: string
  instagram: string
  facebook: string
  avatar?: ImageType
}

const ProfilePage = () => {
  const { user, setUser } = UseAppStore()
  const [editingSection, setEditingSection] = useState<string | null>(null)
  const [showEmailVerification, setShowEmailVerification] = useState(false)
  const [formData, setFormData] = useState<ProfileFormData | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!user) return
    setFormData({
      firstName: user.first_name || '',
      lastName: user.last_name || '',
      email: user.email || '',
      avatar: user.avatar,
      youtube: user.youtube || '',
      linkedin: user.linkedin || '',
      instagram: user.instagram || '',
      facebook: user.facebook || '',
    })
  }, [user])

  const handleInputChange = (field: keyof ProfileFormData, value: string) => {
    setFormData((prev) => (prev ? { ...prev, [field]: value } : null))
  }

  const handleEdit = (section: string) => {
    if (section === 'email') {
      setShowEmailVerification(true)
    } else {
      setEditingSection(section)
    }
  }

  const handleSave = async (section: string) => {
    if (!formData || !user) return
    setLoading(true)
    try {
      let payload: any = {}
      let userUpdates: any = {}
      switch (section) {
        case 'fullName':
          payload = {
            first_name: formData.firstName,
            last_name: formData.lastName,
          }
          userUpdates = {
            first_name: formData.firstName,
            last_name: formData.lastName,
          }
          break
        case 'youtube':
          payload = {
            youtube: formData.youtube,
          }
          userUpdates = {
            youtube: formData.youtube,
          }
          break
        case 'linkedin':
          payload = {
            linkedin: formData.linkedin,
          }
          userUpdates = {
            linkedin: formData.linkedin,
          }
          break
        case 'instagram':
          payload = {
            instagram: formData.instagram,
          }
          userUpdates = {
            instagram: formData.instagram,
          }
          break
        case 'facebook':
          payload = {
            facebook: formData.facebook,
          }
          userUpdates = {
            facebook: formData.facebook,
          }
          break
        default:
          break
      }
      const response = await updateProfile(payload)
      console.log('🚀 ~ handleSave ~ response:', response)
      if (Object.keys(userUpdates).length > 0) {
        setUser({
          ...user,
          ...userUpdates,
        })
      }
      setEditingSection(null)
      toast.success(`Successfully update ${section}`)
    } catch (error) {
      console.error(`Error saving ${section}:`, error)
      toast.error(
        `Failed to update ${section}: ${error instanceof Error ? error.message : 'Unknown error'}`,
      )
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    setEditingSection(null)
    setShowEmailVerification(false)
    if (user) {
      setFormData({
        firstName: user.first_name || '',
        lastName: user.last_name || '',
        email: user.email || '',
        avatar: user.avatar,
        youtube: user.youtube || '',
        linkedin: user.linkedin || '',
        instagram: user.instagram || '',
        facebook: user.facebook || '',
      })
    }
  }

  const validateFile = (file: File): boolean => {
    const maxSize = 5 * 1024 * 1024 // 5MB
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp']

    if (!allowedTypes.includes(file.type)) {
      toast.error('Please select a valid image file (JPEG, PNG, WebP)')
      return false
    }

    if (file.size > maxSize) {
      toast.error('File size must be less than 5MB')
      return false
    }

    return true
  }

  const handleAvatarUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files
    if (!files || !files[0]) return

    const file = files[0]
    const isValid = validateFile(file)

    if (!isValid) {
      event.target.value = ''
      return
    }

    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('files', file)
      formData.append('folder', 'users')

      const fileRes = await uploadFile(formData)
      console.log('🚀 ~ handleAvatarUpload ~ fileRes:', fileRes)

      if (!fileRes.success && fileRes.message) {
        toast.error(fileRes.message)
        return
      }

      if (!fileRes.data) {
        toast.error('Missing data on response')
        return
      }

      if (fileRes.data && fileRes.data[0]) {
        const avatarPayload = {
          url: fileRes.data[0].url,
          public_id: fileRes.data[0].public_id,
          file_name: fileRes.data[0].file_name,
          caption: fileRes.data[0].caption || '',
        }

        const res = await updateAvatar(avatarPayload)

        if (res.success) {
          if (user) {
            setUser({
              ...user,
              avatar: avatarPayload,
            })
          }
          toast.success('Avatar uploaded successfully')
        } else {
          toast.error(res.message ?? 'Cannot upload avatar')
        }
      }
    } catch (error) {
      console.error('Error uploading avatar:', error)
      toast.error('Failed to upload avatar')
    } finally {
      setLoading(false)
      event.target.value = ''
    }
  }

  const sendVerificationEmail = () => {
    console.log('Sending verification email to:', formData?.email)
  }

  return (
    <div className="mx-auto my-4 w-full max-w-3xl flex-1 p-4 sm:p-6">
      {/* Breadcrumbs */}
      <div className="mb-6 flex flex-wrap sm:mb-10">
        <Link
          href={APP_ROUTERS.ACCOUNT}
          className="flex cursor-pointer items-center gap-1 text-sm leading-[1.33] font-bold tracking-[0.2px] text-[rgb(116,31,162)] no-underline"
        >
          <FaChevronLeft />
          <span>Account</span>
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-olive-green mt-0 mb-6 text-2xl leading-[1.4] font-[450] tracking-normal [text-shadow:0px_2px_6px_rgba(0,0,0,0.04)] sm:mb-8 sm:text-[40px]">
        Profile
      </h1>

      {/* Profile Header */}
      <div className="mb-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <h2 className="text-center text-lg font-medium break-all text-gray-700 sm:text-left sm:text-xl">
          {user?.email || '****@gmail.com'}
        </h2>
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="relative flex size-16 overflow-hidden rounded-full bg-gray-200 sm:size-20">
            {user?.avatar?.url ? (
              <Image
                src={user?.avatar?.url ?? ''}
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
              onChange={handleAvatarUpload}
              className="hidden"
              disabled={loading}
            />
          </label>
        </div>
      </div>

      <hr className="mb-6 border-gray-200 sm:mb-8" />

      {/* Profile Fields */}
      <div className="space-y-0">
        {/* Full Name Section */}
        {editingSection === 'fullName' ? (
          <div className="border-b border-gray-200 py-4 sm:py-6">
            <div className="mb-4 flex flex-col justify-between gap-2 sm:mb-6 sm:flex-row sm:items-center">
              <h3 className="text-lg font-medium text-gray-900">Full Name</h3>
              <button
                onClick={handleCancel}
                className="self-start font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto"
                disabled={loading}
              >
                Cancel
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData?.firstName || ''}
                    onChange={(e) =>
                      handleInputChange('firstName', e.target.value)
                    }
                    className="textfield w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none sm:text-base"
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData?.lastName || ''}
                    onChange={(e) =>
                      handleInputChange('lastName', e.target.value)
                    }
                    className="textfield w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none sm:text-base"
                    disabled={loading}
                  />
                </div>
              </div>
              <button
                onClick={() => handleSave('fullName')}
                className="w-full rounded-full bg-[rgb(116,31,162)] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[rgb(96,21,142)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:text-base"
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between gap-2 border-b border-gray-200 py-4 sm:flex-row sm:items-center sm:py-6">
            <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <span className="w-full flex-shrink-0 text-base font-medium text-gray-900 sm:w-32 sm:text-lg">
                Full Name
              </span>
              <span className="text-sm break-words text-gray-900 sm:text-base">
                {formData?.firstName} {formData?.lastName}
              </span>
            </div>
            <button
              onClick={() => handleEdit('fullName')}
              className="self-start text-sm font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto sm:text-base"
              disabled={loading}
            >
              Edit
            </button>
          </div>
        )}

        {/* Email Section */}
        {showEmailVerification ? (
          <div className="border-b border-gray-200 py-4 sm:py-6">
            <div className="mb-4 flex flex-col justify-between gap-2 sm:mb-6 sm:flex-row sm:items-center">
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <button
                onClick={handleCancel}
                className="self-start font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto"
              >
                Cancel
              </button>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 sm:p-6">
              <p className="mb-4 text-sm text-gray-700 sm:text-base">
                Please confirm the email associated with your RetailMeNot
                account and we&apos;ll send you an email with a verification
                code.
              </p>
              <div className="mb-4 text-center sm:mb-6">
                <p className="text-sm font-medium break-all text-gray-900 sm:text-base">
                  {formData?.email}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <button
                  onClick={sendVerificationEmail}
                  className="w-full rounded-full bg-[rgb(116,31,162)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[rgb(96,21,142)] sm:w-auto sm:text-base"
                >
                  Send Verification Email
                </button>
                <div className="flex flex-col items-center space-y-2 text-sm sm:flex-row sm:space-y-0 sm:space-x-2">
                  <button className="text-[rgb(116,31,162)] hover:underline">
                    I have a code
                  </button>
                  <span className="hidden text-gray-400 sm:inline">|</span>
                  <button
                    onClick={handleCancel}
                    className="text-[rgb(116,31,162)] hover:underline"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between gap-2 border-b border-gray-200 py-4 sm:flex-row sm:items-center sm:py-6">
            <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <span className="w-full flex-shrink-0 text-base font-medium text-gray-900 sm:w-32 sm:text-lg">
                Email
              </span>
              <span className="text-sm break-all text-gray-900 sm:text-base">
                {formData?.email}
              </span>
            </div>
            <button
              onClick={() => handleEdit('email')}
              className="self-start text-sm font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto sm:text-base"
            >
              Edit
            </button>
          </div>
        )}

        <div className="flex flex-col justify-between gap-2 border-b border-gray-200 py-4 sm:flex-row sm:items-center sm:py-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <span className="w-full flex-shrink-0 text-base font-medium text-gray-900 sm:w-32 sm:text-lg">
              Password
            </span>
            <span className="text-sm text-gray-900 sm:text-base">
              ••••••••••
            </span>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="pt-6 sm:pt-8">
          <h3 className="mb-4 text-lg font-medium text-gray-900 sm:mb-6">
            Social Media Links
          </h3>

          {/* YouTube Section */}
          {editingSection === 'youtube' ? (
            <div className="border-b border-gray-200 py-4 sm:py-6">
              <div className="mb-4 flex flex-col justify-between gap-2 sm:mb-6 sm:flex-row sm:items-center">
                <h4 className="text-lg font-medium text-gray-900">YouTube</h4>
                <button
                  onClick={handleCancel}
                  className="self-start font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto"
                  disabled={loading}
                >
                  Cancel
                </button>
              </div>
              <div className="space-y-4">
                <input
                  type="url"
                  value={formData?.youtube || ''}
                  onChange={(e) => handleInputChange('youtube', e.target.value)}
                  placeholder="https://youtube.com/@your-channel"
                  className="textfield w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none sm:max-w-md sm:text-base"
                  disabled={loading}
                />
                <button
                  onClick={() => handleSave('youtube')}
                  className="w-full rounded-full bg-[rgb(116,31,162)] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[rgb(96,21,142)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:text-base"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-between gap-2 border-b border-gray-200 py-4 sm:flex-row sm:items-center sm:py-6">
              <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <span className="w-full flex-shrink-0 text-base font-medium text-gray-900 sm:w-32 sm:text-lg">
                  YouTube
                </span>
                <span className="line-clamp-1 text-sm break-all text-gray-500 sm:text-base">
                  {formData?.youtube || 'Not Provided'}
                </span>
              </div>
              <button
                onClick={() => handleEdit('youtube')}
                className="self-start text-sm font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto sm:text-base"
                disabled={loading}
              >
                {formData?.youtube ? 'Edit' : 'Add'}
              </button>
            </div>
          )}

          {/* LinkedIn Section */}
          {editingSection === 'linkedin' ? (
            <div className="border-b border-gray-200 py-4 sm:py-6">
              <div className="mb-4 flex flex-col justify-between gap-2 sm:mb-6 sm:flex-row sm:items-center">
                <h4 className="text-lg font-medium text-gray-900">LinkedIn</h4>
                <button
                  onClick={handleCancel}
                  className="self-start font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto"
                  disabled={loading}
                >
                  Cancel
                </button>
              </div>
              <div className="space-y-4">
                <input
                  type="url"
                  value={formData?.linkedin || ''}
                  onChange={(e) =>
                    handleInputChange('linkedin', e.target.value)
                  }
                  placeholder="https://linkedin.com/in/your-profile"
                  className="textfield w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none sm:max-w-md sm:text-base"
                  disabled={loading}
                />
                <button
                  onClick={() => handleSave('linkedin')}
                  className="w-full rounded-full bg-[rgb(116,31,162)] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[rgb(96,21,142)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:text-base"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-between gap-2 border-b border-gray-200 py-4 sm:flex-row sm:items-center sm:py-6">
              <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <span className="w-full flex-shrink-0 text-base font-medium text-gray-900 sm:w-32 sm:text-lg">
                  LinkedIn
                </span>
                <span className="line-clamp-1 text-sm break-all text-gray-500 sm:text-base">
                  {formData?.linkedin || 'Not Provided'}
                </span>
              </div>
              <button
                onClick={() => handleEdit('linkedin')}
                className="self-start text-sm font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto sm:text-base"
                disabled={loading}
              >
                {formData?.linkedin ? 'Edit' : 'Add'}
              </button>
            </div>
          )}

          {/* Instagram Section */}
          {editingSection === 'instagram' ? (
            <div className="border-b border-gray-200 py-4 sm:py-6">
              <div className="mb-4 flex flex-col justify-between gap-2 sm:mb-6 sm:flex-row sm:items-center">
                <h4 className="text-lg font-medium text-gray-900">Instagram</h4>
                <button
                  onClick={handleCancel}
                  className="self-start font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto"
                  disabled={loading}
                >
                  Cancel
                </button>
              </div>
              <div className="space-y-4">
                <input
                  type="url"
                  value={formData?.instagram || ''}
                  onChange={(e) =>
                    handleInputChange('instagram', e.target.value)
                  }
                  placeholder="https://instagram.com/your-username"
                  className="textfield w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none sm:max-w-md sm:text-base"
                  disabled={loading}
                />
                <button
                  onClick={() => handleSave('instagram')}
                  className="w-full rounded-full bg-[rgb(116,31,162)] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[rgb(96,21,142)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:text-base"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-between gap-2 border-b border-gray-200 py-4 sm:flex-row sm:items-center sm:py-6">
              <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <span className="w-full flex-shrink-0 text-base font-medium text-gray-900 sm:w-32 sm:text-lg">
                  Instagram
                </span>
                <span className="line-clamp-1 text-sm break-all text-gray-500 sm:text-base">
                  {formData?.instagram || 'Not Provided'}
                </span>
              </div>
              <button
                onClick={() => handleEdit('instagram')}
                className="self-start text-sm font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto sm:text-base"
                disabled={loading}
              >
                {formData?.instagram ? 'Edit' : 'Add'}
              </button>
            </div>
          )}

          {/* Facebook Section */}
          {editingSection === 'facebook' ? (
            <div className="border-b border-gray-200 py-4 sm:py-6">
              <div className="mb-4 flex flex-col justify-between gap-2 sm:mb-6 sm:flex-row sm:items-center">
                <h4 className="text-lg font-medium text-gray-900">Facebook</h4>
                <button
                  onClick={handleCancel}
                  className="self-start font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto"
                  disabled={loading}
                >
                  Cancel
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                <input
                  type="url"
                  value={formData?.facebook || ''}
                  onChange={(e) =>
                    handleInputChange('facebook', e.target.value)
                  }
                  placeholder="https://facebook.com/your-profile"
                  className="textfield w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none sm:max-w-md sm:text-base"
                  disabled={loading}
                />
                <button
                  onClick={() => handleSave('facebook')}
                  className="w-full rounded-full bg-[rgb(116,31,162)] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[rgb(96,21,142)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:text-base"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-between gap-2 border-b border-gray-200 py-4 sm:flex-row sm:items-center sm:py-6">
              <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <span className="w-full flex-shrink-0 text-base font-medium text-gray-900 sm:w-32 sm:text-lg">
                  Facebook
                </span>
                <span className="line-clamp-1 text-sm break-all text-gray-500 sm:text-base">
                  {formData?.facebook || 'Not Provided'}
                </span>
              </div>
              <button
                onClick={() => handleEdit('facebook')}
                className="self-start text-sm font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto sm:text-base"
                disabled={loading}
              >
                {formData?.facebook ? 'Edit' : 'Add'}
              </button>
            </div>
          )}
        </div>
        <DeleteAccount />
      </div>
    </div>
  )
}
export default ProfilePage

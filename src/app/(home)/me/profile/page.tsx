/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { APP_ROUTERS } from '@/helpers/config'
import UseAppStore from '@/stores/app.store'
import Image from 'next/image'
import toast from 'react-hot-toast'
import DeleteAccount from './DeleteAccount'
import { uploadFile } from '@/services/fileApi'
import { updateUser } from '@/services/userApi'

// Validation schemas
const fullNameSchema = z.object({
  first_name: z
    .string()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters'),
  last_name: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
})

const emailSchema = z.object({
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
})

const socialMediaSchema = z.object({
  youtube: z.string().url('Please enter a valid YouTube URL').or(z.literal('')),
  linkedin: z
    .string()
    .url('Please enter a valid LinkedIn URL')
    .or(z.literal('')),
  instagram: z
    .string()
    .url('Please enter a valid Instagram URL')
    .or(z.literal('')),
  facebook: z
    .string()
    .url('Please enter a valid Facebook URL')
    .or(z.literal('')),
})

const profileSchema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  youtube: z.string(),
  linkedin: z.string(),
  instagram: z.string(),
  facebook: z.string(),
  avatar: z.any().optional(),
})

type ProfileFormData = z.infer<typeof profileSchema>
type FullNameFormData = z.infer<typeof fullNameSchema>
type EmailFormData = z.infer<typeof emailSchema>
type SocialMediaFormData = z.infer<typeof socialMediaSchema>

const ProfilePage = () => {
  const { user, setUser } = UseAppStore((state) => state)
  console.log('🚀 ~ ProfilePage ~ user:', user)
  const [editingSection, setEditingSection] = useState<string | null>(null)
  const [showEmailVerification, setShowEmailVerification] = useState(false)
  const [loading, setLoading] = useState(false)

  // Main form for display data
  const mainForm = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    mode: 'onChange',
    defaultValues: {
      first_name: '',
      last_name: '',
      youtube: '',
      linkedin: '',
      instagram: '',
      facebook: '',
    },
  })

  const fullNameForm = useForm<FullNameFormData>({
    resolver: zodResolver(fullNameSchema),
    mode: 'onChange',
    defaultValues: {
      first_name: '',
      last_name: '',
    },
  })

  const emailForm = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  })

  const youtubeForm = useForm<Pick<SocialMediaFormData, 'youtube'>>({
    resolver: zodResolver(socialMediaSchema.pick({ youtube: true })),
    mode: 'onChange',
    defaultValues: { youtube: '' },
  })

  const linkedinForm = useForm<Pick<SocialMediaFormData, 'linkedin'>>({
    resolver: zodResolver(socialMediaSchema.pick({ linkedin: true })),
    mode: 'onChange',
    defaultValues: { linkedin: '' },
  })

  const instagramForm = useForm<Pick<SocialMediaFormData, 'instagram'>>({
    resolver: zodResolver(socialMediaSchema.pick({ instagram: true })),
    mode: 'onChange',
    defaultValues: { instagram: '' },
  })

  const facebookForm = useForm<Pick<SocialMediaFormData, 'facebook'>>({
    resolver: zodResolver(socialMediaSchema.pick({ facebook: true })),
    mode: 'onChange',
    defaultValues: { facebook: '' },
  })

  useEffect(() => {
    if (!user) return

    const userData = {
      first_name: user.first_name || '',
      last_name: user.last_name || '',
      youtube: user.youtube || '',
      linkedin: user.linkedin || '',
      instagram: user.instagram || '',
      facebook: user.facebook || '',
      avatar: user.avatar,
    }

    mainForm.reset(userData)
    fullNameForm.reset({
      first_name: userData.first_name,
      last_name: userData.last_name,
    })
    emailForm.reset({ email: user.email || '' })
    youtubeForm.reset({ youtube: userData.youtube })
    linkedinForm.reset({ linkedin: userData.linkedin })
    instagramForm.reset({ instagram: userData.instagram })
    facebookForm.reset({ facebook: userData.facebook })
  }, [user, mainForm, fullNameForm])

  const handleEdit = (section: string) => {
    if (section === 'email') {
      setShowEmailVerification(true)
    } else {
      setEditingSection(section)
    }
  }

  const onSubmitFullName = async (data: FullNameFormData) => {
    if (!user) return
    setLoading(true)

    const payload = {
      first_name: data.first_name,
      last_name: data.last_name,
    }
    try {
      const res = await updateUser(payload)
      console.log('🚀 ~ onSubmitFullName ~ res:', res)
      if (res.success && res.data) {
        setUser({
          // ...user,
          ...res.data,
        })
        setEditingSection(null)
        toast.success('Successfully updated full name')
      } else {
        throw new Error(res.message || 'Failed to update full name')
      }
    } catch (error) {
      console.error('Error updating full name:', error)
      toast.error(
        error instanceof Error ? error.message : 'Failed to update full name',
      )
    } finally {
      setLoading(false)
    }
  }
  const onSubmitYoutube = async (
    data: Pick<SocialMediaFormData, 'youtube'>,
  ) => {
    if (!user) return
    setLoading(true)

    const payload = { youtube: data.youtube }

    try {
      const res = await updateUser(payload)

      if (res.success && res.data) {
        setUser({
          ...user,
          ...res.data,
        })
        setEditingSection(null)
        toast.success('Successfully updated YouTube')
      } else {
        throw new Error(res.message || 'Failed to update YouTube')
      }
    } catch (error) {
      console.error('Error updating YouTube:', error)
      toast.error(
        error instanceof Error ? error.message : 'Failed to update YouTube',
      )
    } finally {
      setLoading(false)
    }
  }

  const onSubmitLinkedin = async (
    data: Pick<SocialMediaFormData, 'linkedin'>,
  ) => {
    if (!user) return
    setLoading(true)

    const payload = { linkedin: data.linkedin }

    try {
      const res = await updateUser(payload)

      if (res.success && res.data) {
        setUser({
          ...user,
          ...res.data,
        })
        setEditingSection(null)
        toast.success('Successfully updated LinkedIn')
      } else {
        throw new Error(res.message || 'Failed to update LinkedIn')
      }
    } catch (error) {
      console.error('Error updating LinkedIn:', error)
      toast.error(
        error instanceof Error ? error.message : 'Failed to update LinkedIn',
      )
    } finally {
      setLoading(false)
    }
  }

  const onSubmitInstagram = async (
    data: Pick<SocialMediaFormData, 'instagram'>,
  ) => {
    if (!user) return
    setLoading(true)

    const payload = { instagram: data.instagram }

    try {
      const res = await updateUser(payload)

      if (res.success && res.data) {
        setUser({
          ...user,
          ...res.data,
        })
        setEditingSection(null)
        toast.success('Successfully updated Instagram')
      } else {
        throw new Error(res.message || 'Failed to update Instagram')
      }
    } catch (error) {
      console.error('Error updating Instagram:', error)
      toast.error(
        error instanceof Error ? error.message : 'Failed to update Instagram',
      )
    } finally {
      setLoading(false)
    }
  }

  const onSubmitFacebook = async (
    data: Pick<SocialMediaFormData, 'facebook'>,
  ) => {
    if (!user) return
    setLoading(true)

    const payload = { facebook: data.facebook }

    try {
      const res = await updateUser(payload)

      if (res.success && res.data) {
        setUser({
          ...user,
          ...res.data,
        })
        setEditingSection(null)
        toast.success('Successfully updated Facebook')
      } else {
        throw new Error(res.message || 'Failed to update Facebook')
      }
    } catch (error) {
      console.error('Error updating Facebook:', error)
      toast.error(
        error instanceof Error ? error.message : 'Failed to update Facebook',
      )
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    setEditingSection(null)
    setShowEmailVerification(false)
    if (user) {
      fullNameForm.reset({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
      })
      emailForm.reset({ email: user.email || '' })
      youtubeForm.reset({ youtube: user.youtube || '' })
      linkedinForm.reset({ linkedin: user.linkedin || '' })
      instagramForm.reset({ instagram: user.instagram || '' })
      facebookForm.reset({ facebook: user.facebook || '' })
    }
  }

  const validateFile = (file: File): boolean => {
    const maxSize = 5 * 1024 * 1024
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

  const handleSelectFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    if (!files || !files[0]) return

    const file = files[0]
    const isValid = validateFile(file)

    if (!isValid) {
      e.target.value = ''
      return
    }

    setLoading(true)

    try {
      const formData = new FormData()
      formData.append('files', file)
      formData.append('folder', 'users')

      const fileRes = await uploadFile(formData)

      if (!fileRes.success) {
        toast.error(fileRes.message || 'Upload failed')
        return
      }

      if (!fileRes.data || !fileRes.data[0]) {
        toast.error('Missing data on response')
        return
      }

      const res = await updateUser({
        avatar: fileRes.data[0],
      })
      if (res.success && res.data) {
        setUser({
          ...user,
          ...res.data,
        })
        toast.success('Uploaded avatar')
      } else {
        toast.error(res.message ?? 'Cannot upload avatar')
      }
    } catch (error) {
      console.error('Error uploading avatar:', error)
      toast.error('Failed to upload avatar')
    } finally {
      setLoading(false)
      e.target.value = ''
    }
  }
  const displayValues = {
    firstName: user?.first_name || '',
    lastName: user?.last_name || '',
    email: user?.email || '',
    youtube: user?.youtube || '',
    linkedin: user?.linkedin || '',
    instagram: user?.instagram || '',
    facebook: user?.facebook || '',
    avatar: user?.avatar,
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
          {displayValues.email || '****@gmail.com'}
        </h2>
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className="relative flex size-16 overflow-hidden rounded-full bg-gray-200 sm:size-20">
            {displayValues.avatar?.url ? (
              <Image
                src={displayValues.avatar.url}
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
              onChange={handleSelectFile}
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
            <form
              onSubmit={fullNameForm.handleSubmit(onSubmitFullName)}
              noValidate
            >
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      {...fullNameForm.register('first_name')}
                      className="textfield w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none sm:text-base"
                      disabled={loading}
                    />
                    {fullNameForm.formState.errors.first_name && (
                      <p className="mt-1 text-sm text-red-600">
                        {fullNameForm.formState.errors.first_name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      {...fullNameForm.register('last_name')}
                      className="textfield w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none sm:text-base"
                      disabled={loading}
                    />
                    {fullNameForm.formState.errors.last_name && (
                      <p className="mt-1 text-sm text-red-600">
                        {fullNameForm.formState.errors.last_name.message}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[rgb(116,31,162)] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[rgb(96,21,142)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:text-base"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex flex-col justify-between gap-2 border-b border-gray-200 py-4 sm:flex-row sm:items-center sm:py-6">
            <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <span className="w-full flex-shrink-0 text-base font-medium text-gray-900 sm:w-32 sm:text-lg">
                Full Name
              </span>
              <span className="text-sm break-words text-gray-900 sm:text-base">
                {displayValues.firstName} {displayValues.lastName}
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
                  {displayValues.email}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <button className="w-full rounded-full bg-[rgb(116,31,162)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[rgb(96,21,142)] sm:w-auto sm:text-base">
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
                {displayValues.email}
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
              <form
                onSubmit={youtubeForm.handleSubmit(onSubmitYoutube)}
                noValidate
              >
                <div className="space-y-4">
                  <div>
                    <input
                      type="url"
                      {...youtubeForm.register('youtube')}
                      placeholder="https://youtube.com/@your-channel"
                      className="textfield w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none sm:max-w-md sm:text-base"
                      disabled={loading}
                    />
                    {youtubeForm.formState.errors.youtube && (
                      <p className="mt-1 text-sm text-red-600">
                        {youtubeForm.formState.errors.youtube.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[rgb(116,31,162)] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[rgb(96,21,142)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:text-base"
                    disabled={loading}
                  >
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="flex flex-col justify-between gap-2 border-b border-gray-200 py-4 sm:flex-row sm:items-center sm:py-6">
              <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <span className="w-full flex-shrink-0 text-base font-medium text-gray-900 sm:w-32 sm:text-lg">
                  YouTube
                </span>
                <span className="line-clamp-1 text-sm break-all text-gray-500 sm:text-base">
                  {displayValues.youtube || 'Not Provided'}
                </span>
              </div>
              <button
                onClick={() => handleEdit('youtube')}
                className="self-start text-sm font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto sm:text-base"
                disabled={loading}
              >
                {displayValues.youtube ? 'Edit' : 'Add'}
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
              <form
                onSubmit={linkedinForm.handleSubmit(onSubmitLinkedin)}
                noValidate
              >
                <div className="space-y-4">
                  <div>
                    <input
                      type="url"
                      {...linkedinForm.register('linkedin')}
                      placeholder="https://linkedin.com/in/your-profile"
                      className="textfield w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none sm:max-w-md sm:text-base"
                      disabled={loading}
                    />
                    {linkedinForm.formState.errors.linkedin && (
                      <p className="mt-1 text-sm text-red-600">
                        {linkedinForm.formState.errors.linkedin.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[rgb(116,31,162)] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[rgb(96,21,142)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:text-base"
                    disabled={loading}
                  >
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="flex flex-col justify-between gap-2 border-b border-gray-200 py-4 sm:flex-row sm:items-center sm:py-6">
              <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <span className="w-full flex-shrink-0 text-base font-medium text-gray-900 sm:w-32 sm:text-lg">
                  LinkedIn
                </span>
                <span className="line-clamp-1 text-sm break-all text-gray-500 sm:text-base">
                  {displayValues.linkedin || 'Not Provided'}
                </span>
              </div>
              <button
                onClick={() => handleEdit('linkedin')}
                className="self-start text-sm font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto sm:text-base"
                disabled={loading}
              >
                {displayValues.linkedin ? 'Edit' : 'Add'}
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
              <form
                onSubmit={instagramForm.handleSubmit(onSubmitInstagram)}
                noValidate
              >
                <div className="space-y-4">
                  <div>
                    <input
                      type="url"
                      {...instagramForm.register('instagram')}
                      placeholder="https://instagram.com/your-username"
                      className="textfield w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none sm:max-w-md sm:text-base"
                      disabled={loading}
                    />
                    {instagramForm.formState.errors.instagram && (
                      <p className="mt-1 text-sm text-red-600">
                        {instagramForm.formState.errors.instagram.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[rgb(116,31,162)] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[rgb(96,21,142)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:text-base"
                    disabled={loading}
                  >
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="flex flex-col justify-between gap-2 border-b border-gray-200 py-4 sm:flex-row sm:items-center sm:py-6">
              <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <span className="w-full flex-shrink-0 text-base font-medium text-gray-900 sm:w-32 sm:text-lg">
                  Instagram
                </span>
                <span className="line-clamp-1 text-sm break-all text-gray-500 sm:text-base">
                  {displayValues.instagram || 'Not Provided'}
                </span>
              </div>
              <button
                onClick={() => handleEdit('instagram')}
                className="self-start text-sm font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto sm:text-base"
                disabled={loading}
              >
                {displayValues.instagram ? 'Edit' : 'Add'}
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
              <form
                onSubmit={facebookForm.handleSubmit(onSubmitFacebook)}
                noValidate
              >
                <div className="space-y-4">
                  <div>
                    <input
                      type="url"
                      {...facebookForm.register('facebook')}
                      placeholder="https://facebook.com/your-profile"
                      className="textfield w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none sm:max-w-md sm:text-base"
                      disabled={loading}
                    />
                    {facebookForm.formState.errors.facebook && (
                      <p className="mt-1 text-sm text-red-600">
                        {facebookForm.formState.errors.facebook.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[rgb(116,31,162)] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[rgb(96,21,142)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:text-base"
                    disabled={loading}
                  >
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="flex flex-col justify-between gap-2 border-b border-gray-200 py-4 sm:flex-row sm:items-center sm:py-6">
              <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <span className="w-full flex-shrink-0 text-base font-medium text-gray-900 sm:w-32 sm:text-lg">
                  Facebook
                </span>
                <span className="line-clamp-1 text-sm break-all text-gray-500 sm:text-base">
                  {displayValues.facebook || 'Not Provided'}
                </span>
              </div>
              <button
                onClick={() => handleEdit('facebook')}
                className="self-start text-sm font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto sm:text-base"
                disabled={loading}
              >
                {displayValues.facebook ? 'Edit' : 'Add'}
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

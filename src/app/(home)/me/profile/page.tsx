/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react'
import UseAppStore from '@/stores/app.store'
import toast from 'react-hot-toast'
import DeleteAccount from './components/DeleteAccount'
import Breadcrumbs from './components/Breadcrumbs'
import { uploadFile } from '@/services/fileApi'
import { updateUser } from '@/services/userApi'
import { validateFile } from './schema'
import ProfileHeader from './components/ProfileHeader'
import ProfileField from './components/ProfileField'
import SocialMediaSection from './components/SocialMediaSection'

const ProfilePage = () => {
  const { user, setUser } = UseAppStore((state) => state)
  const [editingSection, setEditingSection] = useState<string | null>(null)
  const [showEmailVerification, setShowEmailVerification] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleEdit = (section: string) => {
    if (section === 'email') {
      setShowEmailVerification(true)
    } else {
      setEditingSection(section)
    }
  }

  const handleCancel = () => {
    setEditingSection(null)
    setShowEmailVerification(false)
  }

  const handleUpdateUser = async (payload: any, successMessage: string) => {
    if (!user) return false

    setLoading(true)
    try {
      const res = await updateUser(payload)
      if (res.success && res.data) {
        setUser({ ...user, ...res.data })
        setEditingSection(null)
        toast.success(successMessage)
        return true
      } else {
        throw new Error(res.message || 'Update failed')
      }
    } catch (error) {
      console.error('Error updating user:', error)
      toast.error(error instanceof Error ? error.message : 'Update failed')
      return false
    } finally {
      setLoading(false)
    }
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
      if (!fileRes.success || !fileRes.data?.[0]) {
        toast.error(fileRes.message || 'Upload failed')
        return
      }

      const res = await updateUser({ avatar: fileRes.data[0] })
      if (res.success && res.data) {
        setUser({ ...user, ...res.data })
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
      <Breadcrumbs />
      <h1 className="text-olive-green mt-0 mb-6 text-2xl leading-[1.4] font-[450] tracking-normal [text-shadow:0px_2px_6px_rgba(0,0,0,0.04)] sm:mb-8 sm:text-[40px]">
        Profile
      </h1>
      <ProfileHeader
        email={displayValues.email}
        avatar={displayValues.avatar}
        loading={loading}
        onSelectFile={handleSelectFile}
      />
      <hr className="mb-6 border-gray-200 sm:mb-8" />
      <div className="space-y-0">
        {/* Full Name Field */}
        <ProfileField
          type="fullName"
          label="Full Name"
          value={`${displayValues.firstName} ${displayValues.lastName}`}
          isEditing={editingSection === 'fullName'}
          loading={loading}
          user={user}
          onEdit={handleEdit}
          onCancel={handleCancel}
          onUpdate={handleUpdateUser}
        />

        {/* Email Field */}
        <ProfileField
          type="email"
          label="Email"
          value={displayValues.email}
          isEditing={showEmailVerification}
          loading={loading}
          user={user}
          onEdit={handleEdit}
          onCancel={handleCancel}
          onUpdate={handleUpdateUser}
        />

        {/* Password Field (Read-only) */}
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
        {/* Social Media Section */}
        <SocialMediaSection
          values={displayValues}
          editingSection={editingSection}
          loading={loading}
          user={user}
          onEdit={handleEdit}
          onCancel={handleCancel}
          onUpdate={handleUpdateUser}
        />
        <DeleteAccount />
      </div>
    </div>
  )
}

export default ProfilePage

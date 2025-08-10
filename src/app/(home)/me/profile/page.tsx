'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { APP_ROUTERS } from '@/helpers/config'

interface ProfileFormData {
  firstName: string
  lastName: string
  email: string
  password: string
  communityName: string
  phoneNumber: string
  newPassword: string
  confirmPassword: string
  youtube: string
  linkedin: string
  instagram: string
  facebook: string
}

const ProfilePage = () => {
  const [editingSection, setEditingSection] = useState<string | null>(null)
  const [showEmailVerification, setShowEmailVerification] = useState(false)
  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: 'Minh Quang',
    lastName: 'Le',
    email: 'lmquihdev@gmail.com',
    password: '2231232',
    communityName: 'lmquihdev589296',
    phoneNumber: '',
    newPassword: '',
    confirmPassword: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    youtube: '',
  })

  const handleInputChange = (field: keyof ProfileFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleEdit = (section: string) => {
    if (section === 'email') {
      setShowEmailVerification(true)
    } else {
      setEditingSection(section)
    }
  }

  const handleSave = (section: string) => {
    setEditingSection(null)
    // Handle save logic here
    console.log(`Saving ${section}:`, formData)
  }

  const handleCancel = () => {
    setEditingSection(null)
    setShowEmailVerification(false)
  }

  const sendVerificationEmail = () => {
    // Handle email verification
    console.log('Sending verification email to:', formData.email)
  }

  return (
    <div className="mx-auto my-4 w-full max-w-3xl flex-1 p-4">
      {/* Breadcrumbs */}
      <div className="mb-10 flex flex-wrap">
        <Link
          href={APP_ROUTERS.ACCOUNT}
          className="flex cursor-pointer items-center gap-1 text-sm leading-[1.33] font-bold tracking-[0.2px] text-[rgb(116,31,162)] no-underline"
        >
          <FaChevronLeft />
          <span>Account</span>
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-olive-green mt-0 mb-8 text-[40px] leading-[1.4] font-[450] tracking-normal [text-shadow:0px_2px_6px_rgba(0,0,0,0.04)]">
        Profile
      </h1>

      {/* Profile Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-medium text-gray-700">lmquihdev589296</h2>
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-200">
            <svg
              className="h-full w-full text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <button className="font-medium text-[rgb(116,31,162)] hover:underline">
            Update Photo
          </button>
        </div>
      </div>

      <hr className="mb-8 border-gray-200" />

      {/* Profile Fields */}
      <div className="space-y-0">
        {/* Full Name Section */}
        {editingSection === 'fullName' ? (
          <div className="border-b border-gray-200 py-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Full Name</h3>
              <button
                onClick={handleCancel}
                className="font-medium text-[rgb(116,31,162)] hover:underline"
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
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange('firstName', e.target.value)
                    }
                    className="textfield w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange('lastName', e.target.value)
                    }
                    className="textfield w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none"
                  />
                </div>
              </div>
              <button
                onClick={() => handleSave('fullName')}
                className="rounded-full bg-gray-400 px-6 py-2 font-medium text-white transition-colors hover:bg-gray-500"
              >
                Save Changes
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between border-b border-gray-200 py-6">
            <div className="flex items-center">
              <span className="w-48 text-lg font-medium text-gray-900">
                Full Name
              </span>
              <span className="text-gray-900">
                {formData.firstName} {formData.lastName}
              </span>
            </div>
            <button
              onClick={() => handleEdit('fullName')}
              className="font-medium text-[rgb(116,31,162)] hover:underline"
            >
              Edit
            </button>
          </div>
        )}

        {/* Email Section */}
        {showEmailVerification ? (
          <div className="border-b border-gray-200 py-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <button
                onClick={handleCancel}
                className="font-medium text-[rgb(116,31,162)] hover:underline"
              >
                Cancel
              </button>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <p className="mb-4 text-gray-700">
                Please confirm the email associated with your RetailMeNot
                account and we&apos;ll send you an email with a verification
                code.
              </p>
              <div className="mb-6 text-center">
                <p className="font-medium text-gray-900">{formData.email}</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <button
                  onClick={sendVerificationEmail}
                  className="rounded-full bg-[rgb(116,31,162)] px-6 py-3 font-medium text-white transition-colors hover:bg-[rgb(96,21,142)]"
                >
                  Send Verification Email
                </button>
                <div className="flex items-center space-x-2 text-sm">
                  <button className="text-[rgb(116,31,162)] hover:underline">
                    I have a code
                  </button>
                  <span className="text-gray-400">|</span>
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
          <div className="flex items-center justify-between border-b border-gray-200 py-6">
            <div className="flex items-center">
              <span className="w-48 text-lg font-medium text-gray-900">
                Email
              </span>
              <span className="text-gray-900">{formData.email}</span>
            </div>
            <button
              onClick={() => handleEdit('email')}
              className="font-medium text-[rgb(116,31,162)] hover:underline"
            >
              Edit
            </button>
          </div>
        )}

        {/* Community Name Section */}
        {editingSection === 'communityName' ? (
          <div className="border-b border-gray-200 py-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">
                Community Name
              </h3>
              <button
                onClick={handleCancel}
                className="font-medium text-[rgb(116,31,162)] hover:underline"
              >
                Cancel
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                value={formData.communityName}
                onChange={(e) =>
                  handleInputChange('communityName', e.target.value)
                }
                className="textfield w-full max-w-md rounded-md border border-gray-300 px-3 py-2 focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none"
              />
              <div className="">
                <button
                  onClick={() => handleSave('communityName')}
                  className="rounded-full bg-gray-400 px-6 py-2 font-medium text-white transition-colors hover:bg-gray-500"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between border-b border-gray-200 py-6">
            <div className="flex items-center">
              <span className="w-48 text-lg font-medium text-gray-900">
                Community Name
              </span>
              <span className="text-gray-900">{formData.communityName}</span>
            </div>
            <button
              onClick={() => handleEdit('communityName')}
              className="font-medium text-[rgb(116,31,162)] hover:underline"
            >
              Edit
            </button>
          </div>
        )}

        {/* Password Section */}
        {editingSection === 'password' ? (
          <div className="border-b border-gray-200 py-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Password</h3>
              <button
                onClick={handleCancel}
                className="font-medium text-[rgb(116,31,162)] hover:underline"
              >
                Cancel
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={formData.newPassword}
                    onChange={(e) =>
                      handleInputChange('newPassword', e.target.value)
                    }
                    className="textfield w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange('confirmPassword', e.target.value)
                    }
                    className="textfield w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none"
                  />
                </div>
              </div>
              <button
                onClick={() => handleSave('password')}
                className="rounded-full bg-gray-400 px-6 py-2 font-medium text-white transition-colors hover:bg-gray-500"
              >
                Save Changes
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between border-b border-gray-200 py-6">
            <div className="flex items-center">
              <span className="w-48 text-lg font-medium text-gray-900">
                Password
              </span>
              <span className="text-gray-900">••••••••••</span>
            </div>
            <button
              onClick={() => handleEdit('password')}
              className="font-medium text-[rgb(116,31,162)] hover:underline"
            >
              Edit
            </button>
          </div>
        )}

        {/* Phone Number Section */}
        {editingSection === 'phoneNumber' ? (
          <div className="border-b border-gray-200 py-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">
                Phone Number
              </h3>
              <button
                onClick={handleCancel}
                className="font-medium text-[rgb(116,31,162)] hover:underline"
              >
                Cancel
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="mb-3 text-sm text-gray-600">
                  For account security and reward redemption.
                </p>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    handleInputChange('phoneNumber', e.target.value)
                  }
                  placeholder="Enter phone number"
                  className="textfield w-full max-w-md rounded-md border border-gray-300 px-3 py-2 focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none"
                />
              </div>
              <button
                onClick={() => handleSave('phoneNumber')}
                className="rounded-full bg-gray-400 px-6 py-2 font-medium text-white transition-colors hover:bg-gray-500"
              >
                Save Changes
              </button>
            </div>
          </div>
        ) : (
          <div className="border-b border-gray-200 py-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="mb-2 flex items-center">
                  <span className="w-48 text-lg font-medium text-gray-900">
                    Phone Number
                  </span>
                  <span className="text-gray-500">
                    {formData.phoneNumber || 'Not Provided'}
                  </span>
                </div>
                {!formData.phoneNumber && (
                  <p className="ml-48 text-sm text-gray-600">
                    For account security and reward redemption.
                  </p>
                )}
              </div>
              <button
                onClick={() => handleEdit('phoneNumber')}
                className="font-medium text-[rgb(116,31,162)] hover:underline"
              >
                {formData.phoneNumber ? 'Edit' : 'Add'}
              </button>
            </div>
          </div>
        )}

        {/* Social Media Links Section */}
        <div className="pt-8">
          <h3 className="mb-6 text-lg font-medium text-gray-900">
            Social Media Links
          </h3>

          {/* YouTube Section */}
          {editingSection === 'youtube' ? (
            <div className="border-b border-gray-200 py-6">
              <div className="mb-6 flex items-center justify-between">
                <h4 className="text-lg font-medium text-gray-900">YouTube</h4>
                <button
                  onClick={handleCancel}
                  className="font-medium text-[rgb(116,31,162)] hover:underline"
                >
                  Cancel
                </button>
              </div>
              <div className="space-y-4">
                <input
                  type="url"
                  value={formData.youtube}
                  onChange={(e) => handleInputChange('youtube', e.target.value)}
                  placeholder="https://youtube.com/@your-channel"
                  className="textfield w-full max-w-md rounded-md border border-gray-300 px-3 py-2 focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none"
                />
                <div className="">
                  <button
                    onClick={() => handleSave('youtube')}
                    className="rounded-full bg-gray-400 px-6 py-2 font-medium text-white transition-colors hover:bg-gray-500"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between border-b border-gray-200 py-6">
              <div className="flex items-center">
                <span className="w-48 text-lg font-medium text-gray-900">
                  YouTube
                </span>
                <span className="text-gray-500">
                  {formData.youtube || 'Not Provided'}
                </span>
              </div>
              <div className=""></div>
              <button
                onClick={() => handleEdit('youtube')}
                className="font-medium text-[rgb(116,31,162)] hover:underline"
              >
                {formData.youtube ? 'Edit' : 'Add'}
              </button>
            </div>
          )}

          {/* LinkedIn Section */}
          {editingSection === 'linkedin' ? (
            <div className="border-b border-gray-200 py-6">
              <div className="mb-6 flex items-center justify-between">
                <h4 className="text-lg font-medium text-gray-900">LinkedIn</h4>
                <button
                  onClick={handleCancel}
                  className="font-medium text-[rgb(116,31,162)] hover:underline"
                >
                  Cancel
                </button>
              </div>
              <div className="space-y-4">
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) =>
                    handleInputChange('linkedin', e.target.value)
                  }
                  placeholder="https://linkedin.com/in/your-profile"
                  className="textfield w-full max-w-md rounded-md border border-gray-300 px-3 py-2 focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none"
                />
                <div className="">
                  <button
                    onClick={() => handleSave('linkedin')}
                    className="rounded-full bg-gray-400 px-6 py-2 font-medium text-white transition-colors hover:bg-gray-500"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between border-b border-gray-200 py-6">
              <div className="flex items-center">
                <span className="w-48 text-lg font-medium text-gray-900">
                  LinkedIn
                </span>
                <span className="text-gray-500">
                  {formData.linkedin || 'Not Provided'}
                </span>
              </div>
              <div className="">
                <button
                  onClick={() => handleEdit('linkedin')}
                  className="font-medium text-[rgb(116,31,162)] hover:underline"
                >
                  {formData.linkedin ? 'Edit' : 'Add'}
                </button>
              </div>
            </div>
          )}

          {/* Instagram Section */}
          {editingSection === 'instagram' ? (
            <div className="border-b border-gray-200 py-6">
              <div className="mb-6 flex items-center justify-between">
                <h4 className="text-lg font-medium text-gray-900">Instagram</h4>
                <button
                  onClick={handleCancel}
                  className="font-medium text-[rgb(116,31,162)] hover:underline"
                >
                  Cancel
                </button>
              </div>
              <div className="space-y-4">
                <input
                  type="url"
                  value={formData.instagram}
                  onChange={(e) =>
                    handleInputChange('instagram', e.target.value)
                  }
                  placeholder="https://instagram.com/your-username"
                  className="textfield w-full max-w-md rounded-md border border-gray-300 px-3 py-2 focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none"
                />
                <div className="">
                  <button
                    onClick={() => handleSave('instagram')}
                    className="rounded-full bg-gray-400 px-6 py-2 font-medium text-white transition-colors hover:bg-gray-500"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between border-b border-gray-200 py-6">
              <div className="flex items-center">
                <span className="w-48 text-lg font-medium text-gray-900">
                  Instagram
                </span>
                <span className="text-gray-500">
                  {formData.instagram || 'Not Provided'}
                </span>
              </div>
              <button
                onClick={() => handleEdit('instagram')}
                className="font-medium text-[rgb(116,31,162)] hover:underline"
              >
                {formData.instagram ? 'Edit' : 'Add'}
              </button>
            </div>
          )}

          {/* Facebook Section */}
          {editingSection === 'facebook' ? (
            <div className="border-b border-gray-200 py-6">
              <div className="mb-6 flex items-center justify-between">
                <h4 className="text-lg font-medium text-gray-900">Facebook</h4>
                <button
                  onClick={handleCancel}
                  className="font-medium text-[rgb(116,31,162)] hover:underline"
                >
                  Cancel
                </button>
              </div>
              <div className="flex flex-col space-y-4">
                <input
                  type="url"
                  value={formData.facebook}
                  onChange={(e) =>
                    handleInputChange('facebook', e.target.value)
                  }
                  placeholder="https://facebook.com/your-profile"
                  className="textfield w-full max-w-md rounded-md border border-gray-300 px-3 py-2 focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none"
                />
                <div className="">
                  <button
                    onClick={() => handleSave('facebook')}
                    className="rounded-full bg-gray-400 px-6 py-2 font-medium text-white transition-colors hover:bg-gray-500"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between border-b border-gray-200 py-6">
              <div className="flex items-center">
                <span className="w-48 text-lg font-medium text-gray-900">
                  Facebook
                </span>
                <span className="text-gray-500">
                  {formData.facebook || 'Not Provided'}
                </span>
              </div>
              <button
                onClick={() => handleEdit('facebook')}
                className="font-medium text-[rgb(116,31,162)] hover:underline"
              >
                {formData.facebook ? 'Edit' : 'Add'}
              </button>
            </div>
          )}
        </div>

        {/* Delete Account Section */}
        <div className="pt-8">
          <h3 className="mb-4 text-lg font-medium text-gray-900">
            Delete Account
          </h3>
          <p className="mb-4 text-gray-600">
            Deleting your account will wipe out all the information related to
            your account. Yes, everything. If you&apos;re sure you want to leave
            us forever, then proceed. We&apos;ll miss you!
          </p>
          <button className="font-medium text-[rgb(116,31,162)] hover:underline">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

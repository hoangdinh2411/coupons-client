/* eslint-disable @typescript-eslint/no-explicit-any */

// components/ProfileField.tsx
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FullNameFormData, fullNameSchema } from '../schema'

interface ProfileFieldProps {
  type: 'fullName' | 'email'
  label: string
  value: string
  isEditing: boolean
  loading: boolean
  user: any
  onEdit: (section: string) => void
  onCancel: () => void
  onUpdate: (payload: any, successMessage: string) => Promise<boolean>
}
const ProfileField: React.FC<ProfileFieldProps> = ({
  type,
  label,
  value,
  isEditing,
  loading,
  user,
  onEdit,
  onCancel,
  onUpdate,
}) => {
  const form = useForm<FullNameFormData>({
    resolver: zodResolver(fullNameSchema),
    mode: 'onChange',
    defaultValues: {
      first_name: user?.first_name || '',
      last_name: user?.last_name || '',
    },
  })

  React.useEffect(() => {
    if (user) {
      form.reset({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
      })
    }
  }, [user, form])

  const onSubmit = async (data: FullNameFormData) => {
    switch (type) {
      case 'fullName':
        await onUpdate(
          { first_name: data.first_name, last_name: data.last_name },
          'Successfully updated full name',
        )
        break
      default:
        break
    }
  }

  if (type === 'email' && isEditing) {
    return (
      <div className="border-b border-gray-200 py-4 sm:py-6">
        <div className="mb-4 flex flex-col justify-between gap-2 sm:mb-6 sm:flex-row sm:items-center">
          <h3 className="text-lg font-medium text-gray-900">Email</h3>
          <button
            onClick={onCancel}
            className="self-start font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto"
          >
            Cancel
          </button>
        </div>
        <div className="rounded-lg bg-gray-50 p-4 sm:p-6">
          <p className="mb-4 text-sm text-gray-700 sm:text-base">
            Please confirm the email associated with your RetailMeNot account
            and we&apos;ll send you an email with a verification code.
          </p>
          <div className="mb-4 text-center sm:mb-6">
            <p className="text-sm font-medium break-all text-gray-900 sm:text-base">
              {value}
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
                onClick={onCancel}
                className="text-[rgb(116,31,162)] hover:underline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'fullName' && isEditing) {
    return (
      <div className="border-b border-gray-200 py-4 sm:py-6">
        <div className="mb-4 flex flex-col justify-between gap-2 sm:mb-6 sm:flex-row sm:items-center">
          <h3 className="text-lg font-medium text-gray-900">{label}</h3>
          <button
            onClick={onCancel}
            className="self-start font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto"
            disabled={loading}
          >
            Cancel
          </button>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  {...form.register('first_name')}
                  className="textfield w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none sm:text-base"
                  disabled={loading}
                />
                {form.formState.errors.first_name && (
                  <p className="mt-1 text-sm text-red-600">
                    {form.formState.errors.first_name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  {...form.register('last_name')}
                  className="textfield w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none sm:text-base"
                  disabled={loading}
                />
                {form.formState.errors.last_name && (
                  <p className="mt-1 text-sm text-red-600">
                    {form.formState.errors.last_name.message}
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
    )
  }
  return (
    <div className="flex flex-col justify-between gap-2 border-b border-gray-200 py-4 sm:flex-row sm:items-center sm:py-6">
      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
        <span className="w-full flex-shrink-0 text-base font-medium text-gray-900 sm:w-32 sm:text-lg">
          {label}
        </span>
        <span className="text-sm break-all text-gray-900 sm:text-base">
          {value}
        </span>
      </div>
      <button
        onClick={() => onEdit(type)}
        className="self-start text-sm font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto sm:text-base"
        disabled={loading}
      >
        Edit
      </button>
    </div>
  )
}

export default ProfileField

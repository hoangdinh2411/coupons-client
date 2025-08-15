/* eslint-disable @typescript-eslint/no-explicit-any */
// components/SocialMediaField.tsx
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SocialMediaFormData, socialMediaSchema } from '../schema'

interface SocialMediaFieldProps {
  type: 'youtube' | 'linkedin' | 'instagram' | 'facebook'
  label: string
  placeholder: string
  value: string
  isEditing: boolean
  loading: boolean
  user: any
  onEdit: (section: string) => void
  onCancel: () => void
  onUpdate: (payload: any, successMessage: string) => Promise<boolean>
}

const SocialMediaField: React.FC<SocialMediaFieldProps> = ({
  type,
  label,
  placeholder,
  value,
  isEditing,
  loading,
  user,
  onEdit,
  onCancel,
  onUpdate,
}) => {
  const form = useForm<Pick<SocialMediaFormData, typeof type>>({
    resolver: zodResolver(
      socialMediaSchema.pick({ [type]: true } as Record<typeof type, true>),
    ),
    mode: 'onChange',
    defaultValues: { [type]: '' },
  })

  React.useEffect(() => {
    if (user) {
      form.reset({ [type]: user[type] || '' })
    }
  }, [user, form, type])

  const onSubmit = async (data: Pick<SocialMediaFormData, typeof type>) => {
    await onUpdate({ [type]: data[type] }, `Successfully updated ${label}`)
  }

  if (isEditing) {
    return (
      <div className="border-b border-gray-200 py-4 sm:py-6">
        <div className="mb-4 flex flex-col justify-between gap-2 sm:mb-6 sm:flex-row sm:items-center">
          <h4 className="text-lg font-medium text-gray-900">{label}</h4>
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
            <div>
              <input
                type="url"
                {...form.register(type)}
                placeholder={placeholder}
                className="textfield w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[rgb(116,31,162)] focus:ring-1 focus:ring-[rgb(116,31,162)] focus:outline-none sm:max-w-md sm:text-base"
                disabled={loading}
              />
              {form.formState.errors[type] && (
                <p className="mt-1 text-sm text-red-600">
                  {form.formState.errors[type]?.message}
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
    )
  }

  // Display mode
  return (
    <div className="flex flex-col justify-between gap-2 border-b border-gray-200 py-4 sm:flex-row sm:items-center sm:py-6">
      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
        <span className="w-full flex-shrink-0 text-base font-medium text-gray-900 sm:w-32 sm:text-lg">
          {label}
        </span>
        <span className="line-clamp-1 text-sm break-all text-gray-500 sm:text-base">
          {value || 'Not Provided'}
        </span>
      </div>
      <button
        onClick={() => onEdit(type)}
        className="self-start text-sm font-medium text-[rgb(116,31,162)] hover:underline sm:self-auto sm:text-base"
        disabled={loading}
      >
        {value ? 'Edit' : 'Add'}
      </button>
    </div>
  )
}

export default SocialMediaField

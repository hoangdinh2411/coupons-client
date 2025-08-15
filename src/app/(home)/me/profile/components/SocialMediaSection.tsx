/* eslint-disable @typescript-eslint/no-explicit-any */
// components/SocialMediaSection.tsx
import React from 'react'
import SocialMediaField from './SocialMediaField'

interface SocialMediaSectionProps {
  values: {
    youtube: string
    linkedin: string
    instagram: string
    facebook: string
  }
  editingSection: string | null
  loading: boolean
  user: any
  onEdit: (section: string) => void
  onCancel: () => void
  onUpdate: (payload: any, successMessage: string) => Promise<boolean>
}

const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({
  values,
  editingSection,
  loading,
  user,
  onEdit,
  onCancel,
  onUpdate,
}) => {
  const socialPlatforms = [
    {
      key: 'youtube',
      label: 'YouTube',
      placeholder: 'https://youtube.com/@your-channel',
      value: values.youtube,
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      placeholder: 'https://linkedin.com/in/your-profile',
      value: values.linkedin,
    },
    {
      key: 'instagram',
      label: 'Instagram',
      placeholder: 'https://instagram.com/your-username',
      value: values.instagram,
    },
    {
      key: 'facebook',
      label: 'Facebook',
      placeholder: 'https://facebook.com/your-profile',
      value: values.facebook,
    },
  ]

  return (
    <div className="pt-6 sm:pt-8">
      <h3 className="mb-4 text-lg font-medium text-gray-900 sm:mb-6">
        Social Media Links
      </h3>

      {socialPlatforms.map((platform) => (
        <SocialMediaField
          key={platform.key}
          type={
            platform.key as 'youtube' | 'linkedin' | 'instagram' | 'facebook'
          }
          label={platform.label}
          placeholder={platform.placeholder}
          value={platform.value}
          isEditing={editingSection === platform.key}
          loading={loading}
          user={user}
          onEdit={onEdit}
          onCancel={onCancel}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  )
}

export default SocialMediaSection

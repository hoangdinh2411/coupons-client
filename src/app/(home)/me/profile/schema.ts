import toast from 'react-hot-toast'
import z from 'zod'

export type ProfileFormData = z.infer<typeof profileSchema>
export type FullNameFormData = z.infer<typeof fullNameSchema>
export type EmailFormData = z.infer<typeof emailSchema>
export type SocialMediaFormData = z.infer<typeof socialMediaSchema>
export const fullNameSchema = z.object({
  first_name: z
    .string()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters'),
  last_name: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
})

export const emailSchema = z.object({
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
})

export const socialMediaSchema = z.object({
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

export const profileSchema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  youtube: z.string(),
  linkedin: z.string(),
  instagram: z.string(),
  facebook: z.string(),
  avatar: z.any().optional(),
})

export const validateFile = (file: File): boolean => {
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImageType } from './share.type'

type MetaData = {
  title: string
  keywords: string[]
  description: string
}

type Data = {
  created_at: string
  updated_at: string
  deleted_at: string | null
  meta_data: MetaData
  id: number
  type: string
  slug: string
  content: string
  images: string[]
  thumbnail: ImageType
  faqs: any[]
}

export type DynamicPageResponse = {
  success?: boolean
  data: Data
}

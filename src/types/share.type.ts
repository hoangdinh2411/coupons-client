export interface IResponse<T> {
  success: boolean
  data?: T
  message?: string
  status?: number
}

export interface IResponseWithTotal<T> {
  results: T
  total: number
}

export interface TimestampedEntity {
  created_at?: string
  updated_at?: string
  deleted_at?: string
}

export interface SeoData {
  seo_title?: string
  seo_description?: string
  seo_keywords?: string[]
}
export interface MetaData {
  image: string
  keywords: string[]
  description: string
  slug: string
  title: string
}

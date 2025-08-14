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

export interface BaseData {
  id: number
  created_at: string
  updated_at: string
  deleted_at: string
}

export interface MetaData {
  title?: string
  description?: string
  keywords?: string[]
}

export type ImageType = {
  file_name: string
  url: string
  public_id: string
  caption: string
}

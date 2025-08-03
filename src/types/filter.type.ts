export interface FilterPayload {
  categories?: number[]
  stores?: number[]
  status?: number[]
  topics?: number[]
  search_text: string
  page: number
  is_verified?: boolean
  rating?: number
}

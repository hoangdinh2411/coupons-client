export type ImageEntry = {
  loc: string
  title?: string
  caption?: string
}

export type UrlEntry = {
  loc: string
  lastmod?: string
  changefreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority?: number // 0.0 - 1.0
  images?: ImageEntry[]
}

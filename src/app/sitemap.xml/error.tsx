'use client'

export default function SitemapError({ error }: { error: Error }) {
  return (
    <div className="text-red-600">
      Lỗi xảy ra trong sitemap.xml: {error.message}
    </div>
  )
}

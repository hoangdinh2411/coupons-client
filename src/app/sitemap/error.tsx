'use client'

export default function SitemapError({ error }: { error: Error }) {
  return (
    <div className="text-red-600">
      can not generate sitemap sitemap.xml: {error.message}
    </div>
  )
}

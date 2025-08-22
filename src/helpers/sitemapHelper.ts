import { ImageEntry, UrlEntry } from '@/types/sitemap.type'

function cdata(text?: string) {
  if (!text) return ''

  const safe = text.replace(/]]>/g, ']]]]><![CDATA[>')
  return `<![CDATA[ ${safe} ]]>`
}

export function imageBlock(images?: ImageEntry[]) {
  if (!images || images.length === 0) return ''
  return images
    .map(({ loc, title, caption }) => {
      const parts = [
        `<image:loc>${loc}</image:loc>`,
        title ? `<image:title>${cdata(title)}</image:title>` : '',
        caption ? `<image:caption>${cdata(caption)}</image:caption>` : '',
      ]
        .filter(Boolean)
        .join('')
      return `<image:image>${parts}</image:image>`
    })
    .join('')
}

export function generateSitemapXml(urls: UrlEntry[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
${urls
  .map(({ loc, lastmod, changefreq, priority, images }) => {
    return `  <url>
    <loc>${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
    ${typeof priority === 'number' ? `<priority>${priority}</priority>` : ''}
    ${imageBlock(images)}
  </url>`
  })
  .join('\n')}
</urlset>`
}

import { METADATA } from '@/helpers/config'
import { getOtherPageBySlug } from '@/services/clientApi'
import dayjs from 'dayjs'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const res = await getOtherPageBySlug(slug)
  if (!res.success || !res.data || !res.data.content) {
    notFound()
  }

  const page = res.data
  const pageUrl = `${METADATA.APP_URL}/${page.slug}`
  const title = page.meta_data?.title
  return {
    // 1. title, meta_data, canonical
    title: title,
    description: page.meta_data?.description,
    alternates: {
      canonical: pageUrl,
    },
    // 2. Open Graph (OG)
    openGraph: {
      title: title,
      description: page.meta_data?.description,
      url: pageUrl,
      type: 'article',
      locale: 'en_US',
      images: [
        {
          url: page.thumbnail.url,
          width: 1200,
          height: 630,
          alt: page.type,
        },
      ],
      // Author name
      publishedTime: dayjs(page.updated_at).format('YYYY-MM-DD'),
      tags: page.meta_data.keywords ?? [],
    },

    // 3. Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: page.meta_data?.description,
      images: [page.thumbnail.url],
      // imageAlt: blog.title,
    },

    // 4. Copyright
    authors: [{ name: METADATA.NAME }],
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const res = await getOtherPageBySlug(slug)
  if (!res.success || !res.data || !res.data.content) {
    notFound()
  }

  return (
    <div className="mx-auto my-10 max-w-[1162px]">
      <article className="overflow-hidden">
        <div
          className="no-tailwindcss-base"
          dangerouslySetInnerHTML={{ __html: res.data.content }}
        ></div>
      </article>
    </div>
  )
}

import { getPageByType } from '@/services/clientApi'
import Head from 'next/head'

interface PageProps {
  params: { type: string }
}

export default async function Page({ params }: PageProps) {
  const res = await getPageByType(params.type)
  if (!res.success) {
    return <div>Không tìm thấy trang</div>
  }
  const { data } = res
  return (
    <div>
      <Head>
        <title>{data.meta_data.title}</title>
        <meta name="description" content={data.meta_data.description} />
        <meta name="keywords" content={data.meta_data.keywords.join(', ')} />
        <link rel="canonical" href={`https://example.com/${data.slug}`} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  )
}

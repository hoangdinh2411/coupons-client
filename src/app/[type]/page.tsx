import { getPageByType } from '@/services/clientApi'
import { DynamicPageType } from '@/types/dynamic-page.type'
import Head from 'next/head'

interface PageProps {
  params: { type: string }
}

export default async function Page({ params }: PageProps) {
  const res = await getPageByType(params.type)
  if (!res.success) {
    return <div>Không tìm thấy trang</div>
  }
  const data: DynamicPageType | undefined = res.data
  if (!data) {
    return
  }
  return (
    <div>
      <Head>
        <title>{data.meta_data.title}</title>
        <meta name="description" content={data.meta_data.description} />
        <meta name="keywords" content={data.meta_data.keywords.join(', ')} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  )
}

export async function generateStaticParams() {
  const types = ['about', 'contact', 'policy']
  return types.map((type) => ({ type }))
}

import Image from 'next/image'
import ListBlogs from '../../blogs/components/ListBlogs'
import { getLatestBlogs } from '@/services/blogApi'

const TOPIC_DATA = {
  topic_name: 'Beauty',
  topic_image: '/images/blog-beauty-124x124.webp',
  topic_description:
    'Kiss these gorgeous tips hello, and put your best face forward for less.',
  topic_slug: 'beauty',
  topic_id: 1,
  topic_created_at: '2021-01-01',
  topic_updated_at: '2021-01-01',
}

export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const [latestRes] = await Promise.all([getLatestBlogs()])
  const { slug } = await params

  let topic = null
  if (slug) {
    topic = TOPIC_DATA
  } else {
    // notFound()
    console.log('not found')
  }
  const latest = latestRes.data || []
  const rowTopic = latest.slice(0, 3)
  return (
    <div className="mt-10">
      <div className="mx-auto max-w-[1162px]">
        <div className="mb-10 flex flex-wrap items-center justify-between">
          <div className="flex-1">
            <h1 className="flex items-center gap-4 text-5xl font-bold text-[#ff5c6d] capitalize">
              <Image
                className="size-10 rounded-full border-2 border-gray-100"
                src={topic?.topic_image || '/images/no-img.webp'}
                alt={topic?.topic_name || ''}
                width={160}
                height={160}
              />
              {slug}
            </h1>
          </div>
          <p className="text-lg font-normal text-gray-500">
            {topic?.topic_description}
          </p>
        </div>

        <ListBlogs blogs={rowTopic} type="grid" />
        <div className="mb-10 flex flex-col gap-[30px] md:flex-row">
          <div className="flex-1">
            <ListBlogs blogs={latest} type="row" />
          </div>
          <div className="hidden w-full md:w-1/3 lg:block">
            {/* <Suspense>
            <TrendingBlogs />
          </Suspense> */}
          </div>
        </div>
      </div>
    </div>
  )
}

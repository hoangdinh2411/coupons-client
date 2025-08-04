import { Metadata } from 'next'
import SubmitForm from './SubmitForm'
import { APP_ROUTERS, METADATA } from '@/helpers/config'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Submit coupon',
  openGraph: {
    url: `${METADATA.APP_URL}/${APP_ROUTERS.SUBMIT_COUPON}`,
  },
}

const SubmitPage = () => {
  return (
    <div>
      <Head>
        <link
          rel="canonical"
          href={`${METADATA.APP_URL}${APP_ROUTERS.SUBMIT_COUPON}`}
        />
      </Head>
      <SubmitForm />
    </div>
  )
}

export default SubmitPage

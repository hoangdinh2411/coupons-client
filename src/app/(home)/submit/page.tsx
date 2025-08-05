import { Metadata } from 'next'
import SubmitForm from './SubmitForm'
import { APP_ROUTERS, METADATA } from '@/helpers/config'

export const metadata: Metadata = {
  title: 'Submit coupon',
  openGraph: {
    url: `${METADATA.APP_URL}/${APP_ROUTERS.SUBMIT_COUPON}`,
  },
  alternates: {
    canonical: APP_ROUTERS.SUBMIT_COUPON,
  },
}

const SubmitPage = () => {
  return (
    <div>
      <SubmitForm />
    </div>
  )
}

export default SubmitPage

import Footer from '@/components/footer'
import Header from '@/components/header'
import PromoSlider from './components/PromoSlider'

const BANNER_LIST = [
  {
    banner_id: '1',
    banner_title: 'Your Bonus is Here',
    banner_image: ['/images/banner_1.0.webp', '/images/banner_1.1.webp'],
    banner_link: '/',
    banner_description: 'Sign up for an account to get your first $5 bonus*',
  },
  {
    banner_id: '2',
    banner_title: 'Extra 40% Off at Checkout + Free Shipping',
    banner_image: ['/images/banner_2.0.webp', '/images/banner_2.1.webp'],
    banner_link: '/',
    banner_description: 'at Gap',
  },
]
export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <section>
          <PromoSlider bannerList={BANNER_LIST} />
        </section>
      </main>
      <Footer />
    </>
  )
}

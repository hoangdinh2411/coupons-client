export const APP_ROUTERS = {
  INDEX: '/',
  //TODO: AUTH
  SIGN_IN: '/auth/sign-in',
  SIGN_UP: '/auth/sign-up',
  VERIFY: '/auth/verify',
  FORGOT_PASSWORD: '/auth/forgot-password',
  CHANGE_PASSWORD: '/change-password',
  SIGN_OUT: '/auth/sign-out',

  ALL_STORES: '/brands',
  ALL_CATEGORIES: '/categories',
  ALL_TOPICS: '/topics',
  BLOGS: '/blogs',
  PROFILE: '/me',
  MY_COUPONS: '/me/coupons',
  HOT_DEALS: '/hot-deals',
  SUBMIT_COUPON: '/submit',
  TERMS: '/terms',
  POLICY: '/policy',
}

const DOMAIN = process.env.NEXT_PUBLIC_APP_DOMAIN || 'https://globy.ai'

export const METADATA = {
  NAME: 'TrustCoupon.Com',
  TITLE: 'Experience your most trusted coupons!',
  DESCRIPTION:
    'We care about saving you money on your purchases. Use and share your most trusted coupons!',
  APP_URL: DOMAIN,
  OG: {
    DESCRIPTION:
      'We care about saving you money on your purchases. Use and share your most trusted coupons!',
    URL: DOMAIN,
    TITLE: 'TrustCoupon.Com - Experience your most trusted coupons!',
  },

  CREATOR: 'trustcoupon.com',
  PUBLISHER: 'trustcoupon.com',
  KEYWORDS: ['Coupons', 'My Coupons', 'Trust Coupon'],
  SHORT_NAME: 'trustcoupon.com',
  CATEGORIES: ['Coupons', 'Trust Coupon'],

  INSTAGRAM_URL: 'https://www.instagram.com/trustcoupon',
  LINKEDIN_URL: 'https://www.linkedin.com/company/trustcoupon',
  YOUTUBE_URL: 'https://www.youtube.com/@trustcoupon',
  CONTACT_EMAIL: 'support@trustcoupon.com',
}

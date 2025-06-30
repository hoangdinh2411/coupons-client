export const APP_ROUTERS = {
  INDEX: '/',
  //TODO: AUTH
  SIGN_IN: '/auth/sign-in',
  SIGN_UP: '/auth/sign-up',
  VERIFY: '/auth/verify',
  FORGOT_PASSWORD: '/auth/forgot-password',
  SIGN_OUT: '/auth/sign-out',

  STORES: '/stores',
  ALL_CATEGORIES: '/categories',
  ALL_TOPICS: '/topics',
  BLOGS: '/blogs',
  PROFILE: '/me',
  MY_COUPONS: '/me/coupons',
  HOT_DEALS: '/hot-deals',
}

const DOMAIN = process.env.NEXT_PUBLIC_APP_DOMAIN || 'https://globy.ai'

export const METADATA = {
  NAME: 'Globy.ai',
  TITLE: 'Your Voice. Your Impact. Amplified.',
  DESCRIPTION:
    'Globy.ai is a digital presence platform that helps you establish a credible online presence.',
  APP_URL: DOMAIN,
  OG: {
    DESCRIPTION:
      'Globy.ai is a digital presence platform that helps you establish a credible online presence.',
    URL: DOMAIN,
    TITLE: 'Globy.ai - Your Voice. Your Impact. Amplified.',
  },

  CREATOR: 'Globy.ai',
  PUBLISHER: 'Globy.ai',
  KEYWORDS: ['Web development', 'Build website', 'AI website'],
  SHORT_NAME: 'Globy.ai',
  CATEGORIES: ['Software', 'Web Development'],

  INSTAGRAM_URL: 'https://www.instagram.com/globy.ai',
  LINKEDIN_URL: 'https://www.linkedin.com/company/globy-ai',
  YOUTUBE_URL: 'https://www.youtube.com/@GlobyAI',
  CONTACT_EMAIL: 'hello@globy.ai',
}

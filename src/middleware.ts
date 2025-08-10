import { NextResponse, NextRequest } from 'next/server'
import { APP_ROUTERS } from './helpers/config'

const AUTH_URLS = [
  APP_ROUTERS.SIGN_UP,
  APP_ROUTERS.SIGN_IN,
  APP_ROUTERS.FORGOT_PASSWORD,
  APP_ROUTERS.VERIFY,
  APP_ROUTERS.CHANGE_PASSWORD,
]
const PROTECTED_URLS = [
  APP_ROUTERS.PROFILE,
  APP_ROUTERS.MY_COUPONS,
  APP_ROUTERS.SUBMIT_COUPON,
]
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const token = request.cookies.get('token')?.value || ''
  if (AUTH_URLS.includes(pathname) && token) {
    return NextResponse.redirect(new URL(APP_ROUTERS.INDEX, request.nextUrl))
  }

  if (PROTECTED_URLS.includes(pathname) && !token) {
    return NextResponse.redirect(new URL(APP_ROUTERS.SIGN_IN, request.nextUrl))
  }
  if (APP_ROUTERS.SIGN_OUT === pathname && !token) {
    console.log('toekn')
    return NextResponse.redirect(new URL(pathname, request.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}

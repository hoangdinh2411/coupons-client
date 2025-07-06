import { NextResponse, NextRequest } from 'next/server'
import { APP_ROUTERS } from './helpers/config'

const AUTH_URLS = [
  APP_ROUTERS.SIGN_UP,
  APP_ROUTERS.SIGN_IN,
  APP_ROUTERS.FORGOT_PASSWORD,
  APP_ROUTERS.VERIFY,
]
const PROTECTED_URLS = [
  APP_ROUTERS.SIGN_OUT,
  APP_ROUTERS.PROFILE,
  APP_ROUTERS.MY_COUPONS,
  APP_ROUTERS.CHANGE_PASSWORD,
]
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const token = request.cookies.get('session')?.value || ''
  if (AUTH_URLS.includes(pathname) && token) {
    return NextResponse.redirect(new URL(APP_ROUTERS.INDEX, request.nextUrl))
  }

  if (PROTECTED_URLS.includes(pathname) && !token) {
    return NextResponse.redirect(new URL(APP_ROUTERS.INDEX, request.nextUrl))
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}

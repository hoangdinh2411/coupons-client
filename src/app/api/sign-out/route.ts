import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_APP_DOMAIN!,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
export async function POST(request: NextRequest) {
  const cookieStore = await cookies()
  const response = NextResponse.json({ success: true })
  request.cookies.delete('token')
  response.cookies.delete('token')
  cookieStore.delete('token')
  return response
}

import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(request: NextRequest) {
  const cookieStore = await cookies()

  const response = NextResponse.json({ success: true })
  request.cookies.delete('token')
  response.cookies.delete('token')
  cookieStore.delete('token')
  return response
}

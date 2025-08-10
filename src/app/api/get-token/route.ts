import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const token = req.cookies.get('token')

  return NextResponse.json({ success: true, token: token ? token.value : '' })
}

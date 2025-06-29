import { NextResponse } from 'next/server'

export async function DELETE() {
  console.log('sign-out')
  const response = NextResponse.json({ success: true })
  response.cookies.delete('session')
  return response
}

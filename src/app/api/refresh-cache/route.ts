import { revalidatePath, revalidateTag } from 'next/cache'
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_ADMIN_DOMAIN!,
      'Access-Control-Allow-Methods': 'POST,  OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

export async function POST(req: Request) {
  const { tags, paths } = await req.json()
  if (!tags && !paths) {
    return new Response('Missing body', {
      status: 400,
      headers: {
        'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_ADMIN_DOMAIN!,
      },
    })
  }
  for (const tag of tags) {
    revalidateTag(tag)
  }
  for (const path of paths) {
    revalidatePath(path)
  }
  return new Response('Revalidated', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_ADMIN_DOMAIN!,
    },
  })
}

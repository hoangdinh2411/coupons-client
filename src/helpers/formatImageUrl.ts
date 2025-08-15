export function formatImageUrl(public_id: string) {
  if (!public_id) return '/images/no-img.webp'

  const domain = 'https://img.trustcoupon.com'
  return `${domain}/${public_id}`
}

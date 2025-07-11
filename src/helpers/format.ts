import { UserData } from '@/types/auth.type'

export function formatDiscountPct(value: number): number | string {
  return value % 1 === 0 ? Number(value).toFixed(0) : value.toString()
}

export const formatDisplayName = (user: UserData) => {
  if (!user) return ''
  return user.first_name && user.last_name
    ? ` ${user.first_name} ${user.last_name}`
    : user.email
}

export function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('/').map(Number)
  const date = new Date(year, month - 1, day)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

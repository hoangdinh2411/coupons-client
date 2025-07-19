import { UserData } from '@/types/auth.type'
import dayjs from 'dayjs'

export function formatDiscountPct(value: number): number | string {
  return value % 1 === 0 ? Number(value).toFixed(0) : value.toString()
}

export const formatDisplayName = (user: UserData) => {
  if (!user) return 'User'
  return user.first_name && user.last_name
    ? ` ${user.first_name} ${user.last_name}`
    : user.email
}

export function formatDate(dateString: string): string {
  return dayjs(dateString).format('MMMM D, YYYY')
}

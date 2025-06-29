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

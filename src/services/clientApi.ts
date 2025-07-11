import customFetch from './customFetch'
import { MenuData } from '@/types/client.type'

export type MenuResponse = MenuData
export const getMenu = async () => {
  return await customFetch<MenuResponse>(`/client/menu`, {
    cache: 'no-cache',
  })
}

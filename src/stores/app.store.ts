'use client'
import { UserData } from '@/types/auth.type'
import { MenuData } from '@/types/client.type'
import { create, useStore } from 'zustand'

export type AppStoreType = {
  menu: MenuData
  setMenu: (data: MenuData) => void
  user: UserData | null
  setUser: (data: UserData | null) => void
  isLoading: boolean
  setIsLoading: (status: boolean) => void
}

export const AppStore = create<AppStoreType>((set) => ({
  menu: {
    top_categories: [],
    categories: [],
    popular: [],
  },
  setMenu: (data: MenuData) => set({ menu: data }),
  user: null,
  setUser: (data: UserData | null) => set({ user: data }),
  isLoading: false,
  setIsLoading: (status: boolean) => set({ isLoading: status }),
}))

const UseAppStore = <T>(selector: (state: AppStoreType) => T) =>
  useStore(AppStore, selector)
export default UseAppStore

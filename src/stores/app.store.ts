'use client'
import { signOutApi } from '@/services/authApi'
import { UserData } from '@/types/auth.type'
import { MenuData } from '@/types/client.type'
import { create } from 'zustand'

export type AppStoreType = {
  menu: MenuData
  setMenu: (data: MenuData) => void
  user: UserData | null
  setUser: (data: UserData | null) => void
  isLoading: boolean
  setIsLoading: (status: boolean) => void
  signOut: () => Promise<void>
}

const UseAppStore = create<AppStoreType>((set) => ({
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
  signOut: async () => {
    await signOutApi()
    set({ user: null })
  },
}))

export default UseAppStore

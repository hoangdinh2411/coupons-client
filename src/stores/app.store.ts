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
  updateUser: (data: Partial<UserData>) => void
  signOut: () => Promise<void>
}

const UseAppStore = create<AppStoreType>((set, get) => ({
  menu: {
    top_categories: [],
    top_topic: [],
    popular: [],
  },
  setMenu: (data: MenuData) => set({ menu: data }),
  user: null,
  setUser: (data: UserData | null) => set({ user: data }),
  updateUser: (data: Partial<UserData>) => {
    const currentUser = get().user
    if (currentUser) {
      set({
        user: {
          ...currentUser,
          ...data,
        },
      })
    }
  },
  isLoading: false,
  setIsLoading: (status: boolean) => set({ isLoading: status }),
  signOut: async () => {
    await signOutApi()
    set({ user: null })
  },
}))

export default UseAppStore

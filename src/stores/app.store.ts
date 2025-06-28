'use client'
import { UserData } from '@/types/auth.type'
import { CategoryData } from '@/types/category.type'
import { StoreData } from '@/types/store.type'
import { create, useStore } from 'zustand'

export type AppStoreType = {
  categories: CategoryData[]
  setCategories: (data: CategoryData[]) => void
  stores: StoreData[]
  setStores: (data: StoreData[]) => void
  user: UserData | null
  setUser: (data: UserData | null) => void
  isLoading: boolean
  setIsLoading: (status: boolean) => void
}

export const AppStore = create<AppStoreType>((set) => ({
  categories: [],
  setCategories: (data: CategoryData[]) => set({ categories: data }),
  stores: [],
  setStores: (data: StoreData[]) => set({ stores: data }),
  user: null,
  setUser: (data: UserData | null) => set({ user: data }),
  isLoading: false,
  setIsLoading: (status: boolean) => set({ isLoading: status }),
}))

const UseAppStore = <T>(selector: (state: AppStoreType) => T) =>
  useStore(AppStore, selector)
export default UseAppStore

import { create } from "zustand";

type SidebarState = {
  show: boolean;
  setShow: () => void;
  sidebarClose: (show: boolean) => void;
};

export const useSidebar = create<SidebarState>((set) => ({
  show: true,
  setShow: () => set((state) => ({ show: !state.show })),
  sidebarClose: (show: boolean) => set({ show }),
}));

import { create } from "zustand";

interface MobileMenuStore {
	isOpen: boolean;
	toggleMenu: () => void;
}

export const useMobileMenuStore = create<MobileMenuStore>((set, get) => ({
	isOpen: false,
	toggleMenu: () => set({ isOpen: !get().isOpen }),
}));

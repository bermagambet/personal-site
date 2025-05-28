import { create } from "zustand";
import { Storage } from "./types";

const useGlobalStore = create<Storage>((set: any) => ({
  currentTab: "#Home",
  theme: "dark",
  setTheme: () =>
    set((state: Storage) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
  setCurrentTab: (currentTab: string) => set({ currentTab }),
}));

export default useGlobalStore;

import { create } from "zustand";
import { Storage } from "./types";
import { swipeOrder } from "@/dictionaries";

const useGlobalStore = create<Storage>((set: any) => ({
  currentTab: "#home",
  theme: "dark",
  setTheme: () =>
    set((state: Storage) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
  setCurrentTab: (currentTab: string) => set({ currentTab }),
  swipeIndex: 0,
  setSwipeIndex: (direction) =>
    set(({ swipeIndex }: Storage) => {
      let newSwipeIndex =
        direction === "left" ? (swipeIndex += 1) : (swipeIndex -= 1);
      if (newSwipeIndex > 3) newSwipeIndex = 0;
      if (newSwipeIndex < 0) newSwipeIndex = 3;
      const newCurrentTab = swipeOrder[newSwipeIndex];
      return { currentTab: newCurrentTab, swipeIndex: newSwipeIndex };
    }),
}));

export default useGlobalStore;

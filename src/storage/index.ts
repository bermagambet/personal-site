import { create } from 'zustand';

const useTitlePageStore = create((set: any) => {
  const state: {
    currentTab: '#Home' | '#Experience';
    setCurrentTab: (_currentTab: string) => any;
  } = {
    currentTab: '#Home',
    setCurrentTab: (currentTab: string) => set({ currentTab }),
  };
  return state;
});

export default useTitlePageStore;

export type Storage = {
  currentTab: "#home" | "#experience" | "#education" | "#about";
  setCurrentTab: (_currentTab: string) => any;
  theme: "dark" | "light";
  setTheme: () => any;
  swipeIndex: number;
  setSwipeIndex: (_direction: "left" | "right") => any;
};

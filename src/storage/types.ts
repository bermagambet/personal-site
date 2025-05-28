export type Storage = {
  currentTab: "#Home" | "#Experience";
  setCurrentTab: (_currentTab: string) => any;
  theme: "dark" | "light";
  setTheme: () => any;
};

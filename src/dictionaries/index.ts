import { About, Education, Experience, Home } from "@/pages";
import type { FunctionComponent } from "react";

const navItems = [
  {
    href: "#home",
    text: "Home",
  },
  {
    href: "#experience",
    text: "Experience",
  },
  {
    href: "#education",
    text: "Education",
  },
  {
    href: "#about",
    text: "About",
  },
];

const currentPage: {
  "#home": FunctionComponent<any>;
  "#experience": FunctionComponent<any>;
  "#education": FunctionComponent<any>;
  "#about": FunctionComponent<any>;
} = {
  "#home": Home,
  "#experience": Experience,
  "#education": Education,
  "#about": About,
};

const swipeOrder = ["#home", "#experience", "#education", "#about"];

export { navItems, currentPage, swipeOrder };

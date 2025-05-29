import useGlobalStore from "@/storage";
import React, { Fragment, useEffect } from "react";
import type { NavBarComponent } from "./types";

const getAnchor = () => {
  var currentUrl = document.URL,
    urlParts = currentUrl.split("#");

  return urlParts.length > 1 ? urlParts[1] : null;
};

const NavBar: NavBarComponent = ({ items }) => {
  const currentTab = useGlobalStore((state) => state.currentTab);
  const setCurrentTab = useGlobalStore((state) => state.setCurrentTab);

  useEffect(() => {
    const anchor = getAnchor();
    if (anchor) {
      setCurrentTab(`#${anchor.toLocaleLowerCase()}`);
    }
  }, []);

  return (
    <nav className="flex gap-x-2 text-base md:text-lg border-1 bg-white dark:bg-black border-gray-300 rounded-xl p-2.5 font-mono animate-fade-in">
      {items.map(({ href, text }, i) => {
        const isCurrent = currentTab === href ? "text-sky-500" : "";
        const isNotLast = i !== items.length - 1;
        return (
          <Fragment key={href}>
            <a href={href} onClick={() => setCurrentTab(href)}>
              <p
                className={`${isCurrent} text-center font-light cursor-pointer hover:text-sky-500`}
              >
                {text}
              </p>
            </a>
            {isNotLast && <span>-</span>}
          </Fragment>
        );
      })}
    </nav>
  );
};

export default NavBar;

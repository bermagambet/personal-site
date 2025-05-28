import useTitlePageStore from "@/storage";
import React, { Fragment, useEffect } from "react";
import type { NavBarComponent } from "./types";

const getAnchor = () => {
  var currentUrl = document.URL,
    urlParts = currentUrl.split("#");

  return urlParts.length > 1 ? urlParts[1] : null;
};

const NavBar: NavBarComponent = ({ items }) => {
  const { currentTab, setCurrentTab } = useTitlePageStore();

  useEffect(() => {
    const anchor = getAnchor();
    if (anchor) {
      setCurrentTab(`#${anchor}`);
    }
  }, []);

  return (
    <nav className="flex gap-x-2 text-base md:text-lg border-1 bg-white border-gray-300 rounded-xl p-2.5 font-mono animate-fade-in">
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
            {/* {isNotLast && (
              <div className="inline-block h-full  min-h-[1em] w-0.25 self-stretch bg-gray-300" />
            )} */}
            {isNotLast && <span>-</span>}
          </Fragment>
        );
      })}
    </nav>
  );
};

export default NavBar;

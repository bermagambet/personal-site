import { Helmet } from "@modern-js/runtime/head";

import "./index.css";
import { NavBar } from "@/components";
import { currentPage, navItems } from "@/dictionaries";
import useGlobalStore from "@/storage";
import { useEffect, useRef } from "react";
import useSwipe from "@/hooks/useSwipe";

const Index = () => {
  const currentTab = useGlobalStore((state) => state.currentTab);
  const setSwipeIndex = useGlobalStore((state) => state.setSwipeIndex);
  const theme = useGlobalStore((state) => state.theme);
  const Page = currentPage[currentTab];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, [currentTab]);

  const onSwipedLeft = () => setSwipeIndex("left");
  const onSwipedRight = () => setSwipeIndex("right");

  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe({
    onSwipedLeft,
    onSwipedRight,
  });

  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <main className={theme}>
        <div
          ref={containerRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="h-[100vh] flex flex-col justify-center items-center dark:bg-black dark:text-white"
        >
          <div className="h-fit my-[15px]">
            <NavBar items={navItems} />
          </div>
          <div className="min-h-[80vh] max-w-[90vw] overflow-y-auto px-[10px] py-[10px]">
            <Page />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

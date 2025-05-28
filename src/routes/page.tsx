import { Helmet } from "@modern-js/runtime/head";

import "./index.css";
import { NavBar } from "@/components";
import { currentPage, navItems } from "@/dictionaries";
import useGlobalStore from "@/storage";
import { useMemo } from "react";

const Index = () => {
  const currentTab = useGlobalStore((state) => state.currentTab);
  const theme = useGlobalStore((state) => state.theme);
  const Page = currentPage[currentTab];

  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <main className={theme}>
        <div className="h-[100vh] flex flex-col justify-center items-center dark:bg-black dark:text-white">
          <div className="h-[7vh] mt-15">
            <NavBar items={navItems} />
          </div>
          <div className="h-[80vh] overflow-auto px-10 pb-10">
            <Page />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

import { Helmet } from "@modern-js/runtime/head";

import "./index.css";
import { NavBar } from "@/components";
import { currentPage, navItems } from "@/dictionaries";
import useTitlePageStore from "@/storage";

const Index = () => {
  const { currentTab } = useTitlePageStore();

  const Page = currentPage[currentTab];

  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <main>
        <div className="h-screen flex flex-col-reverse md:flex-col gap-y-10 justify-center items-center">
          <div className="h-[10%] md:h-[15%] md:mt-15">
            <NavBar items={navItems} />
          </div>
          <div className="h-[85%] md:h-[80%] overflow-auto px-10 pb-10">
            <Page />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

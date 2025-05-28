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
        <div className="h-[100vh] flex flex-col justify-center items-center">
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

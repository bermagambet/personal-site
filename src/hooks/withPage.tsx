import React, { type FunctionComponent } from "react";

const withPage = (Component: FunctionComponent, classList: string) => () =>
  (
    <div
      className={`animate-fade-in flex flex-col gap-y-8 justify-center mt-[2vh] md:mt-[5vh] mb-[15px] ${classList}`}
    >
      <Component />
    </div>
  );

export default withPage;

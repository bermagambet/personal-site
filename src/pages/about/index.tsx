import { withPage } from "@/hooks";
import React from "react";

const About = () => (
  <>
    <p className="text-left md:w-[50%]">
      Experienced Frontend Team Lead with a PhD in progress and over 4 years in
      React, TypeScript, and modern web technologies. Proven track record at
      Halyk Bank leading teams, optimizing performance, and delivering scalable
      banking solutions that boosted revenue and reduced system downtime.
    </p>
    <p className="text-left md:w-[50%]">
      Strong background in PWA development, micro-frontend architecture, and
      caching strategies. Adept at establishing coding standards, improving
      developer workflows, and mentoring teams. Skilled in tools like Next.js,
      Redux, Zustand, Tailwind, and testing frameworks.
    </p>
    <p className="text-left md:w-[50%]">
      Passionate about building performant, maintainable systems and driving
      engineering excellence across large-scale applications.
    </p>
  </>
);

export default withPage(About, "items-center text-xl md:text-2xl lg:text-3xl");

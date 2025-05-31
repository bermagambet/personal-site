import useGlobalStore from "@/storage";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React, { useMemo } from "react";
import type { AnchorComponent } from "./types";

const Anchor: AnchorComponent = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-base md:text-xl text-sky-500 hover:text-sky-300"
  >
    {children}
  </a>
);

export default Anchor;

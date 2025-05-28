import React from "react";
import type { ButtonComponent } from "./types";

const Button: ButtonComponent = ({ text, link, simple, Icon }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`md:text-xl col-span-1 w-full text-base flex gap-x-1 justify-center items-center font-light animate-fade-in  border-gray-300 p-2 px-3 rounded-3xl cursor-pointer hover:border-sky-500 hover:text-sky-500 ${
      simple ? "text-sky-500 md:text-black" : "border-2"
    }`}
  >
    <span>{text}</span> {Icon && <Icon className="size-6" />}
  </a>
);

export default Button;

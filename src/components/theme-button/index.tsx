import useGlobalStore from "@/storage";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React, { useMemo } from "react";

const ThemeButton = () => {
  const theme = useGlobalStore((state) => state.theme);
  const setTheme = useGlobalStore((state) => state.setTheme);

  const ButtonIcon = useMemo(
    () => (theme === "light" ? MoonIcon : SunIcon),
    [theme]
  );

  return (
    <div
      onClick={setTheme}
      className="w-fit md:text-xl col-span-1 text-base flex gap-x-1 justify-center items-center font-light animate-fade-in border-2 border-gray-300 p-1 px-2 rounded-3xl cursor-pointer hover:border-sky-500 hover:text-sky-500"
    >
      <ButtonIcon className="size-5" />
    </div>
  );
};

export default ThemeButton;

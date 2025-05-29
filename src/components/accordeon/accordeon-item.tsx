import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useRef, useState } from "react";
import type { AccordeonItemComponent } from "./types";

const AccordeonItem: AccordeonItemComponent = ({
  label,
  children,
  containerRef,
  collapsible = true,
}) => {
  const [open, setOpen] = useState(false);

  const refChevron = useRef<SVGSVGElement>(null);
  const refItem = useRef<HTMLDivElement>(null);
  const labelItem = useRef<HTMLDivElement>(null);

  const switchAccordeon = () => {
    if (!collapsible) return;
    if (open) {
      refChevron.current?.classList.remove("animate-open-chevron");
      refChevron.current?.classList.add("animate-close-chevron");
      refItem.current?.classList.remove("animate-fade-in");
      refItem.current?.classList.add("animate-fade-out");
      setTimeout(() => {
        setOpen(false);
      }, 200);
    } else {
      refChevron.current?.classList.remove("animate-close-chevron");
      refChevron.current?.classList.add("animate-open-chevron");
      refItem.current?.classList.remove("animate-fade-out");
      refItem.current?.classList.add("animate-fade-in");
      setOpen(true);
      setTimeout(() => {
        labelItem?.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }, 100);
    }
  };

  const handleOnClick = () => {
    switchAccordeon();
  };

  const handleOnKeyDown = ({ key }: { key: string }) => {
    if (key === "Tab") {
      switchAccordeon();
    }
  };

  return (
    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-y-0">
      <div
        className={`w-full md:w-auto col-span-1 order-1 md:order-0 place-self-start grid grid-cols-4 md:flex md:gap-x-4 justify-center items-center ${
          collapsible ? "cursor-pointer" : "cursor-default"
        }`}
        onClick={handleOnClick}
        onKeyDown={handleOnKeyDown}
      >
        <div className="col-span-1 order-1 place-self-end self-center md:place-self-auto-center md:order-0">
          {collapsible ? (
            <ChevronDownIcon
              ref={refChevron}
              className="size-6 md:size-5 rotate-270"
            />
          ) : (
            <AcademicCapIcon className="size-6 md:size-5" />
          )}
        </div>
        <span className="col-span-3 order-0 place-self-start">{label[0]}</span>
      </div>
      <div
        ref={labelItem}
        className="col-span-1 order-0 md:order-1 place-self-start md:place-self-end text-lg md:text-2xl font-semibold md:font-normal"
      >
        {label[1]}
      </div>
      <div
        ref={refItem}
        style={{
          maxWidth: `${containerRef?.current?.clientWidth}px`,
        }}
        className="col-span-1 order-2 md:col-span-2 place-self-start font-light text-xl/tight md:text-xl/relaxed"
      >
        {open && <div className="py-2 md:py-0">{children}</div>}
      </div>
    </div>
  );
};

export default AccordeonItem;

import React, { Fragment, useMemo, useRef } from "react";
import AccordeonItem from "./accordeon-item";
import type { AccordeonComponent } from "./types";

const Accordeon: AccordeonComponent = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const newItems = useMemo(
    () => items.map((el, i) => ({ ...el, key: i })),
    [items]
  );

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 md:gap-x-24 gap-y-2 md:place-content-between text-2xl md:text-2xl/relaxed font-normal"
    >
      {newItems.map(({ title, elements, key }) => {
        const newElements = elements.map((el, i) => ({ ...el, key: i + key }));
        return (
          <Fragment key={key}>
            <h1
              className={
                "text-3xl/relaxed md:text-4xl/relaxed lg:text-5xl/relaxed col-span-1 md:col-span-2 font-bold md:font-normal"
              }
            >
              {title}
            </h1>
            {newElements.map(({ key, ...rest }) => (
              <AccordeonItem key={key} containerRef={containerRef} {...rest} />
            ))}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Accordeon;

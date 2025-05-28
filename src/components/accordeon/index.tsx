import React, { useRef } from 'react';
import AccordeonItem from './accordeon-item';
import type { AccordeonComponent } from './types';

const Accordeon: AccordeonComponent = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 md:gap-x-24 gap-y-2 md:place-content-between text-2xl md:text-2xl/relaxed font-normal"
    >
      {items.map(({ title, elements }) => {
        return (
          <>
            <h1
              className={
                'text-3xl/relaxed md:text-4xl/relaxed lg:text-5xl/relaxed col-span-1 md:col-span-2 font-bold md:font-normal'
              }
            >
              {title}
            </h1>
            {elements.map(el => (
              <AccordeonItem containerRef={containerRef} {...el} />
            ))}
          </>
        );
      })}
    </div>
  );
};

export default Accordeon;

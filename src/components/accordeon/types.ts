import type { FunctionComponent, RefObject } from 'react';

type AccordeonItem = {
  label: (string | React.ReactNode)[];
  children?: React.ReactNode;
  collapsible?: boolean;
};

type AccordeonProps = {
  items: Array<{
    title: string;
    elements: Array<AccordeonItem>;
  }>;
};

type AccordeonItemProps = AccordeonItem & {
  containerRef: RefObject<HTMLDivElement>;
};

export type AccordeonItemComponent = FunctionComponent<AccordeonItemProps>;
export type AccordeonComponent = FunctionComponent<AccordeonProps>;

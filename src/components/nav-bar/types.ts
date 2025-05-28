import type { FunctionComponent } from 'react';

type NavBarProps = {
  items: Array<{
    href: string;
    text: string;
  }>;
};

export type NavBarComponent = FunctionComponent<NavBarProps>;

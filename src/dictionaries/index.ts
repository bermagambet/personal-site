import { About, Education, Experience, Home } from '@/pages';
import type { FunctionComponent } from 'react';

const navItems = [
  {
    href: '#Home',
    text: 'Home',
  },
  {
    href: '#Experience',
    text: 'Experience',
  },
  {
    href: '#Education',
    text: 'Education',
  },
  {
    href: '#About',
    text: 'About',
  },
];

const currentPage: {
  '#Home': FunctionComponent<any>;
  '#Experience': FunctionComponent<any>;
  '#Education': FunctionComponent<any>;
  '#About': FunctionComponent<any>;
} = {
  '#Home': Home,
  '#Experience': Experience,
  '#Education': Education,
  '#About': About,
};

export { navItems, currentPage };

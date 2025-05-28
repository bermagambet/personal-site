import type { FunctionComponent, ReactNode } from "react";

type ButtonProps = {
  text?: string | ReactNode;
  link?: string;
  simple?: boolean;
  Icon?: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
};

export type ButtonComponent = FunctionComponent<ButtonProps>;

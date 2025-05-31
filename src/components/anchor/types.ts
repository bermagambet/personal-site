import type { FunctionComponent, ReactNode } from "react";

type AnchorProps = {
  children: ReactNode;
  href?: string;
};

export type AnchorComponent = FunctionComponent<AnchorProps>;

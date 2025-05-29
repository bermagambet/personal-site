import { TouchEvent } from "react";

type SwipeInput = {
  onSwipedLeft: () => void;
  onSwipedRight: () => void;
};

type SwipeOutput = {
  onTouchStart: (e: TouchEvent) => void;
  onTouchMove: (e: TouchEvent) => void;
  onTouchEnd: () => void;
};

export type SwipeHook = (_input: SwipeInput) => SwipeOutput;

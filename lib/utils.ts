import { createTwc, cx } from "react-twc";
import { type ClassNameValue, twMerge } from "tailwind-merge";

export function cn(...inputs: ClassNameValue[]) {
  return twMerge(cx(inputs));
}

export const twx = createTwc({
  compose: twMerge,
  shouldForwardProp: (prop) => prop[0] !== "_",
});

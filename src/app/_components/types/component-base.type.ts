import { Size } from "./size";
import { Variant } from "./variant.type";

export type ComponentBase = {
  isDisabled?: boolean;
  className?: string;
  variant?: Variant;
  size?: Size;
};

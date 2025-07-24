import { FC } from "react";
import { LoadingProps } from "./loading.types";
import classNames from "classnames";
import { Size } from "../types/size";

const sizeClasses: Record<Size, string> = {
  tiny: "loading-xs",
  small: "loading-sm",
  normal: "loading-md",
  large: "loading-lg",
};
export const Loading: FC<LoadingProps> = ({
  type = "spinner",
  variant,
  size = "normal",
  className,
}) => {
  const classes = classNames(
    "loading",
    className,
    { [`loading-${type}`]: type },
    { [`${sizeClasses[size]}`]: size },
    { [`loading-${variant}`]: variant }
  );
  return <span className={classes}></span>;
};

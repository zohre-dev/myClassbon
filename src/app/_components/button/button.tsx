import { FC } from "react";
import { ButtonProps, Buttonshape } from "./button.types";
import classNames from "classnames";
import { Size } from "../types/size";

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-lg",
};
const shapeClasses: Record<Buttonshape, string> = {
  wide: "btn-wide",
  full: "btn-block",
  square: "btn-square",
  default: "",
};
export const Button: FC<ButtonProps> = ({
  variant,
  size = "normal",
  isDisabled = false,
  isOutline = false,
  shape = "default",
  isloading = false,
  loadingType = "spinner",
  loadingText = "در حال ارسال درخواست",
  type = "button",
  isLink = false,
  animatedIcon,
  children,
  className,
  ...rest
}) => {
  const classes = classNames(
    "btn",
    className,
    { "is-outline": isOutline },
    { "btn-link": isLink },
    { "animated-icon": animatedIcon },
    { "pointer-event-none opacity-80": isloading },
    { [`btn-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size },
    { [`${shapeClasses[shape]}`]: shape }
  );
  return (
    <button type={type} disabled={isDisabled} {...rest} className={classes}>
      {isloading ? loadingText : children}
    </button>
  );
};

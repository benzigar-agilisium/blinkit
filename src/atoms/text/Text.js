import classNames from "classnames";
import React from "react";

export default function Text({
  size = "small",
  dim = false,
  lightBold = false,
  bold = false,
  className = "",
  center = false,
  style = {},
  children,
  ...rest
}) {
  return (
    <p
      className={classNames(
        { "text-sm": size === "small" },
        { "text-center": center },
        { "text-xs": size === "tiny" },
        { "font-bold": bold },
        className
      )}
      style={{
        fontWeight: lightBold ? 600 : undefined,
        opacity: dim ? 0.5 : 1,
        ...style,
      }}
      {...rest}
    >
      {children}
    </p>
  );
}

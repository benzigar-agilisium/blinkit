import classNames from "classnames";
import React from "react";

export default function HorizontalWrapper({
  wrap = false,
  align = "",
  className = "",
  children,
  justify = "",
  style = {},
  ...rest
}) {
  return (
    <div
      style={{
        alignItems: align || "center",
        justifyContent: justify || "start",
        ...style,
      }}
      className={classNames(`flex`, { "flex-wrap": wrap }, className)}
      {...rest}
    >
      {children}
    </div>
  );
}

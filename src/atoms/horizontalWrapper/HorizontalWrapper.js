import classNames from "classnames";
import React from "react";

export default function HorizontalWrapper({
  wrap = false,
  align = "",
  className = "",
  children,
  justify = "",
  cutOnPhone = false,
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
      className={classNames(`flex`, { "flex-wrap": wrap }, { "flex-col lg:flex-row ": cutOnPhone }, className)}
      {...rest}
    >
      {children}
    </div>
  );
}

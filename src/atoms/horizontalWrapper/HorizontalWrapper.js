import React from "react";

export default function HorizontalWrapper({ align = "", className = "", children, justify = "", style = {}, ...rest }) {
  return (
    <div
      style={{
        alignItems: align || "start",
        justifyContent: justify || "start",
        ...style,
      }}
      className={`flex ` + className}
      {...rest}
    >
      {children}
    </div>
  );
}

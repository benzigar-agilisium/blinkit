import React from "react";

export default function SubText({ children, className = "", style = {}, ...rest }) {
  return (
    <p
      className={`text-xs ` + className}
      style={{
        ...style,
      }}
      {...rest}
    >
      {children}
    </p>
  );
}

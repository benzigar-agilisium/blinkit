import React from "react";

export default function Text({ className = "", children, ...rest }) {
  return (
    <p className={`text-sm ` + className} {...rest}>
      {children}
    </p>
  );
}

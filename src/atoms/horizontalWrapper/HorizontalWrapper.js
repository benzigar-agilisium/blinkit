import React from "react";

export default function HorizontalWrapper({ className = "", children, ...rest }) {
  return (
    <div className={`flex items-center ` + className} {...rest}>
      {children}
    </div>
  );
}

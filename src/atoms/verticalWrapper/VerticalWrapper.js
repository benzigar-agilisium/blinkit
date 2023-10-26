import React from "react";

export default function VerticalWrapper({ className = "", children, ...rest }) {
  return (
    <div className={`flex flex-col ` + className} {...rest}>
      {children}
    </div>
  );
}

import classNames from "classnames";
import React from "react";

export default function Container({ className = "", children, ...rest }) {
  return (
    <div className={classNames(`container mx-auto`, className)} {...rest}>
      {children}
    </div>
  );
}

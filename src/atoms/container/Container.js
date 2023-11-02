import classNames from "classnames";
import React from "react";

import styles from "./container.module.css";

export default function Container({ className = "", children, ...rest }) {
  return (
    <div className={classNames(styles.containerMain, className)} {...rest}>
      {children}
    </div>
  );
}

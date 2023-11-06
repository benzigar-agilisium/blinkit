import classNames from "classnames";
import React from "react";
import Proptypes from "prop-types";

import styles from "./container.module.css";

export default function Container({ className = "", children, ...rest }) {
  return (
    <div className={classNames(styles.containerMain, className)} {...rest}>
      {children}
    </div>
  );
}

Container.propTypes = {
  className: Proptypes.string,
  children: Proptypes.element,
};

Container.defaultProps = {
  className: "",
};

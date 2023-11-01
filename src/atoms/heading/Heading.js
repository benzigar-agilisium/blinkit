import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

const Heading = ({ className = "", size = "large", children }) => {
  return (
    <h1 className={classNames("font-bold", { "text-lg": size === "large" }, { "text-md": size === "medium" }, className)}>
      {children}
    </h1>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["large", "medium"]),
};

export default Heading;

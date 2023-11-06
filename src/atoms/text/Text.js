import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";

export default function Text({
  size = "small",
  dim = false,
  lightBold = false,
  bold = false,
  className = "",
  center = false,
  style = {},
  children,
  ...rest
}) {
  return (
    <p
      className={classNames(
        { "text-sm": size === "small" },
        { "text-center": center },
        { "text-xs": size === "tiny" },
        { "font-bold": bold },
        className
      )}
      style={{
        fontWeight: lightBold ? 600 : undefined,
        opacity: dim ? 0.5 : 1,
        ...style,
      }}
      {...rest}
    >
      {children}
    </p>
  );
}

Text.propTypes = {
  size: PropTypes.string,
  dim: PropTypes.bool,
  lightBold: PropTypes.bool,
  bold: PropTypes.bool,
  className: PropTypes.string,
  center: PropTypes.bool,
  style: PropTypes.object,
};

Text.defaultProps = {
  size: "small",
  dim: false,
  lightBold: false,
  bold: false,
  className: "",
  center: false,
  style: {},
};

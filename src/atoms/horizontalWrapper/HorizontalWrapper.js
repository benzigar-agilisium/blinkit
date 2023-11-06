import classNames from "classnames";
import React from "react";
import propTypes from "prop-types";

export default function HorizontalWrapper({ wrap, align, className, children, justify, cutOnPhone, style, ...rest }) {
  return (
    <div
      style={{
        alignItems: align || "center",
        justifyContent: justify || "start",
        ...style,
      }}
      className={classNames(`flex`, { "flex-wrap": wrap }, { "flex-col lg:flex-row ": cutOnPhone }, className)}
      {...rest}
    >
      {children}
    </div>
  );
}

HorizontalWrapper.propTypes = {
  wrap: propTypes.bool,
  align: propTypes.string,
  className: propTypes.string,
  children: propTypes.element,
  justify: propTypes.string,
  cutOnPhone: propTypes.bool,
  style: propTypes.object,
};

HorizontalWrapper.defaultProps = {
  wrap: false,
  align: "",
  className: "",
  justify: "",
  cutOnPhone: false,
  style: {},
};

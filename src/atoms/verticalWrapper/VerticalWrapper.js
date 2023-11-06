import React from "react";
import PropTypes from "prop-types";

export default function VerticalWrapper({ className = "", children, ...rest }) {
  return (
    <div className={`flex flex-col ` + className} {...rest}>
      {children}
    </div>
  );
}

VerticalWrapper.defaultProps = {
  className: "",
};

VerticalWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
};

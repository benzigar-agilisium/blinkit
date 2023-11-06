import React from "react";
import PropTypes from "prop-types";

export default function SubText({ children, className = "", style = {}, ...rest }) {
  return (
    <p
      className={`text-xs ` + className}
      style={{
        ...style,
      }}
      {...rest}
    >
      {children}
    </p>
  );
}

SubText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  style: PropTypes.object,
};

SubText.defaultProps = { className: "", style: {} };

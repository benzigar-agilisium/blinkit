import React from "react";
import Proptypes from "prop-types";

export default function ProductCategoryWrapper({ children }) {
  return <div className="border-x-2 flex h-[80vh] border-small-width">{children}</div>;
}

ProductCategoryWrapper.propTypes = {
  children: Proptypes.element,
};

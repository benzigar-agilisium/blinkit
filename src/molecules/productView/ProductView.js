import React from "react";

import Proptypes from "prop-types";

import SmallProductView from "./smallProductView";
import LargeProductView from "./largeProductView";

const ProductView = ({ className, type, product }) => {
  if (type === "large") return <LargeProductView product={product} className={className} />;
  if (type === "cart") return <SmallProductView product={product} className={className} />;
  else return null;
};

ProductView.propTypes = {
  className: Proptypes.string,
  type: Proptypes.string,
  product: Proptypes.object,
};

ProductView.defaultProps = {
  className: "",
  type: "large",
  product: {},
};

export default React.memo(ProductView);

import React from "react";
import PropTypes from "prop-types";

import LargeImage from "./largeImage";
import SmallImage from "./smallImage";
import ZoomableImage from "./zoomableImage";

const ProductImage = ({ type = "small", zoomStatus = false, imageUrl = "" }) => {
  if (type === "large") return <LargeImage imageUrl={imageUrl} />;
  if (type === "small") return <SmallImage imageUrl={imageUrl} />;
  if (type === "zoomable") return <ZoomableImage imageUrl={imageUrl} zoomStatus={zoomStatus} />;
  else return null;
};

ProductImage.propTypes = {
  type: PropTypes.string,
  zoomStatus: PropTypes.bool,
  imageUrl: PropTypes.string,
};

ProductImage.defaultProps = { type: "small", zoomStatus: false, imageUrl: "" };

export default React.memo(ProductImage);

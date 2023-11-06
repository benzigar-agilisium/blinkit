import React from "react";
import PropTypes from "prop-types";

const LargeImage = React.memo(({ imageUrl = "" }) => <img className="w-full aspect-square object-cover" src={imageUrl} alt="" />);

LargeImage.propTypes = {
  imageUrl: PropTypes.string,
};

LargeImage.defaultProps = {
  imageUrl: "",
};

export default React.memo(LargeImage);

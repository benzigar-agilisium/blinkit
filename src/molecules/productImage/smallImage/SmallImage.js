import React from "react";
import PropTypes from "prop-types";

const SmallImage = React.memo(({ imageUrl = "" }) => (
  <div className="text-xs border-2 rounded-md border-small-width overflow-hidden">
    <img className="object-cover h-16 aspect-square" src={imageUrl} alt="" />
  </div>
));

SmallImage.propTypes = {
  imageUrl: PropTypes.string,
};

SmallImage.defaultProps = {
  imageUrl: "",
};

export default React.memo(SmallImage);

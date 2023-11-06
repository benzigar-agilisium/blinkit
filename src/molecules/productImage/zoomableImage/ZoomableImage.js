import React from "react";
import PropTypes from "prop-types";

const ZoomableImage = React.memo(({ imageUrl = "", zoomStatus = false }) => (
  <div className="bg-zinc-100 rounded-md h-[50px] w-[50px] overflow-hidden">
    <img
      style={{
        transform: zoomStatus ? "scale(1) translateY(0)" : "scale(0.8) translateY(10px)",
      }}
      className="transition-all duration-500 object-cover"
      src={imageUrl}
      alt=""
    />
  </div>
));

ZoomableImage.propTypes = {
  imageUrl: PropTypes.string,
  zoomStatus: PropTypes.bool,
};

ZoomableImage.defaultProps = {
  imageUrl: "",
  zoomStatus: false,
};

export default React.memo(ZoomableImage);

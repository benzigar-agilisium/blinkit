import React from "react";
import Proptypes from "prop-types";

export default function ProductDiscount({ percentage = 0 }) {
  if (!percentage) return null;
  return (
    <div className="absolute top-0 left-0 ml-2">
      <div className="relative">
        <img className="h-8" src="/badge.svg" alt="" />
        <div
          style={{
            fontSize: 9,
          }}
          className="font-bold text-white absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-xs"
        >
          <p className="m-0">{percentage + "%"}</p>
          <p className="-mt-1">OFF</p>
        </div>
      </div>
    </div>
  );
}

ProductDiscount.propTypes = {
  percentage: Proptypes.number,
};

ProductDiscount.defaultProps = {
  percentage: 0,
};

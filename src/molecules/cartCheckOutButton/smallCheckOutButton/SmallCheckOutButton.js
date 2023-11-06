import React from "react";
import PropTypes from "prop-types";
import ProductPrice from "../../../atoms/productPrice";
import { BsChevronRight } from "react-icons/bs";

const SmallCheckOutButton = React.memo(({ totalAmount = 0 }) => (
  <div className="bg-zinc-100 flex flex-col">
    <div className="bg-white rounded-t-xl shadow-2xl flex flex-col">
      <button className="bg-green-700 hover:bg-green-800 transition-all flex items-center justify-between text-white p-3 rounded-md m-5 px-4">
        <div className="flex flex-col items-start">
          <p className="text-xs opacity-75 uppercase">Total</p>
          <ProductPrice price={totalAmount} />
        </div>
        <div className="flex items-center">
          <p>Continue</p>
          <BsChevronRight />
        </div>
      </button>
    </div>
  </div>
));

SmallCheckOutButton.propTypes = {
  totalAmount: PropTypes.number,
};

SmallCheckOutButton.defaultProps = {
  totalAmount: 0,
};

export default React.memo(SmallCheckOutButton);

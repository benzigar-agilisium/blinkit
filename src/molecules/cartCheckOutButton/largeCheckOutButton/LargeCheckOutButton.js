import React from "react";
import PropTypes from "prop-types";

import ProductPrice from "../../../atoms/productPrice";
import DotDivider from "../../../atoms/dotDivider";
import { BsChevronRight } from "react-icons/bs";

const renderItemText = (items) => `${items} ${items === 1 ? "item" : "items"}`;

const LargeCheckoutButton = React.memo(({ itemsCount, totalAmount }) => (
  <div className="mt-5 bg-zinc-50 rounded-t-xl flex flex-col">
    <button className="bg-green-700 hover:bg-green-800 transition-all flex items-center justify-between text-white p-3 rounded-md m-5 px-4">
      <div className="flex items-center">
        <p className="text-xs">{renderItemText(itemsCount)}</p>
        <DotDivider />
        <ProductPrice price={totalAmount} />
      </div>
      <div className="flex items-center">
        <p>Proceed</p>
        <BsChevronRight />
      </div>
    </button>
  </div>
));

LargeCheckoutButton.propTypes = {
  itemsCount: PropTypes.number,
  totalAmount: PropTypes.number,
};

LargeCheckoutButton.defaultProps = { itemsCount: 0, totalAmount: 0 };

export default React.memo(LargeCheckoutButton);

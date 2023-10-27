import React from "react";
import useCart from "../../hooks/useCart";
import { BsChevronRight } from "react-icons/bs";
import ProductPrice from "../../atoms/productPrice";

import Dot from "../../atoms/dot";

export default function CartCheckButton() {
  const { getItemCount, getTotalAmount } = useCart();
  return (
    <div className="mt-5 bg-zinc-50 rounded-t-xl flex flex-col">
      <button className="bg-green-700 hover:bg-green-800 transition-all flex items-center justify-between text-white p-3 rounded-md m-5 px-4">
        <div className="flex items-center">
          <p className="text-xs">
            {getItemCount()} {getItemCount() === 1 ? "item" : "items"}
          </p>
          <Dot />
          <ProductPrice price={getTotalAmount()} />
        </div>
        <div className="flex items-center">
          <p>Proceed</p>
          <BsChevronRight />
        </div>
      </button>
    </div>
  );
}

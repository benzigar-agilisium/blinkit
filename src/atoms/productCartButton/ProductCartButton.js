import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function ProductCartButton({
  quantity = 0,
  addCartClick = () => {},
  removeQuantityClick = () => {},
  addQuantityClick = () => {},
}) {
  if (!quantity)
    return (
      <button
        onClick={addCartClick}
        className="min-w-[80px] bg-green-50 border-small-width px-5 py-2 border-2 border-green-700 rounded-md text-sm text-green-700"
        style={{
          fontWeight: 600,
        }}
      >
        Add
      </button>
    );
  return (
    <div className="min-w-[80px] font-bold justify-between flex items-center border-small-width border-green-700 px-2 bg-green-700 rounded-md text-xs text-white">
      <button className="py-3" onClick={removeQuantityClick}>
        <AiOutlineMinus className="text-md" />
      </button>
      <p>{quantity}</p>
      <button className="py-3" onClick={addQuantityClick}>
        <AiOutlinePlus className="text-md" />
      </button>
    </div>
  );
}

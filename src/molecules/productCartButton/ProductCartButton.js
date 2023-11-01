import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import propTypes from "prop-types";

// SHOW ADD BUTTON WITH PRODUCT NO QUANTITY
const AddButton = ({ addCarClick = () => {} }) => (
  <button
    onClick={addCarClick}
    className="min-w-[80px] bg-green-50 border-small-width px-5 py-2 border-2 border-green-700 rounded-md text-sm text-green-700"
    style={{
      fontWeight: 600,
    }}
  >
    Add
  </button>
);

// SHOW QUANTITY WITH BUTTON
const ButtonWithQuantityNumber = ({ quantity = 0, removeQuantityClick = () => {}, addQuantityClick = () => {} }) => (
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

// ADD CART BUTTON IN A PRODUCT VIEW
export default function ProductCartButton({
  quantity = 0,
  addCartClick = () => {},
  removeQuantityClick = () => {},
  addQuantityClick = () => {},
}) {
  if (!quantity) return <AddButton addCarClick={addCartClick} />;
  else
    return (
      <ButtonWithQuantityNumber
        quantity={quantity}
        addQuantityClick={addQuantityClick}
        removeQuantityClick={removeQuantityClick}
      />
    );
}

ProductCartButton.propType = {
  quantity: propTypes.number,
  addCartClick: propTypes.func,
  removeQuantityClick: propTypes.func,
  addQuantityClick: propTypes.func,
};

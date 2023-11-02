import React from "react";
import propTypes from "prop-types";

import AddButton from "./atoms/addButton";
import ButtonWithQuantityNumber from "./atoms/buttonWithQuantityNumber";

export default function ProductCartButton({ quantity, addCartClick, removeQuantityClick, addQuantityClick }) {
  if (!quantity) return <AddButton addCartClick={addCartClick} />;
  return (
    <ButtonWithQuantityNumber quantity={quantity} addQuantityClick={addQuantityClick} removeQuantityClick={removeQuantityClick} />
  );
}

ProductCartButton.propTypes = {
  quantity: propTypes.number,
  addCartClick: propTypes.func,
  removeQuantityClick: propTypes.func,
  addQuantityClick: propTypes.func,
};

ProductCartButton.defaultProps = {
  quantity: 0,
  addCartClick: () => {},
  removeQuantityClick: () => {},
  addQuantityClick: () => {},
};

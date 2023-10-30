import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import ProductPrice from "../../atoms/productPrice";

const getItemName = (count) => `${count} ${count === 1 ? "item" : "items"}`;

const RenderButtonContent = React.memo(() => {
  const { getItemCount, getTotalAmount } = useCart();
  return (
    <div className="font-bold ml-2 flex text-xs flex-col items-start">
      <p>{getItemName(getItemCount())}</p>
      <ProductPrice price={getTotalAmount()} />
    </div>
  );
});

export default function CartButton() {
  const navigate = useNavigate();
  const { cart } = useCart();

  const cartButtonClick = () => navigate("/cart");

  return (
    <>
      <button onClick={cartButtonClick} className="hidden lg:flex flex-col bg-green-700 text-white py-3 rounded-lg px-4">
        <div className="min-w-[90px] flex items-center">
          <AiOutlineShoppingCart className="hover:rotate-12 transition-all text-3xl" />
          {cart?.length > 0 ? <RenderButtonContent /> : <p className="text-xs font-bold ml-2">My Cart</p>}
        </div>
      </button>
    </>
  );
}

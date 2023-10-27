import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import ProductPrice from "../../atoms/productPrice";

export default function CartButton() {
  const navigate = useNavigate();
  const { cart, getItemCount, getTotalAmount } = useCart();
  return (
    <button
      onClick={() => {
        navigate("/cart");
      }}
      className="flex flex-col bg-green-700 text-white py-3 rounded-lg px-4"
    >
      <div className="min-w-[90px] flex items-center">
        <AiOutlineShoppingCart className="hover:rotate-12 transition-all text-3xl" />
        {cart?.length > 0 ? (
          <div className="font-bold ml-2 flex text-xs flex-col items-start">
            <p>
              {getItemCount()} {getItemCount() === 1 ? "item" : "items"}
            </p>
            <ProductPrice price={getTotalAmount()} />
          </div>
        ) : (
          <p className="text-xs font-bold ml-2">My Cart</p>
        )}
      </div>
    </button>
  );
}

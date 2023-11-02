import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { AiFillCaretRight, AiOutlineShoppingCart } from "react-icons/ai";
import ProductPrice from "../productPrice";
import Text from "../text";
import styles from "./mobileCartButton.module.css";

export default function MobileCartButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, getItemCount, getTotalAmount } = useCart();

  const cartButtonClick = () => navigate("/cart");

  if (!getItemCount()) return null;
  if (location.pathname.includes("/cart")) return null;

  return (
    <div className="md:hidden z-40 fixed bottom-0 left-0 right-0 p-3">
      <button onClick={cartButtonClick} className={styles.mobileCartButton}>
        <div className="w-full flex items-center">
          <div className="flex flex-1 items-center">
            <div className="bg-green-600 rounded-md p-2">
              <AiOutlineShoppingCart className="hover:rotate-12 transition-all text-xl" />
            </div>
            <div className="ml-2 flex flex-col">
              <Text size="tiny">{getItemCount()} items</Text>
              <ProductPrice price={getTotalAmount()} />
            </div>
          </div>
          <div className="flex items-center">
            <Text size="tiny">View Cart</Text>
            <AiFillCaretRight />
          </div>
        </div>
      </button>
    </div>
  );
}

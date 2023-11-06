import React from "react";
import useCart from "../../hooks/useCart";

import LargeCheckOutButton from "./largeCheckOutButton";
import SmallCheckOutButton from "./smallCheckOutButton";

export default function CartCheckoutButton({ type = "large" }) {
  const { getItemCount, getTotalAmount } = useCart();

  if (type === "large") return <LargeCheckOutButton itemsCount={getItemCount()} totalAmount={getTotalAmount()} />;
  if (type === "small") return <SmallCheckOutButton totalAmount={getTotalAmount()} />;
  else return null;
}

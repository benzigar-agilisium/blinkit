import React from "react";
import useCart from "../../hooks/useCart";

export default function CartHeader() {
  const { getItemCount } = useCart();
  return (
    <div className="flex items-center">
      <img
        className="h-14"
        src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/assets/eta-icons/30-mins-filled.png"
        alt=""
      />
      <div className="ml-4 flex-1 text-xs flex flex-col">
        <p className="font-bold text-sm mb-1">Delivery in 15 minutes</p>
        <p className="text-zinc-500">
          Shipment of {getItemCount()} {getItemCount() === 1 ? "item" : "items"}
        </p>
      </div>
    </div>
  );
}

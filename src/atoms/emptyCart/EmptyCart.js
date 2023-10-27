import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="my-32 flex-1 p-3">
      <div className="text-sm bg-white rounded-md p-3 flex flex-col justify-center items-center">
        <img className="h-20 aspect-square" src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png" alt="" />
        <h1 className="font-bold mt-2 text-md">You don't have any items in your cart</h1>
        <p className="text-xs mt-3 text-zinc-400">Your favourite items are just a click away</p>
        <Link replace to={"/"}>
          <button className="mt-5 bg-green-700 rounded-md text-xs text-white px-4 py-2">Start Shopping</button>
        </Link>
      </div>
    </div>
  );
}

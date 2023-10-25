import React from "react";
import { Outlet } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import items from "../../data/items.json";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div
        className="border-b-2"
        style={{
          borderWidth: 1,
        }}
      >
        <div className="flex items-center container mx-auto">
          <div
            className="border-r-2 py-8 pr-4"
            style={{
              borderRightWidth: 1,
            }}
          >
            <img src="/logo.svg" alt="" />
          </div>
          <div className="ml-14 flex flex-col">
            <h1 className="font-bold text-lg">Delivery in 14 minutes</h1>
            <p className="text-xs">Bengaluru, Karnataka, India</p>
          </div>
          <div className="flex-1 pl-5">
            <div className="bg-zinc-50 border-2 flex border-zinc-100 py-3 px-3 rounded-lg items-center">
              <BiSearch className="text-2xl" />
              <input
                placeholder="Search..."
                type="text"
                className="bg-transparent pl-3 text-sm focus:outline-none flex-1"
              />
            </div>
          </div>
          <p className="px-14">Login</p>
          <div className="flex flex-col bg-green-700 text-white py-2 rounded-lg px-4">
            <div className="flex items-center">
              <AiOutlineShoppingCart className="text-2xl" />
              <div className="font-bold ml-2 flex text-xs flex-col">
                <p>3 items</p>
                <p>₹441</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-md py-4 text-zinc-500 text-sm z-10">
        <div className="container mx-auto flex justify-center">
          {items.map((e) => (
            <p className="mx-4">{e.categoryName}</p>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

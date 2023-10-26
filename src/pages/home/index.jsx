import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BiRupee, BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

import items from "../../data/items.json";
import useCart from "../../hooks/useCart";
import Cart from "../../components/Cart";

const footerIcons = [
  {
    link: "https://www.facebook.com/blinkit.india/",
    icon: FaFacebookF,
  },
  {
    link: "https://twitter.com/i/flow/login?redirect_after_login=%2Fletsblinkit%2F",
    icon: FaTwitter,
  },
  {
    link: "https://www.instagram.com/letsblinkit/",
    icon: FaInstagram,
  },
  {
    link: "https://in.linkedin.com/company/letsblinkit",
    icon: FaLinkedinIn,
  },
];

export default function Home() {
  const { cart, getTotalAmount, clearCart, getItemCount } = useCart();
  return (
    <div className="flex flex-col">
      <div className="bg-white z-20 sticky top-0">
        <div
          className="border-b-2"
          style={{
            borderWidth: 1,
          }}
        >
          <div className="flex items-center container mx-auto">
            <Link
              to={"/"}
              className="border-r-2 py-8 pr-4"
              style={{
                borderRightWidth: 1,
              }}
            >
              <img src="/logo.svg" alt="" />
            </Link>
            <div className="ml-14 flex flex-col">
              <h1 className="font-bold text-lg">Delivery in 14 minutes</h1>
              <p className="text-xs">Bengaluru, Karnataka, India</p>
            </div>
            <div className="flex-1 pl-5">
              <div className="bg-zinc-50 border-2 flex border-zinc-100 py-3 px-3 rounded-lg items-center">
                <BiSearch className="text-2xl" />
                <input placeholder="Search..." type="text" className="bg-transparent pl-3 text-sm focus:outline-none flex-1" />
              </div>
            </div>
            <p className="px-14">Login</p>
            <Cart />
          </div>
        </div>
        <div className="shadow-md text-zinc-500 text-sm z-10">
          <div className="container mx-auto flex justify-center">
            {items.map((e) => (
              <button className="px-4 hover:bg-zinc-100 py-4">{e.categoryName}</button>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
      <div className="mt-10 container mx-auto">
        <p className="my-5 text-xs text-center text-zinc-500">
          “Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India Private Limited) and
          is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services
          business operated by “Redstone Consultancy Services Private Limited”.
        </p>
        <div className="mt-10 mb-5 text-xs flex items-center justify-between bg-zinc-50 px-3 py-3 text-zinc-500">
          <div className="w-1/3">
            <p>© Blink Commerce Private Limited (formerly known as Grofers India Private Limited), 2016-2023</p>
          </div>
          <div className="w-1/3 flex items-center">
            <p className="mx-4 font-bold">Download App</p>
            <img className="h-6 mx-4" src="https://blinkit.com/d61019073b700ca49d22.png" alt="" />
            <img className="h-6 mx-4" src="https://blinkit.com/8ed033800ea38f24c4f0.png" alt="" />
          </div>
          <div className="flex items-center">
            {footerIcons?.map((each) => (
              <Link target="_blank" to={each.link} className="text-white bg-black p-3 rounded-full text-xl mx-3">
                <each.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

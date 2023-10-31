import classNames from "classnames";
import React from "react";
import { BiSearch } from "react-icons/bi";

export default function HeaderSearchBar({ sticky = false, className = "" }) {
  return (
    <div className={classNames("flex-1 lg:pl-5", { "sticky top-0": sticky }, className)}>
      <div className="bg-zinc-50 border-2 flex-1 flex border-zinc-100 py-3 px-3 rounded-lg items-center">
        <BiSearch className="text-2xl" />
        <input placeholder="Search..." type="text" className="bg-transparent pl-3 text-sm focus:outline-none flex-1" />
      </div>
    </div>
  );
}
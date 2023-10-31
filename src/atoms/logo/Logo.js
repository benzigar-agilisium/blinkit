import React from "react";
import { Link } from "react-router-dom";

export default function Logo({ type = "large" }) {
  if (type === "large")
    return (
      <Link to={"/"} className="border-r-2 py-8 pr-4">
        <img src="/logo.svg" alt="" />
      </Link>
    );
  if (type === "small")
    return (
      <Link to={"/"} className="py-5 pr-4">
        <img className="h-[20px]" src="/logo.svg" alt="" />
      </Link>
    );
  else return null;
}

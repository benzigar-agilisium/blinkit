import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"} className="border-r-2 py-8 pr-4">
      <img src="/logo.svg" alt="" />
    </Link>
  );
}

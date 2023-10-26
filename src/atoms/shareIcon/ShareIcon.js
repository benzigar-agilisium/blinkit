import React from "react";
import { Link } from "react-router-dom";

export default function ShareIcon({ link = "", Icon = null }) {
  return (
    <Link target="_blank" to={link} className="text-white bg-black p-3 rounded-full text-xl mx-3">
      <Icon />
    </Link>
  );
}

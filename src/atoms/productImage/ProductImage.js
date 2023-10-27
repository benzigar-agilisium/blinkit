import React from "react";

export default function ProductImage({ type = "small", zoomStatus = false, imageUrl = "" }) {
  if (type === "large") return <img className="w-full aspect-square object-cover" src={imageUrl} alt="" />;
  if (type === "small")
    return (
      <div className="text-xs border-2 rounded-md border-small-width overflow-hidden">
        <img className="object-cover h-16 aspect-square" src={imageUrl} alt="" />
      </div>
    );
  if (type === "zoomable")
    return (
      <div className="bg-zinc-100 rounded-md h-[50px] w-[50px] overflow-hidden">
        <img
          style={{
            transform: zoomStatus ? "scale(1) translateY(0)" : "scale(0.8) translateY(10px)",
          }}
          className="transition-all duration-500 object-cover"
          src={imageUrl}
          alt=""
        />
      </div>
    );
  else return null;
}

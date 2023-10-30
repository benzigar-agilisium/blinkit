import React from "react";

const LargeImage = React.memo(({ imageUrl: imageUrl }) => (
  <img className="w-full aspect-square object-cover" src={imageUrl} alt="" />
));

const SmallImage = React.memo(({ imageUrl: imageUrl }) => (
  <div className="text-xs border-2 rounded-md border-small-width overflow-hidden">
    <img className="object-cover h-16 aspect-square" src={imageUrl} alt="" />
  </div>
));

const ZoomableImage = React.memo(({ imageUrl = "", zoomStatus = false }) => (
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
));

const ProductImage = ({ type = "small", zoomStatus = false, imageUrl = "" }) => {
  if (type === "large") return <LargeImage imageUrl={imageUrl} />;
  if (type === "small") return <SmallImage imageUrl={imageUrl} />;
  if (type === "zoomable") return <ZoomableImage imageUrl={imageUrl} zoomStatus={zoomStatus} />;
  else return null;
};

export default React.memo(ProductImage);

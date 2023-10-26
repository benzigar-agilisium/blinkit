import React from "react";

export default function CategoryListForHeader({ items = {} }) {
  return (
    <div className="shadow-md text-zinc-500 text-sm z-10">
      <div className="container mx-auto flex justify-center">
        {items.map((item) => (
          <button className="px-4 hover:bg-zinc-100 py-4">{item.categoryName}</button>
        ))}
      </div>
    </div>
  );
}

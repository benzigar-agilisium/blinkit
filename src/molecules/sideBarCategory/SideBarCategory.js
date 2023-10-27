import React from "react";
import ProductImage from "../../atoms/productImage";
import SubText from "../../atoms/subText";

export default function SideBarCategory({ category = {}, selected = false, setSelected = () => {} }) {
  return (
    <button
      onClick={() => {
        setSelected(category.id);
      }}
      className={`${
        selected ? "border-l-green-600 bg-green-50" : "border-l-white"
      } transition-all duration-300 border-l-4 w-full border-b-2 border-small-width-bottom text-xs flex items-center px-5 py-3`}
    >
      <ProductImage type="zoomable" zoomStatus={selected} imageUrl={category.categoryImage} />
      <SubText
        className="ml-2"
        style={{
          fontWeight: 500,
        }}
      >
        {category.categoryName}
      </SubText>
    </button>
  );
}

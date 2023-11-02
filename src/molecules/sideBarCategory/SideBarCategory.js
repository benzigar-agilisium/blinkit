import React from "react";
import ProductImage from "../../atoms/productImage";
import SubText from "../../atoms/subText";
import Text from "../../atoms/text";

const SideBarCategory = ({ category = {}, selected = false, setSelected = () => {} }) => {
  const updateSelected = React.useCallback(() => setSelected(category.id), [category, selected, setSelected]);
  return (
    <button
      onClick={updateSelected}
      className={`${
        selected ? "border-l-green-600 bg-green-50" : "border-l-white"
      } transition-all duration-300 border-l-4 w-full border-b-2 border-small-width-bottom text-xs flex flex-col lg:flex-row items-center px-2 lg:px-5 py-3`}
    >
      <ProductImage type="zoomable" zoomStatus={selected} imageUrl={category.categoryImage} />
      <Text size="tiny" className="hidden md:flex mt-2 text-xs px-2 lg:ml-2">
        {category.categoryName}
      </Text>
    </button>
  );
};

export default React.memo(SideBarCategory);

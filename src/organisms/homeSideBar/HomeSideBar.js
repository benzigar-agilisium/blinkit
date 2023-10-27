import React from "react";

import VerticalWrapper from "../../atoms/verticalWrapper";
import SideBarCategory from "../../molecules/sideBarCategory/SideBarCategory";

export default function HomeSideBar({ items, selectedCategory = false, setSelectedCategory = () => {} }) {
  return (
    <VerticalWrapper className="border-r-2 border-small-width-right w-1/5 overflow-y-scroll pt-5">
      {items?.map((category, i) => (
        <SideBarCategory category={category} selected={selectedCategory === category.id} setSelected={setSelectedCategory} />
      ))}
    </VerticalWrapper>
  );
}

import React from "react";
import VerticalWrapper from "../../atoms/verticalWrapper";
import HorizontalWrapper from "../../atoms/horizontalWrapper";

const RenderCategoryList = React.memo(({ items }) =>
  items.map((item) => <button className="px-4 hover:bg-zinc-100 py-4">{item.categoryName}</button>)
);

export default function CategoryListForHeader({ items = {} }) {
  return (
    <VerticalWrapper className="shadow-md text-zinc-500 text-sm z-10">
      <HorizontalWrapper justify="center" className="container mx-auto">
        <RenderCategoryList items={items} />
      </HorizontalWrapper>
    </VerticalWrapper>
  );
}

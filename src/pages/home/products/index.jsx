import React from "react";

import items from "../../../data/items.json";

import VerticalWrapper from "../../../atoms/verticalWrapper";
import ProductCategoryWrapper from "../../../atoms/productCategoryWrapper/ProductCategoryWrapper";

import HomeSideBar from "../../../organisms/homeSideBar/HomeSideBar";
import HomeProductList from "../../../organisms/homeProductList/HomeProductList";

export default function Main() {
  const [selectedCategory, setSelectedCategory] = React.useState(items?.[0]?.id);

  return (
    <VerticalWrapper className="container mx-auto px-10">
      <ProductCategoryWrapper>
        <HomeSideBar items={items} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <HomeProductList items={items} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </ProductCategoryWrapper>
    </VerticalWrapper>
  );
}

import React from "react";
import VerticalWrapper from "../../atoms/verticalWrapper";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import Heading from "../../atoms/heading";
import Text from "../../atoms/text";
import Dropdown from "../../atoms/dropdown/Dropdown";

import ProductView from "../../molecules/productView/ProductView";

import { dropDownOptions } from "./homeProductList.data";

const RenderProductList = React.memo(({ sortOrder = "NONE", categoryItems }) => {
  const getSortedItems = React.useCallback(() => {
    if (sortOrder === "NONE") return categoryItems?.sort((a, b) => a.order - b.order);
    if (sortOrder === "PRICE_ASC") return categoryItems?.sort((a, b) => a.sellingPrice - b.sellingPrice);
    if (sortOrder === "PRICE_DESC") return categoryItems?.sort((a, b) => b.sellingPrice - a.sellingPrice);
    else return [];
  }, [categoryItems, sortOrder]);

  return getSortedItems()?.map((product) => (
    <VerticalWrapper className="w-1/2 md:w-1/3 lg:w-1/5 p-1">
      <ProductView product={product} />
    </VerticalWrapper>
  ));
});

export default function HomeProductList({ items = [], selectedCategory = false, setSelectedCategory = () => {} }) {
  const [sortOrder, setSortOrder] = React.useState("NONE");
  const categoryItems = items?.find((e) => e.id === selectedCategory) ?? {};

  const updateSelectedItem = (e) => setSortOrder(e?.target?.value);

  return (
    <VerticalWrapper className="overflow-y-scroll flex-1 bg-zinc-100">
      {/* TOP SECTION  */}
      <HorizontalWrapper
        align="center"
        justify="space-between"
        className="hidden lg:flex flex-col lg:flex-row bg-white p-3 text-sm"
      >
        <Heading size="medium">{categoryItems?.showText}</Heading>
        <HorizontalWrapper align="center" className="text-zinc-500 text-xs">
          <Text size="tiny">Sort by</Text>
          <Dropdown onChange={updateSelectedItem} selected={"NONE"} options={dropDownOptions} />
        </HorizontalWrapper>
      </HorizontalWrapper>
      {/* PRODUCT LIST  */}
      <HorizontalWrapper align="stretch" wrap={true} className="lg:p-2">
        <RenderProductList sortOrder={sortOrder} categoryItems={categoryItems?.products ?? []} />
      </HorizontalWrapper>
    </VerticalWrapper>
  );
}

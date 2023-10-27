import React from "react";
import VerticalWrapper from "../../atoms/verticalWrapper";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import Heading from "../../atoms/heading";
import Text from "../../atoms/text";
import Dropdown from "../../atoms/dropdown/Dropdown";
import ProductView from "../../molecules/productView/ProductView";

export default function HomeProductList({ items = [], selectedCategory = false, setSelectedCategory = () => {} }) {
  return (
    <VerticalWrapper className="overflow-y-scroll flex-1 bg-zinc-100">
      {/* TOP SECTION  */}
      <HorizontalWrapper align="center" justify="space-between" className="bg-white p-3 text-sm">
        <Heading size="medium">{items.find((e) => e.id === selectedCategory).showText}</Heading>
        <HorizontalWrapper align="center" className="text-zinc-500 text-xs">
          <Text>Sort by</Text>
          <Dropdown
            selected={"RELEVANCE"}
            options={[
              {
                id: "RELEVANCE",
                display: "Relevance",
              },
              {
                id: "ASCENDING",
                display: "Ascending",
              },
              {
                id: "DESCENDING",
                display: "Descending",
              },
            ]}
          />
        </HorizontalWrapper>
      </HorizontalWrapper>
      {/* PRODUCT LIST  */}
      <HorizontalWrapper align="stretch" wrap={true} className="p-2">
        {items
          .find((e) => e.id === selectedCategory)
          .products?.map((product) => (
            <VerticalWrapper className="w-1/5 p-1">
              <ProductView product={product} />
            </VerticalWrapper>
          ))}
      </HorizontalWrapper>
    </VerticalWrapper>
  );
}
import React from "react";

import VerticalWrapper from "../../../atoms/verticalWrapper";
import ProductView from "../../../molecules/productView";

import { getSortedItems } from "./renderProductList.helper";

const RenderProductList = ({ sortOrder = "NONE", categoryItems }) => {
  return getSortedItems(categoryItems, sortOrder)?.map((product) => (
    <VerticalWrapper className="w-1/2 md:w-1/3 lg:w-1/5 p-1">
      <ProductView product={product} />
    </VerticalWrapper>
  ));
};
export default React.memo(RenderProductList);

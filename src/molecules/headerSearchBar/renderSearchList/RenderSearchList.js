import React from "react";
import ProductView from "../../../molecules/productView";

// ATOMS
const RenderSearchList = React.memo(({ products = [] }) => (
  <div className="flex flex-wrap">
    {products?.map((product) => (
      <div className="flex flex-col p-1 w-1/2 xl:w-1/3">
        <ProductView product={product} />
      </div>
    ))}
  </div>
));

export default React.memo(RenderSearchList);

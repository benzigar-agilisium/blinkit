import React from "react";
import classNames from "classnames";

import useCart from "../../../hooks/useCart";
import HorizontalWrapper from "../../../atoms/horizontalWrapper";
import ProductImage from "../../../molecules/productImage";
import VerticalWrapper from "../../../atoms/verticalWrapper";
import ProductPrice from "../../../atoms/productPrice";
import ProductCartButton from "../../../molecules/productCartButton";
import Text from "../../../atoms/text";

const SmallProductView = ({ product = {}, className = "" }) => {
  const { addToCart, getQuantityInCart, addQuantity, removeQuantity } = useCart();

  const addToCartMemo = React.useMemo(() => () => addToCart(product), [product]);
  const addQuantityMemo = React.useMemo(() => () => addQuantity(product.id), [product]);
  const removeQuantityMemo = React.useMemo(() => () => removeQuantity(product.id), [product]);

  return (
    <HorizontalWrapper align="stretch" className={classNames("my-5 flex text-xs", className)}>
      <ProductImage type="small" imageUrl={product.productImage} />
      <VerticalWrapper className="flex-1 ml-3 flex justify-between flex-col">
        <VerticalWrapper className="max-w-[150px]">
          <Text size="tiny">{product.productName}</Text>
          {product.productQuantity ? <p className="text-zinc-500">{product.productQuantity}</p> : null}
        </VerticalWrapper>
        <HorizontalWrapper>
          <ProductPrice price={product.sellingPrice} />
          <HorizontalWrapper className="ml-2">
            {product.sellingPrice !== product.actualPrice ? <ProductPrice strike price={product.actualPrice} /> : null}
          </HorizontalWrapper>
        </HorizontalWrapper>
      </VerticalWrapper>
      <VerticalWrapper className="flex flex-col">
        <ProductCartButton
          addCartClick={addToCartMemo}
          addQuantityClick={addQuantityMemo}
          removeQuantityClick={removeQuantityMemo}
          quantity={getQuantityInCart(product.id)}
        />
      </VerticalWrapper>
    </HorizontalWrapper>
  );
};

export default React.memo(SmallProductView);

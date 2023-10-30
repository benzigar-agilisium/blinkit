import React from "react";
import classNames from "classnames";

import VerticalWrapper from "../../atoms/verticalWrapper";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import ProductImage from "../../atoms/productImage";
import ProductDiscount from "../../atoms/productDiscount";
import ProductClockIcon from "../../atoms/productClockIcon";
import Text from "../../atoms/text";
import ProductPrice from "../../atoms/productPrice";
import ProductCartButton from "../productCartButton/ProductCartButton";
import useCart from "../../hooks/useCart";

export default function ProductView({ className = "", type = "large", product = {} }) {
  const { addToCart, isInCart, getQuantityInCart, addQuantity, removeQuantity } = useCart();

  if (type === "large")
    return (
      <VerticalWrapper className="flex-1 justify-between rounded-lg bg-white overflow-hidden">
        {/* PRODUCT IMAGE */}
        <VerticalWrapper className="relative px-3 pb-3">
          <ProductImage type="large" imageUrl={product.productImage} />
          <ProductDiscount percentage={product.discountPercentage} />
        </VerticalWrapper>
        {/* PRODUCT DETAILS  */}
        <VerticalWrapper className="text-xs flex flex-col px-3 pb-2">
          <ProductClockIcon time={product.deliveryTime} />
          <Text lightBold size="tiny">
            {product.productName}
          </Text>
          <Text dim className="mt-2" size="tiny" lightBold>
            {product.productQuantity}
          </Text>
          <HorizontalWrapper justify="space-between" className="mt-2">
            <VerticalWrapper className="flex flex-col">
              <ProductPrice price={product.sellingPrice} />
              {product.sellingPrice !== product.actualPrice ? <ProductPrice strike price={product.actualPrice} /> : null}
            </VerticalWrapper>
            <ProductCartButton
              addCartClick={() => addToCart(product)}
              addQuantityClick={() => addQuantity(product.id)}
              removeQuantityClick={() => removeQuantity(product.id)}
              quantity={getQuantityInCart(product.id)}
            />
          </HorizontalWrapper>
        </VerticalWrapper>
      </VerticalWrapper>
    );
  if (type === "cart")
    return (
      <HorizontalWrapper align="stretch" className={classNames("mt-10 flex text-xs", className)}>
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
            addCartClick={() => addToCart(product)}
            addQuantityClick={() => addQuantity(product.id)}
            removeQuantityClick={() => removeQuantity(product.id)}
            quantity={getQuantityInCart(product.id)}
          />
        </VerticalWrapper>
      </HorizontalWrapper>
    );
  else return null;
}

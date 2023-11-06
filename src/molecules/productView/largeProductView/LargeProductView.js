import React from "react";
import classNames from "classnames";

import useCart from "../../../hooks/useCart";
import ProductImage from "../../../molecules/productImage";
import VerticalWrapper from "../../../atoms/verticalWrapper";
import ProductPrice from "../../../atoms/productPrice";
import ProductCartButton from "../../../molecules/productCartButton";
import Text from "../../../atoms/text";
import ProductDiscount from "../../../atoms/productDiscount";
import ProductClockIcon from "../../../atoms/productClockIcon";

const LargeProductView = ({ product = {} }) => {
  const { cart, addToCart, getQuantityInCart, addQuantity, removeQuantity } = useCart();

  const addToCartMemo = React.useMemo(() => () => addToCart(product), [cart, product]);
  const addQuantityMemo = React.useMemo(() => () => addQuantity(product.id), [cart, product]);
  const removeQuantityMemo = React.useMemo(() => () => removeQuantity(product.id), [cart, product]);

  return (
    <>
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
          <Text dim className="mt-2" size="tiny">
            {product.productQuantity}
          </Text>
          <div className="flex md:items-center md:justify-between flex-col md:flex-row mt-2">
            <VerticalWrapper className="flex flex-col">
              <ProductPrice price={product.sellingPrice} />
              <div className="flex">
                {product.sellingPrice !== product.actualPrice ? (
                  <ProductPrice bold={false} strike price={product.actualPrice} />
                ) : null}
              </div>
            </VerticalWrapper>
            <div className="mt-2 lg:m-0">
              <ProductCartButton
                addCartClick={addToCartMemo}
                addQuantityClick={addQuantityMemo}
                removeQuantityClick={removeQuantityMemo}
                quantity={getQuantityInCart(product.id)}
              />
            </div>
          </div>
        </VerticalWrapper>
      </VerticalWrapper>
    </>
  );
};

export default React.memo(LargeProductView);

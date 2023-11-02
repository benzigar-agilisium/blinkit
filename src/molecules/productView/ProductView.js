import React from "react";
import classNames from "classnames";

import Proptypes from "prop-types";

import VerticalWrapper from "../../atoms/verticalWrapper";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import ProductImage from "../../atoms/productImage";
import ProductDiscount from "../../atoms/productDiscount";
import ProductClockIcon from "../../atoms/productClockIcon";
import Text from "../../atoms/text";
import ProductPrice from "../../atoms/productPrice";
import ProductCartButton from "../productCartButton/ProductCartButton";
import useCart from "../../hooks/useCart";

const LargeProductView = React.memo(({ product = {} }) => {
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
});

const SmallProductView = React.memo(({ product = {}, className = "" }) => {
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
});

const ProductView = ({ className, type, product }) => {
  if (type === "large") return <LargeProductView product={product} className={className} />;
  if (type === "cart") return <SmallProductView product={product} className={className} />;
  else return null;
};

ProductView.propTypes = {
  className: Proptypes.string,
  type: Proptypes.string,
  product: Proptypes.object,
};

ProductView.defaultProps = {
  className: "",
  type: "large",
  product: {},
};

export default React.memo(ProductView);

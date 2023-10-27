import React from "react";
import VerticalWrapper from "../../atoms/verticalWrapper";
import Heading from "../../atoms/heading";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import Text from "../../atoms/text";
import ProductView from "../../molecules/productView/ProductView";
import useCart from "../../hooks/useCart";

export default function CartTopSection() {
  const { getItemCount, cart } = useCart();
  return (
    <VerticalWrapper className="bg-white flex-col p-3 rounded-lg">
      <Heading className="text-xl font-bold mb-5">Place Order</Heading>
      <HorizontalWrapper>
        <VerticalWrapper>
          <Text lightBold size="large">
            Delivery in 15 minutes
          </Text>
          <Text size="tiny" dim>
            {getItemCount()} {getItemCount() === 1 ? "item" : "items"}
          </Text>
        </VerticalWrapper>
      </HorizontalWrapper>
      {cart.map((product) => (
        <ProductView type="cart" product={product} />
      ))}
    </VerticalWrapper>
  );
}

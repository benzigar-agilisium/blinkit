import React from "react";
import VerticalWrapper from "../../atoms/verticalWrapper";
import Heading from "../../atoms/heading";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import Text from "../../atoms/text";
import ProductView from "../../molecules/productView/ProductView";
import useCart from "../../hooks/useCart";

const renderItemText = (items) => `${items} ${items === 1 ? "item" : "items"}`;

const RenderCart = React.memo(({ cart = [] }) => {
  return cart.map((product) => <ProductView type="cart" product={product} />);
});

const CartHeader = () => {
  const { getItemCount, cart } = useCart();

  return (
    <VerticalWrapper className="bg-white flex-col p-3 rounded-lg">
      <Heading className="lg:text-xl font-bold lg:mb-5">Place Order</Heading>
      <HorizontalWrapper>
        <VerticalWrapper>
          <Text lightBold size="tiny">
            Delivery in 15 minutes
          </Text>
          <Text size="tiny" dim>
            {renderItemText(getItemCount())}
          </Text>
        </VerticalWrapper>
      </HorizontalWrapper>
      <RenderCart cart={cart} />
    </VerticalWrapper>
  );
};

export default React.memo(CartHeader);

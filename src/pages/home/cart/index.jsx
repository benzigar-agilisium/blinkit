import React from "react";
import useCart from "../../../hooks/useCart";
import { BiRupee } from "react-icons/bi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProductImage from "../../../atoms/productImage";
import VerticalWrapper from "../../../atoms/verticalWrapper";
import Heading from "../../../atoms/heading";

import Container from "../../../atoms/container";
import ProductView from "../../../molecules/productView/ProductView";
import ProductPrice from "../../../atoms/productPrice";
import Text from "../../../atoms/text";
import HorizontalWrapper from "../../../atoms/horizontalWrapper";
import CartInfo from "../../../molecules/cartInfo/CartInfo";
import CartCheckButton from "../../../molecules/cartCheckButton";
import EmptyCart from "../../../atoms/emptyCart/EmptyCart";

export default function Cart() {
  const { getItemCount, cart, getTotalAmount, getActualTotalAmount } = useCart();
  return (
    <Container className="flex justify-center">
      <VerticalWrapper className="w-[800px]">
        {getItemCount() > 0 ? (
          <>
            <VerticalWrapper className="mt-5 flex-1 overflow-y-scroll">
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
              <VerticalWrapper className="text-xs bg-white mt-3 flex-col p-3 rounded-lg">
                <CartInfo heading="MRP" price={getActualTotalAmount()} />
                <CartInfo showRupees={false} heading="Delivery charge" greenColor price={"Free"} />
                <CartInfo heading="Product Discount" showMinus greenColor price={getActualTotalAmount()} />
                <CartInfo className="mt-5" bold heading="Grand total" price={getTotalAmount()} />
                <Text className="mt-4" size="tiny" dim>
                  Coupons are only applicable on the Blinkit app
                </Text>
              </VerticalWrapper>
            </VerticalWrapper>
            <CartCheckButton />
          </>
        ) : (
          <EmptyCart />
        )}
      </VerticalWrapper>
    </Container>
  );
}

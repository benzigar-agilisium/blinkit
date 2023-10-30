import React from "react";
import useCart from "../../../hooks/useCart";
import VerticalWrapper from "../../../atoms/verticalWrapper";

import Container from "../../../atoms/container";
import CartCheckoutButton from "../../../molecules/cartCheckOutButton";
import EmptyCartPlaceHolder from "../../../molecules/emptyCartPlaceholder";
import BillDetails from "../../../organisms/billDetails";
import CartTopSection from "../../../organisms/cartTopSection/CartTopSection";

export default function Cart() {
  const { getItemCount } = useCart();
  return (
    <Container className="flex justify-center">
      <VerticalWrapper className="w-[800px]">
        {getItemCount() > 0 ? (
          <>
            <VerticalWrapper className="mt-5 flex-1 overflow-y-scroll">
              <CartTopSection />
              <BillDetails />
            </VerticalWrapper>
            <CartCheckoutButton />
          </>
        ) : (
          <EmptyCartPlaceHolder />
        )}
      </VerticalWrapper>
    </Container>
  );
}

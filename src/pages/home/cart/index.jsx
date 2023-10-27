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
            <CartCheckButton />
          </>
        ) : (
          <EmptyCart />
        )}
      </VerticalWrapper>
    </Container>
  );
}

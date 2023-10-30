import React from "react";

// ATOMS
import Logo from "../../atoms/logo";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import Text from "../../atoms/text";
import VerticalWrapper from "../../atoms/verticalWrapper";

// MOLECULES
import HeaderDeliveryInfo from "../../molecules/headerDeliveryInfo";
import CategoryListForHeader from "../../molecules/categoryListForHeader";

import Cart from "../cart/Cart";

import items from "../../data/items.json";
import HeaderSearchBar from "../../atoms/headerSearchBar";

export default function Header() {
  return (
    <VerticalWrapper className="bg-white z-20 sticky top-0">
      <VerticalWrapper
        className="border-b-2"
        style={{
          borderWidth: 1,
        }}
      >
        <HorizontalWrapper align="center" className="container mx-auto">
          <Logo />
          <HeaderDeliveryInfo />
          <HeaderSearchBar />
          <Text className="px-14">Login</Text>
          <Cart />
        </HorizontalWrapper>
      </VerticalWrapper>
      <CategoryListForHeader items={items} />
    </VerticalWrapper>
  );
}

import React from "react";

// ATOMS
import Logo from "../../atoms/logo";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import Searchbar from "../../atoms/searchBar";
import Text from "../../atoms/text";

// MOLECULES
import DeliveryInfo from "../../molecules/deliveryInfo";
import CategoryListForHeader from "../../molecules/categoryListForHeader";

import Cart from "../../components/Cart";
import items from "../../data/items.json";
import VerticalWrapper from "../../atoms/verticalWrapper";

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
          <DeliveryInfo />
          <Searchbar />
          <Text className="px-14">Login</Text>
          <Cart />
        </HorizontalWrapper>
      </VerticalWrapper>
      <CategoryListForHeader items={items} />
    </VerticalWrapper>
  );
}

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

export default function Header() {
  return (
    <div className="bg-white z-20 sticky top-0">
      <div
        className="border-b-2"
        style={{
          borderWidth: 1,
        }}
      >
        <HorizontalWrapper className="container mx-auto">
          <Logo />
          <DeliveryInfo />
          <Searchbar />
          <Text className="px-14">Login</Text>
          <Cart />
        </HorizontalWrapper>
      </div>
      <CategoryListForHeader items={items} />
    </div>
  );
}

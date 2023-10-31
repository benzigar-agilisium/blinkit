import React from "react";
import VerticalWrapper from "../../atoms/verticalWrapper";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import DisplayInfo from "../../molecules/headerDeliveryInfo";
import HeaderSearchBar from "../../molecules/headerSearchBar";
import Logo from "../../atoms/logo";
import MobileCartButton from "../../atoms/mobileCartButton/MobileCartButton";

export default function MobileHeaderView() {
  return (
    <VerticalWrapper className="z-30 lg:hidden px-3 pb-3">
      <HorizontalWrapper align="center">
        <Logo type="small" />
        <DisplayInfo />
      </HorizontalWrapper>
      <HeaderSearchBar sticky={true} />
      <MobileCartButton />
    </VerticalWrapper>
  );
}

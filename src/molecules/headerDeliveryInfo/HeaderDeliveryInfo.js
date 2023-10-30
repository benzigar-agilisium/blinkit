import React from "react";

import Heading from "../../atoms/heading";
import SubText from "../../atoms/subText";
import VerticalWrapper from "../../atoms/verticalWrapper";

export default function HeaderDeliveryInfo() {
  return (
    <VerticalWrapper className="lg:ml-14">
      <Heading className="hidden md:flex">Delivery in 15 minutes</Heading>
      <SubText>Bengaluru, Karnataka, India</SubText>
    </VerticalWrapper>
  );
}

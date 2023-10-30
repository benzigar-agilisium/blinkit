import React from "react";

import Heading from "../../atoms/heading";
import SubText from "../../atoms/subText";
import VerticalWrapper from "../../atoms/verticalWrapper";

export default function HeaderDeliveryInfo() {
  return (
    <VerticalWrapper className="ml-14">
      <Heading>Delivery in 15 minutes</Heading>
      <SubText>Bengaluru, Karnataka, India</SubText>
    </VerticalWrapper>
  );
}

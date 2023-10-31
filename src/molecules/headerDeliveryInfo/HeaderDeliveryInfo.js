import React from "react";

import Heading from "../../atoms/heading";
import SubText from "../../atoms/subText";
import Text from "../../atoms/text";
import VerticalWrapper from "../../atoms/verticalWrapper";

export default function HeaderDeliveryInfo() {
  return (
    <VerticalWrapper className="lg:ml-14">
      <Text bold className="">
        Delivery in 15 minutes
      </Text>
      <SubText>Bengaluru, Karnataka, India</SubText>
    </VerticalWrapper>
  );
}

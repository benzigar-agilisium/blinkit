import React from "react";
import Container from "../../atoms/container";

import { TbError404 } from "react-icons/tb";
import Text from "../../atoms/text";
import VerticalWrapper from "../../atoms/verticalWrapper";

export default function NotFound() {
  return (
    <Container>
      <VerticalWrapper className="my-20 justify-center items-center">
        <TbError404 className="animate-pulse text-9xl" />
        <Text dim size="tiny">
          Not found
        </Text>
      </VerticalWrapper>
    </Container>
  );
}

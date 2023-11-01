import React from "react";

import Text from "../../atoms/text";
import HorizontalWrapper from "../../atoms/horizontalWrapper";

export default function FooterDownloadBanner() {
  return (
    <HorizontalWrapper className="my-5 lg:m-0 lg:w-1/3">
      <Text className="lg:mx-4 font-bold">Download App</Text>
      <img className="h-6 mx-1 lg:mx-4" src="https://blinkit.com/d61019073b700ca49d22.png" alt="" />
      <img className="h-6 mx-1 lg:mx-4" src="https://blinkit.com/8ed033800ea38f24c4f0.png" alt="" />
    </HorizontalWrapper>
  );
}

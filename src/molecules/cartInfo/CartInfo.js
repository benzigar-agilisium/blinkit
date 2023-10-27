import React from "react";
import ProductPrice from "../../atoms/productPrice";
import Text from "../../atoms/text";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import classNames from "classnames";

export default function CartInfo({
  bold = false,
  greenColor = false,
  heading = "",
  className = "",
  price = "Free",
  showRupees = true,
  showMinus = false,
}) {
  return (
    <HorizontalWrapper justify="space-between" className={classNames(`mt-2 `, { "text-zinc-500": bold === false }, className)}>
      <Text bold={bold} size={bold ? "tiny" : "large"}>
        {heading}
      </Text>
      {showRupees ? (
        <ProductPrice showMinus={showMinus} greenColor={greenColor} bold={bold} price={price} />
      ) : (
        <Text size="tiny" className={classNames({ "text-green-600": greenColor })}>
          {price}
        </Text>
      )}
    </HorizontalWrapper>
  );
}

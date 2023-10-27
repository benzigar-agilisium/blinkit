import React from "react";
import VerticalWrapper from "../../atoms/verticalWrapper";
import CartInfo from "../../molecules/cartInfo/CartInfo";
import Text from "../../atoms/text";
import useCart from "../../hooks/useCart";
import classNames from "classnames";

export default function BillDetails({ className = "" }) {
  const { getActualTotalAmount, getProductDiscount, getTotalAmount } = useCart();
  return (
    <VerticalWrapper className={classNames(`text-xs bg-white mt-3 flex-col p-3 rounded-lg`, className)}>
      <CartInfo heading="MRP" price={getActualTotalAmount()} />
      <CartInfo showRupees={false} heading="Delivery charge" greenColor price={"Free"} />
      {getProductDiscount() ? <CartInfo heading="Product Discount" showMinus greenColor price={getProductDiscount()} /> : null}
      <CartInfo className="mt-5" bold heading="Grand total" price={getTotalAmount()} />
      <Text className="mt-4" size="tiny" dim>
        Coupons are only applicable on the Blinkit app
      </Text>
    </VerticalWrapper>
  );
}

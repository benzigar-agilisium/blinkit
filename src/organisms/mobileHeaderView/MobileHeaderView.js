import React from "react";
import VerticalWrapper from "../../atoms/verticalWrapper";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import DisplayInfo from "../../molecules/headerDeliveryInfo";
import HeaderSearchBar from "../../molecules/headerSearchBar";
import Logo from "../../atoms/logo";
import MobileCartButton from "../../atoms/mobileCartButton/MobileCartButton";

import items from "../../data/items.json";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

const CategoryList = React.memo(() => {
  const params = useParams();

  return (
    <div className="md:hidden mb-3 w-full flex items-center overflow-x-scroll">
      {items.map((item) => (
        <Link
          to={"/cd/" + item.slug}
          className={classNames(
            "text-xs flex mx-3",
            { "opacity-50": params.id !== item.id && params.id !== item.slug },
            { "font-bold": params.id === item.id || params.id === item.slug }
          )}
        >
          <span className="whitespace-nowrap overflow-hidden text-overflow-ellipsis">{item.categoryName}</span>
        </Link>
      ))}
    </div>
  );
});

export default function MobileHeaderView() {
  return (
    <>
      <VerticalWrapper className="z-30 lg:hidden px-3 pb-3">
        <HorizontalWrapper align="center">
          <Logo type="small" />
          <DisplayInfo />
        </HorizontalWrapper>
        <HeaderSearchBar sticky={true} />
        <MobileCartButton />
      </VerticalWrapper>
      <CategoryList />
    </>
  );
}

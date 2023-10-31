import React from "react";
import VerticalWrapper from "../../atoms/verticalWrapper";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

const RenderCategoryList = React.memo(({ paramsId, items }) =>
  items.map((item) => (
    <Link
      replace
      to={"/cd/" + item.slug}
      className={classNames("px-4 hover:bg-zinc-100 py-4", {
        "text-black": item.id === paramsId || item.slug === paramsId,
        "font-bold": item.id === paramsId || item.slug === paramsId,
      })}
    >
      {item.categoryName}
    </Link>
  ))
);

export default function CategoryListForHeader({ small = false, items = {} }) {
  const params = useParams();

  return (
    <VerticalWrapper className={classNames("shadow-md text-zinc-500 text-sm z-10", { "overflow-x-scroll": small })}>
      <HorizontalWrapper justify={small ? "justify-start" : "center"} className="container mx-auto">
        <RenderCategoryList paramsId={params.id} items={items} />
      </HorizontalWrapper>
    </VerticalWrapper>
  );
}

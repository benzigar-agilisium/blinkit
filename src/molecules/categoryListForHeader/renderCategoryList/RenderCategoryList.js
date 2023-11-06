import React from "react";
import { Link } from "react-router-dom";
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

export default React.memo(RenderCategoryList);

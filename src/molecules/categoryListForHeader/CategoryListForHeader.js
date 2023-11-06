import React from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";

import VerticalWrapper from "../../atoms/verticalWrapper";
import HorizontalWrapper from "../../atoms/horizontalWrapper";

import RenderCategoryList from "./renderCategoryList";

export default function CategoryListForHeader({ small = false, items = [] }) {
  const params = useParams();

  return (
    <VerticalWrapper className={classNames("shadow-md text-zinc-500 text-sm z-10", { "overflow-x-scroll": small })}>
      <HorizontalWrapper justify={small ? "justify-start" : "center"} className="container mx-auto">
        <RenderCategoryList paramsId={params.id} items={items} />
      </HorizontalWrapper>
    </VerticalWrapper>
  );
}

CategoryListForHeader.propTypes = {
  small: PropTypes.bool,
  items: PropTypes.array,
};

CategoryListForHeader.defaultProps = {
  small: false,
  items: [],
};

import React from "react";
import VerticalWrapper from "../../atoms/verticalWrapper";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import Heading from "../../atoms/heading";
import Text from "../../atoms/text";
import Dropdown from "../../atoms/dropdown/Dropdown";

import styles from "./homeProductList.module.css";
import { dropDownOptions } from "./homeProductList.data";
import RenderProductList from "./renderProductList/RenderProductList";

import CONSTANTS from "./homeProductList.constants";

export default function HomeProductList({ items = [], selectedCategory = false }) {
  const [sortOrder, setSortOrder] = React.useState(CONSTANTS.NONE);
  const categoryItems = items?.find((e) => e.id === selectedCategory) ?? {};
  const updateSelectedItem = React.useCallback((e) => setSortOrder(e?.target?.value), [setSortOrder, sortOrder]);

  return (
    <VerticalWrapper className="overflow-y-scroll flex-1 bg-zinc-100">
      {/* TOP SECTION  */}
      <HorizontalWrapper align="center" justify="space-between" className={styles.topSection}>
        <Heading size="medium">{categoryItems?.showText}</Heading>
        <HorizontalWrapper align="center" className="text-zinc-500 text-xs">
          <Text size="tiny">Sort by</Text>
          <Dropdown onChange={updateSelectedItem} selected={CONSTANTS.NONE} options={dropDownOptions} />
        </HorizontalWrapper>
      </HorizontalWrapper>
      {/* PRODUCT LIST  */}
      <HorizontalWrapper align="stretch" wrap={true} className="lg:p-2">
        <RenderProductList sortOrder={sortOrder} categoryItems={categoryItems?.products ?? []} />
      </HorizontalWrapper>
    </VerticalWrapper>
  );
}

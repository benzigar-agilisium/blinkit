import React from "react";

import items from "../../data/items.json";

import VerticalWrapper from "../../atoms/verticalWrapper";
import ProductCategoryWrapper from "../../atoms/productCategoryWrapper/ProductCategoryWrapper";

import HomeSideBar from "../../organisms/homeSideBar/HomeSideBar";
import HomeProductList from "../../organisms/homeProductList/HomeProductList";
import { useNavigate, useParams } from "react-router-dom";

export default function Products() {
  const params = useParams();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [itemsList, setItemsList] = React.useState(null);

  const setSelectedCategoryFromParams = () => {
    if (!params.id) return navigate("/404");
    const category = items.find((e) => e.id === params.id || e.slug === params.id);
    if (!category) return navigate("/404");
    setItemsList(category.items);
    setSelectedCategory(category?.items?.[0]?.id);
  };

  React.useEffect(() => {
    setSelectedCategoryFromParams();
  }, [params.id]);

  return selectedCategory ? (
    <VerticalWrapper className="container mx-auto px-10">
      <ProductCategoryWrapper>
        <HomeSideBar items={itemsList} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <HomeProductList items={itemsList} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </ProductCategoryWrapper>
    </VerticalWrapper>
  ) : null;
}

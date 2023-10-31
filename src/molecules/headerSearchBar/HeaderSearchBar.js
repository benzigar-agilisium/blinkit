import classNames from "classnames";
import React from "react";
import { BiSearch } from "react-icons/bi";

import ProductView from "../../molecules/productView";
import Text from "../../atoms/text";
import SearchEmptyPlaceholder from "../../atoms/serachEmptyPlaceholder";

import { getSearchResults } from "./headerSearchBar.data";
import { AiOutlineClose } from "react-icons/ai";
import useAction from "./headerSearchBar.actions";

// ATOMS
const RenderSearchList = React.memo(({ products = [] }) => (
  <div className="flex flex-wrap">
    {products?.map((product) => (
      <div className="flex flex-col p-1 w-1/2 xl:w-1/3">
        <ProductView product={product} />
      </div>
    ))}
  </div>
));

const RenderSearchResult = React.memo(({ searchText = "" }) => {
  const products = React.useCallback(() => getSearchResults(searchText), [searchText]);
  if (!searchText) return null;
  return (
    <div className="mt-2 bg-zinc-50 flex flex-col overflow-y-scroll absolute left-0 right-0 rounded-md shadow-xl top-[100%] h-[70vh] p-1 md:p-3">
      <Text className="ml-2 mb-2" bold size="large">
        Search Results for "{searchText}"
      </Text>
      {products().length > 0 ? <RenderSearchList products={products()} /> : <SearchEmptyPlaceholder />}
    </div>
  );
});

const RenderIcon = React.memo(({ searchText = "", clearSearch = () => {} }) => {
  if (searchText.length === 0) return <BiSearch className="text-2xl" />;
  else return <AiOutlineClose onClick={clearSearch} className="outline-pointer text-2xl" />;
});

const RenderSearchInput = React.memo(({ searchText, onChange = () => {} }) => (
  <input
    onChange={onChange}
    value={searchText}
    placeholder="Search..."
    type="text"
    className="bg-transparent pl-3 text-sm focus:outline-none flex-1"
  />
));

// MOLECULES
export default function HeaderSearchBar({ sticky = false, className = "" }) {
  const action = useAction();
  return (
    <div className={classNames("flex-1 lg:pl-5", { "sticky top-0": sticky }, className)}>
      <div className="z-50 relative bg-zinc-50 border-2 flex-1 flex border-zinc-100 py-3 px-3 rounded-lg items-center">
        <RenderIcon searchText={action.searchText} clearSearch={action.clearSearch} />
        <RenderSearchInput searchText={action.searchText} onChange={action.updateText} />
        <RenderSearchResult searchText={action.searchText} />
      </div>
    </div>
  );
}

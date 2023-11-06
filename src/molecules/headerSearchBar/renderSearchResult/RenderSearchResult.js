import React from "react";

import RenderSearchList from "../renderSearchList";

import SearchEmptyPlaceholder from "../../../atoms/serachEmptyPlaceholder";
import Text from "../../../atoms/text";

import { getSearchResults } from "../headerSearchBar.data";

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

export default React.memo(RenderSearchResult);

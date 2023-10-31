import React from "react";

export default function useAction() {
  const [searchText, setSearchText] = React.useState("");
  const updateText = React.useCallback((e) => setSearchText(e.target.value), [searchText]);

  const clearSearchOnEscapeClick = React.useCallback((e) => e.key === "Escape" && setSearchText(""), [searchText]);

  const clearSearch = React.useCallback(() => {
    setSearchText("");
  }, [searchText]);

  React.useEffect(() => {
    document.addEventListener("keydown", clearSearchOnEscapeClick);
    return () => document.removeEventListener("keydown", clearSearchOnEscapeClick);
  }, []);

  return {
    searchText,
    setSearchText,
    updateText,
    clearSearch,
  };
}

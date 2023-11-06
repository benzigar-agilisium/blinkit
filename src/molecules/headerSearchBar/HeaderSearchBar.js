import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";

import { BiSearch } from "react-icons/bi";

import { AiOutlineClose } from "react-icons/ai";

import useAction from "./headerSearchBar.actions";
import RenderSearchResult from "./renderSearchResult";

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

HeaderSearchBar.defaultProps = { sticky: false, className: "" };

HeaderSearchBar.propTypes = {
  sticky: PropTypes.bool,
  className: PropTypes.string,
};

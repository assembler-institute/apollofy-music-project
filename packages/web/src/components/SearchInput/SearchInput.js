/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { func } from "prop-types";

import SearchIcon from "../SmallIcons/SearchIcon/SearchIcon";
import "./SearchInput.scss";

function SearchInput({ onChange }) {
  return (
    <div role="search" className="SearchInput">
      <label className="SearchInput__input-label" htmlFor="searchInput">
        Search Input
      </label>
      <input
        id="searchInput"
        type="text"
        className="SearchInput__input"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        aria-label="Search Input"
        placeholder="Search artists or songs"
        maxLength="80"
      />
      <SearchIcon
        className="SearchInput__icon"
        color="black"
        handleClick={(e) => {}}
      />
    </div>
  );
}

SearchInput.propTypes = {
  onChange: func.isRequired,
};

export default SearchInput;

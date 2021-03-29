import React from "react";
import { string, func } from "prop-types";

function SearchIcon({ ariaLabel, handleClick, ...props }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      className="icon-btn__small"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width="20"
        height="20"
        fill="white"
        stroke="none"
        strokeWidth="1"
        aria-label={ariaLabel}
      >
        <path
          fillRule="evenodd"
          d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}

SearchIcon.propTypes = {
  ariaLabel: string,
  handleClick: func.isRequired,
};

SearchIcon.defaultProps = {
  ariaLabel: "mute",
};

export default SearchIcon;

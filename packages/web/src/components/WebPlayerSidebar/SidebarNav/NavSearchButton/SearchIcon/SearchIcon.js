import React from "react";
import { bool } from "prop-types";
import cn from "clsx";

function SearchIcon({ active, stroke }) {
  const svgClasses = cn({
    [`SidebarNav__btn-icon`]: true,
    [`SidebarNav__btn-icon--active`]: active,
    [`SidebarNav__btn-icon--stroke`]: active && stroke,
  });

  return (
    <span className="SidebarNav__btn-icon-wrapper">
      {active ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width="24"
          fill="currentColor"
          className={svgClasses}
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width="24"
          stroke="currentColor"
          className={svgClasses}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      )}
    </span>
  );
}

SearchIcon.propTypes = {
  active: bool,
  stroke: bool,
};

SearchIcon.defaultProps = {
  active: false,
  stroke: false,
};

export default SearchIcon;

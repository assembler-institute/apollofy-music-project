import React from "react";
import { bool } from "prop-types";
import cn from "clsx";

function LibraryIcon({ active, stroke }) {
  const classes = cn({
    [`SidebarNav__btn-icon`]: true,
    [`SidebarNav__btn-icon--active`]: active && !stroke,
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
          className={classes}
          aria-hidden
        >
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="24"
          className={classes}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      )}
    </span>
  );
}

LibraryIcon.propTypes = {
  active: bool,
  stroke: bool,
};

LibraryIcon.defaultProps = {
  active: true,
  stroke: false,
};

export default LibraryIcon;

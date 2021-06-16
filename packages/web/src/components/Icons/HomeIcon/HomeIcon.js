import React from "react";
import { bool } from "prop-types";
import cn from "clsx";

function HomeIcon({ active, stroke }) {
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
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width="24"
          stroke="currentColor"
          className={classes}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      )}
    </span>
  );
}

HomeIcon.propTypes = {
  active: bool,
  stroke: bool,
};

HomeIcon.defaultProps = {
  active: true,
  stroke: false,
};

export default HomeIcon;

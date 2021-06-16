import React from "react";
import { bool } from "prop-types";
import cn from "clsx";

function AddIcon({ active, stroke }) {
  const classes = cn({
    [`SidebarNav__btn-icon border-0`]: true,
    [`SidebarNav__btn-icon--active`]: active && !stroke,
    [`SidebarNav__btn-icon--stroke`]: active && stroke,
  });

  return (
    <span className="SidebarNav__btn-icon-wrapper">
      <svg
        className={classes}
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z" />
          </g>
        </g>
      </svg>
    </span>
  );
}

AddIcon.propTypes = {
  active: bool,
  stroke: bool,
};

AddIcon.defaultProps = {
  active: true,
  stroke: false,
};

export default AddIcon;

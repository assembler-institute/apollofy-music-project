import React from "react";
import { string, func } from "prop-types";
import cn from "clsx";

function ChevronRightIcon({ ariaLabel, orientation, handleClick, ...props }) {
  const svgClassNames = cn({
    [`transform`]: true,
    [`rotate-90`]: orientation === "south",
    [`rotate-180`]: orientation === "west",
    [`-rotate-90`]: orientation === "north",
    [`rotate-0`]: orientation === "east",
  });

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      className="icon-btn__small"
      {...props}
    >
      <svg
        className={svgClassNames}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width="20"
        height="20"
        fill="white"
        strokeWidth="1"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}

ChevronRightIcon.propTypes = {
  ariaLabel: string,
  orientation: string,
  handleClick: func.isRequired,
};

ChevronRightIcon.defaultProps = {
  ariaLabel: "open",
  orientation: "east",
};

export default ChevronRightIcon;

import React from "react";
import { func, string, arrayOf } from "prop-types";
import cn from "clsx";

function Close({ ariaLabel, color, classes, handleClick }) {
  const btnClassNames = cn(
    {
      [`hover:bg-opacity-50 hover:bg-${color}`]: color !== "",
      [`hover:bg-indigo-500`]: color === "",
      [`-mr-1 flex p-2 rounded-md focus:outline-none focus:ring-0 sm:-mr-2`]: true,
    },
    ...classes,
  );

  return (
    <button
      type="button"
      handleClick={handleClick}
      ariaLabel={ariaLabel}
      className={btnClassNames}
    >
      <span className="sr-only">Dismiss</span>
      <svg
        className="h-6 w-6 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}

Close.propTypes = {
  handleClick: func,
  ariaLabel: string,
  color: string,
  classes: arrayOf(string),
};

Close.defaultProps = {
  handleClick: () => {},
  ariaLabel: "click to close content",
  color: "",
  classes: [],
};

export default Close;

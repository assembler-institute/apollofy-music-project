import React from "react";
import { bool, func, string } from "prop-types";

function HeartIcon({ active, ariaLabel, handleClick, ...props }) {
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
        fill={active ? "white" : "none"}
        stroke={!active ? "white" : "none"}
        strokeWidth={!active ? "2" : "0"}
        aria-label={ariaLabel}
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}

HeartIcon.propTypes = {
  active: bool,
  ariaLabel: string,
  handleClick: func.isRequired,
};

HeartIcon.defaultProps = {
  active: false,
  ariaLabel: "save as favorite",
};

export default HeartIcon;

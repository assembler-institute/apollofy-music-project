import React from "react";
import { func, string } from "prop-types";

function RewindIcon({ ariaLabel, handleClick, ...props }) {
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
        <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
      </svg>
    </button>
  );
}

RewindIcon.propTypes = {
  ariaLabel: string,
  handleClick: func.isRequired,
};

RewindIcon.defaultProps = {
  ariaLabel: "play previous song",
};

export default RewindIcon;

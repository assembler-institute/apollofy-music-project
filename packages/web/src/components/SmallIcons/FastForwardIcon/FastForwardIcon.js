import React from "react";
import { func, string } from "prop-types";

function FastForwardIcon({ ariaLabel, handleClick, ...props }) {
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
        <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
      </svg>
    </button>
  );
}

FastForwardIcon.propTypes = {
  ariaLabel: string,
  handleClick: func.isRequired,
};

FastForwardIcon.defaultProps = {
  ariaLabel: "play next song",
};

export default FastForwardIcon;

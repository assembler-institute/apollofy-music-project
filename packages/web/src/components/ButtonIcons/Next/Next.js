import React from "react";
import { func } from "prop-types";

import ChevronRightIcon from "../../SmallIcons/ChevronRightIcon/ChevronRightIcon";

import "./Next.scss";

function Next({ handleClick, ...props }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="next"
      className="icon-btn__medium NextPrev"
      {...props}
    >
      <ChevronRightIcon
        ariaLabel="next-icon"
        orientation="east"
        onClick={handleClick}
      />
    </button>
  );
}

Next.propTypes = {
  handleClick: func.isRequired,
};

export default Next;

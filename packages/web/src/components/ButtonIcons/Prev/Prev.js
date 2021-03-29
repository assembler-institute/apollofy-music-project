import React from "react";
import { func } from "prop-types";

import ChevronRightIcon from "../../SmallIcons/ChevronRightIcon/ChevronRightIcon";

import "./Prev.scss";

function Prev({ handleClick, ...props }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="previous"
      className="icon-btn__medium NextPrev"
      {...props}
    >
      <ChevronRightIcon
        ariaLabel="previous-icon"
        orientation="west"
        onClick={handleClick}
      />
    </button>
  );
}

Prev.propTypes = {
  handleClick: func.isRequired,
};

export default Prev;

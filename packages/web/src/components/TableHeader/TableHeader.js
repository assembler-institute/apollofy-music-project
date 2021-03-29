import { bool } from "prop-types";
import React from "react";
import cn from "clsx";

import "./TableHeader.scss";

function TableHeader({ isExpanded }) {
  const wrapperClassNames = cn(
    "Header__Wrapper",
    isExpanded === true ? "ExpandedGrid" : "SimpleGrid",
  );

  return (
    <div className="Header">
      <div className={wrapperClassNames}>
        <div role="gridcell" className="Header__Leading">
          #
        </div>
        <div role="gridcell" className="Header__Title">
          Title
        </div>
        {isExpanded && (
          <div role="gridcell" className="Header__Param1">
            Plays
          </div>
        )}
        {isExpanded && (
          <div role="gridcell" className="Header__Param2">
            Album
          </div>
        )}
        <div role="gridcell" className="Header__Trailing">
          Duration
        </div>
      </div>
    </div>
  );
}

TableHeader.propTypes = {
  isExpanded: bool,
};

TableHeader.defaultProps = {
  isExpanded: false,
};

export default TableHeader;

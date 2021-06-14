import React from "react";
import { bool, node } from "prop-types";

import SearchIcon from "./SearchIcon";

function NavSearchButton({ children, active, ...props }) {
  return (
    <button type="button" className="SidebarNav__btn" {...props}>
      <SearchIcon active={active} />
      {children}
    </button>
  );
}

NavSearchButton.propTypes = {
  children: node.isRequired,
  active: bool,
};

NavSearchButton.defaultProps = {
  active: false,
};

export default NavSearchButton;

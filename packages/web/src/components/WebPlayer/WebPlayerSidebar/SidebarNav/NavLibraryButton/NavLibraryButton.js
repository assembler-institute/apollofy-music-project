import React from "react";
import { bool, node } from "prop-types";

import LibraryIcon from "./LibraryIcon";

function NavLibraryButton({ children, active, ...props }) {
  return (
    <button type="button" className="SidebarNav__btn" {...props}>
      <LibraryIcon active={active} />
      {children}
    </button>
  );
}

NavLibraryButton.propTypes = {
  children: node.isRequired,
  active: bool,
};

NavLibraryButton.defaultProps = {
  active: false,
};

export default NavLibraryButton;

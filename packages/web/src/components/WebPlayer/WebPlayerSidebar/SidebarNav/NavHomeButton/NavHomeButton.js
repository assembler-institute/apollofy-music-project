import React from "react";
import { bool, node } from "prop-types";

import HomeIcon from "./HomeIcon";

function NavHomeButton({ children, active, ...props }) {
  return (
    <button type="button" className="SidebarNav__btn" {...props}>
      <HomeIcon active={active} />
      {children}
    </button>
  );
}

NavHomeButton.propTypes = {
  children: node.isRequired,
  active: bool,
};

NavHomeButton.defaultProps = {
  active: false,
};

export default NavHomeButton;

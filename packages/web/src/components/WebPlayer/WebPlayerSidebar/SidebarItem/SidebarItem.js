import React from "react";
import { arrayOf, string, bool, node } from "prop-types";
import cn from "clsx";

import "./SidebarItem.scss";

function SidebarItem({ icon, children, active, classes, ...props }) {
  const itemStyle = cn("SidebarItem__btn", ...classes);

  const Icon = icon;
  return (
    <button type="button" className={itemStyle} {...props}>
      {icon && <Icon stroke />}
      {children}
    </button>
  );
}

SidebarItem.propTypes = {
  icon: node,
  children: node.isRequired,
  active: bool,
  classes: arrayOf(string),
};

SidebarItem.defaultProps = {
  icon: null,
  active: false,
  classes: [],
};

export default SidebarItem;

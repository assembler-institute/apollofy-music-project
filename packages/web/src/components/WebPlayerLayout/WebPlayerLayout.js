import React from "react";
import { node } from "prop-types";

import "./WebPlayerLayout.scss";

function WebPlayerLayout({ children }) {
  return <div className="WebPlayer">{children}</div>;
}

WebPlayerLayout.propTypes = {
  children: node.isRequired,
};

export default WebPlayerLayout;

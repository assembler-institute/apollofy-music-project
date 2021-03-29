import React from "react";
import { node } from "prop-types";

function HomeLayout({ children }) {
  return <div className="flex flex-row w-full h-screen">{children}</div>;
}

HomeLayout.propTypes = {
  children: node.isRequired,
};

export default HomeLayout;

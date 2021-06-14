import React from "react";
import { node } from "prop-types";

function HomeLayout({ children }) {
  return <div className="flex flex-col w-full h-full">{children}</div>;
}

HomeLayout.propTypes = {
  children: node.isRequired,
};

export default HomeLayout;

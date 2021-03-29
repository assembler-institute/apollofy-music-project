import React from "react";
import { node } from "prop-types";

function Main({ children }) {
  return <main className="w-full h-auto">{children}</main>;
}

Main.propTypes = {
  children: node.isRequired,
};

export default Main;

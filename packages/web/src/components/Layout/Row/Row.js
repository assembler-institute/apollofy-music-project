import React from "react";
import { node, number, bool, oneOf, string, arrayOf } from "prop-types";
import cn from "clsx";

function Row({
  children,
  fullHeight,
  wrap,
  align,
  justify,
  classes,
  ...props
}) {
  const rowStyle = cn(
    {
      [`w-full`]: true,
      [`h-full`]: fullHeight,
      [`flex flex-row flex-${wrap}`]: true,
      [`items-${align} justify-${justify}`]: true,
    },
    ...classes,
  );
  return (
    <div {...props} className={rowStyle}>
      {children}
    </div>
  );
}

Row.propTypes = {
  fullHeight: bool,
  children: node.isRequired,
  wrap: oneOf(["wrap", "wrap-reverse", "nowrap"]),
  align: oneOf(["start", "end", "center", "stretch", "baseline"]),
  justify: oneOf(["start", "end", "center", "between", "around", "evenly"]),
  classes: arrayOf(string),
};

Row.defaultProps = {
  fullHeight: false,
  wrap: null,
  align: "start",
  justify: "start",
  classes: [],
};

export default Row;

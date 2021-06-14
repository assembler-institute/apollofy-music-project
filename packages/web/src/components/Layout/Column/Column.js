import React from "react";
import { node, bool, number, oneOf, string, arrayOf } from "prop-types";
import cn from "clsx";

function Column({
  children,
  fullWidth,
  wrap,
  align,
  justify,
  classes,
  ...props
}) {
  const columnStyle = cn(
    {
      [`h-full`]: true,
      [`w-full`]: fullWidth,
      [`flex flex-col`]: true,
      [`flex-${wrap}`]: wrap,
      [`items-${align} justify-${justify}`]: true,
    },
    ...classes,
  );
  return (
    <div {...props} className={columnStyle}>
      {children}
    </div>
  );
}

Column.propTypes = {
  children: node.isRequired,
  fullWidth: bool,
  wrap: oneOf(["wrap", "wrap-reverse", "nowrap"]),
  align: oneOf(["start", "end", "center", "stretch", "baseline"]),
  justify: oneOf(["start", "end", "center", "between", "around", "evenly"]),
  classes: arrayOf(string),
};

Column.defaultProps = {
  fullWidth: false,
  wrap: null,
  align: "start",
  justify: "start",
  classes: [],
};

export default Column;

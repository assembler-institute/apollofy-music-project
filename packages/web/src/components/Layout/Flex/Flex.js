import React from "react";
import { node, string, arrayOf, number, oneOf } from "prop-types";
import cn from "clsx";

function Flex({
  direction,
  wrap,
  grow,
  shrink,
  align,
  justify,
  children,
  classes,
  ...props
}) {
  const flexStyle = cn(
    {
      [`w-full h-full`]: true,
      [`flex flex-${direction} flex-${wrap}`]: true,
      [`items-${align} justify-${justify}`]: align && justify,
      [`rounded-md`]: true,
      [`flex-grow-${grow}`]: true,
      [`flex-shrink-${shrink}`]: true,
    },
    ...classes,
  );
  return (
    <div {...props} className={flexStyle}>
      {children}
    </div>
  );
}

Flex.propTypes = {
  direction: oneOf(["row", "col"]),
  wrap: oneOf(["wrap", "wrap-reverse", "nowrap"]),
  grow: number,
  shrink: number,
  align: oneOf(["start", "end", "center", "stretch", "baseline"]),
  justify: oneOf(["start", "end", "center", "between", "around", "evenly"]),
  classes: arrayOf(string),
  children: node.isRequired,
};

Flex.defaultProps = {
  direction: "row",
  wrap: "wrap",
  align: null,
  justify: null,
  grow: 0,
  shrink: 1,
  classes: [],
};

export default Flex;

import React from "react";
import { node, string, arrayOf, number, oneOf } from "prop-types";
import cn from "clsx";

function Flex({
  width,
  height,
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
      [`w-auto h-auto`]: !width && !height,
      [`w-${width} h-full`]: width && !height,
      [`w-full h-${height}`]: !width && height,
      [`w-${width} h-${height}`]: width && height,
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
  width: string,
  height: string,
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
  width: null,
  height: null,
  direction: "row",
  wrap: "wrap",
  align: null,
  justify: null,
  grow: 0,
  shrink: 1,
  classes: [],
};

export default Flex;

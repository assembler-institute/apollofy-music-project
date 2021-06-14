import React from "react";
import { node, string, arrayOf, number, oneOf } from "prop-types";
import cn from "clsx";

function Grid({
  cols,
  rows,
  flow,
  gap,
  gapx,
  gapy,
  align,
  justify,
  children,
  classes,
  ...props
}) {
  const gridStyle = cn(
    {
      [`w-full h-full`]: true,
      [`grid grid-cols-${cols} grid-rows-${rows}`]: true,
      [`grid-flow-${flow}`]: true,
      [`gap-${gap}`]: gap,
      [`gap-x-${gapx}`]: gapx,
      [`gap-y-${gapy}`]: gapy,
      [`items-${align} justify-${justify}`]: true,
      [`rounded-md`]: true,
    },
    ...classes,
  );
  return (
    <div {...props} className={gridStyle}>
      {children}
    </div>
  );
}

Grid.propTypes = {
  cols: number,
  rows: number,
  flow: oneOf(["row", "row-dense", "col", "col-dense"]),
  gap: string,
  gapx: string,
  gapy: string,
  align: oneOf(["start", "end", "center", "stretch", "baseline"]),
  justify: oneOf(["start", "end", "center", "between", "around", "evenly"]),
  classes: arrayOf(string),
  children: node.isRequired,
};

Grid.defaultProps = {
  cols: 1,
  rows: 1,
  flow: "row",
  gap: "1",
  gapx: null,
  gapy: null,
  align: "start",
  justify: "start",
  classes: [],
};

export default Grid;

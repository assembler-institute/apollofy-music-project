import React from "react";
import { node, bool, number, string, arrayOf, oneOf } from "prop-types";
import cn from "clsx";

function Container({
  bg,
  fullSize,
  width,
  height,
  padding,
  margin,
  roundedBorders,
  grow,
  shrink,
  htmlTag,
  children,
  classes,
  ...props
}) {
  const containerStyle = cn(
    {
      [`w-auto h-auto`]: width === null && height === null,
      [`h-full`]: width && height === null,
      [`w-full`]: width === null && height,
      [`w-${width}`]: width,
      [`h-${height}`]: height,
      [`w-full h-full`]: fullSize,
      [`m-${margin}`]: margin,
      [`p-${padding}`]: padding,
      [`bg-${bg}`]: true,
      [`flex-grow-${grow}`]: true,
      [`flex-shrink-${shrink}`]: true,
      [`rounded-md`]: roundedBorders,
    },
    ...classes,
  );

  return (
    <>
      {htmlTag === "div" && (
        <div {...props} className={containerStyle}>
          {children}
        </div>
      )}
      {htmlTag === "table" && (
        <table {...props} className={containerStyle}>
          {children}
        </table>
      )}
      {htmlTag === "tableHead" && (
        <thead {...props} className={containerStyle}>
          {children}
        </thead>
      )}
    </>
  );
}

Container.propTypes = {
  bg: string,
  fullSize: bool,
  width: string,
  height: string,
  padding: string,
  margin: string,
  roundedBorders: bool,
  grow: number,
  shrink: number,
  htmlTag: string,
  classes: arrayOf(string),
  children: node.isRequired,
};

Container.defaultProps = {
  bg: "transparent",
  fullSize: false,
  width: null,
  height: null,
  padding: "0",
  margin: "0",
  roundedBorders: false,
  grow: 0,
  shrink: 1,
  htmlTag: "div",
  classes: [],
};

export default Container;

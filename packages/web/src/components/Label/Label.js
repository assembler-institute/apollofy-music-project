import React from "react";
import { string, arrayOf, node } from "prop-types";
import cn from "clsx";

import "./Label.scss";

function Label({ classes, htmlFor, children, ...props }) {
  const classNames = cn(
    {
      [`form-label`]: true,
    },
    ...classes,
  );

  return (
    <label className={classNames} htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
}

Label.propTypes = {
  children: node.isRequired,
  htmlFor: string.isRequired,
  classes: arrayOf(string),
};

Label.defaultProps = {
  classes: [],
};

export default Label;

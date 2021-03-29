import React from "react";
import { string, func, bool, arrayOf } from "prop-types";
import cn from "clsx";

import "./Checkbox.scss";
import Label from "../Label/Label";

function Checkbox({ id, value, checked, onChange, classes, ...props }) {
  const classNames = cn(
    {
      [`border-radius`]: true,
      [`form-checkbox`]: true,
    },
    ...classes,
  );

  return (
    <Label htmlFor={id} classes={["flex", "mb-0"]}>
      <input
        id={id}
        type="checkbox"
        className={classNames}
        onChange={onChange}
        {...props}
      />
      Do you accept this?
    </Label>
  );
}

Checkbox.propTypes = {
  id: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  checked: bool.isRequired,
  classes: arrayOf(string),
};

Checkbox.defaultProps = {
  classes: [],
};

export default Checkbox;

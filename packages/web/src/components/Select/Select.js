import React from "react";
import { string, func, arrayOf, shape } from "prop-types";
import cn from "clsx";

import "./Select.scss";

function Select({ id, options, handleChange, classes, ...props }) {
  const classNames = cn(
    {
      [`border-radius`]: true,
      [`form-select`]: true,
    },
    ...classes,
  );

  return (
    <select id={id} className={classNames} onBlur={handleChange} {...props}>
      {options.map((opt) => (
        <option key={opt.id}>{opt.option}</option>
      ))}
    </select>
  );
}

Select.propTypes = {
  id: string.isRequired,
  handleChange: func.isRequired,
  options: arrayOf(
    shape(
      {
        id: string.isRequired,
        option: string.isRequired,
      }.isRequired,
    ),
  ).isRequired,
  classes: arrayOf(string),
};

Select.defaultProps = {
  classes: [],
};

export default Select;

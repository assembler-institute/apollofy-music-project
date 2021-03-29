import React from "react";
import { string, node, func, oneOf, arrayOf } from "prop-types";
import cn from "clsx";

import Close from "../ButtonIcons/Close/Close";

import "./Alert.scss";

function Alert({ type, leadingIcon, handleClick, classes, children }) {
  const alertTypeClassNames = cn(
    {
      [`bg-opacity-90`]: true,
      [`bg-${type} border-${type}`]: true,
    },
    "Alert",
    ...classes,
  );

  return (
    <div className={alertTypeClassNames}>
      <div className="Alert__wrapper">
        <div className="Alert_leading">{leadingIcon}</div>
        <div className="Alert__content">
          <p className="Alert__title">{children}</p>
        </div>
        <div className="Alert__trailing">
          <Close handleClick={handleClick} color={type} />
        </div>
      </div>
    </div>
  );
}

Alert.propTypes = {
  type: oneOf(["primary", "success", "error", "warning", "info", "dark"]),
  children: node,
  leadingIcon: node,
  classes: arrayOf(string),
  handleClick: func,
};

Alert.defaultProps = {
  type: "primary",
  children: "",
  leadingIcon: "",
  classes: [],
  handleClick: () => {},
};

export default Alert;

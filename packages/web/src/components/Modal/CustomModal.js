import React, { useState } from "react";
import Modal from "react-modal";
import { node, func, bool, string, arrayOf } from "prop-types";
import cn from "clsx";

import Button from "../Button";

import "./CustomModal.scss";

Modal.setAppElement("#root");

function CustomModal({
  title,
  isOpen,
  onClose,
  darkMode,
  classes,
  children,
  ...props
}) {
  const titleStyle = cn(
    {
      [`text-white`]: darkMode,
    },
    "Modal__title",
  );
  return (
    <Modal
      className="Modal"
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="Overlay"
    >
      <div className="Modal__content">
        <div className="Modal__header">
          {title && <h1 className={titleStyle}>{title}</h1>}
          <Button handleClick={onClose}>Close</Button>
        </div>
        <div className="Modal__body">{children}</div>
      </div>
    </Modal>
  );
}

CustomModal.propTypes = {
  title: string,
  isOpen: bool,
  onClose: func.isRequired,
  darkMode: bool,
  classes: arrayOf(string),
  children: node.isRequired,
};

CustomModal.defaultProps = {
  title: null,
  isOpen: false,
  darkMode: false,
  classes: [],
};

export default CustomModal;

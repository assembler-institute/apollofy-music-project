import React, { useState } from "react";
import { string } from "prop-types";

import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";
import ChevronRightIcon from "../SmallIcons/ChevronRightIcon/ChevronRightIcon";
import "./Dropdown.scss";

function Dropdown({ thumbnail, username }) {
  const [expanded, setExpanded] = useState(false);

  function updateMenuState() {
    setExpanded(!expanded);
  }

  return (
    <Menu>
      <MenuButton className="Dropdown__wrapper" onClick={updateMenuState}>
        <figure className="Dropdown__leading">
          {thumbnail !== "" ? (
            <img className="Dropdown__leading-icon" src={thumbnail} alt="" />
          ) : (
            <img className="Dropdown__leading-icon" src="" alt="" />
          )}
        </figure>
        <span className="Dropdown__title">{username}</span>
        {expanded ? (
          <ChevronRightIcon
            className="Dropdown__trailing"
            orientation="north"
            handleClick={() => {}}
          />
        ) : (
          <ChevronRightIcon
            className="Dropdown__trailing"
            orientation="south"
            handleClick={() => {}}
          />
        )}
      </MenuButton>
      <MenuList className="Dropdown__list">
        <MenuItem className="Dropdown__item" onSelect={() => {}}>
          Cuenta
        </MenuItem>
        <MenuItem className="Dropdown__item" onSelect={() => {}}>
          Perfil
        </MenuItem>
        <MenuItem className="Dropdown__item" onSelect={() => {}}>
          Cerrar Sesion
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

Dropdown.propTypes = {
  username: string,
  thumbnail: string,
};

Dropdown.defaultProps = {
  username: undefined,
  thumbnail: "",
};

export default Dropdown;

import React from "react";
import { Link } from "react-router-dom";

import "./SidebarNav.scss";

import Logo from "../../../Logo/Logo";
import NavHomeButton from "./NavHomeButton";
import NavSearchButton from "./NavSearchButton";
import NavLibraryButton from "./NavLibraryButton";
import * as ROUTES from "../../../../routes";

function SidebarNav() {
  return (
    <nav className="SidebarNav">
      <Link to={ROUTES.HOME}>
        <Logo aria-label="app logo" />
      </Link>
      <ul className="SidebarNav__list">
        <li className="SidebarNav__list-item" aria-label="home">
          <Link to={ROUTES.WEB_PLAYER_HOME}>
            <NavHomeButton>Home</NavHomeButton>
          </Link>
        </li>
        <li className="SidebarNav__list-item" aria-label="search">
          <Link to={ROUTES.WEB_PLAYER_SEARCH}>
            <NavSearchButton>Search</NavSearchButton>
          </Link>
        </li>
        <li className="SidebarNav__list-item" aria-label="your library">
          <Link to={ROUTES.WEB_PLAYER_LIBRARY}>
            <NavLibraryButton>Your library</NavLibraryButton>
          </Link>
        </li>
        <li className="SidebarNav__list-item" aria-label="statistics">
          <Link to={ROUTES.WEB_PLAYER_STATS}>
            <NavLibraryButton>Statistics</NavLibraryButton>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SidebarNav;

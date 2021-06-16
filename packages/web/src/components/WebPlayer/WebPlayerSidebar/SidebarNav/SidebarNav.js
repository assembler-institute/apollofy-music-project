import React from "react";
import { Link } from "react-router-dom";

import "./SidebarNav.scss";

import Logo from "../../../Logo/Logo";
import SidebarItem from "../SidebarItem";
import { HomeIcon, LibraryIcon, SearchIcon } from "../../../Icons";
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
            <SidebarItem icon={HomeIcon}>Home</SidebarItem>
          </Link>
        </li>
        <li className="SidebarNav__list-item" aria-label="search">
          <Link to={ROUTES.WEB_PLAYER_SEARCH}>
            <SidebarItem icon={SearchIcon}>Search</SidebarItem>
          </Link>
        </li>
        <li className="SidebarNav__list-item" aria-label="your library">
          <Link to={ROUTES.WEB_PLAYER_LIBRARY}>
            <SidebarItem icon={LibraryIcon}>Your library</SidebarItem>
          </Link>
        </li>
        <li className="SidebarNav__list-item" aria-label="statistics">
          <Link to={ROUTES.WEB_PLAYER_STATS}>
            <SidebarItem icon={LibraryIcon}>Statistics</SidebarItem>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SidebarNav;

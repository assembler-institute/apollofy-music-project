import React from "react";
import { string, oneOf } from "prop-types";
import cn from "clsx";

import "./WebPlayerTopbar.scss";

import Button from "../../Button/Button";
import Next from "../../ButtonIcons/Next/Next";
import Prev from "../../ButtonIcons/Prev/Prev";
import SearchInput from "../../SearchInput/SearchInput";
import Dropdown from "../../Dropdown/Dropdown";

function WebPlayerTopbar({ username, thumbnail, extra, selected }) {
  const playlistsClassNames = cn({
    [`WebPlayerTopbar__content-item`]: true,
    [`WebPlayerTopbar__content-item--selected`]: selected === "playlists",
  });

  const artistsClassNames = cn({
    [`WebPlayerTopbar__content-item`]: true,
    [`WebPlayerTopbar__content-item--selected`]: selected === "artists",
  });

  return (
    <header className="WebPlayerTopbar" aria-label="Top bar and user menu">
      <nav className="WebPlayerTopbar__wrapper">
        <div className="WebPlayerTopbar__controls">
          <div className="mr-4">
            <Prev handleClick={() => {}} />
          </div>
          <div className="mr-4">
            <Next handleClick={() => {}} />
          </div>
        </div>

        <div className="WebPlayerTopbar__content">
          {extra === "search" && (
            <div className="WebPlayerTopbar__search">
              <SearchInput onChange={() => {}} />
            </div>
          )}
          {extra === "library" && (
            <div className="WebPlayerTopbar__content-wrapper">
              <ul className="WebPlayerTopbar__content-list">
                <li className={playlistsClassNames}>
                  <a href="/">Playlists</a>
                </li>
                <li className={artistsClassNames}>
                  <a href="/">Artistas</a>
                </li>
              </ul>
            </div>
          )}
        </div>
        {username === undefined ? (
          <div className="WebPlayerTopbar__access">
            <Button
              type="secondary"
              classes={[`mb-0`, `bg-transparent`]}
              handleClick={() => {}}
            >
              Registrarse
            </Button>
            <Button type="primary" classes={[`mb-0`]} handleClick={() => {}}>
              Iniciar Sesión
            </Button>
          </div>
        ) : (
          <div className="WebPlayerTopbar__options">
            <Dropdown username={username} thumbnail={thumbnail} />
          </div>
        )}
      </nav>
    </header>
  );
}

WebPlayerTopbar.propTypes = {
  username: string,
  thumbnail: string,
  extra: oneOf(["search", "library"]),
  selected: oneOf(["playlists", "artists"]),
};

WebPlayerTopbar.defaultProps = {
  username: undefined,
  thumbnail: "",
  extra: undefined,
  selected: "playlists",
};

export default WebPlayerTopbar;

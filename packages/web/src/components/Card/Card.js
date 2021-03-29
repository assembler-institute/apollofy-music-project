import React from "react";
import { string, func, oneOf } from "prop-types";
import cn from "clsx";

import "../../styles/tailwind.css";
import "./Card.scss";

import Play from "../ButtonIcons/Play/Play";

function Card({ title, subtitle, thumbnail, infoType, handleClick, ...props }) {
  const imgClassNames = cn(
    {
      [`rounded-sm`]: infoType === "playlist",
      [`rounded-full`]: infoType === "user",
    },
    "Card__img",
  );

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={handleClick}
      onClick={handleClick}
      className="Card"
    >
      <div className="Card__wrapper">
        <div className="Card__header">
          <div className="Card__img-wrapper">
            <img className={imgClassNames} src={thumbnail} alt={title} />
          </div>
          <div className="Card__btn-wrapper">
            <Play playing={1 < 2} handleClick={() => {}} />
          </div>
        </div>
        <div className="Card__content">
          <div className="inline-block w-full overflow-hidden">
            <p className="Card__title">{title}</p>
          </div>
          <p className="mt-0.5 overflow-hidden">{subtitle}</p>
        </div>
        <div className="Card__overlap" />
      </div>
    </div>
  );
}

Card.propTypes = {
  title: string.isRequired,
  subtitle: string,
  thumbnail: string,
  handleClick: func.isRequired,
  infoType: oneOf(["user", "playlist"]),
};

Card.defaultProps = {
  subtitle: "",
  thumbnail: "",
  infoType: "user",
};

export default Card;

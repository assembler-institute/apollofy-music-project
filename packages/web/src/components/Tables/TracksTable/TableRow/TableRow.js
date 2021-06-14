import React from "react";
import { string, number, oneOf, shape, func } from "prop-types";
import cn from "clsx";

import { formatDuration } from "../../../../utils/utils";

import PlayButton from "../../../ButtonIcons/Play/Play";
import HeartIcon from "../../../SmallIcons/HeartIcon/HeartIcon";
import DotsIcon from "../../../SmallIcons/DotsIcon/DotsIcon";

import "./TableRow.scss";

function TableRow({
  key,
  index,
  item: { title, owner, duration, likes, plays, thumbnail } = {},
  parentName,
  type,
  onClick,
}) {
  const contentWrapperClassNames = cn(
    "TableRow__Wrapper",
    type === "list" ? "SimpleGrid" : "ExpandedGrid",
  );

  // eslint-disable-next-line no-console
  console.log("\n");
  // eslint-disable-next-line no-console
  console.log(title, owner, duration, likes, plays, thumbnail);
  // eslint-disable-next-line no-console
  console.log("\n");
  return (
    <div
      id={key}
      role="button"
      className="TableRow"
      onDoubleClick={onClick}
      tabIndex={0}
      onKeyDown={onClick}
    >
      <div className={contentWrapperClassNames}>
        <div role="gridcell" className="TableRow__Leading">
          <div className="Leading__Wrapper">
            <span className="Leading__Index">{index}</span>
            <div className="Leading__BtnWrapper">
              <PlayButton handleClick={() => {}} />
            </div>
          </div>
        </div>
        <div role="gridcell" className="TableRow__Title">
          <div className="Title__ImgWrapper">
            <img
              className="Title__Img"
              loading="eager"
              alt=""
              src={thumbnail}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-white">{title}</div>
            {owner && (
              <div className="text-sm text-gray-500">{owner.login}</div>
            )}
          </div>
        </div>
        {type !== "list" && (
          <div role="gridcell" className="flex items-center">
            <div className="text-sm font-medium text-gray-300">{plays}</div>
          </div>
        )}
        {type !== "list" && (
          <div role="gridcell" className="flex items-center">
            <a className="text-sm font-medium text-gray-300" href="/">
              {parentName}
            </a>
          </div>
        )}
        <div role="gridcell" className="TableRow__Trailing">
          <HeartIcon className="Trailing__Left" handleClick={() => {}} />
          <span>{formatDuration(duration)}</span>
          <DotsIcon className="Trailing__Right" handleClick={() => {}} />
        </div>
      </div>
    </div>
  );
}

TableRow.propTypes = {
  key: string.isRequired,
  index: number,
  item: shape({
    name: string,
    owner: shape({
      login: string,
    }),
    duration: number,
    likes: number,
    plays: number,
    thumbnail: string,
  }),
  parentName: string,
  type: oneOf(["list", "playlist", "album"]),
  onClick: func.isRequired,
};

TableRow.defaultProps = {
  index: 0,
  item: {
    name: "Song title",
    owner: shape({
      login: "admin",
    }),
    duration: 192,
    likes: 1000,
    plays: 230,
    thumbnail:
      "https://pub-static.haozhaopian.net/assets/projects/pages/fd8f9de0-542d-11e9-aba6-89ce5f4d90e4_446a405e-00a9-41e0-90b0-1926713298ff_thumb.jpg",
  },
  parentName: "80's music",
  type: "list",
};

export default TableRow;

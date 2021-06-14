import React from "react";
import { string, number, oneOf, shape, arrayOf, func, bool } from "prop-types";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function TracksTable({
  type,
  headers,
  tracks,
  showIndex,
  isExpanded,
  handleClick,
}) {
  // eslint-disable-next-line no-console
  console.log("TRACKS RECEIVED");
  // eslint-disable-next-line no-console
  console.log(tracks);
  return (
    <div className="Table__Wrapper">
      <div className="Table__Header">
        <TableHeader isExpanded={type !== "list"} />
      </div>
      <div className="">
        {tracks.map((item, i) => {
          return (
            <TableRow
              key={item.id}
              onClick={handleClick}
              index={i}
              item={item}
              type={type}
              parentName="Original Play"
            />
          );
        })}
      </div>
    </div>
  );
}

TracksTable.propTypes = {
  type: oneOf(["list", "playlist", "album"]),
  headers: arrayOf(string),
  showIndex: bool,
  isExpanded: bool,
  tracks: arrayOf(
    shape({
      id: number,
      name: string,
      owner: shape({
        login: string,
      }),
      duration: number,
      likes: number,
      plays: number,
      thumbnail: string,
    }),
  ),
  handleClick: func,
};

TracksTable.defaultProps = {
  type: "list",
  headers: [],
  tracks: [],
  showIndex: false,
  isExpanded: false,
  handleClick: () => {},
};

export default TracksTable;

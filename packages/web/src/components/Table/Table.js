import React from "react";
import { string, number, oneOf, shape, arrayOf, func } from "prop-types";

import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";
import "./Table.scss";

function Table({ type, items, handleClick }) {
  return (
    <div className="Table__Wrapper">
      <div className="Table__Header">
        <TableHeader isExpanded={type !== "list"} />
      </div>
      <div className="">
        {items.map((item, i) => {
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

Table.propTypes = {
  type: oneOf(["list", "playlist", "album"]),
  items: arrayOf(
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

Table.defaultProps = {
  type: "list",
  items: [],
  handleClick: () => {},
};

export default Table;

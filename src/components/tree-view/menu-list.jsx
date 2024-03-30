import React from "react";
import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem, i) => <MenuItem key={i} item={listItem} />)
        : null}
    </ul>
  );
}

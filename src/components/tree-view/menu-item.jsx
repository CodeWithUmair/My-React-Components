import React, { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }

  console.log(displayCurrentChildren);
  return (
    <li>
      <div className="menu-item">
        <p onClick={() => handleToggleChildren(item.label)}>
          {item.label}
          {item && item.children && item.children.length ? (
            <span style={{ cursor: "pointer" }}>
              {displayCurrentChildren[item.label] ? (
                <FaMinus color="#fff" />
              ) : (
                <FaPlus color="#fff" />
              )}
            </span>
          ) : null}
        </p>
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

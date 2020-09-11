import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./AccentDetailsMenu.scss";
export default function AccentDetailsMenu(props) {
  const [menuActive, setMenuActive] = useState(false);
  console.log(props);
  console.log(menuActive);
  return (
    <nav className="accent-details-menu">
      <i
        onClick={() => setMenuActive(!menuActive)}
        class={`fas fa-2x fa-ellipsis-${menuActive ? "h" : "v"}`}
      ></i>
      <menu className="accent-details-menu-content">
        <NavLink exact to={`${props.url}`}>
          A
        </NavLink>
        <NavLink exact to={`${props.url}/words`}>
          B
        </NavLink>
        <NavLink exact to={`${props.url}/videos`}>
          C
        </NavLink>
        <NavLink exact to={`${props.url}/people`}>
          D
        </NavLink>
      </menu>
    </nav>
  );
}

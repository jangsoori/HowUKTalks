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
      <menu
        className={`accent-details-menu-content accent-details-menu-content${
          menuActive ? "-active" : ""
        }`}
      >
        <NavLink
          className="accent-details-menu-link"
          activeClassName="accent-details-menu-link-active"
          exact
          to={`${props.url}`}
        >
          <i class="fas fa-2x fa-info"></i>
        </NavLink>
        <NavLink
          className="accent-details-menu-link"
          activeClassName="accent-details-menu-link-active"
          exact
          to={`${props.url}/words`}
        >
          <i class="fas fa-2x fa-book"></i>
        </NavLink>
        <NavLink
          className="accent-details-menu-link"
          activeClassName="accent-details-menu-link-active"
          exact
          to={`${props.url}/videos`}
        >
          <i class="fas fa-2x fa-video"></i>
        </NavLink>
        <NavLink
          className="accent-details-menu-link"
          activeClassName="accent-details-menu-link-active"
          exact
          to={`${props.url}/people`}
        >
          <i class="fas fa-2x fa-user-friends"></i>
        </NavLink>
      </menu>
    </nav>
  );
}
import React from "react";
import { NavLink } from "react-router-dom";
import "./AccentDetailsMenu.scss";
import history from "../../history";

export default function AccentDetailsMenu(props) {
  return (
    <nav className="accent-details-menu">
      <menu
        className={`accent-details-menu-content accent-details-menu-content`}
      >
        <NavLink
          className="accent-details-menu-link"
          activeClassName="accent-details-menu-link-active"
          exact
          to={`${props.url}/words`}
        >
          <i className="fas fa-2x fa-book"></i>
        </NavLink>
        <NavLink
          className="accent-details-menu-link"
          activeClassName="accent-details-menu-link-active"
          exact
          to={`${props.url}/videos`}
        >
          <i className="fas fa-2x fa-video"></i>
        </NavLink>
        {/* <NavLink
          className="accent-details-menu-link"
          activeClassName="accent-details-menu-link-active"
          exact
          to={`${props.url}/people`}
        >
          <i class="fas fa-2x fa-user-friends"></i>
        </NavLink> */}
      </menu>
      <i
        className="fas fa-2x fa-times accent-details-close"
        onClick={() => history.push("/")}
      ></i>
    </nav>
  );
}

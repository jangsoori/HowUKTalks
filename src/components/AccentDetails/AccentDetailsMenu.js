import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./AccentDetailsMenu.scss";
import history from "../../history";

export default function AccentDetailsMenu(props) {
  const [menuActive, setMenuActive] = useState(false);
  //Handle clicking outside of menu, if clicked, close it
  const menuRef = useRef();
  // props.appRef.current.onclick = (e) => {
  //   if (!menuRef.current.contains(e.target)) {
  //     setMenuActive(false);
  //     console.log("Clicked outside");
  //   }
  // };
  return (
    <nav className="accent-details-menu">
      <i
        className="fas fa-2x fa-times accent-details-close"
        onClick={() => history.push("/")}
      ></i>
      <i
        onClick={(e) => {
          setMenuActive(!menuActive);
        }}
        className={`fas fa-2x fa-ellipsis-${menuActive ? "h" : "v"}`}
      ></i>
      <menu
        ref={menuRef}
        className={`accent-details-menu-content accent-details-menu-content${
          menuActive ? "-active" : ""
        }`}
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
    </nav>
  );
}

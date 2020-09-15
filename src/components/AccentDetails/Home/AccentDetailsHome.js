import React from "react";
import AccentDetailsTabTitle from "../AccentDetailsTabTitle";
import "./AccentDetailsHome.scss";
import { NavLink } from "react-router-dom";

export default function AccentDetailsHome(props) {
  return (
    <React.Fragment>
      <AccentDetailsTabTitle title="Home" />
      <section className="accent-details-content accent-details-content-home">
        <NavLink
          className="accent-details-home-link"
          exact
          to={`${props.match.url}/words`}
        >
          <p>Vocabulary</p>
          <i className="fas fa-8x fa-book"></i>
        </NavLink>
        <NavLink
          className="accent-details-home-link"
          exact
          to={`${props.match.url}/videos`}
        >
          <p>Videos</p>
          <i className="fas fa-8x fa-video"></i>
        </NavLink>
      </section>
    </React.Fragment>
  );
}

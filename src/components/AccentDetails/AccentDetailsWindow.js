import React, { useEffect } from "react";
import { connect } from "react-redux";
import { selectAccent, getAccent } from "../../redux/actions";

import "./AccentDetailsWindow.scss";
import AccentDetailsWindowContent from "./AccentDetailsWindowContent";
import AccentDetailsMenu from "./AccentDetailsMenu";
export const AccentDetailsWindow = (props) => {
  const { accent, getAccent } = props;
  useEffect(() => {
    getAccent(props.match.params.id);
  }, []);
  if (!accent) {
    return null;
  }
  return (
    <section className="accent-details-window grid">
      <section className="accent-details-window-header grid">
        <h1 className="accent-details-window-header-text"> {accent.name}</h1>
        <nav className="accent-details-window-header-menu">
          <AccentDetailsMenu url={props.match.url} />
        </nav>
      </section>
      <section className="accent-details-window-content">
        <AccentDetailsWindowContent accent={accent} />
      </section>
    </section>
  );

  // <div className="accent-details-window">
  //   <div className="accent-details-header">
  //     {" "}
  //     <h2 className="accent-details-title">{accent.name}</h2>
  //   </div>
  //   <div className="accent-details-nav">
  //     <NavLink
  //       activeClassName="accent-details-link active"
  //       exact
  //       to={`${props.match.url}/`}
  //       className="accent-details-link"
  //     >
  //       Info
  //     </NavLink>
  //     <NavLink
  //       activeClassName="accent-details-link active"
  //       to={`${props.match.url}/words`}
  //       className="accent-details-link"
  //     >
  //       Words
  //     </NavLink>
  //     <NavLink
  //       activeClassName="accent-details-link active"
  //       to={`${props.match.url}/videos`}
  //       className="accent-details-link"
  //     >
  //       Videos
  //     </NavLink>
  //     <NavLink
  //       activeClassName="accent-details-link active"
  //       to={`${props.match.url}/people`}
  //       className="accent-details-link"
  //     >
  //       Famous people
  //     </NavLink>
  //   </div>
  //   <div className="accent-details-content">
  //     <Switch>
  //       <Route
  //         exact
  //         path={`/${accent.id}/words`}
  //         component={AccentDetailsWords}
  //       />
  //       <Route
  //         exact
  //         path={`/${accent.id}/videos`}
  //         component={AccentDetailsVideos}
  //       />
  //     </Switch>
  //   </div>
  //   <button
  //     onClick={() => history.push("/")}
  //     className="accent-details-close"
  //   >
  //     Close
  //   </button>
  // </div>
};

const mapStateToProps = (state, ownProps) => ({
  accent: state.accents[ownProps.match.params.id],
});

export default connect(mapStateToProps, { selectAccent, getAccent })(
  AccentDetailsWindow
);

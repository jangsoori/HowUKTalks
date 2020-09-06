import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, Switch, Route } from "react-router-dom";
import "./Details.scss";
import { selectAccent, getAccent } from "../redux/actions";
import DetailsWords from "./DetailsWords";
import history from "../history";
import DetailsVideos from "./DetailsVideos";
export const Details = (props) => {
  const { accent, getAccent } = props;
  useEffect(() => {
    getAccent(props.match.params.id);
  }, []);
  if (!accent) {
    return null;
  }
  return (
    <div className="accent-details">
      <div className="accent-details-header">
        {" "}
        <h2 className="accent-details-title">{accent.name}</h2>
      </div>
      <div className="accent-details-nav">
        <NavLink
          activeClassName="accent-details-link active"
          exact
          to={`${props.match.url}/`}
          className="accent-details-link"
        >
          Info
        </NavLink>
        <NavLink
          activeClassName="accent-details-link active"
          to={`${props.match.url}/words`}
          className="accent-details-link"
        >
          Words
        </NavLink>
        <NavLink
          activeClassName="accent-details-link active"
          to={`${props.match.url}/videos`}
          className="accent-details-link"
        >
          Videos
        </NavLink>
        <NavLink
          activeClassName="accent-details-link active"
          to={`${props.match.url}/people`}
          className="accent-details-link"
        >
          Famous people
        </NavLink>
      </div>
      <div className="accent-details-content">
        <Switch>
          <Route exact path={`/${accent.id}/words`} component={DetailsWords} />
          <Route
            exact
            path={`/${accent.id}/videos`}
            component={DetailsVideos}
          />
        </Switch>
      </div>
      <button
        onClick={() => history.push("/")}
        className="accent-details-close"
      >
        Close
      </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  accent: state.accents[ownProps.match.params.id],
});

export default connect(mapStateToProps, { selectAccent, getAccent })(Details);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink, Switch, Route } from "react-router-dom";
import "./Details.scss";
import { selectAccent, getAccent } from "../redux/actions";
import DetailsWords from "./DetailsWords";
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
      <div className="accent-details-nav">
        <h2 className="accent-details-title">{accent.name}</h2>
        <NavLink
          to={`${props.match.url}/words`}
          className="accent-details-link"
        >
          Words
        </NavLink>
        <NavLink
          to={`${props.match.url}/videos`}
          className="accent-details-link"
        >
          Videos
        </NavLink>
      </div>
      <div className="accent-details-content">
        <Switch>
          <Route exact path={`/${accent.id}/words`} component={DetailsWords} />
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  accent: state.accents[ownProps.match.params.id],
});

export default connect(mapStateToProps, { selectAccent, getAccent })(Details);

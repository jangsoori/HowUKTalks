import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./Details.scss";
import { selectAccent } from "../redux/actions";
export const Details = (props) => {
  const { accent } = props;
  if (!accent) {
    return null;
  }
  return (
    <div className="accent-details">
      <div className="accent-details-nav">
        <h2 className="accent-details-title">{accent.name}</h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  accent: state.accents[ownProps.match.params.id],
});

export default connect(mapStateToProps, { selectAccent })(Details);

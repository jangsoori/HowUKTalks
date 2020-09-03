import React, { Component } from "react";
import { connect } from "react-redux";

export const DetailsWords = (props) => {
  const { accent } = props;
  console.log(accent);
  return (
    <React.Fragment>
      <h2 className="details-content-title">Words</h2>
      <h2 className="details-content-main">Words</h2>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  accent: state.selectedAccent,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsWords);

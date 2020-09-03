import React, { Component } from "react";
import { connect } from "react-redux";
import "./DetailsWords.scss";
export const DetailsWords = (props) => {
  const { accent } = props;
  if (!accent) {
    return null;
  }
  const renderWords = () => {
    return accent.words.map((word) => {
      return <p>{word}</p>;
    });
  };
  return (
    <React.Fragment>
      <div className="accent-details-content-words">{renderWords()}</div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  accent: state.selectedAccent,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsWords);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Popup } from "react-map-gl";
import { hoverAccent } from "../redux/actions";

function Preview({ accent, hoverAccent, preview }) {
  return (
    preview && (
      <Popup
        tipSize={5}
        anchor="top"
        longitude={preview.coords.lng}
        latitude={preview.coords.lat}
        closeOnClick={false}
        // onClose={() => hoverAccent(null)}
      >
        {preview.name}
      </Popup>
    )
  );
}

const mapStateToProps = (state) => ({
  accent: state.selectedAccent,
  preview: state.hoveredAccent,
});

export default connect(mapStateToProps, { hoverAccent })(Preview);

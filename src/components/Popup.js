import React, { Component } from "react";
import { connect } from "react-redux";
import { selectAccent } from "../redux/actions";
import { Popup as MapPopup } from "react-map-gl";
import "./Popup.css";

function Popup({ accent, selectAccent }) {
  return (
    accent && (
      <MapPopup
        tipSize={5}
        anchor="top"
        longitude={accent.coords.lng}
        latitude={accent.coords.lat}
        closeOnClick={false}
        onClose={() => selectAccent(null)}
      >
        {accent.name}
      </MapPopup>
    )
  );
}

const mapStateToProps = (state) => ({
  accent: state.selectedAccent,
});

export default connect(mapStateToProps, { selectAccent })(Popup);

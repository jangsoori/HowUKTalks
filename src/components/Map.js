import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Map.scss";
import { getAccents, selectAccent } from "../redux/actions";
import Markers from "./Markers";
import { Route } from "react-router-dom";

import { GoogleMap, LoadScript } from "@react-google-maps/api";
import AccentDetailsWindow from "./AccentDetails/AccentDetailsWindow";

function Map(props) {
  const { data, getAccents } = props;
  console.log(props);
  useEffect(() => {
    getAccents();
  }, []);
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 54.55,
    lng: -2.4333,
  };
  return (
    <div className="map">
      <Route path="/">
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={6}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <Markers data={data} />
            <Route path="/:id" component={AccentDetailsWindow} />

            <></>
          </GoogleMap>
        </LoadScript>
      </Route>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { data: state.accents };
};
export default connect(mapStateToProps, { getAccents, selectAccent })(Map);

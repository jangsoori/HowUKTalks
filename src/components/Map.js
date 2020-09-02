import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ReactMapGL from "react-map-gl";
import Popup from "./Popup";
import "./Map.css";
import { getAccents } from "../redux/actions";
import Markers from "./Markers";
import Preview from "./Preview";

function Map({ data, getAccents }) {
  //Set map location for UK
  const [viewport, setViewport] = useState({
    height: "100vh",
    width: "100vw",
    latitude: 54.55,
    longitude: -2.4333,
    zoom: 4,
  });

  useEffect(() => {
    getAccents();
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_ACCESS_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <Markers data={data} />
      <Preview />
      <Popup />
    </ReactMapGL>
  );
}

const mapStateToProps = (state) => {
  return { data: state.accents };
};
export default connect(mapStateToProps, { getAccents })(Map);
